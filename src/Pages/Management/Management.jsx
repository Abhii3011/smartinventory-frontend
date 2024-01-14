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
import Inwards from '../../components/Inwards/Inwards';
import Delivery from '../../components/Delivery/Delivery';

function Management() {
 const [selectedMenuItem, setSelectedMenuItem] = useState('');
 const navigate = useNavigate();
 const isVisible = localStorage.getItem("role")==="Admin"?true:false;

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
            {isVisible&&<MenuItem key="godowns" onClick={() => handleMenuItemClick('godowns')}>
              Godowns
            </MenuItem>}
            {isVisible&&<MenuItem key="employees" onClick={() => handleMenuItemClick('employees')}>
              Employees
            </MenuItem>}
            <MenuItem key="inwards" component={<Link to="/management/inwards" />}>
              Inwards
            </MenuItem>
            <MenuItem key="deliveries" component={<Link to="/management/deliveries" />}>
              Deliveries
            </MenuItem>
            <MenuItem key="returns" onClick={() => handleMenuItemClick('returns')}>
              Returns
            </MenuItem>
            {isVisible&&<MenuItem key="reports" onClick={() => handleMenuItemClick('reports')}>
              Reports
            </MenuItem>}
          </Menu>
        </Sidebar>
        <div className="management-main">
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/godowns" element={<Godown />} />
            <Route path="/inwards" element={<Inwards />} />
            <Route path="/deliveries" element={<Delivery/>} />
            <Route path="/returns" element={<Return />} />
            <Route path="/reports" element={<Report />} />
          </Routes>
          
        </div>

      </div>
    </div>
 );
}

export default Management;