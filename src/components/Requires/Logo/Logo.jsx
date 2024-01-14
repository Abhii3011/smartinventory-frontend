import React from 'react'
import './Logo.css'
import sims_logo from '../../Files/sims-logo-removebg.png'
import { useNavigate } from 'react-router-dom'
function Logo() {
  const Navigate = useNavigate();
  const handleClick = () =>
  {
    localStorage.getItem("role")==="User"?Navigate('/home'): Navigate('/management')
  }
  return (
    <div onClick={handleClick} className='logo-section'>
        <img className='logo' src={sims_logo} alt="logo"/>
        <h2 className='logo-text'>SIMS</h2>
    </div>
  )
}

export default Logo
