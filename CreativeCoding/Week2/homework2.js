/**
Homework #2

Title: Recreation of Concreto, Alfredo Volpi, December 1950
Original Picture: https://artsandculture.google.com/asset/concreto/XQGNUoKY-Ec7HA

Author: Jamila Toaha
Date: 05/20/21

Dimension Ratios measured by placing image against a grid-----
Grid:
x:y -> 10:16 scale
Triangle:
x:y -> 1.4: 1.6

Strategy: Draw triangles in a clockwise order, from Quad 1 - Quad 4
Quadrant 1 Starting Point:
x:y -> 5:4
---------------------------
|            |            |
|   Quad 4   |   Quad 1   |
|            |            |
--------------------------
|            |            |
|   Quad 3   |   Quad 2   |
|            |            |
---------------------------

*/

/*------ Global Variables -------*/

// Overall Canvas
let backgroundColor
let scale
let rowHeight

// Color Palettes
let grayColorPalette
let triangleColorPalette

// Triangle attributes
let widthTriangle
let heightTriangle

let animationDelay = 10
let animationDelay2 = 0
let animationDelay3 = 1

function setup() {
  // Create canvas size with the same ratio of the original drawing and scale it up
  scale = 45
  createCanvas(10 * scale, 16 * scale)

  // Background properties
  backgroundColor = '#fff'
  rowHeight = height / 1000 // This will enable gray color palette to be distributed vertically over canvas 1000x

  // Color Palette for canvas background and triangle fill colors:

  // Using an array data structure makes it easier to uniformly apply different colors by allowing access to indices of these arrays
  grayColorPalette = [
    '#e1e0e1',
    '#e1e3dd',
    '#e3e5df',
    '#e6e7e4',
    '#e5e5e2',
    '#e8e7e2',
    '#edefe9',
  ]

  triangleColorPalette = [
    color(38, 94, 90), //dark green, #91aca8,#b8c5c3 supporting green color, rgb(38,94,90) '#265e5a'
    color(207, 196, 120, 200), //gold, #d6cc93 supporting gold color  rgb(207,196,120)
  ]

  // Define triangle attributes. Measurements taken from comparing original painting against a grid
  widthTriangle = 1.4 * scale
  heightTriangle = 1.6 * scale
}

function draw() {
  background(backgroundColor)

  // Create gray gradient background
  // by distributing gray color palette vertically across canvas 1000x
  let counter = 0
  for (let i = 0; i < height && i < animationDelay; i += rowHeight) {
    let colorIndex = counter % grayColorPalette.length // choose index to access using mod(remainder) operator

    fill(grayColorPalette[colorIndex])
    stroke(grayColorPalette[colorIndex])
    rect(0, i, width, rowHeight)
    counter++ // counter made to access different colors of the palette
  }

  // Create gray transparent outline around canvas
  push()
  noFill()
  strokeWeight(7)
  stroke(color(124,124,124, 10))
  rect (0, 0, width, height)
  pop()

  // Set up cursor, this will be the starting point from which the triangles are drawn
  let cursorX = 5 * scale
  let cursorY = 4 * scale

  // Draw Quad 1 and 2 triangles (gold triangles on right hand side) - from up to down
  drawQuad1and2(cursorX, cursorY)

  // Redefine cursor, so that it is now set at the bottom of the left hand side of the painting
  cursorX -= widthTriangle
  cursorY += 5 * heightTriangle

  // Draw Quad 3 and 4 triangles (green - and 1 gold - triangles on left hand side) - from bottom to up
  drawQuad3and4(cursorX, cursorY)
  animationDelay +=10
  animationDelay2 +=.1
}

/**
Draw triangles from Quad 1 to Quad 2
---------------------------
|            |            |
|   Quad 4   |   Quad 1   |
|            |            |
--------------------------
|            |            |
|   Quad 3   |   Quad 2   |
|            |            |
---------------------------
 * @param {number} cursorX
 * @param {number} cursorY
 */
function drawQuad1and2(cursorX, cursorY) {
  // Draw 6 rows of triangles with 2 triangles in each row
  // Outer for loop is for the number of rows (6 in this case)
  for (let i = 0; i < 6 && i < animationDelay2; i++) {
    fill(triangleColorPalette[1])

    //Inner for loop is for the number of columns (2 in this case)
    for (let j = 0; j < 2 && j < animationDelay3; j++) {
      triangle(
        cursorX + j * widthTriangle, // top left X
        cursorY + i * heightTriangle, // top left Y
        cursorX + j * widthTriangle + widthTriangle, // top right X
        cursorY + i * heightTriangle, // top right Y
        cursorX + j * widthTriangle, // bottom right X
        cursorY + i * heightTriangle + heightTriangle // bottom right Y
      )
    }
    animationDelay3+=.25

  }
}

/**
 * Draw triangles from Quad 3 to Quad 4
---------------------------
|            |            |
|   Quad 4   |   Quad 1   |
|            |            |
--------------------------
|            |            |
|   Quad 3   |   Quad 2   |
|            |            |
---------------------------
 * @param {number} cursorX
 * @param {number} cursorY
 */
function drawQuad3and4(cursorX, cursorY) {
  // Draw 7 rows of triangles with 1 in each row. Every other row will have alternating facing triangles
  for (let i = 0; i < 7 && i < animationDelay2; i++) {
    if (i === 0) fill(triangleColorPalette[1])
    // If it's the first row from the bottom, make it gold
    else fill(triangleColorPalette[0]) // Otherwise green

    triangle(
      i % 2 === 0 ? cursorX : cursorX - widthTriangle, // top left X (alternate every other row)
      cursorY - i * heightTriangle, // top left Y
      i % 2 === 0 ? cursorX + widthTriangle : cursorX, // top right X (alternate every other row)
      cursorY - i * heightTriangle, // top right Y
      cursorX, // bottom right X
      cursorY - i * heightTriangle + heightTriangle // bottom right Y
    )
  }
}
