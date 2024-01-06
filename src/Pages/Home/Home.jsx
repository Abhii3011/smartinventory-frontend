import React from "react";
import './Home.css';
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/cards/ProductCard";

function Home(){
    const products = [
        {
          id: 1,
          name: 'Product',
          imageUrl: 'https://example.com/product1.jpg',
          price: 13.99,
        },
        {
            id: 2,
          name: 'Product',
          imageUrl: 'https://example.com/product1.jpg',
          price: 13.95,
        },
        {
            id: 3,
          name: 'product',
          imageUrl: 'https://example.com/product1.jpg',
          price: 13.95,
        },
        {
            id: 4,
          name: 'Product',
          imageUrl: 'https://example.com/product1.jpg',
          price: 13.95,
        }
      ];
    return (
        <div>
            <Navbar/> 
            <div>
                <h1 className="text-center mt-4 mb-4">Welcome to Our Store</h1>
                <div className="container">
                    <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4">
                        <ProductCard product={product} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Home;