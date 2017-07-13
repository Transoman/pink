var navBtn = document.querySelector('.nav__btn');
var navList = document.querySelector('.nav__list');
var nav = document.querySelector('.nav');
var header = document.querySelector('.main-header');

navBtn.addEventListener('click', function(e) {
	e.preventDefault();
	navBtn.classList.toggle('nav__btn--active');
	header.style.background = '#283645';
	header.style.boxShadow = '0 1px 0 rgba(0,0,0,1)';

	if(nav.classList.contains('nav--closed')){
		nav.classList.remove('nav--closed');
		nav.classList.add('nav--opened');
	}
	else{
		nav.classList.add('nav--closed');
		nav.classList.remove('nav--opened');
	}

	if(!navBtn.classList.contains('nav__btn--active')) {
		header.removeAttribute('style');
	}
});

window.addEventListener('resize', function(e) {
	if(innerWidth >= 1200) {
		header.removeAttribute('style');
	}
});

// Slider reviews
var btnLeft = document.querySelector('.reviews__left');
var btnRight = document.querySelector('.reviews__right');
var toggles = document.querySelectorAll('.reviews__input');

btnLeft.addEventListener('click', function(e) {
	for(i=0; i < toggles.length; i++) {
		if(toggles[i].checked) {
			if(i == 0) {
				toggles[i].checked == false;
				toggles[toggles.length - 1].checked = true;
				break;
			}
			else {
				toggles[i].checked == false;
				toggles[i - 1].checked = true;
				break;
			}
		}
	}
});

btnRight.addEventListener('click', function(e) {
	for(i=0; i < toggles.length; i++) {
		if(toggles[i].checked) {
			if(i == toggles.length - 1){
				toggles[i].checked = false;
				toggles[0].checked = true;
				break;
			}
			else {
				toggles[i].checked = false;
				toggles[i + 1].checked = true;
				break;
			}
		}
	}
});