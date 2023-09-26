import { expect, test } from 'vitest';
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 14 + 5 to equal 19', () => {
  expect(sum(14, 5)).toBe(19);
});
