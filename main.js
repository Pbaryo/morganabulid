
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}


var Morgana = document.querySelector('img');
Morgana.onclick = function() {
var mySrc = Morgana.getAttribute('src');
if (mySrc === 'images/morganastrona1.jpg') {
Morgana.setAttribute ('src', 'images/morganastrona2.jpg');
} else {
Morgana.setAttribute ('src', 'images/morganastrona1.jpg');
}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my guide, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my guide, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}