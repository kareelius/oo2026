// 10% allahindlus
var TenPercentDiscount = /** @class */ (function () {
    function TenPercentDiscount() {
    }
    TenPercentDiscount.prototype.calculate = function (price) {
        return price * 0.9;
    };
    TenPercentDiscount.prototype.discountName = function () {
        return "10% discount";
    };
    return TenPercentDiscount;
}());
// 20% allahindlus
var TwentyPercentDiscount = /** @class */ (function () {
    function TwentyPercentDiscount() {
    }
    TwentyPercentDiscount.prototype.calculate = function (price) {
        return price * 0.8;
    };
    TwentyPercentDiscount.prototype.discountName = function () {
        return "20% discount";
    };
    return TwentyPercentDiscount;
}());
// Näitprogramm
var d1 = new TenPercentDiscount();
var d2 = new TwentyPercentDiscount();
var price = 367;
console.log("Original price:", price);
console.log(d1.discountName(), "=", d1.calculate(price));
console.log(d2.discountName(), "=", d2.calculate(price));
