const chunkArray = (arr, len) => {
  const chunkedArr = [];

  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));

    i += len;
  }

  return chunkedArr;
};

const output = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

console.log(output);
