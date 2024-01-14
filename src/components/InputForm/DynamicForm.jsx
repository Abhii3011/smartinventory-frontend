import React, { useState } from 'react';

const DynamicForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const handleChange = (columnName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [columnName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const renderInput = (column) => {
    if (column.toLowerCase().includes('date')) {
      return (
        <input
          type="date"
          id={column}
          name={column}
          value={formData[column] || ''}
          onChange={(e) => handleChange(column, e.target.value)}
          style={inputStyle}
        />
      );
    } else if (column.toLowerCase().includes('month')) {
      return (
        <input
          type="month"
          id={column}
          name={column}
          value={formData[column] || ''}
          onChange={(e) => handleChange(column, e.target.value)}
          style={inputStyle}
        />
      );
    } else {
      return (
        <input
          type="text"
          id={column}
          name={column}
          value={formData[column] || ''}
          onChange={(e) => handleChange(column, e.target.value)}
          style={inputStyle}
        />
      );
    }
  };

  return (
    <div>
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit}>
        {columns.map((column) => (
          <div key={column} style={formGroupStyle}>
            <label htmlFor={column} style={labelStyle}>
              {column}:
            </label>
            {renderInput(column)}
          </div>
        ))}
        <button type="submit" style={submitButtonStyle}>
          Add Entry
        </button>
      </form>
    </div>
    </div>
  );
};

// Styles
const formContainerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  backgroundColor: '#5bc0de',
  color: '#fff',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default DynamicForm;
