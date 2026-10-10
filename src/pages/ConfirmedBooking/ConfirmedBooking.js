import './ConfirmedBooking.css';
import LinkButton from '../../components/LinkButton/LinkButton';

// A section, not <main>: Main already wraps every page in the site's one <main>.
function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed</h1>
      <p>Thank you! Your table at Little Lemon is reserved. We look forward to seeing you.</p>
      <LinkButton to="/">Back to Home</LinkButton>
    </section>
  );
}

export default ConfirmedBooking;
