import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Введите имя';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Введите фамилию';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Введите адрес доставки';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'Введите город';
    }
    
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Введите почтовый индекс';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Здесь можно добавить логику отправки заказа на сервер
      console.log('Заказ оформлен:', { orderItems: items, customerData: formData });
      
      // Очищаем корзину и перенаправляем на главную
      clearCart();
      alert('Заказ успешно оформлен! Спасибо за покупку.');
      navigate('/');
    }
  };

  if (items.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart-message">
          <h2>Корзина пуста</h2>
          <p>Добавьте товары в корзину для оформления заказа</p>
          <button onClick={() => navigate('/catalog')} className="go-to-catalog-btn">
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Оформление заказа</h2>
      
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Ваш заказ</h3>
          <div className="order-items">
            {items.map(item => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                </div>
                <span className="item-price">{item.price * item.quantity} ₽</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <strong>Итого: {getTotalPrice()} ₽</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Данные для доставки</h3>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Имя"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error-input" : ""}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error-input" : ""}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error-input" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Адрес доставки"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error-input" : ""}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="Город"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? "error-input" : ""}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="postalCode"
                placeholder="Почтовый индекс"
                value={formData.postalCode}
                onChange={handleChange}
                className={errors.postalCode ? "error-input" : ""}
              />
              {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="payment-label">Способ оплаты:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="payment-select"
            >
              <option value="card">Банковская карта</option>
              <option value="cash">Наличными при получении</option>
            </select>
          </div>

          <button type="submit" className="submit-order-btn">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;