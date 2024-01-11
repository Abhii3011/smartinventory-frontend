import React from 'react';

function GodownDetailsTable({ selectedUser }) {
  if (!selectedUser) {
    return null;
  }

  return (
    <div className="user-details-table">
      <h2 style={{fontStyle : 'italic'}}>Godown Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{selectedUser.id}</td>
          </tr>
          <tr>
            <th>Manager</th>
            <td>{`${selectedUser.first_name} ${selectedUser.last_name}`}</td>
          </tr>
          <tr>
            <th>Godown Location</th>
            <td>Location</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default GodownDetailsTable;
