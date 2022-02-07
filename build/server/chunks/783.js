"use strict";
exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 1138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8428);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const BackLink = ({
  href = '/'
}) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
  css: _styles_utils__WEBPACK_IMPORTED_MODULE_1__/* .pointLeftJustifiedLinks */ .MR,
  children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
    href: href,
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      children: href === '/' ? 'Start over' : `Back to ${href}`
    })
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackLink);

/***/ }),

/***/ 3783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post),
  "l": () => (/* binding */ subheadStyles)
});

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./components/layout.js + 4 modules
var layout = __webpack_require__(7851);
// EXTERNAL MODULE: ./styles/utils.js
var utils = __webpack_require__(8428);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./components/_img.js
const _excluded = ["href", "linkText"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const _hoverImg =  true ? {
  name: "13brvfn",
  styles: "background-color:#ffe4c4;figcaption{display:block;}img{filter:grayscale(100%) contrast(1) blur(0);mix-blend-mode:multiply;object-fit:cover;opacity:1;}&::before{background-color:#7b68ee;bottom:0;content:'';height:100%;left:0;mix-blend-mode:soft-light;position:absolute;right:0;top:0;width:100%;z-index:1;opacity:0.85;}"
} : 0;

const imgStyles = /*#__PURE__*/(0,react_.css)("background-color:", utils/* colours.secondary */.sW.secondary, ";display:flex;align-items:center;justify-content:center;height:100%;overflow:initial;padding:", utils/* spacing.sm */.W0.sm, ";position:relative;width:calc(100% + ", utils/* spacing.md */.W0.md, ");margin-left:-", utils/* spacing.sm */.W0.sm, ";", utils.mq.xs( true ? {
  name: "2rpklh",
  styles: "padding:20px;width:auto;margin-left:0"
} : 0), ";img{flex:1 0 100%;height:100%;position:relative;width:100%;}figcaption{display:none;}:hover{", _hoverImg, ";}" + ( true ? "" : 0),  true ? "" : 0);
const captionStyles = /*#__PURE__*/(0,react_.css)("position:absolute;border-bottom:2px solid black;border-right:2px solid black;z-index:2;padding:", utils/* spacing.sm */.W0.sm, ";color:black;background-color:", utils/* colours.tertiary */.sW.tertiary, ";>*{margin:0!important;display:inline-block;font-size:", utils/* fontSizes.md */.CH.md, "rem;line-height:0.9;}:hover{border-bottom:2px solid ", utils/* colours.tertiary */.sW.tertiary, ";border-right:2px solid ", utils/* colours.tertiary */.sW.tertiary, ";background:white;}" + ( true ? "" : 0),  true ? "" : 0);

const Figure = ({
  src,
  alt,
  hoverText
}) => (0,jsx_runtime_.jsxs)("figure", {
  css: imgStyles,
  children: [jsx_runtime_.jsx("figcaption", {
    css: captionStyles,
    children: hoverText ? jsx_runtime_.jsx("div", {
      children: hoverText
    }) : null
  }), jsx_runtime_.jsx("img", {
    src: `${src}`,
    alt: alt
  })]
});

const imgWrapperStyles = /*#__PURE__*/(0,react_.css)("margin-bottom:", utils/* spacing.lg */.W0.lg, "!important;", utils.mq.xs( /*#__PURE__*/(0,react_.css)("margin-bottom:", utils/* spacing.xl */.W0.xl, "!important;" + ( true ? "" : 0),  true ? "" : 0)), ";a{font-size:0;}a:focus figure{", _hoverImg, ";}" + ( true ? "" : 0),  true ? "" : 0);
const hoverArchivedImg =  true ? {
  name: "5fd01y",
  styles: ":hover figcaption{cursor:not-allowed;}"
} : 0;

const Img = _ref => {
  let {
    href,
    linkText
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return jsx_runtime_.jsx("div", {
    css: href ? imgWrapperStyles : `${imgWrapperStyles} ${hoverArchivedImg}`,
    children: href ? linkText ? jsx_runtime_.jsx("a", {
      href: href,
      target: "_blank",
      "aria-label": linkText,
      children: jsx_runtime_.jsx(Figure, _objectSpread({}, props))
    }) : jsx_runtime_.jsx("a", {
      href: href,
      target: "_blank",
      children: jsx_runtime_.jsx(Figure, _objectSpread({}, props))
    }) : jsx_runtime_.jsx(Figure, _objectSpread({}, props))
  });
};

/* harmony default export */ const _img = (Img);
// EXTERNAL MODULE: ./components/backLink.js
var backLink = __webpack_require__(1138);
;// CONCATENATED MODULE: ./components/post.js







const subheadStyles = /*#__PURE__*/(0,react_.css)("margin-top:calc(-", utils/* spacing.lg */.W0.lg, " - ", utils/* spacing.lg */.W0.lg, ");margin-bottom:", utils/* spacing.lg */.W0.lg, ";text-transform:uppercase;font-size:", utils/* fontSizes.md */.CH.md, "rem;", utils.mq.xs( /*#__PURE__*/(0,react_.css)("margin-top:calc(-", utils/* spacing.lg */.W0.lg, " - ", utils/* spacing.md */.W0.md, ");margin-bottom:", utils/* spacing.xl */.W0.xl, ";" + ( true ? "" : 0),  true ? "" : 0)), ";" + ( true ? "" : 0),  true ? "" : 0);
const contentStyles = /*#__PURE__*/(0,react_.css)("margin-bottom:", utils/* spacing.lg */.W0.lg, "!important;", utils.mq.xs( /*#__PURE__*/(0,react_.css)("margin-bottom:", utils/* spacing.xl */.W0.xl, "!important;" + ( true ? "" : 0),  true ? "" : 0)), ";" + ( true ? "" : 0),  true ? "" : 0);

const Post = ({
  h1,
  subheading,
  title,
  imgSrc,
  imgAlt,
  href,
  linkText,
  children
}) => (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
  title: title || h1,
  children: [jsx_runtime_.jsx("h1", {
    children: h1
  }), jsx_runtime_.jsx("h2", {
    css: subheadStyles,
    children: subheading
  }), jsx_runtime_.jsx(_img, {
    src: imgSrc,
    alt: imgAlt,
    href: href,
    linkText: linkText,
    hoverText: href ? 'VISIT ☞' : 'ARCHIVED ☠'
  }), jsx_runtime_.jsx("div", {
    css: contentStyles,
    children: children
  }), jsx_runtime_.jsx(backLink/* default */.Z, {
    href: "/work"
  })]
});

/* harmony default export */ const post = (Post);

/***/ })

};
;