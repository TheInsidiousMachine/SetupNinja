import { beforeEach, describe, expect, it } from "vitest";
import {
  MACHINE_PROFILE_KEY,
  duplicateMachine,
  getUserMachine,
  loadMachines,
  resetMachines,
  saveMachines,
} from "./machineProfiles";
import { MACHINES } from "./catalog";

function fakeStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    clear: () => map.clear(),
    key: () => null,
    length: 0,
  } as unknown as Storage;
}

describe("machine profile storage", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "localStorage", {
      value: fakeStorage(),
      configurable: true,
      writable: true,
    });
  });

  it("seeds from the catalog on first run", () => {
    const machines = loadMachines();
    expect(machines.map((m) => m.id)).toEqual(MACHINES.map((m) => m.id));
  });

  it("round-trips an edited post config", () => {
    const machines = loadMachines();
    const vmc = machines.find((m) => m.id === "vmc")!;
    vmc.post = { ...vmc.post!, workOffset: "G55", coolant: "mist", blockNumbers: true };
    saveMachines(machines);

    const reloaded = getUserMachine("vmc", loadMachines());
    expect(reloaded.post?.workOffset).toBe("G55");
    expect(reloaded.post?.coolant).toBe("mist");
    expect(reloaded.post?.blockNumbers).toBe(true);
  });

  it("rejects a work offset that is not a real G-code word", () => {
    saveMachines([{ ...MACHINES[0], post: { ...MACHINES[0].post!, workOffset: "DROP TABLE" } }]);
    expect(getUserMachine("knee", loadMachines()).post?.workOffset).toBe("G54");
  });

  it("accepts an extended G54.1 offset", () => {
    saveMachines([{ ...MACHINES[0], post: { ...MACHINES[0].post!, workOffset: "G54.1 P12" } }]);
    expect(getUserMachine("knee", loadMachines()).post?.workOffset).toBe("G54.1 P12");
  });

  it("rejects a program number that is not an O word", () => {
    saveMachines([{ ...MACHINES[2], post: { ...MACHINES[2].post!, programNumber: "9999999" } }]);
    expect(getUserMachine("vmc", loadMachines()).post?.programNumber).toBe("O0001");
  });

  it("keeps an intentionally empty program number", () => {
    saveMachines([{ ...MACHINES[2], post: { ...MACHINES[2].post!, programNumber: "" } }]);
    expect(getUserMachine("vmc", loadMachines()).post?.programNumber).toBe("");
  });

  it("drops profiles missing required physical limits", () => {
    globalThis.localStorage.setItem(
      MACHINE_PROFILE_KEY,
      JSON.stringify([{ id: "bad", name: "Bad", kind: "vmc", maxRpm: 0 }]),
    );
    expect(loadMachines().map((m) => m.id)).toEqual(MACHINES.map((m) => m.id));
  });

  it("falls back to the catalog when storage holds corrupt JSON", () => {
    globalThis.localStorage.setItem(MACHINE_PROFILE_KEY, "{not json");
    expect(loadMachines().length).toBe(MACHINES.length);
  });

  it("gives a duplicated profile a fresh id and marks it user defined", () => {
    const machines = loadMachines();
    const copy = duplicateMachine(machines[0], machines);

    expect(copy.id).not.toBe(machines[0].id);
    expect(machines.some((m) => m.id === copy.id)).toBe(false);
    expect(copy.userDefined).toBe(true);
    expect(copy.post).toBeDefined();
  });

  it("avoids colliding with an existing copy", () => {
    const machines = loadMachines();
    const first = duplicateMachine(machines[0], machines);
    const second = duplicateMachine(machines[0], [...machines, first]);
    expect(second.id).not.toBe(first.id);
  });

  it("restores the catalog on reset", () => {
    saveMachines([{ ...MACHINES[0], name: "Renamed" }]);
    expect(resetMachines().map((m) => m.name)).toEqual(MACHINES.map((m) => m.name));
  });
});
