import { useReducer } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import BookingPage from '../../pages/BookingPage/BookingPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// Builds the starting list of available times. A fixed list for now; Stage 3 asks the API.
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// The reducer: takes the current times and an action, returns the next times.
// For now every date has the same times, so it gives back exactly what it got.
export function updateTimes(state, action) {
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
