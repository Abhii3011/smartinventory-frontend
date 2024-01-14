import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      // Clear user data from local storage
      localStorage.removeItem('authenticated');
      localStorage.removeItem('role')
      localStorage.removeItem('userEmail')
      // Stoping the spinner
      setLoading(false);

      // Redirect to the login page after the animation completes
      navigate('/')
    }, 4000); // Simulated 4 seconds delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="logout-container">
      {loading ? (
        // Show loading spinner while logging out
        <center><div className="logout-message">
          <p>Logging out...</p>
          <p>Thank you for using our SIMS! You are logging out.</p>
        </div></center>
      ) : (
        // Show "Thank You" message after logging out
        <center><div className="logout-message">
          <p>Thank you ! Have a great day :)</p>
        </div></center>
      )}
    </div>
  );
};

export default Logout;
