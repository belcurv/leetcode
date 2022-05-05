
const { numberOfSteps, numberOfStepsBitShift, numberOfStepsLoop } = require('./index')

describe('numberOfSteps', () => {
  it('should return 6 given 14', () => {
    const actual = numberOfSteps(14)
    expect(actual).toBe(6)
  })

  it('should return 4 given 8', () => {
    const actual = numberOfSteps(8)
    expect(actual).toBe(4)
  })

  it('should return 12 given 123', () => {
    const actual = numberOfSteps(123)
    expect(actual).toBe(12)
  })
})

describe('numberOfStepsBitShift', () => {
  it('should return 6 given 14', () => {
    const actual = numberOfStepsBitShift(14)
    expect(actual).toBe(6)
  })

  it('should return 4 given 8', () => {
    const actual = numberOfStepsBitShift(8)
    expect(actual).toBe(4)
  })

  it('should return 12 given 123', () => {
    const actual = numberOfStepsBitShift(123)
    expect(actual).toBe(12)
  })
})

describe('numberOfStepsLoop', () => {
  it('should return 6 given 14', () => {
    const actual = numberOfStepsLoop(14)
    expect(actual).toBe(6)
  })

  it('should return 4 given 8', () => {
    const actual = numberOfStepsLoop(8)
    expect(actual).toBe(4)
  })

  it('should return 12 given 123', () => {
    const actual = numberOfStepsLoop(123)
    expect(actual).toBe(12)
  })
})
