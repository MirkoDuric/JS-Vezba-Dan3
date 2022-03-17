var num1 = parseInt(prompt("Unesite broj 1"));
var num2 = parseInt(prompt("Unesite broj 2"));
var action = prompt("Izaberite zeljenu radnju \n + - * / ");
// if (action === "+") {
//     add();
// } else if (action === "-") {
//     sub();
// } else if (action === "*"){
//     mult();
// } else if (action === "/") {
//     dev();
// } else {
//     console.log("Pogresan unos");
// }

switch(action){
    case "+" :
        add();
        break;
    case "-" :
        sub();
        break;
    case "*" :
        mult();
        break;
    case "/" :
        dev();
        break;
    default :
        console.log("Pogresan unos");
}

function add(){
    console.log(num1 + num2);
}
function sub() {
    console.log(num1 - num2);
}
function mult() {
    console.log(num1 * num2);
}
function dev(){
    console.log(num1 / num2);
}