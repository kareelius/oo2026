import { Calculator } from "../03_Calculator";

let calcobj: Calculator;

// This runs before every test
beforeEach(() => {
    calcobj = new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContent()).toBe("");
});