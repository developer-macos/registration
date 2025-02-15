const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

alert("Welcome " + firstName  + lastName);