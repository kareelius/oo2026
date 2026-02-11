// Function
function calculateDrive(input) {
    if (input.speed < 0 || input.hours < 0) {
        throw new Error("Speed and hours must be positive numbers.");
    }
    var distance = input.speed * input.hours;
    return {
        distance: distance,
        unit: "km"
    };
}
// Example usage
var result = calculateDrive({ speed: 170, hours: 0.5 });
console.log("The car will drive ".concat(result.distance, " ").concat(result.unit, "."));
