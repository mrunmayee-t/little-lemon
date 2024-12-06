
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"

import Home from './components/Home';
import Booking from './components/Booking';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
