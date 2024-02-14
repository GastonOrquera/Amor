
let bgOne = document.querySelector('.bgOne');

let bgTwo = document.querySelector('.bgTwo');

let bgThree = document.querySelector('.bgThree');

let iOne = document.querySelector('.iOne');

let iTwo = document.querySelector('.iTwo')


iOne.addEventListener('click', function () {
    bgOne.classList.toggle('active');
    bgTwo.classList.toggle('active');

});

iTwo.addEventListener('click', function () {

    bgThree.classList.toggle('active');

});


ScrollReveal().reveal('.scrollTitles', {
    origin: 'left',
    distance: '20px',
    duration: 1000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 200

});

ScrollReveal().reveal('.scroll-span', {
    origin: 'right',
    distance: '20px',
    duration: 2000,
    easing: 'cubic-bezier(0.5,0,0,1.2)',
    interval: 200

});

