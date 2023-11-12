import ThrowResult from '../serve/compiled-js/classes/ThrowResult.js';

describe('Throw', () => {
  // Mock the dies 1-6
  const die1 = { faceValue: jest.fn().mockReturnValue(1) };
  const die2 = { faceValue: jest.fn().mockReturnValue(2) };
  const die3 = { faceValue: jest.fn().mockReturnValue(3) };
  const die4 = { faceValue: jest.fn().mockReturnValue(4) };
  const die5 = { faceValue: jest.fn().mockReturnValue(5) };
  const die6 = { faceValue: jest.fn().mockReturnValue(6) };

  const diceArray = [die1, die2, die3, die4, die5, die6];


  it('should be defined', () => {
    expect(ThrowResult).toBeDefined();
  });

  it('should construct a new throw', () => {
    const throwObj = new ThrowResult(diceArray);
    expect(throwObj).toBeDefined();
  });

  it('should return an array', () => {
    const throwObj = new ThrowResult(diceArray);
    expect(Array.isArray(throwObj.rollResult)).toBe(true);
  });

  it('should return an array of numbers', () => {
    const throwObj = new ThrowResult(diceArray);
    const rollResult = throwObj.rollResult;
    expect(rollResult.every((value) => typeof value === 'number')).toBe(true);
  });

  it('should return an array of numbers between 1 and 6', () => {
    const throwObj = new ThrowResult(diceArray);
    const rollResult = throwObj.rollResult;
    expect(rollResult.every((value) => value >= 1 && value <= 6)).toBe(true);
  });

  it('should return the same numbers as the dies', () => {
    let throwObj = new ThrowResult(diceArray);
    let rollResult = throwObj.rollResult;
    expect(rollResult[0]).toBe(die1.faceValue());
    expect(rollResult[1]).toBe(die2.faceValue());
    expect(rollResult[2]).toBe(die3.faceValue());
    expect(rollResult[3]).toBe(die4.faceValue());
    expect(rollResult[4]).toBe(die5.faceValue());
    expect(rollResult[5]).toBe(die6.faceValue());

    throwObj = new ThrowResult([die6, die5, die4, die3, die2, die1]);
    rollResult = throwObj.rollResult;
    expect(rollResult[0]).toBe(die6.faceValue());
    expect(rollResult[1]).toBe(die5.faceValue());
    expect(rollResult[2]).toBe(die4.faceValue());
    expect(rollResult[3]).toBe(die3.faceValue());
    expect(rollResult[4]).toBe(die2.faceValue());
    expect(rollResult[5]).toBe(die1.faceValue());
  });
});