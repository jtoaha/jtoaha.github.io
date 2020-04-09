var canvas = undefined;
var canvasContext = undefined;

// set up of spritesheets
var leviSpriteSheet;
var leviCurrentFrame;

var helloKittySpriteSheet;
var helloKittyCurrentFrame;

var linkRunSpriteSheet;
var linkRunCurrentFrame;
var klScale = 2 // scale for Kitty and Link
var klY = 0;

var bb8SpriteSheet;
var bb8CurrentFrame;
var bb8X = 0;

var sashaSpriteSheet;
var sashaCurrentFrame;

var gokuSpriteSheet;
var gokuCurrentFrame;
var gokuX = -140;

var catitudeSpriteSheet;
var catitudeCurrentFrame;
var catitudeX = 100;

var ppgWalkSpriteSheet;
var ppgWalkCurrentFrame;
var ppgWalkX = 100;

var roxasSpriteSheet;
var roxasCurrentFrame;
var roxasX = 200;




var sailorWindSpriteSheet;
var sailorWindCurrentFrame;

function start () {
  canvas = document.getElementById('my-canvas');
  canvasContext = canvas.getContext('2d');

  //set up Levi
  leviSpriteSheet = new Image();
  leviSpriteSheet.src = './assets/levi.png';
  leviCurrentFrame = 0;

  //set up Hello Kitty
  helloKittySpriteSheet = new Image();
  helloKittySpriteSheet.src = './assets/hello-kitty-bike.png'
  helloKittyCurrentFrame = 0;

  //set up Link running
  linkRunSpriteSheet = new Image();
  linkRunSpriteSheet.src = './assets/link-run.png';
  linkRunCurrentFrame = 0;

  //set up bb8
  bb8SpriteSheet = new Image();
  bb8SpriteSheet.src = './assets/bb8-rolling.png';
  bb8CurrentFrame = 0;

  //set up cat with attitude
  catitudeSpriteSheet = new Image();
  catitudeSpriteSheet.src = './assets/cat-attitude.png';
  catitudeCurrentFrame = 0;

  //set up Sasha
    sashaSpriteSheet = new Image();
    sashaSpriteSheet.src = './assets/sasha.png';
    sashaCurrentFrame = 0;

  //set up kid Goku
  gokuSpriteSheet = new Image();
  gokuSpriteSheet.src = './assets/goku-juggling.png';
  gokuCurrentFrame = 0;

  //set up Powerpuff girls walking
  ppgWalkSpriteSheet = new Image();
  ppgWalkSpriteSheet.src = './assets/ppg-walking.png';
  ppgWalkCurrentFrame = 0;

  //Roxas walking
  roxasSpriteSheet = new Image();
  roxasSpriteSheet.src = './assets/roxas.png';
  roxasCurrentFrame = 0;

  //Sailor Moon
  sailorWindSpriteSheet = new Image();
  sailorWindSpriteSheet.src = './assets/sailor-wind.png';
  sailorWindCurrentFrame = 0;

  mainLoop();

}

document.addEventListener('DOMContentLoaded', start);

function update () {
  leviCurrentFrame = Math.abs(leviCurrentFrame + -1);

  if (helloKittyCurrentFrame < helloKittyJSON.frames.length - 1) helloKittyCurrentFrame++;
  else helloKittyCurrentFrame = 0;

  if (linkRunCurrentFrame < linkRunJSON.frames.length - 3) linkRunCurrentFrame += 3;
  else linkRunCurrentFrame = 0;

  klY+=2;

  //adjust bb8 position across screen
  if (bb8CurrentFrame < bb8JSON.frames.length - 1) bb8CurrentFrame++;
  else bb8CurrentFrame = 0;

  bb8X += 20;

  //adjust Sasha frame
  if (sashaCurrentFrame < sashaJSON.frames.length - 1) sashaCurrentFrame++;
  else sashaCurrentFrame = 0;

  //adjust Goku frame
  if (gokuCurrentFrame < gokuJSON.frames.length - 1) gokuCurrentFrame++;
  else gokuCurrentFrame = 0;
  gokuX++;

  //adjust Goku frame
  if (catitudeCurrentFrame < catitudeJSON.frames.length - 1) catitudeCurrentFrame++;
  else catitudeCurrentFrame = 0;
  catitudeX--;

  //adjust Power Puff Girls walking frame
  if (ppgWalkCurrentFrame < ppgWalkJSON.frames.length - 1) ppgWalkCurrentFrame++;
  else ppgWalkCurrentFrame = 0;
  ppgWalkX-=3;

  //adjust Roxas frame
  if (roxasCurrentFrame < roxasJSON.frames.length - 1) roxasCurrentFrame++;
  else roxasCurrentFrame = 0;
  roxasX-=35;

  //adjust Sailor Moon frame
  if (sailorWindCurrentFrame < sailorWindJSON.frames.length - 1) sailorWindCurrentFrame++;
  else sailorWindCurrentFrame = 0;

}

function draw () {
  canvasContext.fillStyle = 'skyblue';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  //draw grass
  drawGrass();

  //setup


  //draw Sailor Moon
  let currentSailorWind = sailorWindJSON.frames[sailorWindCurrentFrame];
  canvasContext.drawImage(sailorWindSpriteSheet,
    currentSailorWind.frame.x, currentSailorWind.frame.y,
    currentSailorWind.frame.w, currentSailorWind.frame.h,
    canvas.width-400, 10,
    currentSailorWind.frame.w / 2.25, currentSailorWind.frame.h / 2.25);



  //draw Hello Kitty
  let currentHelloKitty = helloKittyJSON.frames[helloKittyCurrentFrame];
  canvasContext.drawImage(helloKittySpriteSheet,
    currentHelloKitty.frame.x, currentHelloKitty.frame.y,
    currentHelloKitty.frame.w, currentHelloKitty.frame.h,
    canvas.width / 2, 40 + klY,
    currentHelloKitty.frame.w / klScale, currentHelloKitty.frame.h / klScale);


  //draw Link running
  let currentLinkRun = linkRunJSON.frames[linkRunCurrentFrame];
  canvasContext.drawImage(linkRunSpriteSheet,
    currentLinkRun.frame.x, currentLinkRun.frame.y,
    currentLinkRun.frame.w, currentLinkRun.frame.h,
    canvas.width / 2 - 125, 0 + klY,
    currentLinkRun.frame.w / klScale / 1.5, currentLinkRun.frame.h / klScale / 1.5);

  //draw bb8
  let currentbb8 = bb8JSON.frames[bb8CurrentFrame];
  canvasContext.drawImage(bb8SpriteSheet,
    currentbb8.frame.x, currentbb8.frame.y,
    currentbb8.frame.w, currentbb8.frame.h,
    canvas.width - bb8X, 200,
    currentbb8.frame.w / 1.5, currentbb8.frame.h / 1.5);

  //draw Powerpuff girls walking with teacher
  let currentppgWalk = bb8JSON.frames[ppgWalkCurrentFrame];
  canvasContext.drawImage(ppgWalkSpriteSheet,
    currentppgWalk.frame.x, currentppgWalk.frame.y,
    currentppgWalk.frame.w, currentppgWalk.frame.h,
    canvas.width + ppgWalkX, 175,
    currentppgWalk.frame.w / 2, currentppgWalk.frame.h / 2 );

  //draw Goku juggling dragon balls
    let currentGoku = gokuJSON.frames[gokuCurrentFrame];
    canvasContext.drawImage(gokuSpriteSheet,
      currentGoku.frame.x, currentGoku.frame.y,
      currentGoku.frame.w, currentGoku.frame.h,
      0 + gokuX, 0,
      currentGoku.frame.w / 1.5, currentGoku.frame.h / 1.5);

  //draw Roxas running
  let currentRoxas = roxasJSON.frames[roxasCurrentFrame];
  canvasContext.drawImage(roxasSpriteSheet,
    currentRoxas.frame.x, currentRoxas.frame.y,
    currentRoxas.frame.w, currentRoxas.frame.h,
    canvas.width + roxasX, 200,
    currentRoxas.frame.w/1.2, currentRoxas.frame.h/1.2);

  //draw cat with attitude
  let currentCatitude = catitudeJSON.frames[catitudeCurrentFrame];
  canvasContext.drawImage(catitudeSpriteSheet,
    currentCatitude.frame.x, currentCatitude.frame.y,
    currentCatitude.frame.w, currentCatitude.frame.h,
    canvas.width + catitudeX, 400,
    currentCatitude.frame.w / 4, currentCatitude.frame.h / 4);


  //draw Sasha
  let currentSasha = sashaJSON.frames[sashaCurrentFrame];
  canvasContext.drawImage(sashaSpriteSheet,
    currentSasha.frame.x, currentSasha.frame.y,
    currentSasha.frame.w, currentSasha.frame.h,
    canvas.width - 300, 0,
    currentSasha.frame.w / 1.5, currentSasha.frame.h / 1.5);

  //draw Levi
  let currentLevi = leviJSON.frames[leviCurrentFrame];
  canvasContext.drawImage(leviSpriteSheet,
    currentLevi.frame.x, currentLevi.frame.y,
    currentLevi.frame.w, currentLevi.frame.h,
    0, 310,
    currentLevi.frame.w / 1.5, currentLevi.frame.h / 1.5);

}

function mainLoop () {
  update();
  draw();
  window.setTimeout(mainLoop, 1000 / 5);
}


/*==============HELPER FUNCTIONS===========*/
function drawGrass(){
  var gradient = canvasContext.createLinearGradient(0, 150, 0, canvas.height);

  // Add three color stops
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(0.5, '#90ee90');
  gradient.addColorStop(1, '#90ee90');

  // Set the fill style and draw a rectangle
  canvasContext.fillStyle = gradient;
  canvasContext.fillRect(0, 150, canvas.width, canvas.height);
}

/*===============JSON FILES============*/

var bb8JSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.04s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_01_delay-0.04s.gif',
			frame: {
				x: 503,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_02_delay-0.04s.gif',
			frame: {
				x: 1005,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_03_delay-0.04s.gif',
			frame: {
				x: 1507,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_04_delay-0.04s.gif',
			frame: {
				x: 2009,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_05_delay-0.04s.gif',
			frame: {
				x: 2511,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_06_delay-0.04s.gif',
			frame: {
				x: 3013,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_07_delay-0.04s.gif',
			frame: {
				x: 3515,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_08_delay-0.04s.gif',
			frame: {
				x: 4017,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_09_delay-0.04s.gif',
			frame: {
				x: 4519,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_10_delay-0.04s.gif',
			frame: {
				x: 5021,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_11_delay-0.04s.gif',
			frame: {
				x: 5523,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		},
		{
			filename: 'frame_12_delay-0.04s.gif',
			frame: {
				x: 6025,
				y: 1,
				w: 500,
				h: 208
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 208
			},
			sourceSize: {
				w: 500,
				h: 208
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 6526,
			h: 210
		},
		scale: '1'
	}
}

var bpFlipJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.07s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_01_delay-0.21s.gif',
			frame: {
				x: 303,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_02_delay-0.07s.gif',
			frame: {
				x: 605,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_03_delay-0.07s.gif',
			frame: {
				x: 907,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_04_delay-0.07s.gif',
			frame: {
				x: 1209,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_05_delay-0.07s.gif',
			frame: {
				x: 1511,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_06_delay-0.07s.gif',
			frame: {
				x: 1813,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_07_delay-0.07s.gif',
			frame: {
				x: 2115,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_08_delay-0.07s.gif',
			frame: {
				x: 2417,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_09_delay-0.07s.gif',
			frame: {
				x: 2719,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_10_delay-0.07s.gif',
			frame: {
				x: 3021,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_11_delay-0.07s.gif',
			frame: {
				x: 3323,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_12_delay-0.07s.gif',
			frame: {
				x: 3625,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_13_delay-0.49s.gif',
			frame: {
				x: 3927,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 4228,
			h: 302
		},
		scale: '1'
	}
}

var bpRunJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.07s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_01_delay-0.07s.gif',
			frame: {
				x: 303,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_02_delay-0.07s.gif',
			frame: {
				x: 605,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_03_delay-0.07s.gif',
			frame: {
				x: 907,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_04_delay-0.07s.gif',
			frame: {
				x: 1209,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_05_delay-0.07s.gif',
			frame: {
				x: 1511,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_06_delay-0.07s.gif',
			frame: {
				x: 1813,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_07_delay-0.07s.gif',
			frame: {
				x: 2115,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_08_delay-0.07s.gif',
			frame: {
				x: 2417,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_09_delay-0.07s.gif',
			frame: {
				x: 2719,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_10_delay-0.07s.gif',
			frame: {
				x: 3021,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		},
		{
			filename: 'frame_11_delay-0.07s.gif',
			frame: {
				x: 3323,
				y: 1,
				w: 300,
				h: 300
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 300,
				h: 300
			},
			sourceSize: {
				w: 300,
				h: 300
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 3624,
			h: 302
		},
		scale: '1'
	}
}

var catitudeJSON = {
	frames: [
		{
			filename: 'tile000.png',
			frame: {
				x: 1,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile001.png',
			frame: {
				x: 483,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile002.png',
			frame: {
				x: 965,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile003.png',
			frame: {
				x: 1447,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile004.png',
			frame: {
				x: 1929,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile005.png',
			frame: {
				x: 2411,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile006.png',
			frame: {
				x: 2893,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		},
		{
			filename: 'tile007.png',
			frame: {
				x: 3375,
				y: 1,
				w: 480,
				h: 320
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 480,
				h: 320
			},
			sourceSize: {
				w: 480,
				h: 320
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 3856,
			h: 322
		},
		scale: '1'
	}
}

var gameBoyWalkJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.1s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_01_delay-0.1s.gif',
			frame: {
				x: 503,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_02_delay-0.1s.gif',
			frame: {
				x: 1005,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_03_delay-0.1s.gif',
			frame: {
				x: 1507,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_04_delay-0.1s.gif',
			frame: {
				x: 2009,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_05_delay-0.1s.gif',
			frame: {
				x: 2511,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_06_delay-0.1s.gif',
			frame: {
				x: 3013,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_07_delay-0.1s.gif',
			frame: {
				x: 3515,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_08_delay-0.1s.gif',
			frame: {
				x: 4017,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_09_delay-0.1s.gif',
			frame: {
				x: 4519,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_10_delay-0.1s.gif',
			frame: {
				x: 5021,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_11_delay-0.1s.gif',
			frame: {
				x: 5523,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_12_delay-0.1s.gif',
			frame: {
				x: 6025,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		},
		{
			filename: 'frame_13_delay-0.1s.gif',
			frame: {
				x: 6527,
				y: 1,
				w: 500,
				h: 500
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 500
			},
			sourceSize: {
				w: 500,
				h: 500
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 7028,
			h: 502
		},
		scale: '1'
	}
}

var gokuJSON = {
	frames: [
		{
			filename: 'frame_0_delay-0.1s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_1_delay-0.1s.gif',
			frame: {
				x: 223,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_2_delay-0.1s.gif',
			frame: {
				x: 445,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_3_delay-0.1s.gif',
			frame: {
				x: 667,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_4_delay-0.1s.gif',
			frame: {
				x: 889,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_5_delay-0.1s.gif',
			frame: {
				x: 1111,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_6_delay-0.1s.gif',
			frame: {
				x: 1333,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		},
		{
			filename: 'frame_7_delay-0.1s.gif',
			frame: {
				x: 1555,
				y: 1,
				w: 220,
				h: 286
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 220,
				h: 286
			},
			sourceSize: {
				w: 220,
				h: 286
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 1776,
			h: 288
		},
		scale: '1'
	}
}

const helloKittyJSON = {
	frames: [
		{
			filename: 'frame_0_delay-0.2s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 240,
				h: 240
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 240,
				h: 240
			},
			sourceSize: {
				w: 240,
				h: 240
			}
		},
		{
			filename: 'frame_1_delay-0.1s.gif',
			frame: {
				x: 243,
				y: 1,
				w: 240,
				h: 240
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 240,
				h: 240
			},
			sourceSize: {
				w: 240,
				h: 240
			}
		},
		{
			filename: 'frame_2_delay-0.2s.gif',
			frame: {
				x: 485,
				y: 1,
				w: 240,
				h: 240
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 240,
				h: 240
			},
			sourceSize: {
				w: 240,
				h: 240
			}
		},
		{
			filename: 'frame_3_delay-0.1s.gif',
			frame: {
				x: 727,
				y: 1,
				w: 240,
				h: 240
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 240,
				h: 240
			},
			sourceSize: {
				w: 240,
				h: 240
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 968,
			h: 242
		},
		scale: '1'
	}
}

//Levi cleaning json for spritesheet
const leviJSON = {
	frames: [
		{
			filename: 'tile000.png',
			frame: {
				x: 1,
				y: 1,
				w: 265,
				h: 357
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 265,
				h: 357
			},
			sourceSize: {
				w: 265,
				h: 357
			}
		},
		{
			filename: 'tile001.png',
			frame: {
				x: 268,
				y: 1,
				w: 265,
				h: 357
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 265,
				h: 357
			},
			sourceSize: {
				w: 265,
				h: 357
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 534,
			h: 359
		},
		scale: '1'
	}
}

var linkRunJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.03s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_01_delay-0.03s.gif',
			frame: {
				x: 503,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_02_delay-0.03s.gif',
			frame: {
				x: 1005,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_03_delay-0.03s.gif',
			frame: {
				x: 1507,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_04_delay-0.03s.gif',
			frame: {
				x: 2009,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_05_delay-0.03s.gif',
			frame: {
				x: 2511,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_06_delay-0.03s.gif',
			frame: {
				x: 3013,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_07_delay-0.03s.gif',
			frame: {
				x: 3515,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_08_delay-0.03s.gif',
			frame: {
				x: 4017,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_09_delay-0.03s.gif',
			frame: {
				x: 4519,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_10_delay-0.03s.gif',
			frame: {
				x: 5021,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_11_delay-0.03s.gif',
			frame: {
				x: 5523,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_12_delay-0.03s.gif',
			frame: {
				x: 6025,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_13_delay-0.03s.gif',
			frame: {
				x: 6527,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_14_delay-0.03s.gif',
			frame: {
				x: 7029,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_15_delay-0.03s.gif',
			frame: {
				x: 7531,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_16_delay-0.03s.gif',
			frame: {
				x: 8033,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_17_delay-0.03s.gif',
			frame: {
				x: 8535,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_18_delay-0.03s.gif',
			frame: {
				x: 9037,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_19_delay-0.03s.gif',
			frame: {
				x: 9539,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_20_delay-0.03s.gif',
			frame: {
				x: 10041,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_21_delay-0.03s.gif',
			frame: {
				x: 10543,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_22_delay-0.03s.gif',
			frame: {
				x: 11045,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_23_delay-0.03s.gif',
			frame: {
				x: 11547,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_24_delay-0.03s.gif',
			frame: {
				x: 12049,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_25_delay-0.03s.gif',
			frame: {
				x: 12551,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_26_delay-0.03s.gif',
			frame: {
				x: 13053,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_27_delay-0.03s.gif',
			frame: {
				x: 13555,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_28_delay-0.03s.gif',
			frame: {
				x: 14057,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_29_delay-0.03s.gif',
			frame: {
				x: 14559,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_30_delay-0.03s.gif',
			frame: {
				x: 15061,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_31_delay-0.03s.gif',
			frame: {
				x: 15563,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_32_delay-0.03s.gif',
			frame: {
				x: 16065,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_33_delay-0.03s.gif',
			frame: {
				x: 16567,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_34_delay-0.03s.gif',
			frame: {
				x: 17069,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_35_delay-0.03s.gif',
			frame: {
				x: 17571,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_36_delay-0.03s.gif',
			frame: {
				x: 18073,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_37_delay-0.03s.gif',
			frame: {
				x: 18575,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_38_delay-0.03s.gif',
			frame: {
				x: 19077,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_39_delay-0.03s.gif',
			frame: {
				x: 19579,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_40_delay-0.03s.gif',
			frame: {
				x: 20081,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_41_delay-0.03s.gif',
			frame: {
				x: 20583,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_42_delay-0.03s.gif',
			frame: {
				x: 21085,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_43_delay-0.03s.gif',
			frame: {
				x: 21587,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_44_delay-0.03s.gif',
			frame: {
				x: 22089,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_45_delay-0.03s.gif',
			frame: {
				x: 22591,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_46_delay-0.03s.gif',
			frame: {
				x: 23093,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_47_delay-0.03s.gif',
			frame: {
				x: 23595,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_48_delay-0.03s.gif',
			frame: {
				x: 24097,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_49_delay-0.03s.gif',
			frame: {
				x: 24599,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_50_delay-0.03s.gif',
			frame: {
				x: 25101,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_51_delay-0.03s.gif',
			frame: {
				x: 25603,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_52_delay-0.03s.gif',
			frame: {
				x: 26105,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_53_delay-0.03s.gif',
			frame: {
				x: 26607,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_54_delay-0.03s.gif',
			frame: {
				x: 27109,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_55_delay-0.03s.gif',
			frame: {
				x: 27611,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		},
		{
			filename: 'frame_56_delay-0.03s.gif',
			frame: {
				x: 28113,
				y: 1,
				w: 500,
				h: 499
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 499
			},
			sourceSize: {
				w: 500,
				h: 499
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 28614,
			h: 501
		},
		scale: '1'
	}
}

var ppgWalkJSON = {
  frames: [
    {
      filename: 'frame_0_delay-0.1s.gif',
      frame: {
        x: 1,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    },
    {
      filename: 'frame_1_delay-0.1s.gif',
      frame: {
        x: 503,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    },
    {
      filename: 'frame_2_delay-0.1s.gif',
      frame: {
        x: 1005,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    },
    {
      filename: 'frame_3_delay-0.1s.gif',
      frame: {
        x: 1507,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    },
    {
      filename: 'frame_4_delay-0.1s.gif',
      frame: {
        x: 2009,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    },
    {
      filename: 'frame_5_delay-0.1s.gif',
      frame: {
        x: 2511,
        y: 1,
        w: 500,
        h: 180
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 500,
        h: 180
      },
      sourceSize: {
        w: 500,
        h: 180
      }
    }
  ],
  meta: {
    app: 'http://www.codeandweb.com/texturepacker',
    version: '1.0',
    image: 'spritesheet.png',
    format: 'RGBA8888',
    size: {
      w: 3012,
      h: 182
    },
    scale: '1'
  }
}

var roxasJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.01s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_01_delay-0.01s.gif',
			frame: {
				x: 455,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_02_delay-0.01s.gif',
			frame: {
				x: 909,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_03_delay-0.01s.gif',
			frame: {
				x: 1363,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_04_delay-0.01s.gif',
			frame: {
				x: 1817,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_05_delay-0.01s.gif',
			frame: {
				x: 2271,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_06_delay-0.01s.gif',
			frame: {
				x: 2725,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_07_delay-0.01s.gif',
			frame: {
				x: 3179,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_08_delay-0.01s.gif',
			frame: {
				x: 3633,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_09_delay-0.01s.gif',
			frame: {
				x: 4087,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		},
		{
			filename: 'frame_10_delay-0.01s.gif',
			frame: {
				x: 4541,
				y: 1,
				w: 452,
				h: 562
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 452,
				h: 562
			},
			sourceSize: {
				w: 452,
				h: 562
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 4994,
			h: 564
		},
		scale: '1'
	}
}

var sailorWindJSON = {
	frames: [
		{
			filename: 'frame_0_delay-0.1s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_1_delay-0.1s.gif',
			frame: {
				x: 403,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_2_delay-0.1s.gif',
			frame: {
				x: 805,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_3_delay-0.1s.gif',
			frame: {
				x: 1207,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_4_delay-0.1s.gif',
			frame: {
				x: 1609,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_5_delay-0.1s.gif',
			frame: {
				x: 2011,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_6_delay-0.1s.gif',
			frame: {
				x: 2413,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		},
		{
			filename: 'frame_7_delay-0.1s.gif',
			frame: {
				x: 2815,
				y: 1,
				w: 400,
				h: 400
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 400,
				h: 400
			},
			sourceSize: {
				w: 400,
				h: 400
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 3216,
			h: 402
		},
		scale: '1'
	}
}

var sashaJSON = {
	frames: [
		{
			filename: 'frame_00_delay-0.1s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_01_delay-0.1s.gif',
			frame: {
				x: 503,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_02_delay-0.1s.gif',
			frame: {
				x: 1005,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_03_delay-0.1s.gif',
			frame: {
				x: 1507,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_04_delay-0.1s.gif',
			frame: {
				x: 2009,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_05_delay-0.1s.gif',
			frame: {
				x: 2511,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_06_delay-0.1s.gif',
			frame: {
				x: 3013,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_07_delay-0.1s.gif',
			frame: {
				x: 3515,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_08_delay-0.1s.gif',
			frame: {
				x: 4017,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_09_delay-0.1s.gif',
			frame: {
				x: 4519,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_10_delay-0.1s.gif',
			frame: {
				x: 5021,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_11_delay-0.1s.gif',
			frame: {
				x: 5523,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_12_delay-0.1s.gif',
			frame: {
				x: 6025,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_13_delay-0.1s.gif',
			frame: {
				x: 6527,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_14_delay-0.1s.gif',
			frame: {
				x: 7029,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		},
		{
			filename: 'frame_15_delay-0.1s.gif',
			frame: {
				x: 7531,
				y: 1,
				w: 500,
				h: 700
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 500,
				h: 700
			},
			sourceSize: {
				w: 500,
				h: 700
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 8032,
			h: 702
		},
		scale: '1'
	}
}

var titansWaitingJSON = {
	frames: [
		{
			filename: 'frame_0_delay-0.1s.gif',
			frame: {
				x: 1,
				y: 1,
				w: 450,
				h: 269
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 450,
				h: 269
			},
			sourceSize: {
				w: 450,
				h: 269
			}
		},
		{
			filename: 'frame_1_delay-0.1s.gif',
			frame: {
				x: 453,
				y: 1,
				w: 450,
				h: 269
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 450,
				h: 269
			},
			sourceSize: {
				w: 450,
				h: 269
			}
		},
		{
			filename: 'frame_2_delay-0.1s.gif',
			frame: {
				x: 905,
				y: 1,
				w: 450,
				h: 269
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 450,
				h: 269
			},
			sourceSize: {
				w: 450,
				h: 269
			}
		},
		{
			filename: 'frame_3_delay-0.1s.gif',
			frame: {
				x: 1357,
				y: 1,
				w: 450,
				h: 269
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 450,
				h: 269
			},
			sourceSize: {
				w: 450,
				h: 269
			}
		},
		{
			filename: 'frame_4_delay-0.1s.gif',
			frame: {
				x: 1809,
				y: 1,
				w: 450,
				h: 269
			},
			rotated: false,
			trimmed: false,
			spriteSourceSize: {
				x: 0,
				y: 0,
				w: 450,
				h: 269
			},
			sourceSize: {
				w: 450,
				h: 269
			}
		}
	],
	meta: {
		app: 'http://www.codeandweb.com/texturepacker',
		version: '1.0',
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: {
			w: 2260,
			h: 271
		},
		scale: '1'
	}
}

