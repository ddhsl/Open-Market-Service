const loginBtn = document.querySelector('.login');
const blanket = document.querySelector('.blanket')

loginBtn.addEventListener('click', () => {
    window.location.href = '/pages/login.html'; 
});

blanket.addEventListener('click', () => {
    window.location.href = '/pages/product_details.html';
})