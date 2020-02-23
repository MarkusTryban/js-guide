const chunkArray = (arr, len) => {
  // const chunkedArr = [];

  // let i = 0;

  // while (i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));

  //   i += len;
  // }

  // return chunkedArr;

  const chunkedArr = [];

  while (arr.length) {
    chunkedArr.push(arr.splice(0, len));
  }

  return chunkedArr;

  // const chunkedArr = [];

  // arr.forEach(val => {
  //   const lastElementInArr = chunkedArr[chunkedArr.length - 1];

  //   if (!lastElementInArr || lastElementInArr.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     lastElementInArr.push(val);
  //   }
  // });

  // return chunkedArr;
};

const output = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

console.log(output);
