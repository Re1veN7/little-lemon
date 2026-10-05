import SpecialCard from '../SpecialCard/SpecialCard';
import './Specials.css';

// PLACEHOLDER DATA: the names, prices and descriptions are placeholders.
// Replace them with the ones from the course style guide when you have them.
// The array lives outside the component because it never changes, so it isn't re-created on every render.
const specials = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    price: '$12.99',
    description: 'Placeholder: crisp lettuce, peppers, olives and feta, finished with garlic croutons.',
    image: '/images/greek-salad.png',
    alt: 'A bowl of Greek salad with feta, olives, tomatoes and cucumber',
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Placeholder: grilled bread rubbed with garlic, topped with tomatoes, basil and olive oil.',
    image: '/images/bruschetta.png',
    alt: 'Toasted bread topped with chopped tomatoes, basil and shaved cheese',
  },
  {
    id: 'lemon-dessert',
    name: 'Lemon Dessert',
    price: '$5.00',
    description: "Placeholder: a family recipe with a buttery base and a bright lemon filling.",
    image: '/images/lemon-dessert.png',
    alt: 'A slice of lemon dessert topped with toasted meringue and a bright yellow filling',
  },
];

function Specials() {
  return (
    <section className="specials">
      <h2>This week's specials</h2>
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
