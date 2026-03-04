class RectangleShape{

    constructor(
        protected x:number,
        protected y:number,
        protected width:number,
        protected height:number
    ){}

    //calculate area
    area():number{
        return this.width * this.height;
    }

    //calculate perimeter
    perimeter():number{
        return 2 * (this.width + this.height);
    }

    draw(g:CanvasRenderingContext2D):void{

        //draw rectangle
        g.beginPath();
        g.rect(this.x,this.y,this.width,this.height);
        g.stroke();

        //write calculations
        g.fillText("Area: " + this.area(), this.x, this.y - 10);
        g.fillText("Perimeter: " + this.perimeter(), this.x, this.y + this.height + 20);

    }

}