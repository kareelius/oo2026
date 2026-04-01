import { Calculator } from "../03_Calculator";

let calcobj:Calculator;

//This runs before every test
//One test might change the calculator, 
// if we dont have this next test would start with modified data.
beforeEach(()=>{
    calcobj=new Calculator();
});

test('empty init', ()=>{
    expect(calcobj.getPanelContent()).toBe("");
});

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContent()).toBe("7");
});

test('Multiple input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContent()).toBe("78");
});

test('Clear panel', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContent()).toBe("0");
});