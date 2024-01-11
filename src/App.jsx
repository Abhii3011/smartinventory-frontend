import React from 'react';
import './App.css';
import Home from './Pages/Home';
import InvoicePage from './Pages/Invoice';
import LoginPage from './Pages/Login-Page';
import Management from './Pages/Management';
import Cart from './Pages/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    <Route index path = "/" element = {<LoginPage/>}/>
    <Route index path = "/home" element = {<Home/>}/>
    <Route index path="/invoice" element={<InvoicePage />}/>
    <Route index path='/management/*' element = {<Management/>}/>
    <Route index path='/cart' element = {<Cart/>}/>

  </Routes>
  
</Router>

  );
};

export default App;
