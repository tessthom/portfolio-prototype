const openBtn = document.querySelector('.footer-button-submit');
const closeBtn = document.querySelector('.slider-close-btn');
const submitBtn = document.querySelector('.slider-submit');

function toggleSlider() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  const sliderForm = document.querySelector('.slider-form-wrapper');
  sliderForm.classList.toggle('show');
}

openBtn.addEventListener('click', toggleSlider);
closeBtn.addEventListener('click', toggleSlider);
submitBtn.addEventListener('click', toggleSlider);