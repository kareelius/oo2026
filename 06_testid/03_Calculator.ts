// Calculator class that contains all calculator logic
class Calculator {

    // What is currently displayed on the calculator screen
    private panelContent: string = "";

    // Stores the first number before an operation
    private firstNumber: number | null = null;

    // Stores the selected operator (+ - * /)
    private operator: string | null = null;


    // This function is called whenever a button is pressed
    pressButton(b: string): void {

        // CLEAR BUTTON
        // Resets the calculator completely
        if (b === "C") {
            this.panelContent = "";
            this.firstNumber = null;
            this.operator = null;
        }

        // OPERATOR BUTTONS
        else if (b === "+" || b === "-" || b === "*" || b === "/") {

            // Save the current number as the first number
            this.firstNumber = Number(this.panelContent);

            // Store the operator
            this.operator = b;

            // Clear screen for second number
            this.panelContent = "";
        }

        // EQUALS BUTTON
        else if (b === "=") {

            let secondNumber = Number(this.panelContent);
            let result = 0;

            // Perform calculation depending on operator
            if (this.operator === "+") {
                result = this.firstNumber! + secondNumber;
            }
            else if (this.operator === "-") {
                result = this.firstNumber! - secondNumber;
            }
            else if (this.operator === "*") {
                result = this.firstNumber! * secondNumber;
            }
            else if (this.operator === "/") {

                // Prevent division by zero
                if (secondNumber === 0) {
                    this.panelContent = "Error";
                    return;
                }

                result = this.firstNumber! / secondNumber;
            }

            // Show result on screen
            this.panelContent = result.toString();

            // Reset stored operation values
            this.firstNumber = null;
            this.operator = null;
        }

        // DECIMAL POINT SUPPORT
        else if (b === ".") {

            // Prevent multiple decimals in one number
            if (!this.panelContent.includes(".")) {
                this.panelContent += ".";
            }
        }

        // NUMBER BUTTONS
        else {
            // Add the pressed number to the display
            this.panelContent += b;
        }
    }


    // Returns what should be shown on the calculator display
    getPanelContent(): string {
        return this.panelContent;
    }
}


// Export for the test file
export { Calculator };


// Make Calculator accessible in the browser
// @ts-ignore
window.Calculator = Calculator;