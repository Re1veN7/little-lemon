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
  {
    id: 'casey-demo',
    name: 'Casey Demo',
    rating: 4,
    text: 'Placeholder: friendly service and a quick table on a busy Friday night.',
  },
];

// Turns "Alex Example" into "AE": split the name into words, take each word's first letter, join them.
function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('');
}

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2>What our customers say</h2>
      <div className="customers-say-list">
        {reviews.map((review) => (
          <article className="customers-say-card" key={review.id}>
            <div className="customers-say-person">
              {/* aria-hidden: the initials only repeat the name next to them, so screen readers skip them. */}
              <span className="customers-say-avatar" aria-hidden="true">
                {getInitials(review.name)}
              </span>
              <h3 className="customers-say-name">{review.name}</h3>
            </div>
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
