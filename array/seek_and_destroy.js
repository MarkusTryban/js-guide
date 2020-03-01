// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }

const seekAndDestroy = (arr, ...rest) => {
  return arr.filter(val => !rest.includes(val));
};

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
