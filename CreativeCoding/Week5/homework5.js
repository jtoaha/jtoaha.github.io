/**
Homework # 5

Character drawing. Fan art for the second best pokemon, Jigglypuff. (First best Pokemon is obviously Psyduck)

Author: Jamila Toaha
Date 6/5/21


Color Palette for Jiggly Puff:

Skin tone : #f2dce5, rgb(242,220,229)

Ears Inner Triangle: #544947 , rgba(84,73,71,255)

Eye Color : Darker #4f978b, rgba(79,151,139,255)
            Lighter #90ccc2, rgba(144,204,194,255)
            Whites: #f1f0f5, rgba(241,240,245,255), #f0f0f1

Mouth : lower: #e29a9b, rgba(224,153,151,255)
        middle: #b87a7f, rgba(184,122,127,255)

Shadow: #e69ace, rgba(230,154,206,255)
*/

// Declare global variables

let positionX, positionY, characterWidth, characterHeight, scaleValue

let characterColor,
  innerEarColor,
  eyeWhiteColor,
  eyeLGreenColor,
  eyeDGreenColor,
  mouthInner1Color,
  mouthInner2Color

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#fff')
  smooth()
  angleMode(DEGREES)

  scaleValue = 40 // scale up original measurements
  positionX = 0
  positionY = 0
  characterColor = '#f2dce5' // light pink
  characterWidth = 7 * 2 * scaleValue
  characterHeight = 6.6 * 2 * scaleValue

  innerEarColor = '#544947' // dark brown
  eyeWhiteColor = '#f1f0f5'
  eyeLGreenColor = '#90ccc2'
  eyeDGreenColor = '#4f978b'

  mouthInner1Color = '#e29a9b' // dark pink
}

function draw() {
  push()
  // make origin at center of canvas, so easier to draw
  translate(width / 2, height / 2)

  // draw left foot
  drawFoot(positionX, positionY, 1)

  // draw right foot
  drawFoot(positionX, positionY, -1)

  // draw torso
  drawTorso(positionX, positionY, characterWidth, characterHeight)

  // left ear
  drawEar(positionX, positionY, 1)

  // right ear
  drawEar(positionX, positionY, -1)

  // hair
  drawHair(positionX, positionY)

  // left eye
  drawEye(positionX, positionY, 1)

  // right eye
  drawEye(positionX, positionY, -1)

  // draw mouth
  drawMouth(positionX, positionY)

  // draw left arm
  drawLeftArm(positionX, positionY)

  // draw right arm
  drawRightArm(positionX, positionY)

  pop()
}

function drawTorso(x, y, width, height) {
  push()
  fill('#000')
  ellipse(x, y, width * 1.02, height * 1.02)
  fill(characterColor)
  ellipse(x, y, width, height)
  pop()
}

//flip
function drawEar(x, y, orientation) {
  let s = scaleValue
  let o = orientation
  // outer ear
  push()
  stroke('#000')
  strokeWeight(5)
  fill(characterColor)

  //draw curves based on measurements
  beginShape()
  vertex(-6.5 * s * o, -1.61 * s)
  bezierVertex(
    -7.3 * s * o, // if drawing right side, multiplying x coordinates by it's negative value to flip vlaues
    -2.62 * s,
    -7.3 * s * o,
    -6.07 * s,
    -6.92 * s * o,
    -6.46 * s
  )
  vertex(-6.92 * s * o, -6.46 * s)
  bezierVertex(
    -5.5 * s * o,
    -6.77 * s,
    -3.32 * s * o,
    -6.41 * s,
    -2.16 * s * o,
    -5.79 * s
  )
  endShape()
  pop()

  // draw inner ear
  push()
  fill(innerEarColor)

  //draw curves based on measurements
  beginShape()
  vertex(-3.52 * s * o, -5.4 * s)
  bezierVertex(
    -4.31 * s * o,
    -5.83 * s,
    -5.66 * s * o,
    -5.93 * s,
    -6.83 * s * o,
    -5.7 * s
  )
  vertex(-6.83 * s * o, -5.7 * s)
  bezierVertex(
    -6.8 * s * o,
    -5.56 * s,
    -6.6 * s * o,
    -3.913 * s,
    -6.113 * s * o,
    -2.745 * s
  )
  endShape()
  pop()
}

function drawHair(x, y) {
  let s = scaleValue

  push()
  strokeWeight(3)
  fill(characterColor)

  //draw curves based on measurements
  bezier(
    -1.82 * s,
    -5.67 * s,
    -1.6 * s,
    -4.95 * s,
    -0.85 * s,
    -4.53 * s,
    -0.46 * s,
    -4.273 * s
  )
  beginShape()
  vertex(-2.19 * s, -5.97 * s)
  bezierVertex(-0.23 * s, -10.37 * s, 5.02 * s, -5.83 * s, 2.08 * s, -3.07 * s)
  vertex(2.08 * s, -3.07 * s)
  bezierVertex(-1.18 * s, -0.65 * s, -1.33 * s, -5.54 * s, 0.18 * s, -3.93 * s)
  endShape()
  pop()
}

//can draw left or right eye based on orientation value sent
function drawEye(x, y, orientation) {
  let s = scaleValue
  let o = orientation // flip over y axis
  push()
  //outer eye
  strokeWeight(3)
  fill(eyeWhiteColor)
  circle(-3.2 * s * o, -0.8 * s, 4 * s)

  //inner eye
  strokeWeight(2)
  fill(eyeLGreenColor)
  circle(-3.1 * s * o, -0.9 * s, 3.4 * s)

  stroke(eyeDGreenColor)
  fill(eyeDGreenColor)
  circle(-3 * s * o, -1 * s, 3 * s)

  strokeWeight(2)
  stroke('#000')
  fill('#fff')
  circle(-2.5 * s * o, -1.7 * s, -1.2 * s)
  pop()
}

function drawMouth(x, y) {
  let s = scaleValue
  push()
  strokeWeight(2)
  fill(mouthInner1Color)
  beginShape()
  vertex(-1.27 * s, 1.55 * s)
  bezierVertex(-1.42 * s, 2.57 * s, -0.69 * s, 4.4 * s, 0.016 * s, 4.543 * s)
  vertex(0.016 * s, 4.543 * s)
  bezierVertex(1.03 * s, 3.7 * s, 1.48 * s, 2.23 * s, 1.348 * s, 1.456 * s)
  vertex(1.348 * s, 1.456 * s)
  bezierVertex(0.716 * s, 1.32 * s, -0.71 * s, 1.394 * s, -1.27 * s, 1.55 * s)
  endShape()
  pop()
}

function drawLeftArm(x, y) {
  let s = scaleValue

  push()
  strokeWeight(3)
  fill(characterColor)
  beginShape()
  vertex(-4.06 * s, 2.53 * s)
  bezierVertex(-1.56 * s, 4.03 * s, -1.3 * s, 6.65 * s, -4.83 * s, 4.26 * s)
  endShape()
  pop()
}

function drawRightArm(x, y) {
  let s = scaleValue

  push()
  strokeWeight(3)
  fill(characterColor)
  beginShape()
  vertex(5.5 * s, 3.84 * s)
  bezierVertex(10 * s, 0.78 * s, 9.57 * s, -0.74 * s, 6.37 * s, 0.92 * s)
  endShape()
  pop()
}

// draw left or right foot based on orientation value sent
function drawFoot(x, y, orientation) {
  let s = scaleValue
  let o = orientation

  push()
  smooth()
  translate(1 * o, -20)
  strokeWeight(3)
  fill(characterColor)
  beginShape()
  vertex(-2.88 * s * o, 6.45 * s)
  bezierVertex(
    -6.71 * s * o, // if drawing right side, multiplying x coordinates by it's negative value to flip vlaues
    7.58 * s,
    -7.13 * s * o,
    8.39 * s,
    -0.51 * s * o,
    7 * s
  )
  endShape()
  pop()
}
