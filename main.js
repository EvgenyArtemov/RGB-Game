(() => {
  let diff = 9;
  let scoreRight = 0;
  let scoreWrong = 0;
  let colors = generateRandomColors(diff);
  let pickedColor = pickColor();
  let squares;
  const colorDisplay = document.getElementById('colorDisplay');
  const container = document.querySelector('.container');
  const messageDisplay = document.getElementById('message');
  const headerColor = document.querySelector('h1');
  const resetButton = document.getElementById('resetButton');
  const gameModeBtn = document.querySelectorAll('.mode');
  const scoreRightDisplay = document.querySelector('#scoreRight');
  const scoreWrongDisplay = document.querySelector('#scoreWrong');

  generateBlocks(diff);
  reset();

  gameModeBtn.forEach( el => {
    el.addEventListener('click', event => {
      gameModeBtn.forEach(el => {
        el.classList.remove('selected');
      })
      event.target.classList.add('selected');
      if (event.target.textContent === 'EASY'){
        diff = 3;
        container.innerHTML = '';
        generateBlocks(diff);
      } else if (event.target.textContent === 'HARD') {
          diff = 6;
          container.innerHTML = '';
          generateBlocks(diff);
      } else if (event.target.textContent === 'BEAST'){
          diff = 9;
          document.documentElement.style.fontSize = '13px';
          generateBlocks(diff);
      }
      reset();
    })
  })

  function generateBlocks (num) {
    const div = `<div class="square"></div>`;
    for(let i = 0; i < num; i++){
      document.querySelector('.container').insertAdjacentHTML('beforeend', div)
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square, i) => {
      square.style.backgroundColor = colors[i];
      square.addEventListener('click', ev => {
        // grab colors
        let clickedColor = ev.target.style.backgroundColor;
        //compare color
        if (clickedColor === pickedColor){
          messageDisplay.textContent = 'CORRECT!';
          changeColor(pickedColor);
          messageDisplay.classList.remove('red');
          messageDisplay.classList.add('green');
          headerColor.style.backgroundColor = pickedColor;
          resetButton.textContent = 'Play Again?';
          scoreRight++;
          scoreRightDisplay.textContent = scoreRight;
        } else {
          if(ev.target.style.backgroundColor !== 'white'){
            scoreWrong++;
          }
          ev.target.style.backgroundColor = 'white';
          messageDisplay.textContent = 'WRONG!';
          messageDisplay.classList.add('red');
          scoreWrongDisplay.textContent = scoreWrong;
        }
        })
    })
  }

  function reset(){
    colors = generateRandomColors(diff);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    squares.forEach((square, i) => {
      square.style.backgroundColor = colors[i];
    });
    resetButton.textContent = 'New Colors';
    headerColor.style.backgroundColor = 'white';
    messageDisplay.textContent = "Let's try...";
    messageDisplay.classList.remove('green','red');
  };

  function changeColor (color){
    for(var i = 0; i < diff; i++){
      squares[i].style.backgroundColor = color;
    }
  }


  function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  function generateRandomColors(num){
    let arrColors = Array.apply(null, Array(num)).map(el => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`
    });
    return arrColors; 
  };

  resetButton.addEventListener('click', function(){
    reset();
  });
})();




