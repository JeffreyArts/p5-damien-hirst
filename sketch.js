// Declareer de variabelen
let horizontaleStippen = 8
let verticaleStippen = 8

const afstandTussenStippen = 2
const stipDiameter = 32
const backgroundColor = "#f3f3f3"

let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
// const canvasWidth = horizontaleStippen * stipDiameter * afstandTussenStippen + stipDiameter * 2
// const canvasHeight = verticaleStippen * stipDiameter * afstandTussenStippen + stipDiameter * 2

const resetStippen = function() {
    horizontaleStippen = Math.floor(canvasWidth / (stipDiameter * afstandTussenStippen ))
    verticaleStippen = Math.floor(canvasHeight / (stipDiameter * afstandTussenStippen ))
}

const generateStippen = function() {
    // Reset het aantal stippen zodat er stippen over het gehele scherm worden getekend
    resetStippen()
    
    // Verander kleurmodus naar HSL
    // Uitleg over HSL: https://www.w3schools.com/css/css_colors_hsl.asp
    colorMode(HSL);

    // Loop door alle x en y posities
    for (let x = 0; x < horizontaleStippen; x++) {
        for (let y = 0; y < verticaleStippen; y++) {
            // const fillColor = kleuren[floor(random(kleuren.length))]
            
            // Bereken de x en y posities van de stip
            const xPos = x * stipDiameter * afstandTussenStippen + stipDiameter
            const yPos = y * stipDiameter * afstandTussenStippen + stipDiameter

            // Bereken de kleur van de stip
            const hue = Math.random() * 360 // Willekeurige hue tussen 0 en 360
            const saturation = Math.random() * 70 + 30 // Willekeurige saturation tussen 30 en 100
            const lightness = Math.random() * 50 + 25 // Willekeurige lightness tussen 25 en 75
            fill(hue, saturation, lightness)

            // Teken de stip
            circle(xPos, yPos, stipDiameter)
        }
    }
}

// P5 functies voor het initialiseren en tekenen
function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("container")
    background(backgroundColor);
    noStroke()
    generateStippen()
}

function draw() {
}

function windowResized() {
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight

    resizeCanvas(canvasWidth, canvasHeight)
    generateStippen()
}