var navBtn = document.querySelector('.nav__btn');
var navList = document.querySelector('.nav__list');
var header = document.querySelector('.main-header');

navBtn.addEventListener('click', function(e) {
	e.preventDefault();
	navBtn.classList.toggle('nav__btn--active');
	header.style.background = '#283645';
	header.style.boxShadow = '0 1px 0 rgba(0,0,0,1)';

	if(navBtn.classList.contains('nav__btn--active')) {
		navList.style.display = 'block';
	}
	else {
		navList.removeAttribute('style');
		header.removeAttribute('style');
	}
});