let value, operate, length;
let screen = document.querySelector(".screen");

let numbers = document.querySelectorAll(".hoverNumber");
for(let i = 0; i < numbers.length; i++){
    let id = numbers[i].id;
        numbers[i].addEventListener("click", id =>{
            screen.textContent += [i] + "";
        });
};

document.addEventListener("keydown", (e) =>{
    if(e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" ||
        e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0"){
        screen.textContent += e.key;
    }
});

let signs = document.querySelectorAll(".sign");
for(let i = 0; i < signs.length; i++){
    let sign = signs[i].textContent;
    let id2 = signs[i].id;

    document.addEventListener("keydown", (e) =>{
        if(e.key == sign){
            value = screen.textContent;
            operate = signs[i].innerHTML + "";
            screen.textContent = "";
        }else{
            return;
        }
    });
};

document.querySelector("#plus").addEventListener("click", plus);
function plus() {
    value = screen.textContent;
    operate = '+';
    screen.textContent = "";
}

document.querySelector("#minus").addEventListener("click", minus);
function minus() {
    value = screen.textContent;
    operate = '-';
    screen.textContent = "";
}

document.querySelector("#multiplication").addEventListener("click", multiplication);
function multiplication() {
    value = screen.textContent;
    operate = '*';
    screen.textContent = "";
}

document.querySelector("#division").addEventListener("click", division);
function division() {
    value = screen.textContent;
    operate = '/';
    screen.textContent = "";
}

document.querySelector("#squareRoot").addEventListener("click", squareRoot);
function squareRoot() {
    value = screen.textContent;
    operate = '√';
    value =  Math.pow(Number(value), .5);
    screen.textContent = value.toFixed(8);
}

document.querySelector("#remove").addEventListener("click", remove);
function remove() {
    screen.textContent = "";
}

document.querySelector("#reset").addEventListener("click", reset);
function reset() {
    length = screen.textContent;
    screen.textContent = length.substring(0, length.length - 1)
}

document.querySelector("#equals").addEventListener("click", equals);
document.querySelector("#equals").addEventListener("keydown", equals);
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
            document.querySelector(".screen").textContent = (Number(value) / Number(document.querySelector(".screen").textContent));
        }
    }
}