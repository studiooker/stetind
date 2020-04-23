import inView from 'in-view'

export default function () {
inView('.fade')
    .on('enter', el => {
        el.style.opacity = 1;
    })
    .on('exit', el => {
        el.style.opacity = 0;
    });
}

const main = document.querySelector("main")
const nav = document.querySelector("nav")
const bgTag = document.querySelector("#bg")

document.addEventListener("DOMContentLoaded", function() {
    main.style.opacity = '1';
    nav.style.opacity = '1';
    bgTag.style.objectPosition = `50% 0%`
});