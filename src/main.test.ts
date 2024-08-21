import { Main } from "./main";

describe("Default test", () => {
  it("should work", () => {
    const main = new Main("Hello world");
    expect(main.getParam()).toBe("Hello world");
  });
});

describe("String Calculator", ()=>{
    function add(number: string): string {
        if(number ===''){
            return '0';
        }
        return '1';



    }
    // ''  -> 0
    it ('returns zero when param is empty', ()=>{
        expect(add('')).toBe('0')
    });
    // '1' => 1
    it('returns 1 when param is 1', ()=>{
        expect(add('1')).toBe('1')
    })
    it('return 2 when param is 1,1', ()=>{

        expect(add('1,1')).toBe('2')
    })
})