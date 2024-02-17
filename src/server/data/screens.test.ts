import { screens } from "./screens";

// TODO fix these tests!

describe("screen data", () => {
  it("every screenId is unique", () => {
    const screenIds = new Set();
    for (const screen of screens) {
      if (screenIds.has(screen._id)) {
        throw new Error(`Duplicate screenId: ${screen._id}`);
      }
      screenIds.add(screen._id);
    }
  });
});
