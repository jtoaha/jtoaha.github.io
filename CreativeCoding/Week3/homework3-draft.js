/**

Title: Moiré pattern Attempt #1

Author: Jamila Toaha
Date: 05/22/21

*/

/*------ Global Variables -------*/

let n

let backgroundColor
let scale



function setup() {

  backgroundColor = '#fff'
  n = 150
  scale = 20
  frameRate(5)

  createCanvas(900, 700)

}

function draw() {
  background(backgroundColor)
  angleMode(DEGREES)
push()
  translate(width / 2, height / 2)


  for(let i=0; i < n; i++){
    drawArc(scale, n, i)
  }

pop()
}


function drawArc(scale, n, i) {

  rotate(2*PI/n*i)

  fill(random(0, 200), random(100,200), random(200, 255))
  beginShape()

  vertex(0, 0)
  bezierVertex(-1.23 * scale, 3.36 * scale, 1.4 * scale, 8.51 * scale, 6.08 * scale, 6.7 * scale)
  vertex(5.47 * scale, 7.28 * scale)
  bezierVertex(1.4 * scale, 8.3 * scale, -1.62 * scale, 3.92 * scale, 0 * scale, 0 * scale)
  endShape(CLOSE)


}
