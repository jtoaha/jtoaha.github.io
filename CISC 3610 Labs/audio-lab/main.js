
let ppg
let ppgFlag = true //to toggle between play and pause

let pr;
let prFlag = true;

let tt;
let ttFlag = true;

let pokemon;
let pokemonFlag = true;

let arthur;
let arthurFlag = true;

let plays = 0 ; // this is to determine whether to show visualizer or not. If it is 0 it will not show

/** The following play functions are called when a user clicks on one of the play areas. They each retrieve the corresponding audio element within the html file, and toggles between playing and pausing the sound files.*/

function playPowerPuffGirls(){
  ppg = document.getElementById('ppg-theme')

  if(ppgFlag) {
    ppg.play()
    plays++
  }
  else {
    ppg.pause()
    plays--
  }

  ppgFlag = !ppgFlag
  showVisualizer()
}

function playPowerRangers(){
  pr = document.getElementById('pr-theme')

  if(prFlag) {pr.play(); plays++}
  else {pr.pause(); plays--}

  prFlag = !prFlag
  showVisualizer()
}

function playTeenTitans(){
  tt = document.getElementById('tt-theme')

  if(ttFlag){ tt.play(); plays++}
  else {tt.pause(); plays--}

  ttFlag = !ttFlag
  showVisualizer()
}

function playPokemon(){
  pokemon = document.getElementById('pokemon-theme')

  if(pokemonFlag) {pokemon.play(); plays++;}
  else {pokemon.pause(); plays--;}

  pokemonFlag = !pokemonFlag
  showVisualizer()
}

function playArthur(){
  arthur = document.getElementById('arthur-theme')

  if(arthurFlag) {arthur.play(); plays++}
  else {arthur.pause(); plays--}

  arthurFlag = !arthurFlag
  showVisualizer()
}

//showVisualizer will display the visualizer gif image if any of the sound files are being played. If none are being played, the visualizer image will be removed.
function showVisualizer(){
    if(plays > 0) {
      $("#waves").html('<img id="wavesimg" alt="sound waves" src="assets/waves.gif">')
    } else{
      $("#waves").empty();
    }
}
