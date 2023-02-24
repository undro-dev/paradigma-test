const POPUP_MAP = document.querySelector('.popup');
const POPUP_PHONE = document.querySelector('.popup-phone');

const BTN_MAP = document.querySelector('.header-map');
const BTN_PHONE_FORM = document.querySelector('.header-contacts-call');

const BURGER_BTN = document.querySelector('.header-burger-btn');

BTN_MAP.addEventListener('click', () => (POPUP_MAP.style.display = 'flex'));
BTN_PHONE_FORM.addEventListener(
	'click',
	() => (POPUP_PHONE.style.display = 'flex')
);

document.addEventListener('click', e => {
	let target = e.target;
	if (
		target.classList.contains('popup') ||
		target.classList.contains('popup-phone') ||
		target.classList.contains('popup-body__close') ||
		target.classList.contains('popup-content-form__close')
	) {
		POPUP_MAP.style.display = 'none';
		POPUP_PHONE.style.display = 'none';
	}
});

BURGER_BTN.addEventListener('click', () =>
	document.querySelector('.header').classList.toggle('open')
);
