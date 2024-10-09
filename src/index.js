"use strict";

import PetManager from "./managers/PetManager.js";
import { handleFormSubmit } from "./events/formHandler.js";
import { handleComparator } from "./events/comparatorHandler.js";

const petManager = new PetManager();

handleFormSubmit(petManager);
handleComparator(petManager);
