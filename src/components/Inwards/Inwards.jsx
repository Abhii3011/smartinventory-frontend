import React from 'react'
import TableComp from '../TableComp';
import {InwardItemTableData} from '../ManagementData/ManagementData'
function Inwards() {
  return (
    <div>
      <TableComp columns={InwardItemTableData.columns} data={InwardItemTableData.data}/>
    </div>
  )
}

export default Inwards
