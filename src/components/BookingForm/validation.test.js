import { isValidDate, isValidTime, isValidGuests, isValidOccasion } from './validation';

// A fixed "today", so these tests give the same result on any day they run.
const today = '2026-10-13';

describe('isValidDate', () => {
  test('accepts today and later dates', () => {
    expect(isValidDate(today, today)).toBe(true);
    expect(isValidDate('2026-12-01', today)).toBe(true);
  });

  test('rejects past, empty and badly shaped dates', () => {
    expect(isValidDate('2026-10-12', today)).toBe(false);
    expect(isValidDate('', today)).toBe(false);
    expect(isValidDate('2026-1-14', today)).toBe(false);
  });
});

describe('isValidTime', () => {
  test('accepts a time that is offered', () => {
    expect(isValidTime('17:00', ['17:00', '18:00'])).toBe(true);
  });

  test('rejects a time that is not offered, or no time at all', () => {
    expect(isValidTime('21:00', ['17:00', '18:00'])).toBe(false);
    expect(isValidTime('', [])).toBe(false);
  });
});

describe('isValidGuests', () => {
  test('accepts whole numbers from 1 to 10, including both edges', () => {
    // test.each would be shorter; a loop keeps it easy to read.
    ['1', '4', '10'].forEach((guests) => {
      expect(isValidGuests(guests)).toBe(true);
    });
  });

  test('rejects numbers outside 1-10, decimals and an empty field', () => {
    ['0', '11', '4.5', ''].forEach((guests) => {
      expect(isValidGuests(guests)).toBe(false);
    });
  });
});

describe('isValidOccasion', () => {
  test('accepts the offered occasions', () => {
    expect(isValidOccasion('Birthday')).toBe(true);
    expect(isValidOccasion('Anniversary')).toBe(true);
  });

  test('rejects anything else', () => {
    expect(isValidOccasion('Graduation')).toBe(false);
    expect(isValidOccasion('')).toBe(false);
  });
});
