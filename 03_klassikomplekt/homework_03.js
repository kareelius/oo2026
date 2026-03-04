var Lamp = /** @class */ (function () {
    function Lamp(brightness, g, x, y) {
        this.brightness = brightness;
        this.g = g;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 40;
        this.draw();
    }
    Lamp.prototype.draw = function () {
        this.g.clearRect(this.x, this.y, this.width, this.height);
        // brightness affects the color
        var colorValue = 100 + this.brightness * 1.5;
        this.g.fillStyle = "rgb(" + colorValue + "," + colorValue + ",0)";
        this.g.beginPath();
        this.g.rect(this.x, this.y, this.width, this.height);
        this.g.fill();
        this.g.stroke();
        this.g.fillStyle = "black";
        this.g.fillText("Brightness: " + this.brightness, this.x + 5, this.y + 25);
    };
    Lamp.prototype.setBrightness = function (b) {
        this.brightness = b;
        this.draw();
    };
    Lamp.prototype.getBrightness = function () {
        return this.brightness;
    };
    return Lamp;
}());
