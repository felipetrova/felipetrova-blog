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
/* harmony import */ var _styles_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Grid */ "./styles/Grid.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading/Loading */ "./components/Loading/Loading.js");
/* harmony import */ var _components_Repository_Repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Repository/Repository */ "./components/Repository/Repository.js");
/* harmony import */ var _Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/Api */ "./Services/Api.js");


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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"].get("/users/felipetrova"));

          case 4:
            response = _context.sent;
            console.log(response.data);
            setUserState(response.data);

            if (response.data.length === 0) {
              console.log("User not found. Please try again.");
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log("User not found. Please try again.");

          case 13:
            setLoading(false);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]], Promise);
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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"].get("/users/felipetrova/repos"));

          case 4:
            response = _context2.sent;
            console.log(response.data);
            setReposState(response.data);

            if (response.data.length === 0) {
              console.log("Repositories not found. Please try again.");
            }

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log("Repositories not found. Please try again.");

          case 13:
            setLoading(false);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 10]], Promise);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadUser();
    loadRepos();
    document.title = "Felipe Trova - Blog";
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && __jsx(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/",
    title: "My personal blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mt-45px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    desktop: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    mobile: 12,
    tablet: 12,
    desktop: 6,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    mobile: 4,
    tablet: 6,
    desktop: 4,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: setUser.avatar_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    mobile: 8,
    tablet: 6,
    desktop: 8,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s30px tx-green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, setUser.name))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    general: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "fn-s16px tx-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, setUser.bio))))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    desktop: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, setRepos && setRepos.length > 0 && setRepos.map(function (item, index) {
    return __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      key: index + 1,
      mobile: 12,
      tablet: 6,
      desktop: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx(_components_Repository_Repository__WEBPACK_IMPORTED_MODULE_5__["default"], {
      repoProps: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 19
      }
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.353c5ac4d1193d00a4a9.hot-update.js.map