class GameCharacter {
    constructor(
        private name: string,
        private health: number,
        private attackPower: number
    ) {}

    // Show character status
    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Attack Power: ${this.attackPower}`);
        console.log("----------------------");
    }

    // Attack another character
    attack(other: GameCharacter): void {
        console.log(`${this.name} attacks ${other.name}!`);
        other.takeDamage(this.attackPower);
    }

    // Take damage
    takeDamage(amount: number): void {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    // Heal character
    heal(amount: number): void {
        this.health += amount;
        console.log(`${this.name} heals ${amount} health points.`);
    }
}

// Create two separate characters
let warrior = new GameCharacter("Warrior", 100, 20);
let mage = new GameCharacter("Mage", 80, 30);

// Show initial status
warrior.showStatus();
mage.showStatus();

// Warrior attacks Mage
warrior.attack(mage);
mage.showStatus();

// Mage heals
mage.heal(10);
mage.showStatus();

// Mage attacks Warrior
mage.attack(warrior);
warrior.showStatus();