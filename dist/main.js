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

eval("var setUpSettings = function setUpSettings() {\n  var navHeight = document.getElementById(\"nav\").offsetHeight;\n  var yoffset = window.pageYOffset;\n\n  var applyPositionOnSection = function applyPositionOnSection(sectionToApply) {\n    newYoffset = window.pageYOffset;\n    var section = document.getElementById(sectionToApply);\n    var sectionNameHeight = section.firstElementChild.offsetHeight;\n    var lastChild = section.lastElementChild.lastElementChild;\n    var intViewportHeight = window.innerHeight;\n    var intViewportWidth = window.innerWidth;\n    sectionTop = section.getBoundingClientRect().top;\n    sectionBottom = section.getBoundingClientRect().bottom;\n    sectionNameRight = section.getBoundingClientRect().right;\n    sectionLastChildTop = section.lastElementChild.lastElementChild.getBoundingClientRect().top;\n    sectionLastChildBottom = section.lastElementChild.lastElementChild.getBoundingClientRect().bottom; //control margin-auto\n\n    if (sectionTop <= 0 && intViewportWidth >= 1024) {\n      section.firstElementChild.classList.remove(\"margin-bottom-auto\");\n      section.firstElementChild.classList.add(\"margin-top-auto\");\n    } else {\n      section.firstElementChild.classList.add(\"margin-bottom-auto\");\n      section.firstElementChild.classList.remove(\"margin-top-auto\");\n    } //scrolling down\n\n\n    if (newYoffset > yoffset) {\n      yoffset = newYoffset; //both devices\n\n      if (sectionTop <= navHeight && sectionLastChildBottom > intViewportHeight) {\n        section.firstElementChild.classList.add(\"fixed-name\");\n      } //phones and tablets config\n\n\n      if (intViewportWidth < 1024) {\n        //fix name div\n        if (sectionTop <= navHeight && sectionLastChildTop > intViewportHeight) {\n          section.lastElementChild.firstElementChild.style.marginTop = \"\".concat(sectionNameHeight, \"px\");\n        } //unfix name div\n\n\n        if (sectionLastChildTop < navHeight + sectionNameHeight) {\n          section.firstElementChild.classList.remove(\"fixed-name\");\n          section.firstElementChild.classList.add(\"absolute-name\");\n          section.firstElementChild.style.marginBottom = \"\".concat(lastChild.offsetHeight, \"px\");\n        }\n      } else {\n        //desktop config\n        //unfix name div\n        if (sectionLastChildBottom < intViewportHeight) {\n          section.firstElementChild.classList.remove(\"fixed-name\");\n        }\n      }\n    } else {\n      //scrolling up\n      yoffset = newYoffset; //both devices\n\n      if (sectionTop > navHeight) {\n        section.firstElementChild.classList.remove(\"fixed-name\");\n      } //phones and tablets config\n\n\n      if (intViewportWidth < 1024) {\n        //unfix name div\n        if (sectionTop > navHeight) {\n          section.lastElementChild.firstElementChild.style.marginTop = \"0px\";\n        } //fix name div\n\n\n        if (sectionTop < 0 && sectionLastChildTop > navHeight + sectionNameHeight) {\n          section.firstElementChild.classList.remove(\"absolute-name\");\n          section.firstElementChild.classList.add(\"fixed-name\");\n          section.firstElementChild.style.marginBottom = \"0\";\n        }\n      } else {\n        //desktop config\n        //unfix name div\n        if (sectionTop < 0 && sectionLastChildBottom > innerHeight) {\n          section.firstElementChild.classList.add(\"fixed-name\");\n        }\n      }\n    }\n  };\n\n  window.addEventListener(\"scroll\", function () {\n    var intViewportHeight = window.innerHeight;\n    var projectsTop = document.getElementById(\"projects\").getBoundingClientRect().top;\n    var projectsBottom = document.getElementById(\"projects\").getBoundingClientRect().bottom;\n    var aboutTop = document.getElementById(\"about\").getBoundingClientRect().top;\n    var aboutBottom = document.getElementById(\"about\").getBoundingClientRect().bottom;\n\n    if ((projectsTop <= navHeight || projectsTop <= intViewportHeight) && projectsBottom > navHeight) {\n      applyPositionOnSection(\"projects\");\n    }\n\n    if ((aboutTop <= navHeight || aboutTop <= intViewportHeight) && aboutBottom > navHeight) {\n      applyPositionOnSection(\"about\");\n    }\n  });\n};\n\nvar initialize = function () {\n  setUpSettings();\n  window.addEventListener(\"resize\", function () {\n    setUpSettings();\n  });\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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