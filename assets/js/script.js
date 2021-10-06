const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const homebtn = document.querySelector('.homebtn');
const aboutbtn = document.querySelector('.aboutbtn');
const projectsbtn = document.querySelector('.projectsbtn');
const contactbtn = document.querySelector('.contactbtn');


if (window.matchMedia("(max-width:900px)").matches) {
  homebtn.addEventListener('click', hidemenu)
  aboutbtn.addEventListener('click', hidemenu)
  projectsbtn.addEventListener('click', hidemenu)
  contactbtn.addEventListener('click', hidemenu)
  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', hide);

  function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    openMenu.style.display = 'none';
  }

  function hide() {
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'block';
  }

  function hidemenu() {
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'block';
  }
}

if (window.matchMedia("(max-width:395px)").matches){
  document.querySelector('#nameH1').innerHTML = "Sumesh";
}

// Typed JS Animation Start

var typed = new Typed('.type', {
  strings: [
    'Mathematicaphile',
    'Web Developer',
    'Programmer'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});
// Typed JS Animation End



// Toggle Switch

const body = document.querySelector('body');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const toggle = document.querySelector('#toggle');
const togglediv = document.querySelector('.dark-light-toggle');
const topbtn = document.querySelector('.movetotop');
const gifImg = document.querySelector('.gifimg');


toggle.addEventListener('change', function () {
  if (this.checked) {
    body.classList.remove('light');
    body.classList.add('dark');
    moon.style.display = 'none';
    sun.style.display = 'block';
    togglediv.style.boxShadow = '4px 0 1em 4px rgba(255, 255, 255, 0.5)';
    topbtn.style.boxShadow = '0 0 1em 5px rgba(255, 255, 255, 0.5)';
    // gifImg.src = "assets/img/programmer-darkbg.gif"
  }
  else {
    body.classList.remove('dark');
    body.classList.add('light');
    moon.style.display = 'block';
    sun.style.display = 'none';
    togglediv.style.boxShadow = '4px 0 1em 4px rgba(0, 0, 0, 0.5)';
    topbtn.style.boxShadow = '0 0 1em 5px rgba(0, 0, 0, 0.5)';
    // gifImg.src = "assets/img/programmer-lightbg.gif"
  }
})


window.addEventListener('scroll', function () {
  let navbar = this.document.querySelector('.navbar');
  let windowPosition = window.scrollY ;
  if (windowPosition > 80) {
    topbtn.style.display = 'block';
    navbar.classList.add('scroll-active');
  } else {
    topbtn.style.display = 'none';
    navbar.classList.remove('scroll-active');
  }
});
// Toggle Switch

