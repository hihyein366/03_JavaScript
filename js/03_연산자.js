// 변수 선언

// document(HTML문서(파일)내에서).get(얻다)Element(HTML요소)ById(아이디 일치하는)
// -> HTML 문서 내에서 아이디 일치하는 요소 얻어오겠다.

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calResult");

/* 두 수 더해서 화면에 출력하는 함수 */
function plusFn(){

    /* input요소.value : input요소에 작성된 값 얻어오기 */
    const value1 = number1.value;
    const value2 = number2.value;

    console.log(value1, value2);

    console.log("두 수의 합 : ", value1 + value2);
    // -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
    // 더했을 때 이어쓰기 되는 문제 발생

    // 해결법
    // 문자열(string) 숫자(number)로 변경하는 코드 수행
    // -> 데이터 파싱(data parsing) : 데이터의 종류 바꿈

    /* 숫자만 작성된 문자열("123")을 진짜 숫자(123)로 바꾸는 방법
       -> Number("123") */

    console.log("두 수의 합 : ", Number(value1) + Number(value2));

    /* 두 수의 합을 아이디가 "calResult"인 요소(result 변수)의 
       내부 글자(innerText)로 대입하기 */
    result.innerText = Number(value1) + Number(value2);
}

function minusFn() {
    // string으로 얻어온 값 선언에서 바로 숫자화
    const value1 = Number(number1.value); 
    const value2 = Number(number2.value);

    console.log("두 수의 차 : ", value1 - value2);
    result.innerText = value1 - value2;

}

function multiFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("두 수의 곱 : ", value1 * value2);

    result.innerText = value1 * value2;
}

function divFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("두 수의 나눗셈 : ", value1 / value2);

    result.innerText = value1 / value2
}

function modFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("두 수의 나머지 : ", value1 % value2);

    result.innerText = value1 % value2;
}

const gap1 = document.getElementById("num1");
const gap2 = document.getElementById("num2");
const gap3 = document.getElementById("num3");
const reesult = document.getElementById("threeResult");

function ppplusFn() {
    value1 = Number(gap1.value);
    value2 = Number(gap2.value);
    value3 = Number(gap3.value);

    console.log("세 값 합 : ", value1 + value2 + value3);

    reesult.innerText = value1 + value2 + value3
}


// -----------------------------------------------------------

/* 증가/감소 연산자 (++, --) */

// 증가, 감소할 수를 저장할 변수 선언
let count = 0;  // 주의) const로 선언하면 값 증감 불가. 항상 같은 수 유지 특성

// 문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

/* 1 증가 함수 */
function increase(){
    count++;  // 또는 ++count

    // 증가한 count 값을 result2의 내용으로 대입
    result2.innerText = count;
}

/* 1 감소 함수 */
function decrease(){
    count--;
    result2.innerText = count;
}

/* 전위, 후위 연산 확인 */
function check1() {

    // 함수 밖, 안은 구분되는 공간으로 생각하라.
    // 밖에 작성한 변수 count, 안에 작성한 count는 서로 다른 변수(동명이인)
    let count = 100;

    // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
    // 코드를 하나하나 실행하는 것들이 연산이다!

    // 전위 연산(++count, --count) 확인
    console.log("++count : ", ++count); //101
    console.log("++count : ", ++count); //102
    console.log("++count : ", ++count); //103
    console.log("-------------------");
    console.log("--count : ", --count); //102
    console.log("--count : ", --count); //101 
    console.log("--count : ", --count); //100

    // 후위 연산(count++, count--) 확인
    console.log("count++ : ", count++);
    console.log("count++ : ", count++);
    console.log("count++ : ", count++);
    console.log("-------------------");
    console.log("count-- : ", count--);
    console.log("count-- : ", count--);
    console.log("count-- : ", count--);

    // 후위연산은 마지막에 수행.

    count = 50;

    console.log('---------------');
    console.log("count++ : ", count++); // 50출력 후 51로 증가
    console.log("후위 연산 후 count : ", count);

    console.log("count-- : ", count--); // 51출력 후 50으로 감소
    console.log("후위 연산 후 count : ", count); // 50 출력

    console.log('---------------');

    let a = 10;
    let b = 5;
    let c = ++a * b--;

    // 11, 4, 55

    console.log(a, b, c);
}