// Liides
interface Discount {
    calculate(price: number): number;
    discountName(): string;
}

// 10% allahindlus
class TenPercentDiscount implements Discount {

    calculate(price: number): number {
        return price * 0.9;
    }

    discountName(): string {
        return "10% discount";
    }

}

// 20% allahindlus
class TwentyPercentDiscount implements Discount {

    calculate(price: number): number {
        return price * 0.8;
    }

    discountName(): string {
        return "20% discount";
    }

}


// Näitprogramm

let d1: Discount = new TenPercentDiscount();
let d2: Discount = new TwentyPercentDiscount();

let price = 367;

console.log("Original price:", price);
console.log(d1.discountName(), "=", d1.calculate(price));
console.log(d2.discountName(), "=", d2.calculate(price));