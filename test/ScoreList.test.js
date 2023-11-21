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
    score: 1000000
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

describe ('ScoreList', () => {

 describe ('should have the desired properties', () => {

    it ('should have the property "ones"', () => {
      const scoreList = new ScoreList();
      expect(scoreList.ones).toBeDefined();
    });

  });

});