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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{proType} Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Delete {proType}</button>
      </form>
    </div>
  );
};

export default DeleteForm;
