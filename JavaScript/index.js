const card = document.querySelectorAll('.card');
const left = document.querySelectorAll('.left');
const card2 = document.querySelectorAll('.card2');
const card3 = document.querySelectorAll('.card3');
const regionesContainer = document.querySelectorAll('.regiones_container');
const ulBg = document.querySelector('.ul_bg li a');


window.sr = ScrollReveal();
    sr.reveal(card,{
        duration: 2000,
        origin: 'left',
        distance: '-100px'
    });


 window.sr = ScrollReveal();
sr.reveal(left,{
    duration: 2000,
    origin: 'right',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal(card2,{
    duration: 2000,
    origin: 'right',
    distance: '-100px',
    interval: 200
});

window.sr = ScrollReveal();
sr.reveal(card3,{
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
    interval: 200
});

window.sr = ScrollReveal();
sr.reveal(regionesContainer,{
    duration: 2000,
    origin: 'left',
    distance: '-100px',
    interval: 200
});


window.sr = ScrollReveal();
sr.reveal(ulBg,{
    duration: 2000,
    origin: 'left',
    distance: '-100px',
    interval: 200
});