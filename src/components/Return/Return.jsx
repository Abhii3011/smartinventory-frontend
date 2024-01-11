import React from 'react'
import TableComp from '../TableComp';
import { ReturnTableData } from '../ManagementData/ManagementData';
function Return() {
  return (
    <div>
      <TableComp columns={ReturnTableData.columns} data={ReturnTableData.data} />
    </div>
  )
}

export default Return
