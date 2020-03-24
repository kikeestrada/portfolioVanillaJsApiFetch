(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _loadApi = require("./modules/loadApi");

var _example = require("./modules/example");

(0, _example.hello)();
(0, _example.bye)();
(0, _loadApi.fnLoadApi)();

},{"./modules/example":2,"./modules/loadApi":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var hello = exports.hello = function hello() {
	console.log('Hello World');
};
var bye = exports.bye = function bye() {
	console.log('Bye World');
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var fnLoadApi = exports.fnLoadApi = function fnLoadApi() {
	// const to validate the request state
	var STATUS_OK = 200;
	var STATUS_NOT_FOUND = 404;
	var url = 'https://jsonplaceholder.typicode.com/users/';

	// this function gets the api connection
	var getConnection = function getConnection() {
		fetch(url).then(function (response) {
			// validate the response state
			switch (response.status) {
				case STATUS_OK:
					return response.json();
				case STATUS_NOT_FOUND:
					console.log('error de conexion');
			}
		}).then(function (data) {
			// the api prints 100 registres with this the print is limitated 6
			var limit = 20;
			console.log(data);
			draw(data.slice(0, limit));
		});
	};

	// This function paint the html component in the DOM
	var draw = function draw(data) {
		var container = document.getElementById('myContent');
		data.forEach(function (jsonpApi) {
			var articleHTML = '\n\t\t\t\t<article class="card" id="' + jsonpApi.id + '">\n\t\t\t\t\t<div class="card__close"><span>X</span></div>\n\t\t\t\t\t<div class="card__title">\n\t\t\t\t\t\t<h1>' + jsonpApi.name + '</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__content">\n\t\t\t\t\t\t<p>' + jsonpApi.company.catchPhrase + '</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__sub-content">\n\t\t\t\t\t\t<p>' + jsonpApi.company.bs + '</p> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__date"><span>' + jsonpApi.address.zipcode + '</span></div>\n\t\t\t\t</article>\n\t\t\t';
			container.insertAdjacentHTML('beforeend', articleHTML);
		});
	};
	getConnection();
};

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
