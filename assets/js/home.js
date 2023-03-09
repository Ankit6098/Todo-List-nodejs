const nav = document.querySelector('.nav');
const maincontainer = document.querySelector('.main-container');
const element1 = document.querySelector('.element1');
const element2 = document.querySelector('.element2');
const element3 = document.querySelector('.element3');
const getStartButton = document.querySelector('.get-start');
const learnMoreButton = document.getElementById('more');
const learnMoreContainer = document.getElementById('learn-more-container');
const closeButton = document.querySelector('.close-button');
const body = document.getElementsByTagName('body')[0];

getStartButton.addEventListener('click', () => {
    console.log('get start button clicked!');
})

learnMoreButton.addEventListener('click', () => {
    console.log('lean more button clicked!');
    learnMoreContainer.style.opacity = 1;
    learnMoreContainer.style.pointerEvents = 'all';
    body.style.pointerEvents = 'none';
    nav.style.filter = 'blur(5px)';
    maincontainer.style.filter = 'blur(5px)';
    element1.style.filter = 'blur(5px)';
    element2.style.filter = 'blur(5px)';
    element3.style.filter = 'blur(5px)';
})

closeButton.addEventListener('click', () => {
    console.log('close button clicked!');
    learnMoreContainer.style.opacity = 0;
    learnMoreContainer.style.pointerEvents = 'none';
    body.style.pointerEvents = 'all';
    body.style.opacity = 1;
    nav.style.filter = 'blur(0px)';
    maincontainer.style.filter = 'blur(0px)';
    element1.style.filter = 'blur(0px)';
    element2.style.filter = 'blur(0px)';
    element3.style.filter = 'blur(0px)';
})