// Management.js
import React from 'react';
import Navbar from '../../components/Navbar';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link , Route, Routes} from 'react-router-dom';
import './Management.css'; // Import your CSS file for styling
import UserDetails from '../../components/UserDetails';

function Management() {
  // Retrieve user details from local storage
  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="management-page">
      <Navbar />
      <div className="management-content">
        <Sidebar>
          {/* Your existing menu items */}
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem component={<Link to="" />}>User Details</MenuItem>
            <MenuItem component={<Link to="/management/godowns" />}>Godowns</MenuItem>
            <MenuItem component={<Link to="/management/employees" />}>Employees</MenuItem>
            <MenuItem component={<Link to="/management/inwards" />}>Inwards</MenuItem>
            <MenuItem component={<Link to="/management/deliveries" />}>Deliveries</MenuItem>
            <MenuItem component={<Link to="/management/returns" />}>Returns</MenuItem>
            <MenuItem component={<Link to="/management/reports" />}>Reports</MenuItem>
          </Menu>
        </Sidebar>
        <div className="management-main">
          <Routes>
            <Route path = "/"  element = {<UserDetails/>}/>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default Management;

