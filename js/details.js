const logo = document.querySelector('.logo');
const login = document.querySelector('.login');

logo.addEventListener('click', () => {
    window.location.href = '/pages/main.html';
});

login.addEventListener('click', () => {
    window.location.href = '/pages/login.html';
});



// 수량, 가격 반영
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const quantityDisplay = document.querySelector('.quantity');
const totalPriceDisplay = document.querySelector('.totalPrice');
const totalQuantityDisplay = document.querySelector('.totalQuantity');

// 단가 및 재고 수량
const unitPrice = 17500;
const stockQuantity = 5;

plusBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityDisplay.textContent);
    if (currentQuantity < stockQuantity) {
        currentQuantity += 1;
        quantityDisplay.textContent = currentQuantity;
        totalQuantityDisplay.textContent = currentQuantity;
        totalPriceDisplay.textContent = (unitPrice * currentQuantity).toLocaleString();
    }
    
    // 재고에 도달하면 + 버튼 비활성화
    if (currentQuantity >= stockQuantity) {
        plusBtn.disabled = true;
    }

    // 마이너스 버튼 활성화 (수량이 최소값을 초과했을 때)
    minusBtn.disabled = false;
});

minusBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityDisplay.textContent);
    if (currentQuantity > 1) {
        currentQuantity -= 1;
        quantityDisplay.textContent = currentQuantity;
        totalQuantityDisplay.textContent = currentQuantity;
        totalPriceDisplay.textContent = (unitPrice * currentQuantity).toLocaleString();
    }
    
    // 수량이 1보다 클 때는 + 버튼을 다시 활성화
    if (currentQuantity < stockQuantity) {
        plusBtn.disabled = false;
    }

    // 수량이 1이면 - 버튼 비활성화
    if (currentQuantity <= 1) {
        minusBtn.disabled = true;
    }
});

// 초기 상태: - 버튼 비활성화
minusBtn.disabled = true;



//로그인 모달
const cartBtn = document.querySelector('.keep');
const buyBtn = document.querySelector('.buy');
const loginDialog = document.querySelector('.login-dialog');
const deleteBtn = loginDialog.querySelector('.delete');
const closeBtn = loginDialog.querySelector('.close');
const goToLoginBtn = loginDialog.querySelector('.goToLogin');

// 모달 열기
cartBtn.addEventListener('click', () => {
    loginDialog.showModal();
});

buyBtn.addEventListener('click', () => {
    loginDialog.showModal();
});


// 모달 닫기
deleteBtn.addEventListener('click', () => {
    console.log('Delete button clicked');
    loginDialog.close();
});

closeBtn.addEventListener('click', () => {
    console.log('Close button clicked');
    loginDialog.close();
});

// 로그인 페이지로 이동
goToLoginBtn.addEventListener('click', () => {
    window.location.href = '/pages/login.html';
});



