/* a태그 기본 이벤트 제거 */
document.querySelector("#move").addEventListener("click", e => {

    // e.preventDefault() : 요소의 기본 이벤트 막기(제거)
    // prevent : 하지 못하게 막다

    e.preventDefault();
});


/* form 기본 이벤트 제거 */

/* 방법 1 : e.preventDefault() 사용 방법 */

// input 요소들이 하나라도 작성되지 않은 경우 제출 못하게 막기

// submit 이벤트 발생 시
// input 요소들이 하나라도 작성되지 않은 경우 제출 못하게 막기
document.inputForm.addEventListener("submit", e => {

    // #form의 자식 input 요소만 얻어오기(배열)
    const inputList = document.querySelectorAll("#form > input");

    // 작성성 안된 input
    for(let i=0; i<inputList.length; i++){
        if(inputList[i].value.trim().length == 0){
            e.preventDefault();
            alert("작성되지 않은 input 존재함");

            inputList[i].focus(); // 초점 맞추기

            return;
        }
    }
});

/* 방법2) onsubmit="return false" 이용한 방법 */
const onsubmitTest = () => {
    const radio = document.querySelector("[name='submitRadio']:checked");
    
    // 체크된 라디오 버튼 없으면
    if(radio == null) return false;

    // 제출 O 선택
    if(radio.value == "O") return true;

    // 제출 X 선택
    return false;
}

/* 방법 3) 일반 버튼 클릭 시 form 태그 제출/막기 */

document.querySelector("#btn3").addEventListener("click", () => {
    const input = document.querySelector("#inputTest");
    if(input.value.trim().length > 0){ // 값을 작성한 경우

        // form 태그 제출시키기
        document.inputForm3.submit();

    }
})