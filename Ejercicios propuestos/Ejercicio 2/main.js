const list=document.getElementById('lista')
const item1=document.getElementById('item1')
const item2=document.getElementById('item2')
const item3=document.getElementById('item3')
const add=document.getElementById('add')
const reset=document.getElementById('reset')

add.addEventListener('click',()=>{
    item1.textContent="Item1"
    item1.style.color="red";
    item2.textContent="Item2"
    item2.style.color="blue";
    item3.textContent="Item3"
    item3.style.color="green";
})

reset.addEventListener('click',()=>{
    item1.textContent=""
    item1.style.color="black"
    item2.textContent=""
    item2.style.color="black"
    item3.textContent=""
    item3.style.color="black"
})