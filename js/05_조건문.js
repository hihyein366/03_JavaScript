/* if - 양수인지 검사 */
const input1 = document.getElementById("input1");

function check1() {
    const value = Number(input1.value);

    if(value > 0){
        alert("양수");
    }

    if(value <= 0){
        alert("양수 아니자나")
    }
}

/* if - else -> 홀짝 판별하기 */
function check2(){
    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= Math.random() < 1

    // 0 ~ 100 사이 난수
    const randomNumber = Math.floor(Math.random() * 101);

    if(randomNumber % 2 == 1){
        alert(`${randomNumber} 는 홀수 입니다`);
    }
    else {
        alert(`${randomNumber}는 짝수네 딱보니까`)
    }
}