import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isremoveDisabled, setIsRemoveDisabled] = useState(true);
  const handleAddToCart = () => {
    setIsButtonDisabled(true);
    setIsRemoveDisabled(false);
    onAddToCart();
  };

  const handleRemoveFromCart = () => {
    setIsRemoveDisabled(true);
    setIsButtonDisabled(false);
    onRemoveFromCart();
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

            {isButtonDisabled && (
              <div className="d-flex flex-coloumn align-items-center mt-2" style={{flexDirection : 'column'}}>
        
                <p1 disabled>Added to Cart</p1>
                <button className='button-37' 
                onClick={handleRemoveFromCart}
                style={{backgroundColor : "red"}}
                >Remove from Cart</button>
              </div>
            )}
          </div>

          {isremoveDisabled && (
            <div className="add-to-cart">
              <button
                className="button-37"
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProductCard;
