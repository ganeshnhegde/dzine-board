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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/fill.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/fill.worker.js":
/*!**********************************!*\
  !*** ./public/js/fill.worker.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/fill */ "./public/js/tools/fill.js");


onmessage = (e) =>
{
	_tools_fill__WEBPACK_IMPORTED_MODULE_0__["default"].fillPixels(e.data[0], e.data[1], e.data[2], e.data[3], e.data[4], e.data[5], e.data[6]);
	postMessage(e.data[4]); // send back imageData
};

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2ZpbGwud29ya2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tb2RlbHMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vZGVscy90b29sLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL3Rvb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWdDOztBQUVoQztBQUNBO0FBQ0EsQ0FBQyxtREFBSTtBQUNMLHdCQUF3QjtBQUN4QixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQsNENBQTRDLEVBQUUsV0FBVyxFQUFFO0FBQzNELDJDQUEyQyxFQUFFLFdBQVcsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRTs7Ozs7Ozs7Ozs7O0FDeERwQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ2R2QjtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNVO0FBQ087O0FBRTNDLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFRO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHFEQUFLO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQ3hIbkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJmaWxsLndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcHVibGljL2pzL2ZpbGwud29ya2VyLmpzXCIpO1xuIiwiaW1wb3J0IEZpbGwgZnJvbSBcIi4vdG9vbHMvZmlsbFwiO1xuXG5vbm1lc3NhZ2UgPSAoZSkgPT5cbntcblx0RmlsbC5maWxsUGl4ZWxzKGUuZGF0YVswXSwgZS5kYXRhWzFdLCBlLmRhdGFbMl0sIGUuZGF0YVszXSwgZS5kYXRhWzRdLCBlLmRhdGFbNV0sIGUuZGF0YVs2XSk7XG5cdHBvc3RNZXNzYWdlKGUuZGF0YVs0XSk7IC8vIHNlbmQgYmFjayBpbWFnZURhdGFcbn07IiwiY2xhc3MgQ29sb3Jcbntcblx0Y29uc3RydWN0b3IociwgZywgYiwgYT0yNTUpXG5cdHtcblx0XHR0aGlzLnIgPSByO1xuXHRcdHRoaXMuZyA9IGc7XG5cdFx0dGhpcy5iID0gYjtcblx0XHR0aGlzLmEgPSBhO1xuXHR9XG5cblx0c3RhdGljIGZyb21IZXgoaGV4U3RyaW5nKVxuXHR7XG5cdFx0Y29uc3QgcmVkTWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvXiM/KFthLWYwLTldezJ9KS8pO1xuXHRcdGNvbnN0IGdyZWVuTWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvXiMuezJ9PyhbYS1mMC05XXsyfSkvKTtcblx0XHRjb25zdCBibHVlTWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvXiMuezR9PyhbYS1mMC05XXsyfSkvKTtcblx0XHRjb25zdCByZWQgPSBwYXJzZUludChyZWRNYXRjaGVzWzFdLCAxNik7XG5cdFx0Y29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlbk1hdGNoZXNbMV0sIDE2KTtcblx0XHRjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZU1hdGNoZXNbMV0sIDE2KTtcblxuXHRcdHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSk7XG5cdH1cblxuXHR0b0hleCgpXG5cdHtcblx0XHRsZXQgcmVkID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcblx0XHRsZXQgZ3JlZW4gPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuXHRcdGxldCBibHVlID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcblxuXHRcdGlmIChyZWQubGVuZ3RoID09IDEpXG5cdFx0XHRyZWQgPSBcIjBcIiArIHJlZDtcblxuXHRcdGlmIChncmVlbi5sZW5ndGggPT0gMSlcblx0XHRcdGdyZWVuID0gXCIwXCIgKyBncmVlbjtcblxuXHRcdGlmIChibHVlLmxlbmd0aCA9PSAxKVxuXHRcdFx0Ymx1ZSA9IFwiMFwiICsgYmx1ZTtcblxuXHRcdHJldHVybiBgIyR7cmVkfSR7Z3JlZW59JHtibHVlfWA7XG5cdH1cblxuXHRlcXVhbHMoY29sb3IpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5yID09IGNvbG9yLnIgJiYgdGhpcy5nID09IGNvbG9yLmcgJiYgdGhpcy5iID09IGNvbG9yLmI7XG5cdH1cblxuXHRlcXVhbHNSZ2JhKGNvbG9yKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuciA9PSBjb2xvci5yICYmIHRoaXMuZyA9PSBjb2xvci5nICYmIHRoaXMuYiA9PSBjb2xvci5iICYmIHRoaXMuYSA9PSBjb2xvci5hO1xuXHR9XG5cblx0dG9BcnJheSgpXG5cdHtcblx0XHRyZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3I7IiwiY29uc3QgVG9vbFR5cGUgPVxue1xuXHRCUlVTSDogMCxcblx0UEFJTlRfUk9MTEVSOiAxLFxuXHRQRU5DSUw6IDIsXG5cdEVSQVNFUjogMyxcblx0VEVYVDogNCxcblx0RklMTDogNSxcblx0Q09MT1JfUElDS0VSOiA2LFxuXHRSRUNUOiA3LFxuXHRMSU5FOiA4LFxuXHRFTExJUFNFOiA5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sVHlwZTsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL21vZGVscy9jb2xvclwiO1xuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XG5cbmNsYXNzIEZpbGwgZXh0ZW5kcyBUb29sXG57XG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxuXHR7XG5cdFx0c3VwZXIoVG9vbFR5cGUuRklMTCwgXCJyb3VuZFwiLCBzaXplLCBjb2xvcik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0SW1hZ2VEYXRhT2Zmc2V0KHBvc1gsIHBvc1ksIGltYWdlRGF0YSlcblx0e1xuXHRcdHJldHVybiAocG9zWSAqIGltYWdlRGF0YS53aWR0aCArIHBvc1gpICogNDtcblx0fVxuXG5cdHN0YXRpYyBnZXRQaXhlbENvbG9yKHBvc1gsIHBvc1ksIGltYWdlRGF0YSlcblx0e1xuXHRcdGNvbnN0IG9mZnNldCA9IEZpbGwuZ2V0SW1hZ2VEYXRhT2Zmc2V0KHBvc1gsIHBvc1ksIGltYWdlRGF0YSk7XG5cdFx0Y29uc3QgYXJyID0gaW1hZ2VEYXRhLmRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyA0KTtcblx0XHRyZXR1cm4gW2FyclswXSwgYXJyWzFdLCBhcnJbMl0sIGFyclszXV07XG5cdH1cblxuXHRzdGF0aWMgc2V0UGl4ZWxDb2xvcihwb3NYLCBwb3NZLCBpbWFnZURhdGEsIGNvbG9yKVxuXHR7XG5cdFx0Y29uc3Qgb2Zmc2V0ID0gRmlsbC5nZXRJbWFnZURhdGFPZmZzZXQocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKTtcblx0XHRpbWFnZURhdGEuZGF0YVtvZmZzZXRdID0gY29sb3JbMF07XG5cdFx0aW1hZ2VEYXRhLmRhdGFbb2Zmc2V0ICsgMV0gPSBjb2xvclsxXTtcblx0XHRpbWFnZURhdGEuZGF0YVtvZmZzZXQgKyAyXSA9IGNvbG9yWzJdO1xuXHRcdGltYWdlRGF0YS5kYXRhW29mZnNldCArIDNdID0gMjU1O1xuXHR9XG5cblx0c3RhdGljIGFyZUNvbG9yc0VxdWFsKGNvbG9yMSwgY29sb3IyKVxuXHR7XG5cdFx0cmV0dXJuIGNvbG9yMVswXSA9PSBjb2xvcjJbMF1cblx0XHRcdCYmIGNvbG9yMVsxXSA9PSBjb2xvcjJbMV1cblx0XHRcdCYmIGNvbG9yMVsyXSA9PSBjb2xvcjJbMl1cblx0XHRcdCYmIGNvbG9yMVszXSA9PSBjb2xvcjJbM107XG5cdH1cblxuXHQvLyB0b2xlcmFuY2UgaXMgbmVlZGVkIHRvIGZpbGwgcGVuY2lsIGRyYXduIHNoYXBlcyBiZWNhdXNlIG9mIGNhbnZhcyBidWcgaW4gYnJvd3NlcnM6XG5cdC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE2NjYxMDBcblx0Ly8gaXQgc3RpbGwgZG9lc24ndCBmaWxsIGJydXNoIGRyYXduIHNoYXBlcyBiZWNhdXNlIG9mIGl0cyBzaGFkb3dcblx0c3RhdGljIGFyZUNvbG9yc1NpbWlsYXIoY29sb3IxLCBjb2xvcjIpXG5cdHtcblx0XHRjb25zdCB0b2xlcmFuY2UgPSA2O1xuXHRcdGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhjb2xvcjFbMF0gLSBjb2xvcjJbMF0pICsgTWF0aC5hYnMoY29sb3IxWzFdIC0gY29sb3IyWzFdKVxuXHRcdFx0XHRcdFx0KyBNYXRoLmFicyhjb2xvcjFbMl0gLSBjb2xvcjJbMl0pICsgTWF0aC5hYnMoY29sb3IxWzNdIC0gY29sb3IyWzNdKTtcblxuXHRcdHJldHVybiBkaWZmZXJlbmNlIDw9IHRvbGVyYW5jZTtcblx0fVxuXG5cdHN0YXRpYyBwaXhlbE5lZWRzVXBkYXRlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGltYWdlRGF0YSwgY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKVxuXHR7XG5cdFx0aWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gd2lkdGggfHwgeSA+PSBoZWlnaHQpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRsZXQgcGl4ZWxDb2xvciA9IHRoaXMuZ2V0UGl4ZWxDb2xvcih4LCB5LCBpbWFnZURhdGEpO1xuXHRcdGlmICh0aGlzLmFyZUNvbG9yc1NpbWlsYXIocGl4ZWxDb2xvciwgY3VyQ29sb3IpIHx8ICF0aGlzLmFyZUNvbG9yc1NpbWlsYXIocGl4ZWxDb2xvciwgY29sb3JUb1JlcGxhY2UpKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzdGF0aWMgZmlsbFBpeGVscyh3aWR0aCwgaGVpZ2h0LCBwb3NYLCBwb3NZLCBpbWFnZURhdGEsIGN1ckNvbG9yLCBjb2xvclRvUmVwbGFjZSlcblx0e1xuXHRcdGxldCBwaXhlbHMgPSBuZXcgVWludDMyQXJyYXkod2lkdGgqaGVpZ2h0KjgpO1xuXHRcdHBpeGVsc1swXSA9IHBvc1g7XG5cdFx0cGl4ZWxzWzFdID0gcG9zWTtcblx0XHRsZXQgcXVldWVMZW5ndGggPSAyO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoIC0gMTsgaSs9Milcblx0XHR7XG5cdFx0XHRpZiAoaSA+IHF1ZXVlTGVuZ3RoKVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0aWYgKHRoaXMucGl4ZWxOZWVkc1VwZGF0ZShwaXhlbHNbaV0sIHBpeGVsc1tpKzFdLCB3aWR0aCwgaGVpZ2h0LCBpbWFnZURhdGEsIGN1ckNvbG9yLCBjb2xvclRvUmVwbGFjZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuc2V0UGl4ZWxDb2xvcihwaXhlbHNbaV0sIHBpeGVsc1tpKzFdLCBpbWFnZURhdGEsIGN1ckNvbG9yKTtcblxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldIC0gMTsgLy8gZ28gbGVmdFxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGgrMV0gPSBwaXhlbHNbaSsxXTtcblx0XHRcdFx0cXVldWVMZW5ndGggKz0gMjtcblxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldO1xuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGgrMV0gPSBwaXhlbHNbaSsxXSAtIDE7IC8vIGdvIHVwXG5cdFx0XHRcdHF1ZXVlTGVuZ3RoICs9IDI7XG5cblx0XHRcdFx0cGl4ZWxzW3F1ZXVlTGVuZ3RoXSA9IHBpeGVsc1tpXSArIDE7IC8vIGdvIHJpZ2h0XG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdO1xuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xuXG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aF0gPSBwaXhlbHNbaV07XG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdICsgMTsgLy8gZ28gZG93blxuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldEZpbGxEYXRhKHBvc1gsIHBvc1ksIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGltYWdlRGF0YSlcblx0e1xuXHRcdGlmIChwb3NYIDwgMCB8fCBwb3NYID4gY2FudmFzV2lkdGgpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGlmIChwb3NZIDwgMCB8fCBwb3NZID4gY2FudmFzSGVpZ2h0KVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRsZXQgY3VyQ29sb3IgPSBDb2xvci5mcm9tSGV4KHRoaXMuY29sb3IpLnRvQXJyYXkoKTtcblx0XHRsZXQgY29sb3JUb1JlcGxhY2UgPSBGaWxsLmdldFBpeGVsQ29sb3IocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKTtcblxuXHRcdGlmIChGaWxsLmFyZUNvbG9yc0VxdWFsKGN1ckNvbG9yLCBjb2xvclRvUmVwbGFjZSkpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBbXG5cdFx0XHRjdXJDb2xvcixcblx0XHRcdGNvbG9yVG9SZXBsYWNlXG5cdFx0XTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxsOyIsImNsYXNzIFRvb2xcbntcblx0Y29uc3RydWN0b3IodHlwZSwgc3R5bGUsIHNpemUsIGNvbG9yLCBibHVyPTMsIG9wZXJhdGlvbj1cInNvdXJjZS1vdmVyXCIpXG5cdHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuc3R5bGUgPSBzdHlsZTtcblx0XHR0aGlzLnNpemUgPSBzaXplO1xuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcblx0XHR0aGlzLmJsdXIgPSBibHVyO1xuXHRcdHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuXHR9XG5cblx0Z2V0U2l6ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5zaXplO1xuXHR9XG5cblx0c2V0U2l6ZShzaXplKVxuXHR7XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblx0fVxuXG5cdGdldENvbG9yKClcblx0e1xuXHRcdHJldHVybiB0aGlzLmNvbG9yO1xuXHR9XG5cblx0c2V0Q29sb3IoY29sb3IpXG5cdHtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDsiXSwic291cmNlUm9vdCI6IiJ9