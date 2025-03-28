function debounce(callback, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId !== null) return;

    timerId = setTimeout(() => {
      timerId = null;
      callback(...args);
    }, delay);
  };
}

export { debounce };
