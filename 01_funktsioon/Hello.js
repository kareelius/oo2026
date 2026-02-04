var message = "Hello world";
console.log(message);
//Create variable for your name and another one for age. Then in the console print name.
var firstname = "Karel";
var age = 22;
console.log("My name is " + firstname);
console.log("I am " + age + " years old");
console.log("");
console.log("Buy a ticket");
if (age < 7) {
    console.log("Your entrance is free");
}
else if (age >= 8 && age <= 17) {
    console.log("Pay for children ticket");
}
else {
    console.log("Pay for adult ticket");
}
var symbols = []; //empty array
for (var nr = 0; nr < age; nr++) {
    symbols.push("*");
}
console.log(symbols);
console.log(symbols.join(""));
