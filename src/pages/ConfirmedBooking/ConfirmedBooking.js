import './ConfirmedBooking.css';
import LinkButton from '../../components/LinkButton/LinkButton';

// A section, not <main>: Main already wraps every page in the site's one <main>.
function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      {/* React 19 moves this into the page's <head>, so the browser tab says where you are. */}
      <title>Booking Confirmed | Little Lemon</title>
      {/* tabIndex={-1}: code can focus the heading, but it isn't added to the Tab order.
          The ref callback runs when the h1 appears and moves focus there, so screen readers
          announce the new page. */}
      <h1 tabIndex={-1} ref={(heading) => heading?.focus()}>Booking Confirmed</h1>
      <p>Thank you! Your table at Little Lemon is reserved. We look forward to seeing you.</p>
      <LinkButton to="/">Back to Home</LinkButton>
    </section>
  );
}

export default ConfirmedBooking;
