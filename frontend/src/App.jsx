import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn"
import Results from "./pages/Results";
import React from "react";
import Quiz from "./pages/Quiz";
import Explore from "./pages/Explore";
import DomainDetail from "./pages/DomainDetail";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path ="/quiz"  element={<Quiz/>} />
          <Route path="/results" element={<Results />} />
          <Route path="/explore" element = {<Explore/>} />
          <Route path="/domain/:id" element = {<DomainDetail/>} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

