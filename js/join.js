const id = document.querySelector('#id');
const password = document.querySelector('#pw');
const pwCheck = document.querySelector('.pwCheck');
const alertMsgs = document.querySelectorAll('.alertMsg');
const inputs = document.querySelectorAll('input');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.href = '/pages/product_list.html'
});

// 각 필드에 대해 입력 여부 유효성 검사
inputs.forEach((input, index) => {
    const alertMsg = alertMsgs[index]; // 해당 인덱스의 경고 메시지 선택

    input.addEventListener('focus', () => {
        // 현재 필드 이전의 필드가 비어 있는지 체크
        for (let i = 0; i < index; i++) {
            if (inputs[i].value.trim() === '') {
                alertMsgs[i].style.display = 'block'; // 해당 필드의 경고 메시지를 보이게
            } else {
                alertMsgs[i].style.display = 'none'; // 입력되어 있으면 경고 메시지 숨기기
            }
        }
    });

    // 다른 입력 필드에서 포커스가 변경될 때 유효성 검사
    input.addEventListener('blur', () => {
        // 아이디가 비어있지 않고 유효하지 않으면 오류 메시지 표시
        if (input === id) {
            validateId(); // 아이디 유효성 검사
        }
        // 비밀번호 유효성 검사
        if (input === password) {
            if (validatePassword()) {
                validatePasswordCheck(); // 비밀번호가 올바른 경우에만 비밀번호 재확인 체크
            } else {
                alertMsgs[2].style.display = 'none'; // 비밀번호 유효성 실패 시, 비밀번호 재확인 메시지 숨김
            }
        }
        // 비밀번호 재확인 유효성 검사
        if (input === pwCheck) {
            validatePasswordCheck();
        }
    });

    // 입력 중일 때 해당 경고 메시지 숨기기
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            alertMsg.style.display = 'none';
        }
    });
});

// 아이디 유효성 검사 정규식 (영문자, 숫자만 허용, 최대 20자)
const idPattern = /^[A-Za-z0-9]{1,20}$/;
// 비밀번호 유효성 검사 정규식 (8자 이상, 영문 대소문자, 숫자, 특수문자 포함)
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


// 아이디 유효성 검사 함수
function validateId() {
    const idAlertMsg = alertMsgs[0];
    if (id.value.trim() === '') {
        idAlertMsg.style.display = 'none'; // 비어있을 경우 메시지 숨김
        return false;
    }
    if (!idPattern.test(id.value.trim())) {
        idAlertMsg.style.display = 'block';
        idAlertMsg.textContent = '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.';
        id.classList.add('error'); // 오류 시 빨간 테두리 추가
        return false;
    } else {
        idAlertMsg.style.display = 'none';
        id.classList.remove('error'); // 유효성 통과 시 기본 테두리 색으로 리셋
        return true;
    }
}

// 비밀번호 유효성 검사 함수
function validatePassword() {
    const pwAlertMsg = alertMsgs[1];
    const pwValue = password.value.trim();

    if (pwValue === '') {
        pwAlertMsg.style.display = 'none';
        password.style.backgroundImage = 'url(/assets/icon-check-off.svg)';
        password.classList.remove('error'); // 입력이 없을 때 테두리 리셋
        return false;
    }

    if (!passwordPattern.test(pwValue)) {
        pwAlertMsg.style.display = 'block';
        pwAlertMsg.textContent = '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
        password.style.backgroundImage = 'url(/assets/icon-check-off.svg)';
        password.classList.add('error'); // 오류 시 빨간 테두리 추가
        return false;
    } else {
        pwAlertMsg.style.display = 'none';
        password.style.backgroundImage = 'url(/assets/icon-check-on.svg)';
        password.classList.remove('error'); // 유효성 통과 시 기본 테두리 색으로 리셋
        return true;
    }
}

// 비밀번호 재확인 유효성 검사 함수
function validatePasswordCheck() {
    const pwCheckAlertMsg = alertMsgs[2];
    const pwValue = password.value.trim();
    const pwCheckValue = pwCheck.value.trim();

    if (pwCheckValue === '') {
        pwCheckAlertMsg.style.display = 'none';
        pwCheck.style.backgroundImage = 'url(/assets/icon-check-off.svg)';
        pwCheck.classList.remove('error'); // 기본 테두리 색으로 리셋
        return false;
    }

    if (pwCheckValue !== pwValue) {
        pwCheckAlertMsg.style.display = 'block';
        pwCheckAlertMsg.textContent = '비밀번호가 일치하지 않습니다.';
        pwCheck.style.backgroundImage = 'url(/assets/icon-check-off.svg)';
        pwCheck.classList.add('error'); // 오류 시 빨간 테두리 추가
        return false;
    } else {
        pwCheckAlertMsg.style.display = 'none';
        pwCheck.style.backgroundImage = 'url(/assets/icon-check-on.svg)';
        pwCheck.classList.remove('error'); // 유효성 통과 시 기본 테두리 색으로 리셋
        return true;
    }
}

// 블러 이벤트를 이용한 유효성 검사
id.addEventListener('blur', validateId);
password.addEventListener('blur', () => {
    if (validatePassword()) {
        validatePasswordCheck(); // 비밀번호가 올바른 경우에만 비밀번호 재확인 체크
    } else {
        alertMsgs[2].style.display = 'none'; // 비밀번호 유효성 실패 시, 비밀번호 재확인 메시지 숨김
    }
});
pwCheck.addEventListener('blur', validatePasswordCheck);


// phone number
const num1 = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown-content');
const numbers = document.querySelectorAll('.dropdown-item');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');

// 드롭다운 버튼 클릭 시 드롭다운 표시/숨기기
num1.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// 모든 드롭다운 항목에 대해 클릭 이벤트 추가
numbers.forEach(number => {
    number.addEventListener('click', () => {
        num1.querySelector('span').textContent = number.textContent; // 드롭다운 버튼의 텍스트 변경
        dropdown.style.display = 'none'; // 드롭다운 닫기
    });
});

// 드롭다운 밖 클릭 시 드롭다운 닫기
document.addEventListener('click', (event) => {
    if (!num1.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// num2, num3 인풋의 focus 및 blur 이벤트 처리
[num2, num3].forEach(input => {
    input.addEventListener('focus', () => {
        // 포커스가 있을 때 초록색 테두리로 변경
        input.style.border = '1px solid #21BF48'; // 초록색 테두리
    });

    input.addEventListener('blur', () => {
        // 포커스가 이동했을 때 기본 테두리 색으로 변경
        input.style.border = '1px solid #c4c4c4'; // 기본 테두리 색상으로 돌아감
    });
});


//동의하기, 가입하기
const agreeBtn = document.querySelector('.agree');
const joinBtn = document.querySelector('.join');

// 클래스 추가 및 제거 함수
agreeBtn.addEventListener('click', () => {
    agreeBtn.classList.toggle('checked');
    
    // 체크 상태에 따라 joinBtn의 속성 및 스타일 변경
    if (agreeBtn.classList.contains('checked') ) {
        joinBtn.disabled = false; // disabled 속성 제거
        joinBtn.style.backgroundColor = 'var(--main-color)'; // 메인 색상 적용
    } else {
        joinBtn.disabled = true; // disabled 속성 추가
        joinBtn.style.backgroundColor = ''; // 기본 배경 색상으로 되돌리기
    }
});









