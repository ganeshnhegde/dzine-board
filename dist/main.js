/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/7630483dd4b0c48639d2ac54a894b450.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/0bb428459c8ecfa61b22a03def1706e6.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/1f77739ca9ff2188b539c36f30ffa2be.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/7124eb50fc8227c78269f2d995637ff5.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/f0f8230116992e521526097a28f54066.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/1042e8ca1ce821518a2d3e7055410839.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/376c1f97f6553dea1ca9b3f9081889bd.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/605ed7926cf39a2ad5ec2d1f9d391d3d.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/9fe5a17c8ab036d20e6c5ba3fd2ac511.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/e8a427e15cc502bef99cfd722b37ea98.woff2";

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"slider\" oncontextmenu=\"return false;\">\n\t<div class=\"slider-fg\">\n\t\t<span class=\"text\"></span><span class=\"value-text\"></span>\n\t\t<div class=\"slider-bg\"></div>\n\t</div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<aside class=\"toolbar\">\n\t<ul>\n\t\t<li><a class=\"logo toolbar-logo\" href=\"index.html\"></a></li>\n\n\t\t<li title=\"Tools\"><i class=\"fas fa-toolbox separator\"></i></li>\n\t\t<li title=\"Brush\" data-toolname=\"BRUSH\"><i class=\"fas fa-brush btn-tool\"></i></li>\n\t\t<li title=\"Paint Roller\" data-toolname=\"PAINT_ROLLER\"><i class=\"fas fa-paint-roller btn-tool\"></i></li>\n\t\t<li title=\"Pencil\" data-toolname=\"PENCIL\"><i class=\"fas fa-pencil-alt btn-tool\"></i></li>\n\t\t<li title=\"Eraser\" data-toolname=\"ERASER\"><i class=\"fas fa-eraser btn-tool\"></i></li>\n\t\t<li title=\"Text\" data-toolname=\"TEXT\"><i class=\"fas fa-font btn-tool\"></i></li>\n\t\t<li title=\"Line\" data-toolname=\"LINE\"><span class=\"btn-tool line-icon\">/</span></li>\n\t\t<li title=\"Rectangle\" data-toolname=\"RECT\"><i class=\"far fa-square btn-tool\"></i></li>\n\t\t<li title=\"Ellipse\" data-toolname=\"ELLIPSE\"><i class=\"far fa-circle btn-tool\"></i></li>\n\t\t<li title=\"Fill\" data-toolname=\"FILL\"><i class=\"fas fa-fill btn-tool\"></i></li>\n\t\t<li title=\"Color Picker\" data-toolname=\"COLOR_PICKER\"><i class=\"fas fa-eye-dropper btn-tool\"></i></li>\n\t\t<li title=\"Change Background\" data-toolname=\"BACKGROUND_IMAGE\"><i class=\"fas fa-image btn-tool\"></i></li>\n\n\t\t<li class=\"color-separator\" title=\"Colors\"><i class=\"fas fa-palette separator\"></i></li>\n\t\t<li class=\"btn-color\" title=\"Black\" data-color=\"#000000\"></li>\n\t\t<li class=\"btn-color\" title=\"Red\" data-color=\"#df3939\"></li>\n\t\t<li class=\"btn-color\" title=\"Green\" data-color=\"#3fe23f\"></li>\n\t\t<li class=\"btn-color\" title=\"Blue\" data-color=\"#1b86eb\"></li>\n\t\t<li class=\"btn-color\" title=\"White\" data-color=\"#ffffff\"></li>\n\t</ul>\n</aside>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/lato-font/css/lato-font.css":
/*!**************************************************!*\
  !*** ./node_modules/lato-font/css/lato-font.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/favicon.ico":
/*!****************************!*\
  !*** ./public/favicon.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./public/img/logo.png":
/*!*****************************!*\
  !*** ./public/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/898f6291d7a81163db0bb2bb6cd4b806.png";

/***/ }),

/***/ "./public/js/components.js":
/*!*********************************!*\
  !*** ./public/js/components.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider/slider */ "./public/js/components/slider/slider.js");
/* harmony import */ var _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toolbar/toolbar */ "./public/js/components/toolbar/toolbar.js");



const components = [
	{selector: "ui-slider", component: _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__["default"]},
	{selector: "ui-toolbar", component: _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"]}
];

// create custom components
const initComponents = () =>
{
	components.forEach(component =>
	{
		customElements.define(component.selector, component.component);
	});
}

/* harmony default export */ __webpack_exports__["default"] = (initComponents);

/***/ }),

/***/ "./public/js/components/background-modal/background-modal.js":
/*!*******************************************************************!*\
  !*** ./public/js/components/background-modal/background-modal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal */ "./public/js/components/modal/modal.js");


class BackgroundModal extends _modal_modal__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(id)
	{
		super(id);

		this.bgColor = "#ffffff";

		this.dropArea = this.element.querySelector(".drop-area");
		this.dropArea.addEventListener("dragover", (e) => this.imageDraggedOver(e));
		this.dropArea.addEventListener("drop", (e) => this.imageDropped(e));

		this.imagePreview = this.element.querySelector("#bg-image-preview");

		const imageFileInput = this.element.querySelector("#image-file-input");
		imageFileInput.addEventListener("change", (e) => this.imageFileInputChanged(e));

		this.element.querySelector("#tab-image").addEventListener("click", (e) => this.tabClicked(e));
		this.element.querySelector("#tab-color").addEventListener("click", (e) => this.tabClicked(e));

		this.element.querySelector("#bg-color").value = this.bgColor;
		this.element.querySelector("#bg-color").addEventListener("change", (e) => this.bgColorChanged(e));
	}

	show()
	{
		super.show();
		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "initial";
		});

		this.dropArea.style.borderWidth = "1px";
		this.element.querySelector(".drop-area p").style.display = "block";

		this.imagePreview.src = "";
		if (!this.imagePreview.classList.contains("hidden"))
			this.imagePreview.classList.add("hidden");

		this.element.querySelector("#add-image").disabled = true;
	}

	hide()
	{
		super.hide();
		this.element.querySelector("#image-file-input").value = "";
	}

	imageDraggedOver(e)
	{
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	imageDropped(e)
	{
		e.preventDefault();
		this.loadBackgroundImage(e.dataTransfer.files[0]);

		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "none";
		});

		this.element.querySelector("#add-image").disabled = false;
	}

	imageFileInputChanged(e)
	{
		this.element.querySelectorAll(".hide-on-image-input").forEach(item =>
		{
			item.style.display = "none";
		});

		this.loadBackgroundImage(e.currentTarget.files[0]);
		this.element.querySelector("#add-image").disabled = false;
	}

	// load image from provided file and display in preview area
	loadBackgroundImage(file)
	{
		if (file != null && file.type.match(/image*/))
		{
			let reader = new FileReader();
			reader.onload = (readerEv) =>
			{
				this.imagePreview.src = readerEv.target.result;
				if (this.imagePreview.classList.contains("hidden"))
					this.imagePreview.classList.remove("hidden");

				this.dropArea.style.borderWidth = "0px";
			};

			reader.readAsDataURL(file);
		}
	}

	tabClicked(e)
	{
		if (e.target.classList.contains("active"))
			return;

		const colorTabContent = this.element.querySelector("#tab-content-color");

		if (e.target.id == "tab-image")
		{
			this.dropArea.classList.remove("hidden");
			this.element.querySelector("#add-image").classList.remove("hidden");
			this.element.querySelector("#image-file-input").classList.remove("hidden");

			colorTabContent.classList.add("hidden");

			this.element.querySelector("#tab-image").classList.add("active");
			this.element.querySelector("#tab-color").classList.remove("active");

		} else if (e.target.id == "tab-color")
		{
			colorTabContent.classList.remove("hidden");

			this.dropArea.classList.add("hidden");
			this.element.querySelector("#add-image").classList.add("hidden");
			this.element.querySelector("#image-file-input").classList.add("hidden");

			this.element.querySelector("#tab-image").classList.remove("active");
			this.element.querySelector("#tab-color").classList.add("active");
		}
	}

	bgColorChanged(e)
	{
		this.bgColor = e.target.value;
	}

	onAddImageBtnClick(callback)
	{
		this.element.querySelector("#add-image").addEventListener("click", callback);
	}

	onFillBtnClick(callback)
	{
		this.element.querySelector("#bg-fill").addEventListener("click", callback);
	}

	onClearBtnClick(callback)
	{
		this.element.querySelector("#bg-clear").addEventListener("click", callback);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (BackgroundModal);

/***/ }),

/***/ "./public/js/components/component/component.js":
/*!*****************************************************!*\
  !*** ./public/js/components/component/component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Component extends HTMLElement
{
	constructor(html, stylesheet="")
	{
		super();
		this.attachShadow({mode: "open"});

		const element = document.createElement("template");
		element.innerHTML = html;

		if (stylesheet != "" && stylesheet != null)
		{
			const styleElement = document.createElement("style");
			styleElement.innerHTML = stylesheet.toString();
			this.shadowRoot.append(styleElement);
		}

		this.shadowRoot.append(element.content.cloneNode(true));
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./public/js/components/modal/modal.js":
/*!*********************************************!*\
  !*** ./public/js/components/modal/modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Modal
{
	constructor(id)
	{
		this.id = id;
		this.element = document.getElementById(id);
		this.isVisible = false;

		this.element.querySelector("#close-modal").addEventListener("click", () => this.hide());
		window.addEventListener("keydown", (e) =>
		{
			if (e.key == "Escape" && this.isVisible)
				this.hide();
		});

		this.element.addEventListener("click", (e) =>
		{
			// close modal when user clicks outside modal area
			if (e.target == this.element && this.isVisible)
				this.hide();
		});
	}

	show()
	{
		if (this.element.classList.contains("hidden"))
			this.element.classList.remove("hidden");

		this.isVisible = true;
	}

	hide()
	{
		if (!this.element.classList.contains("hidden"))
			this.element.classList.add("hidden");

		this.isVisible = false;
	}

	toggle()
	{
		if (this.isVisible)
			this.hide();
		else
			this.show();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./public/js/components/slider/slider.js":
/*!***********************************************!*\
  !*** ./public/js/components/slider/slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component */ "./public/js/components/component/component.js");
/* harmony import */ var html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-loader!./slider.html */ "./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html");
/* harmony import */ var html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.scss */ "./public/js/components/slider/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_2__);




class Slider extends _component_component__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor()
	{
		super(html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1___default.a, _slider_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

		// default values for slider properties
		const defaultValue = 0;
		const defaultMinValue = 0;
		const defaultMaxValue = 10;
		const defaultText = "";
		const defaultUnit = "";

		if (!this.hasAttribute("data-value"))
			this.setValue(defaultValue);

		if (!this.hasAttribute("data-min-value"))
			this.setAttribute("data-min-value", defaultMinValue);

		if (!this.hasAttribute("data-max-value"))
			this.setAttribute("data-max-value", defaultMaxValue);

		if (!this.hasAttribute("data-text"))
			this.setAttribute("data-text", defaultText);

		if (!this.hasAttribute("data-unit"))
			this.setAttribute("data-unit", defaultUnit);

		const sliderFg = this.shadowRoot.querySelector(".slider-fg");
		sliderFg.querySelector("span.text").innerHTML = this.getAttribute("data-text");

		this.update(); // draw slider based on initial values

		this.addEventListener("click", this.update);
		this.addEventListener("touchmove", this.update);
	}

	sliderPosFromValue(value)
	{
		const maxValue = Number(this.getAttribute("data-max"));
		if (value > 0)
			return value / maxValue;
		else
			return 0;
	}

	// calculates and updates slider's value and position
	update(e=null, value=null)
	{
		const minValue = Number(this.getAttribute("data-min"));
		const maxValue = Number(this.getAttribute("data-max"));
		const unit = this.getAttribute("data-unit");
		const sliderFg = this.shadowRoot.querySelector(".slider-fg");
		const rect = sliderFg.getBoundingClientRect();
		let newSliderPos;

		if (rect.width == 0) // this can happen when element is invisible
			return;

		if (e != null) // update slider based on user input
		{
			let mousePosX;

			if (e.type == "touchmove")
				mousePosX = e.touches[0].clientX;
			else
				mousePosX = e.clientX;

			const relativeMousePos = mousePosX - rect.left;
			newSliderPos = relativeMousePos / rect.width;

		} else if (value != null) // update with specified value
		{
			newSliderPos = this.sliderPosFromValue(value);

		} else // update slider using current value from data-value attribute
		{
			let val = Number(this.getAttribute("data-value"));
			newSliderPos = this.sliderPosFromValue(val);
		}

		const newValue = Math.min(Math.max(minValue, Math.round(newSliderPos * maxValue / rect.width * rect.width)), maxValue);
		this.setValue(newValue);

		const newBgWidth = Math.min(Math.max(minValue, Math.round(newSliderPos * rect.width)), rect.width);
		sliderFg.querySelector("span.value-text").innerHTML = newValue + unit;
		sliderFg.querySelector(".slider-bg").style.width = newBgWidth + "px";

		this.dispatchEvent(new Event("change"));
	}

	getValue()
	{
		return this.getAttribute("data-value");
	}

	setValue(value)
	{
		this.setAttribute("data-value", value);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./public/js/components/slider/slider.scss":
/*!*************************************************!*\
  !*** ./public/js/components/slider/slider.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slider {\n  width: 150px;\n  padding: 0;\n  background: #262626; }\n  .slider .slider-fg {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    height: 25px;\n    background: none;\n    cursor: pointer; }\n  .slider span {\n    display: inline-block;\n    z-index: 1;\n    padding: 2px 5px;\n    pointer-events: none;\n    color: rgba(255, 255, 255, 0.9); }\n  .slider .slider-bg {\n    background: #106eac;\n    height: 25px;\n    width: 0px;\n    position: absolute;\n    pointer-events: none; }\n\n.brush-size-menu .slider {\n  margin: 0 auto; }\n", ""]);



/***/ }),

/***/ "./public/js/components/toolbar/toolbar.js":
/*!*************************************************!*\
  !*** ./public/js/components/toolbar/toolbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component */ "./public/js/components/component/component.js");
/* harmony import */ var html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-loader!./toolbar.html */ "./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html");
/* harmony import */ var html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.scss */ "./public/js/components/toolbar/toolbar.scss");
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toolbar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tool-type */ "./public/js/models/tool-type.js");





class Toolbar extends _component_component__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor()
	{
		super(html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1___default.a, _toolbar_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
		this.element = this.shadowRoot.querySelector(".toolbar");

		// workaround for paste being broken after clicking on toolbar
		this.element.addEventListener("paste", (e) =>
		{
			const format = "Text";
			let newClipboardData = new DataTransfer();
			newClipboardData.setData(format, e.clipboardData.getData(format));
			let event = new Event("paste");
			event.clipboardData = newClipboardData;
			this.dispatchEvent(event);
		});
	}

	// make icons clickable
	initButtons(defaultTool, defaultColor)
	{
		let isDefaultToolFound = false;
		const toolIcons = this.element.querySelectorAll("ul > li .btn-tool");
		toolIcons.forEach(icon =>
		{
			const listItem = icon.parentElement;
			const toolType = _models_tool_type__WEBPACK_IMPORTED_MODULE_3__["default"][listItem.dataset.toolname];
			if (!isDefaultToolFound && toolType == defaultTool)
			{
				this.setSelectedTool(icon);
				isDefaultToolFound = true;
			}

			if (listItem.dataset.toolname == "BACKGROUND_IMAGE")
				listItem.addEventListener("click", (e) => this.bgSelectionClicked(e));
			else if (!icon.classList.contains("disabled"))
				listItem.addEventListener("click", (e) => this.toolSwitched(e));
		});

		let isDefaultColorFound = false;
		const toolbarColors = this.element.querySelectorAll(".btn-color");
		toolbarColors.forEach(item =>
		{
			if (!isDefaultColorFound && item.dataset.color == defaultColor)
			{
				this.setSelectedColor(item);
				isDefaultColorFound = true;
			}

			item.style.backgroundColor = item.dataset.color;
			item.addEventListener("click", (e) => this.colorSwitched(e));
		});
	}

	setSelectedTool(element)
	{
		const selectedClass = "selected";
		let prevSelected = this.element.querySelector(`.${selectedClass}`);

		if (prevSelected)
			prevSelected.classList.remove(selectedClass);

		if (!element.classList.contains(selectedClass))
			element.classList.add(selectedClass);
	}

	setSelectedColor(element)
	{
		const selectedClass = "selected-color";

		this.clearSelectedColor();
		if (!element.classList.contains(selectedClass))
			element.classList.add(selectedClass);
	}

	clearSelectedColor()
	{
		const selectedClass = "selected-color";
		let prevSelected = this.element.querySelector(`.${selectedClass}`);

		if (prevSelected)
			prevSelected.classList.remove(selectedClass);
	}

	// tool icon clicked
	toolSwitched(e)
	{
		const toolName = e.currentTarget.dataset.toolname;
		const toolType = _models_tool_type__WEBPACK_IMPORTED_MODULE_3__["default"][toolName];
		this.setSelectedTool(e.target);
		this.dispatchEvent(new CustomEvent("toolSwitch", {detail: toolType}));
	}

	// color button clicked
	colorSwitched(e)
	{
		const color = e.target.dataset.color;
		this.setSelectedColor(e.target);
		this.dispatchEvent(new CustomEvent("colorSwitch", {detail: color}));
	}

	bgSelectionClicked(e)
	{
		this.dispatchEvent(new CustomEvent("bgSettingsOpen"));
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./public/js/components/toolbar/toolbar.scss":
/*!***************************************************!*\
  !*** ./public/js/components/toolbar/toolbar.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg") + "#fontawesome");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot") + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg") + "#fontawesome");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../../../img/logo.png */ "./public/img/logo.png"));

// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  animation: fa-spin 1s infinite steps(8); }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.fa-ad:before {\n  content: \"\\f641\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.fa-airbnb:before {\n  content: \"\\f834\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-allergies:before {\n  content: \"\\f461\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angry:before {\n  content: \"\\f556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-ankh:before {\n  content: \"\\f644\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-archway:before {\n  content: \"\\f557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-atlas:before {\n  content: \"\\f558\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-atom:before {\n  content: \"\\f5d2\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-award:before {\n  content: \"\\f559\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-baby:before {\n  content: \"\\f77c\"; }\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.fa-backspace:before {\n  content: \"\\f55a\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-bacon:before {\n  content: \"\\f7e5\"; }\n\n.fa-bacteria:before {\n  content: \"\\e059\"; }\n\n.fa-bacterium:before {\n  content: \"\\e05a\"; }\n\n.fa-bahai:before {\n  content: \"\\f666\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-balance-scale-left:before {\n  content: \"\\f515\"; }\n\n.fa-balance-scale-right:before {\n  content: \"\\f516\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-band-aid:before {\n  content: \"\\f462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-battle-net:before {\n  content: \"\\f835\"; }\n\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.fa-bible:before {\n  content: \"\\f647\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-biking:before {\n  content: \"\\f84a\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-biohazard:before {\n  content: \"\\f780\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-blender:before {\n  content: \"\\f517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-blog:before {\n  content: \"\\f781\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-bone:before {\n  content: \"\\f5d7\"; }\n\n.fa-bong:before {\n  content: \"\\f55c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.fa-book-medical:before {\n  content: \"\\f7e6\"; }\n\n.fa-book-open:before {\n  content: \"\\f518\"; }\n\n.fa-book-reader:before {\n  content: \"\\f5da\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-bootstrap:before {\n  content: \"\\f836\"; }\n\n.fa-border-all:before {\n  content: \"\\f84c\"; }\n\n.fa-border-none:before {\n  content: \"\\f850\"; }\n\n.fa-border-style:before {\n  content: \"\\f853\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.fa-box:before {\n  content: \"\\f466\"; }\n\n.fa-box-open:before {\n  content: \"\\f49e\"; }\n\n.fa-box-tissue:before {\n  content: \"\\e05b\"; }\n\n.fa-boxes:before {\n  content: \"\\f468\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-brain:before {\n  content: \"\\f5dc\"; }\n\n.fa-bread-slice:before {\n  content: \"\\f7ec\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.fa-broom:before {\n  content: \"\\f51a\"; }\n\n.fa-brush:before {\n  content: \"\\f55d\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-buffer:before {\n  content: \"\\f837\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-burn:before {\n  content: \"\\f46a\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.fa-business-time:before {\n  content: \"\\f64a\"; }\n\n.fa-buy-n-large:before {\n  content: \"\\f8a6\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-calendar:before {\n  content: \"\\f133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\f274\"; }\n\n.fa-calendar-day:before {\n  content: \"\\f783\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-week:before {\n  content: \"\\f784\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-campground:before {\n  content: \"\\f6bb\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-candy-cane:before {\n  content: \"\\f786\"; }\n\n.fa-cannabis:before {\n  content: \"\\f55f\"; }\n\n.fa-capsules:before {\n  content: \"\\f46b\"; }\n\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-car-alt:before {\n  content: \"\\f5de\"; }\n\n.fa-car-battery:before {\n  content: \"\\f5df\"; }\n\n.fa-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.fa-car-side:before {\n  content: \"\\f5e4\"; }\n\n.fa-caravan:before {\n  content: \"\\f8ff\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-carrot:before {\n  content: \"\\f787\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cash-register:before {\n  content: \"\\f788\"; }\n\n.fa-cat:before {\n  content: \"\\f6be\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-chair:before {\n  content: \"\\f6c0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.fa-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.fa-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.fa-chart-bar:before {\n  content: \"\\f080\"; }\n\n.fa-chart-line:before {\n  content: \"\\f201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\f200\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-check-double:before {\n  content: \"\\f560\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-cheese:before {\n  content: \"\\f7ef\"; }\n\n.fa-chess:before {\n  content: \"\\f439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.fa-chess-board:before {\n  content: \"\\f43c\"; }\n\n.fa-chess-king:before {\n  content: \"\\f43f\"; }\n\n.fa-chess-knight:before {\n  content: \"\\f441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\f445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\f447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-chromecast:before {\n  content: \"\\f838\"; }\n\n.fa-church:before {\n  content: \"\\f51d\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-city:before {\n  content: \"\\f64f\"; }\n\n.fa-clinic-medical:before {\n  content: \"\\f7f2\"; }\n\n.fa-clipboard:before {\n  content: \"\\f328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.fa-clock:before {\n  content: \"\\f017\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.fa-cloudflare:before {\n  content: \"\\e07d\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-cocktail:before {\n  content: \"\\f561\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-code-branch:before {\n  content: \"\\f126\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-coins:before {\n  content: \"\\f51e\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.fa-comment-medical:before {\n  content: \"\\f7f5\"; }\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-compress-alt:before {\n  content: \"\\f422\"; }\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-cookie:before {\n  content: \"\\f563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.fa-copy:before {\n  content: \"\\f0c5\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\"; }\n\n.fa-couch:before {\n  content: \"\\f4b8\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\f565\"; }\n\n.fa-cross:before {\n  content: \"\\f654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-crow:before {\n  content: \"\\f520\"; }\n\n.fa-crown:before {\n  content: \"\\f521\"; }\n\n.fa-crutch:before {\n  content: \"\\f7f7\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-dailymotion:before {\n  content: \"\\e052\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-deezer:before {\n  content: \"\\e077\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-democrat:before {\n  content: \"\\f747\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-diagnoses:before {\n  content: \"\\f470\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-dice:before {\n  content: \"\\f522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.fa-dice-five:before {\n  content: \"\\f523\"; }\n\n.fa-dice-four:before {\n  content: \"\\f524\"; }\n\n.fa-dice-one:before {\n  content: \"\\f525\"; }\n\n.fa-dice-six:before {\n  content: \"\\f526\"; }\n\n.fa-dice-three:before {\n  content: \"\\f527\"; }\n\n.fa-dice-two:before {\n  content: \"\\f528\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.fa-directions:before {\n  content: \"\\f5eb\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-disease:before {\n  content: \"\\f7fa\"; }\n\n.fa-divide:before {\n  content: \"\\f529\"; }\n\n.fa-dizzy:before {\n  content: \"\\f567\"; }\n\n.fa-dna:before {\n  content: \"\\f471\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-dog:before {\n  content: \"\\f6d3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.fa-dolly:before {\n  content: \"\\f472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.fa-donate:before {\n  content: \"\\f4b9\"; }\n\n.fa-door-closed:before {\n  content: \"\\f52a\"; }\n\n.fa-door-open:before {\n  content: \"\\f52b\"; }\n\n.fa-dot-circle:before {\n  content: \"\\f192\"; }\n\n.fa-dove:before {\n  content: \"\\f4ba\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.fa-dragon:before {\n  content: \"\\f6d5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-drum:before {\n  content: \"\\f569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.fa-dumpster:before {\n  content: \"\\f793\"; }\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.fa-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-edge-legacy:before {\n  content: \"\\e078\"; }\n\n.fa-edit:before {\n  content: \"\\f044\"; }\n\n.fa-egg:before {\n  content: \"\\f7fb\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-equals:before {\n  content: \"\\f52c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-ethernet:before {\n  content: \"\\f796\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\f153\"; }\n\n.fa-evernote:before {\n  content: \"\\f839\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-expand-alt:before {\n  content: \"\\f424\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-fan:before {\n  content: \"\\f863\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-faucet:before {\n  content: \"\\e005\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-feather:before {\n  content: \"\\f52d\"; }\n\n.fa-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-alt:before {\n  content: \"\\f15c\"; }\n\n.fa-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-code:before {\n  content: \"\\f1c9\"; }\n\n.fa-file-contract:before {\n  content: \"\\f56c\"; }\n\n.fa-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.fa-file-download:before {\n  content: \"\\f56d\"; }\n\n.fa-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-export:before {\n  content: \"\\f56e\"; }\n\n.fa-file-image:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-import:before {\n  content: \"\\f56f\"; }\n\n.fa-file-invoice:before {\n  content: \"\\f570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.fa-file-medical:before {\n  content: \"\\f477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\f572\"; }\n\n.fa-file-signature:before {\n  content: \"\\f573\"; }\n\n.fa-file-upload:before {\n  content: \"\\f574\"; }\n\n.fa-file-video:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-word:before {\n  content: \"\\f1c2\"; }\n\n.fa-fill:before {\n  content: \"\\f575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\f576\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\f577\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-firefox-browser:before {\n  content: \"\\e007\"; }\n\n.fa-first-aid:before {\n  content: \"\\f479\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-fish:before {\n  content: \"\\f578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-flushed:before {\n  content: \"\\f579\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-football-ball:before {\n  content: \"\\f44e\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-frog:before {\n  content: \"\\f52e\"; }\n\n.fa-frown:before {\n  content: \"\\f119\"; }\n\n.fa-frown-open:before {\n  content: \"\\f57a\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.fa-futbol:before {\n  content: \"\\f1e3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-gem:before {\n  content: \"\\f3a5\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-ghost:before {\n  content: \"\\f6e2\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-gifts:before {\n  content: \"\\f79c\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-git-alt:before {\n  content: \"\\f841\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.fa-glass-martini:before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.fa-glasses:before {\n  content: \"\\f530\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.fa-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.fa-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\f450\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-google-pay:before {\n  content: \"\\e079\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-gopuram:before {\n  content: \"\\f664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-greater-than:before {\n  content: \"\\f531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.fa-grimace:before {\n  content: \"\\f57f\"; }\n\n.fa-grin:before {\n  content: \"\\f580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\f581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\f587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\f588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.fa-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-guilded:before {\n  content: \"\\e07e\"; }\n\n.fa-guitar:before {\n  content: \"\\f7a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-hamburger:before {\n  content: \"\\f805\"; }\n\n.fa-hammer:before {\n  content: \"\\f6e3\"; }\n\n.fa-hamsa:before {\n  content: \"\\f665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.fa-hand-holding-medical:before {\n  content: \"\\e05c\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-holding-water:before {\n  content: \"\\f4c1\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.fa-hand-middle-finger:before {\n  content: \"\\f806\"; }\n\n.fa-hand-paper:before {\n  content: \"\\f256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-rock:before {\n  content: \"\\f255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.fa-hand-sparkles:before {\n  content: \"\\e05d\"; }\n\n.fa-hand-spock:before {\n  content: \"\\f259\"; }\n\n.fa-hands:before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.fa-hands-wash:before {\n  content: \"\\e05e\"; }\n\n.fa-handshake:before {\n  content: \"\\f2b5\"; }\n\n.fa-handshake-alt-slash:before {\n  content: \"\\e05f\"; }\n\n.fa-handshake-slash:before {\n  content: \"\\e060\"; }\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.fa-hard-hat:before {\n  content: \"\\f807\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-hat-cowboy:before {\n  content: \"\\f8c0\"; }\n\n.fa-hat-cowboy-side:before {\n  content: \"\\f8c1\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.fa-hdd:before {\n  content: \"\\f0a0\"; }\n\n.fa-head-side-cough:before {\n  content: \"\\e061\"; }\n\n.fa-head-side-cough-slash:before {\n  content: \"\\e062\"; }\n\n.fa-head-side-mask:before {\n  content: \"\\e063\"; }\n\n.fa-head-side-virus:before {\n  content: \"\\e064\"; }\n\n.fa-heading:before {\n  content: \"\\f1dc\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.fa-headset:before {\n  content: \"\\f590\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-helicopter:before {\n  content: \"\\f533\"; }\n\n.fa-highlighter:before {\n  content: \"\\f591\"; }\n\n.fa-hiking:before {\n  content: \"\\f6ec\"; }\n\n.fa-hippo:before {\n  content: \"\\f6ed\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-hive:before {\n  content: \"\\e07f\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-horse:before {\n  content: \"\\f6f0\"; }\n\n.fa-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.fa-hospital:before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.fa-hospital-user:before {\n  content: \"\\f80d\"; }\n\n.fa-hot-tub:before {\n  content: \"\\f593\"; }\n\n.fa-hotdog:before {\n  content: \"\\f80f\"; }\n\n.fa-hotel:before {\n  content: \"\\f594\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.fa-house-user:before {\n  content: \"\\e065\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-ice-cream:before {\n  content: \"\\f810\"; }\n\n.fa-icicles:before {\n  content: \"\\f7ad\"; }\n\n.fa-icons:before {\n  content: \"\\f86d\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.fa-ideal:before {\n  content: \"\\e013\"; }\n\n.fa-igloo:before {\n  content: \"\\f7ae\"; }\n\n.fa-image:before {\n  content: \"\\f03e\"; }\n\n.fa-images:before {\n  content: \"\\f302\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-infinity:before {\n  content: \"\\f534\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-innosoft:before {\n  content: \"\\e080\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-instagram-square:before {\n  content: \"\\e055\"; }\n\n.fa-instalod:before {\n  content: \"\\e081\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-itch-io:before {\n  content: \"\\f83a\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-jedi:before {\n  content: \"\\f669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-joint:before {\n  content: \"\\f595\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-kaaba:before {\n  content: \"\\f66b\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-keyboard:before {\n  content: \"\\f11c\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-khanda:before {\n  content: \"\\f66d\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-kiss:before {\n  content: \"\\f596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-landmark:before {\n  content: \"\\f66f\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.fa-laptop-house:before {\n  content: \"\\e066\"; }\n\n.fa-laptop-medical:before {\n  content: \"\\f812\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-laugh:before {\n  content: \"\\f599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.fa-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-lemon:before {\n  content: \"\\f094\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-less-than:before {\n  content: \"\\f536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-lira-sign:before {\n  content: \"\\f195\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.fa-lungs:before {\n  content: \"\\f604\"; }\n\n.fa-lungs-virus:before {\n  content: \"\\e067\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-map-marked:before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-marker:before {\n  content: \"\\f5a1\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mask:before {\n  content: \"\\f6fa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-mdb:before {\n  content: \"\\f8ca\"; }\n\n.fa-medal:before {\n  content: \"\\f5a2\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-meh:before {\n  content: \"\\f11a\"; }\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.fa-memory:before {\n  content: \"\\f538\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-menorah:before {\n  content: \"\\f676\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-meteor:before {\n  content: \"\\f753\"; }\n\n.fa-microblog:before {\n  content: \"\\e01a\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-microscope:before {\n  content: \"\\f610\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-mitten:before {\n  content: \"\\f7b5\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-mixer:before {\n  content: \"\\e056\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.fa-money-check:before {\n  content: \"\\f53c\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.fa-monument:before {\n  content: \"\\f5a6\"; }\n\n.fa-moon:before {\n  content: \"\\f186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.fa-mosque:before {\n  content: \"\\f678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-mountain:before {\n  content: \"\\f6fc\"; }\n\n.fa-mouse:before {\n  content: \"\\f8cc\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-not-equal:before {\n  content: \"\\f53e\"; }\n\n.fa-notes-medical:before {\n  content: \"\\f481\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-octopus-deploy:before {\n  content: \"\\e082\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-oil-can:before {\n  content: \"\\f613\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-om:before {\n  content: \"\\f679\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-orcid:before {\n  content: \"\\f8d2\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-otter:before {\n  content: \"\\f700\"; }\n\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-pager:before {\n  content: \"\\f815\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.fa-palette:before {\n  content: \"\\f53f\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-pallet:before {\n  content: \"\\f482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-parking:before {\n  content: \"\\f540\"; }\n\n.fa-passport:before {\n  content: \"\\f5ab\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.fa-paste:before {\n  content: \"\\f0ea\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-peace:before {\n  content: \"\\f67c\"; }\n\n.fa-pen:before {\n  content: \"\\f304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\f305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.fa-pen-square:before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.fa-people-arrows:before {\n  content: \"\\e068\"; }\n\n.fa-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.fa-pepper-hot:before {\n  content: \"\\f816\"; }\n\n.fa-perbyte:before {\n  content: \"\\e083\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-percentage:before {\n  content: \"\\f541\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-person-booth:before {\n  content: \"\\f756\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-phone-alt:before {\n  content: \"\\f879\"; }\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-phone-square-alt:before {\n  content: \"\\f87b\"; }\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.fa-photo-video:before {\n  content: \"\\f87c\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-pied-piper-square:before {\n  content: \"\\e01e\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.fa-pills:before {\n  content: \"\\f484\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-pizza-slice:before {\n  content: \"\\f818\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.fa-plane-slash:before {\n  content: \"\\e069\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-poll:before {\n  content: \"\\f681\"; }\n\n.fa-poll-h:before {\n  content: \"\\f682\"; }\n\n.fa-poo:before {\n  content: \"\\f2fe\"; }\n\n.fa-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.fa-poop:before {\n  content: \"\\f619\"; }\n\n.fa-portrait:before {\n  content: \"\\f3e0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\f154\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-pray:before {\n  content: \"\\f683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\f684\"; }\n\n.fa-prescription:before {\n  content: \"\\f5b1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-procedures:before {\n  content: \"\\f487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\f542\"; }\n\n.fa-pump-medical:before {\n  content: \"\\e06a\"; }\n\n.fa-pump-soap:before {\n  content: \"\\e06b\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-quidditch:before {\n  content: \"\\f458\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-quran:before {\n  content: \"\\f687\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-radiation:before {\n  content: \"\\f7b9\"; }\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.fa-rainbow:before {\n  content: \"\\f75b\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-receipt:before {\n  content: \"\\f543\"; }\n\n.fa-record-vinyl:before {\n  content: \"\\f8d9\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-redo:before {\n  content: \"\\f01e\"; }\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-remove-format:before {\n  content: \"\\f87d\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-reply:before {\n  content: \"\\f3e5\"; }\n\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-republican:before {\n  content: \"\\f75e\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-restroom:before {\n  content: \"\\f7bd\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.fa-ring:before {\n  content: \"\\f70b\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-robot:before {\n  content: \"\\f544\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-route:before {\n  content: \"\\f4d7\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.fa-ruler:before {\n  content: \"\\f545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.fa-running:before {\n  content: \"\\f70c\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.fa-rust:before {\n  content: \"\\e07a\"; }\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-salesforce:before {\n  content: \"\\f83b\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-satellite:before {\n  content: \"\\f7bf\"; }\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.fa-save:before {\n  content: \"\\f0c7\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-school:before {\n  content: \"\\f549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-scroll:before {\n  content: \"\\f70e\"; }\n\n.fa-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\f688\"; }\n\n.fa-search-location:before {\n  content: \"\\f689\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-seedling:before {\n  content: \"\\f4d8\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-shapes:before {\n  content: \"\\f61f\"; }\n\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.fa-shield-virus:before {\n  content: \"\\e06c\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.fa-shopify:before {\n  content: \"\\e057\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.fa-sign:before {\n  content: \"\\f4d9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-signature:before {\n  content: \"\\f5b7\"; }\n\n.fa-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-sink:before {\n  content: \"\\e06d\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-skating:before {\n  content: \"\\f7c5\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-skiing:before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.fa-skull:before {\n  content: \"\\f54c\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.fa-slash:before {\n  content: \"\\f715\"; }\n\n.fa-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.fa-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-smile:before {\n  content: \"\\f118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.fa-smog:before {\n  content: \"\\f75f\"; }\n\n.fa-smoking:before {\n  content: \"\\f48d\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.fa-sms:before {\n  content: \"\\f7cd\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.fa-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.fa-snowman:before {\n  content: \"\\f7d0\"; }\n\n.fa-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.fa-soap:before {\n  content: \"\\e06e\"; }\n\n.fa-socks:before {\n  content: \"\\f696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\\f882\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-down-alt:before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.fa-sort-amount-up-alt:before {\n  content: \"\\f885\"; }\n\n.fa-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\\f887\"; }\n\n.fa-sort-up:before {\n  content: \"\\f0de\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-spa:before {\n  content: \"\\f5bb\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\"; }\n\n.fa-spell-check:before {\n  content: \"\\f891\"; }\n\n.fa-spider:before {\n  content: \"\\f717\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-splotch:before {\n  content: \"\\f5bc\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-square-full:before {\n  content: \"\\f45c\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-stackpath:before {\n  content: \"\\f842\"; }\n\n.fa-stamp:before {\n  content: \"\\f5bf\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.fa-star-of-life:before {\n  content: \"\\f621\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.fa-stopwatch-20:before {\n  content: \"\\e06f\"; }\n\n.fa-store:before {\n  content: \"\\f54e\"; }\n\n.fa-store-alt:before {\n  content: \"\\f54f\"; }\n\n.fa-store-alt-slash:before {\n  content: \"\\e070\"; }\n\n.fa-store-slash:before {\n  content: \"\\e071\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-stream:before {\n  content: \"\\f550\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.fa-sun:before {\n  content: \"\\f185\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-surprise:before {\n  content: \"\\f5c2\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.fa-swift:before {\n  content: \"\\f8e1\"; }\n\n.fa-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.fa-symfony:before {\n  content: \"\\f83d\"; }\n\n.fa-synagogue:before {\n  content: \"\\f69b\"; }\n\n.fa-sync:before {\n  content: \"\\f021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.fa-syringe:before {\n  content: \"\\f48e\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.fa-tablets:before {\n  content: \"\\f490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-tape:before {\n  content: \"\\f4db\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-teeth:before {\n  content: \"\\f62e\"; }\n\n.fa-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.fa-temperature-high:before {\n  content: \"\\f769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-tenge:before {\n  content: \"\\f7d7\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-theater-masks:before {\n  content: \"\\f630\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-thermometer:before {\n  content: \"\\f491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.fa-tiktok:before {\n  content: \"\\e07b\"; }\n\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.fa-tired:before {\n  content: \"\\f5c8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-toilet:before {\n  content: \"\\f7d8\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.fa-toilet-paper-slash:before {\n  content: \"\\e072\"; }\n\n.fa-toolbox:before {\n  content: \"\\f552\"; }\n\n.fa-tools:before {\n  content: \"\\f7d9\"; }\n\n.fa-tooth:before {\n  content: \"\\f5c9\"; }\n\n.fa-torah:before {\n  content: \"\\f6a0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.fa-tractor:before {\n  content: \"\\f722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-traffic-light:before {\n  content: \"\\f637\"; }\n\n.fa-trailer:before {\n  content: \"\\e041\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-tram:before {\n  content: \"\\f7da\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.fa-trash-restore:before {\n  content: \"\\f829\"; }\n\n.fa-trash-restore-alt:before {\n  content: \"\\f82a\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.fa-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.fa-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.fa-tshirt:before {\n  content: \"\\f553\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-tv:before {\n  content: \"\\f26c\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-umbraco:before {\n  content: \"\\f8e8\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.fa-uncharted:before {\n  content: \"\\e084\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-unity:before {\n  content: \"\\e049\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-unlink:before {\n  content: \"\\f127\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-unsplash:before {\n  content: \"\\e07c\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-user-alt:before {\n  content: \"\\f406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.fa-user-check:before {\n  content: \"\\f4fc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.fa-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.fa-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.fa-user-friends:before {\n  content: \"\\f500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\f501\"; }\n\n.fa-user-injured:before {\n  content: \"\\f728\"; }\n\n.fa-user-lock:before {\n  content: \"\\f502\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-user-minus:before {\n  content: \"\\f503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\f504\"; }\n\n.fa-user-nurse:before {\n  content: \"\\f82f\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-user-shield:before {\n  content: \"\\f505\"; }\n\n.fa-user-slash:before {\n  content: \"\\f506\"; }\n\n.fa-user-tag:before {\n  content: \"\\f507\"; }\n\n.fa-user-tie:before {\n  content: \"\\f508\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-users-cog:before {\n  content: \"\\f509\"; }\n\n.fa-users-slash:before {\n  content: \"\\e073\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.fa-utensils:before {\n  content: \"\\f2e7\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-vest:before {\n  content: \"\\e085\"; }\n\n.fa-vest-patches:before {\n  content: \"\\e086\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-vial:before {\n  content: \"\\f492\"; }\n\n.fa-vials:before {\n  content: \"\\f493\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-video:before {\n  content: \"\\f03d\"; }\n\n.fa-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.fa-vihara:before {\n  content: \"\\f6a7\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-virus:before {\n  content: \"\\e074\"; }\n\n.fa-virus-slash:before {\n  content: \"\\e075\"; }\n\n.fa-viruses:before {\n  content: \"\\e076\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-voicemail:before {\n  content: \"\\f897\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\f772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-walking:before {\n  content: \"\\f554\"; }\n\n.fa-wallet:before {\n  content: \"\\f555\"; }\n\n.fa-warehouse:before {\n  content: \"\\f494\"; }\n\n.fa-watchman-monitoring:before {\n  content: \"\\e087\"; }\n\n.fa-water:before {\n  content: \"\\f773\"; }\n\n.fa-wave-square:before {\n  content: \"\\f83e\"; }\n\n.fa-waze:before {\n  content: \"\\f83f\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-weight:before {\n  content: \"\\f496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wind:before {\n  content: \"\\f72e\"; }\n\n.fa-window-close:before {\n  content: \"\\f410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-wodu:before {\n  content: \"\\e088\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-won-sign:before {\n  content: \"\\f159\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-x-ray:before {\n  content: \"\\f497\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-yammer:before {\n  content: \"\\f840\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\f157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n\n/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  src: url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n\n.menu {\n  margin: 0;\n  padding: 0;\n  background: #333;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  height: 39px; }\n  .menu a {\n    color: rgba(255, 255, 255, 0.8); }\n    .menu a:hover {\n      color: #6fb1dd; }\n  .menu ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    height: 100%; }\n  .menu ul li {\n    text-align: center; }\n  .menu .logo-link {\n    position: relative;\n    top: -3px; }\n\n.btn, .btn-alt, .btn-warning {\n  background-color: #1b86ce;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 5px;\n  padding: 5px;\n  border: solid 1px transparent;\n  cursor: pointer;\n  outline: none; }\n  .btn:hover, .btn-alt:hover, .btn-warning:hover {\n    background-color: #318fce;\n    outline: none;\n    color: rgba(255, 255, 255, 0.9); }\n\n.btn[disabled], .btn-alt[disabled], .btn-warning[disabled] {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.5);\n  cursor: inherit; }\n  .btn[disabled]:hover, .btn-alt[disabled]:hover, .btn-warning[disabled]:hover {\n    background-color: inherit;\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.5); }\n\n.btn-alt {\n  background-color: transparent;\n  border: solid 1px rgba(255, 255, 255, 0.8); }\n  .btn-alt:hover {\n    border-color: transparent; }\n\n.btn-warning {\n  background-color: #e6762c;\n  border: solid 1px #c06325; }\n  .btn-warning:hover {\n    background-color: #e4884c; }\n\n.logo, .toolbar .toolbar-logo {\n  width: 22px;\n  height: 22px;\n  background: url(" + ___CSS_LOADER_URL___12___ + ");\n  background-position: center;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  top: 16px; }\n\n.draw-btn-alt {\n  border: solid 1px rgba(255, 255, 255, 0.8);\n  padding: 5px;\n  border-radius: 5px; }\n  .draw-btn-alt:hover {\n    border-color: #6fb1dd; }\n\ninput,\nbutton {\n  font-family: inherit;\n  font-size: inherit; }\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n  padding: 5px;\n  border: solid white 1px;\n  border-radius: 2px; }\n  input[type=\"text\"]:focus,\n  input[type=\"number\"]:focus {\n    border-color: #1474b4; }\n\n.hidden {\n  display: none !important; }\n\n.modal {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n  .modal .modal-content {\n    text-align: center;\n    padding: 35px;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n    top: -39px;\n    z-index: 2;\n    border: solid 1px #262626;\n    border-radius: 5px;\n    background: #333;\n    box-shadow: 0 0 5px #333;\n    display: flex;\n    flex-direction: column; }\n    .modal .modal-content .title {\n      margin-top: 0;\n      margin-bottom: 10px; }\n  .modal .modal-header {\n    text-align: right;\n    position: absolute;\n    top: 15px;\n    right: 15px; }\n    .modal .modal-header .close-btn {\n      cursor: pointer;\n      color: rgba(255, 255, 255, 0.7); }\n      .modal .modal-header .close-btn:hover {\n        color: rgba(255, 255, 255, 0.8); }\n\n@media (max-width: 700px) {\n  .modal .modal-content {\n    width: 65vw; } }\n\n@media (max-height: 700px) {\n  .modal .modal-content {\n    height: 65vh; } }\n\n@media (max-width: 400px) {\n  .modal .modal-content {\n    padding: 20px; } }\n\n.toolbar {\n  height: 100%;\n  background-color: #333;\n  padding: 0 10px;\n  margin: 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 26px;\n  grid-column: 1;\n  touch-action: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none; }\n  .toolbar .toolbar-logo {\n    position: absolute;\n    top: -30px;\n    margin-left: -10px; }\n  .toolbar .separator {\n    color: rgba(255, 255, 255, 0.5);\n    padding: 6px 4px 10px 4px;\n    border: solid 1px transparent;\n    border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n    margin-bottom: 10px; }\n  .toolbar .color-separator {\n    margin-top: 20px; }\n  .toolbar .btn-tool, .toolbar .btn-color {\n    display: block;\n    padding: 6px;\n    border-radius: 5px;\n    margin: 0 auto;\n    margin-bottom: 5px;\n    cursor: pointer; }\n    .toolbar .btn-tool:hover, .toolbar .btn-color:hover {\n      color: rgba(255, 255, 255, 0.9); }\n  .toolbar ul {\n    list-style: none;\n    padding: 0;\n    margin: 0px; }\n  .toolbar .btn-color {\n    display: block;\n    border: solid 1px rgba(255, 255, 255, 0.8);\n    width: 30px;\n    height: 30px;\n    border-radius: 10px;\n    padding: 0;\n    margin-bottom: 10px; }\n    .toolbar .btn-color:hover {\n      cursor: pointer;\n      filter: brightness(1.5); }\n  .toolbar .selected {\n    color: #318fce;\n    padding-left: 0;\n    padding-right: 0; }\n    .toolbar .selected:hover {\n      color: #6fb1dd; }\n  .toolbar .selected-color {\n    border-color: #6fb1dd; }\n  .toolbar .disabled {\n    color: rgba(255, 255, 255, 0.5); }\n    .toolbar .disabled:hover {\n      color: rgba(255, 255, 255, 0.6); }\n  .toolbar .line-icon {\n    font-weight: bold; }\n\n@media (max-width: 700px) {\n  .toolbar {\n    padding: 0 5px;\n    font-size: 24px; } }\n\n@media (max-width: 480px) {\n  .toolbar {\n    padding: 0; }\n    .toolbar .toolbar-logo {\n      display: none; } }\n\n@media (max-height: 845px) {\n  .toolbar {\n    font-size: 24px; }\n    .toolbar .btn-tool, .toolbar .btn-color {\n      margin-bottom: 3px; }\n    .toolbar .color-separator {\n      margin-top: 10px; }\n    .toolbar .separator {\n      margin-bottom: 8px; } }\n\n@media (max-height: 760px) {\n  .toolbar {\n    font-size: 22px; }\n    .toolbar .separator {\n      margin-bottom: 7px; }\n    .toolbar .btn-tool, .toolbar .btn-color {\n      margin-bottom: 0px; }\n    .toolbar .btn-color {\n      width: 15px;\n      height: 15px;\n      margin-bottom: 5px;\n      padding: 5px; } }\n\n@media (max-height: 685px) {\n  .toolbar .btn-color {\n    padding: 3px; } }\n", ""]);



/***/ }),

/***/ "./public/js/fill.worker.js":
/*!**********************************!*\
  !*** ./public/js/fill.worker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "fill.worker.js");
}


/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./public/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_draw_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/draw.scss */ "./public/scss/draw.scss");
/* harmony import */ var _scss_draw_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_draw_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lato_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lato-font */ "./node_modules/lato-font/css/lato-font.css");
/* harmony import */ var lato_font__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lato_font__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favicon.ico */ "./public/favicon.ico");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_favicon_ico__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/tool-type */ "./public/js/models/tool-type.js");
/* harmony import */ var _tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/tool-from-type */ "./public/js/tools/tool-from-type.js");
/* harmony import */ var _tools_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/text */ "./public/js/tools/text.js");
/* harmony import */ var _tools_fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/fill */ "./public/js/tools/fill.js");
/* harmony import */ var _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/color-picker */ "./public/js/tools/color-picker.js");
/* harmony import */ var _tools_rect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/rect */ "./public/js/tools/rect.js");
/* harmony import */ var _tools_line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/line */ "./public/js/tools/line.js");
/* harmony import */ var _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/ellipse */ "./public/js/tools/ellipse.js");
/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification */ "./public/js/notification/notification.js");
/* harmony import */ var _notification_notification_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification-system */ "./public/js/notification/notification-system.js");
/* harmony import */ var _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/drawing-data */ "./public/js/models/drawing-data.js");
/* harmony import */ var _components_background_modal_background_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/background-modal/background-modal */ "./public/js/components/background-modal/background-modal.js");
/* harmony import */ var _models_vector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/vector */ "./public/js/models/vector.js");
/* harmony import */ var _fill_worker_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fill.worker.js */ "./public/js/fill.worker.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components */ "./public/js/components.js");




















const CANVAS_SIZE = 0.9;
const CANVAS_SIZE_MEDIUM = 0.85;
const CANVAS_SIZE_SMALL = 0.8;
const MEDIUM_SIZE_PX = 550;
const SMALL_SIZE_PX = 420;
const DEFAULT_BRUSH_SIZE = 20;
const DEFAULT_PAINT_COLOR = "#000000";
const DEFAULT_PAINT_TOOL = _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].BRUSH;
const NET_CURSOR_UPDATE_INTERVAL_MS = 50;
const notificationSystem = new _notification_notification_system__WEBPACK_IMPORTED_MODULE_13__["default"]();
let canvas, socket, ctx, bgCanvas, bgCtx, colorSelector, backgroundSelectionModal, sizeValueSpan,
	brushSizeMenu, roomUrlLink, toolbar, shapePreviewCanvas, shapePreviewCtx;
let isDrawing = false;
let paintTool = Object(_tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__["default"])(DEFAULT_PAINT_TOOL, DEFAULT_BRUSH_SIZE, DEFAULT_PAINT_COLOR);
let drawingStartPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let drawingEndPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let isSavingCanvas = false;
let lastSelectedSlider = null;
let touchJustEnded = false;
let isFirstJoin = true;
let cursorMoved = false;
let cursorPosition = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let users = [];
let showRemoteCursors = true;
let sticky = document.querySelector(".sticky");
// let upload = document.querySelector(".upload");
// // calculate canvas size based on window dimensions
// upload.addEventListener("click", (e) => {
// 	// Open file explorer
// 	let input = document.createElement("input");
// 	input.setAttribute("type", "file");
// 	input.click();

// 	input.addEventListener("change", (e) => {
// 			let file = input.files[0];
// 			let url = URL.createObjectURL(file);

// 			let stickyTemplateHTML = `
// 			<div class="header-cont">
// 					<div class="minimize"></div>
// 					<div class="remove"></div>
// 			</div>
// 			<div class="note-cont">
// 					<img src="${url}"/>
// 			</div>
// 			`;
// 			createSticky(stickyTemplateHTML);
// 	})
// })

sticky.addEventListener("click", (e) => {
	let stickyTemplateHTML = `
	<div class="header-cont">
			<div class="minimize"></div>
			<div class="remove"></div>
	</div>
	<div class="note-cont">
			<textarea spellcheck="false"></textarea>
	</div>
	`;

	createSticky(stickyTemplateHTML);
})

function createSticky(stickyTemplateHTML) {
	let stickyCont = document.createElement("div");
	stickyCont.setAttribute("class", "sticky-cont");
	stickyCont.innerHTML = stickyTemplateHTML;
	document.body.appendChild(stickyCont);

	let minimize = stickyCont.querySelector(".minimize");
	let remove = stickyCont.querySelector(".remove");
	noteActions(minimize, remove, stickyCont);

	stickyCont.onmousedown = function (event) {
			dragAndDrop(stickyCont, event);
	};

	stickyCont.ondragstart = function () {
			return false;
	};
}

function noteActions(minimize, remove, stickyCont) {
	remove.addEventListener("click", (e) => {
			stickyCont.remove();
	})
	minimize.addEventListener("click", (e) => {
			let noteCont = stickyCont.querySelector(".note-cont");
			let display = getComputedStyle(noteCont).getPropertyValue("display");
			if (display === "none") noteCont.style.display = "block";
			else noteCont.style.display = "none";
	})
}

function dragAndDrop(element, event) {
	let shiftX = event.clientX - element.getBoundingClientRect().left;
	let shiftY = event.clientY - element.getBoundingClientRect().top;

	element.style.position = 'absolute';
	element.style.zIndex = 1000;

	moveAt(event.pageX, event.pageY);

	// moves the ball at (pageX, pageY) coordinates
	// taking initial shifts into account
	function moveAt(pageX, pageY) {
			element.style.left = pageX - shiftX + 'px';
			element.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);
	}

	// move the ball on mousemove
	document.addEventListener('mousemove', onMouseMove);

	// drop the ball, remove unneeded handlers
	element.onmouseup = function () {
			document.removeEventListener('mousemove', onMouseMove);
			element.onmouseup = null;
	};
}



function defaultCanvasSize()
{
	let newWidth = window.innerWidth * CANVAS_SIZE;
	let newHeight = window.innerHeight * CANVAS_SIZE;

	if (window.innerWidth < SMALL_SIZE_PX)
		newWidth = window.innerWidth * CANVAS_SIZE_SMALL;
	else if (window.innerWidth < MEDIUM_SIZE_PX)
		newWidth = window.innerWidth * CANVAS_SIZE_MEDIUM;

	if (window.innerHeight < SMALL_SIZE_PX)
		newHeight = window.innerHeight * CANVAS_SIZE_SMALL;
	else if (window.innerHeight < MEDIUM_SIZE_PX)
		newHeight = window.innerHeight * CANVAS_SIZE_MEDIUM;

	newWidth = Math.round(newWidth);
	newHeight = Math.round(newHeight);

	return {width: newWidth, height: newHeight};
}

// makes sure canvas is never obscured by toolbar and navbar
function repositionCanvas()
{
	const canvasLayersRect = document.querySelector(".canvas-layers").getBoundingClientRect();

	if (canvas.width > canvasLayersRect.width)
	{
		canvas.style.left = "0px";
		bgCanvas.style.left = "0px";
		shapePreviewCanvas.style.left = "0px";

	} else
	{
		canvas.style.left = "initial";
		bgCanvas.style.left = "initial";
		shapePreviewCanvas.style.left = "initial";
	}

	if (canvas.height > canvasLayersRect.height)
	{
		canvas.style.top = "0px";
		bgCanvas.style.top = "0px";
		shapePreviewCanvas.style.top = "0px";

	} else
	{
		canvas.style.top = "initial";
		bgCanvas.style.top = "initial";
		shapePreviewCanvas.style.top = "initial";
	}
}

function setCanvasSize(size)
{
	const canvasData = canvas.toDataURL("image/png");
	const bgData = bgCanvas.toDataURL("image/png");
	canvas.height = size.height;
	canvas.width = size.width;
	bgCanvas.height = size.height;
	bgCanvas.width = size.width;
	shapePreviewCanvas.height = size.height;
	shapePreviewCanvas.width = size.width;
	repositionCanvas();
	loadCanvasData(ctx, canvasData);
	loadCanvasData(bgCtx, bgData);

	document.querySelector("#canvas-width").value = size.width;
	document.querySelector("#canvas-height").value = size.height;
	updateTextCursorPos();
}

// load image from canvasURL
function loadCanvasData(ctx, canvasData)
{
	let canvasImage = new Image();
	canvasImage.onload = () =>
	{
		ctx.drawImage(canvasImage, 0, 0);
	};

	canvasImage.src = canvasData;
}

function paintToolSwitched(e)
{
	paintTool = Object(_tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__["default"])(e.detail, paintTool.size, paintTool.color);
	updateBrushPreview();
}

// color change by clicking a toolbar icon or editing color input
function paintColorChanged(e, color=null)
{

	if (e != null && e.target == colorSelector)
	{
		color = e.target.value;
		toolbar.clearSelectedColor();

	} else
	{
		if (e != null) // changed by toolbar
			color = e.detail;
		else // changed by color picker
			toolbar.clearSelectedColor();

		colorSelector.parentElement.style.backgroundColor = color;
	}

	paintTool.setColor(color);
	updateBrushPreview();
}

function roomUrlClicked(e)
{
	e.preventDefault();

	var textArea = document.createElement("TEXTAREA");
	textArea.value = e.currentTarget.dataset.clipboard;
	textArea.classList.add("clipboard");
	e.currentTarget.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try
	{
		document.execCommand("copy");
	} catch (err)
	{
		console.error("ERROR: can't copy URL to clipboard");
	}

	e.currentTarget.removeChild(textArea);
}

// handles mouse move and touch move
function canvasMouseMoved(e)
{
	const brushPreview = document.querySelector("#local-brush-preview");
	const leftPos = e.clientX - brushPreview.offsetWidth / 2;
	const topPos = e.clientY - brushPreview.offsetHeight / 2;
	const canvasRect = canvas.getBoundingClientRect();
	brushPreview.style.left = `${leftPos}px`;
	brushPreview.style.top = `${topPos}px`;
	cursorPosition = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](leftPos - canvasRect.x, topPos - canvasRect.y);
	cursorMoved = true;

	if (isDrawing)
	{
		let posX, posY;
		let numTouches;
		let rect;

		if (e.type == "touchmove")
		{
			numTouches = e.touches.length;
			rect = e.target.getBoundingClientRect();
		} else
		{
			posX = e.offsetX;
			posY = e.offsetY;
			numTouches = 1;
		}

		for (let i = 0; i < numTouches; i++)
		{
			if (e.type == "touchmove")
			{
				posX = e.touches[i].pageX - rect.left;
				posY = e.touches[i].pageY - rect.top;
			}

			updateDrawingPos(null, new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY));

			// not a shape tool
			if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] == false && paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] == false &&
				paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"] == false)
			{
				const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
				draw(drawingData);
				socket.emit("draw", drawingData);

				updateDrawingPos(new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY), null);
			}
		}

		// shape tools
		if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"])
		{
			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let isSquare = e.shiftKey;
			paintTool.square = isSquare;

			let rect = new _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"](paintTool.size, paintTool.color, isSquare);
			let posX = e.offsetX;
			let posY = e.offsetY;
			rect.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);

		} else if (paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"])
		{
			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let line = new _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"](paintTool.size, paintTool.color);
			let posX = e.offsetX;
			let posY = e.offsetY;
			line.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);

		} else if (paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"])
		{
			let isCircle = e.shiftKey;
			paintTool.circle = isCircle;

			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let ellipse = new _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"](paintTool.size, paintTool.color, isCircle);
			let posX = e.offsetX;
			let posY = e.offsetY;
			ellipse.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);
		}
	}
}

function canvasMouseDown(e)
{
	// return if this was triggered by automatic mousedown event after touch start
	if (touchJustEnded)
		return;

	let posX = e.offsetX;
	let posY = e.offsetY;

	if (e.type == "touchstart")
	{
		posX = e.touches[i].pageX - rect.left;
		posY = e.touches[i].pageY - rect.top;
	}

	drawSinglePoint(posX, posY);
}

function canvasTouchStart(e)
{
	let posX, posY;
	let numTouches = e.touches.length;
	let rect = e.target.getBoundingClientRect();

	for (let i = 0; i < numTouches; i++)
	{
		if (e.type == "touchstart")
		{
			posX = e.touches[i].pageX - rect.left;
			posY = e.touches[i].pageY - rect.top;
		}

		drawSinglePoint(posX, posY);
	}
}

// handles mouse up and touch end
function windowMouseUp(e)
{
	if (e.type == "mouseup" && touchJustEnded)
	{
		touchJustEnded = false;
		return;
	}

	if (isDrawing && (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] ||
		paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"]))
	{
		// clear preview
		shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

		let posX = e.offsetX;
		let posY = e.offsetY;

		if (e.target.tagName == "CANVAS")
		{
			updateDrawingPos(null, new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY));
		}

		const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		// TODO: check if this is needed
		if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"])
			drawingData.square = paintTool.square;

		draw(drawingData);
		socket.emit("draw", drawingData);
	}

	isDrawing = false;
	lastSelectedSlider = null;
}

function canvasTouchEnded(e)
{
	windowMouseUp(e);
	touchJustEnded = true;
}

function canvasMouseOver(e)
{
	const brushPreview = document.querySelector("#local-brush-preview");
	brushPreview.style.visibility = "visible";
	brushPreview.style.left = (e.clientX - brushPreview.offsetWidth / 2) + "px";
	brushPreview.style.top = (e.clientY - brushPreview.offsetHeight / 2) + "px";
}

function canvasMouseOut()
{
	document.querySelector("#local-brush-preview").style.visibility = "hidden";
}

function setContextProperties(context, tool)
{
	context.globalCompositeOperation = tool.operation;
	context.lineWidth = tool.size;
	context.lineCap = tool.style;
	context.strokeStyle = tool.color;
	context.shadowBlur = tool.blur;
	context.shadowColor = tool.color;
}

function draw(drawingData)
{
	setContextProperties(ctx, drawingData.tool);

	const posX = drawingData.startPos.x;
	const posY = drawingData.startPos.y;

	if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT && drawingData.text != null && drawingData.text != "")
	{
		ctx.font = `${drawingData.tool.size}px Lato`;
		ctx.fillStyle = drawingData.tool.color;
		ctx.fillText(drawingData.text, posX, posY);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].FILL)
	{
		const width = ctx.canvas.clientWidth;
		const height = ctx.canvas.clientHeight;
		let imageData = ctx.getImageData(0, 0, width, height);
		let fillTool = new _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"](drawingData.tool.size, drawingData.tool.color);
		let fillData = fillTool.getFillData(posX, posY, width, height, imageData);

		if (fillData == null)
			return;

		if (window.Worker)
		{
			if (!canvas.classList.contains("progress"))
				canvas.classList.add("progress");

			let worker = new _fill_worker_js__WEBPACK_IMPORTED_MODULE_17__["default"]();
			worker.postMessage([width, height, posX, posY, imageData, fillData[0], fillData[1]]);
			worker.onmessage = (e) =>
			{
				ctx.putImageData(e.data, 0, 0); // update canvas
				canvas.classList.remove("progress");
			};

		} else
		{
			_tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"].fillPixels([width, height, posX, posY, imageData, fillData[0], fillData[1]]);
			ctx.putImageData(imageData, 0, 0); // update canvas
		}

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].RECT)
	{
		let rect = new _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"](drawingData.tool.size, drawingData.tool.color, drawingData.tool.square);
		rect.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].LINE)
	{
		let line = new _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"](drawingData.tool.size, drawingData.tool.color);
		line.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].ELLIPSE)
	{
		let ellipse = new _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"](drawingData.tool.size, drawingData.tool.color, drawingData.tool.circle);
		ellipse.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else
	{
		ctx.beginPath();
		ctx.moveTo(drawingData.startPos.x, drawingData.startPos.y);
		ctx.lineTo(drawingData.endPos.x, drawingData.endPos.y);
		ctx.stroke();
	}
}

function drawSinglePoint(posX, posY)
{
	let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY);
	updateDrawingPos(newPos, newPos);

	if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"])
	{
		let drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		draw(drawingData);
		socket.emit("draw", drawingData);

	} else if (paintTool instanceof _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__["default"])
	{
		let color = paintTool.getPixelColor(ctx, bgCtx, posX, posY);
		paintColorChanged(null, color);

	} else if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] ||
		paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"]) // shape tools
	{
		isDrawing = true;

	} else if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"] == false) // other drawing tools
	{
		isDrawing = true;
		let drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		draw(drawingData);
		socket.emit("draw", drawingData);
	}
}

// an element that follows mouse cursor. It visualizes the brush size and shape
function createLocalBrushPreview()
{
	const brushPreview = document.createElement("div");
	brushPreview.classList.add("brush-preview");
	brushPreview.id = "local-brush-preview";
	document.body.appendChild(brushPreview);
	updateBrushPreview();
}

function createRemoteBrushPreview(userName, userId)
{
	const brushPreview = document.createElement("div");
	brushPreview.classList.add("brush-preview-remote");
	brushPreview.id = `brush-preview-${userId}`;
	brushPreview.style.width = `${DEFAULT_BRUSH_SIZE}px`;
	brushPreview.style.height = `${DEFAULT_BRUSH_SIZE}px`;

	const nameTag = document.createElement("span");
	nameTag.classList.add("name-tag");
	nameTag.textContent = userName;
	nameTag.style.top = `${DEFAULT_BRUSH_SIZE}px`;
	brushPreview.append(nameTag);

	document.body.appendChild(brushPreview);
}

function deleteRemoteBrushPreview(userId)
{
	const brushPreview = document.getElementById(`brush-preview-${userId}`);
	document.body.removeChild(brushPreview);
}

function updateBrushPreview()
{
	const size = paintTool.size;
	const blur = paintTool.blur;
	const color = paintTool.color;
	const style = paintTool.style;

	const colorPreview = document.querySelector(".color-preview");
	colorPreview.style.background = color;

	const brushPreview = document.querySelector("#local-brush-preview");
	brushPreview.style.width = (size + blur / 2) + "px";
	brushPreview.style.height = (size + blur / 2) + "px";

	if (style == "round")
		brushPreview.style.borderRadius = "50%";
	else
		brushPreview.style.borderRadius = "0";

	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		brushPreview.style.display = "none";
		canvas.style.cursor = "text";
		document.querySelector(".text-cursor").classList.remove("hidden");
		document.querySelector(".text-cursor").style.backgroundColor = color;
		document.querySelector(".text-cursor").style.height = `${size}px`;
		updateTextCursorPos();

	} else if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"] || paintTool instanceof _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__["default"] ||
		paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] || paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"])
	{
		brushPreview.style.display = "none";
		canvas.style.cursor = "crosshair";
		document.querySelector(".text-cursor").classList.add("hidden");

	} else
	{
		brushPreview.style.display = "initial";
		canvas.style.cursor = "default";
		document.querySelector(".text-cursor").classList.add("hidden");
	}
}

function updateRemoteBrushPreview(userId, pos, size, color)
{
	const brushPreview = document.getElementById(`brush-preview-${userId}`);
	const canvasRect = canvas.getBoundingClientRect();
	const globalPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](canvasRect.x + pos.x, canvasRect.y + pos.y);

	brushPreview.style.visibility = "visible";
	brushPreview.style.width = `${size}px`;
	brushPreview.style.height = `${size}px`;
	brushPreview.style.left = `${globalPos.x}px`;
	brushPreview.style.top = `${globalPos.y}px`;
	brushPreview.querySelector(".name-tag").style.top = `${size}px`;
	brushPreview.querySelector(".name-tag").style.color = color;
}

// download canvas image
function saveBtnClicked(e)
{
	if (isSavingCanvas)
	{
		isSavingCanvas = false;
		return;
	}

	e.preventDefault();

	let backgroundImage = new Image();
	let image = new Image();
	let currentTarget = e.currentTarget;

	backgroundImage.onload = () =>
	{
		image.src = canvas.toDataURL("image/png");
	};

	image.onload = () =>
	{
		let tempCanvas = document.createElement("canvas");
		let tempCtx = tempCanvas.getContext("2d");
		tempCanvas.width = canvas.width;
		tempCanvas.height = canvas.height;
		tempCtx.drawImage(backgroundImage, 0, 0);
		tempCtx.drawImage(image, 0, 0);

		currentTarget.href = tempCanvas.toDataURL("image/png");
		isSavingCanvas = true;
		currentTarget.click();
	};

	backgroundImage.src = bgCanvas.toDataURL("image/png");
}

function updateDisplayedRoomUrl(fullRoomUrl, roomName)
{
	let regex = /^https?:\/\/(www\.)?/;
	let domainName = fullRoomUrl.replace(regex, "");
	domainName = domainName.replace(/\/.*$/, "");
	let displayName = `${domainName}/${roomName}`;

	if (window.innerWidth < MEDIUM_SIZE_PX)
		displayName = `${roomName}`;

	roomUrlLink.querySelector(".url-container span").innerHTML = displayName;
}

// connect to websocket
function initializeSocket()
{
	try
	{
		socket = io();

		socket.on("receiveRoomData", (fullRoomUrl, roomName, userName, roomUsers) =>
		{
			updateDisplayedRoomUrl(fullRoomUrl, roomName);
			roomUrlLink.href = fullRoomUrl;
			roomUrlLink.dataset.clipboard = fullRoomUrl;
			document.title = `Dzine - ${roomName}`;
			document.querySelector(".options-panel input").value = userName;
			users = roomUsers;

			// if it's the first user in a room set their background to white instead of default transparent
			if (users.length == 0 && isFirstJoin)
				fillBackground();

			isFirstJoin = false;
			users.forEach(user => createRemoteBrushPreview(user.name, user.id));
		});

		socket.on("userJoin", (userName, userId) =>
		{
			notificationSystem.add(new _notification_notification__WEBPACK_IMPORTED_MODULE_12__["default"](`User ${userName} has joined`));
			users.push({id: userId, name: userName});
			createRemoteBrushPreview(userName, userId);
		});

		socket.on("userLeave", (userName, userId) =>
		{
			notificationSystem.add(new _notification_notification__WEBPACK_IMPORTED_MODULE_12__["default"](`User ${userName} has left`));
			users.splice(users.findIndex(user => user.id == userId), 1);
			deleteRemoteBrushPreview(userId);
		});

		socket.on("draw", drawingData =>
		{
			draw(drawingData);
		});

		socket.on("canvasRequest", () =>
		{
			socket.emit("receiveCanvas", canvas.toDataURL("image/png"), canvas.width, canvas.height);
		});

		socket.on("backgroundCanvasRequest", () =>
		{
			socket.emit("receiveBackgroundCanvas", bgCanvas.toDataURL("image/png"));
		});

		socket.on("receiveCanvas", (canvasData, width, height) =>
		{
			setCanvasSize({width: width, height: height});
			loadCanvasData(ctx, canvasData);
		});

		socket.on("receiveCanvasSize", (width, height) =>
		{
			setCanvasSize({width: width, height: height});
		});

		socket.on("receiveBackgroundCanvas", bgCanvasData =>
		{
			loadCanvasData(bgCtx, bgCanvasData);
		});

		socket.on("backgroundClear", () =>
		{
			bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		});

		socket.on("setAdmin", isAdmin =>
		{
			const adminSettings = document.querySelector("#admin-settings");
			if (isAdmin == true)
			{
				if (adminSettings.classList.contains("hidden"))
					adminSettings.classList.remove("hidden");
			} else
			{
				if (!adminSettings.classList.contains("hidden"))
					adminSettings.classList.add("hidden");
			}
		});

		socket.on("cursorPosition", (userId, pos, size, color) =>
		{
			if (!showRemoteCursors)
				return;

			updateRemoteBrushPreview(userId, pos, size, color);
		});

	} catch (error)
	{
		console.error("ERROR: can't connect to server");
	}
}

function brushSizeBtnClicked(e)
{
	e.preventDefault();

	if (brushSizeMenu.style.visibility == "visible")
	{
		brushSizeMenu.style.visibility = "hidden";
	} else
	{
		brushSizeMenu.style.visibility = "visible";

		var rect = brushSizeMenu.getBoundingClientRect();
		var parentRect = brushSizeMenu.parentElement.getBoundingClientRect();
		var posX = parentRect.left + (parentRect.width / 2) - (rect.width / 2);

		if (posX < 0)
			posX = 0;

		brushSizeMenu.style.left = posX + "px";
	}
}

function addCanvasBackgroundImage()
{
	backgroundSelectionModal.hide();

	const imagePreview = document.querySelector("#bg-image-preview");
	loadCanvasData(bgCtx, imagePreview.src);
	socket.emit("receiveBackgroundCanvasAll", imagePreview.src);
}

function settingsBtnClicked(e)
{
	e.preventDefault();

	const panel = document.querySelector(".options-panel");
	if (panel.style.visibility == "visible")
	{
		panel.style.visibility = "hidden";
	} else
	{
		panel.style.visibility = "visible";

		const rect = panel.getBoundingClientRect();
		const parentRect = panel.parentElement.getBoundingClientRect();
		let posX = parentRect.left + (parentRect.width / 2) - (rect.width / 2);

		if (posX + rect.width > window.innerWidth)
			posX = window.innerWidth - rect.width;

		panel.style.left = `${posX}px`;
	}
}

// name changed by user
function userNameChanged(e)
{
	socket.emit("userNameChange", e.target.value);
	const cookieMaxAge = 60*60*24*30;
	document.cookie = `userName=${e.target.value}; max-age=${cookieMaxAge}`;
}

function windowResized()
{
	document.querySelector(".options-panel").style.visibility = "hidden";
	brushSizeMenu.style.visibility = "hidden";

	// there are two size sliders but only one is displayed at a time
	// which slider is displayed depends on window size
	// we don't know if any of them just became visible/invisible so update both with every window resize
	document.querySelectorAll(".size-slider").forEach((slider) =>
	{
		slider.update(null, paintTool.size);
	});

	repositionCanvas();
	updateTextCursorPos();
}

function windowMouseMoved(e)
{
	if (lastSelectedSlider)
		lastSelectedSlider.update(e);
}

function keyPressed(e)
{
	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		if (e.key == "Enter")
		{
			let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingEndPos.x, drawingStartPos.y + paintTool.size);
			updateDrawingPos(newPos, null);
		} else
		{
			const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool, e.key);
			draw(drawingData);
			socket.emit("draw", drawingData);
			let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingStartPos.x + ctx.measureText(e.key).width, drawingStartPos.y);
			updateDrawingPos(newPos, null);
		}
	}
}

// ask user for confirmation when they try to leave the page
function beforeWindowUnloaded(e)
{
	e.preventDefault();
	e.returnValue = "";
}

// user edited canvas size input
function canvasSizeSettingChanged(e)
{
	const applyBtn = document.querySelector("#canvas-size-apply");
	if (applyBtn.classList.contains("disabled"))
		applyBtn.classList.remove("disabled");

	applyBtn.disabled = false;
}

function applyCanvasSize(e)
{
	const applyBtn = document.querySelector("#canvas-size-apply");
	if (!applyBtn.classList.contains("disabled"))
		applyBtn.classList.add("disabled");

	applyBtn.disabled = true;
	let width = Math.round(document.querySelector("#canvas-width").value);
	let height = Math.round(document.querySelector("#canvas-height").value);
	setCanvasSize({width: width, height: height});
	socket.emit("setCanvasSize", width, height);
}

function sendCursorPosition()
{
	if (cursorMoved)
	{
		let size = paintTool.size;
		if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"])
			size = 1;

		socket.emit("cursorPosition", cursorPosition, size, paintTool.color);
		cursorMoved = false;
	}
}

function textPasted(e)
{
	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		let clipboardData = e.clipboardData || window.clipboardData;
		let pastedData = clipboardData.getData("Text");

		if (pastedData.length <= 0)
			return;

		let rows = pastedData.split(/\n/g);
		rows.forEach((row, index) =>
		{
			if (row.length > 0)
			{
				const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool, row);
				draw(drawingData);
				socket.emit("draw", drawingData);
				let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingStartPos.x + ctx.measureText(row).width, drawingStartPos.y);
				updateDrawingPos(newPos, null);

				if (index != rows.length - 1)
				{
					newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingEndPos.x, drawingStartPos.y + paintTool.size);
					updateDrawingPos(newPos, null);
				}
			}
		});
	}
}

function updateDrawingPos(startPos, endPos)
{
	if (startPos != null)
	{
		if (startPos.x > canvas.width)
			startPos.x = canvas.width;

		if (startPos.y > canvas.height)
			startPos.y = canvas.height;

		drawingStartPos = startPos;
	}

	if (endPos != null)
	{
		if (endPos.x > canvas.width)
			endPos.x = canvas.width;

		if (endPos.y > canvas.height)
			endPos.y = canvas.height;

		drawingEndPos = endPos;
	}

	updateTextCursorPos();
}

function updateTextCursorPos()
{
	const textCursor = document.querySelector(".text-cursor");
	const textCursorRect = textCursor.getBoundingClientRect();
	textCursor.style.left = `${drawingStartPos.x + canvas.offsetLeft}px`;
	textCursor.style.top = `${(drawingStartPos.y + canvas.offsetTop) - textCursorRect.height}px`;
}

function clearBackground()
{
	backgroundSelectionModal.hide();
	bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	socket.emit("backgroundClearAll");
}

function fillBackground()
{
	backgroundSelectionModal.hide();
	bgCtx.fillStyle = backgroundSelectionModal.bgColor;
	bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
	socket.emit("receiveBackgroundCanvasAll", bgCanvas.toDataURL("image/png"));
}

function initSizeSliders()
{
	document.querySelectorAll(".size-slider").forEach((slider) =>
	{
		slider.update(null, DEFAULT_BRUSH_SIZE);
		slider.addEventListener("change", (e) =>
		{
			let size = Number(e.target.getValue());
			sizeValueSpan.innerHTML = size + "px";
			paintTool.setSize(size);
			updateBrushPreview();
		});
	});
}

window.addEventListener("load", () =>
{
	canvas = document.querySelector("#drawArea");
	if (!canvas)
		return;

	ctx = canvas.getContext("2d");
	bgCanvas = document.querySelector("#bgCanvas");
	bgCtx = bgCanvas.getContext("2d");
	shapePreviewCanvas = document.querySelector("#shapePreview");
	shapePreviewCtx = shapePreviewCanvas.getContext("2d");

	roomUrlLink = document.querySelector("#room-url");
	const saveBtn = document.querySelector("#save");
	colorSelector = document.querySelector("#color-selector");
	const brushSizeBtn = document.querySelector(".brush-size");
	brushSizeMenu = document.querySelector(".brush-size-menu");
	sizeValueSpan = document.querySelector(".size-value");
	backgroundSelectionModal = new _components_background_modal_background_modal__WEBPACK_IMPORTED_MODULE_15__["default"]("background-modal");
	const settingsBtn = document.querySelector("#settings");
	const nameInput = document.querySelector(".options-panel input");

	window.addEventListener("resize", windowResized);
	window.addEventListener("mouseup", windowMouseUp);
	window.addEventListener("touchend", windowMouseUp);
	window.addEventListener("mousemove", windowMouseMoved);
	window.addEventListener("keypress", keyPressed);
	window.addEventListener("beforeunload", beforeWindowUnloaded);
	window.addEventListener("paste", textPasted);
	canvas.addEventListener("mousemove", canvasMouseMoved);
	canvas.addEventListener("touchmove", canvasMouseMoved);
	canvas.addEventListener("mouseover", canvasMouseOver);
	canvas.addEventListener("mouseout", canvasMouseOut);
	canvas.addEventListener("mousedown", canvasMouseDown);
	canvas.addEventListener("touchstart", canvasTouchStart);
	canvas.addEventListener("touchend", canvasTouchEnded);
	roomUrlLink.addEventListener("click", roomUrlClicked);
	saveBtn.addEventListener("click", saveBtnClicked);
	colorSelector.addEventListener("change", paintColorChanged);
	brushSizeBtn.addEventListener("click", brushSizeBtnClicked);
	settingsBtn.addEventListener("click", settingsBtnClicked);
	nameInput.addEventListener("change", userNameChanged);
	document.querySelector("#canvas-width").addEventListener("input", canvasSizeSettingChanged);
	document.querySelector("#canvas-height").addEventListener("input", canvasSizeSettingChanged);
	document.querySelector("#canvas-size-apply").addEventListener("click", applyCanvasSize);

	setInterval(sendCursorPosition, NET_CURSOR_UPDATE_INTERVAL_MS);

	backgroundSelectionModal.onAddImageBtnClick(addCanvasBackgroundImage);
	backgroundSelectionModal.onClearBtnClick(clearBackground);
	backgroundSelectionModal.onFillBtnClick(fillBackground);

	initializeSocket();
	setCanvasSize(defaultCanvasSize());
	createLocalBrushPreview();

	Object(_components__WEBPACK_IMPORTED_MODULE_18__["default"])();

	toolbar = document.querySelector("#toolbar");
	toolbar.initButtons(DEFAULT_PAINT_TOOL, DEFAULT_PAINT_COLOR);
	toolbar.addEventListener("toolSwitch", paintToolSwitched);
	toolbar.addEventListener("colorSwitch", paintColorChanged);
	toolbar.addEventListener("bgSettingsOpen", () => backgroundSelectionModal.toggle());
	toolbar.addEventListener("paste", textPasted);

	initSizeSliders();
	document.querySelectorAll("ui-slider").forEach((slider) =>
	{
		const sliderUsed = () =>
		{
			lastSelectedSlider = slider
		};

		slider.addEventListener("mousedown", sliderUsed);
		slider.addEventListener("touchstart", sliderUsed);
	});
});

/***/ }),

/***/ "./public/js/models/color.js":
/*!***********************************!*\
  !*** ./public/js/models/color.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Color
{
	constructor(r, g, b, a=255)
	{
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	static fromHex(hexString)
	{
		const redMatches = hexString.match(/^#?([a-f0-9]{2})/);
		const greenMatches = hexString.match(/^#.{2}?([a-f0-9]{2})/);
		const blueMatches = hexString.match(/^#.{4}?([a-f0-9]{2})/);
		const red = parseInt(redMatches[1], 16);
		const green = parseInt(greenMatches[1], 16);
		const blue = parseInt(blueMatches[1], 16);

		return new Color(red, green, blue);
	}

	toHex()
	{
		let red = this.r.toString(16);
		let green = this.g.toString(16);
		let blue = this.b.toString(16);

		if (red.length == 1)
			red = "0" + red;

		if (green.length == 1)
			green = "0" + green;

		if (blue.length == 1)
			blue = "0" + blue;

		return `#${red}${green}${blue}`;
	}

	equals(color)
	{
		return this.r == color.r && this.g == color.g && this.b == color.b;
	}

	equalsRgba(color)
	{
		return this.r == color.r && this.g == color.g && this.b == color.b && this.a == color.a;
	}

	toArray()
	{
		return [this.r, this.g, this.b, this.a];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

/***/ "./public/js/models/drawing-data.js":
/*!******************************************!*\
  !*** ./public/js/models/drawing-data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// drawing data sent through the websocket
class DrawingData
{
	constructor(startPos, endPos, tool, text="")
	{
		this.startPos = startPos;
		this.endPos = endPos;
		this.tool = tool;
		this.text = text;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (DrawingData);

/***/ }),

/***/ "./public/js/models/tool-type.js":
/*!***************************************!*\
  !*** ./public/js/models/tool-type.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ToolType =
{
	BRUSH: 0,
	PAINT_ROLLER: 1,
	PENCIL: 2,
	ERASER: 3,
	TEXT: 4,
	FILL: 5,
	COLOR_PICKER: 6,
	RECT: 7,
	LINE: 8,
	ELLIPSE: 9
};

/* harmony default export */ __webpack_exports__["default"] = (ToolType);

/***/ }),

/***/ "./public/js/models/vector.js":
/*!************************************!*\
  !*** ./public/js/models/vector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Vector
{
	constructor(x=0, y=0)
	{
		this.x = x;
		this.y = y;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),

/***/ "./public/js/notification/notification-system.js":
/*!*******************************************************!*\
  !*** ./public/js/notification/notification-system.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class NotificationSystem
{
	constructor()
	{
		this.notifications = [];
		this.notificationVerticalSpace = 80;
		this.notificationBottomMargin = 10;
	}

	add(notification)
	{
		this.notifications.forEach(n =>
		{
			const offsetTop = n.getElement().offsetTop;
			const newBottomOffset = (window.innerHeight - offsetTop) + this.notificationBottomMargin;
			n.getElement().style.bottom = newBottomOffset + "px";

			const maxNotifications = Math.floor((window.innerHeight - document.body.offsetHeight) / this.notificationVerticalSpace);
			const numNotifications = this.notifications.length + 1; // existing notifications + the new one we create

			if (numNotifications > maxNotifications)
				this.removeOldest();
		});

		// remove after fade animation is finished
		notification.getElement().addEventListener("animationend", () =>
		{
			this.remove(notification);
		});

		this.notifications.push(notification);
	}

	remove(notification)
	{
		let element = notification.getElement();
		if (element && document.body.contains(element))
			document.body.removeChild(element);

		this.notifications = this.notifications.filter(item => item != notification);
	}

	removeOldest()
	{
		let oldestNotification = this.notifications.reduce((prev, cur) =>
			prev.dateCreated < cur.dateCreated ? prev : cur);
		this.remove(oldestNotification);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationSystem);

/***/ }),

/***/ "./public/js/notification/notification.js":
/*!************************************************!*\
  !*** ./public/js/notification/notification.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Notification
{
	constructor(text, lifeTimeMs=5000)
	{
		this.text = text;
		this.dateCreated = Date.now();
		this.element = document.createElement("div");
		this.element.classList.add("notification");
		this.element.style.animation = `notif ${lifeTimeMs}ms`;

		const textNode = document.createTextNode(text); // this will escape HTML so it's safe to use with user names
		this.element.appendChild(textNode);
		document.body.appendChild(this.element);
	}

	getElement()
	{
		return this.element;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./public/js/tools/brush.js":
/*!**********************************!*\
  !*** ./public/js/tools/brush.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Brush extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].BRUSH, "round", size, color);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Brush);

/***/ }),

/***/ "./public/js/tools/color-picker.js":
/*!*****************************************!*\
  !*** ./public/js/tools/color-picker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/color */ "./public/js/models/color.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");




class ColorPicker extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_PICKER, "round", size, color);
	}

	getPixelColor(ctx, bgCtx, posX, posY)
	{
		let imageData = ctx.getImageData(posX, posY, 1, 1);

		if (imageData.data[3] != 0)
		{
			return new _models_color__WEBPACK_IMPORTED_MODULE_1__["default"](imageData.data[0], imageData.data[1], imageData.data[2]).toHex();
		} else // if pixel is transparent return background color
		{
			imageData = bgCtx.getImageData(posX, posY, 1, 1)
			return new _models_color__WEBPACK_IMPORTED_MODULE_1__["default"](imageData.data[0], imageData.data[1], imageData.data[2]).toHex();
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./public/js/tools/ellipse.js":
/*!************************************!*\
  !*** ./public/js/tools/ellipse.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Ellipse extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color, circle=false)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].ELLIPSE, "butt", size, color, 0);
		this.circle = circle;
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		ctx.beginPath();

		if (this.circle)
		{
			let radius = Math.max(Math.abs(endPosX - posX), Math.abs(endPosY - posY)) / 2;
			let offsetDirectionX = Math.sign(endPosX - posX);
			let offsetDirectionY = Math.sign(endPosY - posY);
			let centerX = posX + radius * offsetDirectionX;
			let centerY = posY + radius * offsetDirectionY;

			ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		} else
		{
			let centerX = (posX + endPosX) / 2;
			let centerY = (posY + endPosY) / 2;
			let radiusX = Math.abs(centerX - posX);
			let radiusY = Math.abs(centerY - posY);

			ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
		}

		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Ellipse);

/***/ }),

/***/ "./public/js/tools/eraser.js":
/*!***********************************!*\
  !*** ./public/js/tools/eraser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Eraser extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].ERASER, "round", size, color, 0, "destination-out");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Eraser);

/***/ }),

/***/ "./public/js/tools/fill.js":
/*!*********************************!*\
  !*** ./public/js/tools/fill.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/color */ "./public/js/models/color.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");




class Fill extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_2__["default"].FILL, "round", size, color);
	}

	static getImageDataOffset(posX, posY, imageData)
	{
		return (posY * imageData.width + posX) * 4;
	}

	static getPixelColor(posX, posY, imageData)
	{
		const offset = Fill.getImageDataOffset(posX, posY, imageData);
		const arr = imageData.data.slice(offset, offset + 4);
		return [arr[0], arr[1], arr[2], arr[3]];
	}

	static setPixelColor(posX, posY, imageData, color)
	{
		const offset = Fill.getImageDataOffset(posX, posY, imageData);
		imageData.data[offset] = color[0];
		imageData.data[offset + 1] = color[1];
		imageData.data[offset + 2] = color[2];
		imageData.data[offset + 3] = 255;
	}

	static areColorsEqual(color1, color2)
	{
		return color1[0] == color2[0]
			&& color1[1] == color2[1]
			&& color1[2] == color2[2]
			&& color1[3] == color2[3];
	}

	// tolerance is needed to fill pencil drawn shapes because of canvas bug in browsers:
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1666100
	// it still doesn't fill brush drawn shapes because of its shadow
	static areColorsSimilar(color1, color2)
	{
		const tolerance = 6;
		const difference = Math.abs(color1[0] - color2[0]) + Math.abs(color1[1] - color2[1])
						+ Math.abs(color1[2] - color2[2]) + Math.abs(color1[3] - color2[3]);

		return difference <= tolerance;
	}

	static pixelNeedsUpdate(x, y, width, height, imageData, curColor, colorToReplace)
	{
		if (x < 0 || y < 0 || x >= width || y >= height)
			return false;

		let pixelColor = this.getPixelColor(x, y, imageData);
		if (this.areColorsSimilar(pixelColor, curColor) || !this.areColorsSimilar(pixelColor, colorToReplace))
			return false;

		return true;
	}

	static fillPixels(width, height, posX, posY, imageData, curColor, colorToReplace)
	{
		let pixels = new Uint32Array(width*height*8);
		pixels[0] = posX;
		pixels[1] = posY;
		let queueLength = 2;

		for (let i = 0; i < pixels.length - 1; i+=2)
		{
			if (i > queueLength)
				break;

			if (this.pixelNeedsUpdate(pixels[i], pixels[i+1], width, height, imageData, curColor, colorToReplace))
			{
				this.setPixelColor(pixels[i], pixels[i+1], imageData, curColor);

				pixels[queueLength] = pixels[i] - 1; // go left
				pixels[queueLength+1] = pixels[i+1];
				queueLength += 2;

				pixels[queueLength] = pixels[i];
				pixels[queueLength+1] = pixels[i+1] - 1; // go up
				queueLength += 2;

				pixels[queueLength] = pixels[i] + 1; // go right
				pixels[queueLength+1] = pixels[i+1];
				queueLength += 2;

				pixels[queueLength] = pixels[i];
				pixels[queueLength+1] = pixels[i+1] + 1; // go down
				queueLength += 2;
			}
		}
	}

	getFillData(posX, posY, canvasWidth, canvasHeight, imageData)
	{
		if (posX < 0 || posX > canvasWidth)
			return null;

		if (posY < 0 || posY > canvasHeight)
			return null;

		let curColor = _models_color__WEBPACK_IMPORTED_MODULE_1__["default"].fromHex(this.color).toArray();
		let colorToReplace = Fill.getPixelColor(posX, posY, imageData);

		if (Fill.areColorsEqual(curColor, colorToReplace))
			return null;

		return [
			curColor,
			colorToReplace
		];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Fill);

/***/ }),

/***/ "./public/js/tools/line.js":
/*!*********************************!*\
  !*** ./public/js/tools/line.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Line extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].LINE, "square", size, color, 0);
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		let startPosX = posX;
		let startPosY = posY;

		if (endPosX < posX)
			startPosX = endPosX;

		if (endPosY < posY)
			startPosY = endPosY;

		ctx.beginPath();
		ctx.moveTo(posX, posY);
		ctx.lineTo(endPosX, endPosY);
		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./public/js/tools/paint-roller.js":
/*!*****************************************!*\
  !*** ./public/js/tools/paint-roller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class PaintRoller extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].PAINT_ROLLER, "butt", size, color, 1);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (PaintRoller);

/***/ }),

/***/ "./public/js/tools/pencil.js":
/*!***********************************!*\
  !*** ./public/js/tools/pencil.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Pencil extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].PENCIL, "round", size, color, 0);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Pencil);

/***/ }),

/***/ "./public/js/tools/rect.js":
/*!*********************************!*\
  !*** ./public/js/tools/rect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Rect extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color, square=false)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].RECT, "butt", size, color, 0);
		this.square = square;
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		ctx.beginPath();

		if (this.square)
		{
			const size = Math.max(Math.abs(endPosX - posX), Math.abs(endPosY - posY));
			const offsetDirectionX = Math.sign(endPosX - posX);
			const offsetDirectionY = Math.sign(endPosY - posY);
			const width = size * offsetDirectionX;
			const height = size * offsetDirectionY;

			ctx.rect(posX, posY, width, height);

		} else
		{
			const startPosX = Math.min(posX, endPosX);
			const startPosY = Math.min(posY, endPosY);
			const width = Math.abs(endPosX - posX);
			const height = Math.abs(endPosY - posY);

			ctx.rect(startPosX, startPosY, width, height);
		}

		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Rect);

/***/ }),

/***/ "./public/js/tools/text.js":
/*!*********************************!*\
  !*** ./public/js/tools/text.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Text extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT, "round", size, color, 0);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./public/js/tools/tool-from-type.js":
/*!*******************************************!*\
  !*** ./public/js/tools/tool-from-type.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");
/* harmony import */ var _brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brush */ "./public/js/tools/brush.js");
/* harmony import */ var _paint_roller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paint-roller */ "./public/js/tools/paint-roller.js");
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pencil */ "./public/js/tools/pencil.js");
/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eraser */ "./public/js/tools/eraser.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./public/js/tools/text.js");
/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fill */ "./public/js/tools/fill.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-picker */ "./public/js/tools/color-picker.js");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rect */ "./public/js/tools/rect.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line */ "./public/js/tools/line.js");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ellipse */ "./public/js/tools/ellipse.js");












const toolFromType = (toolType, size, color) =>
{
	switch (toolType)
	{
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].BRUSH:
			return new _brush__WEBPACK_IMPORTED_MODULE_1__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].PAINT_ROLLER:
			return new _paint_roller__WEBPACK_IMPORTED_MODULE_2__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].PENCIL:
			return new _pencil__WEBPACK_IMPORTED_MODULE_3__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].ERASER:
			return new _eraser__WEBPACK_IMPORTED_MODULE_4__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].TEXT:
			return new _text__WEBPACK_IMPORTED_MODULE_5__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].FILL:
			return new _fill__WEBPACK_IMPORTED_MODULE_6__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].COLOR_PICKER:
			return new _color_picker__WEBPACK_IMPORTED_MODULE_7__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].RECT:
			return new _rect__WEBPACK_IMPORTED_MODULE_8__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].LINE:
			return new _line__WEBPACK_IMPORTED_MODULE_9__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].ELLIPSE:
			return new _ellipse__WEBPACK_IMPORTED_MODULE_10__["default"](size, color);
		default:
			console.error("wrong tool type:", toolType);
			return null;
	}
};

/* harmony default export */ __webpack_exports__["default"] = (toolFromType);

/***/ }),

/***/ "./public/js/tools/tool.js":
/*!*********************************!*\
  !*** ./public/js/tools/tool.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Tool
{
	constructor(type, style, size, color, blur=3, operation="source-over")
	{
		this.type = type;
		this.style = style;
		this.size = size;
		this.color = color;
		this.blur = blur;
		this.operation = operation;
	}

	getSize()
	{
		return this.size;
	}

	setSize(size)
	{
		this.size = size;
	}

	getColor()
	{
		return this.color;
	}

	setColor(color)
	{
		this.color = color;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Tool);

/***/ }),

/***/ "./public/scss/draw.scss":
/*!*******************************!*\
  !*** ./public/scss/draw.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/scss/main.scss":
/*!*******************************!*\
  !*** ./public/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLmVvdCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtcmVndWxhci00MDAuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuZW90Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAud29mZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXRvLWZvbnQvY3NzL2xhdG8tZm9udC5jc3M/NTZmZCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9iYWNrZ3JvdW5kLW1vZGFsL2JhY2tncm91bmQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvY29tcG9uZW50L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2ZpbGwud29ya2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tb2RlbHMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vZGVscy9kcmF3aW5nLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vZGVscy90b29sLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vZGVscy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tc3lzdGVtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9icnVzaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvY29sb3ItcGlja2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9lbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9lcmFzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL3BhaW50LXJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvcGVuY2lsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9yZWN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy90ZXh0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy90b29sLWZyb20tdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2Nzcy9kcmF3LnNjc3M/N2JjNCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2Nzcy9tYWluLnNjc3M/NjQ3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDdko5QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQ3JCeEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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OztBQUVlLDJFQUFZLEU7Ozs7Ozs7Ozs7OztBQzFDM0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7QUNqQ25CLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9qcy9tYWluLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvNzYzMDQ4M2RkNGIwYzQ4NjM5ZDJhYzU0YTg5NGI0NTAuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvMGJiNDI4NDU5YzhlY2ZhNjFiMjJhMDNkZWYxNzA2ZTYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvMWY3NzczOWNhOWZmMjE4OGI1MzljMzZmMzBmZmEyYmUudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvNzEyNGViNTBmYzgyMjdjNzgyNjlmMmQ5OTU2MzdmZjUud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzL2YwZjgyMzAxMTY5OTJlNTIxNTI2MDk3YTI4ZjU0MDY2LndvZmYyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvMTA0MmU4Y2ExY2U4MjE1MThhMmQzZTcwNTU0MTA4MzkuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvMzc2YzFmOTdmNjU1M2RlYTFjYTliM2Y5MDgxODg5YmQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvNjA1ZWQ3OTI2Y2YzOWEyYWQ1ZWMyZDFmOWQzOTFkM2QudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2ViZm9udHMvOWZlNWExN2M4YWIwMzZkMjBlNmM1YmEzZmQyYWM1MTEud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzL2U4YTQyN2UxNWNjNTAyYmVmOTljZmQ3MjJiMzdlYTk4LndvZmYyXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlclxcXCIgb25jb250ZXh0bWVudT1cXFwicmV0dXJuIGZhbHNlO1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwic2xpZGVyLWZnXFxcIj5cXG5cXHRcXHQ8c3BhbiBjbGFzcz1cXFwidGV4dFxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ2YWx1ZS10ZXh0XFxcIj48L3NwYW4+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwic2xpZGVyLWJnXFxcIj48L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8YXNpZGUgY2xhc3M9XFxcInRvb2xiYXJcXFwiPlxcblxcdDx1bD5cXG5cXHRcXHQ8bGk+PGEgY2xhc3M9XFxcImxvZ28gdG9vbGJhci1sb2dvXFxcIiBocmVmPVxcXCJpbmRleC5odG1sXFxcIj48L2E+PC9saT5cXG5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIlRvb2xzXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXRvb2xib3ggc2VwYXJhdG9yXFxcIj48L2k+PC9saT5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkJydXNoXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJCUlVTSFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1icnVzaCBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJQYWludCBSb2xsZXJcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIlBBSU5UX1JPTExFUlxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wYWludC1yb2xsZXIgYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcblxcdFxcdDxsaSB0aXRsZT1cXFwiUGVuY2lsXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJQRU5DSUxcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGVuY2lsLWFsdCBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJFcmFzZXJcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkVSQVNFUlxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1lcmFzZXIgYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcblxcdFxcdDxsaSB0aXRsZT1cXFwiVGV4dFxcXCIgZGF0YS10b29sbmFtZT1cXFwiVEVYVFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1mb250IGJ0bi10b29sXFxcIj48L2k+PC9saT5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkxpbmVcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkxJTkVcXFwiPjxzcGFuIGNsYXNzPVxcXCJidG4tdG9vbCBsaW5lLWljb25cXFwiPi88L3NwYW4+PC9saT5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIlJlY3RhbmdsZVxcXCIgZGF0YS10b29sbmFtZT1cXFwiUkVDVFxcXCI+PGkgY2xhc3M9XFxcImZhciBmYS1zcXVhcmUgYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcblxcdFxcdDxsaSB0aXRsZT1cXFwiRWxsaXBzZVxcXCIgZGF0YS10b29sbmFtZT1cXFwiRUxMSVBTRVxcXCI+PGkgY2xhc3M9XFxcImZhciBmYS1jaXJjbGUgYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcblxcdFxcdDxsaSB0aXRsZT1cXFwiRmlsbFxcXCIgZGF0YS10b29sbmFtZT1cXFwiRklMTFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1maWxsIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkNvbG9yIFBpY2tlclxcXCIgZGF0YS10b29sbmFtZT1cXFwiQ09MT1JfUElDS0VSXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWV5ZS1kcm9wcGVyIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkNoYW5nZSBCYWNrZ3JvdW5kXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJCQUNLR1JPVU5EX0lNQUdFXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWltYWdlIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXG5cXG5cXHRcXHQ8bGkgY2xhc3M9XFxcImNvbG9yLXNlcGFyYXRvclxcXCIgdGl0bGU9XFxcIkNvbG9yc1xcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wYWxldHRlIHNlcGFyYXRvclxcXCI+PC9pPjwvbGk+XFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJidG4tY29sb3JcXFwiIHRpdGxlPVxcXCJCbGFja1xcXCIgZGF0YS1jb2xvcj1cXFwiIzAwMDAwMFxcXCI+PC9saT5cXG5cXHRcXHQ8bGkgY2xhc3M9XFxcImJ0bi1jb2xvclxcXCIgdGl0bGU9XFxcIlJlZFxcXCIgZGF0YS1jb2xvcj1cXFwiI2RmMzkzOVxcXCI+PC9saT5cXG5cXHRcXHQ8bGkgY2xhc3M9XFxcImJ0bi1jb2xvclxcXCIgdGl0bGU9XFxcIkdyZWVuXFxcIiBkYXRhLWNvbG9yPVxcXCIjM2ZlMjNmXFxcIj48L2xpPlxcblxcdFxcdDxsaSBjbGFzcz1cXFwiYnRuLWNvbG9yXFxcIiB0aXRsZT1cXFwiQmx1ZVxcXCIgZGF0YS1jb2xvcj1cXFwiIzFiODZlYlxcXCI+PC9saT5cXG5cXHRcXHQ8bGkgY2xhc3M9XFxcImJ0bi1jb2xvclxcXCIgdGl0bGU9XFxcIldoaXRlXFxcIiBkYXRhLWNvbG9yPVxcXCIjZmZmZmZmXFxcIj48L2xpPlxcblxcdDwvdWw+XFxuPC9hc2lkZT5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29uLmljb1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy84OThmNjI5MWQ3YTgxMTYzZGIwYmIyYmI2Y2Q0YjgwNi5wbmdcIjsiLCJpbXBvcnQgU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXJcIjtcblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0e3NlbGVjdG9yOiBcInVpLXNsaWRlclwiLCBjb21wb25lbnQ6IFNsaWRlcn0sXG5cdHtzZWxlY3RvcjogXCJ1aS10b29sYmFyXCIsIGNvbXBvbmVudDogVG9vbGJhcn1cbl07XG5cbi8vIGNyZWF0ZSBjdXN0b20gY29tcG9uZW50c1xuY29uc3QgaW5pdENvbXBvbmVudHMgPSAoKSA9Plxue1xuXHRjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+XG5cdHtcblx0XHRjdXN0b21FbGVtZW50cy5kZWZpbmUoY29tcG9uZW50LnNlbGVjdG9yLCBjb21wb25lbnQuY29tcG9uZW50KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRDb21wb25lbnRzOyIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcblxuY2xhc3MgQmFja2dyb3VuZE1vZGFsIGV4dGVuZHMgTW9kYWxcbntcblx0Y29uc3RydWN0b3IoaWQpXG5cdHtcblx0XHRzdXBlcihpZCk7XG5cblx0XHR0aGlzLmJnQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuXHRcdHRoaXMuZHJvcEFyZWEgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLWFyZWFcIik7XG5cdFx0dGhpcy5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHRoaXMuaW1hZ2VEcmFnZ2VkT3ZlcihlKSk7XG5cdFx0dGhpcy5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4gdGhpcy5pbWFnZURyb3BwZWQoZSkpO1xuXG5cdFx0dGhpcy5pbWFnZVByZXZpZXcgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbWFnZS1wcmV2aWV3XCIpO1xuXG5cdFx0Y29uc3QgaW1hZ2VGaWxlSW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1maWxlLWlucHV0XCIpO1xuXHRcdGltYWdlRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHRoaXMuaW1hZ2VGaWxlSW5wdXRDaGFuZ2VkKGUpKTtcblxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMudGFiQ2xpY2tlZChlKSk7XG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWNvbG9yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy50YWJDbGlja2VkKGUpKTtcblxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWNvbG9yXCIpLnZhbHVlID0gdGhpcy5iZ0NvbG9yO1xuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWNvbG9yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHRoaXMuYmdDb2xvckNoYW5nZWQoZSkpO1xuXHR9XG5cblx0c2hvdygpXG5cdHtcblx0XHRzdXBlci5zaG93KCk7XG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZS1vbi1kcm9wXCIpLmZvckVhY2goaXRlbSA9PlxuXHRcdHtcblx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kcm9wQXJlYS5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1hcmVhIHBcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdHRoaXMuaW1hZ2VQcmV2aWV3LnNyYyA9IFwiXCI7XG5cdFx0aWYgKCF0aGlzLmltYWdlUHJldmlldy5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG5cdFx0XHR0aGlzLmltYWdlUHJldmlldy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWltYWdlXCIpLmRpc2FibGVkID0gdHJ1ZTtcblx0fVxuXG5cdGhpZGUoKVxuXHR7XG5cdFx0c3VwZXIuaGlkZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWZpbGUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuXHR9XG5cblx0aW1hZ2VEcmFnZ2VkT3ZlcihlKVxuXHR7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG5cdH1cblxuXHRpbWFnZURyb3BwZWQoZSlcblx0e1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZS1vbi1kcm9wXCIpLmZvckVhY2goaXRlbSA9PlxuXHRcdHtcblx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWltYWdlXCIpLmRpc2FibGVkID0gZmFsc2U7XG5cdH1cblxuXHRpbWFnZUZpbGVJbnB1dENoYW5nZWQoZSlcblx0e1xuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGUtb24taW1hZ2UtaW5wdXRcIikuZm9yRWFjaChpdGVtID0+XG5cdFx0e1xuXHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoZS5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdKTtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaW1hZ2VcIikuZGlzYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UgZnJvbSBwcm92aWRlZCBmaWxlIGFuZCBkaXNwbGF5IGluIHByZXZpZXcgYXJlYVxuXHRsb2FkQmFja2dyb3VuZEltYWdlKGZpbGUpXG5cdHtcblx0XHRpZiAoZmlsZSAhPSBudWxsICYmIGZpbGUudHlwZS5tYXRjaCgvaW1hZ2UqLykpXG5cdFx0e1xuXHRcdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRyZWFkZXIub25sb2FkID0gKHJlYWRlckV2KSA9PlxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmltYWdlUHJldmlldy5zcmMgPSByZWFkZXJFdi50YXJnZXQucmVzdWx0O1xuXHRcdFx0XHRpZiAodGhpcy5pbWFnZVByZXZpZXcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VQcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblx0XHRcdFx0dGhpcy5kcm9wQXJlYS5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMHB4XCI7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0XHR9XG5cdH1cblxuXHR0YWJDbGlja2VkKGUpXG5cdHtcblx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y29uc3QgY29sb3JUYWJDb250ZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWNvbnRlbnQtY29sb3JcIik7XG5cblx0XHRpZiAoZS50YXJnZXQuaWQgPT0gXCJ0YWItaW1hZ2VcIilcblx0XHR7XG5cdFx0XHR0aGlzLmRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdFx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtaW1hZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWZpbGUtaW5wdXRcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXHRcdFx0Y29sb3JUYWJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1pbWFnZVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWNvbG9yXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09IFwidGFiLWNvbG9yXCIpXG5cdFx0e1xuXHRcdFx0Y29sb3JUYWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblx0XHRcdHRoaXMuZHJvcEFyZWEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0XHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pbWFnZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRcdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtZmlsZS1pbnB1dFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItaW1hZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1jb2xvclwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGJnQ29sb3JDaGFuZ2VkKGUpXG5cdHtcblx0XHR0aGlzLmJnQ29sb3IgPSBlLnRhcmdldC52YWx1ZTtcblx0fVxuXG5cdG9uQWRkSW1hZ2VCdG5DbGljayhjYWxsYmFjaylcblx0e1xuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuXHR9XG5cblx0b25GaWxsQnRuQ2xpY2soY2FsbGJhY2spXG5cdHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1maWxsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjayk7XG5cdH1cblxuXHRvbkNsZWFyQnRuQ2xpY2soY2FsbGJhY2spXG5cdHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1jbGVhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRNb2RhbDsiLCJjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudFxue1xuXHRjb25zdHJ1Y3RvcihodG1sLCBzdHlsZXNoZWV0PVwiXCIpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBcIm9wZW5cIn0pO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0XHRlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG5cblx0XHRpZiAoc3R5bGVzaGVldCAhPSBcIlwiICYmIHN0eWxlc2hlZXQgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVzaGVldC50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyIsImNsYXNzIE1vZGFsXG57XG5cdGNvbnN0cnVjdG9yKGlkKVxuXHR7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHR0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuaGlkZSgpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+XG5cdFx0e1xuXHRcdFx0aWYgKGUua2V5ID09IFwiRXNjYXBlXCIgJiYgdGhpcy5pc1Zpc2libGUpXG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cblx0XHR7XG5cdFx0XHQvLyBjbG9zZSBtb2RhbCB3aGVuIHVzZXIgY2xpY2tzIG91dHNpZGUgbW9kYWwgYXJlYVxuXHRcdFx0aWYgKGUudGFyZ2V0ID09IHRoaXMuZWxlbWVudCAmJiB0aGlzLmlzVmlzaWJsZSlcblx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93KClcblx0e1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblx0XHR0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG5cdH1cblxuXHRoaWRlKClcblx0e1xuXHRcdGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG5cdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdHRvZ2dsZSgpXG5cdHtcblx0XHRpZiAodGhpcy5pc1Zpc2libGUpXG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnNob3coKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50XCI7XG5pbXBvcnQgaHRtbFRlbXBsYXRlIGZyb20gXCJodG1sLWxvYWRlciEuL3NsaWRlci5odG1sXCI7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tIFwiLi9zbGlkZXIuc2Nzc1wiO1xuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0c3VwZXIoaHRtbFRlbXBsYXRlLCBzdHlsZXNoZWV0KTtcblxuXHRcdC8vIGRlZmF1bHQgdmFsdWVzIGZvciBzbGlkZXIgcHJvcGVydGllc1xuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IDA7XG5cdFx0Y29uc3QgZGVmYXVsdE1pblZhbHVlID0gMDtcblx0XHRjb25zdCBkZWZhdWx0TWF4VmFsdWUgPSAxMDtcblx0XHRjb25zdCBkZWZhdWx0VGV4dCA9IFwiXCI7XG5cdFx0Y29uc3QgZGVmYXVsdFVuaXQgPSBcIlwiO1xuXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpXG5cdFx0XHR0aGlzLnNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XG5cblx0XHRpZiAoIXRoaXMuaGFzQXR0cmlidXRlKFwiZGF0YS1taW4tdmFsdWVcIikpXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbWluLXZhbHVlXCIsIGRlZmF1bHRNaW5WYWx1ZSk7XG5cblx0XHRpZiAoIXRoaXMuaGFzQXR0cmlidXRlKFwiZGF0YS1tYXgtdmFsdWVcIikpXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbWF4LXZhbHVlXCIsIGRlZmF1bHRNYXhWYWx1ZSk7XG5cblx0XHRpZiAoIXRoaXMuaGFzQXR0cmlidXRlKFwiZGF0YS10ZXh0XCIpKVxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIiwgZGVmYXVsdFRleHQpO1xuXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcImRhdGEtdW5pdFwiKSlcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS11bml0XCIsIGRlZmF1bHRVbml0KTtcblxuXHRcdGNvbnN0IHNsaWRlckZnID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWZnXCIpO1xuXHRcdHNsaWRlckZnLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRleHRcIikuaW5uZXJIVE1MID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIik7XG5cblx0XHR0aGlzLnVwZGF0ZSgpOyAvLyBkcmF3IHNsaWRlciBiYXNlZCBvbiBpbml0aWFsIHZhbHVlc1xuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51cGRhdGUpO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLnVwZGF0ZSk7XG5cdH1cblxuXHRzbGlkZXJQb3NGcm9tVmFsdWUodmFsdWUpXG5cdHtcblx0XHRjb25zdCBtYXhWYWx1ZSA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbWF4XCIpKTtcblx0XHRpZiAodmFsdWUgPiAwKVxuXHRcdFx0cmV0dXJuIHZhbHVlIC8gbWF4VmFsdWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cblxuXHQvLyBjYWxjdWxhdGVzIGFuZCB1cGRhdGVzIHNsaWRlcidzIHZhbHVlIGFuZCBwb3NpdGlvblxuXHR1cGRhdGUoZT1udWxsLCB2YWx1ZT1udWxsKVxuXHR7XG5cdFx0Y29uc3QgbWluVmFsdWUgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1pblwiKSk7XG5cdFx0Y29uc3QgbWF4VmFsdWUgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1heFwiKSk7XG5cdFx0Y29uc3QgdW5pdCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS11bml0XCIpO1xuXHRcdGNvbnN0IHNsaWRlckZnID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWZnXCIpO1xuXHRcdGNvbnN0IHJlY3QgPSBzbGlkZXJGZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgbmV3U2xpZGVyUG9zO1xuXG5cdFx0aWYgKHJlY3Qud2lkdGggPT0gMCkgLy8gdGhpcyBjYW4gaGFwcGVuIHdoZW4gZWxlbWVudCBpcyBpbnZpc2libGVcblx0XHRcdHJldHVybjtcblxuXHRcdGlmIChlICE9IG51bGwpIC8vIHVwZGF0ZSBzbGlkZXIgYmFzZWQgb24gdXNlciBpbnB1dFxuXHRcdHtcblx0XHRcdGxldCBtb3VzZVBvc1g7XG5cblx0XHRcdGlmIChlLnR5cGUgPT0gXCJ0b3VjaG1vdmVcIilcblx0XHRcdFx0bW91c2VQb3NYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG1vdXNlUG9zWCA9IGUuY2xpZW50WDtcblxuXHRcdFx0Y29uc3QgcmVsYXRpdmVNb3VzZVBvcyA9IG1vdXNlUG9zWCAtIHJlY3QubGVmdDtcblx0XHRcdG5ld1NsaWRlclBvcyA9IHJlbGF0aXZlTW91c2VQb3MgLyByZWN0LndpZHRoO1xuXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSAvLyB1cGRhdGUgd2l0aCBzcGVjaWZpZWQgdmFsdWVcblx0XHR7XG5cdFx0XHRuZXdTbGlkZXJQb3MgPSB0aGlzLnNsaWRlclBvc0Zyb21WYWx1ZSh2YWx1ZSk7XG5cblx0XHR9IGVsc2UgLy8gdXBkYXRlIHNsaWRlciB1c2luZyBjdXJyZW50IHZhbHVlIGZyb20gZGF0YS12YWx1ZSBhdHRyaWJ1dGVcblx0XHR7XG5cdFx0XHRsZXQgdmFsID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSk7XG5cdFx0XHRuZXdTbGlkZXJQb3MgPSB0aGlzLnNsaWRlclBvc0Zyb21WYWx1ZSh2YWwpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld1ZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgobWluVmFsdWUsIE1hdGgucm91bmQobmV3U2xpZGVyUG9zICogbWF4VmFsdWUgLyByZWN0LndpZHRoICogcmVjdC53aWR0aCkpLCBtYXhWYWx1ZSk7XG5cdFx0dGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG5cblx0XHRjb25zdCBuZXdCZ1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobWluVmFsdWUsIE1hdGgucm91bmQobmV3U2xpZGVyUG9zICogcmVjdC53aWR0aCkpLCByZWN0LndpZHRoKTtcblx0XHRzbGlkZXJGZy5xdWVyeVNlbGVjdG9yKFwic3Bhbi52YWx1ZS10ZXh0XCIpLmlubmVySFRNTCA9IG5ld1ZhbHVlICsgdW5pdDtcblx0XHRzbGlkZXJGZy5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1iZ1wiKS5zdHlsZS53aWR0aCA9IG5ld0JnV2lkdGggKyBcInB4XCI7XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcblx0fVxuXG5cdGdldFZhbHVlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG5cdH1cblxuXHRzZXRWYWx1ZSh2YWx1ZSlcblx0e1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCB2YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWRlciB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogIzI2MjYyNjsgfVxcbiAgLnNsaWRlciAuc2xpZGVyLWZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnNsaWRlciBzcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgfVxcbiAgLnNsaWRlciAuc2xpZGVyLWJnIHtcXG4gICAgYmFja2dyb3VuZDogIzEwNmVhYztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLmJydXNoLXNpemUtbWVudSAuc2xpZGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudFwiO1xuaW1wb3J0IGh0bWxUZW1wbGF0ZSBmcm9tIFwiaHRtbC1sb2FkZXIhLi90b29sYmFyLmh0bWxcIjtcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gXCIuL3Rvb2xiYXIuc2Nzc1wiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi8uLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0c3VwZXIoaHRtbFRlbXBsYXRlLCBzdHlsZXNoZWV0KTtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b29sYmFyXCIpO1xuXG5cdFx0Ly8gd29ya2Fyb3VuZCBmb3IgcGFzdGUgYmVpbmcgYnJva2VuIGFmdGVyIGNsaWNraW5nIG9uIHRvb2xiYXJcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIChlKSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IGZvcm1hdCA9IFwiVGV4dFwiO1xuXHRcdFx0bGV0IG5ld0NsaXBib2FyZERhdGEgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cdFx0XHRuZXdDbGlwYm9hcmREYXRhLnNldERhdGEoZm9ybWF0LCBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShmb3JtYXQpKTtcblx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudChcInBhc3RlXCIpO1xuXHRcdFx0ZXZlbnQuY2xpcGJvYXJkRGF0YSA9IG5ld0NsaXBib2FyZERhdGE7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gbWFrZSBpY29ucyBjbGlja2FibGVcblx0aW5pdEJ1dHRvbnMoZGVmYXVsdFRvb2wsIGRlZmF1bHRDb2xvcilcblx0e1xuXHRcdGxldCBpc0RlZmF1bHRUb29sRm91bmQgPSBmYWxzZTtcblx0XHRjb25zdCB0b29sSWNvbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsID4gbGkgLmJ0bi10b29sXCIpO1xuXHRcdHRvb2xJY29ucy5mb3JFYWNoKGljb24gPT5cblx0XHR7XG5cdFx0XHRjb25zdCBsaXN0SXRlbSA9IGljb24ucGFyZW50RWxlbWVudDtcblx0XHRcdGNvbnN0IHRvb2xUeXBlID0gVG9vbFR5cGVbbGlzdEl0ZW0uZGF0YXNldC50b29sbmFtZV07XG5cdFx0XHRpZiAoIWlzRGVmYXVsdFRvb2xGb3VuZCAmJiB0b29sVHlwZSA9PSBkZWZhdWx0VG9vbClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZFRvb2woaWNvbik7XG5cdFx0XHRcdGlzRGVmYXVsdFRvb2xGb3VuZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsaXN0SXRlbS5kYXRhc2V0LnRvb2xuYW1lID09IFwiQkFDS0dST1VORF9JTUFHRVwiKVxuXHRcdFx0XHRsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuYmdTZWxlY3Rpb25DbGlja2VkKGUpKTtcblx0XHRcdGVsc2UgaWYgKCFpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKVxuXHRcdFx0XHRsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMudG9vbFN3aXRjaGVkKGUpKTtcblx0XHR9KTtcblxuXHRcdGxldCBpc0RlZmF1bHRDb2xvckZvdW5kID0gZmFsc2U7XG5cdFx0Y29uc3QgdG9vbGJhckNvbG9ycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1jb2xvclwiKTtcblx0XHR0b29sYmFyQ29sb3JzLmZvckVhY2goaXRlbSA9PlxuXHRcdHtcblx0XHRcdGlmICghaXNEZWZhdWx0Q29sb3JGb3VuZCAmJiBpdGVtLmRhdGFzZXQuY29sb3IgPT0gZGVmYXVsdENvbG9yKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnNldFNlbGVjdGVkQ29sb3IoaXRlbSk7XG5cdFx0XHRcdGlzRGVmYXVsdENvbG9yRm91bmQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW0uZGF0YXNldC5jb2xvcjtcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNvbG9yU3dpdGNoZWQoZSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0U2VsZWN0ZWRUb29sKGVsZW1lbnQpXG5cdHtcblx0XHRjb25zdCBzZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZFwiO1xuXHRcdGxldCBwcmV2U2VsZWN0ZWQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0ZWRDbGFzc31gKTtcblxuXHRcdGlmIChwcmV2U2VsZWN0ZWQpXG5cdFx0XHRwcmV2U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RlZENsYXNzKTtcblxuXHRcdGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0ZWRDbGFzcykpXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoc2VsZWN0ZWRDbGFzcyk7XG5cdH1cblxuXHRzZXRTZWxlY3RlZENvbG9yKGVsZW1lbnQpXG5cdHtcblx0XHRjb25zdCBzZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZC1jb2xvclwiO1xuXG5cdFx0dGhpcy5jbGVhclNlbGVjdGVkQ29sb3IoKTtcblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdGVkQ2xhc3MpKVxuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkQ2xhc3MpO1xuXHR9XG5cblx0Y2xlYXJTZWxlY3RlZENvbG9yKClcblx0e1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkLWNvbG9yXCI7XG5cdFx0bGV0IHByZXZTZWxlY3RlZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RlZENsYXNzfWApO1xuXG5cdFx0aWYgKHByZXZTZWxlY3RlZClcblx0XHRcdHByZXZTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGVkQ2xhc3MpO1xuXHR9XG5cblx0Ly8gdG9vbCBpY29uIGNsaWNrZWRcblx0dG9vbFN3aXRjaGVkKGUpXG5cdHtcblx0XHRjb25zdCB0b29sTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvb2xuYW1lO1xuXHRcdGNvbnN0IHRvb2xUeXBlID0gVG9vbFR5cGVbdG9vbE5hbWVdO1xuXHRcdHRoaXMuc2V0U2VsZWN0ZWRUb29sKGUudGFyZ2V0KTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidG9vbFN3aXRjaFwiLCB7ZGV0YWlsOiB0b29sVHlwZX0pKTtcblx0fVxuXG5cdC8vIGNvbG9yIGJ1dHRvbiBjbGlja2VkXG5cdGNvbG9yU3dpdGNoZWQoZSlcblx0e1xuXHRcdGNvbnN0IGNvbG9yID0gZS50YXJnZXQuZGF0YXNldC5jb2xvcjtcblx0XHR0aGlzLnNldFNlbGVjdGVkQ29sb3IoZS50YXJnZXQpO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjb2xvclN3aXRjaFwiLCB7ZGV0YWlsOiBjb2xvcn0pKTtcblx0fVxuXG5cdGJnU2VsZWN0aW9uQ2xpY2tlZChlKVxuXHR7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJnU2V0dGluZ3NPcGVuXCIpKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLmVvdFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLmVvdFwiKSArIFwiPyNpZWZpeFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuc3ZnXCIpICsgXCIjZm9udGF3ZXNvbWVcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtcmVndWxhci00MDAuZW90XCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC5lb3RcIikgKyBcIj8jaWVmaXhcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX184X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtcmVndWxhci00MDAud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC50dGZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC5zdmdcIikgKyBcIiNmb250YXdlc29tZVwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvbG9nby5wbmdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMyBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbVxcbiAqIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgKEljb25zOiBDQyBCWSA0LjAsIEZvbnRzOiBTSUwgT0ZMIDEuMSwgQ29kZTogTUlUIExpY2Vuc2UpXFxuICovXFxuLmZhLFxcbi5mYXMsXFxuLmZhcixcXG4uZmFsLFxcbi5mYWQsXFxuLmZhYiB7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzZW07XFxuICBsaW5lLWhlaWdodDogMC43NWVtO1xcbiAgdmVydGljYWwtYWxpZ246IC0uMDY2N2VtOyB9XFxuXFxuLmZhLXhzIHtcXG4gIGZvbnQtc2l6ZTogLjc1ZW07IH1cXG5cXG4uZmEtc20ge1xcbiAgZm9udC1zaXplOiAuODc1ZW07IH1cXG5cXG4uZmEtMXgge1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07IH1cXG5cXG4uZmEtNHgge1xcbiAgZm9udC1zaXplOiA0ZW07IH1cXG5cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07IH1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07IH1cXG5cXG4uZmEtN3gge1xcbiAgZm9udC1zaXplOiA3ZW07IH1cXG5cXG4uZmEtOHgge1xcbiAgZm9udC1zaXplOiA4ZW07IH1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07IH1cXG5cXG4uZmEtMTB4IHtcXG4gIGZvbnQtc2l6ZTogMTBlbTsgfVxcblxcbi5mYS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS4yNWVtOyB9XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbiAgLmZhLXVsID4gbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZmEtbGkge1xcbiAgbGVmdDogLTJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5mYS1ib3JkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IC4xZW07XFxuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtOyB9XFxuXFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5mYS5mYS1wdWxsLWxlZnQsXFxuLmZhcy5mYS1wdWxsLWxlZnQsXFxuLmZhci5mYS1wdWxsLWxlZnQsXFxuLmZhbC5mYS1wdWxsLWxlZnQsXFxuLmZhYi5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XFxuXFxuLmZhLmZhLXB1bGwtcmlnaHQsXFxuLmZhcy5mYS1wdWxsLXJpZ2h0LFxcbi5mYXIuZmEtcHVsbC1yaWdodCxcXG4uZmFsLmZhLXB1bGwtcmlnaHQsXFxuLmZhYi5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtOyB9XFxuXFxuLmZhLXNwaW4ge1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjsgfVxcblxcbi5mYS1wdWxzZSB7XFxuICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7IH1cXG5cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpOyB9XFxuXFxuLmZhLWZsaXAtYm90aCwgLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpOyB9XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsLFxcbjpyb290IC5mYS1mbGlwLWJvdGgge1xcbiAgZmlsdGVyOiBub25lOyB9XFxuXFxuLmZhLXN0YWNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMi41ZW07IH1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5mYS1zdGFjay0xeCB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5mYS1zdGFjay0yeCB7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXFxucmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cXG4uZmEtNTAwcHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2ZVxcXCI7IH1cXG5cXG4uZmEtYWNjZXNzaWJsZS1pY29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNjhcXFwiOyB9XFxuXFxuLmZhLWFjY3Vzb2Z0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNjlcXFwiOyB9XFxuXFxuLmZhLWFjcXVpc2l0aW9ucy1pbmNvcnBvcmF0ZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhZlxcXCI7IH1cXG5cXG4uZmEtYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY0MVxcXCI7IH1cXG5cXG4uZmEtYWRkcmVzcy1ib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjlcXFwiOyB9XFxuXFxuLmZhLWFkZHJlc3MtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmJiXFxcIjsgfVxcblxcbi5mYS1hZGp1c3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MlxcXCI7IH1cXG5cXG4uZmEtYWRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzBcXFwiOyB9XFxuXFxuLmZhLWFkdmVyc2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNmFcXFwiOyB9XFxuXFxuLmZhLWFmZmlsaWF0ZXRoZW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNmJcXFwiOyB9XFxuXFxuLmZhLWFpci1mcmVzaGVuZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkMFxcXCI7IH1cXG5cXG4uZmEtYWlyYm5iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MzRcXFwiOyB9XFxuXFxuLmZhLWFsZ29saWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2Y1xcXCI7IH1cXG5cXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzdcXFwiOyB9XFxuXFxuLmZhLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzOVxcXCI7IH1cXG5cXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM2XFxcIjsgfVxcblxcbi5mYS1hbGlnbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM4XFxcIjsgfVxcblxcbi5mYS1hbGlwYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY0MlxcXCI7IH1cXG5cXG4uZmEtYWxsZXJnaWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NjFcXFwiOyB9XFxuXFxuLmZhLWFtYXpvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjcwXFxcIjsgfVxcblxcbi5mYS1hbWF6b24tcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MmNcXFwiOyB9XFxuXFxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGY5XFxcIjsgfVxcblxcbi5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmEzXFxcIjsgfVxcblxcbi5mYS1hbWlsaWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2ZFxcXCI7IH1cXG5cXG4uZmEtYW5jaG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxM2RcXFwiOyB9XFxuXFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3YlxcXCI7IH1cXG5cXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDlcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDNcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDBcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTAxXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwMlxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTA3XFxcIjsgfVxcblxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDRcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDVcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDZcXFwiOyB9XFxuXFxuLmZhLWFuZ3J5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTZcXFwiOyB9XFxuXFxuLmZhLWFuZ3J5Y3JlYXRpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2ZVxcXCI7IH1cXG5cXG4uZmEtYW5ndWxhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDIwXFxcIjsgfVxcblxcbi5mYS1hbmtoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NDRcXFwiOyB9XFxuXFxuLmZhLWFwcC1zdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzZmXFxcIjsgfVxcblxcbi5mYS1hcHAtc3RvcmUtaW9zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNzBcXFwiOyB9XFxuXFxuLmZhLWFwcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNzFcXFwiOyB9XFxuXFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzlcXFwiOyB9XFxuXFxuLmZhLWFwcGxlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWQxXFxcIjsgfVxcblxcbi5mYS1hcHBsZS1wYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxNVxcXCI7IH1cXG5cXG4uZmEtYXJjaGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg3XFxcIjsgfVxcblxcbi5mYS1hcmNod2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTdcXFwiOyB9XFxuXFxuLmZhLWFycm93LWFsdC1jaXJjbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzU4XFxcIjsgfVxcblxcbi5mYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM1OVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzVhXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1hbHQtY2lyY2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNWJcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWJcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYThcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE5XFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjBcXFwiOyB9XFxuXFxuLmZhLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjFcXFwiOyB9XFxuXFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiOyB9XFxuXFxuLmZhLWFycm93cy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMlxcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLWFsdC1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMzdcXFwiOyB9XFxuXFxuLmZhLWFycm93cy1hbHQtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzM4XFxcIjsgfVxcblxcbi5mYS1hcnRzdGF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3N2FcXFwiOyB9XFxuXFxuLmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmEyXFxcIjsgfVxcblxcbi5mYS1hc3RlcmlzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY5XFxcIjsgfVxcblxcbi5mYS1hc3ltbWV0cmlrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNzJcXFwiOyB9XFxuXFxuLmZhLWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmFcXFwiOyB9XFxuXFxuLmZhLWF0bGFzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NThcXFwiOyB9XFxuXFxuLmZhLWF0bGFzc2lhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzdiXFxcIjsgfVxcblxcbi5mYS1hdG9tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZDJcXFwiOyB9XFxuXFxuLmZhLWF1ZGlibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3M1xcXCI7IH1cXG5cXG4uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5ZVxcXCI7IH1cXG5cXG4uZmEtYXV0b3ByZWZpeGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MWNcXFwiOyB9XFxuXFxuLmZhLWF2aWFuZXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3NFxcXCI7IH1cXG5cXG4uZmEtYXZpYXRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MjFcXFwiOyB9XFxuXFxuLmZhLWF3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTlcXFwiOyB9XFxuXFxuLmZhLWF3czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzc1XFxcIjsgfVxcblxcbi5mYS1iYWJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3N2NcXFwiOyB9XFxuXFxuLmZhLWJhYnktY2FycmlhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc3ZFxcXCI7IH1cXG5cXG4uZmEtYmFja3NwYWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NWFcXFwiOyB9XFxuXFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGFcXFwiOyB9XFxuXFxuLmZhLWJhY29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZTVcXFwiOyB9XFxuXFxuLmZhLWJhY3RlcmlhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNTlcXFwiOyB9XFxuXFxuLmZhLWJhY3Rlcml1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDVhXFxcIjsgfVxcblxcbi5mYS1iYWhhaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjY2XFxcIjsgfVxcblxcbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNGVcXFwiOyB9XFxuXFxuLmZhLWJhbGFuY2Utc2NhbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTE1XFxcIjsgfVxcblxcbi5mYS1iYWxhbmNlLXNjYWxlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTZcXFwiOyB9XFxuXFxuLmZhLWJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDVlXFxcIjsgfVxcblxcbi5mYS1iYW5kLWFpZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDYyXFxcIjsgfVxcblxcbi5mYS1iYW5kY2FtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ1XFxcIjsgfVxcblxcbi5mYS1iYXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiOyB9XFxuXFxuLmZhLWJhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7IH1cXG5cXG4uZmEtYmFzZWJhbGwtYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDMzXFxcIjsgfVxcblxcbi5mYS1iYXNrZXRiYWxsLWJhbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzNFxcXCI7IH1cXG5cXG4uZmEtYmF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNkXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDRcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQwXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0MlxcXCI7IH1cXG5cXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDNcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0MVxcXCI7IH1cXG5cXG4uZmEtYmF0dGxlLW5ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODM1XFxcIjsgfVxcblxcbi5mYS1iZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzNlxcXCI7IH1cXG5cXG4uZmEtYmVlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZjXFxcIjsgfVxcblxcbi5mYS1iZWhhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjRcXFwiOyB9XFxuXFxuLmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjVcXFwiOyB9XFxuXFxuLmZhLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmM1xcXCI7IH1cXG5cXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWY2XFxcIjsgfVxcblxcbi5mYS1iZXppZXItY3VydmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1YlxcXCI7IH1cXG5cXG4uZmEtYmlibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY0N1xcXCI7IH1cXG5cXG4uZmEtYmljeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjA2XFxcIjsgfVxcblxcbi5mYS1iaWtpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg0YVxcXCI7IH1cXG5cXG4uZmEtYmltb2JqZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNzhcXFwiOyB9XFxuXFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlNVxcXCI7IH1cXG5cXG4uZmEtYmlvaGF6YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODBcXFwiOyB9XFxuXFxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmZFxcXCI7IH1cXG5cXG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzFcXFwiOyB9XFxuXFxuLmZhLWJpdGNvaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3OVxcXCI7IH1cXG5cXG4uZmEtYml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzdhXFxcIjsgfVxcblxcbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3ZVxcXCI7IH1cXG5cXG4uZmEtYmxhY2tiZXJyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzdiXFxcIjsgfVxcblxcbi5mYS1ibGVuZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTdcXFwiOyB9XFxuXFxuLmZhLWJsZW5kZXItcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZiNlxcXCI7IH1cXG5cXG4uZmEtYmxpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5ZFxcXCI7IH1cXG5cXG4uZmEtYmxvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzgxXFxcIjsgfVxcblxcbi5mYS1ibG9nZ2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzN2NcXFwiOyB9XFxuXFxuLmZhLWJsb2dnZXItYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzdkXFxcIjsgfVxcblxcbi5mYS1ibHVldG9vdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5M1xcXCI7IH1cXG5cXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5NFxcXCI7IH1cXG5cXG4uZmEtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMyXFxcIjsgfVxcblxcbi5mYS1ib2x0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTdcXFwiOyB9XFxuXFxuLmZhLWJvbWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlMlxcXCI7IH1cXG5cXG4uZmEtYm9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWQ3XFxcIjsgfVxcblxcbi5mYS1ib25nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NWNcXFwiOyB9XFxuXFxuLmZhLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7IH1cXG5cXG4uZmEtYm9vay1kZWFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YjdcXFwiOyB9XFxuXFxuLmZhLWJvb2stbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2U2XFxcIjsgfVxcblxcbi5mYS1ib29rLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxOFxcXCI7IH1cXG5cXG4uZmEtYm9vay1yZWFkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkYVxcXCI7IH1cXG5cXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7IH1cXG5cXG4uZmEtYm9vdHN0cmFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MzZcXFwiOyB9XFxuXFxuLmZhLWJvcmRlci1hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg0Y1xcXCI7IH1cXG5cXG4uZmEtYm9yZGVyLW5vbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg1MFxcXCI7IH1cXG5cXG4uZmEtYm9yZGVyLXN0eWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4NTNcXFwiOyB9XFxuXFxuLmZhLWJvd2xpbmctYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDM2XFxcIjsgfVxcblxcbi5mYS1ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ2NlxcXCI7IH1cXG5cXG4uZmEtYm94LW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ5ZVxcXCI7IH1cXG5cXG4uZmEtYm94LXRpc3N1ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDViXFxcIjsgfVxcblxcbi5mYS1ib3hlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDY4XFxcIjsgfVxcblxcbi5mYS1icmFpbGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTFcXFwiOyB9XFxuXFxuLmZhLWJyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZGNcXFwiOyB9XFxuXFxuLmZhLWJyZWFkLXNsaWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZWNcXFwiOyB9XFxuXFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIxXFxcIjsgfVxcblxcbi5mYS1icmllZmNhc2UtbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDY5XFxcIjsgfVxcblxcbi5mYS1icm9hZGNhc3QtdG93ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxOVxcXCI7IH1cXG5cXG4uZmEtYnJvb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxYVxcXCI7IH1cXG5cXG4uZmEtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1ZFxcXCI7IH1cXG5cXG4uZmEtYnRjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWFcXFwiOyB9XFxuXFxuLmZhLWJ1ZmZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODM3XFxcIjsgfVxcblxcbi5mYS1idWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4OFxcXCI7IH1cXG5cXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhZFxcXCI7IH1cXG5cXG4uZmEtYnVsbGhvcm46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMVxcXCI7IH1cXG5cXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0MFxcXCI7IH1cXG5cXG4uZmEtYnVybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDZhXFxcIjsgfVxcblxcbi5mYS1idXJvbW9iZWxleHBlcnRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzN2ZcXFwiOyB9XFxuXFxuLmZhLWJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjA3XFxcIjsgfVxcblxcbi5mYS1idXMtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NWVcXFwiOyB9XFxuXFxuLmZhLWJ1c2luZXNzLXRpbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY0YVxcXCI7IH1cXG5cXG4uZmEtYnV5LW4tbGFyZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhhNlxcXCI7IH1cXG5cXG4uZmEtYnV5c2VsbGFkczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjBkXFxcIjsgfVxcblxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWNcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzNcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjc0XFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1kYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4M1xcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3MlxcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjcxXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjczXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci13ZWVrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODRcXFwiOyB9XFxuXFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMwXFxcIjsgfVxcblxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4M1xcXCI7IH1cXG5cXG4uZmEtY2FtcGdyb3VuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmJiXFxcIjsgfVxcblxcbi5mYS1jYW5hZGlhbi1tYXBsZS1sZWFmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODVcXFwiOyB9XFxuXFxuLmZhLWNhbmR5LWNhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4NlxcXCI7IH1cXG5cXG4uZmEtY2FubmFiaXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1ZlxcXCI7IH1cXG5cXG4uZmEtY2Fwc3VsZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ2YlxcXCI7IH1cXG5cXG4uZmEtY2FyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjlcXFwiOyB9XFxuXFxuLmZhLWNhci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkZVxcXCI7IH1cXG5cXG4uZmEtY2FyLWJhdHRlcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkZlxcXCI7IH1cXG5cXG4uZmEtY2FyLWNyYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZTFcXFwiOyB9XFxuXFxuLmZhLWNhci1zaWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZTRcXFwiOyB9XFxuXFxuLmZhLWNhcmF2YW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhmZlxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ3XFxcIjsgfVxcblxcbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDlcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGFcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXNxdWFyZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTBcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXNxdWFyZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTFcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXNxdWFyZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTUyXFxcIjsgfVxcblxcbi5mYS1jYXJldC1zcXVhcmUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1MVxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkOFxcXCI7IH1cXG5cXG4uZmEtY2Fycm90OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODdcXFwiOyB9XFxuXFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE4XFxcIjsgfVxcblxcbi5mYS1jYXJ0LXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxN1xcXCI7IH1cXG5cXG4uZmEtY2FzaC1yZWdpc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzg4XFxcIjsgfVxcblxcbi5mYS1jYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZiZVxcXCI7IH1cXG5cXG4uZmEtY2MtYW1hem9uLXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDJkXFxcIjsgfVxcblxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjNcXFwiOyB9XFxuXFxuLmZhLWNjLWFwcGxlLXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDE2XFxcIjsgfVxcblxcbi5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjRjXFxcIjsgfVxcblxcbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWYyXFxcIjsgfVxcblxcbi5mYS1jYy1qY2I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0YlxcXCI7IH1cXG5cXG4uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWYxXFxcIjsgfVxcblxcbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmNFxcXCI7IH1cXG5cXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjVcXFwiOyB9XFxuXFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmMFxcXCI7IH1cXG5cXG4uZmEtY2VudGVyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzgwXFxcIjsgfVxcblxcbi5mYS1jZW50b3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4OVxcXCI7IH1cXG5cXG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhM1xcXCI7IH1cXG5cXG4uZmEtY2hhaXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjMFxcXCI7IH1cXG5cXG4uZmEtY2hhbGtib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTFiXFxcIjsgfVxcblxcbi5mYS1jaGFsa2JvYXJkLXRlYWNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxY1xcXCI7IH1cXG5cXG4uZmEtY2hhcmdpbmctc3RhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWU3XFxcIjsgfVxcblxcbi5mYS1jaGFydC1hcmVhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmVcXFwiOyB9XFxuXFxuLmZhLWNoYXJ0LWJhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgwXFxcIjsgfVxcblxcbi5mYS1jaGFydC1saW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDFcXFwiOyB9XFxuXFxuLmZhLWNoYXJ0LXBpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjAwXFxcIjsgfVxcblxcbi5mYS1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjsgfVxcblxcbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1OFxcXCI7IH1cXG5cXG4uZmEtY2hlY2stZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjBcXFwiOyB9XFxuXFxuLmZhLWNoZWNrLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTRhXFxcIjsgfVxcblxcbi5mYS1jaGVlc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdlZlxcXCI7IH1cXG5cXG4uZmEtY2hlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzOVxcXCI7IH1cXG5cXG4uZmEtY2hlc3MtYmlzaG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0M2FcXFwiOyB9XFxuXFxuLmZhLWNoZXNzLWJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0M2NcXFwiOyB9XFxuXFxuLmZhLWNoZXNzLWtpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzZlxcXCI7IH1cXG5cXG4uZmEtY2hlc3Mta25pZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NDFcXFwiOyB9XFxuXFxuLmZhLWNoZXNzLXBhd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ0M1xcXCI7IH1cXG5cXG4uZmEtY2hlc3MtcXVlZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ0NVxcXCI7IH1cXG5cXG4uZmEtY2hlc3Mtcm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDQ3XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxM2FcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzN1xcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzOFxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzOVxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzhcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUzXFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTRcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3N1xcXCI7IH1cXG5cXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhZVxcXCI7IH1cXG5cXG4uZmEtY2hyb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjhcXFwiOyB9XFxuXFxuLmZhLWNocm9tZWNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzOFxcXCI7IH1cXG5cXG4uZmEtY2h1cmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MWRcXFwiOyB9XFxuXFxuLmZhLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTExXFxcIjsgfVxcblxcbi5mYS1jaXJjbGUtbm90Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjZVxcXCI7IH1cXG5cXG4uZmEtY2l0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjRmXFxcIjsgfVxcblxcbi5mYS1jbGluaWMtbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2YyXFxcIjsgfVxcblxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMyOFxcXCI7IH1cXG5cXG4uZmEtY2xpcGJvYXJkLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NmNcXFwiOyB9XFxuXFxuLmZhLWNsaXBib2FyZC1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NmRcXFwiOyB9XFxuXFxuLmZhLWNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiOyB9XFxuXFxuLmZhLWNsb25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNGRcXFwiOyB9XFxuXFxuLmZhLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMGFcXFwiOyB9XFxuXFxuLmZhLWNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzJcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLWRvd25sb2FkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzgxXFxcIjsgfVxcblxcbi5mYS1jbG91ZC1tZWF0YmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzNiXFxcIjsgfVxcblxcbi5mYS1jbG91ZC1tb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YzNcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLW1vb24tcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzNjXFxcIjsgfVxcblxcbi5mYS1jbG91ZC1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3M2RcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLXNob3dlcnMtaGVhdnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc0MFxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtc3VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YzRcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLXN1bi1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NDNcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLXVwbG9hZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4MlxcXCI7IH1cXG5cXG4uZmEtY2xvdWRmbGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDdkXFxcIjsgfVxcblxcbi5mYS1jbG91ZHNjYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzODNcXFwiOyB9XFxuXFxuLmZhLWNsb3Vkc21pdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4NFxcXCI7IH1cXG5cXG4uZmEtY2xvdWR2ZXJzaWZ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzODVcXFwiOyB9XFxuXFxuLmZhLWNvY2t0YWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjFcXFwiOyB9XFxuXFxuLmZhLWNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyMVxcXCI7IH1cXG5cXG4uZmEtY29kZS1icmFuY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyNlxcXCI7IH1cXG5cXG4uZmEtY29kZXBlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNiXFxcIjsgfVxcblxcbi5mYS1jb2RpZXBpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg0XFxcIjsgfVxcblxcbi5mYS1jb2ZmZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmNFxcXCI7IH1cXG5cXG4uZmEtY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiOyB9XFxuXFxuLmZhLWNvZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NVxcXCI7IH1cXG5cXG4uZmEtY29pbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxZVxcXCI7IH1cXG5cXG4uZmEtY29sdW1uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRiXFxcIjsgfVxcblxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzVcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyN2FcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQtZG9sbGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NTFcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQtZG90czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGFkXFxcIjsgfVxcblxcbi5mYS1jb21tZW50LW1lZGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdmNVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGIzXFxcIjsgfVxcblxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg2XFxcIjsgfVxcblxcbi5mYS1jb21tZW50cy1kb2xsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY1M1xcXCI7IH1cXG5cXG4uZmEtY29tcGFjdC1kaXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MWZcXFwiOyB9XFxuXFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0ZVxcXCI7IH1cXG5cXG4uZmEtY29tcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NlxcXCI7IH1cXG5cXG4uZmEtY29tcHJlc3MtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MjJcXFwiOyB9XFxuXFxuLmZhLWNvbXByZXNzLWFycm93cy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4Y1xcXCI7IH1cXG5cXG4uZmEtY29uY2llcmdlLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2MlxcXCI7IH1cXG5cXG4uZmEtY29uZmx1ZW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzhkXFxcIjsgfVxcblxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjBlXFxcIjsgfVxcblxcbi5mYS1jb250YW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2ZFxcXCI7IH1cXG5cXG4uZmEtY29va2llOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjNcXFwiOyB9XFxuXFxuLmZhLWNvb2tpZS1iaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjRcXFwiOyB9XFxuXFxuLmZhLWNvcHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNVxcXCI7IH1cXG5cXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjlcXFwiOyB9XFxuXFxuLmZhLWNvdHRvbi1idXJlYXU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg5ZVxcXCI7IH1cXG5cXG4uZmEtY291Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRiOFxcXCI7IH1cXG5cXG4uZmEtY3BhbmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzODhcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1ZVxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1ieTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGU3XFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLW5jOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZThcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtbmMtZXU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlOVxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1uYy1qcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGVhXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZWJcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtcGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlY1xcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1wZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlZFxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1yZW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGVlXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLXNhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZWZcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtc2FtcGxpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmMFxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1zYW1wbGluZy1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZjFcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmMlxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy16ZXJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZjNcXFwiOyB9XFxuXFxuLmZhLWNyZWRpdC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWRcXFwiOyB9XFxuXFxuLmZhLWNyaXRpY2FsLXJvbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjOVxcXCI7IH1cXG5cXG4uZmEtY3JvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI1XFxcIjsgfVxcblxcbi5mYS1jcm9wLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTY1XFxcIjsgfVxcblxcbi5mYS1jcm9zczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjU0XFxcIjsgfVxcblxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNWJcXFwiOyB9XFxuXFxuLmZhLWNyb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyMFxcXCI7IH1cXG5cXG4uZmEtY3Jvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyMVxcXCI7IH1cXG5cXG4uZmEtY3J1dGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZjdcXFwiOyB9XFxuXFxuLmZhLWNzczM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzY1xcXCI7IH1cXG5cXG4uZmEtY3NzMy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4YlxcXCI7IH1cXG5cXG4uZmEtY3ViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWIyXFxcIjsgfVxcblxcbi5mYS1jdWJlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWIzXFxcIjsgfVxcblxcbi5mYS1jdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNFxcXCI7IH1cXG5cXG4uZmEtY3V0dGxlZmlzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzhjXFxcIjsgfVxcblxcbi5mYS1kLWFuZC1kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOGRcXFwiOyB9XFxuXFxuLmZhLWQtYW5kLWQtYmV5b25kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2Y2FcXFwiOyB9XFxuXFxuLmZhLWRhaWx5bW90aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNTJcXFwiOyB9XFxuXFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTBcXFwiOyB9XFxuXFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzBcXFwiOyB9XFxuXFxuLmZhLWRlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhNFxcXCI7IH1cXG5cXG4uZmEtZGVlemVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzdcXFwiOyB9XFxuXFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE1XFxcIjsgfVxcblxcbi5mYS1kZW1vY3JhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzQ3XFxcIjsgfVxcblxcbi5mYS1kZXBsb3lkb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4ZVxcXCI7IH1cXG5cXG4uZmEtZGVza3BybzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzhmXFxcIjsgfVxcblxcbi5mYS1kZXNrdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDhcXFwiOyB9XFxuXFxuLmZhLWRldjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmNjXFxcIjsgfVxcblxcbi5mYS1kZXZpYW50YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYmRcXFwiOyB9XFxuXFxuLmZhLWRoYXJtYWNoYWtyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjU1XFxcIjsgfVxcblxcbi5mYS1kaGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5MFxcXCI7IH1cXG5cXG4uZmEtZGlhZ25vc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzBcXFwiOyB9XFxuXFxuLmZhLWRpYXNwb3JhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OTFcXFwiOyB9XFxuXFxuLmZhLWRpY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyMlxcXCI7IH1cXG5cXG4uZmEtZGljZS1kMjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjZlxcXCI7IH1cXG5cXG4uZmEtZGljZS1kNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmQxXFxcIjsgfVxcblxcbi5mYS1kaWNlLWZpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyM1xcXCI7IH1cXG5cXG4uZmEtZGljZS1mb3VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MjRcXFwiOyB9XFxuXFxuLmZhLWRpY2Utb25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MjVcXFwiOyB9XFxuXFxuLmZhLWRpY2Utc2l4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MjZcXFwiOyB9XFxuXFxuLmZhLWRpY2UtdGhyZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyN1xcXCI7IH1cXG5cXG4uZmEtZGljZS10d286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyOFxcXCI7IH1cXG5cXG4uZmEtZGlnZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE2XFxcIjsgfVxcblxcbi5mYS1kaWdpdGFsLW9jZWFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOTFcXFwiOyB9XFxuXFxuLmZhLWRpZ2l0YWwtdGFjaG9ncmFwaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTY2XFxcIjsgfVxcblxcbi5mYS1kaXJlY3Rpb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZWJcXFwiOyB9XFxuXFxuLmZhLWRpc2NvcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5MlxcXCI7IH1cXG5cXG4uZmEtZGlzY291cnNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOTNcXFwiOyB9XFxuXFxuLmZhLWRpc2Vhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdmYVxcXCI7IH1cXG5cXG4uZmEtZGl2aWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MjlcXFwiOyB9XFxuXFxuLmZhLWRpenp5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjdcXFwiOyB9XFxuXFxuLmZhLWRuYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDcxXFxcIjsgfVxcblxcbi5mYS1kb2NodWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5NFxcXCI7IH1cXG5cXG4uZmEtZG9ja2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOTVcXFwiOyB9XFxuXFxuLmZhLWRvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmQzXFxcIjsgfVxcblxcbi5mYS1kb2xsYXItc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTU1XFxcIjsgfVxcblxcbi5mYS1kb2xseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDcyXFxcIjsgfVxcblxcbi5mYS1kb2xseS1mbGF0YmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzRcXFwiOyB9XFxuXFxuLmZhLWRvbmF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGI5XFxcIjsgfVxcblxcbi5mYS1kb29yLWNsb3NlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTJhXFxcIjsgfVxcblxcbi5mYS1kb29yLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyYlxcXCI7IH1cXG5cXG4uZmEtZG90LWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTkyXFxcIjsgfVxcblxcbi5mYS1kb3ZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YmFcXFwiOyB9XFxuXFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiOyB9XFxuXFxuLmZhLWRyYWZ0MmRpZ2l0YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5NlxcXCI7IH1cXG5cXG4uZmEtZHJhZnRpbmctY29tcGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTY4XFxcIjsgfVxcblxcbi5mYS1kcmFnb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZkNVxcXCI7IH1cXG5cXG4uZmEtZHJhdy1wb2x5Z29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZWVcXFwiOyB9XFxuXFxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2RcXFwiOyB9XFxuXFxuLmZhLWRyaWJiYmxlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzk3XFxcIjsgfVxcblxcbi5mYS1kcm9wYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNmJcXFwiOyB9XFxuXFxuLmZhLWRydW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2OVxcXCI7IH1cXG5cXG4uZmEtZHJ1bS1zdGVlbHBhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTZhXFxcIjsgfVxcblxcbi5mYS1kcnVtc3RpY2stYml0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmQ3XFxcIjsgfVxcblxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhOVxcXCI7IH1cXG5cXG4uZmEtZHVtYmJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ0YlxcXCI7IH1cXG5cXG4uZmEtZHVtcHN0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5M1xcXCI7IH1cXG5cXG4uZmEtZHVtcHN0ZXItZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzk0XFxcIjsgfVxcblxcbi5mYS1kdW5nZW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZDlcXFwiOyB9XFxuXFxuLmZhLWR5YWxvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzk5XFxcIjsgfVxcblxcbi5mYS1lYXJseWJpcmRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOWFcXFwiOyB9XFxuXFxuLmZhLWViYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmNFxcXCI7IH1cXG5cXG4uZmEtZWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjgyXFxcIjsgfVxcblxcbi5mYS1lZGdlLWxlZ2FjeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDc4XFxcIjsgfVxcblxcbi5mYS1lZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDRcXFwiOyB9XFxuXFxuLmZhLWVnZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2ZiXFxcIjsgfVxcblxcbi5mYS1lamVjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUyXFxcIjsgfVxcblxcbi5mYS1lbGVtZW50b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzMFxcXCI7IH1cXG5cXG4uZmEtZWxsaXBzaXMtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQxXFxcIjsgfVxcblxcbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDJcXFwiOyB9XFxuXFxuLmZhLWVsbG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVmMVxcXCI7IH1cXG5cXG4uZmEtZW1iZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyM1xcXCI7IH1cXG5cXG4uZmEtZW1waXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDFcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiNlxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGUtb3Blbi10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NThcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk5XFxcIjsgfVxcblxcbi5mYS1lbnZpcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5OVxcXCI7IH1cXG5cXG4uZmEtZXF1YWxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MmNcXFwiOyB9XFxuXFxuLmZhLWVyYXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTJkXFxcIjsgfVxcblxcbi5mYS1lcmxhbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5ZFxcXCI7IH1cXG5cXG4uZmEtZXRoZXJldW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyZVxcXCI7IH1cXG5cXG4uZmEtZXRoZXJuZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5NlxcXCI7IH1cXG5cXG4uZmEtZXRzeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ3XFxcIjsgfVxcblxcbi5mYS1ldXJvLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1M1xcXCI7IH1cXG5cXG4uZmEtZXZlcm5vdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzOVxcXCI7IH1cXG5cXG4uZmEtZXhjaGFuZ2UtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNjJcXFwiOyB9XFxuXFxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmFcXFwiOyB9XFxuXFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZhXFxcIjsgfVxcblxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcxXFxcIjsgfVxcblxcbi5mYS1leHBhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NVxcXCI7IH1cXG5cXG4uZmEtZXhwYW5kLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDI0XFxcIjsgfVxcblxcbi5mYS1leHBhbmQtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzFlXFxcIjsgfVxcblxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzZVxcXCI7IH1cXG5cXG4uZmEtZXh0ZXJuYWwtbGluay1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM1ZFxcXCI7IH1cXG5cXG4uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNjBcXFwiOyB9XFxuXFxuLmZhLWV5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZlXFxcIjsgfVxcblxcbi5mYS1leWUtZHJvcHBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWZiXFxcIjsgfVxcblxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MFxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YVxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzllXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vay1tZXNzZW5nZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5ZlxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODJcXFwiOyB9XFxuXFxuLmZhLWZhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODYzXFxcIjsgfVxcblxcbi5mYS1mYW50YXN5LWZsaWdodC1nYW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmRjXFxcIjsgfVxcblxcbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDlcXFwiOyB9XFxuXFxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjsgfVxcblxcbi5mYS1mYXVjZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTAwNVxcXCI7IH1cXG5cXG4uZmEtZmF4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYWNcXFwiOyB9XFxuXFxuLmZhLWZlYXRoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyZFxcXCI7IH1cXG5cXG4uZmEtZmVhdGhlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2YlxcXCI7IH1cXG5cXG4uZmEtZmVkZXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5N1xcXCI7IH1cXG5cXG4uZmEtZmVkb3JhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OThcXFwiOyB9XFxuXFxuLmZhLWZlbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTgyXFxcIjsgfVxcblxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZiXFxcIjsgfVxcblxcbi5mYS1maWdtYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzk5XFxcIjsgfVxcblxcbi5mYS1maWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWJcXFwiOyB9XFxuXFxuLmZhLWZpbGUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWNcXFwiOyB9XFxuXFxuLmZhLWZpbGUtYXJjaGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWM2XFxcIjsgfVxcblxcbi5mYS1maWxlLWF1ZGlvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzdcXFwiOyB9XFxuXFxuLmZhLWZpbGUtY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWM5XFxcIjsgfVxcblxcbi5mYS1maWxlLWNvbnRyYWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NmNcXFwiOyB9XFxuXFxuLmZhLWZpbGUtY3N2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZGRcXFwiOyB9XFxuXFxuLmZhLWZpbGUtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2ZFxcXCI7IH1cXG5cXG4uZmEtZmlsZS1leGNlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWMzXFxcIjsgfVxcblxcbi5mYS1maWxlLWV4cG9ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTZlXFxcIjsgfVxcblxcbi5mYS1maWxlLWltYWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzVcXFwiOyB9XFxuXFxuLmZhLWZpbGUtaW1wb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NmZcXFwiOyB9XFxuXFxuLmZhLWZpbGUtaW52b2ljZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTcwXFxcIjsgfVxcblxcbi5mYS1maWxlLWludm9pY2UtZG9sbGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzFcXFwiOyB9XFxuXFxuLmZhLWZpbGUtbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDc3XFxcIjsgfVxcblxcbi5mYS1maWxlLW1lZGljYWwtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzhcXFwiOyB9XFxuXFxuLmZhLWZpbGUtcGRmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzFcXFwiOyB9XFxuXFxuLmZhLWZpbGUtcG93ZXJwb2ludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWM0XFxcIjsgfVxcblxcbi5mYS1maWxlLXByZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTcyXFxcIjsgfVxcblxcbi5mYS1maWxlLXNpZ25hdHVyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTczXFxcIjsgfVxcblxcbi5mYS1maWxlLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTc0XFxcIjsgfVxcblxcbi5mYS1maWxlLXZpZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzhcXFwiOyB9XFxuXFxuLmZhLWZpbGUtd29yZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWMyXFxcIjsgfVxcblxcbi5mYS1maWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzVcXFwiOyB9XFxuXFxuLmZhLWZpbGwtZHJpcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTc2XFxcIjsgfVxcblxcbi5mYS1maWxtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiOyB9XFxuXFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIwXFxcIjsgfVxcblxcbi5mYS1maW5nZXJwcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTc3XFxcIjsgfVxcblxcbi5mYS1maXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmRcXFwiOyB9XFxuXFxuLmZhLWZpcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZTRcXFwiOyB9XFxuXFxuLmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzRcXFwiOyB9XFxuXFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2OVxcXCI7IH1cXG5cXG4uZmEtZmlyZWZveC1icm93c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwMDdcXFwiOyB9XFxuXFxuLmZhLWZpcnN0LWFpZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDc5XFxcIjsgfVxcblxcbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmIwXFxcIjsgfVxcblxcbi5mYS1maXJzdC1vcmRlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwYVxcXCI7IH1cXG5cXG4uZmEtZmlyc3RkcmFmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2ExXFxcIjsgfVxcblxcbi5mYS1maXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzhcXFwiOyB9XFxuXFxuLmZhLWZpc3QtcmFpc2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZGVcXFwiOyB9XFxuXFxuLmZhLWZsYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNFxcXCI7IH1cXG5cXG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExZVxcXCI7IH1cXG5cXG4uZmEtZmxhZy11c2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc0ZFxcXCI7IH1cXG5cXG4uZmEtZmxhc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjM1xcXCI7IH1cXG5cXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNmVcXFwiOyB9XFxuXFxuLmZhLWZsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDRkXFxcIjsgfVxcblxcbi5mYS1mbHVzaGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzlcXFwiOyB9XFxuXFxuLmZhLWZseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDE3XFxcIjsgfVxcblxcbi5mYS1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3YlxcXCI7IH1cXG5cXG4uZmEtZm9sZGVyLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NWRcXFwiOyB9XFxuXFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2NcXFwiOyB9XFxuXFxuLmZhLWZvbGRlci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NWVcXFwiOyB9XFxuXFxuLmZhLWZvbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7IH1cXG5cXG4uZmEtZm9udC1hd2Vzb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjRcXFwiOyB9XFxuXFxuLmZhLWZvbnQtYXdlc29tZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM1Y1xcXCI7IH1cXG5cXG4uZmEtZm9udC1hd2Vzb21lLWZsYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyNVxcXCI7IH1cXG5cXG4uZmEtZm9udC1hd2Vzb21lLWxvZ28tZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGU2XFxcIjsgfVxcblxcbi5mYS1mb250aWNvbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4MFxcXCI7IH1cXG5cXG4uZmEtZm9udGljb25zLWZpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTJcXFwiOyB9XFxuXFxuLmZhLWZvb3RiYWxsLWJhbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ0ZVxcXCI7IH1cXG5cXG4uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyODZcXFwiOyB9XFxuXFxuLmZhLWZvcnQtYXdlc29tZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhM1xcXCI7IH1cXG5cXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxMVxcXCI7IH1cXG5cXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRlXFxcIjsgfVxcblxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODBcXFwiOyB9XFxuXFxuLmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzVcXFwiOyB9XFxuXFxuLmZhLWZyZWVic2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhNFxcXCI7IH1cXG5cXG4uZmEtZnJvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTJlXFxcIjsgfVxcblxcbi5mYS1mcm93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTE5XFxcIjsgfVxcblxcbi5mYS1mcm93bi1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1N2FcXFwiOyB9XFxuXFxuLmZhLWZ1bGNydW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwYlxcXCI7IH1cXG5cXG4uZmEtZnVubmVsLWRvbGxhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjYyXFxcIjsgfVxcblxcbi5mYS1mdXRib2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlM1xcXCI7IH1cXG5cXG4uZmEtZ2FsYWN0aWMtcmVwdWJsaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwY1xcXCI7IH1cXG5cXG4uZmEtZ2FsYWN0aWMtc2VuYXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MGRcXFwiOyB9XFxuXFxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExYlxcXCI7IH1cXG5cXG4uZmEtZ2FzLXB1bXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyZlxcXCI7IH1cXG5cXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlM1xcXCI7IH1cXG5cXG4uZmEtZ2VtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTVcXFwiOyB9XFxuXFxuLmZhLWdlbmRlcmxlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyZFxcXCI7IH1cXG5cXG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjY1XFxcIjsgfVxcblxcbi5mYS1nZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjYwXFxcIjsgfVxcblxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2MVxcXCI7IH1cXG5cXG4uZmEtZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZlMlxcXCI7IH1cXG5cXG4uZmEtZ2lmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZiXFxcIjsgfVxcblxcbi5mYS1naWZ0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzljXFxcIjsgfVxcblxcbi5mYS1naXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkM1xcXCI7IH1cXG5cXG4uZmEtZ2l0LWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODQxXFxcIjsgfVxcblxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDJcXFwiOyB9XFxuXFxuLmZhLWdpdGh1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjsgfVxcblxcbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTNcXFwiOyB9XFxuXFxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MlxcXCI7IH1cXG5cXG4uZmEtZ2l0a3Jha2VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTZcXFwiOyB9XFxuXFxuLmZhLWdpdGxhYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk2XFxcIjsgfVxcblxcbi5mYS1naXR0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyNlxcXCI7IH1cXG5cXG4uZmEtZ2xhc3MtY2hlZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OWZcXFwiOyB9XFxuXFxuLmZhLWdsYXNzLW1hcnRpbmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMFxcXCI7IH1cXG5cXG4uZmEtZ2xhc3MtbWFydGluaS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3YlxcXCI7IH1cXG5cXG4uZmEtZ2xhc3Mtd2hpc2tleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2EwXFxcIjsgfVxcblxcbi5mYS1nbGFzc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MzBcXFwiOyB9XFxuXFxuLmZhLWdsaWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTVcXFwiOyB9XFxuXFxuLmZhLWdsaWRlLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhNlxcXCI7IH1cXG5cXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhY1xcXCI7IH1cXG5cXG4uZmEtZ2xvYmUtYWZyaWNhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1N2NcXFwiOyB9XFxuXFxuLmZhLWdsb2JlLWFtZXJpY2FzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1N2RcXFwiOyB9XFxuXFxuLmZhLWdsb2JlLWFzaWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3ZVxcXCI7IH1cXG5cXG4uZmEtZ2xvYmUtZXVyb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YTJcXFwiOyB9XFxuXFxuLmZhLWdvZm9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2E3XFxcIjsgfVxcblxcbi5mYS1nb2xmLWJhbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1MFxcXCI7IH1cXG5cXG4uZmEtZ29vZHJlYWRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYThcXFwiOyB9XFxuXFxuLmZhLWdvb2RyZWFkcy1nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTlcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWEwXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtZHJpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhYVxcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlLXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDc5XFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2FiXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmIzXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGx1cy1nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDVcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ0XFxcIjsgfVxcblxcbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWVcXFwiOyB9XFxuXFxuLmZhLWdvcHVyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY2NFxcXCI7IH1cXG5cXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5ZFxcXCI7IH1cXG5cXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NFxcXCI7IH1cXG5cXG4uZmEtZ3JhdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ2XFxcIjsgfVxcblxcbi5mYS1ncmVhdGVyLXRoYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzMVxcXCI7IH1cXG5cXG4uZmEtZ3JlYXRlci10aGFuLWVxdWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MzJcXFwiOyB9XFxuXFxuLmZhLWdyaW1hY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3ZlxcXCI7IH1cXG5cXG4uZmEtZ3JpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTgwXFxcIjsgfVxcblxcbi5mYS1ncmluLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTgxXFxcIjsgfVxcblxcbi5mYS1ncmluLWJlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4MlxcXCI7IH1cXG5cXG4uZmEtZ3Jpbi1iZWFtLXN3ZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODNcXFwiOyB9XFxuXFxuLmZhLWdyaW4taGVhcnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODRcXFwiOyB9XFxuXFxuLmZhLWdyaW4tc3F1aW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODVcXFwiOyB9XFxuXFxuLmZhLWdyaW4tc3F1aW50LXRlYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODZcXFwiOyB9XFxuXFxuLmZhLWdyaW4tc3RhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4N1xcXCI7IH1cXG5cXG4uZmEtZ3Jpbi10ZWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTg4XFxcIjsgfVxcblxcbi5mYS1ncmluLXRvbmd1ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTg5XFxcIjsgfVxcblxcbi5mYS1ncmluLXRvbmd1ZS1zcXVpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4YVxcXCI7IH1cXG5cXG4uZmEtZ3Jpbi10b25ndWUtd2luazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNThiXFxcIjsgfVxcblxcbi5mYS1ncmluLXdpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4Y1xcXCI7IH1cXG5cXG4uZmEtZ3JpcC1ob3Jpem9udGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OGRcXFwiOyB9XFxuXFxuLmZhLWdyaXAtbGluZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhNFxcXCI7IH1cXG5cXG4uZmEtZ3JpcC1saW5lcy12ZXJ0aWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2E1XFxcIjsgfVxcblxcbi5mYS1ncmlwLXZlcnRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OGVcXFwiOyB9XFxuXFxuLmZhLWdyaXBmaXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYWNcXFwiOyB9XFxuXFxuLmZhLWdydW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYWRcXFwiOyB9XFxuXFxuLmZhLWd1aWxkZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3ZVxcXCI7IH1cXG5cXG4uZmEtZ3VpdGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YTZcXFwiOyB9XFxuXFxuLmZhLWd1bHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhZVxcXCI7IH1cXG5cXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmZFxcXCI7IH1cXG5cXG4uZmEtaGFja2VyLW5ld3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkNFxcXCI7IH1cXG5cXG4uZmEtaGFja2VyLW5ld3Mtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYWZcXFwiOyB9XFxuXFxuLmZhLWhhY2tlcnJhbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVmN1xcXCI7IH1cXG5cXG4uZmEtaGFtYnVyZ2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MDVcXFwiOyB9XFxuXFxuLmZhLWhhbW1lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmUzXFxcIjsgfVxcblxcbi5mYS1oYW1zYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjY1XFxcIjsgfVxcblxcbi5mYS1oYW5kLWhvbGRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRiZFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1ob2xkaW5nLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YmVcXFwiOyB9XFxuXFxuLmZhLWhhbmQtaG9sZGluZy1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNWNcXFwiOyB9XFxuXFxuLmZhLWhhbmQtaG9sZGluZy11c2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRjMFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1ob2xkaW5nLXdhdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YzFcXFwiOyB9XFxuXFxuLmZhLWhhbmQtbGl6YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNThcXFwiOyB9XFxuXFxuLmZhLWhhbmQtbWlkZGxlLWZpbmdlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODA2XFxcIjsgfVxcblxcbi5mYS1oYW5kLXBhcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTZcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcGVhY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1YlxcXCI7IH1cXG5cXG4uZmEtaGFuZC1wb2ludC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTdcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcG9pbnQtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE1XFxcIjsgfVxcblxcbi5mYS1oYW5kLXBvaW50LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTRcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcG9pbnQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNlxcXCI7IH1cXG5cXG4uZmEtaGFuZC1wb2ludGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNWFcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcm9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjU1XFxcIjsgfVxcblxcbi5mYS1oYW5kLXNjaXNzb3JzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTdcXFwiOyB9XFxuXFxuLmZhLWhhbmQtc3BhcmtsZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1ZFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1zcG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjU5XFxcIjsgfVxcblxcbi5mYS1oYW5kczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGMyXFxcIjsgfVxcblxcbi5mYS1oYW5kcy1oZWxwaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YzRcXFwiOyB9XFxuXFxuLmZhLWhhbmRzLXdhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1ZVxcXCI7IH1cXG5cXG4uZmEtaGFuZHNoYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjVcXFwiOyB9XFxuXFxuLmZhLWhhbmRzaGFrZS1hbHQtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1ZlxcXCI7IH1cXG5cXG4uZmEtaGFuZHNoYWtlLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjBcXFwiOyB9XFxuXFxuLmZhLWhhbnVraWFoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZTZcXFwiOyB9XFxuXFxuLmZhLWhhcmQtaGF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MDdcXFwiOyB9XFxuXFxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5MlxcXCI7IH1cXG5cXG4uZmEtaGF0LWNvd2JveTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGMwXFxcIjsgfVxcblxcbi5mYS1oYXQtY293Ym95LXNpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhjMVxcXCI7IH1cXG5cXG4uZmEtaGF0LXdpemFyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmU4XFxcIjsgfVxcblxcbi5mYS1oZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMFxcXCI7IH1cXG5cXG4uZmEtaGVhZC1zaWRlLWNvdWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjFcXFwiOyB9XFxuXFxuLmZhLWhlYWQtc2lkZS1jb3VnaC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDYyXFxcIjsgfVxcblxcbi5mYS1oZWFkLXNpZGUtbWFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDYzXFxcIjsgfVxcblxcbi5mYS1oZWFkLXNpZGUtdmlydXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2NFxcXCI7IH1cXG5cXG4uZmEtaGVhZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRjXFxcIjsgfVxcblxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiOyB9XFxuXFxuLmZhLWhlYWRwaG9uZXMtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OGZcXFwiOyB9XFxuXFxuLmZhLWhlYWRzZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5MFxcXCI7IH1cXG5cXG4uZmEtaGVhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNFxcXCI7IH1cXG5cXG4uZmEtaGVhcnQtYnJva2VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YTlcXFwiOyB9XFxuXFxuLmZhLWhlYXJ0YmVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjFlXFxcIjsgfVxcblxcbi5mYS1oZWxpY29wdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MzNcXFwiOyB9XFxuXFxuLmZhLWhpZ2hsaWdodGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OTFcXFwiOyB9XFxuXFxuLmZhLWhpa2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmVjXFxcIjsgfVxcblxcbi5mYS1oaXBwbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmVkXFxcIjsgfVxcblxcbi5mYS1oaXBzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NTJcXFwiOyB9XFxuXFxuLmZhLWhpcmUtYS1oZWxwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiMFxcXCI7IH1cXG5cXG4uZmEtaGlzdG9yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRhXFxcIjsgfVxcblxcbi5mYS1oaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwN2ZcXFwiOyB9XFxuXFxuLmZhLWhvY2tleS1wdWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NTNcXFwiOyB9XFxuXFxuLmZhLWhvbGx5LWJlcnJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YWFcXFwiOyB9XFxuXFxuLmZhLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7IH1cXG5cXG4uZmEtaG9vbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyN1xcXCI7IH1cXG5cXG4uZmEtaG9ybmJpbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5MlxcXCI7IH1cXG5cXG4uZmEtaG9yc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZmMFxcXCI7IH1cXG5cXG4uZmEtaG9yc2UtaGVhZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2FiXFxcIjsgfVxcblxcbi5mYS1ob3NwaXRhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGY4XFxcIjsgfVxcblxcbi5mYS1ob3NwaXRhbC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ3ZFxcXCI7IH1cXG5cXG4uZmEtaG9zcGl0YWwtc3ltYm9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0N2VcXFwiOyB9XFxuXFxuLmZhLWhvc3BpdGFsLXVzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgwZFxcXCI7IH1cXG5cXG4uZmEtaG90LXR1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTkzXFxcIjsgfVxcblxcbi5mYS1ob3Rkb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgwZlxcXCI7IH1cXG5cXG4uZmEtaG90ZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5NFxcXCI7IH1cXG5cXG4uZmEtaG90amFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjFcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjU0XFxcIjsgfVxcblxcbi5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTNcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTJcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjUxXFxcIjsgfVxcblxcbi5mYS1ob3VzZS1kYW1hZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZmMVxcXCI7IH1cXG5cXG4uZmEtaG91c2UtdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDY1XFxcIjsgfVxcblxcbi5mYS1ob3V6ejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjdjXFxcIjsgfVxcblxcbi5mYS1ocnl2bmlhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZjJcXFwiOyB9XFxuXFxuLmZhLWh0bWw1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxM2JcXFwiOyB9XFxuXFxuLmZhLWh1YnNwb3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiMlxcXCI7IH1cXG5cXG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0NlxcXCI7IH1cXG5cXG4uZmEtaWNlLWNyZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MTBcXFwiOyB9XFxuXFxuLmZhLWljaWNsZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhZFxcXCI7IH1cXG5cXG4uZmEtaWNvbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg2ZFxcXCI7IH1cXG5cXG4uZmEtaWQtYmFkZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjMVxcXCI7IH1cXG5cXG4uZmEtaWQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmMyXFxcIjsgfVxcblxcbi5mYS1pZC1jYXJkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDdmXFxcIjsgfVxcblxcbi5mYS1pZGVhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDEzXFxcIjsgfVxcblxcbi5mYS1pZ2xvbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2FlXFxcIjsgfVxcblxcbi5mYS1pbWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNlXFxcIjsgfVxcblxcbi5mYS1pbWFnZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwMlxcXCI7IH1cXG5cXG4uZmEtaW1kYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ4XFxcIjsgfVxcblxcbi5mYS1pbmJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjsgfVxcblxcbi5mYS1pbmRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzY1xcXCI7IH1cXG5cXG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3NVxcXCI7IH1cXG5cXG4uZmEtaW5maW5pdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzNFxcXCI7IH1cXG5cXG4uZmEtaW5mbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI5XFxcIjsgfVxcblxcbi5mYS1pbmZvLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDVhXFxcIjsgfVxcblxcbi5mYS1pbm5vc29mdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDgwXFxcIjsgfVxcblxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2ZFxcXCI7IH1cXG5cXG4uZmEtaW5zdGFncmFtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDU1XFxcIjsgfVxcblxcbi5mYS1pbnN0YWxvZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDgxXFxcIjsgfVxcblxcbi5mYS1pbnRlcmNvbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2FmXFxcIjsgfVxcblxcbi5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZiXFxcIjsgfVxcblxcbi5mYS1pbnZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2IwXFxcIjsgfVxcblxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDhcXFwiOyB9XFxuXFxuLmZhLWl0YWxpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMzXFxcIjsgfVxcblxcbi5mYS1pdGNoLWlvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2FcXFwiOyB9XFxuXFxuLmZhLWl0dW5lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2I0XFxcIjsgfVxcblxcbi5mYS1pdHVuZXMtbm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2I1XFxcIjsgfVxcblxcbi5mYS1qYXZhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZTRcXFwiOyB9XFxuXFxuLmZhLWplZGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY2OVxcXCI7IH1cXG5cXG4uZmEtamVkaS1vcmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTBlXFxcIjsgfVxcblxcbi5mYS1qZW5raW5zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjZcXFwiOyB9XFxuXFxuLmZhLWppcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiMVxcXCI7IH1cXG5cXG4uZmEtam9nZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiN1xcXCI7IH1cXG5cXG4uZmEtam9pbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5NVxcXCI7IH1cXG5cXG4uZmEtam9vbWxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYWFcXFwiOyB9XFxuXFxuLmZhLWpvdXJuYWwtd2hpbGxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NmFcXFwiOyB9XFxuXFxuLmZhLWpzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjhcXFwiOyB9XFxuXFxuLmZhLWpzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2I5XFxcIjsgfVxcblxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNjXFxcIjsgfVxcblxcbi5mYS1rYWFiYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjZiXFxcIjsgfVxcblxcbi5mYS1rYWdnbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVmYVxcXCI7IH1cXG5cXG4uZmEta2V5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODRcXFwiOyB9XFxuXFxuLmZhLWtleWJhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmNVxcXCI7IH1cXG5cXG4uZmEta2V5Ym9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExY1xcXCI7IH1cXG5cXG4uZmEta2V5Y2RuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYmFcXFwiOyB9XFxuXFxuLmZhLWtoYW5kYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjZkXFxcIjsgfVxcblxcbi5mYS1raWNrc3RhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2JiXFxcIjsgfVxcblxcbi5mYS1raWNrc3RhcnRlci1rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYmNcXFwiOyB9XFxuXFxuLmZhLWtpc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5NlxcXCI7IH1cXG5cXG4uZmEta2lzcy1iZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OTdcXFwiOyB9XFxuXFxuLmZhLWtpc3Mtd2luay1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTk4XFxcIjsgfVxcblxcbi5mYS1raXdpLWJpcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzNVxcXCI7IH1cXG5cXG4uZmEta29ydnVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MmZcXFwiOyB9XFxuXFxuLmZhLWxhbmRtYXJrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NmZcXFwiOyB9XFxuXFxuLmZhLWxhbmd1YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYWJcXFwiOyB9XFxuXFxuLmZhLWxhcHRvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTA5XFxcIjsgfVxcblxcbi5mYS1sYXB0b3AtY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWZjXFxcIjsgfVxcblxcbi5mYS1sYXB0b3AtaG91c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2NlxcXCI7IH1cXG5cXG4uZmEtbGFwdG9wLW1lZGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgxMlxcXCI7IH1cXG5cXG4uZmEtbGFyYXZlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2JkXFxcIjsgfVxcblxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwMlxcXCI7IH1cXG5cXG4uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjAzXFxcIjsgfVxcblxcbi5mYS1sYXVnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTk5XFxcIjsgfVxcblxcbi5mYS1sYXVnaC1iZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWFcXFwiOyB9XFxuXFxuLmZhLWxhdWdoLXNxdWludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTliXFxcIjsgfVxcblxcbi5mYS1sYXVnaC13aW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWNcXFwiOyB9XFxuXFxuLmZhLWxheWVyLWdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZmRcXFwiOyB9XFxuXFxuLmZhLWxlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2Y1xcXCI7IH1cXG5cXG4uZmEtbGVhbnB1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjEyXFxcIjsgfVxcblxcbi5mYS1sZW1vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk0XFxcIjsgfVxcblxcbi5mYS1sZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MWRcXFwiOyB9XFxuXFxuLmZhLWxlc3MtdGhhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM2XFxcIjsgfVxcblxcbi5mYS1sZXNzLXRoYW4tZXF1YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzN1xcXCI7IH1cXG5cXG4uZmEtbGV2ZWwtZG93bi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiZVxcXCI7IH1cXG5cXG4uZmEtbGV2ZWwtdXAtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYmZcXFwiOyB9XFxuXFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNkXFxcIjsgfVxcblxcbi5mYS1saWdodGJ1bGI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYlxcXCI7IH1cXG5cXG4uZmEtbGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2MwXFxcIjsgfVxcblxcbi5mYS1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzFcXFwiOyB9XFxuXFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGNcXFwiOyB9XFxuXFxuLmZhLWxpbmtlZGluLWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTFcXFwiOyB9XFxuXFxuLmZhLWxpbm9kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmI4XFxcIjsgfVxcblxcbi5mYS1saW51eDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTdjXFxcIjsgfVxcblxcbi5mYS1saXJhLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5NVxcXCI7IH1cXG5cXG4uZmEtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNhXFxcIjsgfVxcblxcbi5mYS1saXN0LWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIyXFxcIjsgfVxcblxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2JcXFwiOyB9XFxuXFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjYVxcXCI7IH1cXG5cXG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyNFxcXCI7IH1cXG5cXG4uZmEtbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIzXFxcIjsgfVxcblxcbi5mYS1sb2NrLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjMVxcXCI7IH1cXG5cXG4uZmEtbG9uZy1hcnJvdy1hbHQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzA5XFxcIjsgfVxcblxcbi5mYS1sb25nLWFycm93LWFsdC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMGFcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctYWx0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMGJcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctYWx0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMGNcXFwiOyB9XFxuXFxuLmZhLWxvdy12aXNpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhOFxcXCI7IH1cXG5cXG4uZmEtbHVnZ2FnZS1jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWRcXFwiOyB9XFxuXFxuLmZhLWx1bmdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MDRcXFwiOyB9XFxuXFxuLmZhLWx1bmdzLXZpcnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjdcXFwiOyB9XFxuXFxuLmZhLWx5ZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjM1xcXCI7IH1cXG5cXG4uZmEtbWFnZW50bzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M0XFxcIjsgfVxcblxcbi5mYS1tYWdpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQwXFxcIjsgfVxcblxcbi5mYS1tYWduZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7IH1cXG5cXG4uZmEtbWFpbC1idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NzRcXFwiOyB9XFxuXFxuLmZhLW1haWxjaGltcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTllXFxcIjsgfVxcblxcbi5mYS1tYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODNcXFwiOyB9XFxuXFxuLmZhLW1hbmRhbG9yaWFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MGZcXFwiOyB9XFxuXFxuLmZhLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjc5XFxcIjsgfVxcblxcbi5mYS1tYXAtbWFya2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWZcXFwiOyB9XFxuXFxuLmZhLW1hcC1tYXJrZWQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTBcXFwiOyB9XFxuXFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MVxcXCI7IH1cXG5cXG4uZmEtbWFwLW1hcmtlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7IH1cXG5cXG4uZmEtbWFwLXBpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjc2XFxcIjsgfVxcblxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3N1xcXCI7IH1cXG5cXG4uZmEtbWFya2Rvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYwZlxcXCI7IH1cXG5cXG4uZmEtbWFya2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTFcXFwiOyB9XFxuXFxuLmZhLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyMlxcXCI7IH1cXG5cXG4uZmEtbWFycy1kb3VibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyN1xcXCI7IH1cXG5cXG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyOVxcXCI7IH1cXG5cXG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjJiXFxcIjsgfVxcblxcbi5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMmFcXFwiOyB9XFxuXFxuLmZhLW1hc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZmYVxcXCI7IH1cXG5cXG4uZmEtbWFzdG9kb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmNlxcXCI7IH1cXG5cXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzZcXFwiOyB9XFxuXFxuLmZhLW1kYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGNhXFxcIjsgfVxcblxcbi5mYS1tZWRhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWEyXFxcIjsgfVxcblxcbi5mYS1tZWRhcHBzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYzZcXFwiOyB9XFxuXFxuLmZhLW1lZGl1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjNhXFxcIjsgfVxcblxcbi5mYS1tZWRpdW0tbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M3XFxcIjsgfVxcblxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmYVxcXCI7IH1cXG5cXG4uZmEtbWVkcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjOFxcXCI7IH1cXG5cXG4uZmEtbWVldHVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZTBcXFwiOyB9XFxuXFxuLmZhLW1lZ2Fwb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTNcXFwiOyB9XFxuXFxuLmZhLW1laDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTFhXFxcIjsgfVxcblxcbi5mYS1tZWgtYmxhbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhNFxcXCI7IH1cXG5cXG4uZmEtbWVoLXJvbGxpbmctZXllczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWE1XFxcIjsgfVxcblxcbi5mYS1tZW1vcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzOFxcXCI7IH1cXG5cXG4uZmEtbWVuZGVsZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiM1xcXCI7IH1cXG5cXG4uZmEtbWVub3JhaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjc2XFxcIjsgfVxcblxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjNcXFwiOyB9XFxuXFxuLmZhLW1ldGVvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzUzXFxcIjsgfVxcblxcbi5mYS1taWNyb2Jsb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTAxYVxcXCI7IH1cXG5cXG4uZmEtbWljcm9jaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZGJcXFwiOyB9XFxuXFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzMFxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjOVxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZS1hbHQtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzOVxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTMxXFxcIjsgfVxcblxcbi5mYS1taWNyb3Njb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MTBcXFwiOyB9XFxuXFxuLmZhLW1pY3Jvc29mdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2NhXFxcIjsgfVxcblxcbi5mYS1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY4XFxcIjsgfVxcblxcbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7IH1cXG5cXG4uZmEtbWludXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDZcXFwiOyB9XFxuXFxuLmZhLW1pdHRlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2I1XFxcIjsgfVxcblxcbi5mYS1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjYlxcXCI7IH1cXG5cXG4uZmEtbWl4Y2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4OVxcXCI7IH1cXG5cXG4uZmEtbWl4ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1NlxcXCI7IH1cXG5cXG4uZmEtbWl6dW5pOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzY2NcXFwiOyB9XFxuXFxuLmZhLW1vYmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBiXFxcIjsgfVxcblxcbi5mYS1tb2JpbGUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzY2RcXFwiOyB9XFxuXFxuLmZhLW1vZHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4NVxcXCI7IH1cXG5cXG4uZmEtbW9uZXJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDBcXFwiOyB9XFxuXFxuLmZhLW1vbmV5LWJpbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNlxcXCI7IH1cXG5cXG4uZmEtbW9uZXktYmlsbC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkMVxcXCI7IH1cXG5cXG4uZmEtbW9uZXktYmlsbC13YXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1M2FcXFwiOyB9XFxuXFxuLmZhLW1vbmV5LWJpbGwtd2F2ZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzYlxcXCI7IH1cXG5cXG4uZmEtbW9uZXktY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzY1xcXCI7IH1cXG5cXG4uZmEtbW9uZXktY2hlY2stYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1M2RcXFwiOyB9XFxuXFxuLmZhLW1vbnVtZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTZcXFwiOyB9XFxuXFxuLmZhLW1vb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NlxcXCI7IH1cXG5cXG4uZmEtbW9ydGFyLXBlc3RsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWE3XFxcIjsgfVxcblxcbi5mYS1tb3NxdWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY3OFxcXCI7IH1cXG5cXG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjFjXFxcIjsgfVxcblxcbi5mYS1tb3VudGFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmZjXFxcIjsgfVxcblxcbi5mYS1tb3VzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGNjXFxcIjsgfVxcblxcbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDVcXFwiOyB9XFxuXFxuLmZhLW11Zy1ob3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiNlxcXCI7IH1cXG5cXG4uZmEtbXVzaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMVxcXCI7IH1cXG5cXG4uZmEtbmFwc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2QyXFxcIjsgfVxcblxcbi5mYS1uZW9zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MTJcXFwiOyB9XFxuXFxuLmZhLW5ldHdvcmstd2lyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZmZlxcXCI7IH1cXG5cXG4uZmEtbmV1dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMmNcXFwiOyB9XFxuXFxuLmZhLW5ld3NwYXBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWVhXFxcIjsgfVxcblxcbi5mYS1uaW1ibHI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhOFxcXCI7IH1cXG5cXG4uZmEtbm9kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDE5XFxcIjsgfVxcblxcbi5mYS1ub2RlLWpzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDNcXFwiOyB9XFxuXFxuLmZhLW5vdC1lcXVhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTNlXFxcIjsgfVxcblxcbi5mYS1ub3Rlcy1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ODFcXFwiOyB9XFxuXFxuLmZhLW5wbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q0XFxcIjsgfVxcblxcbi5mYS1uczg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkNVxcXCI7IH1cXG5cXG4uZmEtbnV0cml0aW9uaXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkNlxcXCI7IH1cXG5cXG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDdcXFwiOyB9XFxuXFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDhcXFwiOyB9XFxuXFxuLmZhLW9jdG9wdXMtZGVwbG95OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwODJcXFwiOyB9XFxuXFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2M1xcXCI7IH1cXG5cXG4uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2NFxcXCI7IH1cXG5cXG4uZmEtb2lsLWNhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjEzXFxcIjsgfVxcblxcbi5mYS1vbGQtcmVwdWJsaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxMFxcXCI7IH1cXG5cXG4uZmEtb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY3OVxcXCI7IH1cXG5cXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzZFxcXCI7IH1cXG5cXG4uZmEtb3BlbmlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOWJcXFwiOyB9XFxuXFxuLmZhLW9wZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNmFcXFwiOyB9XFxuXFxuLmZhLW9wdGluLW1vbnN0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzY1xcXCI7IH1cXG5cXG4uZmEtb3JjaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhkMlxcXCI7IH1cXG5cXG4uZmEtb3NpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MWFcXFwiOyB9XFxuXFxuLmZhLW90dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MDBcXFwiOyB9XFxuXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzYlxcXCI7IH1cXG5cXG4uZmEtcGFnZTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkN1xcXCI7IH1cXG5cXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGNcXFwiOyB9XFxuXFxuLmZhLXBhZ2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MTVcXFwiOyB9XFxuXFxuLmZhLXBhaW50LWJydXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmNcXFwiOyB9XFxuXFxuLmZhLXBhaW50LXJvbGxlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWFhXFxcIjsgfVxcblxcbi5mYS1wYWxldHRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1M2ZcXFwiOyB9XFxuXFxuLmZhLXBhbGZlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q4XFxcIjsgfVxcblxcbi5mYS1wYWxsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4MlxcXCI7IH1cXG5cXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkOFxcXCI7IH1cXG5cXG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzZcXFwiOyB9XFxuXFxuLmZhLXBhcmFjaHV0ZS1ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRjZFxcXCI7IH1cXG5cXG4uZmEtcGFyYWdyYXBoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZGRcXFwiOyB9XFxuXFxuLmZhLXBhcmtpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0MFxcXCI7IH1cXG5cXG4uZmEtcGFzc3BvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhYlxcXCI7IH1cXG5cXG4uZmEtcGFzdGFmYXJpYW5pc206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY3YlxcXCI7IH1cXG5cXG4uZmEtcGFzdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYVxcXCI7IH1cXG5cXG4uZmEtcGF0cmVvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q5XFxcIjsgfVxcblxcbi5mYS1wYXVzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRjXFxcIjsgfVxcblxcbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4YlxcXCI7IH1cXG5cXG4uZmEtcGF3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjBcXFwiOyB9XFxuXFxuLmZhLXBheXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWVkXFxcIjsgfVxcblxcbi5mYS1wZWFjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjdjXFxcIjsgfVxcblxcbi5mYS1wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwNFxcXCI7IH1cXG5cXG4uZmEtcGVuLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzA1XFxcIjsgfVxcblxcbi5mYS1wZW4tZmFuY3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhY1xcXCI7IH1cXG5cXG4uZmEtcGVuLW5pYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWFkXFxcIjsgfVxcblxcbi5mYS1wZW4tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGJcXFwiOyB9XFxuXFxuLmZhLXBlbmNpbC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwM1xcXCI7IH1cXG5cXG4uZmEtcGVuY2lsLXJ1bGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YWVcXFwiOyB9XFxuXFxuLmZhLXBlbm55LWFyY2FkZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzA0XFxcIjsgfVxcblxcbi5mYS1wZW9wbGUtYXJyb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjhcXFwiOyB9XFxuXFxuLmZhLXBlb3BsZS1jYXJyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGNlXFxcIjsgfVxcblxcbi5mYS1wZXBwZXItaG90OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MTZcXFwiOyB9XFxuXFxuLmZhLXBlcmJ5dGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4M1xcXCI7IH1cXG5cXG4uZmEtcGVyY2VudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk1XFxcIjsgfVxcblxcbi5mYS1wZXJjZW50YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NDFcXFwiOyB9XFxuXFxuLmZhLXBlcmlzY29wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2RhXFxcIjsgfVxcblxcbi5mYS1wZXJzb24tYm9vdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc1NlxcXCI7IH1cXG5cXG4uZmEtcGhhYnJpY2F0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkYlxcXCI7IH1cXG5cXG4uZmEtcGhvZW5peC1mcmFtZXdvcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkY1xcXCI7IH1cXG5cXG4uZmEtcGhvZW5peC1zcXVhZHJvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTExXFxcIjsgfVxcblxcbi5mYS1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjsgfVxcblxcbi5mYS1waG9uZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg3OVxcXCI7IH1cXG5cXG4uZmEtcGhvbmUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkZFxcXCI7IH1cXG5cXG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOThcXFwiOyB9XFxuXFxuLmZhLXBob25lLXNxdWFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg3YlxcXCI7IH1cXG5cXG4uZmEtcGhvbmUtdm9sdW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTBcXFwiOyB9XFxuXFxuLmZhLXBob3RvLXZpZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4N2NcXFwiOyB9XFxuXFxuLmZhLXBocDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDU3XFxcIjsgfVxcblxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWVcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYThcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXItaGF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZTVcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXItcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhN1xcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTAxZVxcXCI7IH1cXG5cXG4uZmEtcGlnZ3ktYmFuazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGQzXFxcIjsgfVxcblxcbi5mYS1waWxsczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDg0XFxcIjsgfVxcblxcbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMlxcXCI7IH1cXG5cXG4uZmEtcGludGVyZXN0LXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzMVxcXCI7IH1cXG5cXG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQzXFxcIjsgfVxcblxcbi5mYS1waXp6YS1zbGljZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODE4XFxcIjsgfVxcblxcbi5mYS1wbGFjZS1vZi13b3JzaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2N2ZcXFwiOyB9XFxuXFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiOyB9XFxuXFxuLmZhLXBsYW5lLWFycml2YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhZlxcXCI7IH1cXG5cXG4uZmEtcGxhbmUtZGVwYXJ0dXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjBcXFwiOyB9XFxuXFxuLmZhLXBsYW5lLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjlcXFwiOyB9XFxuXFxuLmZhLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YlxcXCI7IH1cXG5cXG4uZmEtcGxheS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0NFxcXCI7IH1cXG5cXG4uZmEtcGxheXN0YXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkZlxcXCI7IH1cXG5cXG4uZmEtcGx1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU2XFxcIjsgfVxcblxcbi5mYS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjdcXFwiOyB9XFxuXFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiOyB9XFxuXFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiOyB9XFxuXFxuLmZhLXBvZGNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjZVxcXCI7IH1cXG5cXG4uZmEtcG9sbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjgxXFxcIjsgfVxcblxcbi5mYS1wb2xsLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY4MlxcXCI7IH1cXG5cXG4uZmEtcG9vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZmVcXFwiOyB9XFxuXFxuLmZhLXBvby1zdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzVhXFxcIjsgfVxcblxcbi5mYS1wb29wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MTlcXFwiOyB9XFxuXFxuLmZhLXBvcnRyYWl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTBcXFwiOyB9XFxuXFxuLmZhLXBvdW5kLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1NFxcXCI7IH1cXG5cXG4uZmEtcG93ZXItb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTFcXFwiOyB9XFxuXFxuLmZhLXByYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY4M1xcXCI7IH1cXG5cXG4uZmEtcHJheWluZy1oYW5kczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjg0XFxcIjsgfVxcblxcbi5mYS1wcmVzY3JpcHRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViMVxcXCI7IH1cXG5cXG4uZmEtcHJlc2NyaXB0aW9uLWJvdHRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDg1XFxcIjsgfVxcblxcbi5mYS1wcmVzY3JpcHRpb24tYm90dGxlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDg2XFxcIjsgfVxcblxcbi5mYS1wcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJmXFxcIjsgfVxcblxcbi5mYS1wcm9jZWR1cmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ODdcXFwiOyB9XFxuXFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg4XFxcIjsgfVxcblxcbi5mYS1wcm9qZWN0LWRpYWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0MlxcXCI7IH1cXG5cXG4uZmEtcHVtcC1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNmFcXFwiOyB9XFxuXFxuLmZhLXB1bXAtc29hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDZiXFxcIjsgfVxcblxcbi5mYS1wdXNoZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlMVxcXCI7IH1cXG5cXG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmVcXFwiOyB9XFxuXFxuLmZhLXB5dGhvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2UyXFxcIjsgfVxcblxcbi5mYS1xcTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ2XFxcIjsgfVxcblxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7IH1cXG5cXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyOFxcXCI7IH1cXG5cXG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTlcXFwiOyB9XFxuXFxuLmZhLXF1aWRkaXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDU4XFxcIjsgfVxcblxcbi5mYS1xdWluc2NhcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1OVxcXCI7IH1cXG5cXG4uZmEtcXVvcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjNFxcXCI7IH1cXG5cXG4uZmEtcXVvdGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBkXFxcIjsgfVxcblxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBlXFxcIjsgfVxcblxcbi5mYS1xdXJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjg3XFxcIjsgfVxcblxcbi5mYS1yLXByb2plY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmN1xcXCI7IH1cXG5cXG4uZmEtcmFkaWF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YjlcXFwiOyB9XFxuXFxuLmZhLXJhZGlhdGlvbi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiYVxcXCI7IH1cXG5cXG4uZmEtcmFpbmJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzViXFxcIjsgfVxcblxcbi5mYS1yYW5kb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NFxcXCI7IH1cXG5cXG4uZmEtcmFzcGJlcnJ5LXBpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YmJcXFwiOyB9XFxuXFxuLmZhLXJhdmVscnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkOVxcXCI7IH1cXG5cXG4uZmEtcmVhY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxYlxcXCI7IH1cXG5cXG4uZmEtcmVhY3RldXJvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc1ZFxcXCI7IH1cXG5cXG4uZmEtcmVhZG1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZDVcXFwiOyB9XFxuXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDBcXFwiOyB9XFxuXFxuLmZhLXJlY2VpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0M1xcXCI7IH1cXG5cXG4uZmEtcmVjb3JkLXZpbnlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ZDlcXFwiOyB9XFxuXFxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiOFxcXCI7IH1cXG5cXG4uZmEtcmVkLXJpdmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTNcXFwiOyB9XFxuXFxuLmZhLXJlZGRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWExXFxcIjsgfVxcblxcbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4MVxcXCI7IH1cXG5cXG4uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWEyXFxcIjsgfVxcblxcbi5mYS1yZWRoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiY1xcXCI7IH1cXG5cXG4uZmEtcmVkbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjsgfVxcblxcbi5mYS1yZWRvLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmY5XFxcIjsgfVxcblxcbi5mYS1yZWdpc3RlcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNWRcXFwiOyB9XFxuXFxuLmZhLXJlbW92ZS1mb3JtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg3ZFxcXCI7IH1cXG5cXG4uZmEtcmVucmVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGJcXFwiOyB9XFxuXFxuLmZhLXJlcGx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTVcXFwiOyB9XFxuXFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTIyXFxcIjsgfVxcblxcbi5mYS1yZXBseWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlNlxcXCI7IH1cXG5cXG4uZmEtcmVwdWJsaWNhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzVlXFxcIjsgfVxcblxcbi5mYS1yZXNlYXJjaGdhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmOFxcXCI7IH1cXG5cXG4uZmEtcmVzb2x2aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTdcXFwiOyB9XFxuXFxuLmZhLXJlc3Ryb29tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YmRcXFwiOyB9XFxuXFxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3OVxcXCI7IH1cXG5cXG4uZmEtcmV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjJcXFwiOyB9XFxuXFxuLmZhLXJpYmJvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGQ2XFxcIjsgfVxcblxcbi5mYS1yaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MGJcXFwiOyB9XFxuXFxuLmZhLXJvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOFxcXCI7IH1cXG5cXG4uZmEtcm9ib3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0NFxcXCI7IH1cXG5cXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzVcXFwiOyB9XFxuXFxuLmZhLXJvY2tldGNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlOFxcXCI7IH1cXG5cXG4uZmEtcm9ja3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2U5XFxcIjsgfVxcblxcbi5mYS1yb3V0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGQ3XFxcIjsgfVxcblxcbi5mYS1yc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7IH1cXG5cXG4uZmEtcnNzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQzXFxcIjsgfVxcblxcbi5mYS1ydWJsZS1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNThcXFwiOyB9XFxuXFxuLmZhLXJ1bGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NDVcXFwiOyB9XFxuXFxuLmZhLXJ1bGVyLWNvbWJpbmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NDZcXFwiOyB9XFxuXFxuLmZhLXJ1bGVyLWhvcml6b250YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0N1xcXCI7IH1cXG5cXG4uZmEtcnVsZXItdmVydGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0OFxcXCI7IH1cXG5cXG4uZmEtcnVubmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzBjXFxcIjsgfVxcblxcbi5mYS1ydXBlZS1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTZcXFwiOyB9XFxuXFxuLmZhLXJ1c3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3YVxcXCI7IH1cXG5cXG4uZmEtc2FkLWNyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWIzXFxcIjsgfVxcblxcbi5mYS1zYWQtdGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWI0XFxcIjsgfVxcblxcbi5mYS1zYWZhcmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2N1xcXCI7IH1cXG5cXG4uZmEtc2FsZXNmb3JjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODNiXFxcIjsgfVxcblxcbi5mYS1zYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MWVcXFwiOyB9XFxuXFxuLmZhLXNhdGVsbGl0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2JmXFxcIjsgfVxcblxcbi5mYS1zYXRlbGxpdGUtZGlzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2MwXFxcIjsgfVxcblxcbi5mYS1zYXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzdcXFwiOyB9XFxuXFxuLmZhLXNjaGxpeDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2VhXFxcIjsgfVxcblxcbi5mYS1zY2hvb2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0OVxcXCI7IH1cXG5cXG4uZmEtc2NyZXdkcml2ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0YVxcXCI7IH1cXG5cXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOGFcXFwiOyB9XFxuXFxuLmZhLXNjcm9sbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzBlXFxcIjsgfVxcblxcbi5mYS1zZC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YzJcXFwiOyB9XFxuXFxuLmZhLXNlYXJjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjsgfVxcblxcbi5mYS1zZWFyY2gtZG9sbGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ODhcXFwiOyB9XFxuXFxuLmZhLXNlYXJjaC1sb2NhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjg5XFxcIjsgfVxcblxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoZW5naW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlYlxcXCI7IH1cXG5cXG4uZmEtc2VlZGxpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRkOFxcXCI7IH1cXG5cXG4uZmEtc2VsbGNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkYVxcXCI7IH1cXG5cXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTNcXFwiOyB9XFxuXFxuLmZhLXNlcnZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjMzXFxcIjsgfVxcblxcbi5mYS1zZXJ2aWNlc3RhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlY1xcXCI7IH1cXG5cXG4uZmEtc2hhcGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MWZcXFwiOyB9XFxuXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiOyB9XFxuXFxuLmZhLXNoYXJlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWUwXFxcIjsgfVxcblxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTFcXFwiOyB9XFxuXFxuLmZhLXNoYXJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTRkXFxcIjsgfVxcblxcbi5mYS1zaGVrZWwtc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjBiXFxcIjsgfVxcblxcbi5mYS1zaGllbGQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZWRcXFwiOyB9XFxuXFxuLmZhLXNoaWVsZC12aXJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDZjXFxcIjsgfVxcblxcbi5mYS1zaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWFcXFwiOyB9XFxuXFxuLmZhLXNoaXBwaW5nLWZhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4YlxcXCI7IH1cXG5cXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTRcXFwiOyB9XFxuXFxuLmZhLXNob2UtcHJpbnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NGJcXFwiOyB9XFxuXFxuLmZhLXNob3BpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1N1xcXCI7IH1cXG5cXG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTBcXFwiOyB9XFxuXFxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjkxXFxcIjsgfVxcblxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2FcXFwiOyB9XFxuXFxuLmZhLXNob3B3YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjVcXFwiOyB9XFxuXFxuLmZhLXNob3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNjXFxcIjsgfVxcblxcbi5mYS1zaHV0dGxlLXZhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWI2XFxcIjsgfVxcblxcbi5mYS1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZDlcXFwiOyB9XFxuXFxuLmZhLXNpZ24taW4tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZjZcXFwiOyB9XFxuXFxuLmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhN1xcXCI7IH1cXG5cXG4uZmEtc2lnbi1vdXQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZjVcXFwiOyB9XFxuXFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEyXFxcIjsgfVxcblxcbi5mYS1zaWduYXR1cmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViN1xcXCI7IH1cXG5cXG4uZmEtc2ltLWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjNFxcXCI7IH1cXG5cXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxNVxcXCI7IH1cXG5cXG4uZmEtc2luazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDZkXFxcIjsgfVxcblxcbi5mYS1zaXN0cml4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZWVcXFwiOyB9XFxuXFxuLmZhLXNpdGVtYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlOFxcXCI7IH1cXG5cXG4uZmEtc2l0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTEyXFxcIjsgfVxcblxcbi5mYS1za2F0aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YzVcXFwiOyB9XFxuXFxuLmZhLXNrZXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2M2XFxcIjsgfVxcblxcbi5mYS1za2lpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjOVxcXCI7IH1cXG5cXG4uZmEtc2tpaW5nLW5vcmRpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2NhXFxcIjsgfVxcblxcbi5mYS1za3VsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTRjXFxcIjsgfVxcblxcbi5mYS1za3VsbC1jcm9zc2JvbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MTRcXFwiOyB9XFxuXFxuLmZhLXNreWF0bGFzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTZcXFwiOyB9XFxuXFxuLmZhLXNreXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2VcXFwiOyB9XFxuXFxuLmZhLXNsYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOThcXFwiOyB9XFxuXFxuLmZhLXNsYWNrLWhhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlZlxcXCI7IH1cXG5cXG4uZmEtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcxNVxcXCI7IH1cXG5cXG4uZmEtc2xlaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3Y2NcXFwiOyB9XFxuXFxuLmZhLXNsaWRlcnMtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRlXFxcIjsgfVxcblxcbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTdcXFwiOyB9XFxuXFxuLmZhLXNtaWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMThcXFwiOyB9XFxuXFxuLmZhLXNtaWxlLWJlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViOFxcXCI7IH1cXG5cXG4uZmEtc21pbGUtd2luazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGRhXFxcIjsgfVxcblxcbi5mYS1zbW9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NWZcXFwiOyB9XFxuXFxuLmZhLXNtb2tpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4ZFxcXCI7IH1cXG5cXG4uZmEtc21va2luZy1iYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0ZFxcXCI7IH1cXG5cXG4uZmEtc21zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3Y2RcXFwiOyB9XFxuXFxuLmZhLXNuYXBjaGF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWJcXFwiOyB9XFxuXFxuLmZhLXNuYXBjaGF0LWdob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWNcXFwiOyB9XFxuXFxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmFkXFxcIjsgfVxcblxcbi5mYS1zbm93Ym9hcmRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjZVxcXCI7IH1cXG5cXG4uZmEtc25vd2ZsYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZGNcXFwiOyB9XFxuXFxuLmZhLXNub3dtYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkMFxcXCI7IH1cXG5cXG4uZmEtc25vd3Bsb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkMlxcXCI7IH1cXG5cXG4uZmEtc29hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDZlXFxcIjsgfVxcblxcbi5mYS1zb2NrczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjk2XFxcIjsgfVxcblxcbi5mYS1zb2xhci1wYW5lbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWJhXFxcIjsgfVxcblxcbi5mYS1zb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGNcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYWxwaGEtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTVkXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFscGhhLWRvd24tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ODFcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYWxwaGEtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1ZVxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbHBoYS11cC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg4MlxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbW91bnQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTYwXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC1kb3duLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODg0XFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTYxXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC11cC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg4NVxcXCI7IH1cXG5cXG4uZmEtc29ydC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGRcXFwiOyB9XFxuXFxuLmZhLXNvcnQtbnVtZXJpYy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjJcXFwiOyB9XFxuXFxuLmZhLXNvcnQtbnVtZXJpYy1kb3duLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODg2XFxcIjsgfVxcblxcbi5mYS1zb3J0LW51bWVyaWMtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2M1xcXCI7IH1cXG5cXG4uZmEtc29ydC1udW1lcmljLXVwLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODg3XFxcIjsgfVxcblxcbi5mYS1zb3J0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGVcXFwiOyB9XFxuXFxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiZVxcXCI7IH1cXG5cXG4uZmEtc291cmNldHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2QzXFxcIjsgfVxcblxcbi5mYS1zcGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViYlxcXCI7IH1cXG5cXG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk3XFxcIjsgfVxcblxcbi5mYS1zcGVha2FwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZjNcXFwiOyB9XFxuXFxuLmZhLXNwZWFrZXItZGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODNjXFxcIjsgfVxcblxcbi5mYS1zcGVsbC1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODkxXFxcIjsgfVxcblxcbi5mYS1zcGlkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcxN1xcXCI7IH1cXG5cXG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTEwXFxcIjsgfVxcblxcbi5mYS1zcGxvdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YmNcXFwiOyB9XFxuXFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiY1xcXCI7IH1cXG5cXG4uZmEtc3ByYXktY2FuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YmRcXFwiOyB9XFxuXFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM4XFxcIjsgfVxcblxcbi5mYS1zcXVhcmUtZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDVjXFxcIjsgfVxcblxcbi5mYS1zcXVhcmUtcm9vdC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY5OFxcXCI7IH1cXG5cXG4uZmEtc3F1YXJlc3BhY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViZVxcXCI7IH1cXG5cXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4ZFxcXCI7IH1cXG5cXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2Y1xcXCI7IH1cXG5cXG4uZmEtc3RhY2twYXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4NDJcXFwiOyB9XFxuXFxuLmZhLXN0YW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YmZcXFwiOyB9XFxuXFxuLmZhLXN0YXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7IH1cXG5cXG4uZmEtc3Rhci1hbmQtY3Jlc2NlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY5OVxcXCI7IH1cXG5cXG4uZmEtc3Rhci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODlcXFwiOyB9XFxuXFxuLmZhLXN0YXItaGFsZi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjMFxcXCI7IH1cXG5cXG4uZmEtc3Rhci1vZi1kYXZpZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjlhXFxcIjsgfVxcblxcbi5mYS1zdGFyLW9mLWxpZmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYyMVxcXCI7IH1cXG5cXG4uZmEtc3RheWxpbmtlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Y1XFxcIjsgfVxcblxcbi5mYS1zdGVhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWI2XFxcIjsgfVxcblxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiN1xcXCI7IH1cXG5cXG4uZmEtc3RlYW0tc3ltYm9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZjZcXFwiOyB9XFxuXFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0OFxcXCI7IH1cXG5cXG4uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTFcXFwiOyB9XFxuXFxuLmZhLXN0ZXRob3Njb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjFcXFwiOyB9XFxuXFxuLmZhLXN0aWNrZXItbXVsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Y3XFxcIjsgfVxcblxcbi5mYS1zdGlja3ktbm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQ5XFxcIjsgfVxcblxcbi5mYS1zdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGRcXFwiOyB9XFxuXFxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOGRcXFwiOyB9XFxuXFxuLmZhLXN0b3B3YXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmYyXFxcIjsgfVxcblxcbi5mYS1zdG9wd2F0Y2gtMjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2ZlxcXCI7IH1cXG5cXG4uZmEtc3RvcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0ZVxcXCI7IH1cXG5cXG4uZmEtc3RvcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NGZcXFwiOyB9XFxuXFxuLmZhLXN0b3JlLWFsdC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDcwXFxcIjsgfVxcblxcbi5mYS1zdG9yZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDcxXFxcIjsgfVxcblxcbi5mYS1zdHJhdmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyOFxcXCI7IH1cXG5cXG4uZmEtc3RyZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTBcXFwiOyB9XFxuXFxuLmZhLXN0cmVldC12aWV3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWRcXFwiOyB9XFxuXFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjY1xcXCI7IH1cXG5cXG4uZmEtc3RyaXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MjlcXFwiOyB9XFxuXFxuLmZhLXN0cmlwZS1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MmFcXFwiOyB9XFxuXFxuLmZhLXN0cm9vcHdhZmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTFcXFwiOyB9XFxuXFxuLmZhLXN0dWRpb3ZpbmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Y4XFxcIjsgfVxcblxcbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE0XFxcIjsgfVxcblxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhM1xcXCI7IH1cXG5cXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmNcXFwiOyB9XFxuXFxuLmZhLXN1YndheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM5XFxcIjsgfVxcblxcbi5mYS1zdWl0Y2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGYyXFxcIjsgfVxcblxcbi5mYS1zdWl0Y2FzZS1yb2xsaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzFcXFwiOyB9XFxuXFxuLmZhLXN1bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg1XFxcIjsgfVxcblxcbi5mYS1zdXBlcnBvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmRkXFxcIjsgfVxcblxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTJiXFxcIjsgfVxcblxcbi5mYS1zdXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmOVxcXCI7IH1cXG5cXG4uZmEtc3VycHJpc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjMlxcXCI7IH1cXG5cXG4uZmEtc3VzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2Q2XFxcIjsgfVxcblxcbi5mYS1zd2F0Y2hib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzNcXFwiOyB9XFxuXFxuLmZhLXN3aWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ZTFcXFwiOyB9XFxuXFxuLmZhLXN3aW1tZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjNFxcXCI7IH1cXG5cXG4uZmEtc3dpbW1pbmctcG9vbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWM1XFxcIjsgfVxcblxcbi5mYS1zeW1mb255OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2RcXFwiOyB9XFxuXFxuLmZhLXN5bmFnb2d1ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjliXFxcIjsgfVxcblxcbi5mYS1zeW5jOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiOyB9XFxuXFxuLmZhLXN5bmMtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZjFcXFwiOyB9XFxuXFxuLmZhLXN5cmluZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4ZVxcXCI7IH1cXG5cXG4uZmEtdGFibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZVxcXCI7IH1cXG5cXG4uZmEtdGFibGUtdGVubmlzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NWRcXFwiOyB9XFxuXFxuLmZhLXRhYmxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBhXFxcIjsgfVxcblxcbi5mYS10YWJsZXQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZmFcXFwiOyB9XFxuXFxuLmZhLXRhYmxldHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ5MFxcXCI7IH1cXG5cXG4uZmEtdGFjaG9tZXRlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmZFxcXCI7IH1cXG5cXG4uZmEtdGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiOyB9XFxuXFxuLmZhLXRhZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyY1xcXCI7IH1cXG5cXG4uZmEtdGFwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGRiXFxcIjsgfVxcblxcbi5mYS10YXNrczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFlXFxcIjsgfVxcblxcbi5mYS10YXhpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYmFcXFwiOyB9XFxuXFxuLmZhLXRlYW1zcGVhazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY5XFxcIjsgfVxcblxcbi5mYS10ZWV0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjJlXFxcIjsgfVxcblxcbi5mYS10ZWV0aC1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MmZcXFwiOyB9XFxuXFxuLmZhLXRlbGVncmFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzZcXFwiOyB9XFxuXFxuLmZhLXRlbGVncmFtLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZmVcXFwiOyB9XFxuXFxuLmZhLXRlbXBlcmF0dXJlLWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc2OVxcXCI7IH1cXG5cXG4uZmEtdGVtcGVyYXR1cmUtbG93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NmJcXFwiOyB9XFxuXFxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkNVxcXCI7IH1cXG5cXG4uZmEtdGVuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkN1xcXCI7IH1cXG5cXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyMFxcXCI7IH1cXG5cXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNFxcXCI7IH1cXG5cXG4uZmEtdGV4dC13aWR0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM1XFxcIjsgfVxcblxcbi5mYS10aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjsgfVxcblxcbi5mYS10aC1sYXJnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjsgfVxcblxcbi5mYS10aC1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiOyB9XFxuXFxuLmZhLXRoZS1yZWQteWV0aTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjlkXFxcIjsgfVxcblxcbi5mYS10aGVhdGVyLW1hc2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MzBcXFwiOyB9XFxuXFxuLmZhLXRoZW1lY286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjNlxcXCI7IH1cXG5cXG4uZmEtdGhlbWVpc2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjJcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0OTFcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyY2JcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjN1xcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmM5XFxcIjsgfVxcblxcbi5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyY2FcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzhcXFwiOyB9XFxuXFxuLmZhLXRoaW5rLXBlYWtzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MzFcXFwiOyB9XFxuXFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjVcXFwiOyB9XFxuXFxuLmZhLXRodW1icy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTY0XFxcIjsgfVxcblxcbi5mYS10aHVtYnRhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZFxcXCI7IH1cXG5cXG4uZmEtdGlja2V0LWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2ZmXFxcIjsgfVxcblxcbi5mYS10aWt0b2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3YlxcXCI7IH1cXG5cXG4uZmEtdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7IH1cXG5cXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiOyB9XFxuXFxuLmZhLXRpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0M1xcXCI7IH1cXG5cXG4uZmEtdGludC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWM3XFxcIjsgfVxcblxcbi5mYS10aXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWM4XFxcIjsgfVxcblxcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDRcXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjA1XFxcIjsgfVxcblxcbi5mYS10b2lsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkOFxcXCI7IH1cXG5cXG4uZmEtdG9pbGV0LXBhcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MWVcXFwiOyB9XFxuXFxuLmZhLXRvaWxldC1wYXBlci1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDcyXFxcIjsgfVxcblxcbi5mYS10b29sYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTJcXFwiOyB9XFxuXFxuLmZhLXRvb2xzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZDlcXFwiOyB9XFxuXFxuLmZhLXRvb3RoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzlcXFwiOyB9XFxuXFxuLmZhLXRvcmFoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YTBcXFwiOyB9XFxuXFxuLmZhLXRvcmlpLWdhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhMVxcXCI7IH1cXG5cXG4uZmEtdHJhY3RvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzIyXFxcIjsgfVxcblxcbi5mYS10cmFkZS1mZWRlcmF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTNcXFwiOyB9XFxuXFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjVjXFxcIjsgfVxcblxcbi5mYS10cmFmZmljLWxpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MzdcXFwiOyB9XFxuXFxuLmZhLXRyYWlsZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA0MVxcXCI7IH1cXG5cXG4uZmEtdHJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzOFxcXCI7IH1cXG5cXG4uZmEtdHJhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2RhXFxcIjsgfVxcblxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI0XFxcIjsgfVxcblxcbi5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyNVxcXCI7IH1cXG5cXG4uZmEtdHJhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmOFxcXCI7IH1cXG5cXG4uZmEtdHJhc2gtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZWRcXFwiOyB9XFxuXFxuLmZhLXRyYXNoLXJlc3RvcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgyOVxcXCI7IH1cXG5cXG4uZmEtdHJhc2gtcmVzdG9yZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgyYVxcXCI7IH1cXG5cXG4uZmEtdHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWJiXFxcIjsgfVxcblxcbi5mYS10cmVsbG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4MVxcXCI7IH1cXG5cXG4uZmEtdHJpcGFkdmlzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2MlxcXCI7IH1cXG5cXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTFcXFwiOyB9XFxuXFxuLmZhLXRydWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDFcXFwiOyB9XFxuXFxuLmZhLXRydWNrLWxvYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRkZVxcXCI7IH1cXG5cXG4uZmEtdHJ1Y2stbW9uc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjNiXFxcIjsgfVxcblxcbi5mYS10cnVjay1tb3Zpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRkZlxcXCI7IH1cXG5cXG4uZmEtdHJ1Y2stcGlja3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2M2NcXFwiOyB9XFxuXFxuLmZhLXRzaGlydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTUzXFxcIjsgfVxcblxcbi5mYS10dHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlNFxcXCI7IH1cXG5cXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzNcXFwiOyB9XFxuXFxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3NFxcXCI7IH1cXG5cXG4uZmEtdHY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2Y1xcXCI7IH1cXG5cXG4uZmEtdHdpdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZThcXFwiOyB9XFxuXFxuLmZhLXR3aXR0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OVxcXCI7IH1cXG5cXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MVxcXCI7IH1cXG5cXG4uZmEtdHlwbzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyYlxcXCI7IH1cXG5cXG4uZmEtdWJlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDAyXFxcIjsgfVxcblxcbi5mYS11YnVudHU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkZlxcXCI7IH1cXG5cXG4uZmEtdWlraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwM1xcXCI7IH1cXG5cXG4uZmEtdW1icmFjbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGU4XFxcIjsgfVxcblxcbi5mYS11bWJyZWxsYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU5XFxcIjsgfVxcblxcbi5mYS11bWJyZWxsYS1iZWFjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWNhXFxcIjsgfVxcblxcbi5mYS11bmNoYXJ0ZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4NFxcXCI7IH1cXG5cXG4uZmEtdW5kZXJsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2RcXFwiOyB9XFxuXFxuLmZhLXVuZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMlxcXCI7IH1cXG5cXG4uZmEtdW5kby1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJlYVxcXCI7IH1cXG5cXG4uZmEtdW5pcmVnaXN0cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwNFxcXCI7IH1cXG5cXG4uZmEtdW5pdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA0OVxcXCI7IH1cXG5cXG4uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjlhXFxcIjsgfVxcblxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOWNcXFwiOyB9XFxuXFxuLmZhLXVubGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI3XFxcIjsgfVxcblxcbi5mYS11bmxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7IH1cXG5cXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTNlXFxcIjsgfVxcblxcbi5mYS11bnNwbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDdjXFxcIjsgfVxcblxcbi5mYS11bnRhcHBkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MDVcXFwiOyB9XFxuXFxuLmZhLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkzXFxcIjsgfVxcblxcbi5mYS11cHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdlMFxcXCI7IH1cXG5cXG4uZmEtdXNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyODdcXFwiOyB9XFxuXFxuLmZhLXVzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwN1xcXCI7IH1cXG5cXG4uZmEtdXNlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwNlxcXCI7IH1cXG5cXG4uZmEtdXNlci1hbHQtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmYVxcXCI7IH1cXG5cXG4uZmEtdXNlci1hc3Ryb25hdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmYlxcXCI7IH1cXG5cXG4uZmEtdXNlci1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGZjXFxcIjsgfVxcblxcbi5mYS11c2VyLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmJkXFxcIjsgfVxcblxcbi5mYS11c2VyLWNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZmRcXFwiOyB9XFxuXFxuLmZhLXVzZXItY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZmVcXFwiOyB9XFxuXFxuLmZhLXVzZXItZWRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGZmXFxcIjsgfVxcblxcbi5mYS11c2VyLWZyaWVuZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwMFxcXCI7IH1cXG5cXG4uZmEtdXNlci1ncmFkdWF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTAxXFxcIjsgfVxcblxcbi5mYS11c2VyLWluanVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcyOFxcXCI7IH1cXG5cXG4uZmEtdXNlci1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MDJcXFwiOyB9XFxuXFxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmMFxcXCI7IH1cXG5cXG4uZmEtdXNlci1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTAzXFxcIjsgfVxcblxcbi5mYS11c2VyLW5pbmphOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MDRcXFwiOyB9XFxuXFxuLmZhLXVzZXItbnVyc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgyZlxcXCI7IH1cXG5cXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzRcXFwiOyB9XFxuXFxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWJcXFwiOyB9XFxuXFxuLmZhLXVzZXItc2hpZWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MDVcXFwiOyB9XFxuXFxuLmZhLXVzZXItc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwNlxcXCI7IH1cXG5cXG4uZmEtdXNlci10YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwN1xcXCI7IH1cXG5cXG4uZmEtdXNlci10aWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwOFxcXCI7IH1cXG5cXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM1XFxcIjsgfVxcblxcbi5mYS11c2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMwXFxcIjsgfVxcblxcbi5mYS11c2Vycy1jb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwOVxcXCI7IH1cXG5cXG4uZmEtdXNlcnMtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3M1xcXCI7IH1cXG5cXG4uZmEtdXNwczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2UxXFxcIjsgfVxcblxcbi5mYS11c3N1bm5haDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDA3XFxcIjsgfVxcblxcbi5mYS11dGVuc2lsLXNwb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZTVcXFwiOyB9XFxuXFxuLmZhLXV0ZW5zaWxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZTdcXFwiOyB9XFxuXFxuLmZhLXZhYWRpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDA4XFxcIjsgfVxcblxcbi5mYS12ZWN0b3Itc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1Y2JcXFwiOyB9XFxuXFxuLmZhLXZlbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjFcXFwiOyB9XFxuXFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI2XFxcIjsgfVxcblxcbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjhcXFwiOyB9XFxuXFxuLmZhLXZlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4NVxcXCI7IH1cXG5cXG4uZmEtdmVzdC1wYXRjaGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwODZcXFwiOyB9XFxuXFxuLmZhLXZpYWNvaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzN1xcXCI7IH1cXG5cXG4uZmEtdmlhZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTlcXFwiOyB9XFxuXFxuLmZhLXZpYWRlby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhYVxcXCI7IH1cXG5cXG4uZmEtdmlhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDkyXFxcIjsgfVxcblxcbi5mYS12aWFsczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDkzXFxcIjsgfVxcblxcbi5mYS12aWJlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDA5XFxcIjsgfVxcblxcbi5mYS12aWRlbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNkXFxcIjsgfVxcblxcbi5mYS12aWRlby1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGUyXFxcIjsgfVxcblxcbi5mYS12aWhhcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhN1xcXCI7IH1cXG5cXG4uZmEtdmltZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwYVxcXCI7IH1cXG5cXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTRcXFwiOyB9XFxuXFxuLmZhLXZpbWVvLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3ZFxcXCI7IH1cXG5cXG4uZmEtdmluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNhXFxcIjsgfVxcblxcbi5mYS12aXJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDc0XFxcIjsgfVxcblxcbi5mYS12aXJ1cy1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDc1XFxcIjsgfVxcblxcbi5mYS12aXJ1c2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzZcXFwiOyB9XFxuXFxuLmZhLXZrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODlcXFwiOyB9XFxuXFxuLmZhLXZudjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDBiXFxcIjsgfVxcblxcbi5mYS12b2ljZW1haWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg5N1xcXCI7IH1cXG5cXG4uZmEtdm9sbGV5YmFsbC1iYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NWZcXFwiOyB9XFxuXFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjdcXFwiOyB9XFxuXFxuLmZhLXZvbHVtZS1tdXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YTlcXFwiOyB9XFxuXFxuLmZhLXZvbHVtZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiOyB9XFxuXFxuLmZhLXZvdGUteWVhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NzJcXFwiOyB9XFxuXFxuLmZhLXZyLWNhcmRib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzI5XFxcIjsgfVxcblxcbi5mYS12dWVqczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDFmXFxcIjsgfVxcblxcbi5mYS13YWxraW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTRcXFwiOyB9XFxuXFxuLmZhLXdhbGxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTU1XFxcIjsgfVxcblxcbi5mYS13YXJlaG91c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ5NFxcXCI7IH1cXG5cXG4uZmEtd2F0Y2htYW4tbW9uaXRvcmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDg3XFxcIjsgfVxcblxcbi5mYS13YXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzczXFxcIjsgfVxcblxcbi5mYS13YXZlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODNlXFxcIjsgfVxcblxcbi5mYS13YXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2ZcXFwiOyB9XFxuXFxuLmZhLXdlZWJseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWNjXFxcIjsgfVxcblxcbi5mYS13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMThhXFxcIjsgfVxcblxcbi5mYS13ZWlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ5NlxcXCI7IH1cXG5cXG4uZmEtd2VpZ2h0LWhhbmdpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjZFxcXCI7IH1cXG5cXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDdcXFwiOyB9XFxuXFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzJcXFwiOyB9XFxuXFxuLmZhLXdoYXRzYXBwLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDBjXFxcIjsgfVxcblxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTNcXFwiOyB9XFxuXFxuLmZhLXdobWNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MGRcXFwiOyB9XFxuXFxuLmZhLXdpZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlYlxcXCI7IH1cXG5cXG4uZmEtd2lraXBlZGlhLXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2NlxcXCI7IH1cXG5cXG4uZmEtd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzJlXFxcIjsgfVxcblxcbi5mYS13aW5kb3ctY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxMFxcXCI7IH1cXG5cXG4uZmEtd2luZG93LW1heGltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDBcXFwiOyB9XFxuXFxuLmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQxXFxcIjsgfVxcblxcbi5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQyXFxcIjsgfVxcblxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2FcXFwiOyB9XFxuXFxuLmZhLXdpbmUtYm90dGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MmZcXFwiOyB9XFxuXFxuLmZhLXdpbmUtZ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlM1xcXCI7IH1cXG5cXG4uZmEtd2luZS1nbGFzcy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjZVxcXCI7IH1cXG5cXG4uZmEtd2l4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1Y2ZcXFwiOyB9XFxuXFxuLmZhLXdpemFyZHMtb2YtdGhlLWNvYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MzBcXFwiOyB9XFxuXFxuLmZhLXdvZHU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4OFxcXCI7IH1cXG5cXG4uZmEtd29sZi1wYWNrLWJhdHRhbGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTE0XFxcIjsgfVxcblxcbi5mYS13b24tc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTU5XFxcIjsgfVxcblxcbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5YVxcXCI7IH1cXG5cXG4uZmEtd29yZHByZXNzLXNpbXBsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDExXFxcIjsgfVxcblxcbi5mYS13cGJlZ2lubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTdcXFwiOyB9XFxuXFxuLmZhLXdwZXhwbG9yZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkZVxcXCI7IH1cXG5cXG4uZmEtd3Bmb3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk4XFxcIjsgfVxcblxcbi5mYS13cHJlc3NyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTRcXFwiOyB9XFxuXFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFkXFxcIjsgfVxcblxcbi5mYS14LXJheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDk3XFxcIjsgfVxcblxcbi5mYS14Ym94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MTJcXFwiOyB9XFxuXFxuLmZhLXhpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2OFxcXCI7IH1cXG5cXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2OVxcXCI7IH1cXG5cXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyM2JcXFwiOyB9XFxuXFxuLmZhLXlhaG9vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOWVcXFwiOyB9XFxuXFxuLmZhLXlhbW1lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODQwXFxcIjsgfVxcblxcbi5mYS15YW5kZXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxM1xcXCI7IH1cXG5cXG4uZmEteWFuZGV4LWludGVybmF0aW9uYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxNFxcXCI7IH1cXG5cXG4uZmEteWFybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2UzXFxcIjsgfVxcblxcbi5mYS15ZWxwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTlcXFwiOyB9XFxuXFxuLmZhLXllbi1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTdcXFwiOyB9XFxuXFxuLmZhLXlpbi15YW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YWRcXFwiOyB9XFxuXFxuLmZhLXlvYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjFcXFwiOyB9XFxuXFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2N1xcXCI7IH1cXG5cXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzMVxcXCI7IH1cXG5cXG4uZmEtemhpaHU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYzZlxcXCI7IH1cXG5cXG4uc3Itb25seSB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7IH1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvOyB9XFxuXFxuLyohXFxuICogRm9udCBBd2Vzb21lIEZyZWUgNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXFxuICogTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UvZnJlZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcXG4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1kaXNwbGF5OiBibG9jaztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyArIFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpOyB9XFxuXFxuLmZhLFxcbi5mYXMge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG5cXG4vKiFcXG4gKiBGb250IEF3ZXNvbWUgRnJlZSA1LjE1LjMgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxcbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IGJsb2NrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIik7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gKyBcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTsgfVxcblxcbi5mYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4ubWVudSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBoZWlnaHQ6IDM5cHg7IH1cXG4gIC5tZW51IGEge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XFxuICAgIC5tZW51IGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNmZiMWRkOyB9XFxuICAubWVudSB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAubWVudSB1bCBsaSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm1lbnUgLmxvZ28tbGluayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtM3B4OyB9XFxuXFxuLmJ0biwgLmJ0bi1hbHQsIC5idG4td2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4NmNlO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcbiAgLmJ0bjpob3ZlciwgLmJ0bi1hbHQ6aG92ZXIsIC5idG4td2FybmluZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMThmY2U7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IH1cXG5cXG4uYnRuW2Rpc2FibGVkXSwgLmJ0bi1hbHRbZGlzYWJsZWRdLCAuYnRuLXdhcm5pbmdbZGlzYWJsZWRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY3Vyc29yOiBpbmhlcml0OyB9XFxuICAuYnRuW2Rpc2FibGVkXTpob3ZlciwgLmJ0bi1hbHRbZGlzYWJsZWRdOmhvdmVyLCAuYnRuLXdhcm5pbmdbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uYnRuLWFsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxcbiAgLmJ0bi1hbHQ6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmJ0bi13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjc2MmM7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYzA2MzI1OyB9XFxuICAuYnRuLXdhcm5pbmc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ4ODRjOyB9XFxuXFxuLmxvZ28sIC50b29sYmFyIC50b29sYmFyLWxvZ28ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTZweDsgfVxcblxcbi5kcmF3LWJ0bi1hbHQge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuZHJhdy1idG4tYWx0OmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZiMWRkOyB9XFxuXFxuaW5wdXQsXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0OyB9XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4OyB9XFxuICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuICBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzE0NzRiNDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDM1cHg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzlweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzI2MjYyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMzMzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1jb250ZW50IC50aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAubW9kYWwgLm1vZGFsLWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDE1cHg7IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1oZWFkZXIgLmNsb3NlLWJ0biB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cXG4gICAgICAubW9kYWwgLm1vZGFsLWhlYWRlciAuY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA2NXZ3OyB9IH1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XFxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDY1dmg7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDsgfSB9XFxuXFxuLnRvb2xiYXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC50b29sYmFyIC50b29sYmFyLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgfVxcbiAgLnRvb2xiYXIgLnNlcGFyYXRvciB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDZweCA0cHggMTBweCA0cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAudG9vbGJhciAuY29sb3Itc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcbiAgLnRvb2xiYXIgLmJ0bi10b29sLCAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi10b29sOmhvdmVyLCAudG9vbGJhciAuYnRuLWNvbG9yOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyB9XFxuICAudG9vbGJhciB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMHB4OyB9XFxuICAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAudG9vbGJhciAuYnRuLWNvbG9yOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7IH1cXG4gIC50b29sYmFyIC5zZWxlY3RlZCB7XFxuICAgIGNvbG9yOiAjMzE4ZmNlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG4gICAgLnRvb2xiYXIgLnNlbGVjdGVkOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzZmYjFkZDsgfVxcbiAgLnRvb2xiYXIgLnNlbGVjdGVkLWNvbG9yIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZiMWRkOyB9XFxuICAudG9vbGJhciAuZGlzYWJsZWQge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuICAgIC50b29sYmFyIC5kaXNhYmxlZDpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTsgfVxcbiAgLnRvb2xiYXIgLmxpbmUtaWNvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAudG9vbGJhciB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnRvb2xiYXIge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAgIC50b29sYmFyIC50b29sYmFyLWxvZ28ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogODQ1cHgpIHtcXG4gIC50b29sYmFyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4OyB9XFxuICAgIC50b29sYmFyIC5idG4tdG9vbCwgLnRvb2xiYXIgLmJ0bi1jb2xvciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuICAgIC50b29sYmFyIC5jb2xvci1zZXBhcmF0b3Ige1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgLnRvb2xiYXIgLnNlcGFyYXRvciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9IH1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2MHB4KSB7XFxuICAudG9vbGJhciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDsgfVxcbiAgICAudG9vbGJhciAuc2VwYXJhdG9yIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi10b29sLCAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi1jb2xvciB7XFxuICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH0gfVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNjg1cHgpIHtcXG4gIC50b29sYmFyIC5idG4tY29sb3Ige1xcbiAgICBwYWRkaW5nOiAzcHg7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZpbGwud29ya2VyLmpzXCIpO1xufVxuIiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcIi4uL3Njc3MvZHJhdy5zY3NzXCI7XG5pbXBvcnQgXCJsYXRvLWZvbnRcIjtcbmltcG9ydCBcIi4uL2Zhdmljb24uaWNvXCI7XG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xuaW1wb3J0IHRvb2xGcm9tVHlwZSBmcm9tIFwiLi90b29scy90b29sLWZyb20tdHlwZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdG9vbHMvdGV4dFwiO1xuaW1wb3J0IEZpbGwgZnJvbSBcIi4vdG9vbHMvZmlsbFwiO1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuL3Rvb2xzL2NvbG9yLXBpY2tlclwiO1xuaW1wb3J0IFJlY3QgZnJvbSBcIi4vdG9vbHMvcmVjdFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vdG9vbHMvbGluZVwiO1xuaW1wb3J0IEVsbGlwc2UgZnJvbSBcIi4vdG9vbHMvZWxsaXBzZVwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uU3lzdGVtIGZyb20gXCIuL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tc3lzdGVtXCI7XG5pbXBvcnQgRHJhd2luZ0RhdGEgZnJvbSBcIi4vbW9kZWxzL2RyYXdpbmctZGF0YVwiO1xuaW1wb3J0IEJhY2tncm91bmRNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL2JhY2tncm91bmQtbW9kYWwvYmFja2dyb3VuZC1tb2RhbFwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9tb2RlbHMvdmVjdG9yXCI7XG5pbXBvcnQgRmlsbFdvcmtlciBmcm9tIFwiLi9maWxsLndvcmtlci5qc1wiO1xuaW1wb3J0IGluaXRDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcblxuY29uc3QgQ0FOVkFTX1NJWkUgPSAwLjk7XG5jb25zdCBDQU5WQVNfU0laRV9NRURJVU0gPSAwLjg1O1xuY29uc3QgQ0FOVkFTX1NJWkVfU01BTEwgPSAwLjg7XG5jb25zdCBNRURJVU1fU0laRV9QWCA9IDU1MDtcbmNvbnN0IFNNQUxMX1NJWkVfUFggPSA0MjA7XG5jb25zdCBERUZBVUxUX0JSVVNIX1NJWkUgPSAyMDtcbmNvbnN0IERFRkFVTFRfUEFJTlRfQ09MT1IgPSBcIiMwMDAwMDBcIjtcbmNvbnN0IERFRkFVTFRfUEFJTlRfVE9PTCA9IFRvb2xUeXBlLkJSVVNIO1xuY29uc3QgTkVUX0NVUlNPUl9VUERBVEVfSU5URVJWQUxfTVMgPSA1MDtcbmNvbnN0IG5vdGlmaWNhdGlvblN5c3RlbSA9IG5ldyBOb3RpZmljYXRpb25TeXN0ZW0oKTtcbmxldCBjYW52YXMsIHNvY2tldCwgY3R4LCBiZ0NhbnZhcywgYmdDdHgsIGNvbG9yU2VsZWN0b3IsIGJhY2tncm91bmRTZWxlY3Rpb25Nb2RhbCwgc2l6ZVZhbHVlU3Bhbixcblx0YnJ1c2hTaXplTWVudSwgcm9vbVVybExpbmssIHRvb2xiYXIsIHNoYXBlUHJldmlld0NhbnZhcywgc2hhcGVQcmV2aWV3Q3R4O1xubGV0IGlzRHJhd2luZyA9IGZhbHNlO1xubGV0IHBhaW50VG9vbCA9IHRvb2xGcm9tVHlwZShERUZBVUxUX1BBSU5UX1RPT0wsIERFRkFVTFRfQlJVU0hfU0laRSwgREVGQVVMVF9QQUlOVF9DT0xPUik7XG5sZXQgZHJhd2luZ1N0YXJ0UG9zID0gbmV3IFZlY3RvcigpO1xubGV0IGRyYXdpbmdFbmRQb3MgPSBuZXcgVmVjdG9yKCk7XG5sZXQgaXNTYXZpbmdDYW52YXMgPSBmYWxzZTtcbmxldCBsYXN0U2VsZWN0ZWRTbGlkZXIgPSBudWxsO1xubGV0IHRvdWNoSnVzdEVuZGVkID0gZmFsc2U7XG5sZXQgaXNGaXJzdEpvaW4gPSB0cnVlO1xubGV0IGN1cnNvck1vdmVkID0gZmFsc2U7XG5sZXQgY3Vyc29yUG9zaXRpb24gPSBuZXcgVmVjdG9yKCk7XG5sZXQgdXNlcnMgPSBbXTtcbmxldCBzaG93UmVtb3RlQ3Vyc29ycyA9IHRydWU7XG5sZXQgc3RpY2t5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGlja3lcIik7XG4vLyBsZXQgdXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGxvYWRcIik7XG4vLyAvLyBjYWxjdWxhdGUgY2FudmFzIHNpemUgYmFzZWQgb24gd2luZG93IGRpbWVuc2lvbnNcbi8vIHVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vIFx0Ly8gT3BlbiBmaWxlIGV4cGxvcmVyXG4vLyBcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vIFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4vLyBcdGlucHV0LmNsaWNrKCk7XG5cbi8vIFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuLy8gXHRcdFx0bGV0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcbi8vIFx0XHRcdGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXG4vLyBcdFx0XHRsZXQgc3RpY2t5VGVtcGxhdGVIVE1MID0gYFxuLy8gXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRlci1jb250XCI+XG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1pbmltaXplXCI+PC9kaXY+XG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbW92ZVwiPjwvZGl2PlxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPVwibm90ZS1jb250XCI+XG4vLyBcdFx0XHRcdFx0PGltZyBzcmM9XCIke3VybH1cIi8+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHRcdGA7XG4vLyBcdFx0XHRjcmVhdGVTdGlja3koc3RpY2t5VGVtcGxhdGVIVE1MKTtcbi8vIFx0fSlcbi8vIH0pXG5cbnN0aWNreS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0bGV0IHN0aWNreVRlbXBsYXRlSFRNTCA9IGBcblx0PGRpdiBjbGFzcz1cImhlYWRlci1jb250XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWluaW1pemVcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZW1vdmVcIj48L2Rpdj5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJub3RlLWNvbnRcIj5cblx0XHRcdDx0ZXh0YXJlYSBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cblx0YDtcblxuXHRjcmVhdGVTdGlja3koc3RpY2t5VGVtcGxhdGVIVE1MKTtcbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0aWNreShzdGlja3lUZW1wbGF0ZUhUTUwpIHtcblx0bGV0IHN0aWNreUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdGlja3lDb250LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RpY2t5LWNvbnRcIik7XG5cdHN0aWNreUNvbnQuaW5uZXJIVE1MID0gc3RpY2t5VGVtcGxhdGVIVE1MO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0aWNreUNvbnQpO1xuXG5cdGxldCBtaW5pbWl6ZSA9IHN0aWNreUNvbnQucXVlcnlTZWxlY3RvcihcIi5taW5pbWl6ZVwiKTtcblx0bGV0IHJlbW92ZSA9IHN0aWNreUNvbnQucXVlcnlTZWxlY3RvcihcIi5yZW1vdmVcIik7XG5cdG5vdGVBY3Rpb25zKG1pbmltaXplLCByZW1vdmUsIHN0aWNreUNvbnQpO1xuXG5cdHN0aWNreUNvbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGRyYWdBbmREcm9wKHN0aWNreUNvbnQsIGV2ZW50KTtcblx0fTtcblxuXHRzdGlja3lDb250Lm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBub3RlQWN0aW9ucyhtaW5pbWl6ZSwgcmVtb3ZlLCBzdGlja3lDb250KSB7XG5cdHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdHN0aWNreUNvbnQucmVtb3ZlKCk7XG5cdH0pXG5cdG1pbmltaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0bGV0IG5vdGVDb250ID0gc3RpY2t5Q29udC5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtY29udFwiKTtcblx0XHRcdGxldCBkaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShub3RlQ29udCkuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIik7XG5cdFx0XHRpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIG5vdGVDb250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRlbHNlIG5vdGVDb250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSlcbn1cblxuZnVuY3Rpb24gZHJhZ0FuZERyb3AoZWxlbWVudCwgZXZlbnQpIHtcblx0bGV0IHNoaWZ0WCA9IGV2ZW50LmNsaWVudFggLSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdGxldCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cblx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdGVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwMDtcblxuXHRtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuXHQvLyBtb3ZlcyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuXHQvLyB0YWtpbmcgaW5pdGlhbCBzaGlmdHMgaW50byBhY2NvdW50XG5cdGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUudG9wID0gcGFnZVkgLSBzaGlmdFkgKyAncHgnO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcblx0XHRcdG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHR9XG5cblx0Ly8gbW92ZSB0aGUgYmFsbCBvbiBtb3VzZW1vdmVcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdC8vIGRyb3AgdGhlIGJhbGwsIHJlbW92ZSB1bm5lZWRlZCBoYW5kbGVyc1xuXHRlbGVtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblx0XHRcdGVsZW1lbnQub25tb3VzZXVwID0gbnVsbDtcblx0fTtcbn1cblxuXG5cbmZ1bmN0aW9uIGRlZmF1bHRDYW52YXNTaXplKClcbntcblx0bGV0IG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBDQU5WQVNfU0laRTtcblx0bGV0IG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIENBTlZBU19TSVpFO1xuXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFNNQUxMX1NJWkVfUFgpXG5cdFx0bmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIENBTlZBU19TSVpFX1NNQUxMO1xuXHRlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IE1FRElVTV9TSVpFX1BYKVxuXHRcdG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBDQU5WQVNfU0laRV9NRURJVU07XG5cblx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IFNNQUxMX1NJWkVfUFgpXG5cdFx0bmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogQ0FOVkFTX1NJWkVfU01BTEw7XG5cdGVsc2UgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IE1FRElVTV9TSVpFX1BYKVxuXHRcdG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIENBTlZBU19TSVpFX01FRElVTTtcblxuXHRuZXdXaWR0aCA9IE1hdGgucm91bmQobmV3V2lkdGgpO1xuXHRuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKG5ld0hlaWdodCk7XG5cblx0cmV0dXJuIHt3aWR0aDogbmV3V2lkdGgsIGhlaWdodDogbmV3SGVpZ2h0fTtcbn1cblxuLy8gbWFrZXMgc3VyZSBjYW52YXMgaXMgbmV2ZXIgb2JzY3VyZWQgYnkgdG9vbGJhciBhbmQgbmF2YmFyXG5mdW5jdGlvbiByZXBvc2l0aW9uQ2FudmFzKClcbntcblx0Y29uc3QgY2FudmFzTGF5ZXJzUmVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzLWxheWVyc1wiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRpZiAoY2FudmFzLndpZHRoID4gY2FudmFzTGF5ZXJzUmVjdC53aWR0aClcblx0e1xuXHRcdGNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcblx0XHRiZ0NhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcblx0XHRzaGFwZVByZXZpZXdDYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG5cblx0fSBlbHNlXG5cdHtcblx0XHRjYW52YXMuc3R5bGUubGVmdCA9IFwiaW5pdGlhbFwiO1xuXHRcdGJnQ2FudmFzLnN0eWxlLmxlZnQgPSBcImluaXRpYWxcIjtcblx0XHRzaGFwZVByZXZpZXdDYW52YXMuc3R5bGUubGVmdCA9IFwiaW5pdGlhbFwiO1xuXHR9XG5cblx0aWYgKGNhbnZhcy5oZWlnaHQgPiBjYW52YXNMYXllcnNSZWN0LmhlaWdodClcblx0e1xuXHRcdGNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xuXHRcdGJnQ2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG5cdFx0c2hhcGVQcmV2aWV3Q2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG5cblx0fSBlbHNlXG5cdHtcblx0XHRjYW52YXMuc3R5bGUudG9wID0gXCJpbml0aWFsXCI7XG5cdFx0YmdDYW52YXMuc3R5bGUudG9wID0gXCJpbml0aWFsXCI7XG5cdFx0c2hhcGVQcmV2aWV3Q2FudmFzLnN0eWxlLnRvcCA9IFwiaW5pdGlhbFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldENhbnZhc1NpemUoc2l6ZSlcbntcblx0Y29uc3QgY2FudmFzRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG5cdGNvbnN0IGJnRGF0YSA9IGJnQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblx0Y2FudmFzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXHRjYW52YXMud2lkdGggPSBzaXplLndpZHRoO1xuXHRiZ0NhbnZhcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcblx0YmdDYW52YXMud2lkdGggPSBzaXplLndpZHRoO1xuXHRzaGFwZVByZXZpZXdDYW52YXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cdHNoYXBlUHJldmlld0NhbnZhcy53aWR0aCA9IHNpemUud2lkdGg7XG5cdHJlcG9zaXRpb25DYW52YXMoKTtcblx0bG9hZENhbnZhc0RhdGEoY3R4LCBjYW52YXNEYXRhKTtcblx0bG9hZENhbnZhc0RhdGEoYmdDdHgsIGJnRGF0YSk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtd2lkdGhcIikudmFsdWUgPSBzaXplLndpZHRoO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1oZWlnaHRcIikudmFsdWUgPSBzaXplLmhlaWdodDtcblx0dXBkYXRlVGV4dEN1cnNvclBvcygpO1xufVxuXG4vLyBsb2FkIGltYWdlIGZyb20gY2FudmFzVVJMXG5mdW5jdGlvbiBsb2FkQ2FudmFzRGF0YShjdHgsIGNhbnZhc0RhdGEpXG57XG5cdGxldCBjYW52YXNJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRjYW52YXNJbWFnZS5vbmxvYWQgPSAoKSA9PlxuXHR7XG5cdFx0Y3R4LmRyYXdJbWFnZShjYW52YXNJbWFnZSwgMCwgMCk7XG5cdH07XG5cblx0Y2FudmFzSW1hZ2Uuc3JjID0gY2FudmFzRGF0YTtcbn1cblxuZnVuY3Rpb24gcGFpbnRUb29sU3dpdGNoZWQoZSlcbntcblx0cGFpbnRUb29sID0gdG9vbEZyb21UeXBlKGUuZGV0YWlsLCBwYWludFRvb2wuc2l6ZSwgcGFpbnRUb29sLmNvbG9yKTtcblx0dXBkYXRlQnJ1c2hQcmV2aWV3KCk7XG59XG5cbi8vIGNvbG9yIGNoYW5nZSBieSBjbGlja2luZyBhIHRvb2xiYXIgaWNvbiBvciBlZGl0aW5nIGNvbG9yIGlucHV0XG5mdW5jdGlvbiBwYWludENvbG9yQ2hhbmdlZChlLCBjb2xvcj1udWxsKVxue1xuXG5cdGlmIChlICE9IG51bGwgJiYgZS50YXJnZXQgPT0gY29sb3JTZWxlY3Rvcilcblx0e1xuXHRcdGNvbG9yID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dG9vbGJhci5jbGVhclNlbGVjdGVkQ29sb3IoKTtcblxuXHR9IGVsc2Vcblx0e1xuXHRcdGlmIChlICE9IG51bGwpIC8vIGNoYW5nZWQgYnkgdG9vbGJhclxuXHRcdFx0Y29sb3IgPSBlLmRldGFpbDtcblx0XHRlbHNlIC8vIGNoYW5nZWQgYnkgY29sb3IgcGlja2VyXG5cdFx0XHR0b29sYmFyLmNsZWFyU2VsZWN0ZWRDb2xvcigpO1xuXG5cdFx0Y29sb3JTZWxlY3Rvci5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHR9XG5cblx0cGFpbnRUb29sLnNldENvbG9yKGNvbG9yKTtcblx0dXBkYXRlQnJ1c2hQcmV2aWV3KCk7XG59XG5cbmZ1bmN0aW9uIHJvb21VcmxDbGlja2VkKGUpXG57XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEVYVEFSRUFcIik7XG5cdHRleHRBcmVhLnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2xpcGJvYXJkO1xuXHR0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiY2xpcGJvYXJkXCIpO1xuXHRlLmN1cnJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuXHR0ZXh0QXJlYS5mb2N1cygpO1xuXHR0ZXh0QXJlYS5zZWxlY3QoKTtcblxuXHR0cnlcblx0e1xuXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcblx0fSBjYXRjaCAoZXJyKVxuXHR7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVSUk9SOiBjYW4ndCBjb3B5IFVSTCB0byBjbGlwYm9hcmRcIik7XG5cdH1cblxuXHRlLmN1cnJlbnRUYXJnZXQucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xufVxuXG4vLyBoYW5kbGVzIG1vdXNlIG1vdmUgYW5kIHRvdWNoIG1vdmVcbmZ1bmN0aW9uIGNhbnZhc01vdXNlTW92ZWQoZSlcbntcblx0Y29uc3QgYnJ1c2hQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1icnVzaC1wcmV2aWV3XCIpO1xuXHRjb25zdCBsZWZ0UG9zID0gZS5jbGllbnRYIC0gYnJ1c2hQcmV2aWV3Lm9mZnNldFdpZHRoIC8gMjtcblx0Y29uc3QgdG9wUG9zID0gZS5jbGllbnRZIC0gYnJ1c2hQcmV2aWV3Lm9mZnNldEhlaWdodCAvIDI7XG5cdGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGJydXNoUHJldmlldy5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBvc31weGA7XG5cdGJydXNoUHJldmlldy5zdHlsZS50b3AgPSBgJHt0b3BQb3N9cHhgO1xuXHRjdXJzb3JQb3NpdGlvbiA9IG5ldyBWZWN0b3IobGVmdFBvcyAtIGNhbnZhc1JlY3QueCwgdG9wUG9zIC0gY2FudmFzUmVjdC55KTtcblx0Y3Vyc29yTW92ZWQgPSB0cnVlO1xuXG5cdGlmIChpc0RyYXdpbmcpXG5cdHtcblx0XHRsZXQgcG9zWCwgcG9zWTtcblx0XHRsZXQgbnVtVG91Y2hlcztcblx0XHRsZXQgcmVjdDtcblxuXHRcdGlmIChlLnR5cGUgPT0gXCJ0b3VjaG1vdmVcIilcblx0XHR7XG5cdFx0XHRudW1Ub3VjaGVzID0gZS50b3VjaGVzLmxlbmd0aDtcblx0XHRcdHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR9IGVsc2Vcblx0XHR7XG5cdFx0XHRwb3NYID0gZS5vZmZzZXRYO1xuXHRcdFx0cG9zWSA9IGUub2Zmc2V0WTtcblx0XHRcdG51bVRvdWNoZXMgPSAxO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVG91Y2hlczsgaSsrKVxuXHRcdHtcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJ0b3VjaG1vdmVcIilcblx0XHRcdHtcblx0XHRcdFx0cG9zWCA9IGUudG91Y2hlc1tpXS5wYWdlWCAtIHJlY3QubGVmdDtcblx0XHRcdFx0cG9zWSA9IGUudG91Y2hlc1tpXS5wYWdlWSAtIHJlY3QudG9wO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVEcmF3aW5nUG9zKG51bGwsIG5ldyBWZWN0b3IocG9zWCwgcG9zWSkpO1xuXG5cdFx0XHQvLyBub3QgYSBzaGFwZSB0b29sXG5cdFx0XHRpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgUmVjdCA9PSBmYWxzZSAmJiBwYWludFRvb2wgaW5zdGFuY2VvZiBMaW5lID09IGZhbHNlICYmXG5cdFx0XHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UgPT0gZmFsc2UpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnN0IGRyYXdpbmdEYXRhID0gbmV3IERyYXdpbmdEYXRhKGRyYXdpbmdTdGFydFBvcywgZHJhd2luZ0VuZFBvcywgcGFpbnRUb29sKTtcblx0XHRcdFx0ZHJhdyhkcmF3aW5nRGF0YSk7XG5cdFx0XHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XG5cblx0XHRcdFx0dXBkYXRlRHJhd2luZ1BvcyhuZXcgVmVjdG9yKHBvc1gsIHBvc1kpLCBudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBzaGFwZSB0b29sc1xuXHRcdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0KVxuXHRcdHtcblx0XHRcdHNldENvbnRleHRQcm9wZXJ0aWVzKHNoYXBlUHJldmlld0N0eCwgcGFpbnRUb29sKTtcblx0XHRcdHNoYXBlUHJldmlld0N0eC5jbGVhclJlY3QoMCwgMCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy53aWR0aCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0XHRsZXQgaXNTcXVhcmUgPSBlLnNoaWZ0S2V5O1xuXHRcdFx0cGFpbnRUb29sLnNxdWFyZSA9IGlzU3F1YXJlO1xuXG5cdFx0XHRsZXQgcmVjdCA9IG5ldyBSZWN0KHBhaW50VG9vbC5zaXplLCBwYWludFRvb2wuY29sb3IsIGlzU3F1YXJlKTtcblx0XHRcdGxldCBwb3NYID0gZS5vZmZzZXRYO1xuXHRcdFx0bGV0IHBvc1kgPSBlLm9mZnNldFk7XG5cdFx0XHRyZWN0LmRyYXcoc2hhcGVQcmV2aWV3Q3R4LCBkcmF3aW5nU3RhcnRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnksIHBvc1gsIHBvc1kpO1xuXG5cdFx0fSBlbHNlIGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBMaW5lKVxuXHRcdHtcblx0XHRcdHNldENvbnRleHRQcm9wZXJ0aWVzKHNoYXBlUHJldmlld0N0eCwgcGFpbnRUb29sKTtcblx0XHRcdHNoYXBlUHJldmlld0N0eC5jbGVhclJlY3QoMCwgMCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy53aWR0aCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0XHRsZXQgbGluZSA9IG5ldyBMaW5lKHBhaW50VG9vbC5zaXplLCBwYWludFRvb2wuY29sb3IpO1xuXHRcdFx0bGV0IHBvc1ggPSBlLm9mZnNldFg7XG5cdFx0XHRsZXQgcG9zWSA9IGUub2Zmc2V0WTtcblx0XHRcdGxpbmUuZHJhdyhzaGFwZVByZXZpZXdDdHgsIGRyYXdpbmdTdGFydFBvcy54LCBkcmF3aW5nU3RhcnRQb3MueSwgcG9zWCwgcG9zWSk7XG5cblx0XHR9IGVsc2UgaWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UpXG5cdFx0e1xuXHRcdFx0bGV0IGlzQ2lyY2xlID0gZS5zaGlmdEtleTtcblx0XHRcdHBhaW50VG9vbC5jaXJjbGUgPSBpc0NpcmNsZTtcblxuXHRcdFx0c2V0Q29udGV4dFByb3BlcnRpZXMoc2hhcGVQcmV2aWV3Q3R4LCBwYWludFRvb2wpO1xuXHRcdFx0c2hhcGVQcmV2aWV3Q3R4LmNsZWFyUmVjdCgwLCAwLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLndpZHRoLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLmhlaWdodCk7XG5cblx0XHRcdGxldCBlbGxpcHNlID0gbmV3IEVsbGlwc2UocGFpbnRUb29sLnNpemUsIHBhaW50VG9vbC5jb2xvciwgaXNDaXJjbGUpO1xuXHRcdFx0bGV0IHBvc1ggPSBlLm9mZnNldFg7XG5cdFx0XHRsZXQgcG9zWSA9IGUub2Zmc2V0WTtcblx0XHRcdGVsbGlwc2UuZHJhdyhzaGFwZVByZXZpZXdDdHgsIGRyYXdpbmdTdGFydFBvcy54LCBkcmF3aW5nU3RhcnRQb3MueSwgcG9zWCwgcG9zWSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNhbnZhc01vdXNlRG93bihlKVxue1xuXHQvLyByZXR1cm4gaWYgdGhpcyB3YXMgdHJpZ2dlcmVkIGJ5IGF1dG9tYXRpYyBtb3VzZWRvd24gZXZlbnQgYWZ0ZXIgdG91Y2ggc3RhcnRcblx0aWYgKHRvdWNoSnVzdEVuZGVkKVxuXHRcdHJldHVybjtcblxuXHRsZXQgcG9zWCA9IGUub2Zmc2V0WDtcblx0bGV0IHBvc1kgPSBlLm9mZnNldFk7XG5cblx0aWYgKGUudHlwZSA9PSBcInRvdWNoc3RhcnRcIilcblx0e1xuXHRcdHBvc1ggPSBlLnRvdWNoZXNbaV0ucGFnZVggLSByZWN0LmxlZnQ7XG5cdFx0cG9zWSA9IGUudG91Y2hlc1tpXS5wYWdlWSAtIHJlY3QudG9wO1xuXHR9XG5cblx0ZHJhd1NpbmdsZVBvaW50KHBvc1gsIHBvc1kpO1xufVxuXG5mdW5jdGlvbiBjYW52YXNUb3VjaFN0YXJ0KGUpXG57XG5cdGxldCBwb3NYLCBwb3NZO1xuXHRsZXQgbnVtVG91Y2hlcyA9IGUudG91Y2hlcy5sZW5ndGg7XG5cdGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ub3VjaGVzOyBpKyspXG5cdHtcblx0XHRpZiAoZS50eXBlID09IFwidG91Y2hzdGFydFwiKVxuXHRcdHtcblx0XHRcdHBvc1ggPSBlLnRvdWNoZXNbaV0ucGFnZVggLSByZWN0LmxlZnQ7XG5cdFx0XHRwb3NZID0gZS50b3VjaGVzW2ldLnBhZ2VZIC0gcmVjdC50b3A7XG5cdFx0fVxuXG5cdFx0ZHJhd1NpbmdsZVBvaW50KHBvc1gsIHBvc1kpO1xuXHR9XG59XG5cbi8vIGhhbmRsZXMgbW91c2UgdXAgYW5kIHRvdWNoIGVuZFxuZnVuY3Rpb24gd2luZG93TW91c2VVcChlKVxue1xuXHRpZiAoZS50eXBlID09IFwibW91c2V1cFwiICYmIHRvdWNoSnVzdEVuZGVkKVxuXHR7XG5cdFx0dG91Y2hKdXN0RW5kZWQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaXNEcmF3aW5nICYmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0IHx8IHBhaW50VG9vbCBpbnN0YW5jZW9mIExpbmUgfHxcblx0XHRwYWludFRvb2wgaW5zdGFuY2VvZiBFbGxpcHNlKSlcblx0e1xuXHRcdC8vIGNsZWFyIHByZXZpZXdcblx0XHRzaGFwZVByZXZpZXdDdHguY2xlYXJSZWN0KDAsIDAsIHNoYXBlUHJldmlld0N0eC5jYW52YXMud2lkdGgsIHNoYXBlUHJldmlld0N0eC5jYW52YXMuaGVpZ2h0KTtcblxuXHRcdGxldCBwb3NYID0gZS5vZmZzZXRYO1xuXHRcdGxldCBwb3NZID0gZS5vZmZzZXRZO1xuXG5cdFx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJDQU5WQVNcIilcblx0XHR7XG5cdFx0XHR1cGRhdGVEcmF3aW5nUG9zKG51bGwsIG5ldyBWZWN0b3IocG9zWCwgcG9zWSkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYXdpbmdEYXRhID0gbmV3IERyYXdpbmdEYXRhKGRyYXdpbmdTdGFydFBvcywgZHJhd2luZ0VuZFBvcywgcGFpbnRUb29sKTtcblx0XHQvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIG5lZWRlZFxuXHRcdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0KVxuXHRcdFx0ZHJhd2luZ0RhdGEuc3F1YXJlID0gcGFpbnRUb29sLnNxdWFyZTtcblxuXHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xuXHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XG5cdH1cblxuXHRpc0RyYXdpbmcgPSBmYWxzZTtcblx0bGFzdFNlbGVjdGVkU2xpZGVyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY2FudmFzVG91Y2hFbmRlZChlKVxue1xuXHR3aW5kb3dNb3VzZVVwKGUpO1xuXHR0b3VjaEp1c3RFbmRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGNhbnZhc01vdXNlT3ZlcihlKVxue1xuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLWJydXNoLXByZXZpZXdcIik7XG5cdGJydXNoUHJldmlldy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdGJydXNoUHJldmlldy5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIGJydXNoUHJldmlldy5vZmZzZXRXaWR0aCAvIDIpICsgXCJweFwiO1xuXHRicnVzaFByZXZpZXcuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIGJydXNoUHJldmlldy5vZmZzZXRIZWlnaHQgLyAyKSArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gY2FudmFzTW91c2VPdXQoKVxue1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLWJydXNoLXByZXZpZXdcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRleHRQcm9wZXJ0aWVzKGNvbnRleHQsIHRvb2wpXG57XG5cdGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdG9vbC5vcGVyYXRpb247XG5cdGNvbnRleHQubGluZVdpZHRoID0gdG9vbC5zaXplO1xuXHRjb250ZXh0LmxpbmVDYXAgPSB0b29sLnN0eWxlO1xuXHRjb250ZXh0LnN0cm9rZVN0eWxlID0gdG9vbC5jb2xvcjtcblx0Y29udGV4dC5zaGFkb3dCbHVyID0gdG9vbC5ibHVyO1xuXHRjb250ZXh0LnNoYWRvd0NvbG9yID0gdG9vbC5jb2xvcjtcbn1cblxuZnVuY3Rpb24gZHJhdyhkcmF3aW5nRGF0YSlcbntcblx0c2V0Q29udGV4dFByb3BlcnRpZXMoY3R4LCBkcmF3aW5nRGF0YS50b29sKTtcblxuXHRjb25zdCBwb3NYID0gZHJhd2luZ0RhdGEuc3RhcnRQb3MueDtcblx0Y29uc3QgcG9zWSA9IGRyYXdpbmdEYXRhLnN0YXJ0UG9zLnk7XG5cblx0aWYgKGRyYXdpbmdEYXRhLnRvb2wudHlwZSA9PSBUb29sVHlwZS5URVhUICYmIGRyYXdpbmdEYXRhLnRleHQgIT0gbnVsbCAmJiBkcmF3aW5nRGF0YS50ZXh0ICE9IFwiXCIpXG5cdHtcblx0XHRjdHguZm9udCA9IGAke2RyYXdpbmdEYXRhLnRvb2wuc2l6ZX1weCBMYXRvYDtcblx0XHRjdHguZmlsbFN0eWxlID0gZHJhd2luZ0RhdGEudG9vbC5jb2xvcjtcblx0XHRjdHguZmlsbFRleHQoZHJhd2luZ0RhdGEudGV4dCwgcG9zWCwgcG9zWSk7XG5cblx0fSBlbHNlIGlmIChkcmF3aW5nRGF0YS50b29sLnR5cGUgPT0gVG9vbFR5cGUuRklMTClcblx0e1xuXHRcdGNvbnN0IHdpZHRoID0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aDtcblx0XHRjb25zdCBoZWlnaHQgPSBjdHguY2FudmFzLmNsaWVudEhlaWdodDtcblx0XHRsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblx0XHRsZXQgZmlsbFRvb2wgPSBuZXcgRmlsbChkcmF3aW5nRGF0YS50b29sLnNpemUsIGRyYXdpbmdEYXRhLnRvb2wuY29sb3IpO1xuXHRcdGxldCBmaWxsRGF0YSA9IGZpbGxUb29sLmdldEZpbGxEYXRhKHBvc1gsIHBvc1ksIHdpZHRoLCBoZWlnaHQsIGltYWdlRGF0YSk7XG5cblx0XHRpZiAoZmlsbERhdGEgPT0gbnVsbClcblx0XHRcdHJldHVybjtcblxuXHRcdGlmICh3aW5kb3cuV29ya2VyKVxuXHRcdHtcblx0XHRcdGlmICghY2FudmFzLmNsYXNzTGlzdC5jb250YWlucyhcInByb2dyZXNzXCIpKVxuXHRcdFx0XHRjYW52YXMuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzXCIpO1xuXG5cdFx0XHRsZXQgd29ya2VyID0gbmV3IEZpbGxXb3JrZXIoKTtcblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShbd2lkdGgsIGhlaWdodCwgcG9zWCwgcG9zWSwgaW1hZ2VEYXRhLCBmaWxsRGF0YVswXSwgZmlsbERhdGFbMV1dKTtcblx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT5cblx0XHRcdHtcblx0XHRcdFx0Y3R4LnB1dEltYWdlRGF0YShlLmRhdGEsIDAsIDApOyAvLyB1cGRhdGUgY2FudmFzXG5cdFx0XHRcdGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3NcIik7XG5cdFx0XHR9O1xuXG5cdFx0fSBlbHNlXG5cdFx0e1xuXHRcdFx0RmlsbC5maWxsUGl4ZWxzKFt3aWR0aCwgaGVpZ2h0LCBwb3NYLCBwb3NZLCBpbWFnZURhdGEsIGZpbGxEYXRhWzBdLCBmaWxsRGF0YVsxXV0pO1xuXHRcdFx0Y3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApOyAvLyB1cGRhdGUgY2FudmFzXG5cdFx0fVxuXG5cdH0gZWxzZSBpZiAoZHJhd2luZ0RhdGEudG9vbC50eXBlID09IFRvb2xUeXBlLlJFQ1QpXG5cdHtcblx0XHRsZXQgcmVjdCA9IG5ldyBSZWN0KGRyYXdpbmdEYXRhLnRvb2wuc2l6ZSwgZHJhd2luZ0RhdGEudG9vbC5jb2xvciwgZHJhd2luZ0RhdGEudG9vbC5zcXVhcmUpO1xuXHRcdHJlY3QuZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGRyYXdpbmdEYXRhLmVuZFBvcy54LCBkcmF3aW5nRGF0YS5lbmRQb3MueSk7XG5cblx0fSBlbHNlIGlmIChkcmF3aW5nRGF0YS50b29sLnR5cGUgPT0gVG9vbFR5cGUuTElORSlcblx0e1xuXHRcdGxldCBsaW5lID0gbmV3IExpbmUoZHJhd2luZ0RhdGEudG9vbC5zaXplLCBkcmF3aW5nRGF0YS50b29sLmNvbG9yKTtcblx0XHRsaW5lLmRyYXcoY3R4LCBwb3NYLCBwb3NZLCBkcmF3aW5nRGF0YS5lbmRQb3MueCwgZHJhd2luZ0RhdGEuZW5kUG9zLnkpO1xuXG5cdH0gZWxzZSBpZiAoZHJhd2luZ0RhdGEudG9vbC50eXBlID09IFRvb2xUeXBlLkVMTElQU0UpXG5cdHtcblx0XHRsZXQgZWxsaXBzZSA9IG5ldyBFbGxpcHNlKGRyYXdpbmdEYXRhLnRvb2wuc2l6ZSwgZHJhd2luZ0RhdGEudG9vbC5jb2xvciwgZHJhd2luZ0RhdGEudG9vbC5jaXJjbGUpO1xuXHRcdGVsbGlwc2UuZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGRyYXdpbmdEYXRhLmVuZFBvcy54LCBkcmF3aW5nRGF0YS5lbmRQb3MueSk7XG5cblx0fSBlbHNlXG5cdHtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4Lm1vdmVUbyhkcmF3aW5nRGF0YS5zdGFydFBvcy54LCBkcmF3aW5nRGF0YS5zdGFydFBvcy55KTtcblx0XHRjdHgubGluZVRvKGRyYXdpbmdEYXRhLmVuZFBvcy54LCBkcmF3aW5nRGF0YS5lbmRQb3MueSk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRyYXdTaW5nbGVQb2ludChwb3NYLCBwb3NZKVxue1xuXHRsZXQgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3NYLCBwb3NZKTtcblx0dXBkYXRlRHJhd2luZ1BvcyhuZXdQb3MsIG5ld1Bvcyk7XG5cblx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEZpbGwpXG5cdHtcblx0XHRsZXQgZHJhd2luZ0RhdGEgPSBuZXcgRHJhd2luZ0RhdGEoZHJhd2luZ1N0YXJ0UG9zLCBkcmF3aW5nRW5kUG9zLCBwYWludFRvb2wpO1xuXHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xuXHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XG5cblx0fSBlbHNlIGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBDb2xvclBpY2tlcilcblx0e1xuXHRcdGxldCBjb2xvciA9IHBhaW50VG9vbC5nZXRQaXhlbENvbG9yKGN0eCwgYmdDdHgsIHBvc1gsIHBvc1kpO1xuXHRcdHBhaW50Q29sb3JDaGFuZ2VkKG51bGwsIGNvbG9yKTtcblxuXHR9IGVsc2UgaWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIFJlY3QgfHwgcGFpbnRUb29sIGluc3RhbmNlb2YgTGluZSB8fFxuXHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UpIC8vIHNoYXBlIHRvb2xzXG5cdHtcblx0XHRpc0RyYXdpbmcgPSB0cnVlO1xuXG5cdH0gZWxzZSBpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgVGV4dCA9PSBmYWxzZSkgLy8gb3RoZXIgZHJhd2luZyB0b29sc1xuXHR7XG5cdFx0aXNEcmF3aW5nID0gdHJ1ZTtcblx0XHRsZXQgZHJhd2luZ0RhdGEgPSBuZXcgRHJhd2luZ0RhdGEoZHJhd2luZ1N0YXJ0UG9zLCBkcmF3aW5nRW5kUG9zLCBwYWludFRvb2wpO1xuXHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xuXHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XG5cdH1cbn1cblxuLy8gYW4gZWxlbWVudCB0aGF0IGZvbGxvd3MgbW91c2UgY3Vyc29yLiBJdCB2aXN1YWxpemVzIHRoZSBicnVzaCBzaXplIGFuZCBzaGFwZVxuZnVuY3Rpb24gY3JlYXRlTG9jYWxCcnVzaFByZXZpZXcoKVxue1xuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRicnVzaFByZXZpZXcuY2xhc3NMaXN0LmFkZChcImJydXNoLXByZXZpZXdcIik7XG5cdGJydXNoUHJldmlldy5pZCA9IFwibG9jYWwtYnJ1c2gtcHJldmlld1wiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJydXNoUHJldmlldyk7XG5cdHVwZGF0ZUJydXNoUHJldmlldygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZW1vdGVCcnVzaFByZXZpZXcodXNlck5hbWUsIHVzZXJJZClcbntcblx0Y29uc3QgYnJ1c2hQcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YnJ1c2hQcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJicnVzaC1wcmV2aWV3LXJlbW90ZVwiKTtcblx0YnJ1c2hQcmV2aWV3LmlkID0gYGJydXNoLXByZXZpZXctJHt1c2VySWR9YDtcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLndpZHRoID0gYCR7REVGQVVMVF9CUlVTSF9TSVpFfXB4YDtcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLmhlaWdodCA9IGAke0RFRkFVTFRfQlJVU0hfU0laRX1weGA7XG5cblx0Y29uc3QgbmFtZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRuYW1lVGFnLmNsYXNzTGlzdC5hZGQoXCJuYW1lLXRhZ1wiKTtcblx0bmFtZVRhZy50ZXh0Q29udGVudCA9IHVzZXJOYW1lO1xuXHRuYW1lVGFnLnN0eWxlLnRvcCA9IGAke0RFRkFVTFRfQlJVU0hfU0laRX1weGA7XG5cdGJydXNoUHJldmlldy5hcHBlbmQobmFtZVRhZyk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChicnVzaFByZXZpZXcpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVSZW1vdGVCcnVzaFByZXZpZXcodXNlcklkKVxue1xuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJ1c2gtcHJldmlldy0ke3VzZXJJZH1gKTtcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChicnVzaFByZXZpZXcpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCcnVzaFByZXZpZXcoKVxue1xuXHRjb25zdCBzaXplID0gcGFpbnRUb29sLnNpemU7XG5cdGNvbnN0IGJsdXIgPSBwYWludFRvb2wuYmx1cjtcblx0Y29uc3QgY29sb3IgPSBwYWludFRvb2wuY29sb3I7XG5cdGNvbnN0IHN0eWxlID0gcGFpbnRUb29sLnN0eWxlO1xuXG5cdGNvbnN0IGNvbG9yUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3ItcHJldmlld1wiKTtcblx0Y29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcblxuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLWJydXNoLXByZXZpZXdcIik7XG5cdGJydXNoUHJldmlldy5zdHlsZS53aWR0aCA9IChzaXplICsgYmx1ciAvIDIpICsgXCJweFwiO1xuXHRicnVzaFByZXZpZXcuc3R5bGUuaGVpZ2h0ID0gKHNpemUgKyBibHVyIC8gMikgKyBcInB4XCI7XG5cblx0aWYgKHN0eWxlID09IFwicm91bmRcIilcblx0XHRicnVzaFByZXZpZXcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcblx0ZWxzZVxuXHRcdGJydXNoUHJldmlldy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjBcIjtcblxuXHRpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgVGV4dClcblx0e1xuXHRcdGJydXNoUHJldmlldy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0Y2FudmFzLnN0eWxlLmN1cnNvciA9IFwidGV4dFwiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY3Vyc29yXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG5cdFx0dXBkYXRlVGV4dEN1cnNvclBvcygpO1xuXG5cdH0gZWxzZSBpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgRmlsbCB8fCBwYWludFRvb2wgaW5zdGFuY2VvZiBDb2xvclBpY2tlciB8fFxuXHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIFJlY3QgfHwgcGFpbnRUb29sIGluc3RhbmNlb2YgTGluZSB8fCBwYWludFRvb2wgaW5zdGFuY2VvZiBFbGxpcHNlKVxuXHR7XG5cdFx0YnJ1c2hQcmV2aWV3LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY3Vyc29yXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0fSBlbHNlXG5cdHtcblx0XHRicnVzaFByZXZpZXcuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuXHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY3Vyc29yXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUmVtb3RlQnJ1c2hQcmV2aWV3KHVzZXJJZCwgcG9zLCBzaXplLCBjb2xvcilcbntcblx0Y29uc3QgYnJ1c2hQcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJydXNoLXByZXZpZXctJHt1c2VySWR9YCk7XG5cdGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGdsb2JhbFBvcyA9IG5ldyBWZWN0b3IoY2FudmFzUmVjdC54ICsgcG9zLngsIGNhbnZhc1JlY3QueSArIHBvcy55KTtcblxuXHRicnVzaFByZXZpZXcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRicnVzaFByZXZpZXcuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuXHRicnVzaFByZXZpZXcuc3R5bGUubGVmdCA9IGAke2dsb2JhbFBvcy54fXB4YDtcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLnRvcCA9IGAke2dsb2JhbFBvcy55fXB4YDtcblx0YnJ1c2hQcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS10YWdcIikuc3R5bGUudG9wID0gYCR7c2l6ZX1weGA7XG5cdGJydXNoUHJldmlldy5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtdGFnXCIpLnN0eWxlLmNvbG9yID0gY29sb3I7XG59XG5cbi8vIGRvd25sb2FkIGNhbnZhcyBpbWFnZVxuZnVuY3Rpb24gc2F2ZUJ0bkNsaWNrZWQoZSlcbntcblx0aWYgKGlzU2F2aW5nQ2FudmFzKVxuXHR7XG5cdFx0aXNTYXZpbmdDYW52YXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0bGV0IGJhY2tncm91bmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0bGV0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cblx0YmFja2dyb3VuZEltYWdlLm9ubG9hZCA9ICgpID0+XG5cdHtcblx0XHRpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXHR9O1xuXG5cdGltYWdlLm9ubG9hZCA9ICgpID0+XG5cdHtcblx0XHRsZXQgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0bGV0IHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHR0ZW1wQ2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xuXHRcdHRlbXBDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblx0XHR0ZW1wQ3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kSW1hZ2UsIDAsIDApO1xuXHRcdHRlbXBDdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcblxuXHRcdGN1cnJlbnRUYXJnZXQuaHJlZiA9IHRlbXBDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdGlzU2F2aW5nQ2FudmFzID0gdHJ1ZTtcblx0XHRjdXJyZW50VGFyZ2V0LmNsaWNrKCk7XG5cdH07XG5cblx0YmFja2dyb3VuZEltYWdlLnNyYyA9IGJnQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheWVkUm9vbVVybChmdWxsUm9vbVVybCwgcm9vbU5hbWUpXG57XG5cdGxldCByZWdleCA9IC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pPy87XG5cdGxldCBkb21haW5OYW1lID0gZnVsbFJvb21VcmwucmVwbGFjZShyZWdleCwgXCJcIik7XG5cdGRvbWFpbk5hbWUgPSBkb21haW5OYW1lLnJlcGxhY2UoL1xcLy4qJC8sIFwiXCIpO1xuXHRsZXQgZGlzcGxheU5hbWUgPSBgJHtkb21haW5OYW1lfS8ke3Jvb21OYW1lfWA7XG5cblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgTUVESVVNX1NJWkVfUFgpXG5cdFx0ZGlzcGxheU5hbWUgPSBgJHtyb29tTmFtZX1gO1xuXG5cdHJvb21VcmxMaW5rLnF1ZXJ5U2VsZWN0b3IoXCIudXJsLWNvbnRhaW5lciBzcGFuXCIpLmlubmVySFRNTCA9IGRpc3BsYXlOYW1lO1xufVxuXG4vLyBjb25uZWN0IHRvIHdlYnNvY2tldFxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNvY2tldCgpXG57XG5cdHRyeVxuXHR7XG5cdFx0c29ja2V0ID0gaW8oKTtcblxuXHRcdHNvY2tldC5vbihcInJlY2VpdmVSb29tRGF0YVwiLCAoZnVsbFJvb21VcmwsIHJvb21OYW1lLCB1c2VyTmFtZSwgcm9vbVVzZXJzKSA9PlxuXHRcdHtcblx0XHRcdHVwZGF0ZURpc3BsYXllZFJvb21VcmwoZnVsbFJvb21VcmwsIHJvb21OYW1lKTtcblx0XHRcdHJvb21VcmxMaW5rLmhyZWYgPSBmdWxsUm9vbVVybDtcblx0XHRcdHJvb21VcmxMaW5rLmRhdGFzZXQuY2xpcGJvYXJkID0gZnVsbFJvb21Vcmw7XG5cdFx0XHRkb2N1bWVudC50aXRsZSA9IGBEemluZSAtICR7cm9vbU5hbWV9YDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1wYW5lbCBpbnB1dFwiKS52YWx1ZSA9IHVzZXJOYW1lO1xuXHRcdFx0dXNlcnMgPSByb29tVXNlcnM7XG5cblx0XHRcdC8vIGlmIGl0J3MgdGhlIGZpcnN0IHVzZXIgaW4gYSByb29tIHNldCB0aGVpciBiYWNrZ3JvdW5kIHRvIHdoaXRlIGluc3RlYWQgb2YgZGVmYXVsdCB0cmFuc3BhcmVudFxuXHRcdFx0aWYgKHVzZXJzLmxlbmd0aCA9PSAwICYmIGlzRmlyc3RKb2luKVxuXHRcdFx0XHRmaWxsQmFja2dyb3VuZCgpO1xuXG5cdFx0XHRpc0ZpcnN0Sm9pbiA9IGZhbHNlO1xuXHRcdFx0dXNlcnMuZm9yRWFjaCh1c2VyID0+IGNyZWF0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VyLm5hbWUsIHVzZXIuaWQpKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbihcInVzZXJKb2luXCIsICh1c2VyTmFtZSwgdXNlcklkKSA9PlxuXHRcdHtcblx0XHRcdG5vdGlmaWNhdGlvblN5c3RlbS5hZGQobmV3IE5vdGlmaWNhdGlvbihgVXNlciAke3VzZXJOYW1lfSBoYXMgam9pbmVkYCkpO1xuXHRcdFx0dXNlcnMucHVzaCh7aWQ6IHVzZXJJZCwgbmFtZTogdXNlck5hbWV9KTtcblx0XHRcdGNyZWF0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VyTmFtZSwgdXNlcklkKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbihcInVzZXJMZWF2ZVwiLCAodXNlck5hbWUsIHVzZXJJZCkgPT5cblx0XHR7XG5cdFx0XHRub3RpZmljYXRpb25TeXN0ZW0uYWRkKG5ldyBOb3RpZmljYXRpb24oYFVzZXIgJHt1c2VyTmFtZX0gaGFzIGxlZnRgKSk7XG5cdFx0XHR1c2Vycy5zcGxpY2UodXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5pZCA9PSB1c2VySWQpLCAxKTtcblx0XHRcdGRlbGV0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VySWQpO1xuXHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKFwiZHJhd1wiLCBkcmF3aW5nRGF0YSA9PlxuXHRcdHtcblx0XHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xuXHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKFwiY2FudmFzUmVxdWVzdFwiLCAoKSA9PlxuXHRcdHtcblx0XHRcdHNvY2tldC5lbWl0KFwicmVjZWl2ZUNhbnZhc1wiLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKFwiYmFja2dyb3VuZENhbnZhc1JlcXVlc3RcIiwgKCkgPT5cblx0XHR7XG5cdFx0XHRzb2NrZXQuZW1pdChcInJlY2VpdmVCYWNrZ3JvdW5kQ2FudmFzXCIsIGJnQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oXCJyZWNlaXZlQ2FudmFzXCIsIChjYW52YXNEYXRhLCB3aWR0aCwgaGVpZ2h0KSA9PlxuXHRcdHtcblx0XHRcdHNldENhbnZhc1NpemUoe3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9KTtcblx0XHRcdGxvYWRDYW52YXNEYXRhKGN0eCwgY2FudmFzRGF0YSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oXCJyZWNlaXZlQ2FudmFzU2l6ZVwiLCAod2lkdGgsIGhlaWdodCkgPT5cblx0XHR7XG5cdFx0XHRzZXRDYW52YXNTaXplKHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oXCJyZWNlaXZlQmFja2dyb3VuZENhbnZhc1wiLCBiZ0NhbnZhc0RhdGEgPT5cblx0XHR7XG5cdFx0XHRsb2FkQ2FudmFzRGF0YShiZ0N0eCwgYmdDYW52YXNEYXRhKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbihcImJhY2tncm91bmRDbGVhclwiLCAoKSA9PlxuXHRcdHtcblx0XHRcdGJnQ3R4LmNsZWFyUmVjdCgwLCAwLCBiZ0NhbnZhcy53aWR0aCwgYmdDYW52YXMuaGVpZ2h0KTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbihcInNldEFkbWluXCIsIGlzQWRtaW4gPT5cblx0XHR7XG5cdFx0XHRjb25zdCBhZG1pblNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZG1pbi1zZXR0aW5nc1wiKTtcblx0XHRcdGlmIChpc0FkbWluID09IHRydWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChhZG1pblNldHRpbmdzLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcblx0XHRcdFx0XHRhZG1pblNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0aWYgKCFhZG1pblNldHRpbmdzLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcblx0XHRcdFx0XHRhZG1pblNldHRpbmdzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oXCJjdXJzb3JQb3NpdGlvblwiLCAodXNlcklkLCBwb3MsIHNpemUsIGNvbG9yKSA9PlxuXHRcdHtcblx0XHRcdGlmICghc2hvd1JlbW90ZUN1cnNvcnMpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0dXBkYXRlUmVtb3RlQnJ1c2hQcmV2aWV3KHVzZXJJZCwgcG9zLCBzaXplLCBjb2xvcik7XG5cdFx0fSk7XG5cblx0fSBjYXRjaCAoZXJyb3IpXG5cdHtcblx0XHRjb25zb2xlLmVycm9yKFwiRVJST1I6IGNhbid0IGNvbm5lY3QgdG8gc2VydmVyXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGJydXNoU2l6ZUJ0bkNsaWNrZWQoZSlcbntcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGlmIChicnVzaFNpemVNZW51LnN0eWxlLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpXG5cdHtcblx0XHRicnVzaFNpemVNZW51LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHR9IGVsc2Vcblx0e1xuXHRcdGJydXNoU2l6ZU1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG5cdFx0dmFyIHJlY3QgPSBicnVzaFNpemVNZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBwYXJlbnRSZWN0ID0gYnJ1c2hTaXplTWVudS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBwb3NYID0gcGFyZW50UmVjdC5sZWZ0ICsgKHBhcmVudFJlY3Qud2lkdGggLyAyKSAtIChyZWN0LndpZHRoIC8gMik7XG5cblx0XHRpZiAocG9zWCA8IDApXG5cdFx0XHRwb3NYID0gMDtcblxuXHRcdGJydXNoU2l6ZU1lbnUuc3R5bGUubGVmdCA9IHBvc1ggKyBcInB4XCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkQ2FudmFzQmFja2dyb3VuZEltYWdlKClcbntcblx0YmFja2dyb3VuZFNlbGVjdGlvbk1vZGFsLmhpZGUoKTtcblxuXHRjb25zdCBpbWFnZVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnLWltYWdlLXByZXZpZXdcIik7XG5cdGxvYWRDYW52YXNEYXRhKGJnQ3R4LCBpbWFnZVByZXZpZXcuc3JjKTtcblx0c29ja2V0LmVtaXQoXCJyZWNlaXZlQmFja2dyb3VuZENhbnZhc0FsbFwiLCBpbWFnZVByZXZpZXcuc3JjKTtcbn1cblxuZnVuY3Rpb24gc2V0dGluZ3NCdG5DbGlja2VkKGUpXG57XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1wYW5lbFwiKTtcblx0aWYgKHBhbmVsLnN0eWxlLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpXG5cdHtcblx0XHRwYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblx0fSBlbHNlXG5cdHtcblx0XHRwYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cblx0XHRjb25zdCByZWN0ID0gcGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgcGFyZW50UmVjdCA9IHBhbmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHBvc1ggPSBwYXJlbnRSZWN0LmxlZnQgKyAocGFyZW50UmVjdC53aWR0aCAvIDIpIC0gKHJlY3Qud2lkdGggLyAyKTtcblxuXHRcdGlmIChwb3NYICsgcmVjdC53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKVxuXHRcdFx0cG9zWCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aDtcblxuXHRcdHBhbmVsLnN0eWxlLmxlZnQgPSBgJHtwb3NYfXB4YDtcblx0fVxufVxuXG4vLyBuYW1lIGNoYW5nZWQgYnkgdXNlclxuZnVuY3Rpb24gdXNlck5hbWVDaGFuZ2VkKGUpXG57XG5cdHNvY2tldC5lbWl0KFwidXNlck5hbWVDaGFuZ2VcIiwgZS50YXJnZXQudmFsdWUpO1xuXHRjb25zdCBjb29raWVNYXhBZ2UgPSA2MCo2MCoyNCozMDtcblx0ZG9jdW1lbnQuY29va2llID0gYHVzZXJOYW1lPSR7ZS50YXJnZXQudmFsdWV9OyBtYXgtYWdlPSR7Y29va2llTWF4QWdlfWA7XG59XG5cbmZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZWQoKVxue1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnMtcGFuZWxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cdGJydXNoU2l6ZU1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cblx0Ly8gdGhlcmUgYXJlIHR3byBzaXplIHNsaWRlcnMgYnV0IG9ubHkgb25lIGlzIGRpc3BsYXllZCBhdCBhIHRpbWVcblx0Ly8gd2hpY2ggc2xpZGVyIGlzIGRpc3BsYXllZCBkZXBlbmRzIG9uIHdpbmRvdyBzaXplXG5cdC8vIHdlIGRvbid0IGtub3cgaWYgYW55IG9mIHRoZW0ganVzdCBiZWNhbWUgdmlzaWJsZS9pbnZpc2libGUgc28gdXBkYXRlIGJvdGggd2l0aCBldmVyeSB3aW5kb3cgcmVzaXplXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2l6ZS1zbGlkZXJcIikuZm9yRWFjaCgoc2xpZGVyKSA9PlxuXHR7XG5cdFx0c2xpZGVyLnVwZGF0ZShudWxsLCBwYWludFRvb2wuc2l6ZSk7XG5cdH0pO1xuXG5cdHJlcG9zaXRpb25DYW52YXMoKTtcblx0dXBkYXRlVGV4dEN1cnNvclBvcygpO1xufVxuXG5mdW5jdGlvbiB3aW5kb3dNb3VzZU1vdmVkKGUpXG57XG5cdGlmIChsYXN0U2VsZWN0ZWRTbGlkZXIpXG5cdFx0bGFzdFNlbGVjdGVkU2xpZGVyLnVwZGF0ZShlKTtcbn1cblxuZnVuY3Rpb24ga2V5UHJlc3NlZChlKVxue1xuXHRpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgVGV4dClcblx0e1xuXHRcdGlmIChlLmtleSA9PSBcIkVudGVyXCIpXG5cdFx0e1xuXHRcdFx0bGV0IG5ld1BvcyA9IG5ldyBWZWN0b3IoZHJhd2luZ0VuZFBvcy54LCBkcmF3aW5nU3RhcnRQb3MueSArIHBhaW50VG9vbC5zaXplKTtcblx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobmV3UG9zLCBudWxsKTtcblx0XHR9IGVsc2Vcblx0XHR7XG5cdFx0XHRjb25zdCBkcmF3aW5nRGF0YSA9IG5ldyBEcmF3aW5nRGF0YShkcmF3aW5nU3RhcnRQb3MsIGRyYXdpbmdFbmRQb3MsIHBhaW50VG9vbCwgZS5rZXkpO1xuXHRcdFx0ZHJhdyhkcmF3aW5nRGF0YSk7XG5cdFx0XHRzb2NrZXQuZW1pdChcImRyYXdcIiwgZHJhd2luZ0RhdGEpO1xuXHRcdFx0bGV0IG5ld1BvcyA9IG5ldyBWZWN0b3IoZHJhd2luZ1N0YXJ0UG9zLnggKyBjdHgubWVhc3VyZVRleHQoZS5rZXkpLndpZHRoLCBkcmF3aW5nU3RhcnRQb3MueSk7XG5cdFx0XHR1cGRhdGVEcmF3aW5nUG9zKG5ld1BvcywgbnVsbCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGFzayB1c2VyIGZvciBjb25maXJtYXRpb24gd2hlbiB0aGV5IHRyeSB0byBsZWF2ZSB0aGUgcGFnZVxuZnVuY3Rpb24gYmVmb3JlV2luZG93VW5sb2FkZWQoZSlcbntcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRlLnJldHVyblZhbHVlID0gXCJcIjtcbn1cblxuLy8gdXNlciBlZGl0ZWQgY2FudmFzIHNpemUgaW5wdXRcbmZ1bmN0aW9uIGNhbnZhc1NpemVTZXR0aW5nQ2hhbmdlZChlKVxue1xuXHRjb25zdCBhcHBseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLXNpemUtYXBwbHlcIik7XG5cdGlmIChhcHBseUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSlcblx0XHRhcHBseUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG5cblx0YXBwbHlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXBwbHlDYW52YXNTaXplKGUpXG57XG5cdGNvbnN0IGFwcGx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtc2l6ZS1hcHBseVwiKTtcblx0aWYgKCFhcHBseUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSlcblx0XHRhcHBseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG5cblx0YXBwbHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXHRsZXQgd2lkdGggPSBNYXRoLnJvdW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLXdpZHRoXCIpLnZhbHVlKTtcblx0bGV0IGhlaWdodCA9IE1hdGgucm91bmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtaGVpZ2h0XCIpLnZhbHVlKTtcblx0c2V0Q2FudmFzU2l6ZSh7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH0pO1xuXHRzb2NrZXQuZW1pdChcInNldENhbnZhc1NpemVcIiwgd2lkdGgsIGhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRDdXJzb3JQb3NpdGlvbigpXG57XG5cdGlmIChjdXJzb3JNb3ZlZClcblx0e1xuXHRcdGxldCBzaXplID0gcGFpbnRUb29sLnNpemU7XG5cdFx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEZpbGwpXG5cdFx0XHRzaXplID0gMTtcblxuXHRcdHNvY2tldC5lbWl0KFwiY3Vyc29yUG9zaXRpb25cIiwgY3Vyc29yUG9zaXRpb24sIHNpemUsIHBhaW50VG9vbC5jb2xvcik7XG5cdFx0Y3Vyc29yTW92ZWQgPSBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB0ZXh0UGFzdGVkKGUpXG57XG5cdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBUZXh0KVxuXHR7XG5cdFx0bGV0IGNsaXBib2FyZERhdGEgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XG5cdFx0bGV0IHBhc3RlZERhdGEgPSBjbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpO1xuXG5cdFx0aWYgKHBhc3RlZERhdGEubGVuZ3RoIDw9IDApXG5cdFx0XHRyZXR1cm47XG5cblx0XHRsZXQgcm93cyA9IHBhc3RlZERhdGEuc3BsaXQoL1xcbi9nKTtcblx0XHRyb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+XG5cdFx0e1xuXHRcdFx0aWYgKHJvdy5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBkcmF3aW5nRGF0YSA9IG5ldyBEcmF3aW5nRGF0YShkcmF3aW5nU3RhcnRQb3MsIGRyYXdpbmdFbmRQb3MsIHBhaW50VG9vbCwgcm93KTtcblx0XHRcdFx0ZHJhdyhkcmF3aW5nRGF0YSk7XG5cdFx0XHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XG5cdFx0XHRcdGxldCBuZXdQb3MgPSBuZXcgVmVjdG9yKGRyYXdpbmdTdGFydFBvcy54ICsgY3R4Lm1lYXN1cmVUZXh0KHJvdykud2lkdGgsIGRyYXdpbmdTdGFydFBvcy55KTtcblx0XHRcdFx0dXBkYXRlRHJhd2luZ1BvcyhuZXdQb3MsIG51bGwpO1xuXG5cdFx0XHRcdGlmIChpbmRleCAhPSByb3dzLmxlbmd0aCAtIDEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuZXdQb3MgPSBuZXcgVmVjdG9yKGRyYXdpbmdFbmRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnkgKyBwYWludFRvb2wuc2l6ZSk7XG5cdFx0XHRcdFx0dXBkYXRlRHJhd2luZ1BvcyhuZXdQb3MsIG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRHJhd2luZ1BvcyhzdGFydFBvcywgZW5kUG9zKVxue1xuXHRpZiAoc3RhcnRQb3MgIT0gbnVsbClcblx0e1xuXHRcdGlmIChzdGFydFBvcy54ID4gY2FudmFzLndpZHRoKVxuXHRcdFx0c3RhcnRQb3MueCA9IGNhbnZhcy53aWR0aDtcblxuXHRcdGlmIChzdGFydFBvcy55ID4gY2FudmFzLmhlaWdodClcblx0XHRcdHN0YXJ0UG9zLnkgPSBjYW52YXMuaGVpZ2h0O1xuXG5cdFx0ZHJhd2luZ1N0YXJ0UG9zID0gc3RhcnRQb3M7XG5cdH1cblxuXHRpZiAoZW5kUG9zICE9IG51bGwpXG5cdHtcblx0XHRpZiAoZW5kUG9zLnggPiBjYW52YXMud2lkdGgpXG5cdFx0XHRlbmRQb3MueCA9IGNhbnZhcy53aWR0aDtcblxuXHRcdGlmIChlbmRQb3MueSA+IGNhbnZhcy5oZWlnaHQpXG5cdFx0XHRlbmRQb3MueSA9IGNhbnZhcy5oZWlnaHQ7XG5cblx0XHRkcmF3aW5nRW5kUG9zID0gZW5kUG9zO1xuXHR9XG5cblx0dXBkYXRlVGV4dEN1cnNvclBvcygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUZXh0Q3Vyc29yUG9zKClcbntcblx0Y29uc3QgdGV4dEN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIik7XG5cdGNvbnN0IHRleHRDdXJzb3JSZWN0ID0gdGV4dEN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0dGV4dEN1cnNvci5zdHlsZS5sZWZ0ID0gYCR7ZHJhd2luZ1N0YXJ0UG9zLnggKyBjYW52YXMub2Zmc2V0TGVmdH1weGA7XG5cdHRleHRDdXJzb3Iuc3R5bGUudG9wID0gYCR7KGRyYXdpbmdTdGFydFBvcy55ICsgY2FudmFzLm9mZnNldFRvcCkgLSB0ZXh0Q3Vyc29yUmVjdC5oZWlnaHR9cHhgO1xufVxuXG5mdW5jdGlvbiBjbGVhckJhY2tncm91bmQoKVxue1xuXHRiYWNrZ3JvdW5kU2VsZWN0aW9uTW9kYWwuaGlkZSgpO1xuXHRiZ0N0eC5jbGVhclJlY3QoMCwgMCwgYmdDYW52YXMud2lkdGgsIGJnQ2FudmFzLmhlaWdodCk7XG5cdHNvY2tldC5lbWl0KFwiYmFja2dyb3VuZENsZWFyQWxsXCIpO1xufVxuXG5mdW5jdGlvbiBmaWxsQmFja2dyb3VuZCgpXG57XG5cdGJhY2tncm91bmRTZWxlY3Rpb25Nb2RhbC5oaWRlKCk7XG5cdGJnQ3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRTZWxlY3Rpb25Nb2RhbC5iZ0NvbG9yO1xuXHRiZ0N0eC5maWxsUmVjdCgwLCAwLCBiZ0NhbnZhcy53aWR0aCwgYmdDYW52YXMuaGVpZ2h0KTtcblx0c29ja2V0LmVtaXQoXCJyZWNlaXZlQmFja2dyb3VuZENhbnZhc0FsbFwiLCBiZ0NhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpO1xufVxuXG5mdW5jdGlvbiBpbml0U2l6ZVNsaWRlcnMoKVxue1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpemUtc2xpZGVyXCIpLmZvckVhY2goKHNsaWRlcikgPT5cblx0e1xuXHRcdHNsaWRlci51cGRhdGUobnVsbCwgREVGQVVMVF9CUlVTSF9TSVpFKTtcblx0XHRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT5cblx0XHR7XG5cdFx0XHRsZXQgc2l6ZSA9IE51bWJlcihlLnRhcmdldC5nZXRWYWx1ZSgpKTtcblx0XHRcdHNpemVWYWx1ZVNwYW4uaW5uZXJIVE1MID0gc2l6ZSArIFwicHhcIjtcblx0XHRcdHBhaW50VG9vbC5zZXRTaXplKHNpemUpO1xuXHRcdFx0dXBkYXRlQnJ1c2hQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cbntcblx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcmF3QXJlYVwiKTtcblx0aWYgKCFjYW52YXMpXG5cdFx0cmV0dXJuO1xuXG5cdGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGJnQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZ0NhbnZhc1wiKTtcblx0YmdDdHggPSBiZ0NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHNoYXBlUHJldmlld0NhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hhcGVQcmV2aWV3XCIpO1xuXHRzaGFwZVByZXZpZXdDdHggPSBzaGFwZVByZXZpZXdDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdHJvb21VcmxMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tLXVybFwiKTtcblx0Y29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZVwiKTtcblx0Y29sb3JTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3Itc2VsZWN0b3JcIik7XG5cdGNvbnN0IGJydXNoU2l6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJ1c2gtc2l6ZVwiKTtcblx0YnJ1c2hTaXplTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJ1c2gtc2l6ZS1tZW51XCIpO1xuXHRzaXplVmFsdWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXplLXZhbHVlXCIpO1xuXHRiYWNrZ3JvdW5kU2VsZWN0aW9uTW9kYWwgPSBuZXcgQmFja2dyb3VuZE1vZGFsKFwiYmFja2dyb3VuZC1tb2RhbFwiKTtcblx0Y29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHRpbmdzXCIpO1xuXHRjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnMtcGFuZWwgaW5wdXRcIik7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgd2luZG93UmVzaXplZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB3aW5kb3dNb3VzZVVwKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB3aW5kb3dNb3VzZVVwKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgd2luZG93TW91c2VNb3ZlZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwga2V5UHJlc3NlZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGJlZm9yZVdpbmRvd1VubG9hZGVkKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0ZXh0UGFzdGVkKTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2FudmFzTW91c2VNb3ZlZCk7XG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbnZhc01vdXNlTW92ZWQpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBjYW52YXNNb3VzZU92ZXIpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGNhbnZhc01vdXNlT3V0KTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2FudmFzTW91c2VEb3duKTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNhbnZhc1RvdWNoU3RhcnQpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGNhbnZhc1RvdWNoRW5kZWQpO1xuXHRyb29tVXJsTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm9vbVVybENsaWNrZWQpO1xuXHRzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlQnRuQ2xpY2tlZCk7XG5cdGNvbG9yU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBwYWludENvbG9yQ2hhbmdlZCk7XG5cdGJydXNoU2l6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnJ1c2hTaXplQnRuQ2xpY2tlZCk7XG5cdHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXR0aW5nc0J0bkNsaWNrZWQpO1xuXHRuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1c2VyTmFtZUNoYW5nZWQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy13aWR0aFwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2FudmFzU2l6ZVNldHRpbmdDaGFuZ2VkKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtaGVpZ2h0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjYW52YXNTaXplU2V0dGluZ0NoYW5nZWQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1zaXplLWFwcGx5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHBseUNhbnZhc1NpemUpO1xuXG5cdHNldEludGVydmFsKHNlbmRDdXJzb3JQb3NpdGlvbiwgTkVUX0NVUlNPUl9VUERBVEVfSU5URVJWQUxfTVMpO1xuXG5cdGJhY2tncm91bmRTZWxlY3Rpb25Nb2RhbC5vbkFkZEltYWdlQnRuQ2xpY2soYWRkQ2FudmFzQmFja2dyb3VuZEltYWdlKTtcblx0YmFja2dyb3VuZFNlbGVjdGlvbk1vZGFsLm9uQ2xlYXJCdG5DbGljayhjbGVhckJhY2tncm91bmQpO1xuXHRiYWNrZ3JvdW5kU2VsZWN0aW9uTW9kYWwub25GaWxsQnRuQ2xpY2soZmlsbEJhY2tncm91bmQpO1xuXG5cdGluaXRpYWxpemVTb2NrZXQoKTtcblx0c2V0Q2FudmFzU2l6ZShkZWZhdWx0Q2FudmFzU2l6ZSgpKTtcblx0Y3JlYXRlTG9jYWxCcnVzaFByZXZpZXcoKTtcblxuXHRpbml0Q29tcG9uZW50cygpO1xuXG5cdHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rvb2xiYXJcIik7XG5cdHRvb2xiYXIuaW5pdEJ1dHRvbnMoREVGQVVMVF9QQUlOVF9UT09MLCBERUZBVUxUX1BBSU5UX0NPTE9SKTtcblx0dG9vbGJhci5hZGRFdmVudExpc3RlbmVyKFwidG9vbFN3aXRjaFwiLCBwYWludFRvb2xTd2l0Y2hlZCk7XG5cdHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbG9yU3dpdGNoXCIsIHBhaW50Q29sb3JDaGFuZ2VkKTtcblx0dG9vbGJhci5hZGRFdmVudExpc3RlbmVyKFwiYmdTZXR0aW5nc09wZW5cIiwgKCkgPT4gYmFja2dyb3VuZFNlbGVjdGlvbk1vZGFsLnRvZ2dsZSgpKTtcblx0dG9vbGJhci5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGV4dFBhc3RlZCk7XG5cblx0aW5pdFNpemVTbGlkZXJzKCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1aS1zbGlkZXJcIikuZm9yRWFjaCgoc2xpZGVyKSA9PlxuXHR7XG5cdFx0Y29uc3Qgc2xpZGVyVXNlZCA9ICgpID0+XG5cdFx0e1xuXHRcdFx0bGFzdFNlbGVjdGVkU2xpZGVyID0gc2xpZGVyXG5cdFx0fTtcblxuXHRcdHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNsaWRlclVzZWQpO1xuXHRcdHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzbGlkZXJVc2VkKTtcblx0fSk7XG59KTsiLCJjbGFzcyBDb2xvclxue1xuXHRjb25zdHJ1Y3RvcihyLCBnLCBiLCBhPTI1NSlcblx0e1xuXHRcdHRoaXMuciA9IHI7XG5cdFx0dGhpcy5nID0gZztcblx0XHR0aGlzLmIgPSBiO1xuXHRcdHRoaXMuYSA9IGE7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUhleChoZXhTdHJpbmcpXG5cdHtcblx0XHRjb25zdCByZWRNYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9eIz8oW2EtZjAtOV17Mn0pLyk7XG5cdFx0Y29uc3QgZ3JlZW5NYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9eIy57Mn0/KFthLWYwLTldezJ9KS8pO1xuXHRcdGNvbnN0IGJsdWVNYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9eIy57NH0/KFthLWYwLTldezJ9KS8pO1xuXHRcdGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZE1hdGNoZXNbMV0sIDE2KTtcblx0XHRjb25zdCBncmVlbiA9IHBhcnNlSW50KGdyZWVuTWF0Y2hlc1sxXSwgMTYpO1xuXHRcdGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlTWF0Y2hlc1sxXSwgMTYpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb2xvcihyZWQsIGdyZWVuLCBibHVlKTtcblx0fVxuXG5cdHRvSGV4KClcblx0e1xuXHRcdGxldCByZWQgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuXHRcdGxldCBncmVlbiA9IHRoaXMuZy50b1N0cmluZygxNik7XG5cdFx0bGV0IGJsdWUgPSB0aGlzLmIudG9TdHJpbmcoMTYpO1xuXG5cdFx0aWYgKHJlZC5sZW5ndGggPT0gMSlcblx0XHRcdHJlZCA9IFwiMFwiICsgcmVkO1xuXG5cdFx0aWYgKGdyZWVuLmxlbmd0aCA9PSAxKVxuXHRcdFx0Z3JlZW4gPSBcIjBcIiArIGdyZWVuO1xuXG5cdFx0aWYgKGJsdWUubGVuZ3RoID09IDEpXG5cdFx0XHRibHVlID0gXCIwXCIgKyBibHVlO1xuXG5cdFx0cmV0dXJuIGAjJHtyZWR9JHtncmVlbn0ke2JsdWV9YDtcblx0fVxuXG5cdGVxdWFscyhjb2xvcilcblx0e1xuXHRcdHJldHVybiB0aGlzLnIgPT0gY29sb3IuciAmJiB0aGlzLmcgPT0gY29sb3IuZyAmJiB0aGlzLmIgPT0gY29sb3IuYjtcblx0fVxuXG5cdGVxdWFsc1JnYmEoY29sb3IpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5yID09IGNvbG9yLnIgJiYgdGhpcy5nID09IGNvbG9yLmcgJiYgdGhpcy5iID09IGNvbG9yLmIgJiYgdGhpcy5hID09IGNvbG9yLmE7XG5cdH1cblxuXHR0b0FycmF5KClcblx0e1xuXHRcdHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvcjsiLCIvLyBkcmF3aW5nIGRhdGEgc2VudCB0aHJvdWdoIHRoZSB3ZWJzb2NrZXRcbmNsYXNzIERyYXdpbmdEYXRhXG57XG5cdGNvbnN0cnVjdG9yKHN0YXJ0UG9zLCBlbmRQb3MsIHRvb2wsIHRleHQ9XCJcIilcblx0e1xuXHRcdHRoaXMuc3RhcnRQb3MgPSBzdGFydFBvcztcblx0XHR0aGlzLmVuZFBvcyA9IGVuZFBvcztcblx0XHR0aGlzLnRvb2wgPSB0b29sO1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ0RhdGE7IiwiY29uc3QgVG9vbFR5cGUgPVxue1xuXHRCUlVTSDogMCxcblx0UEFJTlRfUk9MTEVSOiAxLFxuXHRQRU5DSUw6IDIsXG5cdEVSQVNFUjogMyxcblx0VEVYVDogNCxcblx0RklMTDogNSxcblx0Q09MT1JfUElDS0VSOiA2LFxuXHRSRUNUOiA3LFxuXHRMSU5FOiA4LFxuXHRFTExJUFNFOiA5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sVHlwZTsiLCJjbGFzcyBWZWN0b3Jcbntcblx0Y29uc3RydWN0b3IoeD0wLCB5PTApXG5cdHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yOyIsImNsYXNzIE5vdGlmaWNhdGlvblN5c3RlbVxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbnMgPSBbXTtcblx0XHR0aGlzLm5vdGlmaWNhdGlvblZlcnRpY2FsU3BhY2UgPSA4MDtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkJvdHRvbU1hcmdpbiA9IDEwO1xuXHR9XG5cblx0YWRkKG5vdGlmaWNhdGlvbilcblx0e1xuXHRcdHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKG4gPT5cblx0XHR7XG5cdFx0XHRjb25zdCBvZmZzZXRUb3AgPSBuLmdldEVsZW1lbnQoKS5vZmZzZXRUb3A7XG5cdFx0XHRjb25zdCBuZXdCb3R0b21PZmZzZXQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gb2Zmc2V0VG9wKSArIHRoaXMubm90aWZpY2F0aW9uQm90dG9tTWFyZ2luO1xuXHRcdFx0bi5nZXRFbGVtZW50KCkuc3R5bGUuYm90dG9tID0gbmV3Qm90dG9tT2Zmc2V0ICsgXCJweFwiO1xuXG5cdFx0XHRjb25zdCBtYXhOb3RpZmljYXRpb25zID0gTWF0aC5mbG9vcigod2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIC8gdGhpcy5ub3RpZmljYXRpb25WZXJ0aWNhbFNwYWNlKTtcblx0XHRcdGNvbnN0IG51bU5vdGlmaWNhdGlvbnMgPSB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoICsgMTsgLy8gZXhpc3Rpbmcgbm90aWZpY2F0aW9ucyArIHRoZSBuZXcgb25lIHdlIGNyZWF0ZVxuXG5cdFx0XHRpZiAobnVtTm90aWZpY2F0aW9ucyA+IG1heE5vdGlmaWNhdGlvbnMpXG5cdFx0XHRcdHRoaXMucmVtb3ZlT2xkZXN0KCk7XG5cdFx0fSk7XG5cblx0XHQvLyByZW1vdmUgYWZ0ZXIgZmFkZSBhbmltYXRpb24gaXMgZmluaXNoZWRcblx0XHRub3RpZmljYXRpb24uZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT5cblx0XHR7XG5cdFx0XHR0aGlzLnJlbW92ZShub3RpZmljYXRpb24pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5ub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKTtcblx0fVxuXG5cdHJlbW92ZShub3RpZmljYXRpb24pXG5cdHtcblx0XHRsZXQgZWxlbWVudCA9IG5vdGlmaWNhdGlvbi5nZXRFbGVtZW50KCk7XG5cdFx0aWYgKGVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhlbGVtZW50KSlcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cblx0XHR0aGlzLm5vdGlmaWNhdGlvbnMgPSB0aGlzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBub3RpZmljYXRpb24pO1xuXHR9XG5cblx0cmVtb3ZlT2xkZXN0KClcblx0e1xuXHRcdGxldCBvbGRlc3ROb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMucmVkdWNlKChwcmV2LCBjdXIpID0+XG5cdFx0XHRwcmV2LmRhdGVDcmVhdGVkIDwgY3VyLmRhdGVDcmVhdGVkID8gcHJldiA6IGN1cik7XG5cdFx0dGhpcy5yZW1vdmUob2xkZXN0Tm90aWZpY2F0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25TeXN0ZW07IiwiY2xhc3MgTm90aWZpY2F0aW9uXG57XG5cdGNvbnN0cnVjdG9yKHRleHQsIGxpZmVUaW1lTXM9NTAwMClcblx0e1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0dGhpcy5kYXRlQ3JlYXRlZCA9IERhdGUubm93KCk7XG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvblwiKTtcblx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gYG5vdGlmICR7bGlmZVRpbWVNc31tc2A7XG5cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLyB0aGlzIHdpbGwgZXNjYXBlIEhUTUwgc28gaXQncyBzYWZlIHRvIHVzZSB3aXRoIHVzZXIgbmFtZXNcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0fVxuXG5cdGdldEVsZW1lbnQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIEJydXNoIGV4dGVuZHMgVG9vbFxue1xuXHRjb25zdHJ1Y3RvcihzaXplLCBjb2xvcilcblx0e1xuXHRcdHN1cGVyKFRvb2xUeXBlLkJSVVNILCBcInJvdW5kXCIsIHNpemUsIGNvbG9yKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcnVzaDsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL21vZGVscy9jb2xvclwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgVG9vbFxue1xuXHRjb25zdHJ1Y3RvcihzaXplLCBjb2xvcilcblx0e1xuXHRcdHN1cGVyKFRvb2xUeXBlLkNPTE9SX1BJQ0tFUiwgXCJyb3VuZFwiLCBzaXplLCBjb2xvcik7XG5cdH1cblxuXHRnZXRQaXhlbENvbG9yKGN0eCwgYmdDdHgsIHBvc1gsIHBvc1kpXG5cdHtcblx0XHRsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YShwb3NYLCBwb3NZLCAxLCAxKTtcblxuXHRcdGlmIChpbWFnZURhdGEuZGF0YVszXSAhPSAwKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoaW1hZ2VEYXRhLmRhdGFbMF0sIGltYWdlRGF0YS5kYXRhWzFdLCBpbWFnZURhdGEuZGF0YVsyXSkudG9IZXgoKTtcblx0XHR9IGVsc2UgLy8gaWYgcGl4ZWwgaXMgdHJhbnNwYXJlbnQgcmV0dXJuIGJhY2tncm91bmQgY29sb3Jcblx0XHR7XG5cdFx0XHRpbWFnZURhdGEgPSBiZ0N0eC5nZXRJbWFnZURhdGEocG9zWCwgcG9zWSwgMSwgMSlcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoaW1hZ2VEYXRhLmRhdGFbMF0sIGltYWdlRGF0YS5kYXRhWzFdLCBpbWFnZURhdGEuZGF0YVsyXSkudG9IZXgoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXI7IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yLCBjaXJjbGU9ZmFsc2UpXG5cdHtcblx0XHRzdXBlcihUb29sVHlwZS5FTExJUFNFLCBcImJ1dHRcIiwgc2l6ZSwgY29sb3IsIDApO1xuXHRcdHRoaXMuY2lyY2xlID0gY2lyY2xlO1xuXHR9XG5cblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXG5cdHtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cblx0XHRpZiAodGhpcy5jaXJjbGUpXG5cdFx0e1xuXHRcdFx0bGV0IHJhZGl1cyA9IE1hdGgubWF4KE1hdGguYWJzKGVuZFBvc1ggLSBwb3NYKSwgTWF0aC5hYnMoZW5kUG9zWSAtIHBvc1kpKSAvIDI7XG5cdFx0XHRsZXQgb2Zmc2V0RGlyZWN0aW9uWCA9IE1hdGguc2lnbihlbmRQb3NYIC0gcG9zWCk7XG5cdFx0XHRsZXQgb2Zmc2V0RGlyZWN0aW9uWSA9IE1hdGguc2lnbihlbmRQb3NZIC0gcG9zWSk7XG5cdFx0XHRsZXQgY2VudGVyWCA9IHBvc1ggKyByYWRpdXMgKiBvZmZzZXREaXJlY3Rpb25YO1xuXHRcdFx0bGV0IGNlbnRlclkgPSBwb3NZICsgcmFkaXVzICogb2Zmc2V0RGlyZWN0aW9uWTtcblxuXHRcdFx0Y3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcblx0XHR9IGVsc2Vcblx0XHR7XG5cdFx0XHRsZXQgY2VudGVyWCA9IChwb3NYICsgZW5kUG9zWCkgLyAyO1xuXHRcdFx0bGV0IGNlbnRlclkgPSAocG9zWSArIGVuZFBvc1kpIC8gMjtcblx0XHRcdGxldCByYWRpdXNYID0gTWF0aC5hYnMoY2VudGVyWCAtIHBvc1gpO1xuXHRcdFx0bGV0IHJhZGl1c1kgPSBNYXRoLmFicyhjZW50ZXJZIC0gcG9zWSk7XG5cblx0XHRcdGN0eC5lbGxpcHNlKGNlbnRlclgsIGNlbnRlclksIHJhZGl1c1gsIHJhZGl1c1ksIDAsIDAsIDIgKiBNYXRoLlBJKTtcblx0XHR9XG5cblx0XHRjdHguc3Ryb2tlKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxsaXBzZTsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcblxuY2xhc3MgRXJhc2VyIGV4dGVuZHMgVG9vbFxue1xuXHRjb25zdHJ1Y3RvcihzaXplLCBjb2xvcilcblx0e1xuXHRcdHN1cGVyKFRvb2xUeXBlLkVSQVNFUiwgXCJyb3VuZFwiLCBzaXplLCBjb2xvciwgMCwgXCJkZXN0aW5hdGlvbi1vdXRcIik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VyOyIsImltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vbW9kZWxzL2NvbG9yXCI7XG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcblxuY2xhc3MgRmlsbCBleHRlbmRzIFRvb2xcbntcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXG5cdHtcblx0XHRzdXBlcihUb29sVHlwZS5GSUxMLCBcInJvdW5kXCIsIHNpemUsIGNvbG9yKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRJbWFnZURhdGFPZmZzZXQocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKVxuXHR7XG5cdFx0cmV0dXJuIChwb3NZICogaW1hZ2VEYXRhLndpZHRoICsgcG9zWCkgKiA0O1xuXHR9XG5cblx0c3RhdGljIGdldFBpeGVsQ29sb3IocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKVxuXHR7XG5cdFx0Y29uc3Qgb2Zmc2V0ID0gRmlsbC5nZXRJbWFnZURhdGFPZmZzZXQocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKTtcblx0XHRjb25zdCBhcnIgPSBpbWFnZURhdGEuZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIDQpO1xuXHRcdHJldHVybiBbYXJyWzBdLCBhcnJbMV0sIGFyclsyXSwgYXJyWzNdXTtcblx0fVxuXG5cdHN0YXRpYyBzZXRQaXhlbENvbG9yKHBvc1gsIHBvc1ksIGltYWdlRGF0YSwgY29sb3IpXG5cdHtcblx0XHRjb25zdCBvZmZzZXQgPSBGaWxsLmdldEltYWdlRGF0YU9mZnNldChwb3NYLCBwb3NZLCBpbWFnZURhdGEpO1xuXHRcdGltYWdlRGF0YS5kYXRhW29mZnNldF0gPSBjb2xvclswXTtcblx0XHRpbWFnZURhdGEuZGF0YVtvZmZzZXQgKyAxXSA9IGNvbG9yWzFdO1xuXHRcdGltYWdlRGF0YS5kYXRhW29mZnNldCArIDJdID0gY29sb3JbMl07XG5cdFx0aW1hZ2VEYXRhLmRhdGFbb2Zmc2V0ICsgM10gPSAyNTU7XG5cdH1cblxuXHRzdGF0aWMgYXJlQ29sb3JzRXF1YWwoY29sb3IxLCBjb2xvcjIpXG5cdHtcblx0XHRyZXR1cm4gY29sb3IxWzBdID09IGNvbG9yMlswXVxuXHRcdFx0JiYgY29sb3IxWzFdID09IGNvbG9yMlsxXVxuXHRcdFx0JiYgY29sb3IxWzJdID09IGNvbG9yMlsyXVxuXHRcdFx0JiYgY29sb3IxWzNdID09IGNvbG9yMlszXTtcblx0fVxuXG5cdC8vIHRvbGVyYW5jZSBpcyBuZWVkZWQgdG8gZmlsbCBwZW5jaWwgZHJhd24gc2hhcGVzIGJlY2F1c2Ugb2YgY2FudmFzIGJ1ZyBpbiBicm93c2Vyczpcblx0Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTY2NjEwMFxuXHQvLyBpdCBzdGlsbCBkb2Vzbid0IGZpbGwgYnJ1c2ggZHJhd24gc2hhcGVzIGJlY2F1c2Ugb2YgaXRzIHNoYWRvd1xuXHRzdGF0aWMgYXJlQ29sb3JzU2ltaWxhcihjb2xvcjEsIGNvbG9yMilcblx0e1xuXHRcdGNvbnN0IHRvbGVyYW5jZSA9IDY7XG5cdFx0Y29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGNvbG9yMVswXSAtIGNvbG9yMlswXSkgKyBNYXRoLmFicyhjb2xvcjFbMV0gLSBjb2xvcjJbMV0pXG5cdFx0XHRcdFx0XHQrIE1hdGguYWJzKGNvbG9yMVsyXSAtIGNvbG9yMlsyXSkgKyBNYXRoLmFicyhjb2xvcjFbM10gLSBjb2xvcjJbM10pO1xuXG5cdFx0cmV0dXJuIGRpZmZlcmVuY2UgPD0gdG9sZXJhbmNlO1xuXHR9XG5cblx0c3RhdGljIHBpeGVsTmVlZHNVcGRhdGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgaW1hZ2VEYXRhLCBjdXJDb2xvciwgY29sb3JUb1JlcGxhY2UpXG5cdHtcblx0XHRpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB3aWR0aCB8fCB5ID49IGhlaWdodClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdGxldCBwaXhlbENvbG9yID0gdGhpcy5nZXRQaXhlbENvbG9yKHgsIHksIGltYWdlRGF0YSk7XG5cdFx0aWYgKHRoaXMuYXJlQ29sb3JzU2ltaWxhcihwaXhlbENvbG9yLCBjdXJDb2xvcikgfHwgIXRoaXMuYXJlQ29sb3JzU2ltaWxhcihwaXhlbENvbG9yLCBjb2xvclRvUmVwbGFjZSkpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBmaWxsUGl4ZWxzKHdpZHRoLCBoZWlnaHQsIHBvc1gsIHBvc1ksIGltYWdlRGF0YSwgY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKVxuXHR7XG5cdFx0bGV0IHBpeGVscyA9IG5ldyBVaW50MzJBcnJheSh3aWR0aCpoZWlnaHQqOCk7XG5cdFx0cGl4ZWxzWzBdID0gcG9zWDtcblx0XHRwaXhlbHNbMV0gPSBwb3NZO1xuXHRcdGxldCBxdWV1ZUxlbmd0aCA9IDI7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGggLSAxOyBpKz0yKVxuXHRcdHtcblx0XHRcdGlmIChpID4gcXVldWVMZW5ndGgpXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRpZiAodGhpcy5waXhlbE5lZWRzVXBkYXRlKHBpeGVsc1tpXSwgcGl4ZWxzW2krMV0sIHdpZHRoLCBoZWlnaHQsIGltYWdlRGF0YSwgY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5zZXRQaXhlbENvbG9yKHBpeGVsc1tpXSwgcGl4ZWxzW2krMV0sIGltYWdlRGF0YSwgY3VyQ29sb3IpO1xuXG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aF0gPSBwaXhlbHNbaV0gLSAxOyAvLyBnbyBsZWZ0XG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdO1xuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xuXG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aF0gPSBwaXhlbHNbaV07XG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdIC0gMTsgLy8gZ28gdXBcblx0XHRcdFx0cXVldWVMZW5ndGggKz0gMjtcblxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldICsgMTsgLy8gZ28gcmlnaHRcblx0XHRcdFx0cGl4ZWxzW3F1ZXVlTGVuZ3RoKzFdID0gcGl4ZWxzW2krMV07XG5cdFx0XHRcdHF1ZXVlTGVuZ3RoICs9IDI7XG5cblx0XHRcdFx0cGl4ZWxzW3F1ZXVlTGVuZ3RoXSA9IHBpeGVsc1tpXTtcblx0XHRcdFx0cGl4ZWxzW3F1ZXVlTGVuZ3RoKzFdID0gcGl4ZWxzW2krMV0gKyAxOyAvLyBnbyBkb3duXG5cdFx0XHRcdHF1ZXVlTGVuZ3RoICs9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmlsbERhdGEocG9zWCwgcG9zWSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgaW1hZ2VEYXRhKVxuXHR7XG5cdFx0aWYgKHBvc1ggPCAwIHx8IHBvc1ggPiBjYW52YXNXaWR0aClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0aWYgKHBvc1kgPCAwIHx8IHBvc1kgPiBjYW52YXNIZWlnaHQpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGxldCBjdXJDb2xvciA9IENvbG9yLmZyb21IZXgodGhpcy5jb2xvcikudG9BcnJheSgpO1xuXHRcdGxldCBjb2xvclRvUmVwbGFjZSA9IEZpbGwuZ2V0UGl4ZWxDb2xvcihwb3NYLCBwb3NZLCBpbWFnZURhdGEpO1xuXG5cdFx0aWYgKEZpbGwuYXJlQ29sb3JzRXF1YWwoY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKSlcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdGN1ckNvbG9yLFxuXHRcdFx0Y29sb3JUb1JlcGxhY2Vcblx0XHRdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGw7IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIExpbmUgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxuXHR7XG5cdFx0c3VwZXIoVG9vbFR5cGUuTElORSwgXCJzcXVhcmVcIiwgc2l6ZSwgY29sb3IsIDApO1xuXHR9XG5cblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXG5cdHtcblx0XHRsZXQgc3RhcnRQb3NYID0gcG9zWDtcblx0XHRsZXQgc3RhcnRQb3NZID0gcG9zWTtcblxuXHRcdGlmIChlbmRQb3NYIDwgcG9zWClcblx0XHRcdHN0YXJ0UG9zWCA9IGVuZFBvc1g7XG5cblx0XHRpZiAoZW5kUG9zWSA8IHBvc1kpXG5cdFx0XHRzdGFydFBvc1kgPSBlbmRQb3NZO1xuXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5tb3ZlVG8ocG9zWCwgcG9zWSk7XG5cdFx0Y3R4LmxpbmVUbyhlbmRQb3NYLCBlbmRQb3NZKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZTsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcblxuY2xhc3MgUGFpbnRSb2xsZXIgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxuXHR7XG5cdFx0c3VwZXIoVG9vbFR5cGUuUEFJTlRfUk9MTEVSLCBcImJ1dHRcIiwgc2l6ZSwgY29sb3IsIDEpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50Um9sbGVyOyIsImltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xuXG5jbGFzcyBQZW5jaWwgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxuXHR7XG5cdFx0c3VwZXIoVG9vbFR5cGUuUEVOQ0lMLCBcInJvdW5kXCIsIHNpemUsIGNvbG9yLCAwKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW5jaWw7IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIFJlY3QgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yLCBzcXVhcmU9ZmFsc2UpXG5cdHtcblx0XHRzdXBlcihUb29sVHlwZS5SRUNULCBcImJ1dHRcIiwgc2l6ZSwgY29sb3IsIDApO1xuXHRcdHRoaXMuc3F1YXJlID0gc3F1YXJlO1xuXHR9XG5cblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXG5cdHtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cblx0XHRpZiAodGhpcy5zcXVhcmUpXG5cdFx0e1xuXHRcdFx0Y29uc3Qgc2l6ZSA9IE1hdGgubWF4KE1hdGguYWJzKGVuZFBvc1ggLSBwb3NYKSwgTWF0aC5hYnMoZW5kUG9zWSAtIHBvc1kpKTtcblx0XHRcdGNvbnN0IG9mZnNldERpcmVjdGlvblggPSBNYXRoLnNpZ24oZW5kUG9zWCAtIHBvc1gpO1xuXHRcdFx0Y29uc3Qgb2Zmc2V0RGlyZWN0aW9uWSA9IE1hdGguc2lnbihlbmRQb3NZIC0gcG9zWSk7XG5cdFx0XHRjb25zdCB3aWR0aCA9IHNpemUgKiBvZmZzZXREaXJlY3Rpb25YO1xuXHRcdFx0Y29uc3QgaGVpZ2h0ID0gc2l6ZSAqIG9mZnNldERpcmVjdGlvblk7XG5cblx0XHRcdGN0eC5yZWN0KHBvc1gsIHBvc1ksIHdpZHRoLCBoZWlnaHQpO1xuXG5cdFx0fSBlbHNlXG5cdFx0e1xuXHRcdFx0Y29uc3Qgc3RhcnRQb3NYID0gTWF0aC5taW4ocG9zWCwgZW5kUG9zWCk7XG5cdFx0XHRjb25zdCBzdGFydFBvc1kgPSBNYXRoLm1pbihwb3NZLCBlbmRQb3NZKTtcblx0XHRcdGNvbnN0IHdpZHRoID0gTWF0aC5hYnMoZW5kUG9zWCAtIHBvc1gpO1xuXHRcdFx0Y29uc3QgaGVpZ2h0ID0gTWF0aC5hYnMoZW5kUG9zWSAtIHBvc1kpO1xuXG5cdFx0XHRjdHgucmVjdChzdGFydFBvc1gsIHN0YXJ0UG9zWSwgd2lkdGgsIGhlaWdodCk7XG5cdFx0fVxuXG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3Q7IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxuXHR7XG5cdFx0c3VwZXIoVG9vbFR5cGUuVEVYVCwgXCJyb3VuZFwiLCBzaXplLCBjb2xvciwgMCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDsiLCJpbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcbmltcG9ydCBCcnVzaCBmcm9tIFwiLi9icnVzaFwiO1xuaW1wb3J0IFBhaW50Um9sbGVyIGZyb20gXCIuL3BhaW50LXJvbGxlclwiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9wZW5jaWxcIjtcbmltcG9ydCBFcmFzZXIgZnJvbSBcIi4vZXJhc2VyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgRmlsbCBmcm9tIFwiLi9maWxsXCI7XG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vY29sb3ItcGlja2VyXCI7XG5pbXBvcnQgUmVjdCBmcm9tIFwiLi9yZWN0XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9saW5lXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9lbGxpcHNlXCI7XG5cbmNvbnN0IHRvb2xGcm9tVHlwZSA9ICh0b29sVHlwZSwgc2l6ZSwgY29sb3IpID0+XG57XG5cdHN3aXRjaCAodG9vbFR5cGUpXG5cdHtcblx0XHRjYXNlIFRvb2xUeXBlLkJSVVNIOlxuXHRcdFx0cmV0dXJuIG5ldyBCcnVzaChzaXplLCBjb2xvcik7XG5cdFx0Y2FzZSBUb29sVHlwZS5QQUlOVF9ST0xMRVI6XG5cdFx0XHRyZXR1cm4gbmV3IFBhaW50Um9sbGVyKHNpemUsIGNvbG9yKTtcblx0XHRjYXNlIFRvb2xUeXBlLlBFTkNJTDpcblx0XHRcdHJldHVybiBuZXcgUGVuY2lsKHNpemUsIGNvbG9yKTtcblx0XHRjYXNlIFRvb2xUeXBlLkVSQVNFUjpcblx0XHRcdHJldHVybiBuZXcgRXJhc2VyKHNpemUsIGNvbG9yKTtcblx0XHRjYXNlIFRvb2xUeXBlLlRFWFQ6XG5cdFx0XHRyZXR1cm4gbmV3IFRleHQoc2l6ZSwgY29sb3IpO1xuXHRcdGNhc2UgVG9vbFR5cGUuRklMTDpcblx0XHRcdHJldHVybiBuZXcgRmlsbChzaXplLCBjb2xvcik7XG5cdFx0Y2FzZSBUb29sVHlwZS5DT0xPUl9QSUNLRVI6XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yUGlja2VyKHNpemUsIGNvbG9yKTtcblx0XHRjYXNlIFRvb2xUeXBlLlJFQ1Q6XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3Qoc2l6ZSwgY29sb3IpO1xuXHRcdGNhc2UgVG9vbFR5cGUuTElORTpcblx0XHRcdHJldHVybiBuZXcgTGluZShzaXplLCBjb2xvcik7XG5cdFx0Y2FzZSBUb29sVHlwZS5FTExJUFNFOlxuXHRcdFx0cmV0dXJuIG5ldyBFbGxpcHNlKHNpemUsIGNvbG9yKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0Y29uc29sZS5lcnJvcihcIndyb25nIHRvb2wgdHlwZTpcIiwgdG9vbFR5cGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvb2xGcm9tVHlwZTsiLCJjbGFzcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHR5cGUsIHN0eWxlLCBzaXplLCBjb2xvciwgYmx1cj0zLCBvcGVyYXRpb249XCJzb3VyY2Utb3ZlclwiKVxuXHR7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnN0eWxlID0gc3R5bGU7XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5ibHVyID0gYmx1cjtcblx0XHR0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcblx0fVxuXG5cdGdldFNpemUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZTtcblx0fVxuXG5cdHNldFNpemUoc2l6ZSlcblx0e1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cdH1cblxuXHRnZXRDb2xvcigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5jb2xvcjtcblx0fVxuXG5cdHNldENvbG9yKGNvbG9yKVxuXHR7XG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2w7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==