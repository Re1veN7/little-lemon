import { useState } from 'react';
import { toInputDate } from '../../utils/dates';
import './BookingForm.css';

// A controlled form: React state holds every field's value, and each input just shows it.
// It gets the available times from Main, and reports date changes back with dispatch.
function BookingForm({ availableTimes, dispatch, submitForm }) {
  // One piece of state per field.
  // Starts on today, so the date shown matches the times Main loaded for today.
  const [date, setDate] = useState(toInputDate(new Date()));
  const [time, setTime] = useState('17:00');
  // Kept as a string, like every input value; it's turned into a number only when it's used.
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  // When the date changes: update our own field AND tell Main, so it can work out the new times.
  function handleDateChange(e) {
    setDate(e.target.value);
    dispatch({ type: 'DATE_CHANGED', date: e.target.value });
  }

  // The times change with the date, so the time picked earlier may not exist anymore.
  // Work out the time to show during render: keep the picked one if it's still offered,
  // otherwise use the first offered time, or '' if there are none.
  const selectedTime = availableTimes.includes(time) ? time : availableTimes[0] || '';

  function handleSubmit(e) {
    // Stop the browser's default submit, which would reload the page and wipe the state.
    e.preventDefault();
    // Build the booking from state, in the shape the API should get.
    const formData = {
      date: date,
      // The time shown on screen, never a stale one the new date doesn't offer.
      time: selectedTime,
      // Number, not parseInt: it keeps exactly what was typed (2.7 stays 2.7), so validation can catch it.
      guests: Number(guests),
      occasion: occasion,
    };
    submitForm(formData);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={(e) => setTime(e.target.value)}>
        {/* Each time is unique and stays the same between renders, so it makes a good key. */}
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
