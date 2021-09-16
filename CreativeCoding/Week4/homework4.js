/**
Homework # 4
Title: Albers Color Studies: three to two colors experiment
Features: On key press or mouse click, colors change to a random color and drawing can be resized according to canvas
Modify fork: https://openprocessing.org/sketch/560198#

Author: Jamila Toaha
Date 5/30/21

*/

/*
From Joseph Albers' Interaction of color:

3 colors appear as 2
[...] the center squares look like the grounds exchanged. But they are of the same color,
precisely alike, and at the same time refer to the neiboring grounds.
The true color of the two central squares therefore becomes unrecognizable, as it loses its identity.

Now, fork this example and copy your observations into a comment at the top of your code like I'm
doing here.

Replace the color1, color2, and color3 values on lines 42-44 with your own variation.
You must use HSB numbers as color values, and you must use three colors that "appear" as 2 perceptual colors.


Tips:
Use built-in variables, mouseX, and mouseY as temporary replacements for your hard
coded numbers, and console.log(mouseX, mouseY); to record those numbers for later replacement

Remember that the color argument with the most impact on its position in the color wheel is the first one (hue).
Are the colors in this example analogous or complementary?
If you answered "analogous", try re-creating the effect with complementary colors/
If you answered "complementary", tr re-creating the effect with analogous colors.
*/

let randomHue
let squareWidth

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100)
  background(0, 0, 100)
  // noLoop();
  noStroke()

  randomHue = Math.floor(random(360))
  squareWidth = width / 16
}

function draw() {
  // Make canvas responsive: Resize sketch according to window dimensions
  // i.e. If user resizes canvas, drawing will also resize
  createCanvas(windowWidth, windowHeight)
  squareWidth = width / 16

  /** Original Colors
		var color1 = color(121, 72,55); // left hand
		var color2 = color(120, 90, 80); // right hand
		var color3 = color(120, 91, 68); // square
	*/

  var color1 = color(randomHue, 52, 35) // left hand background
  var color2 = color(randomHue, 70, 60) // right hand background
  var color3 = color(randomHue, 71, 48) // square

  // Draw left hand background <---
  // Starts at 0, 0 right at beginning
  fill(color1)
  rect(0, 0, width / 2, height)

  // Draw small lefthand square <---
  fill(color3)
  // Input where you would like the squares to start horizontally, in this case, width/4:
  drawSquares(width / 4) // Draw 3 vertically stacked squares at starting point: width/4

  // Draw right hand background --->
  // Starts at width/2 right in the middle
  fill(color2)
  rect(width / 2, 0, width / 2, height)

  // Draw small righthand square --->
  fill(color3)
  // Input where you would like the squares to start horizontally, in this case, width * 0.75:
  drawSquares(width * 0.75) // Draw 3 vertically stacked squares at starting point: width * 0.75
}

// Draws 3 square boxes (stacked vertically) based on x starting point
// Added in this function to make code less repetitive
function drawSquares(startingPointX) {
  rect(
    startingPointX - squareWidth / 2, // Adding squareWidth/2 helps center rect along this coordinate
    height / 2 - squareWidth / 2, // Draw this square at 1/2 the height
    squareWidth,
    squareWidth
  )

  rect(
    startingPointX - squareWidth / 2, // Subtracting squareWidth/2 helps center rect along this coordinate
    height / 4 - squareWidth / 2, // Draw this square at 1/4 of the height
    squareWidth,
    squareWidth
  )

  rect(
    startingPointX - squareWidth / 2, // Subtracting squareWidth/2 helps center rect along this coordinate
    height * 0.75 - squareWidth / 2, // Draw this square at 3/4 of the height
    squareWidth,
    squareWidth
  )
}

function keyPressed() {
  randomHue = Math.floor(random(360)) // Choose a random hue from between 0 and 360
}

function mouseReleased() {
  randomHue = Math.floor(random(360)) // Choose a random hue from between 0 and 360
}
