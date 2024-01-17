function createTable() {
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const tbody = document.getElementById("tbody")
    const theadRow = document.getElementById("thead-row");
    
    theadRow.innerHTML = ""; // for문 전 작성. 이전 내용 삭제
    for(let dan = start; dan <= end; dan++) {
        theadRow.innerHTML += `<th>${dan}단</th>`
    }

    //----------------------
    // 구구단 내용 만들기

    // 이전 내용 삭제
    tbody.innerHTML = "";

    // 곱해지는 수(또는 n번째 줄)
    for(let num=1; num <=9; num++){
        let str = "<tr>";
        for(let dan=start; dan <= end; dan++){
            str += `<td>${dan} x ${num} = ${dan * num}</td>`;
        }

        str += "</tr>";

        tbody.innerHTML += str;
    }

}