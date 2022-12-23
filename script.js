const container = document.querySelector('#container');
let rows;
let divs;
let squares=16;

function loadGrid(squares){
for (j=0; j<squares; j++){
rows=document.createElement('div');
rows.classList.add('rows');
container.appendChild(rows)
    for (let i=0; i<squares; i++){
    divs = document.createElement('div');
    divs.classList.add('divs');
    divs.textContent = ' ';
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    divs.addEventListener('mouseenter', function (e) {
        e.target.style.background = '#' + randomColor;
      });
    rows.appendChild(divs);
    }
}
}

const button =document.querySelector('button');
button.addEventListener('click', promptFunction);

  function promptFunction() {
    squares=prompt("How many number of squares per side for the new grid would you like? 2-100");
    checkSquaresSize(squares);
    emptyContainerDiv();
    loadGrid(squares);
    
  }
function checkSquaresSize(){
    squares=parseInt(squares);
  if (squares >100){
    squares=prompt("Please input a number between 2 -100");
    checkSquaresSize(squares);
    }
    else if (squares <2){
        squares=prompt("Please input a number between 2 -100");
        checkSquaresSize(squares);
    }
    else if (isNaN(squares)){
        squares=16;
        return;
    }
}


function emptyContainerDiv(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}

window.onload=loadGrid(16);