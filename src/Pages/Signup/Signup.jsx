import React, { useState } from 'react';
import { userSignUp } from '../../components/authenticateService/authService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.userPassword !== formData.confirmPassword) {
      console.error("Password and confirm password don't match");
      // You can handle the mismatch error (show a message, disable the submit button, etc.)
      return;
    }

    try {
      await userSignUp(formData).then(navigate('/')).catch((error) => console.error("Signup failed", error));
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  const containerStyle = {
    backgroundImage: `url('https://kinsta.com/wp-content/uploads/2023/03/react-static-site-generator-1536x768.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    width: '300px',
    margin: 'auto',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    background: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#fff' }}>Signup</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Full Name:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Set Password:
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
