import './Footer.css';
import Nav from '../Nav/Nav';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src="/images/logo-green-lemon-box.png" alt="Little Lemon logo" />

      <div>
        <h2>Navigation</h2>
        <Nav label="Footer" listClassName="footer-list" />
      </div>

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
