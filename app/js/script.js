let menu = document.querySelector('#btnHamburger')
let header = document.querySelector('.header')
let overlay = document.querySelector('.overlay')

menu.addEventListener('click', () => {
    console.log('Open Hamburguer')

    if(header.classList.contains('open')){ 
        //close menu
        header.classList.remove('open')
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        
    }
    else{ 
        //open menu
        header.classList.add('open')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
    }
})