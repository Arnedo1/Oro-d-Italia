const overLay = document.querySelector('.overlay-container');
const nav = document.querySelector('nav ul');
const navMob = document.querySelector('.hamburger-icon');
const resBtn = document.querySelector('.fix-container-menu');
const close = document.querySelector('.close');
const mobNav = document.querySelector('.nav-mob-overlay-container')
const fix = document.querySelector('.fix')

function openReserveren() {
    overLay.style.display = 'flex';
    overLay.style.zIndex = '10'; 
    nav.style.display = 'none';
    navMob.style.display = 'none';
    if (resBtn){
        resBtn.style.display = 'none';}
    document.body.classList.add('noScroll')
    mobNav.style.display = 'none'
    if (fix) {
        fix.style.display = 'none';}
}

function closeReserveren() {
    overLay.style.display = 'none';
    if (resBtn){
        resBtn.style.display = 'flex';}
    if (fix) {
        fix.style.display = 'flex';}
    document.body.classList.remove('noScroll')
    
    if (window.innerWidth <= 768) {
        navMob.style.display = 'block';
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        navMob.style.display = 'none';
    }
}

const showMobNav = () => {
    mobNav.style.display = 'flex'
    mobNav.style.zIndex = '10'
    if (resBtn){
    resBtn.style.display = 'none';}
    document.body.classList.add('noScroll')
    if (fix) {
    fix.style.display = 'none';}
    navMob.style.display = 'none';
}

function menu() {
    if (overLay.style.display !== 'flex') {
        if (window.innerWidth <= 768 && mobNav.style.display !== 'flex') {
            navMob.style.display = 'block';
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            navMob.style.display = 'none';
        }
    }
}

// Add resize event listener
window.addEventListener('resize', menu);
