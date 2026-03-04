class Polygon{
    constructor(protected x:number[], protected y:number[]){}

    //Create a method that adds new points to the polygon
    add(x: number, y:number):void{
        this.x.push(x); //add the x value to the x array
        this.y.push(y);
    }

    //This method is going to calculate the distance between two poionts
    distance(x1:number, y1:number, x2:number, y2:number):number{
        const a= x2-x1;
        const b= y2-y1

        return Math.sqrt(a*a + b*b);
    }

    //Permieter = all side lenghts added together
    //This method calculate the total lenght(Perimeter) of the polygon
    Perimeter(): number{
        let total=0;
        //Start counting at 1= because we need the previous point. 
        // (always need two ponts to measure one side)
       // this.x.length: keep looping while i is smaller than the number of points
        for (let i=1; i<this.x.length; i++){
            total += this.distance(
                this.x[i-1], //Previous X
                this.y[i-1],//previous y
                this.x[i],//current x
                this.y[i]//current y
            ); 

        }

        //Add the distance from the last point back to the first point
        total += this.distance(
            this.x[this.x.length-1],//last x, 
            this.y[this.y.length-1], //last y, 
            this.x[0], //first x, 
            this.y[0] //first y
            //this.x.lenght =3 for a triangle. 
            //3-1=2
        ) 
        return total;

    }

    draw(g:CanvasRenderingContext2D): void{

        //if there are no points, stop the function
        if(this.x.length===0) return;

        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);

        for(let i=1; i<this.x.length; i++){
            g.lineTo(this.x[i],this.y[i]);
        }
        //moveTo already draws the first points,
        //point 0 to point 1- draw a line to point 1
        g.lineTo(this.x[0], this.y[0])

        g.stroke();

    }

        
    

}

//let p1= new Polygon([50, 30, 40],[40, 30, 50]);
//console.log(p1);