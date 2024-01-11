import React from 'react'
import TableComp from '../TableComp'
import { ReportTableData } from '../ManagementData/ManagementData'
function Report() {
  return (
    <div>
      <TableComp columns={ReportTableData.columns} data={ReportTableData.data}/>
    </div>
  )
}

export default Report
