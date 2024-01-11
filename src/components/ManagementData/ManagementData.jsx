

export const EmployeeTableData = {
  columns: ['Employee ID', 'Employee Name', 'Role'],
  data: [
    { 'Employee ID': 'EMP001', 'Employee Name': 'Ravi Kumar', 'Role': 'Manager' },
    { 'Employee ID': 'EMP002', 'Employee Name': 'Priya Sharma', 'Role': 'Admin' },
    { 'Employee ID': 'EMP003', 'Employee Name': 'Suresh Singh', 'Role': 'User' },
    { 'Employee ID': 'EMP004', 'Employee Name': 'Aishwarya Patel', 'Role': 'Manager' },
    { 'Employee ID': 'EMP005', 'Employee Name': 'Arun Gupta', 'Role': 'Admin' },
    { 'Employee ID': 'EMP006', 'Employee Name': 'Pooja Verma', 'Role': 'User' },
    { 'Employee ID': 'EMP007', 'Employee Name': 'Vikram Malhotra', 'Role': 'Manager' },
    { 'Employee ID': 'EMP008', 'Employee Name': 'Neha Kapoor', 'Role': 'Admin' },
    { 'Employee ID': 'EMP009', 'Employee Name': 'Rajesh Kumar', 'Role': 'User' },
    { 'Employee ID': 'EMP010', 'Employee Name': 'Anita Singh', 'Role': 'Manager' },
    
  ],
};

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

export const GodownTableData = {
  columns: ['Godown ID', 'Location', 'Name', 'Start Date'],
  data: [
    { 'Godown ID': 'GD001', 'Location': 'Mumbai', 'Name': 'Mumbai Godown 1', 'Start Date': '2024-01-10' },
    { 'Godown ID': 'GD002', 'Location': 'Delhi', 'Name': 'Delhi Godown 1', 'Start Date': '2024-01-15' },
    { 'Godown ID': 'GD003', 'Location': 'Bangalore', 'Name': 'Bangalore Godown 1', 'Start Date': '2024-01-20' },
    { 'Godown ID': 'GD004', 'Location': 'Chennai', 'Name': 'Chennai Godown 1', 'Start Date': '2024-01-25' },
    { 'Godown ID': 'GD005', 'Location': 'Hyderabad', 'Name': 'Hyderabad Godown 1', 'Start Date': '2024-01-30' },
    { 'Godown ID': 'GD006', 'Location': 'Kolkata', 'Name': 'Kolkata Godown 1', 'Start Date': '2024-02-05' },
    
  ],
};


export const ReportTableData = {
    columns: ['Report ID', 'Month', 'Location', 'Item Received', 'Item Delivered', 'Items Returned'],
    data: [
      { 'Report ID': 1, 'Month': 'January', 'Location': 'Mumbai', 'Item Received': 100, 'Item Delivered': 80, 'Items Returned': 5 },
      { 'Report ID': 2, 'Month': 'February', 'Location': 'Delhi', 'Item Received': 120, 'Item Delivered': 90, 'Items Returned': 8 },
      { 'Report ID': 3, 'Month': 'March', 'Location': 'Bangalore', 'Item Received': 80, 'Item Delivered': 70, 'Items Returned': 3 },
      { 'Report ID': 4, 'Month': 'April', 'Location': 'Chennai', 'Item Received': 150, 'Item Delivered': 120, 'Items Returned': 10 },
      { 'Report ID': 5, 'Month': 'May', 'Location': 'Hyderabad', 'Item Received': 200, 'Item Delivered': 180, 'Items Returned': 15 },
      { 'Report ID': 6, 'Month': 'June', 'Location': 'Kolkata', 'Item Received': 90, 'Item Delivered': 80, 'Items Returned': 6 },
    ],
  };


  export const ReturnTableData = {
    columns: ['Return ID', 'Item Name', 'Date of Return', 'Return Quantity', 'Checked By', 'Return Reason'],
    data: [
      { 'Return ID': 1, 'Item Name': 'Rice', 'Date of Return': '2024-01-20', 'Return Quantity': 5, 'Checked By': 'John Doe', 'Return Reason': 'Expired' },
      { 'Return ID': 2, 'Item Name': 'Milk', 'Date of Return': '2024-02-10', 'Return Quantity': 8, 'Checked By': 'Jane Smith', 'Return Reason': 'Damaged' },
      { 'Return ID': 3, 'Item Name': 'Bread', 'Date of Return': '2024-03-15', 'Return Quantity': 10, 'Checked By': 'Bob Johnson', 'Return Reason': 'Stale' },
      { 'Return ID': 4, 'Item Name': 'Tea Leaves', 'Date of Return': '2024-04-05', 'Return Quantity': 3, 'Checked By': 'Alice Turner', 'Return Reason': 'Unsatisfactory flavor' },
      { 'Return ID': 5, 'Item Name': 'Potatoes', 'Date of Return': '2024-05-12', 'Return Quantity': 15, 'Checked By': 'Chris Anderson', 'Return Reason': 'Damaged during transit' },
      { 'Return ID': 6, 'Item Name': 'Eggs', 'Date of Return': '2024-06-20', 'Return Quantity': 20, 'Checked By': 'Emily Davis', 'Return Reason': 'Cracked shells' },

    ],
  };