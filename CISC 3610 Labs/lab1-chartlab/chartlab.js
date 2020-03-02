var canvas;
var ctx;

let setup = {
  barWidth: undefined,
  barxstart: undefined,
  barThickness: undefined,
  lineHeight: undefined,
  currentLine: undefined,
  nameWidth: undefined,
  namexStart: undefined,
  nameHeigh: undefined
}


let fruits = [
  {name: "     apples", quantity: 20, color: "red"},
  {name: "    oranges", quantity: 10, color: "orange"},
  {name: "    bananas", quantity: 15, color: "yellow"},
  {name: "      kiwis", quantity: 3, color: "green"},
  {name: "blueberries", quantity: 5, color: "blue"},
  {name: "     grapes", quantity: 8, color: "purple"}
];

function start () {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setup.barWidth = canvas.width * 0.70 / 21;
    setup.barxstart = canvas.width * 0.30;
    setup.lineHeight = canvas.height / 16;
    setup.currentLine = 3;
    setup.nameWidth = canvas.width * 0.30;
    setup.namexStart = setup.nameWidth * 0.1;
    console.log(setup)
    //setup.barThickness;
    ctx.fillStyle = "black";
    ctx.font = '45px Monaco';
    ctx.fillText("Fruit Bars", canvas.width * 0.3, setup.lineHeight * 2)
    drawAllFruitBars();
}




function drawFruitBar(name, numFruits, color) {

  ctx.fillStyle = color;
  ctx.fillRect(setup.barxstart,
              setup.lineHeight * setup.currentLine,
              setup.barWidth * numFruits,
              setup.lineHeight );
  ctx.font = '23px Monaco';
   ctx.fillText(name, setup.namexStart, setup.lineHeight * setup.currentLine + setup.lineHeight / 1.5);

  setup.currentLine = setup.currentLine + 2;

}


function drawAllFruitBars () {

  for (let fruit of fruits) {
    drawFruitBar(fruit.name, fruit.quantity, fruit.color);
  }

}

document.addEventListener('DOMContentLoaded', start);
