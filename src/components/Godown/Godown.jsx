import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { useEffect } from 'react';
import DeleteForm from '../InputForm/DeleteForm';
import { fetchGodownData } from '../ManagementData/ManagementData';

function Godown() {
  const [godownData, setGodownData] = useState([]);
  const [clicked1,setClicked1]=useState(false)
  const [clicked2,setClicked2]=useState(false)
  useEffect(() => {
    fetchGodownData()
      .then((data) => { setGodownData(data)})
      .catch((error) => console.error('Error setting Godown data:', error));
  }, []);

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
    setGodownData((prevData) => prevData.filter((godown) => godown['name'] !== name));
  };
  

  return (
    <div>
      <h2>Godown Data</h2>
      <TableComp  data={godownData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />

      
      {clicked1 &&<div>
        <h2>Add New Godown</h2>
        <DynamicForm data ={godownData} onSubmit={handleAddGodown} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Godown</h2>
        <DeleteForm proType={'Godown'} onDelete={handleDeleteGodown} />
      </div>}
    </div>
  );
}

export default Godown;
