// A date has two shapes in this app: the 'YYYY-MM-DD' string a date input uses,
// and the Date object fetchAPI uses. Both helpers work in LOCAL time (the visitor's
// own calendar day), never UTC, so the day can't shift by time zone.

// Date -> 'YYYY-MM-DD'
export function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 'YYYY-MM-DD' -> Date at local midnight
export function fromInputDate(text) {
  const [year, month, day] = text.split('-').map(Number);
  return new Date(year, month - 1, day);
}
