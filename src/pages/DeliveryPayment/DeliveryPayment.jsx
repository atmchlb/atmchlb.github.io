import React from 'react';
import '../Pages.css';

function DeliveryPayment() {
  return (
    <div className="page-container">
      <h1 className="page-title">🚚 Доставка и оплата</h1>
      
      <div className="page-content">
        <p>
          Мы предлагаем удобные способы доставки и оплаты для вашего комфорта. 
          Доставляем товары по всей России и в страны СНГ.
        </p>
        
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '8px', 
          borderLeft: '4px solid #4CAF50',
          marginBottom: '2rem'
        }}>
          <p style={{ margin: 0, fontWeight: '600', color: '#4CAF50' }}>
            🎯 <strong>Быстрая доставка</strong> • <strong>Безопасная оплата</strong> • <strong>Гарантия качества</strong>
          </p>
        </div>
        
        <h3>Способы доставки</h3>
        <div className="delivery-options">
          <div className="delivery-option">
            <h4>🚚 Курьерская доставка</h4>
            <p>Доставка до двери в течение 1-2 дней</p>
            <p><strong>Стоимость: от 300 ₽</strong></p>
          </div>
          
          <div className="delivery-option">
            <h4>📮 Почта России</h4>
            <p>Доставка в отделение почты</p>
            <p><strong>Стоимость: от 200 ₽</strong></p>
          </div>
          
          <div className="delivery-option">
            <h4>🏢 Самовывоз</h4>
            <p>Бесплатный самовывоз из нашего офиса</p>
            <p><strong>Стоимость: бесплатно</strong></p>
          </div>
          
          <div className="delivery-option">
            <h4>⚡ Экспресс доставка</h4>
            <p>Доставка в день заказа</p>
            <p><strong>Стоимость: от 500 ₽</strong></p>
          </div>
        </div>
        
        <h3>💳 Способы оплаты</h3>
        <p>Вы можете оплатить заказ любым удобным для вас способом:</p>
        
        <div className="payment-methods">
          <span className="payment-method">💵 Наличные</span>
          <span className="payment-method">💳 Банковская карта</span>
          <span className="payment-method">📱 СБП</span>
          <span className="payment-method">💰 Электронные кошельки</span>
          <span className="payment-method">🏦 Безналичный расчет</span>
        </div>
        
        <h3>📋 Условия доставки</h3>
        <ul>
          <li><strong>Минимальная сумма заказа:</strong> 1000 ₽</li>
          <li><strong>Бесплатная доставка</strong> при заказе от 5000 ₽</li>
          <li><strong>Время доставки:</strong> 1-3 дня по Москве, 3-7 дней по России</li>
          <li>Возможность отслеживания заказа</li>
          <li>Гарантия сохранности товара</li>
          <li>Возможность отказа при получении</li>
        </ul>
        
        <h3>🔄 Возврат и обмен</h3>
        <p>
          Мы принимаем возврат товара в течение 14 дней с момента получения, 
          если товар не был в использовании и сохранил товарный вид. 
          Возврат осуществляется за счет покупателя.
        </p>
        
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#4CAF50', marginBottom: '1rem' }}>❓ Остались вопросы?</h4>
          <p style={{ margin: '0 0 1rem 0' }}>
            Наши специалисты готовы помочь с выбором способа доставки и оплаты
          </p>
          <p style={{ margin: 0, fontWeight: '600' }}>
            📞 <strong>Телефон:</strong> +7 (495) 123-45-67<br/>
            📧 <strong>Email:</strong> delivery@mousehouse.ru
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPayment;