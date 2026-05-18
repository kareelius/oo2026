"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvenOdd = void 0;
var EvenOdd = /** @class */ (function () {
    function EvenOdd() {
    }
    // Returns "Even" if number is even
    // Returns "Odd" if number is odd
    EvenOdd.prototype.check = function (number) {
        if (number % 2 === 0) {
            return "Even";
        }
        return "Odd";
    };
    return EvenOdd;
}());
exports.EvenOdd = EvenOdd;
