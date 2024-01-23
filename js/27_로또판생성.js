const create = document.getElementById("#create");
const btn = document.querySelector("button");
const btnList = document.querySelectorAll("button");


btn.addEventListener("click", () => {
    for(let i=0; i<btnList.length; i++){
        btnList[i].style.backgroundColor = "orange";
    }
    function toggleColor(btn) {
    // 현재 배경색을 가져옵니다.
    let back = button.style.backgroundColor;

    // 색상이 흰색이면 오렌지색으로 변경합니다.
    if (button === 'white') {
      btn.style.backgroundColor = 'orange';
    } else {
      // 색상이 흰색이 아니면 다시 흰색으로 변경합니다.
      btn.style.backgroundColor = 'white';
    }
  }
});

