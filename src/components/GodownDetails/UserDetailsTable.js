import React from 'react';

function UserDetailsTable({ selectedUser }) {
  if (!selectedUser) {
    return null;
  }

  return (
    <div className="user-details-table">
      <h2>User Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{selectedUser.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{`${selectedUser.first_name} ${selectedUser.last_name}`}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{selectedUser.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailsTable;
