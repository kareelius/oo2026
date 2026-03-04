// Interface for any calculator
interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

// Cm → In
class CmToIn implements CalculatingFunction {
    calculate(x: number): number {
        return x / 2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
}

// In → Cm
class InToCm implements CalculatingFunction {
    calculate(x: number): number {
        return x * 2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string {
        return "cm";
    }
}

// Global variable to hold current calculator
let calculator: CalculatingFunction = new CmToIn();

// Update units in the HTML
function updateUnits(): void {
    const type1 = document.getElementById("type1")!;
    const type2 = document.getElementById("type2")!;
    const input = document.getElementById("input1") as HTMLInputElement;
    const answer = document.getElementById("answer")!;

    type1.innerText = calculator.inputUnit();
    type2.innerText = calculator.outputUnit();
    input.value = "";
    answer.innerText = "";
}

// Perform calculation
function calculate(): void {
    const input = document.getElementById("input1") as HTMLInputElement;
    const answer = document.getElementById("answer")!;
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        const result = calculator.calculate(val);
        answer.innerText = result.toFixed(2);
    } else {
        answer.innerText = "";
    }
}

// Toggle between Cm → In and In → Cm
function toggleCalculator(): void {
    calculator = calculator instanceof CmToIn ? new InToCm() : new CmToIn();
    updateUnits();
}

// Setup event listener on page load
function startPage(): void {
    updateUnits();
    const input = document.getElementById("input1") as HTMLInputElement;
    input.addEventListener("input", calculate);
}

// Make sure this runs on page load
window.onload = startPage;