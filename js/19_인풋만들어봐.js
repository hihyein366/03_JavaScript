const input = document.querySelectorAll(".input");
const btn = document.querySelectorAll("#btn1");
const sum = document.querySelectorAll("#sum");

input = Number(input.value);

btn1.addEventListener ("click", () => {
    const input = document.createElement("input");
    input.type = "Number";
});

sum.addEventListener("click", () => {
    sum += input.value
    alert(`총 합 : ${"btn2"}`)
});

