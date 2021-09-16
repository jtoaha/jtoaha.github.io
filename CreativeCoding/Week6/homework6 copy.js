/**
Homework # 6


Author: Jamila Toaha
Date 6/13/21
*/


// Declare global variables

let numCircles, degrees, circleRadius, alpha, animX, colorTheme


function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#fff')
  smooth()
  // angleMode(DEGREES)
  translate(width/2, height/2)
  numCircles = 10
  degrees = 2 * PI / numCircles
  circleRadius = 100
  alpha = 0.25
  animX = 0
  updateColorTheme()
}

function draw() {
  translate(width/2, height/2)
  // background('#fff')
  animX += 0.05
  rotate(frameCount%360);

  for(let i = 0; i < numCircles; i++){
    push()
    fill(colorTheme[i])
    scale(i+1/numCircles)
    rotate(degrees*i)
    translate(easeInQuad(animX), 0)

    circle(0, 0, circleRadius)
    rotate(1)
    pop()
  }

}

function easeInQuad(x) {
  //return 1 - Math.pow(1 - x, 3);
  return x * x //ease in
}

function updateColorTheme() {
  colorTheme = []
  for (let i = 0; i < numCircles; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    colorTheme.push(`rgba(${r},${g},${b}, ${alpha} )`)
  }
}
