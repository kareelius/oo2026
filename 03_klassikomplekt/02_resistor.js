var Resistor1 = /** @class */ (function () {
    function Resistor1(r, g, 
    //x position where the resistor is going to begin
    startx, 
    //x position where the resisto is going to ends
    endx, 
    //how far down the screen we going to draw the resistor. Y increases diagram goes down
    y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Resistor1.prototype.draw = function () {
        //=======Draw the LEFT wire============
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx + this.width / 4, this.y);
        this.g.stroke();
        //=======Draw the Rectangle============
        //X, Y, Width and Height
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        //=======Draw the Right Wire============
        this.g.beginPath();
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r + "Ω", bodyX + 8, this.y + 5);
    };
    return Resistor1;
}());
