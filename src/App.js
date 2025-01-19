import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
