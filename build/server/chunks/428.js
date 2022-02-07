"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 8428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CH": () => (/* binding */ fontSizes),
/* harmony export */   "W0": () => (/* binding */ spacing),
/* harmony export */   "sW": () => (/* binding */ colours),
/* harmony export */   "mq": () => (/* binding */ mq),
/* harmony export */   "Nm": () => (/* binding */ visuallyhidden),
/* harmony export */   "GZ": () => (/* binding */ visuallyHiddenParagraphXXS),
/* harmony export */   "AA": () => (/* binding */ visuallyhiddenUntilFocus),
/* harmony export */   "Pc": () => (/* binding */ typograpyStyles),
/* harmony export */   "Cm": () => (/* binding */ bisqueLinks),
/* harmony export */   "S7": () => (/* binding */ pointLeftLinks),
/* harmony export */   "MR": () => (/* binding */ pointLeftJustifiedLinks),
/* harmony export */   "Fk": () => (/* binding */ pointRightLinks),
/* harmony export */   "pG": () => (/* binding */ layoutStyles),
/* harmony export */   "de": () => (/* binding */ footerStyles),
/* harmony export */   "Vt": () => (/* binding */ mainStyles)
/* harmony export */ });
/* unused harmony exports ratio, spacingBase, _visuallyhiddenReset */
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const ratio = parseFloat(1.333);
const fontSizes = {
  md: 1,
  sm: 1 / ratio,
  xs: 1 / (ratio * ratio),
  lg: 1 * ratio,
  xl: 1 * (ratio * ratio),
  xxl: 2,
  xxxl: 1 * (ratio * ratio * ratio)
};
const spacingBase = 30;
const spacing = {
  md: `${spacingBase}px`,
  sm: `${spacingBase / 2}px`,
  xs: `${spacingBase / 3}px`,
  xxs: `${spacingBase / 6}px`,
  lg: `${parseInt(spacingBase * 1.35)}px`,
  xl: `${spacingBase * 2}px`,
  xxl: `${spacingBase * 3}px`
};
const colours = {
  primary: 'mediumslateblue',
  secondary: '#FFDFDC',
  tertiary: 'aquamarine',
  focus: 'darkturquoise'
};
const breakpoints = {
  xxs: 321,
  xs: 440,
  sm: 641,
  // this is the govuk 'tablet' size
  md: 768,
  lg: 992,
  xl: 1200
};
const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px';

  accumulator[label] = cls => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("@media (", prefix + breakpoints[label] + suffix, "){", cls, ";}" + ( true ? "" : 0),  true ? "" : 0);

  return accumulator;
}, {});
const visuallyhidden =  true ? {
  name: "1snrpgp",
  styles: "border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px"
} : 0;
const _visuallyhiddenReset =  true ? {
  name: "u82o13",
  styles: "border:initial;clip:initial;height:auto;margin:initial;overflow:initial;padding:initial;position:initial;width:auto"
} : 0;
const visuallyHiddenParagraphXXS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(visuallyhidden, ";", mq.xxs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(_visuallyhiddenReset, ";margin-bottom:", spacing.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";" + ( true ? "" : 0),  true ? "" : 0);
const visuallyhiddenUntilFocus = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(visuallyhidden, ";:focus{position:absolute;clip:unset;height:auto;width:auto;top:4px;left:4px;}" + ( true ? "" : 0),  true ? "" : 0);
const typograpyStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("html{font-size:130%;line-height:1.3;", mq.xxs( true ? {
  name: "13u245s",
  styles: "font-size:145%"
} : 0), ";", mq.sm( true ? {
  name: "1cmtmib",
  styles: "font-size:155%;line-height:1.27"
} : 0), ";", mq.md( true ? {
  name: "1qw6owj",
  styles: "font-size:165%"
} : 0), ";}body{font-size:", fontSizes.md, "rem;}h1,h2,h3,h4,h5,h6{font-weight:600;}h1{margin-bottom:", spacing.xxl, ";}h2{margin-bottom:", spacing.md, ";", mq.xxs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin-top:", spacing.xl, ";" + ( true ? "" : 0),  true ? "" : 0)), ";}h3,h4,h5,h6{margin-bottom:", spacing.md, ";}h1{font-size:", fontSizes.xl, "rem;line-height:1.05;", mq.xxs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("font-size:", fontSizes.xxl, "rem;" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("font-size:", fontSizes.xxxl, "rem;" + ( true ? "" : 0),  true ? "" : 0)), ";}h2{font-size:", fontSizes.lg, "rem;line-height:1.05;", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("font-size:", fontSizes.xl, "rem;" + ( true ? "" : 0),  true ? "" : 0)), ";}h3,h4,h5,h6{font-size:", fontSizes.md, "rem;line-height:1.15;", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("font-size:", fontSizes.lg, "rem;" + ( true ? "" : 0),  true ? "" : 0)), ";}blockquote{margin-left:", spacing.md, ";footer{", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("padding-left:", spacing.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";}}p,blockquote{margin-bottom:", spacing.md, ";}:not(nav)>ul,:not(nav)>ol{margin-bottom:", spacing.md, ";margin-left:22px;", mq.xs( true ? {
  name: "1gz4j9a",
  styles: "margin-left:0"
} : 0), ";ul,ol{margin-bottom:", spacing.xxs, ";margin-left:", spacing.md, ";}li{margin-bottom:", spacing.xs, ";", mq.md( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin-bottom:", spacing.xxs, ";" + ( true ? "" : 0),  true ? "" : 0)), ";&:last-child{margin-bottom:0;}}}button{font-size:", fontSizes.md, "rem;}" + ( true ? "" : 0),  true ? "" : 0);
const bisqueLinks = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("a:hover,a:focus{background-color:", colours.secondary, ";}" + ( true ? "" : 0),  true ? "" : 0);

const _pointLinks = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("a{padding:0 ", spacing.xxs, ";&::before,&::after{color:transparent;}}a:hover,a:focus,a[aria-current]{&::before,&::after{color:currentColor;}}" + ( true ? "" : 0));

const pointLeftLinks = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(_pointLinks, ";" + ( true ? "" : 0),  true ? "" : 0);
const pointLeftJustifiedLinks = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(pointLeftLinks, ";a{margin-left:-", spacing.xxs, ";}" + ( true ? "" : 0),  true ? "" : 0);
const pointRightLinks = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(_pointLinks, ";" + ( true ? "" : 0),  true ? "" : 0);
const layoutStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin:", spacing.sm, ";margin-top:calc(", spacing.md, " - ", spacing.xxs, ");main,footer{&:focus{outline:none;}}", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin:", spacing.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.sm( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin:", spacing.lg, ";" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.md( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin:", spacing.xl, ";margin-bottom:", spacing.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";" + ( true ? "" : 0),  true ? "" : 0);
const footerStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("position:fixed;z-index:100;bottom:0;right:0;width:100%;padding:", spacing.sm, " ", spacing.sm, ";text-align:right;border-top:2px solid ", colours.secondary, ";background-color:white;", mq.xs( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("padding:", spacing.sm, " ", spacing.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.sm( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("position:relative;position:sticky;top:", spacing.lg, ";flex:1 1 auto;padding:0;width:initial;border-top:none;background-color:transparent;" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.md( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("top:", spacing.xl, ";" + ( true ? "" : 0),  true ? "" : 0)), ";" + ( true ? "" : 0),  true ? "" : 0);
const mainStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("flex:4 1 auto;margin-right:0;margin-bottom:", spacing.xl, ";min-width:0;", mq.sm( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin-right:", spacing.xs, ";margin-bottom:0;" + ( true ? "" : 0),  true ? "" : 0)), ";", mq.md( /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("flex:3 1 auto;margin-right:", spacing.xl, ";max-width:30em;" + ( true ? "" : 0),  true ? "" : 0)), ";div{margin-bottom:", spacing.md, ";}", bisqueLinks, ";" + ( true ? "" : 0),  true ? "" : 0);

/***/ })

};
;