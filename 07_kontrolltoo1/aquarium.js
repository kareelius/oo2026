var Aquarium = /** @class */ (function () {
    function Aquarium(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.water = 0;
    }
    Aquarium.prototype.volume = function () {
        return this.length * this.width * this.height;
    };
    Aquarium.prototype.add = function (amount) {
        this.water = this.water + amount;
        if (this.water > this.volume()) {
            return "Too much water! Overflow!";
        }
        return "Added water";
    };
    Aquarium.prototype.remove = function (amount) {
        this.water = this.water - amount;
        if (this.water < 0) {
            this.water = 0;
            return "Aquarium is empty!";
        }
        return "Removed water";
    };
    return Aquarium;
}());
var aquarium = new Aquarium(60, 30, 30);
function addWater() {
    var input = document.getElementById("amount");
    var amount = Number(input.value);
    var result = aquarium.add(amount);
    update(result);
}
function removeWater() {
    var input = document.getElementById("amount");
    var amount = Number(input.value);
    var result = aquarium.remove(amount);
    update(result);
}
function update(text) {
    document.getElementById("message").innerText = text;
    document.getElementById("water").innerText = "Water (ml): " + aquarium.water;
    document.getElementById("volume").innerText = "Volume (ml): " + aquarium.volume();
}
