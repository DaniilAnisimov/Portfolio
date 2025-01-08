function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "*"; // Текст снежинки

    // Устанавливаем случайную горизонтальную позицию
    snowflake.style.left = Math.random() * window.innerWidth + "px";

    // Добавляем снежинку в body
    document.body.appendChild(snowflake);

    // Получаем полную высоту страницы
    const pageHeight = document.documentElement.scrollHeight;

    // Задаём длительность анимации случайно
    const animationDuration = Math.random() * 5 + 5; // от 5 до 10 секунд

    // Анимация с учётом полной высоты страницы
    snowflake.style.animation = `fall ${animationDuration}s linear`;

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
      snowflake.remove();
    }, animationDuration * 1000);
  }

  function startSnowfall() {
    // Создаём снежинки каждые 100 мс
    setInterval(createSnowflake, 50);
  }

  // Добавляем анимацию в CSS с учётом высоты страницы
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(calc(${document.documentElement.scrollHeight}px + 2rem));
        opacity: 0; /* Исчезание в конце */
      }
    }
  `;
  document.head.appendChild(style);

  // Запуск снегопада
  startSnowfall();