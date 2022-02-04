const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('nav');

let typed = new TypeIt('#typed', {
    strings: [`{ 💻 }`,
    '{ ☕ }',
    '{ 📚 }',
    '{ ✨ }',
    '{ 🎧 }',
    '{ 📂 }',
    '{ 📱 }',
    '{ 🌱 }',
    '{ 💫 }',
    '{ 📋 }',
    '{ 💾 }',
    '{ 💕 }'],
    speed: 100,
    startDelay: 250,
    nextStringDelay: 3000,
    breakLines: false,
    loop: true
}).go();

function openMenu() {
    menu.classList.add('active');
    toggle.classList.replace('fa-bars', 'fa-times');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
}

function closeMenu() {
    menu.classList.remove('active');
    toggle.classList.replace('fa-times', 'fa-bars');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
}

// close hamburger menu after a navigation link is clicked
document.querySelectorAll('.nav-menu li a').forEach(link => 
    link.addEventListener('click', function() {
        closeMenu();
    })
);

toggle.addEventListener('click', function() {
    let menuOpen = menu.classList.contains('active');
    if (menuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

window.addEventListener('resize', () => { if (window.innerWidth > 765) closeMenu()} );