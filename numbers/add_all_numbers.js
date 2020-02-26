function addAll() {
  let args = Array.prototype.slice.call(arguments);
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

console.log(addAll(2, 5, 6, 7, 9));
