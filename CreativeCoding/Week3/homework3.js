/**
Homework #3

Title: Moiré Pattern - Alternating Stripes

Description: 2 Patterns rotate in opposite directions creating a Moiré Pattern

NOTE: Flashes a bit based on monitor used. Seems the Moire Pattern interferes based on monitors own setting which seems to be a feature of certain Moire patterns when put against a digital screen.

NOTE: Takes a few seconds to load. Will be nice to opitimize in the future.

Author: Jamila Toaha
Date: 05/23/21

*/

/*------ GLOBAL VARIABLES -------*/

let backgroundColor

// Moire Pattern attributes
let stripedPatternHeight
let stripedPatternWidth
let numRows
let numColumns
let rowHeight
let rowWidth

let rotate1
let rotate2

function setup() {
  // Setup Canvas Attributes
  backgroundColor = '#fff' // '#eeffee'
  frameRate(60)
  createCanvas(1200, 900)

  // Define Moiré pattern attributes
  stripedPatternHeight = 300
  stripedPatternWidth = 300
  numRows = 32
  numColumns = 32
  rowHeight = stripedPatternHeight / numRows
  rowWidth = stripedPatternWidth / numColumns

  // Rotate values for Pattern 1 and Pattern 2
  rotate1 = { value: 0 }
  rotate2 = { value: 0 }
}

function draw() {
  //Adjust Canvas
  background(backgroundColor)
  angleMode(DEGREES)
  translate(width / 2, height / 2)

  strokeWeight(2)

  //  Draw first pattern rotating counter-clockwise
  setupPatternGrid(rotate1, -1)

  // Draw second pattern rotating clockwise
  setupPatternGrid(rotate2, +1)
}

/**
 * Draws 1 unit of the pattern, either 2 lines facing horizontally or 2 lines facing vertically
 * @param {number} i // column
 * @param {number} j // row
 * @param {number} rowWidth
 * @param {number} rowHeight
 * @param {number} counter // purpose of counter is to help us draw lines EITHER vertically or horizontally based on whether it's odd or even
 */
function drawPattern(i, j, rowWidth, rowHeight, counter) {

  // Depending on whether counter is odd or even, will draw lines either a lavender OR light blue color
  if (counter % 2 === 0) stroke(200, 150, 250)
  else stroke(150, 200, 250)

  // Begin drawing pattern
  beginShape(LINES)

  if (counter % 2 === 0) {
    // Draw Horizontal Lines at beginning of cell and end of cell
    vertex(j, i)
    vertex(j + rowWidth, i) // Line 1
    vertex(j + rowWidth, i + rowHeight)
    vertex(j, i + rowHeight)  // Line 2
  } else {
    // Draw Vertical Lines at beginnign of cella nd end of cell
    vertex(i, j)
    vertex(i, j + rowHeight) //Line 1
    vertex(i + rowWidth, j + rowHeight)
    vertex(i + rowWidth, j) //Line 2
  }

  endShape()
}

/**
 * Sets up grid across which pattern will be drawn. Alternating horizontal lines and vertical lines will be drawn across the grid
 * @param {object} rotate // Put this in an object data structure, so it's easier to change value when it's passed
 * @param {number} direction // Either positive or negative
 */
function setupPatternGrid(rotateObject, direction) {
  push()

  // Rotates pattern and updates rotate value
  rotate((rotateObject.value += direction))
  let counter = 0
  for (
    let i = -stripedPatternHeight / 2 - (rowHeight / 2) * numColumns; // Offset pattern vertically so that pattern can rotate around center
    i <= stripedPatternHeight;
    i += rowHeight + rowHeight / 2 // Make vertical space between patterns
  ) {
    for (
      let j = -stripedPatternWidth / 2 - (rowWidth / 2) * numRows; // Offset pattern horizontally so that pattern can rotate around center
      j <= stripedPatternWidth;
      j += rowWidth + rowWidth / 2 // Make horizontal space between patterns
    ) {
      drawPattern(j, i, rowWidth, rowHeight, counter)
      counter++ //update counter
    }
  }
  pop()
}
