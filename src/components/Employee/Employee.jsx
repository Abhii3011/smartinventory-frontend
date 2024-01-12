import React, { useState, useEffect } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import DeleteForm from '../InputForm/DeleteForm';
import { fetchEmployeeData } from '../ManagementData/ManagementData';

function Employee() {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetchEmployeeData()
      .then((data) => { setEmployeeData(data)})
      .catch((error) => console.error('Error setting employee data:', error));
  }, []);
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
      <TableComp data={employeeData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Employee</h2>
        <DynamicForm data={employeeData} onSubmit={handleAddEmployee} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Employee</h2>
        <DeleteForm proType={'Employee'} onDelete={handleDeleteEmployee} />
      </div>}
    </div>
  );
}

export default Employee;
