const logo = document.querySelector('.logo');
const login = document.querySelector('.login');

logo.addEventListener('click', () => {
    window.location.href = '/pages/main.html';
});

login.addEventListener('click', () => {
    window.location.href = '/pages/login.html';
});