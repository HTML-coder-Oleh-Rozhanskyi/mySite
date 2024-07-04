function aside() {

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.aside-menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.aside-menu__link').forEach((el) => {
					if (el.classList.contains('is-active')) {
						el.classList.remove('is-active')
					}
				});
				document.querySelectorAll('.aside-menu__item')[i].querySelector('.aside-menu__link').classList.add('is-active')
			}
		})
	});
};

aside();



