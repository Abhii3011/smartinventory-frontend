import React from 'react'

function UserDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    
    <div className="welcome-message">
        {user && (
          <p>
            Welcome <span style={{ color: 'red', fontWeight: 'bold' }}>{user.name} !</span> <br />
            Email: <span style={{ color: 'blue', fontWeight: 'bold' }}>{user.email}</span> <br />
            Role: <span style={{ fontWeight: 'bold'}}>{user.role}</span>
            <p className="additional-text">
            The Smart Inventory Management System serves as a comprehensive solution for stock tracking across multiple godowns, allowing users to efficiently manage inwards, outwards, and returns. It offers a user-friendly interface for creating accounts, updating passwords, and maintaining employee details. The system facilitates the recording of essential information during transactions, capturing details such as godown location, capacity, and personnel involved. Users benefit from a graphical overview of monthly inwards, deliveries, and returns, aiding in informed decision-making. Additionally, the system automates the tracking of daily transactions and historical data, reducing the need for manual efforts. With features like detailed reports and real-time insights, the Smart Inventory Management System enhances overall operational efficiency and improves stock analysis for businesses.
           
        </p>
          </p>
        )}

        
      </div>
  )
}

export default UserDetails
