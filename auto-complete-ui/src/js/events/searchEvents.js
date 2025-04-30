import { INPUT_DEBOUNCE_DELAY_MS } from "../consts/consts.js";
import { debounce } from "../utils/debounce.js";
import { initAutoComplete } from "../utils/initAutoComplete.js";
import { infiniteScroll } from "./infiniteScroll.js";

function searchEvent(event, autoComplete) {
  const word = event.target.value;

  infiniteScroll(word, autoComplete);
}

async function addSearchEvent(inputSelector) {
  const autoComplete = await initAutoComplete();

  const input = document.querySelector(inputSelector);
  const eventHandler = debounce(searchEvent, INPUT_DEBOUNCE_DELAY_MS);

  input.addEventListener("input", (event) => eventHandler(event, autoComplete));
}

export { addSearchEvent };
