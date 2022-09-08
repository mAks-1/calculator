let value, operate, length;

document.querySelector("#zero").addEventListener("click", zero);
function zero() {
    document.querySelector(".screen").textContent += '0';
}

document.querySelector("#one").addEventListener("click", one);
function one() {
    document.querySelector(".screen").innerHTML += '1';
}

document.querySelector("#two").addEventListener("click", two);
function two() {
    document.querySelector(".screen").innerHTML += '2';
}

document.querySelector("#three").addEventListener("click", three);
function three() {
    document.querySelector(".screen").innerHTML += '3';
}

document.querySelector("#four").addEventListener("click", four);
function four() {
    document.querySelector(".screen").innerHTML += '4';
}

document.querySelector("#five").addEventListener("click", five);
function five() {
    document.querySelector(".screen").innerHTML += '5';
}

document.querySelector("#six").addEventListener("click", six);
function six() {
    document.querySelector(".screen").innerHTML += '6';
}

document.querySelector("#seven").addEventListener("click", seven);
function seven() {
    document.querySelector(".screen").innerHTML += '7';
}

document.querySelector("#eight").addEventListener("click", eight);
function eight() {
    document.querySelector(".screen").innerHTML += '8';
}

document.querySelector("#nine").addEventListener("click", nine);
function nine() {
    document.querySelector(".screen").innerHTML += '9';
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