import './Main.css';

function Main() {
  return (
    <main>
      <section className="main-hero">
        <div className="main-hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <img className="main-hero-image" src="/images/greek-salad.png" alt="A traditional Greek salad" />
      </section>
    </main>
  );
}

export default Main;
