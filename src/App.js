
import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Services from "./components/pages/Services";
import Footer from "./components/inc/Footer";
import Header from "./components/inc/Header";
import Important from "./components/pages/Important";
import Instrument from "./components/pages/Instrument";
import Workplace from "./components/pages/Workplace";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/important-of-skill-acquisition' element={<Important />}></Route>
        <Route exact path='/skill-is-a-powerful-instrument' element={<Instrument />}></Route>
        <Route exact path='/lack-of-skill-in-a-workplace' element={<Workplace />}></Route>
      </Routes>
      <Footer />
    </Router >

  );
}
export default App;
