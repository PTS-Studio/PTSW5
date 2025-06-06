const burgerCheckbox = document.getElementById('FK_menu');
const menuOverlay = document.querySelector('.menu-overlay');
const mainBlock = document.querySelector('main');

burgerCheckbox.addEventListener('change', function() {
  if (this.checked) {
      // Отключаем прокрутку
      document.body.style.overflow = 'hidden';
      // Скрываем основной блок с анимацией
      mainBlock.classList.add('hidden');
  } else {
      // Возвращаем прокрутку
      document.body.style.overflow = 'auto';
      // Показываем основной блок с анимацией
      mainBlock.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Эффект ввода для блока кода
  const codeElement = document.querySelector('.code-block code');
  
  if (codeElement) {
    const originalText = codeElement.innerHTML;
    codeElement.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        codeElement.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    };
    // Запуск эффекта набора текста после определенного времени
    setTimeout(typeWriter, 1000);
  }
  
  // Появление раздела .hero +
  const animateHero = () => {
    const heroContent = document.querySelector('.sector_block_left');
    const heroImage = document.querySelector('.sector_block_right');
    
    if (heroContent && heroImage) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateY(0)';
      }, 600);
    }
  };
  
  // Анимация появления объектов (терминала и тд.) +
  const heroContent = document.querySelector('.sector_block_left');
  const heroImage = document.querySelector('.sector_block_right');
  
  if (heroContent && heroImage) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateY(20px)';
    heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    animateHero();
  }
});

/*
=============================================================
    МОДАЛЬНОЕ ОКНО
=============================================================
*/
// const modal = document.getElementById("modal");
// const openModalButton = document.getElementById("openModal");
// const closeModalButton = document.getElementById("closeModal");

// // Открыть модальное окно
// openModalButton.onclick = function() {
//     modal.style.display = "block";
//     document.body.style.overflow = "hidden"; // Отключить прокрутку основной области
// }

// // Закрыть модальное окно
// closeModalButton.onclick = function() {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto"; // Включить прокрутку основной области
// }

// Закрыть модальное окно при клике вне его содержимого
// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//         document.body.style.overflow = "auto"; // Включить прокрутку основной области
//     }
// }

/*
=============================================================
    ТЕСТ
=============================================================
*/
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.onclick = function() {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
};

closeModalButton.onclick = function() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
};
// const openModalButton = document.getElementById('openModal');
// const modal = document.getElementById('modal');
// const closeModalButton = document.getElementById('closeModal');

// openModalButton.onclick = function() {
//   modal.classList.add('show');
//   document.body.style.cssText = `
//     position: fixed;
//     width: 100%;
//     overflow-y: scroll;
//   `;
// };
// closeModalButton.onclick = function() {
//   modal.classList.remove('show');
//   document.body.style.cssText = '';
// };

// openModalButton.onclick = function() {
//   modal.classList.add('show');
//   document.body.style.position = 'fixed';
//   document.body.style.width = '100%';
//   // document.body.style.overflowY = 'scroll';
//   document.body.style.top = `-${window.scrollY}px`
// };

// closeModalButton.onclick = function() {
//   modal.classList.remove('show');
//   document.body.style.position = '';
//   document.body.style.width = '';
//   // document.body.style.overflowY = '';
// };

  // const openBtn = document.getElementById('openModal');
  // const closeBtn = document.getElementById('closeModal');
  // const modal = document.getElementById('modal');

  // function disableScroll() {
  //   const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  //   document.body.style.overflow = 'hidden';
  //   document.body.style.paddingRight = scrollBarWidth + 'px';

  // }

  // function enableScroll() {
  //   document.body.style.overflow = '';
  //   document.body.style.paddingRight = '';
  // }

  // openBtn.onclick = () => {
  //   modal.classList.add('show');
  //   disableScroll();
  // };

  // closeBtn.onclick = () => {
  //   modal.classList.remove('show');
  //   enableScroll();
  // };


  // modal.onclick = (e) => {
  //   if (e.target === modal) {
  //     modal.classList.remove('show');
  //     enableScroll();
  //   }
  // };

  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape' && modal.classList.contains('show')) {
  //     modal.classList.remove('show');
  //     enableScroll();
  //   }
  // });