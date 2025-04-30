import { updateInput } from "../utils/updateInput.js";

function ulSearchClickEvent() {
  const ul = document.querySelector(".search-result");

  ul.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName !== "LI") return;

    updateInput(target);
  });
}

export { ulSearchClickEvent };
