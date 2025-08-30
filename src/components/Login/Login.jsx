import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Forms.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Загружаем сохраненные данные при монтировании компонента
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (savedRememberMe && savedEmail) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail,
        rememberMe: true
      }));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.password) {
      newErrors.password = "Введите пароль";
    } else if (formData.password.length < 8) {
      newErrors.password = "Пароль должен содержать минимум 8 символов";
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
      // Сохраняем или удаляем данные в зависимости от состояния галочки
      if (formData.rememberMe) {
        localStorage.setItem('rememberedEmail', formData.email);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberMe');
      }

      console.log("Вход:", formData);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
            </div>
            <span className="checkbox-text">Запомнить меня</span>
          </label>
        </div>

        <button type="submit">Войти</button>
      </form>
      <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
      <p className="forgot-password">
        <a href="/forgot-password">Забыли пароль?</a>
      </p>
    </div>
  );
};

export default Login;