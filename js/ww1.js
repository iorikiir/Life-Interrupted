// resizing images in views slideshow
jQuery(window).bind('resize', function() {
  jQuery('.views-slideshow-cycle-main-frame').height(
    jQuery('.views-slideshow-cycle-main-frame').children().height()
  );
  
});

jQuery( document ).ready(function() {
  
	
	// Bind the click event to the body - any static parent container will do
	jQuery('body').on('click', function(e) {
		
		console.log("Click recorded ...");
		
		// find co-ords of nav btn
		lowerposX = jQuery('#home-nav-scroll').offset().left;
		lowerposY = jQuery('#home-nav-scroll').offset().top;
		
		upperposX = lowerposX + 67;
		upperposY = lowerposY + 67;
		
		console.log("Co-ords are ... (" +  lowerposX + "," + lowerposY + ") to (" + upperposX + "," + upperposY + ")");
		console.log("Mouse co-ords are ... (" +  e.pageX + "," + e.pageY + ")");			
		

    	// Fire the callback if the click was on top of button
    	if (e.pageX >= lowerposX && e.pageX <= upperposX && e.pageY >= lowerposY && e.pageY <= upperposY) {

        jQuery("html, body").animate({ scrollTop: jQuery(window).height()}, jQuery(window).height());
    	  return false;
    	}
	});
  
  
  // adjust height of mega menu for admin toolbar
  if (jQuery("#toolbar").length) {
  	var adjHeight = jQuery("#toolbar").innerHeight()-2;
  	var newHeight = adjHeight + 75;
  	jQuery("li > .menu-minipanel-panel").css('top', newHeight);
  }
  
  // panzoom
  (function() {
	 var $panzoom = jQuery('.center img').panzoom();
	 $panzoom.parent().on('mousewheel.focal', function( e ) {
	   e.preventDefault();
	   var delta = e.delta || e.originalEvent.wheelDelta;
	   var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
	   $panzoom.panzoom('zoom', zoomOut, {
	     increment: 0.1,
	     animate: false,
	     focal: e
	   });
	 });
	 
	// zoom in 
  	if(jQuery(".center .overlay .plus").length) {
		jQuery(".center .overlay .plus").click(function (){
				$panzoom.panzoom("zoom");
		}); 
  	}
  
  	// zoom out
  	if(jQuery(".center .overlay .minus").length) {
		jQuery(".center .overlay .minus").click(function (){
				$panzoom.panzoom("zoom", true);
		}); 
  	}	 
	 
  })();

  // footer button links
  jQuery('#get-involved-btn').click(function() {
  	 window.open('http://ccc.sl.nsw.gov.au/', '_blank');
  });
  jQuery('#ask-lib-btn').click(function() {
    window.open('http://www.sl.nsw.gov.au/services/ask/index.html?HomeLink=Ask_A_Librarian', '_blank');
  });
	
  jQuery(function($) {
		var container = $('.layout');
		
		function relayout() {
			container.layout({resize: false});
		}
		relayout();
		
		$(window).resize(relayout);
		
		$('.north').resizable({
			handles: 's',
			stop: relayout
		});
		
		$('.south').resizable({
			handles: 'n',
			stop: relayout
		});
		
		$('.east').resizable({
			handles: 'w',
			stop: relayout
		});
	
		// toggle thumbnails
	  if(jQuery(".center .overlay .thumbnail").length) {
			jQuery(".center .overlay .thumbnail").click(function (){
					jQuery('.south').animate({width: 'toggle'}, {duration: 500, complete: relayout, step: relayout});
			}); 
	  	}
	  
	  // toggle viewer
	  if(jQuery(".center .overlay .resize").length) {
			jQuery(".center .overlay .resize").click(function (){
					jQuery('.east').animate({width: 'toggle'}, {duration: 500, complete: relayout, step: relayout});
			}); 
	  	}	
	  	
	  	// close south pane initally
	  	jQuery('.south').animate({width: 'toggle'}, {duration: 500, complete: relayout, step: relayout});
		
		// img swape for thumbnails
		jQuery(".layout .south .view-asset-diary-images table td img").click(function (){
			var filename_array = jQuery(this).attr("src").split('/').pop().split('?');
			var file_path = "/sites/default/files/" + filename_array[0];
			jQuery(".layout .center img").attr("src", file_path);
			relayout();
		});
				
	});	
	
  
});

jQuery(window).load(function() {

  // call a window resize to reset elements
  // console.log("Calling window resize now ...");
  jQuery(window).trigger('resize');
  
  // set cookie for exhibition hall pc's
  
  
  
});

// toggle for Learning services landing
function toggleStage(stageRef) {
  		if (stageRef == "3") {
  			// swap out image
  			if (jQuery("#stage3-icon").attr("src") == "/sites/all/files/icons/ls-close.png") {
  				jQuery("#stage3-icon").attr("src", "/sites/all/files/icons/ls-open.png");		
  			} else {
  				jQuery("#stage3-icon").attr("src", "/sites/all/files/icons/ls-close.png");		
  			}
  			// toggle pane display
			jQuery(".pane-learning-stage-3 .masonry").toggle(); 
  		}
  		if (stageRef == "5") {
  			// swap out image
			if (jQuery("#stage5-icon").attr("src") == "/sites/all/files/icons/ls-close.png") {
  				jQuery("#stage5-icon").attr("src", "/sites/all/files/icons/ls-open.png");		
  			} else {
  				jQuery("#stage5-icon").attr("src", "/sites/all/files/icons/ls-close.png");		
  			} 			
  			// toggle pane display
			jQuery(".pane-learning-stage-5 .masonry").toggle();  		
 		}
 }

 
// toggle for login
function toggleLogin() {
	alert('Login toggle called');
	// toggle login div
	jQuery(".user-login-container").toggle();
	jQuery(".user-login-fb-container").toggle();
	jQuery(".user-login-form-container").toggle();
}

// toggle for register
function toggleRegister() {
	
	// toggle register div
	jQuery(".user-register-container").toggle();
	jQuery(".user-register-form-container").toggle();

}

WebFontConfig = {
    google: { families: [ 'Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  
// cookie functions
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// toggle ui layout resizing
function toggleLiveResizing () {
	jQuery.each( jQuery.layout.config.borderPanes, function (i, pane) {
		var o = myLayout.options[ pane ];
		o.livePaneResizing = !o.livePaneResizing;
	});
};

// toggle ui layout state management	
function toggleStateManagement ( skipAlert, mode ) {
	if (!jQuery.layout.plugins.stateManagement) return;
	
	var options	= myLayout.options.stateManagement
	,	enabled	= options.enabled // current setting
	;
	if (jQuery.type( mode ) === "boolean") {
		if (enabled === mode) return; // already correct
		enabled	= options.enabled = mode
	} else {
		enabled	= options.enabled = !enabled; // toggle option
	}
	
	if (!enabled) { // if disabling state management...
		myLayout.deleteCookie(); // ...clear cookie so will NOT be found on next refresh
		if (!skipAlert)
			alert( 'This layout will reload as the options specify \nwhen the page is refreshed.' );
	} else if (!skipAlert) {
		alert( 'This layout will save & restore its last state \nwhen the page is refreshed.' );
	}
	
	// update text on button
	var jQueryBtn = jQuery('#btnToggleState'), text = jQueryBtn.html();
	if (enabled) {
		jQueryBtn.html( text.replace(/Enable/i, "Disable") );
	} else {
		jQueryBtn.html( text.replace(/Disable/i, "Enable") );
	}
};
	
// layout ui debugData function
function debugData (o_Data, s_Title, options) {
	options = options || {};
	var
		str=(s_Title||s_Title==='' ? s_Title : 'DATA')
	//	maintain backward compatibility with OLD 'recurseData' param
	,	recurse=(typeof options=='boolean' ? options : options.recurse !==false)
	,	keys=(options.keys?','+options.keys+',':false)
	,	display=options.display !==false
	,	html=options.returnHTML !==false
	,	sort=!!options.sort
	,	prefix=options.indent ? '    ' : ''
	,	D=[], i=0 // Array to hold data, i=counter
	,	hasSubKeys = false
	,	k, t, skip, x, type	// loop vars
	;
	if (!o_Data || typeof o_Data !== 'object') {
		if (options.display) alert( (s_Title || 'debugData') +': '+ o_Data );
		return o_Data;
	}
	if (o_Data.jquery) {
		str=s_Title+'jQuery Collection ('+ o_Data.length +')\n    context="'+ o_Data.context +'"';
	}
	else if (o_Data.tagName && typeof o_Data.style == 'object') {
		str=s_Title+o_Data.tagName;
		var id = o_Data.id, cls=o_Data.className, src=o_Data.src, hrf=o_Data.href;
		if (id)  str+='\n    id="'+		id+'"';
		if (cls) str+='\n    class="'+	cls+'"';
		if (src) str+='\n    src="'+	src+'"';
		if (hrf) str+='\n    href="'+	hrf+'"';
	}
	else {
		parse(o_Data,prefix); // recursive parsing
		if (sort && !hasSubKeys) D.sort(); // sort by keyName - but NOT if has subKeys!
		if (str) str += '\n***'+ '****************************'.substr(0,str.length) +'\n';
		str += D.join('\n'); // add line-breaks
	}

	if (display) alert(str); // display data
	if (html) str=str.replace(/\n/g, ' <br>').replace(/  /g, ' &nbsp;'); // format as HTML
	return str;

	function parse ( data, prefix ) {
		if (typeof prefix=='undefined') prefix='';
		try {
			$.each( data, function (key, val) {
				k = prefix+key+':  ';
				skip = (keys && keys.indexOf(','+key+',') === -1);
				type = $.type(val);
				if (type==="date" || type==="regexp") {
					val  = val.toString();
					type = "string";
				}
				if (type==="string") {			// STRING
					if (!skip) D[i++] = k +'"'+ val +'"';
				}
												// NULL, UNDEFINED, NUMBER or BOOLEAN
				else if (type==="null" || type==="undefined" || type==="number" || type==="boolean") {
					if (!skip) D[i++] = k + val;
				}
				else if (type==="function") {	// FUNCTION
					if (!skip) D[i++] = k +'function()';
				}
				else if (val.jquery) {			// JQUERY OBJECT
					if (!skip) D[i++] = k +'jQuery ('+ val.length +') context="'+ val.context +'"';
				}
				else if (val.nodeName) {		// DOM ELEMENT
					var id = val.id, cls=val.className, src=val.src, hrf=val.href;
					if (skip) D[i++] = k +' '+
						id  ? 'id="'+	id+'"' :
						src ? 'src="'+	src+'"' :
						hrf ? 'href="'+	hrf+'"' :
						cls ? 'class="'+cls+'"' :
						'';
				}
				else if (type==="array") {		// ARRAY
					if (!skip) {
						D[i++] = k +'[';
						parse( val, prefix+'    '); // RECURSE
						D[i++] = prefix +']';
						/*
						if (val.length && typeof val[0] == "object") { // array of objects (hashs or arrays)
							D[i++] = k +'[';
							parse( val, prefix+'    '); // RECURSE
							D[i++] = prefix +']';
						}
						else
							D[i++] = k +'[ '+ val.toString() +' ]'; // output delimited array
						*/
					}
				}
				else {							// OBJECT or JSON
					// TODO: why are some JSON keys not $.isSimpleObject
					if (false && !$.isSimpleObject) {
						if (!skip) D[i++] = k +'OBJECT';
					}
					else if (!recurse || $.isEmptyObject(val)) { // show an empty hash
						if (!skip) D[i++] = k +'{ }';
					}
					else { // recurse into JSON hash - indent output
						D[i++] = k +'{';
						parse( val, prefix+'    '); // RECURSE
						D[i++] = prefix +'}';
					}
				}
			});
		} catch (e) {}
	}
};

function debugStackTrace (s_Title, options) {
	var
		callstack = []
	,	isCallstackPopulated = false
	;
	try {
		i.dont.exist += 0; // doesn't exist- that's the point
	} catch(e) {
		if (e.stack) { // Firefox
			var lines = e.stack.split('\n');
			for (var i=0, len=lines.length; i<len; i++) {
				if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
					callstack.push(lines[i]);
				}
			}
			//Remove call to printStackTrace()
			callstack.shift();
			isCallstackPopulated = true;
		}
		else if (window.opera && e.message) { // Opera
			var lines = e.message.split('\n');
			for (var i=0, len=lines.length; i<len; i++) {
				if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
					var entry = lines[i];
					//Append next line also since it has the file info
					if (lines[i+1]) {
						entry += ' at ' + lines[i+1];
						i++;
					}
					callstack.push(entry);
				}
			}
			//Remove call to printStackTrace()
			callstack.shift();
			isCallstackPopulated = true;
		}
	}

	if (!isCallstackPopulated) { // IE and Safari
		var currentFunction = arguments.callee.caller;
		while (currentFunction) {
			var fn = currentFunction.toString();
			var fname = fn.substring(fn.indexOf('function') + 8, fn.indexOf('')) || 'anonymous';
			callstack.push(fname);
			currentFunction = currentFunction.caller;
		}
	}

	debugData( callstack, s_Title, options );
};

if (!window.console) window.console = { log: debugData };

if (!window.console.trace)
	window.console.trace  = function (s_Title) {
		window.console.log( debugStackTrace(s_Title, { display: false, returnHTML: false, sort: false }) );
	};

// add method to output 'hash data' inside an string
window.console.data = function (data, title) {
	var	w		= { array: ['[',']'], object: ['{','}'], string: ['"','"'], number: ['',''], 'function': ['','()'] }
	,	x		= $.type( data )
	,	obj		= x.match(/(object|array)/)
	,	delim	= !obj ? ['',''] : x === 'object' ? ['{\n','\n}'] : ['[\n','\n]']
	,	opts	= { display: false, returnHTML: false, sort: false, indent: !!obj }
	,	debug	= debugData( data, '', opts)
	;
	console.log(
		(title ? title +' = ' : '')
	+	delim[0]
	+	($.type(debug) === 'string' ? debug.replace(/    /g, '\t') : debug)
	+	delim[1]
	);
};


/**
 *	timer
 *
 *	Utility for debug timing of events
 *	Can track multiple timers and returns either a total time or interval from last event
 *	@param String	timerName	Name of the timer - defaults to debugTimer
 *	@param String	action		Keyword for action or return-value...
 *	action: 'reset' = reset; 'clear' = delete; 'total' = ms since init; 'step' or '' = ms since last event
 */
/**
 *	timer
 *
 *	Utility method for timing performance
 *	Can track multiple timers and returns either a total time or interval from last event
 *
 *	returns time-data: {
 *		start:	Date Object
 *	,	last:	Date Object
 * 	,	step:	99 // time since 'last'
 *	,	total:	99 // time since 'start'
 *	}
 *
 *	USAGE SAMPLES
 *	=============
 *	timer('name'); // create/init timer
 *	timer('name', 'reset'); // re-init timer
 *	timer('name', 'clear'); // clear/remove timer
 *	var i = timer('name');  // how long since last timer request?
 *	var i = timer('name', 'total'); // how long since timer started?
 *
 *	@param String	timerName	Name of the timer - defaults to debugTimer
 *	@param String	action		Keyword for action or return-value...
 *	@param Hash		options		Options to customize return data
 *	action: 'reset' = reset; 'clear' = delete; 'total' = ms since init; 'step' or '' = ms since last event
 */
function timer (timerName, action, options) {
	var
		name	= timerName || 'debugTimer'
	,	Timer	= window[ name ]
	,	defaults = {
			returnString:	true
		,	padNumbers:		true
		,	timePrefix:		''
		,	timeSuffix:		''
		}
	;

	// init the timer first time called
	if (!Timer || action == 'reset') { // init timer
		Timer = window[ name ] = {
			start:	new Date()
		,	last:	new Date()
		,	step:	0 // time since 'last'
		,	total:	0 // time since 'start'
		,	options: $.extend({}, defaults, options)
		};
	}
	else if (action == 'clear') { // remove timer
		window[ name ] = null;
		return null;
	}
	else { // update existing timer
		Timer.step	= (new Date()) - Timer.last;  // time since 'last'
		Timer.total	= (new Date()) - Timer.start; // time since 'start'
		Timer.last	= new Date();
	}

	var
		time = (action == 'total') ? Timer.total : Timer.step
	,	o = Timer.options // alias
	;

	if (o.returnString) {
		time += ""; // convert integer to string
		// pad time to 4 chars with underscores
		if (o.padNumbers)
			switch (time.length) {
				case 1:	time = "&ensp;&ensp;&ensp;"+ time;	break;
				case 2:	time = "&ensp;&ensp;"+ time;	break;
				case 3:	time = "&ensp;"+ time;	break;
			}
		// add prefix and suffix
		if (o.timePrefix || o.timeSuffix)
			time = o.timePrefix + time + o.timeSuffix;
	}

	return time;
};


/**
 *	showOptions
 *
 *	Pass a layout-options object, and the pane/key you want to display
 */
function showOptions (Layout, key, debugOpts) {
	var data = Layout.options;
	jQuery.each(key.split("."), function() {
		data = data[this]; // recurse through multiple key-levels
	});
	debugData( data, 'options.'+key, debugOpts );
};

/**
 *	showState
 *
 *	Pass a layout-options object, and the pane/key you want to display
 */
function showState (Layout, key, debugOpts) {
	var data = Layout.state;
	jQuery.each(key.split("."), function() {
		data = data[this]; // recurse through multiple key-levels
	});
	debugData( data, 'state.'+key, debugOpts );
};


/**
 *	addThemeSwitcher
 *
 *	Remove the cookie set by the UI Themeswitcher to reset a page to default styles
 *
 *	Dependancies: /lib/js/themeswitchertool.js
 */
function addThemeSwitcher ( container, position ) {
	var pos = { top: '10px', right: '10px', zIndex: 10 };
	jQuery('<div id="themeContainer" style="position: absolute; overflow-x: hidden;"></div>')
		.css( $.extend( pos, position ) )
		.appendTo( container || 'body')
		.themeswitcher()
	;
};

/**
 *	removeUITheme
 *
 *	Remove the cookie set by the UI Themeswitcher to reset a page to default styles
 */
function removeUITheme ( cookieName, removeCookie ) {
	jQuery('link.ui-theme').remove();
	jQuery('.jquery-ui-themeswitcher-title').text( 'Switch Theme' );
	if (removeCookie !== false)
		jQuery.cookie( cookieName || 'jquery-ui-theme', null );
};



function debugWindow ( content, options ) {
	var defaults = {
		css: {
			position:	'fixed'
		,	top:		0
		}
	};
	jQuery.extend( true, (options || {}), defaults );
	var $W	= jQuery('<div></div>')
		.html( content.replace(/\n/g, '<br>').replace(/  /g, ' &nbsp;') ) // format as HTML
		.css( options.css )
		;
};

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);