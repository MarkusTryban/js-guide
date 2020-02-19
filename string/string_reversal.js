// CHALLENGE: REVERSE A STRING

function reverseString(str) {
  // const strArr = str.split('');
  // strArr.reverse();
  // return strArr.join('');

  return str
    .split('')
    .reverse()
    .join('');
}

const output = reverseString('hello');

console.log(output);
