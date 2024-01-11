import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { InwardItemTableData } from '../ManagementData/ManagementData';

function Inwards() {
  const [inwardData, setInwardData] = useState(InwardItemTableData.data);

  const handleAddEntry = (newEntry) => {
    setInwardData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <TableComp columns={InwardItemTableData.columns} data={inwardData} />
      <DynamicForm columns={InwardItemTableData.columns} onSubmit={handleAddEntry} />
    </div>
  );
}

export default Inwards;
