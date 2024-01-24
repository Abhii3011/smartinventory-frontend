import React from 'react';
import './App.css';
import Home from './Pages/Home';
import InvoicePage from './Pages/Invoice';
import LoginPage from './Pages/Login-Page';
import Management from './Pages/Management';
import Cart from './Pages/Cart';
import UserRoute from './components/UserRoutes/UserRoute';
import ManagementRoute from './components/ManagementRoutes/ManagementRoute';
import Signup from './Pages/Signup/Signup';
import BotpressChatComponent from './components/botPressChatbot/BotpressChatComponent';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  console.info("in routes-->")
  return (
<Router>
  <Routes>
    <Route index path = "/" element = {<LoginPage/>}/>
    <Route index path ="/signup" element = {<Signup/>}/>
    <Route path = "/" element = {<UserRoute/>}>
      <Route path= "home" element={<><Home/> <BotpressChatComponent /></>}/>
      <Route path= "home" element={<InvoicePage/>}/>
      <Route path= "home" element={<Cart/>}/>
      </Route>
    <Route path = "/" element = {<ManagementRoute/>}>
    <Route path= "/management/*" element={<><Management/> <BotpressChatComponent /></>}/>
      </Route> 
 
   
  </Routes>
  
</Router>

  );
};

export default App;
