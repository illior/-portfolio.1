let header = document.getElementById('header');
let leftMenu = document.querySelector('.left-menu')
let leftMenuShow = false;

document.getElementById('left-menu-open').addEventListener('click', function(e) {
	e.preventDefault();
	if (!leftMenuShow) {
		leftMenu.style.top = getComputedStyle(header, null).height;
		leftMenu.style.left = '0';

		leftMenuShow = true;
	} else {
		leftMenu.style.left = '-100%';
		leftMenuShow = false;
	}
});

let anchors = document.querySelectorAll('.menu a');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href');

		let elemY = document.querySelector(blockID).getBoundingClientRect().top;

		let headerH = header.getBoundingClientRect().height;

		y = elemY + pageYOffset - headerH;

		window.scrollTo(0, y);
	})
}

let leftAnchors = document.querySelectorAll('.left-menu a');

for (let leftAnchor of leftAnchors) {
	leftAnchor.addEventListener('click', function (e) {
		e.preventDefault();

		leftMenu.style.left = '-100%';
		leftMenuShow = false;

		const blockID = leftAnchor.getAttribute('href');

		let elemY = document.querySelector(blockID).getBoundingClientRect().top;

		let headerH = header.getBoundingClientRect().height;

		y = elemY + pageYOffset - headerH;

		window.scrollTo(0, y);
	})
}

let serviceItems = document.querySelectorAll('.service2__title');

for (let item of serviceItems) {
	item.addEventListener('click', function (e) {
		let parent = item.parentNode;

		let active = document.querySelector('.service2 .active');

		if (active != parent) {
			active.classList.remove('active');
			active.querySelector('img').src = 'img/ico/arrow-close.svg';

			parent.classList.add('active');
			parent.querySelector('img').src = 'img/ico/arrow-open.svg';
		}
	})
}

window.addEventListener('scroll', function() {
	if (pageYOffset > 50) {
		header.classList.add('header-active');
	} else {
		header.classList.remove('header-active');
	}
});