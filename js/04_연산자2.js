const cv1 = document.getElementById("compareValue1");
const cv2 = document.getElementById("compareValue2");
const result = document.getElementById("result1");

function compareFn1(){
    const v1 = cv1.value;
    const v2 = cv2.value;

    result.innerText = (v1 == v2);  // 괄호 쳐도 안쳐도 노상관
}

const cv3 = document.getElementById("compareValue3");
const cv4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2(){

    // string 비교시 원하는 결과 안나올수도. 숫자로 바꿔줘
    const v3 = Number(cv3.value);
    const v4 = Number(cv4.value);

    console.log(v3, typeof v3, v4, typeof v4);
    
    result2.innerText = (v3 > v4);
}

const cv5 = document.getElementById("input3_1");
const cv6 = document.getElementById("input3_2");
const result3 = document.getElementById("result3"); 

/* A가 B의 배수 == A를 B로 나눴을 때 나머지가 0 */
// result3.innerText = v1 + "은/는" + v2 + "의 배수 : " + (v1 % v2 == 0)

/* 백틱(`)을 이용한 문자열 작성하기 */

// 문자열 전체를 백틱으로 감싼 후
// 변수, 연산결과 등이 출력되는 자리에
// ${변수명} 또는 ${연산식} 을 작성

function checkFn3(){
    const v5 = Number(cv5.value);
    const v6 = Number(cv6.value);

    // result3.innerText = v5 + "은/는" + v6 + "의 배수 : " + (v5 % v6 == 0)

    result3.innerText = ` ${v5} 은/는 ${v6}의 배수 : ${v5 % v6 == 0} `;
}

/* 입력된 값 만큼 누적/차감 */
const inp = document.getElementById("input4");
const result4 = document.getElementById("result4");
let count = 0;   // 누적은 count 사용해준다

function minus4() {
    const val = Number(inp.value);
    count -= val;

    result4.innerText = count;
}

function plus4(){
    const val = Number(inp.value);
    count += val;
    result4.innerText = count;
}

/* 논리 연산자 확인하기 */
function checkFn5(){

    const bool1 = (104 >= 100) && (104 % 2 == 0);
    console.log(`104는 100 이상의 수 이면서 짝수인가? ${bool1}`);

    const bool2 = (50 <= 70) && (50 % 4 == 0);
    console.log(`50은 70 이하이고, 4의 배수인가? ${bool2}`);

    const bool3 = (13 >= 1) && (13 <= 10);
    console.log(`13은 1부터 10 사이의 수가 맞는가? ${bool3}`);

// --------------------------------
// OR

const bool4 = (4 > 10) || (4 % 2 == 0);
console.log(`4는 10을 초과하거나, 짝수인가? ${bool4}`);

const bool5 = (50 <= 0) || (50 >= 40);
console.log(`50은 0 이하 또는 40 이상인가? ${bool5}`);

// ---------------------------------
// NOT
console.log(`!true = ${!true}`);
console.log(`!false = ${!false}`);

const bool6 = false;
console.log( !(bool6 != true) );
}

// ---------------------------------------
/* 삼항 연산자 - 로그인 하기 */
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login(){

    // id, pw 인풋에 작성된 값 얻어오기
    const id = inputId.value;
    const pw = inputPw.value;

    const success = "성공!";
    const fail = "아디 또는 비번 불일치";

    // alert에 출력될 내용을 저장할 변수 선언
    const message = (id == 'member01') && (pw == 'pass01!') ? success : fail ;

    alert(message);
}