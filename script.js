const container = document.querySelector('#container');
let rows;
let divs;
let squares=16;


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

const button =document.querySelector('button');
button.addEventListener('click', promptFunction);

  function promptFunction() {
    squares=prompt("How many number of squares per side for the new grid would you like? 2-100");
    
  }
