// const table = document.querySelector("#table");
// const width = document.getElementById("width");
// const height = document.getElementById("height");
// const fontSize = document.getElementById("fontSize");
// const box = document.querySelector("#box")
// const inputText = document.querySelector("#inputText");
// const boldRadio = document.getElementById("bold");
// const fontWeightRadios = document.querySelectorAll('input[type=radio][name="fontWeight"]');
// const apply = document.querySelector("#apply");

// apply.addEventListener("click", () => {
//     box.style.backgroundColor = bgc.value;
//     box.style.width = Number(width.value) + 'px';
//     box.style.height = Number(height.value) + 'px';
//     box.style.fontSize = Number(fontSize.value) + 'px';
//     box.style.color = color.value;
//     box.innerText = inputText.value;
    
//     fontWeightRadios.forEach(radio => {
//         if(radio.checked && radio === boldRadio) {
//             box.style.fontWeight = 'bold';
//         } else {
//             box.style.fontWeight = 'normal';
//         }
//     });
// });

/* ------------------------------------------------------------------------------------ */

const applyBtn = document.querySelector("#apply-btn");


/* 적용하기 버튼 클릭 시 */
applyBtn.addEventListener("click", ()=>{
  
  /* 특정 시점에 요소/값을 얻어와야 되는데
    전역, 지역 변수 어떤걸로 선언할지 모르겠으면
    일단 다 지역 변수로 선언해라!!
  */

    const box     = document.querySelector("#box");
    const content = document.querySelector("#content");
    const boxWidth = document.querySelector("#box-width");
    const boxHeight = document.querySelector("#box-height");
    const fs = document.querySelector("#fs");
    const fontColor = document.querySelector("#box-font-color");
    const bgColor = document.querySelector("#box-bg-color");

    // 체크된 요소만 가져옴. 없으면 null
    const fw = document.querySelector("[name='fw']:checked");
    const row = document.querySelector("[name='align-row']:checked");
    const col = document.querySelector("[name='align-col']:checked");

    // ------------------------------------------------------

    // 너비에 작성된 값 #box의 너비로 대입
    box.style.width = boxWidth.value + "px";

    // 높이 작성 값 대입
    box.style.height = boxHeight.value + "px";

    // 글자크기
    box.style.fontSize = fs.value + "px";

    // 글자색
    box.style.color = fontColor.value;

    // 배경색
    box.style.backgroundColor = bgColor.value;

    // 굵기 radio 버튼 체크 되어 있을 경우
    if(fw != null){
        // 굵기에 작성된 값 #box의 굵기로 대입
        box.style.fontWeight = fw.value;
    }

    // 가로정렬 radio 버튼 쳌 되어 있을 경우
    if(row != null){
        box.style.justifyContent = row.value;
    }

    // 세로정렬 radio 버튼 쳌 되어 있을 경우
    if(col != null){
        box.style.alignItems = col.value;
    }

    // 출력 문자열에 작성된 값 #box에 내용으로 대입
    box.textContent = content.value;

});

