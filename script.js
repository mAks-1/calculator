let value, operate, length;
let screen = document.querySelector(".screen");
let signs = document.querySelectorAll(".sign");
let changeTheme = document.querySelector(".changeTheme");
let btns = document.querySelectorAll(".btn");
let changeBg = document.querySelectorAll(".addBg");
let counter = 0;

let numbers = document.querySelectorAll(".hoverNumber");
for (let i = 0; i < numbers.length - 1; i++) {
    let id = numbers[i].id;
    numbers[i].addEventListener("click", id => {
        screen.textContent += [i] + "";
    });
}
;

let twoZero = document.querySelector("#twoZero");
twoZero.addEventListener("click", () => {
    screen.textContent += "00";
});

document.addEventListener("keydown", (e) => {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" ||
        e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0") {
        screen.textContent += e.key;
    }
});

for (let i = 0; i < signs.length; i++) {
    let sign = signs[i].textContent;
    let id2 = signs[i].id;

    document.addEventListener("keydown", (e) => {
        if (e.key == "=" && e.shiftKey) {
            value = screen.textContent;
            operate = "+";
            screen.textContent = "";
        } else if (e.key == sign) {
            value = screen.textContent;
            operate = signs[i].innerHTML + "";
            screen.textContent = "";
        } else if (e.key == ".") {
            value = screen.textContent;
            operate = "/";
            screen.textContent = "";
        } else if (e.key == "8" && e.shiftKey) {
            value = screen.textContent;
            operate = "*";
            screen.textContent = "";
        } else {
            return;
        }
    });
}
;

for (let i = 0; i < signs.length - 1; i++) {
    signs[i].addEventListener("click", () => {
        value = screen.textContent;
        console.log(signs[i].textContent)
        operate = signs[i].textContent;
        screen.textContent = "";
    })
}
;

document.querySelector("#squareRoot").addEventListener("click", squareRoot);

function squareRoot() {
    value = screen.textContent;
    operate = '√';
    value = Math.pow(Number(value), .5);
    screen.textContent = value;
};

document.querySelector("#remove").addEventListener("click", remove);

function remove() {
    screen.textContent = "";
};

document.addEventListener("keydown", reset);

function reset(e) {
    if (e.key == 'Backspace') {
        length = screen.textContent;
        screen.textContent = length.substring(0, length.length - 1)
    }
};

document.querySelector("#reset").addEventListener("click", KeyboardReset);

function KeyboardReset(e) {
    length = screen.textContent;
    screen.textContent = length.substring(0, length.length - 1)
};

document.querySelector("#equals").addEventListener("click", equals);

function equals() {
    if (operate == "+") {
        screen.textContent = Number(value) + Number(document.querySelector(".screen").textContent);
    } else if (operate == "-") {
        screen.textContent = Number(value) - Number(document.querySelector(".screen").textContent);
    } else if (operate == "*") {
        screen.textContent = Number(value) * Number(document.querySelector(".screen").textContent);
    } else if (operate == "/") {
        if (document.querySelector(".screen").textContent === "0") {
            screen.textContent = "incorrect value";
        } else {
            screen.textContent = (Number(value) / Number(document.querySelector(".screen").textContent));
        }
    }
};

changeTheme.addEventListener("click", changer1);

function changer1() {
    if (counter == 0) {
        changeTheme.innerHTML = "<img src=\"./img/switch-2.png\" alt=\"\">";
        for (const elem of btns) {
            elem.style.color = "black";
        }
        for (const elem of changeBg) {
            elem.style.backgroundColor = "lightgrey";
        }
        document.querySelector(".calculator").style.backgroundColor = "white";
        document.querySelector(".calculator").style.boxShadow = "-5px 4px 17px -3px rgba(0,0,0,0.6)";
        screen.style.color = "black";
        counter--;
    } else {
        changeTheme.innerHTML = "<img src=\"./img/switch.png\" alt=\"\">";
        for (const el of btns) {
            el.style.color = "white";
        }
        for (const elem of changeBg) {
            elem.style.backgroundColor = "grey";
        }
        document.querySelector(".calculator").style.backgroundColor = "#221c29";
        screen.style.color = "aliceblue";
        document.querySelector(".calculator").style.boxShadow = "";
        counter++;
    }
}