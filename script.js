//
//
//   <------------------------------   Select elements in the calculator   ------------------------------>
//
//

// buttons;
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnMinus = document.getElementById("btn-");
let btnPlus = document.getElementById("btn+");
let btnMultiply = document.getElementById("btn*");
let btnDivide = document.getElementById("btn/");
let btnEqual = document.getElementById("btn=");
let btnClear = document.getElementById("btnClear");
// divs -> used as display fields;
let input = document.getElementById("input"); // input field;
let output = document.getElementById("output"); // output field;

//
//
//   <------------------------------   I added all buttons in one array exept equal and clear buttons, then i add all the buttons keys in one array   ------------------------------>
//
//

const btnArray = [
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn0,
  btnMinus,
  btnDivide,
  btnMultiply,
  btnPlus,
];
const keyArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "+",
  "/",
  "*",
];

//
//
//   <------------------------------   Functions that add numbers/simbols to the calculator   ------------------------------>
//
//

// check last element in order to not allow to repet simbols twice;
function checkIfSimbolRepets(simbol) {
  let result = false;
  if (simbol === "-" || simbol === "+" || simbol === "/" || simbol === "*") {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// button handler;
function addToCalculator(btn) {
  btn.addEventListener("click", function () {
    // This condition does not allow the mathematical symbols to be added twice in a row;
    let simbol = input.innerText.slice(-1); // last simbol added;
    let check = checkIfSimbolRepets(simbol);
    if (btn.innerText == input.innerText.slice(-1) && check == true) {
      input.innerText = input.innerText;
    } else {
      input.innerText = input.innerText + btn.innerText;
    }
  });
}

// add button handler to all buttons existing in the array;
function addAllButtonsToCalculator(array) {
  for (let i = 0; i < array.length; i++) {
    addToCalculator(array[i]);
  }
}
addAllButtonsToCalculator(btnArray); // calling function on all buttons that are present in array;

//
//
//   <------------------------------   Functions that calculate the input   ------------------------------>
//
//

function calculateOutput(btn) {
  btn.addEventListener("click", function () {
    output.innerText = "";
    let result = eval(input.innerText);
    output.innerText = `${output.innerText}  ${result}`;
    input.innerText = "";
  });
}
calculateOutput(btnEqual); // calling function that calculate the input field on equal button;

//
//
//   <------------------------------   Functions that clear the output   ------------------------------>
//
//

function clearOutput(btn) {
  btn.addEventListener("click", function () {
    output.innerText = "";
    input.innerText = "";
  });
}
clearOutput(btnClear); // calling function that clear the output field on clear button;

//
//
//   <------------------------------  Add via keyboard handler   ------------------------------>
//
//

document.addEventListener("keydown", function (e) {
  for (let i = 0; i < keyArray.length; i++) {
    if (e.key === keyArray[i]) {
      input.innerText = `${input.innerText}${keyArray[i]}`;
    }
  }
}); // add numbers and math simbols to input field;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    output.innerText = "";
    let result = eval(input.innerText);
    output.innerText = `${output.innerText}  ${result}`;
    input.innerText = "";
  }
}); // calling function that calculate the input field on enter key;
