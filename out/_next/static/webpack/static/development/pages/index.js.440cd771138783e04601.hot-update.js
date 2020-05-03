webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Grid */ "./styles/Grid.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading/Loading */ "./components/Loading/Loading.js");
/* harmony import */ var _components_Repository_Repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Repository/Repository */ "./components/Repository/Repository.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "/Users/felipetrova/projects/felipetrova/felipetrova/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      setUser = _useState[0],
      setUserState = _useState[1]; // eslint-disable-next-line no-unused-vars


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      setRepos = _useState2[0],
      setReposState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var loadUser = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              setLoading(true); // const response = await axios.get(`/users/felipetrova`);

              axios__WEBPACK_IMPORTED_MODULE_7___default()("https://api.github.com/users/felipetrova").then(function (res) {
                console.log(res.data);

                if (res.data !== null) {
                  setUserState(res.data);
                } else {
                  console.log("User not found. Please try again.");
                }
              });
            } catch (error) {
              console.log("User not found. Please try again.");
            }

            setLoading(false);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  });
  var loadRepos = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              setLoading(true); // const response = await axios.get(`/users/felipetrova/repos`);

              axios__WEBPACK_IMPORTED_MODULE_7___default()("https://api.github.com/users/felipetrova/repos").then(function (res) {
                console.log(res.data);

                if (res.data !== null && res.data.length > 0) {
                  setReposState(res.data);
                } else {
                  console.log("Repositories not found. Please try again.");
                }
              });
            } catch (error) {
              console.log("Repositories not found. Please try again.");
            }

            setLoading(false);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadUser();
    loadRepos();
    document.title = "Felipe Trova - Blog";
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && __jsx(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "/",
    title: "My personal blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mt-45px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    desktop: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 12,
    tablet: 12,
    desktop: 8,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 4,
    tablet: 3,
    desktop: 4,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: setUser.avatar_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 8,
    tablet: 9,
    desktop: 8,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s30px tx-green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, setUser.name))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mt-40px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    general: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, setUser.bio), __jsx("p", {
    className: "fn-s16px tx-white mt-16px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "My contacts:"), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 12,
    tablet: 4,
    desktop: 4,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "mailto:felipee.trova@gmail.com",
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, "felipee.trova@gmail.com")))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 12,
    tablet: 4,
    desktop: 4,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://twitter.com/felipetrova",
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, "https://twitter.com/felipetrova")))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    mobile: 12,
    tablet: 4,
    desktop: 4,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: setUser.html_url,
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, setUser.html_url))))))))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    desktop: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  })), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, setRepos && setRepos.length > 0 && setRepos.map(function (item, index) {
    return __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: index + 1,
      mobile: 12,
      tablet: 6,
      desktop: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }
    }, __jsx(_components_Repository_Repository__WEBPACK_IMPORTED_MODULE_6__["default"], {
      repoProps: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.440cd771138783e04601.hot-update.js.map