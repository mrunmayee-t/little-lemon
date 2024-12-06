import heroImg from "../assets/images/restauranfood.jpg";
import { useState } from "react";

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleReserveTableClick = () => {};
  return (
    <main>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button onClick={handleReserveTableClick}>Reserve a Table</button>
      </div>
      <img src={heroImg} alt="hero image" className="hero-img" />
    </main>
  );
};

export default Main;
