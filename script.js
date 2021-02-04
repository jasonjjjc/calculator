let arr = [
  0,
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "0",
  ".",
  "="
];
let currentNumber = 0;
let tempSum = 0;
let buffer = [];

let container = document.querySelector("#container");

function showEverything() {
  arr.forEach(item => {
    let div = document.createElement("div");
    div.setAttribute("id", `${item}`);
    if (item !== 0) {
      div.classList.add("button");
      div.innerHTML = `<p class='button-text'>${item}</p>`;
    }
    if (item === 0) {
      div.classList.add("display");
      div.innerHTML = `<p class='display-text'>${item}</p>`;
    }
    if (item === "0") {
      div.classList.add("wide");
    }
    container.appendChild(div);
  });
}

showEverything();

//create functions to call for each alternative button

function clearAll() {
  populateDisplay("AC");
  currentNumber = 0;
  tempSum = 0;
  lastOperator = "";
  buffer = [];
}

function posNeg() {
  populateDisplay("+/-");
}

function percent() {
  populateDisplay("%");
}

function divide() {
  buffer.push(currentNumber);
  buffer.push("/");
  currentNumber = "";
  console.log(buffer);
}

function multiply() {
  lastOperator = "*";
  console.log("multiply");
}

function minus() {
  lastOperator = "-";
  console.log("minus");
}

function plus() {
  lastOperator = "+";
  console.log("plus");
}

function equals() {
  console.log("equals");
}

// show number in the displayText

function populateDisplay(number) {
  let displayText = document.querySelector(".display-text");
  if (displayText.innerText.includes(".") && number == ".") {
    return;
  } else if (number == "AC") {
    displayText.innerText = "0";
  } else if (number == "+/-") {
    if (displayText.innerText.split("")[0] !== "-") {
      displayText.innerText = "-" + displayText.innerText;
    }
  } else if (number == "%" && displayText.innerText.length < 2) {
    displayText.innerText = displayText.innerText + "%";
  } else if (displayText.innerText === "0" && number != ".") {
    displayText.innerText = number;
  } else {
    displayText.innerText += number;
  }
  return displayText.innerText;
}

// when a number is pressed update currentNumber
function pressNumber(e) {
  currentNumber = populateDisplay(e.target.innerText);
  console.log(currentNumber);
}

//decide what to do when someone presses other Buttons

function pressOther(e) {
  if (e.target.innerText.includes("AC")) {
    clearAll();
  }
  if (e.target.innerText === "+/-") {
    posNeg();
  }
  if (e.target.innerText === "%") {
    percent();
  }
  if (e.target.innerText === "/") {
    divide();
  }
  if (e.target.innerText === "*") {
    multiply();
  }
  if (e.target.innerText === "-") {
    minus();
  }
  if (e.target.innerText === "+") {
    plus();
  }
  if (e.target.innerText === "=") {
    equals();
  }
}

// attach listeners to all Buttons

function attachListenersToButtons() {
  let buttons = [...document.querySelectorAll(".button-text")];
  let numButtons = buttons.filter(item => item.innerText.match(/[\d.]/));
  let otherButtons = buttons.filter(item => item.innerText.match(/[^\d.]/));
  numButtons.forEach(button => button.addEventListener("click", pressNumber));
  otherButtons.forEach(button => button.addEventListener("click", pressOther));
}

attachListenersToButtons();

//
