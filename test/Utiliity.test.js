import Utility from '../serve/compiled-js/classes/Utility.js';

describe('Utility', () => {
  describe('findOfAKind', () => {
    it('should return an array', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 2;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return an empty array or an array of numbers', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result.every((value) => typeof value === 'number')).toBe(true);
    });

    it('should return an empty array if no matches are found', () => {
      const utility = new Utility();
      const arrayToSearch = [1, 2, 3, 4, 5, 6];
      const requiredOfAKind = 3;
      const result = utility.findOfAKind(arrayToSearch, requiredOfAKind);
      expect(result.length).toBe(0);
    });

    const testArrays = [
      [1, 1, 2, 2, 3, 3],
      [1, 1, 2, 2, 3, 3],
      [2, 5, 5, 2, 5, 2],
      [2, 5, 2, 2, 5, 2],
      [2, 5, 2, 2, 5, 3],
      [2, 5, 2, 2, 2, 2],
      [2, 2, 2, 2, 5, 3],
      [2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 3]
    ];

    const testRequiredOfAKind = [2, 3, 3, 4, 4, 5, 5, 6, 6];

    const testExpectedResults = [
      [3, 2, 1],
      [],
      [5, 2],
      [2],
      [],
      [2],
      [],
      [2],
      []
    ];

    runArrayTests(testArrays, testRequiredOfAKind, testExpectedResults);

    function runArrayTests(arrayToSearch, requiredOfAKind, expected) {
      for (let i = 0; i < arrayToSearch.length; i++) {
        it (`should return [${expected[i]}] when searching [${arrayToSearch[i]}] for ${requiredOfAKind[i]} of a kind`, () => {
          const utility = new Utility();
          const result = utility.findOfAKind(arrayToSearch[i], requiredOfAKind[i]);
          expect(result).toEqual(expected[i]);
        });
      }
    }

  });
});


