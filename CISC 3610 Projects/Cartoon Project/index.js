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
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //draw groundHorizon and background
  ctx.fillStyle = '#84747c';
  ctx.fillRect(0, canvas.height/2.5, canvas.width, canvas.height);

  //draw middle road
  ctx.fillStyle = '#c3c98d';
  ctx.beginPath();
  ctx.moveTo(canvas.width/2-25, canvas.height/2.5);
  ctx.lineTo(canvas.width/2+25, canvas.height/2.5);
  ctx.lineTo(canvas.width/2+200, canvas.height);
  ctx.lineTo(canvas.width/2-200, canvas.height)
  ctx.closePath();
  ctx.fill()


  //draw house
  ctx.fillStyle = 'lightgray';
  //back wall of house
  ctx.fillRect(canvas.width/14+50, canvas.height-350, canvas.width/5, canvas.width/5);
  ctx.fillStyle = 'darkgray';
  //front wall of house
  ctx.fillRect(canvas.width/14, canvas.height-300, canvas.width/5, canvas.width/5);
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
