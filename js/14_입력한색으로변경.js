/* 입력한 색상으로 배경색 변경하기 */
const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".input");
const btn = document.querySelectorAll(".btn");

// /* #btn3 '클릭'했을 때 */
// btn.addEventListener("click", function(){
//     box.style.backgroundColor = input.value;
// });

/* #input3에서 엔터 입력 시(key 관련 e) 배경색 변경 */
input.addEventListener("keyup", function(e){
    if(e.key == "Enter") {
        box.style.backgroundColor = input.value;
    }
});

/* #box3를 클릭하면 현재 배경색을 alert로 출력 */
box.addEventListener("click", function(e){
    alert(`배경색 : ${e.target.style.backgroundColor}`);
});

function changeBtn() {
    box.style.backgroundColor = input.value;

};