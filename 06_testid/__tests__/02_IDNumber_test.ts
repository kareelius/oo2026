import { IDCode } from "../02_IDNumber";

test("Gender", ()=>{
    expect(new IDCode ("50310041413").gender()).toBe("M")
})