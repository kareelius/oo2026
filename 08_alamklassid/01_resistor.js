var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base abstract class for all resistive components
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    // Calculates current using Ohm’s Law: I = U / R
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
// Simple resistor with fixed resistance
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = r; // store resistance value
        return _this;
    }
    // Return the fixed resistance
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
// Switch behaves like a resistor that can be ON or OFF
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false; // default state is OFF
        return _this;
    }
    // Change switch state
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    // If ON → resistance = 0 (short circuit)
    // If OFF → very large resistance (almost no current)
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 1000000000;
    };
    // Override current calculation to detect short circuit
    Switch.prototype.getCurrent = function (u) {
        if (this.on && u > 0) {
            // If switch is ON and voltage exists → dangerous
            throw new Error("Short Circuit");
        }
        return _super.prototype.getCurrent.call(this, u); // otherwise use normal formula
    };
    return Switch;
}(AbstractResistor));
// Helper function to print resistance of any component
function printResistance(r) {
    console.log("Resistance:", r.getResistance());
}
// =====================
// Test Switch
// =====================
var s1 = new Switch();
console.log("Initial resistance: " + s1.getResistance());
s1.setOn(true); // turn switch ON
console.log("Resistance when ON: " + s1.getResistance());
// Try to calculate current (may throw error)
try {
    console.log(s1.getCurrent(5));
}
catch (e) {
    console.log(e.message); // catch short circuit error
}
s1.setOn(false); // turn switch OFF
console.log("Current when OFF: " + s1.getCurrent(5));
printResistance(s1);
// =====================
// Multiple connections
// =====================
// Base class for circuits containing multiple resistors
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    // Add resistor (or another connection)
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
// Series connection: resistances are added
// R_total = R1 + R2 + ...
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var total = 0;
        // Loop through all resistors and sum them
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            total += r.getResistance();
        }
        return total;
    };
    return SeriesConnection;
}(MultipleConnection));
// Parallel connection: inverse formula
// 1/R = 1/R1 + 1/R2 + ...
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        // If no resistors → return 0 to avoid division by zero
        if (this.resistors.length === 0) {
            return 0;
        }
        var inverseSum = 0;
        // Sum of inverse resistances
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            inverseSum += 1 / r.getResistance();
        }
        // Final result
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultipleConnection));
// =====================
// Test Series
// =====================
var s = new SeriesConnection();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(220));
console.log("Series resistance: " + s.getResistance() + " Ω");
// =====================
// Test Parallel
// =====================
var p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
console.log("Parallel resistance: " + p.getResistance() + " Ω");
