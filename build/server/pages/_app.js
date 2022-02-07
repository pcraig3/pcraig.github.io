"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./styles/utils.js
var utils = __webpack_require__(8428);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./styles/global.js



const globalStyles = jsx_runtime_.jsx(react_.Global, {
  styles: /*#__PURE__*/(0,react_.css)("html{font-family:'Gothic A1',sans-serif;overflow-y:scroll;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}*:focus{outline:2px solid ", utils/* colours.focus */.sW.focus, ";}a,a:visited,button{text-decoration:none;color:", utils/* colours.primary */.sW.primary, ";}img{max-width:100%;height:auto;}::selection{color:black;background:", utils/* colours.tertiary */.sW.tertiary, ";}body,#wrapper,#content{&:focus{outline:none;}}", utils/* typograpyStyles */.Pc, ";" + ( true ? "" : 0),  true ? "" : 0)
});
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */





const App = ({
  Component,
  pageProps
}) => (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [globalStyles, jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
});

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [428], () => (__webpack_exec__(4127)));
module.exports = __webpack_exports__;

})();