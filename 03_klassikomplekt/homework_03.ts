class Lamp{

    protected width:number=80;
    protected height:number=40;

    constructor(
        protected brightness:number,
        protected g:CanvasRenderingContext2D,
        protected x:number,
        protected y:number
    ){
        this.draw();
    }

    draw(){

        this.g.clearRect(this.x,this.y,this.width,this.height);

        this.g.beginPath();
        this.g.rect(this.x,this.y,this.width,this.height);
        this.g.stroke();

        this.g.fillText("Brightness: "+this.brightness,this.x+5,this.y+25);
    }

    setBrightness(b:number){
        this.brightness=b;
        this.draw();
    }

    getBrightness():number{
        return this.brightness;
    }

}