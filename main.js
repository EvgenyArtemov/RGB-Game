var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var headerColor = document.querySelector('h1');
var resetButton = document.getElementById('resetButton');
var gameMode = document.querySelectorAll('.mode');
var hiddenDiv = document.querySelectorAll('.hide');
var extraDiv = document.querySelectorAll('.extra');
var diff = 9;

for(var i = 0; i < 3; i++){
extraDiv[i].style.display = 'none';
};

colorDisplay.textContent = pickedColor;

for(var i = 0; i < gameMode.length; i++){
  gameMode[i].addEventListener('click', function(){
    gameMode[0].classList.remove('selected');
    gameMode[1].classList.remove('selected');
    gameMode[2].classList.remove('selected');
    this.classList.add('selected');
    if (this.textContent === 'EASY'){
      diff = 3;
      for(var i = 0; i < diff; i++){
      hiddenDiv[i].style.display = 'none';
      extraDiv[i].style.display = 'none';
      }
    } else if (this.textContent === 'HARD') {
      diff = 6;

      for(var i = 0; i < diff; i++){
      hiddenDiv[i].style.display = 'block';
      };

      for(var i = 0; i < 3; i++){
      extraDiv[i].style.display = 'none';
     };

    } else if (this.textContent === 'BEAST'){
      diff = 9;
      reset();
      for(var i = 0; i < 6; i++){
        hiddenDiv[i].style.display = 'block';
      };
      for(var i = 0; i < 3; i++){
        extraDiv[i].style.display = 'block';
      };
    }
    reset();
  })
}

function reset(){
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
    //change text back
    resetButton.textContent = 'New Colors';
    //reset header colors
    headerColor.style.backgroundColor = 'white';
    //message reset
    messageDisplay.textContent = "Let's try...";
    messageDisplay.classList.remove('green');
  };
};

resetButton.addEventListener('click', function(){
  reset();
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
