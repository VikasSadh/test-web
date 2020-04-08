var attempt = 3;
var pin = 4;
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( /^\d{10}$/.test(username)  ){
	if (/^\d{4}$/.test(password) == true ){
		if ( username == "9027280211" && password == "1234"){
			var apin = prompt("Please Enter Pin Again")
			if (/^\d{4}$/.test(apin) == true){
				if ( apin == "1234"){
					alert ("Login successfully");
					window.location = "login_page.html"; // Redirecting to other page.
					return false;}
				else{
					alert("Invalid NUMBER AND PIN");}}
				
			else{
				alert("Please Enter Correct Pin");}

			}}
	else{
		alert("Please Enter Correct Pin");}}
else{
	alert("Please Enter Correct Number");}}
