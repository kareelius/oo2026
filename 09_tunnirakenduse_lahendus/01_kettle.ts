// ------------------ WATER KLASS ------------------
// hoiab vee andmeid ja arvutab temperatuuri muutust
class Water {
    waterAmount: number; // vee mass grammides
    temperature: number; // temperatuur °C
    heatingPower: number = 0; // võimsus (W)
    readonly specialHeatCapacity: number = 4200; // vee erisoojus (J/kg°C)

    constructor(waterAmount: number, temperature: number) {
        // kontrollid (väga hea eksamil!)
        if (waterAmount <= 0) throw new Error("Water must be > 0");
        if (temperature < 0) throw new Error("Temperature cannot be negative");

        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    // määrab võimsuse
    setHeatingPower(newPower: number): void {
        if (newPower <= 0) throw new Error("Power must be > 0");
        this.heatingPower = newPower;
    }

    // tagastab temperatuuri
    getTemperature(): number {
        return this.temperature;
    }

    // kuumutab 1 sekundi jooksul
    heatAsecond(): void {
        // kui power puudub, ei tee midagi
        if (this.heatingPower <= 0) return;

        // energia = võimsus * aeg (1 sekund)
        let energy = this.heatingPower;

        // grammid → kilogrammid
        let massKg = this.waterAmount / 1000;

        // temperatuuri muutus (füüsika valem)
        let deltaT = energy / (this.specialHeatCapacity * massKg);

        // suurendame temperatuuri
        this.temperature += deltaT;
    }

    // arvutab kui kaua läheb sihttemperatuurini
    calculateHeatingTime(targetTemperature: number): number {
        if (this.heatingPower <= 0) throw new Error("Power not set");

        // kui target väiksem kui praegune → 0
        if (targetTemperature <= this.temperature) return 0;

        let diff = targetTemperature - this.temperature;

        let massKg = this.waterAmount / 1000;

        // kui palju energiat vaja
        let energyNeeded =
            diff * this.specialHeatCapacity * massKg;

        // aeg sekundites
        return energyNeeded / this.heatingPower;
    }
}