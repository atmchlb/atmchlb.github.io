import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import "./Catalog.css"

function Catalog() {
  const { addToCart } = useCart();
  
  // Логируем пути к картинкам для отладки
  console.log('Проверяем пути к картинкам:');
  
  const [products] = useState([
    {
      id: 1,
      name: "Хомяк Джунгарский",
      category: "Животные",
      price: 1500,
      image: "/images/hamster.jpg",
      description: "Дружелюбный хомяк, подходит для детей"
    },
    {
      id: 2,
      name: "Морская свинка",
      category: "Животные",
      price: 2500,
      image: "/images/guinea-pig.jpg",
      description: "Спокойная и ласковая морская свинка"
    },
    {
      id: 3,
      name: "Кролик карликовый",
      category: "Животные",
      price: 3500,
      image: "/images/rabbit.jpg",
      description: "Маленький и пушистый кролик"
    },
    {
      id: 4,
      name: "Корм для хомяков Premium",
      category: "Корма для животных",
      price: 450,
      image: "/images/hamster-food.jpg",
      description: "Сбалансированный корм с витаминами"
    },
    {
      id: 5,
      name: "Корм для морских свинок",
      category: "Корма для животных",
      price: 380,
      image: "/images/guinea-pig-food.jpg",
      description: "Свежие овощи и гранулы"
    },
    {
      id: 6,
      name: "Корм для кроликов",
      category: "Корма для животных",
      price: 520,
      image: "/images/rabbit-food.jpg",
      description: "Сено и специальные гранулы"
    },
    {
      id: 7,
      name: "Клетка для хомяка",
      category: "Аксессуары для животных",
      price: 1200,
      image: "/images/hamster-cage.jpg",
      description: "Просторная клетка с колесом"
    },
    {
      id: 8,
      name: "Домик для морской свинки",
      category: "Аксессуары для животных",
      price: 800,
      image: "/images/guinea-pig-house.jpg",
      description: "Уютный домик для отдыха"
    },
    {
      id: 9,
      name: "Игрушки для кролика",
      category: "Аксессуары для животных",
      price: 650,
      image: "/images/rabbit-toys.jpg",
      description: "Набор игрушек для активных игр"
    },
    {
      id: 10,
      name: "Поилка автоматическая",
      category: "Аксессуары для животных",
      price: 350,
      image: "/images/water-bottle.jpg",
      description: "Удобная поилка с капельницей"
    },
    {
      id: 11,
      name: "Кормушка керамическая",
      category: "Аксессуары для животных",
      price: 280,
      image: "/images/food-bowl.jpg",
      description: "Тяжелая кормушка, не перевернется"
    },
    {
      id: 12,
      name: "Подстилка для клетки",
      category: "Аксессуары для животных",
      price: 180,
      image: "/images/bedding.jpg",
      description: "Мягкая подстилка из опилок"
    }
  ]);

  // Логируем созданные продукты
  console.log('Созданные продукты:', products);

  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Животные', 'Корма для животных', 'Аксессуары для животных'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Можно добавить уведомление о добавлении в корзину
  };

  return (
    <div className='catalogdiv'>
      <h2>Каталог товаров</h2>
      
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                onLoad={() => console.log(`Картинка загружена: ${product.image}`)}
                onError={(e) => {
                  console.error(`Ошибка загрузки картинки: ${product.image}`);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="image-placeholder"
                style={{ 
                  display: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: '#f5f5f5',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: '#ccc'
                }}
              >
                🖼️
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price} ₽</div>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;