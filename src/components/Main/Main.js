import './Main.css';
import { Link } from 'react-router';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';

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
          <Link to="/reservations" className="main-hero-button">Reserve a Table</Link>
        </div>
        <img className="main-hero-image" src="/images/greek-salad.png" alt="A traditional Greek salad" width="680" height="486" />
      </section>
      <Specials />
      <CustomersSay />
    </main>
  );
}

export default Main;
