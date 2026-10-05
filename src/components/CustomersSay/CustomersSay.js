import './CustomersSay.css';

// SAMPLE DATA: these reviewers and reviews are made up for the capstone. They are not real people.
const reviews = [
  {
    id: 'alex-example',
    name: 'Alex Example',
    rating: 5,
    text: 'Placeholder: the Greek salad was fresh and the staff made us feel at home.',
  },
  {
    id: 'sam-sample',
    name: 'Sam Sample',
    rating: 4,
    text: 'Placeholder: lovely bruschetta and a cosy room. We will be back.',
  },
  {
    id: 'jordan-placeholder',
    name: 'Jordan Placeholder',
    rating: 5,
    text: 'Placeholder: the lemon dessert alone is worth the trip.',
  },
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2>What our customers say</h2>
      <div className="customers-say-list">
        {reviews.map((review) => (
          <article className="customers-say-card" key={review.id}>
            <h3 className="customers-say-name">{review.name}</h3>
            <p className="customers-say-rating" role="img" aria-label={`Rated ${review.rating} out of 5`}>
              {'★'.repeat(review.rating)}
            </p>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
