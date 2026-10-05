import './SpecialCard.css';

function SpecialCard({ name, price, description, image, alt }) {
  return (
    <article className="special-card">
      <img className="special-card-image" src={image} alt={alt} />
      <h3 className="special-card-title">{name}</h3>
      <p className="special-card-price">{price}</p>
      <p>{description}</p>
    </article>
  );
}

export default SpecialCard;
