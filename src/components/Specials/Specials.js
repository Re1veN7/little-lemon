import SpecialCard from '../SpecialCard/SpecialCard';
import LinkButton from '../LinkButton/LinkButton';
import './Specials.css';

// Dish names, prices and descriptions come from the course mock-up (Module 1 exercises).
// The array lives outside the component because it never changes, so it isn't re-created on every render.
const specials = [
  {
    id: 'greek-salad',
    name: 'Greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/greek-salad.png',
    alt: 'A bowl of Greek salad with feta, olives, tomatoes and cucumber',
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/images/bruschetta.png',
    alt: 'Toasted bread topped with chopped tomatoes, basil and shaved cheese',
  },
  {
    id: 'lemon-dessert',
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/images/lemon-dessert.png',
    alt: 'A slice of lemon dessert topped with toasted meringue and a bright yellow filling',
  },
];

function Specials() {
  return (
    <section className="specials">
      {/* The title and the menu button share one row on wider screens. */}
      <div className="specials-header">
        <h2>This week's specials!</h2>
        {/* Same destination as the nav's "Menu" link. */}
        <LinkButton to="/menu">Online Menu</LinkButton>
      </div>
      <div className="specials-list">
        {specials.map((dish) => (
          <SpecialCard
            key={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
            alt={dish.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
