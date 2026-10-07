import { initializeTimes, updateTimes } from './Main';

// Plain function tests: no rendering, just "give it input, check the output".

test('initializeTimes returns the starting list of times', () => {
  const times = initializeTimes();
  // toEqual compares the contents: each call builds a new array, so it's never the very same one.
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state it was given', () => {
  const state = ['17:00', '18:00'];
  const action = { type: 'DATE_CHANGED', date: '2026-10-09' };
  // toBe checks it's the very same array, which is exactly the claim "returns the same state".
  expect(updateTimes(state, action)).toBe(state);
});
