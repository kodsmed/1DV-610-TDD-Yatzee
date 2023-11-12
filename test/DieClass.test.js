import jest from 'jest';

import Die from '../src/classes/DieClass.js';
import { it } from 'node:test';

describe('Die', () => {

    it('should be defined', () => {
        expect(Die).toBeDefined();
    });

    it('should return a number', () => {
        const die = new Die();
        expect(typeof die.roll()).toBe('number');
    });

    it('should return a number between 1 and 6', () => {
        const die = new Die();
        for (let i = 0; i < 100; i++) {
          const rollResult = die.roll();
          expect(rollResult).toBeGreaterThanOrEqual(1);
          expect(rollResult).toBeLessThanOrEqual(6);
        }
    });

    it('should return a random number', () => {
        const die = new Die();
        const results = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
        for (let i = 0; i < 600; i++) {
          const rollResult = die.roll();
          results[rollResult]++;
        }

        for (let i = 1; i <= 6; i++) {
          // a perfect distribution would be 100, but it is random so we allow some margin.
          expect(results[i]).toBeGreaterThan(80);
        }
    });

    it('should remember the last roll', () => {
        const die = new Die();
        const rollResult = die.roll();
        expect(die.faceValue).toBe(rollResult);
        rollResult = die.roll();
        expect(die.faceValue).toBe(rollResult);
    });
});