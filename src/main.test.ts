import { Main } from "./main";

describe("Default test", () => {
  it("should work", () => {
    const main = new Main("Hello world");
    expect(main.getParam()).toBe("Hello world");
  });
});


function add(expression:string):string {
    if (expression === ''){
        return '0';
    }




    return expression;
}





describe("String Calculator", ()=> {
    // ''-> return 0
    it ('returns zero when expression is empty', ()=> {
        expect(add('')).toBe('0')}
    )})
//'1' =>1

    it('returns the number when has only one number',()=>{
        expect(add('1')).toBe('1')
        expect(add('10')).toBe('10')
        expect(add('100')).toBe('100')
    })
//'1,1 => 2

it('returns the number when has only one number',()=>{
    expect(add('1,1')).toBe('2')
    expect(add('1,10')).toBe('11')
})



