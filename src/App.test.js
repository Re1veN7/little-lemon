import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  // getByRole finds an element the way a screen reader sees it, not by class name.
  const heading = screen.getByRole('heading', { level: 1, name: /little lemon/i });
  expect(heading).toBeInTheDocument();
});
