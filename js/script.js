let header = document.getElementById('header');
let leftMenu = document.querySelector('.left-menu')
let leftMenuShow = false;

document.getElementById('left-menu-open').addEventListener('click', function(e) {
	if (!leftMenuShow) {
		leftMenu.style.top = getComputedStyle(header, null).height;
		leftMenu.style.left = '0';

		leftMenuShow = true;
	} else {
		leftMenu.style.left = '-100%';
		leftMenuShow = false;
	}
	e.preventDefault();
})

window.addEventListener('scroll', function() {
	if (pageYOffset > 50) {
		header.classList.add('header-active');
	} else {
		header.classList.remove('header-active');
	}
});