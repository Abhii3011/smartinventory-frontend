import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      // Clear user data from local storage
      localStorage.removeItem('user');

      // Stoping the spinner
      setLoading(false);

      // Redirect to the login page after the animation completes
      window.location.href = '/';
    }, 4000); // Simulated 4 seconds delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="logout-container">
      {loading ? (
        // Show loading spinner while logging out
        <div className="logout-message">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <p>Logging out...</p>
          <p>Thank you for using our SIMS! You are logging out.</p>
        </div>
      ) : (
        // Show "Thank You" message after logging out
        <div className="logout-message">
          <p>Thank you ! Have a great day :)</p>
        </div>
      )}
    </div>
  );
};

export default Logout;
