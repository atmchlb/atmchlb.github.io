import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Forms.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryMethod: "standard",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Введите имя";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Введите фамилию";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Введите адрес доставки";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Введите город";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Введите почтовый индекс";
    }

    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Введите номер карты";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = "Введите корректный номер карты";
      }

      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = "Введите срок действия карты";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = "Введите корректный срок действия (ММ/ГГ)";
      }

      if (!formData.cardCvv.trim()) {
        newErrors.cardCvv = "Введите CVV код";
      } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = "Введите корректный CVV код";
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Необходимо согласиться с условиями";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Данные заказа:", formData);
      navigate("/order-confirmation");
    }
  };

  return (
    <div className="form-container checkout-container">
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Контактная информация</h3>
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
        </div>

        <div className="form-section">
          <h3>Адрес доставки</h3>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Адрес"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error-input" : ""}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

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

        <div className="form-section">
          <h3>Способ доставки</h3>
          <div className="form-group radio-group">
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="standard"
                checked={formData.deliveryMethod === "standard"}
                onChange={handleChange}
              />
              Стандартная доставка (2-3 дня)
            </label>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="express"
                checked={formData.deliveryMethod === "express"}
                onChange={handleChange}
              />
              Экспресс доставка (1 день)
            </label>
          </div>
        </div>

        <div className="form-section">
          <h3>Способ оплаты</h3>
          <div className="form-group radio-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleChange}
              />
              Банковская карта
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === "cash"}
                onChange={handleChange}
              />
              Оплата при получении
            </label>
          </div>

          {formData.paymentMethod === "card" && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Номер карты"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={errors.cardNumber ? "error-input" : ""}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="ММ/ГГ"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    className={errors.cardExpiry ? "error-input" : ""}
                  />
                  {errors.cardExpiry && <span className="error-message">{errors.cardExpiry}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="cardCvv"
                    placeholder="CVV"
                    value={formData.cardCvv}
                    onChange={handleChange}
                    className={errors.cardCvv ? "error-input" : ""}
                  />
                  {errors.cardCvv && <span className="error-message">{errors.cardCvv}</span>}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className={errors.agreeToTerms ? "error-input" : ""}
            />
            Я согласен с условиями использования и политикой конфиденциальности
          </label>
          {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
        </div>

        <button type="submit" className="submit-button">Оформить заказ</button>
      </form>
    </div>
  );
};

export default Checkout; 