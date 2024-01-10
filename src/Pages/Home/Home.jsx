import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/cards/ProductCard';
import ProductImage from '../../components/Files/Channa-Masala-v1.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [showProceedToCart, setShowProceedToCart] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    setShowProceedToCart(true);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems.length === 1) {
        setShowProceedToCart(false);
        return [];
      } else {
        return prevCartItems.filter((item) => item.id !== product.id);
      }
    });
  };

  const handleProceedToCart = () => {
    navigate('/cart', { state: { cartItems } });
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    },
    {
      id: 2,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.89,
    },
    {
      id: 3,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    },
    {
      id: 4,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    },
    {
      id: 5,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    },
    {
      id: 6,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    },
    {
      id: 7,
      name: 'Product 1',
      imageUrl: ProductImage,
      price: 13.99,
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-4 mb-4">Welcome to Our Store</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard product={product} onAddToCart={() => handleAddToCart(product)}
               onRemoveFromCart={()=> handleRemoveFromCart(product)}
               />
            </div>
          ))}
        </div>
        {showProceedToCart && (
          <button className="btn btn-success btn-fixed-bottom" onClick={handleProceedToCart}>
            Proceed to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
