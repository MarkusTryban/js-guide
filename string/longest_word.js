const longestWord = str => {
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

  const sortedArr = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sortedArr.filter(
    word => word.length === sortedArr[0].length
  );

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
};

const output = longestWord('Hello there, my name is Markus');

console.log(output);
