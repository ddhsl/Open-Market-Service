const logo = document.querySelector('.logo');
const loginBtn = document.querySelector('.login');
const blanket = document.querySelector('.blanket');

logo.addEventListener('click', () => {
    window.location.href = '/pages/product_list.html';
});

loginBtn.addEventListener('click', () => {
    window.location.href = '/pages/login.html'; 
});

blanket.addEventListener('click', () => {
    window.location.href = '/pages/product_details.html';
})
