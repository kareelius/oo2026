abstract class Meal {
    abstract getPrice(): number;
}

class Chicken extends Meal {
    getPrice(): number {
        return 6;
    }
}

class Fries extends Meal {
    getPrice(): number {
        return 3;
    }
}

class ComboMeal extends Meal {
    private items: Meal[] = [];

    addItem(item: Meal): void {
        this.items.push(item);
    }

    getPrice(): number {
        let total = 0;

        for (const item of this.items) {
            total += item.getPrice();
        }

        return total * 0.9;
    }
}

const chicken = new Chicken();
const fries = new Fries();

const combo = new ComboMeal();
combo.addItem(chicken);
combo.addItem(fries);

console.log("Chicken:", chicken.getPrice());
console.log("Fries:", fries.getPrice());
console.log("Combo price:", combo.getPrice());