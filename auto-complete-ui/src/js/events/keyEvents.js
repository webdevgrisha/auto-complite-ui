import { updateInput } from "../utils/updateInput.js";

function addKeyEvent() {
  document.addEventListener("keydown", (event) => {
    const focusedElement = document.activeElement;

    if (!focusedElement.matches('li[tabindex="0"')) return;

    let nextElement = null;

    if (event.key === "Enter") {
      updateInput(focusedElement);
    } else if (event.key === "ArrowRight") {
      nextElement = focusedElement.nextElementSibling;
    } else if (event.key === "ArrowLeft") {
      nextElement = focusedElement.previousElementSibling;
    }

    if (nextElement) {
      nextElement.focus();
    }
  });
}

export { addKeyEvent };
