import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { ReturnTableData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Return() {
  const [returnData, setReturnData] = useState(ReturnTableData.data);

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
  const handleAddEntry = (newEntry) => {
    setReturnData((prevData) => [...prevData, newEntry]);
  };
  const handleDeleteEntry = (name) => {
    setReturnData((prevData) => prevData.filter((returned) => returned['Item Name']!== name));
  };
  return (
    <div>
      <TableComp columns={ReturnTableData.columns} data={returnData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Entry</h2>
        <DynamicForm columns={ReturnTableData.columns} onSubmit={handleAddEntry} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Entry</h2>
        <DeleteForm proType={'Entry'} onDelete={handleDeleteEntry} />
        </div>}
    </div>
  );
}

export default Return;
