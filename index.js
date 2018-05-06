// Constants
const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const totalAlphabets = alphabets.length;

// Util
function c(str) {
  console.log(str);
}

function encode(str) {
  c('begin to encode');
  c(`input: ${str}`)

  const splitedStrs = str.split('');
  const convertedNumbers = splitedStrs.map((text, index) => (alphabets.indexOf(text) + index + 1) % totalAlphabets);
  const encodedStr = convertedNumbers.map((num) => alphabets[num]).join('');

  c(`output ${encodedStr}`);
  return encodedStr;
}

function decode(str) {
  c('begin to encode');
  c(`input: ${str}`)

  const splitedStrs = str.split('');
  const convertedNumbers = splitedStrs.map((text, index) => {
    const num = alphabets.indexOf(text);
    if (num == 0) {
      return (totalAlphabets - index - 1) % totalAlphabets;
    } else {
      return (num - index - 1) % totalAlphabets;
    }
  });
  const decodedStr = convertedNumbers.map((num) => alphabets[num]).join('');

  c(`output ${decodedStr}`);
  return decodedStr;
}

// work && debug
const fax = 'fax'
const encodedFax = encode(fax);
const decodedFax = decode(encodedFax);

if (fax == decodedFax) {
  c('equal');
} else {
  c('not equal');
}
