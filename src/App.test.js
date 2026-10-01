import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders the main heading', () => {
  // App needs a router around it, like BrowserRouter in index.js.
  // MemoryRouter keeps the URL in memory, so the test doesn't need a real address bar.
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  // getByRole finds an element the way a screen reader sees it, not by class name.
  const heading = screen.getByRole('heading', { level: 1, name: /little lemon/i });
  expect(heading).toBeInTheDocument();
});
