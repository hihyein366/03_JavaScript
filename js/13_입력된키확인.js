// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 특정 요소 X
// 문서(화면 전체)에서 key가 눌러지는걸 감지했을 때
document.addEventListener("keydown", function(e){

    // e.key : 입력된 키

    let idx; // index값 저장할 변수

    // 문자열.toLowerCase() : 영어 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어 모두 대문자로 변경

    switch(e.key.toLowerCase()){ // 입력된 키를 소문자로 바꿔서 case 실행 (대소문자 상관이 없게됨)
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return; // 함수 종료

    }

    // idx 번호와 일치하는 keys 배열의 요소 배경색 변경
    keys[idx].style.backgroundColor = "#457b9d";
    
});

document.addEventListener("keyup", function(e){
    let idx;

    switch(e.key.toLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;
    }
    keys[idx].style.backgroundColor = "white"
});