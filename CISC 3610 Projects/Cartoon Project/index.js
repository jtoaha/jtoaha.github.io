var Cartoon = {
  canvas: undefined,
  ctx: undefined,
  xPos: 0
};


Cartoon.start = function(){
  // Cartoon.canvas = document.getElementById('my-canvas');
  // Cartoon.ctx = Cartoon.canvas.getContext('2d');
  Cartoon.mainloop();
}

document.addEventListener('DOMContentLoaded', Cartoon.draw);

Cartoon.update = function(color) {
  var time = new Date();
 // let currentTime = time.getTime();
  //Game.xPos =  currentTime % Game.canvas.width;
  if(Cartoon.xPos > Cartoon.canvas.width)
    Cartoon.xPos = 0;

  Cartoon.xPos = Cartoon.xPos + 1;
}

Cartoon.draw = function (color) {
  Cartoon.canvas = document.getElementById('my-canvas');
  Cartoon.ctx = Cartoon.canvas.getContext('2d');
  let ctx = Cartoon.ctx;
  let canvas = Cartoon.canvas;

  //Create sky background
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  //Draw clouds
  ctx.beginPath();
  ctx.fillStyle = '#FFFFFF';
  ctx.ellipse(canvas.width-canvas.width/6, canvas.height/8+20, 100, 20, 0,  2*Math.PI, 0);
  ctx.ellipse(canvas.width-canvas.width/6+70, canvas.height/8, 100, 20, 0,  2*Math.PI, 0);
  ctx.fill();
  //left side
  ctx.beginPath();
  ctx.fillStyle = '#FFFFFF';
  ctx.ellipse(canvas.width/6-20, canvas.height/8, 100, 20, 0,  2*Math.PI, 0);
  ctx.ellipse(canvas.width/6+50, canvas.height/8-20, 100, 20, 0,  2*Math.PI, 0);
  ctx.fill();
  // ctx.beginPath();
  // ctx.ellipse(canvas.width/6-20, canvas.height/8-20, 100, 20, 0,  2*Math.PI, 0);
  // ctx.ellipse(canvas.width/6+50, canvas.height/8, 100, 20, 0,  2*Math.PI, 0);
  // ctx.fill();


  //create water on horizon;
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, canvas.height/3.25, canvas.width, canvas.height);

  //draw groundHorizon and background
  ctx.fillStyle = 'green';
  ctx.fillRect(0, canvas.height/2.5, canvas.width, canvas.height);

  //draw wooden fence
  ctx.fillStyle = '#b5651d';
  ctx.fillRect(0, canvas.height/2.75, canvas.width, 7);
  // ctx.strokeStyle = 'black';
  // ctx.strokeRect(0, canvas.height/2.75, canvas.width, 7);
  for (var i = 3; i < canvas.width; i +=10) {
    ctx.fillRect(i, canvas.height/2.65, 5, 11);
  }

  //draw middle road
  ctx.fillStyle = '#c3c98d';
  ctx.beginPath();
  ctx.moveTo(canvas.width/2-25, canvas.height/2.5);
  ctx.lineTo(canvas.width/2+25, canvas.height/2.5);
  ctx.lineTo(canvas.width/2+200, canvas.height);
  ctx.lineTo(canvas.width/2-200, canvas.height);
  ctx.lineTo(canvas.width/2-200, canvas.height);
  ctx.closePath();
  ctx.fill()

  //draw sun

  ctx.beginPath();
  ctx.fillStyle = '#FFFFBF'
  ctx.arc(canvas.width/2, canvas.height/5, 23, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'yellow' ;
  ctx.arc(canvas.width/2, canvas.height/5, 20, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();




  //draw house
  ctx.fillStyle = 'lightgray';
  //back wall of house
  let upperx = canvas.width/14;
  let uppery = canvas.height-300;
  ctx.fillRect(upperx+70, uppery-75, canvas.width/5, canvas.width/5);
  ctx.fillStyle = 'darkgray';
  //front wall of house
  ctx.fillRect(upperx, uppery, canvas.width/5, canvas.width/5);

  // //top wall
  // ctx.beginPath();
  // ctx.moveTo(upperx+canvas.width/5, lowery+canvas.width/5);
  // ctx.lineTo(lowerx+50+canvas.width/5, lowery-60+canvas.width/5);
  // ctx.lineTo(canvas.width/14+50+canvas.width/5, canvas.height-360);
  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310);
  // ctx.lineTo(canvas.width/14, canvas.height-310);
  // ctx.fill();
  // ctx.closePath();

  //side wall
  ctx.beginPath();
  ctx.moveTo(upperx+canvas.width/5, uppery);
  ctx.lineTo(upperx+canvas.width/5, uppery+canvas.width/5);
  ctx.lineTo(upperx+canvas.width/5+70,uppery+canvas.width/5-75)
  ctx.lineTo(upperx+canvas.width/5+70, uppery-75);
  ctx.lineTo(upperx+canvas.width/5, uppery);

  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310+canvas.width/5);
  // ctx.lineTo(canvas.width/14+canvas.width/5, canvas.height-310)
  ctx.stroke();
  ctx.fill();
  ctx.closePath();


}
document.addEventListener('DOMContentLoaded', Cartoon.draw);
  Cartoon.clear = function() {
    Cartoon.ctx.clearRect(0, 0, Cartoon.canvas.width, Cartoon.canvas.height);
  }

  Cartoon.mainloop = function() {
    Cartoon.clear();
    Cartoon.update();
    Cartoon.draw();
    window.setTimeout(Cartoon.mainloop, 1000 / 60);
  }
