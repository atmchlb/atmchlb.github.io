import React from 'react';
import '../Pages.css';

function Contacts() {
  return (
    <div className="page-container">
      <h1 className="page-title">Контакты</h1>
      
      <div className="page-content">
        <p>
          Мы всегда готовы помочь вам и ответить на все ваши вопросы. 
          Свяжитесь с нами любым удобным для вас способом.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h4>Телефон</h4>
            <p>8 (800) 555-35-35</p>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб-Вс: 10:00 - 16:00</p>
          </div>
          
          <div className="contact-item">
            <h4>Адрес офиса</h4>
            <p>Ул. Пушкина, д. Колотушкина, кв. 6</p>
            <p>Москва, 123456</p>
          </div>
          
          <div className="contact-item">
            <h4>Email</h4>
            <p>info@mousehouse.ru</p>
            <p>support@mousehouse.ru</p>
          </div>
          
          <div className="contact-item">
            <h4>Социальные сети</h4>
            <p>Instagram: @mousehouse</p>
            <p>VK: vk.com/mousehouse</p>
            <p>Telegram: @mousehouse_support</p>
          </div>
        </div>
        
        <h3>Как добраться</h3>
        <p>
          Наш офис находится в центре города, рядом с метро. 
          Добраться можно на общественном транспорте или на автомобиле. 
          Есть удобная парковка для клиентов.
        </p>
      </div>
    </div>
  );
}

export default Contacts;