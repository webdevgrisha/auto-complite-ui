import { appendElems } from "./appendElems.js";
import { createElement } from "./createElement.js";

function createSearchResultsElements(wordsArr) {
  const fragment = new DocumentFragment();

  wordsArr.forEach((word) => {
    const li = createElement("li", word, { tabindex: "0" });

    appendElems(fragment, li);
  });

  return fragment;
}

export { createSearchResultsElements };
