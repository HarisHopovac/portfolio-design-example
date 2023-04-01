let ball = document.querySelector('.toggle .ball');
let backgroundColor = document.querySelector('body');
let mainSpan = document.querySelector('span');
let secondSpan = document.querySelector('header .container .leftContent span');
let navBar = document.querySelector('nav');
let leftContent = document.querySelector('.leftContent');
let line = document.querySelector('.line');
let a = document.querySelectorAll('a');
let toggleBack = document.querySelector('.toggle');
let styleBall = document.querySelector('.styleBall');
let rightContent = document.querySelector('.rightContent');
let navBtn = document.querySelector('button');
let ul = document.querySelector('nav ul');


ball.addEventListener('click', () => {
    ball.classList.add('moveRight');
    backgroundColor.classList.add('dark');
    mainSpan.classList.add('green');
    secondSpan.classList.add('green');
    navBar.classList.add('white');
    leftContent.classList.add('white');
    line.classList.add('rainbow');
    a.forEach((e) => {
        e.classList.add('white');
    });
    toggleBack.classList.add('back');
    styleBall.classList.add('green');
    rightContent.classList.add('rainbow2');
    ul.classList.add('darkUl');
    navBtn.classList.add('darkBtn');

    let ballRight = document.querySelector('.moveRight');

    ballRight.addEventListener('click', () => {
        ballRight.classList.toggle('moveRight');
        backgroundColor.classList.toggle('dark');
        mainSpan.classList.toggle('green');
        secondSpan.classList.toggle('green');
        navBar.classList.toggle('white');
        leftContent.classList.toggle('white');
        line.classList.toggle('rainbow');
        a.forEach((e) => {
            e.classList.toggle('white');
        });
        toggleBack.classList.toggle('back');
        styleBall.classList.toggle('green');
        rightContent.classList.toggle('rainbow2');
        ul.classList.toggle('darkUl');
        navBtn.classList.toggle('darkBtn');

    })
})

navBtn.addEventListener('click', () => {
    let ul = document.querySelector('nav ul');
    

    if(navBtn.innerText === 'Menu') {
        ul.style.transform = 'translateX(0)';
        navBtn.innerText = 'X';
    } else {
        navBtn.innerText = 'Menu';
        ul.style.transform = 'translateX(100%)';
        
    }


})