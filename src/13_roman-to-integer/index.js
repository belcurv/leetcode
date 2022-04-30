
const dictionary = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * @param  {string}  str
 * @param  {number}  sum
 * @param  {number}  depth
 * @return {number}
 */
function romanToInt (str, sum = 0, depth = 15) {
  if (str.length === 0 || depth < 0) return sum

  for (const numeral in dictionary) {
    if (str.startsWith(numeral)) {
      return romanToInt(str.slice(numeral.length), sum + dictionary[numeral], depth - 1)
    }
  }
}

exports.romanToInt = romanToInt
