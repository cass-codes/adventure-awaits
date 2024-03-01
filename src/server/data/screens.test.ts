import { screens } from "./screens";

describe("screen data", () => {
  const screenIds = screens.map((screen) => screen._id);
  it.each(screenIds)("id for screen should only occur once: %s", (screenId) => {
    const count = screenIds.filter((id) => id === screenId).length;
    expect(count).toBe(1);
  });
});
