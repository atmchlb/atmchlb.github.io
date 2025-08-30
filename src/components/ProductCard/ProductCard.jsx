import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          {product.discount ? (
            <>
              <span className="original-price">{product.price} ₽</span>
              <span className="discounted-price">
                {Math.round(product.price * (1 - product.discount / 100))} ₽
              </span>
            </>
          ) : (
            <span className="price">{product.price} ₽</span>
          )}
        </div>
        <button className="add-to-cart-btn">
          В корзину
          <svg width="20" height="20" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.40327 12.8619C14.4364 11.8953 18.9346 12.6 30.6827 12.6M4.01483 18.4C16.0479 17.4333 18.2559 18.4 30.0039 18.4" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 