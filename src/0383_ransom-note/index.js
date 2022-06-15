/**
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Constraints:
 *    1 <= ransomNote.length, magazine.length <= 105
 *    ransomNote and magazine consist of lowercase English letters.
 */

/**
 * O(n^2) solution - assume Array.includes is linear search
 * @param  {string}  ransomNote
 * @param  {string}  magazine
 * @return {boolean}
 */
exports.canConstruct = function canConstruct (ransomNote, magazine) {
  // Each char in ransomNote is required. Loop over ransomNote
  for (const char of ransomNote) {
    // if magazine doesn't have char, fail immediately
    if (!magazine.includes(char)) return false
    // remove char from magazine to limit next iteration's search space
    magazine = magazine.replace(char, '') // NOTE: String.replace only replaces the 1st occurence
  }

  return true
}

/**
 * O(n) solution
 * @param  {string}  ransomNote
 * @param  {string}  magazine
 * @return {boolean}
 */
exports.canConstructMap = function canConstructMap (ransomNote, magazine) {
  // holds letter:count frequencies from magazine
  const dictionary = {}

  // build letter frequency dictionary
  for (const magazineChar of magazine) {
    if (dictionary[magazineChar]) dictionary[magazineChar] += 1
    else dictionary[magazineChar] = 1
  }

  // check if dictionary has available letters to build ransomNote
  for (const ransomNoteChar of ransomNote) {
    if (dictionary[ransomNoteChar] == null || dictionary[ransomNoteChar] <= 0) return false
    dictionary[ransomNoteChar] -= 1 // decrement char count in dictionary
  }

  return true
}
