import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    {/* <Route exact = "/" element = {<Navbar/>}/> */}
    <Route index element={<Navbar />} />
  </Routes>
  
</Router>

  );
};

export default App;
