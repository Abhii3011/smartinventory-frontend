import React from 'react'
import Logo from '../Requires/Logo';
import './Navbar.css'
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Logo />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Products">Products</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/Cart" tabindex="-1" >Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/management" tabindex="-1" >Management</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  )
}

export default Navbar;
// just to check if i my code is pulled
