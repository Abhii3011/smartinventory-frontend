import React, { useState, useEffect } from 'react';
import Logo from '../Requires/Logo';
import UserDetailsTable from '../GodownDetails/UserDetailsTable';
import './Navbar.css';
  

function Navbar() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch Users data from ReqRes API
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserChange = event => {
    const selectedUserId = event.target.value;
    const selectedUser = users.find(user => user.id === parseInt(selectedUserId, 10));
    setSelectedUser(selectedUser);
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
            <li className="nav-item">
              <a className="nav-link" href="/Products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Cart" tabIndex="-1">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/management" tabIndex="-1">
                Management
              </a>
            </li>

            {/* Godown dropdown */}
            <li className="nav-item dropdown">
              <select
                className="form-control"
                onChange={handleUserChange}
                value={selectedUser ? selectedUser.id : ''}
              >
                <option value="" disabled>Select Godown</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.first_name} {user.last_name}
                  </option>
                ))}
              </select>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Render User Details Table below the Navbar */}
      <UserDetailsTable selectedUser={selectedUser} />
    </>
  );
}

export default Navbar;
