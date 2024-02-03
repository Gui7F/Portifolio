const botaoMenu = document.getElementById('abri-menu');
const menuMobile = document.querySelector('.menu-mobile');
const botaoFecha = document.querySelector('.btn-fechar')

botaoMenu.addEventListener('click', () =>{
    menuMobile.classList.add('open-menu')
})

botaoFecha.addEventListener('click', () =>{
    menuMobile.classList.remove('open-menu')
})