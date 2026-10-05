import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        {/* "Chicago" is a subtitle of the heading, not the title of a new part, so it's a paragraph, not an h3. */}
        <p className="chicago-subtitle">Chicago</p>
        {/* PLACEHOLDER TEXT: replace with the real "About" text from the course style guide. */}
        <p>
          Placeholder: Little Lemon is a family-owned Mediterranean restaurant, run by two
          brothers who grew up cooking their grandmother's recipes.
        </p>
        <p>
          Placeholder: we serve traditional dishes with a modern twist, using fresh
          ingredients from local Chicago markets.
        </p>
      </div>
      <img className="chicago-image" src="/images/shakshuka.png" alt="Dipping a bread in a pan of shakshuka" width="1080" height="1620" />
    </section>
  );
}

export default Chicago;
