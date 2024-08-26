import { Main } from "./main";

describe("Default test", () => {
  it("should work", () => {
    const main = new Main("Hello world");
    expect(main.getParam()).toBe("Hello world");
  });
});


function add(expression:string):string {
    // throw new Error('Not implemented yet');
    if(expression === '') {
        return '0'
    }

    let number = expression.split(',');
    let sum = number.reduce((total, element) => {
        return total + parseFloat(element);
    },0);
    return sum.toString();

}





describe("String Calculator", ()=> {
    // ''-> return 0
    it('returns zero when expression is empty', () => {
        expect(add('')).toBe('0')
    })
    //'1' =>1
    it('returns the number when expression is a number', () => {
        expect(add('1')).toBe('1')
    })
    it('returns the number when expression is a number', () => {
        expect(add('3')).toBe('3')
    })
    it('returns the sum of two numbers of a expression', () => {
        expect(add('1,1')).toBe('2')
    })
    it('returns the sum of two numbers of a expression', () => {
        expect(add('4,2')).toBe('6')
    })
})
