import { isPositive } from "../01_PositiveNo";

test("positivity", ()=> {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(-3)).toBe(false);
    expect(isPositive(0)).toBe(false);
})