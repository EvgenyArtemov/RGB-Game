var colors = generateRandomColors(6);

var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var headerColor = document.querySelector('h1');
var resetButton = document.getElementById('resetButton');
var easyButton = document.getElementById('easyButton');
var hardButton = document.getElementById('hardButton');
var hiddenDiv = document.querySelectorAll('.hide');
var diff = 6;

colorDisplay.textContent = pickedColor;

easyButton.addEventListener('click', function(){
  diff = 3;
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  colors = generateRandomColors(diff);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "Let's try...";
  messageDisplay.classList.remove('green');
  for(var i = 0; i < diff; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  };
  for(var i = 0; i < diff; i++){
    hiddenDiv[i].style.display = 'none';
  }

})

hardButton.addEventListener('click', function(){
  diff = 6;
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  colors = generateRandomColors(diff);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "Let's try...";
  messageDisplay.classList.remove('green');
  for(var i = 0; i < diff; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  };
  for(var i = 0; i < diff; i++){
    hiddenDiv[i].style.display = 'block';
  }
})

resetButton.addEventListener('click', function(){
  //generate new colors
  colors = generateRandomColors(diff);
  //new pick colors
  pickedColor = pickColor();
  //color display
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < diff; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  };
  //change text back
  resetButton.textContent = 'New Colors';
  //reset header colors
  headerColor.style.backgroundColor = 'white';
  //message reset
  messageDisplay.textContent = "Let's try...";
  messageDisplay.classList.remove('green');
})

for(var i = 0; i < diff; i++){
  //add colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add event listener
  squares[i].addEventListener('click', function(){
  // grab colors
  var clickedColor = this.style.backgroundColor;
  //compare color
  if (clickedColor === pickedColor){
    messageDisplay.textContent = 'CORRECT!';
    changeColor(pickedColor);
    messageDisplay.classList.remove('red');
    messageDisplay.classList.add('green');
    headerColor.style.backgroundColor = pickedColor;
    resetButton.textContent = 'Play Again?';
  } else {
    this.style.backgroundColor = 'white';
    messageDisplay.textContent = 'WRONG!';
    messageDisplay.classList.add('red');
  }
  })
}

function changeColor (color){
  for(var i = 0; i < diff; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //put random colorDisplay
  for(i = 0; i < num; i++){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    arr.push('rgb(' + r + ',' + ' ' + g + ',' + ' ' + b + ')');
  }
  //return the array
  return arr;
}
