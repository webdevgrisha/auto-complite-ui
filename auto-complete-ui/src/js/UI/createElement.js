function createElement(tagname, text = "", attrConf = {}) {
  const elem = document.createElement(tagname);

  elem.innerText = text;

  for (let [name, value] of Object.entries(attrConf)) {
    elem.setAttribute(name, value);
  }

  return elem;
}

export { createElement };
