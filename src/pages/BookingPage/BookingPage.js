import './BookingPage.css';
import BookingForm from '../../components/BookingForm/BookingForm';

// A section, not <main>: Main already wraps every page in the site's one <main>.
function BookingPage() {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Pick a date, time and party size, and we'll save you a table at Little Lemon.</p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;
