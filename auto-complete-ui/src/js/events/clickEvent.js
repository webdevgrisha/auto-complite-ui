import { updateInput } from "../utils/updateInput.js";

function addClickEvent() {
  const ul = document.querySelector("ul");

  ul.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName !== "LI") return;

    updateInput(target);
  });
}

export { addClickEvent };
