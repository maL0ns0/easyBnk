let bdy = document.querySelector('body');
let menu = document.querySelector('#btnHamburger')
let header = document.querySelector('.header')
let overlay = document.querySelector('.overlay')
let fadeElems = document.querySelectorAll('.has-fade')

menu.addEventListener('click', () => {
    console.log('Open Hamburguer')

    if(header.classList.contains('open')){ 
        //close menu
        bdy.classList.remove('no-scroll');
        header.classList.remove('open')
        fadeElems.forEach((e)=> {
            e.classList.add('fade-out')
            e.classList.remove('fade-in')
        })
        
    }
    else{ 
        //open menu
        bdy.classList.add('no-scroll');
        header.classList.add('open')
        fadeElems.forEach((e)=> {
            e.classList.remove('fade-out')
            e.classList.add('fade-in')
        })
    }
})