// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelList from "./pages/HotelList";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const myTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#16213e",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotellist" element={<HotelList />} />
          <Route path="/hotel/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
