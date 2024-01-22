const display = document.querySelector("#display");

const list = document.querySelectorAll("#display > span");

const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

let count = 0; // 1/100 초마다 1씩 증가한 값 저장

// 1/100 초 자리 : count % 100
// 초 자리 : count / 100 % 60
// 분 자리 : count / 100 / 60

let currInterval; // 인터벌 저장 변수

/* start 버튼 클릭 시 10ms 마다 display(시간) 증가 */
startBtn.addEventListener("click", e => {
    currInterval = window.setInterval(() => {
        count++; // count 1증가
        output(); // 화면에 시간 출력

    }, 10); // 10ms

    e.target.disabled = true; // 임시
});

/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(count / 100 / 60);
    let second = Math.floor(count / 100 % 60);
    let ms = count % 100;

    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    // minute 의 값과 화면에 출력된 분이 다를 경우
    if(list[0].innerText != minute) list[0].innerText = minute;

    // second 의 값과 화면 출력 초가 다를 경우
    if(list[1].innerText != second) list[1].innerText = second;

    list[2].innerText = ms;
}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환 */
function attachZero(num){
    if(num < 10){ // 한자리 숫자인 경우
        return "0" + num;
    }
    return "" + num;
}

/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", () => {

    // currInterval 제거
    window.clearInterval(currInterval);

    // count, 출력된 시간 모두 0으로
    count = 0;
    output();

    // start 버튼 활성화 
    startBtn.disabled = false;
});