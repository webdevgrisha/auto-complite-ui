"use strict";


import { debounce } from "../utils/debounce.js";
import { infiniteScroll } from "./infiniteScroll.js";

function searchEvent(event) {
  const word = event.target.value;

  infiniteScroll(word);
}

function addSearchEvent() {
  const input = document.querySelector(".search");
  const evnetHandler = debounce(searchEvent, 400);

  input.addEventListener("input", evnetHandler);
}

export { addSearchEvent };
