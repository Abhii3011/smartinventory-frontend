import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Invoice from './Pages/Invoice';
import LoginPage from './Pages/Login-Page';
import Management from './Pages/Management';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    <Route index path = "/" element = {<LoginPage/>}/>
    <Route index path = "/home" element = {<Home/>}/>
    <Route index path='/invoice' element = {<Invoice/>}/>
    <Route index path='/management' element = {<Management/>}/>
  </Routes>
  
</Router>

  );
};

export default App;
