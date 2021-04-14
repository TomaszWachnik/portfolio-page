const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-active');
})