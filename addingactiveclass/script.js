
const InputEl = document.querySelector('.input')
const HEHE = document.querySelectorAll('.hehe')
InputEl.addEventListener('input' , function(){
InputEl.value?HEHE.forEach(value => value.classList.add("active")) :  HEHE.forEach(value => value.classList.remove("active"))
})