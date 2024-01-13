import { login,updateUserPassword } from '../authenticateService/authService';
import React, {  useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from '../authenticateService/axiosConfig';

const ChangePasswordForm = ({ onChangePassword }) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = async() => {
    if (email.trim() === '' || oldPassword.trim() === '' || newPassword.trim() === '') {
      alert('Please enter all required information.');
      return;
    }

    // Authenticate user and change password
    try{
      await login(email,oldPassword)
      const response1 = await axios.get("/getuser",email);
      const data = response1.json()['role'];
      try{
        await updateUserPassword(email,newPassword,data)
      }catch(error){
        alert("cant update the password",error)
      }
      
    }
    catch(error){
      return null;
    }
    // Clear form fields
    setEmail('');
    setOldPassword('');
    setNewPassword('');
    onChangePassword();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control mr-sm-2"
        type={showPassword ? 'text' : 'password'}
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        className="form-control mr-sm-2"
        type={showPassword ? 'text' : 'password'}
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        className="btn btn-link"
        type="button"
        onClick={togglePasswordVisibility}
        style={{ fontSize: '1.5rem', color: '#007bff', marginLeft: '5px' }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="button"
        onClick={handlePasswordChange}
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
