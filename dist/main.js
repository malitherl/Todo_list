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

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillOut\": () => (/* binding */ fillOut),\n/* harmony export */   \"projectCreation\": () => (/* binding */ projectCreation)\n/* harmony export */ });\n\r\nfunction fillOut (){\r\n    const content = document.getElementById(\"content\");\r\n\r\n    //we create a form here so we can fill out todo elements \r\n\r\n    const form = document.createElement(\"form\");\r\n\r\n        const label1 = document.createElement(\"label\");\r\n        label1.textContent = \"Title: \";\r\n        const input1= document.createElement(\"input\");\r\n        input1.setAttribute(\"type\", \"text\");\r\n        input1.setAttribute(\"class\", \"info\");\r\n        const label2 = document.createElement(\"label\");\r\n        label2.textContent= \"Description: \";\r\n        const input2 = document.createElement(\"input\");\r\n        input2.setAttribute(\"type\", \"text\");\r\n        input2.setAttribute(\"class\", \"info\");\r\n        const label3 = document.createElement(\"label\");\r\n        label3.textContent= \"Due Date: \";\r\n        const input3 = document.createElement(\"input\");\r\n        input3.setAttribute(\"type\", \"date\");\r\n        input3.setAttribute(\"class\", \"info\");\r\n        const label4 = document.createElement(\"label\");\r\n        label4.textContent= \"Priorty: \";\r\n        const input4 = document.createElement(\"input\");\r\n        input4.setAttribute(\"class\", \"info\");\r\n        input4.setAttribute(\"type\", \"number\");\r\n        input4.setAttribute(\"min\", \"1\");\r\n        input4.setAttribute(\"max\", \"5\");\r\n        const label5= document.createElement(\"label\");\r\n        label5.textContent=\"Completed?\";\r\n        const input5 = document.createElement(\"input\");\r\n        input5.setAttribute(\"type\", \"checkbox\");\r\n        input5.setAttribute(\"value\", \"complete\");\r\n        input5.setAttribute(\"class\", \"info\");\r\n\r\n        const dropdown = document.createElement(\"select\");\r\n        dropdown.setAttribute(\"class\", \"info\");\r\n        const option = document.createElement(\"option\");\r\n        option.setAttribute(\"value\", \"personal\");\r\n        option.textContent= \"Personal\";\r\n\r\n        const option1 = document.createElement(\"option\");\r\n        option1.setAttribute(\"value\", \"work\");\r\n        option1.textContent =\"Work\";\r\n\r\n        const option2 = document.createElement(\"option\");\r\n        option2.setAttribute(\"value\", \"other\");\r\n        option2.textContent= \"Create New...\";\r\n\r\n        dropdown.appendChild(option);\r\n        dropdown.appendChild(option1);\r\n        dropdown.appendChild(option2);\r\n\r\n        const label6 = document.createElement(\"button\");\r\n        label6.textContent=\"Submit\";\r\n        label6.setAttribute(\"type\", \"button\");\r\n        label6.setAttribute(\"id\", \"submit\");\r\n\r\n        form.appendChild(label1); \r\n            form.appendChild(input1); \r\n        form.appendChild(label2);\r\n            form.appendChild(input2);\r\n        form.appendChild(label3);\r\n            form.appendChild(input3);\r\n        form.appendChild(label4);\r\n            form.appendChild(input4);\r\n        form.appendChild(label5);\r\n            form.appendChild(input5);\r\n        form.appendChild(dropdown);\r\n        form.appendChild(label6);\r\n        \r\n\r\n        content.appendChild(form);\r\n\r\n    const projectSection = document.createElement(\"DIV\");\r\n\r\n    content.appendChild(projectSection);\r\n\r\n\r\n};\r\n\r\nfunction projectCreation(){\r\n\r\n    const content = document.getElementById(\"content\");\r\n    const textbox = document.createElement(\"label\");\r\n    textbox.textContent= \"Project Name: \";\r\n    const projectName = document.createElement(\"input\");\r\n    projectName.setAttribute(\"id\", \"projName\");\r\n    projectName.setAttribute(\"type\", \"text\");\r\n    const button2 = document.createElement(\"button\");\r\n    button2.textContent=\"Submit\";\r\n    button2.setAttribute(\"type\", \"button\");\r\n    button2.setAttribute(\"id\", \"submit2\");\r\n\r\n    content.appendChild(textbox);\r\n    content.appendChild(projectName);\r\n    content.appendChild(button2);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/DOMHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHandler */ \"./src/DOMHandler.js\");\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module1 */ \"./src/module1.js\");\n/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module2 */ \"./src/module2.js\");\n/* harmony import */ var _taskOrdering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskOrdering */ \"./src/taskOrdering.js\");\n/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDisplay */ \"./src/projectDisplay.js\");\n\r\n\r\n\r\n\r\n\r\n//this will be for projects, and there can be three categories for projects \r\n//we need to give the user the ability to choose which project they would like to add to dos to \r\n\r\n//this will be for little tasks \r\n(0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.fillOut)();\r\n//what we need to do is change how the projects are made and make it so that \r\n//we can add projects via directly in the project panel \r\n//which would be very helpful instead of just having this form pop up\r\nconst personal = (0,_module2__WEBPACK_IMPORTED_MODULE_2__.project)(\"Personal\", []);\r\nconst work = (0,_module2__WEBPACK_IMPORTED_MODULE_2__.project)(\"Work\", []);\r\nconst newProject = (0,_module2__WEBPACK_IMPORTED_MODULE_2__.project)(\"a\", []);\r\nlet projects = [personal, work];\r\n \r\n(0,_projectDisplay__WEBPACK_IMPORTED_MODULE_4__.projectDisplay)(projects);\r\n\r\nlet meeb = (0,_module1__WEBPACK_IMPORTED_MODULE_1__.createToDo)(\"water the plants\", \"burh i need to water my plants\", \"08/15/2022\", \"1\", \"complete\");\r\nlet shmeeb = (0,_module1__WEBPACK_IMPORTED_MODULE_1__.createToDo)(\"water the plants\", \"burh i need to water my plants\", \"08/15/2021\", \"1\", \"complete\");\r\npersonal.addTask(meeb);\r\npersonal.addTask(shmeeb);\r\n\r\n\r\ndocument.getElementById(\"submit\").addEventListener(\"click\", function(){\r\n    (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_4__.updateProject)();\r\n    (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_4__.projectDisplay)(projects);\r\n    let data = Array.from(document.getElementsByClassName(\"info\"));\r\n    let task = (0,_module1__WEBPACK_IMPORTED_MODULE_1__.createToDo)(data[0].value, data[1].value, \r\n            data[2].value,data[3].value,data[4].value);\r\n\r\n    //create a module that sorts the different tasks \r\n    let category = data[5].value;\r\n    if(category == \"other\"){\r\n        (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.projectCreation)();\r\n        console.log(\"will initiate project creation\");\r\n        document.getElementById(\"submit2\").addEventListener(\"click\", function(){\r\n            let newName = document.querySelector(\"#projName\");\r\n            let newProj = (0,_module2__WEBPACK_IMPORTED_MODULE_2__.project)(newName.value, []);\r\n            console.log(newName.value);\r\n            projects.push(newProj);\r\n            (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_4__.updateProject)();\r\n            (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_4__.projectDisplay)(projects);\r\n            \r\n        })\r\n    } else {\r\n       let proj= (0,_taskOrdering__WEBPACK_IMPORTED_MODULE_3__.taskSort)(category, projects); \r\n       proj.addTask(task);\r\n       console.log(projects);\r\n    }\r\n});\r\n\r\n//next thing would be to find a way of displaying the projects --also did this \r\n//and be able to add different types of projects -- did this  \r\n\r\n\r\n        //there's also a function we'll need to make to update the webpage once we make these changes\r\n            //managed this and realized i need to reorganize how i wrote all of this code \r\n\r\n    //we could add a tab to each project that would allow us to add a new task directly there \r\n    //which would be a lot easier than\r\n            //make a function that will allow us to create a new project in the project panel itself too \r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDo\": () => (/* binding */ createToDo)\n/* harmony export */ });\nconst createToDo = (title, description, dueDate, priority, completionStatus) => {\r\n\r\n    const todo = {};\r\n    todo.title = title;\r\n    todo.description= description;\r\n    todo.dueDate= dueDate;\r\n    todo.priority=priority;\r\n    todo.completionStatus= completionStatus;\r\n    return todo;\r\n\r\n}\r\n\r\nfunction edit(todo) {\r\n\r\n    function changePriority(newPriority){\r\n        todo.priority= newPriority;\r\n    }\r\n\r\n    function completionStatus(newComplete){\r\n        todo.completionStatus = newComplete;\r\n    }\r\n\r\n    return changePriority, completionStatus; \r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/module1.js?");

/***/ }),

/***/ "./src/module2.js":
/*!************************!*\
  !*** ./src/module2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\nconst project = (name, tasks) => {\r\n\r\n    const getTasks = () => tasks; \r\n    const getName = () => name;\r\n\r\n    const addTask = newTask => {\r\n        tasks.push(newTask);\r\n    };\r\n\r\n    return {getName, getTasks, addTask}\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/module2.js?");

/***/ }),

/***/ "./src/projectDisplay.js":
/*!*******************************!*\
  !*** ./src/projectDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDisplay\": () => (/* binding */ projectDisplay),\n/* harmony export */   \"updateProject\": () => (/* binding */ updateProject)\n/* harmony export */ });\n\r\n\r\nfunction projectDisplay(projects){\r\n    const content = document.getElementById(\"content\");\r\n    let prjBar= document.createElement(\"DIV\");\r\n    projects.forEach(element => {\r\n        prjBar.setAttribute(\"id\", \"prjBar\");\r\n        let p3 = document.createElement(\"h3\");\r\n        p3.textContent = element.getName() + \" (\" + element.getTasks().length+ \")\" ; \r\n        let tasks = Array.from(element.getTasks());\r\n        tasks.forEach(task => {\r\n             let taskWords = document.createElement(\"p\");\r\n             taskWords.textContent = task;\r\n             taskWords.style.display = \"none\";\r\n             p3.appendChild(taskWords);\r\n        })\r\n        let p4 = document.createElement(\"p\");\r\n        p4.setAttribute(\"id\",\"taskCreator\");\r\n        p4.textContent = \"Add Task(+)\";\r\n        p3.appendChild(p4);\r\n        p3.addEventListener(\"click\", function(){\r\n            Array.from(document.querySelectorAll(\"p\")).forEach(words =>{\r\n               \r\n                words.style.display = \"block\";\r\n            })\r\n        })\r\n        \r\n        p3.addEventListener(\"click\", function(){\r\n         \r\n        })    \r\n        prjBar.appendChild(p3);\r\n\r\n        //this is where we get the functionality to create a new project in this panel\r\n       \r\n        content.appendChild(prjBar);\r\n\r\n        //each project heading needs to be a dropdown menu that displays its tasks \r\n            //and each task needs a button that would allow the user to modify it and or delete it \r\n        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown relevant website to our aims \r\n        //we'll need to make a loop to iterate through all of the tasks and display them \r\n        //there's also a function we'll need to make to update the webpage once we make these changes \r\n    });\r\n\r\n    let createProj = document.createElement(\"h3\");\r\n    createProj.setAttribute(\"id\", \"projectCreation\");\r\n    createProj.textContent = \"Create New Project...\";\r\n    document.getElementById(\"content\").appendChild(createProj);\r\n    //we add an event listener to this in index.js\r\n}\r\n\r\nfunction updateProject(){\r\n    let prjBar = document.getElementById(\"prjBar\");\r\n    if(prjBar !== null){\r\n        prjBar.parentElement.removeChild(prjBar);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/projectDisplay.js?");

/***/ }),

/***/ "./src/taskOrdering.js":
/*!*****************************!*\
  !*** ./src/taskOrdering.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskSort\": () => (/* binding */ taskSort)\n/* harmony export */ });\n\r\n\r\nfunction taskSort(projectName, projects){\r\n\r\n        const sort = projects.find(project => project.getName() == projectName);\r\n        return sort;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/taskOrdering.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;