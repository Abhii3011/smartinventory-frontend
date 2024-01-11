import React from 'react';

function GodownDetailsTable({ selectedGodown }) {
  if (!selectedGodown) {
    return null;
  }

  return (
    <div className="user-details-table">
      <h2 style={{fontStyle : 'italic'}}>Godown Details</h2>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(selectedGodown).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GodownDetailsTable;
