import { describe, expect, it } from "vitest";
import {
  MAX_IMAGE_BYTES,
  SECTOR_SIZE,
  buildFat16Image,
  fat16ImageName,
  toShortName,
  type Fat16File,
} from "./fat16";

const DATE = { year: 2026, month: 8, day: 19, hours: 14, minutes: 30, seconds: 0 };

function build(files: Fat16File[], sizeBytes = 16 * 1024 * 1024) {
  const result = buildFat16Image(files, { label: "SETUPNINJA", date: DATE, sizeBytes });
  if (!result.ok) throw new Error(result.reason);
  return result;
}

const PROGRAM: Fat16File = { name: "bracket.nc", contents: "%\nO0001\nG20 G90\nM30\n%\n" };

describe("FAT16 image structure", () => {
  it("writes a boot sector every FAT driver recognises", () => {
    const { image } = build([PROGRAM]);
    const view = new DataView(image.buffer);

    expect(image[0]).toBe(0xeb);
    expect(image[2]).toBe(0x90);
    expect(view.getUint16(11, true)).toBe(SECTOR_SIZE);
    expect(image[16]).toBe(2); // two FAT copies
    expect(view.getUint16(17, true)).toBe(512); // root entries
    expect(image[21]).toBe(0xf8); // fixed-disk media descriptor
    expect(image[38]).toBe(0x29); // extended boot signature
    expect(image[510]).toBe(0x55);
    expect(image[511]).toBe(0xaa);
    expect(new TextDecoder().decode(image.subarray(54, 59))).toBe("FAT16");
  });

  it("labels the volume in both the boot sector and the root directory", () => {
    const { image } = build([PROGRAM]);
    const decoder = new TextDecoder();
    expect(decoder.decode(image.subarray(43, 54)).trim()).toBe("SETUPNINJA");

    const rootStart = rootDirectoryStart(image);
    expect(decoder.decode(image.subarray(rootStart, rootStart + 11)).trim()).toBe("SETUPNINJA");
    expect(image[rootStart + 11]).toBe(0x08); // volume label attribute
  });

  it("reserves FAT entries 0 and 1 with the media signature", () => {
    const { image } = build([PROGRAM]);
    const view = new DataView(image.buffer);
    const fatStart = SECTOR_SIZE;

    expect(view.getUint16(fatStart, true)).toBe(0xfff8);
    expect(view.getUint16(fatStart + 2, true)).toBe(0xffff);
  });

  it("keeps both FAT copies byte-identical", () => {
    const { image } = build([PROGRAM, { name: "second.nc", contents: "G20\nM30\n" }]);
    const view = new DataView(image.buffer);
    const sectorsPerFat = view.getUint16(22, true);
    const fatBytes = sectorsPerFat * SECTOR_SIZE;

    const first = image.subarray(SECTOR_SIZE, SECTOR_SIZE + fatBytes);
    const second = image.subarray(SECTOR_SIZE + fatBytes, SECTOR_SIZE + fatBytes * 2);
    expect(firstDifference(first, second)).toBe(-1);
  });

  it("lands the cluster count inside the FAT16 range", () => {
    for (const megabytes of [16, 64, 256, 1024, 2000]) {
      const result = buildFat16Image([PROGRAM], {
        sizeBytes: megabytes * 1024 * 1024,
        date: DATE,
      });
      expect(result.ok).toBe(true);
      if (!result.ok) continue;

      const view = new DataView(result.image.buffer);
      const sectorsPerCluster = result.image[13];
      const sectorsPerFat = view.getUint16(22, true);
      const totalSectors = view.getUint16(19, true) || view.getUint32(32, true);
      const rootSectors = (512 * 32) / SECTOR_SIZE;
      const clusters = Math.floor((totalSectors - 1 - rootSectors - sectorsPerFat * 2) / sectorsPerCluster);

      expect(clusters).toBeGreaterThanOrEqual(4085);
      expect(clusters).toBeLessThanOrEqual(65524);
    }
  });

  it("uses the 32-bit sector count once the image passes 65535 sectors", () => {
    const { image } = build([PROGRAM], 64 * 1024 * 1024);
    const view = new DataView(image.buffer);

    expect(view.getUint16(19, true)).toBe(0);
    expect(view.getUint32(32, true)).toBe((64 * 1024 * 1024) / SECTOR_SIZE);
  });
});

describe("FAT16 file writing", () => {
  it("stores file contents in the data area", () => {
    const result = build([PROGRAM]);
    const text = new TextDecoder().decode(result.image);

    expect(text).toContain("O0001");
    expect(result.entries[0].sizeBytes).toBe(PROGRAM.contents.length);
  });

  it("chains a file across several clusters and terminates the chain", () => {
    const result = build([{ name: "big.nc", contents: "X".repeat(50_000) }]);
    const view = new DataView(result.image.buffer);
    const clusters = Math.ceil(50_000 / result.clusterSizeBytes);
    expect(clusters).toBeGreaterThan(1);

    // Clusters 2..n-1 point at their successor; the last one ends the chain.
    for (let i = 0; i < clusters - 1; i++) {
      expect(view.getUint16(SECTOR_SIZE + (2 + i) * 2, true)).toBe(3 + i);
    }
    expect(view.getUint16(SECTOR_SIZE + (2 + clusters - 1) * 2, true)).toBe(0xffff);
  });

  it("records the file size and first cluster in the directory entry", () => {
    const result = build([PROGRAM]);
    const view = new DataView(result.image.buffer);
    const entry = rootDirectoryStart(result.image) + 32; // after the volume label

    expect(view.getUint16(entry + 26, true)).toBe(2);
    expect(view.getUint32(entry + 28, true)).toBe(PROGRAM.contents.length);
    expect(view.getUint16(entry + 20, true)).toBe(0); // FAT16 has no high cluster word
  });

  it("packs the supplied timestamp into FAT date and time fields", () => {
    const result = build([PROGRAM]);
    const view = new DataView(result.image.buffer);
    const entry = rootDirectoryStart(result.image) + 32;

    const time = view.getUint16(entry + 22, true);
    const date = view.getUint16(entry + 24, true);
    expect(time >> 11).toBe(14);
    expect((time >> 5) & 63).toBe(30);
    expect((date >> 9) + 1980).toBe(2026);
    expect((date >> 5) & 15).toBe(8);
    expect(date & 31).toBe(19);
  });

  it("produces identical bytes for identical input", () => {
    const a = build([PROGRAM]);
    const b = build([PROGRAM]);
    expect(firstDifference(a.image, b.image)).toBe(-1);
  });
});

describe("8.3 name conversion", () => {
  it("upper-cases and keeps a short name intact", () => {
    expect(toShortName("bracket.nc")).toBe("BRACKET.NC");
  });

  it("truncates a long stem to eight characters", () => {
    expect(toShortName("clayton-bracket-rev-b.nc")).toBe("CLAYTON-.NC");
  });

  it("replaces characters FAT does not allow", () => {
    expect(toShortName("part +1.nc")).toBe("PART__1.NC");
  });

  it("falls back to a usable stem when nothing survives", () => {
    expect(toShortName(".nc")).toBe("NC");
    expect(toShortName("  .nc")).toBe("PROGRAM.NC");
  });

  it("keeps only the leaf of a path", () => {
    expect(toShortName("programs/sub/part.nc")).toBe("PART.NC");
  });

  it("disambiguates names that truncate to the same 8.3 form", () => {
    const result = build([
      { name: "a-very-long-name-one.nc", contents: "G20\n" },
      { name: "a-very-long-name-two.nc", contents: "G20\n" },
      { name: "a-very-long-name-three.nc", contents: "G20\n" },
    ]);
    const stored = result.entries.map((entry) => entry.storedName);

    expect(new Set(stored).size).toBe(3);
    expect(stored[1]).toMatch(/~1\.NC$/);
    expect(stored[2]).toMatch(/~2\.NC$/);
  });
});

describe("FAT16 limits", () => {
  it("refuses media at or above the 2 GB FAT16 line", () => {
    const result = buildFat16Image([PROGRAM], { sizeBytes: MAX_IMAGE_BYTES + SECTOR_SIZE });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toMatch(/2 GB/);
  });

  it("refuses an empty program set", () => {
    expect(buildFat16Image([], {}).ok).toBe(false);
  });

  it("refuses more files than a FAT16 root directory can hold", () => {
    const many = Array.from({ length: 512 }, (_, i) => ({ name: `p${i}.nc`, contents: "G20\n" }));
    const result = buildFat16Image(many, { sizeBytes: 64 * 1024 * 1024 });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toMatch(/root directory/);
  });

  it("refuses programs that do not fit the image", () => {
    const result = buildFat16Image([{ name: "huge.nc", contents: "X".repeat(40 * 1024 * 1024) }], {
      sizeBytes: 16 * 1024 * 1024,
    });
    expect(result.ok).toBe(false);
  });

  it("refuses a size too small to form a FAT16 volume", () => {
    expect(buildFat16Image([PROGRAM], { sizeBytes: 1024 * 1024 }).ok).toBe(false);
  });

  it("slugs an image file name", () => {
    expect(fat16ImageName("Clayton Programs")).toBe("clayton-programs-fat16.img");
  });
});

/** Index of the first differing byte, or -1 when equal. Cheap enough for whole images. */
function firstDifference(a: Uint8Array, b: Uint8Array): number {
  if (a.length !== b.length) return Math.min(a.length, b.length);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return i;
  }
  return -1;
}

function rootDirectoryStart(image: Uint8Array): number {
  const view = new DataView(image.buffer);
  const sectorsPerFat = view.getUint16(22, true);
  return SECTOR_SIZE + sectorsPerFat * 2 * SECTOR_SIZE;
}
