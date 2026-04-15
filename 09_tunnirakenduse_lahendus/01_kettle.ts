class Water {
    waterAmount: number;
    temperature: number;
    heatingPower: number = 0;
    readonly specialHeatCapacity: number = 4200;

    constructor(waterAmount: number, temperature: number) {
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    setHeatingPower(newPower: number): void {
        this.heatingPower = newPower;
    }

    getTemperature(): number {
        return this.temperature;
    }

    heatAsecond(): void {
        let energy = this.heatingPower;

        let deltaT =
            energy / (this.specialHeatCapacity * (this.waterAmount / 1000));

        this.temperature += deltaT;
    }

    calculateHeatingTime(targetTemperature: number): number {
        let diff = targetTemperature - this.temperature;

        let energyNeeded =
            diff * this.specialHeatCapacity * (this.waterAmount / 1000);

        return energyNeeded / this.heatingPower;
    }
}