import inView from 'in-view'

export default function () {
inView('h2')
    .on('enter', el => {
        el.style.opacity = 1;
    })
    .on('exit', el => {
        el.style.opacity = 0;
    });
}

const main = document.querySelector("main")
const nav = document.querySelector("nav")
document.addEventListener("DOMContentLoaded", function() {
    main.style.opacity = '1';
    nav.style.opacity = '1';

});