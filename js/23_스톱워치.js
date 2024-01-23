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

    // 클릭한 버튼에 작성된 내용이 "PAUSE" 인 경우
    if(e.target.textContent == "PAUSE"){
        e.target.textContent = "START"; // 버튼 내용 변경
        clearInterval(currInterval) // currInterval 정지
        return;
    }

    // 클릭한 버튼에 작성된 내용이 START
    currInterval = window.setInterval(() => {
        count++; // count 1증가
        output(); // 화면에 시간 출력
    }, 10); // 10ms

    e.target.textContent = "PAUSE"
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

    // START 버튼으로 재정비
    startBtn.textContent = "START"

    // #recordContainer 내용 모두 삭제(== 빈 문자열로 변경)
    recordContainer.innerHTML = "";
});

/* 
  li 요소 생성
  li 요소의 내용으로
  #display에 출력된 시간을 얻어와
  대입

  #recordContainer의
  첫 번째 자식으로 li 추가
*/

/* recordBtn 클릭 시 */
recordBtn.addEventListener("click", () => {
    const li = document.createElement("li"); // li 생성

    li.innerText = display.innerText; // display 시간 얻어와 대입

    recordContainer.prepend(li); // li 첫째 자식
});


/* 요소.textContent 와 요소.innerText */

// textContent를 이용해 요소에 작성된 내용 얻어오기
// -> HTML 파일에 작성된 내용 형태(태그 빼고) 그대로 얻어옴
//    (띄어쓰기, 엔터\n 포함)

// innerText를 이용해 요소에 작성된 내용 얻어오기
// -> 브라우저 화면에 보이는 형태(태그 빼고) 얻어옴