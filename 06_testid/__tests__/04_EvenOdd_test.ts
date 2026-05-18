import { EvenOdd } from "../04_EvenOdd";

let obj: EvenOdd;

beforeEach(()=>{
    obj = new EvenOdd();
});

test("Even number", ()=>{
    expect(obj.check(4)).toBe("Even");
});

test("Odd number", ()=>{
    expect(obj.check(7)).toBe("Odd");
});

test("Zero is even", ()=>{
    expect(obj.check(0)).toBe("Even");
});