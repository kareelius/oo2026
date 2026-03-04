//Create function which will return the average of 3 numbers
function avg3(a, b, c) {
    return (a + b + c) / 3;
}
console.log(avg3(4, 6, 7));
function AvgArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(AvgArray([4, 5, 6, 7]));
function AvgArray1(arr) {
    return arr.reduce(function (s, v) { return s + v; }, 0) / arr.length;
    //s= sum
    //v=current value
    //0=starting value of the sum
}
console.log(AvgArray1([4, 5, 6, 7]));
//Sliding average
function sidingAverage(arr) {
    var out = [];
    for (var i = 0; i < arr.length - 2; i++) {
        out.push(avg3(arr[i], arr[i + 1], arr[i + 2]));
    }
    return out;
}
console.log(sidingAverage([1, 2, 4, 6, 4, 7, 7, 5]));
function slidingAverage1(arr, windowSize) {
    if (windowSize === void 0) { windowSize = 2; }
    var out = [];
    for (var i = 0; i < arr.length - windowSize; i++) {
        out.push(AvgArray(arr.slice(i, i + windowSize))); //start and end
    }
    return out;
}
console.log(slidingAverage1([1, 2, 4, 6, 4, 7, 7, 5]));
