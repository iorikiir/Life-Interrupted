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
		
		(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
		
		if ($(".slider").length) {
			
		  var slider = new Swipe(document.getElementById('slider'));
	  
		  $('.next-but-swipe').click(function(){
			  slider.next();
			  return false;
		  });
		  
		  $('.prev-but-swipe').click(function(){
			  slider.prev();
			  return false;
		  });
		
		}
	
	
	});
}


