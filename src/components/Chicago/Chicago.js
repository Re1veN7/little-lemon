import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        {/* "Chicago" is a subtitle of the heading, not the title of a new part, so it's a paragraph, not an h3. */}
        <p className="chicago-subtitle">Chicago</p>
        {/* The "About" text from the course's Little Lemon style guide ("About the brand"). */}
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic
          cocktails in a lively but casual environment. The restaurant features a
          locally-sourced menu with daily specials.
        </p>
      </div>
      {/* Two photos of the owners that overlap each other, as in the course design.
          loading="lazy": this section is far down the page, so the browser waits to download the
          photos until the visitor scrolls near them. That makes the top of the page load faster. */}
      <div className="chicago-photos">
        <img
          className="chicago-photo chicago-photo-back"
          src="/images/mario-and-adrian-a.jpg"
          alt="Mario and Adrian talking over a row of dishes in the restaurant kitchen"
          width="800"
          height="533"
          loading="lazy"
        />
        <img
          className="chicago-photo chicago-photo-front"
          src="/images/mario-and-adrian-b.jpg"
          alt="Mario and Adrian laughing together in the kitchen, next to a brick pizza oven"
          width="800"
          height="533"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Chicago;
