class Aquarium {
    length: number;
    width: number;
    height: number;
    water: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.water = 0;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    add(amount: number) {
        this.water = this.water + amount;

        if (this.water > this.volume()) {
            return "Too much water! Overflow!";
        }

        return "Added water";
    }

    remove(amount: number) {
        this.water = this.water - amount;

        if (this.water < 0) {
            this.water = 0;
            return "Aquarium is empty!";
        }

        return "Removed water";
    }
}

let aquarium = new Aquarium(60, 30, 30);

function addWater() {
    let input = document.getElementById("amount") as HTMLInputElement;
    let amount = Number(input.value);

    let result = aquarium.add(amount);

    update(result);
}

function removeWater() {
    let input = document.getElementById("amount") as HTMLInputElement;
    let amount = Number(input.value);

    let result = aquarium.remove(amount);

    update(result);
}

function update(text: string) {
    document.getElementById("message").innerText = text;
    document.getElementById("water").innerText = "Water (ml): " + aquarium.water;
    document.getElementById("volume").innerText = "Volume (ml): " + aquarium.volume();
}