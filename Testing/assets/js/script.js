const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const homebtn = document.querySelector('.homebtn');
const aboutbtn = document.querySelector('.aboutbtn');
const projectsbtn = document.querySelector('.projectsbtn');
const contactbtn = document.querySelector('.contactbtn');

homebtn.addEventListener('click', hidemenu)
aboutbtn.addEventListener('click', hidemenu)
projectsbtn.addEventListener('click', hidemenu)
contactbtn.addEventListener('click', hidemenu)
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show(){
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