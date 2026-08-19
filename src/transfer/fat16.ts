/**
 * FAT16 disk image builder.
 *
 * Older industrial controls read a USB stick or CF card only when it is
 * FAT16, under 2 GB, with 8.3 file names. Android cannot present itself as a
 * USB mass-storage device without root — the gadget driver was removed from
 * the platform in favour of MTP, which no control speaks — so the honest path
 * is to build the filesystem image here and let the operator write it to real
 * media once. After that the stick stays formatted and only the files change.
 *
 * The image is produced byte-for-byte deterministically: timestamps and the
 * volume serial are caller-supplied, so the same programs always produce the
 * same image.
 */

export const SECTOR_SIZE = 512;
const RESERVED_SECTORS = 1;
const FAT_COPIES = 2;
const ROOT_ENTRIES = 512;
const DIR_ENTRY_SIZE = 32;
const MEDIA_DESCRIPTOR = 0xf8;

/** FAT16 is defined by its cluster count; outside this range it is FAT12 or FAT32. */
const MIN_FAT16_CLUSTERS = 4085;
const MAX_FAT16_CLUSTERS = 65524;

/** Controls that need FAT16 also tend to reject anything above the 2 GB line. */
export const MAX_IMAGE_BYTES = 2 * 1024 * 1024 * 1024;

export type Fat16File = {
  /** Requested name; converted to 8.3 for the image. */
  name: string;
  contents: string;
};

export type Fat16Options = {
  /** Total image size in bytes. Rounded up to a whole sector. */
  sizeBytes?: number;
  /** Volume label, upper-cased and padded to 11 characters. */
  label?: string;
  /** Volume serial number. */
  volumeId?: number;
  /** Timestamp stamped on every directory entry. */
  date?: { year: number; month: number; day: number; hours: number; minutes: number; seconds: number };
};

export type Fat16Entry = {
  requestedName: string;
  /** The 8.3 name actually written into the image. */
  storedName: string;
  sizeBytes: number;
};

export type Fat16Result =
  | { ok: true; image: Uint8Array; entries: Fat16Entry[]; clusterSizeBytes: number; freeBytes: number }
  | { ok: false; reason: string };

const DEFAULT_SIZE_BYTES = 64 * 1024 * 1024;
const DEFAULT_DATE = { year: 2026, month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 };

export function buildFat16Image(files: Fat16File[], options: Fat16Options = {}): Fat16Result {
  const requestedSize = options.sizeBytes ?? DEFAULT_SIZE_BYTES;
  if (requestedSize > MAX_IMAGE_BYTES) {
    return { ok: false, reason: "FAT16 media must stay under 2 GB." };
  }
  if (files.length === 0) {
    return { ok: false, reason: "There are no programs to write." };
  }
  if (files.length > ROOT_ENTRIES - 1) {
    return { ok: false, reason: `A FAT16 root directory holds at most ${ROOT_ENTRIES - 1} files.` };
  }

  const totalSectors = Math.floor(requestedSize / SECTOR_SIZE);
  const layout = chooseLayout(totalSectors);
  if (!layout) {
    return {
      ok: false,
      reason: "No FAT16 cluster size fits that image size. Pick a size between 16 MB and 2 GB.",
    };
  }

  const encoder = new TextEncoder();
  const payloads = files.map((file) => encoder.encode(file.contents));
  const clusterBytes = layout.sectorsPerCluster * SECTOR_SIZE;
  const neededClusters = payloads.reduce(
    (sum, payload) => sum + Math.max(1, Math.ceil(payload.length / clusterBytes)),
    0,
  );
  if (neededClusters > layout.clusterCount) {
    return {
      ok: false,
      reason: `The programs need ${neededClusters} clusters but the image holds ${layout.clusterCount}.`,
    };
  }

  const image = new Uint8Array(totalSectors * SECTOR_SIZE);
  const view = new DataView(image.buffer);

  writeBootSector(image, view, layout, totalSectors, options);

  const fatStart = RESERVED_SECTORS * SECTOR_SIZE;
  const fatBytes = layout.sectorsPerFat * SECTOR_SIZE;
  const rootStart = fatStart + fatBytes * FAT_COPIES;
  const rootBytes = (ROOT_ENTRIES * DIR_ENTRY_SIZE);
  const dataStart = rootStart + rootBytes;

  // FAT entries 0 and 1 are reserved signatures, so real data starts at 2.
  const fat = new Uint16Array(layout.sectorsPerFat * SECTOR_SIZE / 2);
  fat[0] = 0xff00 | MEDIA_DESCRIPTOR;
  fat[1] = 0xffff;

  const date = options.date ?? DEFAULT_DATE;
  const entries: Fat16Entry[] = [];
  const usedNames = new Set<string>();
  let nextCluster = 2;
  let rootOffset = rootStart;

  const label = normalizeLabel(options.label ?? "SETUPNINJA");
  writeVolumeLabelEntry(image, view, rootOffset, label, date);
  rootOffset += DIR_ENTRY_SIZE;

  for (const [index, file] of files.entries()) {
    const payload = payloads[index];
    const storedName = uniqueShortName(file.name, usedNames);
    usedNames.add(storedName);

    const clusterCount = Math.max(1, Math.ceil(payload.length / clusterBytes));
    const firstCluster = nextCluster;
    for (let i = 0; i < clusterCount; i++) {
      const cluster = firstCluster + i;
      const isLast = i === clusterCount - 1;
      fat[cluster] = isLast ? 0xffff : cluster + 1;
      const offset = dataStart + (cluster - 2) * clusterBytes;
      image.set(payload.subarray(i * clusterBytes, (i + 1) * clusterBytes), offset);
    }
    nextCluster += clusterCount;

    writeDirectoryEntry(image, view, rootOffset, storedName, firstCluster, payload.length, date);
    rootOffset += DIR_ENTRY_SIZE;
    entries.push({ requestedName: file.name, storedName, sizeBytes: payload.length });
  }

  // Both FAT copies must be identical; a control that reads the second one
  // should see the same chains.
  for (let copy = 0; copy < FAT_COPIES; copy++) {
    const offset = fatStart + copy * fatBytes;
    for (let i = 0; i < fat.length; i++) {
      view.setUint16(offset + i * 2, fat[i], true);
    }
  }

  const freeClusters = layout.clusterCount - (nextCluster - 2);
  return {
    ok: true,
    image,
    entries,
    clusterSizeBytes: clusterBytes,
    freeBytes: freeClusters * clusterBytes,
  };
}

type Layout = {
  sectorsPerCluster: number;
  sectorsPerFat: number;
  clusterCount: number;
};

/**
 * Pick the smallest cluster size that lands the cluster count inside the FAT16
 * range. Smaller clusters waste less space on the short text files a control
 * actually reads.
 */
function chooseLayout(totalSectors: number): Layout | null {
  const rootSectors = Math.ceil((ROOT_ENTRIES * DIR_ENTRY_SIZE) / SECTOR_SIZE);
  for (const sectorsPerCluster of [4, 8, 16, 32, 64]) {
    // sectorsPerFat depends on the cluster count, which depends on sectorsPerFat.
    // Two passes settle it for every size in range.
    let sectorsPerFat = 1;
    let clusterCount = 0;
    for (let pass = 0; pass < 4; pass++) {
      const dataSectors = totalSectors - RESERVED_SECTORS - rootSectors - sectorsPerFat * FAT_COPIES;
      if (dataSectors <= 0) break;
      clusterCount = Math.floor(dataSectors / sectorsPerCluster);
      sectorsPerFat = Math.ceil(((clusterCount + 2) * 2) / SECTOR_SIZE);
    }
    if (clusterCount >= MIN_FAT16_CLUSTERS && clusterCount <= MAX_FAT16_CLUSTERS) {
      return { sectorsPerCluster, sectorsPerFat, clusterCount };
    }
  }
  return null;
}

function writeBootSector(
  image: Uint8Array,
  view: DataView,
  layout: Layout,
  totalSectors: number,
  options: Fat16Options,
): void {
  // Short jump to boot code, as every FAT implementation expects at offset 0.
  image[0] = 0xeb;
  image[1] = 0x3c;
  image[2] = 0x90;
  writeAscii(image, 3, "MSWIN4.1", 8);

  view.setUint16(11, SECTOR_SIZE, true);
  image[13] = layout.sectorsPerCluster;
  view.setUint16(14, RESERVED_SECTORS, true);
  image[16] = FAT_COPIES;
  view.setUint16(17, ROOT_ENTRIES, true);
  // The 16-bit total is only valid below 65536 sectors; above that it must be 0
  // and the 32-bit field carries the count.
  view.setUint16(19, totalSectors < 0x10000 ? totalSectors : 0, true);
  image[21] = MEDIA_DESCRIPTOR;
  view.setUint16(22, layout.sectorsPerFat, true);
  view.setUint16(24, 63, true);
  view.setUint16(26, 255, true);
  view.setUint32(28, 0, true);
  view.setUint32(32, totalSectors < 0x10000 ? 0 : totalSectors, true);

  image[36] = 0x80;
  image[37] = 0;
  image[38] = 0x29;
  view.setUint32(39, (options.volumeId ?? 0x5345544e) >>> 0, true);
  writeAscii(image, 43, normalizeLabel(options.label ?? "SETUPNINJA"), 11);
  writeAscii(image, 54, "FAT16", 8);

  image[510] = 0x55;
  image[511] = 0xaa;
}

function writeVolumeLabelEntry(
  image: Uint8Array,
  view: DataView,
  offset: number,
  label: string,
  date: NonNullable<Fat16Options["date"]>,
): void {
  writeAscii(image, offset, label, 11);
  image[offset + 11] = 0x08; // volume label attribute
  view.setUint16(offset + 22, packTime(date), true);
  view.setUint16(offset + 24, packDate(date), true);
}

function writeDirectoryEntry(
  image: Uint8Array,
  view: DataView,
  offset: number,
  shortName: string,
  firstCluster: number,
  sizeBytes: number,
  date: NonNullable<Fat16Options["date"]>,
): void {
  const [stem, extension] = splitShortName(shortName);
  writeAscii(image, offset, stem, 8);
  writeAscii(image, offset + 8, extension, 3);
  image[offset + 11] = 0x20; // archive
  view.setUint16(offset + 14, packTime(date), true);
  view.setUint16(offset + 16, packDate(date), true);
  view.setUint16(offset + 18, packDate(date), true);
  view.setUint16(offset + 20, 0, true); // high cluster word is always 0 on FAT16
  view.setUint16(offset + 22, packTime(date), true);
  view.setUint16(offset + 24, packDate(date), true);
  view.setUint16(offset + 26, firstCluster, true);
  view.setUint32(offset + 28, sizeBytes, true);
}

/** FAT time: hours in bits 15-11, minutes 10-5, two-second units 4-0. */
function packTime(date: NonNullable<Fat16Options["date"]>): number {
  return ((date.hours & 31) << 11) | ((date.minutes & 63) << 5) | ((date.seconds >> 1) & 31);
}

/** FAT date: years since 1980 in bits 15-9, month 8-5, day 4-0. */
function packDate(date: NonNullable<Fat16Options["date"]>): number {
  const year = Math.max(0, Math.min(127, date.year - 1980));
  return (year << 9) | ((date.month & 15) << 5) | (date.day & 31);
}

function writeAscii(image: Uint8Array, offset: number, text: string, length: number): void {
  for (let i = 0; i < length; i++) {
    const code = i < text.length ? text.charCodeAt(i) : 0x20;
    image[offset + i] = code < 128 ? code : 0x5f;
  }
}

function normalizeLabel(label: string): string {
  return sanitizeShortNameChars(label.toUpperCase()).slice(0, 11).padEnd(11, " ");
}

/** Characters FAT8.3 forbids, folded to underscores. */
function sanitizeShortNameChars(text: string): string {
  return text.replace(/[^A-Z0-9_\-$~!#%&'()@^{}]/g, "_");
}

export function toShortName(name: string): string {
  const leaf = name.replace(/\\/g, "/").split("/").pop() ?? name;
  const dot = leaf.lastIndexOf(".");
  const rawStem = (dot > 0 ? leaf.slice(0, dot) : leaf).toUpperCase();
  const rawExtension = (dot > 0 ? leaf.slice(dot + 1) : "").toUpperCase();

  const stem = sanitizeShortNameChars(rawStem).replace(/^_+/, "").slice(0, 8) || "PROGRAM";
  const extension = sanitizeShortNameChars(rawExtension).slice(0, 3);
  return extension ? `${stem}.${extension}` : stem;
}

/**
 * 8.3 names collide easily once long names are truncated, so collisions get the
 * classic `~1` treatment rather than silently overwriting a program.
 */
function uniqueShortName(name: string, used: Set<string>): string {
  const candidate = toShortName(name);
  if (!used.has(candidate)) return candidate;

  const [stem, extension] = splitShortName(candidate);
  const trimmedStem = stem.trim();
  for (let suffix = 1; suffix < 1000; suffix++) {
    const tail = `~${suffix}`;
    const head = trimmedStem.slice(0, Math.max(1, 8 - tail.length));
    const next = extension.trim() ? `${head}${tail}.${extension.trim()}` : `${head}${tail}`;
    if (!used.has(next)) return next;
  }
  throw new Error(`Could not find a free 8.3 name for ${name}`);
}

function splitShortName(shortName: string): [string, string] {
  const dot = shortName.indexOf(".");
  if (dot < 0) return [shortName.padEnd(8, " "), "   "];
  return [shortName.slice(0, dot).padEnd(8, " "), shortName.slice(dot + 1).padEnd(3, " ")];
}

export function fat16ImageName(label: string): string {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "setupninja"}-fat16.img`;
}
