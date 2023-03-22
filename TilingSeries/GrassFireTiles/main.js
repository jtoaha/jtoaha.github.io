/**

Title: Grassfire Tiles

Description: When you click on a tile, color spreads to the rest of the tiles. Underlying it it uses a grassfire algorithm
Libraries used: p5.js

Author: Jamila Toaha
Date: 03/20/23

*/

/*------ TILE CLASS ------ */

class Tile {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  setHeight(height) {
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }
  setColor(color) {
    this.color = color;
  }

  drawSquare() {
    fill(color(this.color.r, this.color.g, this.color.b));
    square(this.x, this.y, this.height);
  }

  handleColorOnClick(mouseX, mouseY, generateRandomColor) {
    let isWithinWidth = mouseX >= this.x && mouseX <= this.x + this.width;
    let isWithinHeight = mouseY >= this.y && mouseY <= this.y + this.height;
    if (isWithinWidth && isWithinHeight) {
      this.color = generateRandomColor();
    }
  }
}

/*------ HELPER FUNCTIONS  -------*/

let generateRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return { r: r, g: g, b: b };
};

// Adjust Canvas size, so grid does not have any overflowing or cut off tiles. Account for stroke pixels and gap on grid boundaries.
const adjustCanvasOverflow = () => {
  let numTiles = Math.floor(canvasWidth / (tileWidth + gap));
  canvasWidth = numTiles * (tileWidth + gap) - gap + tileStroke;
  numTiles = Math.floor(canvasHeight / (tileHeight + gap));
  canvasHeight = numTiles * (tileHeight + gap) - gap + tileStroke;
};

// Set up Tiles across grid and save information for each tile in a grid that can be accessed later
function setupTiles() {
  let row = 0;
  for (let y = 1; y < canvasHeight; y += tileHeight + gap) {
    grid[row] = [];
    for (let x = 1; x < canvasWidth; x += tileWidth + gap) {
      let square = new Tile(x, y, tileWidth, tileHeight, tileColor);
      grid[row].push(square);
    }
    row++;
  }
}

function drawTiles() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currentTile = grid[i][j];
      currentTile.drawSquare();
    }
  }
}
/*------ GLOBAL VARIABLES -------*/

let backgroundColor;

// Canvas Attributes
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// Grid Attributes
let tileWidth = 60;
let tileHeight = 60;
let tileStroke = 1;
let gap = 10;
let tileColor = generateRandomColor();
let numRows;
let numColumns;
let grid = [];

/*------ SET UP -------*/

function setup() {
  adjustCanvasOverflow();
  backgroundColor = "#fff";
  frameRate(60);
  createCanvas(canvasWidth, canvasHeight);
  setupTiles();
}

function draw() {
  background(backgroundColor);
  drawTiles();
}

function mouseClicked() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let tile = grid[i][j];
      tile.handleColorOnClick(mouseX, mouseY, generateRandomColor);
    }
  }
}

/*
Features:
- [x] 1. Create grid of squares:
        - square length
        - gap 
        - intial color
        [x] only allow full squares to be drawn
- [ ] 2. Make a square clickable
- [ ] 3. Make color of entire grid change 
- [ ] 4. Have color change of grid follow grassfire alogrithm (changes across time)
- [ ] 5. Have colors transition smoothly

*/
