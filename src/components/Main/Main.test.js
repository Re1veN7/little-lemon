import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../../api';
import { toInputDate } from '../../utils/dates';

// Replace the course API with a fake, so these tests don't depend on today's date.
jest.mock('../../api');
// CRA wipes every mock (its answers and its call history) before each test,
// so each test sets its own answer with mockReturnValue.

test('initializeTimes asks the API about today and returns its times', () => {
  fetchAPI.mockReturnValue(['17:00', '18:00']);

  const times = initializeTimes();

  expect(times).toEqual(['17:00', '18:00']);
  // "Today" is checked against today, so this passes on any day you run it.
  const askedDate = fetchAPI.mock.calls[0][0];
  expect(toInputDate(askedDate)).toBe(toInputDate(new Date()));
});

test('updateTimes asks the API about the picked date and returns its times', () => {
  fetchAPI.mockReturnValue(['19:00', '20:30']);
  const state = ['17:00'];
  const action = { type: 'DATE_CHANGED', date: '2026-10-09' };

  const result = updateTimes(state, action);

  expect(result).toEqual(['19:00', '20:30']);
  // It must ask about Oct 9 in local time, not a day off.
  expect(toInputDate(fetchAPI.mock.calls[0][0])).toBe('2026-10-09');
});

test('updateTimes leaves the times alone for an action it does not know', () => {
  const state = ['17:00'];

  expect(updateTimes(state, { type: 'RESET' })).toBe(state);
  expect(fetchAPI).not.toHaveBeenCalled();
});
