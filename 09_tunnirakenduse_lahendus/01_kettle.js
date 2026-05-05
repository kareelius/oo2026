// ------------------ WATER KLASS ------------------
// hoiab vee andmeid ja arvutab temperatuuri muutust
var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.heatingPower = 0; // võimsus (W)
        this.specialHeatCapacity = 4200; // vee erisoojus (J/kg°C)
        // kontrollid (väga hea eksamil!)
        if (waterAmount <= 0)
            throw new Error("Water must be > 0");
        if (temperature < 0)
            throw new Error("Temperature cannot be negative");
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    // määrab võimsuse
    Water.prototype.setHeatingPower = function (newPower) {
        if (newPower <= 0)
            throw new Error("Power must be > 0");
        this.heatingPower = newPower;
    };
    // tagastab temperatuuri
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    // kuumutab 1 sekundi jooksul
    Water.prototype.heatAsecond = function () {
        // kui power puudub, ei tee midagi
        if (this.heatingPower <= 0)
            return;
        // energia = võimsus * aeg (1 sekund)
        var energy = this.heatingPower;
        // grammid → kilogrammid
        var massKg = this.waterAmount / 1000;
        // temperatuuri muutus (füüsika valem)
        var deltaT = energy / (this.specialHeatCapacity * massKg);
        // suurendame temperatuuri
        this.temperature += deltaT;
    };
    // arvutab kui kaua läheb sihttemperatuurini
    Water.prototype.calculateHeatingTime = function (targetTemperature) {
        if (this.heatingPower <= 0)
            throw new Error("Power not set");
        // kui target väiksem kui praegune → 0
        if (targetTemperature <= this.temperature)
            return 0;
        var diff = targetTemperature - this.temperature;
        var massKg = this.waterAmount / 1000;
        // kui palju energiat vaja
        var energyNeeded = diff * this.specialHeatCapacity * massKg;
        // aeg sekundites
        return energyNeeded / this.heatingPower;
    };
    return Water;
}());
