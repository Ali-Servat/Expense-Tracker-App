const button = document.querySelector('button');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const table = document.querySelector('table');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(name.value));
    table.appendChild(td);
})
