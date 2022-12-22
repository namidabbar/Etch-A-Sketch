const container = document.querySelector('#container');

for (let i=0; i<=16; i++){
const divs = document.createElement('div');
divs.classList.add('divs');
divs.textContent = 'This is div number ' +i;
container.appendChild(divs);
}