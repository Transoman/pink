var navBtn = document.querySelector('.nav__btn');

navBtn.addEventListener('click', function(e) {
	e.preventDefault();
	navBtn.classList.toggle('nav__btn--active');
});