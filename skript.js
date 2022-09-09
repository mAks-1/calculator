let value, operate, length;

let numbers = document.querySelectorAll(".hoverNumber");
for(let i = 0; i < numbers.length; i++){
    let id = numbers[i].id;
        numbers[i].addEventListener("click", id =>{
            console.log(document.querySelector(".screen").textContent.length)
            document.querySelector(".screen").textContent += [i] + "";
        });
}

document.querySelector("#plus").addEventListener("click", plus);
function plus() {
    value = document.querySelector(".screen").textContent;
    operate = '+';
    document.querySelector(".screen").textContent = "";
}

document.querySelector("#minus").addEventListener("click", minus);
function minus() {
    value = document.querySelector(".screen").textContent;
    operate = '-';
    document.querySelector(".screen").textContent = "";
}

document.querySelector("#multiplication").addEventListener("click", multiplication);
function multiplication() {
    value = document.querySelector(".screen").textContent;
    operate = '*';
    document.querySelector(".screen").textContent = "";
}

document.querySelector("#division").addEventListener("click", division);
function division() {
    value = document.querySelector(".screen").textContent;
    operate = '/';
    document.querySelector(".screen").textContent = "";
}

document.querySelector("#squareRoot").addEventListener("click", squareRoot);
function squareRoot() {
    value = document.querySelector(".screen").textContent;
    operate = '√';
    value =  Math.pow(Number(value), .5);
    document.querySelector(".screen").textContent = value.toFixed(8);
}

document.querySelector("#remove").addEventListener("click", remove);
function remove() {
    document.querySelector(".screen").textContent = "";
}

document.querySelector("#reset").addEventListener("click", reset);
function reset() {
    length = document.querySelector(".screen").textContent;
    document.querySelector(".screen").textContent = length.substring(0, length.length - 1)
}

document.querySelector("#equals").addEventListener("click", equals);
function equals() {
    if (operate == "+") {
        document.querySelector(".screen").textContent = Number(value) + Number(document.querySelector(".screen").textContent);
    } else if (operate == "-") {
        document.querySelector(".screen").textContent = Number(value) - Number(document.querySelector(".screen").textContent);
    } else if (operate == "*") {
        document.querySelector(".screen").textContent = Number(value) * Number(document.querySelector(".screen").textContent);
    } else if (operate == "/") {
        if (document.querySelector(".screen").textContent === "0") {
            document.querySelector(".screen").textContent = "incorrect value";
        } else {
            document.querySelector(".screen").textContent = (Number(value) / Number(document.querySelector(".screen").textContent)).toFixed(8);
        }
    }
}