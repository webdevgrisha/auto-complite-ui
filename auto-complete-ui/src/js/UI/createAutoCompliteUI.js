import { appendElems } from "./appendElems.js";
import { createElement } from "./createElement.js";

function createAutoCompliteUI() {
  const h1 = createElement("h1", "Autocomplite UI");
  const input = createElement("input", "", {
    class: "search",
    placeholder: "search...",
  });
  const ul = createElement("ul", "", {
    class: "search-result",
  });

  appendElems(document.body, h1);
  appendElems(document.body, input);
  appendElems(document.body, ul);
}

export { createAutoCompliteUI };
