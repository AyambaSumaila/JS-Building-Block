class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        document.write(this.species + " " + this.sounds);

    }


}

Animal.prototype.eat = function () {
    return this.species.eat + " is eating";

}

let cat = new Animal("Cat", "meom");
let dog = new Animal("dog", "bark");

cat.speak();
document.write(dog.eat());
document.write(dog);
