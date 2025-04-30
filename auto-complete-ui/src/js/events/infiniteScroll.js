import {
  AVG_WORD_PX_LENGTH,
  END_INDEX_COEFFICIENT,
  OBSERVER_COEFFICIENT,
  WORD_PX_HEIGHT,
} from "../consts/consts.js";
import { getNewElems } from "../http/getNewElems.js";
import { appendElems } from "../UI/appendElems.js";
import { createElement } from "../UI/createElement.js";
import { createSearchResultsElements } from "../UI/createSearchResultsElements.js";

const calcEndIndex = (startIndex) => {
  const colCount = Math.ceil(window.innerWidth / AVG_WORD_PX_LENGTH);
  const rowCount = Math.ceil(window.innerHeight / WORD_PX_HEIGHT);

  const endIndex = startIndex + colCount * rowCount * END_INDEX_COEFFICIENT;

  return endIndex;
};

const addElems = (ul, elemsArr, newElems) => {
  if (!newElems.length) return;

  const fragment = createSearchResultsElements(newElems);

  elemsArr.push(...newElems);

  ul.appendChild(fragment);
};

const getObserveElem = (ulElem) => {
  const ulChildren = ulElem.children;

  const observeElem =
    ulChildren[Math.floor(ulChildren.length * OBSERVER_COEFFICIENT)] ||
    ulChildren.at(-1);

  return observeElem;
};

async function infiniteScroll(word, autoComplete) {
  const ul = document.querySelector(".search-result");

  let startIndex = 0;
  let elemsArr = [];

  const wordsArr = autoComplete(word);

  ul.innerHTML = "";

  if (!wordsArr.length) {
    const h3 = createElement("h3", "Words not found");
    appendElems(ul, h3);

    return;
  }

  const observer = new IntersectionObserver(observerCallback);

  await loadMore();

  const observeElem = getObserveElem(ul);
  observer.observe(observeElem);

  async function observerCallback(entries, observer) {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    await loadMore();
  }

  async function loadMore() {
    const endIndex = calcEndIndex(startIndex);
    const newElems = await getNewElems(wordsArr, startIndex, endIndex);
    startIndex = endIndex;

    addElems(ul, elemsArr, newElems);

    const observeElem = getObserveElem(ul);
    if (observeElem) observer.observe(observeElem);
  }
}

export { infiniteScroll };
