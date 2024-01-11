import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { EmployeeTableData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Employee() {
  const [employeeData, setEmployeeData] = useState(EmployeeTableData.data);
  const [clicked1,setClicked1]=useState(false)
  const [clicked2,setClicked2]=useState(false)
  const handleClicked1=()=>{
    setClicked1(true)
    setClicked2(false)
  }
  const handleClicked2=()=>{
    setClicked2(true)
    setClicked1(false)
  }
  const handleAddEmployee = (newEmployee) => {
    setEmployeeData((prevData) => [...prevData, newEmployee]);
  };
  const handleDeleteEmployee = (name) => {
    setEmployeeData((prevData) => prevData.filter((employee) => employee['Employee Name'] !== name));
  };

  return (
    <div>
      <TableComp columns={EmployeeTableData.columns} data={employeeData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Employee</h2>
        <DynamicForm columns={EmployeeTableData.columns} onSubmit={handleAddEmployee} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Employee</h2>
        <DeleteForm proType={'Employee'} onDelete={handleDeleteEmployee} />
      </div>}
    </div>
  );
}

export default Employee;
