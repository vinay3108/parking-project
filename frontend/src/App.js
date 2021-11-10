import React from 'react'
import Header from './Components/Header/Header'
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Benifit from './Components/Home/Benifit';
import Banner from './Components/Home/Banner';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Benifit />
        <Banner/>
      </Router>
    </>
  );
}

export default App
