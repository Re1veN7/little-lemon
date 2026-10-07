import { Routes, Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import BookingPage from '../../pages/BookingPage/BookingPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// The one <main> landmark for the whole site. The page that matches the URL is drawn inside it,
// so every page gets exactly one <main> without each page having to add its own.
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default Main;
