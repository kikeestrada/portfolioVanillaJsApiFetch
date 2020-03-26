(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _getAllResources = require("./modules/getAllResources");

var _GetResource = require("./modules/GetResource");

var _createResource = require("./modules/createResource");

var _updateResource = require("./modules/updateResource");

var _deleteResource = require("./modules/deleteResource");

var _filteringResource = require("./modules/filteringResource");

(function () {
	(0, _getAllResources.fnGetAllResources)();
	(0, _GetResource.fnGetResource)();
	(0, _createResource.fnCreateResource)();
	(0, _updateResource.fnUpdateResource)();
	(0, _deleteResource.fnDeleteResource)();
	(0, _filteringResource.fnFilteringResource)();
})();

},{"./modules/GetResource":2,"./modules/createResource":3,"./modules/deleteResource":4,"./modules/filteringResource":5,"./modules/getAllResources":6,"./modules/updateResource":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var globalVars = require('./globalVars');

var fnGetResource = exports.fnGetResource = function fnGetResource() {
	var getResource = function getResource() {
		fetch('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
			return response.json();
		}).then(function (data) {
			console.log('Get Resource');
			console.log(data);
		});
	};
	getResource();
};

},{"./globalVars":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalVars = require('./globalVars');

var fnCreateResource = exports.fnCreateResource = function fnCreateResource() {
  var createResource = function createResource() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 2
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Create Resource');
      console.log(data);
    });
  };
  createResource();
};

},{"./globalVars":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var fnDeleteResource = exports.fnDeleteResource = function fnDeleteResource() {
	var deleteResource = function deleteResource() {
		fetch('https://jsonplaceholder.typicode.com/posts/101', {
			method: 'DELETE'
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			console.log('Delete Resource');
			console.log(data);
		});
	};
	deleteResource();
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
     value: true
});
var fnFilteringResource = exports.fnFilteringResource = function fnFilteringResource() {
     var filteringResource = function filteringResource() {
          fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(function (response) {
               return response.json();
          }).then(function (data) {
               console.log('Filtering Resource');
               console.log(data);
          });
     };
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var globalVars = require('./globalVars');

var fnGetAllResources = exports.fnGetAllResources = function fnGetAllResources() {
	var getResources = function getResources() {
		fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
			return response.json();
		}).then(function (data) {
			console.log('Get All Resources');
			console.log(data);
			console.log('Print All Resources');
			draw(data);
		});
	};

	var draw = function draw(data) {
		var container = document.getElementById('myContent');
		data.forEach(function (jsonpApi) {
			var articleHTML = '\n\t\t\t\t<article class="card" id="' + jsonpApi.id + '">\n\t\t\t\t\t<div class="card__close">\n\t\t\t\t\t\t<span class="btnDelete">X</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__title">\n\t\t\t\t\t\t<h1>Name: ' + jsonpApi.title + '</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__content">\n\t\t\t\t\t\t<p>' + jsonpApi.body + '</p>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t';
			container.insertAdjacentHTML('beforeend', articleHTML);
		});
	};

	getResources();
};

},{"./globalVars":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Global Vars
var url = exports.url = 'https://jsonplaceholder.typicode.com/users';

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalVars = require('./globalVars');

var fnUpdateResource = exports.fnUpdateResource = function fnUpdateResource() {
  var updateResource = function updateResource() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Update Resource');
      console.log(data);
    });
  };
  updateResource();
};

},{"./globalVars":7}]},{},[1]);

//# sourceMappingURL=scripts.js.map
