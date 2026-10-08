import { useReducer } from 'react';
import { Routes, Route } from 'react-router';
import { fetchAPI } from '../../api';
import { fromInputDate } from '../../utils/dates';
import HomePage from '../../pages/HomePage/HomePage';
import BookingPage from '../../pages/BookingPage/BookingPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// Builds the starting list of available times: the times for today,
// because the date field also starts on today.
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// The reducer: takes the current times and an action, returns the next times.
export function updateTimes(state, action) {
  if (action.type === 'DATE_CHANGED') {
    // action.date is the 'YYYY-MM-DD' string from the date input, but fetchAPI needs a Date.
    const date = fromInputDate(action.date);
    return fetchAPI(date);
  }
  // Any action we don't know about leaves the times unchanged.
  return state;
}

// The one <main> landmark for the whole site. The page that matches the URL is drawn inside it,
// so every page gets exactly one <main> without each page having to add its own.
function Main() {
  // The available times live here so the logic for "which times for which date" sits in one place.
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default Main;
