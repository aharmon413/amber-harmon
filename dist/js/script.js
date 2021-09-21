const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('nav');

// close hamburger menu after a navigation link is clicked
document.querySelectorAll('.navMenu li a').forEach(link => 
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

function openMenu() {
    menu.classList.add('active');
    toggle.classList.replace('fa-bars', 'fa-times');
    toggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    menu.classList.remove('active');
    toggle.classList.replace('fa-times', 'fa-bars');
    toggle.setAttribute('aria-expanded', 'false');
}