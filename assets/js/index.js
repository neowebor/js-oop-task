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

  set successChance(newChance) {
    if (typeof newChance !== 'number' || isNaN(newChance)) {
      throw new TypeError('successChance must be a number');
    }

    if (newChance < 0 || newChance > 1) {
      throw new RangeError('successChance must be a number between 0 and 1');
    }
    this.#successChance = newChance;
  }

  #expandedHunting () {
    return Math.random() + this.#successChance >= 0.6 ? ++this.#quantityOfCaughtMice : this.#quantityOfCaughtMice;
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
    return this.#expandedHunting();
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

    return ++this.#eatenMice;
  }
}

const strayCat1 = new StrayCat("Mirka");
