import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import { Nav } from "./pages/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>SepidehStyle</div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name/:id?" element={<Profile />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        <div>This is footer</div>
      </Router>
    </div>
  );
}

export default App;
