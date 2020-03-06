let pageTitle = localStorage.getItem('title');
let pageNote = localStorage.getItem('note');

let totalUndos = 0;

let undoArray = [];

if(localStorage.getItem('undo1')) undoArray.push(localStorage.getItem('undo1'))
if(localStorage.getItem('undo2')) undoArray.push(localStorage.getItem('undo2'))
if(localStorage.getItem('undo3')) undoArray.push(localStorage.getItem('undo3'))

//If these values for title and note already exist in local storage, display them
if (pageTitle){
    document.getElementById('title').value = pageTitle;
}

if (pageNote) {
  document.getElementById('note').value = pageNote;
}


function setTitle(){
  let title = document.getElementById('title').value;
  localStorage.setItem('title', title);

  //if the current character is a space, create a back-up
  if (title[title.length - 1] === ' ') {
    totalUndos++;

    undoArray.push('type: ' + title.slice(0, title.length - 1));
  }

}

function setNote(){
  let note = document.getElementById('note').value;
  localStorage.setItem('note', note);

  if (note[note.length - 1] === ' ') {
    totalUndos++;
    undoArray.push('note: ' + note.slice(0, note.length - 1));

    if(undoArray.length == 1) {
      localStorage.setItem( 'undo1', undoArray[0]);
    }
    if(undoArray.length == 2) {
      localStorage.setItem( 'undo1', undoArray[0]);
      localStorage.setItem( 'undo2', undoArray[1]);
    }
    if(undoArray.length >= 3) {
      localStorage.setItem( 'undo1', undoArray[undoArray.length-3]);
      localStorage.setItem( 'undo2', undoArray[undoArray.length-2]);
      localStorage.setItem( 'undo3', undoArray[undoArray.length-1]);
    }

  }

}


function clearFields(){
  localStorage.setItem('title', '')
  localStorage.setItem('note', '');
  totalUndos = 0;
  undoArray = [];
  document.getElementById('title').value = localStorage.getItem('title');
  document.getElementById('note').value = localStorage.getItem('title');
}

function undo(){

  //If array is empty, don't do anything
  if(undoArray.size < 1) return;

  let currentUndo = undoArray.pop(); //this is an object


    if(currentUndo.startsWith('title')) {
    document.getElementById('title').value = currentUndo.slice(6);
    document.getElementById('title').innerText = currentUndo.slice(6);
    localStorage.setItem('title', currentUndo.slice(6));
  }

  if(currentUndo.startsWith('note')) {
    document.getElementById('note').value = currentUndo.slice(5);
    document.getElementById('note').innerText = currentUndo.slice(5);
    localStorage.setItem('note', currentUndo.slice(5));
  }

}
