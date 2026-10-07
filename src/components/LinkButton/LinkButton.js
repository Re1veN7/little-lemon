import './LinkButton.css';
import { Link } from 'react-router';

// A link that looks like a button. It goes to another page, so it's a real link (<a>), not a <button>.
// "children" is whatever you put between <LinkButton> and </LinkButton>, for example "Online Menu".
function LinkButton({ to, children }) {
  return (
    <Link to={to} className="link-button">
      {children}
    </Link>
  );
}

export default LinkButton;
