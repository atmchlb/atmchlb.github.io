import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Forms.css"

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Введите имя";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "Имя должно содержать минимум 2 символа";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Введите фамилию";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Фамилия должна содержать минимум 2 символа";
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

    if (!formData.password) {
      newErrors.password = "Введите пароль";
    } else if (formData.password.length < 8) {
      newErrors.password = "Пароль должен содержать минимум 8 символов";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Пароль должен содержать заглавные и строчные буквы, а также цифры";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
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
      console.log("Регистрация:", formData);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
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

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Повторите пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error-input" : ""}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
            </div>
            <span className="checkbox-text">Я согласен с условиями использования и политикой конфиденциальности</span>
          </label>
          {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>Есть аккаунт? <a href="/login">Войти</a></p>
    </div>
  );
};

export default Register;