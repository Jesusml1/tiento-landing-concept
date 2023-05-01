import './style.css'


const renderFrameAnimation = document.querySelector('.render-frame-animation');
const title = document.querySelector('.inner-border');

renderFrameAnimation.addEventListener('animationend', () => {
    title.classList.toggle('render-title-animation')
    title.classList.remove('hide')
})

const pointer = document.querySelector('.pointer')

const pointerCornerTopLeft = document.querySelector('.pointer-corner-top-left');
const pointerCornerTopRight = document.querySelector('.pointer-corner-top-right');
const pointerCornerBottomLeft = document.querySelector('.pointer-corner-bottom-left');
const pointerCornerBottomRight = document.querySelector('.pointer-corner-bottom-right');

const pointerDotTopLeft = document.querySelector('.pointer-dot-top-left');
const pointerDotTopRight = document.querySelector('.pointer-dot-top-right');
const pointerDotBottomLeft = document.querySelector('.pointer-dot-bottom-left');
const pointerDotBottomRight = document.querySelector('.pointer-dot-bottom-right');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    pointer.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, { duration: 1000, fill: 'forwards' })
}

document.body.addEventListener('click', () => {
    pointer.classList.toggle('pointer-hover');

    pointerCornerTopLeft.classList.toggle('pointer-corner-top-left-hover');
    pointerCornerTopRight.classList.toggle('pointer-corner-top-right-hover');
    pointerCornerBottomLeft.classList.toggle('pointer-corner-bottom-left-hover');
    pointerCornerBottomRight.classList.toggle('pointer-corner-bottom-right-hover');

    pointerDotTopLeft.classList.toggle('pointer-dot-top-left-hover');
    pointerDotTopRight.classList.toggle('pointer-dot-top-right-hover');
    pointerDotBottomLeft.classList.toggle('pointer-dot-bottom-left-hover');
    pointerDotBottomRight.classList.toggle('pointer-dot-bottom-right-hover');
})


const oxLabel = document.getElementById('ox-label');
const ozLabel = document.getElementById('oz-label');
const fp1Label = document.getElementById('fp1-label');
const fp2Label = document.getElementById('fp2-label');

function generateRandomNumber() {
    let randomNumber = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        randomNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomNumber;
}

let timerId = setInterval(() => {
    oxLabel.innerHTML = 'OX: ' + generateRandomNumber();
    ozLabel.innerHTML = 'OZ: ' + generateRandomNumber();
    fp1Label.innerHTML = 'FP1: ' + generateRandomNumber();
    fp2Label.innerHTML = 'FP2: ' + generateRandomNumber();
}, 500);