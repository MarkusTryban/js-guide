const flattenArray = arrays => {
  // return arrays.reduce((a, b) => a.concat(b));

  // return [].concat.apply([], arrays);

  return [].concat(...arrays);
};

const output = flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);

console.log(output);
