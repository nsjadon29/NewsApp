import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          
          <Routes>
            <Route path='/'><News pagesize={20} country='in' category='business'/></Route>
          </Routes>
          
      </div>
     
    )
  }
}
