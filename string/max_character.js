const maxCharacter = str => {
  const charMap = {};

  str.split('').forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
};

const output = maxCharacter();

console.log(output);
