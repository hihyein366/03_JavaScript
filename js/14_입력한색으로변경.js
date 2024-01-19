// /* 입력한 색상으로 배경색 변경하기 */
// const box = document.querySelectorAll(".box");
// const input = document.querySelectorAll(".input");
// const btn = document.querySelectorAll(".btn");

// function changeBtn() {
    
//     btn.addEventListener("click", function(){
//         box.style.backgroundColor = input.value;
//     });
    
//     /* #input3에서 엔터 입력 시(key 관련 e) 배경색 변경 */
//     input.addEventListener("keyup", function(e){
//         if(e.key == "Enter") {
//             box.style.backgroundColor = input.value;
//         }
//     });
    
//     /* #box3를 클릭하면 현재 배경색을 alert로 출력 */
//     box.addEventListener("click", function(e){
//         alert(`배경색 : ${e.target.style.backgroundColor}`);
//     });
    
//     box.style.backgroundColor = input.value;

// };

// -----------------------------------------------------------------------------

// 요소를 한 번에 여러개 얻어오면 배열 형태로 저장된다.
// -> 얻어온 요소를 사용하려면 배열의 index별 요소를 하나씩 꺼내서 사용해야 함

// ex) boxList.style.color = "red"; // 배열의 글자색을 red로 변경한다는 뜻이 됨.
//      boxList[0].style.color = "blue"; // 인덱스 요소 지정해야 함

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function(){
    // boxList[0].style.backgroundColor = inputList[0].value;
    // boxList[1].style.backgroundColor = inputList[1].value;
    // boxList[2].style.backgroundColor = inputList[2].value;
    // boxList[3].style.backgroundColor = inputList[3].value;
    // boxList[4].style.backgroundColor = inputList[4].value;

    for(let i=0; i<boxList.length; i++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});