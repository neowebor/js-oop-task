"use strict";

class Cat {
  #type;
  #nickname;
  #quantityOfCaughtMice;
  #successChance;

  constructor(type, nickname) {
    this.#type = type;
    this.#nickname = nickname;
    this.#quantityOfCaughtMice = 0;
    this.#successChance = 0.2;
  }

  get type() {
    return this.#type;
  }

  get nickname() {
    return this.#nickname;
  }

  get quantityOfCaughtMice() {
    return this.#quantityOfCaughtMice;
  }

  get successChance () {
    return this.#successChance;
  }

  set nickname(newName) {
    if (typeof newName !== "string" || !newName.trim()) {
      throw new TypeError("Invalid type. String expected");
    }

    this.#nickname = newName;
  }

  meow() {
    console.log(`The ${this.#nickname} is happy, that's why he meows`);
  }

  sleep() {
    console.log(`The ${this.#nickname} is sleeping`);
  }

  eat() {
    if (!this.#quantityOfCaughtMice) {
      throw new RangeError("The cat didn't catch a single mouse");
    }

    return --this.#quantityOfCaughtMice;
  }

  hunt() {
    return Math.random() + this.#successChance >= 0.6 ? this.#quantityOfCaughtMice++ : this.#quantityOfCaughtMice;
  }
}

const cat1 = new Cat("Scotland cat", "Murzik");

class StrayCat extends Cat {
  #eatenMice;

  constructor(nickname) {
    super("Stray Cat", nickname);
    this.#eatenMice = 0;
    this.successChance = 0.4;
  }

  get eatenMice() {
    return this.#eatenMice;
  }

  eat() {
    if (this.#eatenMice >= this.quantityOfCaughtMice) {
      throw new RangeError("You need to go hunting! 0 mice left");
    }

    return this.#eatenMice++;
  }
}

const strayCat1 = new StrayCat("Mirka");
