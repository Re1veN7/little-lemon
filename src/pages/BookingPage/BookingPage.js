import './BookingPage.css';
import BookingForm from '../../components/BookingForm/BookingForm';

// A section, not <main>: Main already wraps every page in the site's one <main>.
// It doesn't use the times itself; it just passes them from Main down to the form.
function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Pick a date, time and party size, and we'll save you a table at Little Lemon.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default BookingPage;
