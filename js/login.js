const buyer = document.querySelector('.buyer-login');
const seller = document.querySelector('.seller-login');
const username = document.querySelector('#id');
const password = document.querySelector('#pw');
const loginBtn = document.querySelector('.login');
const alert = document.querySelector('.alertMsg');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.href = '/pages/product_list.html'
});

// 로그인 타입 부여
let loginType = '';

// 구매자 로그인 버튼 클릭 이벤트
buyer.addEventListener('click', () => {
    loginType = 'BUYER';
});

// 판매자 로그인 버튼 클릭 이벤트
seller.addEventListener('click', () => {
    loginType = 'SELLER';
});

// 로그인 버튼 클릭 이벤트
loginBtn.addEventListener('click', (event) => {
    // 유효성 검사
    if (username.value === '' && password.value === '') {
        alert.style.display = 'block';
        alert.textContent = '아이디와 비밀번호를 입력해 주세요.';
        username.focus();
        event.preventDefault();
    } 
    else if (username.value === '') {
        alert.style.display = 'block';
        alert.textContent = '아이디를 입력해 주세요.';
        username.focus();
        event.preventDefault();
    } 
    else if (password.value === '') {
        alert.style.display = 'block';
        alert.textContent = '비밀번호를 입력해 주세요.';
        password.focus();
        event.preventDefault();
    } 
    else {
        // 로그인 요청
        handleLogin();
    }
});

// 로그인 요청 함수
function handleLogin() {
    fetch('https://estapi.openmarket.weniv.co.kr/accounts/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            login_type: loginType,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/pages/product_list.html'; 
        } else {
            alert.style.display = 'block';
            alert.textContent = '아이디 또는 비밀번호가 일치하지 않습니다.';
            username.value = ''; 
            password.value = ''; 
            password.focus();
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

