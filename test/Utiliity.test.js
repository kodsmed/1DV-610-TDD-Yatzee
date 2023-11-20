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

    it ('should return an empty array if no matches are found', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result.length).toBe(0);
    });

    it ('should return an array of [1,2,3] if the array is [1, 1, 2, 2, 3, 3] and the requiredOfAKind is 2', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 1, 2, 2, 3, 3];
      const requiredOfAKind = 2;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result).toEqual([1, 2, 3]);
    });

    it ('should return an empty array if the array is [1, 1, 2, 2, 3, 3] and the requiredOfAKind is 3', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 1, 2, 2, 3, 3];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result).toEqual([]);
    });
  });
});