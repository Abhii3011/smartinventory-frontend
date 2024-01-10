import React from 'react';

export const EmployeeTableData = {
  columns: ['Employee ID', 'Employee Name', 'Role'],
  data: [
    { EmployeeID: 'EMP001', EmployeeName: 'Ravi Kumar', Role: 'Manager' },
    { EmployeeID: 'EMP002', EmployeeName: 'Priya Sharma', Role: 'Admin' },
    { EmployeeID: 'EMP003', EmployeeName: 'Suresh Singh', Role: 'User' },
    { EmployeeID: 'EMP004', EmployeeName: 'Aishwarya Patel', Role: 'Manager' },
    { EmployeeID: 'EMP005', EmployeeName: 'Arun Gupta', Role: 'Admin' },
    { EmployeeID: 'EMP006', EmployeeName: 'Pooja Verma', Role: 'User' },
    { EmployeeID: 'EMP007', EmployeeName: 'Vikram Malhotra', Role: 'Manager' },
    { EmployeeID: 'EMP008', EmployeeName: 'Neha Kapoor', Role: 'Admin' },
    { EmployeeID: 'EMP009', EmployeeName: 'Rajesh Kumar', Role: 'User' },
    { EmployeeID: 'EMP010', EmployeeName: 'Anita Singh', Role: 'Manager' },
    
  ],
};

export const ItemTableData = {
  columns: ['Item ID', 'Item Name', 'Item Price', 'Item Quantity'],
  data: [
    { ItemID: 1, ItemName: 'Rice', ItemPrice: 50, ItemQuantity: 100 },
    { ItemID: 2, ItemName: 'Dal', ItemPrice: 30, ItemQuantity: 75 },
    { ItemID: 3, ItemName: 'Milk', ItemPrice: 25, ItemQuantity: 50 },
    { ItemID: 4, ItemName: 'Bread', ItemPrice: 20, ItemQuantity: 200 },
    { ItemID: 5, ItemName: 'Sugar', ItemPrice: 40, ItemQuantity: 80 },
    { ItemID: 6, ItemName: 'Tea Leaves', ItemPrice: 60, ItemQuantity: 40 },
    { ItemID: 7, ItemName: 'Onions', ItemPrice: 15, ItemQuantity: 150 },
    { ItemID: 8, ItemName: 'Tomatoes', ItemPrice: 25, ItemQuantity: 100 },
    { ItemID: 9, ItemName: 'Potatoes', ItemPrice: 20, ItemQuantity: 120 },
    { ItemID: 10, ItemName: 'Eggs', ItemPrice: 5, ItemQuantity: 300 },
    
  ],
};

export const GodownTableData = {
  columns: ['Godown ID', 'Location', 'Name', 'Start Date'],
  data: [
    { GodownID: 'GD001', Location: 'Mumbai', Name: 'Mumbai Godown 1', StartDate: '2024-01-10' },
    { GodownID: 'GD002', Location: 'Delhi', Name: 'Delhi Godown 1', StartDate: '2024-01-15' },
    { GodownID: 'GD003', Location: 'Bangalore', Name: 'Bangalore Godown 1', StartDate: '2024-01-20' },
    { GodownID: 'GD004', Location: 'Chennai', Name: 'Chennai Godown 1', StartDate: '2024-01-25' },
    { GodownID: 'GD005', Location: 'Hyderabad', Name: 'Hyderabad Godown 1', StartDate: '2024-01-30' },
    { GodownID: 'GD006', Location: 'Kolkata', Name: 'Kolkata Godown 1', StartDate: '2024-02-05' },
    
  ],
};


export const ReportTableData = {
    columns: ['Report ID', 'Month', 'Location', 'Item Received', 'Item Delivered', 'Items Returned'],
    data: [
      { reportId: 1, month: 'January', location: 'Mumbai', itemReceived: 100, itemDelivered: 80, itemsReturned: 5 },
      { reportId: 2, month: 'February', location: 'Delhi', itemReceived: 120, itemDelivered: 90, itemsReturned: 8 },
      { reportId: 3, month: 'March', location: 'Bangalore', itemReceived: 80, itemDelivered: 70, itemsReturned: 3 },
      { reportId: 4, month: 'April', location: 'Chennai', itemReceived: 150, itemDelivered: 120, itemsReturned: 10 },
      { reportId: 5, month: 'May', location: 'Hyderabad', itemReceived: 200, itemDelivered: 180, itemsReturned: 15 },
      { reportId: 6, month: 'June', location: 'Kolkata', itemReceived: 90, itemDelivered: 80, itemsReturned: 6 },
    ],
  };


  export const ReturnTableData = {
    columns: ['Return ID', 'Item Name', 'Date of Return', 'Return Quantity', 'Checked By', 'Return Reason'],
    data: [
      { returnId: 1, itemName: 'Rice', dateOfReturn: '2024-01-20', returnQuantity: 5, checkedBy: 'John Doe', returnReason: 'Expired' },
      { returnId: 2, itemName: 'Milk', dateOfReturn: '2024-02-10', returnQuantity: 8, checkedBy: 'Jane Smith', returnReason: 'Damaged' },
      { returnId: 3, itemName: 'Bread', dateOfReturn: '2024-03-15', returnQuantity: 10, checkedBy: 'Bob Johnson', returnReason: 'Stale' },
      { returnId: 4, itemName: 'Tea Leaves', dateOfReturn: '2024-04-05', returnQuantity: 3, checkedBy: 'Alice Turner', returnReason: 'Unsatisfactory flavor' },
      { returnId: 5, itemName: 'Potatoes', dateOfReturn: '2024-05-12', returnQuantity: 15, checkedBy: 'Chris Anderson', returnReason: 'Damaged during transit' },
      { returnId: 6, itemName: 'Eggs', dateOfReturn: '2024-06-20', returnQuantity: 20, checkedBy: 'Emily Davis', returnReason: 'Cracked shells' },

    ],
  };