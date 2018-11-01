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

// Place any jQuery/helper plugins in here.

/*! Retina.js: https://github.com/imulus/retinajs */
		/*(function() {
		    var root = (typeof exports === 'undefined' ? window : exports);
		    var config = {
		        // An option to choose a suffix for 2x images
		        retinaImageSuffix : '@2x',

		        // Ensure Content-Type is an image before trying to load @2x image
		        // https://github.com/imulus/retinajs/pull/45)
		        check_mime_type: true,

		        // Resize high-resolution images to original image's pixel dimensions
		        // https://github.com/imulus/retinajs/issues/8
		        force_original_dimensions: true
		    };

		    function Retina() {}

		    root.Retina = Retina;

		    Retina.configure = function(options) {
		        if (options === null) {
		            options = {};
		        }

		        for (var prop in options) {
		            if (options.hasOwnProperty(prop)) {
		                config[prop] = options[prop];
		            }
		        }
		    };

		    Retina.init = function(context) {
		        if (context === null) {
		            context = root;
		        }

		        var existing_onload = context.onload || function(){};

		        context.onload = function() {
		            var images = document.getElementsByTagName('img'), imagesLength = images.length, retinaImages = [], i, image;
		            for (i = 0; i < imagesLength; i += 1) {
		                image = images[i];
		                if (!!!image.getAttributeNode('data-no-retina')) {
		                    if (image.src) {
		                        retinaImages.push(new RetinaImage(image));
		                    }
		                }
		            }
		            existing_onload();
		        };
		    };

		    Retina.isRetina = function(){
		        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

		        if (root.devicePixelRatio > 1) {
		            return true;
		        }

		        if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
		            return true;
		        }

		        return false;
		    };


		    var regexMatch = /\.\w+$/;
		    function suffixReplace (match) {
		        return config.retinaImageSuffix + match;
		    }

		    function RetinaImagePath(path, at_2x_path) {
		        this.path = path || '';
		        if (typeof at_2x_path !== 'undefined' && at_2x_path !== null) {
		            this.at_2x_path = at_2x_path;
		            this.perform_check = false;
		        } else {
		            if (undefined !== document.createElement) {
		                var locationObject = document.createElement('a');
		                locationObject.href = this.path;
		                locationObject.pathname = locationObject.pathname.replace(regexMatch, suffixReplace);
		                this.at_2x_path = locationObject.href;
		            } else {
		                var parts = this.path.split('?');
		                parts[0] = parts[0].replace(regexMatch, suffixReplace);
		                this.at_2x_path = parts.join('?');
		            }
		            this.perform_check = true;
		        }
		    }

		    root.RetinaImagePath = RetinaImagePath;

		    RetinaImagePath.confirmed_paths = [];

		    RetinaImagePath.prototype.is_external = function() {
		        return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain) );
		    };

		    RetinaImagePath.prototype.check_2x_variant = function(callback) {
		        var http, that = this;
		        if (!this.perform_check && typeof this.at_2x_path !== 'undefined' && this.at_2x_path !== null) {
		            return callback(true);
		        } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
		            return callback(true);
		        } else if (this.is_external()) {
		            return callback(false);
		        } else {
		            http = new XMLHttpRequest();
		            http.open('HEAD', this.at_2x_path);
		            http.onreadystatechange = function() {
		                if (http.readyState !== 4) {
		                    return callback(false);
		                }

		                if (http.status >= 200 && http.status <= 399) {
		                    if (config.check_mime_type) {
		                        var type = http.getResponseHeader('Content-Type');
		                        if (type === null || !type.match(/^image/i)) {
		                            return callback(false);
		                        }
		                    }

		                    RetinaImagePath.confirmed_paths.push(that.at_2x_path);
		                    return callback(true);
		                } else {
		                    return callback(false);
		                }
		            };
		            http.send();
		        }
		    };

		    function RetinaImage(el) {
		        this.el = el;
		        this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
		        var that = this;
		        this.path.check_2x_variant(function(hasVariant) {
		            if (hasVariant) {
		                that.swap();
		            }
		        });
		    }

		    root.RetinaImage = RetinaImage;

		    RetinaImage.prototype.swap = function(path) {
		        if (typeof path === 'undefined') {
		            path = this.path.at_2x_path;
		        }

		        var that = this;
		        function load() {
		            if (! that.el.complete) {
		                setTimeout(load, 5);
		            } else {
		                if (config.force_original_dimensions) {
		                    if (that.el.offsetWidth == 0 && that.el.offsetHeight == 0) {
		                        that.el.setAttribute('width', that.el.naturalWidth);
		                        that.el.setAttribute('height', that.el.naturalHeight);
		                    } else {
		                        that.el.setAttribute('width', that.el.offsetWidth);
		                        that.el.setAttribute('height', that.el.offsetHeight);
		                    }
		                }

		                that.el.setAttribute('src', path);
		            }
		        }
		        load();
		    };


		    if (Retina.isRetina()) {
		        Retina.init(root);
		    }
		})();*/



/*! Picturefill - v2.1.0 - 2014-07-25
	* http://scottjehl.github.io/picturefill
	* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
	window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h=a||{};b=h.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,f=void 0,g=void 0,c[e.ns]||(c[e.ns]={}),h.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(e.removeVideoShim(d),f=e.getMatch(c,d),f===!1)continue}else f=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!e.srcsetSupported||!e.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&e.dodgeSrcset(c),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,c)):(g=e.processSourceSet(c),(void 0===c.srcset||c[e.ns].srcset)&&e.applyBestCandidate(g,c)),c[e.ns].evaluated=!0}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported="srcset"in b.createElement("img"),e.sizesSupported=a.HTMLImageElement.sizes,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth<=0&&(e.lengthEl.style.cssText="width: 100%;"),e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=e.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),i=h.length+1;i>=0;i--)if(void 0!==h[i]){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||e.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}f&&!e.endsWith(b.src,f.url)&&(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,f=c.length;f>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[e.ns]&&null!==g[e.ns].srcset)&&a.push(g)}return a},e.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||e.matchesMedia(i))){var j=e.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}(this,this.document);