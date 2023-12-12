import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    <Route index path = "/" element = {<Navbar/>}/>
    <Route index path = "/home" element = {<Home/>}/>
  </Routes>
  
</Router>

  );
};

export default App;
