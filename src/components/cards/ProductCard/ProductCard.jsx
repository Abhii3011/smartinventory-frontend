import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
    const handleAddToCart = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setIsButtonDisabled(true);
    };
  
    const handleIncrement = () => {
      if (quantity === 0) {
        setIsButtonDisabled(false);
      }
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        if (quantity === 1) {
          setIsButtonDisabled(false);
        }
      }
    };

  return (
    <MDBCard className="product-card">
      <MDBCardBody>
        <div className="cardbody">
      <div className="bg-image rounded hover-zoom hover-overlay">
      <MDBCardImage src={product.imageUrl} fluid className="product-image" />
    </div>

        <div className="product-details">
          <h5 className="product-name">{product.name}</h5>
          <h4 className="product-price mb-0">${product.price}</h4>

          {quantity > 0 && (
            <div className="d-flex flex-row align-items-center mt-2">
              <button className="btn btn-outline-primary btn-sm me-2" onClick={handleDecrement}>
                -
              </button>
              <span className='quantity'>{quantity}</span>
              <button className="btn btn-outline-primary btn-sm ms-2" onClick={handleIncrement}>
                +
              </button>
            </div>
          )}
        </div>

        {quantity ===0 && (
        <div className="add-to-cart">
          <button className='button-37' onClick={handleAddToCart} disabled={isButtonDisabled}>
            Add to Cart
          </button>
        </div>)}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProductCard;
