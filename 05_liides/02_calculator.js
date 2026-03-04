// Cm → In
var CmToIn = /** @class */ (function () {
    function CmToIn() {
    }
    CmToIn.prototype.calculate = function (x) {
        return x / 2.54;
    };
    CmToIn.prototype.inputUnit = function () {
        return "cm";
    };
    CmToIn.prototype.outputUnit = function () {
        return "in";
    };
    return CmToIn;
}());
// In → Cm
var InToCm = /** @class */ (function () {
    function InToCm() {
    }
    InToCm.prototype.calculate = function (x) {
        return x * 2.54;
    };
    InToCm.prototype.inputUnit = function () {
        return "in";
    };
    InToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InToCm;
}());
// Global variable to hold current calculator
var calculator = new CmToIn();
// Update units in the HTML
function updateUnits() {
    var type1 = document.getElementById("type1");
    var type2 = document.getElementById("type2");
    var input = document.getElementById("input1");
    var answer = document.getElementById("answer");
    type1.innerText = calculator.inputUnit();
    type2.innerText = calculator.outputUnit();
    input.value = "";
    answer.innerText = "";
}
// Perform calculation
function calculate() {
    var input = document.getElementById("input1");
    var answer = document.getElementById("answer");
    var val = parseFloat(input.value);
    if (!isNaN(val)) {
        var result = calculator.calculate(val);
        answer.innerText = result.toFixed(2);
    }
    else {
        answer.innerText = "";
    }
}
// Toggle between Cm → In and In → Cm
function toggleCalculator() {
    calculator = calculator instanceof CmToIn ? new InToCm() : new CmToIn();
    updateUnits();
}
// Setup event listener on page load
function startPage() {
    updateUnits();
    var input = document.getElementById("input1");
    input.addEventListener("input", calculate);
}
// Make sure this runs on page load
window.onload = startPage;
