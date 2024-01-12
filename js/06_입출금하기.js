/* prompt 사용 연습 */
function test(){
    const password = prompt("비밀번호 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null){  // 취소 눌렀을 때
        alert("취소");
    } else {  // 확인 눌렀을 때
        // 입력한 비밀번호 1234 맞는지 확인
        if(password == '1234'){
            alert("비밀번호 일치");
        } else {
            alert("비밀번호가 일치하지 않다");
        }
    }
}

/* -------------------------------------------------- */

const amount = document.getElementById("amount");
const result = document.getElementById("balance")
let balance = 10000;
const password = '1234';

function deposit() {
    const val = Number(amount.value);
    balance += val;

    result.innerText = balance;
}

function withdrawal(){
    const val = Number(amount.value);
    const password = prompt("비밀번호를 입력하세요");
    if(password == null) {
        alert("취소되었습니다");
    } else {
        if(password == '1234'){
            alert("비밀번호 일치합니다");
            balance -= val;
            result.innerText = balance;
            alert(`${val}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
        } else {
            alert("비밀번호가 일치하지 않습니다")
        }
    }

}