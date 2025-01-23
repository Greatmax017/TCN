import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from './pages/Home';

const root = document.getElementById("root");

function App() {
  return (

    <BrowserRouter>
  <Routes>
  

  <Route path="/" element={<HomePage />} />
 
  </Routes>
  </BrowserRouter>

);
  
}

export default App
