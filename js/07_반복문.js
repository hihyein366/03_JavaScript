function check1(){

    // for([1]초기식 ; [2]조건식 ; [4]증감식){
    //   [3]조건식이 true인 경우 반복 수행할 코드;
    // }

    let result = ""; // 빈 문자열
    for(let num=1; num <= 5; num++) {
        result += num; // 복합 대입 연산자
    }

    console.log("result : ", result);
}

function check2() {
    // 1~10 출력하기
    for(let num=1; num <= 10; num++) {
        console.log("num : ", num);
    }
}

function check3() {
    for(let num=1; num <= 20; num++) {
        console.log("num : ", num);
    }
}

function check4() {
    // 5부터 15까지 1씩 증가 출력
    for(let num=5; num <= 15; num++) {
        console.log("num : ", num);
    }
}

function check5() {
    for(let num=1; num <= 30; num += 2) {
        console.log("num : ", num);
    }
}

function check6() {

    let sum = 0;
    for(let num=1; num <= 10; num++) {
        sum += num;
    }

    console.log("sum : ", sum);
}

/* 입력 받은 범위 내 모든 정수의 합 구하기 */
function sumFn() {
    // input 값 얻어와 작성
    const start = Number(document.getElementById("inputNumber1-1").value); // 이 값 가져온다
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소(span#result1)인 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start부터 end 까지 1씩 증가하는 for문
    for(let num = start; num <= end; num++){
        sum += num; // num 값 sum에 누적
    }

    result1.innerText = sum;
}

/* 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기 */
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);

    // 증가값
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2");

    ul.innerHTML = ""; // 이전 ul 내용 삭제

    /* start부터 end까지 val씩 증가 */
    for(let num=start; num <= end; num += val) {

        // ul 요소 내부에 li 요소 누적 (= 마지막 결과만 출력) (+= 모든 결과 출력)
        ul.innerHTML += `<li>${num}</li>`
    }
    
}

// 요소.innerText = "<li>문자열</li>";
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그 해석않고 그대로 보여줌)

// 요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석해서 화면에 출력)

/* 구구단 2단 출력하기 */
function check7() {
    
    //num(곱해지는 수)이 1~9 까지 1씩 증가
    for(let num=1; num<=9; num++) {
        console.log(`2 X ${num} = ${2 * num}`);
    }
}

/* 입력받은 구구단 출력하기 */
function executeFn3() {

    const sta = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3")
    
    ul.innerHTML = "";

    // if( !(sta >= 2 && 9 >= sta) ) {
    if( sta < 2 || sta > 9) {   /* and 보다 or 연산이 더 빠름 */
        alert("2 ~ 9 사이만 입력해 주세요");
        return; // 함수 종료하고 호출한 곳으로 돌아감, 안그럼 alert 뜨고 밑 함수 실행됨
    }

    for(let num=1; num<=9; num++) {
        ul.innerHTML += `<li>${sta} X ${num} = ${sta*num}</li>`;
    }
}

function executeFn4() {

    // 배수
    const input = Number(document.getElementById("input4").value);

    // 모양
    const output = document.getElementById("output4").value;

    // 출력할 div
    const result = document.getElementById("result4");

    // 출력할 문자열 저장할 변수
    let str = "";

    for(let x=1; x<=50; x++) {
        if(x % input == 0) { // x가 input의 배수인 경우
            // str에 x 대신output 대입
            str += output + " ";

        } else {
            str += x + " ";
        }
    }

    result.innerHTML = str;
}

/* 다음모양 출력하기
    12345
    12345
    12345
    12345
*/
function check8() {
    // 4바퀴 반복 for문
    for(let y = 1; y <= 4; y++){

        // "12345" 출력 구문
        let str = "";
        for(let x=1; x<=5; x++) {
            str += x;
        }
        console.log(str); 
        console.log("");
    }
}

/* 다음 모양 출력하기
1
12
123
1234
12345 */

function check9() {
    for(let y=1; y<=5; y++) {

        let str = "";
        for(let x=1; x<=y; x++){ // x <= y 로 해서 
            str += x;
        }
        console.log(str);
    }
}

/* 감소하는 for문 */
function check10() {
    // 5 4 3 2 1 감소하며 출력 (num--)
    for(let num=5; num>=1; num-=2){ // 이건 5 3 1.
        console.log(num);
    }
}

/* 
12345
1234
123
12
1 */
function check11() {
    for(let row=5; row>=1; row--){ // 얘는 줄어들고 (자리 5칸 ... 1칸)
        let str = ""; // 자리
        for(let col=1; col<=row; col++){ // 얘는 늘어남 (1 12 123 1234 12345)
            str += col;
        }
        console.log(str);
    }
}

/* 
1
12
123
1234
123
12
1 */
// if, for문 내에 코드 '한 줄'이면 {} 생략 가능
function check12(){
    for(let y=1; y<=3; y++){
        let str="";
        for(let num=1; num<=y; num++) str += num; // 한줄 중괄호 생략가능
        console.log(str);
    }

    for(let y=4; y>=1; y--){
        let str="";
        for(let num=1; num<=y; num++){
            str += num;
        }
        console.log(str);
    }

    console.log("------------------");

    // 2중 for문 한번 사용하기

    for(let row=1; row<=7; row++){
        let end = 0;
        if(row <= 4) end = row;
        else end = 7-row+1;

        let str = "";
        for(let col=1; col<=end; col++){
            str += col;
        }
        console.log(str);
    }
}

/* 카운트를 이용해 출력하기
   1 2 3 4 
   5 6 7 8
   9 10 11 12 */
function check13(){
    let count = 1; // 카운트 위한 변수 선언

    for(let row=1; row<=3; row++){
        let str = "";
        for(let col=1; col<=4; col++){
            str += count + " ";
            count++; // count 값을 1 증가
        }
        console.log(str);
    }
}

/* 1~100 사이 입력받은 배수 몇개인지 count로 확인 */
function check14(){
    // 입력
    const input = Number(document.getElementById("input14").value);

    // 결과 출력 span
    const result = document.getElementById("result14");

    // 세기 위한 변수 선언
    let count = 0;

    for(let num=1; num<=100; num++) {

        // num이 input의 배수가 맞는 경우
        if(num % input == 0) {
            count++; // 배수 맞을 경우 몇개인지 count 1 증가
        }
    }

    result.innerText = `${input}의 배수 : ${count} 개`;

    // ex) 3의 배수 : 33 개
}

/* count 이용해서 출력
    1
    12
    123
    1234
    123
    12
    1 */
function check15() {
    let count = 0;
    for(let row = 1; row <= 7; row++) {
        if(row <= 4) count++; // 4행 이하면 count 1 증가
        else count--; // 4행 초과면 count 1 감소

        let str = "";

        for(let col=1; col<=count; col++) str += col;
        console.log(str);
    }
}

/* while문 확인 */
function check16() {
    let val;

    // 취소 누르기 전까지 반복
    // == 취소 누르면 반복 안함
    while(val !== null){ // null이 아닐 동안

    /* 동일 비교 연산자 */
    // !==  -> 값, 자료형이 모두 다른 경우 true
    // ===  -> 값, 자료형이 모두 같은 경우 true

        val = prompt("입력 후 확인"); // 변수에 prompt 값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);
    }
}

/* 메뉴 주문하기 */
function check17() {

    // 메뉴 가격
    const gim = 3000;
    const ra = 3500;
    const don = 5000;

    // 주문 개수 카운트
    let gCount = 0;
    let rCount = 0;
    let dCount = 0;

    // prompt로 입력한 값 저장할 변수 선언
    let input;

    while(input !== null){ // 취소 누르기 전까지 반복
        input = prompt("메뉴 번호 입력");

        switch(input){
            case '1' : gCount++; break;
            case '2' : rCount++; break;
            case '3' : dCount++; break;
            case null : alert("주문 완료"); break;
            default : alert('메뉴에 작성된 번호만 입력해라'); break;
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`)

    let sum = (gCount * gim) + (rCount * ra) + (dCount * don);
    alert(`총 가격 : ${sum} 원`)
}

/* while문을 for문 처럼 사용하기 */
function check18(){
    //1 ~ 10까지 출력
    let num = 1;
    while(num <= 10){
        console.log(num);
        num++;
    }

    console.log("-----------");

    /* 10부터 1까지 1씩 감소(while) */
    let x = 10;
    while(x >= 1){
        console.log(x);
        x--;
    }
}