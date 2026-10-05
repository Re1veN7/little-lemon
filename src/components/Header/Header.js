import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src="/images/logo-green-yellow-lemon.png" alt="Little Lemon logo" />
      <Nav label="Main" listClassName="nav-list" />
    </header>
  );
}

export default Header;