// TableComp.jsx

import React from 'react';

function TableComp({ data, clicked1, clicked2, isVisible }) {
  const columns = (data !=null &&data.length > 0) ? Object.keys(data[0]) : [];

  const handleClick = () => {
    clicked1(true);
  };

  const handleClick2 = () => {
    clicked2(true);
  };

  return (
    <div>
      { data !== null && data.length>0 && 
      <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>}
      {isVisible && <div>
        <button
          className="button-37"
          style={{ backgroundColor: 'white', margin: '10px', color: 'black' }}
          onClick={handleClick}
        >
          Add
        </button>
        <button
          className="button-37"
          style={{ backgroundColor: 'white', margin: '10px', color: 'black' }}
          onClick={handleClick2}
        >
          Delete
        </button>
      </div>}
    </div>
  );
}

export default TableComp;
