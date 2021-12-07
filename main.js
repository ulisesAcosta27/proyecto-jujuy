var imagenes = document.querySelectorAll('.card_img img');
var elements = document.querySelectorAll('.card2');
var elements2 = document.querySelectorAll('.card3');


anime({
    targets: imagenes,
    trasition: 4000,
    // translateX: [-2000, 0],
    borderTopRightRadius: ['0%', '60px'],
    borderBottomLeftRadius: ['0%', '60px'],
    easing: 'easeInOutQuad'
  });

anime({
  targets: elements,
  trasition: 3000,
  translateX: [-2000, 0],
  delay: anime.stagger(100)
});



anime({
    targets: elements2,
    trasition: 3000,
    // direction: 'alternative',
    translateX: [2000, 0],
    delay: anime.stagger(100)
  });