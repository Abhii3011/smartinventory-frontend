import React, { useState, useEffect } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { fetchReportData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Report() {
  const [reportData, setReportData] = useState([]);
  const [clicked1,setClicked1]=useState(false)
  const [clicked2,setClicked2]=useState(false)
  const isVisible = localStorage.getItem("role")==="Admin"? true : false;
  useEffect(() => {
    fetchReportData()
      .then((data) => { setReportData(data)})
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
    setReportData((prevData) => [...prevData, newEntry]);
  };
  const handleDeleteEntry = (name) => {
    setReportData((prevData) => prevData.filter((report) => report['month']!== name));
  };

  return (
    <div>
      
      <TableComp isVisible={isVisible} data={reportData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Entry</h2>
        <DynamicForm data ={reportData} onSubmit={handleAddEntry} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Entry</h2>
        <DeleteForm proType={'Report Month'} onDelete={handleDeleteEntry} />
        </div>}
    </div>
  );
}

export default Report;
