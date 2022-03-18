document.querySelector('#apply').addEventListener('click', ()=>{
var x = document.querySelector('#colo').value;
console.log(x);
let num = document.querySelectorAll('textarea');
for(var i=0; i<=num.length; i++){
num[i].style.color = x;
console.log(i);
}
});

document.querySelector('.add_button').addEventListener('click', ()=>{
let container = document.querySelector('.container');

let outer = document.createElement('div');
container.appendChild(outer);
outer.classList.add("square");

let header = document.createElement('div');
outer.appendChild(header);
header.classList.add("head");

let area = document.createElement('div');
outer.appendChild(area);
area.classList.add("area");

let sub_container = document.createElement('textarea');
area.appendChild(sub_container);
sub_container.classList.add("text");

let delet = document.createElement('button');
header.appendChild(delet);
delet.innerHTML = "X";
delet.classList.add("delete");
sub_container.addEventListener('dblclick', function(){
container.removeChild(outer);
});
});
