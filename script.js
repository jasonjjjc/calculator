let arr = [0,'AC','+/-','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+','0','.','='];
let currentNumber = 0;
let tempSum =0;

let container = document.querySelector('#container');

function showEverything () {
  arr.forEach(item => {
    let div = document.createElement('div');
    div.setAttribute('id', `${item}`);
    if (item !== 0) {
      div.classList.add('button');
      div.innerHTML = `<p class='button-text'>${item}</p>`;
    };
    if (item === 0) {
      div.classList.add('display');
      div.innerHTML = `<p class='display-text'>${item}</p>`;
    };
    if (item === '0') {div.classList.add('wide')};
    container.appendChild(div);
  });
};

showEverything();

function clearAll () {
  console.log('clear all');
};

function posNeg () {
  console.log('posNeg');
};


function percent () {
  console.log('percent');
}
function divide () {
  console.log('divide');
}
function multiply () {
  console.log('multiply');
}
function minus () {
  console.log('minus');
}
function plus () {
  console.log('plus');
}
function equals () {
  console.log('equals');
}



// show number in the displayText

function populateDisplay (number) {
  let displayText = document.querySelector('.display-text');
  if (displayText.innerText.includes('.') && number=='.') {
    return;
  } else {

    if (displayText.innerHTML === '0' && number != '.') {displayText.innerText = number} else {displayText.innerText += number};
    return displayText.innerText;
  };
};



// when a number is pressed update currentNumber
function pressNumber (e) {
  currentNumber = populateDisplay(e.target.innerText);
};


// decide what to do when someone presses other Buttons

function pressOther (e) {
  console.log(e.target.id)
  if (e.target.id.match('AC')) {clearAll()};
  if (e.target.id.match(/+\/-/)) {posNeg()};
  if (e.target.id.match('%')) {percent(); console.log('percent')};
  if (e.target.id.match('/')) {divide(); console.log('divide')};
  if (e.target.id.match('*')) {multiply(); console.log('multiply')};
  if (e.target.id.match('-')) {minus(); console.log('minus')};
  if (e.target.id.match('+')) {plus(); console.log('plus')};
  if (e.target.id.match('=')) {equals(); console.log('equals')};
};

// attach listeners to all Buttons

function attachListenersToButtons () {
  let buttons = [...document.querySelectorAll('.button')];
  let numButtons = buttons.filter(item => item.innerText.match(/\d/) || item.innerText.match(/./));
  let otherButtons = buttons.filter(item => item.innerText.match(/\D/));
  numButtons.forEach(button => button.addEventListener('click', pressNumber));
  otherButtons.forEach(button => button.addEventListener('click', pressOther));

};

attachListenersToButtons();


























//
