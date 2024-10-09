"use strict";

export function renderPetList(pets) {
  const petListItems = document.querySelector(".pet-list__items");
  const petList = pets
    .map((pet) => {
      return `<li>
        <h3>${pet.name}</h3>
        <p>${pet.getInfo()}</p>
      </li>`;
    })
    .join("");
  petListItems.innerHTML = petList;
}

export function updateComparatorOptions(pets) {
  const selectedPet1 = document.getElementById("pet-comparator-select-1");
  const selectedPet2 = document.getElementById("pet-comparator-select-2");

  const petOptions = pets
    .map((pet) => `<option value="${pet.name}">${pet.name}</option>`)
    .join("");

  selectedPet1.innerHTML =
    `<option value="" selected>Seleccionar</option>` + petOptions;
  selectedPet2.innerHTML =
    `<option value="" selected>Seleccionar</option>` + petOptions;
}
