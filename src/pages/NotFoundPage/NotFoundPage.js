import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>We couldn't find that page. It may not be built yet.</p>
      <Link to="/">Back to the home page</Link>
    </main>
  );
}

export default NotFoundPage;
