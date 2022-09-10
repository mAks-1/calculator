let value, operate, length;
let screen = document.querySelector(".screen");
let signs = document.querySelectorAll(".sign");

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

for(let i = 0; i < signs.length; i++){
    let sign = signs[i].textContent;
    let id2 = signs[i].id;

    document.addEventListener("keydown", (e) =>{
        if(e.key == "=" && e.shiftKey){
            value = screen.textContent;
            operate = "+";
            screen.textContent = "";
        }else if(e.key == sign){
            value = screen.textContent;
            operate = signs[i].innerHTML + "";
            screen.textContent = "";
        }else if(e.key == "."){
            value = screen.textContent;
            operate = "/";
            screen.textContent = "";
        }else if(e.key == "8" && e.shiftKey){
            value = screen.textContent;
            operate = "*";
            screen.textContent = "";
        }else{
            return;
        }
    });
};

for(let i = 0; i < signs.length - 1; i++){
    signs[i].addEventListener("click", () =>{
        value = screen.textContent;
        console.log(signs[i].textContent)
        operate = signs[i].textContent;
        screen.textContent = "";
    })
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

document.addEventListener("keydown", reset);
document.querySelector("#reset").addEventListener("click", reset);
function reset(e) {
    if(e.key == 'Backspace' || true){
        length = screen.textContent;
        screen.textContent = length.substring(0, length.length - 1)
    }
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
                document.querySelector(".screen").textContent = (Number(value) / Number(document.querySelector(".screen").textContent));
            }
        }
}