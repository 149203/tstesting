import { utils } from "../app/utils";

describe("Utils test suite", () => {
   // beforeEach(() => {
   //    console.log("TEST ABOUT TO RUN");
   // });

   // beforeAll(() => {
   //    console.log("TESTS STARTING");
   // });

   test.skip("first test", () => {
      const result = utils.toUpperCase("abc");
      expect(result).toBe("ABC");
   });

   test("parse simple url", () => {
      const result = utils.parseUrl("https://github.com/149203/mikezetlow");
      expect(result.href).toBe("https://github.com/149203/mikezetlow");
      expect(result.protocol).toBe("https:");
      expect(result.query).toEqual({});
   });

   test("parse url with query", () => {
      const result = utils.parseUrl(
         "https://github.com/149203/mikezetlow?repository=149203&tab=overview"
      );
      const expectedQuery = {
         repository: "149203",
         tab: "overview",
      };
      expect(result.query).toEqual(expectedQuery); // use toEqual to test objs
   });

   test("invalid URL with try catch", () => {
      // when checking a function for thrown errors, use try catch
      try {
         utils.parseUrl("");
      } catch (error) {
         // Check for any thrown error
         expect(error).toBeInstanceOf(Error);
         // Check for a specific error msg
         expect(error).toHaveProperty("message", "Empty url");
      }
   });

   test.todo("Write more tests");
});
