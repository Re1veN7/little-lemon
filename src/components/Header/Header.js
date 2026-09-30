import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header>
      <img className="header-logo" src="/images/logo-green-yellow-lemon.png" alt="Little Lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;