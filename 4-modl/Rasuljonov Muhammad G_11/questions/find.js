console.log("-------FIND------");

/**
 * @param {string[]} texts
 * @param {string} pattern
 * @return {string[]}
 */
function find(texts, pattern) {
  const str = [];
  for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      if (edd(text, pattern)) {
          str.push(text);
      }
  }
  return str;
}


function edd(text, pattern) {
  if (text.length !== pattern.length) {
      return false;
  }
  const qidir = new Map();
  const usedd = new Set();
  for (let i = 0; i < text.length; i++) {
      const text1 = text[i];
      const pattern1 = pattern[i];
      if (!qidir.has(pattern1)) {
          if (usedd.has(text1)) {
              return false;
          }
          qidir.set(pattern1, text1);
          usedd.add(text1);
      } else {
          if (qidir.get(pattern1) !== text1) {
              return false;
          }
      }
  }
  return true;
}

console.log(find(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); // ["mee","aqq"]
console.log(find(["pdp", "g-9", "pdp-g-8", "pdp-g-7", "aba", "cbc"], "mam")); // ["pdp","aba","cbc"]
console.log(find(["a", "b", "c", "bc"], "c")); // ["a","b","c"]
console.log(find(["pdp", "abb", "baa", "poo"], "app")); // ["abb","baa", "poo"]