import React, { useState, useEffect } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { fetchDeliveryItemData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';
function Delivery() {
  const [deliveryData, setDeliveryData] = useState([]);
  const [clicked1,setClicked1]=useState(false)
  const [clicked2,setClicked2]=useState(false)
  const isVisible = true;
  useEffect(() => {
    fetchDeliveryItemData()
      .then((data) => { setDeliveryData(data)})
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
  const handleAddEntry = (newEntry) => {
    setDeliveryData((prevData) => [...prevData, newEntry]);
  };
  const handleDeleteEntry = (name) => {
    setDeliveryData((prevData) => prevData.filter((delivery) => delivery['Delivery ID'] !== name));
  };


  return (
    <div>
      <TableComp isVisible = {isVisible}data={deliveryData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()}/>
      {clicked1 &&<div>
        <h2>Add New Entry</h2>
        <DynamicForm data ={deliveryData} onSubmit={handleAddEntry} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Entry</h2>
        <DeleteForm proType={'Entry'} onDelete={handleDeleteEntry} />
      </div>}
    </div>
  );
}

export default Delivery;
