var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Meal = /** @class */ (function () {
    function Meal() {
    }
    return Meal;
}());
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.getPrice = function () {
        return 6;
    };
    return Chicken;
}(Meal));
var Fries = /** @class */ (function (_super) {
    __extends(Fries, _super);
    function Fries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fries.prototype.getPrice = function () {
        return 3;
    };
    return Fries;
}(Meal));
var ComboMeal = /** @class */ (function (_super) {
    __extends(ComboMeal, _super);
    function ComboMeal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    ComboMeal.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ComboMeal.prototype.getPrice = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.getPrice();
        }
        return total * 0.9;
    };
    return ComboMeal;
}(Meal));
var chicken = new Chicken();
var fries = new Fries();
var combo = new ComboMeal();
combo.addItem(chicken);
combo.addItem(fries);
console.log("Chicken:", chicken.getPrice());
console.log("Fries:", fries.getPrice());
console.log("Combo price:", combo.getPrice());
