/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var setUpSettings = function setUpSettings() {\n  var section = document.getElementById(\"projects\");\n  var navHeight = document.getElementById(\"nav\").offsetHeight;\n  var sectionNameHeight = section.firstElementChild.offsetHeight;\n  var yoffset = window.pageYOffset;\n  var intViewportHeight = window.innerHeight;\n  var intViewportWidth = window.innerWidth;\n  window.addEventListener(\"scroll\", function () {\n    newYoffset = window.pageYOffset;\n    sectionTop = section.getBoundingClientRect().top;\n    sectionBottom = section.getBoundingClientRect().bottom;\n    sectionNameRight = section.getBoundingClientRect().right;\n    sectionLastChildTop = section.lastElementChild.lastElementChild.getBoundingClientRect().top;\n    sectionLastChildBottom = section.lastElementChild.lastElementChild.getBoundingClientRect().bottom; //scrolling down\n\n    if (newYoffset > yoffset) {\n      yoffset = newYoffset; //phones and tablets config\n\n      if (intViewportWidth < 1024) {\n        //fix name div\n        if (sectionTop <= navHeight && sectionLastChildTop > intViewportHeight) {\n          section.firstElementChild.classList.add(\"fixed\");\n          section.firstElementChild.style.top = \"10vh\";\n          section.lastElementChild.firstElementChild.style.marginTop = \"\".concat(sectionNameHeight, \"px\");\n        } //unfix name div\n\n\n        if (sectionLastChildTop < navHeight + sectionNameHeight) {\n          section.firstElementChild.classList.remove(\"fixed\");\n          section.firstElementChild.classList.add(\"absolute\");\n          section.firstElementChild.style.top = \"\".concat(section.lastElementChild.lastElementChild.offsetTop, \"px\");\n        }\n      } else {\n        //desktop config\n        //fix name div\n        if (sectionTop <= 0) {\n          section.firstElementChild.classList.add(\"fixed\");\n          section.firstElementChild.style.top = \"0\";\n          section.firstElementChild.style.borderBottom = \"10px solid black\";\n          section.lastElementChild.style.marginLeft = \"auto\";\n        } //unfix name div\n\n\n        if (sectionLastChildBottom < intViewportHeight) {\n          console.log(sectionLastChildBottom);\n          section.firstElementChild.classList.remove(\"fixed\");\n          section.firstElementChild.style.marginTop = \"auto\";\n          section.firstElementChild.style.marginBottom = \"0\";\n          section.firstElementChild.style.borderBottom = \"none\";\n        }\n      }\n    } else {\n      //scrolling up\n      yoffset = newYoffset; //phones and tablets config\n\n      if (intViewportWidth < 1024) {\n        //unfix name div\n        if (sectionTop > navHeight) {\n          section.firstElementChild.classList.remove(\"fixed\");\n          section.firstElementChild.style.top = \"0\";\n          section.lastElementChild.firstElementChild.style.marginTop = \"0\";\n        } //fix name div\n\n\n        if (sectionTop < 0 && sectionLastChildTop > navHeight + sectionNameHeight) {\n          section.firstElementChild.classList.remove(\"absolute\");\n          section.firstElementChild.classList.add(\"fixed\");\n          section.firstElementChild.style.top = \"10vh\";\n        }\n      } else {\n        //desktop config\n        //fix name div\n        if (sectionTop > 0) {\n          section.firstElementChild.classList.remove(\"fixed\");\n          section.firstElementChild.style.top = \"0\";\n          section.firstElementChild.style.borderBottom = \"none\";\n        } //unfix name div\n\n\n        if (sectionTop < 0 && sectionLastChildBottom > innerHeight) {\n          section.firstElementChild.classList.add(\"fixed\");\n          section.firstElementChild.style.top = \"0\";\n          section.firstElementChild.style.marginTop = \"0\";\n          section.firstElementChild.style.marginBottom = \"auto\";\n          section.firstElementChild.style.borderBottom = \"10px solid black\";\n        }\n      }\n    }\n  });\n};\n\nvar initialize = function () {\n  setUpSettings();\n  window.addEventListener(\"resize\", function () {\n    return setUpSettings();\n  });\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;