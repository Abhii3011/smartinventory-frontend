import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { InwardItemTableData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Inwards() {
  const [inwardData, setInwardData] = useState(InwardItemTableData.data);
  const [clicked1,setClicked1]=useState(false)
  const [clicked2,setClicked2]=useState(false)
  const isVisible = true;
  const handleClicked1=()=>{
    setClicked1(true)
    setClicked2(false)
  }
  const handleClicked2=()=>{
    setClicked2(true)
    setClicked1(false)
  }
  const handleDeleteEntry = (name) => {
    setInwardData((prevData) => prevData.filter((inward) => inward['Supplier Name'] !== name));
  };

  const handleAddEntry = (newEntry) => {
    setInwardData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <TableComp isVisible={isVisible} columns={InwardItemTableData.columns} data={inwardData}clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Entry</h2>
        <DynamicForm columns={InwardItemTableData.columns} onSubmit={handleAddEntry} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Entry</h2>
        <DeleteForm proType={'Entry'} onDelete={handleDeleteEntry} />
      </div>}
    </div>
  );
}

export default Inwards;
