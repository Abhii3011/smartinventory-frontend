import React from 'react'
import Navbar from '../../components/Navbar'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function Management() {
  return (
    <div>
        <Navbar/>
        <Sidebar>
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
            <MenuItem component={<Link to="/management/service" />}>Management Service</MenuItem>
            <MenuItem component={<Link to="/management/godowns" />}>Godowns</MenuItem>
            <MenuItem component={<Link to="/management/employees" />}> Employees</MenuItem>
            <MenuItem component={<Link to="/management/inwards" />}> Inwards</MenuItem>
            <MenuItem component={<Link to="/management/deliveries" />}> Deliveries</MenuItem>
            <MenuItem component={<Link to="/management/returns" />}> Returns</MenuItem>
            <MenuItem component={<Link to="/management/reports" />}>Reports</MenuItem>

          </Menu>
        </Sidebar>
    </div>
    
    
  )
}

export default Management
