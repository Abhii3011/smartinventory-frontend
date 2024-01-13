

async function fetchEmployeeData() {
  try {
    const response = await fetch('http://localhost:8084/employeeControllerapi/employee');
    console.info(response)
    const data = await response.json();
    console.info(data)
    return data;
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return null;
  }
}

export { fetchEmployeeData };


export const ItemTableData = {
  columns: ['Item ID', 'Item Name', 'Item Price', 'Item Quantity'],
  data: [
    { ItemID: 1, 'Item Name': 'Rice', ItemPrice: 50, ItemQuantity: 100 },
    { ItemID: 2, 'Item Name': 'Dal', ItemPrice: 30, ItemQuantity: 75 },
    { ItemID: 3, 'Item Name': 'Milk', ItemPrice: 25, ItemQuantity: 50 },
    { ItemID: 4, 'Item Name': 'Bread', ItemPrice: 20, ItemQuantity: 200 },
    { ItemID: 5, 'Item Name': 'Sugar', ItemPrice: 40, ItemQuantity: 80 },
    { ItemID: 6, 'Item Name': 'Tea Leaves', ItemPrice: 60, ItemQuantity: 40 },
    { ItemID: 7, 'Item Name': 'Onions', ItemPrice: 15, ItemQuantity: 150 },
    { ItemID: 8, 'Item Name': 'Tomatoes', ItemPrice: 25, ItemQuantity: 100 },
    { ItemID: 9, 'Item Name': 'Potatoes', ItemPrice: 20, ItemQuantity: 120 },
    { ItemID: 10, 'Item Name': 'Eggs', ItemPrice: 5, ItemQuantity: 300 },
    
  ],
};
async function fetchGodownData() {
  try {
    const response = await fetch('http://localhost:8084/godowncontrollerapi/godowns');
    console.info(response)
    const data = await response.json();
    console.info(data)
    return data;
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return null;
  }
}
export {fetchGodownData}

async function fetchReportData() {
  try {
    const response = await fetch('http://localhost:8084/reports');
    console.info(response)
    const data = await response.json();
    console.info(data)
    return data;
  } catch (error) {
    console.error('Error fetching Report data:', error);
    return null;
  }
}
export {fetchReportData}

async function fetchReturnData() {
  try {
    const response = await fetch('http://localhost:8084/reports');
    console.info(response)
    const data = await response.json();
    console.info(data)
    return data;
  } catch (error) {
    console.error('Error fetching Return data:', error);
    return null;
  }
}
export {fetchReturnData}

  export const InwardItemTableData = {
    columns: ['Inward Item ID', 'Godown ID', 'Supplier Name', 'Date of Supply', 'Item Name', 'Invoice Number', 'Received By', 'Bill Checked By', 'Receipt Number'],
    data: [
      { 'Inward Item ID': 'INW001', 'Godown ID': 'GD001', 'Supplier Name': 'Rajasthan Traders', 'Date of Supply': '2024-01-05', 'Item Name': 'Rice', 'Invoice Number': 123.45, 'Received By': 'Ravi Kumar', 'Bill Checked By': 'Priya Sharma', 'Receipt Number': 987.65 },
      { 'Inward Item ID': 'INW002', 'Godown ID': 'GD002', 'Supplier Name': 'Karnataka Distributors', 'Date of Supply': '2024-02-10', 'Item Name': 'Dal', 'Invoice Number': 678.90, 'Received By': 'Suresh Singh', 'Bill Checked By': 'Aishwarya Patel', 'Receipt Number': 654.32 },
      { 'Inward Item ID': 'INW003', 'Godown ID': 'GD003', 'Supplier Name': 'Maharashtra Enterprises', 'Date of Supply': '2024-03-15', 'Item Name': 'Milk', 'Invoice Number': 543.21, 'Received By': 'Arun Gupta', 'Bill Checked By': 'Pooja Verma', 'Receipt Number': 123.45 },
      { 'Inward Item ID': 'INW004', 'Godown ID': 'GD004', 'Supplier Name': 'Gujarat Suppliers', 'Date of Supply': '2024-04-20', 'Item Name': 'Bread', 'Invoice Number': 987.65, 'Received By': 'Vikram Malhotra', 'Bill Checked By': 'Neha Kapoor', 'Receipt Number': 678.90 },
      { 'Inward Item ID': 'INW005', 'Godown ID': 'GD005', 'Supplier Name': 'Punjab Foods', 'Date of Supply': '2024-05-25', 'Item Name': 'Sugar', 'Invoice Number': 345.67, 'Received By': 'Rajesh Kumar', 'Bill Checked By': 'Anita Singh', 'Receipt Number': 543.21 },
      { 'Inward Item ID': 'INW006', 'Godown ID': 'GD006', 'Supplier Name': 'Bihar Distributors', 'Date of Supply': '2024-06-01', 'Item Name': 'Tea Leaves', 'Invoice Number': 234.56, 'Received By': 'Ravi Kumar', 'Bill Checked By': 'Priya Sharma', 'Receipt Number': 432.10 },
      { 'Inward Item ID': 'INW007', 'Godown ID': 'GD001', 'Supplier Name': 'Delhi Traders', 'Date of Supply': '2024-07-10', 'Item Name': 'Onions', 'Invoice Number': 876.54, 'Received By': 'Priya Sharma', 'Bill Checked By': 'Suresh Singh', 'Receipt Number': 765.43 },
      { 'Inward Item ID': 'INW008', 'Godown ID': 'GD002', 'Supplier Name': 'Uttar Pradesh Enterprises', 'Date of Supply': '2024-08-15', 'Item Name': 'Tomatoes', 'Invoice Number': 567.89, 'Received By': 'Suresh Singh', 'Bill Checked By': 'Aishwarya Patel', 'Receipt Number': 654.32 },
      { 'Inward Item ID': 'INW009', 'Godown ID': 'GD003', 'Supplier Name': 'West Bengal Suppliers', 'Date of Supply': '2024-09-20', 'Item Name': 'Potatoes', 'Invoice Number': 456.78, 'Received By': 'Aishwarya Patel', 'Bill Checked By': 'Arun Gupta', 'Receipt Number': 543.21 },
      { 'Inward Item ID': 'INW010', 'Godown ID': 'GD004', 'Supplier Name': 'Tamil Nadu Distributors', 'Date of Supply': '2024-10-25', 'Item Name': 'Eggs', 'Invoice Number': 765.43, 'Received By': 'Arun Gupta', 'Bill Checked By': 'Pooja Verma', 'Receipt Number': 432.10 },
      
    ],
  };

  async function fetchDeliveryItemData() {
    try {
      const response = await fetch('http://localhost:8084/outwardItems');
      console.info(response)
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Return data:', error);
      return null;
    }
  }
  export {fetchDeliveryItemData}


  
  