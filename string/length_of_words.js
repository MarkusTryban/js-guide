const computeAverageLengthOfWords = (word1, word2) => {
  return (word1.length + word2.length) / 2;
};

const output = computeAverageLengthOfWords('code', 'programs');

console.log(output);
