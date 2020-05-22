var Cartoon = {
  canvas: undefined,
  ctx: undefined,
  xPos: 0,
  cloud1Pos: 0,
  cloud2Pos: 0,
}

Cartoon.start = function () {
  Cartoon.canvas = document.getElementById('my-canvas')
  Cartoon.ctx = Cartoon.canvas.getContext('2d')
  Cartoon.cloud1Pos = Cartoon.canvas.width - Cartoon.canvas.width / 6
  Cartoon.cloud2Pos = Cartoon.canvas.width / 6 - 20
  Cartoon.mainloop()
}

document.addEventListener('DOMContentLoaded', Cartoon.start)

Cartoon.update = function (color) {
  let canvas = Cartoon.canvas
  //   let time = new Date();
  //  let currentTime = time.getTime();
  //   Cartoon.xPos =  currentTime % Cartoon.canvas.width;
  if (Cartoon.cloud1Pos - 150 > canvas.width) Cartoon.cloud1Pos = -150
  if (Cartoon.cloud2Pos - 150 > canvas.width) Cartoon.cloud2Pos = -200

  Cartoon.cloud1Pos += 0.25
  Cartoon.cloud2Pos += 0.25
}

Cartoon.draw = function (color) {
  Cartoon.canvas = document.getElementById('my-canvas')
  Cartoon.ctx = Cartoon.canvas.getContext('2d')
  let ctx = Cartoon.ctx
  let canvas = Cartoon.canvas

  //Create sky background
  ctx.fillStyle = 'skyblue'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  //Add Text
  ctx.font = '20px Trebuchet MS'
  ctx.fillStyle = 'purple'
  ctx.textAlign = 'left'
  ctx.fillText(
    'Simplicity, patience, compassion. These three are your greatest treasures.',
    canvas.width / 2 + 40,
    30,
    500
  )
  ctx.fillText(
    'Simple in actions and thoughts, you return to the source of being. Patient with both friends and enemies,',
    canvas.width / 2 + 40,
    50,
    500
  )

  ctx.fillText(
    ' you accord with the way things are. \nCompassionate toward yourself,you reconcile all beings in the world.',
    canvas.width / 2 + 40,
    70,
    500
  )

  ctx.fillText(' -Lao Tsu', 900, 90, 1100)

  //drawWater
  drawWater(ctx, canvas)

  //draw groundHorizon and background
  ctx.fillStyle = 'green'
  ctx.fillRect(0, canvas.height / 2.5, canvas.width, canvas.height)

  //draw wooden fence
  drawWoodenFence(ctx, canvas)

  //draw middle road
  drawMiddleRoad(ctx, canvas)

  //draw sun
  drawSun(ctx, canvas)

  //drawClouds
  drawClouds(ctx, canvas)

  //draw house
  drawHouse(ctx, canvas)

  //draw flowers
  drawFlowers(ctx, canvas, 700, 225, 5, 'red')
  drawFlowers(ctx, canvas, 875, 250, 6, 'coral')
  drawFlowers(ctx, canvas, 800, 200, 5, 'magenta')
  drawFlowers(ctx, canvas, 1000, 225, 5.5, '#d1d5ae')

  drawFlowers(ctx, canvas, 1000, 275, 6.5, 'aqua')
  drawFlowers(ctx, canvas, 800, 300, 7, '#d1619e')
  drawFlowers(ctx, canvas, 775, 400, 7.5, '#202040')
  drawFlowers(ctx, canvas, 1050, 375, 7, '#6886c5')
  drawFlowers(ctx, canvas, 40, 220, 5.25, 'purple')
  drawFlowers(ctx, canvas, 450, 250, 5.5, 'olive')

  drawFlowers(ctx, canvas, 50, 375, 7, 'pink')
  drawFlowers(ctx, canvas, 400, 200, 5, 'blue')

  //draw painting
  drawPainting(ctx, canvas)
}
//document.addEventListener('DOMContentLoaded', Cartoon.draw);

Cartoon.clear = function () {
  Cartoon.ctx.clearRect(0, 0, Cartoon.canvas.width, Cartoon.canvas.height)
}

Cartoon.mainloop = function () {
  Cartoon.clear()
  Cartoon.update()
  Cartoon.draw()
  window.setTimeout(Cartoon.mainloop, 1000 / 60)
}

//draw middle road
function drawMiddleRoad(ctx, canvas) {
  ctx.fillStyle = '#FCC9B9'
  ctx.beginPath()
  ctx.moveTo(canvas.width / 2 - 25, canvas.height / 2.5)
  ctx.lineTo(canvas.width / 2 + 25, canvas.height / 2.5)
  ctx.lineTo(canvas.width / 2 + 200, canvas.height)
  ctx.lineTo(canvas.width / 2 - 200, canvas.height)
  ctx.lineTo(canvas.width / 2 - 200, canvas.height)
  ctx.closePath()
  ctx.fill()
}

//draw sun
function drawSun(ctx, canvas) {
  ctx.beginPath()
  ctx.fillStyle = '#FFFFBF'
  ctx.arc(canvas.width / 2, canvas.height / 5, 23, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.fillStyle = 'yellow'
  ctx.arc(canvas.width / 2, canvas.height / 5, 20, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath()
}

//draw fence
function drawWoodenFence(ctx, canvas) {
  ctx.fillStyle = '#b5651d'
  ctx.fillRect(0, canvas.height / 2.75, canvas.width, 7)
  // ctx.strokeStyle = 'black';
  // ctx.strokeRect(0, canvas.height/2.75, canvas.width, 7);
  for (var i = 3; i < canvas.width; i += 10) {
    ctx.fillRect(i, canvas.height / 2.65, 5, 11)
  }
}

//Draw clouds
function drawClouds(ctx, canvas) {
  //left side
  ctx.fillStyle = '#FFFFFF'
  ctx.beginPath()
  ctx.ellipse(
    Cartoon.cloud1Pos,
    canvas.height / 8 + 20,
    100,
    20,
    0,
    2 * Math.PI,
    0
  )
  ctx.ellipse(
    Cartoon.cloud1Pos + 70,
    canvas.height / 8,
    100,
    20,
    0,
    2 * Math.PI,
    0
  )
  ctx.fill()
  ctx.closePath()

  //right side
  ctx.fillStyle = '#FFFFFF'
  ctx.beginPath()
  ctx.ellipse(Cartoon.cloud2Pos, canvas.height / 8, 100, 20, 0, 2 * Math.PI, 0)
  ctx.ellipse(
    Cartoon.cloud2Pos + 70,
    canvas.height / 8 - 20,
    100,
    20,
    0,
    2 * Math.PI,
    0
  )
  ctx.fill()
  ctx.closePath()
  // ctx.beginPath();
  // ctx.ellipse(canvas.width/6-20, canvas.height/8-20, 100, 20, 0,  2*Math.PI, 0);
  // ctx.ellipse(canvas.width/6+50, canvas.height/8, 100, 20, 0,  2*Math.PI, 0);
  // ctx.fill();
}

function drawWater(ctx, canvas) {
  //create water on horizon;
  // ctx.fillStyle = 'blue';
  // ctx.fillRect(0, canvas.height/3.25, canvas.width, canvas.height);

  //work on making this gradiented sparkling water
  var width = canvas.width

  for (var j = 0; j < 20; j++) {
    // ctx.fillStyle = 'rgb(' + (255-i*255/20)  + ',' + 0 +','+ 255 +')';

    ctx.fillStyle = 'rgb(' + 0 + ',' + 100 + ',' + (255 - (j * 255) / 20) + ')'
    ctx.fillRect(0, canvas.height / 3.3 + (100 / 20) * j, width, 100)
  }
}
/*
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      // ctx.fillStyle = 'rgb(' + (255-i*255/20)  + ',' + 0 +','+ 255 +')';

       ctx.fillStyle = 'rgb(' + 0  + ',' + 0 +','+(255-j*255/20) +')';
      ctx.fillRect(j*width/20, canvas.height/3.25+i, width/20, width/20);
    }
  }
  */
//f5f2d0
function drawHouse(ctx, canvas) {
  // ctx.fillStyle = '#F47983';
  //back wall of house
  let upperx = canvas.width / 14 //71.42
  let uppery = canvas.height - 300 //200
  ctx.fillRect(upperx + 70, uppery - 70, canvas.width / 5, canvas.width / 5)
  ctx.fillStyle = 'pink'
  //front wall of house
  ctx.fillRect(upperx, uppery, canvas.width / 5, canvas.width / 5)
  ctx.strokeRect(upperx, uppery, canvas.width / 5, canvas.width / 5)

  // //top wall
  // ctx.beginPath();
  // ctx.moveTo(upperx+canvas.width/5, lowery+canvas.width/5);
  // ctx.lineTo(lowerx+50+canvas.width/5, lowery-60+canvas.width/5);
  // ctx.lineTo(canvas.width/14+50+canvas.width/5, canvas.height-360);
  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310);
  // ctx.lineTo(canvas.width/14, canvas.height-310);

  //side wall
  ctx.fillStyle = 'pink'
  ctx.beginPath()
  ctx.moveTo(upperx + canvas.width / 5, uppery)
  ctx.lineTo(upperx + canvas.width / 5, uppery + canvas.width / 5)
  ctx.lineTo(upperx + canvas.width / 5 + 70, uppery + canvas.width / 5 - 70)
  ctx.lineTo(upperx + canvas.width / 5 + 70, uppery - 70)
  ctx.lineTo(upperx + canvas.width / 5, uppery)

  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310+canvas.width/5);
  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  drawRoof(ctx, canvas, upperx, uppery)

  drawWindows(ctx, canvas, upperx, uppery)

  drawDoors(ctx, canvas, upperx, uppery)
}

function drawRoof(ctx, canvas, upperx, uppery) {
  //draw roof: back triangle
  ctx.beginPath()
  ctx.moveTo(upperx + 70 - 10, uppery - 70)
  ctx.lineTo(upperx + 70 + canvas.width / 5 + 5, uppery - 70)
  ctx.lineTo(upperx + 70 + canvas.width / 5 / 2, uppery / 3 - 30)
  ctx.lineTo(upperx + 70 - 10, uppery - 70)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  //draw roof: front triangle
  ctx.fillStyle = '#cb4154'
  ctx.beginPath()
  ctx.moveTo(upperx - 10, uppery)
  ctx.lineTo(upperx + canvas.width / 5 + 10, uppery)
  ctx.lineTo(upperx + canvas.width / 5 / 2, uppery / 3)
  ctx.lineTo(upperx - 10, uppery)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.fillStyle = '#f5f2d0'
  ctx.beginPath()
  ctx.moveTo(upperx, uppery)
  ctx.lineTo(upperx + canvas.width / 5, uppery)
  ctx.lineTo(upperx + canvas.width / 5 / 2, uppery / 3 + 10)
  ctx.lineTo(upperx, uppery)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.fillStyle = 'pink'
  ctx.beginPath()
  ctx.moveTo(upperx, uppery + 2)
  ctx.lineTo(upperx + canvas.width / 5, uppery + 2)
  ctx.lineTo(upperx + canvas.width / 5 / 2, uppery / 3 + 10)
  ctx.lineTo(upperx, uppery + 2)
  ctx.fill()
  ctx.closePath()

  //side roof
  ctx.fillStyle = '#cb4154'
  ctx.beginPath()
  ctx.moveTo(upperx + canvas.width / 5 / 2, uppery / 3)
  ctx.lineTo(upperx + 70 + canvas.width / 5 / 2, uppery / 3 - 30)
  ctx.lineTo(upperx + 70 + canvas.width / 5 + 5, uppery - 70)
  ctx.lineTo(upperx + canvas.width / 5 + 10, uppery)
  ctx.lineTo(upperx + canvas.width / 5 / 2, uppery / 3)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

function drawWindows(ctx, canvas, upperx, uppery) {
  //circle attic window
  ctx.fillStyle = 'darkgray'
  ctx.beginPath()
  ctx.arc(upperx + canvas.width / 5 / 2, uppery - 30 - 15, 40, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fill()

  //ctx.strokeStyle = 'slategray'
  ctx.beginPath()
  ctx.fillStyle = 'lightgray'
  ctx.arc(upperx + canvas.width / 5 / 2, uppery - 30 - 15, 30, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.fillStyle = 'darkgray'
  ctx.fillRect(upperx + canvas.width / 5 / 2 - 35, uppery - 30 - 15, 70, 10)

  ctx.fillStyle = 'darkgray'
  ctx.fillRect(upperx + canvas.width / 5 / 2 - 7, uppery - 30 - 35 - 15, 10, 70)

  ctx.fillStyle = 'lightgray'
  ctx.fillRect(upperx + canvas.width / 5 / 2 - 95, uppery + 110, 50, 70)
  ctx.strokeRect(upperx + canvas.width / 5 / 2 - 95, uppery + 110, 50, 70)

  ctx.fillStyle = 'lightgray'
  ctx.fillRect(upperx + canvas.width / 5 / 2 + 45, uppery + 110, 50, 70)
  ctx.strokeRect(upperx + canvas.width / 5 / 2 + 45, uppery + 110, 50, 70)

  //middle windows
  ctx.fillStyle = 'lightgrayl'
  ctx.fillRect(upperx + canvas.width / 5 / 2 - 80, uppery + 15, 50, 70)
  ctx.strokeRect(upperx + canvas.width / 5 / 2 - 80, uppery + 15, 50, 70)

  //middle line
  ctx.strokeRect(upperx + canvas.width / 5 / 2 - 80, uppery + 15 + 35, 50, 1)

  ctx.fillStyle = '#d2b48c'
  ctx.fillRect(
    upperx + canvas.width / 5 / 2 - 105,
    uppery + 10,
    25,
    (80 / 8) * 8
  )
  ctx.fillRect(
    upperx + canvas.width / 5 / 2 - 30,
    uppery + 10,
    25,
    (80 / 8) * 8
  )
  //to make lined window cover

  for (let i = 0; i <= 8; i++) {
    ctx.strokeRect(
      upperx + canvas.width / 5 / 2 - 105,
      uppery + 10,
      25,
      (80 / 8) * i
    )
    ctx.strokeRect(
      upperx + canvas.width / 5 / 2 - 30,
      uppery + 10,
      25,
      (80 / 8) * i
    )
  }

  //middle windows 2
  ctx.fillStyle = 'lightgray'
  ctx.fillRect(upperx + canvas.width / 5 / 2 + 25, uppery + 15, 50, 70)
  ctx.strokeRect(upperx + canvas.width / 5 / 2 + 25, uppery + 15, 50, 70)

  //middle line
  ctx.strokeRect(upperx + canvas.width / 5 / 2 + 25, uppery + 15 + 35, 50, 1)

  ctx.fillStyle = '#d2b48c'
  ctx.fillRect(upperx + canvas.width / 5 / 2, uppery + 10, 25, (80 / 8) * 8)
  ctx.fillRect(
    upperx + canvas.width / 5 / 2 + 75,
    uppery + 10,
    25,
    (80 / 8) * 8
  )
  //to make lined window cover

  for (let i = 0; i <= 8; i++) {
    ctx.strokeRect(upperx + canvas.width / 5 / 2, uppery + 10, 25, (80 / 8) * i)
    ctx.strokeRect(
      upperx + canvas.width / 5 / 2 + 75,
      uppery + 10,
      25,
      (80 / 8) * i
    )
  }
  ctx.strokeStyle = 'black'
}

function drawDoors(ctx, canvas, upperx, uppery) {
  ctx.fillStyle = '#d2b48c'
  ctx.fillRect(
    upperx + canvas.width / 5 / 2 - 30,
    uppery - canvas.width / 5 / 2 + 230,
    60,
    100
  )
  ctx.strokeRect(
    upperx + canvas.width / 5 / 2 - 30,
    uppery - canvas.width / 5 / 2 + 230,
    60,
    100
  )

  ctx.fillStyle = 'darkgray'
  ctx.beginPath()
  ctx.arc(
    upperx + canvas.width / 5 / 2 - 20,
    uppery - canvas.width / 5 / 2 + 290,
    5,
    0,
    Math.PI * 2
  )
  ctx.fill()
  ctx.closePath()
}

function drawPainting(ctx, canvas) {
  ctx.fillStyle = 'tan'
  ctx.fillRect(890, 320, 15, 150)
  ctx.strokeRect(890, 320, 15, 150)

  ctx.fillRect(945, 320, 15, 150)
  ctx.strokeRect(945, 320, 15, 150)

  // ctx.fillRect(917, 315, 13, 125);
  // ctx.strokeRect( 917, 315, 13, 125);

  let width = 100
  let numSquares = 4
  for (var i = 0; i < numSquares; i++) {
    for (var j = 0; j < numSquares; j++) {
      ctx.fillStyle =
        'rgb(' +
        (255 - (i * 255) / numSquares) +
        ',' +
        (255 - (j * 255) / numSquares) +
        ',' +
        (255 - (i * 255) / numSquares) +
        ')'
      ctx.fillRect(
        950 - (i * width) / numSquares,
        400 - (j * width) / numSquares,
        width / numSquares,
        width / numSquares
      )
    }
  }
  ctx.strokeRect(875, 325, width, width)
}

function drawFlowers(ctx, canvas, centerX, centerY, radius, color) {
  // let centerX = 800;
  // let centerY = 200;
  // let radius = 10;
  // let radiusY = 10;

  ctx.beginPath()
  // ctx.strokeStyle = "darkgreen"
  // ctx.Wed = 2;
  ctx.moveTo(centerX - radius, centerY / 0.99)
  ctx.bezierCurveTo(
    centerX,
    centerY,
    centerX - radius * 3,
    centerY + radius * 3,
    centerX,
    centerY + radius * 4
  )
  ctx.stroke()
  //ctx.strokeStyle = "black";

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.moveTo(centerX - radius * 2.1, centerY)
  ctx.arc(centerX - radius * 2.1, centerY, radius, 0, Math.PI * 2)
  ctx.moveTo(centerX - radius, centerY - radius)
  ctx.arc(centerX - radius, centerY - radius, radius, 0, Math.PI * 2)
  ctx.moveTo(centerX - radius / 2.2, centerY + radius * 1.1)
  ctx.arc(
    centerX - radius / 2.2,
    centerY + radius * 1.1,
    radius,
    0,
    Math.PI * 2
  )
  ctx.moveTo(centerX - radius * 1.5, centerY + radius * 1.1)
  ctx.arc(
    centerX - radius * 1.5,
    centerY + radius * 1.1,
    radius,
    0,
    Math.PI * 2
  )

  // ctx.ellipse(centerX, centerY+radiusY, radiusX, radiusY, Math.PI, 0, Math.PI*2)
  // ctx.moveTo(centerX, centerY-radiusY)
  // ctx.ellipse(centerX, centerY-radiusY, radiusX, radiusY, Math.PI, 0, Math.PI*2)
  // ctx.moveTo(centerX-radiusX*2, centerY)
  // ctx.ellipse(centerX-radiusX*2, centerY, radiusX, radiusY, Math.PI/2, 0, Math.PI*2)
  // ctx.moveTo(centerX+radiusX*2, centerY)
  // ctx.ellipse(centerX+radiusX*2, centerY, radiusX, radiusY, Math.PI/2, 0, Math.PI*2)
  // ctx.moveTo(centerX, centerY)
  // ctx.ellipse(centerX-radiusX*2, centerY+radiusY/2, radiusX, radiusY, Math.PI/6, 0, Math.PI*2)
  // ctx.ellipse(centerX-radiusX, centerY+radiusY, radiusX, radiusY, Math.PI/3, 0, Math.PI*2)
  ctx.stroke()
  ctx.fill()

  ctx.beginPath()
  ctx.fillStyle = 'gold'
  ctx.arc(centerX - radius, centerY / 0.99, radius, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()
}
