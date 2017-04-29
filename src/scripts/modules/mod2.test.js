import addArray from './mod2';

describe('addArray()', () => {
  it('correctly sums all integers in an array', () => {
    expect(addArray([1, 2, 3, 4])).toEqual(10);
  });
});
