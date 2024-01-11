import React from 'react'
import { EmployeeTableData } from '../ManagementData/ManagementData'
import TableComp from '../TableComp'
function Employee() {
  return (
    <div>
        <TableComp columns={EmployeeTableData.columns} data={EmployeeTableData.data}/>
    </div>
  )
}

export default Employee
