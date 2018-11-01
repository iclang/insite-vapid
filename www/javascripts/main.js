// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/*! Picturefill - v2.1.0 - 2014-07-25
	* http://scottjehl.github.io/picturefill
	* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
	window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h=a||{};b=h.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,f=void 0,g=void 0,c[e.ns]||(c[e.ns]={}),h.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(e.removeVideoShim(d),f=e.getMatch(c,d),f===!1)continue}else f=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!e.srcsetSupported||!e.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&e.dodgeSrcset(c),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,c)):(g=e.processSourceSet(c),(void 0===c.srcset||c[e.ns].srcset)&&e.applyBestCandidate(g,c)),c[e.ns].evaluated=!0}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported="srcset"in b.createElement("img"),e.sizesSupported=a.HTMLImageElement.sizes,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth<=0&&(e.lengthEl.style.cssText="width: 100%;"),e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=e.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),i=h.length+1;i>=0;i--)if(void 0!==h[i]){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||e.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}f&&!e.endsWith(b.src,f.url)&&(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,f=c.length;f>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[e.ns]&&null!==g[e.ns].srcset)&&a.push(g)}return a},e.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||e.matchesMedia(i))){var j=e.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}(this,this.document);



/* === GLOBAL VARIABLES =================== */
/* ======================================== */
	/* Breakpoints (copied from CSS file) */
		var mobile      = 0,
			lrg_mobile  = 500,
			tablet      = 600,
			ipad        = 768,
			mid_tablet  = 800,
			lrg_tablet  = 1024,
			desktop     = 1280,
			lrg_desktop = 1400;


/* === HEADER ============================= */
/* ======================================== */
	/* Mobile Menu Link */
		/* jQuery Version
		$().ready(function(){
			$('#header').find('.mobileMenuLink a').on('click', function(e){
				e.preventDefault();

				var $link = $(this),
					$menu = $('#menu'); 

				/* Show/Hide Menu on Mobile /
				if(!$($menu).is(':visible')){
					$link.addClass('active');
					$menu.slideDown(450);
				} else {
					$menu.slideUp(250, function(){
						$link.removeClass('active');
					});
				}
			});
		});*/
		var menuLinkSet = false;
		ready(new function(){
			menuLink();
			function menuLink(){
				var el = document.querySelector('#header .menu_link a');
				menuLinkSet = true;
				el.addEventListener('click', function(e){
					e.preventDefault();
					toggleClass(document.querySelector('#main_nav'), 'open');
				}, false);
			}
			var waitForIt = setTimeout(function(){
				if(!menuLinkSet) {
					menuLink();
				}
			},750);
		});

	/* Show Contact (footer) Section */
		/*ready(new function(){
			var contactLink = document.querySelector('#main_nav .contactLink');
			var openContactLink = (document.querySelector('a.openContact') !== null) ? document.querySelector('a.openContact') : false;
			var contactSection = document.getElementById('contact');
			var header = document.getElementById('header');
			// Clone #contact so we can grab the height; then destory it
				var contactSectionClone = contactSection.cloneNode(true);
				document.body.appendChild(contactSectionClone);
				contactSectionClone.style.maxHeight = '1000px';
				contactSectionClone.style.position = 'relative';
				var contactSectionHeight = contactSectionClone.offsetHeight;
				contactSectionClone.parentNode.removeChild(contactSectionClone);
			
			contactLink.addEventListener('click', function(e){
				e.preventDefault();
				openCloseContact();
				ga('send','event','Clicks','Main Nav Contact Link');
			}, false);
			if(openContactLink){
				openContactLink.addEventListener('click', function(e){
					e.preventDefault();
					location.href="#contact";
					openCloseContact(true);
					ga('send','event','Clicks','Contact Us Links');
				}, false);
			}

			function openCloseContact(open){
				if(viewport().width >= tablet){
					toggleClass(contactSection, 'show');
					if(open) {
						addClass(contactSection, 'show');
					}
					if(header.style.top === ''  || header.style.top === '0px') {
						// Open Section
						header.style.top = contactSectionHeight + 'px';
					} else {
						// Close Section
						header.style.top = 0;
					}
				} else {
					//var $menu = document.querySelector('#main_nav'); 
					//toggleClass($menu, 'open');
				}
			}
		});*/
	
	/* New Sticky Nav Code */
		document.addEventListener('DOMContentLoaded', function(){
			var $header = document.getElementById('header');

			if(viewport().width >= 768){
				window.addEventListener('scroll', function(){
					var $window = window,
						scrollY = getScroll()[1]
						headerHeight = $header.offsetHeight;
					
					if(scrollY >= 1) {
						addClass($header, 'scrolled');
					} else {
						removeClass($header, 'scrolled');
					}
				});
			} else {

			}
		});

	/* Sticky Nav (not used) */
		//var stationaryHeaderHeight = document.getElementById('header').getBoundingClientRect();
			// top: stationaryHeaderHeight.top + document.body.scrollTop,
		/*document.addEventListener('DOMContentLoaded', function(){
			var $header = document.getElementById('header');
			if($header){
				var $container = document.getElementById('container'),
					$nav = document.getElementById('main_nav'),
					headerPos = $header.getBoundingClientRect(),
					headerHeightPlusMargin = $header.offsetHeight,
					navPos = $nav.getBoundingClientRect(),
					headerBuffer = (navPos.top - 8) * -1;
				stationaryHeaderHeight = navPos;
				
				var lt_ie9 = document.querySelector('.lt-ie9');
				if(viewport().width >= 805 && !lt_ie9){
					var onresize = debounce(function() {
						headerPos = $header.getBoundingClientRect(),
						//headerDim = [$header.outerWidth(), $header.outerHeight()],
						headerHeightPlusMargin = $header.offsetHeight,
						navPos = $nav.getBoundingClientRect(),
						headerBuffer = (navPos.top - 8) * -1;
						stationaryHeaderHeight = navPos;
						rePositionNav();	
					}, 250);
					window.addEventListener('resize', onresize);

					window.addEventListener('scroll', function(){
						rePositionNav();
					});
				}
				function rePositionNav(){
					var $window = window,
						scrollY = getScroll()[1];
					if(scrollY >= headerBuffer * -1 && viewport().width >= 805) {
						$container.style.marginTop = headerHeightPlusMargin;
						addClass($header,'floating');
						$header.style.position = 'fixed';
						$header.style.zIndex = 9;
						$header.style.left = headerPos.left;
						$header.style.top = headerBuffer;
						$header.style.width = $container.offsetWidth;
					} else {
						$container.style.marginTop = 0;
						removeClass($header,'floating');
						$header.style.position = 'static';
						$header.style.zIndex = 0;
						$header.style.left = 0;
						$header.style.top = 0;
						$header.style.width = 'auto';
					}
				}
			}
		});*/
		


/* === CONTACT FORM ======================= */
/* ======================================== */
	//ready(new function(){
		var form = document.getElementById('contactUsForm'),
			submitButton = document.getElementById('submitButton'),
			form_name    = document.getElementById('contactForm_name'),
			form_email   = document.getElementById('contactForm_email'),
			form_tel     = document.getElementById('contactForm_tel'),
			form_msg     = document.getElementById('contactForm_msg');
			form_suffix  = document.getElementById('contactForm_suffix');
		if(form){
			submitButton.addEventListener('click', function(e){
				e.preventDefault();
				// Clear Previous Errors/Confirmations
					var validForm = true;
					removeClass(form_name,'error');
					removeClass(form_email,'error');
					removeClass(form_msg,'error');
					var msgs = document.querySelectorAll('.errorMsg');
					Array.prototype.forEach.call(msgs, function(el, i){
						el.parentNode.removeChild(el);
					});
					var msgs = document.querySelectorAll('.confirmationMsg');
					Array.prototype.forEach.call(msgs, function(el, i){
						el.parentNode.removeChild(el);
					});
				// Validate Fields
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if(form_name.value === ''){
						addClass(form_name, 'error');
						form_name.insertAdjacentHTML('afterend', '<span class="errorMsg">Please provide your name</span>');
						validForm = false;
					}
					if(form_email.value === ''){
						addClass(form_email, 'error');
						form_email.insertAdjacentHTML('afterend', '<span class="errorMsg">Please provide a valid email</span>');
						validForm = false;
					} else if(!re.test(form_email.value)) {
						addClass(form_email, 'error');
						form_email.insertAdjacentHTML('afterend', '<span class="errorMsg">Please provide a valid email</span>');
						validForm = false;
					}
					if(form_msg.value === ''){
						addClass(form_msg, 'error');
						form_msg.insertAdjacentHTML('afterend', '<span class="errorMsg">Please provide your message</span>');
						validForm = false;
					}
					//if(form_suffix.value !== ''){
						// Fake the submission
					//}
				
				if(validForm){
					request = new XMLHttpRequest();
					request.open('GET', '/_contactForm.cfc?method=contactForm&Name='+form_name.value+'&Email='+form_email.value+'&Tel='+form_tel.value+'&Msg='+form_msg.value+'&Suffix='+form_suffix.value, true);

					request.onload = function() {
					  if (request.status >= 200 && request.status < 400){
					    // Success!
					    //resp = request.responseText;
					    //data = JSON.parse(request.responseText);
					    if(request.responseText){
					    	form_msg.value = '';
					    	form_suffix.value = '';
					    	var msg = document.createElement('p');
					    	msg.setAttribute('class','confirmationMsg');
					    	msg.innerHTML = 'Thanks for contacting us!';
					    	form.appendChild(msg);
					    }
					  } else {
					    // We reached our target server, but it returned an error
					  }
					};
					request.onerror = function() {
					  // There was a connection error of some sort
					};
					request.send();
					ga('send','event','Clicks','Contact Form Submitted');
				}
			});
		}
	//});



/* === FEATURED PROJECT =================== */
/* ======================================== */
	ready(new function(){
		var workPg = document.getElementById('work');
		if(workPg){
			var featured = document.querySelector('div.featured');
			var randNum = Math.floor(Math.random()*featuredProjs.length);

			var links = featured.querySelectorAll('a');
			Array.prototype.forEach.call(links, function(el, i){
				el.setAttribute('href',featuredProjs[randNum].Link);
			});
			featured.querySelector('h1').innerHTML = featuredProjs[randNum].Tagline;
			featured.querySelector('h2').innerHTML = featuredProjs[randNum].Client;
			featured.querySelector('.desc').innerHTML = featuredProjs[randNum].Desc;
			featured.querySelector('figcaption').innerHTML = featuredProjs[randNum].Alt;
			featured.querySelector('img').setAttribute('alt',featuredProjs[randNum].Alt);
			var images = featuredImgPath+featuredProjs[randNum].Images+featuredImgExt+', '+featuredImgPath+featuredProjs[randNum].Images+featuredImgExtAt2x+' 2x';
			featured.querySelector('source').setAttribute('srcset',images);
			featured.querySelector('img').setAttribute('srcset',images);
			var pfPause = setTimeout(function(){
				picturefill({reevaluate: true});
			},250);
		}
	});


/* === HOMEPAGE COPY ANIMATION ============ */
/* ======================================== */
	ready(new function(){
		var homeBannerTitle = document.getElementById('homeBannerTitle');
		if(homeBannerTitle){
			var titles = document.querySelectorAll('div.alt_pagetitle');
			var counter = 0;
			var timer = setInterval(function(){
				homeBannerTitle.innerHTML = titles[counter].innerHTML;
				counter = (counter < titles.length-1) ? counter + 1 : 0;
			},2000);
		}
	});


/* === UTILITIES ========================== */
/* ======================================== */
	
	function ready(fn) {
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', fn);
		} else {
			document.attachEvent('onreadystatechange', function() {
				if (document.readyState === 'interactive')
				fn();
			});
		}
	}

	function toggleClass(el, className){
		if (el.classList) {
			el.classList.toggle(className);
		} else {
			var classes = el.className.split(' ');
			var existingIndex = classes.indexOf(className);

			if (existingIndex >= 0){
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}
			el.className = classes.join(' ');
		}
	}

	function getScroll(){
		if(window.pageYOffset !== undefined){
			return [pageXOffset, pageYOffset];
		} else{
			var sx, sy, d= document, r= d.documentElement, b= d.body;
			sx= r.scrollLeft || b.scrollLeft || 0;
			sy= r.scrollTop || b.scrollTop || 0;
			return [sx, sy];
		}
	}

	function viewport(){
		var e = window, a = 'inner';
		if ( !( 'innerWidth' in window ) ){
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}

	function fireEvent(obj, evt){
	 var fireOnThis = obj;
	 if( document.createEvent ) {
	   var evObj = document.createEvent('MouseEvents');
	   evObj.initEvent( evt, true, false );
	   fireOnThis.dispatchEvent( evObj );
	 }
	  else if( document.createEventObject ) { //IE
	   var evObj = document.createEventObject();
	   fireOnThis.fireEvent( 'on' + evt, evObj );
	 } 
	} 

	/* - autoSmoothScroll -
	 * Licence MIT
	 * Written by Gabriel Delépine
	 *** MODIFIED by clang@insite.net: link must have ".scrollTo"
	 * Current version  1.3 (2014-07-23)
	 * */
		(function(window, undefined) // Code in a function to create an isolate scope
		{
		    'use strict';
		    var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
		        speed = 500,
		        moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
		        links = document.getElementsByTagName('a'),
		        href;
		    
		    for(var i=0; i<links.length; i++)
		    {
		        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
		        if(href !== null && href.length > 1 && href.indexOf('#') != -1 && hasClassName(links[i], 'scrollTo') == true) // href.substr(0, 1) == '#'
		        {
		            links[i].onclick = function()
		            {
		                var element,
		                    href = this.attributes.href.nodeValue.toString(),
		                    url = href.substr(0, href.indexOf('#')),
		                    id = href.substr(href.indexOf('#')+1);
		                if(element = document.getElementById(id))
		                {
		                    
		                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
		                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
		                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
		                    
		                    if(window.history && typeof window.history.pushState == 'function')
		                        window.history.pushState({}, undefined, url+'#'+id);// Change URL for modern browser
		                    
		                    for(var i = 1; i <= hop_count; i++)
		                    {
		                        (function()
		                        {
		                            var hop_top_position = gap*i;
		                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
		                        })();
		                    }
		                    
		                    return false;
		                }
		            };
		        }
		    }
		    
		    var getScrollTopElement =  function(e)
		    {
		        var top = height_fixed_header * -1;

		        while (e.offsetParent != undefined && e.offsetParent != null)
		        {
		            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
		            e = e.offsetParent;
		        }
		        
		        return top;
		    };
		    
		    var getScrollTopDocument = function()
		    {
		        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
		    };
		})(window);
	/* end */ 

	function hasClassName(el, className){
		if (el.classList){
			return el.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	function addClass(el, className) {
		if (el.classList){
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	function removeClass(el, className){
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}
	/*var myEfficientFn = debounce(function() {
		// All the taxing stuff you do
	}, 250);

	window.addEventListener('resize', myEfficientFn);*/


