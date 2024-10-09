"use strict";

import Pet from "../models/Pet.js";
import { renderPetList, updateComparatorOptions } from "../views/render.js";

export function handleFormSubmit(petManager) {
  const petForm = document.querySelector(".pet-form");

  petForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const petName = document.getElementById("petName").value;
    const petType = document.getElementById("petType").value;
    const petGender = document.getElementById("petGender").value;

    if (!petName || !petType || !petGender) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const newPet = new Pet(petName, petType, petGender);
    petManager.addPet(newPet);

    renderPetList(petManager.pets);
    updateComparatorOptions(petManager.pets);

    petForm.reset();
  });
}
