import {expect} from "vitest";
import {add} from "./main";


// Limitations of the current implementation
// no use split, reduce
// apply simple solution as possible
describe("String Calculator", () => {
  it("returns zero when expression is empty", () => {
    expect(add("")).toBe('0');
  });


});

