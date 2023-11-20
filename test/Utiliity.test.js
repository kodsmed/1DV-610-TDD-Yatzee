import Utility from '../src/classes/Utility.js';

describe('Utility', () => {
  describe (findOfAKind, () => {
    it('should return an array of numbers', () => {
      const Utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = findOfAKind(arrayToSearch, requiredOfAKind);
      expect(Array.isArray(result)).toBe(true);
    });
  });
});