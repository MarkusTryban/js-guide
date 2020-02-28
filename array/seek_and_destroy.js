function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
