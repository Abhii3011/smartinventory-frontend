// LoginCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './LoginCard.css';
import { login } from '../../authenticateService/authService';
import { BeatLoader } from 'react-spinners';

function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading,setLoading] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNavigate = ()=>{
    localStorage.getItem('role')==="User"?navigate("/home"): navigate("/management")
  }
  const handleLoginClick = async() => {
    setLoading(false);
    
    try{
      await login(email,password)
      .then(() =>{
         handleNavigate()
        })
         .catch(()=>{setErrorMessage("Invalid Credentials");setLoading(true);})
      localStorage.setItem("userEmail",email);
    }catch{
      setErrorMessage('Invalid email or password. Please try again.');
      
      navigate('/')
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlEmail' type='email' size="lg" onChange={handleEmailChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlPswd' type='password' size="lg" onChange={handlePasswordChange} />
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
              {errorMessage && <p className="text-danger">{errorMessage}</p>}

              <button className="button-69" onClick={handleLoginClick}>
              {loading &&<div>
                Login
                </div>}
                {!loading && <div>
                <BeatLoader color='#36d7b7'/></div>}
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Register</a></p>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginCard
