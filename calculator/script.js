// 디스플레이에서 현재 값을 가져옴
function getDisplay() {
    return document.getElementById('display').value;
}

// 디스플레이에 값을 설정
function setDisplay(value) {
    document.getElementById('display').value = value;
}

// 숫자를 입력
function appendNumber(num) {
    const current = getDisplay();

    // 소수점이 이미 있을 때 중복 입력 방지
    if (num === '.' && current.includes('.')) {
        return;
    }

    // 0 다음에 0이 아닌 숫자 입력 시 0 제거
    if (current === '0' && num !== '.') {
        setDisplay(num);
    } else {
        setDisplay(current + num);
    }
}

// 연산자 입력
function appendOperator(operator) {
    const current = getDisplay();

    // 마지막 문자가 연산자인 경우 연산자 변경
    const lastChar = current[current.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        setDisplay(current.slice(0, -1) + operator);
        return;
    }

    // 빈 입력에 연산자 입력 방지
    if (current === '') {
        return;
    }

    setDisplay(current + operator);
}

// 마지막 문자 삭제
function deleteLast() {
    const current = getDisplay();
    setDisplay(current.slice(0, -1) || '0');
}

// 디스플레이 초기화
function clearDisplay() {
    setDisplay('0');
}

// 계산 실행
function calculate() {
    const expression = getDisplay();

    // 빈 입력 또는 연산자로 끝나는 식 검사
    if (expression === '' || expression === '0') {
        return;
    }

    const lastChar = expression[expression.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    try {
        // TODO(human): 계산 로직 구현
        const result = eval(expression);
        setDisplay(result);
    } catch (error) {
        setDisplay('오류');
        setTimeout(() => {
            setDisplay('0');
        }, 1500);
    }
}

// 초기 디스플레이 설정
window.addEventListener('DOMContentLoaded', () => {
    setDisplay('0');
});
