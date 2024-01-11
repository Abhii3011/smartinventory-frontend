import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems;
  const navigate = useNavigate();
  const [cart, setCart] = useState(cartItems);

  const handleIncrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // const handleCheckout = () => {
  //   console.log('Proceeding to Checkout');
  // };
  const handleCheckout = () => {
    const total = calculateTotalPrice();
    navigate('/invoice', {
      state: { cartItems, totalPrice: total },
    });
  };
  

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-4 mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name}
                <div className="quantity-section">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <span>₹{item.price * item.quantity}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="total-section">
            <h5>Total: ₹{calculateTotalPrice().toFixed(2)}</h5>
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;