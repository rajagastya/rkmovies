import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Explore from "./Components/Explore/Explore";
import MoviePage from "./Components/MoviePage/MoviePage";

// import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
