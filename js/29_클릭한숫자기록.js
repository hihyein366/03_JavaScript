const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector("#result");
const resetBtn = document.getElementById("resetBtn");


for(let item of numbers){
    item.addEventListener("click", e => {

        if(result.textContent.length == 10) {
            alert("10까지 가능합니다");
            return;
        }
        result.textContent += e.target.textContent;
    });
}


resetBtn.addEventListener("click", () => {
    result.textContent = "";
});

/* 나중에 선생님거랑 비교해 보세요 */