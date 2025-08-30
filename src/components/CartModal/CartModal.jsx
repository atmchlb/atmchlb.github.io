import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="cart-modal-overlay" onClick={onClose}>
        <div className="cart-modal" onClick={e => e.stopPropagation()}>
          <div className="cart-modal-header">
            <h2>Корзина</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <div className="cart-empty">
            <p>Ваша корзина пуста</p>
            <button className="continue-shopping" onClick={onClose}>
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Корзина ({getTotalItems()})</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price} ₽</p>
              </div>
              <div className="cart-item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <div className="cart-item-total">
                {item.price * item.quantity} ₽
              </div>
              <button 
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-footer">
          <div className="cart-total">
            <span>Итого:</span>
            <span className="total-price">{getTotalPrice()} ₽</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;