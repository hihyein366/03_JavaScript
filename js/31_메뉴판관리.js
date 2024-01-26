const resNameInput = document.querySelector("#resNameInput");
const resName = document.querySelector("#resName");

const menuContainer = document.querySelector(".menu-container");
const updateBtn = document.querySelector("#updateBtn");
const addMenu = document.querySelector("#addMenu");
const delMenu = document.querySelector("#delMenu");
const exitBtn = document.querySelector("#exitBtn");

const normalContainer = document.querySelector(".normal-container");
const editContainer = document.querySelector(".edit-container");


/* 요소 생성 + 속성 추가 + 클래스 추가 함수 */
const newE1 = (tag, attr, cls) => {
    const e1 = document.createElement(tag); /* 요소 생성 */

    for(let key in attr) { /* 객체로 전달 받은 속성 요소에 추가 */
        e1.setAttribute(key, attr[key]);
    }

    for(let className of cls){ /* 배열로 전달 받은 클래스명을 요소에 추가 */
        e1.classList.add(className);
    }
    return e1; /* 생성된 요소 반환 */
}


/* 메뉴 내부 요소 생성 함수 */
const createMenuContent = () => {
    // create checkbox
    const check = newE1("input", {type:"checkbox"}, ["menu-check"]);

    // create menuNameInput
    const menuNameInput = newE1("input", {type:"text", placeholder:"메뉴명"}, ["menu-name-input"]);

    // create menuPriceInput
    const menuPriceInput = newE1("input", {type:"text", placeholder:"가격"}, ["menu-price-input"]);

    return {"check" : check, "menuNameInput" : menuNameInput, "menuPriceInput": menuPriceInput};
}


/* 식당명 변경. 클릭 시 작성된 식당명 사라지고 input태그 나타나게 */
resName.addEventListener("click", e => {
    e.target.classList.toggle("res-name-hidden");
    resNameInput.classList.toggle("res-name-hidden");

    let beforeName = e.target.textContent;
    if(beforeName == "식당명을 입력하세요") beforeName = "";

    resNameInput.value = beforeName;

    resNameInput.focus();
});


// blur 란. focus를 잃었을 때 수행될 이벤트를 말한다.
/* input이 focus 잃었을 때 (blur) */
resNameInput.addEventListener("blur", e => {
    resName.textContent = e.target.value;

    if(e.target.value.trim().length == 0) resName.textContent = "식당명을 입력하세요";

    e.target.classList.toggle("res-name-hidden");
    resName.classList.toggle("res-name-hidden");
});


/* 수정 버튼 클릭 시 */
updateBtn.addEventListener("click", e => {
    /* 메뉴판 수정 모드로 변경 */
    normalContainer.classList.toggle("b-hidden");
    editContainer.classList.toggle("b-hidden");

    const menuList = document.querySelectorAll(".menu");
    menuList.forEach(menu => {
        const menuName = menu.children[0].textContent;
        let menuPrice = menu.children[1].textContent;

        // 가격에서 '원' 글자 제거
        menuPrice = menuPrice.substring(0, menuPrice.length-1);

        // 메뉴 내부 요소 생성
        const menuContent = createMenuContent();

        menuContent.menuNameInput.value = menuName == "미입력" ? "" : menuName;
        menuContent.menuPriceInput.value = menuPrice == 0 ? "" : menuPrice;

        menu.innerHTML = "";

        for(let key in menuContent) {
            menu.append(menuContent[key]);
        }
    });
});

/* exitBtn 버튼 클릭 시 */
exitBtn.addEventListener("click", e => {
    /* 메뉴판 모드로 변경 */
    normalContainer.classList.toggle("b-hidden");
    editContainer.classList.toggle("b-hidden");

    const menuList = document.querySelectorAll(".menu");
    menuList.forEach(menu => {
        const menuNameInput = menu.children[1].value;
        let menuPriceInput = menu.children[2].value;

        const menuName = newE1("span", {}, ["menu-name"]);
        menuName.textContent = menuNameInput.trim().length == 0 ? "미입력" : menuNameInput;

        const menuPrice = newE1("span", {}, ["menu-price"]);
        menuPrice.textContent = (menuPriceInput.trim().length == 0 ? "0" : menuPriceInput) + "원";

        menu.innerHTML = "";
        menu.append(menuName, menuPrice);
    });
});


/* 추가 버튼 클릭 시 */
/* 메뉴에 입력 칸 추가 (최대 15개) */
addMenu.addEventListener("click", e => {
    if(document.querySelectorAll(".menu").length >= 15){
        alert("더 이상은 안돼....");
        return;
    }

    // li.menu 생성
    const li = newE1("li", {}, ["menu"]);

    const menuContent = createMenuContent();

    for(let key in menuContent){
        li.append(menuContent[key]);
    }
    menuContainer.append(li);
});

/* 삭제 버튼 클릭 시 */
/* 체크된 메뉴만 모두 삭제 */
delMenu.addEventListener("click", e => {
    const checkMenu = document.querySelectorAll(".menu-check:checked");
    checkMenu.forEach(item => {
        item.parentElement.remove();
    });
});