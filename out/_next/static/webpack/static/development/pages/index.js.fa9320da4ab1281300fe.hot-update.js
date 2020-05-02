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
/* harmony import */ var _Services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/Api */ "./Services/Api.js");


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
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].get("/users/felipetrova"));

          case 4:
            response = _context.sent;
            setUserState(response.data);

            if (response.data.length === 0) {
              console.log("User not found. Please try again.");
            }

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log("User not found. Please try again.");

          case 12:
            setLoading(false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]], Promise);
  });
  var loadRepos = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee2() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setLoading(true);
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].get("/users/felipetrova/repos"));

          case 4:
            response = _context2.sent;
            setReposState(response.data);

            if (response.data.length === 0) {
              console.log("Repositories not found. Please try again.");
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log("Repositories not found. Please try again.");

          case 12:
            setLoading(false);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]], Promise);
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
      lineNumber: 58,
      columnNumber: 19
    }
  }), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "/",
    title: "My personal blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mt-45px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    desktop: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: setUser.avatar_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s30px tx-green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, setUser.name))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mt-40px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    general: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, setUser.bio), __jsx("p", {
    className: "fn-s16px tx-white mt-16px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "My contacts:"), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "mailto:felipee.trova@gmail.com",
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 127,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://twitter.com/felipetrova",
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 145,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white mt-6px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: setUser.html_url,
    prefetch: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, setUser.html_url))))))))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    desktop: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  })), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
        lineNumber: 173,
        columnNumber: 17
      }
    }, __jsx(_components_Repository_Repository__WEBPACK_IMPORTED_MODULE_6__["default"], {
      repoProps: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 19
      }
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fa9320da4ab1281300fe.hot-update.js.map