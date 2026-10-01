import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Only the Route that matches the current URL is shown here. Header and Footer stay on every page. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
