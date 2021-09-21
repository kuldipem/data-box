import { timezones } from "../time";

describe("Given an instance of my Timezone library", () => {
  describe("when I need the name", () => {
    it("should return the name", () => {
      expect(timezones).toBeTruthy();
    });
  });
});
