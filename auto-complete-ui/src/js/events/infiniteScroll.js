import { createSearchResultsElements } from "../UI/createSearchResultsElements.js";
import { autoComplete } from "../utils/initAutoComplete.js";

const calcEndIndex = (startIndex) => {
  const bodyRect = document.body.getBoundingClientRect();

  const colCount = Math.ceil(window.innerWidth / 70);
  const rowCount = Math.ceil(window.innerHeight / 50);

  const endIndex = startIndex + colCount * rowCount * 2;

  return endIndex;
};

const getNewElems = (wordsArr, startIndex, endIndex) => {
  return wordsArr.slice(startIndex, endIndex);
};

const addElems = (ul, elemsArr, newElems) => {
  if (newElems.length === 0) return;

  const fragment = createSearchResultsElements(newElems);

  elemsArr.push(...newElems);

  ul.appendChild(fragment);
};

const getObserveElem = (ulElem) => {
  const ulChildren = ulElem.children;

  const observeElem =
    ulChildren[Math.floor((ulChildren.length * 80) / 100)] || ulChildren.at(-1);

  console.log("observeElem: ", observeElem);
  return observeElem;
};

function infiniteScroll(word) {
  const ul = document.querySelector(".search-result");

  let startIndex = 0;
  let elemsArr = [];

  const wordsArr = autoComplete(word);

  ul.innerHTML = "";

  if (!wordsArr.length) return;

  const observer = new IntersectionObserver(observerCallback);

  loadMore();

  const observeElem = getObserveElem(ul);
  observer.observe(observeElem);

  function observerCallback(entries, observer) {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    loadMore();
  }

  function loadMore() {
    const endIndex = calcEndIndex(startIndex);
    const newElems = getNewElems(wordsArr, startIndex, endIndex);
    startIndex = endIndex;

    addElems(ul, elemsArr, newElems);

    const observeElem = getObserveElem(ul);
    if (observeElem) observer.observe(observeElem);
  }
}

export { infiniteScroll };
