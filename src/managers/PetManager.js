"use strict";

class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets = [...this.pets, pet];
  }

  getPetByName(name) {
    return this.pets.find((pet) => pet.name === name);
  }
}

export default PetManager;
