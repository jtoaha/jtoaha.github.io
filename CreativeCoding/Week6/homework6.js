/**
Homework # 6

Description: 2 sets of spirals flowing in counterclock-wise fashion. Colors (interpolated) and randomized on each run. Interpolates 2 sets of colors

Author: Jamila Toaha
Date 6/13/21
*/

// Declare global variables

let numCircles, degrees, circleRadius, alpha, animX

let colorTheme, colorFrom, colorTo

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#fff')
  smooth()

  alpha = 1

  angleMode(DEGREES)

  /* RADIANS MODE - Uncomment this section for a different effect */
  angleMode(RADIANS) // Uncomment for a different effect
  //alpha = .9 // Radians mode looks better with transparent circles
  //frameRate(15) // Adjust as necessary if animation is too fast

  // Circle Properties
  numCircles = 12
  degrees = (2 * PI) / numCircles // i.e. 360/ 12 so we can evenly distribute circles
  circleRadius = 100
  animX = 0 // responsible to handle animation of X coordinate
  updateColorTheme(0) // this sets up color theme at beginning/ set-up so the colors do not get reset when within the draw loop
  updateColorTheme(numCircles / 2)
}

function draw() {
  translate(width / 2, height / 2) // Move origin to center of canvas so spirals are drawn from center

  // This is to make animation smoother
  animX += 0.05

  // Have canvas rotate 1/ 360 degrees every frame
  rotate(frameCount % 360)

  // Draw circles, in this case based on 12 circles
  // i is the index
  for (let i = 0; i < numCircles; i++) {
    // Draw clockwise spiral
    drawSpiral(i, 1)

    // Draw counter-clockwise spiral
    drawSpiral(i, -1)
  }
}

/** Creates random colors for each circle that will spin in a spiral. Interpolates and lerps colors as necessary */
function updateColorTheme(start) {
  // Define an array so we can save colors and access later. Doing this before the draw function helps random colors stay consistent
  colorTheme = []

  // 1st set
  // Assign random color for colorFrom
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  // Assign random color for colorTo
  let r2 = Math.floor(Math.random() * 256)
  let g2 = Math.floor(Math.random() * 256)
  let b2 = Math.floor(Math.random() * 256)

  colorFrom = color(r, g, b, alpha)
  colorTo = color(r2, g2, b2)

  // 2nd set
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)

  // Assign random color for colorTo
  r2 = Math.floor(Math.random() * 256)
  g2 = Math.floor(Math.random() * 256)
  b2 = Math.floor(Math.random() * 256)

  colorFrom2 = color(r, g, b, alpha)
  colorTo2 = color(r2, g2, b2)

  for (let i = 0; i < numCircles; i++) {
    // Create lerp color interpolation. More visible when one color is used.
    let lerpAmt = map(i * numCircles * 10, -width / 2, width / 2, 0, 1)
    // Alternate colors between first set and second set based on whether we are on odd or even index
    let lerpedCol =
      i % 2 === 0
        ? lerpColor(colorFrom, colorTo, lerpAmt)
        : lerpColor(colorFrom2, colorTo2, lerpAmt)

    // Save lerp colors so we can use later. Since we have 12 circles, 12 lerpedColors will be saved
    colorTheme.push(lerpedCol)
  }
}

/**
 * drawSpiral accesses the specific index (so can draw corresponding color and scale for the current circle). Takes into account direction.
 * @param {*} i - index
 * @param {*} direction - either 1 or -1, counterclockwise or clockwise
 */
function drawSpiral(i, direction) {
  push()
  fill(colorTheme[i], alpha) // access ith color in the Color Theme, for example, the color saved at index 0, index 1, and so forth based on the current circle we are on
  stroke(colorTheme[i])
  scale((i + 1) / numCircles) // More jaggedy spirals, liked this look better so went with it
  // scale(2/(i+1)) // More smooth spirals

  rotate(degrees * i * direction) // rotate so circles are evenly distributed

  //Easing function allows coordinates translate at a smoother space
  translate(easeInQuad(animX) * direction, easeInQuad(animX) * direction)

  /** Uncomment to see rectangle effect instead */
  // rectMode(CENTER)
  // rect(0, 0, circleRadius/2)

  circle(0, 0, circleRadius)
  pop()
}

/** Source for this function which allows smoother animation: https://easings.net/ */
function easeInQuad(x) {
  return x * x
}
