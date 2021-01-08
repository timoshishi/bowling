const { createFrames, isSpare, isStrike, game } = require('./Frame');

describe('createFrames', () => {
  const scores = createFrames();
  const correctScores = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];
  test('it should have a length of ten', () => {
    expect(scores).toHaveLength(10);
  });
  test("it's first nine frames should have a length of 2 and final index should have a length of 3", () => {
    const lengths = scores.map((frame) => frame.length);
    expect(scores).toEqual(correctScores);
  });
  test("it's final index should have a length of 3", () => {
    expect(scores[9]).toHaveLength(3);
  });
  test("it's 11th frame should be undefined", () => {
    expect(scores[10]).toBeUndefined();
  });
});

describe('isSpare', () => {
  it('should return false if the sum of the two frames is not 10', () =>
    expect(isSpare([1, 0])).toBe(false));
  it('should return true if the sum of the two frames is 10', () => {
    expect(isSpare([9, 1])).toBe(true);
  });
  it('should return false if the sum of the two numbers is greater than ten', () => {
    expect(isSpare([1, 11])).toBe(false);
  });
});

describe('isStrike', () => {
  test('should return true if the first roll is 10', () => {
    expect(isStrike([10, 0])).toBe(true);
  });
  test('should return false if the second roll is 10', () => {
    expect(isStrike([0, 10])).toBe(false);
  });
  test('should return false if the first roll is greater than 10', () => {
    expect(isStrike([11, 0])).toBe(false);
  });
});
