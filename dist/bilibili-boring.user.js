// ==UserScript==
// @name         Bilibili Boring
// @namespace    zzzgydi/bilibili-boring
// @version      0.0.1
// @author       zzzgydi
// @description  用于无聊刷b站
// @license      MIT
// @icon         https://vitejs.dev/logo.svg
// @homepage     https://github.com/zzzgydi/bilibili-boring
// @homepageURL  https://github.com/zzzgydi/bilibili-boring
// @match        *://*.bilibili.com/*
// @exclude      *://api.bilibili.com/*
// @exclude      *://api.*.bilibili.com/*
// ==/UserScript==

// use vite-plugin-monkey@2.1.1 at 2022-08-28T18:23:29.708Z

;(({ css = "" }) => {
  const style = document.createElement("style");
  style.innerText = css;
  style.dataset.source = "vite-plugin-monkey";
  document.head.appendChild(style);
})({
  "css": "._setting_1tdcp_1 {\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000002;\n  background: rgba(255, 255, 255, 0.98);\n  padding: 20px 20px;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n._close_1tdcp_16 {\n  position: absolute;\n  color: #303233;\n  top: 4px;\n  right: 12px;\n  padding: 6px 8px;\n  z-index: 2;\n}\n\n._white_1tdcp_25 > h3,\n._black_1tdcp_26 > h3 {\n  color: #303233;\n  font-size: 16px;\n  margin-bottom: 2px;\n}\n\n._white_1tdcp_25 > h3 {\n  margin-top: 10px;\n}\n\n._textarea_1tdcp_36 {\n  width: 100%;\n  border: 1px solid #909399;\n  padding: 1px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 4px;\n}\n._textarea_1tdcp_36 > textarea {\n  width: 100%;\n  resize: none;\n  border: none;\n  outline: none;\n  margin: 1px 0;\n  background: transparent;\n}\n\n._footer_1tdcp_53 {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._footer_1tdcp_53 ._saveBtn_1tdcp_59 {\n  color: #000;\n  padding: 4px 6px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background: #fdfdfd;\n  overflow: hidden;\n}\n._footer_1tdcp_53 ._saveBtn_1tdcp_59:active, ._footer_1tdcp_53 ._saveBtn_1tdcp_59:focus {\n  background: #fff;\n  border-color: #aaa;\n  outline: auto;\n}._item_16d2x_1 {\n  width: 100%;\n  cursor: pointer;\n}\n._item_16d2x_1:focus {\n  outline: auto;\n}\n._item_16d2x_1:hover {\n  outline: auto;\n}\n\n._imgWrap_16d2x_12 {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 4px;\n  margin-bottom: 6px;\n  aspect-ratio: 16/9;\n}\n._imgWrap_16d2x_12 > img {\n  object-fit: contain;\n  width: 100%;\n}\n._imgWrap_16d2x_12 svg {\n  width: 14px;\n  height: 14px;\n  margin-right: 2px;\n}\n._imgWrap_16d2x_12 ._top_16d2x_29,\n._imgWrap_16d2x_12 ._bottom_16d2x_30 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #fff;\n  box-sizing: content-box;\n  line-height: 1;\n}\n._imgWrap_16d2x_12 ._top_16d2x_29 {\n  top: 0;\n  padding: 2px 6px 6px;\n  background: linear-gradient(to bottom, rgba(51, 51, 51, 0.85), rgba(51, 51, 51, 0.05));\n}\n._imgWrap_16d2x_12 ._top_16d2x_29 > span:first-child {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n._imgWrap_16d2x_12 ._top_16d2x_29 > span:last-child {\n  flex: none;\n}\n._imgWrap_16d2x_12 ._bottom_16d2x_30 {\n  bottom: 0;\n  padding: 10px 6px 2px;\n  background: linear-gradient(to top, rgba(51, 51, 51, 0.85), rgba(51, 51, 51, 0.05));\n  justify-content: flex-end;\n}\n\n._title_16d2x_63 {\n  display: -webkit-box;\n  width: 100%;\n  height: 2.4em;\n  font-size: 14px;\n  color: #fff;\n  -webkit-line-clamp: 2;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}._container_41r3g_1 {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0));\n  z-index: 1000001;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n._leftBtn_41r3g_14,\n._rightBtn_41r3g_15 {\n  position: relative;\n  width: 30px;\n  height: 50px;\n  overflow: hidden;\n  display: block;\n  border: none;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  text-transform: none;\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n._leftBtn_41r3g_14:focus,\n._rightBtn_41r3g_15:focus {\n  outline: auto;\n}\n._leftBtn_41r3g_14::before,\n._rightBtn_41r3g_15::before {\n  content: \"\";\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-top: 5px solid #ccc;\n  border-right: 5px solid #ccc;\n  top: 50%;\n  left: -10px;\n  transform-origin: top;\n  transform: rotate(45deg) translateY(-50%);\n  box-sizing: border-box;\n}\n\n._leftBtn_41r3g_14::before {\n  left: 8px;\n  border-top: 5px solid #ccc;\n  border-left: 5px solid #ccc;\n  border-right: none;\n  transform: rotate(-45deg) translateY(-50%);\n}\n\n._setting_41r3g_61 {\n  position: absolute;\n  top: 136px;\n  right: 50px;\n  color: #fff;\n  font-size: 14px;\n  z-index: 2;\n}\n._setting_41r3g_61 > button {\n  color: #000;\n  padding: 4px 6px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background: #fdfdfd;\n  overflow: hidden;\n  margin-left: 16px;\n}\n._setting_41r3g_61 > button:active, ._setting_41r3g_61 > button:focus {\n  background: #fff;\n  border-color: #aaa;\n  outline: auto;\n}\n\n._content_41r3g_85 {\n  position: relative;\n  width: 80%;\n  height: 100%;\n  min-height: 300px;\n  padding: 200px 50px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 2%;\n}"
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
  function A$1(a) {
    if (null === a || "object" !== typeof a)
      return null;
    a = z$1 && a[z$1] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B$1 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$1 = Object.assign, D$1 = {};
  function E$1(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E$1.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E$1.prototype;
  function G$1(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  var H$1 = G$1.prototype = new F();
  H$1.constructor = G$1;
  C$1(H$1, E$1.prototype);
  H$1.isPureReactComponent = true;
  var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
  function M$1(a, b, e) {
    var d, c = {}, k2 = null, h = null;
    if (null != b)
      for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
        J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g)
      c.children = e;
    else if (1 < g) {
      for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
        f2[m2] = arguments[m2 + 2];
      c.children = f2;
    }
    if (a && a.defaultProps)
      for (d in g = a.defaultProps, g)
        void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
  }
  function N$1(a, b) {
    return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O$1(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l$1;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P$1 = /\/+/g;
  function Q$1(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R$1(a, b, e, d, c) {
    var k2 = typeof a;
    if ("undefined" === k2 || "boolean" === k2)
      a = null;
    var h = false;
    if (null === a)
      h = true;
    else
      switch (k2) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$1:
            case n$1:
              h = true;
          }
      }
    if (h)
      return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I$1(a))
      for (var g = 0; g < a.length; g++) {
        k2 = a[g];
        var f2 = d + Q$1(k2, g);
        h += R$1(k2, b, e, f2, c);
      }
    else if (f2 = A$1(a), "function" === typeof f2)
      for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
        k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
    else if ("object" === k2)
      throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S$1(a, b, e) {
    if (null == a)
      return a;
    var d = [], c = 0;
    R$1(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T$1(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status)
          a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status)
          a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status)
      return a._result.default;
    throw a._result;
  }
  var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
  react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
    S$1(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S$1(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S$1(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O$1(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p$2;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G$1;
  react_production_min.StrictMode = q$1;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f2 in b)
        J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2)
      d.children = e;
    else if (1 < f2) {
      g = Array(f2);
      for (var m2 = 0; m2 < f2; m2++)
        g[m2] = arguments[m2 + 2];
      d.children = g;
    }
    return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M$1;
  react_production_min.createFactory = function(a) {
    var b = M$1.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v$1, render: a };
  };
  react_production_min.isValidElement = O$1;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V$1.transition;
    V$1.transition = {};
    try {
      a();
    } finally {
      V$1.transition = b;
    }
  };
  react_production_min.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  react_production_min.useCallback = function(a, b) {
    return U$1.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U$1.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U$1.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U$1.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U$1.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U$1.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U$1.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U$1.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U$1.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U$1.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U$1.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U$1.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U$1.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U$1.current.useTransition();
  };
  react_production_min.version = "18.2.0";
  (function(module) {
    {
      module.exports = react_production_min;
    }
  })(react);
  const React = /* @__PURE__ */ getDefaultExportFromCjs(react.exports);
  var client = {};
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports) {
    function f2(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b))
            a[d] = b, a[c] = e, c = d;
          else
            break a;
        }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k2(a) {
      if (0 === a.length)
        return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
            var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g(C2, c))
              n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
            else if (n2 < e && 0 > g(x2, c))
              a[d] = x2, a[n2] = c, d = n2;
            else
              break a;
          }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a) {
      for (var b = h(t2); null !== b; ) {
        if (null === b.callback)
          k2(t2);
        else if (b.startTime <= a)
          k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
        else
          break;
        b = h(t2);
      }
    }
    function H2(a) {
      B2 = false;
      G2(a);
      if (!A2)
        if (null !== h(r2))
          A2 = true, I2(J2);
        else {
          var b = h(t2);
          null !== b && K2(H2, b.startTime - a);
        }
    }
    function J2(a, b) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c = y2;
      try {
        G2(b);
        for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
          var d = v2.callback;
          if ("function" === typeof d) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d(v2.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
            G2(b);
          } else
            k2(r2);
          v2 = h(r2);
        }
        if (null !== v2)
          var w2 = true;
        else {
          var m2 = h(t2);
          null !== m2 && K2(H2, m2.startTime - b);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a = exports.unstable_now();
        Q2 = a;
        var b = true;
        try {
          b = O2(true, a);
        } finally {
          b ? S2() : (N2 = false, O2 = null);
        }
      } else
        N2 = false;
    }
    var S2;
    if ("function" === typeof F2)
      S2 = function() {
        F2(R2);
      };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else
      S2 = function() {
        D2(R2, 0);
      };
    function I2(a) {
      O2 = a;
      N2 || (N2 = true, S2());
    }
    function K2(a, b) {
      L2 = D2(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r2);
    };
    exports.unstable_next = function(a) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y2;
      }
      var c = y2;
      y2 = b;
      try {
        return a();
      } finally {
        y2 = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y2;
      y2 = a;
      try {
        return b();
      } finally {
        y2 = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
      return a;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a) {
      var b = y2;
      return function() {
        var c = y2;
        y2 = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y2 = c;
        }
      };
    };
  })(scheduler_production_min);
  (function(module) {
    {
      module.exports = scheduler_production_min;
    }
  })(scheduler);
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = react.exports, ca = scheduler.exports;
  function p$1(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++)
      da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a))
      return true;
    if (ja.call(la, a))
      return false;
    if (ka.test(a))
      return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (null !== c)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d))
      return true;
    if (d)
      return false;
    if (null !== c)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function v(a, b, c, d, e, f2, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f2;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
      qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a)
      return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na)
      return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b)
        if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
          h--;
        for (; 1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f2[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f2[h]) {
                  var k2 = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a)
      return null;
    if ("function" === typeof a)
      return a.displayName || a.name || null;
    if ("string" === typeof a)
      return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a)
      switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b)
          return b.displayName || b.name || null;
        if ("string" === typeof b)
          return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f2 = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f2.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a)
      return false;
    var b = a._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a)
      return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c)
      if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c)
          a.value = "" + c;
      } else
        a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a)
      null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++)
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML)
      throw Error(p$1(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b)
          throw Error(p$1(92));
        if (eb(c)) {
          if (1 < c.length)
            throw Error(p$1(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
      a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; )
        a.removeChild(a.firstChild);
      for (; b.firstChild; )
        a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
        throw Error(p$1(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children)
          throw Error(p$1(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
          throw Error(p$1(61));
      }
      if (null != b.style && "object" !== typeof b.style)
        throw Error(p$1(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-"))
      return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb)
        throw Error(p$1(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b)
        for (a = 0; a < b.length; a++)
          Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib)
      return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab)
        Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c)
      return null;
    var d = Db(c);
    if (null === d)
      return null;
    c = d[b];
    a:
      switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
    if (a)
      return null;
    if (c && "function" !== typeof c)
      throw Error(p$1(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia)
    try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
  function Nb(a, b, c, d, e, f2, g, h, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f2, g, h, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f2, g, h, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p$1(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate)
      for (; b.return; )
        b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b)
        return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a)
      throw Error(p$1(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b)
        throw Error(p$1(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e)
        break;
      var f2 = e.alternate;
      if (null === f2) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c)
            return Xb(e), a;
          if (f2 === d)
            return Xb(e), b;
          f2 = f2.sibling;
        }
        throw Error(p$1(188));
      }
      if (c.return !== d.return)
        c = e, d = f2;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f2;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f2;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f2.child; h; ) {
            if (h === c) {
              g = true;
              c = f2;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f2;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g)
            throw Error(p$1(189));
        }
      }
      if (c.alternate !== d)
        throw Error(p$1(190));
    }
    if (3 !== c.tag)
      throw Error(p$1(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag)
      return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b)
        return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot)
      try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c)
      return 0;
    var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
    } else
      g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
    if (0 === d)
      return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
      return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b)
      for (a = a.entanglements, b &= d; 0 < b; )
        c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
      if (-1 === k2) {
        if (0 === (h & c) || 0 !== (h & d))
          e[g] = vc(h, b);
      } else
        k2 <= b && (a.expiredLanes |= h);
      f2 &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++)
      b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f2 = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f2;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f2) {
    if (null === a || a.nativeEvent !== f2)
      return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn)
      return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else
        return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++)
      d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
      Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e)
        hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d))
        d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a, b, c, d);
          null === f2 && hd(a, b, d, id, c);
          if (f2 === e)
            break;
          e = f2;
        }
        null !== e && d.stopPropagation();
      } else
        hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a)
      if (b = Vb(a), null === b)
        a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a)
          return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else
        b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md)
      return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++)
      ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
      ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f2, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f2;
      this.target = g;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b)
        return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie)
      return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b))
      return a;
  }
  function ve(a, b) {
    if ("change" === a)
      return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else
      xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a)
      return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a)
      return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a)
      return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b))
      return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
      return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e]))
        return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; )
      a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c)
        a = b.contentWindow;
      else
        break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
          c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f2 = Math.min(d.start, e);
          d = void 0 === d.end ? f2 : Math.min(d.end, e);
          !a.extend && f2 > d && (e = d, d = f2, f2 = e);
          e = Ke(c, f2);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; )
        1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++)
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a])
      return Xe[a];
    if (!We[a])
      return a;
    var b = We[a], c;
    for (c in b)
      if (b.hasOwnProperty(c) && c in Ye)
        return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f2 = void 0;
        if (b)
          for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k2 = h.instance, l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f2 = k2;
          }
        else
          for (g = 0; g < d.length; g++) {
            h = d[g];
            k2 = h.instance;
            l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f2 = k2;
          }
      }
    }
    if (Qb)
      throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f2 = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d)
      a:
        for (; ; ) {
          if (null === d)
            return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e)
              break;
            if (4 === g)
              for (g = d.return; null !== g; ) {
                var k2 = g.tag;
                if (3 === k2 || 4 === k2) {
                  if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                    return;
                }
                g = g.return;
              }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g)
                return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
    Jb(function() {
      var d2 = f2, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k3 = td, n2 = a;
          switch (a) {
            case "keypress":
              if (0 === od(c))
                break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c.button)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
          t2 = [];
          for (var w2 = d2, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2)
              break;
            w2 = w2.return;
          }
          0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k3 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k3 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k3) {
              if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                n2 = null;
            } else
              k3 = null, n2 = d2;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a || "pointerover" === a)
                t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h2 : ue(k3);
              u2 = null == n2 ? h2 : ue(n2);
              h2 = new t2(F2, w2 + "leave", k3, c, e2);
              h2.target = J2;
              h2.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2)
                b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2))
                    w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2))
                    u2++;
                  for (; 0 < w2 - u2; )
                    t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; )
                    x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                      break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
              else
                t2 = null;
              null !== k3 && wf(g2, h2, k3, t2, false);
              null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k3 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h2.type)
            var na = ve;
          else if (me(h2))
            if (we)
              na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable)
              Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae)
          b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
        else
          ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c))
          d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a)
      return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k2 = h.alternate, l2 = h.stateNode;
      if (null !== k2 && k2 === d)
        break;
      5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c)
      throw Error(p$1(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType)
        if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else
          "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b)
        break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b)
          break;
        if ("/$" === b)
          return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b)
            return a;
          b--;
        } else
          "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b)
      return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child)
          for (a = Mf(a); null !== a; ) {
            if (c = a[Of])
              return c;
            a = Mf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag)
      return a.stateNode;
    throw Error(p$1(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c)
      return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c)
      e[f2] = b[f2];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf)
      throw Error(p$1(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext)
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in b))
        throw Error(p$1(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d)
      throw Error(p$1(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f2 = 32 - oc(b) + e;
    if (30 < f2) {
      var g = e - e % 5;
      f2 = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f2 + a;
    } else
      rg = 1 << f2 | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a))
            throw Error(p$1(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a))
          throw Error(p$1(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
      a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg)
      return false;
    if (!I)
      return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a))
        throw Hg(), Error(p$1(418));
      for (; b; )
        Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a)
        throw Error(p$1(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else
              "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; )
      a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a)
        void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  var Mg = Uf(null), Ng = null, Og = null, Pg = null;
  function Qg() {
    Pg = Og = Ng = null;
  }
  function Rg(a) {
    var b = Mg.current;
    E(Mg);
    a._currentValue = b;
  }
  function Sg(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c)
        break;
      a = a.return;
    }
  }
  function Tg(a, b) {
    Ng = a;
    Pg = Og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
  }
  function Vg(a) {
    var b = a._currentValue;
    if (Pg !== a)
      if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
        if (null === Ng)
          throw Error(p$1(308));
        Og = a;
        Ng.dependencies = { lanes: 0, firstContext: a };
      } else
        Og = Og.next = a;
    return b;
  }
  var Wg = null;
  function Xg(a) {
    null === Wg ? Wg = [a] : Wg.push(a);
  }
  function Yg(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Zg(a, d);
  }
  function Zg(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; )
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var $g = false;
  function ah(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function ch(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function dh(a, b, c) {
    var d = a.updateQueue;
    if (null === d)
      return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return Zg(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Zg(a, c);
  }
  function eh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function fh(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f2 = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f2 ? e = f2 = g : f2 = f2.next = g;
          c = c.next;
        } while (null !== c);
        null === f2 ? e = f2 = b : f2 = f2.next = b;
      } else
        e = f2 = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function gh(a, b, c, d) {
    var e = a.updateQueue;
    $g = false;
    var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k2 = h, l2 = k2.next;
      k2.next = null;
      null === g ? f2 = l2 : g.next = l2;
      g = k2;
      var m2 = a.alternate;
      null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e.baseState;
      g = 0;
      m2 = l2 = k2 = null;
      h = f2;
      do {
        var r2 = h.lane, y2 = h.eventTime;
        if ((d & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n2 = a, t2 = h;
            r2 = b;
            y2 = c;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2)
                  break a;
                q2 = A({}, q2, r2);
                break a;
              case 2:
                $g = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
        } else
          y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
        h = h.next;
        if (null === h)
          if (h = e.shared.pending, null === h)
            break;
          else
            r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else
        null === f2 && (e.shared.lanes = 0);
      hh |= g;
      a.lanes = g;
      a.memoizedState = q2;
    }
  }
  function ih(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a)
      for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e)
            throw Error(p$1(191, e));
          e.call(d);
        }
      }
  }
  var jh = new aa.Component().refs;
  function kh(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var nh = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = L(), e = lh(a), f2 = ch(d, e);
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = dh(a, f2, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = L(), e = lh(a), f2 = ch(d, e);
    f2.tag = 1;
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = dh(a, f2, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = L(), d = lh(a), e = ch(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = dh(a, e, d);
    null !== b && (mh(b, a, d, c), eh(b, a, d));
  } };
  function oh(a, b, c, d, e, f2, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
  }
  function ph(a, b, c) {
    var d = false, e = Vf;
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f2);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b;
  }
  function qh(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && nh.enqueueReplaceState(b, b.state, null);
  }
  function rh(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = jh;
    ah(a);
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
    e.state = a.memoizedState;
    f2 = b.getDerivedStateFromProps;
    "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function sh(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag)
            throw Error(p$1(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(p$1(147, a));
        var e = d, f2 = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
          return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          b2 === jh && (b2 = e.refs = {});
          null === a2 ? delete b2[f2] : b2[f2] = a2;
        };
        b._stringRef = f2;
        return b;
      }
      if ("string" !== typeof a)
        throw Error(p$1(284));
      if (!c._owner)
        throw Error(p$1(290, a));
    }
    return a;
  }
  function th(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function uh(a) {
    var b = a._init;
    return b(a._payload);
  }
  function vh(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a)
        return null;
      for (; null !== d2; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
        null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = wh(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b2, c2, d2) {
      b2.index = d2;
      if (!a)
        return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2)
        return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag)
        return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k2(a2, b2, c2, d2) {
      var f3 = c2.type;
      if (f3 === ya)
        return m2(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
        return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
      d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = sh(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m2(a2, b2, c2, d2, f3) {
      if (null === b2 || 7 !== b2.tag)
        return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q2(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
        return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q2(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2))
          return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
        th(a2, b2);
      }
      return null;
    }
    function r2(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
        return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r2(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2))
          return null !== e2 ? null : m2(a2, b2, c2, d2, null);
        th(a2, c2);
      }
      return null;
    }
    function y2(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
        return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
          case Ha:
            var f3 = d2._init;
            return y2(a2, b2, c2, f3(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2))
          return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
        th(b2, d2);
      }
      return null;
    }
    function n2(e2, g2, h2, k3) {
      for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h2[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a && u2 && null === n3.alternate && b(e2, u2);
        g2 = f2(n3, g2, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h2.length)
        return c(e2, u2), I && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h2.length; w2++)
          u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I && tg(e2, w2);
        return l3;
      }
      for (u2 = d(e2, u2); w2 < h2.length; w2++)
        x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a && u2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function t2(e2, g2, h2, k3) {
      var l3 = Ka(h2);
      if ("function" !== typeof l3)
        throw Error(p$1(150));
      h2 = l3.call(h2);
      if (null == h2)
        throw Error(p$1(151));
      for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e2, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a && m3 && null === t3.alternate && b(e2, m3);
        g2 = f2(t3, g2, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done)
        return c(
          e2,
          m3
        ), I && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h2.next())
          n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I && tg(e2, w2);
        return l3;
      }
      for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
        n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a && m3.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function J2(a2, d2, f3, h2) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props);
                    d2.ref = sh(a2, l3, f3);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l3);
                  break;
                } else
                  b(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l3 = f3.key; null !== d2; ) {
                if (d2.key === l3)
                  if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f3.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else
                  b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = zh(f3, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
        }
        if (eb(f3))
          return n2(a2, d2, f3, h2);
        if (Ka(f3))
          return t2(a2, d2, f3, h2);
        th(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J2;
  }
  var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
  function Hh(a) {
    if (a === Dh)
      throw Error(p$1(174));
    return a;
  }
  function Ih(a, b) {
    G(Gh, b);
    G(Fh, a);
    G(Eh, Dh);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(Eh);
    G(Eh, b);
  }
  function Jh() {
    E(Eh);
    E(Fh);
    E(Gh);
  }
  function Kh(a) {
    Hh(Gh.current);
    var b = Hh(Eh.current);
    var c = lb(b, a.type);
    b !== c && (G(Fh, a), G(Eh, c));
  }
  function Lh(a) {
    Fh.current === a && (E(Eh), E(Fh));
  }
  var M = Uf(0);
  function Mh(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
          return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128))
          return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Nh = [];
  function Oh() {
    for (var a = 0; a < Nh.length; a++)
      Nh[a]._workInProgressVersionPrimary = null;
    Nh.length = 0;
  }
  var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
  function Q() {
    throw Error(p$1(321));
  }
  function Wh(a, b) {
    if (null === b)
      return false;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!He(a[c], b[c]))
        return false;
    return true;
  }
  function Xh(a, b, c, d, e, f2) {
    Rh = f2;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
    a = c(d, e);
    if (Th) {
      f2 = 0;
      do {
        Th = false;
        Uh = 0;
        if (25 <= f2)
          throw Error(p$1(301));
        f2 += 1;
        P = O = null;
        b.updateQueue = null;
        Ph.current = $h;
        a = c(d, e);
      } while (Th);
    }
    Ph.current = ai;
    b = null !== O && null !== O.next;
    Rh = 0;
    P = O = N = null;
    Sh = false;
    if (b)
      throw Error(p$1(300));
    return a;
  }
  function bi() {
    var a = 0 !== Uh;
    Uh = 0;
    return a;
  }
  function ci() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }
  function di() {
    if (null === O) {
      var a = N.alternate;
      a = null !== a ? a.memoizedState : null;
    } else
      a = O.next;
    var b = null === P ? N.memoizedState : P.next;
    if (null !== b)
      P = b, O = a;
    else {
      if (null === a)
        throw Error(p$1(310));
      O = a;
      a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
      null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }
  function ei(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function fi(a) {
    var b = di(), c = b.queue;
    if (null === c)
      throw Error(p$1(311));
    c.lastRenderedReducer = a;
    var d = O, e = d.baseQueue, f2 = c.pending;
    if (null !== f2) {
      if (null !== e) {
        var g = e.next;
        e.next = f2.next;
        f2.next = g;
      }
      d.baseQueue = e = f2;
      c.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d = d.baseState;
      var h = g = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Rh & m2) === m2)
          null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
          N.lanes |= m2;
          hh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g = d : k2.next = h;
      He(d, b.memoizedState) || (Ug = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k2;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
      while (e !== a);
    } else
      null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function gi(a) {
    var b = di(), c = b.queue;
    if (null === c)
      throw Error(p$1(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f2 = a(f2, g.action), g = g.next;
      while (g !== e);
      He(f2, b.memoizedState) || (Ug = true);
      b.memoizedState = f2;
      null === b.baseQueue && (b.baseState = f2);
      c.lastRenderedState = f2;
    }
    return [f2, d];
  }
  function hi() {
  }
  function ii(a, b) {
    var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
    f2 && (d.memoizedState = e, Ug = true);
    d = d.queue;
    ji(ki.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
      c.flags |= 2048;
      li(9, mi.bind(null, c, d, e, b), void 0, null);
      if (null === R)
        throw Error(p$1(349));
      0 !== (Rh & 30) || ni(c, b, e);
    }
    return e;
  }
  function ni(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = N.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function mi(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    oi(b) && pi(a);
  }
  function ki(a, b, c) {
    return c(function() {
      oi(b) && pi(a);
    });
  }
  function oi(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function pi(a) {
    var b = Zg(a, 1);
    null !== b && mh(b, a, 1, -1);
  }
  function qi(a) {
    var b = ci();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ri.bind(null, N, a);
    return [b.memoizedState, a];
  }
  function li(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = N.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function si() {
    return di().memoizedState;
  }
  function ti(a, b, c, d) {
    var e = ci();
    N.flags |= a;
    e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function ui(a, b, c, d) {
    var e = di();
    d = void 0 === d ? null : d;
    var f2 = void 0;
    if (null !== O) {
      var g = O.memoizedState;
      f2 = g.destroy;
      if (null !== d && Wh(d, g.deps)) {
        e.memoizedState = li(b, c, f2, d);
        return;
      }
    }
    N.flags |= a;
    e.memoizedState = li(1 | b, c, f2, d);
  }
  function vi(a, b) {
    return ti(8390656, 8, a, b);
  }
  function ji(a, b) {
    return ui(2048, 8, a, b);
  }
  function wi(a, b) {
    return ui(4, 2, a, b);
  }
  function xi(a, b) {
    return ui(4, 4, a, b);
  }
  function yi(a, b) {
    if ("function" === typeof b)
      return a = a(), b(a), function() {
        b(null);
      };
    if (null !== b && void 0 !== b)
      return a = a(), b.current = a, function() {
        b.current = null;
      };
  }
  function zi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ui(4, 4, yi.bind(null, b, a), c);
  }
  function Ai() {
  }
  function Bi(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1]))
      return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function Ci(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1]))
      return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function Di(a, b, c) {
    if (0 === (Rh & 21))
      return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
    He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
    return b;
  }
  function Ei(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Qh.transition;
    Qh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Qh.transition = d;
    }
  }
  function Fi() {
    return di().memoizedState;
  }
  function Gi(a, b, c) {
    var d = lh(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a))
      Ii(b, c);
    else if (c = Yg(a, b, c, d), null !== c) {
      var e = L();
      mh(c, a, d, e);
      Ji(c, b, d);
    }
  }
  function ri(a, b, c) {
    var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a))
      Ii(b, e);
    else {
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
        try {
          var g = b.lastRenderedState, h = f2(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k2 = b.interleaved;
            null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c = Yg(a, b, e, d);
      null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
    }
  }
  function Hi(a) {
    var b = a.alternate;
    return a === N || null !== b && b === N;
  }
  function Ii(a, b) {
    Th = Sh = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Ji(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
    ci().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ti(
      4194308,
      4,
      yi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ti(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ti(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = ci();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = ci();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = Gi.bind(null, N, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = ci();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
    return ci().memoizedState = a;
  }, useTransition: function() {
    var a = qi(false), b = a[0];
    a = Ei.bind(null, a[1]);
    ci().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = N, e = ci();
    if (I) {
      if (void 0 === c)
        throw Error(p$1(407));
      c = c();
    } else {
      c = b();
      if (null === R)
        throw Error(p$1(349));
      0 !== (Rh & 30) || ni(d, b, c);
    }
    e.memoizedState = c;
    var f2 = { value: c, getSnapshot: b };
    e.queue = f2;
    vi(ki.bind(
      null,
      d,
      f2,
      a
    ), [a]);
    d.flags |= 2048;
    li(9, mi.bind(null, d, f2, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = ci(), b = R.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Uh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else
      c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
      var b = di();
      return Di(b, O.memoizedState, a);
    },
    useTransition: function() {
      var a = fi(ei)[0], b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: false
  }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
    return gi(ei);
  }, useDebugValue: Ai, useDeferredValue: function(a) {
    var b = di();
    return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
  }, useTransition: function() {
    var a = gi(ei)[0], b = di().memoizedState;
    return [a, b];
  }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
  function Ki(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Li(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Mi(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Ni = "function" === typeof WeakMap ? WeakMap : Map;
  function Oi(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Pi || (Pi = true, Qi = d);
      Mi(a, b);
    };
    return c;
  }
  function Ri(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Mi(a, b);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
      Mi(a, b);
      "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Ni();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else
      e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
  }
  function Vi(a) {
    do {
      var b;
      if (b = 13 === a.tag)
        b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b)
        return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Wi(a, b, c, d, e) {
    if (0 === (a.mode & 1))
      return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Xi = ua.ReactCurrentOwner, Ug = false;
  function Yi(a, b, c, d) {
    b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
  }
  function Zi(a, b, c, d, e) {
    c = c.render;
    var f2 = b.ref;
    Tg(b, e);
    d = Xh(a, b, c, d, f2, e);
    c = bi();
    if (null !== a && !Ug)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Yi(a, b, d, e);
    return b.child;
  }
  function aj(a, b, c, d, e) {
    if (null === a) {
      var f2 = c.type;
      if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
        return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
      a = yh(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g = f2.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref)
        return $i(a, b, e);
    }
    b.flags |= 1;
    a = wh(f2, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function cj(a, b, c, d, e) {
    if (null !== a) {
      var f2 = a.memoizedProps;
      if (Ie(f2, d) && a.ref === b.ref)
        if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
          0 !== (a.flags & 131072) && (Ug = true);
        else
          return b.lanes = a.lanes, $i(a, b, e);
    }
    return dj(a, b, c, d, e);
  }
  function ej(a, b, c) {
    var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode)
      if (0 === (b.mode & 1))
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
      else {
        if (0 === (c & 1073741824))
          return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f2 ? f2.baseLanes : c;
        G(fj, gj);
        gj |= d;
      }
    else
      null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
    Yi(a, b, e, c);
    return b.child;
  }
  function hj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c)
      b.flags |= 512, b.flags |= 2097152;
  }
  function dj(a, b, c, d, e) {
    var f2 = Zf(c) ? Xf : H.current;
    f2 = Yf(b, f2);
    Tg(b, e);
    c = Xh(a, b, c, d, f2, e);
    d = bi();
    if (null !== a && !Ug)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Yi(a, b, c, e);
    return b.child;
  }
  function ij(a, b, c, d, e) {
    if (Zf(c)) {
      var f2 = true;
      cg(b);
    } else
      f2 = false;
    Tg(b, e);
    if (null === b.stateNode)
      jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k2 = g.context, l2 = c.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
      var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
      $g = false;
      var r2 = b.memoizedState;
      g.state = r2;
      gh(b, d, g, e);
      k2 = b.memoizedState;
      h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      bh(a, b);
      h = b.memoizedProps;
      l2 = b.type === b.elementType ? h : Lg(b.type, h);
      g.props = l2;
      q2 = b.pendingProps;
      r2 = g.context;
      k2 = c.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
      var y2 = c.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
      $g = false;
      r2 = b.memoizedState;
      g.state = r2;
      gh(b, d, g, e);
      var n2 = b.memoizedState;
      h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return kj(a, b, c, d, f2, e);
  }
  function kj(a, b, c, d, e, f2) {
    hj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g)
      return e && dg(b, c, false), $i(a, b, f2);
    d = b.stateNode;
    Xi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function lj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    Ih(a, b.containerInfo);
  }
  function mj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Yi(a, b, c, d);
    return b.child;
  }
  var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function pj(a, b, c) {
    var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h)
      f2 = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState)
      e |= 1;
    G(M, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a))
        return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h))
      return sj(a, b, g, d, h, e, c);
    if (f2) {
      f2 = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k2 = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
      f2.return = b;
      d.return = b;
      d.sibling = f2;
      b.child = d;
      d = f2;
      f2 = b.child;
      g = a.child.memoizedState;
      g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f2.memoizedState = g;
      f2.childLanes = a.childLanes & ~c;
      b.memoizedState = nj;
      return d;
    }
    f2 = a.child;
    a = f2.sibling;
    d = wh(f2, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function rj(a, b) {
    b = qj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function tj(a, b, c, d) {
    null !== d && Jg(d);
    Bh(b, a.child, null, c);
    a = rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function sj(a, b, c, d, e, f2, g) {
    if (c) {
      if (b.flags & 256)
        return b.flags &= -257, d = Li(Error(p$1(422))), tj(a, b, g, d);
      if (null !== b.memoizedState)
        return b.child = a.child, b.flags |= 128, null;
      f2 = d.fallback;
      e = b.mode;
      d = qj({ mode: "visible", children: d.children }, e, 0, null);
      f2 = Ah(f2, e, g, null);
      f2.flags |= 2;
      d.return = b;
      f2.return = b;
      d.sibling = f2;
      b.child = d;
      0 !== (b.mode & 1) && Bh(b, a.child, null, g);
      b.child.memoizedState = oj(g);
      b.memoizedState = nj;
      return f2;
    }
    if (0 === (b.mode & 1))
      return tj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d)
        var h = d.dgst;
      d = h;
      f2 = Error(p$1(419));
      d = Li(f2, d, void 0);
      return tj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (Ug || h) {
      d = R;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
      }
      uj();
      d = Li(Error(p$1(421)));
      return tj(a, b, g, d);
    }
    if ("$?" === e.data)
      return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
    a = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = rj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function wj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Sg(a.return, b, c);
  }
  function xj(a, b, c, d, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
  }
  function yj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
    Yi(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2))
      d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128))
        a:
          for (a = b.child; null !== a; ) {
            if (13 === a.tag)
              null !== a.memoizedState && wj(a, c, b);
            else if (19 === a.tag)
              wj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b)
              break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      d &= 1;
    }
    G(M, d);
    if (0 === (b.mode & 1))
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; )
            a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          xj(b, false, e, c, f2);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Mh(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          xj(b, true, c, null, f2);
          break;
        case "together":
          xj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function jj(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function $i(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    hh |= b.lanes;
    if (0 === (c & b.childLanes))
      return null;
    if (null !== a && b.child !== a.child)
      throw Error(p$1(153));
    if (null !== b.child) {
      a = b.child;
      c = wh(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function zj(a, b, c) {
    switch (b.tag) {
      case 3:
        lj(b);
        Ig();
        break;
      case 5:
        Kh(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        Ih(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Mg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated)
            return G(M, M.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes))
            return pj(a, b, c);
          G(M, M.current & 1);
          a = $i(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(M, M.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d)
            return yj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(M, M.current);
        if (d)
          break;
        else
          return null;
      case 22:
      case 23:
        return b.lanes = 0, ej(a, b, c);
    }
    return $i(a, b, c);
  }
  var Aj, Bj, Cj, Dj;
  Aj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag)
        a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Bj = function() {
  };
  Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      Hh(Eh.current);
      var f2 = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f2 = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l2 in e)
        if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
          if ("style" === l2) {
            var h = e[l2];
            for (g in h)
              h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else
            "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d) {
        var k2 = d[l2];
        h = null != e ? e[l2] : void 0;
        if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
          if ("style" === l2)
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2)
                k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else
              c || (f2 || (f2 = []), f2.push(
                l2,
                c
              )), c = k2;
          else
            "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c && (f2 = f2 || []).push("style", c);
      var l2 = f2;
      if (b.updateQueue = l2)
        b.flags |= 4;
    }
  };
  Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Ej(a, b) {
    if (!I)
      switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; )
            null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; )
            null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b)
      for (var e = a.child; null !== e; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else
      for (e = a.child; null !== e; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Fj(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        Jh();
        E(Wf);
        E(H);
        Oh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child)
          Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
        Bj(a, b);
        S(b);
        return null;
      case 5:
        Lh(b);
        var e = Hh(Gh.current);
        c = b.type;
        if (null !== a && null != b.stateNode)
          Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode)
              throw Error(p$1(166));
            S(b);
            return null;
          }
          a = Hh(Eh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f2 = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f2;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f2);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f2.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f2), D("invalid", d);
            }
            ub(c, f2);
            e = null;
            for (var g in f2)
              if (f2.hasOwnProperty(g)) {
                var h = f2[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
            switch (c) {
              case "input":
                Va(d);
                db(d, f2, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            Aj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++)
                    D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f2 in h)
                if (h.hasOwnProperty(f2)) {
                  var k2 = h[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
                }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f2 = d.value;
                  null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode)
          Dj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode)
            throw Error(p$1(166));
          c = Hh(Gh.current);
          Hh(Eh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f2 = d.nodeValue !== c) {
              if (a = xg, null !== a)
                switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
            }
            f2 && (b.flags |= 4);
          } else
            d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(M);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
            Hg(), Ig(), b.flags |= 98560, f2 = false;
          else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f2)
                throw Error(p$1(318));
              f2 = b.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2)
                throw Error(p$1(317));
              f2[Of] = b;
            } else
              Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f2 = false;
          } else
            null !== zg && (Gj(zg), zg = null), f2 = true;
          if (!f2)
            return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128))
          return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return Rg(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(M);
        f2 = b.memoizedState;
        if (null === f2)
          return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f2.rendering;
        if (null === g)
          if (d)
            Ej(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128))
              for (a = b.child; null !== a; ) {
                g = Mh(a);
                if (null !== g) {
                  b.flags |= 128;
                  Ej(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; )
                    f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(M, M.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
          }
        else {
          if (!d)
            if (a = Mh(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
                return S(b), null;
            } else
              2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
          f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
        }
        if (null !== f2.tail)
          return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p$1(156, b.tag));
  }
  function Jj(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Lh(b), null;
      case 13:
        E(M);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate)
            throw Error(p$1(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(M), null;
      case 4:
        return Jh(), null;
      case 10:
        return Rg(b.type._context), null;
      case 22:
      case 23:
        return Ij(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Mj(a, b) {
    var c = a.ref;
    if (null !== c)
      if ("function" === typeof c)
        try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
      else
        c.current = null;
  }
  function Nj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Oj = false;
  function Pj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a)
        var c = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f2 = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f2.nodeType;
            } catch (F2) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b:
              for (; ; ) {
                for (var y2; ; ) {
                  q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y2 = q2.firstChild))
                    break;
                  r2 = q2;
                  q2 = y2;
                }
                for (; ; ) {
                  if (q2 === a)
                    break b;
                  r2 === c && ++l2 === e && (h = g);
                  r2 === f2 && ++m2 === d && (k2 = g);
                  if (null !== (y2 = q2.nextSibling))
                    break;
                  q2 = r2;
                  r2 = q2.parentNode;
                }
                q2 = y2;
              }
            c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
          } else
            c = null;
        }
      c = c || { start: 0, end: 0 };
    } else
      c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; )
      if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
        a.return = b, V = a;
      else
        for (; null !== V; ) {
          b = V;
          try {
            var n2 = b.alternate;
            if (0 !== (b.flags & 1024))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n2) {
                    var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u2 = b.stateNode.containerInfo;
                  1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p$1(163));
              }
          } catch (F2) {
            W(b, b.return, F2);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
    n2 = Oj;
    Oj = false;
    return n2;
  }
  function Qj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Nj(b, c, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Rj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Sj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Tj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Uj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Vj(a) {
    a:
      for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Uj(a.return))
            return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2)
            continue a;
          if (null === a.child || 4 === a.tag)
            continue a;
          else
            a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2))
          return a.stateNode;
      }
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a))
      for (Wj(a, b, c), a = a.sibling; null !== a; )
        Wj(a, b, c), a = a.sibling;
  }
  function Xj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a))
      for (Xj(a, b, c), a = a.sibling; null !== a; )
        Xj(a, b, c), a = a.sibling;
  }
  var X = null, Yj = false;
  function Zj(a, b, c) {
    for (c = c.child; null !== c; )
      ak(a, b, c), c = c.sibling;
  }
  function ak(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount)
      try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
    switch (c.tag) {
      case 5:
        U || Mj(c, b);
      case 6:
        var d = X, e = Yj;
        X = null;
        Zj(a, b, c);
        X = d;
        Yj = e;
        null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Yj;
        X = c.stateNode.containerInfo;
        Yj = true;
        Zj(a, b, c);
        X = d;
        Yj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f2 = e, g = f2.destroy;
            f2 = f2.tag;
            void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Zj(a, b, c);
        break;
      case 1:
        if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
          try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
        Zj(a, b, c);
        break;
      case 21:
        Zj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
        break;
      default:
        Zj(a, b, c);
    }
  }
  function bk(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Lj());
      b.forEach(function(b2) {
        var d = ck.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function dk(a, b) {
    var c = b.deletions;
    if (null !== c)
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a, g = b, h = g;
          a:
            for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Yj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Yj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Yj = true;
                  break a;
              }
              h = h.return;
            }
          if (null === X)
            throw Error(p$1(160));
          ak(f2, g, e);
          X = null;
          Yj = false;
          var k2 = e.alternate;
          null !== k2 && (k2.return = null);
          e.return = null;
        } catch (l2) {
          W(e, b, l2);
        }
      }
    if (b.subtreeFlags & 12854)
      for (b = b.child; null !== b; )
        ek(b, a), b = b.sibling;
  }
  function ek(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dk(b, a);
        fk(a);
        if (d & 4) {
          try {
            Qj(3, a, a.return), Rj(3, a);
          } catch (t2) {
            W(a, a.return, t2);
          }
          try {
            Qj(5, a, a.return);
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 1:
        dk(b, a);
        fk(a);
        d & 512 && null !== c && Mj(c, c.return);
        break;
      case 5:
        dk(b, a);
        fk(a);
        d & 512 && null !== c && Mj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
          a.updateQueue = null;
          if (null !== k2)
            try {
              "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
              vb(h, g);
              var l2 = vb(h, f2);
              for (g = 0; g < k2.length; g += 2) {
                var m2 = k2[g], q2 = k2[g + 1];
                "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
              }
              switch (h) {
                case "input":
                  bb(e, f2);
                  break;
                case "textarea":
                  ib(e, f2);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e[Pf] = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
        }
        break;
      case 6:
        dk(b, a);
        fk(a);
        if (d & 4) {
          if (null === a.stateNode)
            throw Error(p$1(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 3:
        dk(b, a);
        fk(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated)
          try {
            bd(b.containerInfo);
          } catch (t2) {
            W(a, a.return, t2);
          }
        break;
      case 4:
        dk(b, a);
        fk(a);
        break;
      case 13:
        dk(b, a);
        fk(a);
        e = a.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
        d & 4 && bk(a);
        break;
      case 22:
        m2 = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
        fk(a);
        if (d & 8192) {
          l2 = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
            for (V = a, m2 = a.child; null !== m2; ) {
              for (q2 = V = m2; null !== V; ) {
                r2 = V;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Qj(4, r2, r2.return);
                    break;
                  case 1:
                    Mj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W(d, c, t2);
                      }
                    }
                    break;
                  case 5:
                    Mj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      hk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
              }
              m2 = m2.sibling;
            }
          a:
            for (m2 = null, q2 = a; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a)
                break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a)
                  break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        dk(b, a);
        fk(a);
        d & 4 && bk(a);
        break;
      case 21:
        break;
      default:
        dk(
          b,
          a
        ), fk(a);
    }
  }
  function fk(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Uj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p$1(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f2 = Vj(a);
            Xj(a, f2, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Vj(a);
            Wj(a, h, g);
            break;
          default:
            throw Error(p$1(161));
        }
      } catch (k2) {
        W(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function ik(a, b, c) {
    V = a;
    jk(a);
  }
  function jk(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f2 = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Kj;
        if (!g) {
          var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
          h = Kj;
          var l2 = U;
          Kj = g;
          if ((U = k2) && !l2)
            for (V = e; null !== V; )
              g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
          for (; null !== f2; )
            V = f2, jk(f2), f2 = f2.sibling;
          V = e;
          Kj = h;
          U = l2;
        }
        lk(a);
      } else
        0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
    }
  }
  function lk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Rj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U)
                  if (null === c)
                    d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                var f2 = b.updateQueue;
                null !== f2 && ih(b, f2, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child)
                    switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                  ih(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k2 = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c.focus();
                      break;
                    case "img":
                      k2.src && (c.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l2 = b.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p$1(163));
            }
          U || b.flags & 512 && Sj(b);
        } catch (r2) {
          W(b, b.return, r2);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function hk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Rj(4, b);
            } catch (k2) {
              W(b, c, k2);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k2) {
                W(b, e, k2);
              }
            }
            var f2 = b.return;
            try {
              Sj(b);
            } catch (k2) {
              W(b, f2, k2);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Sj(b);
            } catch (k2) {
              W(b, g, k2);
            }
        }
      } catch (k2) {
        W(b, b.return, k2);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
  function L() {
    return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
  }
  function lh(a) {
    if (0 === (a.mode & 1))
      return 1;
    if (0 !== (K & 2) && 0 !== Z)
      return Z & -Z;
    if (null !== Kg.transition)
      return 0 === Ck && (Ck = yc()), Ck;
    a = C;
    if (0 !== a)
      return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function mh(a, b, c, d) {
    if (50 < zk)
      throw zk = 0, Ak = null, Error(p$1(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== R)
      a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
  }
  function Ek(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === R ? Z : 0);
    if (0 === d)
      null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b)
        0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Gk(c, Hk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Hk(a, b) {
    Bk = -1;
    Ck = 0;
    if (0 !== (K & 6))
      throw Error(p$1(327));
    var c = a.callbackNode;
    if (Ik() && a.callbackNode !== c)
      return null;
    var d = uc(a, a === R ? Z : 0);
    if (0 === d)
      return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
      b = Jk(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f2 = Kk();
      if (R !== a || Z !== b)
        vk = null, Hj = B() + 500, Lk(a, b);
      do
        try {
          Mk();
          break;
        } catch (h) {
          Nk(a, h);
        }
      while (1);
      Qg();
      nk.current = f2;
      K = e;
      null !== Y ? b = 0 : (R = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
      if (1 === b)
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      if (6 === b)
        Dk(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
          throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p$1(345));
          case 2:
            Qk(a, uk, vk);
            break;
          case 3:
            Dk(a, d);
            if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0))
                break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                L();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
              break;
            }
            Qk(a, uk, vk);
            break;
          case 4:
            Dk(a, d);
            if ((d & 4194240) === d)
              break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f2 = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f2;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
              break;
            }
            Qk(a, uk, vk);
            break;
          case 5:
            Qk(a, uk, vk);
            break;
          default:
            throw Error(p$1(329));
        }
      }
    }
    Ek(a, B());
    return a.callbackNode === c ? Hk.bind(null, a) : null;
  }
  function Ok(a, b) {
    var c = tk;
    a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
    a = Jk(a, b);
    2 !== a && (b = uk, uk = c, null !== b && Gj(b));
    return a;
  }
  function Gj(a) {
    null === uk ? uk = a : uk.push.apply(uk, a);
  }
  function Pk(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c))
          for (var d = 0; d < c.length; d++) {
            var e = c[d], f2 = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f2(), e))
                return false;
            } catch (g) {
              return false;
            }
          }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c)
        c.return = b, b = c;
      else {
        if (b === a)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a)
            return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Dk(a, b) {
    b &= ~sk;
    b &= ~rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Fk(a) {
    if (0 !== (K & 6))
      throw Error(p$1(327));
    Ik();
    var b = uc(a, 0);
    if (0 === (b & 1))
      return Ek(a, B()), null;
    var c = Jk(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Ok(a, d));
    }
    if (1 === c)
      throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
    if (6 === c)
      throw Error(p$1(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Qk(a, uk, vk);
    Ek(a, B());
    return null;
  }
  function Rk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Hj = B() + 500, fg && jg());
    }
  }
  function Sk(a) {
    null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
    var b = K;
    K |= 1;
    var c = pk.transition, d = C;
    try {
      if (pk.transition = null, C = 1, a)
        return a();
    } finally {
      C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Ij() {
    gj = fj.current;
    E(fj);
  }
  function Lk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y)
      for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            Jh();
            E(Wf);
            E(H);
            Oh();
            break;
          case 5:
            Lh(d);
            break;
          case 4:
            Jh();
            break;
          case 13:
            E(M);
            break;
          case 19:
            E(M);
            break;
          case 10:
            Rg(d.type._context);
            break;
          case 22:
          case 23:
            Ij();
        }
        c = c.return;
      }
    R = a;
    Y = a = wh(a.current, null);
    Z = gj = b;
    T = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (null !== Wg) {
      for (b = 0; b < Wg.length; b++)
        if (c = Wg[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f2 = c.pending;
          if (null !== f2) {
            var g = f2.next;
            f2.next = e;
            d.next = g;
          }
          c.pending = d;
        }
      Wg = null;
    }
    return a;
  }
  function Nk(a, b) {
    do {
      var c = Y;
      try {
        Qg();
        Ph.current = ai;
        if (Sh) {
          for (var d = N.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Sh = false;
        }
        Rh = 0;
        P = O = N = null;
        Th = false;
        Uh = 0;
        ok.current = null;
        if (null === c || null === c.return) {
          T = 1;
          qk = b;
          Y = null;
          break;
        }
        a: {
          var f2 = a, g = c.return, h = c, k2 = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Vi(g);
            if (null !== y2) {
              y2.flags &= -257;
              Wi(y2, g, h, f2, b);
              y2.mode & 1 && Ti(f2, l2, b);
              b = y2;
              k2 = l2;
              var n2 = b.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b.updateQueue = t2;
              } else
                n2.add(k2);
              break a;
            } else {
              if (0 === (b & 1)) {
                Ti(f2, l2, b);
                uj();
                break a;
              }
              k2 = Error(p$1(426));
            }
          } else if (I && h.mode & 1) {
            var J2 = Vi(g);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Wi(J2, g, h, f2, b);
              Jg(Ki(k2, h));
              break a;
            }
          }
          f2 = k2 = Ki(k2, h);
          4 !== T && (T = 2);
          null === tk ? tk = [f2] : tk.push(f2);
          f2 = g;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var x2 = Oi(f2, k2, b);
                fh(f2, x2);
                break a;
              case 1:
                h = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var F2 = Ri(f2, h, b);
                  fh(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Tk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kk() {
    var a = nk.current;
    nk.current = ai;
    return null === a ? ai : a;
  }
  function uj() {
    if (0 === T || 3 === T || 2 === T)
      T = 4;
    null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
  }
  function Jk(a, b) {
    var c = K;
    K |= 2;
    var d = Kk();
    if (R !== a || Z !== b)
      vk = null, Lk(a, b);
    do
      try {
        Uk();
        break;
      } catch (e) {
        Nk(a, e);
      }
    while (1);
    Qg();
    K = c;
    nk.current = d;
    if (null !== Y)
      throw Error(p$1(261));
    R = null;
    Z = 0;
    return T;
  }
  function Uk() {
    for (; null !== Y; )
      Vk(Y);
  }
  function Mk() {
    for (; null !== Y && !cc(); )
      Vk(Y);
  }
  function Vk(a) {
    var b = Wk(a.alternate, a, gj);
    a.memoizedProps = a.pendingProps;
    null === b ? Tk(a) : Y = b;
    ok.current = null;
  }
  function Tk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Fj(c, b, gj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Jj(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a)
          a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Qk(a, b, c) {
    var d = C, e = pk.transition;
    try {
      pk.transition = null, C = 1, Xk(a, b, c, d);
    } finally {
      pk.transition = e, C = d;
    }
    return null;
  }
  function Xk(a, b, c, d) {
    do
      Ik();
    while (null !== xk);
    if (0 !== (K & 6))
      throw Error(p$1(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c)
      return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current)
      throw Error(p$1(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c.lanes | c.childLanes;
    Bc(a, f2);
    a === R && (Y = R = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
      Ik();
      return null;
    }));
    f2 = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f2) {
      f2 = pk.transition;
      pk.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      ok.current = null;
      Pj(a, c);
      ek(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      ik(c);
      dc();
      K = h;
      C = g;
      pk.transition = f2;
    } else
      a.current = c;
    wk && (wk = false, xk = a, yk = e);
    f2 = a.pendingLanes;
    0 === f2 && (Si = null);
    mc(c.stateNode);
    Ek(a, B());
    if (null !== b)
      for (d = a.onRecoverableError, c = 0; c < b.length; c++)
        e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Pi)
      throw Pi = false, a = Qi, Qi = null, a;
    0 !== (yk & 1) && 0 !== a.tag && Ik();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
    jg();
    return null;
  }
  function Ik() {
    if (null !== xk) {
      var a = Dc(yk), b = pk.transition, c = C;
      try {
        pk.transition = null;
        C = 16 > a ? 16 : a;
        if (null === xk)
          var d = false;
        else {
          a = xk;
          xk = null;
          yk = 0;
          if (0 !== (K & 6))
            throw Error(p$1(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f2 = V, g = f2.child;
            if (0 !== (V.flags & 16)) {
              var h = f2.deletions;
              if (null !== h) {
                for (var k2 = 0; k2 < h.length; k2++) {
                  var l2 = h[k2];
                  for (V = l2; null !== V; ) {
                    var m2 = V;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2)
                      q2.return = m2, V = q2;
                    else
                      for (; null !== V; ) {
                        m2 = V;
                        var r2 = m2.sibling, y2 = m2.return;
                        Tj(m2);
                        if (m2 === l2) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V = r2;
                          break;
                        }
                        V = y2;
                      }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g)
              g.return = f2, V = g;
            else
              b:
                for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048))
                    switch (f2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, f2, f2.return);
                    }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V = x2;
                    break b;
                  }
                  V = f2.return;
                }
          }
          var w2 = a.current;
          for (V = w2; null !== V; ) {
            g = V;
            var u2 = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u2)
              u2.return = g, V = u2;
            else
              b:
                for (g = w2; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048))
                    try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rj(9, h);
                      }
                    } catch (na) {
                      W(h, h.return, na);
                    }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F2 = h.sibling;
                  if (null !== F2) {
                    F2.return = h.return;
                    V = F2;
                    break b;
                  }
                  V = h.return;
                }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot)
            try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
          d = true;
        }
        return d;
      } finally {
        C = c, pk.transition = b;
      }
    }
    return false;
  }
  function Yk(a, b, c) {
    b = Ki(c, b);
    b = Oi(a, b, 1);
    a = dh(a, b, 1);
    b = L();
    null !== a && (Ac(a, 1, b), Ek(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag)
      Yk(a, a, c);
    else
      for (; null !== b; ) {
        if (3 === b.tag) {
          Yk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
            a = Ki(c, a);
            a = Ri(b, a, 1);
            b = dh(b, a, 1);
            a = L();
            null !== b && (Ac(b, 1, a), Ek(b, a));
            break;
          }
        }
        b = b.return;
      }
  }
  function Ui(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = L();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
    Ek(a, b);
  }
  function Zk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = L();
    a = Zg(a, b);
    null !== a && (Ac(a, b, c), Ek(a, c));
  }
  function vj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Zk(a, c);
  }
  function ck(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p$1(314));
    }
    null !== d && d.delete(b);
    Zk(a, c);
  }
  var Wk;
  Wk = function(a, b, c) {
    if (null !== a)
      if (a.memoizedProps !== b.pendingProps || Wf.current)
        Ug = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128))
          return Ug = false, zj(a, b, c);
        Ug = 0 !== (a.flags & 131072) ? true : false;
      }
    else
      Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        jj(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        Tg(b, c);
        e = Xh(null, b, d, a, e, c);
        var f2 = bi();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          jj(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = $k(d);
          a = Lg(d, a);
          switch (e) {
            case 0:
              b = dj(null, b, d, a, c);
              break a;
            case 1:
              b = ij(null, b, d, a, c);
              break a;
            case 11:
              b = Zi(null, b, d, a, c);
              break a;
            case 14:
              b = aj(null, b, d, Lg(d.type, a), c);
              break a;
          }
          throw Error(p$1(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
      case 3:
        a: {
          lj(b);
          if (null === a)
            throw Error(p$1(387));
          d = b.pendingProps;
          f2 = b.memoizedState;
          e = f2.element;
          bh(a, b);
          gh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f2.isDehydrated)
            if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
              e = Ki(Error(p$1(423)), b);
              b = mj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ki(Error(p$1(424)), b);
              b = mj(a, b, d, c, e);
              break a;
            } else
              for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
                c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = $i(a, b, c);
              break a;
            }
            Yi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return pj(a, b, c);
      case 4:
        return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
      case 7:
        return Yi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Yi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Yi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f2 = b.memoizedProps;
          g = e.value;
          G(Mg, d._currentValue);
          d._currentValue = g;
          if (null !== f2)
            if (He(f2.value, g)) {
              if (f2.children === e.children && !Wf.current) {
                b = $i(a, b, c);
                break a;
              }
            } else
              for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k2 = h.firstContext; null !== k2; ) {
                    if (k2.context === d) {
                      if (1 === f2.tag) {
                        k2 = ch(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c);
                      Sg(
                        f2.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag)
                  g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g)
                    throw Error(p$1(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  Sg(g, c, b);
                  g = f2.sibling;
                } else
                  g = f2.child;
                if (null !== g)
                  g.return = f2;
                else
                  for (g = f2; null !== g; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    f2 = g.sibling;
                    if (null !== f2) {
                      f2.return = g.return;
                      g = f2;
                      break;
                    }
                    g = g.return;
                  }
                f2 = g;
              }
          Yi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
      case 15:
        return cj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
      case 19:
        return yj(a, b, c);
      case 22:
        return ej(a, b, c);
    }
    throw Error(p$1(156, b.tag));
  };
  function Gk(a, b) {
    return ac(a, b);
  }
  function al(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new al(a, b, c, d);
  }
  function bj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function $k(a) {
    if ("function" === typeof a)
      return bj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da)
        return 11;
      if (a === Ga)
        return 14;
    }
    return 2;
  }
  function wh(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function yh(a, b, c, d, e, f2) {
    var g = 2;
    d = a;
    if ("function" === typeof a)
      bj(a) && (g = 1);
    else if ("string" === typeof a)
      g = 5;
    else
      a:
        switch (a) {
          case ya:
            return Ah(c.children, e, f2, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
          case Ia:
            return qj(c, e, f2, b);
          default:
            if ("object" === typeof a && null !== a)
              switch (a.$$typeof) {
                case Ba:
                  g = 10;
                  break a;
                case Ca:
                  g = 9;
                  break a;
                case Da:
                  g = 11;
                  break a;
                case Ga:
                  g = 14;
                  break a;
                case Ha:
                  g = 16;
                  d = null;
                  break a;
              }
            throw Error(p$1(130, null == a ? a : typeof a, ""));
        }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f2;
    return b;
  }
  function Ah(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function qj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function xh(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function zh(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function bl(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function cl(a, b, c, d, e, f2, g, h, k2) {
    a = new bl(a, b, c, h, k2);
    1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
    f2 = Bg(3, null, null, b);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    ah(f2);
    return a;
  }
  function dl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function el(a) {
    if (!a)
      return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag)
        throw Error(p$1(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p$1(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c))
        return bg(a, c, b);
    }
    return b;
  }
  function fl(a, b, c, d, e, f2, g, h, k2) {
    a = cl(c, d, true, a, e, f2, g, h, k2);
    a.context = el(null);
    c = a.current;
    d = L();
    e = lh(c);
    f2 = ch(d, e);
    f2.callback = void 0 !== b && null !== b ? b : null;
    dh(c, f2, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Ek(a, d);
    return a;
  }
  function gl(a, b, c, d) {
    var e = b.current, f2 = L(), g = lh(e);
    c = el(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = ch(f2, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = dh(e, b, g);
    null !== a && (mh(a, e, g, f2), eh(a, e, g));
    return g;
  }
  function hl(a) {
    a = a.current;
    if (!a.child)
      return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function il(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function jl(a, b) {
    il(a, b);
    (a = a.alternate) && il(a, b);
  }
  function kl() {
    return null;
  }
  var ll = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ml(a) {
    this._internalRoot = a;
  }
  nl.prototype.render = ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b)
      throw Error(p$1(409));
    gl(a, b, null, null);
  };
  nl.prototype.unmount = ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Sk(function() {
        gl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function nl(a) {
    this._internalRoot = a;
  }
  nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
        ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function pl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function ql() {
  }
  function rl(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f2 = d;
        d = function() {
          var a2 = hl(g);
          f2.call(a2);
        };
      }
      var g = fl(b, d, a, 0, null, false, false, "", ql);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Sk();
      return g;
    }
    for (; e = a.lastChild; )
      a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = hl(k2);
        h.call(a2);
      };
    }
    var k2 = cl(a, 0, false, null, null, false, false, "", ql);
    a._reactRootContainer = k2;
    a[uf] = k2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk(function() {
      gl(b, k2, c, d);
    });
    return k2;
  }
  function sl(a, b, c, d, e) {
    var f2 = c._reactRootContainer;
    if (f2) {
      var g = f2;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = hl(g);
          h.call(a2);
        };
      }
      gl(b, g, a, e);
    } else
      g = rl(c, b, a, e, d);
    return hl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
        }
        break;
      case 13:
        Sk(function() {
          var b2 = Zg(a, 1);
          if (null !== b2) {
            var c2 = L();
            mh(b2, a, 1, c2);
          }
        }), jl(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = Zg(a, 134217728);
      if (null !== b) {
        var c = L();
        mh(b, a, 134217728, c);
      }
      jl(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = lh(a), c = Zg(a, b);
      if (null !== c) {
        var d = L();
        mh(c, a, b, d);
      }
      jl(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e)
                throw Error(p$1(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Rk;
  Hb = Sk;
  var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
  var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        kc = wl.inject(vl), lc = wl;
      } catch (a) {
      }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!ol(b))
      throw Error(p$1(200));
    return dl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!ol(a))
      throw Error(p$1(299));
    var c = false, d = "", e = ll;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = cl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ml(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a)
      return null;
    if (1 === a.nodeType)
      return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render)
        throw Error(p$1(188));
      a = Object.keys(a).join(",");
      throw Error(p$1(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Sk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!pl(b))
      throw Error(p$1(200));
    return sl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!ol(a))
      throw Error(p$1(405));
    var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
    a[uf] = b.current;
    sf(a);
    if (d)
      for (a = 0; a < d.length; a++)
        c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
    return new nl(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!pl(b))
      throw Error(p$1(200));
    return sl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!pl(a))
      throw Error(p$1(40));
    return a._reactRootContainer ? (Sk(function() {
      sl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Rk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!pl(c))
      throw Error(p$1(200));
    if (null == a || void 0 === a._reactInternals)
      throw Error(p$1(38));
    return sl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
  (function(module) {
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      module.exports = reactDom_production_min;
    }
  })(reactDom);
  var m$1 = reactDom.exports;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  function matchHotkeys(key, event) {
    const target = event.target || event.srcElement;
    const tagName = target == null ? void 0 : target.tagName;
    if (target.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA") {
      return false;
    }
    function help(key2) {
      if (!key2)
        return false;
      const keys = key2.split("+").map((e) => e.trim()).filter(Boolean);
      const others = ["Alt", "Ctrl", "Meta", "Shift"];
      const target2 = keys.find((e) => !others.includes(e));
      return (target2 === event.key || target2 === event.code) && keys.includes("Alt") === event.altKey && keys.includes("Ctrl") === event.ctrlKey && keys.includes("Meta") === event.metaKey && keys.includes("Shift") === event.shiftKey;
    }
    if (!key || key.length === 0)
      return false;
    if (typeof key === "string")
      return help(key);
    return key.some(help);
  }
  const useHotkeys = (key, options) => {
    const { once = false, enabled: ready = true } = options;
    const fnRef = react.exports.useRef(options);
    fnRef.current = options;
    react.exports.useEffect(() => {
      if (!ready || !key || Array.isArray(key) && key.length === 0)
        return;
      if (!options.onClick && !options.onDouble)
        return;
      let handler;
      const handleRemove = () => {
        document.removeEventListener("keydown", handler);
      };
      if (typeof options.onDouble === "function") {
        let timer;
        handler = (e) => {
          var _a2;
          if (!matchHotkeys(key, e))
            return;
          const opt = fnRef.current;
          if (timer) {
            clearTimeout(timer);
            timer = null;
            opt.onDouble();
          } else {
            timer = setTimeout(() => {
              var _a3;
              timer = null;
              (_a3 = opt.onClick) == null ? void 0 : _a3.call(opt);
            }, (_a2 = opt.interval) != null ? _a2 : 250);
          }
          e.preventDefault();
          e.stopPropagation();
          if (once)
            handleRemove();
        };
      } else {
        handler = (e) => {
          var _a2, _b;
          if (!matchHotkeys(key, e))
            return;
          (_b = (_a2 = fnRef.current).onClick) == null ? void 0 : _b.call(_a2);
          e.preventDefault();
          e.stopPropagation();
          if (once)
            handleRemove();
        };
      }
      document.addEventListener("keydown", handler);
      return () => {
        document.removeEventListener("keydown", handler);
      };
    }, [key, once, ready]);
  };
  const currentUrl = window.location.href;
  const isBoringYes = currentUrl.includes("boring=yes");
  const isVideoPage = currentUrl.includes("bilibili.com/video/");
  function shuffleList(list) {
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const target = Math.floor(Math.random() * len);
      if (i !== target) {
        const temp = list[i];
        list[i] = list[target];
        list[target] = temp;
      }
    }
    return list;
  }
  function parseDate(timestamp) {
    if (!timestamp)
      return "-";
    const date = new Date(timestamp * 1e3);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}`;
  }
  function parseDuration(duration) {
    if (!duration)
      return "-";
    const hour = Math.floor(duration / 3600);
    const mins = Math.floor((duration - hour * 60) / 60);
    const secs = duration % 60;
    const minsStr = mins.toString().padStart(2, "0");
    const secsStr = secs.toString().padStart(2, "0");
    if (hour > 0)
      return `${hour}:${minsStr}:${secsStr}`;
    return `${minsStr}:${secsStr}`;
  }
  async function sleep(wait) {
    return new Promise((resolve) => setTimeout(resolve, wait));
  }
  async function querySelector(selector, retryCount = 5, retryInterval = 100) {
    let dom = null;
    while (!dom && retryCount-- >= 0) {
      dom = document.querySelector(selector);
      await sleep(retryInterval);
    }
    return dom;
  }
  function transformVideoItem(data2) {
    if (!data2)
      return null;
    try {
      const {
        bvid,
        title: title2,
        pic,
        uri,
        owner = {},
        stat,
        duration,
        is_followed,
        pubdate
      } = data2;
      const { mid, name } = owner;
      return {
        bvid,
        title: title2,
        pic,
        uri,
        stat,
        duration,
        is_followed,
        pubdate,
        owner: { mid, name }
      };
    } catch {
      return null;
    }
  }
  var axios$3 = { exports: {} };
  var axios$2 = { exports: {} };
  var bind$2 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind$1 = bind$2;
  var toString = Object.prototype.toString;
  var kindOf = function(cache2) {
    return function(thing) {
      var str = toString.call(thing);
      return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
    };
  }(/* @__PURE__ */ Object.create(null));
  function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type;
    };
  }
  function isArray(val) {
    return Array.isArray(val);
  }
  function isUndefined$1(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (kindOf(val) !== "object") {
      return false;
    }
    var prototype2 = Object.getPrototypeOf(val);
    return prototype2 === null || prototype2 === Object.prototype;
  }
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  function isFunction$1(val) {
    return toString.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject(val) && isFunction$1(val.pipe);
  }
  function isFormData(thing) {
    var pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction$1(thing.toString) && thing.toString() === pattern);
  }
  var isURLSearchParams = kindOfTest("URLSearchParams");
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0, l2 = obj.length; i < l2; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l2 = arguments.length; i < l2; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content2) {
    if (content2.charCodeAt(0) === 65279) {
      content2 = content2.slice(1);
    }
    return content2;
  }
  function inherits(constructor, superConstructor, props, descriptors2) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
  }
  function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  }
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }
  function toArray(thing) {
    if (!thing)
      return null;
    var i = thing.length;
    if (isUndefined$1(i))
      return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  }
  var isTypedArray = function(TypedArray) {
    return function(thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
  var utils$b = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject,
    isPlainObject,
    isUndefined: isUndefined$1,
    isDate,
    isFile,
    isBlob,
    isFunction: isFunction$1,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    isTypedArray,
    isFileList
  };
  var utils$a = utils$b;
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$1 = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$a.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils$a.forEach(params, function serialize2(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils$a.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils$a.forEach(val, function parseValue(v2) {
          if (utils$a.isDate(v2)) {
            v2 = v2.toISOString();
          } else if (utils$a.isObject(v2)) {
            v2 = JSON.stringify(v2);
          }
          parts.push(encode(key) + "=" + encode(v2));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var utils$9 = utils$b;
  function InterceptorManager$1() {
    this.handlers = [];
  }
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };
  InterceptorManager$1.prototype.eject = function eject(id2) {
    if (this.handlers[id2]) {
      this.handlers[id2] = null;
    }
  };
  InterceptorManager$1.prototype.forEach = function forEach2(fn) {
    utils$9.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  var InterceptorManager_1 = InterceptorManager$1;
  var utils$8 = utils$b;
  var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
    utils$8.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  var utils$7 = utils$b;
  function AxiosError$2(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$7.inherits(AxiosError$2, Error, {
    toJSON: function toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError$2.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED"
  ].forEach(function(code) {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError$2, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError$2.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils$7.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    });
    AxiosError$2.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_1 = AxiosError$2;
  var transitional = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  var utils$6 = utils$b;
  function toFormData$1(obj, formData) {
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils$6.isDate(value)) {
        return value.toISOString();
      }
      if (utils$6.isArrayBuffer(value) || utils$6.isTypedArray(value)) {
        return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function build(data2, parentKey) {
      if (utils$6.isPlainObject(data2) || utils$6.isArray(data2)) {
        if (stack.indexOf(data2) !== -1) {
          throw Error("Circular reference detected in " + parentKey);
        }
        stack.push(data2);
        utils$6.forEach(data2, function each(value, key) {
          if (utils$6.isUndefined(value))
            return;
          var fullKey = parentKey ? parentKey + "." + key : key;
          var arr;
          if (value && !parentKey && typeof value === "object") {
            if (utils$6.endsWith(key, "{}")) {
              value = JSON.stringify(value);
            } else if (utils$6.endsWith(key, "[]") && (arr = utils$6.toArray(value))) {
              arr.forEach(function(el2) {
                !utils$6.isUndefined(el2) && formData.append(fullKey, convertValue(el2));
              });
              return;
            }
          }
          build(value, fullKey);
        });
        stack.pop();
      } else {
        formData.append(parentKey, convertValue(data2));
      }
    }
    build(obj);
    return formData;
  }
  var toFormData_1 = toFormData$1;
  var settle;
  var hasRequiredSettle;
  function requireSettle() {
    if (hasRequiredSettle)
      return settle;
    hasRequiredSettle = 1;
    var AxiosError2 = AxiosError_1;
    settle = function settle2(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError2(
          "Request failed with status code " + response.status,
          [AxiosError2.ERR_BAD_REQUEST, AxiosError2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    };
    return settle;
  }
  var cookies;
  var hasRequiredCookies;
  function requireCookies() {
    if (hasRequiredCookies)
      return cookies;
    hasRequiredCookies = 1;
    var utils2 = utils$b;
    cookies = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils2.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils2.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils2.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
    return cookies;
  }
  var isAbsoluteURL$1 = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };
  var combineURLs$1 = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;
  var buildFullPath$1 = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  var parseHeaders;
  var hasRequiredParseHeaders;
  function requireParseHeaders() {
    if (hasRequiredParseHeaders)
      return parseHeaders;
    hasRequiredParseHeaders = 1;
    var utils2 = utils$b;
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    parseHeaders = function parseHeaders2(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils2.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils2.trim(line.substr(0, i)).toLowerCase();
        val = utils2.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
    return parseHeaders;
  }
  var isURLSameOrigin;
  var hasRequiredIsURLSameOrigin;
  function requireIsURLSameOrigin() {
    if (hasRequiredIsURLSameOrigin)
      return isURLSameOrigin;
    hasRequiredIsURLSameOrigin = 1;
    var utils2 = utils$b;
    isURLSameOrigin = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }();
    return isURLSameOrigin;
  }
  var CanceledError_1;
  var hasRequiredCanceledError;
  function requireCanceledError() {
    if (hasRequiredCanceledError)
      return CanceledError_1;
    hasRequiredCanceledError = 1;
    var AxiosError2 = AxiosError_1;
    var utils2 = utils$b;
    function CanceledError2(message) {
      AxiosError2.call(this, message == null ? "canceled" : message, AxiosError2.ERR_CANCELED);
      this.name = "CanceledError";
    }
    utils2.inherits(CanceledError2, AxiosError2, {
      __CANCEL__: true
    });
    CanceledError_1 = CanceledError2;
    return CanceledError_1;
  }
  var parseProtocol;
  var hasRequiredParseProtocol;
  function requireParseProtocol() {
    if (hasRequiredParseProtocol)
      return parseProtocol;
    hasRequiredParseProtocol = 1;
    parseProtocol = function parseProtocol2(url) {
      var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || "";
    };
    return parseProtocol;
  }
  var xhr;
  var hasRequiredXhr;
  function requireXhr() {
    if (hasRequiredXhr)
      return xhr;
    hasRequiredXhr = 1;
    var utils2 = utils$b;
    var settle2 = requireSettle();
    var cookies2 = requireCookies();
    var buildURL2 = buildURL$1;
    var buildFullPath2 = buildFullPath$1;
    var parseHeaders2 = requireParseHeaders();
    var isURLSameOrigin2 = requireIsURLSameOrigin();
    var transitionalDefaults2 = transitional;
    var AxiosError2 = AxiosError_1;
    var CanceledError2 = requireCanceledError();
    var parseProtocol2 = requireParseProtocol();
    xhr = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils2.isFormData(requestData) && utils2.isStandardBrowserEnv()) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath2(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL2(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders2(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle2(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError2("Request aborted", AxiosError2.ECONNABORTED, config, request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(new AxiosError2("Network Error", AxiosError2.ERR_NETWORK, config, request, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional2 = config.transitional || transitionalDefaults2;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError2(
            timeoutErrorMessage,
            transitional2.clarifyTimeoutError ? AxiosError2.ETIMEDOUT : AxiosError2.ECONNABORTED,
            config,
            request
          ));
          request = null;
        };
        if (utils2.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin2(fullPath)) && config.xsrfCookieName ? cookies2.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils2.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new CanceledError2() : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        var protocol = parseProtocol2(fullPath);
        if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
          reject(new AxiosError2("Unsupported protocol " + protocol + ":", AxiosError2.ERR_BAD_REQUEST, config));
          return;
        }
        request.send(requestData);
      });
    };
    return xhr;
  }
  var _null;
  var hasRequired_null;
  function require_null() {
    if (hasRequired_null)
      return _null;
    hasRequired_null = 1;
    _null = null;
    return _null;
  }
  var utils$5 = utils$b;
  var normalizeHeaderName = normalizeHeaderName$1;
  var AxiosError$1 = AxiosError_1;
  var transitionalDefaults = transitional;
  var toFormData = toFormData_1;
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = requireXhr();
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = requireXhr();
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$5.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$5.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults$3 = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data2, headers) {
      normalizeHeaderName(headers, "Accept");
      normalizeHeaderName(headers, "Content-Type");
      if (utils$5.isFormData(data2) || utils$5.isArrayBuffer(data2) || utils$5.isBuffer(data2) || utils$5.isStream(data2) || utils$5.isFile(data2) || utils$5.isBlob(data2)) {
        return data2;
      }
      if (utils$5.isArrayBufferView(data2)) {
        return data2.buffer;
      }
      if (utils$5.isURLSearchParams(data2)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data2.toString();
      }
      var isObjectPayload = utils$5.isObject(data2);
      var contentType = headers && headers["Content-Type"];
      var isFileList2;
      if ((isFileList2 = utils$5.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList2 ? { "files[]": data2 } : data2, _FormData && new _FormData());
      } else if (isObjectPayload || contentType === "application/json") {
        setContentTypeIfUnset(headers, "application/json");
        return stringifySafely(data2);
      }
      return data2;
    }],
    transformResponse: [function transformResponse(data2) {
      var transitional2 = this.transitional || defaults$3.transitional;
      var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
      if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data2) && data2.length) {
        try {
          return JSON.parse(data2);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data2;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: require_null()
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults$3.headers[method] = {};
  });
  utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_1 = defaults$3;
  var utils$4 = utils$b;
  var defaults$2 = defaults_1;
  var transformData$1 = function transformData2(data2, headers, fns) {
    var context = this || defaults$2;
    utils$4.forEach(fns, function transform(fn) {
      data2 = fn.call(context, data2, headers);
    });
    return data2;
  };
  var isCancel$1;
  var hasRequiredIsCancel;
  function requireIsCancel() {
    if (hasRequiredIsCancel)
      return isCancel$1;
    hasRequiredIsCancel = 1;
    isCancel$1 = function isCancel2(value) {
      return !!(value && value.__CANCEL__);
    };
    return isCancel$1;
  }
  var utils$3 = utils$b;
  var transformData = transformData$1;
  var isCancel = requireIsCancel();
  var defaults$1 = defaults_1;
  var CanceledError = requireCanceledError();
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError();
    }
  }
  var dispatchRequest$1 = function dispatchRequest2(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData.call(
      config,
      config.data,
      config.headers,
      config.transformRequest
    );
    config.headers = utils$3.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
    utils$3.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
    var adapter = config.adapter || defaults$1.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        response.data,
        response.headers,
        config.transformResponse
      );
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
      return Promise.reject(reason);
    });
  };
  var utils$2 = utils$b;
  var mergeConfig$2 = function mergeConfig2(config1, config2) {
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
      if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
        return utils$2.merge(target, source);
      } else if (utils$2.isPlainObject(source)) {
        return utils$2.merge({}, source);
      } else if (utils$2.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function valueFromConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      }
    }
    function defaultToConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    var mergeMap = {
      "url": valueFromConfig2,
      "method": valueFromConfig2,
      "data": valueFromConfig2,
      "baseURL": defaultToConfig2,
      "transformRequest": defaultToConfig2,
      "transformResponse": defaultToConfig2,
      "paramsSerializer": defaultToConfig2,
      "timeout": defaultToConfig2,
      "timeoutMessage": defaultToConfig2,
      "withCredentials": defaultToConfig2,
      "adapter": defaultToConfig2,
      "responseType": defaultToConfig2,
      "xsrfCookieName": defaultToConfig2,
      "xsrfHeaderName": defaultToConfig2,
      "onUploadProgress": defaultToConfig2,
      "onDownloadProgress": defaultToConfig2,
      "decompress": defaultToConfig2,
      "maxContentLength": defaultToConfig2,
      "maxBodyLength": defaultToConfig2,
      "beforeRedirect": defaultToConfig2,
      "transport": defaultToConfig2,
      "httpAgent": defaultToConfig2,
      "httpsAgent": defaultToConfig2,
      "cancelToken": defaultToConfig2,
      "socketPath": defaultToConfig2,
      "responseEncoding": defaultToConfig2,
      "validateStatus": mergeDirectKeys
    };
    utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge2 = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge2(prop);
      utils$2.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  };
  var data;
  var hasRequiredData;
  function requireData() {
    if (hasRequiredData)
      return data;
    hasRequiredData = 1;
    data = {
      "version": "0.27.2"
    };
    return data;
  }
  var VERSION = requireData().version;
  var AxiosError = AxiosError_1;
  var validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators$1.transitional = function transitional2(validator2, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return function(value, opt, opts) {
      if (validator2 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator2 = schema[opt];
      if (validator2) {
        var value = options[opt];
        var result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  var validator$1 = {
    assertOptions,
    validators: validators$1
  };
  var utils$1 = utils$b;
  var buildURL = buildURL$1;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;
  var buildFullPath = buildFullPath$1;
  var validator = validator$1;
  var validators = validator.validators;
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios$1.prototype.request = function request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }
    var transitional2 = config.transitional;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, void 0];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }
    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
  };
  Axios$1.prototype.getUri = function getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    var fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  };
  utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data2, config) {
        return this.request(mergeConfig$1(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data: data2
        }));
      };
    }
    Axios$1.prototype[method] = generateHTTPMethod();
    Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_1 = Axios$1;
  var CancelToken_1;
  var hasRequiredCancelToken;
  function requireCancelToken() {
    if (hasRequiredCancelToken)
      return CancelToken_1;
    hasRequiredCancelToken = 1;
    var CanceledError2 = requireCanceledError();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l2 = token._listeners.length;
        for (i = 0; i < l2; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError2(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    CancelToken_1 = CancelToken;
    return CancelToken_1;
  }
  var spread;
  var hasRequiredSpread;
  function requireSpread() {
    if (hasRequiredSpread)
      return spread;
    hasRequiredSpread = 1;
    spread = function spread2(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
    return spread;
  }
  var isAxiosError;
  var hasRequiredIsAxiosError;
  function requireIsAxiosError() {
    if (hasRequiredIsAxiosError)
      return isAxiosError;
    hasRequiredIsAxiosError = 1;
    var utils2 = utils$b;
    isAxiosError = function isAxiosError2(payload) {
      return utils2.isObject(payload) && payload.isAxiosError === true;
    };
    return isAxiosError;
  }
  var utils = utils$b;
  var bind = bind$2;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults = defaults_1;
  function createInstance(defaultConfig2) {
    var context = new Axios(defaultConfig2);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig2, instanceConfig));
    };
    return instance;
  }
  var axios$1 = createInstance(defaults);
  axios$1.Axios = Axios;
  axios$1.CanceledError = requireCanceledError();
  axios$1.CancelToken = requireCancelToken();
  axios$1.isCancel = requireIsCancel();
  axios$1.VERSION = requireData().version;
  axios$1.toFormData = toFormData_1;
  axios$1.AxiosError = AxiosError_1;
  axios$1.Cancel = axios$1.CanceledError;
  axios$1.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$1.spread = requireSpread();
  axios$1.isAxiosError = requireIsAxiosError();
  axios$2.exports = axios$1;
  axios$2.exports.default = axios$1;
  (function(module) {
    module.exports = axios$2.exports;
  })(axios$3);
  const axios = /* @__PURE__ */ getDefaultExportFromCjs(axios$3.exports);
  const oprList = "=,==,!=,>,<,>=,<=,has".split(",").join("|");
  const oprRegex = new RegExp(`\\s*(\\w+)\\s+(${oprList})\\s+(.+)`, "i");
  function generateFilters(text) {
    const rules = text.split("\n").map((e) => e.trim()).filter(Boolean);
    return rules.map((rule) => {
      const result = rule.match(oprRegex);
      if (!result)
        return;
      const [_, key, opr, val = ""] = result;
      return {
        key: key.toLocaleLowerCase(),
        opr: opr.toLocaleLowerCase(),
        val: val.trim()
      };
    }).filter(Boolean);
  }
  function executeFilter(item2, filter) {
    var _a2, _b, _c, _d, _e;
    const { key, opr, val } = filter;
    function stringMatch(lh2, rh2) {
      if (["=", ">=", "<=", "=="].includes(opr))
        return lh2 == rh2;
      if (opr === "!=")
        return lh2 != rh2;
      if (opr === "has")
        return lh2.toString().includes(val.toString());
      return false;
    }
    function booleanMatch(lh2, rh2) {
      lh2 = lh2 == "false" || lh2 == "0" ? false : !!lh2;
      rh2 = rh2 == "false" || rh2 == "0" ? false : !!rh2;
      if (["=", ">=", "<=", "=="].includes(opr))
        return lh2 == rh2;
      if (opr === "!=")
        return lh2 != rh2;
      return false;
    }
    function numberMatch(lh2, rh2) {
      lh2 = +lh2;
      rh2 = +rh2;
      switch (opr) {
        case "=":
        case "==":
          return lh2 == rh2;
        case "!=":
          return lh2 != rh2;
        case ">":
          return lh2 > rh2;
        case "<":
          return lh2 < rh2;
        case ">=":
          return lh2 >= rh2;
        case "<=":
          return lh2 <= rh2;
        default:
          return false;
      }
    }
    if (key === "bvid" || key === "id")
      return stringMatch(item2.bvid, val);
    if (key === "title")
      return stringMatch(item2.title, val);
    if (key === "up" || key === "name")
      return stringMatch((_a2 = item2.owner) == null ? void 0 : _a2.name, val);
    if (key === "upid" || key === "mid")
      return stringMatch((_b = item2.owner) == null ? void 0 : _b.mid, val);
    if (key === "view")
      return numberMatch((_c = item2.stat) == null ? void 0 : _c.view, val);
    if (key === "like")
      return numberMatch((_d = item2.stat) == null ? void 0 : _d.like, val);
    if (key === "danmaku")
      return numberMatch((_e = item2.stat) == null ? void 0 : _e.danmaku, val);
    if (key === "duration")
      return numberMatch(item2.duration, val);
    if (key === "pubdate")
      return numberMatch(item2.pubdate, val);
    if (key === "follow" || key === "followed" || key === "is_followed")
      return booleanMatch(item2.is_followed, val);
    return false;
  }
  function storage(key, options) {
    const {
      defaultValue,
      isJSON = true,
      cacheTime = 0,
      validate,
      stringify,
      parse
    } = options != null ? options : {};
    let cache2;
    let updated = 0;
    return {
      set: (data2) => {
        cache2 = data2;
        updated = Date.now();
        try {
          if (data2 == null) {
            localStorage.removeItem(key);
            return;
          }
          const value = isJSON ? JSON.stringify(data2) : stringify ? stringify(data2) : data2;
          localStorage.setItem(key, value);
        } catch (e) {
          console.error(e);
        }
      },
      get: () => {
        if (cacheTime > 0 && Date.now() - updated < cacheTime) {
          return cache2;
        }
        try {
          updated = Date.now();
          const dataStr = localStorage.getItem(key);
          if (!dataStr)
            return cache2 = defaultValue;
          const data2 = isJSON ? JSON.parse(dataStr) : parse ? parse(dataStr) : dataStr;
          if (!validate || validate && validate(data2))
            return cache2 = data2;
        } catch (e) {
          console.log(e);
        }
        return cache2 = defaultValue;
      }
    };
  }
  const SVideoList = storage("boring-list", {
    defaultValue: [],
    cacheTime: 6e4,
    validate: Array.isArray
  });
  const SVideoHistoryList = storage("boring-history", {
    defaultValue: [],
    cacheTime: 3e4,
    validate: Array.isArray
  });
  const SWhitelistText = storage("boring-whitelist", {
    defaultValue: "",
    isJSON: false,
    cacheTime: 2e4
  });
  const SBlacklistText = storage("boring-blacklist", {
    defaultValue: "",
    isJSON: false,
    cacheTime: 2e4
  });
  class VideoManager {
    constructor() {
      __publicField(this, "_freshCount", 1);
      __publicField(this, "_whiteText", "");
      __publicField(this, "_blackText", "");
      __publicField(this, "_whitelist", []);
      __publicField(this, "_blacklist", []);
      this._whiteText = SWhitelistText.get();
      this._blackText = SBlacklistText.get();
      this._whitelist = generateFilters(this._whiteText);
      this._blacklist = generateFilters(this._blackText);
      const list = SVideoList.get().filter(
        (i) => i && i.bvid && this.rulesFilter(i)
      );
      SVideoList.set(list);
      if (list.length < 12)
        this.refresh();
    }
    next(index = 0) {
      index = Math.max(0, Math.floor(index));
      const list = this.list;
      if (list.length > index) {
        const [item2] = list.splice(index, 1);
        if (item2) {
          const historyList = SVideoHistoryList.get();
          historyList.unshift(item2.bvid);
          SVideoHistoryList.set([...historyList]);
        }
        SVideoList.set(list);
        return item2;
      }
      return null;
    }
    async tryNext(retryCount = 5) {
      let item2 = this.next();
      while (!item2 && retryCount-- > 0) {
        await this.refresh();
        item2 = this.next();
      }
      return item2;
    }
    getByBvid(bvid) {
      const list = this.list;
      if (bvid && list.length > 0) {
        const index = list.findIndex((i) => i.bvid === bvid);
        const [item2] = list.splice(index, 1);
        if (item2) {
          const historyList = SVideoHistoryList.get();
          historyList.unshift(item2.bvid);
          SVideoHistoryList.set(historyList);
        }
        SVideoList.set(list);
        return item2;
      }
      return null;
    }
    async refresh() {
      const { data: data2 } = await axios.get("https://api.bilibili.com/x/web-interface/index/top/feed/rcmd", {
        withCredentials: true,
        params: {
          y_num: 5,
          fresh_idx_1h: this._freshCount,
          fresh_idx: this._freshCount++,
          feed_version: "V4",
          fetch_row: 4,
          homepage_ver: 1,
          ps: 15,
          fresh_type: 4
        }
      }).then((res) => res.data);
      if (!data2.item.length)
        return;
      const list = this.list;
      const historyList = SVideoHistoryList.get();
      const itemSet = new Set(list.map((e) => e.bvid).concat(historyList));
      const items = data2.item.map(transformVideoItem).filter((e) => e && e.bvid && !itemSet.has(e.bvid)).filter(this.rulesFilter.bind(this));
      SVideoList.set(shuffleList(list.concat(items)));
    }
    get list() {
      return SVideoList.get().filter((e) => e && e.bvid);
    }
    get whiteText() {
      return this._whiteText;
    }
    get blackText() {
      return this._blackText;
    }
    setWhiteText(value) {
      if (this._whiteText === value)
        return;
      SWhitelistText.set(value);
      this._whiteText = value;
      this._whitelist = generateFilters(this._whiteText);
    }
    setBlackText(value) {
      if (this._blackText === value)
        return;
      SBlacklistText.set(value);
      this._blackText = value;
      this._blacklist = generateFilters(this._blackText);
    }
    updateList() {
      SVideoList.set(this.list.filter(this.rulesFilter.bind(this)));
    }
    rulesFilter(item2) {
      if (!item2)
        return false;
      if (this._whitelist.some((f2) => executeFilter(item2, f2)))
        return true;
      return !this._blacklist.some((f2) => executeFilter(item2, f2));
    }
  }
  const videoManager = new VideoManager();
  let onended = null;
  async function setupVideoEnd() {
    if (!isVideoPage)
      return;
    let video = await querySelector(
      ".bpx-player-container video"
    );
    if (!video) {
      video = await querySelector(
        ".bpx-player-container bwp-video"
      );
    }
    if (!video)
      return;
    if (onended) {
      video.removeEventListener("ended", onended);
    }
    onended = async () => {
      const item2 = await videoManager.tryNext(10);
      if (!item2)
        return;
      setTimeout(() => {
        history.pushState("", "", getVideoUrl(item2));
        window.location.reload();
      }, 2e3);
    };
    video.addEventListener("ended", onended);
  }
  async function setupFullScreen() {
    if (!isVideoPage)
      return;
    const fullBtn = await querySelector(
      ".bpx-player-control-wrap .bpx-player-ctrl-btn.bpx-player-ctrl-full"
    );
    const onFullScreenError = async () => {
      const webBtn = await querySelector(
        ".bpx-player-control-wrap .bpx-player-ctrl-btn.bpx-player-ctrl-web"
      );
      webBtn == null ? void 0 : webBtn.click();
      window.removeEventListener("fullscreenerror", onFullScreenError);
    };
    window.addEventListener("fullscreenerror", onFullScreenError);
    fullBtn == null ? void 0 : fullBtn.click();
  }
  function getVideoUrl(item2) {
    const { protocol } = window.location;
    return `${protocol}//www.bilibili.com/video/${item2.bvid}?boring=yes`;
  }
  async function autoPlayVideo() {
    if (!isVideoPage) {
      const next = await videoManager.tryNext(5);
      if (next) {
        window.location.href = getVideoUrl(next);
      }
      return;
    }
    setupFullScreen();
    setupVideoEnd();
  }
  function setupDefault() {
    if (isVideoPage && isBoringYes) {
      history.replaceState("", "", currentUrl.replace("boring=yes", "boring=no"));
      setTimeout(() => autoPlayVideo(), 1500);
      return;
    }
  }
  function playVideoItem(bvid) {
    const item2 = videoManager.getByBvid(bvid);
    if (!item2)
      return;
    if (!isVideoPage) {
      window.location.href = getVideoUrl(item2);
    } else {
      history.pushState("", "", getVideoUrl(item2));
      location.reload();
    }
  }
  /*! *****************************************************************************
  	Copyright (c) Microsoft Corporation.
  
  	Permission to use, copy, modify, and/or distribute this software for any
  	purpose with or without fee is hereby granted.
  
  	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  	PERFORMANCE OF THIS SOFTWARE.
  	***************************************************************************** */
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t2[0] & 1)
        throw t2[1];
      return t2[1];
    }, trys: [], ops: [] }, f2, y2, t2, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n2) {
      return function(v2) {
        return step([n2, v2]);
      };
    }
    function step(op) {
      if (f2)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
            return t2;
          if (y2 = 0, t2)
            op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t2[1]) {
                _.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _.label < t2[2]) {
                _.label = t2[2];
                _.ops.push(op);
                break;
              }
              if (t2[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y2 = 0;
        } finally {
          f2 = t2 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  var noop = function() {
  };
  var UNDEFINED = noop();
  var OBJECT = Object;
  var isUndefined = function(v2) {
    return v2 === UNDEFINED;
  };
  var isFunction = function(v2) {
    return typeof v2 == "function";
  };
  var mergeObjects = function(a, b) {
    return OBJECT.assign({}, a, b);
  };
  var STR_UNDEFINED = "undefined";
  var hasWindow = function() {
    return typeof window != STR_UNDEFINED;
  };
  var hasDocument = function() {
    return typeof document != STR_UNDEFINED;
  };
  var hasRequestAnimationFrame = function() {
    return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
  };
  var table = /* @__PURE__ */ new WeakMap();
  var counter = 0;
  var stableHash = function(arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate2 = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate2 && constructor != RegExp) {
      result = table.get(arg);
      if (result)
        return result;
      result = ++counter + "~";
      table.set(arg, result);
      if (constructor == Array) {
        result = "@";
        for (index = 0; index < arg.length; index++) {
          result += stableHash(arg[index]) + ",";
        }
        table.set(arg, result);
      }
      if (constructor == OBJECT) {
        result = "#";
        var keys = OBJECT.keys(arg).sort();
        while (!isUndefined(index = keys.pop())) {
          if (!isUndefined(arg[index])) {
            result += index + ":" + stableHash(arg[index]) + ",";
          }
        }
        table.set(arg, result);
      }
    } else {
      result = isDate2 ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
    }
    return result;
  };
  var online = true;
  var isOnline = function() {
    return online;
  };
  var hasWin = hasWindow();
  var hasDoc = hasDocument();
  var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
  var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
  var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
  var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
  var isVisible = function() {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== "hidden";
  };
  var initFocus = function(callback) {
    onDocumentEvent("visibilitychange", callback);
    onWindowEvent("focus", callback);
    return function() {
      offDocumentEvent("visibilitychange", callback);
      offWindowEvent("focus", callback);
    };
  };
  var initReconnect = function(callback) {
    var onOnline = function() {
      online = true;
      callback();
    };
    var onOffline = function() {
      online = false;
    };
    onWindowEvent("online", onOnline);
    onWindowEvent("offline", onOffline);
    return function() {
      offWindowEvent("online", onOnline);
      offWindowEvent("offline", onOffline);
    };
  };
  var preset = {
    isOnline,
    isVisible
  };
  var defaultConfigOptions = {
    initFocus,
    initReconnect
  };
  var IS_SERVER = !hasWindow() || "Deno" in window;
  var rAF = function(f2) {
    return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f2) : setTimeout(f2, 1);
  };
  var useIsomorphicLayoutEffect = IS_SERVER ? react.exports.useEffect : react.exports.useLayoutEffect;
  var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
  var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
  var serialize = function(key) {
    if (isFunction(key)) {
      try {
        key = key();
      } catch (err) {
        key = "";
      }
    }
    var args = [].concat(key);
    key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
    var infoKey = key ? "$swr$" + key : "";
    return [key, args, infoKey];
  };
  var SWRGlobalState = /* @__PURE__ */ new WeakMap();
  var FOCUS_EVENT = 0;
  var RECONNECT_EVENT = 1;
  var MUTATE_EVENT = 2;
  var broadcastState = function(cache2, key, data2, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) {
      broadcast = true;
    }
    var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    if (broadcast && updaters) {
      for (var i = 0; i < updaters.length; ++i) {
        updaters[i](data2, error, isValidating);
      }
    }
    if (revalidate) {
      delete FETCH[key];
      if (revalidators && revalidators[0]) {
        return revalidators[0](MUTATE_EVENT).then(function() {
          return cache2.get(key);
        });
      }
    }
    return cache2.get(key);
  };
  var __timestamp = 0;
  var getTimestamp = function() {
    return ++__timestamp;
  };
  var internalMutate = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function() {
      var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data2, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
            options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
            populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
            revalidate = options.revalidate !== false;
            rollbackOnError = options.rollbackOnError !== false;
            customOptimisticData = options.optimisticData;
            _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
            if (!key)
              return [2];
            _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
            if (args.length < 3) {
              return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
            }
            data2 = _data;
            beforeMutationTs = getTimestamp();
            MUTATION[key] = [beforeMutationTs, 0];
            hasCustomOptimisticData = !isUndefined(customOptimisticData);
            rollbackData = cache2.get(key);
            if (hasCustomOptimisticData) {
              optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
              cache2.set(key, optimisticData);
              broadcastState(cache2, key, optimisticData);
            }
            if (isFunction(data2)) {
              try {
                data2 = data2(cache2.get(key));
              } catch (err) {
                error = err;
              }
            }
            if (!(data2 && isFunction(data2.then)))
              return [3, 2];
            return [
              4,
              data2.catch(function(err) {
                error = err;
              })
            ];
          case 1:
            data2 = _c.sent();
            if (beforeMutationTs !== MUTATION[key][0]) {
              if (error)
                throw error;
              return [2, data2];
            } else if (error && hasCustomOptimisticData && rollbackOnError) {
              populateCache = true;
              data2 = rollbackData;
              cache2.set(key, rollbackData);
            }
            _c.label = 2;
          case 2:
            if (populateCache) {
              if (!error) {
                if (isFunction(populateCache)) {
                  data2 = populateCache(data2, rollbackData);
                }
                cache2.set(key, data2);
              }
              cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
            }
            MUTATION[key][1] = getTimestamp();
            return [
              4,
              broadcastState(cache2, key, data2, error, UNDEFINED, revalidate, !!populateCache)
            ];
          case 3:
            res = _c.sent();
            if (error)
              throw error;
            return [2, populateCache ? res : data2];
        }
      });
    });
  };
  var revalidateAllKeys = function(revalidators, type) {
    for (var key in revalidators) {
      if (revalidators[key][0])
        revalidators[key][0](type);
    }
  };
  var initCache = function(provider, options) {
    if (!SWRGlobalState.has(provider)) {
      var opts = mergeObjects(defaultConfigOptions, options);
      var EVENT_REVALIDATORS = {};
      var mutate2 = internalMutate.bind(UNDEFINED, provider);
      var unmount = noop;
      SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
      if (!IS_SERVER) {
        var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
        var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
        unmount = function() {
          releaseFocus_1 && releaseFocus_1();
          releaseReconnect_1 && releaseReconnect_1();
          SWRGlobalState.delete(provider);
        };
      }
      return [provider, mutate2, unmount];
    }
    return [provider, SWRGlobalState.get(provider)[4]];
  };
  var onErrorRetry = function(_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
      return;
    }
    setTimeout(revalidate, timeout, opts);
  };
  var _a = initCache(/* @__PURE__ */ new Map()), cache = _a[0], mutate = _a[1];
  var defaultConfig = mergeObjects(
    {
      onLoadingSlow: noop,
      onSuccess: noop,
      onError: noop,
      onErrorRetry,
      onDiscarded: noop,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      shouldRetryOnError: true,
      errorRetryInterval: slowConnection ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: slowConnection ? 5e3 : 3e3,
      compare: function(currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
      },
      isPaused: function() {
        return false;
      },
      cache,
      mutate,
      fallback: {}
    },
    preset
  );
  var mergeConfigs = function(a, b) {
    var v2 = mergeObjects(a, b);
    if (b) {
      var u1 = a.use, f1 = a.fallback;
      var u2 = b.use, f2 = b.fallback;
      if (u1 && u2) {
        v2.use = u1.concat(u2);
      }
      if (f1 && f2) {
        v2.fallback = mergeObjects(f1, f2);
      }
    }
    return v2;
  };
  var SWRConfigContext = react.exports.createContext({});
  var useStateWithDeps = function(state, unmountedRef) {
    var rerender = react.exports.useState({})[1];
    var stateRef = react.exports.useRef(state);
    var stateDependenciesRef = react.exports.useRef({
      data: false,
      error: false,
      isValidating: false
    });
    var setState = react.exports.useCallback(
      function(payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
          var k2 = _;
          if (currentState[k2] !== payload[k2]) {
            currentState[k2] = payload[k2];
            if (stateDependenciesRef.current[k2]) {
              shouldRerender = true;
            }
          }
        }
        if (shouldRerender && !unmountedRef.current) {
          rerender({});
        }
      },
      []
    );
    useIsomorphicLayoutEffect(function() {
      stateRef.current = state;
    });
    return [stateRef, stateDependenciesRef.current, setState];
  };
  var normalize = function(args) {
    return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
  };
  var useSWRConfig = function() {
    return mergeObjects(defaultConfig, react.exports.useContext(SWRConfigContext));
  };
  var withArgs = function(hook) {
    return function useSWRArgs() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var fallbackConfig = useSWRConfig();
      var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
      var config = mergeConfigs(fallbackConfig, _config);
      var next = hook;
      var use = config.use;
      if (use) {
        for (var i = use.length; i-- > 0; ) {
          next = use[i](next);
        }
      }
      return next(key, fn || config.fetcher, config);
    };
  };
  var subscribeCallback = function(key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function() {
      var index = keyedRevalidators.indexOf(callback);
      if (index >= 0) {
        keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
        keyedRevalidators.pop();
      }
    };
  };
  var WITH_DEDUPE = { dedupe: true };
  var useSWRHandler = function(_key, fetcher, config) {
    var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    var initialMountedRef = react.exports.useRef(false);
    var unmountedRef = react.exports.useRef(false);
    var keyRef = react.exports.useRef(key);
    var fetcherRef = react.exports.useRef(fetcher);
    var configRef = react.exports.useRef(config);
    var getConfig = function() {
      return configRef.current;
    };
    var isActive = function() {
      return getConfig().isVisible() && getConfig().isOnline();
    };
    var patchFetchInfo = function(info2) {
      return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
    };
    var cached = cache2.get(key);
    var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    var data2 = isUndefined(cached) ? fallback : cached;
    var info = cache2.get(keyInfo) || {};
    var error = info.error;
    var isInitialMount = !initialMountedRef.current;
    var shouldRevalidate = function() {
      if (isInitialMount && !isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return isUndefined(data2) ? false : config.revalidateIfStale;
      return isUndefined(data2) || config.revalidateIfStale;
    };
    var resolveValidating = function() {
      if (!key || !fetcher)
        return false;
      if (info.isValidating)
        return true;
      return isInitialMount && shouldRevalidate();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
      data: data2,
      error,
      isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    var revalidate = react.exports.useCallback(
      function(revalidateOpts) {
        return __awaiter(void 0, void 0, void 0, function() {
          var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
          var _a3;
          return __generator(this, function(_b2) {
            switch (_b2.label) {
              case 0:
                currentFetcher = fetcherRef.current;
                if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                  return [2, false];
                }
                loading = true;
                opts = revalidateOpts || {};
                shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                isCurrentKeyMounted = function() {
                  return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
                };
                cleanupState = function() {
                  var requestInfo = FETCH[key];
                  if (requestInfo && requestInfo[1] === startAt) {
                    delete FETCH[key];
                  }
                };
                newState = { isValidating: false };
                finishRequestAndUpdateState = function() {
                  patchFetchInfo({ isValidating: false });
                  if (isCurrentKeyMounted()) {
                    setState(newState);
                  }
                };
                patchFetchInfo({
                  isValidating: true
                });
                setState({ isValidating: true });
                _b2.label = 1;
              case 1:
                _b2.trys.push([1, 3, , 4]);
                if (shouldStartNewRequest) {
                  broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                  if (config.loadingTimeout && !cache2.get(key)) {
                    setTimeout(function() {
                      if (loading && isCurrentKeyMounted()) {
                        getConfig().onLoadingSlow(key, config);
                      }
                    }, config.loadingTimeout);
                  }
                  FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                }
                _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
                return [4, newData];
              case 2:
                newData = _b2.sent();
                if (shouldStartNewRequest) {
                  setTimeout(cleanupState, config.dedupingInterval);
                }
                if (!FETCH[key] || FETCH[key][1] !== startAt) {
                  if (shouldStartNewRequest) {
                    if (isCurrentKeyMounted()) {
                      getConfig().onDiscarded(key);
                    }
                  }
                  return [2, false];
                }
                patchFetchInfo({
                  error: UNDEFINED
                });
                newState.error = UNDEFINED;
                mutationInfo = MUTATION[key];
                if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
                  finishRequestAndUpdateState();
                  if (shouldStartNewRequest) {
                    if (isCurrentKeyMounted()) {
                      getConfig().onDiscarded(key);
                    }
                  }
                  return [2, false];
                }
                if (!compare(stateRef.current.data, newData)) {
                  newState.data = newData;
                } else {
                  newState.data = stateRef.current.data;
                }
                if (!compare(cache2.get(key), newData)) {
                  cache2.set(key, newData);
                }
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onSuccess(newData, key, config);
                  }
                }
                return [3, 4];
              case 3:
                err_1 = _b2.sent();
                cleanupState();
                if (!getConfig().isPaused()) {
                  patchFetchInfo({ error: err_1 });
                  newState.error = err_1;
                  if (shouldStartNewRequest && isCurrentKeyMounted()) {
                    getConfig().onError(err_1, key, config);
                    if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                      if (isActive()) {
                        getConfig().onErrorRetry(err_1, key, config, revalidate, {
                          retryCount: (opts.retryCount || 0) + 1,
                          dedupe: true
                        });
                      }
                    }
                  }
                }
                return [3, 4];
              case 4:
                loading = false;
                finishRequestAndUpdateState();
                if (isCurrentKeyMounted() && shouldStartNewRequest) {
                  broadcastState(cache2, key, newState.data, newState.error, false);
                }
                return [2, true];
            }
          });
        });
      },
      [key]
    );
    var boundMutate = react.exports.useCallback(
      internalMutate.bind(UNDEFINED, cache2, function() {
        return keyRef.current;
      }),
      []
    );
    useIsomorphicLayoutEffect(function() {
      fetcherRef.current = fetcher;
      configRef.current = config;
    });
    useIsomorphicLayoutEffect(function() {
      if (!key)
        return;
      var keyChanged = key !== keyRef.current;
      var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
      var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
        setState(mergeObjects(
          {
            error: updatedError,
            isValidating: updatedIsValidating
          },
          compare(stateRef.current.data, updatedData) ? UNDEFINED : {
            data: updatedData
          }
        ));
      };
      var nextFocusRevalidatedAt = 0;
      var onRevalidate = function(type) {
        if (type == FOCUS_EVENT) {
          var now = Date.now();
          if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
            softRevalidate();
          }
        } else if (type == RECONNECT_EVENT) {
          if (getConfig().revalidateOnReconnect && isActive()) {
            softRevalidate();
          }
        } else if (type == MUTATE_EVENT) {
          return revalidate();
        }
        return;
      };
      var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
      var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
      unmountedRef.current = false;
      keyRef.current = key;
      initialMountedRef.current = true;
      if (keyChanged) {
        setState({
          data: data2,
          error,
          isValidating
        });
      }
      if (shouldRevalidate()) {
        if (isUndefined(data2) || IS_SERVER) {
          softRevalidate();
        } else {
          rAF(softRevalidate);
        }
      }
      return function() {
        unmountedRef.current = true;
        unsubUpdate();
        unsubEvents();
      };
    }, [key, revalidate]);
    useIsomorphicLayoutEffect(function() {
      var timer;
      function next() {
        var interval = isFunction(refreshInterval) ? refreshInterval(data2) : refreshInterval;
        if (interval && timer !== -1) {
          timer = setTimeout(execute, interval);
        }
      }
      function execute() {
        if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
          revalidate(WITH_DEDUPE).then(next);
        } else {
          next();
        }
      }
      next();
      return function() {
        if (timer) {
          clearTimeout(timer);
          timer = -1;
        }
      };
    }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
    react.exports.useDebugValue(data2);
    if (suspense && isUndefined(data2) && key) {
      fetcherRef.current = fetcher;
      configRef.current = config;
      unmountedRef.current = false;
      throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
      mutate: boundMutate,
      get data() {
        stateDependencies.data = true;
        return data2;
      },
      get error() {
        stateDependencies.error = true;
        return error;
      },
      get isValidating() {
        stateDependencies.isValidating = true;
        return isValidating;
      }
    };
  };
  var useSWR = withArgs(useSWRHandler);
  const setting$1 = "_setting_1tdcp_1";
  const close = "_close_1tdcp_16";
  const white = "_white_1tdcp_25";
  const black = "_black_1tdcp_26";
  const textarea = "_textarea_1tdcp_36";
  const footer = "_footer_1tdcp_53";
  const saveBtn = "_saveBtn_1tdcp_59";
  const styles$2 = {
    setting: setting$1,
    close,
    white,
    black,
    textarea,
    footer,
    saveBtn
  };
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = react.exports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  (function(module) {
    {
      module.exports = reactJsxRuntime_production_min;
    }
  })(jsxRuntime);
  const Fragment = jsxRuntime.exports.Fragment;
  const jsx = jsxRuntime.exports.jsx;
  const jsxs = jsxRuntime.exports.jsxs;
  const SettingPage = (props) => {
    const [white2, setWhite] = react.exports.useState(videoManager.whiteText);
    const [black2, setBlack] = react.exports.useState(videoManager.blackText);
    const handleSave = async () => {
      videoManager.setWhiteText(white2);
      videoManager.setBlackText(black2);
      videoManager.updateList();
      mutate("videoList", videoManager.list);
    };
    return /* @__PURE__ */ jsxs("div", {
      className: styles$2.setting,
      children: [/* @__PURE__ */ jsx("a", {
        className: styles$2.close,
        onClick: props.onClose,
        children: "ESC"
      }), /* @__PURE__ */ jsxs("div", {
        className: styles$2.black,
        children: [/* @__PURE__ */ jsx("h3", {
          children: "\u9ED1\u540D\u5355"
        }), /* @__PURE__ */ jsx("div", {
          className: styles$2.textarea,
          children: /* @__PURE__ */ jsx("textarea", {
            name: "boring-blacklist",
            rows: 8,
            value: black2,
            onChange: (e) => setBlack(e.target.value)
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: styles$2.white,
        children: [/* @__PURE__ */ jsx("h3", {
          children: "\u767D\u540D\u5355"
        }), /* @__PURE__ */ jsx("div", {
          className: styles$2.textarea,
          children: /* @__PURE__ */ jsx("textarea", {
            name: "boring-whitelist",
            rows: 5,
            value: white2,
            onChange: (e) => setWhite(e.target.value)
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: styles$2.footer,
        children: /* @__PURE__ */ jsx("button", {
          className: styles$2.saveBtn,
          onClick: handleSave,
          children: "\u4FDD\u5B58"
        })
      })]
    });
  };
  const usePage = (list, pageSize) => {
    const [index, setIndex] = react.exports.useState(0);
    pageSize = Math.floor(Math.max(1, pageSize));
    const slice = (() => {
      if (list.length <= pageSize)
        return list;
      const temp = list.slice(index, index + pageSize);
      const rest = list.slice(0, pageSize - temp.length);
      return temp.concat(rest);
    })();
    const onPrev = (step = 1) => setIndex((i) => (i + list.length - step) % list.length);
    const onNext = (step = 1) => setIndex((i) => (i + step) % list.length);
    return {
      slice,
      onPrev,
      onNext
    };
  };
  const item = "_item_16d2x_1";
  const imgWrap = "_imgWrap_16d2x_12";
  const top = "_top_16d2x_29";
  const bottom = "_bottom_16d2x_30";
  const title = "_title_16d2x_63";
  const styles$1 = {
    item,
    imgWrap,
    top,
    bottom,
    title
  };
  const VideoItem = (props) => {
    var _a2, _b;
    const {
      item: item2,
      tabIndex = 1,
      onClick,
      onDelete
    } = props;
    return /* @__PURE__ */ jsxs("a", {
      className: styles$1.item,
      tabIndex,
      onClick,
      onKeyDown: (e) => {
        if (e.key === "Enter")
          return onClick();
        if (e.key === "Delete" || e.key === "Backspace" && e.ctrlKey || e.key === "Backspace" && e.metaKey)
          return onDelete();
      },
      children: [/* @__PURE__ */ jsxs("div", {
        className: styles$1.imgWrap,
        children: [/* @__PURE__ */ jsx("img", {
          src: item2.pic.replace("http:", ""),
          alt: item2.title
        }), /* @__PURE__ */ jsxs("div", {
          className: styles$1.top,
          children: [/* @__PURE__ */ jsx("span", {
            title: (_a2 = item2.owner) == null ? void 0 : _a2.name,
            children: (_b = item2.owner) == null ? void 0 : _b.name
          }), /* @__PURE__ */ jsx("span", {
            children: parseDate(item2.pubdate)
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: styles$1.bottom,
          children: /* @__PURE__ */ jsx("span", {
            children: parseDuration(item2.duration)
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: styles$1.title,
        title: item2.title,
        children: item2.title
      })]
    });
  };
  const container = "_container_41r3g_1";
  const leftBtn = "_leftBtn_41r3g_14";
  const rightBtn = "_rightBtn_41r3g_15";
  const setting = "_setting_41r3g_61";
  const content = "_content_41r3g_85";
  const styles = {
    container,
    leftBtn,
    rightBtn,
    setting,
    content
  };
  const VideoPage = (props) => {
    const {
      data: list = [],
      mutate: mutate2
    } = useSWR("videoList", () => videoManager.list);
    const contentRef = react.exports.useRef(null);
    useHotkeys("Tab", {
      once: true,
      onClick: () => {
        setTimeout(() => {
          var _a2;
          (_a2 = contentRef.current.firstElementChild) == null ? void 0 : _a2.focus();
        }, 50);
      }
    });
    const {
      slice,
      onPrev,
      onNext
    } = usePage(list, 6);
    const handleDelete = (bvid, index) => {
      videoManager.getByBvid(bvid);
      mutate2();
      setTimeout(() => {
        var _a2;
        (_a2 = contentRef.current.children[index]) == null ? void 0 : _a2.focus();
      }, 0);
    };
    return /* @__PURE__ */ jsxs("div", {
      className: styles.container,
      children: [/* @__PURE__ */ jsx("button", {
        className: styles.leftBtn,
        tabIndex: 1,
        onClick: () => onPrev(6)
      }), /* @__PURE__ */ jsxs("div", {
        className: styles.content,
        ref: contentRef,
        children: [slice.map((item2, index) => /* @__PURE__ */ jsx(VideoItem, {
          item: item2,
          tabIndex: 1,
          onClick: () => playVideoItem(item2.bvid),
          onDelete: () => handleDelete(item2.bvid, index)
        }, item2.bvid)), /* @__PURE__ */ jsxs("div", {
          className: styles.setting,
          children: [/* @__PURE__ */ jsxs("span", {
            children: ["\u5E93\u5B58\uFF1A", list.length]
          }), /* @__PURE__ */ jsx("button", {
            tabIndex: 2,
            onClick: async () => {
              await videoManager.refresh();
              mutate2();
            },
            children: "\u5237\u65B0"
          }), /* @__PURE__ */ jsx("button", {
            tabIndex: 2,
            onClick: props.onSetting,
            children: "\u8BBE\u7F6E"
          })]
        })]
      }), /* @__PURE__ */ jsx("button", {
        className: styles.rightBtn,
        tabIndex: 1,
        onClick: () => onNext(6)
      })]
    });
  };
  const Entry = () => {
    const [video, setVideo] = react.exports.useState(false);
    const [setting2, setSetting] = react.exports.useState(false);
    useHotkeys("Escape", {
      enabled: video || setting2,
      onClick: () => {
        if (setting2)
          setSetting(false);
        else
          setVideo(false);
      }
    });
    useHotkeys("Backspace", {
      onClick: () => setVideo(true),
      onDouble: () => {
        if (!setting2)
          autoPlayVideo();
      }
    });
    useHotkeys(["Delete", "Meta+Backspace", "Ctrl+Backspace"], {
      enabled: !video && !setting2 && isVideoPage,
      onClick: async () => {
        const item2 = await videoManager.tryNext(5);
        playVideoItem(item2 == null ? void 0 : item2.bvid);
      }
    });
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [video && /* @__PURE__ */ jsx(VideoPage, {
        onSetting: () => setSetting(true)
      }), setting2 && /* @__PURE__ */ jsx(SettingPage, {
        onClose: () => setSetting(false)
      })]
    });
  };
  setupDefault();
  const injectDom = (() => {
    const app = document.createElement("div");
    document.body.append(app);
    return app;
  })();
  client.createRoot(injectDom).render(/* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsx(Entry, {})
  }));
})();
 
