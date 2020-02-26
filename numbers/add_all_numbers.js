// function addAll() {
//   let args = Array.prototype.slice.call(arguments);
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// }

// console.log(addAll(2, 5, 6, 7, 9));

const addAllNum = (...numbers) => {
  // let total = 0;
  // numbers.forEach(num => (total += num));
  // return total;

  return numbers.reduce((acc, cur) => acc + cur);
};

console.log(addAllNum(2, 5, 6, 7, 9));
