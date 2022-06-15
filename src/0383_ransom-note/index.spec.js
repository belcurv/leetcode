
const { canConstruct, canConstructMap } = require('./index')

describe('canConstruct', () => {
  it('should return false for ransomNote = "a", magazine = "b"', () => {
    const ransomNote = 'a'
    const magazine = 'b'
    expect(canConstruct(ransomNote, magazine)).toBe(false)
  })

  it('should return false for ransomNote = "aa", magazine = "ab"', () => {
    const ransomNote = 'aa'
    const magazine = 'ab'
    expect(canConstruct(ransomNote, magazine)).toBe(false)
  })

  it('should return true for ransomNote = "aa", magazine = "aab"', () => {
    const ransomNote = 'aa'
    const magazine = 'aab'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })

  it('should return true for ransomNote = "abba", magazine = "basdiohasdb"', () => {
    const ransomNote = 'abba'
    const magazine = 'basdiohasdb'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })

  it('should return true for leetcode submission test', () => {
    const ransomNote = 'bg'
    const magazine = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })
})

describe('canConstructMap', () => {
  it('should return false for ransomNote = "a", magazine = "b"', () => {
    const ransomNote = 'a'
    const magazine = 'b'
    expect(canConstructMap(ransomNote, magazine)).toBe(false)
  })

  it('should return false for ransomNote = "aa", magazine = "ab"', () => {
    const ransomNote = 'aa'
    const magazine = 'ab'
    expect(canConstructMap(ransomNote, magazine)).toBe(false)
  })

  it('should return true for ransomNote = "aa", magazine = "aab"', () => {
    const ransomNote = 'aa'
    const magazine = 'aab'
    expect(canConstructMap(ransomNote, magazine)).toBe(true)
  })

  it('should return true for ransomNote = "abba", magazine = "basdiohasdb"', () => {
    const ransomNote = 'abba'
    const magazine = 'basdiohasdb'
    expect(canConstructMap(ransomNote, magazine)).toBe(true)
  })

  it('should return true for leetcode submission test', () => {
    const ransomNote = 'bg'
    const magazine = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'
    expect(canConstructMap(ransomNote, magazine)).toBe(true)
  })
})
