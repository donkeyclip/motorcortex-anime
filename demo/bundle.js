!(function (t) {
  var e = window.webpackHotUpdate;
  window.webpackHotUpdate = function (t, n) {
    !(function (t, e) {
      if (!x[t] || !b[t]) return;
      for (var n in ((b[t] = !1), e))
        Object.prototype.hasOwnProperty.call(e, n) && (f[n] = e[n]);
      0 == --v && 0 === g && C();
    })(t, n),
      e && e(t, n);
  };
  var n,
    i = !0,
    r = "826d353f9ae361692721",
    o = {},
    s = [],
    a = [];
  function l(t) {
    var e = O[t];
    if (!e) return E;
    var i = function (i) {
        return (
          e.hot.active
            ? (O[i]
                ? -1 === O[i].parents.indexOf(t) && O[i].parents.push(t)
                : ((s = [t]), (n = i)),
              -1 === e.children.indexOf(i) && e.children.push(i))
            : (console.warn(
                "[HMR] unexpected require(" + i + ") from disposed module " + t
              ),
              (s = [])),
          E(i)
        );
      },
      r = function (t) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return E[t];
          },
          set: function (e) {
            E[t] = e;
          },
        };
      };
    for (var o in E)
      Object.prototype.hasOwnProperty.call(E, o) &&
        "e" !== o &&
        "t" !== o &&
        Object.defineProperty(i, o, r(o));
    return (
      (i.e = function (t) {
        return (
          "ready" === d && p("prepare"),
          g++,
          E.e(t).then(e, function (t) {
            throw (e(), t);
          })
        );
        function e() {
          g--, "prepare" === d && (y[t] || _(t), 0 === g && 0 === v && C());
        }
      }),
      (i.t = function (t, e) {
        return 1 & e && (t = i(t)), E.t(t, -2 & e);
      }),
      i
    );
  }
  function c(t) {
    var e = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: n !== t,
      active: !0,
      accept: function (t, n) {
        if (void 0 === t) e._selfAccepted = !0;
        else if ("function" == typeof t) e._selfAccepted = t;
        else if ("object" == typeof t)
          for (var i = 0; i < t.length; i++)
            e._acceptedDependencies[t[i]] = n || function () {};
        else e._acceptedDependencies[t] = n || function () {};
      },
      decline: function (t) {
        if (void 0 === t) e._selfDeclined = !0;
        else if ("object" == typeof t)
          for (var n = 0; n < t.length; n++) e._declinedDependencies[t[n]] = !0;
        else e._declinedDependencies[t] = !0;
      },
      dispose: function (t) {
        e._disposeHandlers.push(t);
      },
      addDisposeHandler: function (t) {
        e._disposeHandlers.push(t);
      },
      removeDisposeHandler: function (t) {
        var n = e._disposeHandlers.indexOf(t);
        n >= 0 && e._disposeHandlers.splice(n, 1);
      },
      check: k,
      apply: I,
      status: function (t) {
        if (!t) return d;
        u.push(t);
      },
      addStatusHandler: function (t) {
        u.push(t);
      },
      removeStatusHandler: function (t) {
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      },
      data: o[t],
    };
    return (n = void 0), e;
  }
  var u = [],
    d = "idle";
  function p(t) {
    d = t;
    for (var e = 0; e < u.length; e++) u[e].call(null, t);
  }
  var h,
    f,
    m,
    v = 0,
    g = 0,
    y = {},
    b = {},
    x = {};
  function w(t) {
    return +t + "" === t ? +t : t;
  }
  function k(t) {
    if ("idle" !== d) throw new Error("check() is only allowed in idle status");
    return (
      (i = t),
      p("check"),
      ((e = 1e4),
      (e = e || 1e4),
      new Promise(function (t, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            o = E.p + "" + r + ".hot-update.json";
          i.open("GET", o, !0), (i.timeout = e), i.send(null);
        } catch (t) {
          return n(t);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status)
              n(new Error("Manifest request to " + o + " timed out."));
            else if (404 === i.status) t();
            else if (200 !== i.status && 304 !== i.status)
              n(new Error("Manifest request to " + o + " failed."));
            else {
              try {
                var e = JSON.parse(i.responseText);
              } catch (t) {
                return void n(t);
              }
              t(e);
            }
        };
      })).then(function (t) {
        if (!t) return p("idle"), null;
        (b = {}), (y = {}), (x = t.c), (m = t.h), p("prepare");
        var e = new Promise(function (t, e) {
          h = { resolve: t, reject: e };
        });
        f = {};
        return _(0), "prepare" === d && 0 === g && 0 === v && C(), e;
      })
    );
    var e;
  }
  function _(t) {
    x[t]
      ? ((b[t] = !0),
        v++,
        (function (t) {
          var e = document.createElement("script");
          (e.charset = "utf-8"),
            (e.src = E.p + "" + t + "." + r + ".hot-update.js"),
            document.head.appendChild(e);
        })(t))
      : (y[t] = !0);
  }
  function C() {
    p("ready");
    var t = h;
    if (((h = null), t))
      if (i)
        Promise.resolve()
          .then(function () {
            return I(i);
          })
          .then(
            function (e) {
              t.resolve(e);
            },
            function (e) {
              t.reject(e);
            }
          );
      else {
        var e = [];
        for (var n in f)
          Object.prototype.hasOwnProperty.call(f, n) && e.push(w(n));
        t.resolve(e);
      }
  }
  function I(e) {
    if ("ready" !== d)
      throw new Error("apply() is only allowed in ready status");
    var n, i, a, l, c;
    function u(t) {
      for (
        var e = [t],
          n = {},
          i = e.map(function (t) {
            return { chain: [t], id: t };
          });
        i.length > 0;

      ) {
        var r = i.pop(),
          o = r.id,
          s = r.chain;
        if ((l = O[o]) && !l.hot._selfAccepted) {
          if (l.hot._selfDeclined)
            return { type: "self-declined", chain: s, moduleId: o };
          if (l.hot._main) return { type: "unaccepted", chain: s, moduleId: o };
          for (var a = 0; a < l.parents.length; a++) {
            var c = l.parents[a],
              u = O[c];
            if (u) {
              if (u.hot._declinedDependencies[o])
                return {
                  type: "declined",
                  chain: s.concat([c]),
                  moduleId: o,
                  parentId: c,
                };
              -1 === e.indexOf(c) &&
                (u.hot._acceptedDependencies[o]
                  ? (n[c] || (n[c] = []), h(n[c], [o]))
                  : (delete n[c],
                    e.push(c),
                    i.push({ chain: s.concat([c]), id: c })));
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: t,
        outdatedModules: e,
        outdatedDependencies: n,
      };
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        -1 === t.indexOf(i) && t.push(i);
      }
    }
    e = e || {};
    var v = {},
      g = [],
      y = {},
      b = function () {
        console.warn(
          "[HMR] unexpected require(" + _.moduleId + ") to disposed module"
        );
      };
    for (var k in f)
      if (Object.prototype.hasOwnProperty.call(f, k)) {
        var _;
        c = w(k);
        var C = !1,
          I = !1,
          P = !1,
          j = "";
        switch (
          ((_ = f[k] ? u(c) : { type: "disposed", moduleId: k }).chain &&
            (j = "\nUpdate propagation: " + _.chain.join(" -> ")),
          _.type)
        ) {
          case "self-declined":
            e.onDeclined && e.onDeclined(_),
              e.ignoreDeclined ||
                (C = new Error(
                  "Aborted because of self decline: " + _.moduleId + j
                ));
            break;
          case "declined":
            e.onDeclined && e.onDeclined(_),
              e.ignoreDeclined ||
                (C = new Error(
                  "Aborted because of declined dependency: " +
                    _.moduleId +
                    " in " +
                    _.parentId +
                    j
                ));
            break;
          case "unaccepted":
            e.onUnaccepted && e.onUnaccepted(_),
              e.ignoreUnaccepted ||
                (C = new Error(
                  "Aborted because " + c + " is not accepted" + j
                ));
            break;
          case "accepted":
            e.onAccepted && e.onAccepted(_), (I = !0);
            break;
          case "disposed":
            e.onDisposed && e.onDisposed(_), (P = !0);
            break;
          default:
            throw new Error("Unexception type " + _.type);
        }
        if (C) return p("abort"), Promise.reject(C);
        if (I)
          for (c in ((y[c] = f[c]),
          h(g, _.outdatedModules),
          _.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(_.outdatedDependencies, c) &&
              (v[c] || (v[c] = []), h(v[c], _.outdatedDependencies[c]));
        P && (h(g, [_.moduleId]), (y[c] = b));
      }
    var M,
      S = [];
    for (i = 0; i < g.length; i++)
      (c = g[i]),
        O[c] &&
          O[c].hot._selfAccepted &&
          y[c] !== b &&
          S.push({ module: c, errorHandler: O[c].hot._selfAccepted });
    p("dispose"),
      Object.keys(x).forEach(function (t) {
        !1 === x[t] &&
          (function (t) {
            delete installedChunks[t];
          })(t);
      });
    for (var B, A, T = g.slice(); T.length > 0; )
      if (((c = T.pop()), (l = O[c]))) {
        var L = {},
          D = l.hot._disposeHandlers;
        for (a = 0; a < D.length; a++) (n = D[a])(L);
        for (
          o[c] = L, l.hot.active = !1, delete O[c], delete v[c], a = 0;
          a < l.children.length;
          a++
        ) {
          var V = O[l.children[a]];
          V && (M = V.parents.indexOf(c)) >= 0 && V.parents.splice(M, 1);
        }
      }
    for (c in v)
      if (Object.prototype.hasOwnProperty.call(v, c) && (l = O[c]))
        for (A = v[c], a = 0; a < A.length; a++)
          (B = A[a]),
            (M = l.children.indexOf(B)) >= 0 && l.children.splice(M, 1);
    for (c in (p("apply"), (r = m), y))
      Object.prototype.hasOwnProperty.call(y, c) && (t[c] = y[c]);
    var z = null;
    for (c in v)
      if (Object.prototype.hasOwnProperty.call(v, c) && (l = O[c])) {
        A = v[c];
        var N = [];
        for (i = 0; i < A.length; i++)
          if (((B = A[i]), (n = l.hot._acceptedDependencies[B]))) {
            if (-1 !== N.indexOf(n)) continue;
            N.push(n);
          }
        for (i = 0; i < N.length; i++) {
          n = N[i];
          try {
            n(A);
          } catch (t) {
            e.onErrored &&
              e.onErrored({
                type: "accept-errored",
                moduleId: c,
                dependencyId: A[i],
                error: t,
              }),
              e.ignoreErrored || z || (z = t);
          }
        }
      }
    for (i = 0; i < S.length; i++) {
      var R = S[i];
      (c = R.module), (s = [c]);
      try {
        E(c);
      } catch (t) {
        if ("function" == typeof R.errorHandler)
          try {
            R.errorHandler(t);
          } catch (n) {
            e.onErrored &&
              e.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: c,
                error: n,
                originalError: t,
              }),
              e.ignoreErrored || z || (z = n),
              z || (z = t);
          }
        else
          e.onErrored &&
            e.onErrored({ type: "self-accept-errored", moduleId: c, error: t }),
            e.ignoreErrored || z || (z = t);
      }
    }
    return z
      ? (p("fail"), Promise.reject(z))
      : (p("idle"),
        new Promise(function (t) {
          t(g);
        }));
  }
  var O = {};
  function E(e) {
    if (O[e]) return O[e].exports;
    var n = (O[e] = {
      i: e,
      l: !1,
      exports: {},
      hot: c(e),
      parents: ((a = s), (s = []), a),
      children: [],
    });
    return t[e].call(n.exports, n, n.exports, l(e)), (n.l = !0), n.exports;
  }
  (E.m = t),
    (E.c = O),
    (E.d = function (t, e, n) {
      E.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (E.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (E.t = function (t, e) {
      if ((1 & e && (t = E(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (E.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          E.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (E.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return E.d(e, "a", e), e;
    }),
    (E.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (E.p = ""),
    (E.h = function () {
      return r;
    }),
    l(6)((E.s = 6));
})([
  function (t, e, n) {
    "use strict";
    t.exports = {
      el: function (t) {
        return document.querySelectorAll(t);
      },
      elid: function (t) {
        return document.getElementById(t);
      },
      eltag: function (t) {
        return document.getElementsByTagName(t);
      },
      elcreate: function (t) {
        return document.createElement(t);
      },
      addListener: function () {
        var t;
        return (t = document).addEventListener.apply(t, arguments);
      },
      removeListener: function () {
        var t;
        return (t = document).removeEventListener.apply(t, arguments);
      },
    };
  },
  function (t, e, n) {
    (function (t) {
      !(function (e) {
        "use strict";
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function o(t, e, n) {
          return e && r(t.prototype, e), n && r(t, n), t;
        }
        function s(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function a(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? a(Object(n), !0).forEach(function (e) {
                  s(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e &&
              (function (t, e) {
                (
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  }
                )(t, e);
              })(t, e);
        }
        function u(t) {
          return (u = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function d() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function p(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function h(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? p(t)
            : e;
        }
        function f(t) {
          return function () {
            var e,
              n = u(t);
            if (d()) {
              var i = u(this).constructor;
              e = Reflect.construct(n, arguments, i);
            } else e = n.apply(this, arguments);
            return h(this, e);
          };
        }
        function m(t, e) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));

          );
          return t;
        }
        function v(t, e, n) {
          return (v =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var i = m(t, e);
                  if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, e);
                    return r.get ? r.get.call(n) : r.value;
                  }
                })(t, e, n || t);
        }
        function g(t, e, n, i) {
          return (g =
            "undefined" != typeof Reflect && Reflect.set
              ? Reflect.set
              : function (t, e, n, i) {
                  var r,
                    o = m(t, e);
                  if (o) {
                    if ((r = Object.getOwnPropertyDescriptor(o, e)).set)
                      return r.set.call(i, n), !0;
                    if (!r.writable) return !1;
                  }
                  if ((r = Object.getOwnPropertyDescriptor(i, e))) {
                    if (!r.writable) return !1;
                    (r.value = n), Object.defineProperty(i, e, r);
                  } else s(i, e, n);
                  return !0;
                })(t, e, n, i);
        }
        function y(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return w(t);
            })(t) ||
            b(t) ||
            x(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function b(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function x(t, e) {
          if (t) {
            if ("string" == typeof t) return w(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(n)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? w(t, e)
                : void 0
            );
          }
        }
        function w(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function k(t) {
          var e = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e);
              if ("object" != typeof i) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t, "string");
          return "symbol" == typeof e ? e : String(e);
        }
        function _(t, e, n, i) {
          var r = (function () {
            var t = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function (t, e) {
                ["method", "field"].forEach(function (n) {
                  e.forEach(function (e) {
                    e.kind === n &&
                      "own" === e.placement &&
                      this.defineClassElement(t, e);
                  }, this);
                }, this);
              },
              initializeClassElements: function (t, e) {
                var n = t.prototype;
                ["method", "field"].forEach(function (i) {
                  e.forEach(function (e) {
                    var r = e.placement;
                    if (e.kind === i && ("static" === r || "prototype" === r)) {
                      var o = "static" === r ? t : n;
                      this.defineClassElement(o, e);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function (t, e) {
                var n = e.descriptor;
                if ("field" === e.kind) {
                  var i = e.initializer;
                  n = {
                    enumerable: n.enumerable,
                    writable: n.writable,
                    configurable: n.configurable,
                    value: void 0 === i ? void 0 : i.call(t),
                  };
                }
                Object.defineProperty(t, e.key, n);
              },
              decorateClass: function (t, e) {
                var n = [],
                  i = [],
                  r = { static: [], prototype: [], own: [] };
                if (
                  (t.forEach(function (t) {
                    this.addElementPlacement(t, r);
                  }, this),
                  t.forEach(function (t) {
                    if (!O(t)) return n.push(t);
                    var e = this.decorateElement(t, r);
                    n.push(e.element),
                      n.push.apply(n, e.extras),
                      i.push.apply(i, e.finishers);
                  }, this),
                  !e)
                )
                  return { elements: n, finishers: i };
                var o = this.decorateConstructor(n, e);
                return i.push.apply(i, o.finishers), (o.finishers = i), o;
              },
              addElementPlacement: function (t, e, n) {
                var i = e[t.placement];
                if (!n && -1 !== i.indexOf(t.key))
                  throw new TypeError("Duplicated element (" + t.key + ")");
                i.push(t.key);
              },
              decorateElement: function (t, e) {
                for (
                  var n = [], i = [], r = t.decorators, o = r.length - 1;
                  o >= 0;
                  o--
                ) {
                  var s = e[t.placement];
                  s.splice(s.indexOf(t.key), 1);
                  var a = this.fromElementDescriptor(t),
                    l = this.toElementFinisherExtras((0, r[o])(a) || a);
                  (t = l.element),
                    this.addElementPlacement(t, e),
                    l.finisher && i.push(l.finisher);
                  var c = l.extras;
                  if (c) {
                    for (var u = 0; u < c.length; u++)
                      this.addElementPlacement(c[u], e);
                    n.push.apply(n, c);
                  }
                }
                return { element: t, finishers: i, extras: n };
              },
              decorateConstructor: function (t, e) {
                for (var n = [], i = e.length - 1; i >= 0; i--) {
                  var r = this.fromClassDescriptor(t),
                    o = this.toClassDescriptor((0, e[i])(r) || r);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    t = o.elements;
                    for (var s = 0; s < t.length - 1; s++)
                      for (var a = s + 1; a < t.length; a++)
                        if (
                          t[s].key === t[a].key &&
                          t[s].placement === t[a].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + t[s].key + ")"
                          );
                  }
                }
                return { elements: t, finishers: n };
              },
              fromElementDescriptor: function (t) {
                var e = {
                  kind: t.kind,
                  key: t.key,
                  placement: t.placement,
                  descriptor: t.descriptor,
                };
                return (
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  "field" === t.kind && (e.initializer = t.initializer),
                  e
                );
              },
              toElementDescriptors: function (t) {
                if (void 0 !== t)
                  return (function (t) {
                    return (
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(t) ||
                      b(t) ||
                      x(t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  })(t).map(function (t) {
                    var e = this.toElementDescriptor(t);
                    return (
                      this.disallowProperty(
                        t,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        t,
                        "extras",
                        "An element descriptor"
                      ),
                      e
                    );
                  }, this);
              },
              toElementDescriptor: function (t) {
                var e = String(t.kind);
                if ("method" !== e && "field" !== e)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      e +
                      '"'
                  );
                var n = k(t.key),
                  i = String(t.placement);
                if ("static" !== i && "prototype" !== i && "own" !== i)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      i +
                      '"'
                  );
                var r = t.descriptor;
                this.disallowProperty(t, "elements", "An element descriptor");
                var o = {
                  kind: e,
                  key: n,
                  placement: i,
                  descriptor: Object.assign({}, r),
                };
                return (
                  "field" !== e
                    ? this.disallowProperty(
                        t,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        r,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = t.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function (t) {
                return {
                  element: this.toElementDescriptor(t),
                  finisher: P(t, "finisher"),
                  extras: this.toElementDescriptors(t.extras),
                };
              },
              fromClassDescriptor: function (t) {
                var e = {
                  kind: "class",
                  elements: t.map(this.fromElementDescriptor, this),
                };
                return (
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  e
                );
              },
              toClassDescriptor: function (t) {
                var e = String(t.kind);
                if ("class" !== e)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      e +
                      '"'
                  );
                this.disallowProperty(t, "key", "A class descriptor"),
                  this.disallowProperty(t, "placement", "A class descriptor"),
                  this.disallowProperty(t, "descriptor", "A class descriptor"),
                  this.disallowProperty(t, "initializer", "A class descriptor"),
                  this.disallowProperty(t, "extras", "A class descriptor");
                var n = P(t, "finisher");
                return {
                  elements: this.toElementDescriptors(t.elements),
                  finisher: n,
                };
              },
              runClassFinishers: function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = (0, e[n])(t);
                  if (void 0 !== i) {
                    if ("function" != typeof i)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    t = i;
                  }
                }
                return t;
              },
              disallowProperty: function (t, e, n) {
                if (void 0 !== t[e])
                  throw new TypeError(n + " can't have a ." + e + " property.");
              },
            };
            return t;
          })();
          if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
          var s = e(function (t) {
              r.initializeInstanceElements(t, a.elements);
            }, n),
            a = r.decorateClass(
              (function (t) {
                for (
                  var e = [],
                    n = function (t) {
                      return (
                        "method" === t.kind &&
                        t.key === o.key &&
                        t.placement === o.placement
                      );
                    },
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var r,
                    o = t[i];
                  if ("method" === o.kind && (r = e.find(n)))
                    if (E(o.descriptor) || E(r.descriptor)) {
                      if (O(o) || O(r))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      r.descriptor = o.descriptor;
                    } else {
                      if (O(o)) {
                        if (O(r))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        r.decorators = o.decorators;
                      }
                      I(o, r);
                    }
                  else e.push(o);
                }
                return e;
              })(s.d.map(C)),
              t
            );
          return (
            r.initializeClassElements(s.F, a.elements),
            r.runClassFinishers(s.F, a.finishers)
          );
        }
        function C(t) {
          var e,
            n = k(t.key);
          "method" === t.kind
            ? (e = {
                value: t.value,
                writable: !0,
                configurable: !0,
                enumerable: !1,
              })
            : "get" === t.kind
            ? (e = { get: t.value, configurable: !0, enumerable: !1 })
            : "set" === t.kind
            ? (e = { set: t.value, configurable: !0, enumerable: !1 })
            : "field" === t.kind &&
              (e = { configurable: !0, writable: !0, enumerable: !0 });
          var i = {
            kind: "field" === t.kind ? "field" : "method",
            key: n,
            placement: t.static
              ? "static"
              : "field" === t.kind
              ? "own"
              : "prototype",
            descriptor: e,
          };
          return (
            t.decorators && (i.decorators = t.decorators),
            "field" === t.kind && (i.initializer = t.value),
            i
          );
        }
        function I(t, e) {
          void 0 !== t.descriptor.get
            ? (e.descriptor.get = t.descriptor.get)
            : (e.descriptor.set = t.descriptor.set);
        }
        function O(t) {
          return t.decorators && t.decorators.length;
        }
        function E(t) {
          return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
        }
        function P(t, e) {
          var n = t[e];
          if (void 0 !== n && "function" != typeof n)
            throw new TypeError("Expected '" + e + "' to be a function");
          return n;
        }
        var j = function t(e, n) {
            for (let i in n)
              "object" == typeof n[i] && null !== n[i]
                ? ((e[i] = e[i] || {}), t(e[i], n[i]))
                : (e[i] = n[i]);
            return e;
          },
          M = {
            required: "The '{field}' field is required.",
            string: "The '{field}' field must be a string.",
            stringEmpty: "The '{field}' field must not be empty.",
            stringMin:
              "The '{field}' field length must be greater than or equal to {expected} characters long.",
            stringMax:
              "The '{field}' field length must be less than or equal to {expected} characters long.",
            stringLength:
              "The '{field}' field length must be {expected} characters long.",
            stringPattern:
              "The '{field}' field fails to match the required pattern.",
            stringContains:
              "The '{field}' field must contain the '{expected}' text.",
            stringEnum:
              "The '{field}' field does not match any of the allowed values.",
            stringNumeric: "The '{field}' field must be a numeric string.",
            stringAlpha: "The '{field}' field must be an alphabetic string.",
            stringAlphanum:
              "The '{field}' field must be an alphanumeric string.",
            stringAlphadash: "The '{field}' field must be an alphadash string.",
            number: "The '{field}' field must be a number.",
            numberMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            numberMax:
              "The '{field}' field must be less than or equal to {expected}.",
            numberEqual: "The '{field}' field must be equal to {expected}.",
            numberNotEqual: "The '{field}' field can't be equal to {expected}.",
            numberInteger: "The '{field}' field must be an integer.",
            numberPositive: "The '{field}' field must be a positive number.",
            numberNegative: "The '{field}' field must be a negative number.",
            array: "The '{field}' field must be an array.",
            arrayEmpty: "The '{field}' field must not be an empty array.",
            arrayMin:
              "The '{field}' field must contain at least {expected} items.",
            arrayMax:
              "The '{field}' field must contain less than or equal to {expected} items.",
            arrayLength: "The '{field}' field must contain {expected} items.",
            arrayContains:
              "The '{field}' field must contain the '{expected}' item.",
            arrayUnique:
              "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
            arrayEnum:
              "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
            boolean: "The '{field}' field must be a boolean.",
            date: "The '{field}' field must be a Date.",
            dateMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            dateMax:
              "The '{field}' field must be less than or equal to {expected}.",
            enumValue:
              "The '{field}' field value '{expected}' does not match any of the allowed values.",
            equalValue:
              "The '{field}' field value must be equal to '{expected}'.",
            equalField:
              "The '{field}' field value must be equal to '{expected}' field value.",
            forbidden: "The '{field}' field is forbidden.",
            function: "The '{field}' field must be a function.",
            email: "The '{field}' field must be a valid e-mail.",
            luhn: "The '{field}' field must be a valid checksum luhn.",
            mac: "The '{field}' field must be a valid MAC address.",
            object: "The '{field}' must be an Object.",
            objectStrict:
              "The object '{field}' contains forbidden keys: '{actual}'.",
            url: "The '{field}' field must be a valid URL.",
            uuid: "The '{field}' field must be a valid UUID.",
            uuidVersion:
              "The '{field}' field must be a valid UUID version provided.",
          },
          S = function () {
            return {};
          },
          B = function ({ schema: t, messages: e, customValidation: n }, i, r) {
            const o = [];
            if (
              (o.push(
                `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                  type: "array",
                  actual: "value",
                  messages: e,
                })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
              ),
              !1 === t.empty &&
                o.push(
                  `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                    type: "arrayEmpty",
                    actual: "value",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.min &&
                o.push(
                  `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMin",
                    expected: t.min,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.max &&
                o.push(
                  `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMax",
                    expected: t.max,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.length &&
                o.push(
                  `\n\t\t\tif (len !== ${
                    t.length
                  }) {\n\t\t\t\t${this.makeError({
                    type: "arrayLength",
                    expected: t.length,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.contains &&
                o.push(
                  `\n\t\t\tif (value.indexOf(${JSON.stringify(
                    t.contains
                  )}) === -1) {\n\t\t\t\t${this.makeError({
                    type: "arrayContains",
                    expected: JSON.stringify(t.contains),
                    actual: "value",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.unique &&
                o.push(
                  `\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError(
                    {
                      type: "arrayUnique",
                      expected:
                        "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",
                      actual: "value",
                      messages: e,
                    }
                  )}\n\t\t\t}\n\t\t`
                ),
              null != t.enum)
            ) {
              const n = JSON.stringify(t.enum);
              o.push(
                `\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError(
                  {
                    type: "arrayEnum",
                    expected: '"' + t.enum.join(", ") + '"',
                    actual: "value[i]",
                    messages: e,
                  }
                )}\n\t\t\t\t}\n\t\t\t}\n\t\t`
              );
            }
            if (null != t.items) {
              o.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
              );
              const e = this.getRuleFromSchema(t.items);
              o.push(
                this.compileRule(
                  e,
                  r,
                  i,
                  'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context);',
                  "arr[i]"
                )
              ),
                o.push("\n\t\t\t}\n\t\t");
            }
            return (
              o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: o.join("\n") }
            );
          },
          A = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [];
            let o = !1;
            return (
              r.push("\n\t\tvar origValue = value;\n\t"),
              !0 === t.convert &&
                ((o = !0),
                r.push(
                  '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
                )),
              r.push(
                `\n\t\tif (typeof value !== "boolean")\n\t\t\t${this.makeError({
                  type: "boolean",
                  actual: "origValue",
                  messages: e,
                })}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: r.join("\n") }
            );
          },
          T = function ({ schema: t, messages: e }, n, i) {
            const r = [];
            return (
              "function" == typeof t.check &&
                ((i.customs[n] = { schema: t, messages: e }),
                r.push(
                  `\n\t\t\tconst rule = context.customs["${n}"];\n\t\t\tconst res = rule.schema.check.call(this, value, rule.schema, "${n}", parent, context);\n\t\t\tif (Array.isArray(res)) {\n\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`
                )),
              { source: r.join("\n") }
            );
          },
          L = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [];
            let o = !1;
            return (
              r.push("\n\t\tvar origValue = value;\n\t"),
              !0 === t.convert &&
                ((o = !0),
                r.push(
                  "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
                )),
              r.push(
                `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                  { type: "date", actual: "origValue", messages: e }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: r.join("\n") }
            );
          };
        const D = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          V = /^\S+@\S+\.\S+$/;
        var z = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [],
              o = "precise" == t.mode ? D : V;
            let s = !1;
            return (
              r.push(
                `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError(
                  { type: "string", actual: "value", messages: e }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              t.normalize &&
                ((s = !0),
                r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
              r.push(
                `\n\t\tif (!${o.toString()}.test(value))\n\t\t\t${this.makeError(
                  { type: "email", actual: "value", messages: e }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: s, source: r.join("\n") }
            );
          },
          N = function ({ schema: t, messages: e, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (${JSON.stringify(
                t.values || []
              )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
                type: "enumValue",
                expected: '"' + t.values.join(", ") + '"',
                actual: "value",
                messages: e,
              })}\n\t\t\t\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          R = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [];
            return (
              t.field
                ? (t.strict
                    ? r.push(
                        `\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`
                      )
                    : r.push(
                        `\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`
                      ),
                  r.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalField",
                      actual: "value",
                      expected: JSON.stringify(t.field),
                      messages: e,
                    })}\n\t\t`
                  ))
                : (t.strict
                    ? r.push(
                        `\n\t\t\t\tif (value !== ${JSON.stringify(
                          t.value
                        )})\n\t\t\t`
                      )
                    : r.push(
                        `\n\t\t\t\tif (value != ${JSON.stringify(
                          t.value
                        )})\n\t\t\t`
                      ),
                  r.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalValue",
                      actual: "value",
                      expected: JSON.stringify(t.value),
                      messages: e,
                    })}\n\t\t`
                  )),
              r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: r.join("\n") }
            );
          },
          $ = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [];
            return (
              r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
              t.remove
                ? r.push("\n\t\t\treturn undefined;\n\t\t")
                : r.push(
                    `\n\t\t\t${this.makeError({
                      type: "forbidden",
                      actual: "value",
                      messages: e,
                    })}\n\t\t`
                  ),
              r.push(`\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),
              { source: r.join("\n") }
            );
          },
          H = function ({ schema: t, messages: e, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
                { type: "function", actual: "value", messages: e }
              )}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          F = function ({ schema: t, messages: e, customValidation: n }, i, r) {
            const o = [];
            o.push(
              "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
            );
            for (let e = 0; e < t.rules.length; e++) {
              o.push(
                "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
              );
              const n = this.getRuleFromSchema(t.rules[e]);
              o.push(
                this.compileRule(
                  n,
                  r,
                  i,
                  "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                  "tmpVal"
                )
              ),
                o.push(
                  "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
                );
            }
            return (
              o.push(
                `\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t${n(
                  "newVal"
                )}\n\t\treturn newVal;\n\t`
              ),
              { source: o.join("\n") }
            );
          },
          G = function ({ schema: t, messages: e, customValidation: n }, i) {
            const r = [];
            r.push("\n\t\tvar origValue = value;\n\t");
            let o = !1;
            return (
              !0 === t.convert &&
                ((o = !0),
                r.push(
                  '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
                )),
              r.push(
                `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                  { type: "number", actual: "origValue", messages: e }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              null != t.min &&
                r.push(
                  `\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({
                    type: "numberMin",
                    expected: t.min,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.max &&
                r.push(
                  `\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({
                    type: "numberMax",
                    expected: t.max,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.equal &&
                r.push(
                  `\n\t\t\tif (value !== ${
                    t.equal
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberEqual",
                    expected: t.equal,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.notEqual &&
                r.push(
                  `\n\t\t\tif (value === ${
                    t.notEqual
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberNotEqual",
                    expected: t.notEqual,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.integer &&
                r.push(
                  `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                    type: "numberInteger",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.positive &&
                r.push(
                  `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberPositive",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.negative &&
                r.push(
                  `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberNegative",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { sanitized: o, source: r.join("\n") }
            );
          };
        const W = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
          U = /["'\\\n\r\u2028\u2029]/g;
        function q(t) {
          return t.replace(U, function (t) {
            switch (t) {
              case '"':
              case "'":
              case "\\":
                return "\\" + t;
              case "\n":
                return "\\n";
              case "\r":
                return "\\r";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
            }
          });
        }
        var J = function (
          { schema: t, messages: e, customValidation: n },
          i,
          r
        ) {
          const o = [];
          o.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: e }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const s = t.properties || t.props;
          if (s) {
            o.push("var parentObj = value;"),
              o.push("var parentField = field;");
            const n = Object.keys(s);
            for (let t = 0; t < n.length; t++) {
              const e = n[t],
                a = q(e),
                l = W.test(a) ? `.${a}` : `['${a}']`,
                c = `parentObj${l}`,
                u = (i ? i + "." : "") + e;
              o.push(`\n// Field: ${q(u)}`),
                o.push(`field = parentField ? parentField + "${l}" : "${a}";`),
                o.push(`value = ${c};`);
              const d = this.getRuleFromSchema(s[e]);
              o.push(
                this.compileRule(
                  d,
                  r,
                  u,
                  `${c} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);`,
                  c
                )
              );
            }
            if (t.strict) {
              const n = Object.keys(s);
              o.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == t.strict
                  ? o.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : o.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: e,
                      })}\n\t\t\t\t`
                    ),
                o.push("\n\t\t\t\t}\n\t\t\t");
            }
            o.push("\n\t\t\treturn parentObj;\n\t\t");
          } else o.push(`\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`);
          return { source: o.join("\n") };
        };
        const K = /^-?[0-9]\d*(\.\d+)?$/,
          X = /^[a-zA-Z]+$/,
          Q = /^[a-zA-Z0-9]+$/,
          Y = /^[a-zA-Z0-9_-]+$/;
        var Z = function (
          { schema: t, messages: e, customValidation: n },
          i,
          r
        ) {
          const o = [];
          let s = !1;
          if (
            (!0 === t.convert &&
              ((s = !0),
              o.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            o.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            t.trim && ((s = !0), o.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            t.trimLeft &&
              ((s = !0), o.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            t.trimRight &&
              ((s = !0), o.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            t.padStart)
          ) {
            s = !0;
            const e = null != t.padChar ? t.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (t.padEnd) {
            s = !0;
            const e = null != t.padChar ? t.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (
            (t.lowercase &&
              ((s = !0), o.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            t.uppercase &&
              ((s = !0), o.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            t.localeLowercase &&
              ((s = !0),
              o.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            t.localeUppercase &&
              ((s = !0),
              o.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            o.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === t.empty &&
              o.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.min &&
              o.push(
                `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: t.min,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              o.push(
                `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: t.max,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.length &&
              o.push(
                `\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({
                  type: "stringLength",
                  expected: t.length,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.pattern)
          ) {
            let n = t.pattern;
            "string" == typeof t.pattern &&
              (n = new RegExp(t.pattern, t.patternFlags)),
              o.push(
                `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
                  {
                    type: "stringPattern",
                    expected: '"' + n.toString().replace('"', '\\"') + '"',
                    actual: "origValue",
                    messages: e,
                  }
                )}\n\t\t`
              );
          }
          if (
            (null != t.contains &&
              o.push(
                `\n\t\t\tif (value.indexOf("${
                  t.contains
                }") === -1) {\n\t\t\t\t${this.makeError({
                  type: "stringContains",
                  expected: '"' + t.contains + '"',
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.enum)
          ) {
            const n = JSON.stringify(t.enum);
            o.push(
              `\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError(
                {
                  type: "stringEnum",
                  expected: '"' + t.enum.join(", ") + '"',
                  actual: "origValue",
                  messages: e,
                }
              )}\n\t\t\t}\n\t\t`
            );
          }
          return (
            !0 === t.numeric &&
              o.push(
                `\n\t\t\tif (!${K.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alpha &&
              o.push(
                `\n\t\t\tif(!${X.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphanum &&
              o.push(
                `\n\t\t\tif(!${Q.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphadash &&
              o.push(
                `\n\t\t\tif(!${Y.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
            { sanitized: s, source: o.join("\n") }
          );
        };
        const tt = /^https?:\/\/\S+/;
        var et = function ({ schema: t, messages: e, customValidation: n }, i) {
          const r = [];
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tif (!${tt.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "url", actual: "value", messages: e }
              )}\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
            ),
            { source: r.join("\n") }
          );
        };
        const nt = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        var it = function ({ schema: t, messages: e }, n) {
          const i = [];
          return (
            i.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${nt.toString()}.test(val)) {\n\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: e }
              )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
            ),
            t.version &&
              i.push(
                `\n\t\t\tif (${
                  t.version
                } !== version) {\n\t\t\t\t${this.makeError({
                  type: "uuidVersion",
                  expected: t.version,
                  actual: "version",
                  messages: e,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            i.push(
              `\n\t\tswitch (version) {\n\t\tcase 1:\n\t\tcase 2:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(value.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: e }
              )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: i.join("\n") }
          );
        };
        const rt = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
        var ot = function ({ schema: t, messages: e, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: e }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${rt.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
                { type: "mac", actual: "value", messages: e }
              )}\n\t\t\t}\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`,
            };
          },
          st = function ({ schema: t, messages: e, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: e }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
                { type: "luhn", actual: "value", messages: e }
              )}\n\t\t\t}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          at =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {};
        function lt() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
          );
        }
        function ct(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        let ut, dt, pt, ht;
        var ft = function (t) {
            ut ||
              ((ut = lt()),
              (dt = {
                parser: "babel",
                useTabs: !1,
                printWidth: 120,
                trailingComma: "none",
                tabWidth: 4,
                singleQuote: !1,
                semi: !0,
                bracketSpacing: !0,
              }),
              (pt = lt()),
              (ht = {
                language: "js",
                theme: pt.fromJson({
                  keyword: ["white", "bold"],
                  built_in: "magenta",
                  literal: "cyan",
                  number: "magenta",
                  regexp: "red",
                  string: ["yellow", "bold"],
                  symbol: "plain",
                  class: "blue",
                  attr: "plain",
                  function: ["white", "bold"],
                  title: "plain",
                  params: "green",
                  comment: "grey",
                }),
              }));
            const e = ut.format(t, dt);
            return pt.highlight(e, ht);
          },
          mt = class {
            constructor(t) {
              (this.opts = { messages: j({}, M) }),
                t && j(this.opts, t),
                (this.messages = this.opts.messages),
                (this.rules = {
                  any: S,
                  array: B,
                  boolean: A,
                  custom: T,
                  date: L,
                  email: z,
                  enum: N,
                  equal: R,
                  forbidden: $,
                  function: H,
                  multi: F,
                  number: G,
                  object: J,
                  string: Z,
                  url: et,
                  uuid: it,
                  mac: ot,
                  luhn: st,
                }),
                (this.aliases = {}),
                (this.cache = new Map());
            }
            validate(t, e) {
              return this.compile(e)(t);
            }
            wrapRequiredCheckSourceCode(t, e, n) {
              const i = [],
                r =
                  null != t.schema.default
                    ? JSON.stringify(t.schema.default)
                    : null;
              return (
                i.push(
                  "\n\t\t\tif (value === undefined || value === null) {\n\t\t"
                ),
                !0 === t.schema.optional || "forbidden" == t.schema.type
                  ? null != r && n
                    ? i.push(`${n} = ${r};`)
                    : i.push("// Do nothing, it's an optional field")
                  : null != r && n
                  ? i.push(`${n} = ${r};`)
                  : i.push(
                      this.makeError({
                        type: "required",
                        actual: "value",
                        messages: t.messages,
                      })
                    ),
                i.push("} else {"),
                e && i.push(e),
                i.push("\t\t}"),
                i.join("\n")
              );
            }
            compile(t) {
              if (null === t || "object" != typeof t)
                throw new Error("Invalid schema.");
              const e = this,
                n = { index: 0, rules: [], fn: [], customs: {} };
              if ((this.cache.clear(), !0 !== t.$$root))
                if (Array.isArray(t)) t = this.getRuleFromSchema(t).schema;
                else {
                  const e = Object.assign({}, t);
                  (t = { type: "object", strict: e.$$strict, properties: e }),
                    delete e.$$strict;
                }
              const i = ["var errors = [];", "var field;"],
                r = this.getRuleFromSchema(t);
              i.push(
                this.compileRule(
                  r,
                  n,
                  null,
                  "context.fn[%%INDEX%%](value, field, null, errors, context);",
                  "value"
                )
              ),
                i.push("if (errors.length) {"),
                i.push(
                  '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
                ),
                i.push("}"),
                i.push("return true;");
              const o = i.join("\n"),
                s = new Function("value", "context", o);
              if (this.opts.debug) {
                let t = function (t) {
                  return t;
                };
                "undefined" == typeof window && (t = ft),
                  n.fn.forEach((e, n) =>
                    console.log(t(`// Context.fn[${n}]\n` + e.toString()))
                  ),
                  console.log(t("// Main check function\n" + s.toString()));
              }
              return (
                this.cache.clear(),
                function (t) {
                  return (n.data = t), s.call(e, t, n);
                }
              );
            }
            compileRule(t, e, n, i, r) {
              const o = [],
                s = this.cache.get(t.schema);
              if (s)
                ((t = s).cycle = !0),
                  (t.cycleStack = []),
                  o.push(
                    this.wrapRequiredCheckSourceCode(
                      t,
                      `\n\t\t\t\tvar rule = context.rules[${
                        t.index
                      }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(
                        "%%INDEX%%",
                        t.index
                      )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                      r
                    )
                  );
              else {
                this.cache.set(t.schema, t),
                  (t.index = e.index),
                  (e.rules[e.index] = t),
                  "function" == typeof t.schema.custom &&
                    ((e.customs[n] = {
                      schema: t.schema,
                      messages: t.messages,
                    }),
                    (t.customValidation = (t) =>
                      `\n\t\t\t\t\tconst rule = context.customs["${n}"];\n\t\t\t\t\tconst res = rule.schema.custom.call(this, ${t}, rule.schema, "${n}", parent, context);\n\t\t\t\t\tif (Array.isArray(res)) {\n\t\t\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`)),
                  e.index++;
                const s = t.ruleFunction.call(this, t, n, e);
                if (s.source) {
                  const n = new Function(
                    "value",
                    "field",
                    "parent",
                    "errors",
                    "context",
                    s.source
                  );
                  (e.fn[t.index] = n),
                    o.push(
                      this.wrapRequiredCheckSourceCode(
                        t,
                        i.replace("%%INDEX%%", t.index),
                        r
                      )
                    );
                } else o.push(this.wrapRequiredCheckSourceCode(t));
              }
              return o.join("\n");
            }
            getRuleFromSchema(t) {
              if ("string" == typeof t) {
                const e = t.split("|").map((t) => t.trim());
                (t = { type: e[0] }),
                  e.slice(1).map((e) => {
                    const n = e.indexOf(":");
                    if (-1 !== n) {
                      const i = e.substr(0, n).trim();
                      let r = e.substr(n + 1).trim();
                      "true" === r || "false" === r
                        ? (r = "true" === r)
                        : Number.isNaN(Number(r)) || (r = Number(r)),
                        (t[i] = r);
                    } else
                      e.startsWith("no-") ? (t[e.slice(3)] = !1) : (t[e] = !0);
                  });
              } else if (Array.isArray(t)) {
                if (0 == t.length) throw new Error("Invalid schema.");
                (t = { type: "multi", rules: t }).rules
                  .map((t) => this.getRuleFromSchema(t))
                  .every((t) => 1 == t.schema.optional) && (t.optional = !0);
              }
              const e = this.aliases[t.type];
              e && (delete t.type, (t = Object.assign({}, e, t)));
              const n = this.rules[t.type];
              if (!n)
                throw new Error(
                  "Invalid '" + t.type + "' type in validator schema."
                );
              return {
                messages: Object.assign({}, this.messages, t.messages),
                schema: t,
                ruleFunction: n,
                customValidation: () => "",
              };
            }
            makeError({
              type: t,
              field: e,
              expected: n,
              actual: i,
              messages: r,
            }) {
              const o = { type: `"${t}"`, message: `"${r[t]}"` };
              return (
                (o.field = e ? `"${e}"` : "field"),
                n && (o.expected = n),
                i && (o.actual = i),
                `errors.push({ ${Object.keys(o)
                  .map((t) => `${t}: ${o[t]}`)
                  .join(", ")} });`
              );
            }
            add(t, e) {
              this.rules[t] = e;
            }
            alias(t, e) {
              if (this.rules[t])
                throw new Error("Alias name must not be a rule name");
              this.aliases[t] = e;
            }
          },
          vt = [
            { key: "info", style: "color: #666;", level: 5 },
            {
              key: "notice",
              style:
                "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
              level: 4,
            },
            {
              key: "warning",
              style: "color: black; background: orange;",
              level: 2,
            },
            { key: "error", style: "color: black; background: red;", level: 1 },
          ];
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var gt = new window.AudioContext();
        function yt(t) {
          return "object" === n(t);
        }
        function bt(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function xt(t, e) {
          return Math.round(t / e) * e;
        }
        function wt(t) {
          var e = t.split("___");
          return { mcid: e[0], attribute: e[1] };
        }
        function kt() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        function _t() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = t ? "_" : "-";
          return kt() + kt() + e + kt() + e + kt();
        }
        function Ct(t, e) {
          return new Function("return `".concat(t, "`;")).call(e);
        }
        function It(t, e) {
          return "".concat(t).concat("___").concat(e);
        }
        var Ot = (function () {
            function t(e) {
              i(this, t);
              var n = 1;
              e &&
                Object.prototype.hasOwnProperty.call(e, "logLevel") &&
                (n = e.logLevel);
              for (var r = 0; r < vt.length; r++) {
                var o = vt[r];
                n >= o.level
                  ? (this[o.key] = window.console.log.bind(
                      window.console,
                      "MotorCortex - ".concat(o.key, ": ")
                    ))
                  : (this[o.key] = function () {});
              }
              this.log =
                n >= 3
                  ? window.console.log.bind(window.console, "MotorCortex - ")
                  : function () {};
            }
            return (
              o(t, [
                {
                  key: "validateProps",
                  value: function (t, e, n) {
                    var i = new mt().validate(t, e);
                    if (i.length > 0) {
                      for (
                        var r = "Error on plugin's \""
                            .concat(n.plugin_npm_name, '" "')
                            .concat(
                              n.ClassName,
                              '" instantiation. Errors (op props):'
                            ),
                          o = 0;
                        o < i.length;
                        o++
                      )
                        r += "\n - "
                          .concat(i[o].message, ". ")
                          .concat(i[o].actual, " provided");
                      return console.error(r), { result: !1, errors: i };
                    }
                    return { result: !0 };
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (t, e) {
                    return t.rootElement.querySelectorAll(
                      "[".concat("data-motorcortex2-id", '="').concat(e, '"]')
                    )[0];
                  },
                },
                {
                  key: "buildInitialValuesValidationRules",
                  value: function (t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return (
                      (function t(e) {
                        if (
                          (("string" == typeof e || e instanceof String) &&
                            (e = { type: e }),
                          (e.optional = !0),
                          "object" === e.type)
                        )
                          for (var n in e.props) t(e.props[n]);
                      })(e),
                      e
                    );
                  },
                },
                {
                  key: "systoleDiastoleProjections",
                  value: function (t, e, n) {
                    for (var i = [], r = 0; r < t.length; r++) {
                      var o = t[r],
                        s = o.parentMillisecond - n;
                      1 !== e &&
                        i.push({
                          id: o.incident.id,
                          start: s * e + n,
                          end: s * e + n + o.incident.duration * e,
                          startDelta: s * e + n - o.millisecond,
                        });
                    }
                    return i;
                  },
                },
              ]),
              t
            );
          })(),
          Et = new Ot();
        function Pt(t) {
          return t.result
            ? { result: !0, execute: t.execute }
            : { result: !1, errors: t.errors };
        }
        var jt = (function () {
          function t(e) {
            i(this, t),
              (this.runTimeInfo = e.runTimeInfo),
              (this.context = e.context),
              this.onInitialise(),
              (this.getIncidentById = e.getIncidentById);
          }
          return (
            o(
              t,
              [
                { key: "onInitialise", value: function () {} },
                {
                  key: "_resize",
                  value: function () {
                    Et.log("Please overwite the _resize method of the Channel");
                  },
                },
                {
                  key: "addIncidents",
                  value: function (t) {
                    return Pt(this.checkAddition(t));
                  },
                },
                {
                  key: "editIncidents",
                  value: function (t, e) {
                    return Pt(this.checkEdit(t, e));
                  },
                },
                {
                  key: "removeIncidents",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return Pt(this.checkDelete(t, e));
                  },
                },
                { key: "recalcScratchValues", value: function (t) {} },
                {
                  key: "checkAddition",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (t, e) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                { key: "moveTo", value: function (t, e, n) {} },
              ],
              [
                {
                  key: "type",
                  get: function () {
                    return "plain";
                  },
                },
              ]
            ),
            t
          );
        })();
        function Mt(t) {
          t.descriptor.value = function (t) {
            this.duration = this.duration * t;
          };
        }
        var St = "up",
          Bt = "down",
          At = "native.tree.bypass",
          Tt = _(null, function (t) {
            return {
              F: function e() {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                i(this, e),
                  t(this),
                  (this.parentNode = null),
                  (this.isNode = !1),
                  Object.prototype.hasOwnProperty.call(n, "id")
                    ? (this.id = n.id)
                    : (this.id = _t()),
                  (this.props = n);
              },
              d: [
                {
                  kind: "get",
                  key: "delay",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "delay"
                    )
                      ? this.props.delay
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "delay",
                  value: function (t) {
                    0 !== t && (this.props.delay = t);
                  },
                },
                {
                  kind: "get",
                  key: "hiatus",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "hiatus"
                    )
                      ? this.props.hiatus
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "hiatus",
                  value: function (t) {
                    0 !== t && (this.props.hiatus = t);
                  },
                },
                {
                  kind: "get",
                  key: "repeats",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "repeats"
                    )
                      ? this.props.repeats
                      : 1;
                  },
                },
                {
                  kind: "set",
                  key: "repeats",
                  value: function (t) {
                    this.props.repeats = t;
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return (
                      this.repeats *
                      (this.delay + this.props.duration + this.hiatus)
                    );
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    var e = t / this.duration;
                    (this.props.duration *= e),
                      (this.hiatus *= e),
                      (this.delay *= e);
                  },
                },
                {
                  kind: "method",
                  key: "setNewDuration",
                  value: function (t) {
                    (this.duration = t),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: St,
                      });
                  },
                },
                {
                  kind: "method",
                  decorators: [Mt],
                  key: "systoleDiastole",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "hasParent",
                  value: function () {
                    return null !== this.parentNode;
                  },
                },
                {
                  kind: "method",
                  key: "attachToNode",
                  value: function (t) {
                    this.parentNode = t;
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    this.parentNode = null;
                  },
                },
                {
                  kind: "method",
                  key: "putMessageOnPipe",
                  value: function (t, e, n) {
                    var i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    if (
                      (Object.prototype.hasOwnProperty.call(i, "direction") ||
                        (i.direction = Bt),
                      i.direction !== Bt ||
                        Object.prototype.hasOwnProperty.call(
                          i,
                          "positionDelta"
                        ) ||
                        (i.positionDelta = 0),
                      i.selfExecute)
                    ) {
                      var r = "handle".concat(bt(t)),
                        o = "function" == typeof this[r];
                      if (o) {
                        var s = this[r](n, e);
                        if (s !== At) {
                          var a = { response: s, responder: this };
                          return i.direction === St
                            ? a
                            : [l({}, a, { positionDelta: i.positionDelta })];
                        }
                      }
                    }
                    return i.direction === St
                      ? this.hasParent
                        ? this.parentNode.putMessageOnPipe(t, e, n, {
                            selfExecute: !0,
                            direction: St,
                          })
                        : { response: !1, responder: null }
                      : [];
                  },
                },
                {
                  kind: "method",
                  key: "bypass",
                  value: function () {
                    return At;
                  },
                },
                {
                  kind: "get",
                  key: "positionOnPyramidion",
                  value: function () {
                    return this.getPositionOnPyramidion();
                  },
                },
                {
                  kind: "method",
                  key: "getPositionOnPyramidion",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if (this.hasParent) {
                      var e = this.putMessageOnPipe(
                        "getPositionOnPyramidion",
                        { delta: t, id: this.id },
                        "Parent",
                        { selfExecute: !1, direction: St }
                      );
                      return e.response;
                    }
                    return t;
                  },
                },
              ],
            };
          }),
          Lt = "The Leaf with the requested id couldn't be found on the Tree",
          Dt = _(
            null,
            function (t, e) {
              var n = (function (e) {
                c(r, e);
                var n = f(r);
                function r() {
                  var e,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return (
                    i(this, r),
                    (e = n.call(this, o)),
                    t(p(e)),
                    (e.isNode = !0),
                    (e.children = {}),
                    (e.calculatedDuration = 0),
                    e
                  );
                }
                return r;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this.calculatedDuration;
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (t) {
                      var e = t / this.duration;
                      for (var n in (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = t),
                      (this.calculatedDuration = t),
                      this.children)) {
                        var i = this.children[n];
                        this.editPosition(i.id, i.position * e, !0),
                          i.leaf.systoleDiastole(e);
                      }
                    },
                  },
                  {
                    kind: "method",
                    key: "setNewDuration",
                    value: function (t) {
                      (this.duration = t),
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: St,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "_calculateDuration",
                    value: function () {
                      var t = 0;
                      for (var e in this.children) {
                        var n = this.children[e];
                        n.position + n.leaf.duration > t &&
                          (t = n.position + n.leaf.duration);
                      }
                      return (
                        t !== this.calculatedDuration &&
                        (this.props &&
                          Object.prototype.hasOwnProperty.call(
                            this.props,
                            "duration"
                          ) &&
                          (this.props.duration = t),
                        (this.calculatedDuration = t),
                        !0)
                      );
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Mt],
                    key: "systoleDiastole",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleRecalcDuration",
                    value: function (t, e) {
                      return (
                        !this._calculateDuration() ||
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: St,
                        })
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafById",
                    value: function (t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return this.children[t].leaf;
                      if (e) return null;
                      for (var n in this.children) {
                        var i = this.children[n].leaf;
                        if (i.isNode) {
                          var r = i.getLeafById(t);
                          if (null != r) return r;
                        }
                      }
                      return null;
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafPosition",
                    value: function (t) {
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return this.children[t].position;
                      var e = this.putMessageOnPipe(
                        "getLeafPosition",
                        { id: t },
                        "Groups",
                        { selfExecute: !1, direction: Bt }
                      );
                      return e.length > 0
                        ? e[0].positionDelta + e[0].response
                        : void 0;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetLeafPosition",
                    value: function (t, e) {
                      return this.getLeafPosition(e.id);
                    },
                  },
                  {
                    kind: "method",
                    key: "checkAddition",
                    value: function (t, e) {
                      return t.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : e < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "addChild",
                    value: function (t, e) {
                      return t.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : ((this.children[t.id] = {
                            id: t.id,
                            leaf: t,
                            position: e,
                          }),
                          t.attachToNode(this),
                          this.putMessageOnPipe(
                            "recalcDuration",
                            {},
                            "Groups",
                            { selfExecute: !0, direction: St }
                          ),
                          { result: !0 });
                    },
                  },
                  {
                    kind: "method",
                    key: "checkRemoveChild",
                    value: function (t) {
                      return Object.prototype.hasOwnProperty.call(
                        this.children,
                        t
                      )
                        ? { result: !0 }
                        : { result: !1, reason: Lt };
                    },
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (t) {
                      return (
                        this.children[t].leaf.detachFromParent(),
                        delete this.children[t],
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: St,
                        }),
                        { result: !0 }
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "checkEditPosition",
                    value: function (t, e) {
                      return e < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : Object.prototype.hasOwnProperty.call(this.children, t)
                        ? { result: !0 }
                        : { result: !1, reason: Lt };
                    },
                  },
                  {
                    kind: "method",
                    key: "editPosition",
                    value: function (t, e) {
                      var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return (
                          (this.children[t].position = e),
                          n ||
                            this.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: St }
                            ),
                          { result: !0 }
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "putMessageOnPipe",
                    value: function (t, e, i) {
                      var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                      if (
                        (Object.prototype.hasOwnProperty.call(r, "direction") ||
                          (r.direction = Bt),
                        r.direction !== Bt ||
                          Object.prototype.hasOwnProperty.call(
                            r,
                            "positionDelta"
                          ) ||
                          (r.positionDelta = 0),
                        r.direction === St)
                      )
                        return v(u(n.prototype), "putMessageOnPipe", this).call(
                          this,
                          t,
                          e,
                          i,
                          r
                        );
                      var o = v(u(n.prototype), "putMessageOnPipe", this).call(
                        this,
                        t,
                        e,
                        i,
                        r
                      );
                      if (o.length > 0) return o;
                      for (var s in this.children) {
                        var a = this.children[s].leaf,
                          c = l({}, r, {
                            selfExecute: !0,
                            positionDelta:
                              r.positionDelta + this.children[s].position,
                          });
                        o = o.concat(a.putMessageOnPipe(t, e, i, c));
                      }
                      return o;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetPositionOnPyramidion",
                    value: function (t, e) {
                      var n = e.delta + this.getLeafPosition(e.id);
                      return this.getPositionOnPyramidion(n);
                    },
                  },
                ],
              };
            },
            Tt
          );
        function Vt(t) {
          t.descriptor.value = function (t) {
            void 0 === this.blockID && (this.blockID = _t()),
              this.DescriptiveIncident.putMessageOnPipe(
                "setBlock",
                {
                  id: this.blockID,
                  description: t,
                  incidentId: this.DescriptiveIncident.id,
                  realIncidentId: this.id,
                },
                "rootClip",
                { selfExecute: !0, direction: St }
              );
          };
        }
        function zt(t) {
          t.descriptor.value = function (t) {
            return this.id === t ? this : this.bypass();
          };
        }
        function Nt(t) {
          t.descriptor.value = function () {
            this.DescriptiveIncident.putMessageOnPipe(
              "unBlock",
              { id: this.blockID },
              "rootClip",
              { selfExecute: !0, direction: St }
            );
          };
        }
        var Rt = _(
            null,
            function (t, e) {
              var n = (function (e) {
                c(r, e);
                var n = f(r);
                function r(e, o) {
                  var s;
                  return (
                    i(this, r),
                    (s = n.call(this, o)),
                    t(p(s)),
                    (s.mc_plugin_npm_name = "motor-cortex-js"),
                    (s.plugin_channel_class = jt),
                    (s.hasIncidents = !0),
                    s.onGroupInitialise(),
                    (s.calculatedDuration = 0),
                    s
                  );
                }
                return r;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "method",
                    key: "onGroupInitialise",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleAddIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = (0, e.incidentFromDescription)(
                          e.incident,
                          e.contextData,
                          e.audio
                        );
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleMoveIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = this.getLeafById(e.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleRemoveIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = this.getLeafById(e.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [zt],
                    key: "handleResize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (t) {
                      this.children[t].leaf.lastWish(),
                        v(u(n.prototype), "removeChild", this).call(this, t);
                    },
                  },
                  {
                    kind: "method",
                    key: "getIncidentsByChannel",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = {};
                      for (var i in ((n["motor-cortex-js"] = [
                        {
                          millisecond: t,
                          parentMillisecond: e,
                          incident: this,
                          id: this.id,
                        },
                      ]),
                      this.children)) {
                        var r = this.children[i],
                          o = r.leaf.getIncidentsByChannel(t + r.position, t);
                        for (var s in o)
                          Object.prototype.hasOwnProperty.call(n, s)
                            ? (n[s] = n[s].concat(o[s]))
                            : (n[s] = o[s]);
                      }
                      return n;
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.children)
                        this.children[t].leaf.lastWish();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Vt],
                    key: "setBlock",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [Nt],
                    key: "unblock",
                    value: function () {},
                  },
                ],
              };
            },
            Dt
          ),
          $t = ct(function (t, e) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              u = /^\[object .+?Constructor\]$/,
              d = /^(?:0|[1-9]\d*)$/,
              p = {};
            (p["[object Float32Array]"] = p["[object Float64Array]"] = p[
              "[object Int8Array]"
            ] = p["[object Int16Array]"] = p["[object Int32Array]"] = p[
              "[object Uint8Array]"
            ] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p[
              "[object Uint32Array]"
            ] = !0),
              (p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p[
                "[object Boolean]"
              ] = p["[object DataView]"] = p["[object Date]"] = p[
                "[object Error]"
              ] = p["[object Function]"] = p[i] = p["[object Number]"] = p[
                r
              ] = p["[object RegExp]"] = p[o] = p["[object String]"] = p[
                "[object WeakMap]"
              ] = !1);
            var h = "object" == typeof at && at && at.Object === Object && at,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              m = h || f || Function("return this")(),
              v = e && !e.nodeType && e,
              g = v && t && !t.nodeType && t,
              y = g && g.exports === v,
              b = y && h.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (t) {}
              })(),
              w = x && x.isTypedArray;
            function k(t, e) {
              for (
                var n = -1, i = null == t ? 0 : t.length, r = 0, o = [];
                ++n < i;

              ) {
                var s = t[n];
                e(s, n, t) && (o[r++] = s);
              }
              return o;
            }
            function _(t, e) {
              for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function C(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, i) {
                  n[++e] = [i, t];
                }),
                n
              );
            }
            function I(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var O,
              E,
              P,
              j = Array.prototype,
              M = Function.prototype,
              S = Object.prototype,
              B = m["__core-js_shared__"],
              A = M.toString,
              T = S.hasOwnProperty,
              L = (O = /[^.]+$/.exec((B && B.keys && B.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + O
                : "",
              D = S.toString,
              V = RegExp(
                "^" +
                  A.call(T)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              z = y ? m.Buffer : void 0,
              N = m.Symbol,
              R = m.Uint8Array,
              $ = S.propertyIsEnumerable,
              H = j.splice,
              F = N ? N.toStringTag : void 0,
              G = Object.getOwnPropertySymbols,
              W = z ? z.isBuffer : void 0,
              U =
                ((E = Object.keys),
                (P = Object),
                function (t) {
                  return E(P(t));
                }),
              q = Pt(m, "DataView"),
              J = Pt(m, "Map"),
              K = Pt(m, "Promise"),
              X = Pt(m, "Set"),
              Q = Pt(m, "WeakMap"),
              Y = Pt(Object, "create"),
              Z = Vt(q),
              tt = Vt(J),
              et = Vt(K),
              nt = Vt(X),
              it = Vt(Q),
              rt = N ? N.prototype : void 0,
              ot = rt ? rt.valueOf : void 0,
              st = rt ? rt.toString : void 0;
            function lt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function ct(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function ut(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function dt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new ut(); ++e < n; ) this.add(t[e]);
            }
            function pt(t) {
              var e = (this.__data__ = new ct(t));
              this.size = e.size;
            }
            function ht(t, e) {
              for (var n = t.length; n--; ) if (Nt(t[n][0], e)) return n;
              return -1;
            }
            (lt.prototype.clear = function () {
              (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
            }),
              (lt.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (lt.prototype.get = function (t) {
                var e = this.__data__;
                if (Y) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return T.call(e, t) ? e[t] : void 0;
              }),
              (lt.prototype.has = function (t) {
                var e = this.__data__;
                return Y ? void 0 !== e[t] : T.call(e, t);
              }),
              (lt.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = Y && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (ct.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ct.prototype.delete = function (t) {
                var e = this.__data__,
                  n = ht(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : H.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ct.prototype.get = function (t) {
                var e = this.__data__,
                  n = ht(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (ct.prototype.has = function (t) {
                return ht(this.__data__, t) > -1;
              }),
              (ct.prototype.set = function (t, e) {
                var n = this.__data__,
                  i = ht(n, t);
                return (
                  i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this
                );
              }),
              (ut.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new lt(),
                    map: new (J || ct)(),
                    string: new lt(),
                  });
              }),
              (ut.prototype.delete = function (t) {
                var e = Et(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (ut.prototype.get = function (t) {
                return Et(this, t).get(t);
              }),
              (ut.prototype.has = function (t) {
                return Et(this, t).has(t);
              }),
              (ut.prototype.set = function (t, e) {
                var n = Et(this, t),
                  i = n.size;
                return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
              }),
              (dt.prototype.add = dt.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (dt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (pt.prototype.clear = function () {
                (this.__data__ = new ct()), (this.size = 0);
              }),
              (pt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (pt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (pt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (pt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof ct) {
                  var i = n.__data__;
                  if (!J || i.length < 199)
                    return i.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new ut(i);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var ft,
              mt =
                ((ft = function (t, e) {
                  return t && gt(t, e, Xt);
                }),
                function (t, e) {
                  if (null == t) return t;
                  if (!Ht(t)) return ft(t, e);
                  for (
                    var n = t.length, i = -1, r = Object(t);
                    ++i < n && !1 !== e(r[i], i, r);

                  );
                  return t;
                });
            function vt(t, e) {
              var n = [];
              return (
                mt(t, function (t, i, r) {
                  e(t, i, r) && n.push(t);
                }),
                n
              );
            }
            var gt = function (t, e, n) {
              for (var i = -1, r = Object(t), o = n(t), s = o.length; s--; ) {
                var a = o[++i];
                if (!1 === e(r[a], a, r)) break;
              }
              return t;
            };
            function yt(t, e) {
              for (var n = 0, i = (e = Ct(e, t)).length; null != t && n < i; )
                t = t[Dt(e[n++])];
              return n && n == i ? t : void 0;
            }
            function bt(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : F && F in Object(t)
                ? (function (t) {
                    var e = T.call(t, F),
                      n = t[F];
                    try {
                      t[F] = void 0;
                      var i = !0;
                    } catch (t) {}
                    var r = D.call(t);
                    return i && (e ? (t[F] = n) : delete t[F]), r;
                  })(t)
                : (function (t) {
                    return D.call(t);
                  })(t);
            }
            function xt(t, e) {
              return null != t && e in Object(t);
            }
            function wt(t) {
              return qt(t) && bt(t) == n;
            }
            function kt(t, e, s, a, l) {
              return (
                t === e ||
                (null == t || null == e || (!qt(t) && !qt(e))
                  ? t != t && e != e
                  : (function (t, e, s, a, l, c) {
                      var u = $t(t),
                        d = $t(e),
                        p = u ? "[object Array]" : Mt(t),
                        h = d ? "[object Array]" : Mt(e),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && Ft(t)) {
                        if (!Ft(e)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new pt()),
                          u || Kt(t)
                            ? It(t, e, s, a, l, c)
                            : (function (t, e, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !a(new R(t), new R(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Nt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case i:
                                    var c = C;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = I), t.size != e.size && !u))
                                      return !1;
                                    var d = l.get(t);
                                    if (d) return d == e;
                                    (r |= 2), l.set(t, e);
                                    var p = It(c(t), c(e), r, s, a, l);
                                    return l.delete(t), p;
                                  case "[object Symbol]":
                                    if (ot) return ot.call(t) == ot.call(e);
                                }
                                return !1;
                              })(t, e, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && T.call(t, "__wrapped__"),
                          y = m && T.call(e, "__wrapped__");
                        if (g || y) {
                          var b = g ? t.value() : t,
                            x = y ? e.value() : e;
                          return c || (c = new pt()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new pt()),
                        (function (t, e, n, i, r, o) {
                          var s = 1 & n,
                            a = Ot(t),
                            l = a.length;
                          if (l != Ot(e).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in e : T.call(e, u))) return !1;
                          }
                          var d = o.get(t);
                          if (d && o.get(e)) return d == e;
                          var p = !0;
                          o.set(t, e), o.set(e, t);
                          for (var h = s; ++c < l; ) {
                            var f = t[(u = a[c])],
                              m = e[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, e, t, o)
                                : i(f, m, u, t, e, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = t.constructor,
                              y = e.constructor;
                            g == y ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(t), o.delete(e), p;
                        })(t, e, s, a, l, c))
                      );
                    })(t, e, s, a, kt, l))
              );
            }
            function _t(t) {
              if ("string" == typeof t) return t;
              if ($t(t))
                return (
                  (function (t, e) {
                    for (
                      var n = -1, i = null == t ? 0 : t.length, r = Array(i);
                      ++n < i;

                    )
                      r[n] = e(t[n], n, t);
                    return r;
                  })(t, _t) + ""
                );
              if (Jt(t)) return st ? st.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Ct(t, e) {
              return $t(t)
                ? t
                : Bt(t, e)
                ? [t]
                : Lt(
                    (function (t) {
                      return null == t ? "" : _t(t);
                    })(t)
                  );
            }
            function It(t, e, n, i, r, o) {
              var s = 1 & n,
                a = t.length,
                l = e.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var u = -1,
                d = !0,
                p = 2 & n ? new dt() : void 0;
              for (o.set(t, e), o.set(e, t); ++u < a; ) {
                var h = t[u],
                  f = e[u];
                if (i) var m = s ? i(f, h, u, e, t, o) : i(h, f, u, t, e, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !_(e, function (t, e) {
                      if (((s = e), !p.has(s) && (h === t || r(h, t, n, i, o))))
                        return p.push(e);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), d;
            }
            function Ot(t) {
              return (function (t, e, n) {
                var i = e(t);
                return $t(t)
                  ? i
                  : (function (t, e) {
                      for (var n = -1, i = e.length, r = t.length; ++n < i; )
                        t[r + n] = e[n];
                      return t;
                    })(i, n(t));
              })(t, Xt, jt);
            }
            function Et(t, e) {
              var n,
                i,
                r = t.__data__;
              return (
                "string" == (i = typeof (n = e)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof e ? "string" : "hash"]
                : r.map;
            }
            function Pt(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !Ut(t) ||
                    (function (t) {
                      return !!L && L in t;
                    })(t)
                  ) && (Gt(t) ? V : u).test(Vt(t))
                );
              })(n)
                ? n
                : void 0;
            }
            var jt = G
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        k(G(t), function (e) {
                          return $.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              Mt = bt;
            function St(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && d.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function Bt(t, e) {
              if ($t(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !Jt(t)
                ) ||
                a.test(t) ||
                !s.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function At(t) {
              return t == t && !Ut(t);
            }
            function Tt(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((q && "[object DataView]" != Mt(new q(new ArrayBuffer(1)))) ||
              (J && Mt(new J()) != i) ||
              (K && "[object Promise]" != Mt(K.resolve())) ||
              (X && Mt(new X()) != o) ||
              (Q && "[object WeakMap]" != Mt(new Q()))) &&
              (Mt = function (t) {
                var e = bt(t),
                  n = e == r ? t.constructor : void 0,
                  s = n ? Vt(n) : "";
                if (s)
                  switch (s) {
                    case Z:
                      return "[object DataView]";
                    case tt:
                      return i;
                    case et:
                      return "[object Promise]";
                    case nt:
                      return o;
                    case it:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Lt = (function (t) {
              var e = zt(
                  function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(l, function (t, n, i, r) {
                        e.push(i ? r.replace(c, "$1") : n || t);
                      }),
                      e
                    );
                  },
                  function (t) {
                    return 500 === n.size && n.clear(), t;
                  }
                ),
                n = e.cache;
              return e;
            })();
            function Dt(t) {
              if ("string" == typeof t || Jt(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Vt(t) {
              if (null != t) {
                try {
                  return A.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function zt(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = e ? e.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = t.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (zt.Cache || ut)()), n;
            }
            function Nt(t, e) {
              return t === e || (t != t && e != e);
            }
            zt.Cache = ut;
            var Rt = wt(
                (function () {
                  return arguments;
                })()
              )
                ? wt
                : function (t) {
                    return qt(t) && T.call(t, "callee") && !$.call(t, "callee");
                  },
              $t = Array.isArray;
            function Ht(t) {
              return null != t && Wt(t.length) && !Gt(t);
            }
            var Ft =
              W ||
              function () {
                return !1;
              };
            function Gt(t) {
              if (!Ut(t)) return !1;
              var e = bt(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function Wt(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function Ut(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function qt(t) {
              return null != t && "object" == typeof t;
            }
            function Jt(t) {
              return (
                "symbol" == typeof t || (qt(t) && "[object Symbol]" == bt(t))
              );
            }
            var Kt = w
              ? (function (t) {
                  return function (e) {
                    return t(e);
                  };
                })(w)
              : function (t) {
                  return qt(t) && Wt(t.length) && !!p[bt(t)];
                };
            function Xt(t) {
              return Ht(t)
                ? (function (t, e) {
                    var n = $t(t),
                      i = !n && Rt(t),
                      r = !n && !i && Ft(t),
                      o = !n && !i && !r && Kt(t),
                      s = n || i || r || o,
                      a = s
                        ? (function (t, e) {
                            for (var n = -1, i = Array(t); ++n < t; )
                              i[n] = e(n);
                            return i;
                          })(t.length, String)
                        : [],
                      l = a.length;
                    for (var c in t)
                      (!e && !T.call(t, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            St(c, l))) ||
                        a.push(c);
                    return a;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || S))
                    )
                      return U(t);
                    var e,
                      n,
                      i = [];
                    for (var r in Object(t))
                      T.call(t, r) && "constructor" != r && i.push(r);
                    return i;
                  })(t);
            }
            function Qt(t) {
              return t;
            }
            t.exports = function (t, e) {
              return ($t(t) ? k : vt)(
                t,
                (function (t) {
                  return "function" == typeof t
                    ? t
                    : null == t
                    ? Qt
                    : "object" == typeof t
                    ? $t(t)
                      ? (function (t, e) {
                          return Bt(t) && At(e)
                            ? Tt(Dt(t), e)
                            : function (n) {
                                var i = (function (t, e, n) {
                                  var i = null == t ? void 0 : yt(t, e);
                                  return void 0 === i ? void 0 : i;
                                })(n, t);
                                return void 0 === i && i === e
                                  ? (function (t, e) {
                                      return (
                                        null != t &&
                                        (function (t, e, n) {
                                          for (
                                            var i = -1,
                                              r = (e = Ct(e, t)).length,
                                              o = !1;
                                            ++i < r;

                                          ) {
                                            var s = Dt(e[i]);
                                            if (!(o = null != t && n(t, s)))
                                              break;
                                            t = t[s];
                                          }
                                          return o || ++i != r
                                            ? o
                                            : !!(r =
                                                null == t ? 0 : t.length) &&
                                                Wt(r) &&
                                                St(s, r) &&
                                                ($t(t) || Rt(t));
                                        })(t, e, xt)
                                      );
                                    })(n, t)
                                  : kt(e, i, 3);
                              };
                        })(t[0], t[1])
                      : (function (t) {
                          var e = (function (t) {
                            for (var e = Xt(t), n = e.length; n--; ) {
                              var i = e[n],
                                r = t[i];
                              e[n] = [i, r, At(r)];
                            }
                            return e;
                          })(t);
                          return 1 == e.length && e[0][2]
                            ? Tt(e[0][0], e[0][1])
                            : function (n) {
                                return (
                                  n === t ||
                                  (function (t, e, n, i) {
                                    var r = n.length,
                                      o = r;
                                    if (null == t) return !o;
                                    for (t = Object(t); r--; ) {
                                      var s = n[r];
                                      if (
                                        s[2] ? s[1] !== t[s[0]] : !(s[0] in t)
                                      )
                                        return !1;
                                    }
                                    for (; ++r < o; ) {
                                      var a = (s = n[r])[0],
                                        l = t[a],
                                        c = s[1];
                                      if (s[2]) {
                                        if (void 0 === l && !(a in t))
                                          return !1;
                                      } else {
                                        var u,
                                          d = new pt();
                                        if (
                                          !(void 0 === u
                                            ? kt(c, l, 3, i, d)
                                            : u)
                                        )
                                          return !1;
                                      }
                                    }
                                    return !0;
                                  })(n, 0, e)
                                );
                              };
                        })(t)
                    : Bt((e = t))
                    ? ((n = Dt(e)),
                      function (t) {
                        return null == t ? void 0 : t[n];
                      })
                    : (function (t) {
                        return function (e) {
                          return yt(e, t);
                        };
                      })(e);
                  var e, n;
                })(e)
              );
            };
          }),
          Ht = ct(function (t, e) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              u = /^\[object .+?Constructor\]$/,
              d = /^(?:0|[1-9]\d*)$/,
              p = {};
            (p["[object Float32Array]"] = p["[object Float64Array]"] = p[
              "[object Int8Array]"
            ] = p["[object Int16Array]"] = p["[object Int32Array]"] = p[
              "[object Uint8Array]"
            ] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p[
              "[object Uint32Array]"
            ] = !0),
              (p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p[
                "[object Boolean]"
              ] = p["[object DataView]"] = p["[object Date]"] = p[
                "[object Error]"
              ] = p["[object Function]"] = p[i] = p["[object Number]"] = p[
                r
              ] = p["[object RegExp]"] = p[o] = p["[object String]"] = p[
                "[object WeakMap]"
              ] = !1);
            var h = "object" == typeof at && at && at.Object === Object && at,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              m = h || f || Function("return this")(),
              v = e && !e.nodeType && e,
              g = v && t && !t.nodeType && t,
              y = g && g.exports === v,
              b = y && h.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (t) {}
              })(),
              w = x && x.isTypedArray;
            function k(t, e, n) {
              switch (n.length) {
                case 0:
                  return t.call(e);
                case 1:
                  return t.call(e, n[0]);
                case 2:
                  return t.call(e, n[0], n[1]);
                case 3:
                  return t.call(e, n[0], n[1], n[2]);
              }
              return t.apply(e, n);
            }
            function _(t, e) {
              for (
                var n = -1, i = null == t ? 0 : t.length, r = Array(i);
                ++n < i;

              )
                r[n] = e(t[n], n, t);
              return r;
            }
            function C(t, e) {
              for (var n = -1, i = e.length, r = t.length; ++n < i; )
                t[r + n] = e[n];
              return t;
            }
            function I(t, e) {
              for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function O(t) {
              return function (e) {
                return t(e);
              };
            }
            function E(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, i) {
                  n[++e] = [i, t];
                }),
                n
              );
            }
            function P(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var j,
              M,
              S,
              B = Array.prototype,
              A = Function.prototype,
              T = Object.prototype,
              L = m["__core-js_shared__"],
              D = A.toString,
              V = T.hasOwnProperty,
              z = (j = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + j
                : "",
              N = T.toString,
              R = RegExp(
                "^" +
                  D.call(V)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              $ = y ? m.Buffer : void 0,
              H = m.Symbol,
              F = m.Uint8Array,
              G = T.propertyIsEnumerable,
              W = B.splice,
              U = H ? H.isConcatSpreadable : void 0,
              q = H ? H.toStringTag : void 0,
              J = (function () {
                try {
                  var t = Vt(Object, "defineProperty");
                  return t({}, "", {}), t;
                } catch (t) {}
              })(),
              K = Object.getOwnPropertySymbols,
              X = $ ? $.isBuffer : void 0,
              Q =
                ((M = Object.keys),
                (S = Object),
                function (t) {
                  return M(S(t));
                }),
              Y = Math.max,
              Z = Date.now,
              tt = Vt(m, "DataView"),
              et = Vt(m, "Map"),
              nt = Vt(m, "Promise"),
              it = Vt(m, "Set"),
              rt = Vt(m, "WeakMap"),
              ot = Vt(Object, "create"),
              st = Kt(tt),
              lt = Kt(et),
              ct = Kt(nt),
              ut = Kt(it),
              dt = Kt(rt),
              pt = H ? H.prototype : void 0,
              ht = pt ? pt.valueOf : void 0,
              ft = pt ? pt.toString : void 0;
            function mt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function vt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function gt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function yt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new gt(); ++e < n; ) this.add(t[e]);
            }
            function bt(t) {
              var e = (this.__data__ = new vt(t));
              this.size = e.size;
            }
            function xt(t, e) {
              for (var n = t.length; n--; ) if (Yt(t[n][0], e)) return n;
              return -1;
            }
            (mt.prototype.clear = function () {
              (this.__data__ = ot ? ot(null) : {}), (this.size = 0);
            }),
              (mt.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (mt.prototype.get = function (t) {
                var e = this.__data__;
                if (ot) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return V.call(e, t) ? e[t] : void 0;
              }),
              (mt.prototype.has = function (t) {
                var e = this.__data__;
                return ot ? void 0 !== e[t] : V.call(e, t);
              }),
              (mt.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = ot && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (vt.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (vt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = xt(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : W.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (vt.prototype.get = function (t) {
                var e = this.__data__,
                  n = xt(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (vt.prototype.has = function (t) {
                return xt(this.__data__, t) > -1;
              }),
              (vt.prototype.set = function (t, e) {
                var n = this.__data__,
                  i = xt(n, t);
                return (
                  i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this
                );
              }),
              (gt.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new mt(),
                    map: new (et || vt)(),
                    string: new mt(),
                  });
              }),
              (gt.prototype.delete = function (t) {
                var e = Dt(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (gt.prototype.get = function (t) {
                return Dt(this, t).get(t);
              }),
              (gt.prototype.has = function (t) {
                return Dt(this, t).has(t);
              }),
              (gt.prototype.set = function (t, e) {
                var n = Dt(this, t),
                  i = n.size;
                return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
              }),
              (yt.prototype.add = yt.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (yt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (bt.prototype.clear = function () {
                (this.__data__ = new vt()), (this.size = 0);
              }),
              (bt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (bt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (bt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (bt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof vt) {
                  var i = n.__data__;
                  if (!et || i.length < 199)
                    return i.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new gt(i);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var wt,
              kt =
                ((wt = function (t, e) {
                  return t && _t(t, e, ce);
                }),
                function (t, e) {
                  if (null == t) return t;
                  if (!ee(t)) return wt(t, e);
                  for (
                    var n = t.length, i = -1, r = Object(t);
                    ++i < n && !1 !== e(r[i], i, r);

                  );
                  return t;
                }),
              _t = function (t, e, n) {
                for (var i = -1, r = Object(t), o = n(t), s = o.length; s--; ) {
                  var a = o[++i];
                  if (!1 === e(r[a], a, r)) break;
                }
                return t;
              };
            function Ct(t, e) {
              for (var n = 0, i = (e = Bt(e, t)).length; null != t && n < i; )
                t = t[Jt(e[n++])];
              return n && n == i ? t : void 0;
            }
            function It(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : q && q in Object(t)
                ? (function (t) {
                    var e = V.call(t, q),
                      n = t[q];
                    try {
                      t[q] = void 0;
                      var i = !0;
                    } catch (t) {}
                    var r = N.call(t);
                    return i && (e ? (t[q] = n) : delete t[q]), r;
                  })(t)
                : (function (t) {
                    return N.call(t);
                  })(t);
            }
            function Ot(t, e) {
              return null != t && e in Object(t);
            }
            function Et(t) {
              return se(t) && It(t) == n;
            }
            function Pt(t, e, s, a, l) {
              return (
                t === e ||
                (null == t || null == e || (!se(t) && !se(e))
                  ? t != t && e != e
                  : (function (t, e, s, a, l, c) {
                      var u = te(t),
                        d = te(e),
                        p = u ? "[object Array]" : Nt(t),
                        h = d ? "[object Array]" : Nt(e),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && ne(t)) {
                        if (!ne(e)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new bt()),
                          u || le(t)
                            ? Tt(t, e, s, a, l, c)
                            : (function (t, e, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !a(new F(t), new F(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Yt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case i:
                                    var c = E;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = P), t.size != e.size && !u))
                                      return !1;
                                    var d = l.get(t);
                                    if (d) return d == e;
                                    (r |= 2), l.set(t, e);
                                    var p = Tt(c(t), c(e), r, s, a, l);
                                    return l.delete(t), p;
                                  case "[object Symbol]":
                                    if (ht) return ht.call(t) == ht.call(e);
                                }
                                return !1;
                              })(t, e, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && V.call(t, "__wrapped__"),
                          y = m && V.call(e, "__wrapped__");
                        if (g || y) {
                          var b = g ? t.value() : t,
                            x = y ? e.value() : e;
                          return c || (c = new bt()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new bt()),
                        (function (t, e, n, i, r, o) {
                          var s = 1 & n,
                            a = Lt(t),
                            l = a.length;
                          if (l != Lt(e).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in e : V.call(e, u))) return !1;
                          }
                          var d = o.get(t);
                          if (d && o.get(e)) return d == e;
                          var p = !0;
                          o.set(t, e), o.set(e, t);
                          for (var h = s; ++c < l; ) {
                            var f = t[(u = a[c])],
                              m = e[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, e, t, o)
                                : i(f, m, u, t, e, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = t.constructor,
                              y = e.constructor;
                            g == y ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(t), o.delete(e), p;
                        })(t, e, s, a, l, c))
                      );
                    })(t, e, s, a, Pt, l))
              );
            }
            function jt(t) {
              return "function" == typeof t
                ? t
                : null == t
                ? ue
                : "object" == typeof t
                ? te(t)
                  ? (function (t, e) {
                      return Ft(t) && Gt(e)
                        ? Wt(Jt(t), e)
                        : function (n) {
                            var i = (function (t, e, n) {
                              var i = null == t ? void 0 : Ct(t, e);
                              return void 0 === i ? void 0 : i;
                            })(n, t);
                            return void 0 === i && i === e
                              ? (function (t, e) {
                                  return (
                                    null != t &&
                                    (function (t, e, n) {
                                      for (
                                        var i = -1,
                                          r = (e = Bt(e, t)).length,
                                          o = !1;
                                        ++i < r;

                                      ) {
                                        var s = Jt(e[i]);
                                        if (!(o = null != t && n(t, s))) break;
                                        t = t[s];
                                      }
                                      return o || ++i != r
                                        ? o
                                        : !!(r = null == t ? 0 : t.length) &&
                                            re(r) &&
                                            $t(s, r) &&
                                            (te(t) || Zt(t));
                                    })(t, e, Ot)
                                  );
                                })(n, t)
                              : Pt(e, i, 3);
                          };
                    })(t[0], t[1])
                  : (function (t) {
                      var e = (function (t) {
                        for (var e = ce(t), n = e.length; n--; ) {
                          var i = e[n],
                            r = t[i];
                          e[n] = [i, r, Gt(r)];
                        }
                        return e;
                      })(t);
                      return 1 == e.length && e[0][2]
                        ? Wt(e[0][0], e[0][1])
                        : function (n) {
                            return (
                              n === t ||
                              (function (t, e, n, i) {
                                var r = n.length,
                                  o = r;
                                if (null == t) return !o;
                                for (t = Object(t); r--; ) {
                                  var s = n[r];
                                  if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
                                    return !1;
                                }
                                for (; ++r < o; ) {
                                  var a = (s = n[r])[0],
                                    l = t[a],
                                    c = s[1];
                                  if (s[2]) {
                                    if (void 0 === l && !(a in t)) return !1;
                                  } else {
                                    var u,
                                      d = new bt();
                                    if (!(void 0 === u ? Pt(c, l, 3, i, d) : u))
                                      return !1;
                                  }
                                }
                                return !0;
                              })(n, 0, e)
                            );
                          };
                    })(t)
                : Ft((e = t))
                ? ((n = Jt(e)),
                  function (t) {
                    return null == t ? void 0 : t[n];
                  })
                : (function (t) {
                    return function (e) {
                      return Ct(e, t);
                    };
                  })(e);
              var e, n;
            }
            var Mt = J
              ? function (t, e) {
                  return J(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((n = e),
                      function () {
                        return n;
                      }),
                    writable: !0,
                  });
                  var n;
                }
              : ue;
            function St(t) {
              if ("string" == typeof t) return t;
              if (te(t)) return _(t, St) + "";
              if (ae(t)) return ft ? ft.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Bt(t, e) {
              return te(t)
                ? t
                : Ft(t, e)
                ? [t]
                : qt(
                    (function (t) {
                      return null == t ? "" : St(t);
                    })(t)
                  );
            }
            function At(t, e) {
              if (t !== e) {
                var n = void 0 !== t,
                  i = null === t,
                  r = t == t,
                  o = ae(t),
                  s = void 0 !== e,
                  a = null === e,
                  l = e == e,
                  c = ae(e);
                if (
                  (!a && !c && !o && t > e) ||
                  (o && s && l && !a && !c) ||
                  (i && s && l) ||
                  (!n && l) ||
                  !r
                )
                  return 1;
                if (
                  (!i && !o && !c && t < e) ||
                  (c && n && r && !i && !o) ||
                  (a && n && r) ||
                  (!s && r) ||
                  !l
                )
                  return -1;
              }
              return 0;
            }
            function Tt(t, e, n, i, r, o) {
              var s = 1 & n,
                a = t.length,
                l = e.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var u = -1,
                d = !0,
                p = 2 & n ? new yt() : void 0;
              for (o.set(t, e), o.set(e, t); ++u < a; ) {
                var h = t[u],
                  f = e[u];
                if (i) var m = s ? i(f, h, u, e, t, o) : i(h, f, u, t, e, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !I(e, function (t, e) {
                      if (((s = e), !p.has(s) && (h === t || r(h, t, n, i, o))))
                        return p.push(e);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), d;
            }
            function Lt(t) {
              return (function (t, e, n) {
                var i = e(t);
                return te(t) ? i : C(i, n(t));
              })(t, ce, zt);
            }
            function Dt(t, e) {
              var n,
                i,
                r = t.__data__;
              return (
                "string" == (i = typeof (n = e)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof e ? "string" : "hash"]
                : r.map;
            }
            function Vt(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !oe(t) ||
                    (function (t) {
                      return !!z && z in t;
                    })(t)
                  ) && (ie(t) ? R : u).test(Kt(t))
                );
              })(n)
                ? n
                : void 0;
            }
            var zt = K
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        (function (t, e) {
                          for (
                            var n = -1,
                              i = null == t ? 0 : t.length,
                              r = 0,
                              o = [];
                            ++n < i;

                          ) {
                            var s = t[n];
                            e(s) && (o[r++] = s);
                          }
                          return o;
                        })(K(t), function (e) {
                          return G.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              Nt = It;
            function Rt(t) {
              return te(t) || Zt(t) || !!(U && t && t[U]);
            }
            function $t(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && d.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function Ht(t, e, n) {
              if (!oe(n)) return !1;
              var i = typeof e;
              return (
                !!("number" == i
                  ? ee(n) && $t(e, n.length)
                  : "string" == i && e in n) && Yt(n[e], t)
              );
            }
            function Ft(t, e) {
              if (te(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !ae(t)
                ) ||
                a.test(t) ||
                !s.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function Gt(t) {
              return t == t && !oe(t);
            }
            function Wt(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((tt && "[object DataView]" != Nt(new tt(new ArrayBuffer(1)))) ||
              (et && Nt(new et()) != i) ||
              (nt && "[object Promise]" != Nt(nt.resolve())) ||
              (it && Nt(new it()) != o) ||
              (rt && "[object WeakMap]" != Nt(new rt()))) &&
              (Nt = function (t) {
                var e = It(t),
                  n = e == r ? t.constructor : void 0,
                  s = n ? Kt(n) : "";
                if (s)
                  switch (s) {
                    case st:
                      return "[object DataView]";
                    case lt:
                      return i;
                    case ct:
                      return "[object Promise]";
                    case ut:
                      return o;
                    case dt:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Ut = (function (t) {
                var e = 0,
                  n = 0;
                return function () {
                  var i = Z(),
                    r = 16 - (i - n);
                  if (((n = i), r > 0)) {
                    if (++e >= 800) return arguments[0];
                  } else e = 0;
                  return t.apply(void 0, arguments);
                };
              })(Mt),
              qt = (function (t) {
                var e = Qt(
                    function (t) {
                      var e = [];
                      return (
                        46 === t.charCodeAt(0) && e.push(""),
                        t.replace(l, function (t, n, i, r) {
                          e.push(i ? r.replace(c, "$1") : n || t);
                        }),
                        e
                      );
                    },
                    function (t) {
                      return 500 === n.size && n.clear(), t;
                    }
                  ),
                  n = e.cache;
                return e;
              })();
            function Jt(t) {
              if ("string" == typeof t || ae(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Kt(t) {
              if (null != t) {
                try {
                  return D.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            var Xt = (function (t, e) {
              return Ut(
                (function (t, e, n) {
                  return (
                    (e = Y(void 0 === e ? t.length - 1 : e, 0)),
                    function () {
                      for (
                        var i = arguments,
                          r = -1,
                          o = Y(i.length - e, 0),
                          s = Array(o);
                        ++r < o;

                      )
                        s[r] = i[e + r];
                      r = -1;
                      for (var a = Array(e + 1); ++r < e; ) a[r] = i[r];
                      return (a[e] = n(s)), k(t, this, a);
                    }
                  );
                })(t, void 0, ue),
                t + ""
              );
            })(function (t, e) {
              if (null == t) return [];
              var n = e.length;
              return (
                n > 1 && Ht(t, e[0], e[1])
                  ? (e = [])
                  : n > 2 && Ht(e[0], e[1], e[2]) && (e = [e[0]]),
                (function (t, e, n) {
                  var i = -1;
                  return (
                    (e = _(e.length ? e : [ue], O(jt))),
                    (function (t, e) {
                      var n = t.length;
                      for (t.sort(e); n--; ) t[n] = t[n].value;
                      return t;
                    })(
                      (function (t, e) {
                        var n = -1,
                          i = ee(t) ? Array(t.length) : [];
                        return (
                          kt(t, function (t, r, o) {
                            i[++n] = e(t);
                          }),
                          i
                        );
                      })(t, function (t, n, r) {
                        return {
                          criteria: _(e, function (e) {
                            return e(t);
                          }),
                          index: ++i,
                          value: t,
                        };
                      }),
                      function (t, e) {
                        return (function (t, e, n) {
                          for (
                            var i = -1,
                              r = t.criteria,
                              o = e.criteria,
                              s = r.length,
                              a = n.length;
                            ++i < s;

                          ) {
                            var l = At(r[i], o[i]);
                            if (l)
                              return i >= a ? l : l * ("desc" == n[i] ? -1 : 1);
                          }
                          return t.index - e.index;
                        })(t, e, n);
                      }
                    )
                  );
                })(
                  t,
                  (function t(e, n, i, r, o) {
                    var s = -1,
                      a = e.length;
                    for (i || (i = Rt), o || (o = []); ++s < a; ) {
                      var l = e[s];
                      n > 0 && i(l)
                        ? n > 1
                          ? t(l, n - 1, i, r, o)
                          : C(o, l)
                        : r || (o[o.length] = l);
                    }
                    return o;
                  })(e, 1),
                  []
                )
              );
            });
            function Qt(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = e ? e.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = t.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (Qt.Cache || gt)()), n;
            }
            function Yt(t, e) {
              return t === e || (t != t && e != e);
            }
            Qt.Cache = gt;
            var Zt = Et(
                (function () {
                  return arguments;
                })()
              )
                ? Et
                : function (t) {
                    return se(t) && V.call(t, "callee") && !G.call(t, "callee");
                  },
              te = Array.isArray;
            function ee(t) {
              return null != t && re(t.length) && !ie(t);
            }
            var ne =
              X ||
              function () {
                return !1;
              };
            function ie(t) {
              if (!oe(t)) return !1;
              var e = It(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function re(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function oe(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function se(t) {
              return null != t && "object" == typeof t;
            }
            function ae(t) {
              return (
                "symbol" == typeof t || (se(t) && "[object Symbol]" == It(t))
              );
            }
            var le = w
              ? O(w)
              : function (t) {
                  return se(t) && re(t.length) && !!p[It(t)];
                };
            function ce(t) {
              return ee(t)
                ? (function (t, e) {
                    var n = te(t),
                      i = !n && Zt(t),
                      r = !n && !i && ne(t),
                      o = !n && !i && !r && le(t),
                      s = n || i || r || o,
                      a = s
                        ? (function (t, e) {
                            for (var n = -1, i = Array(t); ++n < t; )
                              i[n] = e(n);
                            return i;
                          })(t.length, String)
                        : [],
                      l = a.length;
                    for (var c in t)
                      (!e && !V.call(t, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            $t(c, l))) ||
                        a.push(c);
                    return a;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || T))
                    )
                      return Q(t);
                    var e,
                      n,
                      i = [];
                    for (var r in Object(t))
                      V.call(t, r) && "constructor" != r && i.push(r);
                    return i;
                  })(t);
            }
            function ue(t) {
              return t;
            }
            t.exports = Xt;
          }),
          Ft = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return i(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onInitialise",
                  value: function () {
                    (this.incidents = []), (this.incidentsById = {});
                  },
                },
                {
                  key: "_incidentById",
                  value: function (t) {
                    return this.incidentsById[t];
                  },
                },
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e = 0; e < this.incidents.length; e++)
                      this.incidents[e].millisecond =
                        this.incidents[e].millisecond * t;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (t) {
                    for (var e = [], n = {}, i = [], r = 0; r < t.length; r++)
                      (n[t[r].id] = t[r].incident),
                        i.push({ id: t[r].id, millisecond: t[r].millisecond }),
                        Object.prototype.hasOwnProperty.call(
                          this.incidentsById,
                          t[r].id
                        ) &&
                          (Et.error(
                            "Incident with the id ".concat(
                              t[r].id,
                              " already exists. Addition is rejected."
                            )
                          ),
                          e.push({
                            type: "Already existing id",
                            meta: { id: t[r].id },
                          }));
                    if (e.length > 0) return { result: !1, errors: e };
                    var o = this;
                    return {
                      result: !0,
                      execute: function () {
                        (o.incidentsById = Object.assign(o.incidentsById, n)),
                          (o.incidents = o.incidents.concat(i)),
                          (o.incidents = Ht(o.incidents, [
                            function (t) {
                              return t.millisecond;
                            },
                          ]));
                        for (var e = 0; e < t.length; e++)
                          o._incidentById(t[e].id)._onGetContextOnce(o.context);
                      },
                    };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (t, e) {
                    var n = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var i = 0; i < t.length; i++)
                          for (var r = 0; r < n.incidents.length; r++)
                            if (n.incidents[r].id === t[i].id) {
                              n.incidents[r].millisecond += e;
                              break;
                            }
                        n.incidents = Ht(n.incidents, [
                          function (t) {
                            return t.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    for (var e = this, n = [], i = 0; i < t.length; i++)
                      n.push(t[i].id);
                    return {
                      result: !0,
                      execute: function () {
                        var t = $t(e.incidents, function (t) {
                          return -1 === n.indexOf(t.id);
                        });
                        e.incidents = t;
                        for (var i = 0; i < n.length; i++)
                          delete e.incidentsById[n[i]];
                      },
                    };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (t) {
                    var e = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var n = 0; n < t.length; n++)
                          for (var i = 0; i < e.incidents.length; i++)
                            if (e.incidents[i].id === t[n].id) {
                              e.incidents[i].millisecond += t[n].startDelta;
                              break;
                            }
                        e.incidents = Ht(e.incidents, [
                          function (t) {
                            return t.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "moveTo",
                  value: function (t, e, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (i)
                      for (var r = 0; r < this.incidents.length; r++) {
                        var o = this.incidents[r],
                          s = this._incidentById(o.id);
                        e < o.millisecond
                          ? s.onProgress(0, 0, n, !0)
                          : e > o.millisecond + s.duration
                          ? s.onProgress(1, s.duration, n, !0)
                          : s.onProgress(
                              (e - o.millisecond) / s.duration,
                              e - o.millisecond,
                              n,
                              !0
                            );
                      }
                    else {
                      var a,
                        l = this;
                      a = $t(
                        this.incidents,
                        e > t
                          ? function (n) {
                              return (
                                (n.millisecond +
                                  l._incidentById(n.id).duration >=
                                  t &&
                                  n.millisecond +
                                    l._incidentById(n.id).duration <=
                                    e) ||
                                (l._incidentById(n.id).duration +
                                  n.millisecond >=
                                  e &&
                                  n.millisecond <= e)
                              );
                            }
                          : function (n) {
                              return (
                                (n.millisecond +
                                  l._incidentById(n.id).duration >=
                                  e &&
                                  n.millisecond +
                                    l._incidentById(n.id).duration <=
                                    t) ||
                                (l._incidentById(n.id).duration +
                                  n.millisecond >=
                                  t &&
                                  n.millisecond <= t)
                              );
                            }
                      );
                      for (var c = 0; c < a.length; c++) {
                        var u = a[c],
                          d = this._incidentById(u.id),
                          p = (e - u.millisecond) / d.duration >= 1,
                          h = p ? 1 : (e - u.millisecond) / d.duration,
                          f = p ? d.duration : e - u.millisecond;
                        d.onProgress(h, f, n, !1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(jt),
          Gt = "function" == typeof Float32Array;
        function Wt(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function Ut(t, e) {
          return 3 * e - 6 * t;
        }
        function qt(t) {
          return 3 * t;
        }
        function Jt(t, e, n) {
          return ((Wt(e, n) * t + Ut(e, n)) * t + qt(e)) * t;
        }
        function Kt(t, e, n) {
          return 3 * Wt(e, n) * t * t + 2 * Ut(e, n) * t + qt(e);
        }
        function Xt(t) {
          return t;
        }
        var Qt = function (t, e, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && n === i) return Xt;
          for (
            var r = Gt ? new Float32Array(11) : new Array(11), o = 0;
            o < 11;
            ++o
          )
            r[o] = Jt(0.1 * o, t, n);
          function s(e) {
            for (var i = 0, o = 1; 10 !== o && r[o] <= e; ++o) i += 0.1;
            --o;
            var s = i + ((e - r[o]) / (r[o + 1] - r[o])) * 0.1,
              a = Kt(s, t, n);
            return a >= 0.001
              ? (function (t, e, n, i) {
                  for (var r = 0; r < 4; ++r) {
                    var o = Kt(e, n, i);
                    if (0 === o) return e;
                    e -= (Jt(e, n, i) - t) / o;
                  }
                  return e;
                })(e, s, t, n)
              : 0 === a
              ? s
              : (function (t, e, n, i, r) {
                  var o,
                    s,
                    a = 0;
                  do {
                    (o = Jt((s = e + (n - e) / 2), i, r) - t) > 0
                      ? (n = s)
                      : (e = s);
                  } while (Math.abs(o) > 1e-7 && ++a < 10);
                  return s;
                })(e, i, i + 0.1, t, n);
          }
          return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : Jt(s(t), e, i);
          };
        };
        function Yt(t) {
          t.descriptor.value = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = {};
            return (
              (n[this.mc_plugin_npm_name] = [
                {
                  millisecond: t,
                  parentMillisecond: e,
                  incident: this,
                  id: this.id,
                },
              ]),
              n
            );
          };
        }
        var Zt = _(null, function (t) {
            return {
              F: function e() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                i(this, e),
                  t(this),
                  (this.attrs = n),
                  (this.props = r),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = r.id || _t()),
                  (this.modelId = r.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = jt),
                  (this.mc_plugin_npm_name = "motor-cortex-js"),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = r.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = r.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.initialValues = {}),
                  (this.userDefinedInitialValues = n.initialValues || {}),
                  (this.pureInitialValues = null),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, r);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "animAttributes",
                  value: function () {
                    return this.attrs.animatedAttrs;
                  },
                },
                {
                  kind: "set",
                  key: "animAttributes",
                  value: function (t) {
                    this.attrs.animatedAttrs[this.attributeKey] = t;
                  },
                },
                {
                  kind: "method",
                  key: "getScratchValue",
                  value: function () {
                    return 0;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return null === this.contex
                      ? []
                      : this.context.getElementByMCID
                      ? this.context.getElementByMCID(this.mcid)
                      : this.context.getElements(this.selector)[0];
                  },
                },
                {
                  kind: "get",
                  key: "attributeKey",
                  value: function () {
                    return Object.keys(this.attrs.animatedAttrs)[0];
                  },
                },
                {
                  kind: "get",
                  key: "targetValue",
                  value: function () {
                    return this.animAttributes[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getElementAttribute",
                  value: function (t) {
                    return this.element.getAttribute(t);
                  },
                },
                {
                  kind: "method",
                  decorators: [Yt],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "hasUserDefinedInitialValue",
                  value: function () {
                    return !!Object.prototype.hasOwnProperty.call(
                      this.userDefinedInitialValues,
                      this.attributeKey
                    );
                  },
                },
                {
                  kind: "method",
                  key: "setInitialValue",
                  value: function (t) {
                    var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    if (
                      (e &&
                        (this.pureInitialValues = JSON.parse(
                          JSON.stringify(t)
                        )),
                      this.hasUserDefinedInitialValue())
                    )
                      if ("object" === n(this.targetValue)) {
                        for (var i in this.userDefinedInitialValues[
                          this.attributeKey
                        ])
                          t[i] = this.userDefinedInitialValues[
                            this.attributeKey
                          ][i];
                        this.initialValues[this.attributeKey] = t;
                      } else
                        this.initialValues[
                          this.attributeKey
                        ] = this.userDefinedInitialValues[this.attributeKey];
                    else this.initialValues[this.attributeKey] = t;
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getInitialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (t) {
                      console.log(t), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    Et.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    Et.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e) {},
                },
                {
                  kind: "method",
                  decorators: [Vt],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Nt],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          te = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r, o) {
              var s;
              return (
                i(this, n),
                ((s = e.call(this, t, r, o)).runTimeInfo = {
                  currentMillisecond: 0,
                }),
                s
              );
            }
            return (
              o(n, [
                {
                  key: "lastWish",
                  value: function () {
                    this.ownClip.ownContext.unmount();
                  },
                },
                {
                  key: "onGetContext",
                  value: function () {
                    var t = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                      e = Et.getElementByMCID(this.context, this.mcid),
                      n = l({}, t.props, { selector: void 0, host: e });
                    (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                      t.attrs,
                      n
                    )),
                      (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                      (this.ownClip.contextLoaded = this.contextLoaded.bind(
                        this
                      )),
                      this.DescriptiveIncident.realClip.addContext(
                        { clipId: this.id, context: this.ownClip.ownContext },
                        !0
                      ),
                      (this.contextReady = !0);
                  },
                },
                {
                  key: "contextLoaded",
                  value: function () {
                    (this.contextReady = !0), this.unblock();
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (!0 !== this.ownClip.ownContext.loading) {
                      for (var i in this.DescriptiveIncident.realClip
                        .instantiatedChannels) {
                        var r = this.DescriptiveIncident.realClip
                          .instantiatedChannels[i];
                        r.moveTo(
                          this.runTimeInfo.currentMillisecond,
                          e,
                          this.id,
                          n
                        );
                      }
                      (this.runTimeInfo.currentMillisecond = e),
                        this.ownClip.onAfterProgress(t, e);
                    } else this.setBlock();
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return this.DescriptiveIncident.realClip.duration;
                  },
                  set: function (t) {
                    this.DescriptiveIncident.realClip._resize(
                      t / this.realClip.duration
                    );
                  },
                },
              ]),
              n
            );
          })(Zt);
        function ee(t) {
          Object.prototype.hasOwnProperty.call(t, "dnaExtras") ||
            (t.dnaExtras = {});
          var e = new t.Incident(
            t.attrs,
            l({}, t.props, { id: t.id || _t() }),
            l({}, t.dnaExtras, { context: t.context, mcid: t.mcid })
          );
          return (
            (e.mc_plugin_npm_name = t.plugin_npm_name),
            (e.plugin_channel_class = t.Channel),
            (e.DescriptiveIncident = t.DescriptiveIncident),
            e
          );
        }
        var ne = {
            linear: function (t) {
              return t;
            },
            easeInQuad: function (t) {
              return t * t;
            },
            easeOutQuad: function (t) {
              return t * (2 - t);
            },
            easeInOutQuad: function (t) {
              return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
            },
            easeInCubic: function (t) {
              return t * t * t;
            },
            easeOutCubic: function (t) {
              return --t * t * t + 1;
            },
            easeInOutCubic: function (t) {
              return t < 0.5
                ? 4 * t * t * t
                : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart: function (t) {
              return t * t * t * t;
            },
            easeOutQuart: function (t) {
              return 1 - --t * t * t * t;
            },
            easeInOutQuart: function (t) {
              return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            },
            easeInQuint: function (t) {
              return t * t * t * t * t;
            },
            easeOutQuint: function (t) {
              return 1 + --t * t * t * t * t;
            },
            easeInOutQuint: function (t) {
              return t < 0.5
                ? 16 * t * t * t * t * t
                : 1 + 16 * --t * t * t * t * t;
            },
            easeInSine: function (t) {
              return -1 * Math.cos((t / 1) * (Math.PI / 2)) + 1;
            },
            easeOutSine: function (t) {
              return 1 * Math.sin((t / 1) * (Math.PI / 2));
            },
            easeInOutSine: function (t) {
              return -0.5 * (Math.cos((Math.PI * t) / 1) - 1);
            },
            easeInExpo: function (t) {
              return 0 == t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
            },
            easeOutExpo: function (t) {
              return 1 == t ? 1 : 1 * (1 - Math.pow(2, (-10 * t) / 1));
            },
            easeInOutExpo: function (t) {
              return 0 == t
                ? 0
                : 1 == t
                ? 1
                : (t /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function (t) {
              return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
            },
            easeOutCirc: function (t) {
              return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
            },
            easeInOutCirc: function (t) {
              return (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 == t
                ? 0
                : 1 == (t /= 1)
                ? 1
                : (n || (n = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  -i *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((1 * t - e) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 == t
                ? 0
                : 1 == (t /= 1)
                ? 1
                : (n || (n = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  i *
                    Math.pow(2, -10 * t) *
                    Math.sin(((1 * t - e) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 == t
                ? 0
                : 2 == (t /= 0.5)
                ? 1
                : (n || (n = 0.3 * 1.5 * 1),
                  i < Math.abs(1)
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  t < 1
                    ? i *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((1 * t - e) * (2 * Math.PI)) / n) *
                      -0.5
                    : i *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((1 * t - e) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (t) {
              var e = 1.70158;
              return 1 * (t /= 1) * t * ((e + 1) * t - e);
            },
            easeOutBack: function (t) {
              var e = 1.70158;
              return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
            },
            easeInOutBack: function (t) {
              var e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function (t) {
              return 1 - ne.easeOutBounce(1 - t);
            },
            easeOutBounce: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t * 1
                : t < 2 / 2.75
                ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            },
            easeInOutBounce: function (t) {
              return t < 0.5
                ? 0.5 * ne.easeInBounce(2 * t)
                : 0.5 * ne.easeOutBounce(2 * t - 1) + 0.5;
            },
          },
          ie = _(
            null,
            function (t, e) {
              return {
                F: (function (e) {
                  c(r, e);
                  var n = f(r);
                  function r(e, o, s, a) {
                    var l;
                    return (
                      i(this, r),
                      (l = n.call(this, {
                        id: "".concat(e.incidentId, "_").concat(s),
                      })),
                      t(p(l)),
                      (l.contexts = {}),
                      (l.constructionIngredients = e),
                      (l.mcid = s),
                      (l._duration = a.realClip.duration),
                      (l.DescriptiveIncident = a),
                      (l.mc_plugin_npm_name = e.plugin_npm_name),
                      (l.plugin_channel_class = e.Channel),
                      l.addContext(o),
                      a.realClip.subscribeToDurationChange(function (t) {
                        (l._duration = t),
                          l.putMessageOnPipe("recalcDuration", {}, "Groups", {
                            selfExecute: !0,
                            direction: St,
                          });
                      }),
                      (l.easing = ne.linear),
                      Object.prototype.hasOwnProperty.call(l.props, "easing") &&
                        (Array.isArray(l.props.easing)
                          ? (l.easing = Qt(
                              l.props.easing[0],
                              l.props.easing[1],
                              l.props.easing[2],
                              l.props.easing[3]
                            ))
                          : (l.easing = ne[l.props.easing])),
                      l
                    );
                  }
                  return r;
                })(e),
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this._duration;
                    },
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (t, e, n) {
                      var i =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3],
                        r = this.easing(t) || 0,
                        o = r * this.duration;
                      this.contexts[n].onProgress(r, o, i);
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      0 === Object.keys(this.contexts).length &&
                        (this.originalContextKey = t.clipId);
                      var n = l({}, this.constructionIngredients, {
                        context: t.context,
                        mcid: this.mcid,
                        Incident: te,
                        DescriptiveIncident: this.DescriptiveIncident,
                      });
                      (this.contexts[t.clipId] = ee(n)),
                        e && this.contexts[t.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (t, e) {
                      return this.addContext(e, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Yt],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.contexts) this.contexts[t].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].onGetContext();
                    },
                  },
                ],
              };
            },
            Tt
          ),
          re = _(
            null,
            function (t, e) {
              var r = (function (e) {
                c(o, e);
                var r = f(o);
                function o(e, s, a, c) {
                  var u;
                  return (
                    i(this, o),
                    (u = r.call(
                      this,
                      l({}, e.props, {
                        id:
                          null !== c
                            ? ""
                                .concat(e.incidentId, "_")
                                .concat(a, "_")
                                .concat(c)
                            : "".concat(e.incidentId, "_").concat(a),
                      })
                    )),
                    t(p(u)),
                    (u.contexts = {}),
                    (u.constructionIngredients = e),
                    (u.mcid = a),
                    (u.attribute = c),
                    (u.mc_plugin_npm_name = e.plugin_npm_name),
                    (u.plugin_channel_class = e.Channel),
                    (u.DescriptiveIncident = e.DescriptiveIncident),
                    u.addContext(s),
                    null !== c &&
                      ("object" ===
                      n(
                        u.constructionIngredients.attrs.animatedAttrs[
                          u.attribute
                        ]
                      )
                        ? (u.originalAnimatedAttributeValue = l(
                            {},
                            u.constructionIngredients.attrs.animatedAttrs[
                              u.attribute
                            ]
                          ))
                        : (u.originalAnimatedAttributeValue =
                            u.constructionIngredients.attrs.animatedAttrs[
                              u.attribute
                            ])),
                    (u.easing = ne.linear),
                    Object.prototype.hasOwnProperty.call(u.props, "easing") &&
                      (Array.isArray(u.props.easing)
                        ? (u.easing = Qt(
                            u.props.easing[0],
                            u.props.easing[1],
                            u.props.easing[2],
                            u.props.easing[3]
                          ))
                        : (u.easing = ne[u.props.easing])),
                    u
                  );
                }
                return o;
              })(e);
              return {
                F: r,
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return v(u(r.prototype), "duration", this);
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (t) {
                      for (var e in ((function (t, e, n, i, r) {
                        if (!g(t, "duration", n, i || t))
                          throw new Error("failed to set property");
                      })(u(r.prototype), 0, t, this),
                      this.contexts))
                        this.contexts[e].duration = t;
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (t) {
                      var e =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        n = !1;
                      0 === Object.keys(this.contexts).length &&
                        ((this.originalContextKey = t.clipId),
                        (this.originalClipContext = t.context),
                        (n = !0));
                      var i = l({}, this.constructionIngredients, {
                          context: t.context,
                          mcid: this.mcid,
                        }),
                        r = ee(i);
                      (this.contexts[t.clipId] = r),
                        n ||
                          null === this.attribute ||
                          this.contexts[t.clipId].setInitialValue(
                            this.getInitialValue()
                          ),
                        e && this.contexts[t.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (t, e) {
                      return this.addContext(e, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Yt],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (t, e, n) {
                      var i =
                        e % (this.delay + this.props.duration + this.hiatus);
                      0 !== e &&
                        0 === i &&
                        (i = this.delay + this.props.duration);
                      var r = i - this.delay;
                      r < 0
                        ? (r = 0)
                        : r > this.props.duration && (r = this.props.duration);
                      var o = r / this.props.duration,
                        s = this.easing(o),
                        a = s * this.props.duration;
                      if (void 0 !== n) this.contexts[n].onProgress(s, a);
                      else
                        for (var l in this.contexts)
                          this.contexts[l].onProgress(s, a);
                    },
                  },
                  {
                    kind: "get",
                    key: "animatedAttributeValue",
                    value: function () {
                      return this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ];
                    },
                  },
                  {
                    kind: "set",
                    key: "animatedAttributeValue",
                    value: function (t) {
                      this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ] = t;
                    },
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.contexts) this.contexts[t].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "getInitialValue",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      return (
                        null === t && (t = this.attribute),
                        this.originalContext.getInitialValue()
                      );
                    },
                  },
                  {
                    kind: "get",
                    key: "initialValue",
                    value: function () {
                      return this.getInitialValue();
                    },
                  },
                  {
                    kind: "get",
                    key: "scratchValue",
                    value: function () {
                      return this.originalContext.scratchValue;
                    },
                  },
                  {
                    kind: "get",
                    key: "pureInitialValues",
                    value: function () {
                      return this.originalContext.pureInitialValues;
                    },
                  },
                  {
                    kind: "method",
                    key: "setInitialValue",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : null,
                        e =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                      for (var n in (null === t && (t = this.getScratchValue()),
                      this.contexts))
                        this.contexts[n].setInitialValue(
                          JSON.parse(JSON.stringify(t)),
                          e
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "getScratchValue",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      if (null === t) {
                        var e = Object.keys(this.contexts);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            this.originalClipContext,
                            "nonFragmentedContext"
                          )
                        ) {
                          var n = l({}, this.constructionIngredients, {
                              context: this.originalClipContext
                                .nonFragmentedContext,
                              mcid: this.mcid,
                            }),
                            i = ee(n);
                          return i.getScratchValue();
                        }
                        return 1 === e.length
                          ? this.originalContext.getScratchValue()
                          : this.contexts[e[1]].getScratchValue();
                      }
                      return this.contexts[t].getScratchValue();
                    },
                  },
                  {
                    kind: "method",
                    key: "setCompoAttrKeyValue",
                    value: function (t, e) {
                      for (var n in this.contexts)
                        (this.contexts[n].attrs.animatedAttrs[this.attribute][
                          t
                        ] = e),
                          this.contexts[n].lastWish(),
                          this.contexts[n].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "play",
                    value: function (t, e, n) {
                      return this.contexts[n].play(e);
                    },
                  },
                  {
                    kind: "method",
                    key: "stop",
                    value: function (t) {
                      this.contexts[t].stop();
                    },
                  },
                ],
              };
            },
            Tt
          ),
          oe = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r, o, s) {
              var a;
              return (
                i(this, n),
                ((a = e.call(
                  this,
                  {},
                  { id: "".concat(t.id, "_").concat(o) }
                )).mcid = o),
                (a.selector = s),
                a.setUp(t, r),
                a
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (t, e) {
                    for (var n in t.attrs.animatedAttrs) {
                      var i = {};
                      i[n] = t.attrs.animatedAttrs[n];
                      var r = l({}, t.attrs, { animatedAttrs: i }),
                        o = l({}, t.props, { selector: this.selector }),
                        s = {
                          incidentId: t.id,
                          attrs: r,
                          props: o,
                          Incident: t.constructor.Incident,
                          plugin_npm_name: t.constructor.plugin_npm_name,
                          Channel: t.constructor.Channel,
                          DescriptiveIncident: t,
                        },
                        a = new re(s, e, this.mcid, n);
                      this.addChild(a, 0);
                    }
                  },
                },
              ]),
              n
            );
          })(Rt),
          se = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r) {
              var o;
              return (
                i(this, n),
                ((o = e.call(this, {}, { id: t.id })).contexts = {}),
                (o.contexts[r.clipId] = r.context),
                (o.originalContextKey = r.clipId),
                (o.instantiatedCopiesContexts = r.instantiatedCopiesContexts),
                o.setUp(t, r),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (t, e) {
                    for (
                      var n,
                        i,
                        r = this.originalContext.getElements(t.selector()),
                        o = r.length,
                        s = 0;
                      s < o;
                      s++
                    ) {
                      for (var a in ((n = r[s]),
                      (i = this._getElementMCID(n)),
                      this.instantiatedCopiesContexts))
                        this._setElementMCID(
                          this.instantiatedCopiesContexts[a],
                          this.instantiatedCopiesContexts[a].getElements(
                            t.selector()
                          )[s],
                          i
                        );
                      this._createElementIncident(n, t, e, s, o, i);
                    }
                  },
                },
                {
                  key: "_getElementMCID",
                  value: function (t) {
                    var e = this.originalContext.getMCID(t);
                    return (
                      e || ((e = _t(!0)), this.originalContext.setMCID(t, e)), e
                    );
                  },
                },
                {
                  key: "_setElementMCID",
                  value: function (t, e, n) {
                    t.getMCID(e) || t.setMCID(e, n);
                  },
                },
                {
                  key: "_createElementIncident",
                  value: function (t, e, n, i, r, o) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        e.attrs,
                        "animatedAttrs"
                      )
                    ) {
                      var s = new oe(
                        e,
                        n,
                        o,
                        n.context.getElementSelectorByMCID(o)
                      );
                      this.addChild(s, 0);
                    } else if (
                      Object.prototype.hasOwnProperty.call(e.attrs, "keyframes")
                    );
                    else {
                      var a = e.attrs,
                        c = l({}, e.props, { selector: this.selector }),
                        u = {
                          incidentId: e.id,
                          attrs: a,
                          props: c,
                          Incident: e.constructor.Incident,
                          plugin_npm_name: e.constructor.plugin_npm_name,
                          Channel: e.constructor.Channel,
                          DescriptiveIncident: e,
                        },
                        d = new re(u, n, o, null);
                      this.addChild(d, 0);
                    }
                  },
                },
                {
                  key: "originalContext",
                  get: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
              ]),
              n
            );
          })(Rt),
          ae = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r) {
              var o;
              return (
                i(this, n), ((o = e.call(this, t, r)).realClip = t.realClip), o
              );
            }
            return (
              o(n, [
                {
                  key: "_createElementIncident",
                  value: function (t, e, n, i, r, o) {
                    var s = e.realClip.exportConstructionArguments(),
                      a = {
                        incidentId: e.id,
                        attrs: s.attrs,
                        props: l({}, s.props, {
                          selector: n.context.getElementSelectorByMCID(o),
                          runTimeInfo: e.runTimeInfo,
                        }),
                        Incident: e.constructor.Incident,
                        plugin_npm_name: e.constructor.plugin_npm_name,
                        Channel: Ft,
                        DescriptiveIncident: e,
                      },
                      c = new ie(a, n, o, e);
                    this.addChild(c, 0);
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return v(u(n.prototype), "duration", this);
                  },
                  set: function (t) {
                    this.realClip._resize(t / this.realClip.duration),
                      (this._duration = t);
                  },
                },
              ]),
              n
            );
          })(se);
        function le(t, e) {
          var n,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((i && "off" === t.audio) || (!i && "only" === t.audio))
            return null;
          if (
            Object.prototype.hasOwnProperty.call(t.props, "selector") &&
            ((!i && "~" === t.props.selector.charAt(0)) ||
              (i &&
                "~" !== t.props.selector.charAt(0) &&
                !t.constructor.isClip))
          )
            return null;
          if (t.constructor.isClip) {
            if (!Object.prototype.hasOwnProperty.call(t.props, "selector") || i)
              return i ? t.audioClip : t.realClip;
            (n = new ae(t, e)).plugin_channel_class = jt;
          } else if (t.constructor.isGroup)
            for (var r in ((n = ee({
              id: t.id,
              attrs: t.attrs,
              props: t.props,
              Incident: t.constructor.Incident,
              plugin_npm_name: t.constructor.plugin_npm_name,
              Channel: t.constructor.Channel,
              DescriptiveIncident: t,
            })),
            t.children)) {
              var o = le(t.children[r].leaf, e);
              null !== o && n.addChild(o, t.children[r].position);
            }
          else n = new se(t, e);
          return n;
        }
        var ce = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r) {
              var o;
              return (
                i(this, n),
                ((o = e.call(this, t, r)).attrs = t),
                (o.props = r),
                (o.isTheClip = !0),
                (o.blockingWaitings = {}),
                (o.instantiatedChannels = {}),
                (o.isHostedClip = !0),
                (o.instantiatedCopiesContexts = {}),
                o.onClipInitialise(),
                (o.runTimeInfo = o.props.runTimeInfo),
                (o.durationSubs = []),
                (o.audioClip = !1),
                (o.contextReady = !0),
                o
              );
            }
            return (
              o(n, [
                { key: "onClipInitialise", value: function () {} },
                {
                  key: "contextLoading",
                  value: function () {
                    this.contextReady = !1;
                  },
                },
                {
                  key: "contextLoaded",
                  value: function () {
                    (this.contextReady = !0), this.unblock();
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if (null !== this.props.host && void 0 !== this.props.host)
                      return this.context.getElements(t);
                    var e = [];
                    for (var n in this.instantiatedCopiesContexts)
                      for (
                        var i = this.instantiatedCopiesContexts[n].getElements(
                            t
                          ),
                          r = 0;
                        r < i.length;
                        r++
                      )
                        e.push(i[r]);
                    return e;
                  },
                },
                {
                  key: "addContext",
                  value: function (t) {
                    (this.instantiatedCopiesContexts[t.clipId] = t.context),
                      (t.instantiatedCopiesContexts = this.instantiatedCopiesContexts);
                    var e = this.putMessageOnPipe(
                      "addContext",
                      t,
                      {},
                      { selfExecute: !1, direction: Bt }
                    );
                    if (
                      1 === Object.keys(this.instantiatedCopiesContexts).length
                    ) {
                      for (var n in this.instantiatedChannels)
                        this.instantiatedChannels[n].recalcScratchValues(
                          t.clipId
                        );
                      this.context.nonFragmentedContext = t.context;
                    }
                    return e;
                  },
                },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return { attrs: this.attrs, props: this.props };
                  },
                },
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e in this.instantiatedChannels)
                      this.instantiatedChannels[e]._resize(t);
                    this.setNewDuration(this.duration * t);
                    for (var n = 0; n < this.durationSubs.length; n++)
                      this.durationSubs[n](this.duration);
                  },
                },
                {
                  key: "addIncident",
                  value: function (t) {
                    for (
                      var e = this,
                        n = this.putMessageOnPipe(
                          "addIncident",
                          {
                            incident: t.incident,
                            millisecond: t.millisecond,
                            parentGroupId: t.parentGroupId,
                            incidentFromDescription: le,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                              instantiatedCopiesContexts: this
                                .instantiatedCopiesContexts,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Bt }
                        ),
                        i = {},
                        r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r].response.getIncidentsByChannel(
                        n[r].positionDelta + t.millisecond
                      );
                      for (var s in o) {
                        var a;
                        Object.prototype.hasOwnProperty.call(i, s) ||
                          (i[s] = []),
                          (a = i[s]).push.apply(a, y(o[s]));
                      }
                    }
                    var l = this.checkAddition(i);
                    return l.result
                      ? {
                          result: !0,
                          execute: function () {
                            l.execute();
                            for (var i = 0; i < n.length; i++)
                              for (var r in (n[i].responder.addChild(
                                n[i].response,
                                t.millisecond
                              ),
                              n[i].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: St }
                              ),
                              e.instantiatedCopiesContexts))
                                n[i].responder.putMessageOnPipe(
                                  "addContext",
                                  {
                                    clipId: r,
                                    context: e.instantiatedCopiesContexts[r],
                                  },
                                  "ContextAwareIncidents",
                                  { selfExecute: !1, direction: Bt }
                                );
                          },
                        }
                      : l;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "all-or-nothing",
                      n = !0,
                      i = [],
                      r = [];
                    for (var o in t) {
                      Object.prototype.hasOwnProperty.call(
                        this.instantiatedChannels,
                        o
                      ) ||
                        (this.instantiatedChannels[o] = new t[
                          o
                        ][0].incident.plugin_channel_class({
                          runTimeInfo: this.runTimeInfo,
                          context: this.context,
                          subscribe: this.props.subscribe,
                        }));
                      var s = this.instantiatedChannels[o].addIncidents(
                        t[o],
                        e
                      );
                      (n = n && s.result),
                        s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                    }
                    var a = function () {
                        for (var t = 0; t < r.length; t++) r[t]();
                      },
                      l = { result: n, errors: i, execute: a };
                    return l;
                  },
                },
                {
                  key: "moveIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "moveIncident",
                          {
                            incidentId: t.id,
                            millisecond: t.millisecond,
                            parentGroupId: t.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Bt }
                        ),
                        n = {},
                        i = 0;
                      i < e.length;
                      i++
                    ) {
                      var r = e[i].response.getIncidentsByChannel(
                        e[i].positionDelta + t.millisecond
                      );
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = this.checkMove(n, t.positionDelta);
                    return a.result
                      ? {
                          result: !0,
                          execute: function () {
                            a.execute();
                            for (var n = 0; n < e.length; n++)
                              e[n].responder.editPosition(
                                e[n].response.id,
                                t.millisecond
                              ),
                                e[
                                  n
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: St }
                                );
                          },
                        }
                      : a;
                  },
                },
                {
                  key: "checkMove",
                  value: function (t, e) {
                    var n = !0,
                      i = [],
                      r = [];
                    for (var o in t) {
                      var s = this.instantiatedChannels[o].editIncidents(
                        t[o],
                        e
                      );
                      (n = n && s.result),
                        s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                    }
                    return {
                      result: n,
                      errors: i,
                      execute: function () {
                        for (var t = 0; t < r.length; t++) r[t]();
                      },
                    };
                  },
                },
                {
                  key: "removeIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "removeIncident",
                          {
                            incidentId: t.id,
                            parentGroupId: t.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Bt }
                        ),
                        n = {},
                        i = 0;
                      i < e.length;
                      i++
                    ) {
                      var r = e[i].response.getIncidentsByChannel();
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = this.checkDelete(n);
                    return a.result
                      ? {
                          result: !0,
                          execute: function () {
                            a.execute();
                            for (var t = 0; t < e.length; t++)
                              e[t].responder.removeChild(e[t].response.id),
                                e[
                                  t
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: St }
                                );
                          },
                        }
                      : a;
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    var e = !0,
                      n = [],
                      i = [];
                    for (var r in t) {
                      var o = this.instantiatedChannels[r].removeIncidents(
                        t[r]
                      );
                      (e = e && o.result),
                        o.result ? i.push(o.execute) : (n = n.concat(o.errors));
                    }
                    return {
                      result: e,
                      errors: n,
                      execute: function () {
                        for (var t = 0; t < i.length; t++) i[t]();
                      },
                    };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "resize",
                          {
                            incidentId: t.id,
                            newSize: t.newSize,
                            fraction: t.fraction,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.id,
                          { selfExecute: !1, direction: Bt }
                        ),
                        n = {},
                        i = 0;
                      i < e.length;
                      i++
                    ) {
                      var r = e[i].response.getIncidentsByChannel(
                        e[i].positionDelta
                      );
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = 0;
                    e.length > 0 && (a = e[0].positionDelta);
                    var l = this.checkResize(t.fraction, n, a);
                    return l.result
                      ? {
                          result: !0,
                          execute: function () {
                            l.execute();
                            for (var n = 0; n < e.length; n++)
                              e[n].responder.setNewDuration(t.newSize);
                          },
                        }
                      : l;
                  },
                },
                {
                  key: "checkResize",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      i = !0,
                      r = [],
                      o = [];
                    for (var s in e) {
                      var a = Et.systoleDiastoleProjections(e[s], t, n),
                        l = this.instantiatedChannels[s].checkResizedIncidents(
                          a
                        );
                      (i = i && l.result),
                        l.result ? o.push(l.execute) : (r = r.concat(l.errors));
                    }
                    var c = function () {
                        for (var t = 0; t < o.length; t++) o[t]();
                      },
                      u = { result: i, errors: r, execute: c };
                    return u;
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e = {};
                    return (
                      (e["@kissmybutton/self-contained-incidents"] = [
                        { millisecond: t, incident: this, id: this.id },
                      ]),
                      e
                    );
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    this.volume = parseFloat(t);
                  },
                },
                { key: "_onGetContextOnce", value: function (t) {} },
                {
                  key: "handleRecalcDuration",
                  value: function (t, e) {
                    if (this._calculateDuration())
                      for (var n = 0; n < this.durationSubs.length; n++)
                        this.durationSubs[n](this.duration);
                    return !0;
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (this.contextReady) {
                      for (var r in (n || (n = this.id),
                      this.instantiatedChannels)) {
                        var o = this.instantiatedChannels[r];
                        o.moveTo(this.runTimeInfo.currentMillisecond, e, n, i);
                      }
                      this.onAfterProgress(t, e);
                    } else this.setBlock();
                  },
                },
                { key: "onAfterProgress", value: function (t, e) {} },
                {
                  key: "flash",
                  value: function () {
                    for (var t in this.instantiatedChannels)
                      this.instantiatedChannels[t].moveTo(
                        0,
                        this.runTimeInfo.currentMillisecond,
                        this.id,
                        !0
                      );
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (t) {
                    this.durationSubs.push(t);
                  },
                },
                { key: "handleSetBlockingWaiting", value: function (t, e) {} },
                {
                  key: "handleRemoveBlockingWaiting",
                  value: function (t, e) {},
                },
                {
                  key: "context",
                  get: function () {
                    return this.ownContext;
                  },
                },
              ]),
              n
            );
          })(Rt),
          ue = (function () {
            function t() {
              i(this, t),
                (this.output = gt.createGain()),
                (this.gainNode = gt.createGain()),
                gt.createStereoPanner &&
                  (this.pannerNode = gt.createStereoPanner()),
                gt.createStereoPanner
                  ? (this.pannerNode.connect(this.gainNode),
                    this.gainNode.connect(this.output),
                    (this.input = this.pannerNode))
                  : (this.gainNode.connect(this.output),
                    (this.input = this.gainNode));
            }
            return (
              o(t, [
                {
                  key: "connect",
                  value: function (t) {
                    this.output.connect(t);
                  },
                },
                {
                  key: "disconnect",
                  value: function () {
                    this.output.disconnect();
                  },
                },
              ]),
              t
            );
          })();
        function de(t) {
          for (
            var e = window.atob(t), n = e.length, i = new Uint8Array(n), r = 0;
            r < n;
            r++
          )
            i[r] = e.charCodeAt(r);
          return i.buffer;
        }
        var pe = /\[data(-mcid="+\w+")+\]/g,
          he = (function () {
            function t() {
              i(this, t), (this.subscribers = []);
            }
            return (
              o(t, [
                {
                  key: "sub",
                  value: function (t, e) {
                    this.subscribers.push(e);
                  },
                },
                {
                  key: "pub",
                  value: function (t) {
                    for (var e = 0; e < this.subscribers.length; e++)
                      this.subscribers[e](t);
                  },
                },
              ]),
              t
            );
          })(),
          fe = (function () {
            function t() {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = arguments.length > 1 ? arguments[1] : void 0;
              i(this, t),
                (this.totalSources = n.length),
                (this.audioSources = {}),
                (this.elementsByMCID = {});
              for (
                var o = function (t) {
                    var i = n[t],
                      o = {
                        mcid: i.mcid || _t(),
                        id: i.id,
                        src: i.src,
                        classes: i.classes || [],
                        base64: i.base64 || !1,
                        pubSub: new he(),
                        soundLoaded: !1,
                        startValues: i.startValues || {},
                      };
                    if (
                      ((e.audioSources[o.id] = o),
                      (e.elementsByMCID[o.mcid] = o),
                      i.base64)
                    )
                      gt.decodeAudioData(de(i.src), function (t) {
                        e._setBuffer(o, t, r);
                      });
                    else {
                      var s = new XMLHttpRequest();
                      s.open("GET", o.src, !0),
                        (s.responseType = "arraybuffer"),
                        (e.soundLoaded = !1),
                        (s.onload = function () {
                          gt.decodeAudioData(
                            s.response,
                            function (t) {
                              e._setBuffer(o, t, r);
                            },
                            e.onError
                          );
                        }),
                        s.send();
                    }
                  },
                  s = 0;
                s < n.length;
                s++
              )
                o(s);
              this.context = {
                document: document,
                window: window,
                rootElement: document.body,
                unmount: function () {},
                masterNode: r,
                audioContext: gt,
                getElements: this.getElements.bind(this),
                getMCID: this.getMCID.bind(this),
                setMCID: this.setMCID.bind(this),
                getElementSelectorByMCID: this.getElementSelectorByMCID.bind(
                  this
                ),
                getElementByMCID: this.getElementByMCID.bind(this),
              };
            }
            return (
              o(t, [
                {
                  key: "_setBuffer",
                  value: function (t, e, n) {
                    (t.soundLoaded = !0),
                      (t.buffer = e),
                      (t.effectsAudioNode = new ue()),
                      t.effectsAudioNode.connect(n.input),
                      t.pubSub.pub();
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.elementsByMCID,
                      t
                    )
                      ? this.elementsByMCID[t]
                      : null;
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if ("~" !== t.charAt(0)) {
                      if (pe.exec(t)) {
                        var e = t.split('"')[1];
                        return this.elementsByMCID[e];
                      }
                      return [];
                    }
                    if ("#" === (t = t.substr(1)).charAt(0))
                      return Object.prototype.hasOwnProperty.call(
                        this.audioSources,
                        t.substr(1)
                      )
                        ? [this.audioSources[t.substr(1)]]
                        : [];
                    if ("." === t.charAt(0)) {
                      var n = t.substr(1),
                        i = [];
                      for (var r in this.audioSources)
                        r.classes.indexOf(n) >= 0 && i.push(r);
                      return i;
                    }
                  },
                },
                {
                  key: "getMCID",
                  value: function (t) {
                    return t.mcid;
                  },
                },
                {
                  key: "setMCID",
                  value: function (t, e) {
                    t.mcid = e;
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (t) {
                    return '[data-mcid="'.concat(t, '"]');
                  },
                },
              ]),
              t
            );
          })(),
          me = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r) {
              var o;
              i(this, n),
                ((o = e.call(this, t, r)).audioNode = new ue()),
                o.audioNode.connect(gt.destination);
              var s = new fe(o.props.audioSources, o.audioNode);
              return (
                (o.ownContext = l({}, s.context, { isHostedClip: !0 })),
                (o.audioClip = !0),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (t, e, i) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    v(u(n.prototype), "onProgress", this).call(
                      this,
                      t,
                      e,
                      this.id,
                      r
                    );
                  },
                },
                {
                  key: "_onGetContextOnce",
                  value: function (t) {
                    this.audioNode.disconnect(),
                      (this.parentClipContext = t),
                      this.audioNode.connect(t.masterNode.input);
                  },
                },
                {
                  key: "lastWish",
                  value: function () {
                    this.audioNode.output.disconnect(),
                      this.audioNode.output.connect(gt.destination);
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    this.audioNode.output.gain.value = t;
                  },
                },
              ]),
              n
            );
          })(ce),
          ve = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return i(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (t) {
                    var e = this;
                    if (!this.element.soundLoaded)
                      return (
                        this.setBlock("loading sound"),
                        this.element.pubSub.sub(this.id, function () {
                          e.unblock();
                        }),
                        !1
                      );
                    if ("gain" === this.attributeKey) {
                      var n =
                        (this.targetValue - this.getInitialValue()) * t +
                        this.getInitialValue();
                      this.element.effectsAudioNode.gainNode.gain.value = n;
                    } else if ("pan" === this.attributeKey) {
                      var i =
                        (this.targetValue - this.getInitialValue()) * t +
                        this.getInitialValue();
                      this.element.effectsAudioNode.pannerNode.pan.value = i;
                    }
                  },
                },
                {
                  key: "getScratchValue",
                  value: function () {
                    return "pan" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "pan"
                        )
                        ? this.element.startValues.pan
                        : 0
                      : "gain" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "gain"
                        )
                        ? this.element.startValues.gain
                        : 1
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(Zt),
          ge = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var r;
              return (
                i(this, n),
                ((r = e.call(this, t)).playingIncidentsIds = []),
                (r.transitioned = !1),
                t.subscribe(_t(), r._stateChange.bind(p(r)), 0, 1, !0),
                r
              );
            }
            return (
              o(n, [
                {
                  key: "_stateChange",
                  value: function (t, e) {
                    ("paused" !== e && "idle" !== e && "blocked" !== e) ||
                      (this._stopPlayingIncidents(), (this.transitioned = !0));
                  },
                },
                {
                  key: "_stopPlayingIncidents",
                  value: function () {
                    for (var t = 0; t < this.playingIncidentsIds.length; t++) {
                      var e = this.playingIncidentsIds[t].split("|||");
                      this._incidentById(e[0]).stop(e[1]);
                    }
                    this.playingIncidentsIds = [];
                  },
                },
                {
                  key: "moveTo",
                  value: function (t, e, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if ("transitional" === this.runTimeInfo.state || i) {
                      (this.transitioned = !0), this._stopPlayingIncidents();
                      for (var r = 0; r < this.incidents.length; r++) {
                        var o = this.incidents[r],
                          s = this._incidentById(o.id);
                        e < o.millisecond
                          ? s.onProgress(0, 0, n, !0)
                          : e > o.millisecond + s.duration
                          ? s.onProgress(1, s.duration, n, !0)
                          : s.onProgress(
                              (e - o.millisecond) / s.duration,
                              e - o.millisecond,
                              n,
                              !0
                            );
                      }
                    } else {
                      this.transitioned && ((t = 0), (this.transitioned = !1));
                      for (
                        var a = this,
                          l = $t(this.incidents, function (n) {
                            return (
                              n.millisecond >= t &&
                              n.millisecond < e &&
                              n.millisecond + a._incidentById(n.id).duration > e
                            );
                          }),
                          c = $t(this.incidents, function (n) {
                            return (
                              a._incidentById(n.id).duration + n.millisecond >
                                t &&
                              a._incidentById(n.id).duration + n.millisecond <=
                                e
                            );
                          }),
                          u = 0;
                        u < l.length;
                        u++
                      ) {
                        var d = l[u],
                          p = this._incidentById(d.id),
                          h = (e - d.millisecond) / p.duration >= 1,
                          f = h ? 1 : (e - d.millisecond) / p.duration,
                          m = h ? p.duration : e - d.millisecond,
                          v = p.play(f, m, n);
                        !0 === v &&
                          this.playingIncidentsIds.push(
                            "".concat(d.id).concat("|||").concat(n)
                          );
                      }
                      for (var g = 0; g < c.length; g++) {
                        var y = c[g],
                          b = this._incidentById(y.id);
                        b.stop(n);
                        var x = this.playingIncidentsIds.indexOf(
                          "".concat(y.id).concat("|||").concat(n)
                        );
                        x > -1 && this.playingIncidentsIds.splice(x, 1);
                      }
                      this.runTimeInfo.currentMillisecond = e;
                    }
                  },
                },
              ]),
              n
            );
          })(Ft),
          ye = _(null, function (t) {
            return {
              F: function e() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                i(this, e),
                  t(this),
                  (this.attrs = n),
                  (this.props = r),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = r.id || _t()),
                  (this.modelId = r.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = ge),
                  (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = r.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = r.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, r);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return this.context.getElementByMCID(this.mcid);
                  },
                },
                {
                  kind: "method",
                  decorators: [Yt],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (t) {
                      console.log(t), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    Et.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    Et.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e) {},
                },
                {
                  kind: "method",
                  key: "play",
                  value: function (t) {
                    return !0;
                  },
                },
                { kind: "method", key: "stop", value: function () {} },
                {
                  kind: "method",
                  decorators: [Vt],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Nt],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          be = {
            npm_name: "@kissmybutton/motorcortex-soundsystem",
            incidents: [
              {
                exportable: (function (t) {
                  c(n, t);
                  var e = f(n);
                  function n() {
                    return i(this, n), e.apply(this, arguments);
                  }
                  return (
                    o(n, [
                      {
                        key: "play",
                        value: function (t) {
                          var e = this;
                          if (!this.element.soundLoaded)
                            return (
                              this.setBlock("loading sound"),
                              this.element.pubSub.sub(this.id, function () {
                                e.unblock();
                              }),
                              !1
                            );
                          var n = 0;
                          return (
                            Object.prototype.hasOwnProperty.call(
                              this.props,
                              "startFrom"
                            ) && (n = this.props.startFrom),
                            (this.audioNode = gt.createBufferSource()),
                            (this.audioNode.buffer = this.element.buffer),
                            this.audioNode.connect(
                              this.element.effectsAudioNode.input
                            ),
                            this.audioNode.start(0, (t + n) / 1e3),
                            !0
                          );
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          this.audioNode.stop();
                        },
                      },
                    ]),
                    n
                  );
                })(ye),
                name: "AudioPlayback",
              },
              { exportable: ve, name: "AudioEffect" },
            ],
            Clip: me,
            audio: "only",
          },
          xe = ct(function (t, e) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /^\s+|\s+$/g,
              u = /\\(\\)?/g,
              d = /^[-+]0x[0-9a-f]+$/i,
              p = /^0b[01]+$/i,
              h = /^\[object .+?Constructor\]$/,
              f = /^0o[0-7]+$/i,
              m = /^(?:0|[1-9]\d*)$/,
              v = {};
            (v["[object Float32Array]"] = v["[object Float64Array]"] = v[
              "[object Int8Array]"
            ] = v["[object Int16Array]"] = v["[object Int32Array]"] = v[
              "[object Uint8Array]"
            ] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v[
              "[object Uint32Array]"
            ] = !0),
              (v[n] = v["[object Array]"] = v["[object ArrayBuffer]"] = v[
                "[object Boolean]"
              ] = v["[object DataView]"] = v["[object Date]"] = v[
                "[object Error]"
              ] = v["[object Function]"] = v[i] = v["[object Number]"] = v[
                r
              ] = v["[object RegExp]"] = v[o] = v["[object String]"] = v[
                "[object WeakMap]"
              ] = !1);
            var g = parseInt,
              y = "object" == typeof at && at && at.Object === Object && at,
              b =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              x = y || b || Function("return this")(),
              w = e && !e.nodeType && e,
              k = w && t && !t.nodeType && t,
              _ = k && k.exports === w,
              C = _ && y.process,
              I = (function () {
                try {
                  return C && C.binding && C.binding("util");
                } catch (t) {}
              })(),
              O = I && I.isTypedArray;
            function E(t, e) {
              for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function P(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, i) {
                  n[++e] = [i, t];
                }),
                n
              );
            }
            function j(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var M,
              S,
              B,
              A = Array.prototype,
              T = Function.prototype,
              L = Object.prototype,
              D = x["__core-js_shared__"],
              V = T.toString,
              z = L.hasOwnProperty,
              N = (M = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + M
                : "",
              R = L.toString,
              $ = RegExp(
                "^" +
                  V.call(z)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              H = _ ? x.Buffer : void 0,
              F = x.Symbol,
              G = x.Uint8Array,
              W = L.propertyIsEnumerable,
              U = A.splice,
              q = F ? F.toStringTag : void 0,
              J = Object.getOwnPropertySymbols,
              K = H ? H.isBuffer : void 0,
              X =
                ((S = Object.keys),
                (B = Object),
                function (t) {
                  return S(B(t));
                }),
              Q = Math.max,
              Y = jt(x, "DataView"),
              Z = jt(x, "Map"),
              tt = jt(x, "Promise"),
              et = jt(x, "Set"),
              nt = jt(x, "WeakMap"),
              it = jt(Object, "create"),
              rt = zt(Y),
              ot = zt(Z),
              st = zt(tt),
              lt = zt(et),
              ct = zt(nt),
              ut = F ? F.prototype : void 0,
              dt = ut ? ut.valueOf : void 0,
              pt = ut ? ut.toString : void 0;
            function ht(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function ft(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function mt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function vt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new mt(); ++e < n; ) this.add(t[e]);
            }
            function gt(t) {
              var e = (this.__data__ = new ft(t));
              this.size = e.size;
            }
            function yt(t, e) {
              for (var n = t.length; n--; ) if (Rt(t[n][0], e)) return n;
              return -1;
            }
            function bt(t, e) {
              for (var n = 0, i = (e = It(e, t)).length; null != t && n < i; )
                t = t[Vt(e[n++])];
              return n && n == i ? t : void 0;
            }
            function xt(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : q && q in Object(t)
                ? (function (t) {
                    var e = z.call(t, q),
                      n = t[q];
                    try {
                      t[q] = void 0;
                      var i = !0;
                    } catch (t) {}
                    var r = R.call(t);
                    return i && (e ? (t[q] = n) : delete t[q]), r;
                  })(t)
                : (function (t) {
                    return R.call(t);
                  })(t);
            }
            function wt(t, e) {
              return null != t && e in Object(t);
            }
            function kt(t) {
              return qt(t) && xt(t) == n;
            }
            function _t(t, e, s, a, l) {
              return (
                t === e ||
                (null == t || null == e || (!qt(t) && !qt(e))
                  ? t != t && e != e
                  : (function (t, e, s, a, l, c) {
                      var u = Ht(t),
                        d = Ht(e),
                        p = u ? "[object Array]" : St(t),
                        h = d ? "[object Array]" : St(e),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && Ft(t)) {
                        if (!Ft(e)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new gt()),
                          u || Kt(t)
                            ? Ot(t, e, s, a, l, c)
                            : (function (t, e, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !a(new G(t), new G(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Rt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case i:
                                    var c = P;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = j), t.size != e.size && !u))
                                      return !1;
                                    var d = l.get(t);
                                    if (d) return d == e;
                                    (r |= 2), l.set(t, e);
                                    var p = Ot(c(t), c(e), r, s, a, l);
                                    return l.delete(t), p;
                                  case "[object Symbol]":
                                    if (dt) return dt.call(t) == dt.call(e);
                                }
                                return !1;
                              })(t, e, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && z.call(t, "__wrapped__"),
                          y = m && z.call(e, "__wrapped__");
                        if (g || y) {
                          var b = g ? t.value() : t,
                            x = y ? e.value() : e;
                          return c || (c = new gt()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new gt()),
                        (function (t, e, n, i, r, o) {
                          var s = 1 & n,
                            a = Et(t),
                            l = a.length;
                          if (l != Et(e).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in e : z.call(e, u))) return !1;
                          }
                          var d = o.get(t);
                          if (d && o.get(e)) return d == e;
                          var p = !0;
                          o.set(t, e), o.set(e, t);
                          for (var h = s; ++c < l; ) {
                            var f = t[(u = a[c])],
                              m = e[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, e, t, o)
                                : i(f, m, u, t, e, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = t.constructor,
                              y = e.constructor;
                            g == y ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(t), o.delete(e), p;
                        })(t, e, s, a, l, c))
                      );
                    })(t, e, s, a, _t, l))
              );
            }
            function Ct(t) {
              if ("string" == typeof t) return t;
              if (Ht(t))
                return (
                  (function (t, e) {
                    for (
                      var n = -1, i = null == t ? 0 : t.length, r = Array(i);
                      ++n < i;

                    )
                      r[n] = e(t[n], n, t);
                    return r;
                  })(t, Ct) + ""
                );
              if (Jt(t)) return pt ? pt.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function It(t, e) {
              return Ht(t)
                ? t
                : At(t, e)
                ? [t]
                : Dt(
                    (function (t) {
                      return null == t ? "" : Ct(t);
                    })(t)
                  );
            }
            function Ot(t, e, n, i, r, o) {
              var s = 1 & n,
                a = t.length,
                l = e.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var u = -1,
                d = !0,
                p = 2 & n ? new vt() : void 0;
              for (o.set(t, e), o.set(e, t); ++u < a; ) {
                var h = t[u],
                  f = e[u];
                if (i) var m = s ? i(f, h, u, e, t, o) : i(h, f, u, t, e, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !E(e, function (t, e) {
                      if (((s = e), !p.has(s) && (h === t || r(h, t, n, i, o))))
                        return p.push(e);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), d;
            }
            function Et(t) {
              return (function (t, e, n) {
                var i = e(t);
                return Ht(t)
                  ? i
                  : (function (t, e) {
                      for (var n = -1, i = e.length, r = t.length; ++n < i; )
                        t[r + n] = e[n];
                      return t;
                    })(i, n(t));
              })(t, Xt, Mt);
            }
            function Pt(t, e) {
              var n,
                i,
                r = t.__data__;
              return (
                "string" == (i = typeof (n = e)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof e ? "string" : "hash"]
                : r.map;
            }
            function jt(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !Ut(t) ||
                    (function (t) {
                      return !!N && N in t;
                    })(t)
                  ) && (Gt(t) ? $ : h).test(zt(t))
                );
              })(n)
                ? n
                : void 0;
            }
            (ht.prototype.clear = function () {
              (this.__data__ = it ? it(null) : {}), (this.size = 0);
            }),
              (ht.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (ht.prototype.get = function (t) {
                var e = this.__data__;
                if (it) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return z.call(e, t) ? e[t] : void 0;
              }),
              (ht.prototype.has = function (t) {
                var e = this.__data__;
                return it ? void 0 !== e[t] : z.call(e, t);
              }),
              (ht.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = it && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (ft.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ft.prototype.delete = function (t) {
                var e = this.__data__,
                  n = yt(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : U.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ft.prototype.get = function (t) {
                var e = this.__data__,
                  n = yt(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (ft.prototype.has = function (t) {
                return yt(this.__data__, t) > -1;
              }),
              (ft.prototype.set = function (t, e) {
                var n = this.__data__,
                  i = yt(n, t);
                return (
                  i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this
                );
              }),
              (mt.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new ht(),
                    map: new (Z || ft)(),
                    string: new ht(),
                  });
              }),
              (mt.prototype.delete = function (t) {
                var e = Pt(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (mt.prototype.get = function (t) {
                return Pt(this, t).get(t);
              }),
              (mt.prototype.has = function (t) {
                return Pt(this, t).has(t);
              }),
              (mt.prototype.set = function (t, e) {
                var n = Pt(this, t),
                  i = n.size;
                return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
              }),
              (vt.prototype.add = vt.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (vt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (gt.prototype.clear = function () {
                (this.__data__ = new ft()), (this.size = 0);
              }),
              (gt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (gt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (gt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (gt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof ft) {
                  var i = n.__data__;
                  if (!Z || i.length < 199)
                    return i.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new mt(i);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var Mt = J
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        (function (t, e) {
                          for (
                            var n = -1,
                              i = null == t ? 0 : t.length,
                              r = 0,
                              o = [];
                            ++n < i;

                          ) {
                            var s = t[n];
                            e(s) && (o[r++] = s);
                          }
                          return o;
                        })(J(t), function (e) {
                          return W.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              St = xt;
            function Bt(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && m.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function At(t, e) {
              if (Ht(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !Jt(t)
                ) ||
                a.test(t) ||
                !s.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function Tt(t) {
              return t == t && !Ut(t);
            }
            function Lt(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((Y && "[object DataView]" != St(new Y(new ArrayBuffer(1)))) ||
              (Z && St(new Z()) != i) ||
              (tt && "[object Promise]" != St(tt.resolve())) ||
              (et && St(new et()) != o) ||
              (nt && "[object WeakMap]" != St(new nt()))) &&
              (St = function (t) {
                var e = xt(t),
                  n = e == r ? t.constructor : void 0,
                  s = n ? zt(n) : "";
                if (s)
                  switch (s) {
                    case rt:
                      return "[object DataView]";
                    case ot:
                      return i;
                    case st:
                      return "[object Promise]";
                    case lt:
                      return o;
                    case ct:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Dt = (function (t) {
              var e = Nt(
                  function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(l, function (t, n, i, r) {
                        e.push(i ? r.replace(u, "$1") : n || t);
                      }),
                      e
                    );
                  },
                  function (t) {
                    return 500 === n.size && n.clear(), t;
                  }
                ),
                n = e.cache;
              return e;
            })();
            function Vt(t) {
              if ("string" == typeof t || Jt(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function zt(t) {
              if (null != t) {
                try {
                  return V.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function Nt(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = e ? e.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = t.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (Nt.Cache || mt)()), n;
            }
            function Rt(t, e) {
              return t === e || (t != t && e != e);
            }
            Nt.Cache = mt;
            var $t = kt(
                (function () {
                  return arguments;
                })()
              )
                ? kt
                : function (t) {
                    return qt(t) && z.call(t, "callee") && !W.call(t, "callee");
                  },
              Ht = Array.isArray,
              Ft =
                K ||
                function () {
                  return !1;
                };
            function Gt(t) {
              if (!Ut(t)) return !1;
              var e = xt(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function Wt(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function Ut(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function qt(t) {
              return null != t && "object" == typeof t;
            }
            function Jt(t) {
              return (
                "symbol" == typeof t || (qt(t) && "[object Symbol]" == xt(t))
              );
            }
            var Kt = O
              ? (function (t) {
                  return function (e) {
                    return t(e);
                  };
                })(O)
              : function (t) {
                  return qt(t) && Wt(t.length) && !!v[xt(t)];
                };
            function Xt(t) {
              return null != (e = t) && Wt(e.length) && !Gt(e)
                ? (function (t, e) {
                    var n = Ht(t),
                      i = !n && $t(t),
                      r = !n && !i && Ft(t),
                      o = !n && !i && !r && Kt(t),
                      s = n || i || r || o,
                      a = s
                        ? (function (t, e) {
                            for (var n = -1, i = Array(t); ++n < t; )
                              i[n] = e(n);
                            return i;
                          })(t.length, String)
                        : [],
                      l = a.length;
                    for (var c in t)
                      (!e && !z.call(t, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Bt(c, l))) ||
                        a.push(c);
                    return a;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || L))
                    )
                      return X(t);
                    var e,
                      n,
                      i = [];
                    for (var r in Object(t))
                      z.call(t, r) && "constructor" != r && i.push(r);
                    return i;
                  })(t);
              var e;
            }
            function Qt(t) {
              return t;
            }
            t.exports = function (t, e, n) {
              var i = null == t ? 0 : t.length;
              if (!i) return -1;
              var r,
                o,
                s =
                  null == n
                    ? 0
                    : ((o =
                        (r = (function (t) {
                          return t
                            ? (t = (function (t) {
                                if ("number" == typeof t) return t;
                                if (Jt(t)) return NaN;
                                if (Ut(t)) {
                                  var e =
                                    "function" == typeof t.valueOf
                                      ? t.valueOf()
                                      : t;
                                  t = Ut(e) ? e + "" : e;
                                }
                                if ("string" != typeof t)
                                  return 0 === t ? t : +t;
                                t = t.replace(c, "");
                                var n = p.test(t);
                                return n || f.test(t)
                                  ? g(t.slice(2), n ? 2 : 8)
                                  : d.test(t)
                                  ? NaN
                                  : +t;
                              })(t)) ===
                                1 / 0 || t === -1 / 0
                              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                              : t == t
                              ? t
                              : 0
                            : 0 === t
                            ? t
                            : 0;
                        })(n)) % 1),
                      r == r ? (o ? r - o : r) : 0);
              return (
                s < 0 && (s = Q(i + s, 0)),
                (function (t, e, n, i) {
                  for (var r = t.length, o = n + -1; ++o < r; )
                    if (e(t[o], o, t)) return o;
                  return -1;
                })(
                  t,
                  (function (t) {
                    return "function" == typeof t
                      ? t
                      : null == t
                      ? Qt
                      : "object" == typeof t
                      ? Ht(t)
                        ? (function (t, e) {
                            return At(t) && Tt(e)
                              ? Lt(Vt(t), e)
                              : function (n) {
                                  var i = (function (t, e, n) {
                                    var i = null == t ? void 0 : bt(t, e);
                                    return void 0 === i ? void 0 : i;
                                  })(n, t);
                                  return void 0 === i && i === e
                                    ? (function (t, e) {
                                        return (
                                          null != t &&
                                          (function (t, e, n) {
                                            for (
                                              var i = -1,
                                                r = (e = It(e, t)).length,
                                                o = !1;
                                              ++i < r;

                                            ) {
                                              var s = Vt(e[i]);
                                              if (!(o = null != t && n(t, s)))
                                                break;
                                              t = t[s];
                                            }
                                            return o || ++i != r
                                              ? o
                                              : !!(r =
                                                  null == t ? 0 : t.length) &&
                                                  Wt(r) &&
                                                  Bt(s, r) &&
                                                  (Ht(t) || $t(t));
                                          })(t, e, wt)
                                        );
                                      })(n, t)
                                    : _t(e, i, 3);
                                };
                          })(t[0], t[1])
                        : (function (t) {
                            var e = (function (t) {
                              for (var e = Xt(t), n = e.length; n--; ) {
                                var i = e[n],
                                  r = t[i];
                                e[n] = [i, r, Tt(r)];
                              }
                              return e;
                            })(t);
                            return 1 == e.length && e[0][2]
                              ? Lt(e[0][0], e[0][1])
                              : function (n) {
                                  return (
                                    n === t ||
                                    (function (t, e, n, i) {
                                      var r = n.length,
                                        o = r;
                                      if (null == t) return !o;
                                      for (t = Object(t); r--; ) {
                                        var s = n[r];
                                        if (
                                          s[2] ? s[1] !== t[s[0]] : !(s[0] in t)
                                        )
                                          return !1;
                                      }
                                      for (; ++r < o; ) {
                                        var a = (s = n[r])[0],
                                          l = t[a],
                                          c = s[1];
                                        if (s[2]) {
                                          if (void 0 === l && !(a in t))
                                            return !1;
                                        } else {
                                          var u,
                                            d = new gt();
                                          if (
                                            !(void 0 === u
                                              ? _t(c, l, 3, i, d)
                                              : u)
                                          )
                                            return !1;
                                        }
                                      }
                                      return !0;
                                    })(n, 0, e)
                                  );
                                };
                          })(t)
                      : At((e = t))
                      ? ((n = Vt(e)),
                        function (t) {
                          return null == t ? void 0 : t[n];
                        })
                      : (function (t) {
                          return function (e) {
                            return bt(e, t);
                          };
                        })(e);
                    var e, n;
                  })(e),
                  s
                )
              );
            };
          }),
          we = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              i(this, t),
                (this.realArray = []),
                null != e && (this.realArray = e);
            }
            return (
              o(t, [
                {
                  key: "_hasOwnProperty",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.realArray,
                      t
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (t) {
                    return this.realArray[t];
                  },
                },
                {
                  key: "_set",
                  value: function (t, e) {
                    this.realArray[t] = e;
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    return Object.keys(this.realArray);
                  },
                },
                {
                  key: "_delete",
                  value: function (t) {
                    return delete this.realArray[t];
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    return this.realArray;
                  },
                },
              ]),
              t
            );
          })();
        function ke(t, e, n, i) {
          var r = !1;
          for (var o in e)
            Object.prototype.hasOwnProperty.call(n, o) ||
              ((r = !0), (i[o] = e[o]));
          return (t.animatedAttributeValue = i), r;
        }
        function _e(t, e, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = t[i],
            s = e._get(o.id);
          s.setInitialValue(n, r);
          var a = ke(
            s,
            s.initialValue,
            s.originalAnimatedAttributeValue,
            JSON.parse(JSON.stringify(s.animatedAttributeValue))
          );
          a && (s.lastWish(), s.onGetContext()),
            a &&
              i < t.length - 1 &&
              _e(t, e, s.animatedAttributeValue, i + 1, !1);
        }
        var Ce = (function () {
            function t(e) {
              i(this, t),
                (this.originalArray = e),
                (this.extraArray = {}),
                (this.addedKeys = []),
                (this.removedKeys = []);
            }
            return (
              o(t, [
                {
                  key: "_hasOwnProperty",
                  value: function (t) {
                    return (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      ) ||
                      Object.prototype.hasOwnProperty.call(this.extraArray, t)
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      t
                    )
                      ? this.extraArray[t]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          t
                        )
                      ? ((this.extraArray[t] = l({}, this.originalArray[t])),
                        this.extraArray[t])
                      : void 0;
                  },
                },
                {
                  key: "_set",
                  value: function (t, e) {
                    (this.extraArray[t] = e),
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      ) || this.addedKeys.push(t);
                    var n = this.removedKeys.indexOf(t);
                    n > -1 && this.removedKeys.splice(n, 1);
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    for (
                      var t = Object.keys(this.originalArray).concat(
                          this.addedKeys
                        ),
                        e = 0;
                      e < this.removedKeys.length;
                      e++
                    ) {
                      var n = this.removedKeys.indexOf(this.removedKeys[e]);
                      t.splice(n, 1);
                    }
                    return t;
                  },
                },
                {
                  key: "_delete",
                  value: function (t) {
                    var e = this.addedKeys.indexOf(t);
                    return e > -1
                      ? (this.addedKeys.splice(e), delete this.extraArray[t])
                      : this.removedKeys.push(t);
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    for (var t in this.extraArray)
                      this.originalArray[t] = this.extraArray[t];
                    for (var e = 0; e < this.removedKeys.length; e++)
                      delete this.originalArray[this.removedKeys[e]];
                    return this.originalArray;
                  },
                },
              ]),
              t
            );
          })(),
          Ie = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return i(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      t
                    )
                      ? this.extraArray[t]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          t
                        )
                      ? this.originalArray[t]
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(Ce),
          Oe = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return i(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (t) {
                    if (
                      Object.prototype.hasOwnProperty.call(this.extraArray, t)
                    )
                      return this.extraArray[t];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      )
                    ) {
                      this.extraArray[t] = [];
                      for (var e = 0; e < this.originalArray[t].length; e++)
                        this.extraArray[t].push({
                          id: this.originalArray[t][e].id,
                          millisecond: 1 * this.originalArray[t][e].millisecond,
                        });
                      return this.extraArray[t];
                    }
                  },
                },
              ]),
              n
            );
          })(Ce),
          Ee = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              i(this, t),
                (this.lanes = new we({})),
                e.lanes && (this.lanes = e.lanes),
                (this.comboAttributes = {}),
                null != e.comboAttributes &&
                  (this.comboAttributes = e.comboAttributes),
                (this.runTimeInfo = e.runTimeInfo),
                (this.belongingLaneKeysByAnimationId = new we({})),
                e.belongingLaneKeysByAnimationId &&
                  (this.belongingLaneKeysByAnimationId =
                    e.belongingLaneKeysByAnimationId),
                (this.incidentsById = new we({})),
                e.incidentsById && (this.incidentsById = e.incidentsById);
            }
            return (
              o(t, [
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e = this.lanes._keys(), n = 0; n < e.length; n++)
                      for (
                        var i = e[n], r = this.lanes._get(i), o = 0;
                        o < r.length;
                        o++
                      )
                        r[o].millisecond = r[o].millisecond * t;
                  },
                },
                {
                  key: "createTestLanesSanbox",
                  value: function () {
                    var e = {
                      lanes: new Oe(this.lanes._export()),
                      belongingLaneKeysByAnimationId: new Ce(
                        this.belongingLaneKeysByAnimationId._export()
                      ),
                      incidentsById: new Ie(this.incidentsById._export()),
                    };
                    return (
                      this.comboAttributes &&
                        (e.comboAttributes = this.comboAttributes),
                      new t(e)
                    );
                  },
                },
                {
                  key: "getLanesCopy",
                  value: function (t) {
                    for (var e = [], n = 0; n < t.length; n++)
                      e.push({
                        id: t[n].id,
                        millisecond: 1 * t[n].millisecond,
                      });
                    return e;
                  },
                },
                {
                  key: "getLaneElementsClone",
                  value: function (t) {
                    return { id: t.id, millisecond: 1 * t.millisecond };
                  },
                },
                {
                  key: "applySandboxChanges",
                  value: function (t) {
                    (this.lanes = new we(t.lanes._export())),
                      (this.belongingLaneKeysByAnimationId = new we(
                        t.belongingLaneKeysByAnimationId._export()
                      )),
                      (this.incidentsById = new we(t.incidentsById._export()));
                  },
                },
                {
                  key: "getLane",
                  value: function (t, e) {
                    return this.lanes._get(It(t, e));
                  },
                },
                {
                  key: "laneExists",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      i = It(t, e);
                    return (
                      !!this.lanes._hasOwnProperty(i) ||
                      (n && this.lanes._set(i, []), !1)
                    );
                  },
                },
                {
                  key: "getOverlappingAnims",
                  value: function (t, e, n) {
                    var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : [],
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      o = this,
                      s = $t(this.lanes._get(It(e, n)), function (e) {
                        var n = t.incident.duration;
                        return (
                          null != r && (n = r),
                          e.id !== t.incident.id &&
                            i.indexOf(e.id) < 0 &&
                            ((e.millisecond >= t.millisecond &&
                              e.millisecond < n + t.millisecond) ||
                              (e.millisecond +
                                o.incidentsById._get(e.id).duration >
                                t.millisecond &&
                                e.millisecond +
                                  o.incidentsById._get(e.id).duration <=
                                  n + t.millisecond) ||
                              (e.millisecond < t.millisecond &&
                                e.millisecond +
                                  o.incidentsById._get(e.id).duration >
                                  n + t.millisecond))
                        );
                      });
                    return s;
                  },
                },
                {
                  key: "addElementToLane",
                  value: function (t, e, n, i) {
                    var r = It(t, e);
                    this.incidentsById._set(i.id, i);
                    var o = { millisecond: n, id: i.id };
                    this.laneExists(t, e, !0);
                    var s = this.lanes._get(r);
                    s.push(o),
                      (s = Ht(s, ["millisecond"])),
                      this.lanes._set(r, s),
                      this.belongingLaneKeysByAnimationId._hasOwnProperty(
                        i.id
                      ) || this.belongingLaneKeysByAnimationId._set(i.id, []),
                      this.belongingLaneKeysByAnimationId._get(i.id).push(r);
                    var a = xe(s, function (t) {
                      return t.id === i.id;
                    });
                    if (
                      (0 === a
                        ? s.length > 1
                          ? i.setInitialValue(
                              this.incidentsById._get(s[1].id).pureInitialValues
                            )
                          : i.setInitialValue()
                        : i.setInitialValue(
                            this.incidentsById._get(s[a - 1].id)
                              .animatedAttributeValue
                          ),
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        e
                      ))
                    ) {
                      var l = i.initialValue;
                      _e(s, this.incidentsById, l, a);
                    }
                    a + 1 < s.length &&
                      (this.incidentsById
                        ._get(s[a + 1].id)
                        .setInitialValue(i.animatedAttributeValue),
                      this.incidentsById._get(s[a + 1].id).gotContext &&
                        (this.incidentsById._get(s[a + 1].id).lastWish(),
                        this.incidentsById._get(s[a + 1].id).onGetContext()));
                  },
                },
                {
                  key: "updateLane",
                  value: function (t, e) {
                    for (var n = this, i = {}, r = 0; r < t.length; r++)
                      for (
                        var o = this.belongingLaneKeysByAnimationId._get(t[r]),
                          s = 0;
                        s < o.length;
                        s++
                      ) {
                        var a = o[s];
                        Object.prototype.hasOwnProperty.call(i, a) ||
                          (i[a] = {
                            animations: [],
                            lane: this.lanes._get(a),
                            laneData: wt(o[s]),
                          }),
                          i[a].animations.push(t[r]);
                      }
                    for (var l in i) {
                      for (
                        var c = i[l],
                          u = c.lane,
                          d = c.laneData,
                          p = Ht(this.getLanesCopy(u), ["millisecond"]),
                          h = Object.prototype.hasOwnProperty.call(
                            this.comboAttributes,
                            d.attribute
                          ),
                          f = 0;
                        f < u.length;
                        f++
                      )
                        c.animations.indexOf(u[f].id) >= 0 &&
                          (u[f].millisecond += e);
                      var m = Ht(u, ["millisecond"]);
                      this.lanes._set(l, m), (u = m);
                      for (
                        var v = function (t) {
                            var e = c.animations[t],
                              i = xe(p, function (t) {
                                return t.id === e;
                              }),
                              r = xe(u, function (t) {
                                return t.id === e;
                              }),
                              o = n.incidentsById._get(u[r].id);
                            if (i !== r || r > 1) {
                              if (i + 1 < u.length)
                                if (0 === i)
                                  h
                                    ? _e(
                                        u,
                                        n.incidentsById,
                                        o.pureInitialValues,
                                        0,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(p[1].id)
                                        .setInitialValue(o.pureInitialValues),
                                      n.incidentsById
                                        ._get(p[1].id)
                                        .onGetContext());
                                else if (h) {
                                  var s = r > i ? i : r;
                                  _e(
                                    u,
                                    n.incidentsById,
                                    n.incidentsById._get(p[i - 1].id)
                                      .animatedAttributeValue,
                                    s,
                                    !0
                                  );
                                } else
                                  n.incidentsById
                                    ._get(p[i + 1].id)
                                    .setInitialValue(
                                      n.incidentsById._get(p[i - 1].id)
                                        .animatedAttributeValue
                                    ),
                                    n.incidentsById
                                      ._get(p[i + 1].id)
                                      .onGetContext();
                              0 === r
                                ? h
                                  ? _e(
                                      u,
                                      n.incidentsById,
                                      n.incidentsById._get(p[0].id)
                                        .pureInitialValues,
                                      r,
                                      !0
                                    )
                                  : (o.setInitialValue(
                                      n.incidentsById._get(p[0].id)
                                        .pureInitialValues
                                    ),
                                    o.onGetContext())
                                : h
                                ? _e(
                                    u,
                                    n.incidentsById,
                                    n.incidentsById._get(u[r - 1].id)
                                      .animatedAttributeValue,
                                    r,
                                    !0
                                  )
                                : (o.setInitialValue(
                                    n.incidentsById._get(u[r - 1].id)
                                      .animatedAttributeValue
                                  ),
                                  o.onGetContext()),
                                r + 1 < u.length &&
                                  (h
                                    ? _e(
                                        u,
                                        n.incidentsById,
                                        o.animatedAttributeValue,
                                        r + 1,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(u[r + 1].id)
                                        .setInitialValue(
                                          o.animatedAttributeValue
                                        ),
                                      n.incidentsById
                                        ._get(u[r + 1].id)
                                        .onGetContext()));
                            }
                          },
                          g = 0;
                        g < c.animations.length;
                        g++
                      )
                        v(g);
                    }
                  },
                },
                {
                  key: "deleteAnimations",
                  value: function (t) {
                    for (var e = {}, n = 0; n < t.length; n++) {
                      for (
                        var i = t[n],
                          r = this.belongingLaneKeysByAnimationId._get(i),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        for (
                          var s = this.lanes._get(r[o]), a = -1, c = 0;
                          c < s.length;
                          c++
                        )
                          if (s[c].id === i) {
                            a = c;
                            break;
                          }
                        for (
                          var u = l({}, s[a]),
                            d = this.incidentsById._get(u.id),
                            p = wt(r[o]),
                            h = [],
                            f = 0;
                          f < s.length;
                          f++
                        )
                          s[f].id !== i && h.push(s[f]);
                        this.lanes._set(r[o], h),
                          0 === (s = this.lanes._get(r[o])).length
                            ? (d.onProgress(0, 0),
                              this.lanes._delete(r[o]),
                              Object.prototype.hasOwnProperty.call(e, r[o]) &&
                                delete e[r[o]])
                            : ((e[r[o]] = wt(r[o])),
                              a < s.length &&
                                !1 !==
                                  this.incidentsById._get(u.id)
                                    .pureInitialValues &&
                                (Object.prototype.hasOwnProperty.call(
                                  this.comboAttributes,
                                  p.attribute
                                )
                                  ? _e(
                                      s,
                                      this.incidentsById,
                                      this.incidentsById._get(u.id)
                                        .pureInitialValues,
                                      a,
                                      !0
                                    )
                                  : (this.incidentsById
                                      ._get(s[a].id)
                                      .setInitialValue(
                                        this.incidentsById._get(u.id)
                                          .pureInitialValues
                                      ),
                                    this.incidentsById
                                      ._get(s[a].id)
                                      .onGetContext())));
                      }
                      this.belongingLaneKeysByAnimationId._delete(t[n]);
                    }
                    return e;
                  },
                },
                {
                  key: "recalcScratchValues",
                  value: function (t) {
                    for (var e = this.lanes._keys(), n = 0; n < e.length; n++) {
                      var i = e[n],
                        r = this.lanes._get(i);
                      if (r.length > 0) {
                        var o = this.incidentsById._get(r[0].id),
                          s = o.getScratchValue(t),
                          a = wt(i);
                        Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          a.attribute
                        )
                          ? _e(r, this.incidentsById, s, 0, !0)
                          : o.setInitialValue(s),
                          o.lastWish(),
                          o.onGetContext();
                      }
                    }
                  },
                },
              ]),
              t
            );
          })(),
          Pe = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var r;
              return (
                i(this, n),
                ((r = e.call(this, t)).comboAttributes = {}),
                (r.fixedAttributeName = "_"),
                null != t.comboAttributes &&
                  (r.comboAttributes = t.comboAttributes),
                (r.LanesHandler = new Ee({
                  comboAttributes: r.comboAttributes,
                  runTimeInfo: r.runTimeInfo,
                })),
                r
              );
            }
            return (
              o(
                n,
                [
                  {
                    key: "setComboAttributes",
                    value: function (t) {
                      (this.comboAttributes = t),
                        (this.LanesHandler = new Ee({
                          comboAttributes: this.comboAttributes,
                        }));
                    },
                  },
                  {
                    key: "_resize",
                    value: function (t) {
                      this.LanesHandler._resize(t);
                    },
                  },
                  {
                    key: "checkAddition",
                    value: function (t) {
                      for (
                        var e = this,
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "all-or-nothing",
                          i = this.LanesHandler.createTestLanesSanbox(),
                          r = [],
                          o = [],
                          s = function (n) {
                            var s = !1,
                              a = t[n],
                              l = a.incident,
                              c = l.mcid,
                              u = l.attribute || e.fixedAttributeName;
                            i.laneExists(c, u);
                            var d = i.getOverlappingAnims(a, c, u);
                            d.length > 0 &&
                              ((s = !0),
                              o.push({
                                type:
                                  "unauthorised, overlapping incidents on the same element",
                                meta: {
                                  element_mcid: c,
                                  attribute: u,
                                  incident: a,
                                  overlappingAnims: d,
                                },
                              })),
                              s ||
                                r.push(function () {
                                  i.addElementToLane(c, u, a.millisecond, l),
                                    l._onGetContextOnce();
                                });
                          },
                          a = 0;
                        a < t.length;
                        a++
                      )
                        s(a);
                      if (o.length > 0 && "all-or-nothing" === n)
                        return { result: !1, errors: o };
                      var l = this,
                        c = function () {
                          for (var t = 0; t < r.length; t++) r[t]();
                          l.LanesHandler.applySandboxChanges(i);
                        };
                      return { result: !0, errors: o, execute: c };
                    },
                  },
                  {
                    key: "checkEdit",
                    value: function (t, e) {
                      for (var n = [], i = 0; i < t.length; i++)
                        n.push(t[i].id);
                      for (
                        var r = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          s = 0;
                        s < t.length;
                        s++
                      )
                        for (
                          var a = t[s].incident.id,
                            l = t[s].incident.mcid,
                            c =
                              t[s].incident.attribute ||
                              this.fixedAttributeName,
                            u = r.getLane(l, c),
                            d = 0;
                          d < u.length;
                          d++
                        )
                          if (u[d].id === a) {
                            var p = u[d],
                              h = r.getLaneElementsClone(p);
                            (h.millisecond += e),
                              (h.incident = r.incidentsById._get(h.id));
                            var f = r.getOverlappingAnims(h, l, c, n);
                            f.length > 0 &&
                              o.push({
                                type:
                                  "anauthorised, overlapping animations on the same element",
                                meta: {
                                  element_mcid: l,
                                  attribute: c,
                                  newAnimation: h,
                                  overlappingAnims: f,
                                },
                              });
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var m = this;
                      return {
                        result: !0,
                        execute: function () {
                          m.LanesHandler.updateLane(n, e);
                        },
                      };
                    },
                  },
                  {
                    key: "checkResizedIncidents",
                    value: function (t) {
                      for (
                        var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = [],
                          i = 0;
                        i < t.length;
                        i++
                      )
                        n.push(t[i].id);
                      for (
                        var r = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          s = 0;
                        s < t.length;
                        s++
                      )
                        for (
                          var a = this.LanesHandler.incidentsById._get(t[s].id),
                            l = a.mcid,
                            c = a.attribute || this.fixedAttributeName,
                            u = r.getLane(l, c),
                            d = { mcid: l, attribute: c },
                            p = t[s].end - t[s].start,
                            h = 0;
                          h < u.length;
                          h++
                        )
                          if (u[h].id === t[s].id) {
                            if (!e) {
                              var f = u[h],
                                m = r.getLaneElementsClone(f);
                              (m.millisecond += t[s].startDelta),
                                (m.incident = r.incidentsById._get(m.id));
                              var v = r.getOverlappingAnims(
                                m,
                                d.mcid,
                                d.attribute,
                                n,
                                p
                              );
                              v.length > 0 &&
                                o.push({
                                  type:
                                    "anauthorised overlapping animations on the same element",
                                  meta: {
                                    element_mcid: d.mcid,
                                    attribute: d.attribute,
                                    newAnimation: m,
                                    overlappingAnims: v,
                                  },
                                });
                            }
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var g = this,
                        y = function () {
                          for (var e = 0; e < t.length; e++)
                            g.LanesHandler.updateLane(
                              [t[e].id],
                              t[e].startDelta
                            );
                        };
                      return { execute: y, result: !0 };
                    },
                  },
                  {
                    key: "checkDelete",
                    value: function (t) {
                      for (var e = [], n = 0; n < t.length; n++)
                        e.push(t[n].id);
                      var i = this;
                      return {
                        result: !0,
                        execute: function () {
                          i.LanesHandler.deleteAnimations(e);
                        },
                      };
                    },
                  },
                  {
                    key: "recalcScratchValues",
                    value: function (t) {
                      this.LanesHandler.recalcScratchValues(t);
                    },
                  },
                  {
                    key: "slipIntoLaneForwards",
                    value: function (t, e, n, i, r) {
                      var o =
                          arguments.length > 5 &&
                          void 0 !== arguments[5] &&
                          arguments[5],
                        s = this,
                        a = $t(t, function (t) {
                          return (
                            (t.millisecond +
                              s.incidentsById._get(t.id).duration >=
                              n &&
                              t.millisecond +
                                s.incidentsById._get(t.id).duration <=
                                i) ||
                            (s.incidentsById._get(t.id).duration +
                              t.millisecond >=
                              i &&
                              t.millisecond <= i)
                          );
                        });
                      if (0 === a.length) {
                        if (o && 0 === n) {
                          var l = this.incidentsById._get(t[0].id);
                          l.onProgress(0, 0, r);
                        }
                        return !0;
                      }
                      var c =
                          (a = Ht(a, [
                            function (t) {
                              return t.millisecond;
                            },
                          ])).length - 1,
                        u = this.incidentsById._get(a[c].id),
                        d = a[c].millisecond;
                      if (u.duration + d <= i) u.onProgress(1, u.duration, r);
                      else {
                        var p = (i - d) / u.duration;
                        u.onProgress(p, i - d, r);
                      }
                    },
                  },
                  {
                    key: "slipToLaneBackwards",
                    value: function (t, e, n, i, r) {
                      var o = this,
                        s = $t(t, function (t) {
                          var e =
                            o.incidentsById._get(t.id).duration + t.millisecond;
                          return (
                            (e <= i && e >= n) ||
                            (t.millisecond >= n && t.millisecond <= i) ||
                            (t.millisecond < n && e > i)
                          );
                        });
                      if (0 === s.length) return !0;
                      s = Ht(s, [
                        function (t) {
                          return t.millisecond;
                        },
                      ]);
                      var a = this.incidentsById._get(s[0].id),
                        l = s[0].millisecond;
                      if (l >= i) a.onProgress(0, 0, r);
                      else {
                        var c = (i - l) / a.duration;
                        a.onProgress(c, i - l, r);
                      }
                    },
                  },
                  {
                    key: "moveTo",
                    value: function (t, e, n) {
                      for (
                        var i =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          r = this.lanes._keys(),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var s = r[o],
                          a = this.lanes._get(s),
                          l = wt(s);
                        t <= e
                          ? this.slipIntoLaneForwards(a, l, t, e, n, i)
                          : t > e && this.slipToLaneBackwards(a, l, t, e, n, i);
                      }
                    },
                  },
                  {
                    key: "lanes",
                    get: function () {
                      return this.LanesHandler.lanes;
                    },
                  },
                  {
                    key: "incidentsById",
                    get: function () {
                      return this.LanesHandler.incidentsById;
                    },
                  },
                ],
                [
                  {
                    key: "type",
                    get: function () {
                      return "attributes";
                    },
                  },
                ]
              ),
              n
            );
          })(jt),
          je = (function () {
            function t() {
              i(this, t), (this.customEntities = {});
            }
            return (
              o(t, [
                {
                  key: "getElementByMCID",
                  value: function (t) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.customEntities,
                        t
                      )
                    )
                      return this.customEntities[t];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.elementsByMCID,
                        t
                      )
                    )
                      return this.elementsByMCID[t];
                    var e = this.context.rootElement.querySelector(
                      this.getElementSelectorByMCID(t)
                    );
                    return (this.elementsByMCID[t] = e), e;
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if ("!" === t.charAt(0)) {
                      if ("#" === (t = t.substr(1)).charAt(0))
                        return [this.customEntities[t.substr(1)]];
                      if ("." === t.charAt(0)) {
                        var e = [];
                        for (var n in this.customEntities) {
                          var i = this.customEntities[n];
                          i.classes.indexOf(t.substr(1)) > -1 && e.push(i);
                        }
                        return e;
                      }
                    }
                    return Array.from(
                      this.context.rootElement.querySelectorAll(t)
                    );
                  },
                },
                {
                  key: "getMCID",
                  value: function (t) {
                    return !0 === t.customEntity
                      ? t.id
                      : t.getAttribute("data-motorcortex2-id");
                  },
                },
                {
                  key: "setMCID",
                  value: function (t, e) {
                    t.setAttribute("data-motorcortex2-id", e);
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      t
                    )
                      ? "!#".concat(t)
                      : "["
                          .concat("data-motorcortex2-id", '="')
                          .concat(t, '"]');
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      t
                    )
                      ? (Et.error(
                          "Clip "
                            .concat(
                              this.id,
                              " already has custom Entity with id: "
                            )
                            .concat(t)
                        ),
                        !1)
                      : ((this.customEntities[t] = {
                          id: t,
                          entity: e,
                          classes: n,
                          customEntity: !0,
                        }),
                        !0);
                  },
                },
              ]),
              t
            );
          })(),
          Me = (function (t) {
            c(r, t);
            var e = f(r);
            function r() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((i(this, r), (t = e.call(this)), !yt(o)))
                return (
                  Et.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  h(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  Et.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  Et.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              if (
                (Object.prototype.hasOwnProperty.call(o, "initParams") ||
                  Et.info("ContextHandler got null initParams"),
                !Object.prototype.hasOwnProperty.call(o, "host"))
              )
                return (
                  Et.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              t.isDOM = !0;
              var s = o.host.ownerDocument;
              if (
                !s.getElementById(
                  "@kissmybutton/motorcortex/iframeContextHandler/css"
                )
              ) {
                var a =
                    "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                  l = s.createElement("style");
                (l.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                  (l.type = "text/css");
                var c = s.head || s.getElementsByTagName("head")[0];
                l.styleSheet
                  ? (l.styleSheet.cssText = a)
                  : l.appendChild(s.createTextNode(a)),
                  c.appendChild(l);
              }
              var u = s.createElement("iframe");
              o.host.appendChild(u),
                u.setAttribute("seamless", "seamless"),
                Object.prototype.hasOwnProperty.call(o, "containerParams") &&
                  (Object.prototype.hasOwnProperty.call(
                    o.containerParams,
                    "width"
                  ) && u.setAttribute("width", o.containerParams.width),
                  Object.prototype.hasOwnProperty.call(
                    o.containerParams,
                    "height"
                  ) && u.setAttribute("height", o.containerParams.height)),
                (u.src = "");
              var d = u.contentWindow || u.contentDocument;
              d.document && (d = d.document),
                d.write(Ct(o.html, { params: o.initParams }));
              var f =
                  "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
                m = d.createElement("style");
              (m.type = "text/css"),
                m.styleSheet
                  ? (m.styleSheet.cssText =
                      Ct(o.css, { params: o.initParams }) + f)
                  : m.appendChild(s.createTextNode(o.css + f));
              var v = d.head || d.getElementsByTagName("head")[0];
              if (
                (v.appendChild(m),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var g = 0; g < o.fonts.length; g++) {
                  var y = o.fonts[g];
                  if ("google-font" === y.type) {
                    var b = d.createElement("link");
                    b.setAttribute("rel", "stylesheet"),
                      b.setAttribute("href", y.src),
                      v.appendChild(b);
                  }
                }
              return (
                (t.rootElement = u),
                d.close(),
                (t.context = {
                  document: d,
                  window: u.contentWindow || u,
                  clipContainer: u,
                  rootElement: d.body,
                  unmount: function () {
                    o.host.removeChild(u);
                  },
                  getElements: t.getElements.bind(p(t)),
                  getMCID: t.getMCID.bind(p(t)),
                  setMCID: t.setMCID.bind(p(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    p(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(p(t)),
                  setCustomEntity: t.setCustomEntity.bind(p(t)),
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return r;
          })(je),
          Se = (function (t) {
            c(r, t);
            var e = f(r);
            function r() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((i(this, r), (t = e.call(this)), !yt(o)))
                return (
                  Et.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  h(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  Et.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  Et.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "host"))
                return (
                  Et.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  h(t, !1)
                );
              t.isDOM = !0;
              var s = o.host.attachShadow({ mode: "closed" }),
                a = document.createElement("div");
              Object.prototype.hasOwnProperty.call(o, "containerParams") &&
                (Object.prototype.hasOwnProperty.call(
                  o.containerParams,
                  "width"
                ) && (a.style.width = o.containerParams.width),
                Object.prototype.hasOwnProperty.call(
                  o.containerParams,
                  "height"
                ) && (a.style.height = o.containerParams.height)),
                (a.innerHTML = Ct("".concat(o.html, "<slot></slot>"), {
                  params: o.initParams,
                })),
                s.appendChild(a);
              var l = document.createElement("style");
              if (
                ((l.type = "text/css"),
                l.styleSheet
                  ? (l.styleSheet.cssText = Ct(o.css, { params: o.initParams }))
                  : l.appendChild(document.createTextNode(o.css)),
                s.appendChild(l),
                (t.fontTags = []),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var c = 0; c < o.fonts.length; c++) {
                  var u = o.fonts[c];
                  if ("google-font" === u.type) {
                    var d = document.createElement("link");
                    d.setAttribute("rel", "stylesheet"),
                      d.setAttribute("href", u.src),
                      document.getElementsByTagName("head")[0].appendChild(d),
                      t.fontTags.push(d);
                  }
                }
              return (
                (a.style.overflow = "hidden"),
                (t.rootElement = a),
                (t.context = {
                  document: document,
                  window: window,
                  clipContainer: t.rootElement,
                  rootElement: a,
                  unmount: function () {
                    try {
                      o.host.removeChild(s);
                      for (var t = 0; t < this.fontTags.length; t++)
                        document
                          .getElementsByTagName("head")[0]
                          .removeChild(this.fontTags[t]);
                    } catch (t) {
                      Et.warning(
                        "The element of the Clip to be removed seems not to exist any more"
                      );
                    }
                  },
                  getElements: t.getElements.bind(p(t)),
                  getMCID: t.getMCID.bind(p(t)),
                  setMCID: t.setMCID.bind(p(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    p(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(p(t)),
                  setCustomEntity: t.setCustomEntity.bind(p(t)),
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return r;
          })(je),
          Be = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              var t,
                r,
                o,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n),
                null === a ? ((r = {}), (o = s)) : ((r = s), (o = a)),
                (o = l({}, o, {
                  html: "" !== (t = e.call(this, r, o)).html ? t.html : o.html,
                  css: "" !== t.css ? t.css : o.css,
                  fonts: t.fonts.length > 0 ? t.fonts : o.fonts,
                }));
              var c = "closed";
              t.clipType = c;
              var u = new (document.head.createShadowRoot ||
              document.head.attachShadow
                ? Se
                : Me)(o);
              return (
                (t.ownContext = l({}, u.context, {
                  isHostedClip: t.isHostedClip,
                })),
                (t.iframe = u.iframeElement),
                (t.forceExportIncidents = !0),
                t.onAfterRender(),
                t
              );
            }
            return (
              o(n, [
                { key: "onAfterRender", value: function () {} },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: l({}, this.props, {
                        host: void 0,
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return this.context.setCustomEntity(t, e, n);
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(ce),
          Ae = (function (t) {
            c(r, t);
            var e = f(r);
            function r() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              i(this, r), (t = e.call(this));
              var s = l({}, o);
              if (!yt(s))
                return (
                  Et.error(
                    "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                      n(s),
                      " passed"
                    )
                  ),
                  h(t, !1)
                );
              Object.prototype.hasOwnProperty.call(s, "html") || (s.html = ""),
                (t.isDOM = !0);
              var a = document.createDocumentFragment(),
                c = document.createElement("div");
              return (
                Object.prototype.hasOwnProperty.call(s, "containerParams") &&
                  (Object.prototype.hasOwnProperty.call(s, "width") &&
                    (c.style.width = s.containerParams.width),
                  Object.prototype.hasOwnProperty.call(s, "height") &&
                    (c.style.height = s.containerParams.height)),
                (c.innerHTML = Ct(s.html, { params: s.initParams })),
                a.appendChild(c),
                (c.style.overflow = "hidden"),
                (t.rootElement = c),
                (t.context = {
                  document: document,
                  window: window,
                  clipContainer: t.rootElement,
                  rootElement: c,
                  unmount: function () {
                    s.host.removeChild(a);
                  },
                  getElements: t.getElements.bind(p(t)),
                  getMCID: t.getMCID.bind(p(t)),
                  setMCID: t.setMCID.bind(p(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    p(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(p(t)),
                  setCustomEntity: t.setCustomEntity.bind(p(t)),
                  fragment: !0,
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return r;
          })(je),
          Te = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              var t,
                r,
                o,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n),
                null === a ? ((r = {}), (o = s)) : ((r = s), (o = a)),
                (t = e.call(this, r, o));
              var c = new Ae(
                l({}, o, {
                  html: Object.prototype.hasOwnProperty.call(o, "html")
                    ? o.html
                    : t.html,
                  css: Object.prototype.hasOwnProperty.call(o, "css")
                    ? o.css
                    : t.css,
                  fonts: Object.prototype.hasOwnProperty.call(o, "fonts")
                    ? o.fonts
                    : t.fonts,
                })
              );
              return (
                (t.ownContext = l({}, c.context, { isHostedClip: !1 })),
                (t.iframe = c.iframeElement),
                (t.forceExportIncidents = !0),
                t.onDOMCLipInitialise(),
                t
              );
            }
            return (
              o(n, [
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: l({}, this.props, {
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                { key: "onDOMCLipInitialise", value: function () {} },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(ce),
          Le = (function () {
            function t() {
              i(this, t);
            }
            return (
              o(t, [
                {
                  key: "addIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "moveIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "removeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    return {};
                  },
                },
                { key: "flash", value: function () {} },
                { key: "_resize", value: function () {} },
                { key: "onProgress", value: function () {} },
                {
                  key: "duration",
                  get: function () {
                    return 0;
                  },
                },
              ]),
              t
            );
          })(),
          De = [
            {
              type: "string",
              optional: !0,
              default: "linear",
              enum: [
                "linear",
                "easeInQuad",
                "easeOutQuad",
                "easeInOutQuad",
                "easeInCubic",
                "easeOutCubic",
                "easeInOutCubic",
                "easeInQuart",
                "easeOutQuart",
                "easeInOutQuart",
                "easeInQuint",
                "easeOutQuint",
                "easeInOutQuint",
                "easeInSine",
                "easeOutSine",
                "easeInOutSine",
                "easeInExpo",
                "easeOutExpo",
                "easeInOutExpo",
                "easeInCirc",
                "easeOutCirc",
                "easeInOutCirc",
                "easeInElastic",
                "easeOutElastic",
                "easeInOutElastic",
                "easeInBack",
                "easeOutBack",
                "easeInOutBack",
                "easeInBounce",
                "easeOutBounce",
                "easeInOutBounce",
              ],
            },
            {
              type: "array",
              optional: !0,
              length: 4,
              items: { type: "number" },
            },
          ],
          Ve = { type: "string", empty: !1, trim: !0, optional: !0 },
          ze = { type: "string", empty: !1, optional: !1 },
          Ne = { type: "string", optional: !0 },
          Re = {
            type: "array",
            optional: !0,
            itams: { type: "object", props: { type: "string", url: "string" } },
          },
          $e = {
            type: "array",
            items: {
              type: "object",
              strict: !0,
              props: {
                src: "string",
                id: "string",
                mcid: { type: "string", optional: !0 },
                classes: { type: "array", optional: !0, items: "string" },
                base64: { type: "boolean", optional: !0 },
              },
            },
            optional: !0,
          },
          He = {
            props: {
              type: "object",
              props: {
                id: Ve,
                selector: l({}, ze, { optional: !0 }),
                easing: De,
                duration: {
                  type: "number",
                  optional: !1,
                  integer: !0,
                  positive: !0,
                },
                startFrom: {
                  type: "number",
                  integer: !0,
                  min: 0,
                  optional: !0,
                },
                repeats: { type: "number", integer: !0, min: 1, optional: !0 },
                hiatus: { type: "number", integer: !0, min: 0, optional: !0 },
                delay: { type: "number", integer: !0, min: 0, optional: !0 },
              },
            },
          },
          Fe = {
            type: "object",
            optional: !0,
            props: {
              width: { type: "string", optional: !0 },
              height: { type: "string", optional: !0 },
            },
          },
          Ge = { type: "string", enum: ["on", "off"], optional: !0 },
          We = {
            props: [
              {
                type: "object",
                strict: !0,
                props: {
                  id: Ve,
                  selector: l({}, ze, { optional: !0 }),
                  easing: De,
                  html: Ne,
                  css: Ne,
                  audioSources: $e,
                  audio: Ge,
                  containerParams: Fe,
                  fonts: Re,
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  id: Ve,
                  host: { type: "any", optional: !1 },
                  html: Ne,
                  css: Ne,
                  audioSources: $e,
                  audio: Ge,
                  containerParams: Fe,
                  fonts: Re,
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  root: { type: "boolean", optional: !0 },
                  id: Ve,
                  audioSources: $e,
                  audio: l({}, Ge, { enum: ["on"] }),
                },
              },
            ],
          },
          Ue = { selector: l({}, ze, { optional: !0, strict: !0 }) },
          qe = "mc.descriptive.decisionAuthority",
          Je = new RegExp(
            /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
            "gi"
          ),
          Ke = new RegExp(/^[-+]?\d+$/),
          Xe = function () {
            var t = new mt({
              messages: {
                color:
                  "The '{field}' field must be an a valid color! Actual: {actual}",
                measurement:
                  "The '{field}' must be a measurement with specs that are not met. Please check schema definition. Actual: {actual}",
              },
            });
            return (
              t.add("measurement", function (t, e, n) {
                var i = t.schema,
                  r = t.messages,
                  o = new RegExp(
                    "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                      i.units.join("|") +
                      ")$",
                    "gi"
                  ),
                  s = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
                  a = i.units.join(", ");
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(o, ")){\n          ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n        } else {\n          var numberPart = value.match("
                    )
                    .concat(s, ")[0];\n          if(")
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "min"),
                      "){\n            if("
                    )
                    .concat(i.min, " > numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n          if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "max"),
                      "){\n            if("
                    )
                    .concat(i.max, " < numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n           if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "integer"),
                      "){\n            if(!numberPart.match("
                    )
                    .concat(Ke, ")){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n        }\n        return value;\n      "
                    ),
                };
              }),
              t.add("color", function (t, e, n) {
                t.schema;
                var i = t.messages;
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        messages: i,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(
                      Je,
                      ') && [\n            "aliceblue",\n            "antiquewhite",\n            "aqua",\n            "aquamarine",\n            "azure",\n            "beige",\n            "bisque",\n            "black",\n            "blanchedalmond",\n            "blue",\n            "blueviolet",\n            "brown",\n            "burlywood",\n            "cadetblue",\n            "chartreuse",\n            "chocolate",\n            "coral",\n            "cornflowerblue",\n            "cornsilk",\n            "crimson",\n            "cyan",\n            "darkblue",\n            "darkcyan",\n            "darkgoldenrod",\n            "darkgray",\n            "darkgrey",\n            "darkgreen",\n            "darkkhaki",\n            "darkmagenta",\n            "darkolivegreen",\n            "darkorange",\n            "darkorchid",\n            "darkred",\n            "darksalmon",\n            "darkseagreen",\n            "darkslateblue",\n            "darkslategray",\n            "darkslategrey",\n            "darkturquoise",\n            "darkviolet",\n            "deeppink",\n            "deepskyblue",\n            "dimgray",\n            "dimgrey",\n            "dodgerblue",\n            "firebrick",\n            "floralwhite",\n            "forestgreen",\n            "fuchsia",\n            "gainsboro",\n            "ghostwhite",\n            "gold",\n            "goldenrod",\n            "gray",\n            "grey",\n            "green",\n            "greenyellow",\n            "honeydew",\n            "hotpink",\n            "indianred",\n            "indigo",\n            "ivory",\n            "khaki",\n            "lavender",\n            "lavenderblush",\n            "lawngreen",\n            "lemonchiffon",\n            "lightblue",\n            "lightcoral",\n            "lightcyan",\n            "lightgoldenrodyellow",\n            "lightgray",\n            "lightgrey",\n            "lightgreen",\n            "lightpink",\n            "lightsalmon",\n            "lightseagreen",\n            "lightskyblue",\n            "lightslategray",\n            "lightslategrey",\n            "lightsteelblue",\n            "lightyellow",\n            "lime",\n            "limegreen",\n            "linen",\n            "magenta",\n            "maroon",\n            "mediumaquamarine",\n            "mediumblue",\n            "mediumorchid",\n            "mediumpurple",\n            "mediumseagreen",\n            "mediumslateblue",\n            "mediumspringgreen",\n            "mediumturquoise",\n            "mediumvioletred",\n            "midnightblue",\n            "mintcream",\n            "mistyrose",\n            "moccasin",\n            "navajowhite",\n            "navy",\n            "oldlace",\n            "olive",\n            "olivedrab",\n            "orange",\n            "orangered",\n            "orchid",\n            "palegoldenrod",\n            "palegreen",\n            "paleturquoise",\n            "palevioletred",\n            "papayawhip",\n            "peachpuff",\n            "peru",\n            "pink",\n            "plum",\n            "powderblue",\n            "purple",\n            "rebeccapurple",\n            "red",\n            "rosybrown",\n            "royalblue",\n            "saddlebrown",\n            "salmon",\n            "sandybrown",\n            "seagreen",\n            "seashell",\n            "sienna",\n            "silver",\n            "skyblue",\n            "slateblue",\n            "slategray",\n            "slategrey",\n            "snow",\n            "springgreen",\n            "steelblue",\n            "tan",\n            "teal",\n            "thistle",\n            "tomato",\n            "turquoise",\n            "violet",\n            "wheat",\n            "white",\n            "whitesmoke",\n            "yellow",\n            "yellowgreen",\n          ].indexOf(value.toLowerCase()) < 0){\n          '
                    )
                    .concat(
                      this.makeError({
                        type: "color",
                        actual: "value",
                        messages: i,
                      }),
                      "\n        }\n        return value;\n      "
                    ),
                };
              }),
              t
            );
          },
          Qe = Xe();
        function Ye(t) {
          t.descriptor.value = function (t) {
            if (this.attrsValidationRules) {
              var e = JSON.parse(JSON.stringify(this.attrsValidationRules));
              Object.prototype.hasOwnProperty.call(
                this.attrsValidationRules,
                "animatedAttrs"
              ) &&
                (e.initialValues = Et.buildInitialValuesValidationRules(
                  e.animatedAttrs
                ));
              var n = Qe.validate(t, e);
              if (n.length > 0) return { result: !1, errors: n };
            }
            return !0 ===
              this.putMessageOnPipe("checkForClip", {}, qe, {
                selfExecute: !0,
                direction: St,
              }).response
              ? this.manageEditAttrProps(t, "attrs")
              : ((this.attrs = t), { result: !0 });
          };
        }
        function Ze(t) {
          t.descriptor.value = function (t) {
            var e = Et.validateProps(
              { props: t },
              this.propsValidationRules,
              this.constructor
            );
            return e.result
              ? !0 ===
                this.putMessageOnPipe("checkForClip", {}, qe, {
                  selfExecute: !0,
                  direction: St,
                }).response
                ? this.manageEditAttrProps(t, "props")
                : ((this.props = t), { result: !0 })
              : e;
          };
        }
        function tn(t) {
          t.descriptor.value = function () {
            return null !== this.props.host && void 0 !== this.props.host
              ? [this.props.host]
              : this.hasParent &&
                this.putMessageOnPipe("checkForClip", {}, qe, {
                  selfExecute: !0,
                  direction: St,
                }).response
              ? this.putMessageOnPipe(
                  "getElements",
                  { selector: this.selector() },
                  qe,
                  { selfExecute: !1, direction: St }
                ).response
              : [];
          };
        }
        function en(t) {
          t.descriptor.value = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { check: !0 };
            if (t === this.duration)
              return { result: !0, meta: { unprocessed: !0 } };
            if (t <= 0)
              return { result: !1, reason: "Size must always be > 0" };
            if (e.check && this.hasParent) {
              var n = this.putMessageOnPipe(
                "checkResize",
                { id: this.id, newSize: t, fraction: t / this.duration },
                qe,
                { selfExecute: !1, direction: St }
              );
              if (!n.response.result) return n.response;
            }
            return this.setNewDuration(t), { result: !0 };
          };
        }
        function nn(t) {
          t.descriptor.value = function () {
            return null === this.inheritedSelector
              ? Object.prototype.hasOwnProperty.call(this.props, "selector")
                ? this.props.selector
                : null
              : Object.prototype.hasOwnProperty.call(this.props, "selector")
              ? "&" === this.props.selector.charAt(0)
                ? this.inheritedSelector + this.props.selector.substring(1)
                : ""
                    .concat(this.inheritedSelector, " ")
                    .concat(this.props.selector)
              : this.inheritedSelector;
          };
        }
        var rn = _(
            null,
            function (t, e) {
              var r = (function (e) {
                c(r, e);
                var n = f(r);
                function r() {
                  var e,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  i(this, r),
                    null === s
                      ? ((e = n.call(this, o)),
                        t(p(e)),
                        (e.attrs = {}),
                        (e.props = o))
                      : ((e = n.call(this, s)),
                        t(p(e)),
                        (e.attrs = o),
                        (e.props = s));
                  var a = Et.validateProps(e.props, Ue, e.constructor);
                  return a.result
                    ? ((e.attrsValidationRules = {}),
                      (e.propsValidationRules = Ue),
                      (e._inheritedSelector = null),
                      (e.passiveAddition = !0),
                      e._buildTree(),
                      (e.passiveAddition = !1),
                      h(e))
                    : h(e, a);
                }
                return r;
              })(e);
              return {
                F: r,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return Rt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return jt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Group";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "isGroup",
                    value: function () {
                      return !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Ye],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [Ze],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [en],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [nn],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [tn],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "_buildTree",
                    value: function () {
                      this.buildTree();
                    },
                  },
                  {
                    kind: "method",
                    key: "_rebuildTree",
                    value: function () {
                      for (var t in this.children) {
                        var e = this.children[t];
                        !0 === e.leaf.passive && this.removeIncident(e.id);
                      }
                      (this.passiveAddition = !0),
                        this.buildTree(),
                        (this.passiveAddition = !1);
                    },
                  },
                  { kind: "method", key: "buildTree", value: function () {} },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (t, e) {
                      var n = this.parentNode,
                        i = n.getLeafPosition(this.id),
                        r = JSON.parse(JSON.stringify(this[e]));
                      (this[e] = t),
                        n.removeIncident(this.id),
                        this._rebuildTree();
                      var o = n.addIncident(this, i);
                      return (
                        o.result ||
                          ((this[e] = r),
                          this._rebuildTree(),
                          n.addIncident(this, i)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      v(u(r.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "get",
                    key: "inheritedSelector",
                    value: function () {
                      return this._inheritedSelector;
                    },
                  },
                  {
                    kind: "set",
                    key: "inheritedSelector",
                    value: function (t) {
                      for (var e in ((this._inheritedSelector = t),
                      this.children))
                        this.children[
                          e
                        ].leaf.inheritedSelector = this.selector();
                    },
                  },
                  {
                    kind: "get",
                    key: "selectorToPassToChildren",
                    value: function () {
                      return this.selector();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      var t = {
                        ClassName: this.constructor.ClassName,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                        incidents: {},
                        duration: this.duration,
                      };
                      for (var e in this.children) {
                        var n = this.children[e];
                        !0 !== n.leaf.passive &&
                          (t.incidents[e] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportDefinition(),
                          });
                      }
                      return t;
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      var t = {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                        incidents: {},
                      };
                      for (var e in this.children) {
                        var n = this.children[e];
                        !0 !== n.leaf.passive &&
                          (t.incidents[e] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportLiveDefinition(),
                          });
                      }
                      return t;
                    },
                  },
                  {
                    kind: "method",
                    key: "addIncident",
                    value: function (t, e) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                      if (
                        ((t.inheritedSelector = this.selectorToPassToChildren),
                        !0 === n.check)
                      ) {
                        var i = v(u(r.prototype), "checkAddition", this).call(
                          this,
                          t,
                          e
                        );
                        if (!i.result) return (t.inheritedSelector = null), i;
                        var o = this.putMessageOnPipe("checkForClip", {}, qe, {
                          selfExecute: !0,
                          direction: St,
                        });
                        if (!0 === o.response) {
                          var s = t.putMessageOnPipe(
                            "checkForInvalidSelectors",
                            {},
                            null,
                            { selfExecute: !0, direction: Bt }
                          );
                          if (s.length > 0) {
                            for (var a = [], l = 0; l < s.length; l++)
                              a.push(s[l].response);
                            return { result: !1, errors: a };
                          }
                        }
                        var c = this.putMessageOnPipe(
                          "checkAddition",
                          {
                            incident: t,
                            millisecond: e,
                            parentGroupId: this.id,
                          },
                          qe,
                          { selfExecute: !0, direction: St }
                        );
                        if (!c.response.result)
                          return (t.inheritedSelector = null), c.response;
                      }
                      !0 === this.passiveAddition && (t.passive = !0);
                      var d = this.addChild(t, e);
                      return d.result || (t.inheritedSelector = null), d;
                    },
                  },
                  {
                    kind: "method",
                    key: "moveIncident",
                    value: function (t, e) {
                      var i = t;
                      "object" === n(t) && (i = t.id);
                      var o = v(u(r.prototype), "checkEditPosition", this).call(
                        this,
                        i,
                        e
                      );
                      if (!o.result) return o;
                      var s = e - this.getLeafPosition(i);
                      if (0 === s) return { result: !0 };
                      var a = this.putMessageOnPipe(
                        "checkMove",
                        {
                          id: i,
                          millisecond: e,
                          positionDelta: s,
                          parentGroupId: this.id,
                        },
                        qe,
                        { selfExecute: !0, direction: St }
                      );
                      return a.response.result
                        ? this.editPosition(i, e)
                        : a.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "removeIncident",
                    value: function (t) {
                      var e = t;
                      "object" === n(t) && (e = t.id);
                      var i = v(u(r.prototype), "checkRemoveChild", this).call(
                        this,
                        e
                      );
                      if (!i.result) return i;
                      var o = this.putMessageOnPipe(
                        "checkDeletion",
                        { id: e, parentGroupId: this.id },
                        qe,
                        { selfExecute: !0, direction: St }
                      );
                      return o.response.result
                        ? this.removeChild(e)
                        : o.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForClip",
                    value: function (t, e) {
                      return !!this.hasParent && this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckAddition",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckMove",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckDeletion",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckResize",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                ],
              };
            },
            Dt
          ),
          on = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, r) {
              var o;
              return (
                i(this, n),
                ((o = e.call(this, t, r)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (o.listeners = {}),
                (o.previousTimeStamp = -1),
                (o.speed = 1),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "_setState",
                  value: function (t) {
                    if (t !== this.runTimeInfo.state)
                      for (var e in ((this.runTimeInfo.state = t),
                      this.putMessageOnPipe("setState", t, "Clips", {
                        selfExecute: !1,
                        direction: Bt,
                      }),
                      this.listeners))
                        this.listeners[e].funct(
                          this.runTimeInfo.currentMillisecond,
                          t
                        );
                  },
                },
                {
                  key: "handleSetState",
                  value: function (t, e) {
                    this._setState(e);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (
                      "idle" === this.runTimeInfo.state ||
                      "paused" === this.runTimeInfo.state ||
                      "armed" === this.runTimeInfo.state ||
                      "transitional" === this.runTimeInfo.state ||
                      "blocked" === this.runTimeInfo.state
                    ) {
                      if ("paused" === this.runTimeInfo.state) {
                        var n = new Date().getTime() - this.pauseMoment;
                        this.previousTimeStamp += n;
                      }
                      this._setState("playing"),
                        this.onPlay(),
                        e ||
                          window.requestAnimationFrame(function (e) {
                            t.step(e);
                          });
                    }
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    "playing" === this.runTimeInfo.state &&
                      (this._setState("paused"),
                      (this.pauseMoment = new Date().getTime()),
                      this.onWait());
                  },
                },
                {
                  key: "arm",
                  value: function () {
                    "transitional" === this.runTimeInfo.state &&
                      this._setState("armed");
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this._setState("idle"), (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._setState("transitional"),
                      (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "block",
                  value: function () {
                    this._setState("blocked"), (this.previousTimeStamp = -1);
                  },
                },
                { key: "onPlay", value: function () {} },
                { key: "onWait", value: function () {} },
                {
                  key: "playableProgress",
                  value: function (t, e) {
                    if (this.isTheRootClip) {
                      for (var n in this.listeners) {
                        var i = this.listeners[n];
                        !0 !== i.onlyOnStateChange &&
                          (Math.abs(
                            e +
                              i.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > i.threshold
                            ? (i.funct(
                                xt(e, i.roundTo),
                                this.runTimeInfo.state
                              ),
                              (i.cavaDelta = 0))
                            : (i.cavaDelta += Math.abs(
                                e - this.runTimeInfo.currentMillisecond
                              )));
                      }
                      return (
                        this.onProgress(t, e),
                        (this.runTimeInfo.currentMillisecond = e),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                {
                  key: "step",
                  value: function (t) {
                    var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if ("playing" === this.runTimeInfo.state) {
                      var n = this;
                      -1 === this.previousTimeStamp &&
                        (this.previousTimeStamp = t);
                      var i = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (i.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (i.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(i.fraction, i.milliseconds),
                        (this.previousTimeStamp = t),
                        e || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (t, e, n, i) {
                    var r =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      i || (i = 1),
                      (this.listeners[t] = {
                        funct: e,
                        threshold: n,
                        roundTo: i,
                        cavaDelta: 0,
                        onlyOnStateChange: r,
                      });
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (t) {
                    Object.prototype.hasOwnProperty.call(this.listeners, t) &&
                      delete this.listeners[t];
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (t) {
                    return (
                      !!this.isTheRootClip &&
                      (this.realClip.subscribeToDurationChange(t), !0)
                    );
                  },
                },
                {
                  key: "executionSpeed",
                  set: function (t) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(t);
                  },
                },
              ]),
              n
            );
          })(rn),
          sn = (function () {
            function t(e) {
              i(this, t),
                (this.runTimeInfo = {
                  currentMillisecond: 0,
                  state: "transitional",
                }),
                (this.id = _t()),
                (this.realClip = e.descriptiveIncident.realClip);
              var n = e.descriptiveIncident.realClip.exportConstructionArguments(),
                r = l({}, n.props, {
                  selector: void 0,
                  host: e.host,
                  id: this.id,
                });
              (this.ownClip = new e.descriptiveIncident.constructor.Incident(
                n.attrs,
                r
              )),
                e.descriptiveIncident.realClip.addContext(
                  {
                    clipId: this.id,
                    context: this.ownClip.ownContext,
                    synchronize: e.synchronize,
                    runTimeInfo: this.runTimeInfo,
                  },
                  !0
                );
            }
            return (
              o(t, [
                {
                  key: "onProgress",
                  value: function (t, e) {
                    for (var n in this.realClip.instantiatedChannels)
                      this.realClip.instantiatedChannels[n].moveTo(
                        this.runTimeInfo.currentMillisecond,
                        e,
                        this.id,
                        !0
                      );
                    this.runTimeInfo.currentMillisecond = e;
                  },
                },
              ]),
              t
            );
          })(),
          an = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var r,
                o,
                s,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n), null === a ? ((o = {}), (s = t)) : ((o = t), (s = a));
              var c = (r = e.call(this, o, s))._validateProps();
              if (!c.result) return h(r, c);
              (r.attrsValidationRules = {}),
                (r.propsValidationRules = We),
                (r.isTheRootClip = !1);
              var u = {
                id: r.id,
                attrs: o,
                props: l({}, s, {
                  html: Object.prototype.hasOwnProperty.call(s, "html")
                    ? s.html
                    : r.html,
                  css: Object.prototype.hasOwnProperty.call(s, "css")
                    ? s.css
                    : r.css,
                  fonts: Object.prototype.hasOwnProperty.call(s, "fonts")
                    ? s.fonts
                    : r.fonts,
                  runTimeInfo: r.runTimeInfo,
                  subscribe: r.subscribe.bind(p(r)),
                }),
                plugin_npm_name: r.constructor.plugin_npm_name,
                Channel: r.constructor.Channel,
                DescriptiveIncident: p(r),
              };
              if (
                ((r.audio = "on"),
                Object.prototype.hasOwnProperty.call(r.constructor, "audio") &&
                  (r.audio = r.constructor.audio),
                Object.prototype.hasOwnProperty.call(s, "audio") &&
                  (r.audio = s.audio),
                Object.prototype.hasOwnProperty.call(s, "selector") &&
                  void 0 !== s.selector &&
                  !0 !== r.constructor.customClip)
              )
                u.Incident = Te;
              else if (
                Object.prototype.hasOwnProperty.call(s, "selector") &&
                void 0 !== s.selector &&
                !0 === r.constructor.customClip
              ) {
                delete u.props.selector;
                var d = new Te({ html: '<div id="clip-container"></div>' });
                (u.props.host = d.rootElement),
                  (u.Incident = r.constructor.Incident);
              } else
                "only" === r.audio && !0 !== r.props.root
                  ? (r.isTheRootClip = !1)
                  : ((r.isTheRootClip = !0),
                    (r.blockingWaitings = {}),
                    (u.Incident = r.constructor.Incident));
              if (
                ("on" === r.audio || "off" === r.audio
                  ? (r.realClip = ee(u))
                  : (r.realClip = new Le()),
                "on" === r.audio || "only" === r.audio)
              ) {
                var f = {
                  id: r.id,
                  attrs: {},
                  props: {
                    audioSources: Object.prototype.hasOwnProperty.call(
                      s,
                      "audioSources"
                    )
                      ? s.audioSources
                      : r.audioSources,
                    runTimeInfo: r.runTimeInfo,
                    subscribe: r.subscribe.bind(p(r)),
                  },
                  plugin_npm_name: r.constructor.plugin_npm_name,
                  Channel: r.constructor.Channel,
                  Incident: me,
                  DescriptiveIncident: p(r),
                };
                r.audioClip = ee(f);
              } else (r.audio = "off"), (r.audioClip = new Le());
              return (
                (r.passiveAddition = !0),
                r._buildTree(),
                (r.passiveAddition = !1),
                r
              );
            }
            return (
              o(n, [
                {
                  key: "_validateProps",
                  value: function () {
                    return Et.validateProps(
                      { props: this.props },
                      We,
                      this.constructor
                    );
                  },
                },
                {
                  key: "_buildTree",
                  value: function () {
                    void 0 !== this.realClip && this.buildTree();
                  },
                },
                {
                  key: "resize",
                  value: function (t) {
                    return (
                      this.realClip._resize(t / this.duration),
                      this.audioClip._resize(t / this.duration),
                      (this.duration = t),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: St,
                      }),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: St,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  key: "handleCheckForClip",
                  value: function (t, e) {
                    return !0;
                  },
                },
                {
                  key: "handleGetElements",
                  value: function (t, e) {
                    return this.realClip.getElements(e.selector);
                  },
                },
                {
                  key: "handleCheckAddition",
                  value: function (t, e) {
                    var n = this.realClip.addIncident(e),
                      i = this.audioClip.addIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: St,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckMove",
                  value: function (t, e) {
                    var n = this.realClip.moveIncident(e),
                      i = this.audioClip.moveIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: St,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckDeletion",
                  value: function (t, e) {
                    var n = this.realClip.removeIncident(e),
                      i = this.audioClip.removeIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: St,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckResize",
                  value: function (t, e) {
                    var n = this.realClip.resizeIncident(e),
                      i = this.audioClip.resizeIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: St,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleFlash",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    this.flash();
                  },
                },
                {
                  key: "handleSetBlock",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    "transitional" !== this.runTimeInfo.state &&
                      ("blocked" !== this.runTimeInfo.state &&
                        (this.statusBeforeBlock = this.runTimeInfo.state),
                      (this.blockingWaitings[e.id] = e),
                      this.block());
                  },
                },
                {
                  key: "handleUnBlock",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    Object.prototype.hasOwnProperty.call(
                      this.blockingWaitings,
                      e.id
                    ) &&
                      (delete this.blockingWaitings[e.id],
                      0 === Object.keys(this.blockingWaitings).length &&
                        ("playing" === this.statusBeforeBlock
                          ? ((this.previousTimeStamp = -1), this.play())
                          : this.arm()));
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    v(u(n.prototype), "stop", this).call(this),
                      (this.blockingWaitings = {});
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e) {
                    this.realClip.onProgress(t, e),
                      this.audioClip.onProgress(t, e);
                  },
                },
                {
                  key: "paste",
                  value: function (t) {
                    return this.isTheRootClip
                      ? new sn({ host: t, descriptiveIncident: this })
                      : null;
                  },
                },
                {
                  key: "flash",
                  value: function () {
                    this.realClip.flash();
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    return t < 0 || t > 1
                      ? {
                          result: !1,
                          errors: [{ type: "invalid volume number" }],
                        }
                      : "off" === this.audio
                      ? {
                          result: !1,
                          errors: [
                            {
                              type: "can not set volume of Clip with audio off",
                            },
                          ],
                        }
                      : (this.audioClip.setVolume(t), { result: !0 });
                  },
                },
                {
                  key: "selectorToPassToChildren",
                  get: function () {
                    return null;
                  },
                },
                {
                  key: "inheritedSelector",
                  get: function () {
                    return this._inheritedSelector;
                  },
                  set: function (t) {
                    this._inheritedSelector = t;
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "audioSources",
                  get: function () {
                    return [];
                  },
                },
              ]),
              n
            );
          })(on);
        s(an, "isClip", !0),
          s(an, "Incident", Be),
          s(an, "plugin_npm_name", "@kissmybutton/self-contained-incidents"),
          s(an, "Channel", Ft),
          s(an, "ClassName", "Clip");
        var ln = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              i(this, n);
              var o = { audio: "only", audioSources: t };
              return null !== r && (o.id = r), e.call(this, o);
            }
            return n;
          })(an),
          cn = _(
            null,
            function (t, e) {
              var n = (function (e) {
                c(r, e);
                var n = f(r);
                function r(e, o) {
                  var s;
                  i(this, r),
                    void 0 === o && ((o = e), (e = {})),
                    (s = n.call(this, o)),
                    t(p(s));
                  var a = Et.validateProps({ props: o }, He, s.constructor);
                  return a.result
                    ? ((s.inheritedSelector = null),
                      (s.attrs = e),
                      Object.prototype.hasOwnProperty.call(o, "duration") ||
                        (o.duration = 0),
                      (s.props = o),
                      (s.attrsValidationRules = {}),
                      (s.propsValidationRules = He),
                      (s.passive = !1),
                      s)
                    : h(s, a);
                }
                return r;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return Zt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js-attribute";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return Pe;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Incident";
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Ye],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [Ze],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [en],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [nn],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [tn],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (t, e) {
                      var n = this.parentNode,
                        i = n.getLeafPosition(this.id);
                      n.removeIncident(this.id);
                      var r = JSON.parse(JSON.stringify(this[e]));
                      this[e] = t;
                      var o = n.addIncident(this, i);
                      return (
                        o.result ||
                          (n.removeIncident(this.id),
                          (this[e] = r),
                          n.addIncident(this, i)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      v(u(n.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForInvalidSelectors",
                    value: function () {
                      var t = this.selector();
                      return null === t
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error: "null selector",
                          }
                        : "&" === t.charAt(0)
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error:
                              "relative selector with no inherited selector",
                            selector: t,
                          }
                        : this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      return {
                        ClassName: this.constructor.ClassName,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                      };
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      return {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                      };
                    },
                  },
                ],
              };
            },
            Tt
          ),
          un = (function () {
            function t(e) {
              if (
                (i(this, t),
                !Object.prototype.hasOwnProperty.call(e, "incident"))
              )
                return (
                  Et.error(
                    'Journey constructor expects an Incident on its properties on the key "incident"'
                  ),
                  !1
                );
              (this.memory = e.calpuleMemory),
                (this.stations = []),
                (this.incident = e.incident),
                (this.startMillisecond =
                  1 * this.incident.runTimeInfo.currentMillisecond),
                (this.startState = "".concat(this.incident.runTimeInfo.state)),
                this.incident.stop();
            }
            return (
              o(t, [
                {
                  key: "station",
                  value: function (t) {
                    this.stations.length > 0 &&
                      this.stations[this.stations.length - 1],
                      this.stations.push(t),
                      this.incident.playableProgress(
                        t / this.incident.duration,
                        t
                      );
                  },
                },
                {
                  key: "destination",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    null != t
                      ? this.station(t)
                      : (t = this.stations[this.stations.length - 1]),
                      this.incident.playableProgress(
                        t / this.incident.duration,
                        t
                      ),
                      "playing" === this.startState ||
                      ("blocked" === this.startState &&
                        "playing" === this.incident.statusBeforeBlock)
                        ? this.incident.play()
                        : t >= this.incident.duration
                        ? this.incident.complete()
                        : this.incident.arm(),
                      this.memory.push(this.exportJourneyLog);
                  },
                },
                {
                  key: "exportJourneyLog",
                  value: function () {
                    return {
                      startMillisecond: this.startMillisecond,
                      startState: this.startState,
                      stations: this.stations,
                    };
                  },
                },
              ]),
              t
            );
          })(),
          dn = (function () {
            function t() {
              i(this, t), (this.memory = []);
            }
            return (
              o(t, [
                {
                  key: "startJourney",
                  value: function (t) {
                    return t
                      ? new un({ incident: t, calpuleMemory: this.memory })
                      : (Et.error(
                          "startJourney expects an Incident as an argument"
                        ),
                        !1);
                  },
                },
              ]),
              t
            );
          })(),
          pn = Xe(),
          hn = new Ot({ logLevel: 0 });
        function fn(t) {
          if (
            (Object.prototype.hasOwnProperty.call(t, "default") &&
              (t = t.default),
            Object.prototype.hasOwnProperty.call(t, "npm_name") ||
              (t.npm_name = "plugin_".concat(new Date().getTime())),
            !(function (t) {
              Object.prototype.hasOwnProperty.call(t, "default") &&
                (t = t.default);
              var e = t.npm_name,
                i = !0;
              if (
                (Object.prototype.hasOwnProperty.call(t, "name") ||
                  hn.error(
                    "Warning on plugin ".concat(
                      e,
                      '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                    )
                  ),
                Object.prototype.hasOwnProperty.call(t, "incidents") ||
                  Object.prototype.hasOwnProperty.call(t, "Clip") ||
                  (hn.error(
                    "Error on plugin ".concat(
                      e,
                      '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                    )
                  ),
                  (i = !1)),
                Object.prototype.hasOwnProperty.call(t, "incidents") &&
                  !Array.isArray(t.incidents))
              )
                hn.error(
                  "Error on plugin ".concat(
                    e,
                    '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                  )
                ),
                  (i = !1);
              else if (Object.prototype.hasOwnProperty.call(t, "incidents"))
                for (var r = 0; r < t.incidents.length; r++) {
                  var o = t.incidents[r];
                  "object" === n(o.exportable) &&
                    Object.prototype.hasOwnProperty.call(
                      o.exportable,
                      "default"
                    ) &&
                    (o.exportable = o.exportable.default),
                    o.exportable.prototype instanceof rn ||
                      o.exportable.prototype instanceof an ||
                      o.exportable.prototype instanceof Zt ||
                      o.exportable.prototype instanceof ye ||
                      (hn.error(
                        "Error on plugin "
                          .concat(
                            e,
                            ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          )
                      ),
                      (i = !1)),
                    Object.prototype.hasOwnProperty.call(o, "name") ||
                      (hn.error(
                        "Error on plugin ".concat(
                          e,
                          '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                        )
                      ),
                      (i = !1)),
                    Object.prototype.hasOwnProperty.call(o, "propTypes") ||
                      hn.log(
                        "Warning on plugin "
                          .concat(
                            e,
                            ".\n                It's always good for plugins to define the supported propTypes of their exposed Incidents' supported properties.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          ),
                        "warning"
                      );
                }
              return i;
            })(t))
          )
            return !1;
          var e = {};
          if (Object.prototype.hasOwnProperty.call(t, "Clip")) {
            var r,
              o,
              a =
                ((o = r = (function (t) {
                  c(n, t);
                  var e = f(n);
                  function n() {
                    return i(this, n), e.apply(this, arguments);
                  }
                  return n;
                })(an)),
                s(r, "Incident", t.Clip),
                s(r, "audio", t.audio ? t.audio : "off"),
                s(r, "customClip", !0),
                o);
            e.Clip = a;
          }
          var l = Pe;
          if (
            (Object.prototype.hasOwnProperty.call(t, "compositeAttributes") &&
              (l = (function (e) {
                c(r, e);
                var n = f(r);
                function r(e) {
                  return (
                    i(this, r),
                    (e.comboAttributes = t.compositeAttributes),
                    n.call(this, e)
                  );
                }
                return r;
              })(Pe)),
            Object.prototype.hasOwnProperty.call(t, "incidents"))
          )
            for (
              var u = function (n) {
                  var r,
                    o,
                    a = t.incidents[n].exportable,
                    u = void 0;
                  if (a.prototype instanceof Zt)
                    (o = r = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return i(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(cn)),
                      s(r, "Incident", a),
                      s(r, "plugin_npm_name", t.npm_name),
                      s(r, "plugin", t.name),
                      s(r, "ClassName", t.incidents[n].name),
                      s(r, "Channel", l),
                      s(r, "audio", t.audio ? t.audio : "off"),
                      (u = o);
                  else if (a.prototype instanceof ye) {
                    var d, p;
                    (p = d = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return i(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(cn)),
                      s(d, "Incident", a),
                      s(d, "plugin_npm_name", "@kissmybutton/media-playback"),
                      s(d, "plugin", t.name),
                      s(d, "ClassName", t.incidents[n].name),
                      s(d, "Channel", ge),
                      s(d, "audio", t.audio ? t.audio : "off"),
                      (u = p);
                  } else if (a.prototype instanceof an) {
                    var h, m;
                    (m = h = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return i(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(a)),
                      s(h, "plugin", t.name),
                      s(h, "ClassName", t.incidents[n].name),
                      s(h, "audio", t.audio ? t.audio : "on"),
                      (u = m);
                  } else if (a.prototype instanceof rn) {
                    var v, g;
                    (g = v = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return i(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(a)),
                      s(v, "plugin", t.name),
                      s(v, "ClassName", t.incidents[n].name),
                      (u = g);
                  }
                  Object.defineProperty(e, t.incidents[n].name, {
                    get: function () {
                      return function e(r, o) {
                        i(this, e);
                        var s = new u(r, o);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            t.incidents[n],
                            "attributesValidationRules"
                          )
                        ) {
                          var a = JSON.parse(
                            JSON.stringify(
                              t.incidents[n].attributesValidationRules
                            )
                          );
                          Object.prototype.hasOwnProperty.call(
                            t.incidents[n].attributesValidationRules,
                            "animatedAttrs"
                          ) &&
                            (a.initialValues = hn.buildInitialValuesValidationRules(
                              a.animatedAttrs
                            ));
                          var l = pn.validate(r, a);
                          if (l.length > 0) {
                            for (
                              var c = "Error on plugin's \""
                                  .concat(t.npm_name, '" "')
                                  .concat(
                                    t.incidents[n].name,
                                    '" instantiation. Errors:'
                                  ),
                                d = 0;
                              d < l.length;
                              d++
                            )
                              c += "\n - "
                                .concat(l[d].message, ". ")
                                .concat(l[d].actual, " provided");
                            return console.error(c), { result: !1, errors: l };
                          }
                          s.attrsValidationRules =
                            t.incidents[n].attributesValidationRules;
                        } else
                          hn.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. "
                              .concat(t.npm_name, ".")
                              .concat(s.constructor.name, " doesn't provide it")
                          );
                        return s;
                      };
                    },
                  });
                },
                d = 0;
              d < t.incidents.length;
              d++
            )
              u(d);
          return e;
        }
        var mn = fn(be),
          vn = an,
          gn = rn,
          yn = mn.Clip,
          bn = mn.AudioPlayback,
          xn = {
            MonoIncident: Zt,
            Group: gn,
            Clip: vn,
            AudioClip: ln,
            MediaPlayback: ye,
            ExtendableClip: ce,
            DOMClip: Be,
            easings: ne,
            clipFromDefinition: function t(e) {
              var n = new e.Class(e.attrs, e.props);
              if (Object.prototype.hasOwnProperty.call(e, "incidents"))
                for (var i in e.incidents) {
                  var r = e.incidents[i],
                    o = t(r.leaf);
                  n.addIncident(o, r.position);
                }
              return n;
            },
          },
          wn = {
            API: xn,
            Group: gn,
            Clip: vn,
            loadPlugin: fn,
            AudioClip: yn,
            AudioPlayback: bn,
            AudioEffect: mn.AudioEffect,
            TimeCapsule: dn,
          };
        (e.API = xn),
          (e.AudioClip = yn),
          (e.AudioPlayback = bn),
          (e.Clip = vn),
          (e.Group = gn),
          (e.TimeCapsule = dn),
          (e.default = wn),
          (e.loadPlugin = fn),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(e);
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    var i = (t.exports = {});
    (i.playSVG =
      '\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n'),
      (i.dcSVG =
        '\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n'),
      (i.pauseSVG =
        '\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n'),
      (i.replaySVG =
        '\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n'),
      (i.volumeSVG =
        '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
      (i.volumeMuteSVG =
        '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
      (i.settingsSVG =
        '\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n'),
      (i.arrowRightSVG =
        '\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n'),
      (i.arrowLeftSVG =
        '\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n'),
      (i.fullScreenSVG =
        '\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n'),
      (i.loopSVG =
        '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n'),
      (i.loadingSVG =
        '<svg class="lds-spinner" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>');
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var r = new (n(1).TimeCapsule)(),
      o = n(0),
      s = o.elid,
      a = o.eltag,
      l = o.elcreate,
      c = n(2),
      u = n(7),
      d = n(8),
      p = n(9),
      h = n(10),
      f = n(12),
      m = n(13),
      v = n(14),
      g = n(15),
      y = n(16),
      b = n(17),
      x = n(18),
      w = n(19),
      k = n(20),
      _ = n(21),
      C = n(22),
      I = n(23),
      O = n(24),
      E = n(25),
      P = (function () {
        function t(e) {
          var n = this;
          for (var i in ((function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (e.id = e.id || Date.now()),
          (e.preview = e.preview || !1),
          (e.showVolume = e.showVolume || !1),
          (e.showIndicator = e.showIndicator || !1),
          (e.theme = e.theme || "transparent on-top"),
          (e.host = e.host || e.clip.props.host),
          (e.buttons = e.buttons || {}),
          (e.timeFormat = e.timeFormat || "ss"),
          void 0 === e.pointerEvents || null === e.pointerEvents
            ? (e.pointerEvents = !0)
            : (e.pointerEvents = Boolean(e.pointerEvents)),
          (e.onMillisecondChange = e.onMillisecondChange || null),
          (e.speedValues = e.speedValues || [
            -4,
            -2,
            -1,
            -0.5,
            0,
            0.5,
            1,
            2,
            4,
          ]),
          e.speedValues))
            isFinite(e.speedValues[i]) || e.speedValues.splice(i, 1);
          e.speedValues.sort(function (t, e) {
            return t - e;
          }),
            (this.className = u.name),
            (u.playerName = e.id),
            (this.options = e),
            (this.id = this.options.id),
            (this.name = u.name),
            (this.previewClip = null),
            (this.clip = e.clip),
            (this.clipClass = e.clipClass),
            (this.state = this.clip.runTimeInfo.state),
            (this.listeners = {}),
            (this.previewScale = 0.25),
            (this.settings = {
              volume: 1,
              journey: null,
              previousVolume: 1,
              volumeMute: !1,
              needsUpdate: !0,
              resizeLoop: !1,
              loopJourney: !1,
              previewJourney: null,
              loopActivated: !1,
              requestingLoop: !1,
              playAfterResize: !1,
              loopStartMillisecond: 0,
              loopLastPositionXPxls: 0,
              loopLastPositionXPercentage: 0,
              loopEndMillisecond: this.clip.duration,
            }),
            (this.functions = {
              millisecondChange: this.millisecondChange,
              createJourney: this.createJourney,
            }),
            h(this),
            this.setTheme(),
            this.setSpeed(),
            this.subscribeToTimer(),
            this.subscribeToDurationChange(),
            this.addEventListeners(),
            this.eventBroadcast("state-change", this.state),
            this.options.preview && this.createPreviewDisplay(),
            window.addEventListener("resize", function () {
              n.options.preview && n.setPreviewDimentions();
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "createJourney",
              value: function (t, e) {
                var n = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                setTimeout(function () {
                  var o = i.before,
                    s = void 0 === o ? null : o,
                    a = i.after,
                    l = void 0 === a ? null : a;
                  s && t[s](),
                    (n.settings.journey = r.startJourney(t)),
                    n.settings.journey.station(e),
                    n.settings.journey.destination(),
                    l && t[l]();
                }, 0);
              },
            },
            {
              key: "millisecondChange",
              value: function (t, e, n, i) {
                var r =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
                if (
                  (this.state !== e &&
                    ((this.state = e), this.eventBroadcast("state-change", e)),
                  !this.settings.needsUpdate)
                )
                  return this.clip.pause(), 1;
                var o = this.clip,
                  s = this.settings,
                  a = s.loopActivated,
                  l = s.loopEndMillisecond,
                  c = s.loopStartMillisecond,
                  u = this.clip.duration,
                  d = this.elements,
                  p = d.totalBar,
                  h = d.loopBar,
                  f = h.offsetWidth,
                  m = h.offsetLeft / p.offsetWidth,
                  v = t - u * m,
                  g = (u / p.offsetWidth) * f;
                return t >= l && a && this.clip.speed >= 0
                  ? (this.createJourney(o, c + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : t >= l && a && this.clip.speed < 0
                  ? (this.createJourney(o, l - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : t <= c && a && this.clip.speed >= 0
                  ? (this.createJourney(o, c + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : t <= c && a && this.clip.speed < 0
                  ? (this.createJourney(o, l - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : (i &&
                      this.createJourney(o, t, {
                        after: this.settings.playAfterResize ? "play" : null,
                      }),
                    (this.elements.runningBar.style.width =
                      (v / g) * 100 + "%"),
                    (this.elements.currentTime.innerHTML = this.timeFormat(t)),
                    void (
                      this.options.onMillisecondChange &&
                      r &&
                      this.options.onMillisecondChange(t)
                    ));
              },
            },
            {
              key: "eventBroadcast",
              value: function (t, e) {
                var n = s("".concat(this.name, "-controls"));
                "state-change" === t
                  ? "paused" === e ||
                    "idle" === e ||
                    "transitional" === e ||
                    "armed" === e ||
                    "blocked" === e
                    ? (n.classList.value.includes("force-show-controls") ||
                        n.classList.toggle("force-show-controls"),
                      (this.elements.statusButton.innerHTML = c.playSVG),
                      this.elements.statusButton.appendChild(
                        this.elements.indicator
                      ),
                      (this.elements.indicator.innerHTML = "".concat(
                        e.charAt(0).toUpperCase() + e.slice(1)
                      )),
                      "blocked" === e &&
                        (this.elements.pointerEventPanel.innerHTML = '\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(
                          c.loadingSVG,
                          "</div>"
                        )))
                    : (n.classList.value.includes("force-show-controls") &&
                        n.classList.toggle("force-show-controls"),
                      (this.elements.statusButton.innerHTML = c.pauseSVG),
                      this.elements.statusButton.appendChild(
                        this.elements.indicator
                      ),
                      (this.elements.indicator.innerHTML = "Playing"),
                      (this.elements.pointerEventPanel.innerHTML = ""),
                      "playing" === e &&
                      this.clip.runTimeInfo.currentMillisecond ===
                        this.clip.duration &&
                      this.clip.speed >= 0
                        ? this.createJourney(this.clip, 1, { after: "play" })
                        : (("playing" === e &&
                            0 === this.clip.runTimeInfo.currentMillisecond &&
                            this.clip.speed < 0) ||
                            ("playing" === e &&
                              this.clip.runTimeInfo.currentMillisecond ===
                                this.clip.duration &&
                              this.clip.speed < 0)) &&
                          this.createJourney(
                            this.clip,
                            this.clip.duration - 1,
                            { after: "play" }
                          ))
                  : "duration-change" === t &&
                    ((this.elements.totalTime.innerHTML = this.timeFormat(
                      this.clip.duration
                    )),
                    (this.settings.loopEndMillisecond = this.clip.duration),
                    (this.elements.pointerEventPanel.innerHTML = ""),
                    this.millisecondChange(
                      this.clip.runTimeInfo.currentMillisecond
                    ));
              },
            },
            {
              key: "subscribeToDurationChange",
              value: function () {
                this.clip.subscribeToDurationChange(
                  this.subscribeToDurationChangeCallback.bind(this)
                );
              },
            },
            {
              key: "subscribeToDurationChangeCallback",
              value: function () {
                this.eventBroadcast("duration-change");
              },
            },
            {
              key: "subscribeToTimer",
              value: function () {
                this.clip.subscribe(this.id, this.millisecondChange.bind(this));
              },
            },
            {
              key: "handleDragStart",
              value: function () {
                (this.settings.needsUpdate = !0),
                  (this.settings.journey = r.startJourney(this.clip));
              },
            },
            {
              key: "timeFormat",
              value: function (t) {
                if ("ss" === this.options.timeFormat) {
                  var e = t / 1e3 / 60 / 60,
                    n = (e % 1) * 60,
                    i = (n % 1) * 60,
                    r = ("0" + parseInt(e)).slice(-2),
                    o = ("0" + parseInt(n)).slice(-2),
                    s = ("0" + parseInt(i)).slice(-2);
                  return ""
                    .concat("00" === r ? "" : r + ":")
                    .concat(o, ":")
                    .concat(s);
                }
                return t;
              },
            },
            {
              key: "handleDrag",
              value: function (t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                isFinite(t) || (t = 0);
                var n = this.clip.duration,
                  i = this.settings.journey,
                  r = this.elements,
                  o = r.loopBar,
                  s = r.totalBar,
                  a = r.runningBar,
                  l = r.currentTime,
                  c = t + o.offsetLeft,
                  u = Math.round((n * c) / s.offsetWidth);
                (l.innerHTML = this.timeFormat(u)),
                  (a.style.width = (t / o.offsetWidth) * 100 + "%"),
                  i.station(u),
                  this.options.onMillisecondChange &&
                    e &&
                    this.options.onMillisecondChange(u);
              },
            },
            {
              key: "handleDragEnd",
              value: function () {
                this.settings.journey.destination();
              },
            },
            {
              key: "createProgressDrag",
              value: function (t) {
                this.handleDragStart(),
                  this.handleDrag(t),
                  this.handleDragEnd();
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                v(this),
                  y(this),
                  m(this),
                  g(this),
                  f(this),
                  b(this),
                  x(this),
                  w(this),
                  k(this),
                  _(this),
                  C(this),
                  I(this),
                  O(this),
                  E(this);
              },
            },
            {
              key: "launchIntoFullscreen",
              value: function (t) {
                this.options.preview && this.setPreviewDimentions(),
                  t.requestFullscreen
                    ? t.requestFullscreen()
                    : t.mozRequestFullScreen
                    ? t.mozRequestFullScreen()
                    : t.webkitRequestFullscreen
                    ? t.webkitRequestFullscreen()
                    : t.msRequestFullscreen && t.msRequestFullscreen();
              },
            },
            {
              key: "exitFullscreen",
              value: function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              },
            },
            {
              key: "setTheme",
              value: function () {
                this.options.theme.replace(/\s\s+/g, " "),
                  this.options.theme.trim(),
                  this.options.theme.includes("on-top") ||
                    this.options.theme.includes("position-bottom") ||
                    (this.options.theme += " on-top");
                var t = {};
                for (var e in this.options.theme.split(" ")) {
                  var n = p(this.options.theme.split(" ")[e], this.name);
                  for (var i in n || {}) t[i] = n[i];
                }
                var r = d(t, this.name, this.options),
                  o = l("style");
                o.styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  a("head")[0].appendChild(o);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                var t,
                  e = this;
                (t = 1 == this.clip.speed ? "Normal" : this.clip.speed),
                  (this.elements.speedCurrent.innerHTML = t);
                var n =
                  -1 *
                  ((function () {
                    for (var t = 0; t < e.options.speedValues.length - 1; t++)
                      if (
                        e.options.speedValues[t] <= e.clip.speed &&
                        e.options.speedValues[t + 1] > e.clip.speed
                      )
                        return (
                          t +
                          Math.abs(
                            (e.clip.speed - e.options.speedValues[t]) /
                              (e.options.speedValues[t] -
                                e.options.speedValues[t + 1])
                          )
                        );
                  })() *
                    (1 / (this.options.speedValues.length - 1)) -
                    1) *
                  (this.options.speedValues.length - 1) *
                  16;
                s("".concat(this.name, "-speed-cursor")).style.top = n + "px";
              },
            },
            {
              key: "calculateSpeed",
              value: function (t, e, n) {
                var i = Math.floor(n / t);
                if (i === e.length - 1) return e[i].toFixed(1);
                var r = (
                  ((n / t) % 1) * Math.abs(e[i] - e[i + 1]) +
                  e[i]
                ).toFixed(1);
                return 0 == r ? "0.0" : r;
              },
            },
            {
              key: "createPreviewDisplay",
              value: function () {
                this.previewClip = this.clip.paste(
                  s("".concat(this.name, "-hover-display"))
                );
                var t = s("".concat(this.name, "-hover-display"));
                (window.previewClip = this.previewClip),
                  (t.style.position = "absolute"),
                  (t.style.zIndex = 1),
                  this.setPreviewDimentions();
              },
            },
            {
              key: "setPreviewDimentions",
              value: function () {
                var t = this.clip.props.host,
                  e = this.previewClip.ownClip.props.host,
                  n = t.offsetWidth,
                  i = t.offsetHeight,
                  r = n * this.previewScale;
                r > 300 && ((r = 300), (this.previewScale = r / n)),
                  (s("".concat(this.name, "-hover-display")).style.width =
                    n + "px"),
                  (s("".concat(this.name, "-hover-display")).style.height =
                    i + "px"),
                  (e.style.transform = "scale(".concat(this.previewScale, ")")),
                  (e.style.transformOrigin = "center bottom"),
                  (e.style.boxSizing = "border-box");
              },
            },
          ]) && i(e.prototype, n),
          o && i(e, o),
          t
        );
      })();
    t.exports = P;
  },
  function (t, e, n) {
    (function (i) {
      var r, o, s;
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      !(function (i, l) {
        "object" == a(e) && void 0 !== t
          ? (t.exports = l(n(1)))
          : ((o = [n(1)]),
            void 0 === (s = "function" == typeof (r = l) ? r.apply(e, o) : r) ||
              (t.exports = s));
      })(0, function (t) {
        "use strict";
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function r(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function o(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function s(t) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function l(t, e) {
          return (l =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function c() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function u(t, e) {
          return !e || ("object" != a(e) && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t)
            : e;
        }
        t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        var d = {},
          p = { duration: 1e3, round: 0 },
          h = [
            "translateX",
            "translateY",
            "translateZ",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "scale",
            "scaleX",
            "scaleY",
            "scaleZ",
            "skew",
            "skewX",
            "skewY",
            "perspective",
          ],
          f = { CSS: {} };
        function m(t, e, n) {
          return Math.min(Math.max(t, e), n);
        }
        function v(t, e) {
          return t.indexOf(e) > -1;
        }
        var g = {
          arr: function (t) {
            return Array.isArray(t);
          },
          obj: function (t) {
            return v(Object.prototype.toString.call(t), "Object");
          },
          pth: function (t) {
            return g.obj(t) && t.hasOwnProperty("totalLength");
          },
          svg: function (t) {
            return t instanceof SVGElement;
          },
          inp: function (t) {
            return t instanceof HTMLInputElement;
          },
          dom: function (t) {
            return t.nodeType || g.svg(t);
          },
          str: function (t) {
            return "string" == typeof t;
          },
          fnc: function (t) {
            return "function" == typeof t;
          },
          und: function (t) {
            return void 0 === t;
          },
          hex: function (t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
          },
          rgb: function (t) {
            return /^rgb/.test(t);
          },
          hsl: function (t) {
            return /^hsl/.test(t);
          },
          col: function (t) {
            return g.hex(t) || g.rgb(t) || g.hsl(t);
          },
          key: function (t) {
            return (
              !d.hasOwnProperty(t) &&
              !p.hasOwnProperty(t) &&
              "targets" !== t &&
              "keyframes" !== t
            );
          },
        };
        function y(t, e) {
          for (
            var n = t.length,
              i = arguments.length >= 2 ? arguments[1] : void 0,
              r = [],
              o = 0;
            o < n;
            o++
          )
            if (o in t) {
              var s = t[o];
              e.call(i, s, o, t) && r.push(s);
            }
          return r;
        }
        function b(t) {
          return t.reduce(function (t, e) {
            return t.concat(g.arr(e) ? b(e) : e);
          }, []);
        }
        function x(t) {
          return g.arr(t)
            ? t
            : (g.str(t) &&
                (t =
                  (function (t) {
                    try {
                      return document.querySelectorAll(t);
                    } catch (t) {
                      return;
                    }
                  })(t) || t),
              t instanceof NodeList || t instanceof HTMLCollection
                ? [].slice.call(t)
                : [t]);
        }
        function w(t, e) {
          return t.some(function (t) {
            return t === e;
          });
        }
        function k(t) {
          var e = {};
          for (var n in t) e[n] = t[n];
          return e;
        }
        function _(t, e) {
          var n = k(t);
          for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
          return n;
        }
        function C(t, e) {
          var n = k(t);
          for (var i in e) n[i] = g.und(t[i]) ? e[i] : t[i];
          return n;
        }
        function I(t) {
          var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            t
          );
          if (e) return e[1];
        }
        function O(t, e) {
          return g.fnc(t) ? t(e.target, e.id, e.total) : t;
        }
        function E(t, e) {
          return t.getAttribute(e);
        }
        function P(t, e, n) {
          if (w([n, "deg", "rad", "turn"], I(e))) return e;
          var i = f.CSS[e + n];
          if (!g.und(i)) return i;
          var r = document.createElement(t.tagName),
            o =
              t.parentNode && t.parentNode !== document
                ? t.parentNode
                : document.body;
          o.appendChild(r),
            (r.style.position = "absolute"),
            (r.style.width = 100 + n);
          var s = 100 / r.offsetWidth;
          o.removeChild(r);
          var a = s * parseFloat(e);
          return (f.CSS[e + n] = a), a;
        }
        function j(t, e, n) {
          if (e in t.style) {
            var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              r = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
            return n ? P(t, r, n) : r;
          }
        }
        function M(t, e) {
          return g.dom(t) && !g.inp(t) && (E(t, e) || (g.svg(t) && t[e]))
            ? "attribute"
            : g.dom(t) && w(h, e)
            ? "transform"
            : g.dom(t) && "transform" !== e && j(t, e)
            ? "css"
            : null != t[e]
            ? "object"
            : void 0;
        }
        function S(t) {
          if (g.dom(t)) {
            for (
              var e,
                n = t.style.transform || "",
                i = /(\w+)\(([^)]*)\)/g,
                r = new Map();
              (e = i.exec(n));

            )
              r.set(e[1], e[2]);
            return r;
          }
        }
        function B(t, e, n, i) {
          switch (M(t, e)) {
            case "transform":
              return (function (t, e, n, i) {
                var r = v(e, "scale")
                    ? 1
                    : 0 +
                      (function (t) {
                        return v(t, "translate") || "perspective" === t
                          ? "px"
                          : v(t, "rotate") || v(t, "skew")
                          ? "deg"
                          : void 0;
                      })(e),
                  o = S(t).get(e) || r;
                return (
                  n && (n.transforms.list.set(e, o), (n.transforms.last = e)),
                  i ? P(t, o, i) : o
                );
              })(t, e, i, n);
            case "css":
              return j(t, e, n);
            case "attribute":
              return E(t, e);
            default:
              return t[e] || 0;
          }
        }
        function A(t, e) {
          var n = /^(\*=|\+=|-=)/.exec(t);
          if (!n) return t;
          var i = I(t) || 0,
            r = parseFloat(e),
            o = parseFloat(t.replace(n[0], ""));
          switch (n[0][0]) {
            case "+":
              return r + o + i;
            case "-":
              return r - o + i;
            case "*":
              return r * o + i;
          }
        }
        function T(t, e) {
          if (g.col(t))
            return (function (t) {
              return g.rgb(t)
                ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
                  ? "rgba(" + n[1] + ",1)"
                  : e
                : g.hex(t)
                ? (function (t) {
                    var e = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function (t, e, n, i) {
                          return e + e + n + n + i + i;
                        }
                      ),
                      n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return (
                      "rgba(" +
                      parseInt(n[1], 16) +
                      "," +
                      parseInt(n[2], 16) +
                      "," +
                      parseInt(n[3], 16) +
                      ",1)"
                    );
                  })(t)
                : g.hsl(t)
                ? (function (t) {
                    var e,
                      n,
                      i,
                      r =
                        /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                          t
                        ),
                      o = parseInt(r[1], 10) / 360,
                      s = parseInt(r[2], 10) / 100,
                      a = parseInt(r[3], 10) / 100,
                      l = r[4] || 1;
                    function c(t, e, n) {
                      return (
                        n < 0 && (n += 1),
                        n > 1 && (n -= 1),
                        n < 1 / 6
                          ? t + 6 * (e - t) * n
                          : n < 0.5
                          ? e
                          : n < 2 / 3
                          ? t + (e - t) * (2 / 3 - n) * 6
                          : t
                      );
                    }
                    if (0 == s) e = n = i = a;
                    else {
                      var u = a < 0.5 ? a * (1 + s) : a + s - a * s,
                        d = 2 * a - u;
                      (e = c(d, u, o + 1 / 3)),
                        (n = c(d, u, o)),
                        (i = c(d, u, o - 1 / 3));
                    }
                    return (
                      "rgba(" +
                      255 * e +
                      "," +
                      255 * n +
                      "," +
                      255 * i +
                      "," +
                      l +
                      ")"
                    );
                  })(t)
                : void 0;
              var e, n;
            })(t);
          if (/\s/g.test(t)) return t;
          var n = I(t),
            i = n ? t.substr(0, t.length - n.length) : t;
          return e ? i + e : i;
        }
        function L(t, e) {
          var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            i = T(g.pth(t) ? t.totalLength : t, e) + "";
          return {
            original: i,
            numbers: i.match(n) ? i.match(n).map(Number) : [0],
            strings: g.str(t) || e ? i.split(n) : [],
          };
        }
        function D(t) {
          var e = (function (t) {
            return y(t ? b(g.arr(t) ? t.map(x) : x(t)) : [], function (
              t,
              e,
              n
            ) {
              return n.indexOf(t) === e;
            });
          })(t);
          return e.map(function (t, n) {
            return {
              target: t,
              id: n,
              total: e.length,
              transforms: { list: S(t) },
            };
          });
        }
        function V(t, e) {
          var n = k(e);
          if (g.arr(t)) {
            var i = t.length;
            2 !== i || g.obj(t[0])
              ? g.fnc(e.duration) || (n.duration = e.duration / i)
              : (t = { value: t });
          }
          return (g.arr(t) ? t : [t])
            .map(function (t, e) {
              return g.obj(t) && !g.pth(t) ? t : { value: t };
            })
            .map(function (t) {
              return C(t, n);
            });
        }
        var z = {
          css: function (t, e, n) {
            return (t.style[e] = n);
          },
          attribute: function (t, e, n) {
            return t.setAttribute(e, n);
          },
          object: function (t, e, n) {
            return (t[e] = n);
          },
          transform: function (t, e, n, i, r) {
            if ((i.list.set(e, n), e === i.last || r)) {
              var o = "";
              i.list.forEach(function (t, e) {
                o += e + "(" + t + ") ";
              }),
                (t.style.transform = o);
            }
          },
        };
        function N(t, e) {
          D(t).forEach(function (t) {
            for (var n in e) {
              var i = O(e[n], t),
                r = t.target,
                o = I(i),
                s = B(r, n, o, t),
                a = A(T(i, o || I(s)), s),
                l = M(r, n);
              z[l](r, n, a, t.transforms, !0);
            }
          });
        }
        function R(t, e) {
          return y(
            b(
              t.map(function (t) {
                return e.map(function (e) {
                  return (function (t, e) {
                    var n = M(t.target, e.name);
                    if (n) {
                      var i = (function (t, e) {
                          var n;
                          return t.tweens.map(function (i) {
                            var r = (function (t, e) {
                                var n = {};
                                for (var i in t) {
                                  var r = O(t[i], e);
                                  g.arr(r) &&
                                    1 ===
                                      (r = r.map(function (t) {
                                        return O(t, e);
                                      })).length &&
                                    (r = r[0]),
                                    (n[i] = r);
                                }
                                return (n.duration = parseFloat(n.duration)), n;
                              })(i, e),
                              o = r.value,
                              s = g.arr(o) ? o[1] : o,
                              a = I(s),
                              l = B(e.target, t.name, a, e),
                              c = n ? n.to.original : l,
                              u = g.arr(o) ? o[0] : c,
                              d = I(u) || I(l),
                              p = a || d;
                            return (
                              g.und(s) && (s = c),
                              (r.from = L(u, p)),
                              (r.to = L(A(s, u), p)),
                              (r.start = n ? n.end : 0),
                              (r.end = r.start + r.duration),
                              (r.isPath = !1),
                              (r.isColor = g.col(r.from.original)),
                              r.isColor && (r.round = 1),
                              (n = r),
                              r
                            );
                          });
                        })(e, t),
                        r = i[i.length - 1];
                      return {
                        type: n,
                        property: e.name,
                        animatable: t,
                        tweens: i,
                        duration: r.end,
                      };
                    }
                  })(t, e);
                });
              })
            ),
            function (t) {
              return !g.und(t);
            }
          );
        }
        var $ = 0;
        function H(t) {
          void 0 === t && (t = {});
          var e,
            n = 0,
            r = null;
          function o(t) {
            var e =
              window.Promise &&
              new i(function (t) {
                return (r = t);
              });
            return (t.finished = e), e;
          }
          var s = (function (t) {
            var e = _(d, t),
              n = _(p, t),
              i = (function (t, e) {
                var n = [];
                for (var i in e)
                  g.key(i) && n.push({ name: i, tweens: V(e[i], t) });
                return n;
              })(n, t),
              r = D(t.targets),
              o = R(r, i),
              s = (function (t, e) {
                var n = t.length,
                  i = {};
                return (
                  (i.duration = n
                    ? Math.max.apply(
                        Math,
                        t.map(function (t) {
                          return t.duration;
                        })
                      )
                    : e.duration),
                  i
                );
              })(o, n),
              a = $;
            return (
              $++,
              C(e, {
                id: a,
                children: [],
                animatables: r,
                animations: o,
                duration: s.duration,
              })
            );
          })(t);
          function a(t, e) {
            e && e.seek(t);
          }
          return (
            o(s),
            (s.reset = function () {
              (s.passThrough = !1),
                (s.currentTime = 0),
                (s.progress = 0),
                (s.paused = !0),
                (s.began = !1),
                (s.completed = !1),
                (s.reversePlayback = !1),
                (e = s.children);
              for (var t = (n = e.length); t--; ) s.children[t].reset();
            }),
            (s.set = function (t, e) {
              return N(t, e), s;
            }),
            (s.seek = function (t) {
              !(function (t) {
                var i = s.duration,
                  l = t;
                (s.progress = m((l / i) * 100, 0, 100)),
                  (s.reversePlayback = l < s.currentTime),
                  e &&
                    (function (t) {
                      if (s.reversePlayback) for (var i = n; i--; ) a(t, e[i]);
                      else for (var r = 0; r < n; r++) a(t, e[r]);
                    })(l),
                  !s.began && s.currentTime > 0 && (s.began = !0),
                  (function (t) {
                    for (var e = 0, n = s.animations, i = n.length; e < i; ) {
                      var r = n[e],
                        o = r.animatable,
                        a = r.tweens,
                        l = a.length - 1,
                        c = a[l];
                      l &&
                        (c =
                          y(a, function (e) {
                            return t < e.end;
                          })[0] || c);
                      for (
                        var u = m(t - c.start, 0, c.duration) / c.duration,
                          d = c.to.strings,
                          p = c.round,
                          h = [],
                          f = c.to.numbers.length,
                          v = void 0,
                          g = 0;
                        g < f;
                        g++
                      ) {
                        var b = void 0,
                          x = c.to.numbers[g],
                          w = c.from.numbers[g] || 0;
                        (b = w + u * (x - w)),
                          p &&
                            ((c.isColor && g > 2) ||
                              (b = Math.round(b * p) / p)),
                          h.push(b);
                      }
                      var k = d.length;
                      if (k) {
                        v = d[0];
                        for (var _ = 0; _ < k; _++) {
                          d[_];
                          var C = d[_ + 1],
                            I = h[_];
                          isNaN(I) || (v += C ? I + C : I + " ");
                        }
                      } else v = h[0];
                      z[r.type](o.target, r.property, v, o.transforms),
                        (r.currentValue = v),
                        e++;
                    }
                  })(l),
                  (s.currentTime = m(l, 0, i)),
                  t >= i &&
                    ((s.paused = !0),
                    s.completed ||
                      ((s.completed = !0),
                      !s.passThrough && "Promise" in window && (r(), o(s))));
              })(t);
            }),
            s.reset(),
            s
          );
        }
        (H.version = "3.1.0"),
          (H.get = B),
          (H.set = N),
          (H.convertPx = P),
          (H.penner = {
            linear: function () {
              return function (t) {
                return t;
              };
            },
          });
        var F = {
            transform: [
              "translateX",
              "translateY",
              "translateZ",
              "rotate",
              "rotateX",
              "rotateY",
              "rotateZ",
              "scale",
              "scaleX",
              "scaleY",
              "scaleZ",
              "skewX",
              "skewY",
              "perspective",
            ],
          },
          G = [
            "cm",
            "mm",
            "in",
            "px",
            "pt",
            "pc",
            "em",
            "ex",
            "ch",
            "rem",
            "vw",
            "vh",
            "vmin",
            "vmax",
            "%",
          ],
          W = ["deg", "rad", "grad", "turn"],
          U = "measurement",
          q = "color";
        return {
          npm_name: "@kissmybutton/motorcortex-anime",
          incidents: [
            {
              exportable: (function (t) {
                !(function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    e && l(t, e);
                })(h, t);
                var i,
                  a,
                  d,
                  p =
                    ((i = h),
                    function () {
                      var t,
                        e = s(i);
                      if (c()) {
                        var n = s(this).constructor;
                        t = Reflect.construct(e, arguments, n);
                      } else t = e.apply(this, arguments);
                      return u(this, t);
                    });
                function h() {
                  return e(this, h), p.apply(this, arguments);
                }
                return (
                  (a = h),
                  (d = [
                    {
                      key: "onGetContext",
                      value: function () {
                        var t = {},
                          e = {};
                        if (
                          Object.prototype.hasOwnProperty.call(
                            F,
                            this.attributeKey
                          )
                        )
                          for (
                            var n = F[this.attributeKey], i = 0;
                            i < n.length;
                            i++
                          )
                            Object.prototype.hasOwnProperty.call(
                              this.targetValue,
                              n[i]
                            ) &&
                              ((t[n[i]] = [
                                this.getInitialValue()[n[i]],
                                this.targetValue[n[i]],
                              ]),
                              (e[n[i]] = [
                                this.getScratchValue(),
                                this.targetValue[n[i]],
                              ]));
                        else
                          (t[this.attributeKey] = [
                            this.getInitialValue(),
                            this.targetValue,
                          ]),
                            (e[this.targetValue] = [
                              this.getScratchValue(),
                              this.targetValue,
                            ]);
                        this.target = H(
                          (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                              var n = null != arguments[e] ? arguments[e] : {};
                              e % 2
                                ? o(Object(n), !0).forEach(function (e) {
                                    r(t, e, n[e]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    t,
                                    Object.getOwnPropertyDescriptors(n)
                                  )
                                : o(Object(n)).forEach(function (e) {
                                    Object.defineProperty(
                                      t,
                                      e,
                                      Object.getOwnPropertyDescriptor(n, e)
                                    );
                                  });
                            }
                            return t;
                          })(
                            {
                              autoplay: !1,
                              duration: this.props.duration,
                              easing: "linear",
                              targets: this.element,
                            },
                            (this.attrs || {}).attrs || {},
                            {},
                            t
                          )
                        );
                      },
                    },
                    {
                      key: "getScratchValue",
                      value: function () {
                        if ("transform" === this.attributeKey) {
                          for (
                            var t = {},
                              e = F[this.attributeKey],
                              n = (function (t, e) {
                                var n,
                                  i,
                                  r,
                                  o,
                                  s,
                                  a,
                                  l,
                                  c,
                                  u = t.getComputedStyle(e).transform;
                                return "" === u || "none" === u
                                  ? {}
                                  : ((n = u
                                      .split("(")[1]
                                      .split(")")[0]
                                      .split(",")),
                                    (i = Math.atan2(n[1], n[0])),
                                    (r = Math.pow(n[0], 2) + Math.pow(n[1], 2)),
                                    (o = Math.pow(n[2], 2) + Math.pow(n[3], 2)),
                                    (s = Math.sqrt(r)),
                                    (a = (n[0] * n[3] - n[2] * n[1]) / s),
                                    (l = Math.atan2(
                                      n[0] * n[2] + n[1] * n[3],
                                      r
                                    )),
                                    (c = Math.atan2(
                                      n[1] * n[3] + n[0] * n[2],
                                      o
                                    )),
                                    {
                                      rotate: i / (Math.PI / 180) + "deg",
                                      scaleX: s,
                                      scaleY: a,
                                      skewX:
                                        (1 === r ? l / (Math.PI / 180) : 0) +
                                        "deg",
                                      skewY:
                                        (1 === o ? c / (Math.PI / 180) : 0) +
                                        "deg",
                                      translateX: n[4] + "px",
                                      translateY: n[5] + "px",
                                    });
                              })(this.context.window, this.element),
                              i = 0;
                            i < e.length;
                            i++
                          )
                            Object.prototype.hasOwnProperty.call(n, e[i])
                              ? (t[e[i]] = n[e[i]])
                              : (t[e[i]] = H.get(this.element, e[i]));
                          return t;
                        }
                        return H.get(this.element, this.attributeKey);
                      },
                    },
                    {
                      key: "onProgress",
                      value: function (t) {
                        return this.target.seek(this.target.duration * t);
                      },
                    },
                  ]) && n(a.prototype, d),
                  h
                );
              })(t.API.MonoIncident),
              name: "Anime",
              attributesValidationRules: {
                animatedAttrs: {
                  type: "object",
                  props: {
                    background: { optional: !0, type: q },
                    backgroundColor: { optional: !0, type: q },
                    backgroundPosition: { optional: !0, type: "string" },
                    backgroundSize: { optional: !0, type: "string" },
                    border: { optional: !0, type: "string" },
                    borderBottom: { optional: !0, type: "string" },
                    borderBottomColor: { optional: !0, type: q },
                    borderBottomLeftRadius: { optional: !0, type: U, units: G },
                    borderBottomRightRadius: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    borderBottomWidth: { optional: !0, type: U, units: G },
                    borderColor: { optional: !0, type: q },
                    borderEndEndRadius: { optional: !0, type: U, units: G },
                    borderEndStartRadius: { optional: !0, type: U, units: G },
                    borderImageOutset: {
                      optional: !0,
                      type: U,
                      units: G,
                      min: 0,
                    },
                    borderImageSlice: {
                      optional: !0,
                      type: U,
                      units: G,
                      min: 0,
                    },
                    borderImageWidth: {
                      optional: !0,
                      type: U,
                      units: G,
                      min: 0,
                    },
                    borderLeft: { optional: !0, type: "string" },
                    borderLeftColor: { optional: !0, type: q },
                    borderLeftWidth: { optional: !0, type: U, units: G },
                    borderRadius: { optional: !0, type: U, units: G },
                    borderRight: { optional: !0, type: "string" },
                    borderRightColor: { optional: !0, type: q },
                    borderRightWidth: { optional: !0, type: U, units: G },
                    borderStartEndRadius: { optional: !0, type: U, units: G },
                    borderStartStartRadius: { optional: !0, type: U, units: G },
                    borderTop: { optional: !0, type: "string" },
                    borderTopColor: { optional: !0, type: q },
                    borderTopLeftRadius: { optional: !0, type: U, units: G },
                    borderTopRightRadius: { optional: !0, type: U, units: G },
                    borderTopWidth: { optional: !0, type: U, units: G },
                    borderWidth: { optional: !0, type: U, units: G },
                    bottom: { optional: !0, type: U, units: G },
                    boxShadow: { optional: !0, type: "string" },
                    caretColor: { optional: !0, type: q },
                    color: { optional: !0, type: q },
                    columnCount: {
                      optional: !0,
                      type: "number",
                      min: 0,
                      integer: !0,
                    },
                    columnGap: { optional: !0, type: U, units: G },
                    columnRule: { optional: !0, type: "string" },
                    columnRuleColor: { optional: !0, type: q },
                    columnRuleWidth: { optional: !0, type: U, units: G },
                    columns: {
                      optional: !0,
                      type: "number",
                      min: 0,
                      integer: !0,
                    },
                    columnWidth: { optional: !0, type: U, units: G },
                    flex: { optional: !0, type: "number", min: 0, integer: !0 },
                    flexBasis: { optional: !0, type: U, units: G },
                    flexGrow: {
                      optional: !0,
                      type: "number",
                      min: 0,
                      integer: !0,
                    },
                    flexShrink: {
                      optional: !0,
                      type: "number",
                      min: 0,
                      integer: !0,
                    },
                    font: { optional: !0, type: "string" },
                    fontSize: { optional: !0, type: U, units: G },
                    fontSizeAdjust: { optional: !0, type: U, units: G, min: 0 },
                    fontStretch: { optional: !0, type: U, units: ["%"] },
                    fontWeight: { optional: !0, type: "string" },
                    gap: { optional: !0, type: U, units: G },
                    gridColumnGap: { optional: !0, type: U, units: G },
                    gridGap: { optional: !0, type: U, units: G },
                    gridRowGap: { optional: !0, type: U, units: G },
                    gridTemplateColumns: { optional: !0, type: U, units: G },
                    gridTemplateRows: { optional: !0, type: U, units: G },
                    height: { optional: !0, type: U, units: G, min: 0 },
                    inset: { optional: !0, type: U, units: G, min: 0 },
                    insetBlock: { optional: !0, type: U, units: G },
                    insetBlockEnd: { optional: !0, type: U, units: G },
                    insetBlockStart: { optional: !0, type: U, units: G },
                    insetInline: { optional: !0, type: U, units: G },
                    insetInlineEnd: { optional: !0, type: U, units: G },
                    insetInlineStart: { optional: !0, type: U, units: G },
                    left: { optional: !0, type: U, units: G },
                    letterSpacing: { optional: !0, type: U, units: G },
                    lineClamp: {
                      optional: !0,
                      type: "number",
                      min: 0,
                      integer: !0,
                    },
                    lineHeight: { optional: !0, type: U, units: G, min: 0 },
                    margin: { optional: !0, type: "string" },
                    marginBottom: { optional: !0, type: U, units: G },
                    marginLeft: { optional: !0, type: U, units: G },
                    marginRight: { optional: !0, type: U, units: G },
                    marginTop: { optional: !0, type: U, units: G },
                    maskBorder: { optional: !0, type: U, units: G, min: 0 },
                    maskPosition: { optional: !0, type: "string" },
                    maskSize: { optional: !0, type: "string" },
                    maxHeight: { optional: !0, type: U, units: G, min: 0 },
                    maxWidth: { optional: !0, type: U, units: G, min: 0 },
                    objectPosition: { optional: !0, type: "string" },
                    offset: { optional: !0, type: U, units: G },
                    offsetAnchor: { optional: !0, type: "string" },
                    offsetDistance: { optional: !0, type: U, units: G },
                    offsetPath: { optional: !0, type: "string" },
                    offsetPosition: { optional: !0, type: "string" },
                    offsetRotate: { optional: !0, type: U, units: W },
                    opacity: { optional: !0, type: "number", min: 0, max: 1 },
                    order: { optional: !0, type: "number", integer: !0 },
                    outline: { optional: !0, type: "string" },
                    outlineColor: { optional: !0, type: q },
                    outlineOffset: { optional: !0, type: U, units: G },
                    outlineRadius: { optional: !0, type: U, units: G },
                    outlineRadiusBottomleft: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    outlineRadiusBottomright: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    outlineRadiusTopleft: { optional: !0, type: U, units: G },
                    outlineRadiusTopright: { optional: !0, type: U, units: G },
                    outlineWidth: { optional: !0, type: U, units: G },
                    padding: { optional: !0, type: U, units: G },
                    paddingBottom: { optional: !0, type: U, units: G },
                    paddingLeft: { optional: !0, type: U, units: G },
                    paddingRight: { optional: !0, type: U, units: G },
                    paddingTop: { optional: !0, type: U, units: G },
                    perspective: { optional: !0, type: U, units: G },
                    perspectiveOrigin: { optional: !0, type: "string" },
                    right: { optional: !0, type: U, units: G },
                    rotate: { optional: !0, type: U, units: W },
                    rowGap: { optional: !0, type: U, units: G },
                    scale: { optional: !0, type: "number", min: 0 },
                    scrollbarColor: { optional: !0, type: q },
                    scrollMargin: { optional: !0, type: U, units: G },
                    scrollMarginBlock: { optional: !0, type: U, units: G },
                    scrollMarginBlockEnd: { optional: !0, type: U, units: G },
                    scrollMarginBlockStart: { optional: !0, type: U, units: G },
                    scrollMarginBottom: { optional: !0, type: U, units: G },
                    scrollMarginInline: { optional: !0, type: U, units: G },
                    scrollMarginInlineEnd: { optional: !0, type: U, units: G },
                    scrollMarginInlineStart: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    scrollMarginLeft: { optional: !0, type: U, units: G },
                    scrollMarginRight: { optional: !0, type: U, units: G },
                    scrollMarginTop: { optional: !0, type: U, units: G },
                    scrollPadding: { optional: !0, type: U, units: G },
                    scrollPaddingBlock: { optional: !0, type: U, units: G },
                    scrollPaddingBlockEnd: { optional: !0, type: U, units: G },
                    scrollPaddingBlockStart: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    scrollPaddingBottom: { optional: !0, type: U, units: G },
                    scrollPaddingInline: { optional: !0, type: U, units: G },
                    scrollPaddingInlineEnd: { optional: !0, type: U, units: G },
                    scrollPaddingInlineStart: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    scrollPaddingLeft: { optional: !0, type: U, units: G },
                    scrollPaddingRight: { optional: !0, type: U, units: G },
                    scrollPaddingTop: { optional: !0, type: U, units: G },
                    scrollSnapCoordinate: { optional: !0, type: "string" },
                    scrollSnapDestination: { optional: !0, type: U, units: G },
                    shapeImageThreshold: { optional: !0, type: "string" },
                    shapeMargin: { optional: !0, type: U, units: G },
                    shapeOutside: { optional: !0, type: "string" },
                    tabSize: { optional: !0, type: "string" },
                    textDecoration: { optional: !0, type: "string" },
                    textDecorationColor: { optional: !0, type: q },
                    textDecorationThickness: {
                      optional: !0,
                      type: U,
                      units: G,
                    },
                    textEmphasis: { optional: !0, type: "string" },
                    textEmphasisColor: { optional: !0, type: q },
                    textFillColor: { optional: !0, type: q },
                    textIndent: { optional: !0, type: U, units: G },
                    textShadow: { optional: !0, type: "string" },
                    textStroke: { optional: !0, type: "string" },
                    textStrokeColor: { optional: !0, type: q },
                    textUnderlineOffset: { optional: !0, type: U, units: G },
                    top: { optional: !0, type: U, units: G },
                    transform: {
                      optional: !0,
                      type: "object",
                      props: {
                        translateX: { type: U, units: G, optional: !0 },
                        translateY: { type: U, units: G, optional: !0 },
                        translateZ: { type: U, units: G, optional: !0 },
                        rotate: { type: U, units: W, optional: !0 },
                        rotateX: { type: U, units: W, optional: !0 },
                        rotateY: { type: U, units: W, optional: !0 },
                        rotateZ: { type: U, units: W, optional: !0 },
                        scale: { type: "number", min: 0, optional: !0 },
                        scaleX: { type: "number", min: 0, optional: !0 },
                        scaleY: { type: "number", min: 0, optional: !0 },
                        scaleZ: { type: "number", min: 0, optional: !0 },
                        skewX: { type: U, units: W, optional: !0 },
                        skewY: { type: U, units: W, optional: !0 },
                        perspective: { type: U, units: G, optional: !0 },
                      },
                    },
                    transformOrigin: { optional: !0, type: "string" },
                    verticalAlign: { optional: !0, type: "string" },
                    visibility: { optional: !0, type: "string" },
                    width: { optional: !0, type: U, units: G },
                    wordSpacing: { optional: !0, type: U, units: G },
                    zIndex: { optional: !0, type: "number", integer: !0 },
                    zoom: { optional: !0, type: U, units: ["%"], min: 0 },
                  },
                  transformOrigin: { type: "string" },
                  verticalAlign: { type: "string" },
                  visibility: { type: "string" },
                  width: { type: U, units: G },
                  wordSpacing: { type: U, units: G },
                  zIndex: { type: "number", integer: !0 },
                  zoom: { type: U, units: ["%"], min: 0 },
                },
              },
            },
          ],
          compositeAttributes: F,
        };
      });
    }.call(this, n(26)));
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(4),
      r = n.n(i),
      o = n(1),
      s = n(5),
      a = n.n(s),
      l = Object(o.loadPlugin)(a.a),
      c = document.getElementById("clip"),
      u = new o.Clip({
        css:
          "\n\n.wrapper {\n    background-color: #f7f7f7;\n    height:100%;\n    width:100%;\n    margin:0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .container {\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    overflow: hidden;\n    color: #252056;\n    font-family: 'Montserrat', sans-serif;\n  }\n  .title {\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .subTitle {\n    font-size: 30px;\n  }\n  .text{\n    font-size: 24px;\n    font-weight: 100;\n  }\n  .boxWidth,.boxColor,.boxRotate,.boxMove,.boxBorder {\n    background: #252056;\n    width: 250px;\n    height: 30px;\n    position: relative;\n    margin-left: 30px\n  }\n  .boxBorder{\n    width: 30px;\n    border-radius: 0%;\n  }\n  .boxMove{\n    left:0;\n    width: 30px;\n  }\n\n  .boxWidth{\n    width: 30px;\n  }\n\n  .boxColor{\n    background: rgb(37, 32, 86);\n  }\n\n  .boxRotate{\n    width:30px;\n    transform: rotate(0deg);\n  }\n\n  .demo{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    position: relative;\n  }\n  .demoWidth,.demoColor,.demoRotate,.demoMove,.demoBorder{\n    display: flex;\n    position: relative;\n    width: 100%;\n    justify-content: start;\n  }\n  .cls-1{\n    stroke-dasharray: 6000;\n    stroke-dashoffset: 6000;\n  }\n",
        html:
          '\n<div class="wrapper">\n<div class="container">\n  <div class="title">MotorCortex</div>\n  <div class="subTitle">Anime plugin</div>\n  <div class="text">Demo:</div>\n  <div class="demo">\n    <div class="demoWidth">\n      <div class="text">width :</div>\n      <div class="boxWidth"></div>\n    </div>\n    <div class="demoColor">\n      <div class="text">background color :</div>\n      <div class="boxColor"></div>\n    </div>\n    <div class="demoRotate">\n      <div class="text">Rotate :</div>\n      <div class="boxRotate"></div>\n    </div>\n    <div class="demoMove">\n      <div class="text">Move with easings:</div>\n      <div class="boxMove"> </div>\n    </div>\n    <div class="demoBorder">\n      <div class="text">Border :</div>\n      <div class="boxBorder"> </div>\n    </div>\n  </div>\n\n  <div class="subTitle svgText">svg </div>\n  <div class="svgBorder"> <svg xmlns="http://www.w3.org/2000/svg" width="300px" viewBox="0 0 495 464.3"><defs><style>.cls-1{fill:none;stroke:#252056;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:none;}</style></defs><title>mc2</title><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z" transform="translate(-2.5 -16.6)"/></g><g id="Layer_2" data-name="Layer 2"><path class="cls-2" d="M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z" transform="translate(-2.5 -16.6)"/></g></svg> </div>\n\n</div>\n</div>',
        host: c,
        fonts: [
          {
            type: "google-font",
            src:
              "https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700,900&display=swap",
          },
        ],
        containerParams: { width: "612px", height: "100%" },
      }),
      d = new l.Anime(
        { animatedAttrs: { width: "250px" } },
        { duration: 1700, selector: ".boxWidth", easing: "easeOutQuad" }
      ),
      p = new l.Anime(
        {
          animatedAttrs: { background: "rgb(255, 0, 85)" },
          initialValues: { background: "rgb(37, 32, 86)" },
        },
        { duration: 1700, selector: ".boxColor", easing: "easeOutQuad" }
      ),
      h = new l.Anime(
        {
          animatedAttrs: { width: "30px", transform: { rotate: "360deg" } },
          initialValues: { width: "30cm", transform: { rotate: "0deg" } },
        },
        { duration: 1700, selector: ".boxRotate", easing: "easeOutQuad" }
      ),
      f = new l.Anime(
        { animatedAttrs: { left: "220px" }, initialValues: { left: "0px" } },
        { duration: 1700, selector: ".boxMove", easing: "easeOutBounce" }
      ),
      m = new l.Anime(
        {
          animatedAttrs: { borderRadius: "50%" },
          initialValues: { borderRadius: "0%" },
        },
        { duration: 1700, selector: ".boxBorder" }
      ),
      v = new l.Anime(
        { animatedAttrs: { opacity: 1 }, initialValues: { opacity: 0 } },
        { duration: 1e3, selector: ".svgText" }
      ),
      g = new l.Anime(
        {
          animatedAttrs: { strokeDashoffset: 0 },
          initialValues: { strokeDashoffset: 6e3 },
        },
        { duration: 3e3, selector: ".cls-1" }
      ),
      y = new o.Group();
    y.addIncident(p, 0),
      u.addIncident(d, 0),
      u.addIncident(y, 4e3),
      u.addIncident(h, 3400),
      u.addIncident(f, 5100),
      u.addIncident(m, 6800),
      u.addIncident(v, 8500),
      u.addIncident(g, 9500),
      new r.a({ clip: u, theme: "mc-blue", preview: !1, pointerEvents: !1 }),
      (window.myclip = u);
  },
  function (t, e, n) {
    "use strict";
    t.exports = {
      name: "mc-player",
      set playerName(t) {
        this.name += "-" + t;
      },
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n) {
      return "\n.background {\n  background-color: black;\n  width:100%;\n  height:"
        .concat(
          t["background-height"],
          ";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n.full-screen #"
        )
        .concat(
          e,
          "-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n.full-screen #"
        )
        .concat(
          e,
          "-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n.svg, .svg path {\n  fill: "
        )
        .concat(t["svg-color"], ";\n}\n\n.svg.arrow {\n  stroke: ")
        .concat(t["svg-color"], ";\n}\n\n.pointer-event-panel {\n  height: ")
        .concat(
          t["pointer-event-panel-height"],
          ";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#"
        )
        .concat(
          e,
          "-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#"
        )
        .concat(
          e,
          "-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n.svg-selected svg{\n  fill: "
        )
        .concat(t["svg-selected-color"], ";\n  stroke: ")
        .concat(t["svg-selected-color"], ";\n}\n#")
        .concat(e, "-hover-display{\n    border: ")
        .concat(
          t["preview-border"],
          ";\n    display: flex;\n    overflow:hidden;\n    background-color: black;\n    position: absolute;\n    bottom: 14px;\n    left: 0px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n#"
        )
        .concat(e, "-hover-millisecond {\n  background-color: ")
        .concat(
          t["hms-background-color"],
          ";\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n}\n#"
        )
        .concat(e, ",\n#")
        .concat(e, " ::before,\n#")
        .concat(e, " :::after,\n#")
        .concat(e, " div,\n#")
        .concat(e, " p,\n#")
        .concat(e, " span,\n#")
        .concat(e, " ul,\n#")
        .concat(
          e,
          " li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: "
        )
        .concat(
          t.color,
          ';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#'
        )
        .concat(
          e,
          " {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + "
        )
        .concat(
          t["controls-position"],
          ");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: "
        )
        .concat(
          t.color,
          ";\n  pointer-events:auto !important;\n}\n\n.force-show-controls {\n  height: 44px !important;\n  overflow:unset !important;\n}\n\n"
        )
        .concat(
          n.theme.includes("position-bottom")
            ? "\n    #".concat(
                e,
                "-controls {\n      height: 44px !important;\n      overflow:unset !important;\n    }\n    "
              )
            : "#"
                .concat(e, ":hover #")
                .concat(
                  e,
                  "-controls {\n  height: 44px;\n  overflow:unset;\n}\n"
                ),
          "\n\n#"
        )
        .concat(e, ":hover {\n  pointer-events:none;\n}\n\n#")
        .concat(
          e,
          "-settings-speed-hide {\n  text-align:right;\n}\n\n.grad {\n  background-image: linear-gradient(\n    rgba(100,100,100,00.01),\n    rgba(100,100,100,00.02),\n    rgba(100,100,100,00.03),\n    rgba(100,100,100,0.04),\n    rgba(100,100,100,0.05),\n    rgba(0,0,0,0.06),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.08),\n    rgba(0,0,0,0.09),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.9),\n    rgba(0,0,0,1)\n  );\n  position:absolute;\n  width:100%;\n  height:"
        )
        .concat(
          t["grad-height"],
          ";\n  left:0px;\n  bottom:0px;\n  z-index:100;\n}\n\n#"
        )
        .concat(e, "-controls {\n  touch-action: none;\n  background-color: ")
        .concat(t["background-color"], ";\n  border: ")
        .concat(t["controls-border"], ";\n  position: absolute;\n  bottom: ")
        .concat(
          t["controls-bottom"],
          ";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 0px;\n  overflow:hidden;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: height 0.2s ease;\n  -moz-transition: height 0.2s ease;\n  transition: height 0.2s ease;\n}\n\n#"
        )
        .concat(
          e,
          "-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: "
        )
        .concat(
          t["totalbar-color"],
          ";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#"
        )
        .concat(
          e,
          "-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: "
        )
        .concat(t["loopbar-color"], ";\n}\n\n.")
        .concat(e, "-loop-boundaries::before {\n  ")
        .concat(t["loopbar-boundaries-style::before"], "\n\n}\n.")
        .concat(
          e,
          "-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:"
        )
        .concat(
          t["loopbar-boundaries-color"],
          ";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  "
        )
        .concat(t["loopbar-boundaries-style"], "\n}\n\n.")
        .concat(e, "-loop-boundaries::after {\n  ")
        .concat(t["loopbar-boundaries-style::after"], "\n\n}\n\n#")
        .concat(
          e,
          "-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#"
        )
        .concat(
          e,
          "-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: "
        )
        .concat(t["runningbar-color"], ";\n}\n\n#")
        .concat(
          e,
          "-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
        )
        .concat(
          t["cursor-color"],
          ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
        )
        .concat(e, "-cursor::before {\n  ")
        .concat(t["cursor-style::before"], "\n}\n\n#")
        .concat(e, "-cursor::after {\n  ")
        .concat(t["cursor-style::after"], "\n}\n\n#")
        .concat(e, "-left-controls,#")
        .concat(
          e,
          "-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#"
        )
        .concat(
          e,
          "-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#"
        )
        .concat(e, "-left-controls > div,#")
        .concat(
          e,
          "-right-controls > div {\n    display: inline-flex;\n    align-items:center;\n   margin:0 10px 0 10px;\n}\n\n\n\n/*#"
        )
        .concat(
          e,
          "-time-display {\n  display: table;\n  text-align: center;\n  width: auto;\n  height: 34px;\n  position: absolute;\n  left: 90px;\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n}\n*/\n#"
        )
        .concat(
          e,
          "-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#"
        )
        .concat(e, "-status-btn {\n  opacity: ")
        .concat(t["button-opacity"], ";\n}\n#")
        .concat(e, "-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#")
        .concat(e, "-volume {\n  opacity: ")
        .concat(t["button-opacity"], ";\n  position: relative;\n}\n#")
        .concat(e, "-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#")
        .concat(
          e,
          "-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: "
        )
        .concat(
          t["loopbar-color"],
          ";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#"
        )
        .concat(
          e,
          "-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#"
        )
        .concat(
          e,
          "-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: "
        )
        .concat(t.color, ";\n  position:relative;\n  bottom:0px;\n}\n\n#")
        .concat(
          e,
          "-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
        )
        .concat(t.color, ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n.")
        .concat(
          e,
          "-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:"
        )
        .concat(
          t["background-color"],
          ";\n  line-height:10px;\n  font-size:10px;\n}\n\n#"
        )
        .concat(e, "-loop-time {\n  margin: 7px;\n}\n\n#")
        .concat(
          e,
          "-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#"
        )
        .concat(e, "-loop-btn {\n  opacity: ")
        .concat(
          t["button-opacity"],
          ";\n  display:flex;\n  align-items:center;\n}\n\n\n#"
        )
        .concat(e, "-settings-btn {\n  opacity: ")
        .concat(t["button-opacity"], ";\n}\n\n#")
        .concat(e, "-full-screen-btn {\n  opacity: ")
        .concat(t["button-opacity"], ";\n}\n\n.")
        .concat(e, "-speed-btn {\n  opacity: ")
        .concat(t["button-opacity"], ";\n  height: 14px;\n}\n\n#")
        .concat(
          e,
          "-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:101;\n  background-color: "
        )
        .concat(t["settings-background-color"], ";\n  bottom: ")
        .concat(t["settings-panel-bottom"], ";\n  border: ")
        .concat(
          t.border,
          ";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n."
        )
        .concat(e, "-hide {\n  display:none !important;\n}\n\n#")
        .concat(
          e,
          "-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: "
        )
        .concat(
          t["speedbar-color"],
          ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
        )
        .concat(
          16 * n.speedValues.length,
          "px;\n  float: left;\n  margin-right:15px;\n}\n\n#"
        )
        .concat(
          e,
          "-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: "
        )
        .concat(
          16 * n.speedValues.length,
          "px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#"
        )
        .concat(e, "-speed-value-bar:hover,\n#")
        .concat(e, "-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#")
        .concat(e, "-volumebar:hover,\n#")
        .concat(e, "-volumebar-helper:hover,\n#")
        .concat(e, "-volume-btn:hover,\n#")
        .concat(e, "-volumebar:active,\n#")
        .concat(e, "-volumebar-helper:active,\n#")
        .concat(e, "-volume-btn:active {\n  cursor:pointer;\n}\n\n#")
        .concat(
          e,
          "-speed-cursor {\n  position: absolute;\n  background-color: "
        )
        .concat(
          t["speedbar-cursor-color"],
          ";\n  top: 0px;\n  left: 0px;\n}\n\n#"
        )
        .concat(
          e,
          "-speed-cursor div {\n  position: absolute;\n  background-color: "
        )
        .concat(
          t["speedbar-cursor-color"],
          ";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#"
        )
        .concat(e, "-time-separator{\n  margin:0 3px;\n}\n#")
        .concat(e, "-speed-cursor:hover {\n  cursor: pointer;\n}\n\n.")
        .concat(e, "-speed-value-step {\n  width: 16px;\n  background-color: ")
        .concat(
          t["speedbar-color"],
          ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#"
        )
        .concat(
          e,
          "-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
        )
        .concat(16 * n.speedValues.length, "px;\n  text-align: left;\n}\n\n.")
        .concat(
          e,
          "-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#"
        )
        .concat(
          e,
          "-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: "
        )
        .concat(t.color, ";\n}\n\n/*#")
        .concat(e, "-speed-settings {\n  height: ")
        .concat(16 * n.speedValues.length + 32 + 10 - 2, "px;\n}*/\n\n#")
        .concat(e, "-speed-settings li.no-hover { \n  height: ")
        .concat(16 * n.speedValues.length + 10 - 2, "px !important; \n}\n#")
        .concat(e, "-settings-panel.")
        .concat(
          e,
          "-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: "
        )
        .concat(
          16 * n.speedValues.length + 32 + 20,
          "px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-settings-panel.")
        .concat(e, "-settings-speed-panel .")
        .concat(e, "-speed-btn {\n  float: left;\n}\n\n.")
        .concat(
          e,
          "-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#"
        )
        .concat(
          e,
          "-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#"
        )
        .concat(e, "-settings-panel .")
        .concat(e, "-speed-btn {\n  float: right;\n}\n\n#")
        .concat(
          e,
          "-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#"
        )
        .concat(e, "-settings-panel.")
        .concat(
          e,
          "-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#"
        )
        .concat(
          e,
          "-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\ndiv."
        )
        .concat(e, "-speed-value:hover {\n  background-color: ")
        .concat(t["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
        .concat(
          e,
          "-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#"
        )
        .concat(
          e,
          "-settings-panel ul li label {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n.switch input {\n  display: none;\n}\n\n.settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n.settings-switch::after {\n  clear: both;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: "
        )
        .concat(
          t["slider-off-color"],
          ';\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: '
        )
        .concat(
          t["slider-on-color"],
          ";\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px "
        )
        .concat(
          t["slider-on-color"],
          ";\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n\n.m-fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n.m-fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n\n#"
        )
        .concat(e, "-settings-panel ul li:hover {\n  background-color: ")
        .concat(t["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
        .concat(
          e,
          "-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#"
        )
        .concat(e, "-loopbar:hover {\n  cursor: pointer;\n}\n\n#")
        .concat(e, "-status-btn:hover {\n  cursor: pointer;\n}\n\n#")
        .concat(e, "-controls:active #")
        .concat(e, "-cursor,\n#")
        .concat(e, "-controls:hover #")
        .concat(
          e,
          "-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-volume .")
        .concat(
          e,
          "-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-volume .")
        .concat(
          e,
          "-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-time-display.")
        .concat(
          e,
          "-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-settings-speed:hover .")
        .concat(
          e,
          "-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(
          e,
          "-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(e, "-loop-btn:hover,\n#")
        .concat(
          e,
          "-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#"
        )
        .concat(
          e,
          "-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
        )
        .concat(
          e,
          "-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n"
        )
        .concat(t["theme-style"], "\n");
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return {
        default: {
          "settings-background-color": "whitesmoke",
          "hms-background-color": "whitesmoke",
          "background-color": "whitesmoke",
          "grad-height": "0px",
          color: "black",
          "svg-color": "black",
          "loopbar-color": "#808086",
          "speedbar-color": "#999",
          "runningbar-color": "red",
          "cursor-color": "red",
          "speedbar-cursor-color": "red",
          "button-opacity": "1",
          "hover-color": "rgba(200, 200, 200, 0.5)",
          "slider-off-color": "#ccc",
          "slider-on-color": "red",
          "preview-border": "1px solid rgba(0,0,0,1)",
          border: "1px solid rgba(255,255,255,0.2)",
          "controls-border": "none",
          "svg-selected-color": "red",
          "loopbar-boundaries-style::before": "",
          "loopbar-boundaries-style::after": "",
          "theme-style": "",
          "loopbar-boundaries-color": "#808086",
        },
        dark: {
          "settings-background-color": "black",
          "hms-background-color": "black",
          "background-color": "black",
          "grad-height": "0px",
          color: "white",
          "svg-color": "white",
          "loopbar-color": "#808086",
          "speedbar-color": "#999",
          "runningbar-color": "red",
          "cursor-color": "red",
          "speedbar-cursor-color": "red",
          "button-opacity": "1",
          "hover-color": "rgba(90, 90, 90, 0.5)",
          "slider-off-color": "#ccc",
          "slider-on-color": "red",
          "preview-border": "1px solid rgba(0,0,0,1)",
          border: "1px solid rgba(255,255,255,0.2)",
          "controls-border": "none",
          "svg-selected-color": "red",
          "loopbar-boundaries-style::before": "",
          "loopbar-boundaries-style::after": "",
          "theme-style": "",
          "loopbar-boundaries-color": "#808086",
        },
        whiteGold: {
          "settings-background-color": "white",
          "hms-background-color": "white",
          "background-color": "white",
          "grad-height": "0px",
          color: "#a17f1a",
          "svg-color": "#a17f1a",
          "loopbar-color": "#808086",
          "speedbar-color": "#999",
          "runningbar-color": "#a17f1a",
          "cursor-color": "#a17f1a",
          "speedbar-cursor-color": "#a17f1a",
          "button-opacity": "1",
          "hover-color": "rgba(200, 200, 200, 0.5)",
          "slider-off-color": "#ccc",
          "slider-on-color": "#a17f1a",
          "preview-border": "1px solid rgba(0,0,0,1)",
          border: "1px solid rgba(255,255,255,0.2)",
          "controls-border": "none",
          "svg-selected-color": "red",
          "loopbar-boundaries-style::before": "",
          "loopbar-boundaries-style::after": "",
          "theme-style": "",
          "loopbar-boundaries-color": "#808086",
        },
        darkGold: {
          "settings-background-color": "black",
          "hms-background-color": "black",
          "background-color": "black",
          "grad-height": "0px",
          color: "#a17f1a",
          "svg-color": "#a17f1a",
          "loopbar-color": "#808086",
          "speedbar-color": "#999",
          "runningbar-color": "#a17f1a",
          "cursor-color": "#a17f1a",
          "speedbar-cursor-color": "#a17f1a",
          "button-opacity": "1",
          "hover-color": "rgba(90, 90, 90, 0.5)",
          "slider-off-color": "#ccc",
          "slider-on-color": "#a17f1a",
          "preview-border": "1px solid rgba(0,0,0,1)",
          border: "1px solid rgba(255,255,255,0.2)",
          "controls-border": "none",
          "svg-selected-color": "red",
          "loopbar-boundaries-style::before": "",
          "loopbar-boundaries-style::after": "",
          "theme-style": "",
          "loopbar-boundaries-color": "#808086",
        },
        transparent: {
          "background-color": "transparent",
          "settings-background-color": "rgba(0,0,0,0.5)",
          "hms-background-color": "rgba(0,0,0,0.5)",
          "preview-border": "1px solid rgba(0,0,0,1)",
          color: "#999",
          "grad-height": "60px",
          "svg-color": "#999",
          "loopbar-color": "#808086",
          "speedbar-color": "#999",
          "runningbar-color": "red",
          "cursor-color": "#9e2d11",
          "cursor-style::before":
            '\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',
          "cursor-style::after":
            '\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',
          "speedbar-cursor-color": "red",
          "button-opacity": "1",
          "hover-color": "rgba(200, 200, 200, 0.5)",
          "slider-off-color": "#ccc",
          "slider-on-color": "red",
          border: "1px solid rgba(255,255,255,0.1)",
          "controls-border": "1px solid rgba(255,255,255,0.1)",
          "svg-selected-color": "red",
          "loopbar-boundaries-style":
            "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
          "loopbar-boundaries-style::before":
            '\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
          "loopbar-boundaries-style::after":
            '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
          "theme-style": "\n        #".concat(
            e,
            "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
          ),
        },
        "mc-green": {
          "background-color": "#141416",
          "settings-background-color": "rgba(0,0,0,0.5)",
          "hms-background-color": "rgba(0,0,0,0.5)",
          "preview-border": "1px solid rgba(0,0,0,1)",
          color: "#999",
          "grad-height": "0px",
          "svg-color": "#999",
          "loopbar-color": "rgba(0,184,139,0.2)",
          "loopbar-boundaries-color": "#00b88b",
          "totalbar-color": "rgba(255, 255, 255, 0.11)",
          "speedbar-color": "#999",
          "runningbar-color": "#00b88b",
          "cursor-color": "#00b88b",
          "speedbar-cursor-color": "#00b88b",
          "button-opacity": "1",
          "hover-color": "rgba(0,184,139,0.2)",
          "slider-off-color": "#ccc",
          "slider-on-color": "#00b88b",
          border: "1px solid rgba(255,255,255,0.1)",
          "controls-border": "1px solid #151515",
          "svg-selected-color": "#00b88b",
          "loopbar-boundaries-style":
            "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
          "loopbar-boundaries-style::before":
            '\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
          "loopbar-boundaries-style::after":
            '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
          "theme-style": "\n        #".concat(
            e,
            "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
          ),
        },
        "mc-blue": {
          "background-color": "#141416",
          "settings-background-color": "rgba(0,0,0,0.5)",
          "hms-background-color": "rgba(0,0,0,0.5)",
          "preview-border": "1px solid rgba(0,0,0,1)",
          color: "#999",
          "grad-height": "0px",
          "svg-color": "#999",
          "loopbar-color": "rgba(0,153,225,0.2)",
          "loopbar-boundaries-color": "#0099e1",
          "totalbar-color": "rgba(255, 255, 255, 0.11)",
          "speedbar-color": "#999",
          "runningbar-color": "#0099e1",
          "cursor-color": "#0099e1",
          "speedbar-cursor-color": "#0099e1",
          "button-opacity": "1",
          "hover-color": "rgba(0,153,225,0.2)",
          "slider-off-color": "#ccc",
          "slider-on-color": "#0099e1",
          border: "1px solid rgba(255,255,255,0.1)",
          "controls-border": "1px solid #151515",
          "svg-selected-color": "#0099e1",
          "loopbar-boundaries-style":
            "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
          "loopbar-boundaries-style::before":
            '\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
          "loopbar-boundaries-style::after":
            '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
          "theme-style": "\n        #".concat(
            e,
            "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
          ),
        },
        "on-top": {
          "background-height": "100%",
          "pointer-event-panel-height": "calc(100% - 44px)",
          "controls-bottom": "0px",
          "settings-panel-bottom": "48px",
          "controls-position": "0px",
        },
        "position-bottom": {
          "background-height": "calc(100% - 44px)",
          "pointer-event-panel-height": "calc(100% - 44px)",
          "controls-bottom": "-0px",
          "settings-panel-bottom": "48px",
          "controls-position": "40px",
        },
      }[t];
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.elid,
      o = i.elcreate,
      s = n(2),
      a = n(11);
    t.exports = function (t) {
      t.elements = {};
      var e = t.clip.props.host;
      if (
        ((e.style.display = "flex"),
        (e.style.justifyContent = "center"),
        (e.style.alignItems = "center"),
        (t.clip.props.host.style.position = "relative"),
        (t.clip.props.host.style.zIndex = "0"),
        (t.elements.mcPlayer = o("div")),
        (t.elements.mcPlayer.id = "".concat(t.name)),
        (t.elements.mcPlayer.className = "".concat(t.className)),
        (t.elements.mcPlayer.innerHTML = a({ svg: s, name: t.name })),
        "string" == typeof t.options.host)
      ) {
        var n = document.querySelectorAll(t.options.host);
        for (var i in n) isNaN(i) || n[i].appendChild(t.elements.mcPlayer);
      } else t.options.host.appendChild(t.elements.mcPlayer);
      for (var l in ((t.elements.pointerEventPanel = r(
        "".concat(t.name, "-pointer-event-panel")
      )),
      (t.elements.listenerHelper = r("".concat(t.name, "-listener-helper"))),
      (t.elements.loopBar = r("".concat(t.name, "-loopbar"))),
      (t.elements.totalBar = r("".concat(t.name, "-totalbar"))),
      (t.elements.indicator = r("".concat(t.name, "-indicator"))),
      (t.elements.loopButton = r("".concat(t.name, "-loop-btn"))),
      (t.elements.volumeBar = r("".concat(t.name, "-volumebar"))),
      (t.elements.totalTime = r("".concat(t.name, "-time-total"))),
      (t.elements.volumeControl = r("".concat(t.name, "-volume"))),
      (t.elements.volumeBtn = r("".concat(t.name, "-volume-btn"))),
      (t.elements.runningBar = r("".concat(t.name, "-runningbar"))),
      (t.elements.loopBarEnd = r("".concat(t.name, "-loopbar-end"))),
      (t.elements.statusButton = r("".concat(t.name, "-status-btn"))),
      (t.elements.speedBar = r("".concat(t.name, "-speed-value-bar"))),
      (t.elements.currentTime = r("".concat(t.name, "-time-current"))),
      (t.elements.timeDisplay = r("".concat(t.name, "-time-display"))),
      (t.elements.speedCurrent = r("".concat(t.name, "-speed-current"))),
      (t.elements.loopBarStart = r("".concat(t.name, "-loopbar-start"))),
      (t.elements.volumeCursor = r("".concat(t.name, "-volume-cursor"))),
      (t.elements.settingsButton = r("".concat(t.name, "-settings-btn"))),
      (t.elements.donkeyclipButton = r("".concat(t.name, "-dc-btn"))),
      (t.elements.timeSeparator = r("".concat(t.name, "-time-separator"))),
      (t.elements.settingsPanel = r("".concat(t.name, "-settings-panel"))),
      (t.elements.settingsMainPanel = r("".concat(t.name, "-main-settings"))),
      (t.elements.fullScreenButton = r("".concat(t.name, "-full-screen-btn"))),
      (t.elements.volumeBarHelper = r("".concat(t.name, "-volumebar-helper"))),
      (t.elements.volumeBarActive = r("".concat(t.name, "-volumebar-active"))),
      (t.elements.settingsSpeedPanel = r("".concat(t.name, "-speed-settings"))),
      (t.elements.settingsShowVolume = r(
        "".concat(t.name, "-settings-volume")
      )),
      (t.elements.settingsShowPreview = r(
        "".concat(t.name, "-settings-preview")
      )),
      (t.elements.settingsPointerEvents = r(
        "".concat(t.name, "-settings-pointer-events")
      )),
      (t.elements.speedBarHelper = r(
        "".concat(t.name, "-speed-value-helperbar")
      )),
      (t.elements.settingsShowIndicator = r(
        "".concat(t.name, "-settings-indicator")
      )),
      (t.elements.settingsSpeedButtonShow = r(
        "".concat(t.name, "-settings-speed-show")
      )),
      (t.elements.settingsSpeedButtonHide = r(
        "".concat(t.name, "-settings-speed-hide")
      )),
      (t.elements.volumeBarActive.style.width = 100 * t.settings.volume + "%"),
      (t.elements.currentTime.innerHTML = t.timeFormat(0)),
      (t.elements.totalTime.innerHTML = t.timeFormat(t.clip.duration)),
      (t.elements.timeSeparator.innerHTML = "/"),
      t.elements.settingsPanel.classList.add(
        "m-fadeOut",
        "".concat(t.name, "-hide")
      ),
      t.options.showIndicator
        ? ((t.elements.indicator.style.visibility = "visible"),
          (t.elements.statusButton.style.width = "35px"),
          (t.elements.statusButton.style.height = "20px"),
          (t.elements.statusButton.style.bottom = "5px"))
        : (t.elements.indicator.style.visibility = "hidden"),
      (t.elements.indicator.innerHTML = t.clip.runTimeInfo.state),
      (t.elements.settingsSpeedPanel.style.display = "none"),
      t.elements.settingsSpeedPanel
        .getElementsByTagName("li")[1]
        .classList.add("no-hover"),
      (t.elements.loopBarStart.style.left = "0%"),
      t.elements.loopBarStart.classList.add(
        "m-fadeOut",
        "".concat(t.name, "-hide")
      ),
      (t.elements.loopBarEnd.style.left = "100%"),
      t.elements.loopBarEnd.classList.add(
        "m-fadeOut",
        "".concat(t.name, "-hide")
      ),
      (t.elements.loopStartTime = r("".concat(t.name, "-loopbar-start-time"))),
      (t.elements.loopEndTime = r("".concat(t.name, "-loopbar-end-time"))),
      (t.elements.editableLoopStartTime = document.createElement("input")),
      (t.elements.editableLoopStartTime.type = "text"),
      (t.elements.editableLoopStartTime.size =
        r("".concat(t.name, "-time-total")).innerHTML.length + 1),
      (t.elements.editableLoopStartTime.maxLength = r(
        "".concat(t.name, "-time-total")
      ).innerHTML.length),
      (t.elements.editableLoopStartTime.style.height = r(
        "".concat(t.name, "-time-total")
      ).offsetHeight),
      (t.elements.editableLoopStartTime.value = r(
        "".concat(t.name, "-loopbar-start-time")
      ).innerHTML),
      (t.elements.editableLoopStartTime.style.fontSize = "8px"),
      (t.elements.editableLoopEndTime = document.createElement("input")),
      (t.elements.editableLoopEndTime.type = "text"),
      (t.elements.editableLoopEndTime.size =
        r("".concat(t.name, "-time-total")).innerHTML.length + 1),
      (t.elements.editableLoopEndTime.maxLength = r(
        "".concat(t.name, "-time-total")
      ).innerHTML.length),
      (t.elements.editableLoopEndTime.style.height = r(
        "".concat(t.name, "-time-total")
      ).offsetHeight),
      (t.elements.editableLoopEndTime.value = r(
        "".concat(t.name, "-loopbar-start-time")
      ).innerHTML),
      (t.elements.editableLoopEndTime.pattern = "d*"),
      (t.elements.editableLoopEndTime.style.fontSize = "8px"),
      r("".concat(t.name, "-loop-time")).classList.add(
        "m-fadeOut",
        "".concat(t.name, "-hide")
      ),
      r("".concat(t.name, "-hover-display")).classList.add("m-fadeOut"),
      (r("".concat(t.name, "-show-volume-checkbox")).checked =
        t.options.showVolume),
      (r("".concat(t.name, "-show-indicator-checkbox")).checked =
        t.options.showIndicator),
      (r("".concat(t.name, "-show-preview-checkbox")).checked =
        t.options.preview),
      (r("".concat(t.name, "-pointer-events-checkbox")).checked =
        t.options.pointerEvents),
      t.options.pointerEvents
        ? ((t.elements.mcPlayer.style.pointerEvents = "none"),
          (t.elements.pointerEventPanel.style.pointerEvents = "auto"),
          (r("".concat(t.name, "-controls")).style.pointerEvents = "auto"),
          (t.elements.settingsPanel.style.pointerEvents = "auto"))
        : ((t.elements.mcPlayer.style.pointerEvents = "none"),
          (t.elements.pointerEventPanel.style.pointerEvents = "none"),
          (r("".concat(t.name, "-controls")).style.pointerEvents = "auto"),
          (t.elements.settingsPanel.style.pointerEvents = "auto")),
      (t.elements.listenerHelper.style.pointerEvents = "none"),
      t.options.showVolume
        ? ((t.elements.timeDisplay.style.left = ""),
          (t.elements.volumeControl.style.visibility = "visible"))
        : ((t.elements.timeDisplay.style.left = "45px"),
          (t.elements.volumeControl.style.visibility = "hidden"),
          t.elements.volumeControl.classList.toggle("".concat(t.name, "-hide")),
          t.elements.volumeControl.classList.toggle(
            "".concat(t.name, "-volume-width-transition")
          )),
      t.options.speedValues)) {
        var c = o("div");
        c.className = "".concat(t.name, "-speed-value-step");
        var u = o("div");
        (u.className = "".concat(t.name, "-speed-value")),
          (u.dataset.speedValue = t.options.speedValues[l]),
          (u.innerHTML = t.options.speedValues[l]),
          (u.dataset.zone = l),
          r("".concat(t.name, "-speed-value")).prepend(u),
          t.elements.speedBar.prepend(c);
      }
      !1 === t.options.buttons.fullScreen &&
        t.elements.fullScreenButton.remove(),
        !1 === t.options.buttons.settings && t.elements.settingsButton.remove(),
        !1 === t.options.buttons.donkeyclip &&
          t.elements.donkeyclipButton.remove(),
        !1 === t.options.buttons.loop && t.elements.loopButton.remove();
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return '\n  <div\n    class="pointer-event-panel"\n    id="'
        .concat(
          t.name,
          '-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="'
        )
        .concat(
          t.name,
          '-listener-helper"\n  ></div>\n  <div class="grad"></div>\n  <div class="background"></div>\n  <div id="'
        )
        .concat(t.name, '-controls">\n    <div id="')
        .concat(t.name, '-totalbar">\n      <div id="')
        .concat(t.name, '-hover-display">\n        <div id="')
        .concat(
          t.name,
          '-hover-millisecond"></div>\n      </div>\n      <div id="'
        )
        .concat(t.name, '-loopbar">\n        <div\n          class="')
        .concat(t.name, '-loop-boundaries"\n          id="')
        .concat(
          t.name,
          '-loopbar-start"\n        ></div>\n        <div\n          class="'
        )
        .concat(t.name, '-loop-boundaries"\n          id="')
        .concat(t.name, '-loopbar-end"\n        ></div>\n        <div id="')
        .concat(t.name, '-helperbar"></div>\n        <div id="')
        .concat(t.name, '-runningbar">\n          <div id="')
        .concat(
          t.name,
          '-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="'
        )
        .concat(t.name, '-left-controls">\n      <div id="')
        .concat(t.name, '-status-btn">\n        ')
        .concat(t.svg.playSVG, '\n        <span id="')
        .concat(t.name, '-indicator"></span>\n      </div>\n      <div id="')
        .concat(t.name, '-volume">\n        <div id="')
        .concat(t.name, '-volume-btn">\n          ')
        .concat(t.svg.volumeSVG, '\n        </div>\n        <div id="')
        .concat(t.name, '-volumebar-helper"></div>\n        <div id="')
        .concat(t.name, '-volumebar">\n            <div id="')
        .concat(t.name, '-volumebar-active">\n              <div id="')
        .concat(
          t.name,
          '-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="'
        )
        .concat(t.name, '-time-display">\n        <span id="')
        .concat(t.name, '-time-current"></span>\n        <span id="')
        .concat(t.name, '-time-separator"></span>\n        <span id="')
        .concat(
          t.name,
          '-time-total"></span>\n      </div>\n    </div>\n    <div id="'
        )
        .concat(t.name, '-right-controls">\n      <div\n        id="')
        .concat(
          t.name,
          '-loop-btn-container"\n      >\n        <div\n          id="'
        )
        .concat(t.name, '-loop-btn"\n        >')
        .concat(t.svg.loopSVG, '</div>\n        <div\n          id="')
        .concat(
          t.name,
          '-loop-time"\n        >\n          <span\n            id="'
        )
        .concat(t.name, '-loopbar-start-time"\n            class="')
        .concat(
          t.name,
          '-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="'
        )
        .concat(t.name, '-loopbar-end-time"\n            class="')
        .concat(
          t.name,
          '-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="'
        )
        .concat(t.name, '-settings-btn"\n      >')
        .concat(t.svg.settingsSVG, '</div>\n      <div\n        id="')
        .concat(t.name, '-dc-btn"\n      >\n        ')
        .concat(t.svg.dcSVG, '\n      </div>\n      \n      <div\n        id="')
        .concat(t.name, '-full-screen-btn"\n      >')
        .concat(
          t.svg.fullScreenSVG,
          '</div>\n    </div>\n    \n\n  </div>\n  <div id="'
        )
        .concat(t.name, '-settings-panel">\n    <ul id="')
        .concat(t.name, '-main-settings">\n      <li id="')
        .concat(
          t.name,
          '-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="'
        )
        .concat(
          t.name,
          '-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
        )
        .concat(
          t.name,
          '-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="'
        )
        .concat(
          t.name,
          '-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
        )
        .concat(
          t.name,
          '-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="'
        )
        .concat(
          t.name,
          '-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
        )
        .concat(
          t.name,
          '-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="'
        )
        .concat(
          t.name,
          '-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
        )
        .concat(
          t.name,
          '-settings-speed-show">\n        <label>Speed</label>\n        <div class="'
        )
        .concat(t.name, '-speed-btn">')
        .concat(t.svg.arrowRightSVG, '</div>\n        <span id="')
        .concat(
          t.name,
          '-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="'
        )
        .concat(t.name, '-speed-settings">\n      <li id="')
        .concat(t.name, '-settings-speed-hide">\n        <div class="')
        .concat(t.name, '-speed-btn">')
        .concat(t.svg.arrowLeftSVG, "</div>\n        <label id=")
        .concat(
          t.name,
          '-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="'
        )
        .concat(t.name, '-speed-value-helperbar"></div>\n        <div id="')
        .concat(
          t.name,
          '-speed-value-bar">\n          <div\n            class="'
        )
        .concat(t.name, '-speed-value-step"\n            id="')
        .concat(
          t.name,
          '-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="'
        )
        .concat(
          t.name,
          '-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n'
        );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.addListener,
      o = i.removeListener,
      s = i.elid,
      a = n(2);
    t.exports = function (t) {
      var e = !1;
      t.elements.volumeBtn.onclick = function () {
        if (t.settings.volumeMute) {
          (t.elements.volumeBarActive.style.width =
            100 * t.settings.previousVolume + "%"),
            t.clip.setVolume(t.settings.previousVolume),
            (t.settings.volumeMute = !1);
          var e = document.createElement("span");
          (e.innerHTML = a.volumeSVG),
            t.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(e);
        } else {
          (t.settings.volumeMute = !0),
            (t.elements.volumeBarActive.style.width = "0%"),
            t.clip.setVolume(0);
          var n = document.createElement("span");
          (n.innerHTML = a.volumeMuteSVG),
            t.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(n);
        }
      };
      var n = !1;
      (t.elements.volumeBtn.onmouseover = function () {
        (n = !0),
          t.elements.volumeCursor.classList.add(
            "".concat(t.name, "-volume-cursor-transition")
          ),
          t.elements.volumeBar.classList.add(
            "".concat(t.name, "-volume-width-transition")
          ),
          t.elements.volumeBarHelper.classList.add(
            "".concat(t.name, "-volume-width-transition")
          ),
          t.elements.timeDisplay.classList.add(
            "".concat(t.name, "-time-width-transition")
          );
      }),
        (s("".concat(t.name, "-left-controls")).onmouseout = function () {
          if (n && !e) {
            var i = event.toElement || event.relatedTarget || event.target;
            (function (t, e) {
              var n = e.parentNode;
              for (; null != n; ) {
                if (n == t) return !0;
                n = n.parentNode;
              }
              return !1;
            })(s("".concat(t.name, "-left-controls")), i) ||
              i === s("".concat(t.name, "-left-controls")) ||
              ((n = !1),
              t.elements.volumeCursor.classList.remove(
                "".concat(t.name, "-volume-cursor-transition")
              ),
              t.elements.volumeBar.classList.remove(
                "".concat(t.name, "-volume-width-transition")
              ),
              t.elements.volumeBarHelper.classList.remove(
                "".concat(t.name, "-volume-width-transition")
              ),
              t.elements.timeDisplay.classList.remove(
                "".concat(t.name, "-time-width-transition")
              ));
          }
        }),
        (t.listeners.onCursorMoveVolumeBar = function (e) {
          e.preventDefault();
          var n =
            (e.clientX || ((e.touches || [])[0] || {}).clientX) -
            t.elements.volumeBarHelper.getBoundingClientRect().left;
          if (
            (n < 0
              ? (n = 0)
              : n > t.elements.volumeBarHelper.offsetWidth &&
                (n = t.elements.volumeBarHelper.offsetWidth),
            (t.settings.volume = Number(
              (n / t.elements.volumeBarHelper.offsetWidth).toFixed(2)
            )),
            (t.elements.volumeBarActive.style.width =
              100 * t.settings.volume + "%"),
            t.clip.setVolume(t.settings.volume),
            t.settings.volume > 0)
          ) {
            t.settings.volumeMute = !1;
            var i = document.createElement("span");
            (i.innerHTML = a.volumeSVG),
              t.elements.volumeBtn
                .getElementsByTagName("svg")[0]
                .replaceWith(i);
          } else if (0 === t.settings.volume) {
            t.settings.volumeMute = !0;
            var r = document.createElement("span");
            (r.innerHTML = a.volumeMuteSVG),
              t.elements.volumeBtn
                .getElementsByTagName("svg")[0]
                .replaceWith(r);
          }
        }),
        (t.listeners.onMouseUpVolumeBar = function (n) {
          (e = !1),
            (t.elements.listenerHelper.style.pointerEvents = "none"),
            n.preventDefault(),
            t.settings.volume > 0 &&
              (t.settings.previousVolume = t.settings.volume),
            o("mouseup", t.listeners.onMouseUpVolumeBar, !1),
            o("touchend", t.listeners.onMouseUpVolumeBar, !1),
            o("mousemove", t.listeners.onCursorMoveVolumeBar, !1),
            o("touchmove", t.listeners.onCursorMoveVolumeBar, !1);
        }),
        (t.listeners.onMouseDownVolumeBar = function (n) {
          (e = !0),
            (t.elements.listenerHelper.style.pointerEvents = "auto"),
            n.preventDefault(),
            t.listeners.onCursorMoveVolumeBar(n),
            r("mouseup", t.listeners.onMouseUpVolumeBar, !1),
            r("touchend", t.listeners.onMouseUpVolumeBar, !1),
            r("mousemove", t.listeners.onCursorMoveVolumeBar, !1),
            r("touchmove", t.listeners.onCursorMoveVolumeBar, !1);
        }),
        t.elements.volumeBarHelper.addEventListener(
          "mousedown",
          t.listeners.onMouseDownVolumeBar,
          !1
        ),
        t.elements.volumeCursor.addEventListener(
          "mousedown",
          t.listeners.onMouseDownVolumeBar,
          !1
        ),
        t.elements.volumeBarHelper.addEventListener(
          "touchstart",
          t.listeners.onMouseDownVolumeBar,
          { passive: !1 },
          !1
        ),
        t.elements.volumeCursor.addEventListener(
          "touchstart",
          t.listeners.onMouseDownVolumeBar,
          { passive: !1 },
          !1
        );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.addListener,
      o = i.removeListener;
    t.exports = function (t) {
      (t.listeners.onCursorMoveLoopStart = function (e) {
        e.preventDefault();
        var n = e.clientX || ((e.touches || [])[0] || {}).clientX,
          i = t.elements.totalBar.getBoundingClientRect(),
          r = Math.round(n - i.left),
          o = Math.round(
            (t.settings.loopEndMillisecond / t.clip.duration) *
              t.elements.totalBar.offsetWidth
          );
        r < 0
          ? (r = 0)
          : r > t.elements.totalBar.offsetWidth &&
            (r = t.elements.totalBar.offsetWidth);
        var s =
          (t.clip.runTimeInfo.currentMillisecond / t.clip.duration) *
            t.elements.totalBar.offsetWidth -
          r;
        (t.elements.loopBar.style.left = r + "px"),
          (t.elements.loopBar.style.width = o - r + "px"),
          (t.elements.runningBar.style.width = s + "px"),
          (t.settings.loopLastPositionXPxls = r),
          (t.settings.loopStartMillisecond = Math.round(
            (t.clip.duration * t.elements.loopBar.offsetLeft) /
              t.elements.totalBar.offsetWidth
          )),
          t.settings.loopEndMillisecond < t.settings.loopStartMillisecond &&
            ((t.settings.loopEndMillisecond = t.settings.loopStartMillisecond),
            (t.elements.loopBar.style.width = "0px"),
            (t.elements.runningBar.style.width = "0px")),
          (t.elements.loopEndTime.innerHTML = t.settings.loopEndMillisecond),
          (t.elements.loopStartTime.innerHTML =
            t.settings.loopStartMillisecond),
          t.settings.loopStartMillisecond >
            t.clip.runTimeInfo.currentMillisecond &&
            (t.settings.loopJourney = !0);
      }),
        (t.listeners.onMouseUpLoopStart = function (e) {
          if (
            ((t.elements.listenerHelper.style.pointerEvents = "none"),
            (t.settings.resizeLoop = !1),
            e.preventDefault(),
            t.settings.loopJourney &&
              (t.createProgressDrag(t.elements.runningBar.offsetWidth),
              (t.settings.loopJourney = !1)),
            (t.elements.loopBar.style.left =
              (t.elements.loopBar.offsetLeft /
                t.elements.totalBar.offsetWidth) *
                100 +
              "%"),
            (t.elements.loopBar.style.width =
              (t.elements.loopBar.offsetWidth /
                t.elements.totalBar.offsetWidth) *
                100 +
              "%"),
            (t.settings.loopStartMillisecond = Math.round(
              (t.clip.duration * t.elements.loopBar.offsetLeft) /
                t.elements.totalBar.offsetWidth
            )),
            (t.elements.runningBar.style.width =
              (t.elements.runningBar.offsetWidth /
                t.elements.loopBar.offsetWidth) *
                100 +
              "%"),
            o("mouseup", t.listeners.onMouseUpLoopStart, !1),
            o("touchend", t.listeners.onMouseUpLoopStart, !1),
            o("mousemove", t.listeners.onCursorMoveLoopStart, !1),
            o("touchmove", t.listeners.onCursorMoveLoopStart, !1),
            t.elements.loopBar.addEventListener(
              "mousedown",
              t.listeners.onMouseDown,
              !1
            ),
            t.elements.loopBar.addEventListener(
              "touchstart",
              t.listeners.onMouseDown,
              { passive: !0 },
              !1
            ),
            t.settings.playAfterResize)
          ) {
            var n;
            if ("idle" === t.clip.runTimeInfo.state)
              (n =
                t.clip.speed >= 0
                  ? t.settings.loopStartMillisecond + 1
                  : t.settings.loopEndMillisecond - 1),
                (t.settings.needsUpdate = !0),
                t.createJourney(t.clip, n, { before: "pause", after: "play" });
            else t.clip.play();
            t.settings.playAfterResize = !1;
          }
        }),
        (t.listeners.onMouseDownLoopStart = function (e) {
          (t.elements.listenerHelper.style.pointerEvents = "auto"),
            (t.settings.resizeLoop = !0),
            e.preventDefault(),
            (t.settings.needsUpdate = !0),
            "playing" === t.clip.runTimeInfo.state &&
              (t.clip.pause(), (t.settings.playAfterResize = !0)),
            t.elements.loopBar.removeEventListener(
              "mousedown",
              t.listeners.onMouseDown,
              !1
            ),
            t.elements.loopBar.removeEventListener(
              "touchstart",
              t.listeners.onMouseDown,
              !1
            ),
            t.listeners.onCursorMoveLoopStart(e),
            r("mouseup", t.listeners.onMouseUpLoopStart, !1),
            r("touchend", t.listeners.onMouseUpLoopStart, !1),
            r("mousemove", t.listeners.onCursorMoveLoopStart, !1),
            r("touchmove", t.listeners.onCursorMoveLoopStart, !1);
        }),
        t.elements.loopBarStart.addEventListener(
          "mousedown",
          t.listeners.onMouseDownLoopStart,
          !1
        ),
        t.elements.loopBarStart.addEventListener(
          "touchstart",
          t.listeners.onMouseDownLoopStart,
          { passive: !1 },
          !1
        );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.addListener,
      o = i.removeListener;
    t.exports = function (t) {
      (t.listeners.onCursorMoveLoopEnd = function (e) {
        e.preventDefault();
        var n =
          (e.clientX || ((e.touches || [])[0] || {}).clientX) -
          t.elements.totalBar.getBoundingClientRect().left;
        n < 0
          ? (n = 0)
          : n > t.elements.totalBar.offsetWidth &&
            (n = t.elements.totalBar.offsetWidth),
          t.elements.runningBar.offsetWidth >= t.elements.loopBar.offsetWidth &&
            (t.elements.runningBar.style.width =
              t.elements.loopBar.offsetWidth + "px"),
          t.settings.loopLastPositionXPxls - n < 0
            ? (t.elements.loopBar.style.width =
                Math.abs(t.settings.loopLastPositionXPxls - n) + "px")
            : ((t.elements.loopBar.style.left = n + "px"),
              (t.settings.loopLastPositionXPxls = n)),
          (t.settings.loopEndMillisecond = Math.round(
            (t.clip.duration *
              ((parseFloat(t.elements.loopBar.style.left) || 0) +
                parseFloat(t.elements.loopBar.style.width))) /
              t.elements.totalBar.offsetWidth
          )),
          t.settings.loopEndMillisecond <
            t.clip.runTimeInfo.currentMillisecond &&
            (t.settings.loopJourney = !0),
          t.settings.loopStartMillisecond > t.settings.loopEndMillisecond &&
            ((t.settings.loopStartMillisecond = t.settings.loopEndMillisecond),
            (t.settings.loopJourney = !0)),
          (t.elements.loopEndTime.innerHTML = t.settings.loopEndMillisecond),
          (t.elements.loopStartTime.innerHTML =
            t.settings.loopStartMillisecond);
      }),
        (t.listeners.onMouseUpLoopEnd = function (e) {
          if (
            ((t.elements.listenerHelper.style.pointerEvents = "none"),
            (t.settings.resizeLoop = !1),
            e.preventDefault(),
            (t.elements.runningBar.style.width =
              (t.elements.runningBar.offsetWidth /
                t.elements.loopBar.offsetWidth) *
                100 +
              "%"),
            (t.elements.loopBar.style.left =
              (t.elements.loopBar.offsetLeft /
                t.elements.totalBar.offsetWidth) *
                100 +
              "%"),
            (t.elements.loopBar.style.width =
              (t.elements.loopBar.offsetWidth /
                t.elements.totalBar.offsetWidth) *
                100 +
              "%"),
            t.settings.loopJourney &&
              (t.createProgressDrag(t.elements.runningBar.offsetWidth),
              (t.settings.loopJourney = !1)),
            o("mouseup", t.listeners.onMouseUpLoopEnd, !1),
            o("touchend", t.listeners.onMouseUpLoopEnd, !1),
            o("mousemove", t.listeners.onCursorMoveLoopEnd, !1),
            o("touchmove", t.listeners.onCursorMoveLoopEnd, !1),
            t.elements.loopBar.addEventListener(
              "mousedown",
              t.listeners.onMouseDown,
              !1
            ),
            t.elements.loopBar.addEventListener(
              "touchstart",
              t.listeners.onMouseDown,
              { passive: !0 },
              !1
            ),
            t.settings.playAfterResize)
          ) {
            var n;
            if ("idle" === t.clip.runTimeInfo.state)
              (n =
                t.clip.speed >= 0
                  ? t.settings.loopStartMillisecond + 1
                  : t.settings.loopEndMillisecond - 1),
                (t.settings.needsUpdate = !0),
                t.createJourney(t.clip, n, { before: "pause", after: "play" });
            else if ("completed" === t.clip.runTimeInfo.state) {
              var i;
              (i =
                t.clip.speed >= 0
                  ? t.settings.loopStartMillisecond + 1
                  : t.settings.loopEndMillisecond - 1),
                (t.settings.needsUpdate = !0),
                t.createJourney(t.clip, i, { before: "pause", after: "play" });
            } else t.clip.play();
            t.settings.playAfterResize = !1;
          }
        }),
        (t.listeners.onMouseDownLoopEnd = function (e) {
          (t.elements.listenerHelper.style.pointerEvents = "auto"),
            (t.settings.resizeLoop = !0),
            (t.settings.needsUpdate = !0),
            "playing" === t.clip.runTimeInfo.state &&
              (t.clip.pause(), (t.settings.playAfterResize = !0)),
            e.preventDefault(),
            (t.elements.runningBar.style.width =
              t.elements.runningBar.offsetWidth + "px"),
            (t.elements.loopBar.style.left =
              t.elements.loopBar.offsetLeft + "px"),
            (t.elements.loopBar.style.width =
              t.elements.loopBar.offsetWidth + "px"),
            t.elements.loopBar.removeEventListener(
              "mousedown",
              t.listeners.onMouseDown,
              !1
            ),
            t.elements.loopBar.removeEventListener(
              "touchstart",
              t.listeners.onMouseDown,
              !1
            ),
            t.listeners.onCursorMoveLoopEnd(e),
            r("mouseup", t.listeners.onMouseUpLoopEnd, !1),
            r("touchend", t.listeners.onMouseUpLoopEnd, !1),
            r("mousemove", t.listeners.onCursorMoveLoopEnd, !1),
            r("touchmove", t.listeners.onCursorMoveLoopEnd, !1);
        }),
        t.elements.loopBarEnd.addEventListener(
          "mousedown",
          t.listeners.onMouseDownLoopEnd,
          !1
        ),
        t.elements.loopBarEnd.addEventListener(
          "touchstart",
          t.listeners.onMouseDownLoopEnd,
          { passive: !1 },
          !1
        );
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      (t.listeners.editableLoopStartTime = function () {
        (t.elements.editableLoopStartTime.value =
          t.elements.loopStartTime.innerHTML),
          t.elements.loopStartTime.replaceWith(
            t.elements.editableLoopStartTime
          ),
          t.elements.editableLoopStartTime.focus();
      }),
        (t.listeners.editableLoopEndTime = function () {
          (t.elements.editableLoopEndTime.value =
            t.elements.loopEndTime.innerHTML),
            t.elements.loopEndTime.replaceWith(t.elements.editableLoopEndTime),
            t.elements.editableLoopEndTime.focus();
        }),
        (t.elements.editableLoopEndTime.onkeydown = t.elements.editableLoopStartTime.onkeydown = function (
          e
        ) {
          e.preventDefault(),
            13 === e.keyCode &&
              (t.elements.editableLoopStartTime.onfocusout(),
              t.elements.editableLoopEndTime.onfocusout()),
            8 === e.keyCode &&
              (e.target.value = e.target.value
                .toString()
                .substring(0, e.target.value.toString().length - 1)),
            13 === e.keyCode && e.target.blur();
          var n = parseFloat((e.target.value || 0).toString() + e.key);
          if (!(n > t.clip.duration))
            if (
              ((e.target.value = n),
              e.target === t.elements.editableLoopStartTime)
            ) {
              var i = t.elements.totalBar.getBoundingClientRect(),
                r = {
                  preventDefault: function () {},
                  clientX:
                    (t.elements.totalBar.offsetWidth / t.clip.duration) *
                      e.target.value +
                    i.left,
                };
              t.listeners.onMouseDownLoopStart(r),
                t.listeners.onCursorMoveLoopStart(r),
                t.listeners.onMouseUpLoopStart(r);
            } else if (e.target === t.elements.editableLoopEndTime) {
              var o = t.elements.totalBar.getBoundingClientRect(),
                s = {
                  preventDefault: function () {},
                  clientX:
                    (t.elements.totalBar.offsetWidth / t.clip.duration) *
                      e.target.value +
                    o.left,
                };
              t.listeners.onMouseDownLoopEnd(s),
                t.listeners.onCursorMoveLoopEnd(s),
                t.listeners.onMouseUpLoopEnd(s);
            }
        }),
        (t.elements.loopStartTime.onclick = t.listeners.editableLoopStartTime),
        (t.elements.loopEndTime.onclick = t.listeners.editableLoopEndTime),
        (t.elements.editableLoopStartTime.onfocusout = function () {
          t.elements.editableLoopStartTime.replaceWith(
            t.elements.loopStartTime
          );
        }),
        (t.elements.editableLoopEndTime.onfocusout = function () {
          t.elements.editableLoopEndTime.replaceWith(t.elements.loopEndTime);
        });
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.addListener,
      o = i.removeListener;
    t.exports = function (t) {
      (t.listeners.onCursorMove = function (e) {
        e.preventDefault();
        var n =
          (e.clientX || ((e.touches || [])[0] || {}).clientX) -
          t.elements.loopBar.getBoundingClientRect().left;
        n < 0
          ? (n = 0)
          : n > t.elements.loopBar.offsetWidth &&
            (n = t.elements.loopBar.offsetWidth),
          t.handleDrag(n);
      }),
        (t.listeners.onMouseUp = function () {
          (t.elements.listenerHelper.style.pointerEvents = "none"),
            o("mouseup", t.listeners.onMouseUp, !1),
            o("touchend", t.listeners.onMouseUp, !1),
            o("mousemove", t.listeners.onCursorMove, !1),
            o("touchmove", t.listeners.onCursorMove, !1),
            t.handleDragEnd(t.settings);
        }),
        (t.listeners.onMouseDown = function (e) {
          (t.elements.listenerHelper.style.pointerEvents = "auto"),
            "playing" === t.clip.runTimeInfo.state &&
              (t.settings.playAfterResize = !0),
            t.handleDragStart(t.clip),
            t.listeners.onCursorMove(e),
            r("mouseup", t.listeners.onMouseUp, !1),
            r("touchend", t.listeners.onMouseUp, !1),
            r("mousemove", t.listeners.onCursorMove, !1),
            r("touchmove", t.listeners.onCursorMove, !1);
        }),
        t.elements.loopBar.addEventListener(
          "mousedown",
          t.listeners.onMouseDown,
          !1
        ),
        t.elements.loopBar.addEventListener(
          "touchstart",
          t.listeners.onMouseDown,
          { passive: !1 },
          !1
        );
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      t.elements.statusButton.onclick = function (e) {
        return (
          e.preventDefault(),
          "playing" === t.clip.runTimeInfo.state
            ? t.clip.pause()
            : "paused" === t.clip.runTimeInfo.state ||
              "idle" === t.clip.runTimeInfo.state ||
              "transitional" === t.clip.runTimeInfo.state ||
              "armed" === t.clip.runTimeInfo.state
            ? t.clip.play()
            : "idle" === t.clip.runTimeInfo.state
            ? t.clip.speed >= 0
              ? (t.clip.play(), (t.settings.needsUpdate = !0))
              : (t.createJourney(t.clip, t.settings.loopEndMillisecond - 1, {
                  before: "pause",
                  after: "play",
                }),
                (t.settings.needsUpdate = !0))
            : "completed" === t.clip.runTimeInfo.state &&
              (t.clip.speed >= 0
                ? (t.createJourney(t.clip, 0, {
                    before: "pause",
                    after: "play",
                  }),
                  (t.settings.needsUpdate = !0))
                : (t.createJourney(t.clip, t.settings.loopEndMillisecond - 1, {
                    before: "pause",
                    after: "play",
                  }),
                  (t.settings.needsUpdate = !0))),
          !1
        );
      };
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.elid,
      o = i.addListener,
      s = i.removeListener;
    t.exports = function (t) {
      (t.elements.settingsShowIndicator.onclick = function (e) {
        e.preventDefault();
        var n = r("".concat(t.name, "-show-indicator-checkbox"));
        n.checked
          ? ((n.checked = !1),
            (t.elements.indicator.style.visibility = "hidden"))
          : ((n.checked = !0),
            (t.elements.indicator.style.visibility = "visible"));
      }),
        (t.elements.settingsPointerEvents.onclick = function (e) {
          e.preventDefault();
          var n = r("".concat(t.name, "-pointer-events-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (t.options.pointerEvents = !1),
              (t.elements.mcPlayer.style.pointerEvents = "none"),
              (t.elements.pointerEventPanel.style.pointerEvents = "none"),
              (r("".concat(t.name, "-controls")).style.pointerEvents = "auto"),
              (t.elements.settingsPanel.style.pointerEvents = "auto"))
            : ((n.checked = !0),
              (t.elements.mcPlayer.style.pointerEvents = "none"),
              (t.elements.pointerEventPanel.style.pointerEvents = "auto"),
              (r("".concat(t.name, "-controls")).style.pointerEvents = "auto"),
              (t.elements.settingsPanel.style.pointerEvents = "auto"));
        }),
        (t.elements.settingsShowVolume.onclick = function (e) {
          e.preventDefault(),
            t.elements.volumeControl.classList.toggle(
              "".concat(t.name, "-volume-width-transition")
            ),
            t.elements.volumeControl.classList.toggle(
              "".concat(t.name, "-hide")
            );
          var n = r("".concat(t.name, "-show-volume-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (t.elements.volumeControl.style.visibility = "hidden"),
              (t.elements.timeDisplay.style.left = "45px"))
            : ((n.checked = !0),
              (t.elements.volumeControl.style.visibility = "visible"),
              (t.elements.timeDisplay.style.left = ""));
        }),
        (t.elements.settingsShowPreview.onclick = function (e) {
          e.preventDefault();
          var n = r("".concat(t.name, "-show-preview-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (r("".concat(t.name, "-hover-display")).style.visibility =
                "hidden"),
              (r("".concat(t.name, "-hover-display")).style.display = "none"),
              (t.options.preview = !1))
            : (t.previewClip || t.createPreviewDisplay(),
              (n.checked = !0),
              (r("".concat(t.name, "-hover-display")).style.visibility =
                "visible"),
              (r("".concat(t.name, "-hover-display")).style.display = "flex"),
              (t.options.preview = !0));
        }),
        (t.elements.settingsButton.onclick = function (e) {
          e.preventDefault();
          var n = r("".concat(t.name, "-controls")),
            i = function e(n) {
              if (t.elements.settingsPanel.contains(n.target)) return !0;
              t.elements.settingsPanel.classList.toggle(
                "".concat(t.name, "-hide")
              ),
                t.elements.settingsPanel.classList.toggle("m-fadeOut"),
                t.elements.settingsPanel.classList.toggle("m-fadeIn"),
                t.elements.settingsPanel.className.includes("m-fadeOut") &&
                  (s("click", e, !1),
                  t.eventBroadcast("state-change", t.state));
            };
          t.elements.settingsPanel.className.includes("m-fadeOut")
            ? (n.classList.value.includes("force-show-controls") ||
                n.classList.toggle("force-show-controls"),
              o("click", i, !1))
            : s("click", i, !1);
        });
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.elid,
      o = i.addListener,
      s = i.removeListener;
    t.exports = function (t) {
      t.elements.settingsSpeedButtonShow.onclick = t.elements.settingsSpeedButtonHide.onclick = function (
        e
      ) {
        e.preventDefault(),
          t.elements.settingsPanel.classList.toggle(
            "".concat(t.name, "-settings-speed-panel")
          ),
          t.elements.settingsPanel.className.includes(
            "".concat(t.name, "-settings-speed-panel")
          )
            ? ((t.elements.settingsMainPanel.style.display = "none"),
              (t.elements.settingsSpeedPanel.style.display = "block"))
            : ((t.elements.settingsSpeedPanel.style.display = "none"),
              (t.elements.settingsMainPanel.style.display = "block"));
      };
      var e = function (e) {
          e.preventDefault();
          var n = t.elements.speedBar.getBoundingClientRect(),
            i = (e.clientY || ((e.touches || [])[0] || {}).clientY) - n.top;
          (i -= 8) < 0
            ? (i = 0)
            : i > t.elements.speedBar.offsetHeight - 16 &&
              (i = t.elements.speedBar.offsetHeight - 16);
          var o =
              -1 *
              ((i = Math.floor(i)) / (16 * (t.options.speedValues.length - 1)) -
                1),
            s = 1 / (t.options.speedValues.length - 1),
            a = t.calculateSpeed(s, t.options.speedValues, o);
          (r("".concat(t.name, "-speed-runtime")).innerHTML = a + "0"),
            (r("".concat(t.name, "-speed-cursor")).style.top = i + "px"),
            (t.clip.executionSpeed = a);
        },
        n = function n(i) {
          var o;
          (t.elements.listenerHelper.style.pointerEvents = "none"),
            i.preventDefault(),
            s("mouseup", n, !1),
            s("touchend", n, !1),
            s("mousemove", e, !1),
            s("touchmove", e, !1),
            (r("".concat(t.name, "-speed-runtime")).innerHTML = "Speed"),
            (o = 1 == t.clip.speed ? "Normal" : t.clip.speed),
            (t.elements.speedCurrent.innerHTML = o);
        },
        i = function (i) {
          (t.elements.listenerHelper.style.pointerEvents = "auto"),
            i.preventDefault(),
            e(i),
            o("mouseup", n, !1),
            o("touchend", n, !1),
            o("mousemove", e, !1),
            o("touchmove", e, !1);
        };
      t.elements.speedBarHelper.addEventListener("mousedown", i, !1),
        t.elements.speedBarHelper.addEventListener(
          "touchstart",
          i,
          { passive: !1 },
          !1
        );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0).elid;
    t.exports = function (t) {
      t.elements.loopButton.onclick = function () {
        (t.settings.loopActivated = !t.settings.loopActivated),
          t.elements.loopButton.classList.toggle("svg-selected"),
          t.elements.loopBarStart.classList.toggle("m-fadeOut"),
          t.elements.loopBarEnd.classList.toggle("m-fadeOut"),
          t.elements.loopBarStart.classList.toggle("m-fadeIn"),
          t.elements.loopBarStart.classList.toggle("".concat(t.name, "-hide")),
          t.elements.loopBarEnd.classList.toggle("m-fadeIn"),
          t.elements.loopBarEnd.classList.toggle("".concat(t.name, "-hide")),
          i("".concat(t.name, "-loop-time")).classList.toggle("m-fadeOut"),
          i("".concat(t.name, "-loop-time")).classList.toggle("m-fadeIn"),
          i("".concat(t.name, "-loop-time")).classList.toggle(
            "".concat(t.name, "-hide")
          ),
          (t.elements.loopEndTime.innerHTML = t.settings.loopEndMillisecond),
          (t.elements.loopStartTime.innerHTML =
            t.settings.loopStartMillisecond),
          (t.settings.needsUpdate = !0),
          t.settings.loopActivated ||
            ((t.elements.loopBar.style.left = "0%"),
            (t.elements.loopBar.style.width = "100%"),
            (t.settings.loopStartMillisecond = 0),
            (t.settings.loopEndMillisecond = t.clip.duration),
            (t.settings.loopLastPositionXPxls = 0),
            (t.settings.loopLastPositionXPercentage = 0),
            (t.elements.runningBar.style.width =
              (t.clip.runTimeInfo.currentMillisecond / t.clip.duration) * 100 +
              "%"));
      };
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0).elid;
    function r(t, e) {
      for (var n = e.parentNode; null != n; ) {
        if (n == t) return !0;
        n = n.parentNode;
      }
      return !1;
    }
    t.exports = function (t) {
      (i("".concat(t.name, "-controls")).onmouseover = function () {
        t.settings.loopActivated &&
          (t.elements.loopBarStart.classList.remove("m-fadeOut"),
          t.elements.loopBarEnd.classList.remove("m-fadeOut"),
          t.elements.loopBarStart.classList.add("m-fadeIn"),
          t.elements.loopBarEnd.classList.add("m-fadeIn"));
      }),
        (i("".concat(t.name, "-controls")).onmouseout = function (e) {
          var n = e.toElement || e.relatedTarget || e.target;
          r(this, n) ||
            n === this ||
            (t.settings.loopActivated &&
              (t.elements.loopBarStart.classList.add("m-fadeOut"),
              t.elements.loopBarEnd.classList.add("m-fadeOut"),
              t.elements.loopBarStart.classList.remove("m-fadeIn"),
              t.elements.loopBarEnd.classList.remove("m-fadeIn")));
        });
      var e = !1;
      (i("".concat(t.name, "-controls")).ontouchstart = function (n) {
        var i = n.toElement || n.relatedTarget || n.target;
        r(t.elements.statusButton, i) ||
          i === t.elements.statusButton ||
          r(t.elements.settingsButton, i) ||
          i === t.elements.settingsButton ||
          r(t.elements.fullScreenButton, i) ||
          i === t.elements.fullScreenButton ||
          r(t.elements.loopButton, i) ||
          i === t.elements.loopButton ||
          r(t.elements.totalBar, i) ||
          i === t.elements.totalBar ||
          ((t.elements.volumeControl.className = "".concat(
            t.name,
            "-volume-width-transition"
          )),
          (t.elements.volumeBar.className = "".concat(
            t.name,
            "-volume-width-transition"
          )),
          (t.elements.volumeBarHelper.className = "".concat(
            t.name,
            "-volume-width-transition"
          )),
          (t.elements.timeDisplay.className = "".concat(
            t.name,
            "-time-width-transition"
          )),
          (t.elements.volumeCursor.className = "".concat(
            t.name,
            "-volume-cursor-transition"
          )),
          (e = !0));
      }),
        window.addEventListener("touchstart", function (n) {
          var o = n.toElement || n.relatedTarget || n.target;
          r(i("".concat(t.name, "-controls")), o) ||
            o === i("".concat(t.name, "-controls")) ||
            (e &&
              ((t.elements.volumeControl.className = ""),
              (t.elements.volumeBar.className = ""),
              (t.elements.volumeBarHelper.className = ""),
              (t.elements.timeDisplay.className = ""),
              (t.elements.volumeCursor.className = "")));
        });
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      t.elements.fullScreenButton.addEventListener("click", function () {
        var e = t.clip.props.host.className.includes("full-screen");
        t.clip.props.host !== t.options.host &&
          !e &&
          t.clip.props.host.appendChild(t.elements.mcPlayer),
          t.clip.props.host !== t.options.host &&
            e &&
            t.options.host.appendChild(t.elements.mcPlayer),
          e ? t.exitFullscreen() : t.launchIntoFullscreen(t.clip.props.host);
      });
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      t.elements.donkeyclipButton.addEventListener("click", function () {
        var e,
          n =
            ((e = new Date().getTime()),
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
              t
            ) {
              var n = (e + 16 * Math.random()) % 16 | 0;
              return (
                (e = Math.floor(e / 16)),
                ("x" == t ? n : (3 & n) | 8).toString(16)
              );
            })),
          i = window.open("https://donkeyclip.com?u=".concat(n)),
          r = t.clip.exportDefinition(),
          o = t.clipClass;
        window.addEventListener(
          "message",
          function (t) {
            t.data === n &&
              i.postMessage(
                JSON.stringify({ definition: r, clipClass: o, u: n }),
                "*"
              );
          },
          !1
        );
      });
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.elid,
      o = i.addListener,
      s = i.removeListener;
    t.exports = function (t) {
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        var e = function () {
            t.options.preview &&
              (r("".concat(t.name, "-hover-display")).classList.toggle(
                "m-fadeOut"
              ),
              r("".concat(t.name, "-hover-display")).classList.toggle(
                "m-fadeIn"
              ),
              (t.elements.loopBar.onmousemove = i));
          },
          n = function n() {
            t.options.preview &&
              (e(),
              (t.elements.loopBar.onmouseover = t.elements.loopBar.onmouseout = e),
              (t.elements.loopBar.onmousemove = i),
              s("mouseup", n, !1),
              s("touchend", n, !1),
              s("mousemove", i, !1),
              s("touchmove", i, !1));
          };
        (t.elements.loopBar.onmouseover = t.elements.loopBar.onmouseout = e),
          (t.elements.loopBar.onmousedown = function () {
            t.options.preview &&
              ((t.elements.loopBar.onmouseover = t.elements.loopBar.onmouseout = null),
              (t.elements.loopBar.onmousemove = null),
              o("mouseup", n, !1),
              o("touchend", n, !1),
              o("mousemove", i, !1),
              o("touchmove", i, !1));
          }),
          (t.elements.loopBar.onmouseup = function () {
            t.options.preview &&
              (s("mouseup", n, !1),
              s("touchend", n, !1),
              s("mousemove", i, !1),
              s("touchmove", i, !1),
              (t.elements.loopBar.onmouseover = t.elements.loopBar.onmouseout = e),
              (t.elements.loopBar.onmousemove = i));
          });
        var i = function (e) {
          var n = e.clientX,
            i = t.elements.loopBar.getBoundingClientRect();
          if (
            n - i.left + t.settings.loopLastPositionXPxls >
              t.settings.loopLastPositionXPxls +
                t.elements.loopBar.offsetWidth &&
            !t.settings.resizeLoop
          )
            r("".concat(t.name, "-hover-millisecond")).innerHTML =
              t.settings.loopEndMillisecond;
          else if (n - i.left < 0 && !t.settings.resizeLoop)
            r("".concat(t.name, "-hover-millisecond")).innerHTML =
              t.settings.loopStartMillisecond;
          else {
            var o = n - i.left + t.settings.loopLastPositionXPxls;
            o < 0 && (o = 0);
            var s =
                r("".concat(t.name, "-hover-display")).offsetWidth *
                t.previewScale,
              a = s / 2,
              l = r("".concat(t.name, "-hover-display")).offsetWidth / 2,
              c = o - l;
            o - a < 0
              ? (c = 0 - (s + a))
              : o + a > t.elements.totalBar.offsetWidth &&
                (c = t.elements.totalBar.offsetWidth - l - a);
            var u = Math.round(
              (o / t.elements.totalBar.offsetWidth) * t.clip.duration
            );
            if (t.options.preview) {
              var d = u / t.clip.duration;
              t.previewClip.onProgress(d, u);
            }
            (r("".concat(t.name, "-hover-millisecond")).innerHTML = u),
              (r("".concat(t.name, "-hover-display")).style.left = c + "px");
          }
        };
      }
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(0),
      r = i.el,
      o = i.elid;
    t.exports = function (t) {
      document.addEventListener("fullscreenchange", function () {
        t.elements.mcPlayer.classList.toggle("full-screen"),
          t.clip.props.host.classList.toggle("full-screen"),
          t.options.preview && t.setPreviewDimentions();
      }),
        document.addEventListener("webkitfullscreenchange", function () {
          t.elements.mcPlayer.classList.toggle("full-screen"),
            t.clip.props.host.classList.toggle("full-screen"),
            t.options.preview && t.setPreviewDimentions();
        }),
        document.addEventListener("mozfullscreenchange", function () {
          t.elements.mcPlayer.classList.toggle("full-screen"),
            t.clip.props.host.classList.toggle("full-screen"),
            t.options.preview && t.setPreviewDimentions();
        }),
        document.addEventListener("MSFullscreenChange", function () {
          t.elements.mcPlayer.classList.toggle("full-screen"),
            t.clip.props.host.classList.toggle("full-screen"),
            t.options.preview && t.setPreviewDimentions();
        }),
        r("body")[0].addEventListener("click", function (e) {
          if (e.target.className === "".concat(t.name, "-speed-value")) {
            var n = e.target.dataset.speedValue - 0;
            (t.clip.executionSpeed = e.target.dataset.speedValue),
              (n = 1 == t.clip.speed ? "Normal" : t.clip.speed),
              (t.elements.speedCurrent.innerHTML = n);
            var i = 1 / (t.options.speedValues.length - 1),
              r =
                -1 *
                (e.target.dataset.zone * i - 1) *
                (16 * (t.options.speedValues.length - 1));
            o("".concat(t.name, "-speed-cursor")).style.top = r + "px";
          }
        });
    };
  },
  function (t, e, n) {
    (function (e, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */ var i;
      (i = function () {
        "use strict";
        function t(t) {
          return "function" == typeof t;
        }
        var i = Array.isArray
            ? Array.isArray
            : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
              },
          r = 0,
          o = void 0,
          s = void 0,
          a = function (t, e) {
            (f[r] = t), (f[r + 1] = e), 2 === (r += 2) && (s ? s(m) : x());
          },
          l = "undefined" != typeof window ? window : void 0,
          c = l || {},
          u = c.MutationObserver || c.WebKitMutationObserver,
          d =
            "undefined" == typeof self &&
            void 0 !== e &&
            "[object process]" === {}.toString.call(e),
          p =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function h() {
          var t = setTimeout;
          return function () {
            return t(m, 1);
          };
        }
        var f = new Array(1e3);
        function m() {
          for (var t = 0; t < r; t += 2)
            (0, f[t])(f[t + 1]), (f[t] = void 0), (f[t + 1] = void 0);
          r = 0;
        }
        var v,
          g,
          y,
          b,
          x = void 0;
        function w(t, e) {
          var n = this,
            i = new this.constructor(C);
          void 0 === i[_] && T(i);
          var r = n._state;
          if (r) {
            var o = arguments[r - 1];
            a(function () {
              return B(r, i, o, n._result);
            });
          } else M(n, i, t, e);
          return i;
        }
        function k(t) {
          if (t && "object" == typeof t && t.constructor === this) return t;
          var e = new this(C);
          return O(e, t), e;
        }
        d
          ? (x = function () {
              return e.nextTick(m);
            })
          : u
          ? ((g = 0),
            (y = new u(m)),
            (b = document.createTextNode("")),
            y.observe(b, { characterData: !0 }),
            (x = function () {
              b.data = g = ++g % 2;
            }))
          : p
          ? (((v = new MessageChannel()).port1.onmessage = m),
            (x = function () {
              return v.port2.postMessage(0);
            }))
          : (x =
              void 0 === l
                ? (function () {
                    try {
                      var t = Function("return this")().require("vertx");
                      return void 0 !== (o = t.runOnLoop || t.runOnContext)
                        ? function () {
                            o(m);
                          }
                        : h();
                    } catch (t) {
                      return h();
                    }
                  })()
                : h());
        var _ = Math.random().toString(36).substring(2);
        function C() {}
        function I(e, n, i) {
          n.constructor === e.constructor &&
          i === w &&
          n.constructor.resolve === k
            ? (function (t, e) {
                1 === e._state
                  ? P(t, e._result)
                  : 2 === e._state
                  ? j(t, e._result)
                  : M(
                      e,
                      void 0,
                      function (e) {
                        return O(t, e);
                      },
                      function (e) {
                        return j(t, e);
                      }
                    );
              })(e, n)
            : void 0 === i
            ? P(e, n)
            : t(i)
            ? (function (t, e, n) {
                a(function (t) {
                  var i = !1,
                    r = (function (t, e, n, i) {
                      try {
                        t.call(e, n, i);
                      } catch (t) {
                        return t;
                      }
                    })(
                      n,
                      e,
                      function (n) {
                        i || ((i = !0), e !== n ? O(t, n) : P(t, n));
                      },
                      function (e) {
                        i || ((i = !0), j(t, e));
                      },
                      t._label
                    );
                  !i && r && ((i = !0), j(t, r));
                }, t);
              })(e, n, i)
            : P(e, n);
        }
        function O(t, e) {
          if (t === e)
            j(t, new TypeError("You cannot resolve a promise with itself"));
          else if (
            ((r = typeof (i = e)),
            null === i || ("object" !== r && "function" !== r))
          )
            P(t, e);
          else {
            var n = void 0;
            try {
              n = e.then;
            } catch (e) {
              return void j(t, e);
            }
            I(t, e, n);
          }
          var i, r;
        }
        function E(t) {
          t._onerror && t._onerror(t._result), S(t);
        }
        function P(t, e) {
          void 0 === t._state &&
            ((t._result = e),
            (t._state = 1),
            0 !== t._subscribers.length && a(S, t));
        }
        function j(t, e) {
          void 0 === t._state && ((t._state = 2), (t._result = e), a(E, t));
        }
        function M(t, e, n, i) {
          var r = t._subscribers,
            o = r.length;
          (t._onerror = null),
            (r[o] = e),
            (r[o + 1] = n),
            (r[o + 2] = i),
            0 === o && t._state && a(S, t);
        }
        function S(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (
              var i = void 0, r = void 0, o = t._result, s = 0;
              s < e.length;
              s += 3
            )
              (i = e[s]), (r = e[s + n]), i ? B(n, i, r, o) : r(o);
            t._subscribers.length = 0;
          }
        }
        function B(e, n, i, r) {
          var o = t(i),
            s = void 0,
            a = void 0,
            l = !0;
          if (o) {
            try {
              s = i(r);
            } catch (t) {
              (l = !1), (a = t);
            }
            if (n === s)
              return void j(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else s = r;
          void 0 !== n._state ||
            (o && l
              ? O(n, s)
              : !1 === l
              ? j(n, a)
              : 1 === e
              ? P(n, s)
              : 2 === e && j(n, s));
        }
        var A = 0;
        function T(t) {
          (t[_] = A++),
            (t._state = void 0),
            (t._result = void 0),
            (t._subscribers = []);
        }
        var L = (function () {
            function t(t, e) {
              (this._instanceConstructor = t),
                (this.promise = new t(C)),
                this.promise[_] || T(this.promise),
                i(e)
                  ? ((this.length = e.length),
                    (this._remaining = e.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? P(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(e),
                        0 === this._remaining && P(this.promise, this._result)))
                  : j(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (t.prototype._enumerate = function (t) {
                for (var e = 0; void 0 === this._state && e < t.length; e++)
                  this._eachEntry(t[e], e);
              }),
              (t.prototype._eachEntry = function (t, e) {
                var n = this._instanceConstructor,
                  i = n.resolve;
                if (i === k) {
                  var r = void 0,
                    o = void 0,
                    s = !1;
                  try {
                    r = t.then;
                  } catch (t) {
                    (s = !0), (o = t);
                  }
                  if (r === w && void 0 !== t._state)
                    this._settledAt(t._state, e, t._result);
                  else if ("function" != typeof r)
                    this._remaining--, (this._result[e] = t);
                  else if (n === D) {
                    var a = new n(C);
                    s ? j(a, o) : I(a, t, r), this._willSettleAt(a, e);
                  } else
                    this._willSettleAt(
                      new n(function (e) {
                        return e(t);
                      }),
                      e
                    );
                } else this._willSettleAt(i(t), e);
              }),
              (t.prototype._settledAt = function (t, e, n) {
                var i = this.promise;
                void 0 === i._state &&
                  (this._remaining--,
                  2 === t ? j(i, n) : (this._result[e] = n)),
                  0 === this._remaining && P(i, this._result);
              }),
              (t.prototype._willSettleAt = function (t, e) {
                var n = this;
                M(
                  t,
                  void 0,
                  function (t) {
                    return n._settledAt(1, e, t);
                  },
                  function (t) {
                    return n._settledAt(2, e, t);
                  }
                );
              }),
              t
            );
          })(),
          D = (function () {
            function e(t) {
              (this[_] = A++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                C !== t &&
                  ("function" != typeof t &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof e
                    ? (function (t, e) {
                        try {
                          e(
                            function (e) {
                              O(t, e);
                            },
                            function (e) {
                              j(t, e);
                            }
                          );
                        } catch (e) {
                          j(t, e);
                        }
                      })(this, t)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function (t) {
                return this.then(null, t);
              }),
              (e.prototype.finally = function (e) {
                var n = this.constructor;
                return t(e)
                  ? this.then(
                      function (t) {
                        return n.resolve(e()).then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return n.resolve(e()).then(function () {
                          throw t;
                        });
                      }
                    )
                  : this.then(e, e);
              }),
              e
            );
          })();
        return (
          (D.prototype.then = w),
          (D.all = function (t) {
            return new L(this, t).promise;
          }),
          (D.race = function (t) {
            var e = this;
            return i(t)
              ? new e(function (n, i) {
                  for (var r = t.length, o = 0; o < r; o++)
                    e.resolve(t[o]).then(n, i);
                })
              : new e(function (t, e) {
                  return e(new TypeError("You must pass an array to race."));
                });
          }),
          (D.resolve = k),
          (D.reject = function (t) {
            var e = new this(C);
            return j(e, t), e;
          }),
          (D._setScheduler = function (t) {
            s = t;
          }),
          (D._setAsap = function (t) {
            a = t;
          }),
          (D._asap = a),
          (D.polyfill = function () {
            var t = void 0;
            if (void 0 !== n) t = n;
            else if ("undefined" != typeof self) t = self;
            else
              try {
                t = Function("return this")();
              } catch (t) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var e = t.Promise;
            if (e) {
              var i = null;
              try {
                i = Object.prototype.toString.call(e.resolve());
              } catch (t) {}
              if ("[object Promise]" === i && !e.cast) return;
            }
            t.Promise = D;
          }),
          (D.Promise = D),
          D
        );
      }),
        (t.exports = i());
    }.call(this, n(27), n(3)));
  },
  function (t, e) {
    var n,
      i,
      r = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        i = s;
      }
    })();
    var l,
      c = [],
      u = !1,
      d = -1;
    function p() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && h());
    }
    function h() {
      if (!u) {
        var t = a(p);
        u = !0;
        for (var e = c.length; e; ) {
          for (l = c, c = []; ++d < e; ) l && l[d].run();
          (d = -1), (e = c.length);
        }
        (l = null),
          (u = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === s || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function f(t, e) {
      (this.fun = t), (this.array = e);
    }
    function m() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new f(t, e)), 1 !== c.length || u || a(h);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
]);
