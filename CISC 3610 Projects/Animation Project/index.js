/* eslint-disable max-statements*/
/* eslint-disable complexity*/

var canvas = undefined;
var canvasContext = undefined;

// set up of spritesheets
var leviSpriteSheet;
var leviCurrentFrame;

var helloKittySpriteSheet;
var helloKittyCurrentFrame;

var linkRunSpriteSheet;
var linkRunCurrentFrame;
var klScale; // scale for Kitty and Link
var klY;

var bb8SpriteSheet;
var bb8CurrentFrame;
var bb8X;

var sashaSpriteSheet;
var sashaCurrentFrame;

var gokuSpriteSheet;
var gokuCurrentFrame;
var gokuX;

var catitudeSpriteSheet;
var catitudeCurrentFrame;
var catitudeX;

var ppgWalkSpriteSheet;
var ppgWalkCurrentFrame;
var ppgWalkX;

var roxasSpriteSheet;
var roxasCurrentFrame;
var roxasX;

var sailorWindSpriteSheet;
var sailorWindCurrentFrame;

var titansSpriteSheet;
var titansWindCurrentFrame;

var bpFlipSpriteSheet;
var bpFlipCurrentFrame;

var bpRunSpriteSheet;
var bpRunCurrentFrame;

var bpSwitch;
var bpRunY;

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

	klScale = 2 // scale for Kitty and Link
	klY = 0;

  //set up bb8
  bb8SpriteSheet = new Image();
  bb8SpriteSheet.src = './assets/bb8-rolling.png';
  bb8CurrentFrame = 0;
	bb8X = 0;

  //set up cat with attitude
  catitudeSpriteSheet = new Image();
  catitudeSpriteSheet.src = './assets/cat-attitude.png';
	catitudeCurrentFrame = 0;
	catitudeX = 100

  //set up Sasha
  sashaSpriteSheet = new Image();
  sashaSpriteSheet.src = './assets/sasha.png';
  sashaCurrentFrame = 0;

  //set up kid Goku
  gokuSpriteSheet = new Image();
  gokuSpriteSheet.src = './assets/goku-juggling.png';
	gokuCurrentFrame = 0;
	gokuX = -140;

  //set up Powerpuff girls walking
  ppgWalkSpriteSheet = new Image();
  ppgWalkSpriteSheet.src = './assets/ppg-walking.png';
  ppgWalkCurrentFrame = 0;
	ppgWalkX = 100;

  //Roxas walking
  roxasSpriteSheet = new Image();
  roxasSpriteSheet.src = './assets/roxas.png';
  roxasCurrentFrame = 0;
	roxasX = 200;

  //Sailor Moon
  sailorWindSpriteSheet = new Image();
  sailorWindSpriteSheet.src = './assets/sailor-wind.png';
  sailorWindCurrentFrame = 0;

  //Teen Titans
  // titansSpriteSheet = new Image();
  // titansSpriteSheet.src = './assets/teen-titans-waiting.png';
  // titansCurrentFrame = 0;

  //Black Panther flip
    bpFlipSpriteSheet = new Image();
    bpFlipSpriteSheet.src = './assets/black-panther-flip.png';
    bpFlipCurrentFrame = 0;

  //Black Panther run (switches over to different spritesheet)
  bpRunSpriteSheet = new Image();
  bpRunSpriteSheet.src = './assets/black-panther-run.png';
  bpRunCurrentFrame = 0;
	bpSwitch = false;
	bpRunY = -20;

  mainLoop();

}

//When all the images are loaded, then the animation will fire
window.onload = (event) => {
	console.log('page is fully loaded');
	start();
};
// document.addEventListener('DOMContentLoaded', start);

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

	//have Goku stop at a third of the screen
	if(gokuX < canvas.width/3)
  gokuX++;

  //adjust Goku frame
  if (catitudeCurrentFrame < catitudeJSON.frames.length - 1) catitudeCurrentFrame++;
  else catitudeCurrentFrame = 0;
  catitudeX--;

  //adjust Power Puff Girls walking frame
  if (ppgWalkCurrentFrame < ppgWalkJSON.frames.length - 1) ppgWalkCurrentFrame++;
  else ppgWalkCurrentFrame = 0;
  ppgWalkX-=5;

  //adjust Roxas frame
  if (roxasCurrentFrame < roxasJSON.frames.length - 1) roxasCurrentFrame++;
  else roxasCurrentFrame = 0;
  roxasX-=35;

  //adjust Sailor Moon frame
  if (sailorWindCurrentFrame < sailorWindJSON.frames.length - 1) sailorWindCurrentFrame++;
  else sailorWindCurrentFrame = 0;

  //adjust Teen Titans frame
  // if (titansCurrentFrame < titansWaitingJSON.frames.length - 1) titansCurrentFrame++;
  // else titansCurrentFrame = 0;

  //adjust Black Panther frames (coordinate both spritesheets)
  if (canvas.width + ppgWalkX <= 200) {
    if (bpFlipCurrentFrame < bpFlipJSON.frames.length - 1)
      bpFlipCurrentFrame++;
    else {
        bpSwitch = true;

      if (bpRunCurrentFrame < bpRunJSON.frames.length - 1) bpRunCurrentFrame++;
      else bpRunCurrentFrame = 0;
      bpRunY +=15;
    }
  }


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

if (canvas.width + ppgWalkX <= 200){
  console.log(bpSwitch);
  if (!bpSwitch) {
    //draw Black Panther flipping
    let currentbpFlip = bpFlipJSON.frames[bpFlipCurrentFrame];
    canvasContext.drawImage(bpFlipSpriteSheet,
      currentbpFlip.frame.x, currentbpFlip.frame.y,
      currentbpFlip.frame.w, currentbpFlip.frame.h,
      canvas.width/2-150, 10,
      currentbpFlip.frame.w/1.5, currentbpFlip.frame.h/1.5);

    } else {
    //draw Black Panther running
    let currentbpRun = bpRunJSON.frames[bpRunCurrentFrame];
    canvasContext.drawImage(bpRunSpriteSheet,
      currentbpRun.frame.x, currentbpRun.frame.y,
      currentbpRun.frame.w, currentbpRun.frame.h,
      canvas.width / 2-190, bpRunY,
      currentbpRun.frame.w/1.5, currentbpRun.frame.h/1.5);
    }
  }


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

	//draw Speech bubbles between Hello Kitty and Link
	drawSpeechLinkKitty(klY);

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

//   //draw Teen Titans waiting
//   let currentTitans = titansWaitingJSON.frames[titansCurrentFrame];
// canvasContext.drawImage(titansSpriteSheet,
//   currentTitans.frame.x, currentTitans.frame.y,
//   currentTitans.frame.w, currentTitans.frame.h,
//   200, 300,
//   currentTitans.frame.w/1, currentTitans.frame.h/1);


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

function drawSpeechLinkKitty(){

}
