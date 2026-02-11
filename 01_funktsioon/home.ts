// Define input structure
interface DriveInput {
  speed: number;   // km per hour
  hours: number;   // time in hours
}

// Define output structure
interface DriveResult {
  distance: number;
  unit: string;
}

// Function
function calculateDrive(input: DriveInput): DriveResult {
  if (input.speed < 0 || input.hours < 0) {
    throw new Error("Speed and hours must be positive numbers.");
  }

  const distance = input.speed * input.hours;

  return {
    distance: distance,
    unit: "km"
  };
}

// Example usage
const result = calculateDrive({ speed: 90, hours: 3 });
console.log(`The car will drive ${result.distance} ${result.unit}.`);