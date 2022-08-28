const str = 'hello 123 !@#$%^WORLD?.';

const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(noSpecialCharacters); // 👉️ 'hello 123 WORLD'

const toggleBtn = document.querySelector('.nav__toggleBtn');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});