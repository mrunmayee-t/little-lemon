import React, { useState } from "react";
import restaurant from "../assets/images/restaurant.jpg";
const BookingForm = () => {
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
    <>
      <div className="container-booking-form">
        <form
          style={{
            display: "grid",
            width: "300px",
            gap: "20px",
            margin: "auto",
          }}
          onSubmit={handleOnClick}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={bookingDate}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={bookingTime}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((element, index) => (
              <option key={index}>{element}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guestsNumber}
            onChange={(e) => setGuestes(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={ocasion}
            onChange={(e) => setOcasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button type="submit" style={{ width: "100%" }}>
            Make Your reservation
          </button>
        </form>
        <img
          src={restaurant}
          style={{
            width: "50rem",
            height: "30rem",
            margin: "auto",
            marginTop: "2%",
          }}
        />
      </div>
    </>
  );
};

export default BookingForm;
