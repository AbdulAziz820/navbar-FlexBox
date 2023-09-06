const garisTiga = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

garisTiga.addEventListener('click', function() {
    navbar.classList.toggle('slide');
});