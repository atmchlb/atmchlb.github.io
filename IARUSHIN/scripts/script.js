'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".mealOrderForm");
    const submitButton = form.querySelector(".yellow_button");
  
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name = form.querySelector("#nameInOrder").value;
      const phone = form.querySelector("#telInOrder").value;
      const meal = form.querySelector("#mealInOrder").value;
      const address = form.querySelector("#adressInOrder").value;
      const paymentMethod = form.querySelector('input[name="orderPaymentMethod"]:checked');
  
      if (!name || !phone || !address || !paymentMethod) {
        alert("Пожалуйста, заполните все обязательные поля!");
        return;
      }
  
      const phoneRegex = /^(\+7|8)\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Введите номер телефона в формате: 81234567890 или +71234567890");
        return;
      }
  
      const formattedPhone = phone.replace(/^8/, "+7").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5");
  
      const resultBlock = document.createElement("div");
      resultBlock.classList.add("result-block");
      resultBlock.innerHTML = `
        <h4>Ваш заказ:</h4>
        <p>Имя: ${name}</p>
        <p>Телефон: ${formattedPhone}</p>
        <p>Выбранное блюдо: ${meal}</p>
        <p>Адрес: ${address}</p>
        <p>Способ оплаты: ${paymentMethod.value === "card" ? "Картой" : "Наличными"}</p>
      `;
  
      const parentDiv = form.parentElement;
      
  
      form.style.marginRight = "20px";
      parentDiv.appendChild(resultBlock);
      submitButton.disabled = true; 
      submitButton.classList.add("disabled");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const bigImage = document.querySelector(".big_image");
  
    bigImage.addEventListener("click", () => {
      bigImage.classList.toggle("rotate");
    });
  });
  