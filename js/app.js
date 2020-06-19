let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('site-nav');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('site-nav-open');
  menuToggle.classList.toggle('menu-open');
});