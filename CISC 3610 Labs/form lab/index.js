let pageTitle = localStorage.getItem('title');

let pageNote = localStorage.getItem('note');

if(pageTitle){
    document.getElementById("title").value = pageTitle;
}

if(pageNote) {
  document.getElementById("note").value = pageNote;
}

// document.getElementById("title");


function setTitle() {
  let title = document.getElementById("title").value;

  localStorage.setItem("title", title);
  console.log(title)
}

function setNote(){
  let note = document.getElementById("note").value;

  localStorage.setItem("note", note);
  console.log(note)
}


function clearFields(){
  localStorage.setItem("title", "")
  localStorage.setItem("note", "");
  document.getElementById("title").value = localStorage.getItem("title");
  document.getElementById("note").value = localStorage.getItem("title");
}

/*still need to work on this*/
function undo(){
  console.log("testing");
}


