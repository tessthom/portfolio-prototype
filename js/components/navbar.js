const menuBtn = document.querySelector('.menu-button');

menuBtn.addEventListener('click', function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  const menuList = document.querySelector('.nav-list');
  menuList.classList.toggle('show');
})