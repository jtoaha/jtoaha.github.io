/*Jamila Toaha*/

/* Note it seems it takes a while for browser to process the js file and the sessionStorage object. So it takes some time to load*/

/*DATA====================================================*/
/* For now this curated collection will consist solely of hand-picked youtube mixes . Hope to expand to Soundcloud. */

let curatedCollection = [
  {title: 'Jubilant Day (Upbeat Lo-fi Hip Hop Mix)',
      url: 'https://youtu.be/9t1nGNKdIgE',
      embedurl: 'https://www.youtube.com/embed/9t1nGNKdIgE',
      genre: 'lofi'},
  {title: '1 Hour Studio Ghibli Lofi Hip Hop Mix II',
      url:'https://youtu.be/x0aFomZ8Ipg',
      embedurl: 'https://www.youtube.com/embed/x0aFomZ8Ipg',
      genre: 'lofi'},
  {title: 'Morning Coffee | A Lofi Hiphop Mix',
      url:'https://youtu.be/5hI2-2Ws4Wg',
      embedurl: 'https://www.youtube.com/embed/5hI2-2Ws4Wg',
      genre: 'lofi'},
  {title: '05. Counterattack Mankind - High Quality',
      url:'https://youtu.be/4PuP7IkpRLU',
      embedurl: 'https://www.youtube.com/embed/4PuP7IkpRLU',
      genre: 'anime ost'},
  {title: 'ＳＫＹＷＡＹ [ Chillwave - Synthwave - Retrowave Mix ]',
      url:'https://youtu.be/ICcFMBzOnYs',
      embedurl: 'https://www.youtube.com/embed/ICcFMBzOnYs',
      genre: 'synthwave'},
  {title: 'Studio Ghibli Music Box Collection',
      url:'https://youtu.be/VpGDGDv4s7U',
      embedurl: 'https://www.youtube.com/embed/VpGDGDv4s7U',
      genre: 'music box'},
  {title: 'Work in Peace | Beautiful Chill Mix',
      url:'https://youtu.be/XWGXimIJhGg',
      embedurl: 'https://www.youtube.com/embed/XWGXimIJhGg',
      genre: 'chill'}
      // {title: '',
      // url:'',
      // embedurl: '',
      // genre: ''},
];

let imageChoices = [
  './images/alex-dukhanov-MFM8ASk4XNs-unsplash.jpg',
  './images/anton-darius-F_eLtGyrlNY-unsplash.jpg',
  './images/chris-8iCdRKKoG7g-unsplash.jpg',
  './images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg',
  './images/leonard-cotte-c1Jp-fo53U8-unsplash.jpg',
  './images/remi-walle-Ui3bOgnjtl0-unsplash.jpg',
  './images/tim-marshall-yEOCA6oiVqg-unsplash.jpg',
  './images/sebastian-unrau-CoD2Q92UaEg-unsplash.jpg',
]

/*LOAD ITEMS====================================================*/


/*userCollection will collect prefered Youtube links from user*/
/*over here if user has previously selected links, will be retrieved from Session object*/
let userCollection = sessionStorage.getItem('userCollectionSession') ? JSON.parse(sessionStorage.getItem('userCollectionSession')) : [];

if(sessionStorage.getItem('choiceBackgroundColor'))
  document.body.style.backgroundColor = sessionStorage.getItem('choiceBackgroundColor');


// $(document).ready(function(){
//for use with jQUERY
//   //createCuratedCollection();
// });
console.log("curatedCollection: " + curatedCollection);
console.log("userCollection: " + userCollection);

let curatedHTML = createCuratedCollectionHTML();

//if userCollection is not empty, display preview
let userCollectionHTML = createUserCollectionHTML();

//To display Curated Collection Preview on main page
if (document.getElementById("curated-collection-preview")){
  document.getElementById("curated-collection-preview").innerHTML = curatedHTML;
}

if (document.getElementById("curated-collection-expand")){
  document.getElementById("curated-collection-expand").innerHTML = curatedHTML;
}

//To display User Collection Preview on main page
if (document.getElementById("user-collection-preview")){
  document.getElementById("user-collection-preview").innerHTML = userCollectionHTML;
}

//To display expanded User Collection on Chill Mode page
if (document.getElementById("user-collection-expanded")){
  document.getElementById("user-collection-expanded").innerHTML = userCollectionHTML;
}

//console.log(curatedHTML);
function createCuratedCollectionHTML(){

  var curatedHTMLString = "";

  for (let video of curatedCollection) {
    curatedHTMLString += `<iframe width="560" height="315" src="${video.embedurl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  return curatedHTMLString;
}

function createUserCollectionHTML(){

  var userCollectionHTMLString = "";

  for (let video of userCollection) {
    userCollectionHTMLString += `<iframe width="560" height="315" src="${video.embedurl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  return userCollectionHTMLString;
}


function createUserCollection(){

  //The following code retrieves URL entered by user and adds it to the userCollection object.
  let x = document.getElementById("collect-user-link");
  let innerHTML = document.getElementById("confirm-link").innerHTML;

  //adds an initial String if no links already added
  if(!innerHTML)
   document.getElementById("confirm-link").innerHTML = "Added to your Collection:<br>";

  //To enhance user experience, I aim to be able to extract youtube video information so that I can construct the embeddedable version of the youtube url by constructing it from the url the user provides. Slicing off the last 11 characters which is the unique video id
  console.log(x.elements[1].value.slice(-11))
  let embedurl = `https://www.youtube.com/embed/${x.elements[1].value.slice(-11)}`

   //Adds link and provides confirmation of which link was added
  userCollection.push({title: x.elements[0].value, url: x.elements[1].value, embedurl: embedurl});

  console.log(userCollection);
  document.getElementById("confirm-link").innerHTML += "Title: " + x.elements[0].value + "Link: " + x.elements[1].value + "<br>";

  //Clears out value from field, so user can easily add another link
  document.getElementById("user-link-title").value = "";
  document.getElementById("user-link").value = "";
  sessionStorage.setItem("userCollectionSession", JSON.stringify(userCollection));
  console.log("userCollection:" + userCollection)

  document.getElementById("user-collection-preview").innerHTML = createUserCollectionHTML();

}


/*====================================================*/

/*DRAG AND DROP functionality according to w3schools documentation. Modified to apply to multiple images*/
//4(b) Use of visual choices Use the HTML5 Drag and Drop feature to let the user select one from a set of images.
let imageChoicesHTML = function() {
  let imageChoicesHTMLString = "";
  for (let i = 0; i < imageChoices.length; i++){
    imageChoicesHTMLString += `<img id="drag${i}" draggable="true" ondragstart="drag(event)" src=${imageChoices[i]}>`;
  }
  return imageChoicesHTMLString;
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//To display Image Choices
if(document.getElementById("image-choices"))
  document.getElementById("image-choices").innerHTML = imageChoicesHTML();




/*COLOR PICKER====================================================*/
//to change document color
//2(b) use a <button> to change the background color of one of the <div>s that you defined above


/*for canvas and color picker*/
function start () {

  let colors = ["pink", "CadetBlue", "plum", "lightcoral", '#ded6ff', '#d6ffe6', '#f5ffd1', '#ffe6d1', '#bdfff4', '#ffbc6b', "white"];

  let canvas;
  let ctx;

  for (let i = 0; i < 8; i++) {
    canvas = document.getElementById(`canvas${i}`);
    ctx = canvas.getContext('2d');
    canvas.style.background = colors[i % 4];
    // ctx.fillStyle = colors[i % colors.length];
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  //canvas2

  for (let i = 8; i < 19; i++) {
    canvas = document.getElementById(`canvas${i}`);
    ctx = canvas.getContext('2d');
    canvas.style.background = colors[i-8];
    // ctx.fillStyle = colors[i % colors.length];
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  var canvasElements = document.getElementsByTagName("canvas");

  for (let canvas of canvasElements) {
    canvas.addEventListener('click', function(){
      document.body.style.backgroundColor = canvas.style.background;
      sessionStorage.setItem('choiceBackgroundColor', canvas.style.background);
    });
  }


}


document.addEventListener('DOMContentLoaded', start);

/*====================================================*/


/*====================================================*/

/*CAPITALIZE SECTION*/
if(document.getElementById('capital-button'))
  document.getElementById('capital-button').disabled = true;

//If there is not input by user, the capitalize button will be disabled
function enableCapitalButton(){
  if(!document.getElementById('capitalize').value)
     document.getElementById('capital-button').disabled = true;
  else
    document.getElementById('capital-button').disabled = false;
}

function capitalizeText(){
  let lowerCase = document.getElementById("capitalize");
  document.getElementById("capitalize-output").innerText = lowerCase.value.toUpperCase();

}

/*====================================================*/

/*USER ACCOUNT*/

  //checkUserName makes sure that the passwords dont' have special characters aside from the underscore. [^a-zA-z0-9_]
  function checkUserName(){

    let regex = /\W+/;
    let userName = document.getElementById('user-name');
      if(!regex.test(userName.value))
        userName.setCustomValidity('')
      else
         userName.setCustomValidity('Username can not include symbols. Only characters between a-z, A-Z, 0-9')
  }

  function checkPasswords(){
    let password1 = document.getElementById('password-1')
    let password2 = document.getElementById('password-2')
    console.log('TESTING' + password1.value)
    if(password1.value !== password2.value)
      password2.setCustomValidity('Passwords Don\'t Match');
    else
      password2.setCustomValidity('');
  }


/*====================================================*/

/*SURVEY FROM ON ABOUT US PAGE*/


//this function autotabs phone number section
//2(c) create a series of fields that auto-tab between them after X characters are entered
function autotab(current){
  if(current == document.getElementById('phone1') & current.value.length == current.getAttribute('maxlength'))
    document.getElementById('phone2').focus();
  if(current == document.getElementById('phone2') & current.value.length == current.getAttribute('maxlength'))
    document.getElementById('phone3').focus();

}

/*====================================================*/
/**GEOLOCATION features */



let text= document.getElementById('g-map-text')
//let gmapdisplay = document.getElementById('show-g-map')
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    text.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  text.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


/**GEOLOCATION
This code I heavily took from documentation
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 */

function getGeoLocation() {

  const status = document.getElementById('g-map-text')
  const mapLink = document.getElementById('map-link')

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    var latlon = latitude + "," + longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;



    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
    ${latlon}&zoom=14&size=400x300&sensor=false&key=AIzaSyDK80ntZr0ETfJeNYKy7u7YvTwHVvknUT8`
    document.getElementById("g-map-text").innerText= "Your Location Coordinates: "
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

if(document.getElementById('about-us'))
  getGeoLocation();





// function showPosition(){
//   if(navigator.geolocation) {
//       var position = navigator.geolocation.getCurrentPosition();
//       var latlon = position.coords.latitude + "," + position.coords.longitude;


//   var mapString2 = `<iframe
//   width="600"
//   height="450"
//   frameborder="0" style="border:0"
//   src= https://maps.googleapis.com/maps/api/staticmap?center="+${latlon}+"&zoom=14&size=400x300&sensor=false&key=AIzaSyDK80ntZr0ETfJeNYKy7u7YvTwHVvknUT8&q allowfullscreen>
// </iframe>`
// document.getElementById('show-g-map').innerHTML(mapString);

//   }
//   else{
//     document.getElementById('g-map-text').innerHTML("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition() {
//   var latlon = position.coords.latitude + "," + position.coords.longitude;

//   var mapString =  `<iframe
//   width="600"
//   height="450"
//   frameborder="0" style="border:0"
//   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDK80ntZr0ETfJeNYKy7u7YvTwHVvknUT8&q=current+location" allowfullscreen>
// </iframe>`

//   var mapString2= `<iframe
//   width="600"
//   height="450"
//   frameborder="0" style="border:0"
//   src= https://maps.googleapis.com/maps/api/staticmap?center="+${latlon}+"&zoom=14&size=400x300&sensor=false&key=AIzaSyDK80ntZr0ETfJeNYKy7u7YvTwHVvknUT8&q allowfullscreen>
// </iframe>`
// //  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDK80ntZr0ETfJeNYKy7u7YvTwHVvknUT8&q=${latlon}"


//   document.getElementById('show-g-map').innerHTML(mapString);

// }



//if(document.getElementById("chillmode"))
 // console.log("userCollection: " + sessionStorage.get(userCollection));

/**
 *
 *SkyWay
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ICcFMBzOnYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 *
 * Counterattack
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/4PuP7IkpRLU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 * Morning Coffee
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/5hI2-2Ws4Wg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 * Studio Ghibli Lofi
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/x0aFomZ8Ipg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 *Jubilant Day
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/9t1nGNKdIgE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 *
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/VpGDGDv4s7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *
 *
 * Work in Peace
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/XWGXimIJhGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 *

 */
