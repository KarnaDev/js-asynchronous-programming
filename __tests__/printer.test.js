import { jest } from '@jest/globals';
import fs from 'fs';
import print from '../src/printer.js';

test('readFile', () => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print('__tests__/printer.test.js');

  return new Promise((done) => {
    setTimeout(() => {
      const expected = [fs.readFileSync('__tests__/printer.test.js', 'utf-8')];
      expect(results).toEqual(expected);
      done();
    }, 2000);
  });
});
