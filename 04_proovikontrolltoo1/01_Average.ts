//Create function which will return the average of 3 numbers

function avg3(a:number, b:number, c:number):number{
    return (a+b+c)/3;
}

console.log(avg3(4,6,7));

function AvgArray(arr: number[]): number{

    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(AvgArray([4,5,6,7]));

function AvgArray1(arr:number[]):number{
    return arr.reduce((s,v)=> s+v,0)/arr.length;
    //s= sum
    //v=current value
    //0=starting value of the sum
}

console.log(AvgArray1([4,5,6,7]));

//Sliding average 3 numbers
function sidingAverage(arr:number[]): number[]{
    const out:number[]=[];

    for (let i=0; i<arr.length - 2; i++){
        out.push(avg3(arr[i], arr[i+1], arr[i+2]));
    }

    return out;
}
console.log(sidingAverage([1,2,4,6,4,7,7,5]));

function slidingAverage1(arr:number[], windowSize=4):number[]{
    const out: number[]=[];

    for(let i=0; i<arr.length-windowSize; i++){
        out.push(AvgArray(arr.slice(i, i+windowSize))); //start and end
    }
    return out;

}

console.log(slidingAverage1([1,2,4,6,4,7,7,5]));