let siteNavOpen = document.querySelector(".site-nav__open");
let nav = document.querySelector('.nav')
siteNavOpen.addEventListener('click', () => {
    nav.classList.toggle('open')
});