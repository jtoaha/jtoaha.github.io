//Debugging Purposes, for autofill from registeration form
function setShit(){
	//Stores the values of the differnt phone iD's, to into an array 
	var phone = [];
	phone.push(document.getElementById('phone').value,document.getElementById('phone2').value,document.getElementById('phone3').value);

	//Current Student;Graduate;Professor;Other
	var currentStatus2 = document.querySelector("input[name = 'status']:checked").value;

	var	days_free =[]; //Array that gets the (DAYS) that person is able to tutor 
	var checkedBoxes = document.getElementsByName("days_available"); 
	//Checks if each checkbox is checked, pushes to array if Yes
	if(checkedBoxes.length >0){
		for(i = 0; i < checkedBoxes.length; i++){
			if(checkedBoxes[i].checked){
				days_free.push(checkedBoxes[i].value);
			}
		}
	}
	//Array that gets the (Effective-day) that person is able to (start) tutoring 
	var effective_date =[];
	var checkedWork = document.getElementById("start-work").options;
	if(checkedWork.length >0){
		for(i = 0; i < checkedWork.length; i++){
			if(checkedWork[i].selected){
				effective_date.push(checkedWork[i].value);
			}
		}
	}
	sessionStorage.setItem("effective_date",effective_date);
	
	//Array that gets the (TIMES) that person is able to tutor 
	var times_free = [];
	var checkedSelectBoxes = document.getElementById("time_available").options;
	if(checkedSelectBoxes.length >0){
		for(i = 0; i < checkedSelectBoxes.length; i++){
			if(checkedSelectBoxes[i].selected){
				times_free.push(checkedSelectBoxes[i].value);
			}
		}
	}
	sessionStorage.setItem("times_free", times_free);
	
	//Storages the value of the course1
	sessionStorage.setItem("course1", document.getElementById("course_1").value);
	sessionStorage.setItem("course2", document.getElementById("course_2").value);
	sessionStorage.setItem("course3", document.getElementById("course_3").value);


	//Using (LOCALSTORAGE), stores first and last, name; email
	localStorage.setItem("firstN", document.getElementById("signup_firstname").value);
	localStorage.setItem("lastN", document.getElementById("signup_lastname").value);
	localStorage.setItem("prefEmail", document.getElementById("preferred_email").value);

	//Using (SESSIONSTORAGE), saves values 
	sessionStorage.setItem("userPhone", phone);
	sessionStorage.setItem("currentStatus",currentStatus2);
	sessionStorage.setItem("days_free", days_free);
	sessionStorage.setItem("pastExperience", document.getElementById('text_box').value);
	

	console.log(localStorage.getItem("firstN"));
	console.log(localStorage.getItem("lastN"));
	console.log(localStorage.getItem("prefEmail"));

	console.log(sessionStorage.getItem("userPhone"));
	console.log(sessionStorage.getItem("currentStatus"));
	console.log(sessionStorage.getItem("days_free"));
	console.log(sessionStorage.getItem("times_free"));
	console.log(sessionStorage.getItem("effective_date"));
	console.log(sessionStorage.getItem("course1"));
	console.log(sessionStorage.getItem("pastExperience"));

	successRegister();
	return false;
}
//Debugging Purposes, for autofill from registeration form
function toggleCheck(){
	
	document.getElementById("signup_firstname").value = localStorage.getItem("firstN");
	document.getElementById("signup_lastname").value = localStorage.getItem("lasttN");
	document.getElementById("preferred_email").value = localStorage.getItem("prefEmail");
	// document.getElementById("phone").value = phone[0];
	// document.getElementById("phone2").value = phone[1];
	// document.getElementById("phone3").value = phone[2];	
	// document.getElementById("status").value = sessionStorage.getItem("currentStatus");
	// document.getElementById("course_1") = sessionStorage.getItem("course1");
	// document.getElementById("text_box")= sessionStorage.getItem("pastExperience");
	return false;
}

//Add a second course field
function addField(id){
	if (document.getElementById("yes").checked ) {
		document.getElementById(id).style.display="block";
	}else{
		document.getElementById(id).style.display="none";
	}
}
//Add a third course field
function addField2(id){
	if(document.getElementById("yes2").checked){
		document.getElementById(id).style.display="block";
	}else{
		document.getElementById(id).style.display="none";
	}
}
//Autotabs for the phone element
function autotab(original, destination){
	if(original.getAttribute&& original.value.length == original.getAttribute("maxlength")){
		destination.focus();
	}
}
//Validates if the form if filled out, with the exception of the textarea box and picture upload. ENABLED submit button when satisfactory
$(document).ready(function(){
	$("#signup_firstname,#signup_lastname,#preferred_email, #phone,#phone2,#phone3, input[name='days_available'],#time_available,#start-work,#course_1, input[name='status'] ").change(function(){
		if ($("#signup_firstname").val().length && $("#signup_lastname").val().length && $("#preferred_email").val().length && $("#phone").val().length&& $("#phone2").val().length&& $("#phone3").val().length  &&  $("input[name='days_available']:checked").length > 0 && $("#time_available option:selected").length >0 && $("#start-work option:selected" ).val() !='no_val' && $("#course_1").val()!=""  && $("input[name='status']:checked").length > 0 ){
			$("#tutorsubmit").prop('disabled', false);
		}else{
			$("#tutorsubmit").prop('disabled', true);
		}
	});
});
//Adds Success or Error styling class, depending if input matches pattern of element
function visualValidation(id, idStyle, idMessage){
	var input = document.getElementById(id); //id of the element calling the funciton; (this.id)
	var input2 = document.getElementById(idStyle); //Div ID's style that will be changed 

	//If pattern matches, add success
	if( input.validity.patternMismatch == false && input.value != ""){
		input2.classList.add('has-success');
	} else{
		input2.classList.add('has-error');
		document.getElementById(idMessage).style.display="block";
	}
}
//Adds Success or Error styling class, depending if input matches pattern of element for Email element
function visualValEmail(id, idStyle, idMessage){
	var input = document.getElementById(id); //Element text ID; this.id
	var input2 = document.getElementById(idStyle);
	if (input.validity.typeMismatch == false && input.value !="") {
		input2.classList.add('has-success');
	}
	else{
		input2.classList.add('has-error');
		document.getElementById(idMessage).style.display="block";
	}
}
//To Remove the visual feedback and color
function removeVisual(id, idSpanMessage){
	var removeDivStyle = document.getElementById(id);
	document.getElementById(idSpanMessage).style.display="none";
	
	if(removeDivStyle.classList.contains('has-success')==true ){
		removeDivStyle.classList.remove('has-success');
	}else if (removeDivStyle.classList.contains('has-error') ==true) {
		removeDivStyle.classList.remove('has-error');
	}
	else return false;
}
//Prints out once the form has been submitted
function successRegister(){
	swal("Congrats, your application has been submited! We'll contact you shortly",{
  		icon: "success",
  		title: "Success",
  		// showCloseButton: true,
  		timer: 5000,
	});
}

//Using jQUERY, conditions that triggers FEEDBACK messages if field if left empty
$(document).ready(function(){
	
	$("input[name='status']").change(function(){
		if($("input[name='status']:checked").val()!= ""){
			$("#helpBlockStatus").hide();
		} else{
			$("#helpBlockStatus").show();
		}
	}) ;
	$("#start-work").change(function (){
		if($("#start-work").val() !='no_val'){
			$("#potential_style").removeClass("has-error").addClass("has-success");
			$("#helpBlockStartWork").hide();
		} else{ 
			$("#potential_style").removeClass("has-success").addClass("has-error");
			$("#helpBlockStartWork").show();
		}
	});
	$("input[name='days_available']").change(function(){
		if ($("input[name='days_available']:checked").length > 0) {
			$("#dayMessage").removeClass("has-error");
			$("#helpBlockDays").hide();
		}else{
			$("#dayMessage").addClass("has-error");
			$("#helpBlockDays").show();
		}
	});
	$("#time_available").change(function(){
		if ($("#time_available option:selected").length >0) {
			$("#timeId").removeClass("has-error").addClass("has-success");
			$("#helpBlockTime").hide();
		}else{
			$("#timeId").removeClass("has-success").addClass("has-error");
			$("#helpBlockTime").show();
		}
	});
	$("#text_box").keyup(function(){
		if ($("#text_box").val() != "") {
			$("#textboxDiv").removeClass("has-error").addClass('has-success');
			$("#helpBlockTextArea").hide();
			$("#helpBlockTextArea2").show();
		}else{
			$("#textboxDiv").removeClass('has-success').addClass("has-error");
			$("#helpBlockTextArea2").show();
			$("#helpBlockTextArea").show();
		}	
	});
});


function showGlyphicon(idSuccessGly, idErrorGly, idStyle,thisID){
	var success = document.getElementById(idSuccessGly);
	var error = document.getElementById(idErrorGly);
	var idStyle = document.getElementById(idStyle);
	var this_ID = document.getElementById(thisID);

	if(this_ID.validity.patternMismatch == false && this_ID.value != ""){
		if((error.style.visibility = 'hidden')== false ){ 
			error.style.visibility = 'hidden';
		}
		success.style.visibility = "visible";
	}else{
		if((success.style.visibility = "hidden")== false ){ success.style.visibility = 'hidden';}
		
		error.style.visibility = 'visible';
	}
}



function showfker(){
	console.log(document.getElementById('start-work').value);
}

//Use to display message, on-hover, when user hovers on input-box
$(function () {
                $('[data-toggle="tooltip"]').tooltip()
        });  
