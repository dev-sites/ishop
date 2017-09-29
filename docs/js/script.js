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