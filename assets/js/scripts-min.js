!function(){return function e(t,o,n){function s(c,l){if(!o[c]){if(!t[c]){var u="function"==typeof require&&require;if(!l&&u)return u(c,!0);if(r)return r(c,!0);var i=new Error("Cannot find module '"+c+"'");throw i.code="MODULE_NOT_FOUND",i}var d=o[c]={exports:{}};t[c][0].call(d.exports,function(e){return s(t[c][1][e]||e)},d,d.exports,e,t,o,n)}return o[c].exports}for(var r="function"==typeof require&&require,c=0;c<n.length;c++)s(n[c]);return s}}()({1:[function(e,t,o){"use strict";var n=e("./modules/getAllResources"),s=e("./modules/GetResource"),r=e("./modules/createResource"),c=e("./modules/updateResource"),l=e("./modules/deleteResource"),u=e("./modules/filteringResource");(0,n.fnGetAllResources)(),(0,s.fnGetResource)(),(0,r.fnCreateResource)(),(0,c.fnUpdateResource)(),(0,l.fnDeleteResource)(),(0,u.fnFilteringResource)()},{"./modules/GetResource":2,"./modules/createResource":3,"./modules/deleteResource":4,"./modules/filteringResource":5,"./modules/getAllResources":6,"./modules/updateResource":8}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("./globalVars"),o.fnGetResource=function(){fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(e){console.log("Get Resource"),console.log(e)})}},{"./globalVars":7}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("./globalVars"),o.fnCreateResource=function(){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(function(e){return e.json()}).then(function(e){console.log("Create Resource"),console.log(e)})}},{"./globalVars":7}],4:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.fnDeleteResource=function(){fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){console.log("Delete Resource"),console.log(e)})}},{}],5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.fnFilteringResource=function(){}},{}],6:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("./globalVars"),o.fnGetAllResources=function(){var e=function(e){var t=document.getElementById("myContent");e.forEach(function(e){var o='\n\t\t\t\t<article class="card" id="'+e.id+'">\n\t\t\t\t\t<div class="card__close">\n\t\t\t\t\t\t<span class="btnDelete">X</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__title">\n\t\t\t\t\t\t<h1>Name: '+e.title+'</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__content">\n\t\t\t\t\t\t<p>'+e.body+'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__sub-content">\n\t\t\t\t\t\t<p>'+e.userId+'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__date"><span>ID: '+e.title+"</span></div>\n\t\t\t\t</article>\n\t\t\t";t.insertAdjacentHTML("beforeend",o)})};fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){console.log("Get All Resources"),console.log(t),console.log("Print All Resources"),e(t)})}},{"./globalVars":7}],7:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.url="https://jsonplaceholder.typicode.com/users"},{}],8:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("./globalVars"),o.fnUpdateResource=function(){fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",body:JSON.stringify({id:1,title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(function(e){return e.json()}).then(function(e){console.log("Update Resource"),console.log(e)})}},{"./globalVars":7}]},{},[1]);
//# sourceMappingURL=scripts-min.js.map
