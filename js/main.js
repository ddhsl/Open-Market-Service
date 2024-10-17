const logo = document.querySelector('.logo');
const loginBtn = document.querySelector('.login');
const keepBtn = document.querySelector('.keep');
const blanket = document.querySelector('.blanket');
const forUser = document.querySelector('.forUser');
const forProduct = document.querySelector('.forProduct');
const userMenu = document.querySelector('.userMenu'); 
const shoppingIcon = document.querySelector('.shoppingIcon');

logo.addEventListener('click', () => {
    window.location.href = '/pages/main.html';
});

blanket.addEventListener('click', () => {
    window.location.href = '/pages/details.html';
});

// 구매회원전용
const accessToken = localStorage.getItem('access_token');

keepBtn.addEventListener('click', () => {
    shoppingIcon.src = '/assets/icon-shopping-cart-2.svg';
    forProduct.style.color = 'var(--main-color)';
});

if (accessToken) {
    forUser.textContent = '마이페이지';
    loginBtn.addEventListener('click', () => {
        userMenu.style.display = 'block'; 
        document.querySelector('.userIcon').src = '/assets/icon-user-2.svg'
        forUser.style.color = 'var(--main-color)';
    });
} else {
    loginBtn.addEventListener('click', () => {
        window.location.href = '/pages/login.html';
    });
};

// 바깥 부분 클릭 시 유저 메뉴 숨기기
document.addEventListener('click', (event) => {
    const isClickInsideUserMenu = userMenu.contains(event.target);
    const isClickInsideLoginBtn = loginBtn.contains(event.target);
    
    // 유저 메뉴와 로그인 버튼이 아닌 경우
    if (!isClickInsideUserMenu && !isClickInsideLoginBtn) {
        userMenu.style.display = 'none'; 
        document.querySelector('.userIcon').src = '/assets/icon-user.svg';
        forUser.style.color = 'var(--sub-color)';
    }
});


//로그아웃
const logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    // 로그아웃 후 메인 페이지로 리다이렉트
    window.location.href = '/pages/main.html';
});
