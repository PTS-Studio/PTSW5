const burgerCheckbox = document.getElementById('check');
const menuOverlay = document.querySelector('.menu-overlay');

burgerCheckbox.addEventListener('change', function() {
  if (this.checked) {
      // Отключаем прокрутку
      document.body.style.overflow = 'hidden';
  } else {
      // Возвращаем прокрутку
      document.body.style.overflow = 'auto';
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