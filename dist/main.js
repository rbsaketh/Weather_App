/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pressure-icon-png-13.jpg":
/*!**************************************!*\
  !*** ./src/pressure-icon-png-13.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/pressure-icon-png-13.jpg\");\n\n//# sourceURL=webpack://weather_app/./src/pressure-icon-png-13.jpg?");

/***/ }),

/***/ "./src/pure-water-icon-isolated-png.png":
/*!**********************************************!*\
  !*** ./src/pure-water-icon-isolated-png.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/pure-water-icon-isolated-png.png\");\n\n//# sourceURL=webpack://weather_app/./src/pure-water-icon-isolated-png.png?");

/***/ }),

/***/ "./src/sun-icon-0.png":
/*!****************************!*\
  !*** ./src/sun-icon-0.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sun-icon-0.png\");\n\n//# sourceURL=webpack://weather_app/./src/sun-icon-0.png?");

/***/ }),

/***/ "./src/wind-speed-icon-6.jpg":
/*!***********************************!*\
  !*** ./src/wind-speed-icon-6.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/wind-speed-icon-6.jpg\");\n\n//# sourceURL=webpack://weather_app/./src/wind-speed-icon-6.jpg?");

/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function WeatherAPI(cityName) {\n    try {\n      console.log(`Fetching weather data for ${cityName}`);\n      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=df4e240b341549d9a86193717240406&q=' + cityName, { mode: 'cors' });\n      if (!response.ok) {\n        throw new Error(\"HTTP Error\");\n      }\n      const retrieval = await response.json();\n      console.log('Weather data retrieved:', retrieval);\n  \n      return {\n        degreeC: retrieval.current.temp_c,\n        degreeF: retrieval.current.temp_f,\n        humidity: retrieval.current.humidity,\n        pressureMb: retrieval.current.pressure_mb,\n        lastUpdate: retrieval.current.last_updated,\n        condition: retrieval.current.condition.text,\n        icon: retrieval.current.condition.icon,\n        feelsLikeC: retrieval.current.feelslike_c,\n        feelsLikeF: retrieval.current.feelslike_f,\n        windKph: retrieval.current.wind_kph,\n        precipMm: retrieval.current.precip_mm,\n        uvIndex: retrieval.current.uv\n      };\n    } catch (err) {\n      console.error('Error fetching weather data:', err);\n      throw err;\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherAPI);\n  \n\n//# sourceURL=webpack://weather_app/./src/fetchWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather.js */ \"./src/fetchWeather.js\");\n/* harmony import */ var _pure_water_icon_isolated_png_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pure-water-icon-isolated-png.png */ \"./src/pure-water-icon-isolated-png.png\");\n/* harmony import */ var _sun_icon_0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun-icon-0.png */ \"./src/sun-icon-0.png\");\n/* harmony import */ var _wind_speed_icon_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wind-speed-icon-6.jpg */ \"./src/wind-speed-icon-6.jpg\");\n/* harmony import */ var _pressure_icon_png_13_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pressure-icon-png-13.jpg */ \"./src/pressure-icon-png-13.jpg\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Select DOM elements\n  const weatherForm = document.getElementById('weather-form');\n  const cityInput = document.getElementById('city');\n  const errorSpan = document.querySelector('.error');\n\n  const temperatureF = document.getElementById('temperature-f');\n  const min = document.getElementById('min-temperature');\n  const icon = document.getElementById('icon');\n  const precipitationLevels = document.getElementById('precipitation-levels');\n  const uvIndex = document.getElementById('uv-index');\n  const windLevels = document.getElementById('wind-levels');\n  const pressureLevels = document.getElementById('pressure-levels');\n\n  // Add event listener to the form\n  weatherForm.addEventListener('submit', async (event) => {\n    event.preventDefault(); // Prevent the form from submitting the default way\n    const cityName = cityInput.value.trim();\n    if(cityName == null) {\n        throw new Error();\n    }\n    if (cityName.length >= 3 && cityName.length <= 25) {\n      try {\n        console.log(`Submitting form for city: ${cityName}`);\n        // Call the WeatherAPI function and pass the city name\n        const weatherData = await (0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityName);\n\n        // Display the weather data\n        temperatureF.textContent = `Temperature: ${weatherData.degreeF} °F`;\n        \n        icon.src = weatherData.icon;\n        icon.alt = weatherData.condition;\n        precipitationLevels.textContent = `Precipitation: ${weatherData.precipMm} mm`;\n        uvIndex.textContent = `UV Index: ${weatherData.uvIndex}`;\n        windLevels.textContent = `Wind: ${weatherData.windKph} kph`;\n        pressureLevels.textContent = `Pressure: ${weatherData.pressureMb} mb`;\n      } catch (err) {\n        console.error('Error getting weather data:', err);\n        errorSpan.textContent = 'Error fetching weather data.';\n      }\n    } else {\n      errorSpan.textContent = 'Please enter a valid city name (3-25 characters).';\n    }\n  });\n});\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;