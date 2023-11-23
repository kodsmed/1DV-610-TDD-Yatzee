import { jest } from '@jest/globals';
import ScoreList from '../serve/compiled-js/classes/ScoreList.js';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});

// Mock the BuildingsScoreStrategy enum so we can control the score.
const BuildingsScoreStrategy = jest.fn().mockImplementation(
  (strategyType, throwResult) => {
    return {
      score: 10000
    }
  }
);

// Mock the BuildingsStrategyType enum so we don't have to import it
const BuildingsStrategyType = jest.fn().mockImplementation((strategyType) => {
  return {
    strategyType: strategyType
  }
});

// Mock the ChanceScoreStrategy class so we can control the score.
const ChanceScoreStrategy = jest.fn().mockImplementation((throwResult) => {
  return {
    score: 100000
  }
});

// Mock the FaceValueScoreStrategy class so we can control the score.
const FaceValuesScoreStrategy = jest.fn().mockImplementation((faceValue, throwResult) => {
  return {
    score: 1
    }

});

// Mock NOfAKindScoreStrategy class so we can control the score.
const NOfAKindScoreStrategy = jest.fn().mockImplementation((numberOfAKind, throwResult) => {
  return {
    score: 100
  }
});

// Mock the PairsScoreStrategy class so we can control the score.
const PairsScoreStrategy = jest.fn().mockImplementation((throwResult) => {
  return {
    score: 10
  }
});

// Mock the StraightsScoreStrategy class so we can control the score.
const StraightsScoreStrategy = jest.fn().mockImplementation((straightType, throwResult) => {
  return {
    score: 1000
  }
});

// Mock the YahtzeeScoreStrategy class so we can control the score.
const YahtzeeScoreStrategy = jest.fn().mockImplementation((throwResult) => {
  return {
    score: 1000000
  }
});

describe ('ScoreList', () => {

 describe ('should have the desired properties', () => {
    it ('should have the property "ones"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.ones).toBeDefined();
    });

    it ('should have the property "twos"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.twos).toBeDefined();
    });

    it ('should have the property "threes"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threes).toBeDefined();
    });

    it ('should have the property "fours"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fours).toBeDefined();
    });

    it ('should have the property "fives"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fives).toBeDefined();
    });

    it ('should have the property "sixes"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.sixes).toBeDefined();
    });

    it ('should have the property "aPair"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.aPair).toBeDefined();
    });

    it ('should have the property "twoPairs"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.twoPairs).toBeDefined();
    });

    it ('should have the property "threePairs"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threePairs).toBeDefined();
    });

    it ('should have the property "threeOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.threeOfAKind).toBeDefined();
    });

    it ('should have the property "fourOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fourOfAKind).toBeDefined();
    });

    it ('should have the property "fiveOfAKind"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fiveOfAKind).toBeDefined();
    });

    it ('should have the property "smallStraight"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.smallStraight).toBeDefined();
    });

    it ('should have the property "largeStraight"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.largeStraight).toBeDefined();
    });

    it ('should have the property "fullStraight"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.fullStraight).toBeDefined();
    });

    it ('should have the property "house"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.house).toBeDefined();
    });

    it ('should have the property "villa"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.villa).toBeDefined();
    });

    it ('should have the property "tower"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.tower).toBeDefined();
    });

    it ('should have the property "chance"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.chance).toBeDefined();
    });

    it ('should have the property "yatzee"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.yatzee).toBeDefined();
    });
  });

  it ('should initialize all score-properties as NullScoreStrategy', () => {
    const scoreList = new ScoreList();
    let unexpectedProperties = [];
    for (let property in scoreList) {
      if (scoreList[property].constructor.name !== 'NullScoreStrategy') {
        unexpectedProperties.push(property +' is ' + scoreList[property].constructor.name);
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

  it ('should should throw and error if ones is set to a ScoreStrategy that is not FaceValueStrategy', () => {
    const scoreList = new ScoreList();
    expect(() => {
      scoreList.ones = new BuildingsScoreStrategy(BuildingsStrategyType.ONES, ThrowResult([1, 1, 1, 1, 1, 1]));
    }).toThrow(new Error('Invalid score strategy: BuildingsScoreStrategy\nExpected: FacesValuesScoreStrategy'));
  });

});