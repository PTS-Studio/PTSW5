if (navigator.userAgent.toLowerCase().indexOf('yabrowser') > -1) {
  document.documentElement.classList.add('yandex-browser');
}
/*
=============================================================
    МОДАЛЬНОЕ ОКНО
=============================================================
*/
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
    // Пользователь листает вниз
    header.classList.add('hidden');
  } else {
    // Пользователь листает вверх
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

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

const openModalButton2 = document.getElementById('openModal2');
const modal2 = document.getElementById('modal2');
const closeModalButton2 = document.getElementById('closeModal2');
openModalButton2.onclick = function() {
  modal2.classList.add('show');
  document.body.style.overflow = 'hidden';
};
closeModalButton2.onclick = function() {
  modal2.classList.remove('show');
  document.body.style.overflow = 'auto';
};

const openModalButton3 = document.getElementById('openModal3');
const modal3 = document.getElementById('modal3');
const closeModalButton3 = document.getElementById('closeModal3');
openModalButton3.onclick = function() {
  modal3.classList.add('show');
  document.body.style.overflow = 'hidden';
};
closeModalButton3.onclick = function() {
  modal3.classList.remove('show');
  document.body.style.overflow = 'auto';
};