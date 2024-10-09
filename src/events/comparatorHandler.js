"use strict";

export function handleComparator(petManager) {
  const comparatorButton = document.querySelector(".pet-comparator__button");
  const responseParagraph = document.querySelector(".pet-comparator__response");

  comparatorButton.addEventListener("click", () => {
    const pet1Name = document.getElementById("pet-comparator-select-1").value;
    const pet2Name = document.getElementById("pet-comparator-select-2").value;

    if (!pet1Name || !pet2Name) {
      responseParagraph.textContent =
        "Por favor, seleccione dos mascotas para comparar.";
      return;
    }

    const pet1 = petManager.getPetByName(pet1Name);
    const pet2 = petManager.getPetByName(pet2Name);

    if (!pet1 || !pet2) {
      responseParagraph.textContent =
        "Una o ambas mascotas seleccionadas no existen.";
      return;
    }

    if (pet1.comparePets(pet2)) {
      responseParagraph.textContent = `TRUE. ${pet1.getInfo()} y ${pet2.getInfo()}; son del mismo tipo.`;
    } else {
      responseParagraph.textContent = `FALSE. ${pet1.getInfo()} y ${pet2.getInfo()}; son de diferente tipo.`;
    }
  });
}
