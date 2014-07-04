/*

main.js

Functions used for the app

*/

// initial global vars
var intervalId;
var sessionLength = 3; // no. of minutes


function initialize() {
	document.addEventListener("deviceready", onDeviceReady, true);
}


function onDeviceReady() {
	
	// init
	$(document).ready(function(){
	
		// idle timer function
		$( document ).idleTimer( 2*60*1000 );
		$( document ).on( "idle.idleTimer", function(){
			 document.location.href = 'index.html';
		});
		
	});
}



// functions for event timing ....

function startTimeOut(){
	// set cookie time as now+sessionLength 
	createCookie('li-exhapp','iPad',sessionLength);
	// check session every 5 minutes
	intervalId = setInterval(checkSession, sessionLength*60*1000);
	// console.log(arguments.callee.caller, 'Starting timeout - function called');		
	// console.log(intervalId, 'Starting timeout - interval ref');		
}

function stopTimeOut(){
	
	// console.log(arguments.callee.caller, 'Stoping timeout - function called');
	// console.log(intervalId, 'Stoping timeout - interval ref');
	clearInterval(intervalId);
	eraseCookie('li-exhapp');				
}

function checkSession() {
	// check cookie time
	if (readCookie('li-exhapp') == null){
		location.href='index.html';	
	}	
}

function createCookie(name,value,mins) {
	if (mins) {
		var date = new Date();
		date.setTime(date.getTime()+(mins*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
