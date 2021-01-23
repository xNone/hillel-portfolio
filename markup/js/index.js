// Burgermenu
let menuBtnBurgerMenu = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu-drop-container');
let menuMarkDev = document.querySelector('.menu-markup-dev');
let scrollinv = document.querySelector('.scroll');
let category = document.querySelector('.jscategory');

// PROJECTS-menu
let menuBtnProjects = document.querySelector('.img-2-block');
let menuProjects = document.querySelector('.menu-projects');

// Burgermenu
menuBtnBurgerMenu.addEventListener('click', function(){
	menuBtnBurgerMenu.classList.toggle('active');
	menuProjects.classList.remove('active-projects');
	menu.classList.toggle('active');
	menuMarkDev.classList.toggle('active');
	scrollinv.classList.toggle('active');
});
category.addEventListener('click', function(){
	menuBtnBurgerMenu.classList.remove('active');
	menu.classList.remove('active');
	menuMarkDev.classList.remove('active');
	scrollinv.classList.remove('active');
})
// PROJECTS-menu
menuBtnProjects.addEventListener('click', function(){
	menuProjects.classList.toggle('active-projects');
})

// Scroll
var scroll = [];
var currentScroll = 0;
var isAnimating  = false;
$(function() {
	function updateScroll() {
		scroll = [];
		$('.js-scroll').each(function(i, element) {
			scroll.push( $(element).offset().top );
		});
	}
	$('body').on('mousewheel', function(e) {
		e.preventDefault();
		e.stopPropagation();
		if(isAnimating) {
			return false;
		}
		isAnimating = true;
		if(e.originalEvent.wheelDelta >= 0) {
			currentScroll--;
		} else{
			currentScroll++;
		}
		if( currentScroll > (scroll.length - 1)
			|| currentScroll < 0 ) {
			currentScroll = 0;
		}
		isAnimating = true;
		$('html, body').animate({
			scrollTop: parseInt( scroll[currentScroll] )
		}, 500, 'swing', function() {
			isAnimating  = false;
		});
	});
	updateScroll();
});
