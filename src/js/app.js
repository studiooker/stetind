import animate from "./animate"

animate()

const bgTag = document.querySelector("#bg img")
const bodyTag = document.querySelector("body")
const sections = document.querySelectorAll("section")
const nav = document.querySelector("nav")


document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const distance = pageHeight - window.innerHeight

    const percentage = pixels / distance

    bgTag.style.objectPosition = `50% ${100 * percentage}% `

    sections.forEach(section => {
        if (section.offsetTop * 0.2 < pixels) {
              nav.classList = section.getAttribute("data-bg")
        }
    })


})

