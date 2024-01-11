import React, { useState } from 'react';
import Logo from '../Requires/Logo';
import GodownDetailsTable from '../GodownDetails';
import './Navbar.css';
import Logout from '../cards/Logout';
import { useNavigate } from 'react-router-dom';



// Import the dummy Godown data
import { GodownTableData } from '../ManagementData/ManagementData';

function Navbar() {
  const [selectedGodown, setSelectedGodown] = useState(null);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const navigate = useNavigate();

  const handleCartItems = () => {
    navigate('/cart');
  };
  
  // const handleCartItems = () => {
  //   navigate('/cart', { state: { cartItems } });
  // };

  const handleGodownChange = (event) => {
    const selectedGodownId = event.target.value;
    const selectedGodown = GodownTableData.data.find(
      (godown) => godown['Godown ID'] === selectedGodownId
    );
    setSelectedGodown(selectedGodown);
  };

  const handleLogout = () => {
    // Show the Logout component
    setLogoutVisible(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* Godown dropdown */}
            <li className="nav-item dropdown">
              <select
                className="form-control"
                onChange={handleGodownChange}
                value={selectedGodown ? selectedGodown['Godown ID'] : ''}
              >
                <option value="">Select Godown</option>
                {GodownTableData.data.map((godown) => (
                  <option key={godown['Godown ID']} value={godown['Godown ID']}>
                    {godown['Godown ID']} - {godown.Location}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart" onClick={handleCartItems} tabIndex="-1">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/management" tabIndex="-1">
                Management
              </a>
            </li>
          </ul>

          <button
            className="btn btn-outline-danger"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Render Godown Details Table below the Navbar */}
      <GodownDetailsTable selectedGodown={selectedGodown} />

      {/* Render the Logout component if visible */}
      {logoutVisible && <Logout />}
    </>
  );
}

export default Navbar;
