/* if - 양수인지 검사 */
const input1 = document.getElementById("input1");

function check1() {
    const value = Number(input1.value);

    if(value > 0){
        alert("양수");
    }

    if(value <= 0){
        alert("양수 아니자나")
    }
}

/* if - else -> 홀짝 판별하기 */
function check2(){
    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= Math.random() < 1

    // 0 ~ 100 사이 난수, floor 붙이면 소수점 날아감
    const randomNumber = Math.floor(Math.random() * 101);

    if(randomNumber % 2 == 1){
        alert(`${randomNumber} 는 홀수 입니다`);
    }
    else {
        alert(`${randomNumber}는 짝수네 딱보니까`)
    }
}

/* -3 ~ 3 사이 난수 발생시켜, 양,음수, 0 판별 */
// -3~3 범위 위해 -3 해준다. (원래는 0~6)
function check3() {
    const randomNumber = Math.floor( Math.random() * 7 ) -3;

    let message = randomNumber + "은/는";

    if(randomNumber == 0){
        // message = message + "0 입니다.";
        message += " 0 입니다.";
    } else if(randomNumber > 0) {
        message += " 양수다.";
    } else {
        message += " 음수";
    }

    alert(message);
}

/* 나이 따라 구분하기 */
const inputAge = document.getElementById("inputAge")

function check4() {
    const age = Number(inputAge.value);

    console.log("age : ", age);
    /* 빈 문자열("", '') : 내용이 없는 문자열 */

    /* "문자열".length : 문자열 길이 나온다. */

    // 입력된 나이의 길이가 0인 경우 == 입력안한 경우
    if(inputAge.value.length == 0){
        alert("값 입력해라");
    } else { // 입력한 경우 -> 이때 어린이, 청소년, 성인 검사

        /* 중첩 if 문 */
        // if( !(age >= 0 && age <= 150) ){ // 0~150 사이가 아닌 경우
        if( age < 0 || age > 150  ){ // 0 ~ 150 사이가 아닌 경우
            alert("사람이 아니무니다")
            
        } else if(age >= 0  && age <= 13){  // 어린이
            alert("어린이");
            
        } else if(age <= 19) { // 청소년
            alert("청소년");
            
        } else { // 성인
            alert("성인");
        }
    } 

        //     if (age >= 0 && age <= 13) {
        //         alert("어린이");
        //     } else if(age >= 14 && age <= 19) {
        //         alert("자네 아직 청소년")
        //     } else if (age >= 20 && age <= 150) {
        //         alert("오 성인ㅋ");
        //     } else {
        //         alert("사람이 아니무니다");
        //     }
        // }
}

/* switch 이용한 계산기 */
const number1 = document.getElementById("number1"); // input
const number2 = document.getElementById("number2"); // input
const calcResult = document.getElementById("calcResult"); // span

function calc(op){
    // 매개변수(Parameter) op
    // 함수 호출 시 전달되는 값을 저장하는 변수

    // ex) calc('+') // 함수 호출
    //     '+' 값이 op 변수에 저장 되어짐

    console.log("op : ", op);

    const v1 = Number(number1.value);
    const v2 = Number(number2.value);
    
    /* switch 버전 */

    // switch(식) 에서 식은 다양한 값이 나타날 수 있는 변수 or 계산식

    let result; // 결과 저장 변수 선언

    switch(op){

        // op 값 따른 처리 case 작성

        /* break : 본인거 실행하고 멈춤. break 없으면 밑 식 까지 적용 */
        case '+': result = v1 + v2; break;
        case '-': result = v1 - v2; break;
        case '*': result = v1 * v2; break;
        case '/': result = v1 / v2; break;
        case '%': result = v1 % v2; break;

        /* 맞는 case가 없을 경우에 적용할 기본값 (else) */
        default : result = "잘못된 연산자"; break; 
    }

    calcResult.innerText = result;


    // if문 버전

    // op가 '+'인 경우
    // if(op == '+'){
    //     calcResult.innerText = v1 + v2;
    // } else if(op == '-') {
    //     calcResult.innerText = v1 - v2;
    // } else if(op == '*') {
    //     calcResult.innerText = v1 * v2;
    // } else if(op == '/') {
    //     calcResult.innerText = v1 / v2;
    // } else if(op == '%') {
    //     calcResult.innerText = v1 % v2;
    // } else {
    //     calcResult.innerText = "잘못된 연산자";
    // }
}