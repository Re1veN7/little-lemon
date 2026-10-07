import './SpecialCard.css';
import { Link } from 'react-router';

function SpecialCard({ name, price, description, image, alt }) {
  return (
    <article className="special-card">
      <img className="special-card-image" src={image} alt={alt} />
      <h3 className="special-card-title">{name}</h3>
      <p className="special-card-price">{price}</p>
      <p>{description}</p>
      {/* Same destination as the nav's "Order Online" link.
          Three cards all say "Order a delivery", so the aria-label adds the dish name:
          a screen reader user who jumps between links then knows which dish each one is for. */}
      <Link to="/order-online" className="special-card-order" aria-label={`Order a delivery: ${name}`}>
        Order a delivery
        {/* A small bicycle icon. aria-hidden: it's decoration, the text already says what the link does. */}
        <svg
          className="special-card-order-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M5.5 17.5 9 9h5l4.5 8.5M12 17.5 9 9M14 9l-1-3h2.5" />
        </svg>
      </Link>
    </article>
  );
}

export default SpecialCard;
