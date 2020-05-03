var canvas = undefined;
var ctx = undefined;

var voiceObjects = {
  radius: 25
}

function start () {
  canvas = document.getElementById('audio-canvas');
  ctx = canvas.getContext('2d');

  mainLoop();

}

document.addEventListener('DOMContentLoaded', start);

function update () {


}

function draw () {
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black'
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, voiceObjects.radius, 0, Math.PI*2, true)
  ctx.fill();


}

function mainLoop () {
  update();
  draw();
  window.setTimeout(mainLoop, 1000 / 5);
}

var speechButtonFlag = true;

function toggleSpeechButton(){
  if(speechButtonFlag)
    $('#speak-button').html("Speak")
  else
     $('#speak-button').html("Stop")

  speechButtonFlag = !speechButtonFlag;
}
