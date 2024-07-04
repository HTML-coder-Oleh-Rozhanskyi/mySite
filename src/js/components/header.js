function header() {
	const header = document.querySelector('.header');

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (scrollDistance > 0) {
			header.classList.add('header--scrolling');
		}
		else {
			header.classList.remove('header--scrolling');
		}
	});
};
header();


