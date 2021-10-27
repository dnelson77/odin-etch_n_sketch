
// Create Grid
const container = document.querySelector('.container')

function createGrid(width, height) {
    for (let i = 0; i<height; i++) {
        let row = document.createElement('div')
        row.classList.add('row', `${i}`)
        for (let x = 0; x<width; x++) {
            let box = document.createElement('div')
            box.classList.add('box')
            row.appendChild(box)
        }
        container.appendChild(row)
    }
    let pixels = Array.from(document.querySelectorAll('.box'))
    pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor))
}
// Create color change on mouse over
function changeColor (e) {
    if (e.target.style.backgroundColor == "") {
        let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        e.target.style.backgroundColor = randomColor
    } else {
        e.target.style.backgroundColor = rgbToHex(darkenRGB(extractRGB(e.target.style.backgroundColor)))
    }
}

//color conversions
function extractRGB(rgb) {
    rgb = rgb.split('(')[1].split(')')[0].split(', ')
    return rgb
}

function darkenRGB(rgb) {
    let r = rgb[0],
        g = rgb[1],
        b = rgb[2]
    r > 25.5 ? r = r - 25.5 : r = 0
    g > 25.5 ? g = g - 25.5 : g = 0
    b > 25.5 ? b = b - 25.5 : b = 0
    return [r,g,b]
}

function rgbToHex(rgb) {
    let r = parseInt(rgb[0]).toString(16),
    g = parseInt(rgb[1]).toString(16),
    b = parseInt(rgb[2]).toString(16)
    return `#${r}${g}${b}`
}

//Clear screan
const clear = document.querySelector('.clear')
clear.addEventListener('click', clearScreen)

function clearScreen () {
    let rows = Array.from(document.querySelectorAll('.row'))
    console.log(rows, typeof(rows[1]))
    if (rows.length > 0) {
        rows.forEach(row => container.removeChild(row))
    }
    height = prompt("number of vertical divisions?", '')
    width = prompt("number of horizontal divisions?", '')
    createGrid(height,width)
}