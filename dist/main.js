/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/body.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/body.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    /* background-color: rebeccapurple; */\n    font-family: sans-serif;\n}\n\n.page-container {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 64px 1fr;\n\n    /* Fullscreen me, baby */\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/css/body.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,uBAAuB;AAC3B;;AAIA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;;IAE5B,wBAAwB;IACxB,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;AAChB","sourcesContent":["body {\n    /* background-color: rebeccapurple; */\n    font-family: sans-serif;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap');\n\n.page-container {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 64px 1fr;\n\n    /* Fullscreen me, baby */\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/content-container.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/content-container.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-container {\n    background-color: white;\n}\n\n.list-header {\n    display: flex;\n    padding: 2rem 3rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    justify-content: space-between;\n}\n\n.data-displayer-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 0rem 3rem 1rem 3rem;\n    gap: 1rem;\n}\n\n.data-row, .data-header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\n.data-header {\n    font-weight: bold;\n}\n\n.actions {\n    display: flex;\n    gap: 10px;\n    font-size: 1.4rem;\n}\n\n.actions > div {\n    cursor: pointer;\n}\n\n.completed {\n    font-style: italic;\n    color: #3f3f3f;\n    position: relative;\n}\n\n.completed:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: #3f3f3f;\n    content: \"\";\n    width: 100%;\n    display: block;\n  }", "",{"version":3,"sources":["webpack://./src/css/content-container.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,cAAc;EAChB","sourcesContent":[".content-container {\n    background-color: white;\n}\n\n.list-header {\n    display: flex;\n    padding: 2rem 3rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    justify-content: space-between;\n}\n\n.data-displayer-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 0rem 3rem 1rem 3rem;\n    gap: 1rem;\n}\n\n.data-row, .data-header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\n.data-header {\n    font-weight: bold;\n}\n\n.actions {\n    display: flex;\n    gap: 10px;\n    font-size: 1.4rem;\n}\n\n.actions > div {\n    cursor: pointer;\n}\n\n.completed {\n    font-style: italic;\n    color: #3f3f3f;\n    position: relative;\n}\n\n.completed:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: #3f3f3f;\n    content: \"\";\n    width: 100%;\n    display: block;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".new-event-form, .new-list-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n}\n\n.form-line-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* input:invalid {\n    border: 1px solid rgba(255, 0, 0, 0.5);\n}\n\ntextarea:invalid {\n    border: 1px solid rgba(255, 0, 0, 0.5);\n} */\n\n.invalid {\n    border: solid rgba(255, 0, 0, 0.5);\n}\n\ntextarea {\n    font-family: inherit;\n}\n\ninput {\n    font-family: inherit;\n}", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;;;;;;GAMG;;AAEH;IACI,kCAAkC;AACtC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":[".new-event-form, .new-list-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n}\n\n.form-line-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* input:invalid {\n    border: 1px solid rgba(255, 0, 0, 0.5);\n}\n\ntextarea:invalid {\n    border: 1px solid rgba(255, 0, 0, 0.5);\n} */\n\n.invalid {\n    border: solid rgba(255, 0, 0, 0.5);\n}\n\ntextarea {\n    font-family: inherit;\n}\n\ninput {\n    font-family: inherit;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header-bar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header-bar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-bar {\n    grid-column: 1 / 3;\n    background-color: #6E617D;\n    color: white;\n}\n\n.header-flex-container {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.header-flex-container h1 {\n    margin: 0px;\n}\n\n#new-task-btn {\n    background-color: white;\n    color: black;\n    border-radius: 3px;\n    border: none;\n    padding: 8px 24px;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 0.75rem;\n}\n\n#new-task-btn:hover {\n    background-color: rgba(255, 255, 255, 0.8);\n}", "",{"version":3,"sources":["webpack://./src/css/header-bar.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;AAC9C","sourcesContent":[".header-bar {\n    grid-column: 1 / 3;\n    background-color: #6E617D;\n    color: white;\n}\n\n.header-flex-container {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.header-flex-container h1 {\n    margin: 0px;\n}\n\n#new-task-btn {\n    background-color: white;\n    color: black;\n    border-radius: 3px;\n    border: none;\n    padding: 8px 24px;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 0.75rem;\n}\n\n#new-task-btn:hover {\n    background-color: rgba(255, 255, 255, 0.8);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n    position: fixed; \n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    z-index: 10;\n    background-color: white;\n    width: 300px;\n    max-width: 80%;\n    transition: 200ms ease-in-out;\n    border-radius: 5px;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 9;\n    pointer-events: none;\n    transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-content: center;\n    padding: 15px 25px;\n}\n\n.modal-header .close-button {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-title {\n    font-weight: bold;\n    font-size: 1.25rem;\n}\n\n.modal-body {\n    padding: 15px 25px;\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,UAAU;IACV,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,oCAAoC;IACpC,UAAU;IACV,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".modal {\n    position: fixed; \n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    z-index: 10;\n    background-color: white;\n    width: 300px;\n    max-width: 80%;\n    transition: 200ms ease-in-out;\n    border-radius: 5px;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 9;\n    pointer-events: none;\n    transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-content: center;\n    padding: 15px 25px;\n}\n\n.modal-header .close-button {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-title {\n    font-weight: bold;\n    font-size: 1.25rem;\n}\n\n.modal-body {\n    padding: 15px 25px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-bar {\n    background-color: hsl(270, 12%, 90%);\n    padding: 32px;\n}\n\n.nav-bar ul {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\n/* .nav-bar li {\n    margin: 0px 0px 8px 0px;\n} */\n\n.list-label {\n    position: relative;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.list-label::before {\n    content: '+';\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.active .list-label::before {\n    content: '-';\n}\n\n.list-container {\n    height: 0;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.list-container li {\n    padding: 5px 20px;\n    font-size: 0.9rem;\n}\n\n#home-lists.active .list-container, #user-lists.active .list-container {\n    height: auto;\n    /* overflow: auto; */\n}\n\n.list-label:hover {\n    background-color: hsl(270, 12%, 95%);\n}\n\n.selected {\n    background-color: #f2f1f4;\n}\n\n#new-list-button {\n    font-size: 0.8rem;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.clickable-list:hover {\n    background-color: hsl(270, 12%, 95%);\n}", "",{"version":3,"sources":["webpack://./src/css/nav-bar.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":[".nav-bar {\n    background-color: hsl(270, 12%, 90%);\n    padding: 32px;\n}\n\n.nav-bar ul {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\n/* .nav-bar li {\n    margin: 0px 0px 8px 0px;\n} */\n\n.list-label {\n    position: relative;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.list-label::before {\n    content: '+';\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.active .list-label::before {\n    content: '-';\n}\n\n.list-container {\n    height: 0;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.list-container li {\n    padding: 5px 20px;\n    font-size: 0.9rem;\n}\n\n#home-lists.active .list-container, #user-lists.active .list-container {\n    height: auto;\n    /* overflow: auto; */\n}\n\n.list-label:hover {\n    background-color: hsl(270, 12%, 95%);\n}\n\n.selected {\n    background-color: #f2f1f4;\n}\n\n#new-list-button {\n    font-size: 0.8rem;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.clickable-list:hover {\n    background-color: hsl(270, 12%, 95%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/body.css":
/*!**************************!*\
  !*** ./src/css/body.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/body.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/content-container.css":
/*!***************************************!*\
  !*** ./src/css/content-container.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content-container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/content-container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/form.css":
/*!**************************!*\
  !*** ./src/css/form.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header-bar.css":
/*!********************************!*\
  !*** ./src/css/header-bar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/nav-bar.css":
/*!*****************************!*\
  !*** ./src/css/nav-bar.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMhandler.js":
/*!***************************!*\
  !*** ./src/DOMhandler.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMHandler)
/* harmony export */ });
/* harmony import */ var _eventClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventClass.js */ "./src/eventClass.js");
/* harmony import */ var _listClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listClass.js */ "./src/listClass.js");
/* harmony import */ var _storageHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageHandler.js */ "./src/storageHandler.js");




class DOMHandler {

    lists = [];
    
    constructor() {
        const storage = new _storageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.lists = storage.getList();
        
        this.attachListeners();
        this.redrawLists();
        this.drawListEvents(this.lists[0]);
    }

    attachListeners() {
        const homeLists = window.document.getElementById('home-lists');
        const homeListsLabel = homeLists.firstElementChild;
        homeListsLabel.addEventListener('click', () => {
            homeLists.classList.toggle('active');
        });

        const userLists = window.document.getElementById('user-lists');
        const userListsLabel = userLists.firstElementChild;
        userListsLabel.addEventListener('click', () => {
            userLists.classList.toggle('active');
        })

        const formAddList = window.document.getElementById('form-add-list');
        formAddList.addEventListener('click', (e) => {
            e.preventDefault();
            const listTitle = window.document.getElementById('list-name').value;

            const form = window.document.getElementById('new-list-form');
            const valid = form.checkValidity();
            if(valid){
                const newList = new _listClass_js__WEBPACK_IMPORTED_MODULE_1__["default"](listTitle);
                this.lists.push(newList);
                this.redrawLists();
                this.closeModal(formAddList.closest('.modal'), window.document.getElementById('overlay'));
                this.save();
            }
        });

        const formAddEvent = window.document.getElementById('form-add-event');
        formAddEvent.addEventListener('click', (e) => {
            e.preventDefault();
            const eventTitleEl = window.document.getElementById('event-title');
            const eventTitle = eventTitleEl.value;
            const eventDescEl = window.document.getElementById('event-desc');
            const eventDesc = eventDescEl.value;
            const eventDueDateEl = window.document.getElementById('due-date');
            const eventDueDate = eventDueDateEl.value;
            const eventPriorityEl = window.document.getElementById('event-priority');
            const eventPriority = eventPriorityEl.value;
            const eventParentListEl = window.document.getElementById('event-list-parent');
            const eventParentList = parseInt(eventParentListEl.value);

            eventTitleEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDescEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDueDateEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            // Close modal now

            const form = window.document.getElementById('new-event-form');
            const valid = form.checkValidity();
            if(valid){
                this.closeModal(formAddEvent.closest('.modal'), window.document.getElementById('overlay'));

                const newEvent = new _eventClass_js__WEBPACK_IMPORTED_MODULE_0__["default"](eventTitle, eventDesc, eventDueDate, eventPriority, false);
                
                let listToAddTo = this.lists.find(list => {
                    return list.getID() == eventParentList;
                });

                listToAddTo.addEvent(newEvent);
                this.save();
                // Redraw list to parent of new event
                // May want to update to redraw list which was
                // already being viewed. List ID built into
                // table dataset for this functionality
                this.drawListEvents(this.lists.find(list => list.getID() == eventParentList));
                listToAddTo.printMe();

                eventTitleEl.classList.remove('invalid');
                eventDescEl.classList.remove('invalid');
                eventDueDateEl.classList.remove('invalid');
            } else {
                if(eventTitle == ''){
                    eventTitleEl.classList.add('invalid');
                } else {
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDesc == ''){
                    eventDescEl.classList.add('invalid');
                } else {
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDate == ''){
                    eventDueDateEl.classList.add('invalid');
                } else {
                    eventDueDateEl.classList.remove('invalid');
                }
            }

            //redraw added to list
        });

        // const allEvents = document.getElementById('all-events');
        // allEvents.addEventListener('click', (e) => {
        //     let combinedLists = new List('All Events');
        //     this.lists.forEach(list => {
        //         const currentEvents = list.getEvents();
        //         currentEvents.forEach(event => {
        //             const eventCopy = event;
        //             eventCopy.setParent(-1);
        //             combinedLists.addEvent(event);
        //         });
        //     });
        //     this.drawListEvents(combinedLists);
        // });

        const openNewEventButtons = window.document.querySelectorAll('[data-modal-target]');
        const closeNewEventButtons = window.document.querySelectorAll('[data-close-button]');
        const overlay = window.document.getElementById('overlay');

        overlay.addEventListener('click', () => {
            const modals = window.document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                this.closeModal(modal, overlay);
            });
        });

        openNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = window.document.querySelector(button.dataset.modalTarget);
                this.openModal(modal, overlay);
            });
        });

        closeNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                this.closeModal(modal, overlay);
            })
        });
    }

    redrawLists() {
        const listListElement = window.document.getElementById('list-container');
        const listParentElement = window.document.getElementById('event-list-parent');

        listListElement.innerHTML = '';

        this.lists.forEach(list => {
            let liElement = document.createElement('li');
            liElement.innerHTML = "&#10095; " + list.getTitle();
            liElement.classList.add('clickable-list');
            liElement.addEventListener('click', () => {
                const table = window.document.getElementById('data-displayer-wrapper');
                table.dataset.list = list.getID();
                this.drawListEvents(list);
                const listItems = document.querySelectorAll('.clickable-list');
                listItems.forEach(list => {
                    list.style.backgroundColor = 'inherit';
                });
                liElement.style.backgroundColor = '#f2f1f4';
            });
            listListElement.appendChild(liElement);

            let optionElement = document.createElement('option');
            optionElement.value = list.getID();
            optionElement.innerText = list.getTitle();
            listParentElement.appendChild(optionElement);
        });

        const addListButton = document.createElement('li');
        addListButton.innerHTML = "<i>add new list</i>";
        addListButton.id = 'new-list-btn';
        addListButton.dataset.modalTarget = '#new-list-modal';
        addListButton.name = 'new-list-btn';
        
        const overlay = window.document.getElementById('overlay');
        addListButton.addEventListener('click', () => {
            const modal = window.document.querySelector(addListButton.dataset.modalTarget);
            this.openModal(modal, overlay);
        });
        listListElement.appendChild(addListButton);
    }

    drawListEvents(list) {
        const listHeader = document.getElementById('list-header');
        listHeader.innerHTML = '';
        const listNameEl = document.createElement('div');
        listNameEl.innerHTML = list.getTitle();
        const listDel = document.createElement('div');
        listDel.innerHTML ='&#10008;';
        listDel.addEventListener('click', (e) => {
            this.lists = this.lists.filter(currentList => currentList !== list);
            this.redrawLists();
            this.drawListEvents(this.lists[0]);
        });

        listHeader.appendChild(listNameEl);
        listHeader.appendChild(listDel);

        const listTable = window.document.getElementById('data-displayer-wrapper');
        listTable.innerHTML = '';
        const events = list.getEvents();

        const eventHeader = document.createElement('div');
        eventHeader.classList.add('data-header');

        const eventTitleTH = document.createElement('div');
        eventTitleTH.innerHTML = 'Title';
        const eventDueDateTH = document.createElement('div');
        eventDueDateTH.innerHTML = 'Due Date';
        const eventPriorityTH = document.createElement('div');
        eventPriorityTH.innerHTML = 'Priority';
        const eventCompletedTH = document.createElement('div');
        eventCompletedTH.innerHTML = 'Completed';
        const eventActionsTH = document.createElement('div');
        eventActionsTH.innerHTML = 'Actions';
        
        eventHeader.appendChild(eventTitleTH);
        eventHeader.appendChild(eventDueDateTH);
        eventHeader.appendChild(eventPriorityTH);
        eventHeader.appendChild(eventCompletedTH);
        eventHeader.appendChild(eventActionsTH);

        listTable.appendChild(eventHeader);

        events.forEach(event => {
            const tableRow = window.document.createElement('div');
            tableRow.classList.add('data-row');
            tableRow.dataset.eventId = event.getID();

            const eventTitleTD = window.document.createElement('div');
            eventTitleTD.innerHTML = event.getTitle();
            const eventDueDateTD = window.document.createElement('div');
            eventDueDateTD.innerHTML = event.getDueDate();
            const eventPriorityTD = window.document.createElement('div');
            eventPriorityTD.innerHTML = event.getPriority();
            const eventCompletedTD = window.document.createElement('div');
            eventCompletedTD.innerHTML = event.getCompletedStatus();
            if(event.getCompletedStatus()){
                tableRow.classList.add('completed');
            }

            const actionsTD = window.document.createElement('div');
            actionsTD.classList.add('actions');
            
            const completeActionTD = document.createElement('div');
            completeActionTD.innerHTML = '&#10004;';
            completeActionTD.addEventListener('click', (e) => {
                const currentStatus = event.getCompletedStatus();
                event.setCompletedStatus(!currentStatus);
                tableRow.classList.toggle('completed');
                eventCompletedTD.innerHTML = event.getCompletedStatus();
                this.save();
            });

            const deleteActionTD = document.createElement('div');
            deleteActionTD.innerHTML = '&#10008;';
            deleteActionTD.addEventListener('click', (e) => {
                const result = list.removeElementByID(event.getID());
                this.drawListEvents(list);
                this.save();
            });

            actionsTD.appendChild(completeActionTD);
            actionsTD.appendChild(deleteActionTD);
            
            tableRow.appendChild(eventTitleTD);
            tableRow.appendChild(eventDueDateTD);
            tableRow.appendChild(eventPriorityTD);
            tableRow.appendChild(eventCompletedTD);
            tableRow.appendChild(actionsTD);

            listTable.appendChild(tableRow);
        });
    }

    save(){
        const storage = new _storageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        storage.writeList(this.lists);
    }

    openModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    closeModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    updateParentList(lists) {

    }
}

/***/ }),

/***/ "./src/eventClass.js":
/*!***************************!*\
  !*** ./src/eventClass.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
class Event {
    static eventCount = 0;
    title;
    description;
    dueDate;
    priority;
    completed;
    parentList;
    id;

    constructor(title, desc, dueDate, priority, completed) {
        this.title = title;
        this.description = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.id = Event.eventCount;
        this.parentList = -1; // If event has no parent, ID is -1
        Event.eventCount++;
    }

    getID() {
        return this.id;
    }

    setID(id) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        if(title == ''){
            return false;
        } else {
            this.title = title;
        }
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        if(description == ''){
            return false;
        } else {
            this.description = description;
        }
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(dueDate) {
        if(dueDate == ''){
            return false;
        } else {
            this.dueDate = dueDate;
        }
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getCompletedStatus() {
        return this.completed;
    }

    setCompletedStatus(completed){
        this.completed = completed;
    }

    // ! Unsure if this will actually be used, but just in case. Also it looks cool.
    addToList(list){
        list.addEvent(this);
    }

    setParent(id) {
        this.parentList = id;
    }

    getParent() {
        return this.parentList;
    }

    printMe() {
        console.log(this.title, ":", this.description);
    }
}


/***/ }),

/***/ "./src/listClass.js":
/*!**************************!*\
  !*** ./src/listClass.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
class List {
    static listCount = 0;
    title;
    id;
    events = [];

    constructor(title) {
        this.title = title;
        this.id = List.listCount;
        List.listCount++;
    }

    findEventByID(eventID) {
        const result = this.events.findIndex((event) => {
            return event.getID() == eventID;
        });
        return result;
    }

    getEventByID(eventID) {
        const index = this.findEventByID(eventID);
        if(index != -1){
            return this.events[index]
        } else {
            return 1;
        }
    }

    removeElementByID(eventID) {
        const index = this.findEventByID(eventID);
        if(index != -1){
            const result = this.events.splice(index, 1);
            if(result == []){
                return 1;
            }
        } else {
            return 1;
        }
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        if(title == ''){
            return false;
        } else {
            this.title = title;
        }
    }

    getID() {
        return this.id;
    }

    setID(id) {
        this.id = id;
    }

    addEvent(event) {
        if(event.getParent() == -1){
            this.events.push(event);
            event.setParent(this.id);
        } else {
            return 1;
        }
    }

    getEvents() {
        return this.events;
    }

    printMe() {
        console.log('list:', this.title, '\nid:', this.id);
        this.events.forEach((e) => {
            e.printMe();
        });
    }
}

/***/ }),

/***/ "./src/storageHandler.js":
/*!*******************************!*\
  !*** ./src/storageHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageHandler)
/* harmony export */ });
/* harmony import */ var _listClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listClass.js */ "./src/listClass.js");
/* harmony import */ var _eventClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventClass.js */ "./src/eventClass.js");
// storageHandler.js
// Store lists & events
// Store JSON
// with events as children of list as an array
//
// default list holds all uncategorized events
// just be JSON stringified
//
// stored in 'todoData'




class LocalStorageHandler {

    writeList(lists){
        window.localStorage.setItem('todoData', JSON.stringify(lists))
    }

    getList(){
        const buildLists = JSON.parse(window.localStorage.getItem('todoData'));
        const returnLists = [];

        buildLists.forEach(list => {
            const newList = new _listClass_js__WEBPACK_IMPORTED_MODULE_0__["default"](list.title);
            newList.setID(list.id);
            
            list.events.forEach(event => {
                const newEvent = new _eventClass_js__WEBPACK_IMPORTED_MODULE_1__["default"](event.title, event.description, event.dueDate, event.priority, event.completed);
                newEvent.setID(event.id);
                newList.addEvent(newEvent);
            });
            returnLists.push(newList);
        });
        return returnLists;
    }

}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/body.css */ "./src/css/body.css");
/* harmony import */ var _css_header_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/header-bar.css */ "./src/css/header-bar.css");
/* harmony import */ var _css_nav_bar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/nav-bar.css */ "./src/css/nav-bar.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/form.css */ "./src/css/form.css");
/* harmony import */ var _css_content_container_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/content-container.css */ "./src/css/content-container.css");
/* harmony import */ var _eventClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventClass.js */ "./src/eventClass.js");
/* harmony import */ var _listClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listClass.js */ "./src/listClass.js");
/* harmony import */ var _storageHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storageHandler.js */ "./src/storageHandler.js");
/* harmony import */ var _DOMhandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DOMhandler.js */ "./src/DOMhandler.js");











const pageDOM = new _DOMhandler_js__WEBPACK_IMPORTED_MODULE_9__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7QUFDRTs7QUFFckI7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxxREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUs7QUFDMUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QjtBQUNNO0FBQ0g7QUFDRjtBQUNEO0FBQ2E7QUFDRDtBQUNGO0FBQ1E7QUFDUjs7QUFFbEMsb0JBQW9CLHNEQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvYm9keS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvY29udGVudC1jb250YWluZXIuY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2Zvcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2hlYWRlci1iYXIuY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL21vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9uYXYtYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvYm9keS5jc3M/MjY1NiIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9jb250ZW50LWNvbnRhaW5lci5jc3M/MjU5NCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9mb3JtLmNzcz9iZWRkIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2hlYWRlci1iYXIuY3NzPzMzMzAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvbW9kYWwuY3NzP2YzODEiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvbmF2LWJhci5jc3M/NjVjNCIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2V2ZW50Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9saXN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FiaW46d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NHB4IDFmcjtcXG5cXG4gICAgLyogRnVsbHNjcmVlbiBtZSwgYmFieSAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ib2R5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyx1QkFBdUI7QUFDM0I7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0Qjs7SUFFNUIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlOyAqL1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FiaW46d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjRweCAxZnI7XFxuXFxuICAgIC8qIEZ1bGxzY3JlZW4gbWUsIGJhYnkgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGF0YS1kaXNwbGF5ZXItd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDByZW0gM3JlbSAxcmVtIDNyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRhdGEtcm93LCAuZGF0YS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5kYXRhLWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5hY3Rpb25zID4gZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogIzNmM2YzZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29tcGxldGVkOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICMzZjNmM2Y7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb250ZW50LWNvbnRhaW5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kYXRhLWRpc3BsYXllci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMHJlbSAzcmVtIDFyZW0gM3JlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGF0YS1yb3csIC5kYXRhLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLmRhdGEtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmFjdGlvbnMgPiBkaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjM2YzZjNmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb21wbGV0ZWQ6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNTAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogIzNmM2YzZjtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV3LWV2ZW50LWZvcm0sIC5uZXctbGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0tbGluZS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbnRleHRhcmVhOmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59ICovXFxuXFxuLmludmFsaWQge1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXctZXZlbnQtZm9ybSwgLm5ldy1saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1saW5lLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxudGV4dGFyZWE6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn0gKi9cXG5cXG4uaW52YWxpZCB7XFxuICAgIGJvcmRlcjogc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXItYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU2MTdEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXItZmxleC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uaGVhZGVyLWZsZXgtY29udGFpbmVyIGgxIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNuZXctdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuI25ldy10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXItYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyLWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZFNjE3RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyLWZsZXgtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLmhlYWRlci1mbGV4LWNvbnRhaW5lciBoMSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jbmV3LXRhc2stYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbiNuZXctdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIC5jbG9zZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogOTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciAuY2xvc2UtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2LWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzAsIDEyJSwgOTAlKTtcXG4gICAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuLm5hdi1iYXIgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi8qIC5uYXYtYmFyIGxpIHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XFxufSAqL1xcblxcbi5saXN0LWxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWxhYmVsOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5hY3RpdmUgLmxpc3QtbGFiZWw6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICctJztcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciBsaSB7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2hvbWUtbGlzdHMuYWN0aXZlIC5saXN0LWNvbnRhaW5lciwgI3VzZXItbGlzdHMuYWN0aXZlIC5saXN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxufVxcblxcbi5saXN0LWxhYmVsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MCwgMTIlLCA5NSUpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMWY0O1xcbn1cXG5cXG4jbmV3LWxpc3QtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbi5jbGlja2FibGUtbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzAsIDEyJSwgOTUlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXYtYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjcwLCAxMiUsIDkwJSk7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5uYXYtYmFyIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4vKiAubmF2LWJhciBsaSB7XFxuICAgIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xcbn0gKi9cXG5cXG4ubGlzdC1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1sYWJlbDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJysnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uYWN0aXZlIC5saXN0LWxhYmVsOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnLSc7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgbGkge1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNob21lLWxpc3RzLmFjdGl2ZSAubGlzdC1jb250YWluZXIsICN1c2VyLWxpc3RzLmFjdGl2ZSAubGlzdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbn1cXG5cXG4ubGlzdC1sYWJlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzAsIDEyJSwgOTUlKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjFmNDtcXG59XFxuXFxuI25ldy1saXN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4uY2xpY2thYmxlLWxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjcwLCAxMiUsIDk1JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQtY29udGFpbmVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC1jb250YWluZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50Q2xhc3MuanMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0Q2xhc3MuanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlSGFuZGxlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUhhbmRsZXIge1xuXG4gICAgbGlzdHMgPSBbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMubGlzdHMgPSBzdG9yYWdlLmdldExpc3QoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucmVkcmF3TGlzdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TGlzdEV2ZW50cyh0aGlzLmxpc3RzWzBdKTtcbiAgICB9XG5cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGhvbWVMaXN0cyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1saXN0cycpO1xuICAgICAgICBjb25zdCBob21lTGlzdHNMYWJlbCA9IGhvbWVMaXN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaG9tZUxpc3RzTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBob21lTGlzdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJMaXN0cyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1saXN0cycpO1xuICAgICAgICBjb25zdCB1c2VyTGlzdHNMYWJlbCA9IHVzZXJMaXN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdXNlckxpc3RzTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1c2VyTGlzdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZm9ybUFkZExpc3QgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWxpc3QnKTtcbiAgICAgICAgZm9ybUFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbGlzdFRpdGxlID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW5hbWUnKS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QtZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdFRpdGxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdMaXN0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChmb3JtQWRkTGlzdC5jbG9zZXN0KCcubW9kYWwnKSwgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmb3JtQWRkRXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWV2ZW50Jyk7XG4gICAgICAgIGZvcm1BZGRFdmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBldmVudFRpdGxlRWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50LXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBldmVudFRpdGxlID0gZXZlbnRUaXRsZUVsLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZXZlbnREZXNjRWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50LWRlc2MnKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGVzYyA9IGV2ZW50RGVzY0VsLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZXZlbnREdWVEYXRlRWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBldmVudER1ZURhdGUgPSBldmVudER1ZURhdGVFbC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50UHJpb3JpdHlFbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50UHJpb3JpdHkgPSBldmVudFByaW9yaXR5RWwudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBldmVudFBhcmVudExpc3RFbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtbGlzdC1wYXJlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50UGFyZW50TGlzdCA9IHBhcnNlSW50KGV2ZW50UGFyZW50TGlzdEVsLnZhbHVlKTtcblxuICAgICAgICAgICAgZXZlbnRUaXRsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50VGl0bGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGl0bGVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGV2ZW50RGVzY0VsLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREZXNjRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihldmVudER1ZURhdGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RHVlRGF0ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZXZlbnREZXNjRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnRUaXRsZUVsLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaXRsZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZXZlbnREZXNjRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICBldmVudERlc2NFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGV2ZW50RHVlRGF0ZUVsLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREdWVEYXRlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBldmVudER1ZURhdGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihldmVudFRpdGxlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICBldmVudFRpdGxlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihldmVudERlc2NFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGVzY0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZXZlbnREdWVEYXRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICBldmVudER1ZURhdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENsb3NlIG1vZGFsIG5vd1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZXZlbnQtZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZm9ybUFkZEV2ZW50LmNsb3Nlc3QoJy5tb2RhbCcpLCB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBFdmVudChldmVudFRpdGxlLCBldmVudERlc2MsIGV2ZW50RHVlRGF0ZSwgZXZlbnRQcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsaXN0VG9BZGRUbyA9IHRoaXMubGlzdHMuZmluZChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QuZ2V0SUQoKSA9PSBldmVudFBhcmVudExpc3Q7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsaXN0VG9BZGRUby5hZGRFdmVudChuZXdFdmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgLy8gUmVkcmF3IGxpc3QgdG8gcGFyZW50IG9mIG5ldyBldmVudFxuICAgICAgICAgICAgICAgIC8vIE1heSB3YW50IHRvIHVwZGF0ZSB0byByZWRyYXcgbGlzdCB3aGljaCB3YXNcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGJlaW5nIHZpZXdlZC4gTGlzdCBJRCBidWlsdCBpbnRvXG4gICAgICAgICAgICAgICAgLy8gdGFibGUgZGF0YXNldCBmb3IgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGlzdEV2ZW50cyh0aGlzLmxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmdldElEKCkgPT0gZXZlbnRQYXJlbnRMaXN0KSk7XG4gICAgICAgICAgICAgICAgbGlzdFRvQWRkVG8ucHJpbnRNZSgpO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRUaXRsZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBldmVudERlc2NFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgZXZlbnREdWVEYXRlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihldmVudFRpdGxlID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudFRpdGxlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihldmVudERlc2MgPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICBldmVudERlc2NFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREZXNjRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihldmVudER1ZURhdGUgPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICBldmVudER1ZURhdGVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREdWVEYXRlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9yZWRyYXcgYWRkZWQgdG8gbGlzdFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBhbGxFdmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLWV2ZW50cycpO1xuICAgICAgICAvLyBhbGxFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGNvbWJpbmVkTGlzdHMgPSBuZXcgTGlzdCgnQWxsIEV2ZW50cycpO1xuICAgICAgICAvLyAgICAgdGhpcy5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGN1cnJlbnRFdmVudHMgPSBsaXN0LmdldEV2ZW50cygpO1xuICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29weSA9IGV2ZW50O1xuICAgICAgICAvLyAgICAgICAgICAgICBldmVudENvcHkuc2V0UGFyZW50KC0xKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29tYmluZWRMaXN0cy5hZGRFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhd0xpc3RFdmVudHMoY29tYmluZWRMaXN0cyk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wZW5OZXdFdmVudEJ1dHRvbnMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpO1xuICAgICAgICBjb25zdCBjbG9zZU5ld0V2ZW50QnV0dG9ucyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC5hY3RpdmUnKTtcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwsIG92ZXJsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5OZXdFdmVudEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKG1vZGFsLCBvdmVybGF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZU5ld0V2ZW50QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsLCBvdmVybGF5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZHJhd0xpc3RzKCkge1xuICAgICAgICBjb25zdCBsaXN0TGlzdEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3RQYXJlbnRFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudC1saXN0LXBhcmVudCcpO1xuXG4gICAgICAgIGxpc3RMaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0aGlzLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpRWxlbWVudC5pbm5lckhUTUwgPSBcIiYjMTAwOTU7IFwiICsgbGlzdC5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZS1saXN0Jyk7XG4gICAgICAgICAgICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEtZGlzcGxheWVyLXdyYXBwZXInKTtcbiAgICAgICAgICAgICAgICB0YWJsZS5kYXRhc2V0Lmxpc3QgPSBsaXN0LmdldElEKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGlzdEV2ZW50cyhsaXN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpY2thYmxlLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjJmMWY0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gbGlzdC5nZXRJRCgpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBsaXN0LmdldFRpdGxlKCk7XG4gICAgICAgICAgICBsaXN0UGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGFkZExpc3RCdXR0b24uaW5uZXJIVE1MID0gXCI8aT5hZGQgbmV3IGxpc3Q8L2k+XCI7XG4gICAgICAgIGFkZExpc3RCdXR0b24uaWQgPSAnbmV3LWxpc3QtYnRuJztcbiAgICAgICAgYWRkTGlzdEJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0ID0gJyNuZXctbGlzdC1tb2RhbCc7XG4gICAgICAgIGFkZExpc3RCdXR0b24ubmFtZSA9ICduZXctbGlzdC1idG4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBhZGRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhZGRMaXN0QnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwobW9kYWwsIG92ZXJsYXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGFkZExpc3RCdXR0b24pO1xuICAgIH1cblxuICAgIGRyYXdMaXN0RXZlbnRzKGxpc3QpIHtcbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LWhlYWRlcicpO1xuICAgICAgICBsaXN0SGVhZGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsaXN0TmFtZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3ROYW1lRWwuaW5uZXJIVE1MID0gbGlzdC5nZXRUaXRsZSgpO1xuICAgICAgICBjb25zdCBsaXN0RGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3REZWwuaW5uZXJIVE1MID0nJiMxMDAwODsnO1xuICAgICAgICBsaXN0RGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdHMgPSB0aGlzLmxpc3RzLmZpbHRlcihjdXJyZW50TGlzdCA9PiBjdXJyZW50TGlzdCAhPT0gbGlzdCk7XG4gICAgICAgICAgICB0aGlzLnJlZHJhd0xpc3RzKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdMaXN0RXZlbnRzKHRoaXMubGlzdHNbMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGxpc3ROYW1lRWwpO1xuICAgICAgICBsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGxpc3REZWwpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUYWJsZSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YS1kaXNwbGF5ZXItd3JhcHBlcicpO1xuICAgICAgICBsaXN0VGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGxpc3QuZ2V0RXZlbnRzKCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXZlbnRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGF0YS1oZWFkZXInKTtcblxuICAgICAgICBjb25zdCBldmVudFRpdGxlVEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXZlbnRUaXRsZVRILmlubmVySFRNTCA9ICdUaXRsZSc7XG4gICAgICAgIGNvbnN0IGV2ZW50RHVlRGF0ZVRIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV2ZW50RHVlRGF0ZVRILmlubmVySFRNTCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgIGNvbnN0IGV2ZW50UHJpb3JpdHlUSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBldmVudFByaW9yaXR5VEguaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcbiAgICAgICAgY29uc3QgZXZlbnRDb21wbGV0ZWRUSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBldmVudENvbXBsZXRlZFRILmlubmVySFRNTCA9ICdDb21wbGV0ZWQnO1xuICAgICAgICBjb25zdCBldmVudEFjdGlvbnNUSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBldmVudEFjdGlvbnNUSC5pbm5lckhUTUwgPSAnQWN0aW9ucyc7XG4gICAgICAgIFxuICAgICAgICBldmVudEhlYWRlci5hcHBlbmRDaGlsZChldmVudFRpdGxlVEgpO1xuICAgICAgICBldmVudEhlYWRlci5hcHBlbmRDaGlsZChldmVudER1ZURhdGVUSCk7XG4gICAgICAgIGV2ZW50SGVhZGVyLmFwcGVuZENoaWxkKGV2ZW50UHJpb3JpdHlUSCk7XG4gICAgICAgIGV2ZW50SGVhZGVyLmFwcGVuZENoaWxkKGV2ZW50Q29tcGxldGVkVEgpO1xuICAgICAgICBldmVudEhlYWRlci5hcHBlbmRDaGlsZChldmVudEFjdGlvbnNUSCk7XG5cbiAgICAgICAgbGlzdFRhYmxlLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcblxuICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZVJvdyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ2RhdGEtcm93Jyk7XG4gICAgICAgICAgICB0YWJsZVJvdy5kYXRhc2V0LmV2ZW50SWQgPSBldmVudC5nZXRJRCgpO1xuXG4gICAgICAgICAgICBjb25zdCBldmVudFRpdGxlVEQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBldmVudFRpdGxlVEQuaW5uZXJIVE1MID0gZXZlbnQuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RHVlRGF0ZVREID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXZlbnREdWVEYXRlVEQuaW5uZXJIVE1MID0gZXZlbnQuZ2V0RHVlRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRQcmlvcml0eVREID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXZlbnRQcmlvcml0eVRELmlubmVySFRNTCA9IGV2ZW50LmdldFByaW9yaXR5KCk7XG4gICAgICAgICAgICBjb25zdCBldmVudENvbXBsZXRlZFREID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXZlbnRDb21wbGV0ZWRURC5pbm5lckhUTUwgPSBldmVudC5nZXRDb21wbGV0ZWRTdGF0dXMoKTtcbiAgICAgICAgICAgIGlmKGV2ZW50LmdldENvbXBsZXRlZFN0YXR1cygpKXtcbiAgICAgICAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWN0aW9uc1REID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWN0aW9uc1RELmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVBY3Rpb25URCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29tcGxldGVBY3Rpb25URC5pbm5lckhUTUwgPSAnJiMxMDAwNDsnO1xuICAgICAgICAgICAgY29tcGxldGVBY3Rpb25URC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXR1cyA9IGV2ZW50LmdldENvbXBsZXRlZFN0YXR1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnNldENvbXBsZXRlZFN0YXR1cyghY3VycmVudFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgZXZlbnRDb21wbGV0ZWRURC5pbm5lckhUTUwgPSBldmVudC5nZXRDb21wbGV0ZWRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVBY3Rpb25URCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVsZXRlQWN0aW9uVEQuaW5uZXJIVE1MID0gJyYjMTAwMDg7JztcbiAgICAgICAgICAgIGRlbGV0ZUFjdGlvblRELmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsaXN0LnJlbW92ZUVsZW1lbnRCeUlEKGV2ZW50LmdldElEKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpc3RFdmVudHMobGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWN0aW9uc1RELmFwcGVuZENoaWxkKGNvbXBsZXRlQWN0aW9uVEQpO1xuICAgICAgICAgICAgYWN0aW9uc1RELmFwcGVuZENoaWxkKGRlbGV0ZUFjdGlvblREKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoZXZlbnRUaXRsZVREKTtcbiAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKGV2ZW50RHVlRGF0ZVREKTtcbiAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKGV2ZW50UHJpb3JpdHlURCk7XG4gICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChldmVudENvbXBsZXRlZFREKTtcbiAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKGFjdGlvbnNURCk7XG5cbiAgICAgICAgICAgIGxpc3RUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoKXtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2Uud3JpdGVMaXN0KHRoaXMubGlzdHMpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChtb2RhbCwgb3ZlcmxheSkge1xuICAgICAgICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKG1vZGFsLCBvdmVybGF5KSB7XG4gICAgICAgIGlmIChtb2RhbCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhcmVudExpc3QobGlzdHMpIHtcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gICAgc3RhdGljIGV2ZW50Q291bnQgPSAwO1xuICAgIHRpdGxlO1xuICAgIGRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGU7XG4gICAgcHJpb3JpdHk7XG4gICAgY29tcGxldGVkO1xuICAgIHBhcmVudExpc3Q7XG4gICAgaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLmlkID0gRXZlbnQuZXZlbnRDb3VudDtcbiAgICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gLTE7IC8vIElmIGV2ZW50IGhhcyBubyBwYXJlbnQsIElEIGlzIC0xXG4gICAgICAgIEV2ZW50LmV2ZW50Q291bnQrKztcbiAgICB9XG5cbiAgICBnZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0SUQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICBpZih0aXRsZSA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgaWYoZGVzY3JpcHRpb24gPT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgaWYoZHVlRGF0ZSA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRDb21wbGV0ZWRTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBzZXRDb21wbGV0ZWRTdGF0dXMoY29tcGxldGVkKXtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgLy8gISBVbnN1cmUgaWYgdGhpcyB3aWxsIGFjdHVhbGx5IGJlIHVzZWQsIGJ1dCBqdXN0IGluIGNhc2UuIEFsc28gaXQgbG9va3MgY29vbC5cbiAgICBhZGRUb0xpc3QobGlzdCl7XG4gICAgICAgIGxpc3QuYWRkRXZlbnQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KGlkKSB7XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IGlkO1xuICAgIH1cblxuICAgIGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50TGlzdDtcbiAgICB9XG5cbiAgICBwcmludE1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCBcIjpcIiwgdGhpcy5kZXNjcmlwdGlvbik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgc3RhdGljIGxpc3RDb3VudCA9IDA7XG4gICAgdGl0bGU7XG4gICAgaWQ7XG4gICAgZXZlbnRzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuaWQgPSBMaXN0Lmxpc3RDb3VudDtcbiAgICAgICAgTGlzdC5saXN0Q291bnQrKztcbiAgICB9XG5cbiAgICBmaW5kRXZlbnRCeUlEKGV2ZW50SUQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5ldmVudHMuZmluZEluZGV4KChldmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmdldElEKCkgPT0gZXZlbnRJRDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0RXZlbnRCeUlEKGV2ZW50SUQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRFdmVudEJ5SUQoZXZlbnRJRCk7XG4gICAgICAgIGlmKGluZGV4ICE9IC0xKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tpbmRleF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRWxlbWVudEJ5SUQoZXZlbnRJRCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEV2ZW50QnlJRChldmVudElEKTtcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBbXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICBpZih0aXRsZSA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0SUQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50LmdldFBhcmVudCgpID09IC0xKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnQuc2V0UGFyZW50KHRoaXMuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cztcbiAgICB9XG5cbiAgICBwcmludE1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbGlzdDonLCB0aGlzLnRpdGxlLCAnXFxuaWQ6JywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJpbnRNZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gc3RvcmFnZUhhbmRsZXIuanNcbi8vIFN0b3JlIGxpc3RzICYgZXZlbnRzXG4vLyBTdG9yZSBKU09OXG4vLyB3aXRoIGV2ZW50cyBhcyBjaGlsZHJlbiBvZiBsaXN0IGFzIGFuIGFycmF5XG4vL1xuLy8gZGVmYXVsdCBsaXN0IGhvbGRzIGFsbCB1bmNhdGVnb3JpemVkIGV2ZW50c1xuLy8ganVzdCBiZSBKU09OIHN0cmluZ2lmaWVkXG4vL1xuLy8gc3RvcmVkIGluICd0b2RvRGF0YSdcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0Q2xhc3MuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnRDbGFzcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZUhhbmRsZXIge1xuXG4gICAgd3JpdGVMaXN0KGxpc3RzKXtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvRGF0YScsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSlcbiAgICB9XG5cbiAgICBnZXRMaXN0KCl7XG4gICAgICAgIGNvbnN0IGJ1aWxkTGlzdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0RhdGEnKSk7XG4gICAgICAgIGNvbnN0IHJldHVybkxpc3RzID0gW107XG5cbiAgICAgICAgYnVpbGRMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3QudGl0bGUpO1xuICAgICAgICAgICAgbmV3TGlzdC5zZXRJRChsaXN0LmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGlzdC5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQudGl0bGUsIGV2ZW50LmRlc2NyaXB0aW9uLCBldmVudC5kdWVEYXRlLCBldmVudC5wcmlvcml0eSwgZXZlbnQuY29tcGxldGVkKTtcbiAgICAgICAgICAgICAgICBuZXdFdmVudC5zZXRJRChldmVudC5pZCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRFdmVudChuZXdFdmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybkxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuTGlzdHM7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Nzcy9ib2R5LmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci1iYXIuY3NzJztcbmltcG9ydCAnLi9jc3MvbmF2LWJhci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9mb3JtLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2NvbnRlbnQtY29udGFpbmVyLmNzcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudENsYXNzLmpzJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdENsYXNzLmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZUhhbmRsZXIuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTWhhbmRsZXIuanMnO1xuXG5jb25zdCBwYWdlRE9NID0gbmV3IERPTSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9