!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return e.offsetWidth>0}function i(){return window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth}function u(){return window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight}function c(){var e=navigator.userAgent;return-1!==e.indexOf("Firefox")?"FIREFOX":-1!==e.indexOf("Trident")?"IE":-1!==e.indexOf("OPR")?"OPERA":-1!==e.indexOf("Edg")?"EDGE":-1!==e.indexOf("Chrome")?"CHROME":-1!==e.indexOf("Safari")?"SAFARI":"UNKNOWN"}function l(e,t){for(var n in t)e[n]=t[n]}function s(e,t){e.style.top=t.offsetHeight/2-e.offsetHeight/2+"px",e.style.left=t.offsetWidth/2-e.offsetWidth/2+"px"}function f(e){return{x:e.getBoundingClientRect().left,y:e.getBoundingClientRect().top}}function y(e){return e.hasOwnProperty("fadeOut_timeout")&&null!==e.fadeOut_timeout}function d(e,t){return""!=t.className&&-1!==t.className.split(" ").indexOf(e)}function m(e,t){return!d(e,t)&&(t.className+=" "+e,!0)}function k(e,t){if(!d(e,t))return!1;var n=t.className.split(" "),r="",o=n.indexOf(e);n.splice(o,1),n.length>0&&(r=n[0]);for(var a=1;a<n.length;a++)r+=" "+n[a];return t.className=r,!0}function p(e,t,n){return null!=e&&t<e?t=e:null!=n&&t>n&&(t=n),t}e.exports=(o(n={addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},isDisplayed:a,getOffsetHeight:function(e){if(a(e))return e.offsetHeight;var t=e.style.display;e.style.display="block";var n=e.offsetHeight;return e.style.display=t,n},widthSpace:function(e){var t=document.createElement("div");return t.style.display="inline-block",t.style.width=e+"px",t},heightSpace:function(e){var t=document.createElement("div");return t.style.height=e+"px",t},clearArray:function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},clearInput:function(e){var t=document.createElement("form"),n=e.parentNode,r=e.nextSibling;t.appendChild(e),t.reset(),n.insertBefore(e,r)},getTextContent:function(e){return e.textContent||e.innerText||""},getScrollY:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},getInnerWidth:i,getInnerHeight:u,toXML:function(e){if(window.ActiveXObject){(t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)}else var t=(new DOMParser).parseFromString(e,"text/xml");return t},getExtention:function(e){if(e.lastIndexOf(".")>0)return e.substring(e.lastIndexOf(".")+1,e.length)},getNavigator:c,onLeave:function(e,t,n){void 0===t&&(t=!1);window.onbeforeunload=function(r){if(e(),t)return r=r||window.event,n=n||"",r&&(r.returnValue=n),n}}
//!\\ Ne fonctionne pas sous IE (renvoie automatiquement false)
,is404:function(e){if("IE"==c())return!1;var t=e.document.getElementsByTagName("title");return 0!=t.length&&"404 Not Found"==t[0].innerHTML},getUrlParams:function(){var e={},t=window.location.search;if(t){params=t.substring(1).split("&");for(var n=0;n<params.length;n++){var r=params[n];r=r.split("="),e[r[0]]=r[1]}}return e},assign:l,loadJSON:function(e,t,n,o){var a={},i=new XMLHttpRequest;if(i.open("POST",e,!0),i.setRequestHeader("Content-Type","application/json"),"object"===r(t)){var u="";for(var c in t)u+=c+"="+t[c]+"&";u=u.substring(0,u.length-1),i.send(u)}else i.send();return i.onreadystatechange=function(){if(this.readyState!=this.DONE)return!1;if(200==this.status){try{newObj=JSON.parse(this.response),Object.assign?Object.assign(a,newObj):l(a,newObj)}catch(e){return o?o(e):console.warn(e),!1}n&&n()}else{var e="loadJSON Error "+this.status;o?o(e):console.warn(e)}},a},copyData:function(e,t){return void 0!==t?JSON.parse(JSON.stringify(e,t)):JSON.parse(JSON.stringify(e))},getExecutionTime:function(e){var t=Date.now();return e(),Date.now()-t},devlog:function(e,t){if("undefined"==typeof devmode)return!1;null==t&&(t=1);t<=devmode&&console.log(e)},txt:function(e){return document.createTextNode(e)},divTxt:function(e,t,n){var r=document.createElement("div");r.style.textAlign="center",r.style.display="inline-block","auto"!==e&&(r.style.width=e+"px");void 0!==t&&(r.innerHTML=t);void 0!==n&&(r.style.lineHeight=n+"px");return r},hide:function(e){e.style.display="none"},show:function(e){e.style.display="inline-block"},showBlock:function(e){e.style.display="block"},remove:function(e){e.parentNode.removeChild(e)},mouseover:function(e,t){var n=f(t),r=!0;(e.clientX<n.x||e.clientX>n.x+t.offsetWidth||e.clientY<n.y||e.clientY>n.y+t.offsetHeight)&&(r=!1);return r},mousePosition:function(e,t){var n=f(t);return{x:e.clientX-n.x,y:e.clientY-n.y}},getScreenPosition:f,centerOnScreen:function(e){e.style.top=u()/2-e.offsetHeight/2+"px",e.style.left=i()/2-e.offsetWidth/2+"px"},centerOnElement:s,verticalAlign:function(e,t,n){void 0===t&&(t="CENTER");var r=0;r=void 0===n?u():n.offsetHeight;"CENTER"===t?e.style.top=r/2-e.offsetHeight/2+"px":"TOP"===t?e.style.top="0px":"BOTTOM"===t&&(e.style.top=r-e.offsetHeight+"px")},horizontalAlign:function(e,t,n){void 0===t&&(t="CENTER");var r=0;r=void 0===n?i():n.offsetWidth;"CENTER"===t?e.style.left=r/2-e.offsetWidth/2+"px":"LEFT"===t?e.style.left="0px":"RIGHT"===t&&(e.style.left=r-e.offsetWidth+"px")},fitScale:function(e,t,n){var r=t.offsetWidth/e.offsetWidth,o=t.offsetHeight/e.offsetHeight,a=0;if(void 0===n)a=Math.min(r,o);else a=Math.min(r,o,n);e.style.transform="scale("+a+")",s(e,t)},fadeOut:function(e,t,n,r,o){if(y(e))return!1;void 0===r&&(r="");void 0===o&&(o="");e.style.animation=n+"ms "+t+" "+r+" "+o,e.fadeOut_timeout=setTimeout((function(){e.style.display="none",e.fadeOut_timeout=null,e.style.animation=""}),n)},cancelFadeOut:function(e){return!!y(e)&&(clearInterval(e.fadeOut_timeout),e.fadeOut_timeout=null,e.style.animation="",!0)},fadeOutIsRunning:y,restartAnimation:function(e){var t=e.style.animationName;e.style.animationName="",setTimeout((function(){e.style.animationName=t}),18)},hasClass:d,addClass:m,removeClass:k,toggleClass:function(e,t){if(!k(e,t))return m(e,t),!0;return!1},getRandomInt:function(e,t){return t+=1,Math.floor(Math.random()*(t-e))+e},getRandomFloat:function(e){return Math.random()*e},clamp:p},"clamp",p),o(n,"checkRange",(function(e,t,n){e<t?e=t:e>n&&(e=n);return e})),o(n,"toBin",(function(e,t,n){var r=[];void 0===t&&(t=0);void 0===n&&(n=!1);for(;e;)r.push(e%2),e=Math.floor(e/2);for(;r.length<t;)r.push(0);n&&r.reverse();return r})),o(n,"getFormatedTime",(function(e){var t=0,n=0,r=0,o=parseInt(e%1*1e3);if(e>=1)t=parseInt(e/60/60),n=parseInt(e/60-60*t),r=parseInt(e)-60*n-60*t*60;return{h:t,m:n,s:r,ms:o}})),o(n,"invertDateFormat",(function(e,t){if(10!==e.length)return"Unsupported format";if(isNaN(e.charAt(4)))return void 0===t&&(t=e.charAt(4)),e.substring(8,10)+t+e.substring(5,7)+t+e.substring(0,4);void 0===t&&(t=e.charAt(2));return e.substring(6,10)+t+e.substring(3,5)+t+e.substring(0,2)})),o(n,"zerofill",(function(e,t){e=String(e);for(;e.length<t;)e="0"+e;return e})),o(n,"ucfirst",(function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),o(n,"space2nbsp",(function(e){return e.replace(/\s/g,"&nbsp;")})),o(n,"nl2br",(function(e){return e.replace(/\n/gm,"<br />")})),o(n,"br2nl",(function(e){return e.replace(/<br \/>/gm,"\n")})),o(n,"space2underscore",(function(e){return e.replace(/ /g,"_")})),o(n,"underscore2space",(function(e){return e.replace(/_/g," ")})),o(n,"escapeQuote",(function(e,t){void 0===t&&(t=!0);return t?e.replace(/"/g,"&quot;"):e.replace(/"/g,'\\"')})),o(n,"escapeSimpleQuote",(function(e,t){void 0===t&&(t=!0);return t?e.replace(/'/g,"&apos;"):e.replace(/'/g,"\\'")})),o(n,"escapeTags",(function(e,t){void 0===t&&(t=!0);return t?e.replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.replace(/</g,"\\<").replace(/>/g,"\\>")})),o(n,"htmlspecialchars",(function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")})),o(n,"htmlspecialchars_decode",(function(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")})),o(n,"whichClick",(function(e){return 0===e.button?"LEFT":1===e.button?"MIDDLE":2===e.button?"RIGHT":3===e.button?"BACK":4===e.button?"FORWARD":"OTHER"})),o(n,"wheelDirection",(function(e){if(e.deltaY<0)return"UP";if(e.deltaY>0)return"DOWN"})),o(n,"getKey",(function(e){if(void 0!==e.key){var t=e.key;switch(t){case"Up":t="ArrowUp";break;case"Right":t="ArrowRight";break;case"Down":t="ArrowDown";break;case"Left":t="ArrowLeft";break;case"Spacebar":t=" ";break;case"Esc":t="Escape";break;case"Del":t="Delete";break;case"Add":t="+";break;case"Subtract":t="-";break;case"Multiply":t="*";break;case"Divide":t="/";break;case"Win":t="OS";break;case"Scroll":t="ScrollLock"}return t}var n=e.keyCode;return void 0!==g[n]&&(e.maj?g[n].maj?g[n].maj:g[n].key:e.altKey&&e.ctrlKey&&g[n].alt?g[n].alt:g[n].key)})),o(n,"isArrowPressed",(function(e){return void 0!==e.key?"ArrowLeft"==e.key||"ArrowUp"==e.key||"ArrowRight"==e.key||"ArrowDown"==e.key||"Left"==e.key||"Up"==e.key||"Right"==e.key||"Down"==e.key:37==e.keyCode||38==e.keyCode||39==e.keyCode||40==e.keyCode})),o(n,"isLetterPressed",(function(e,t){void 0===t&&(t=!0);if(void 0!==e.key)return 1==e.key.length&&(t?/[A-Za-zéèçàù]/.test(e.key):/[A-Za-z]/.test(e.key));var n=e.keyCode;return t?n>=65&&n<=90||!e.maj&&(50==n||55==n||57==n||48==n||165==n):n>=65&&n<=90})),o(n,"isNumericPressed",(function(e,t){void 0===t&&(t=!0);return void 0!==e.key?t?/^[0-9]/.test(e.key):/^[0-9&é"'\(\-è_çà]/.test(e.key):t?e.keyCode>=48&&e.keyCode<=57&&e.maj||e.keyCode>=96&&e.keyCode<=105:e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105})),o(n,"focusedOnInput",(function(){var e=document.activeElement.tagName;return"INPUT"===e||"TEXTAREA"===e||"SELECT"===e})),n);var g=[];g[0]={key:"²"},g[8]={key:"Backspace"},g[9]={key:"Tab"},g[13]={key:"Enter"},g[16]={key:"Shift"},g[17]={key:"Ctrl"},g[18]={key:"Alt"},g[19]={key:"Pause"},g[20]={key:"CapsLock"},g[27]={key:"Escape"},g[32]={key:" "},g[33]={key:"PageUp"},g[34]={key:"PageDown"},g[35]={key:"End"},g[36]={key:"Home"},g[37]={key:"ArrowLeft"},g[38]={key:"ArrowUp"},g[39]={key:"ArrowRight"},g[40]={key:"ArrowDown"},g[45]={key:"Insert"},g[46]={key:"Delete"},g[48]={key:"à",maj:"0",alt:"@"},g[49]={key:"&",maj:"1"},g[50]={key:"é",maj:"2",alt:"~"},g[51]={key:'"',maj:"3",alt:"#"},g[52]={key:"'",maj:"4",alt:"{"},g[53]={key:"(",maj:"5",alt:"["},g[54]={key:"-",maj:"6",alt:"|"},g[55]={key:"è",maj:"7",alt:"`"},g[56]={key:"_",maj:"8",alt:"\\"},g[57]={key:"ç",maj:"9",alt:"^"},g[58]={key:":",maj:"/"},g[59]={key:";",maj:"."},g[60]={key:"<",maj:">"},g[61]={key:"=",maj:"+",alt:"}"},g[65]={key:"a",maj:"A"},g[66]={key:"b",maj:"B"},g[67]={key:"c",maj:"C"},g[68]={key:"d",maj:"D"},g[69]={key:"e",maj:"E",alt:"€"},g[70]={key:"f",maj:"F"},g[71]={key:"g",maj:"G"},g[72]={key:"h",maj:"H"},g[73]={key:"i",maj:"I"},g[74]={key:"j",maj:"J"},g[75]={key:"k",maj:"K"},g[76]={key:"l",maj:"L"},g[77]={key:"m",maj:"M"},g[78]={key:"n",maj:"N"},g[79]={key:"o",maj:"O"},g[80]={key:"p",maj:"P"},g[81]={key:"q",maj:"Q"},g[82]={key:"r",maj:"R"},g[83]={key:"s",maj:"S"},g[84]={key:"t",maj:"T"},g[85]={key:"u",maj:"U"},g[86]={key:"v",maj:"V"},g[87]={key:"w",maj:"W"},g[88]={key:"x",maj:"X"},g[89]={key:"y",maj:"Y"},g[90]={key:"z",maj:"Z"},g[91]={key:"OS"},g[93]={key:"ContextMenu"},g[96]={key:"0"},g[97]={key:"1"},g[98]={key:"2"},g[99]={key:"3"},g[100]={key:"4"},g[101]={key:"5"},g[102]={key:"6"},g[103]={key:"7"},g[104]={key:"8"},g[105]={key:"9"},g[106]={key:"*"},g[107]={key:"+"},g[109]={key:"-"},g[110]={key:"."},g[112]={key:"F1"},g[113]={key:"F2"},g[114]={key:"F3"},g[115]={key:"F4"},g[116]={key:"F5"},g[117]={key:"F6"},g[118]={key:"F7"},g[119]={key:"F8"},g[120]={key:"F9"},g[121]={key:"F10"},g[122]={key:"F11"},g[123]={key:"F12"},g[144]={key:"NumLock"},g[145]={key:"ScrollLock"},g[160]={key:"^",maj:"¨"},g[161]={key:"!",maj:"§"},g[164]={key:"$",maj:"£",alt:"¤"},g[165]={key:"ù",maj:"%"},g[169]={key:")",maj:"°",alt:"]"},g[170]={key:"*",maj:"µ"},g[188]={key:",",maj:"?"},g[222]={key:"²"}}]));