// hover on cart
const cart = document.querySelector('.cart a');
const productCount = document.querySelector('.product-count');

const handle = () => {
  productCount.style.backgroundColor = '#000';
}

const handle2 = () => {
  productCount.style.backgroundColor = '';
}

cart.addEventListener('mouseover', handle);
cart.addEventListener('mouseleave', handle2);

// fixed menu
const mainMenu = document.querySelector('.main-menu');
const scrollHeigth = 162;

window.onscroll = () => {
  let scrolled = window.pageYOffset;
  if (scrolled > scrollHeigth) {
    if (window.innerWidth > 768) {
      mainMenu.classList.add('fixed');
    }
  } else {
    mainMenu.classList.remove('fixed');
  }
}





// slider
const slides = document.querySelectorAll('.slide-item');
const buttons = document.querySelectorAll('.btn');
let currentSlide;

const nextSlide = () => {
  slides[currentSlide].className = 'slide-item';
  buttons[currentSlide].className = 'btn';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide-item show';
  buttons[currentSlide].className = 'btn active';
}

const numbSlide = (current) => {
  for (let i=0;i<slides.length;i++) {
    slides[i].className = 'slide-item';
    buttons[i].className = 'btn';
  }  
  buttons[current].className = 'btn active';
  slides[current].className = 'slide-item show';
  currentSlide = current;
}
numbSlide(currentSlide = 0);
const slideInterval = setInterval(nextSlide,7000);

// background
for (let i = 0; i < slides.length; i++) {
  slides[i].style.background = `url('img/slide-${(i+1)}.jpg') center`;
  slides[i].style.backgroundSize = 'cover';
  buttons[i].setAttribute('onclick', `numbSlide(${i})`);
}

