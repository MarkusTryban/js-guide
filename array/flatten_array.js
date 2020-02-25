const flattenArray = arrays => {
  return arrays.reduce((a, b) => {
    return a.concat(b);
  });
};

const output = flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);

console.log(output);
