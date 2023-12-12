import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Invoice from './Pages/Invoice';

function App() {
  return (
<Router>
  <Routes>
    {/* <Route exact = "/" element = {<Navbar/>}/> */}
    <Route index element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/invoice" element={<Invoice />} />

  </Routes>
  
</Router>

  );
};

export default App;
