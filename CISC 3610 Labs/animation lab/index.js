/*
Jamila Toaha
- Program animates 0-10 on the canvas when user presses the start button
  - Stops when 10 is reached, and button text is relabeled 'restart'
    - Once clicked, Event Handler is removed from button to prevent multiple calls
    - Once 10 is animated, the Event Handler is assigned again
  - User can press button to restart

Notes:
- I created number sprite sheet using Illustrator
- https://ezgif.com/sprite-cutter
  - Used this site to cut sprite sheet
- https://www.codeandweb.com/free-sprite-sheet-packer
  - Made use of this site to get json values so program could utilize single sprite sheet as a source
*/

let canvas = undefined;
let canvasContext = undefined;
let frameWidth;
let frameHeight;
let currentPosition;
let spritesheet;

let spritesheetJSON = {
    frames: [
      {
        filename: 'tile000.png',
        frame: {
          x: 1,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile001.png',
        frame: {
          x: 153,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile002.png',
        frame: {
          x: 305,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile003.png',
        frame: {
          x: 457,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile004.png',
        frame: {
          x: 609,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile005.png',
        frame: {
          x: 761,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile006.png',
        frame: {
          x: 913,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile007.png',
        frame: {
          x: 1065,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile008.png',
        frame: {
          x: 1217,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile009.png',
        frame: {
          x: 1369,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      },
      {
        filename: 'tile010.png',
        frame: {
          x: 1521,
          y: 1,
          w: 150,
          h: 163
        },
        rotated: false,
        trimmed: false,
        spriteSourceSize: {
          x: 0,
          y: 0,
          w: 150,
          h: 163
        },
        sourceSize: {
          w: 150,
          h: 163
        }
      }
    ],
    meta: {
      app: 'http://www.codeandweb.com/texturepacker',
      version: '1.0',
      image: 'spritesheet.png',
      format: 'RGBA8888',
      size: {
        w: 1672,
        h: 165
      },
      scale: '1'
    }
  }


/*Sets up sprite sheet and canvas*/
function setup(){
  //when user clicks on the start button, countdown will begin
  document.getElementById('start-button').addEventListener('click', start)

  canvas = document.getElementById('myCanvas');
  canvasContext = canvas.getContext('2d')
  spritesheet = new Image();
  spritesheet.src = 'spritesheet.png';
  //width and height of each frame in the spritesheet
  frameWidth = spritesheetJSON.frames[0].frame.w;
  frameHeight = spritesheetJSON.frames[0].frame.h;
  //setting canvas width to twice the width of 1 frame
  canvas.width = frameWidth * 2;
  canvas.height = frameHeight;
  setupColors();
  drawBackground();

}

document.addEventListener('DOMContentLoaded', setup);

/*Kicks off animated Countdown*/
function start(e){
  e.target.removeEventListener(e.type, arguments.callee);
  //currentPosition placed here, so user can restart, if they choose
  currentPosition = 0;
  mainLoop();
}

function update(){
  drawBackground();
}

function draw(){

   //pulls numbers from spritesheet and drawing on canvas
  if (currentPosition < 10) {
    //draws 0-9 on the canvas
    let currentImg = spritesheetJSON.frames[currentPosition];
    canvasContext.drawImage(spritesheet, currentImg.frame.x, currentImg.frame.y, currentImg.frame.w, currentImg.frame.h, canvas.width - frameWidth * 1.5, 0, currentImg.frame.w, currentImg.frame.h);

    currentPosition++;
  } else if (currentPosition === 10) {
    //draws '10' using the 1 and 0 frames
    let currentImg = spritesheetJSON.frames[1];
    canvasContext.drawImage(spritesheet, currentImg.frame.x, currentImg.frame.y, currentImg.frame.w, currentImg.frame.h, frameWidth/4, 0, currentImg.frame.w, currentImg.frame.h);
    currentImg = spritesheetJSON.frames[0];
    canvasContext.drawImage(spritesheet, currentImg.frame.x, currentImg.frame.y, currentImg.frame.w, currentImg.frame.h, frameWidth - frameWidth/4, 0, currentImg.frame.w, currentImg.frame.h);
    currentPosition++;
  }
}

function mainLoop(){

  if (currentPosition < 11){
    update();
    draw();
  }
  else {
    //once reaches the end, relabels start button as 'restart' and exits animation
    document.getElementById('start-button').addEventListener('click', start)
    document.getElementById('start-button').innerText = 'Restart';
    return;
  }
  window.setTimeout(mainLoop, 500);
}

function drawBackground(){
  //canvasContext.fillStyle = document.getElementById('choose-colors').value;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  //center canvas
  //These margins does center canvas based on pixels
  // canvas.style.marginLeft = `${window.innerWidth / 2 - frameWidth}px`;
  // canvas.style.marginRight = `${window.innerWidth / 2 - frameWidth}px`;

    //These margins make centering responsive by using percentage
    let center = `${ (100 - (100 * frameWidth * 2 / window.innerWidth)) / 2}%`
    canvas.style.marginLeft = center;
    canvas.style.marginRight = center;
    document.getElementById('start-button').style.marginLeft = center;
    document.getElementById('start-button').style.marginRight = center;
    document.getElementById('choose-colors').style.marginLeft = center;
    document.getElementById('choose-colors').style.marginRight = center;
    document.getElementById('label-colors').style.marginLeft = center;
    document.getElementById('label-colors').style.marginRight = center;
}
function setupColors(){
  canvasContext.fillStyle = document.getElementById('choose-colors').value;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

}
