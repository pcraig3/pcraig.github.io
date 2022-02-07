"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./styles/utils.js
var utils = __webpack_require__(8428);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./components/_logo.js
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const logoStyles = /*#__PURE__*/(0,react_.css)("position:fixed;bottom:", utils/* spacing.sm */.W0.sm, ";left:", utils/* spacing.sm */.W0.sm, ";display:inline-block;font-size:", utils/* fontSizes.lg */.CH.lg, "rem;.show-menu &{display:none;}", utils.mq.xs( /*#__PURE__*/(0,react_.css)("left:", utils/* spacing.md */.W0.md, ";" + ( true ? "" : 0),  true ? "" : 0)), ";", utils.mq.sm( /*#__PURE__*/(0,react_.css)("position:static;bottom:initial;left:initial;margin-bottom:", utils/* spacing.xxl */.W0.xxl, ";margin-top:", utils/* spacing.sm */.W0.sm, ";.show-menu &{display:inline-block;}" + ( true ? "" : 0),  true ? "" : 0)), ";br{display:none;", utils.mq.sm( true ? {
  name: "168giuu",
  styles: "display:initial"
} : 0), ";}& a,& a:visited{padding:0;color:black;}& a:hover,& a:focus{background-color:inherit;}& a span{padding:0 ", utils/* spacing.xxs */.W0.xxs, ";display:inline-block;background-color:", utils/* colours.secondary */.sW.secondary, ";border-bottom:2px solid black;border-right:2px solid black;}& a:hover span,& a:focus span{color:", utils/* colours.primary */.sW.primary, ";background-color:white;border-bottom:2px solid ", utils/* colours.primary */.sW.primary, ";border-right:2px solid ", utils/* colours.primary */.sW.primary, ";}" + ( true ? "" : 0),  true ? "" : 0);

const Logo = () => jsx_runtime_.jsx("div", {
  css: logoStyles,
  children: jsx_runtime_.jsx(next_link["default"], {
    href: "/",
    children: jsx_runtime_.jsx("a", {
      "aria-label": "pcraig3.ca home page",
      children: jsx_runtime_.jsx("span", {
        children: "pcraig3"
      })
    })
  })
});

/* harmony default export */ const _logo = (Logo);
;// CONCATENATED MODULE: ./components/_nav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _nav_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const navStyles = /*#__PURE__*/(0,react_.css)("display:flex;justify-content:space-between;align-items:flex-end;min-height:39px;.hide-menu &{justify-content:flex-end;}", utils.mq.xs( true ? {
  name: "1f60if8",
  styles: "justify-content:flex-end"
} : 0), ";" + ( true ? "" : 0),  true ? "" : 0);
const ulStyles = /*#__PURE__*/(0,react_.css)("order:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;margin-left:-", utils/* spacing.xxs */.W0.xxs, ";list-style:none;", utils/* pointLeftLinks */.S7, ";.hide-menu &{display:none;}", utils.mq.xs( /*#__PURE__*/(0,react_.css)("align-items:flex-end;margin-left:0;", utils/* pointRightLinks */.Fk, ";" + ( true ? "" : 0),  true ? "" : 0)), ";", utils.mq.sm( true ? {
  name: "1gkrypj",
  styles: ".hide-menu &{display:flex;}"
} : 0), ";li{a{overflow:hidden;display:block;}&:not(:last-of-type){margin-bottom:", utils/* spacing.xxs */.W0.xxs, ";}}", utils/* bisqueLinks */.Cm, ";" + ( true ? "" : 0),  true ? "" : 0);
const formStyles =  true ? {
  name: "z12o55",
  styles: "order:2"
} : 0;
const buttonStyles = /*#__PURE__*/(0,react_.css)("border:none;background-color:transparent;text-transform:uppercase;cursor:pointer;margin-left:", utils/* spacing.md */.W0.md, ";padding:0 ", utils/* spacing.xxs */.W0.xxs, ";width:82px;text-align:center;border:2px solid ", utils/* colours.secondary */.sW.secondary, ";:hover,:focus{background-color:", utils/* colours.secondary */.sW.secondary, ";outline:2px solid ", utils/* colours.focus */.sW.focus, ";}", utils.mq.sm( true ? {
  name: "eivff4",
  styles: "display:none"
} : 0), ";span{padding:0;}" + ( true ? "" : 0),  true ? "" : 0);

const ToggleButton = ({
  onToggle,
  showMenu
}) => {
  return jsx_runtime_.jsx("form", {
    css: formStyles,
    children: jsx_runtime_.jsx("button", {
      css: buttonStyles,
      onClick: e => {
        e.preventDefault();
        onToggle();
      },
      "aria-controls": "navLinks",
      "aria-expanded": showMenu,
      "aria-label": "Toggle navigation",
      children: showMenu ? jsx_runtime_.jsx("span", {
        children: "x"
      }) : jsx_runtime_.jsx("span", {
        children: "menu"
      })
    })
  });
};

const NavLink = ({
  path,
  pathname
}) => jsx_runtime_.jsx("li", {
  children: jsx_runtime_.jsx(next_link["default"], {
    href: `${path}`,
    children: jsx_runtime_.jsx("a", _objectSpread(_objectSpread({}, path === pathname ? {
      'aria-current': 'page'
    } : {}), {}, {
      children: path === '/' ? 'home' : path.split('/').pop()
    }))
  })
});

const Nav = ({
  onToggle,
  showMenu,
  pathname
}) => (0,jsx_runtime_.jsxs)("nav", {
  css: navStyles,
  children: [jsx_runtime_.jsx(ToggleButton, {
    onToggle: onToggle,
    showMenu: showMenu,
    pathname: pathname
  }), (0,jsx_runtime_.jsxs)("ul", {
    css: ulStyles,
    id: "navLinks",
    children: [showMenu ? jsx_runtime_.jsx(NavLink, {
      path: "/",
      pathname: pathname
    }) : '', jsx_runtime_.jsx(NavLink, {
      path: "/about",
      pathname: pathname
    }), jsx_runtime_.jsx(NavLink, {
      path: "/work",
      pathname: pathname
    }), jsx_runtime_.jsx(NavLink, {
      path: "/contact",
      pathname: pathname
    })]
  })]
});

/* harmony default export */ const _nav = (Nav);
;// CONCATENATED MODULE: ./components/skipLink.js
function skipLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function skipLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { skipLink_ownKeys(Object(source), true).forEach(function (key) { skipLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { skipLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function skipLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SkipLink extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.focusEl = /*#__PURE__*/external_react_default().createRef();
  }

  componentDidMount() {
    this.focusEl.current.focus();
  }

  render() {
    const props = {
      tabIndex: -1,
      css: utils/* visuallyhidden */.Nm
    };
    return (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [jsx_runtime_.jsx("span", skipLink_objectSpread(skipLink_objectSpread({
        ref: this.focusEl
      }, props), {}, {
        children: this.props.title
      })), jsx_runtime_.jsx("a", {
        href: "#content",
        css: utils/* visuallyhiddenUntilFocus */.AA,
        children: "Skip to main content"
      }), jsx_runtime_.jsx("a", {
        href: "#footer",
        css: utils/* visuallyhiddenUntilFocus */.AA,
        children: "Skip to main navigation"
      })]
    });
  }

}

/* harmony default export */ const skipLink = (SkipLink);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./utils/analytics.js

const initGA = () => {
  console.log('GA init');
  external_react_ga_default().initialize('UA-37633400-8');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  external_react_ga_default().set({
    page: window.location.pathname
  });
  external_react_ga_default().pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({
      description,
      fatal
    });
  }
};
;// CONCATENATED MODULE: ./components/layout.js












class Layout extends external_react_.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      showMenu: this.props.router.query.showMenu === 'true'
    };
  }

  onToggle() {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (true) {
      if (window && !window.GA_INITIALIZED) {
        // eslint-disable-next-line no-undef
        initGA(process.env.RAZZLE_GA_ID);
        window.GA_INITIALIZED = true;
      }

      logPageView();
    }
  }

  render() {
    const {
      children,
      title,
      styles,
      metaDescription,
      router
    } = this.props;
    return (0,jsx_runtime_.jsxs)("div", {
      id: "wrapper",
      css: utils/* layoutStyles */.pG,
      tabIndex: -1,
      children: [(0,jsx_runtime_.jsxs)((head_default()), {
        children: [jsx_runtime_.jsx("title", {
          children: title
        }), jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), metaDescription && jsx_runtime_.jsx("meta", {
          name: "description",
          content: metaDescription
        })]
      }), jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `<!--googleoff: all-->`
        }
      }), jsx_runtime_.jsx(skipLink, {
        title: title
      }), jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `<!--googleon: all-->`
        }
      }), jsx_runtime_.jsx("main", {
        id: "content",
        name: "content",
        "aria-label": "Main content",
        tabIndex: -1,
        css: /*#__PURE__*/(0,react_.css)(utils/* mainStyles */.Vt, " ", styles, ";" + ( true ? "" : 0),  true ? "" : 0),
        children: children
      }), (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        name: "footer",
        tabIndex: -1,
        "aria-label": "Main navigation",
        className: this.state.showMenu ? 'show-menu ' : 'hide-menu ',
        css: utils/* footerStyles */.de,
        children: [jsx_runtime_.jsx(_logo, {}), jsx_runtime_.jsx(_nav, {
          showMenu: this.state.showMenu,
          onToggle: this.onToggle,
          pathname: router.pathname
        })]
      })]
    });
  }

}

/* harmony default export */ const layout = ((0,router_.withRouter)(Layout));

/***/ })

};
;