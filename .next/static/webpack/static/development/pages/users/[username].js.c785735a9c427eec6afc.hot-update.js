webpackHotUpdate("static/development/pages/users/[username].js",{

/***/ "./components/layout/header/index.js":
/*!*******************************************!*\
  !*** ./components/layout/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useComponentVisible */ \"./hooks/useComponentVisible.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ \"./constants/index.js\");\n/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/modal */ \"./store/modal.js\");\n/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/auth */ \"./store/auth.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../button */ \"./components/button/index.js\");\n/* harmony import */ var _navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../navigation-dropdown */ \"./components/navigation-dropdown/index.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons */ \"./components/icons/index.js\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header.module.css */ \"./components/layout/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/d0uk4sf3nsin9/Desktop/saasmicro/components/layout/header/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var className = _ref.className,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"className\"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n      handleComponentVisible = _useContext.handleComponentVisible;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_auth__WEBPACK_IMPORTED_MODULE_9__[\"AuthContext\"]),\n      isAuthenticated = _useContext2.isAuthenticated,\n      authState = _useContext2.authState,\n      logout = _useContext2.logout;\n\n  var _useComponentVisible = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(false),\n      ref = _useComponentVisible.ref,\n      toggleRef = _useComponentVisible.toggleRef,\n      isComponentVisible = _useComponentVisible.isComponentVisible,\n      setIsComponentVisible = _useComponentVisible.setIsComponentVisible;\n\n  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (size.width > _constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].MOBILE_SIZE) {\n      setIsComponentVisible(false);\n    }\n  }, [size]);\n  return __jsx(\"header\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.header, className)\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: toggleRef,\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menu,\n    onClick: function onClick() {\n      return setIsComponentVisible(function (isOpen) {\n        return !isOpen;\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, isComponentVisible ? __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__[\"Close\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 35\n    }\n  }) : __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__[\"Menu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 47\n    }\n  }))), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.logo,\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"Alex and Asimakis \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  }, \"overflow\"))), __jsx(\"div\", {\n    style: {\n      flex: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), isAuthenticated() ? __jsx(\"div\", {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.userInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"\\u039A\\u03B1\\u03BB\\u03CE\\u03C2 \\u03AE\\u03BB\\u03B8\\u03B5\\u03C2\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/users/[user]\",\n    as: \"/users/\".concat(authState.userInfo.username),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, authState.userInfo.username, \"!\"))), __jsx(\"a\", {\n    onClick: function onClick() {\n      return logout();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"\\u0391\\u03C0\\u03BF\\u03C3\\u03CD\\u03BD\\u03B4\\u03B5\\u03C3\\u03B7\")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.auth,\n    primary: true,\n    onClick: function onClick() {\n      return handleComponentVisible(true, 'login');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"\\u03A3\\u03CD\\u03BD\\u03B4\\u03B5\\u03C3\\u03B7\"), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.auth,\n    primary: true,\n    onClick: function onClick() {\n      return handleComponentVisible(true, 'signup');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"\\u0395\\u03B3\\u03B3\\u03C1\\u03B1\\u03C6\\u03AE\"))), __jsx(\"div\", {\n    ref: ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 45\n    }\n  })));\n};\n\n_s(Header, \"ancMrxVW6VoZ/+iiPgdnCNG7qCw=\", false, function () {\n  return [_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanM/YmZjZSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJNb2RhbENvbnRleHQiLCJoYW5kbGVDb21wb25lbnRWaXNpYmxlIiwiQXV0aENvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoU3RhdGUiLCJsb2dvdXQiLCJ1c2VDb21wb25lbnRWaXNpYmxlIiwicmVmIiwidG9nZ2xlUmVmIiwiaXNDb21wb25lbnRWaXNpYmxlIiwic2V0SXNDb21wb25lbnRWaXNpYmxlIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsIkNPTlNUIiwiTU9CSUxFX1NJWkUiLCJjbiIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIm1lbnVDb250YWluZXIiLCJtZW51IiwiaXNPcGVuIiwibG9nbyIsImZsZXgiLCJ1c2VySW5mbyIsInVzZXJuYW1lIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsb0JBQ1BDLHdEQUFVLENBQUNDLG9EQUFELENBREg7QUFBQSxNQUNsQ0Msc0JBRGtDLGVBQ2xDQSxzQkFEa0M7O0FBQUEscUJBRUtGLHdEQUFVLENBQUNHLHVEQUFELENBRmY7QUFBQSxNQUVsQ0MsZUFGa0MsZ0JBRWxDQSxlQUZrQztBQUFBLE1BRWpCQyxTQUZpQixnQkFFakJBLFNBRmlCO0FBQUEsTUFFTkMsTUFGTSxnQkFFTkEsTUFGTTs7QUFBQSw2QkFTdENDLDBFQUFtQixDQUFDLEtB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QUFPLE1BRlQ7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNM0Isc0JBQXNCLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBNUI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREYsRUFRRSxNQUFDLGdEQUFEO0FBQ0UsYUFBUyxFQUFFaUIsMERBQU0sQ0FBQ1UsSUFEcEI7QUFFRSxXQUFPLE1BRlQ7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNM0Isc0JBQXNCLENBQUMsSUFBRCxFQUFPLFFBQVAsQ0FBNUI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBUkYsQ0EvQkosQ0FERixFQW1ERTtBQUFLLE9BQUcsRUFBRU0sR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCRSxrQkFBa0IsSUFBSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEMsQ0FuREYsQ0FERjtBQXVERCxDQXpFRDs7R0FBTWIsTTtVQVNBVSxrRSxFQUNTTSw0RDs7O0tBVlRoQixNO0FBMkVTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgdXNlQ29tcG9uZW50VmlzaWJsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDb21wb25lbnRWaXNpYmxlJ1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uLy4uL3N0b3JlL21vZGFsJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi1kcm9wZG93bidcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcblxuY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuICBjb25zdCB7XG4gICAgcmVmLFxuICAgIHRvZ2dsZVJlZixcbiAgICBpc0NvbXBvbmVudFZpc2libGUsXG4gICAgc2V0SXNDb21wb25lbnRWaXNpYmxlXG4gIH0gPSB1c2VDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2l6ZS53aWR0aCA+IENPTlNULk1PQklMRV9TSVpFKSB7XG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXG4gICAgfVxuICB9LCBbc2l6ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oc3R5bGVzLmhlYWRlciwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiByZWY9e3RvZ2dsZVJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29tcG9uZW50VmlzaWJsZSgoaXNPcGVuKSA9PiAhaXNPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNDb21wb25lbnRWaXNpYmxlID8gPENsb3NlIC8+IDogPE1lbnUgLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBBbGV4IGFuZCBBc2ltYWtpcyA8c3Bhbj5vdmVyZmxvdzwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+PC9kaXY+XG5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIM6azrHOu8+Oz4Igzq7Ou864zrXPgnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi91c2Vycy9bdXNlcl1cIlxuICAgICAgICAgICAgICAgIGFzPXtgL3VzZXJzLyR7YXV0aFN0YXRlLnVzZXJJbmZvLnVzZXJuYW1lfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT57YXV0aFN0YXRlLnVzZXJJbmZvLnVzZXJuYW1lfSE8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT7Okc+Azr/Pg8+Nzr3OtM61z4POtzwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ2xvZ2luJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIM6jz43Ovc60zrXPg863XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aH1cbiAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdzaWdudXAnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgzpXOs86zz4HOsc+Gzq5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgcmVmPXtyZWZ9Pntpc0NvbXBvbmVudFZpc2libGUgJiYgPE5hdmlnYXRpb25Ecm9wZG93biAvPn08L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header/index.js\n");

/***/ })

})