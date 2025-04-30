import { appendElems } from "./appendElems.js";
import { createElement } from "./createElement.js";

function createAutoCompleteUI() {
  const h1 = createElement("h1", "Autocomplete UI");
  const input = createElement("input", "", {
    class: "search",
    placeholder: "search...",
  });
  const ul = createElement("ul", "", {
    class: "search-result",
  });

  appendElems(document.body, h1, input, ul);
}

export { createAutoCompleteUI };
