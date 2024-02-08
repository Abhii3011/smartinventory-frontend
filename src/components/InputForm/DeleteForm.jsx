import React, { useState } from 'react';

const DeleteForm = ({ onDelete, proType }) => {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onDelete(name);
    setName('');
  };

  return (
    <div>
    { <div style={formContainerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>
            {proType} ID:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Delete {proType}
        </button>
      </form>
    </div>}
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
  backgroundColor: '#d9534f',
  color: '#fff',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default DeleteForm;
