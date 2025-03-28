"use strict";

import { createAutoComplete } from "../../../../auto-complete/index.js";

async function loadCities() {
  const response = await fetch("/cities.json");
  const cites = await response.json();

  return cites;
}

async function initAutoComplete() {
  const cites = await loadCities();

  autoComplete = createAutoComplete(cites);
}

let autoComplete = null;

initAutoComplete();

export { autoComplete };
