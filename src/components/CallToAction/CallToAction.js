import './CallToAction.css';
import LinkButton from '../LinkButton/LinkButton';

// The hero at the top of the home page: name, location, short intro and the main booking action.
function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="call-to-action-text">
        <h1>Little Lemon</h1>
        {/* A subtitle of the h1, not a new part of the page, so it's a paragraph. */}
        <p className="call-to-action-subtitle">Chicago</p>
        <p className="call-to-action-lead">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <LinkButton to="/reservations">Reserve a Table</LinkButton>
      </div>
      {/* No loading="lazy" here: this photo is visible as soon as the page opens, so it should load right away. */}
      <img
        className="call-to-action-image"
        src="/images/restauranfood.jpg"
        alt="A server in a black apron holding a slate tray of savoury éclairs topped with salmon, ham and vegetables"
        width="1200"
        height="1813"
      />
    </section>
  );
}

export default CallToAction;
