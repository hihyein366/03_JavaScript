const createBtn = document.querySelector("#create");
const lottoBoard = document.querySelector("#container")


// createBtn 클릭 시 div.number 나타내기
createBtn.addEventListener("click", () => {
  lottoBoard.innerHTML = "";
  for(let i=1; i<46; i++){
    const number = document.createElement("div");
    number.classList.add("number"); // class 추가
    number.textContent = i;

    // 만들어진 div.number에 클릭 시 동작 추가
    number.addEventListener("click", e => {

      // 클릭 전에 화면에 선택된 요소가 5개 이하일 경우
      const count = document.querySelectorAll(".active").length;

      if(count <= 5 || e.target.classList.contains("active")){
        /* 요소.classList.toggle(클래스명) : 요소에 클래스명 있으면 제거, 없으면 추가 */
        e.target.classList.toggle("active");
      } else {
        alert("6개까지 선택 가능");
      }

    });
    lottoBoard.append(number);
  }
});


      // active 클래스 없으면 -> 추가
      // active 클래스 있으면 -> 제거

      /* 요소.classList.contains(클래스명) : 
          요소에 (클래스명)이 존재하면 true, 아님 false
      */
      // if(e.target.classList.contains("active")){
      //   e.target.classList.remove("active");
      // } else{
      //   e.target.classList.add("active");
      // }