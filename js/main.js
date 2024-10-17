const logo = document.querySelector('.logo');
const loginBtn = document.querySelector('.login');
const blanket = document.querySelector('.blanket');
const forUser = document.querySelector('.forUser');


logo.addEventListener('click', () => {
    window.location.href = '/pages/main.html';
});

blanket.addEventListener('click', () => {
    window.location.href = '/pages/details.html';
});

// 구매회원전용
const accessToken = localStorage.getItem('access_token');

if (accessToken) {
    forUser.textContent = '마이페이지';
    loginBtn.replaceWith(loginBtn.cloneNode(true)); // 기존 이벤트 제거를 위해 버튼 복제
} else {
    loginBtn.addEventListener('click', () => {
        window.location.href = '/pages/login.html';
    });
}
