// Battery class represents a rechargeable battery
class Battery {
  // Maximum capacity of the battery (mAh)
  private maxCapacity: number;

  // Current charge level (mAh)
  private currentCharge: number;

  // Constructor initializes battery with max capacity and current charge
  constructor(maxCapacity: number, currentCharge: number) {
    this.maxCapacity = maxCapacity;
    this.currentCharge = currentCharge;
  }

  // Returns the charge percentage (0–100%)
  getPercentage(): number {
    // Formula: (current / max) * 100
    return (this.currentCharge / this.maxCapacity) * 100;
  }

  // Charges the battery based on time in seconds
  charge(seconds: number): string {
    // Charger power is 50 watts (50 joules per second)
    // Energy = power × time
    const energy = 50 * seconds;

    // Convert energy (J) to charge (mAh)
    // Given: 1 mAh = 3.6 J
    const addedCharge = energy / 3.6;

    // Increase battery charge
    this.currentCharge += addedCharge;

    // If battery exceeds max capacity → clamp it and warn
    if (this.currentCharge > this.maxCapacity) {
      this.currentCharge = this.maxCapacity;
      return "⚠️ Battery overcharged!";
    }

    return "Charging successful.";
  }

  // Returns current charge level as string
  getCharge(): string {
    // If battery is empty → fix value and warn
    if (this.currentCharge <= 0) {
      this.currentCharge = 0;
      return "⚠️ Battery empty!";
    }

    // Return formatted value (2 decimal places)
    return `${this.currentCharge.toFixed(2)} mAh`;
  }
}

// ----------------------
// UI LOGIC (INTERACTION)
// ----------------------

// Create a battery instance
// Example: max = 5000 mAh, current = 1000 mAh
const battery = new Battery(5000, 1000);

// Function triggered when button is clicked
function chargeBattery() {
  // Get input value from HTML
  const input = document.getElementById("seconds") as HTMLInputElement;

  // Convert input string to number
  const seconds = Number(input.value);

  // Call battery charging method
  const message = battery.charge(seconds);

  // Display charge result + warning if any
  document.getElementById("status")!.innerText =
    message + " | Charge: " + battery.getCharge();

  // Display percentage
  document.getElementById("percentage")!.innerText =
    "Percentage: " + battery.getPercentage().toFixed(2) + "%";
}