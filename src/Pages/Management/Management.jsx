import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Route, Routes } from 'react-router-dom';
import './Management.css'; 
import UserDetails from '../../components/UserDetails';
import { useNavigate } from 'react-router-dom';
import Employee from '../../components/Employee';
import Godown from '../../components/Godown';
import Return from '../../components/Return';
import Report from '../../components/Report';
function Management() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const navigate = useNavigate();

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    navigate(`/management/${menuItem}`)
  };

  return (
    <div className="management-page">
      <Navbar />
      <div className="management-content">
        <Sidebar>
          <Menu
            selected={selectedMenuItem}
            onSelect={(menuItem) => handleMenuItemClick(menuItem)}
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem key="user-details" onClick={() => handleMenuItemClick('user-details')}>
              User Details
            </MenuItem>
            <MenuItem key="godowns" onClick={() => handleMenuItemClick('godowns')}>
              Godowns
            </MenuItem>
            <MenuItem key="employees" onClick={() => handleMenuItemClick('employees')}>
              Employees
            </MenuItem>
            <MenuItem key="inwards" component={<Link to="/management/inwards" />}>
              Inwards
            </MenuItem>
            <MenuItem key="deliveries" component={<Link to="/management/deliveries" />}>
              Deliveries
            </MenuItem>
            <MenuItem key="returns" onClick={() => handleMenuItemClick('returns')}>
              Returns
            </MenuItem>
            <MenuItem key="reports" onClick={() => handleMenuItemClick('reports')}>
              Reports
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="management-main">
          <Routes>
          <Route path="/" element={<UserDetails />} />
          </Routes>
        
        {selectedMenuItem === 'user-details' && (
            <Routes>
              <Route path="/user-details" element={<UserDetails />} />
            </Routes>
          )}
          {selectedMenuItem === 'employees' && (
            <Routes>
              <Route path="/employees" element={<Employee />} />
            </Routes>
          )}
          {selectedMenuItem === 'godowns' && (
            <Routes>
              <Route path="/godowns" element={<Godown />} />
            </Routes>
          )}
          {selectedMenuItem === 'returns' && (
            <Routes>
              <Route path="/returns" element={<Return />} />
            </Routes>
          )}
          {selectedMenuItem === 'reports' && (
            <Routes>
              <Route path="/reports" element={<Report />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}

export default Management;
