import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { GodownTableData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Godown() {
  const [godownData, setGodownData] = useState(GodownTableData.data);
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

  const handleAddGodown = (newGodown) => {
    setGodownData((prevData) => [...prevData, newGodown]);
  };
  const handleDeleteGodown = (name) => {
    setGodownData((prevData) => prevData.filter((godown) => godown.Name !== name));
  };
  

  return (
    <div>
      <h2>Godown Data</h2>
      <TableComp columns={GodownTableData.columns} data={godownData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />

      
      {clicked1 &&<div>
        <h2>Add New Godown</h2>
        <DynamicForm columns={GodownTableData.columns} onSubmit={handleAddGodown} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Godown</h2>
        <DeleteForm proType={'Godown'} onDelete={handleDeleteGodown} />
      </div>}
    </div>
  );
}

export default Godown;
