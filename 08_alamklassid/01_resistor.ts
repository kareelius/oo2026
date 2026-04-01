// Base abstract class for all resistive components
abstract class AbstractResistor {
    // Every child must define how resistance is calculated
    abstract getResistance(): number;

    // Calculates current using Ohm’s Law: I = U / R
    getCurrent(u: number): number {
        return u / this.getResistance();
    }
}

// Simple resistor with fixed resistance
class Resistor extends AbstractResistor {
    r: number;

    constructor(r: number) {
        super();
        this.r = r; // store resistance value
    }

    // Return the fixed resistance
    getResistance(): number {
        return this.r;
    }
}

// Switch behaves like a resistor that can be ON or OFF
class Switch extends AbstractResistor {
    on: boolean = false; // default state is OFF

    // Change switch state
    setOn(state: boolean) {
        this.on = state;
    }

    // If ON → resistance = 0 (short circuit)
    // If OFF → very large resistance (almost no current)
    getResistance(): number {
        return this.on ? 0 : 1000000000;
    }

    // Override current calculation to detect short circuit
    getCurrent(u: number): number {
        if (this.on && u > 0) {
            // If switch is ON and voltage exists → dangerous
            throw new Error("Short Circuit");
        }
        return super.getCurrent(u); // otherwise use normal formula
    }
}

// Helper function to print resistance of any component
function printResistance(r: AbstractResistor) {
    console.log("Resistance:", r.getResistance());
}

// =====================
// Test Switch
// =====================

let s1 = new Switch();

console.log("Initial resistance: " + s1.getResistance());

s1.setOn(true); // turn switch ON
console.log("Resistance when ON: " + s1.getResistance());

// Try to calculate current (may throw error)
try {
    console.log(s1.getCurrent(5));
} catch (e) {
    console.log((e as Error).message); // catch short circuit error
}

s1.setOn(false); // turn switch OFF
console.log("Current when OFF: " + s1.getCurrent(5));

printResistance(s1);

// =====================
// Multiple connections
// =====================

// Base class for circuits containing multiple resistors
abstract class MultipleConnection extends AbstractResistor {
    resistors: AbstractResistor[] = [];

    // Add resistor (or another connection)
    addResistor(r: AbstractResistor) {
        this.resistors.push(r);
    }
}

// Series connection: resistances are added
// R_total = R1 + R2 + ...
class SeriesConnection extends MultipleConnection {
    getResistance(): number {
        let total = 0;

        // Loop through all resistors and sum them
        for (let r of this.resistors) {
            total += r.getResistance();
        }

        return total;
    }
}

// Parallel connection: inverse formula
// 1/R = 1/R1 + 1/R2 + ...
class ParallelConnection extends MultipleConnection {
    getResistance(): number {
        // If no resistors → return 0 to avoid division by zero
        if (this.resistors.length === 0) {
            return 0;
        }

        let inverseSum = 0;

        // Sum of inverse resistances
        for (let r of this.resistors) {
            inverseSum += 1 / r.getResistance();
        }

        // Final result
        return 1 / inverseSum;
    }
}

// =====================
// Test Series
// =====================

let s = new SeriesConnection();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(220));

console.log("Series resistance: " + s.getResistance() + " Ω");

// =====================
// Test Parallel
// =====================

let p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));

console.log("Parallel resistance: " + p.getResistance() + " Ω");