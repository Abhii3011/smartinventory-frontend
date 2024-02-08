import React, { useState, useEffect } from 'react';
import Logo from '../Requires/Logo';
import GodownDetailsTable from '../GodownDetails';
import './Navbar.css';
import Logout from '../cards/Logout';
import { useNavigate } from 'react-router-dom';
import ChangePasswordForm from '../ChangePasswordForm';
import { fetchGodownData } from '../ManagementData/ManagementData';
import { SyncLoader } from 'react-spinners';

function Navbar({cartItems}) {
  const [godownData, setGodownData] = useState([]);
  const [selectedGodown, setSelectedGodown] = useState(null);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();

  const handlePasswordChange = () => {

    setChangePasswordVisible("false")
  };
  
  const handleCartItems = () => {
    navigate('/cart', { state: { cartItems } });
  };
  useEffect(() => {
    fetchGodownData()
      .then((data) => { setGodownData(data)})
      .catch((error) => console.error('Error setting Godown data:', error));
  }, []);

  const handleGodownChange = (event) => {
    const selectedGodownId = event.target.value;
    const selectedGodown = godownData.find(
      (godown) => godown['godownId'] === selectedGodownId
    );
    setSelectedGodown(selectedGodown);
  };

  const handleLogout = () => {
    // Show the Logout component
    setLoading(true)
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
            {localStorage.getItem('role')==="user"&&<li className="nav-item">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>}

            {/* Godown dropdown */}
            {localStorage.getItem('role')==="User"&&<li className="nav-item dropdown">
              <select
                className="form-control"
                onChange={handleGodownChange}
                value={selectedGodown ? selectedGodown['Godown ID'] : ''}
              >
                <option value="">Select Godown</option>
                {godownData.map((godown) => (
                  <option key={godown['godownId']} value={godown['godownId']}>
                    {godown['godownId']} - {godown['location']}
                  </option>
                ))}
              </select>
            </li>}
            {localStorage.getItem('role')==="User"&&<li className="nav-item">
              <a className="nav-link" href="/cart" onClick={handleCartItems} >
                Cart
              </a>
            </li>}
            {(localStorage.getItem('role')==="Manager" || localStorage.getItem('role')==="Admin")&&<li className="nav-item">
              <a className="nav-link" href="/management" tabIndex="-1">
                Management
              </a>
            </li>}
            {/* Add a button for changing password */}
            <li className="nav-item">
              <button
                className="btn btn-outline-info"
                onClick={() => setChangePasswordVisible(true)}
              >
                Change Password
              </button>
            </li>
          </ul>

          <button
            className="btn btn-outline-danger"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleLogout}
          >
            {loading&&<div><SyncLoader color="#FBEEE6" size={10}/>
            </div>}
            {!loading && <div>Log Out</div>}
          </button>
        </div>
      </nav>

      {/* Render Godown Details Table below the Navbar */}
      <GodownDetailsTable selectedGodown={selectedGodown} />
      {changePasswordVisible && <ChangePasswordForm onChangePassword={handlePasswordChange} />}
      {/* Render the Logout component if visible */}
      {logoutVisible && <Logout />}
    </>
  );
}

export default Navbar;
