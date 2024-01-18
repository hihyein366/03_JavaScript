/* 클래스 접근 테스트 */
function classTest() {

    /* 유사 배열이란?
       배열처럼 index, length를 가지고 있으나 배열 전용 기능(method)를 제공하지 않음 */

    // .cls-test 요소 모두 얻어오기
    // -> HTMLCollection (== 유사배열)
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);

    // divs 0번째 요소에 배경색 변경
    divs[0].style.backgroundColor = "rgb(114, 203, 80)";
    divs[1].style.backgroundColor = "rgb(40, 255, 255)";
    divs[2].style.backgroundColor = "rgb(165, 58, 27)";

    for(let i=0; i<divs.length; i++){
        divs[i].innerText = `${i}번째 div 입니다`;
    }
}

/* input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){

    // 클래스가 cls-test2인 요소를 모두 얻어오겠다
    // -> HTML Collection(유사 배열) 형태로 얻어옴
    const inputList = document.getElementsByClassName("cls-test2"); // inputList는 요소아닌 배열. 그저 껍데기

    /* (중요)
        요소들을 한번에 얻어오게 되면 배열 형태로 반환 된다
        -> 요소를 다루고 싶으면 index를 이용해서 배열 요소를
           하나씩 꺼내서 다뤄야 한다!!!!!! */

    let sum = 0;

    for(let i=0; i<inputList.length; i++){

        // 요소에 작성된 값 얻어오기
        const value = Number(inputList[i].value); // Number로 안묶으면 문자열로 가져옴
        console.log(i, value);

        sum += value; // 값 누적
    }

    alert(`합계 : ${sum}`);
}

/* 태그명으로 요소 접근하기 */
function tagNameTest(){

    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");

    for(let i=0; i<tagList.length; i++){ // 순차접근

        // tagList[i].innerText : 작성된 내용 얻어오기
        // tagList[i].innerText = "abc" : 내용으로 abc 대입
        console.log(tagList[i].innerText);

        // 반복 중 현재 선택된 요소의 배경색을 작성된 내용과 똑같은 색으로 변경
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}

/* name으로 요소 접근하기 */
function nameTest(){

    // name속성 값이 "hobby"인 요소를 모두 얻어와 hobbyList에 저장
    const hobbyList = document.getElementsByName("hobby");

    let str = ""; // 체크된 값 누적
    let count = 0; // 체크된 수 카운트

    for(let i=0; i<hobbyList.length; i++){
        /* checkbox, radio 전용 속성 : .checked */

        // input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
        // input요소.checked = true -> 해당 요소를 체크
        // input요소.checked = false -> 해당 요소 체크 해제

        // 체크박스의 값, 체크여부 출력
        console.log(hobbyList[i].value, hobbyList[i].checked);

        // 체크 여부 검사해서 체크가 되어 있다면 체크된 요소값을 str에 누적
        // + count 변수 값을 1 증가
        if(hobbyList[i].checked){
            str += hobbyList[i].value + " ";
            count++;
        }

    }
    // #name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML
     = `${str}<br><br>선택된 취미 개수 : ${count}`;
}

/* CSS 선택자로 요소 접근하기 */
function cssTest(){
    /* 
    [요소 1개]
    1) document.querySelector("CSS 선택자");
            -> 선택자가 선택한 요소 중 첫 번째 요소를 반환

    [요소 n개 -> 배열]
    2) document.querySelectorAll("CSS 선택자");
        -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환
    */

    // target-div 속성값이 css-div 요소에 접근
    const container = document.querySelector('[target-div="css-div"]');

    container.style.border = "10px solid red";
    
    // 첫째 자식 div 선택 방법 1
    // const div1 = document.querySelector('[target-div="css-div"] > div:first-child');

    // 첫째 자식 div 선택 방법 2
    const div1 = document.querySelector('[target-div="css-div"] > div');
    // querySelector는 무조건 첫째만 선택하기 때문에 > div 해도 모두 선택 되지 않음

    console.log(div1);

    div1.innerText = "CSS 선택자로 선택해서 값 변경됨"
    const div2 = document.querySelector('[target-div="css-div"] > div:last-child');

    div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함"

    // 모든 자식 div 한 번에 선택
    const divList = document.querySelectorAll('[target-div="css-div"] > div');
    console.log(divList);

    // index 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "15px";

    for(let i=0; i<divList.length; i++){
        divList[i].onclick = function(){
            alert(`${i}번째 인덱스 요소임당`);
        }
    }
}

/* 카카오톡 채팅 화면 만들기 */
function readValue() {

    // 채팅 출력되는 배경
    const bg = document.querySelector('#chatting-bg');

    // 채팅 내용 입력 input
    const input = document.querySelector('#user-input');

    // 입력된 값이 없을 경우
    // 1) 진짜 안적음 / 2) 공백만 적음

    /* 문자열.trim() : 문자열 좌우 공백 제거 */
    if(input.value.trim().length == 0) {
        alert("채팅 내용 입력해");

        input.value = ""; // 이전 input에 작성된 값 삭제

        input.focus(); // input에 cursor 활성화

        return; // 현재 수행중인 함수를 종료. (+ 호출한 곳으로 돌아간단 기능도 있삼)
    }

    // 채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`

    // bg.scrollHeight : bg의 스크롤 전체 높이
    // bg.scrollTop : 스크롤 윗부분 위치
    // bg.scrollTop = 값; : 스크롤 윗부분 값 위치로 이동 (0은 최상단이다)
    //                      -> 값 너무 크면 젤 밑으로 이동된다
    bg.scrollTop = bg.scrollHeight;

    input.value = "";
    input.focus();
}

/* 아이디가 user-input인 요소에서 
  키가 올라오는 동작이 발생했을 때(감지 되었을 때)
  올라온 키가 "Enter" 이면 readValue() 함수 호출 */

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keypress : 키가 눌러지고 있을 때 (연속적으로 인식)
// keyup : 눌러지던 키가 떼어졌을 때 (1회 인식)

document.querySelector("#user-input").addEventListener("keyup", function(e){

    // e : 이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
    // e.key : 입력한 키만 보이게 반환
    // console.log(e.key);

    if(e.key == "Enter") { // 엔터가 눌러졌을 때
        readValue(); // 채팅창 출력 함수 호출
    }
});