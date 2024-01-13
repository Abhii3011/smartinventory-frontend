import React from 'react';
import './App.css';
import Home from './Pages/Home';
import InvoicePage from './Pages/Invoice';
import LoginPage from './Pages/Login-Page';
import Management from './Pages/Management';
import Cart from './Pages/Cart';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';

function App() {
  console.info("in routes-->")
  return (
<Router>
  <Routes>
    <Route index path = "/" element = {<LoginPage/>}/>
    <Route index path = "/home" element = {localStorage.getItem('authenticated')?<Home/>: <LoginPage/>}/> 
    {localStorage.getItem('authenticated')?<Route index path="/invoice" element={<InvoicePage />}/>: <Route path = "*" element= {<Navigate to = "/" replace/>}/>}
    {localStorage.getItem('authenticated')?<Route index path='/management/*' element = {<Management/>}/>: <Route path = "*" element= {<Navigate to = "/" replace/>}/>}
    {localStorage.getItem('authenticated')?<Route index path='/cart' element = {<Cart/>}/>: <Route path = "*" element= {<Navigate to = "/" replace/>}/>}
  </Routes>
  
</Router>

  );
};

export default App;
