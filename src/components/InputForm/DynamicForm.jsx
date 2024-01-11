import React, { useState } from 'react';

const DynamicForm = ({ columns, onSubmit }) => {
  const [formData, setFormData] = useState({});

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
        />
      );
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      {columns.map((column) => (
        <div key={column}>
          <label htmlFor={column}>{column}:</label>
          {renderInput(column)}
        </div>
      ))}
      <button type="submit">Add Entry</button>
    </form> </div>
    
  );
};

export default DynamicForm;
