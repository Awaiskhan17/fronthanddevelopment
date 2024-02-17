const haimbargur = document.querySelector('.hamburger-menu')

const menu = document.querySelector('.overlay')

haimbargur.addEventListener('click' , function(){

    menu.computedStyleMap.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
})