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
    expect(add("2")).toBe('2');
  });

  it("returns sum of two numbers when expression is two numbers separated by comma", () => {
    expect(add("1,2")).toBe('3');
    expect(add("2,3")).toBe('5');
  });
  it('returns sum of two numbers when expression is two numbers separated by comma bigger than 2 digits', () => {
    expect(add("10,3")).toBe('13');
    expect(add("10,10")).toBe('20');
  });
  it('returns sum of multiple numbers when expression is multiple numbers separated by comma', () => {
    expect(add("1,2,3")).toBe('6');
    expect(add("1,2,3,1")).toBe('7');
  });


});

