import Utility from '../serve/compiled-js/classes/Utility.js';

describe('Utility', () => {
  describe ('findOfAKind', () => {
    it ('should return an array', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(Array.isArray(result)).toBe(true);
    });

    it ('should return an empty array or an array of numbers', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result.every((value) => typeof value === 'number')).toBe(true);
    });
  });
});