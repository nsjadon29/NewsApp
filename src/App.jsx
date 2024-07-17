import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App=()=>{
  
    return (
      <>
        <Navbar />
        <Router>
          <Routes>
            <Route
              path="/"
              element={<News pagesize={20} country="in" category="general" />}
            />
            <Route
              path="/business"
              element={<News pagesize={20} country="in" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News pagesize={20} country="in" category="entertainment" />}
            />
            <Route
              path="/general"
              element={<News pagesize={20} country="in" category="general" />}
            />
            <Route
              path="/health"
              element={<News pagesize={20} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News pagesize={20} country="in" category="science" />}
            />
            <Route
              path="/sports"
              element={<News pagesize={20} country="in" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News pagesize={20} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  
}
export default App;
