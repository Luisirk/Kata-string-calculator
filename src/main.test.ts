import {expect} from "vitest";
import {add} from "./main";


// Limitations of the current implementation
// no use split, reduce
// apply simple solution as possible
describe("String Calculator", () => {
  it("returns zero when expression is empty", () => {
    expect(add("")).toBe('0');
  });

  it("returns number when expression is a single number", () => {
    expect(add("1")).toBe('1');
  });


});

