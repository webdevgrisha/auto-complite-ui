function updateInput(elem) {
  const input = document.querySelector(".search");

  input.value = elem.innerText;
  input.dispatchEvent(new Event("input"));
}

export { updateInput };
