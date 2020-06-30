/**
 * author: Jamila Toaha
 * Date: 03/03/2020
 * I make use of the Web Speech API in this program to change the canvas visuals. This program dynamically changes values of parameters via Speech Recognition. It also does the reverse, converting text to speech to provide information to the user.
 */
var canvas = undefined;
var ctx = undefined;

//will use mutate this object later in the program with input values provided by users through Speech Recognition
var recognitionParams = {
  radius: 25,
  color: 'black',
  background: '#ff6363'
}

/** ========== DRAWING CANVAS ==============  */
//At the moment the following structure is set to support animations in the future, and to make a more beautiful transition between values. So for now, the draw function gets called continuously. The benefit here is that later in the code, all that must done is to update the values in the recognitionParams, and then the change in the canvas will show up.

function start () {
  canvas = document.getElementById('audio-canvas');
  ctx = canvas.getContext('2d');

  mainLoop();
}

document.addEventListener('DOMContentLoaded', start);

function update () {


}

function draw () {
  //draws background of canvas
  ctx.fillStyle = recognitionParams.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //draws the circle
  ctx.stroke = 'black'
  ctx.fillStyle = 'black'; //if the canvas does not recognize the below color will default to this previous color, which in this case, is black
  ctx.fillStyle = recognitionParams.color;
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, recognitionParams.radius, 0, Math.PI*2, true)
  ctx.fill();
}

function mainLoop () {
  update();
  draw();
  window.setTimeout(mainLoop, 1000 / 5);
}

/** ========== USING SPEECH RECOGNITION API ==============  */

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var speechResult;

//toggleSpeechButton toggles between speak and stop. It assumes the starting state of the button is "Speak". When the function is called, the button will then render the opposite, "Stop"
var speechButtonFlag = false;
function toggleSpeechButton(){
  if(speechButtonFlag){
    $('#speak-button').html('Speak')
    recognition.stop();
  }
  else{
    $('#speak-button').html('Stop')
    recognition.start()
  }
  speechButtonFlag = !speechButtonFlag;
}

/**Modified and tweaked to achieve desired result. Source code from documentation: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult*/
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  //returns speech of user
  speechResult = color;
  //speech split into array to handle multiple cases
  speechResult = speechResult.split(' ');

  if(speechResult[0] == 'color') {
    recognitionParams.color = speechResult[1];
  }
  if(speechResult[0] == 'background') {
    recognitionParams.background = speechResult[1];
  }

  if(speechResult[0] == 'size') {
    //recognitionParams.radius = speechResult[1];
    setSizeOfCircle(speechResult[1])
  }
  if(speechResult[0] == 'help') {
    //recognitionParams.radius = speechResult[1];
    readHelpMenu()
  }

  if(speechResult[0] == 'about') {
    //recognitionParams.radius = speechResult[1];
    readAbout()
  }
}

//When the speech recognition service has disconnected, toggles speech button, back to 'speak' automatically, rather than user having to toggle it manually
recognition.addEventListener('end', toggleSpeechButton);

/** ========== USING SPEECH SYNTHESIS API ==============  */
var synth = window.speechSynthesis; // this is API's entry point; it returns an instance of SpeechSynthesis, so we can turn text to Speech
var utterThis;


function setSizeOfCircle(speechResult){
  speechResult = parseInt(speechResult);

  if(speechResult > 300){
    utterThis = new SpeechSynthesisUtterance('Size too big, the size limit is 300');
    utterThis.voice = synth.getVoices()[6]; // set voice to a german female voice;
    synth.speak(utterThis);
  } else if(speechResult < 1){
    utterThis = new SpeechSynthesisUtterance('Size too small, the minimize size is 1');
    utterThis.voice = synth.getVoices()[6]; // set voice to a german female voice;
    synth.speak(utterThis);
  } else {
    recognitionParams.radius = speechResult;
  }

}

function readHelpMenu(){
  utterThis = new SpeechSynthesisUtterance('Say color, followed by a color, to set the circle color. Say background, followed by a color, to set the background color. Say size, followed of a number from 1 to 300, to set the diameter of the circle. Say about, to hear about the program.');
  utterThis.voice = synth.getVoices()[6]; // set voice to a female voice;
  synth.speak(utterThis);
}

function readAbout(){
  utterThis = new SpeechSynthesisUtterance('Hello there. My name is Jamila Toaha and I am the developer behind this program. This program makes use of the Web Speech A.P.I, which provides two distinct areas of functionality — speech recognition, and speech synthesis. With speech recognition, it is able to recognize your voice. And with speech synthesis, it can convert text to speech.');
  utterThis.voice = synth.getVoices()[6]; // set voice to a female voice;
  synth.speak(utterThis);
}
