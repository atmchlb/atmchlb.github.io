import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mouse House</h3>
          <p>Ваш любимый магазин товаров для грызунов</p>
        </div>
        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/delivery-payment">Доставка</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          <p>Email: info@mousehouse.ru</p>
          <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Mouse House {new Date().getFullYear()} | Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;