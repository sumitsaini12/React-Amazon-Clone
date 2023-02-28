import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import HomePage from './HomePage';


function App() {


  return (
    <div className='font-bodyFont'>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
