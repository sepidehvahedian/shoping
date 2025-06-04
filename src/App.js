import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import { Nav } from "./pages/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
