import React from 'react';
import { useLocation } from 'react-router-dom';
import './Invoice.css'; // Import your CSS file
import jsPDF from 'jspdf';

const InvoicePage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems;
  const totalPrice = location.state?.totalPrice;
  const sgstRate = 0.18; // 18%
  const cgstRate = 0.18; // 18%

  const calculateTaxes = (price) => {
    const sgst = price * sgstRate;
    const cgst = price * cgstRate;
    return sgst + cgst;
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Your Invoice', 20, 20);

    let yPos = 40;
    cartItems.forEach((item) => {
      pdf.text(`${item.name} - Quantity: ${item.quantity} - Price: ₹${item.price * item.quantity}`, 20, yPos);
      yPos += 10;
    });

    const taxes = calculateTaxes(totalPrice);
    pdf.text(`SGST (18%): ₹${taxes.toFixed(2)}`, 20, yPos);
    yPos += 10;
    pdf.text(`CGST (18%): ₹${taxes.toFixed(2)}`, 20, yPos);
    yPos += 10;

    const totalAmount = totalPrice + taxes;
    pdf.text(`Total Price (Including Taxes): ₹${totalAmount.toFixed(2)}`, 20, yPos);

    pdf.save('invoice.pdf');
  };

  return (
    <div className="invoice-container">
      <h2>Your Invoice</h2>
      <ul className="invoice-list">
        {cartItems.map((item) => (
          <li key={item.id} className="invoice-item">
            {item.name} - Quantity: {item.quantity} - Price: ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="tax-line">SGST (18%): ₹{calculateTaxes(totalPrice).toFixed(2)}</p>
      <p className="tax-line">CGST (18%): ₹{calculateTaxes(totalPrice).toFixed(2)}</p>
      <p className="total-price-line">Total Price (Including Taxes): ₹{(totalPrice + calculateTaxes(totalPrice)).toFixed(2)}</p>

      <button className="download-pdf-button" onClick={generatePDF}>
        Download PDF
      </button>
    </div>
  );
};

export default InvoicePage;
