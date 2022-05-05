
const { kWeakestRows } = require('./index')

describe('kWeakestRows', () => {
  it('should return [2,0,3]', () => {
    const matrix = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ]
    const k = 3
    const expected = [2, 0, 3]
    const actual = kWeakestRows(matrix, k)
    expect(actual).toEqual(expected)
  })

  it('should return [0,2]', () => {
    const matrix = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ]
    const k = 2
    const expected = [0, 2]
    const actual = kWeakestRows(matrix, k)
    expect(actual).toEqual(expected)
  })
})
