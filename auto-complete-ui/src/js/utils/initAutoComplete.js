import { createAutoComplete } from "../../../../auto-complete/index.js";

async function loadCities() {
  let cites = null;

  try {
    const response = await fetch("/cities.json");
    cites = await response.json();
  } catch (err) {
    throw Error("Error loadCites", err);
  }

  return cites;
}

async function initAutoComplete() {
  const cites = await loadCities();

  const autoComplete = createAutoComplete(cites);

  return autoComplete;
}

export { initAutoComplete };
