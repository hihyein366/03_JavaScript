/* JS 객체
  - { K:V, K:V, K:V } 형태
  - (중요) Key는 무조건 문자열(string)
    -> "Key", 'key', key ("", '' 작성 안해도 string으로 인식)
  - key는 오름차순으로 정렬. (순서 못바꿈)
*/

/* {} 객체 생성 + 다루기 */

const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    // 1. 객체 생성
    // const product = {}; // 비어있는 객체 생성

    const product = {
        "productName" : "갤럭시북3",
        'brand' : "samsung",
        price : 200000
    }
    console.log(product);


    // 2. 객체 내 key 값을 이용해 원하는 value 얻어오기

    // 1) 객체명.key
    console.log(product.productName, product.brand, product.price);

    // 2) 객체명["key"]
    console.log(product["productName"], product["brand"], product['price']);

    
    // 3. 객체에 K:V 추가

    // 원하는 key를 생각해두고
    // 객체명.key = value;   or   객체명["key"] = value;

    product.color = ["black", "silver", "red"];

    console.log(product);
    console.log(product.color[2]);

    product["storage"] = ["256G", "512G", "1TB"];
    console.log(product);

    // 4. 특정 key의 value 수정하기
    // -> 덮어쓰기
    product.price = 100000;
    console.log(product);

    // 5. 원하는 K:V 삭제하기(delete 연산자 사용)
    // - delete 객체명.key

    delete product.productName;
    console.log("delete 후 product : ", product);
});

// ----------------------------------------------------

/* method */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    const smartPhone = {};

    smartPhone.modelName = "아이폰15 프로";
    smartPhone.price = 1400000;

    // 메서드(객체의기능(함수)) 추가
    smartPhone.information = function() {

        const brand = "apple";
        /* this 참조 변수
           - 작성되는 위치에 따라서 의미가 다름
           
           ex) <button onclick = testFn(this)>
                -> 이때 this == 클릭된 요소(버튼)

           ex) 객체명.메서드명 = function(){
                 this.변수명 = "값";
                 -> 이때 this == 메서드가 작성된 객체
               }
           */


        // this == smartPhone
        console.log("모델명 : ", smartPhone.modelName);
        console.log("가격 : ", this.price);
        console.log("브랜드 : ", brand); // 지역 변수 brand
        console.log("브랜드 : ", this.brand); // smartPhone.brand


    }

    // 메서드 수행
    smartPhone.information();
    
    // ------------------------------------------------------------------
    
    // 매개 변수가 존재하는 메서드
    smartPhone.call = function(phoneNumber){
        console.log(`${phoneNumber}로 전화를 거는중...`);
    }
    
    // 매개 변수가 존재하는 메서드 호출하기
    smartPhone.call("010-8328-3820");

    // (참고) 메서드 생성 시 화살표 함수 + this 사용
    // -> 화살표 함수 내에서 this는 Window 객체를 나타냄
    // * 객체 메서드 작성 시 function(){} 구문 사용을 권장
    smartPhone.test1 = function(){
        console.log(this);  // smartPhone 객체
    }

    smartPhone.test1();

    // 화살표 함수 사용
    smartPhone.test2 = () => {
        console.log(this);  // Window 객체
    }

    smartPhone.test2();
});

// ------------------------------------------------------

/* 생성자 함수 */

// 1. 생성자 함수 선언 + 정의
// (중요) 생성자 함수의 이름은 무조건 "대문자" 로 시작!!

/* 학생 객체 생성자 함수 */
function Student (name, grade, ban, number, score){

    // 속성
    // (전달 받은 값(parameter)을 현재 객체(this)에 속성으로 추가)
    this.name = name;
    this.grade = grade;
    this.ban = ban;
    this.number = number;
    this.score = score;

    // 기능(메서드)
    this.introduce = function(){
        console.log(`${this.grade}학년 ${this.ban}반 ${this.number}번 `
                    + `${this.name} ${score}점 입니다.`)
    }
}

// 생성자 함수 호출
const btn = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    // const student1 = {
    //     name : "김준면",
    //     grade : 3,
    //     ban : 4,
    //     number : 7,
    //     score : 96
    // };

    const student1 = new Student("김준면", 3, 4, 7, 96);
    console.log(student1);

    const student2 = new Student("변백현", 2, 2, 13, 84);
    console.log(student2);

    /* 객체 배열 (배열에 저장된 모든 요소가 객체) */
    const studentList = [];

    // 배열명.push(값) : 값을 배열의 마지막 요소로 추가
    studentList.push(student1);
    studentList.push(student2);

    // 생성자 함수 Student를 이용해서 객체 생성 후
    // 바로 studentList 에 추가
    studentList.push(new Student("도경수", 2, 2, 9, 92));
    studentList.push(new Student("김민석", 3, 4, 6, 85));

    console.log(studentList);

    // 모든 학생의 introduce() 메서드 호출
    for(let i=0; i<studentList.length; i++){
        studentList[i].introduce();
    }

});

/* JSON */
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () => {
    // JS 객체 생성
    const obj = {"id":"test01", "pw":"1234", "number" : 9999};

    // JS 객체 -> JSON 문자열로 변환
    const str = JSON.stringify(obj);

    console.log("obj : ", obj);
    console.log("str : ", str);

    // JSON 문자열 -> JS 객체 변환
    const str2 = '{"memberId":"user01","memberPw":"pass01","age":20}';
    const obj2 = JSON.parse(str2);

    console.log("str2 : ", str2);
    console.log("obj2 : ", obj2);

    // 서버 데이터 비동기 요청
    fetch('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10')
    .then(response => response.json())
    .then(result => console.log(result.response.body.items[0].informGrade));

});