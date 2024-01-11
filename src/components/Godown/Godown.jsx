import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { GodownTableData } from '../ManagementData/ManagementData';

function Godown() {
  const [godownData, setGodownData] = useState(GodownTableData.data);

  const handleAddGodown = (newGodown) => {
    setGodownData((prevData) => [...prevData, newGodown]);
  };

  return (
    <div>
      <h2>Godown Data</h2>
      <TableComp columns={GodownTableData.columns} data={godownData} />

      <h2>Add New Godown</h2>
      <DynamicForm columns={GodownTableData.columns} onSubmit={handleAddGodown} />
    </div>
  );
}

export default Godown;
