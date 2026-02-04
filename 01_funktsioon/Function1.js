//Function 01
function sayHello() {
    return "Hello world";
}
var message1 = sayHello();
console.log(message1);
//Function 02
function multiply(a, b) {
    return a * b;
}
var result = multiply(6, 6);
console.log(result);
//Function 03
//Calculate BMI
function bodyMassIndex(cm, kg) {
    //Step 01: Convert CM to M
    var m = cm / 100; //or let m: number = cm / 100
    //Step 02: Return BMI value using formula
    return Number((kg / (m * m)).toFixed(2));
}
//Input two numbers and print result using console.log
console.log(bodyMassIndex(187, 77));
var weights = [80, 90, 100, 110, 115];
for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
    var weight = weights_1[_i];
    console.log(bodyMassIndex(180, weight));
}
//Map runs the given function once for each value in the array.
//For each weight, BMI is called.
//The returned BMI values are collected into a new array.
var bmivalue = weights.map(function (weight) { return bodyMassIndex(180, weight); });
console.log(bmivalue);
//Function 04- But different function for BMI
//Alternative formula for BMI
function bodyMassIndex2(cm, kg) {
    var m = cm / 100;
    return Number((1.3 * kg / Math.pow(m, 2.5)).toFixed(2));
}
var bmivalue2 = weights.map(function (weight) { return bodyMassIndex2(180, weight); });
console.log(bmivalue2);
var results = [];
for (var height = 150; height < 190; height += 2) {
    results.push([
        height,
        bodyMassIndex(height, 90),
        bodyMassIndex2(height, 90)
    ]);
}
console.log(results);
//Function 05
//Calculate the area of circle
function circleArea(radius) {
    return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
}
console.log("The area of circle is " + circleArea(5)); //circleArea("radius here")
