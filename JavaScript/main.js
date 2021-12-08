const menu = document.querySelector('.menu');
const menuLista = document.querySelector('.ul_bg');
const cerrarLista = document.querySelector('.cerrar');
const linkAbrir = document.querySelector('#link');
const blur = document.querySelector('.destacados_container')
const tarjetas = document.querySelector('.carta')
console.log();

menu.addEventListener('click', () =>{
    menuLista.classList.add('active');
});

cerrarLista.addEventListener('click', () =>{
    menuLista.classList.remove('active');
});

linkAbrir.addEventListener('click', () => {
    blur.classList.add('blurActive')
    tarjetas.classList.add('tarjeta')

})