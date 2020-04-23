import animate from "./animate"

animate()

const bgTag = document.querySelector("#bg")
const bodyTag = document.querySelector("body")

document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const distance = pageHeight - window.innerHeight

    const percentage = pixels / distance

    bgTag.style.objectPosition = `50% ${100 * percentage}% `
})