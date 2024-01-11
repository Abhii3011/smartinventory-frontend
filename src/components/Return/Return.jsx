import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { ReturnTableData } from '../ManagementData/ManagementData';

function Return() {
  const [returnData, setReturnData] = useState(ReturnTableData.data);

  const handleAddEntry = (newEntry) => {
    setReturnData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <TableComp columns={ReturnTableData.columns} data={returnData} />
      <DynamicForm columns={ReturnTableData.columns} onSubmit={handleAddEntry} />
    </div>
  );
}

export default Return;
