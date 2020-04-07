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