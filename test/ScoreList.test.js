import { jest } from '@jest/globals';
import ThrowResult from '../serve/compiled-js/classes/ThrowResult.js';
import FaceValuesScoreStrategy from '../serve/compiled-js/classes/FaceValuesScoreStrategy.js';
import BuildingsScoreStrategy from '../serve/compiled-js/classes/BuildingsScoreStrategy.js';
import ChanceScoreStrategy from '../serve/compiled-js/classes/ChanceScoreStrategy.js';
import NOfAKindScoreStrategy from '../serve/compiled-js/classes/NOfAKindScoreStrategy.js';
import StraitsScoreStrategy from '../serve/compiled-js/classes/StraitsScoreStrategy.js';
import PairsScoreStrategy from '../serve/compiled-js/classes/PairsScoreStrategy.js';
import YatzeeScoreStrategy from '../serve/compiled-js/classes/YatzeeScoreStrategy.js';
import ScoreList from '../serve/compiled-js/classes/ScoreList.js';

//Mock ThrowResult
jest.mock('../serve/compiled-js/classes/ThrowResult.js', () => ({
  ThrowResult: jest.fn().mockImplementation((rollResult) => {
    console.log('Mock ThrowResult constructor called');
    return {
      rollResult: rollResult
    }
  })
}));

// Mock FaceValuesScoreStrategy
const mockFaceValuesScoreStrategy = jest
  .spyOn(FaceValuesScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 1;
  });

// Mock PairsScoreStrategy
const mockPairsScoreStrategy = jest
  .spyOn(PairsScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 10;
  });

// Mock NOfAKindScoreStrategy
const mockNOfAKindScoreStrategy = jest
  .spyOn(NOfAKindScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 100;
  });

// Mock StraitsScoreStrategy
const mockStraitsScoreStrategy = jest
  .spyOn(StraitsScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 1000;
  });

// Mock BuildingsScoreStrategy
const mockBuildingsScoreStrategy = jest
  .spyOn(BuildingsScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 10000;
  });

// Mock ChanceScoreStrategy
const mockChanceScoreStrategy = jest
  .spyOn(ChanceScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 100000;
  });

// Mock YatzeeScoreStrategy
const mockYatzeeScoreStrategy = jest
  .spyOn(YatzeeScoreStrategy.prototype, 'score', 'get')
  .mockImplementation(() => {
    return 1000000;
  });

const correctTypes = [
  new FaceValuesScoreStrategy(1, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new FaceValuesScoreStrategy(2, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new FaceValuesScoreStrategy(3, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new FaceValuesScoreStrategy(4, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new FaceValuesScoreStrategy(5, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new FaceValuesScoreStrategy(6, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new PairsScoreStrategy(1, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new PairsScoreStrategy(2, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new PairsScoreStrategy(3, new ThrowResult([1, 2, 3, 4, 5, 6])),
  new NOfAKindScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new NOfAKindScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new NOfAKindScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new StraitsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new StraitsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new StraitsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new BuildingsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new BuildingsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new BuildingsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6])),
  new ChanceScoreStrategy(new ThrowResult([1, 2, 3, 4, 5, 6])),
  new YatzeeScoreStrategy(new ThrowResult([1, 2, 3, 4, 5, 6]))
];

const alternativeCorrectTypes = [
  new FaceValuesScoreStrategy(1, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new FaceValuesScoreStrategy(2, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new FaceValuesScoreStrategy(3, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new FaceValuesScoreStrategy(4, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new FaceValuesScoreStrategy(5, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new FaceValuesScoreStrategy(6, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new PairsScoreStrategy(1, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new PairsScoreStrategy(2, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new PairsScoreStrategy(3, new ThrowResult([2, 2, 2, 2, 2, 2])),
  new NOfAKindScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new NOfAKindScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new NOfAKindScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new StraitsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new StraitsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new StraitsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new BuildingsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new BuildingsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new BuildingsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2])),
  new ChanceScoreStrategy(new ThrowResult([2, 2, 2, 2, 2, 2])),
  new YatzeeScoreStrategy(new ThrowResult([2, 2, 2, 2, 2, 2]))
];


const properties = [
  'ones',
  'twos',
  'threes',
  'fours',
  'fives',
  'sixes',
  'aPair',
  'twoPairs',
  'threePairs',
  'threeOfAKind',
  'fourOfAKind',
  'fiveOfAKind',
  'smallStrait',
  'largeStrait',
  'fullStrait',
  'house',
  'villa',
  'tower',
  'chance',
  'yatzee'
];


describe('ScoreList', () => {

  describe('should have the desired properties', () => {
    it('should have the property "ones"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.ones).toBeDefined();
    });

    it('should have the property "twos"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.twos).toBeDefined();
    });

    it('should have the property "threes"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threes).toBeDefined();
    });

    it('should have the property "fours"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fours).toBeDefined();
    });

    it('should have the property "fives"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fives).toBeDefined();
    });

    it('should have the property "sixes"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.sixes).toBeDefined();
    });

    it('should have the property "aPair"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.aPair).toBeDefined();
    });

    it('should have the property "twoPairs"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.twoPairs).toBeDefined();
    });

    it('should have the property "threePairs"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threePairs).toBeDefined();
    });

    it('should have the property "threeOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threeOfAKind).toBeDefined();
    });

    it('should have the property "fourOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fourOfAKind).toBeDefined();
    });

    it('should have the property "fiveOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fiveOfAKind).toBeDefined();
    });

    it('should have the property "smallStrait"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.smallStrait).toBeDefined();
    });

    it('should have the property "largeStrait"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.largeStrait).toBeDefined();
    });

    it('should have the property "fullStrait"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fullStrait).toBeDefined();
    });

    it('should have the property "house"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.house).toBeDefined();
    });

    it('should have the property "villa"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.villa).toBeDefined();
    });

    it('should have the property "tower"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.tower).toBeDefined();
    });

    it('should have the property "chance"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.chance).toBeDefined();
    });

    it('should have the property "yatzee"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.yatzee).toBeDefined();
    });
  });

  it('should initialize all score-properties as NullScoreStrategy', () => {
    const scoreList = new ScoreList();
    let unexpectedProperties = [];
    for (let property in scoreList) {
      if (scoreList[property].constructor.name !== 'NullScoreStrategy') {
        unexpectedProperties.push(property + ' is ' + scoreList[property].constructor.name);
      }
    }

    if (unexpectedProperties.length > 0) {
      let message = 'The following properties were not initialized as NullScoreStrategy:\n';
      for (let i = 0; i < unexpectedProperties.length; i++) {
        message += unexpectedProperties[i];
        if (i < unexpectedProperties.length - 1) {
          message += ',\n';
        }
      }
      console.log(message);
    }

    expect(unexpectedProperties.length).toBe(0);
  });

  it('should should throw and error if ones is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.ones = new BuildingsScoreStrategy('', new ThrowResult([1, 1, 1, 1, 1, 1]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  });

  it('should throw an error if twos is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.twos = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 2]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  })

  it('should throw an error if threes is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.threes = new BuildingsScoreStrategy('', new ThrowResult([3, 3, 3, 3, 3, 3]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  })

  it('should throw an error if fours is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.fours = new BuildingsScoreStrategy('', new ThrowResult([4, 4, 4, 4, 4, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  })

  it('should throw an error if fives is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.fives = new BuildingsScoreStrategy('', new ThrowResult([5, 5, 5, 5, 5, 5]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  })

  it('should throw an error if sixes is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.sixes = new BuildingsScoreStrategy('', new ThrowResult([6, 6, 6, 6, 6, 6]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: FaceValuesScoreStrategy');
  })

  it('should throw an error if a pair is set to a ScoreStrategy that is not PairsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.aPair = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 3, 4, 5, 6]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: PairsScoreStrategy');
  })

  it('should throw an error if two pairs is set to a ScoreStrategy that is not PairsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.twoPairs = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 3, 3, 4, 5]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: PairsScoreStrategy');
  })

  it('should throw an error if three pairs is set to a ScoreStrategy that is not PairsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.threePairs = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 3, 3, 4, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: PairsScoreStrategy');
  })

  it('should throw an error if three of a kind is set to a ScoreStrategy that is not NOfAKindScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.threeOfAKind = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 3, 3, 2, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: NOfAKindScoreStrategy');
  })

  it('should throw an error if four of a kind is set to a ScoreStrategy that is not NOfAKindScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.fourOfAKind = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 3, 2, 2, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: NOfAKindScoreStrategy');
  })

  it('should throw an error if five of a kind is set to a ScoreStrategy that is not NOfAKindScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.fiveOfAKind = new BuildingsScoreStrategy('', new ThrowResult([2, 2, 2, 2, 2, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: NOfAKindScoreStrategy');
  })

  it('should throw an error if small strait is set to a ScoreStrategy that is not StraitsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.smallStrait = new BuildingsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: StraitsScoreStrategy');
  })

  it('should throw an error if large strait is set to a ScoreStrategy that is not StraitsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.largeStrait = new BuildingsScoreStrategy('', new ThrowResult([2, 3, 4, 5, 6, 4]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: StraitsScoreStrategy');
  })

  it('should throw an error if full strait is set to a ScoreStrategy that is not StraitsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.fullStrait = new BuildingsScoreStrategy('', new ThrowResult([1, 2, 3, 4, 5, 6]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: StraitsScoreStrategy');
  })

  it('should throw an error if house is set to a ScoreStrategy that is not BuildingsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.house = new YatzeeScoreStrategy(new ThrowResult([1, 1, 1, 2, 2, 3]));
    }).toThrow('Invalid score strategy: YatzeeScoreStrategy\nExpected: BuildingsScoreStrategy');
  })

  it('should throw an error if villa is set to a ScoreStrategy that is not BuildingsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.villa = new YatzeeScoreStrategy(new ThrowResult([1, 1, 1, 2, 2, 2]));
    }).toThrow('Invalid score strategy: YatzeeScoreStrategy\nExpected: BuildingsScoreStrategy');
  })

  it('should throw an error if tower is set to a ScoreStrategy that is not BuildingsScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.tower = new YatzeeScoreStrategy(new ThrowResult([1, 1, 1, 1, 2, 2]));
    }).toThrow('Invalid score strategy: YatzeeScoreStrategy\nExpected: BuildingsScoreStrategy');
  })

  it('should throw an error if chance is set to a ScoreStrategy that is not ChanceScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.chance = new YatzeeScoreStrategy(new ThrowResult([1, 1, 1, 2, 2, 3]));
    }).toThrow('Invalid score strategy: YatzeeScoreStrategy\nExpected: ChanceScoreStrategy');
  })

  it('should throw an error if yatzee is set to a ScoreStrategy that is not YatzeeScoreStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.yatzee = new BuildingsScoreStrategy('', new ThrowResult([1, 1, 1, 1, 1, 1]));
    }).toThrow('Invalid score strategy: BuildingsScoreStrategy\nExpected: YatzeeScoreStrategy');
  })

  describe('counter - tests', () => {
    it('no setter should throw an error if given a correct type', () => {
      const scoreList = new ScoreList();

      let didThrow = false;
      for (let i = 0; i < properties.length; i++) {
        try {
          scoreList[properties[i]] = correctTypes[i];
        } catch (e) {
          didThrow = true;
        }
      }

      expect(didThrow).toBe(false);
    });
  });

  describe('All Setters', () => {
    it('should set the ScoreStrategy correctly', () => {
      const scoreList = new ScoreList();

      for (let i = 0; i < properties.length; i++) {
        scoreList[properties[i]] = correctTypes[i];
      }

      let unexpectedPropertyEncountered = false;
      for (let i = 0; i < properties.length; i++) {
        if (scoreList[properties[i]] !== correctTypes[i]) {
          unexpectedPropertyEncountered = true;
        }
      }

      expect(unexpectedPropertyEncountered).toBe(false);
    });

    it('should only set the ScoreStrategy if the score is null', () => {
      const scoreList = new ScoreList();

      for (let i = 0; i < properties.length; i++) {
        scoreList[properties[i]] = correctTypes[i];
      }

      for (let i = 0; i < properties.length; i++) {
        scoreList[properties[i]] = alternativeCorrectTypes[i];
      }

      let unexpectedPropertyEncountered = false;
      for (let i = 0; i < properties.length; i++) {
        if (scoreList[properties[i]] !== correctTypes[i]) {
          unexpectedPropertyEncountered = true;
        }
      }

      expect(unexpectedPropertyEncountered).toBe(false);
    });
  });

  describe('should return the correct score', () => {
    it('should return 0 if no score has been set', () => {
      const scoreList = new ScoreList();
      expect(scoreList.score).toBe(0);
    });
  });

  it('should return 6 if all FaceValuesScoreStrategy are set to 1', () => {
    const scoreList = new ScoreList();
    for (let i = 0; i < 6; i++) {
      scoreList[properties[i]] = new FaceValuesScoreStrategy(i + 1, new ThrowResult([1, 2, 3, 4, 5, 6]));
    }

    expect(scoreList.score).toBe(6);
  });

  it('should add the 50 point bonus if all FaceValuesScoreStrategy sum up to 75 or more', () => {

    let mockFaceValuesScoreStrategy = jest
    .spyOn(FaceValuesScoreStrategy.prototype, 'score', 'get')
    .mockImplementation(() => {
      return 12.5;
    });

    let scoreList = new ScoreList();
    for (let i = 0; i < 6; i++) {
      scoreList[properties[i]] = new FaceValuesScoreStrategy(i + 1, new ThrowResult([2, 2, 2, 2, 2, 2]));
    }

    expect(scoreList.score).toBe(12.5 * 6 + 50);

    mockFaceValuesScoreStrategy = jest
    .spyOn(FaceValuesScoreStrategy.prototype, 'score', 'get')
    .mockImplementation(() => {
      return 13;
    });

    scoreList = new ScoreList();
    for (let i = 0; i < 6; i++) {
      scoreList[properties[i]] = new FaceValuesScoreStrategy(i + 1, new ThrowResult([2, 2, 2, 2, 2, 2]));
    }

    expect(scoreList.score).toBe(13 * 6 + 50);
  });
});