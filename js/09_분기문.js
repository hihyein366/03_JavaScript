/* break 확인 */
function check1() {
    for(let i=0; i<=10; i++){
        console.log("i : ", i);

        if(i==5) break; // 반복문 멈춤
        
    }
}

/* 무한 반복하는 while문 멈추기 */
function check2() {

    let i=1;
    while(true) { // 괄호에 조건식 넣는다.(조건식: true/false로 나뉘는 식)
        console.log("i : ", i++);

        if(i > 10) break;
    }
}

/* continue 확인하기 */
function check3() {
    // 1~20 출력하는데 3의 배수는 건너뛰기
    for(let i=1; i<=20; i++){
        if(i % 3 == 0) continue; // continue 해당되는 정수는 밑 콘솔 실행 안되고 코드가 위로 넘어가 i++ 돼서 1증가함.
        console.log("i : ", i);
    }
}

/* 1~30까지 홀수 또는 10의 배수 빼고 1씩 증가하며 출력.  */
function check4() {
    for(let i=1; i<=30; i++){
        if(i % 2 == 1 || i % 10 == 0) continue;
        console.log("i : ", i);
    }
}

/* 0~9까지 5줄 출력. 각 줄에서 4의 배수 건너뛰고 3번째 줄 출력 후 멈추기 */
function check5() {
    for (let row=1; row<=5; row++){ // 5줄 출력

        let str = "";
        for(let col=0; col<=9; col++){

            if(col % 4 == 0) continue;
            str += col;
        }
        console.log(str);

        if(row == 3) break;
    }
}

// ------------------------------------------------------

/* UP / DOWN GAME */
function startGame() {
    // 1~100 사이 난수
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // 숫자를 입력한 횟수 (정답 시도 횟수)
    let count = 0;
    
    let str = "1~100 사이 숫자를 입력해주세요";

    while(true) {

        // prompt 이용해서 값 입력받기
        // 확인 : 입력한 값, 취소 : null
        let input = prompt(str);

        // 취소 누른 경우 "게임 포기" 뜨고 반복 종료
        if (input == null) {
            alert("게임 포기..");
            break;
        }

        // 확인 누른 경우 숫자로 변환
        // NaN(Not a Number)
        input = Number(input);
        // input에는 입력한 숫자 || NaN이 대입됨

        // NaN인 경우 다시 입력 받게 하기
        // -> isNaN(변수/값) : 변수/값이 NaN이면 true, 아님 false 반환
        if(isNaN(input)){
            alert("숫자만 입력해 줘");
            continue; // 다시 위로 올라가서 prompt 실행됨
        }

        // --------------------------------------------------------------------
        /* 정상 입력(숫자 입력)한 경우 */

        // 정답 시도 횟수 1증가
        count++;

        // 입력한 값이 난수와 같다면
        // "정답! (입력한 값)" / count : 정답횟수
        // 알림창 출력 & 반복 종료
        if(input == randomNumber) {
            alert(`정답🎉 ${input} / 시도 횟수 : ${count}`);
            break;
        }

        // 입력한 값이 난수보다 큰 경우
        // "[DOWN] / count : 정답시도횟수"
        // 문자열 str에 대입 후 다음 반복으로 이동
        if(input > randomNumber) {
            str = `[DOWN] / 시도 횟수 : ${count}`; // alert 아닌 str로 continue 없이 해야 바로바로 게임 작성 가능
        }

        // 입력한 값이 난수보다 작은 경우
        // "[UP] / count : 정답시도횟수"
        // 문자열 str에 대입 후 다음 반복으로 이동
        if(input < randomNumber) {
            str = `[UP] / 시도 횟수 : ${count}`;
        }
    }
}