import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src="/images/logo-green-lemon-box.png" alt="Little Lemon logo" />

      <nav aria-label="Footer">
        <h2>Navigation</h2>
        <ul className="footer-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <address className="footer-contact">
        <h2>Contact</h2>
        <p>678 Pisa Ave, Chicago, IL 60611</p>
        {/* "tel:" and "mailto:" links open the phone app or email app. */}
        <p><a href="tel:+13125932744">(312) 593-2744</a></p>
        <p><a href="mailto:customer@littlelemon.com">customer@littlelemon.com</a></p>
      </address>

      <section>
        <h2>Social Media</h2>
        <ul className="footer-list">
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.x.com">X</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
