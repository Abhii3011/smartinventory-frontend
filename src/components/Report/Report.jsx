import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';

import { ReportTableData } from '../ManagementData/ManagementData';
import DeleteForm from '../InputForm/DeleteForm';

function Report() {
  const [reportData, setReportData] = useState(ReportTableData.data);
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
    setReportData((prevData) => [...prevData, newEntry]);
  };
  const handleDeleteEntry = (name) => {
    setReportData((prevData) => prevData.filter((report) => report.Month!== name));
  };

  return (
    <div>
      
      <TableComp columns={ReportTableData.columns} data={reportData} clicked1 ={()=>handleClicked1()} clicked2 = {()=>handleClicked2()} />
      {clicked1 &&<div>
        <h2>Add New Entry</h2>
        <DynamicForm columns={ReportTableData.columns} onSubmit={handleAddEntry} />
      </div>}
      {clicked2 && <div>
        <h2>Delete Entry</h2>
        <DeleteForm proType={'Entry'} onDelete={handleDeleteEntry} />
        </div>}
    </div>
  );
}

export default Report;
