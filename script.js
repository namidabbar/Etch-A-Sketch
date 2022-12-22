const container = document.querySelector('#container');
let rows;
let divs;


for (j=0; j<16; j++){
rows=document.createElement('div');
rows.classList.add('rows');
container.appendChild(rows)
    for (let i=0; i<16; i++){
    divs = document.createElement('div');
    divs.classList.add('divs');
    divs.textContent = ' ';
    rows.appendChild(divs);
    }
}