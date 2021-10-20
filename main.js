const button = document.querySelector('button');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const table = document.querySelector('table');

let counter = 0;
let tr;

button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    tr = document.createElement('tr');
    const td1 = InsertInputValue(name);
    const td2 = InsertInputValue(date);
    const td3 = InsertInputValue(amount);
    const td4 = document.createElement('td');
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = 'Remove';
    deletebtn.addEventListener('click',(e)=>{
        e.preventDefault();

        deletebtn.parentNode.parentNode.parentNode.removeChild(deletebtn.parentNode.parentNode);
    })
    td4.appendChild(deletebtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    
})

const InsertInputValue = function(input){
const td = document.createElement('td');
    td.appendChild(document.createTextNode(input.value));
    return td;
}
