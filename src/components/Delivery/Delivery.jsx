import React, { useState } from 'react';
import TableComp from '../TableComp';
import DynamicForm from '../InputForm/DynamicForm';
import { DeliverItemTableData } from '../ManagementData/ManagementData';

function Delivery() {
  const [deliveryData, setDeliveryData] = useState(DeliverItemTableData.data);

  const handleAddEntry = (newEntry) => {
    setDeliveryData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <TableComp columns={DeliverItemTableData.columns} data={deliveryData} />
      <DynamicForm columns={DeliverItemTableData.columns} onSubmit={handleAddEntry} />
    </div>
  );
}

export default Delivery;
