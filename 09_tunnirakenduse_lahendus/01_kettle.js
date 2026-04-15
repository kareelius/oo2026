var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.heatingPower = 0;
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        this.heatingPower = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    Water.prototype.heatAsecond = function () {
        var energy = this.heatingPower;
        var deltaT = energy / (this.specialHeatCapacity * (this.waterAmount / 1000));
        this.temperature += deltaT;
    };
    Water.prototype.calculateHeatingTime = function (targetTemperature) {
        var diff = targetTemperature - this.temperature;
        var energyNeeded = diff * this.specialHeatCapacity * (this.waterAmount / 1000);
        return energyNeeded / this.heatingPower;
    };
    return Water;
}());
