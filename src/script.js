import MathDraw from "./MathDraw"

document.addEventListener('DOMContentLoaded', ()=>{
    Object.getOwnPropertyNames(Math).filter(method => typeof Math[method] === "function").map(method => {
        const figure = document.createElement('figure')
        figure.append(MathDraw.draw(Math[method]))
        const caption = document.createElement('figcaption')
        caption.innerHTML = `Math.${method}`
        figure.append(caption)
        document.body.append(figure)
    })
})
