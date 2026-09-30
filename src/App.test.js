import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I can do this!!!/i);
  expect(linkElement).toBeInTheDocument();
});
