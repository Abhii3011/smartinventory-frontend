import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/cards/ProductCard';
import ProductImage from '../../components/Files/Channa-Masala-v1.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  console.info("in home--->")
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
      name: 'Rice',
      imageUrl: ProductImage,
      price: '50',
    },
    {
      id: 2,
      name: 'Dal',
      imageUrl: ProductImage,
      price: '30',
    },
    {
      id: 3,
      name: 'Milk',
      imageUrl: ProductImage,
      price: '25',
    },
    {
      id: 4,
      name: 'Bread',
      imageUrl: ProductImage,
      price: '20',
    },
    {
      id: 5,
      name: 'Sugar',
      imageUrl: ProductImage,
      price: '40',
    },
    {
      id: 6,
      name: 'Tea Leaves',
      imageUrl: ProductImage,
      price: '60',
    },
    {
      id: 7,
      name: 'Onions',
      imageUrl: ProductImage,
      price: '15',
    },
    {
      id: 8,
      name: 'Tomatoes',
      imageUrl: ProductImage,
      price: '25',
    },
    {
      id: 9,
      name: 'Potatoes',
      imageUrl: ProductImage,
      price: '20',
    },
    {
      id: 10,
      name: 'Eggs',
      imageUrl: ProductImage,
      price: '5',
    },
  ];
  

  return (
    <div>
      <Navbar cartItems = {cartItems} />
      <div className="container">
        <h3 className="text-center mt-4 mb-4">Our Products</h3>
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
