import { useState } from "react";

const Booking = () => {
  const [bookingDate, setDate] = useState("");
  const [bookingTime, setTime] = useState("");
  const [guestsNumber, setGuestes] = useState("");
  const [ocasion, setOcasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [tableBooking, setTableBooking] = useState("");

  const handleOnClick = () => {
    console.log("submit clicked");
  };

  return (
    <form
      style="display: grid; max-width: 200px; gap: 20px"
      onSubmit={handleOnClick}
    >
      <label for="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={bookingDate}
        onChange={(e) => setDate(e.target.value)}
      />
      <label for="res-time">Choose time</label>
      <select
        id="res-time "
        value={bookingTime}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((element) => (
          <option>{element}</option>
        ))}
      </select>
      <label for="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestsNumber}
        onChange={(e) => setGuestes(e.target.value)}
      />
      <label for="occasion">Occasion</label>
      <select
        id="occasion"
        value={ocasion}
        onChange={(e) => setOcasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default Booking;
