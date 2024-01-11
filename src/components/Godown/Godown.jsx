import React from 'react'
import TableComp from '../TableComp'
import { GodownTableData } from '../ManagementData/ManagementData'
function Godown() {
  return (
    <div>
      <TableComp columns={GodownTableData.columns} data={GodownTableData.data}/>
    </div>
  )
}

export default Godown
