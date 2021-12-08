const menu = document.querySelector('.menu')
const menuLista = document.querySelector('.ul_bg')
const cerrarLista = document.querySelector('.cerrar')

menu.addEventListener('click', () =>{
    menuLista.classList.add('active')
})

cerrarLista.addEventListener('click', () =>{
    menuLista.classList.remove('active')
})