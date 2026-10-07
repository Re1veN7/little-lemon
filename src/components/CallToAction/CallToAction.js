import './CallToAction.css';
import { Link } from 'react-router';

// The hero at the top of the home page: name, location, short intro and the main booking action.
function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="call-to-action-text">
        <h1>Little Lemon</h1>
        {/* A subtitle of the h1, not a new part of the page, so it's a paragraph. */}
        <p className="call-to-action-subtitle">Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservations" className="call-to-action-button">Reserve a Table</Link>
      </div>
      <img className="call-to-action-image" src="/images/greek-salad.png" alt="A traditional Greek salad" width="680" height="486" />
    </section>
  );
}

export default CallToAction;
