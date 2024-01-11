import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { EmployeeTableData } from '../ManagementData/ManagementData';

function Employee() {
  const [employeeData, setEmployeeData] = useState(EmployeeTableData.data);

  const handleAddEntry = (newEntry) => {
    setEmployeeData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <TableComp columns={EmployeeTableData.columns} data={employeeData} />
      <DynamicForm columns={EmployeeTableData.columns} onSubmit={handleAddEntry} />
    </div>
  );
}

export default Employee;
