import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import { Login } from "./Login";
import { Reserve } from "./Reserve";
import { Calendar } from "./Calender";
import { Navbar } from "./Navbar";
import { Menu } from "./Menu"

import "./App.css"

const App = () => {
  const[clicked, iscliked] = useState(false)
  return (
    <Router>
      <Navbar clicked={clicked} iscliked={iscliked}/>
      {clicked? <Menu/> : null}
      <Routes>
        <Route exact path='' element={<Calendar/>}/>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='reserve' element={<Reserve/>}/>
      </Routes>
    </Router>
  );
};

export default App;