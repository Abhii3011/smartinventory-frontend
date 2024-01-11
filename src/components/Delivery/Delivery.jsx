import React from 'react'
import TableComp from '../TableComp';
import { DeliverItemTableData } from '../ManagementData/ManagementData';

function Delivery() {
  return (
    <div>
       <TableComp columns={DeliverItemTableData.columns} data={DeliverItemTableData.data}/>
    </div>
  )
}

export default Delivery

