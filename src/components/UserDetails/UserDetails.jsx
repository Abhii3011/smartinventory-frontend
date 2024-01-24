import React, { useEffect, useState } from 'react'
import axios from '../authenticateService/axiosConfig';

function UserDetails() {
  const [user,setUser] = useState([]);
  useEffect(() => {
    const useremail = localStorage.getItem("userEmail")
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/getuser/${useremail}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchUser();
  }, []); 
  return (
    
    <div className="welcome-message">
        {user && (
          <div>
            Welcome <span style={{ color: 'red', fontWeight: 'bold' }}>{user["userName"]} !</span> <br />
            Email: <span style={{ color: 'blue', fontWeight: 'bold' }}>{user["userEmail"]}</span> <br />
            Role: <span style={{ fontWeight: 'bold'}}>{user["role"]}</span>
            <div className="additional-text">
            The Smart Inventory Management System serves as a comprehensive solution for stock tracking across multiple godowns, allowing users to efficiently manage inwards, outwards, and returns. It offers a user-friendly interface for creating accounts, updating passwords, and maintaining employee details. The system facilitates the recording of essential information during transactions, capturing details such as godown location, capacity, and personnel involved. Users benefit from a graphical overview of monthly inwards, deliveries, and returns, aiding in informed decision-making. Additionally, the system automates the tracking of daily transactions and historical data, reducing the need for manual efforts. With features like detailed reports and real-time insights, the Smart Inventory Management System enhances overall operational efficiency and improves stock analysis for businesses.
           
        </div>
          </div>
        )}

        
      </div>
  )
}

export default UserDetails
