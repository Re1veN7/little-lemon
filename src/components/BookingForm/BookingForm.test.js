import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the "Choose date" label', () => {
  // BookingForm now needs props from Main, so the test gives it some.
  // jest.fn() is a fake dispatch: this test never changes the date, so it's never called.
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={jest.fn()} />);
  const label = screen.getByText('Choose date');
  expect(label).toBeInTheDocument();
});
