/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*==================== MENU SHOW ====================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*==================== MENU CLOSE ====================*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/

var slide = 0,
    slides = document.querySelectorAll('#slides > li'),
    numSlides = slides.length,

    //Functions!!
    currentSlide = function() {
        var itemToShow = Math.abs(slide % numSlides);
        [].forEach.call(slides, function(el) {
            el.classList.remove('slideActive');
        });
        slides[itemToShow].classList.add('slideActive');
        
    },
    next = function() {
        slide++;
        currentSlide();
    },
    prev = function() {
        slide--;
        currentSlide();
    },
    
    resetslide = function() {
        var elm = document.querySelector('#slides > li'),
            newone = elm.cloneNode(true),
            x = elm.parentNode.replaceChild(newone, elm);
    },
    resetInterval = function() {
        clearInterval(autonext);
        autonext = setInterval(function() {
            slide++;
            currentSlide();
        }, 10500);
    },
    autonext = setInterval(function() {
        next();
    }, 10500);


//Buttons
document.querySelector('#first').addEventListener('click', function() {
    slide = 0;
    currentSlide();
}, false);
document.querySelector('#second').addEventListener('click', function() {
    slide = 1;
    currentSlide();
}, false);
document.querySelector('#third').addEventListener('click', function() {
    slide = 2;
    currentSlide();
}, false);
document.querySelector('#fourth').addEventListener('click', function() {
    slide = 3;
    currentSlide();
}, false);
document.querySelector('#fifth').addEventListener('click', function() {
    slide = 4;
    currentSlide();
}, false);

document.querySelector('#next').addEventListener('click', function() {
    next();
}, false);
document.querySelector('#previous').addEventListener('click', function() {
    prev();
}, false);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp(){
	const scrollTop = document.getElementById('scroll-up');
	if(this.scrollY >=200) scrollTop.classList.add('show-scroll');
	else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTOVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}
		else{
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme);
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme);
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
})


/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
	distance: '60px',
	duration: 2800,
	reset: true,
})

sr.reveal('.home_data, .home_social-link, .home_info, .discover_container, .experience_data, .experience_overlay, .place_card, .sponsor_content, .footer_data, .footer_rights',{
	origin: 'top',
	interval: 100,
})

sr.reveal('.about_data, .video_description, .subcribe_description', {
	origin: 'left',
})

sr.reveal('.about_img-overlay, .video_content, .subscribe_form', {
	origin: 'right',
	interval: 100,
})




