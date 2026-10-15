// Small pure functions: each takes a value and returns true (valid) or false.
// "Pure" means the same input always gives the same answer and nothing else is changed,
// which makes them easy to test.

// The occasions the form offers. The form builds its options from this same list.
export const OCCASIONS = ['Birthday', 'Anniversary'];

// A 'YYYY-MM-DD' date that is today or later. "today" is passed in, so tests can use a fixed day.
export function isValidDate(date, today) {
  // The exact shape a date input gives: 4 digits, dash, 2 digits, dash, 2 digits.
  const looksLikeDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
  return looksLikeDate && date >= today;
}

// One of the times the API offered for that day.
export function isValidTime(time, availableTimes) {
  return availableTimes.includes(time);
}

// A whole number from 1 to 10. The input gives a string, so convert it first.
export function isValidGuests(guests) {
  const count = Number(guests);
  return Number.isInteger(count) && count >= 1 && count <= 10;
}

// One of the occasions in the list above.
export function isValidOccasion(occasion) {
  return OCCASIONS.includes(occasion);
}
