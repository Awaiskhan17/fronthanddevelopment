const Number = {
  numberElement: document.querySelector(".number"),
  secNum: document.querySelector(".number2"),
  thrNum: document.querySelector(".number3"),
  
};

let currentValue = parseInt(Number.numberElement.textContent);

const hello = setInterval(() => {
 currentValue < 23 ? Number.numberElement.textContent = ++currentValue : clearTimeout(hello)
}, 20);

let anoCurrentValue = parseInt(Number.secNum.textContent);

const revmoving = setInterval(() => {
 anoCurrentValue < 50000 ? Number.secNum.textContent = ++anoCurrentValue : clearTimeout(revmoving)
});

let thrCurrentValue = parseInt(Number.thrNum.textContent);

const earsingInterval = setInterval(() => {
 thrCurrentValue < 230 ? Number.thrNum.textContent = ++thrCurrentValue : clearTimeout(earsingInterval)
});


