
const { searchInsert } = require('./index')

describe('searchInsert', () => {
  it('should return 2', () => {
    const nums = [1, 3, 5, 6]
    const target = 5
    const expected = 2
    const actual = searchInsert(nums, target)
    expect(actual).toBe(expected)
  })

  it('should return 1', () => {
    const nums = [1, 3, 5, 6]
    const target = 2
    const expected = 1
    const actual = searchInsert(nums, target)
    expect(actual).toBe(expected)
  })

  it('should return 4', () => {
    const nums = [1, 3, 5, 6]
    const target = 7
    const expected = 4
    const actual = searchInsert(nums, target)
    expect(actual).toBe(expected)
  })
})

describe('searchInsert with every index between 0 - 100', () => {
  const nums = [1, 2, 5, 9, 11, 12, 15, 20, 25, 40, 41, 80]

  it('should return 0', () => {
    const target = 0
    const expected = 0
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 0', () => {
    const target = 1
    const expected = 0
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 1', () => {
    const target = 2
    const expected = 1
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 2', () => {
    const target = 3
    const expected = 2
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 2', () => {
    const target = 4
    const expected = 2
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 2', () => {
    const target = 5
    const expected = 2
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 3', () => {
    const target = 6
    const expected = 3
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 3', () => {
    const target = 7
    const expected = 3
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 3', () => {
    const target = 8
    const expected = 3
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 3', () => {
    const target = 9
    const expected = 3
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 4', () => {
    const target = 10
    const expected = 4
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 4', () => {
    const target = 11
    const expected = 4
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 5', () => {
    const target = 12
    const expected = 5
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 6', () => {
    const target = 13
    const expected = 6
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 6', () => {
    const target = 14
    const expected = 6
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 6', () => {
    const target = 15
    const expected = 6
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 7', () => {
    const target = 16
    const expected = 7
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 7', () => {
    const target = 17
    const expected = 7
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 7', () => {
    const target = 18
    const expected = 7
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 7', () => {
    const target = 19
    const expected = 7
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 7', () => {
    const target = 20
    const expected = 7
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 8', () => {
    const target = 21
    const expected = 8
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 8', () => {
    const target = 22
    const expected = 8
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 8', () => {
    const target = 23
    const expected = 8
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 8', () => {
    const target = 24
    const expected = 8
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 8', () => {
    const target = 25
    const expected = 8
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 26
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 27
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 28
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 29
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 30
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 31
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 32
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 33
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 34
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 35
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 36
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 37
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 38
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 39
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 9', () => {
    const target = 40
    const expected = 9
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 10', () => {
    const target = 41
    const expected = 10
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 42
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 43
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 44
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 45
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 46
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 47
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 48
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 49
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 50
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 51
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 52
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 53
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 54
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 55
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 56
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 57
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 58
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 59
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 60
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 61
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 62
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 63
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 64
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 65
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 66
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 67
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 68
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 69
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 70
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 71
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 72
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 73
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 74
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 75
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 76
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 77
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 78
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 79
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 11', () => {
    const target = 80
    const expected = 11
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 81
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 82
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 83
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 84
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 85
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 86
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 87
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 88
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 89
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 90
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 91
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 92
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 93
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 94
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 95
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 96
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 97
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 98
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 99
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })

  it('should return 12', () => {
    const target = 100
    const expected = 12
    expect(searchInsert(nums, target)).toBe(expected)
  })
})
