import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Componets/About/About";
import Home from "./Componets/Home/Home";
import PlayerDetails from "./Ficher/PlayerDeatils";
import AddTeam from "./Componets/AddTeam/AddTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/playerDetails/:name" element={<PlayerDetails />} />
        <Route path="/addTeam" element={<AddTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
