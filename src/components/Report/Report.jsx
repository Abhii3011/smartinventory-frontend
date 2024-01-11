import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';

import { ReportTableData } from '../ManagementData/ManagementData';

function Report() {
  const [reportData, setReportData] = useState(ReportTableData.data);

  const handleAddEntry = (newEntry) => {
    setReportData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      
      <TableComp columns={ReportTableData.columns} data={reportData} />
      <DynamicForm columns={ReportTableData.columns} onSubmit={handleAddEntry} />
    </div>
  );
}

export default Report;
