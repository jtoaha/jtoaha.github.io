/**

Homework # 7 : Lissajous curves with lerped colors

Author: Jamila Toaha
Date 6/20/21


*/

// Declare global variables

let waveLengthOne = 300
let waveLengthTwo = 300 / 1.618
let pointCount = 0
var angle = 0.0
var amplitude = 300
var period = 200

let colorTo, colorFrom, lerpedCol

let backgroundColor = '#CCCCFF'

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(backgroundColor)
  smooth()
  setColorTheme()
}

function draw() {
  // Update colorTheme every 400 frames
  if (frameCount % 400 === 0) setColorTheme()

  // Draw 3 Lissajous
  drawLissajous(0) // Draw at top left corner
  drawLissajous(2) // Draw in center of canvas
  drawLissajous(2) // Draw at bottom right corner
}

function drawLissajous(offset) {
  // Lerp color using sin so that colors transition more smoothly
  lerpedCol = lerpColor(colorFrom, colorTo, sin((frameCount / period) * TWO_PI))

  fill(lerpedCol)
  stroke(backgroundColor)
  strokeWeight(2)
  translate(width / offset, height / offset)

  beginShape()
  // Have beginning of shape fade out
  for (let i = 0; i < pointCount; i++) {
    angle = (i / waveLengthOne) * TWO_PI
    let y = sin(angle) * amplitude
    angle = (i / waveLengthTwo) * TWO_PI
    let x = cos(angle) * amplitude
    vertex(x, y)
  }
  endShape()
  pointCount++
}

function setColorTheme() {
  // Assign random color for colorFrom
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  // Assign random color for colorTo
  let r2 = Math.floor(Math.random() * 256)
  let g2 = Math.floor(Math.random() * 256)
  let b2 = Math.floor(Math.random() * 256)

  colorFrom = color(r, g, b)
  colorTo = color(r2, g2, b2)
}
