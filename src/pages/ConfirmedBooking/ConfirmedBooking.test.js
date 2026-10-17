import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ConfirmedBooking from './ConfirmedBooking';

// LinkButton uses <Link>, which only works inside a router.
function setupPage() {
  render(
    <MemoryRouter>
      <ConfirmedBooking />
    </MemoryRouter>
  );
}

test('moves focus to the heading so screen readers announce the new page', () => {
  setupPage();
  const heading = screen.getByRole('heading', { level: 1, name: 'Booking Confirmed' });
  expect(heading).toHaveFocus();
});

test('sets the browser tab title', () => {
  setupPage();
  expect(document.title).toBe('Booking Confirmed | Little Lemon');
});
