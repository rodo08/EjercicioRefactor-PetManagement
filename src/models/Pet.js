"use strict";

class Pet {
  #name;
  #type;
  #gender;

  constructor(name, type, gender) {
    this.#name = name;
    this.#type = type;
    this.#gender = gender;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get gender() {
    return this.#gender;
  }

  getInfo() {
    return `${this.#name} es un ${this.#type} ${this.#gender}`;
  }

  comparePets(otherPet) {
    return this.#type === otherPet.type;
  }
}

export default Pet;
