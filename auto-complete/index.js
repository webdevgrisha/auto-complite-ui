// Complexity: O(n * m), where n - number of words, m - max length of word
// Memory complexity: O(n * m^2) in the worst case, which can grow up to O(n^3)
// if m is proportional to n.
function createAutoComplete(wordsArr) {
  const autocompliteObj = {};

  wordsArr.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    let subword = "";

    for (let letter of lowerCaseWord) {
      subword += letter;

      if (!(subword in autocompliteObj)) {
        autocompliteObj[subword] = [word];
      } else {
        autocompliteObj[subword].push(word);
      }
    }
  });

  // Complexity: O(1), as object property lookup is constant time.
  // Memory complexity: O(n), where n - length of wordsIndexArr
  const autoComplite = function (letters) {
    if (typeof letters !== "string") return [];

    const lowerCaseLetters = letters.toLowerCase();

    const wordsArr = autocompliteObj[lowerCaseLetters] || [];

    return wordsArr;
  };

  return autoComplite;
}

export { createAutoComplete };
// module.exports = { createAutoComplete };
