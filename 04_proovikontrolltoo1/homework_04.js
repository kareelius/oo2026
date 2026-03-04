var RectangleShape = /** @class */ (function () {
    function RectangleShape(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    //calculate area
    RectangleShape.prototype.area = function () {
        return this.width * this.height;
    };
    //calculate perimeter
    RectangleShape.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    RectangleShape.prototype.draw = function (g) {
        //draw rectangle
        g.beginPath();
        g.rect(this.x, this.y, this.width, this.height);
        g.stroke();
        //write calculations
        g.fillText("Area: " + this.area(), this.x, this.y - 10);
        g.fillText("Perimeter: " + this.perimeter(), this.x, this.y + this.height + 20);
    };
    return RectangleShape;
}());
