const board = document.querySelector(.board);


const newE1 = (tag, attr, cls) => {
    const e1 = document.createElement(tag);

    for(let key in attr) {
        e1.setAttribute(key, attr[key]);
    }

    for(let className of cls) {
        e1.classList.add(className);
    }
    return e1;
}