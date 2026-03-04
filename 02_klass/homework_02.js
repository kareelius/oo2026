var GameCharacter = /** @class */ (function () {
    function GameCharacter(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
    // Show character status
    GameCharacter.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("Health: ".concat(this.health));
        console.log("Attack Power: ".concat(this.attackPower));
        console.log("----------------------");
    };
    // Attack another character
    GameCharacter.prototype.attack = function (other) {
        console.log("".concat(this.name, " attacks ").concat(other.name, "!"));
        other.takeDamage(this.attackPower);
    };
    // Take damage
    GameCharacter.prototype.takeDamage = function (amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    };
    // Heal character
    GameCharacter.prototype.heal = function (amount) {
        this.health += amount;
        console.log("".concat(this.name, " heals ").concat(amount, " health points."));
    };
    return GameCharacter;
}());
// Create two separate characters
var warrior = new GameCharacter("Warrior", 100, 20);
var mage = new GameCharacter("Mage", 80, 30);
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
