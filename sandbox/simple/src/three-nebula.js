!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Nebula = e() : t.Nebula = e()
}(this, (function() {
    return function(t) {
        var e = {};
        function i(n) {
            if (e[n])
                return e[n].exports;
            var r = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
        }
        return i.m = t,
        i.c = e,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        i.t = function(t, e) {
            if (1 & e && (t = i(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (i.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    i.d(n, r, function(e) {
                        return t[e]
                    }
                    .bind(null, r));
            return n
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return i.d(e, "a", e),
            e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 59)
    }([function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(t, e) {
        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        t.exports = function(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
            t
        }
    }
    , function(t, e) {
        function i(e) {
            return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            i(e)
        }
        t.exports = i
    }
    , function(t, e, i) {
        var n = i(26)
          , r = i(13);
        t.exports = function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? r(t) : e
        }
    }
    , function(t, e, i) {
        var n = i(14);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && n(t, e)
        }
    }
    , function(t, e, i) {
        var n = i(58);
        function r(e, i, o) {
            return "undefined" != typeof Reflect && Reflect.get ? t.exports = r = Reflect.get : t.exports = r = function(t, e, i) {
                var r = n(t, e);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get ? o.get.call(i) : o.value
                }
            }
            ,
            r(e, i, o || e)
        }
        t.exports = r
    }
    , function(t, e) {
        t.exports = function(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
    }
    , function(t, e, i) {
        var n = i(8)
          , r = i(9)
          , o = "[object Number]";
        t.exports = function(t) {
            return "number" == typeof t || r(t) && n(t) == o
        }
    }
    , function(t, e, i) {
        var n = i(16)
          , r = i(38)
          , o = i(39)
          , s = "[object Null]"
          , a = "[object Undefined]"
          , u = n ? n.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? a : s : u && u in Object(t) ? r(t) : o(t)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }
    , function(t, e, i) {
        var n = i(15)
          , r = i(28)
          , o = i(19);
        t.exports = function(t) {
            return (o(t) ? n : r)(t)
        }
    }
    , function(t, e, i) {
        var n = i(14);
        function r(e, i, o) {
            return !function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }() ? t.exports = r = function(t, e, i) {
                var r = [null];
                r.push.apply(r, e);
                var o = new (Function.bind.apply(t, r));
                return i && n(o, i.prototype),
                o
            }
            : t.exports = r = Reflect.construct,
            r.apply(null, arguments)
        }
        t.exports = r
    }
    , function(t, e, i) {
        var n = i(54)
          , r = i(55)
          , o = i(56);
        t.exports = function(t) {
            return n(t) || r(t) || o()
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }
    , function(t, e) {
        function i(e, n) {
            return t.exports = i = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            i(e, n)
        }
        t.exports = i
    }
    , function(t, e, i) {
        var n = i(27);
        t.exports = function(t) {
            var e = t.length;
            return e ? t[n(0, e - 1)] : void 0
        }
    }
    , function(t, e, i) {
        var n = i(17).Symbol;
        t.exports = n
    }
    , function(t, e, i) {
        var n = i(18)
          , r = "object" == typeof self && self && self.Object === Object && self
          , o = n || r || Function("return this")();
        t.exports = o
    }
    , function(t, e, i) {
        (function(e) {
            var i = "object" == typeof e && e && e.Object === Object && e;
            t.exports = i
        }
        ).call(this, i(37))
    }
    , function(t, e) {
        var i = Array.isArray;
        t.exports = i
    }
    , function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}
            ,
            t.paths = [],
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }),
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }),
            t.webpackPolyfill = 1),
            t
        }
    }
    , function(t, e) {
        var i = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
        }
    }
    , function(t, e, i) {
        var n, r, o = i(24), s = i(25), a = 0, u = 0;
        t.exports = function(t, e, i) {
            var h = e && i || 0
              , c = e || []
              , l = (t = t || {}).node || n
              , f = void 0 !== t.clockseq ? t.clockseq : r;
            if (null == l || null == f) {
                var d = o();
                null == l && (l = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
                null == f && (f = r = 16383 & (d[6] << 8 | d[7]))
            }
            var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime()
              , p = void 0 !== t.nsecs ? t.nsecs : u + 1
              , v = y - a + (p - u) / 1e4;
            if (v < 0 && void 0 === t.clockseq && (f = f + 1 & 16383),
            (v < 0 || y > a) && void 0 === t.nsecs && (p = 0),
            p >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            a = y,
            u = p,
            r = f;
            var m = (1e4 * (268435455 & (y += 122192928e5)) + p) % 4294967296;
            c[h++] = m >>> 24 & 255,
            c[h++] = m >>> 16 & 255,
            c[h++] = m >>> 8 & 255,
            c[h++] = 255 & m;
            var g = y / 4294967296 * 1e4 & 268435455;
            c[h++] = g >>> 8 & 255,
            c[h++] = 255 & g,
            c[h++] = g >>> 24 & 15 | 16,
            c[h++] = g >>> 16 & 255,
            c[h++] = f >>> 8 | 128,
            c[h++] = 255 & f;
            for (var x = 0; x < 6; ++x)
                c[h + x] = l[x];
            return e || s(c)
        }
    }
    , function(t, e, i) {
        var n = i(57);
        t.exports = function(t, e) {
            if (null == t)
                return {};
            var i, r, o = n(t, e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (r = 0; r < s.length; r++)
                    i = s[r],
                    e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (o[i] = t[i])
            }
            return o
        }
    }
    , function(t, e) {
        var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (i) {
            var n = new Uint8Array(16);
            t.exports = function() {
                return i(n),
                n
            }
        } else {
            var r = new Array(16);
            t.exports = function() {
                for (var t, e = 0; e < 16; e++)
                    0 == (3 & e) && (t = 4294967296 * Math.random()),
                    r[e] = t >>> ((3 & e) << 3) & 255;
                return r
            }
        }
    }
    , function(t, e) {
        for (var i = [], n = 0; n < 256; ++n)
            i[n] = (n + 256).toString(16).substr(1);
        t.exports = function(t, e) {
            var n = e || 0
              , r = i;
            return [r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]]].join("")
        }
    }
    , function(t, e) {
        function i(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = i = function(t) {
                return typeof t
            }
            : t.exports = i = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            i(e)
        }
        t.exports = i
    }
    , function(t, e) {
        var i = Math.floor
          , n = Math.random;
        t.exports = function(t, e) {
            return t + i(n() * (e - t + 1))
        }
    }
    , function(t, e, i) {
        var n = i(15)
          , r = i(29);
        t.exports = function(t) {
            return n(r(t))
        }
    }
    , function(t, e, i) {
        var n = i(30)
          , r = i(32);
        t.exports = function(t) {
            return null == t ? [] : n(t, r(t))
        }
    }
    , function(t, e, i) {
        var n = i(31);
        t.exports = function(t, e) {
            return n(e, (function(e) {
                return t[e]
            }
            ))
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n; )
                r[i] = e(t[i], i, t);
            return r
        }
    }
    , function(t, e, i) {
        var n = i(33)
          , r = i(47)
          , o = i(51);
        t.exports = function(t) {
            return o(t) ? n(t) : r(t)
        }
    }
    , function(t, e, i) {
        var n = i(34)
          , r = i(35)
          , o = i(19)
          , s = i(40)
          , a = i(42)
          , u = i(43)
          , h = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var i = o(t)
              , c = !i && r(t)
              , l = !i && !c && s(t)
              , f = !i && !c && !l && u(t)
              , d = i || c || l || f
              , y = d ? n(t.length, String) : []
              , p = y.length;
            for (var v in t)
                !e && !h.call(t, v) || d && ("length" == v || l && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, p)) || y.push(v);
            return y
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, n = Array(t); ++i < t; )
                n[i] = e(i);
            return n
        }
    }
    , function(t, e, i) {
        var n = i(36)
          , r = i(9)
          , o = Object.prototype
          , s = o.hasOwnProperty
          , a = o.propertyIsEnumerable
          , u = n(function() {
            return arguments
        }()) ? n : function(t) {
            return r(t) && s.call(t, "callee") && !a.call(t, "callee")
        }
        ;
        t.exports = u
    }
    , function(t, e, i) {
        var n = i(8)
          , r = i(9)
          , o = "[object Arguments]";
        t.exports = function(t) {
            return r(t) && n(t) == o
        }
    }
    , function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }
    , function(t, e, i) {
        var n = i(16)
          , r = Object.prototype
          , o = r.hasOwnProperty
          , s = r.toString
          , a = n ? n.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, a)
              , i = t[a];
            try {
                t[a] = void 0;
                var n = !0
            } catch (t) {}
            var r = s.call(t);
            return n && (e ? t[a] = i : delete t[a]),
            r
        }
    }
    , function(t, e) {
        var i = Object.prototype.toString;
        t.exports = function(t) {
            return i.call(t)
        }
    }
    , function(t, e, i) {
        (function(t) {
            var n = i(17)
              , r = i(41)
              , o = e && !e.nodeType && e
              , s = o && "object" == typeof t && t && !t.nodeType && t
              , a = s && s.exports === o ? n.Buffer : void 0
              , u = (a ? a.isBuffer : void 0) || r;
            t.exports = u
        }
        ).call(this, i(20)(t))
    }
    , function(t, e) {
        t.exports = function() {
            return !1
        }
    }
    , function(t, e) {
        var i = 9007199254740991
          , n = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            var r = typeof t;
            return !!(e = null == e ? i : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }
    , function(t, e, i) {
        var n = i(44)
          , r = i(45)
          , o = i(46)
          , s = o && o.isTypedArray
          , a = s ? r(s) : n;
        t.exports = a
    }
    , function(t, e, i) {
        var n = i(8)
          , r = i(21)
          , o = i(9)
          , s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0,
        s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1,
        t.exports = function(t) {
            return o(t) && r(t.length) && !!s[n(t)]
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e)
            }
        }
    }
    , function(t, e, i) {
        (function(t) {
            var n = i(18)
              , r = e && !e.nodeType && e
              , o = r && "object" == typeof t && t && !t.nodeType && t
              , s = o && o.exports === r && n.process
              , a = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || s && s.binding && s.binding("util")
                } catch (t) {}
            }();
            t.exports = a
        }
        ).call(this, i(20)(t))
    }
    , function(t, e, i) {
        var n = i(48)
          , r = i(49)
          , o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!n(t))
                return r(t);
            var e = [];
            for (var i in Object(t))
                o.call(t, i) && "constructor" != i && e.push(i);
            return e
        }
    }
    , function(t, e) {
        var i = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || i)
        }
    }
    , function(t, e, i) {
        var n = i(50)(Object.keys, Object);
        t.exports = n
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return function(i) {
                return t(e(i))
            }
        }
    }
    , function(t, e, i) {
        var n = i(52)
          , r = i(21);
        t.exports = function(t) {
            return null != t && r(t.length) && !n(t)
        }
    }
    , function(t, e, i) {
        var n = i(8)
          , r = i(53)
          , o = "[object AsyncFunction]"
          , s = "[object Function]"
          , a = "[object GeneratorFunction]"
          , u = "[object Proxy]";
        t.exports = function(t) {
            if (!r(t))
                return !1;
            var e = n(t);
            return e == s || e == a || e == o || e == u
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++)
                    i[e] = t[e];
                return i
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }
    }
    , function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (null == t)
                return {};
            var i, n, r = {}, o = Object.keys(t);
            for (n = 0; n < o.length; n++)
                i = o[n],
                e.indexOf(i) >= 0 || (r[i] = t[i]);
            return r
        }
    }
    , function(t, e, i) {
        var n = i(2);
        t.exports = function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t)); )
                ;
            return t
        }
    }
    , function(t, e, i) {
        "use strict";
        i.r(e);
        var n = {};
        i.r(n),
        i.d(n, "BoxZone", (function() {
            return yi
        }
        )),
        i.d(n, "LineZone", (function() {
            return pi
        }
        )),
        i.d(n, "MeshZone", (function() {
            return vi
        }
        )),
        i.d(n, "PointZone", (function() {
            return mi
        }
        )),
        i.d(n, "ScreenZone", (function() {
            return gi
        }
        )),
        i.d(n, "SphereZone", (function() {
            return Mi
        }
        ));
        var r = {};
        i.r(r),
        i.d(r, "Body", (function() {
            return Ue
        }
        )),
        i.d(r, "BodySprite", (function() {
            return ti
        }
        )),
        i.d(r, "InitializerUtil", (function() {
            return ii
        }
        )),
        i.d(r, "Life", (function() {
            return ni
        }
        )),
        i.d(r, "Mass", (function() {
            return ri
        }
        )),
        i.d(r, "Position", (function() {
            return Oi
        }
        )),
        i.d(r, "Radius", (function() {
            return Pi
        }
        )),
        i.d(r, "Rate", (function() {
            return Si
        }
        )),
        i.d(r, "Texture", (function() {
            return ji
        }
        )),
        i.d(r, "VectorVelocity", (function() {
            return Ii
        }
        )),
        i.d(r, "PolarVelocity", (function() {
            return Ri
        }
        )),
        i.d(r, "RadialVelocity", (function() {
            return Bi
        }
        ));
        var o = {};
        i.r(o),
        i.d(o, "Alpha", (function() {
            return tn
        }
        )),
        i.d(o, "Attraction", (function() {
            return en
        }
        )),
        i.d(o, "Collision", (function() {
            return nn
        }
        )),
        i.d(o, "Color", (function() {
            return rn
        }
        )),
        i.d(o, "CrossZone", (function() {
            return on
        }
        )),
        i.d(o, "Force", (function() {
            return sn
        }
        )),
        i.d(o, "Gravity", (function() {
            return an
        }
        )),
        i.d(o, "RandomDrift", (function() {
            return un
        }
        )),
        i.d(o, "Repulsion", (function() {
            return hn
        }
        )),
        i.d(o, "Rotate", (function() {
            return cn
        }
        )),
        i.d(o, "Scale", (function() {
            return ln
        }
        )),
        i.d(o, "Spring", (function() {
            return fn
        }
        ));
        var s, a, u, h, c, l, f, d, y, p, v = i(0), m = i.n(v), g = i(1), x = i.n(g), _ = "Behaviour", b = "Alpha", z = "Attraction", w = "Collision", k = "Color", M = "CrossZone", E = "Force", O = "Gravity", P = "RandomDrift", S = "Repulsion", T = "Rotate", A = "Scale", j = "Spring", C = "Initializer", R = "Body", B = "BodySprite", I = "Texture", V = "Life", D = "Mass", F = "Position", Z = "Radius", N = "VectorVelocity", L = "PolarVelocity", U = "RadialVelocity", q = "Rate", Y = [B, I], X = "Zone", J = "BoxZone", Q = "LineZone", G = "MeshZone", H = "PointZone", K = "ScreenZone", W = "SphereZone", $ = "BaseRenderer", tt = "CustomRenderer", et = "SpriteRenderer", it = "MeshRenderer", nt = "PointsRenderer", rt = 3.142, ot = 500, st = rt / 180, at = {
            easeLinear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return Math.pow(t, 2)
            },
            easeOutQuad: function(t) {
                return -(Math.pow(t - 1, 2) - 1)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
            },
            easeInCubic: function(t) {
                return Math.pow(t, 3)
            },
            easeOutCubic: function(t) {
                return Math.pow(t - 1, 3) + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
            },
            easeInQuart: function(t) {
                return Math.pow(t, 4)
            },
            easeOutQuart: function(t) {
                return -(Math.pow(t - 1, 4) - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (rt / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (rt / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(rt * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            }
        }, ut = at.easeLinear, ht = at.easeInQuad, ct = at.easeOutQuad, lt = at.easeInOutQuad, ft = at.easeInCubic, dt = at.easeOutCubic, yt = at.easeInOutCubic, pt = at.easeInQuart, vt = at.easeOutQuart, mt = at.easeInOutQuart, gt = at.easeInSine, xt = at.easeOutSine, _t = at.easeInOutSine, bt = at.easeInExpo, zt = at.easeOutExpo, wt = at.easeInOutExpo, kt = at.easeInCirc, Mt = at.easeOutCirc, Et = at.easeInOutCirc, Ot = at.easeInBack, Pt = at.easeOutBack, St = at.easeInOutBack, Tt = function(t) {
            return at[t] ? at[t] : at.easeLinear
        }, At = function(t) {
            return at[t] ? at[t] : at.easeLinear
        }, jt = 1 / 0, Ct = 0, Rt = 1, Bt = !1, It = !1, Vt = null, Dt = null, Ft = 1, Zt = 10, Nt = 1, Lt = 1, Ut = !1, qt = !1, Yt = ut, Xt = [F, V, Z, D, R, B, I, L, U, N], Jt = [b, z, k, M, E, O, P, S, T, A, j], Qt = [J, Q, G, H, W], Gt = i(6), Ht = i.n(Gt), Kt = {
            getRGB: function(t) {
                var e = {};
                if ("number" == typeof t)
                    n = Math.floor(t),
                    e.r = (t >> 16 & 255) / 255,
                    e.g = (t >> 8 & 255) / 255,
                    e.b = (255 & t) / 255;
                else if ("string" == typeof t) {
                    var i;
                    if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(t))
                        e.r = Math.min(255, parseInt(i[1], 10)) / 255,
                        e.g = Math.min(255, parseInt(i[2], 10)) / 255,
                        e.b = Math.min(255, parseInt(i[3], 10)) / 255;
                    else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                        var n = i[1];
                        e.r = parseInt(n.charAt(0) + n.charAt(1), 16) / 255,
                        e.g = parseInt(n.charAt(2) + n.charAt(3), 16) / 255,
                        e.b = parseInt(n.charAt(4) + n.charAt(5), 16) / 255
                    }
                } else
                    e.r = t.r,
                    e.g = t.g,
                    e.b = t.b;
                return e
            }
        }, Wt = {
            _id: 0,
            _uids: {},
            getNewId: function() {
                return "PUID_".concat(this._id++)
            },
            id: function(t) {
                for (var e in this._uids)
                    if (this._uids[e] == t)
                        return e;
                var i = this.getNewId();
                return this._uids[i] = t,
                i
            }
        }, $t = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                for (var t = [], e = 0; e < 256; e++)
                    t[e] = (e < 16 ? "0" : "") + e.toString(16);
                return function() {
                    var e = 4294967295 * Math.random() | 0
                      , i = 4294967295 * Math.random() | 0
                      , n = 4294967295 * Math.random() | 0
                      , r = 4294967295 * Math.random() | 0;
                    return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
                }
            }(),
            clamp: function(t, e, i) {
                return Math.max(e, Math.min(i, t))
            },
            euclideanModulo: function(t, e) {
                return (t % e + e) % e
            },
            mapLinear: function(t, e, i, n, r) {
                return n + (t - e) * (r - n) / (i - e)
            },
            lerp: function(t, e, i) {
                return (1 - i) * t + i * e
            },
            smoothstep: function(t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
            },
            smootherstep: function(t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
            },
            randInt: function(t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function(t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function(t) {
                return t * (.5 - Math.random())
            },
            degToRad: function(t) {
                return t * $t.DEG2RAD
            },
            radToDeg: function(t) {
                return t * $t.RAD2DEG
            },
            isPowerOfTwo: function(t) {
                return 0 == (t & t - 1) && 0 !== t
            },
            ceilPowerOfTwo: function(t) {
                return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
            },
            floorPowerOfTwo: function(t) {
                return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
            }
        };
        function te(t, e, i, n) {
            this._x = t || 0,
            this._y = e || 0,
            this._z = i || 0,
            this._w = void 0 !== n ? n : 1
        }
        function ee(t, e, i) {
            this.x = t || 0,
            this.y = e || 0,
            this.z = i || 0
        }
        function ie() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        function ne(t, e, i, n) {
            this._x = t || 0,
            this._y = e || 0,
            this._z = i || 0,
            this._order = n || ne.DefaultOrder
        }
        Object.assign(te, {
            slerp: function(t, e, i, n) {
                return i.copy(t).slerp(e, n)
            },
            slerpFlat: function(t, e, i, n, r, o, s) {
                var a = i[n + 0]
                  , u = i[n + 1]
                  , h = i[n + 2]
                  , c = i[n + 3]
                  , l = r[o + 0]
                  , f = r[o + 1]
                  , d = r[o + 2]
                  , y = r[o + 3];
                if (c !== y || a !== l || u !== f || h !== d) {
                    var p = 1 - s
                      , v = a * l + u * f + h * d + c * y
                      , m = v >= 0 ? 1 : -1
                      , g = 1 - v * v;
                    if (g > Number.EPSILON) {
                        var x = Math.sqrt(g)
                          , _ = Math.atan2(x, v * m);
                        p = Math.sin(p * _) / x,
                        s = Math.sin(s * _) / x
                    }
                    var b = s * m;
                    if (a = a * p + l * b,
                    u = u * p + f * b,
                    h = h * p + d * b,
                    c = c * p + y * b,
                    p === 1 - s) {
                        var z = 1 / Math.sqrt(a * a + u * u + h * h + c * c);
                        a *= z,
                        u *= z,
                        h *= z,
                        c *= z
                    }
                }
                t[e] = a,
                t[e + 1] = u,
                t[e + 2] = h,
                t[e + 3] = c
            }
        }),
        Object.defineProperties(te.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t,
                    this._onChangeCallback()
                }
            },
            w: {
                get: function() {
                    return this._w
                },
                set: function(t) {
                    this._w = t,
                    this._onChangeCallback()
                }
            }
        }),
        Object.assign(te.prototype, {
            isQuaternion: !0,
            set: function(t, e, i, n) {
                return this._x = t,
                this._y = e,
                this._z = i,
                this._w = n,
                this._onChangeCallback(),
                this
            },
            clone: function() {
                return new this.constructor(this._x,this._y,this._z,this._w)
            },
            copy: function(t) {
                return this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = t.w,
                this._onChangeCallback(),
                this
            },
            setFromEuler: function(t, e) {
                if (!t || !t.isEuler)
                    throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                var i = t._x
                  , n = t._y
                  , r = t._z
                  , o = t.order
                  , s = Math.cos
                  , a = Math.sin
                  , u = s(i / 2)
                  , h = s(n / 2)
                  , c = s(r / 2)
                  , l = a(i / 2)
                  , f = a(n / 2)
                  , d = a(r / 2);
                return "XYZ" === o ? (this._x = l * h * c + u * f * d,
                this._y = u * f * c - l * h * d,
                this._z = u * h * d + l * f * c,
                this._w = u * h * c - l * f * d) : "YXZ" === o ? (this._x = l * h * c + u * f * d,
                this._y = u * f * c - l * h * d,
                this._z = u * h * d - l * f * c,
                this._w = u * h * c + l * f * d) : "ZXY" === o ? (this._x = l * h * c - u * f * d,
                this._y = u * f * c + l * h * d,
                this._z = u * h * d + l * f * c,
                this._w = u * h * c - l * f * d) : "ZYX" === o ? (this._x = l * h * c - u * f * d,
                this._y = u * f * c + l * h * d,
                this._z = u * h * d - l * f * c,
                this._w = u * h * c + l * f * d) : "YZX" === o ? (this._x = l * h * c + u * f * d,
                this._y = u * f * c + l * h * d,
                this._z = u * h * d - l * f * c,
                this._w = u * h * c - l * f * d) : "XZY" === o && (this._x = l * h * c - u * f * d,
                this._y = u * f * c - l * h * d,
                this._z = u * h * d + l * f * c,
                this._w = u * h * c + l * f * d),
                !1 !== e && this._onChangeCallback(),
                this
            },
            setFromAxisAngle: function(t, e) {
                var i = e / 2
                  , n = Math.sin(i);
                return this._x = t.x * n,
                this._y = t.y * n,
                this._z = t.z * n,
                this._w = Math.cos(i),
                this._onChangeCallback(),
                this
            },
            setFromRotationMatrix: function(t) {
                var e, i = t.elements, n = i[0], r = i[4], o = i[8], s = i[1], a = i[5], u = i[9], h = i[2], c = i[6], l = i[10], f = n + a + l;
                return f > 0 ? (e = .5 / Math.sqrt(f + 1),
                this._w = .25 / e,
                this._x = (c - u) * e,
                this._y = (o - h) * e,
                this._z = (s - r) * e) : n > a && n > l ? (e = 2 * Math.sqrt(1 + n - a - l),
                this._w = (c - u) / e,
                this._x = .25 * e,
                this._y = (r + s) / e,
                this._z = (o + h) / e) : a > l ? (e = 2 * Math.sqrt(1 + a - n - l),
                this._w = (o - h) / e,
                this._x = (r + s) / e,
                this._y = .25 * e,
                this._z = (u + c) / e) : (e = 2 * Math.sqrt(1 + l - n - a),
                this._w = (s - r) / e,
                this._x = (o + h) / e,
                this._y = (u + c) / e,
                this._z = .25 * e),
                this._onChangeCallback(),
                this
            },
            setFromUnitVectors: function(t, e) {
                var i = t.dot(e) + 1;
                return i < 1e-6 ? (i = 0,
                Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
                this._y = t.x,
                this._z = 0,
                this._w = i) : (this._x = 0,
                this._y = -t.z,
                this._z = t.y,
                this._w = i)) : (this._x = t.y * e.z - t.z * e.y,
                this._y = t.z * e.x - t.x * e.z,
                this._z = t.x * e.y - t.y * e.x,
                this._w = i),
                this.normalize()
            },
            angleTo: function(t) {
                return 2 * Math.acos(Math.abs($t.clamp(this.dot(t), -1, 1)))
            },
            rotateTowards: function(t, e) {
                var i = this.angleTo(t);
                if (0 === i)
                    return this;
                var n = Math.min(1, e / i);
                return this.slerp(t, n),
                this
            },
            inverse: function() {
                return this.conjugate()
            },
            conjugate: function() {
                return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this._onChangeCallback(),
                this
            },
            dot: function(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            },
            lengthSq: function() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            },
            length: function() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            },
            normalize: function() {
                var t = this.length();
                return 0 === t ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (t = 1 / t,
                this._x = this._x * t,
                this._y = this._y * t,
                this._z = this._z * t,
                this._w = this._w * t),
                this._onChangeCallback(),
                this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
                this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
            },
            premultiply: function(t) {
                return this.multiplyQuaternions(t, this)
            },
            multiplyQuaternions: function(t, e) {
                var i = t._x
                  , n = t._y
                  , r = t._z
                  , o = t._w
                  , s = e._x
                  , a = e._y
                  , u = e._z
                  , h = e._w;
                return this._x = i * h + o * s + n * u - r * a,
                this._y = n * h + o * a + r * s - i * u,
                this._z = r * h + o * u + i * a - n * s,
                this._w = o * h - i * s - n * a - r * u,
                this._onChangeCallback(),
                this
            },
            slerp: function(t, e) {
                if (0 === e)
                    return this;
                if (1 === e)
                    return this.copy(t);
                var i = this._x
                  , n = this._y
                  , r = this._z
                  , o = this._w
                  , s = o * t._w + i * t._x + n * t._y + r * t._z;
                if (s < 0 ? (this._w = -t._w,
                this._x = -t._x,
                this._y = -t._y,
                this._z = -t._z,
                s = -s) : this.copy(t),
                s >= 1)
                    return this._w = o,
                    this._x = i,
                    this._y = n,
                    this._z = r,
                    this;
                var a = 1 - s * s;
                if (a <= Number.EPSILON) {
                    var u = 1 - e;
                    return this._w = u * o + e * this._w,
                    this._x = u * i + e * this._x,
                    this._y = u * n + e * this._y,
                    this._z = u * r + e * this._z,
                    this.normalize(),
                    this._onChangeCallback(),
                    this
                }
                var h = Math.sqrt(a)
                  , c = Math.atan2(h, s)
                  , l = Math.sin((1 - e) * c) / h
                  , f = Math.sin(e * c) / h;
                return this._w = o * l + this._w * f,
                this._x = i * l + this._x * f,
                this._y = n * l + this._y * f,
                this._z = r * l + this._z * f,
                this._onChangeCallback(),
                this
            },
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this._x = t[e],
                this._y = t[e + 1],
                this._z = t[e + 2],
                this._w = t[e + 3],
                this._onChangeCallback(),
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._w,
                t
            },
            _onChange: function(t) {
                return this._onChangeCallback = t,
                this
            },
            _onChangeCallback: function() {}
        }),
        Object.assign(ee.prototype, {
            isVector3: !0,
            set: function(t, e, i) {
                return this.x = t,
                this.y = e,
                this.z = i,
                this
            },
            setScalar: function(t) {
                return this.x = t,
                this.y = t,
                this.z = t,
                this
            },
            setX: function(t) {
                return this.x = t,
                this
            },
            setY: function(t) {
                return this.y = t,
                this
            },
            setZ: function(t) {
                return this.z = t,
                this
            },
            setComponent: function(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x,this.y,this.z)
            },
            copy: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this)
            },
            addScalar: function(t) {
                return this.x += t,
                this.y += t,
                this.z += t,
                this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this)
            },
            subScalar: function(t) {
                return this.x -= t,
                this.y -= t,
                this.z -= t,
                this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                this.multiplyVectors(t, e)) : (this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this)
            },
            multiplyScalar: function(t) {
                return this.x *= t,
                this.y *= t,
                this.z *= t,
                this
            },
            multiplyVectors: function(t, e) {
                return this.x = t.x * e.x,
                this.y = t.y * e.y,
                this.z = t.z * e.z,
                this
            },
            applyEuler: (a = new te,
            function(t) {
                return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                this.applyQuaternion(a.setFromEuler(t))
            }
            ),
            applyAxisAngle: function() {
                var t = new te;
                return function(e, i) {
                    return this.applyQuaternion(t.setFromAxisAngle(e, i))
                }
            }(),
            applyMatrix3: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[3] * i + r[6] * n,
                this.y = r[1] * e + r[4] * i + r[7] * n,
                this.z = r[2] * e + r[5] * i + r[8] * n,
                this
            },
            applyMatrix4: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements
                  , o = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
                return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * o,
                this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * o,
                this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * o,
                this
            },
            applyQuaternion: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.x
                  , o = t.y
                  , s = t.z
                  , a = t.w
                  , u = a * e + o * n - s * i
                  , h = a * i + s * e - r * n
                  , c = a * n + r * i - o * e
                  , l = -r * e - o * i - s * n;
                return this.x = u * a + l * -r + h * -s - c * -o,
                this.y = h * a + l * -o + c * -r - u * -s,
                this.z = c * a + l * -s + u * -o - h * -r,
                this
            },
            project: function(t) {
                return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
            },
            unproject: function(t) {
                return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
            },
            transformDirection: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[4] * i + r[8] * n,
                this.y = r[1] * e + r[5] * i + r[9] * n,
                this.z = r[2] * e + r[6] * i + r[10] * n,
                this.normalize()
            },
            divide: function(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this.z /= t.z,
                this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this
            },
            clampScalar: function(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this.z = Math.max(t, Math.min(e, this.z)),
                this
            },
            clampLength: function(t, e) {
                var i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
            },
            floor: function() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
            },
            round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this
            },
            negate: function() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            manhattanLength: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length() || 1)
            },
            setLength: function(t) {
                return this.normalize().multiplyScalar(t)
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t)
            },
            cross: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(t, e)) : this.crossVectors(this, t)
            },
            crossVectors: function(t, e) {
                var i = t.x
                  , n = t.y
                  , r = t.z
                  , o = e.x
                  , s = e.y
                  , a = e.z;
                return this.x = n * a - r * s,
                this.y = r * o - i * a,
                this.z = i * s - n * o,
                this
            },
            projectOnVector: function(t) {
                var e = t.dot(this) / t.lengthSq();
                return this.copy(t).multiplyScalar(e)
            },
            projectOnPlane: (s = new ee,
            function(t) {
                return s.copy(this).projectOnVector(t),
                this.sub(s)
            }
            ),
            reflect: function() {
                var t = new ee;
                return function(e) {
                    return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                }
            }(),
            angleTo: function(t) {
                var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
                return Math.acos($t.clamp(e, -1, 1))
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x
                  , i = this.y - t.y
                  , n = this.z - t.z;
                return e * e + i * i + n * n
            },
            manhattanDistanceTo: function(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
            },
            setFromSpherical: function(t) {
                return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
            },
            setFromSphericalCoords: function(t, e, i) {
                var n = Math.sin(e) * t;
                return this.x = n * Math.sin(i),
                this.y = Math.cos(e) * t,
                this.z = n * Math.cos(i),
                this
            },
            setFromCylindrical: function(t) {
                return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
            },
            setFromCylindricalCoords: function(t, e, i) {
                return this.x = t * Math.sin(e),
                this.y = i,
                this.z = t * Math.cos(e),
                this
            },
            setFromMatrixPosition: function(t) {
                var e = t.elements;
                return this.x = e[12],
                this.y = e[13],
                this.z = e[14],
                this
            },
            setFromMatrixScale: function(t) {
                var e = this.setFromMatrixColumn(t, 0).length()
                  , i = this.setFromMatrixColumn(t, 1).length()
                  , n = this.setFromMatrixColumn(t, 2).length();
                return this.x = e,
                this.y = i,
                this.z = n,
                this
            },
            setFromMatrixColumn: function(t, e) {
                return this.fromArray(t.elements, 4 * e)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t
            },
            fromBufferAttribute: function(t, e, i) {
                return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this
            }
        }),
        Object.assign(ie.prototype, {
            isMatrix4: !0,
            set: function(t, e, i, n, r, o, s, a, u, h, c, l, f, d, y, p) {
                var v = this.elements;
                return v[0] = t,
                v[4] = e,
                v[8] = i,
                v[12] = n,
                v[1] = r,
                v[5] = o,
                v[9] = s,
                v[13] = a,
                v[2] = u,
                v[6] = h,
                v[10] = c,
                v[14] = l,
                v[3] = f,
                v[7] = d,
                v[11] = y,
                v[15] = p,
                this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            },
            clone: function() {
                return (new ie).fromArray(this.elements)
            },
            copy: function(t) {
                var e = this.elements
                  , i = t.elements;
                return e[0] = i[0],
                e[1] = i[1],
                e[2] = i[2],
                e[3] = i[3],
                e[4] = i[4],
                e[5] = i[5],
                e[6] = i[6],
                e[7] = i[7],
                e[8] = i[8],
                e[9] = i[9],
                e[10] = i[10],
                e[11] = i[11],
                e[12] = i[12],
                e[13] = i[13],
                e[14] = i[14],
                e[15] = i[15],
                this
            },
            copyPosition: function(t) {
                var e = this.elements
                  , i = t.elements;
                return e[12] = i[12],
                e[13] = i[13],
                e[14] = i[14],
                this
            },
            extractBasis: function(t, e, i) {
                return t.setFromMatrixColumn(this, 0),
                e.setFromMatrixColumn(this, 1),
                i.setFromMatrixColumn(this, 2),
                this
            },
            makeBasis: function(t, e, i) {
                return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1),
                this
            },
            extractRotation: function() {
                var t = new ee;
                return function(e) {
                    var i = this.elements
                      , n = e.elements
                      , r = 1 / t.setFromMatrixColumn(e, 0).length()
                      , o = 1 / t.setFromMatrixColumn(e, 1).length()
                      , s = 1 / t.setFromMatrixColumn(e, 2).length();
                    return i[0] = n[0] * r,
                    i[1] = n[1] * r,
                    i[2] = n[2] * r,
                    i[3] = 0,
                    i[4] = n[4] * o,
                    i[5] = n[5] * o,
                    i[6] = n[6] * o,
                    i[7] = 0,
                    i[8] = n[8] * s,
                    i[9] = n[9] * s,
                    i[10] = n[10] * s,
                    i[11] = 0,
                    i[12] = 0,
                    i[13] = 0,
                    i[14] = 0,
                    i[15] = 1,
                    this
                }
            }(),
            makeRotationFromEuler: function(t) {
                t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var e = this.elements
                  , i = t.x
                  , n = t.y
                  , r = t.z
                  , o = Math.cos(i)
                  , s = Math.sin(i)
                  , a = Math.cos(n)
                  , u = Math.sin(n)
                  , h = Math.cos(r)
                  , c = Math.sin(r);
                if ("XYZ" === t.order) {
                    var l = o * h
                      , f = o * c
                      , d = s * h
                      , y = s * c;
                    e[0] = a * h,
                    e[4] = -a * c,
                    e[8] = u,
                    e[1] = f + d * u,
                    e[5] = l - y * u,
                    e[9] = -s * a,
                    e[2] = y - l * u,
                    e[6] = d + f * u,
                    e[10] = o * a
                } else if ("YXZ" === t.order) {
                    var p = a * h
                      , v = a * c
                      , m = u * h
                      , g = u * c;
                    e[0] = p + g * s,
                    e[4] = m * s - v,
                    e[8] = o * u,
                    e[1] = o * c,
                    e[5] = o * h,
                    e[9] = -s,
                    e[2] = v * s - m,
                    e[6] = g + p * s,
                    e[10] = o * a
                } else if ("ZXY" === t.order) {
                    p = a * h,
                    v = a * c,
                    m = u * h,
                    g = u * c;
                    e[0] = p - g * s,
                    e[4] = -o * c,
                    e[8] = m + v * s,
                    e[1] = v + m * s,
                    e[5] = o * h,
                    e[9] = g - p * s,
                    e[2] = -o * u,
                    e[6] = s,
                    e[10] = o * a
                } else if ("ZYX" === t.order) {
                    l = o * h,
                    f = o * c,
                    d = s * h,
                    y = s * c;
                    e[0] = a * h,
                    e[4] = d * u - f,
                    e[8] = l * u + y,
                    e[1] = a * c,
                    e[5] = y * u + l,
                    e[9] = f * u - d,
                    e[2] = -u,
                    e[6] = s * a,
                    e[10] = o * a
                } else if ("YZX" === t.order) {
                    var x = o * a
                      , _ = o * u
                      , b = s * a
                      , z = s * u;
                    e[0] = a * h,
                    e[4] = z - x * c,
                    e[8] = b * c + _,
                    e[1] = c,
                    e[5] = o * h,
                    e[9] = -s * h,
                    e[2] = -u * h,
                    e[6] = _ * c + b,
                    e[10] = x - z * c
                } else if ("XZY" === t.order) {
                    x = o * a,
                    _ = o * u,
                    b = s * a,
                    z = s * u;
                    e[0] = a * h,
                    e[4] = -c,
                    e[8] = u * h,
                    e[1] = x * c + z,
                    e[5] = o * h,
                    e[9] = _ * c - b,
                    e[2] = b * c - _,
                    e[6] = s * h,
                    e[10] = z * c + x
                }
                return e[3] = 0,
                e[7] = 0,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            },
            makeRotationFromQuaternion: (d = new ee(0,0,0),
            y = new ee(1,1,1),
            function(t) {
                return this.compose(d, t, y)
            }
            ),
            lookAt: (c = new ee,
            l = new ee,
            f = new ee,
            function(t, e, i) {
                var n = this.elements;
                return f.subVectors(t, e),
                0 === f.lengthSq() && (f.z = 1),
                f.normalize(),
                c.crossVectors(i, f),
                0 === c.lengthSq() && (1 === Math.abs(i.z) ? f.x += 1e-4 : f.z += 1e-4,
                f.normalize(),
                c.crossVectors(i, f)),
                c.normalize(),
                l.crossVectors(f, c),
                n[0] = c.x,
                n[4] = l.x,
                n[8] = f.x,
                n[1] = c.y,
                n[5] = l.y,
                n[9] = f.y,
                n[2] = c.z,
                n[6] = l.z,
                n[10] = f.z,
                this
            }
            ),
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
                this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
            },
            premultiply: function(t) {
                return this.multiplyMatrices(t, this)
            },
            multiplyMatrices: function(t, e) {
                var i = t.elements
                  , n = e.elements
                  , r = this.elements
                  , o = i[0]
                  , s = i[4]
                  , a = i[8]
                  , u = i[12]
                  , h = i[1]
                  , c = i[5]
                  , l = i[9]
                  , f = i[13]
                  , d = i[2]
                  , y = i[6]
                  , p = i[10]
                  , v = i[14]
                  , m = i[3]
                  , g = i[7]
                  , x = i[11]
                  , _ = i[15]
                  , b = n[0]
                  , z = n[4]
                  , w = n[8]
                  , k = n[12]
                  , M = n[1]
                  , E = n[5]
                  , O = n[9]
                  , P = n[13]
                  , S = n[2]
                  , T = n[6]
                  , A = n[10]
                  , j = n[14]
                  , C = n[3]
                  , R = n[7]
                  , B = n[11]
                  , I = n[15];
                return r[0] = o * b + s * M + a * S + u * C,
                r[4] = o * z + s * E + a * T + u * R,
                r[8] = o * w + s * O + a * A + u * B,
                r[12] = o * k + s * P + a * j + u * I,
                r[1] = h * b + c * M + l * S + f * C,
                r[5] = h * z + c * E + l * T + f * R,
                r[9] = h * w + c * O + l * A + f * B,
                r[13] = h * k + c * P + l * j + f * I,
                r[2] = d * b + y * M + p * S + v * C,
                r[6] = d * z + y * E + p * T + v * R,
                r[10] = d * w + y * O + p * A + v * B,
                r[14] = d * k + y * P + p * j + v * I,
                r[3] = m * b + g * M + x * S + _ * C,
                r[7] = m * z + g * E + x * T + _ * R,
                r[11] = m * w + g * O + x * A + _ * B,
                r[15] = m * k + g * P + x * j + _ * I,
                this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t,
                e[4] *= t,
                e[8] *= t,
                e[12] *= t,
                e[1] *= t,
                e[5] *= t,
                e[9] *= t,
                e[13] *= t,
                e[2] *= t,
                e[6] *= t,
                e[10] *= t,
                e[14] *= t,
                e[3] *= t,
                e[7] *= t,
                e[11] *= t,
                e[15] *= t,
                this
            },
            applyToBufferAttribute: function() {
                var t = new ee;
                return function(e) {
                    for (var i = 0, n = e.count; i < n; i++)
                        t.x = e.getX(i),
                        t.y = e.getY(i),
                        t.z = e.getZ(i),
                        t.applyMatrix4(this),
                        e.setXYZ(i, t.x, t.y, t.z);
                    return e
                }
            }(),
            determinant: function() {
                var t = this.elements
                  , e = t[0]
                  , i = t[4]
                  , n = t[8]
                  , r = t[12]
                  , o = t[1]
                  , s = t[5]
                  , a = t[9]
                  , u = t[13]
                  , h = t[2]
                  , c = t[6]
                  , l = t[10]
                  , f = t[14];
                return t[3] * (+r * a * c - n * u * c - r * s * l + i * u * l + n * s * f - i * a * f) + t[7] * (+e * a * f - e * u * l + r * o * l - n * o * f + n * u * h - r * a * h) + t[11] * (+e * u * c - e * s * f - r * o * c + i * o * f + r * s * h - i * u * h) + t[15] * (-n * s * h - e * a * c + e * s * l + n * o * c - i * o * l + i * a * h)
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1],
                e[1] = e[4],
                e[4] = t,
                t = e[2],
                e[2] = e[8],
                e[8] = t,
                t = e[6],
                e[6] = e[9],
                e[9] = t,
                t = e[3],
                e[3] = e[12],
                e[12] = t,
                t = e[7],
                e[7] = e[13],
                e[13] = t,
                t = e[11],
                e[11] = e[14],
                e[14] = t,
                this
            },
            setPosition: function(t, e, i) {
                var n = this.elements;
                return t.isVector3 ? (n[12] = t.x,
                n[13] = t.y,
                n[14] = t.z) : (n[12] = t,
                n[13] = e,
                n[14] = i),
                this
            },
            getInverse: function(t, e) {
                var i = this.elements
                  , n = t.elements
                  , r = n[0]
                  , o = n[1]
                  , s = n[2]
                  , a = n[3]
                  , u = n[4]
                  , h = n[5]
                  , c = n[6]
                  , l = n[7]
                  , f = n[8]
                  , d = n[9]
                  , y = n[10]
                  , p = n[11]
                  , v = n[12]
                  , m = n[13]
                  , g = n[14]
                  , x = n[15]
                  , _ = d * g * l - m * y * l + m * c * p - h * g * p - d * c * x + h * y * x
                  , b = v * y * l - f * g * l - v * c * p + u * g * p + f * c * x - u * y * x
                  , z = f * m * l - v * d * l + v * h * p - u * m * p - f * h * x + u * d * x
                  , w = v * d * c - f * m * c - v * h * y + u * m * y + f * h * g - u * d * g
                  , k = r * _ + o * b + s * z + a * w;
                if (0 === k) {
                    var M = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                    if (!0 === e)
                        throw new Error(M);
                    return console.warn(M),
                    this.identity()
                }
                var E = 1 / k;
                return i[0] = _ * E,
                i[1] = (m * y * a - d * g * a - m * s * p + o * g * p + d * s * x - o * y * x) * E,
                i[2] = (h * g * a - m * c * a + m * s * l - o * g * l - h * s * x + o * c * x) * E,
                i[3] = (d * c * a - h * y * a - d * s * l + o * y * l + h * s * p - o * c * p) * E,
                i[4] = b * E,
                i[5] = (f * g * a - v * y * a + v * s * p - r * g * p - f * s * x + r * y * x) * E,
                i[6] = (v * c * a - u * g * a - v * s * l + r * g * l + u * s * x - r * c * x) * E,
                i[7] = (u * y * a - f * c * a + f * s * l - r * y * l - u * s * p + r * c * p) * E,
                i[8] = z * E,
                i[9] = (v * d * a - f * m * a - v * o * p + r * m * p + f * o * x - r * d * x) * E,
                i[10] = (u * m * a - v * h * a + v * o * l - r * m * l - u * o * x + r * h * x) * E,
                i[11] = (f * h * a - u * d * a - f * o * l + r * d * l + u * o * p - r * h * p) * E,
                i[12] = w * E,
                i[13] = (f * m * s - v * d * s + v * o * y - r * m * y - f * o * g + r * d * g) * E,
                i[14] = (v * h * s - u * m * s - v * o * c + r * m * c + u * o * g - r * h * g) * E,
                i[15] = (u * d * s - f * h * s + f * o * c - r * d * c - u * o * y + r * h * y) * E,
                this
            },
            scale: function(t) {
                var e = this.elements
                  , i = t.x
                  , n = t.y
                  , r = t.z;
                return e[0] *= i,
                e[4] *= n,
                e[8] *= r,
                e[1] *= i,
                e[5] *= n,
                e[9] *= r,
                e[2] *= i,
                e[6] *= n,
                e[10] *= r,
                e[3] *= i,
                e[7] *= n,
                e[11] *= r,
                this
            },
            getMaxScaleOnAxis: function() {
                var t = this.elements
                  , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                  , i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
                  , n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, i, n))
            },
            makeTranslation: function(t, e, i) {
                return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
                this
            },
            makeRotationX: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1),
                this
            },
            makeRotationY: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1),
                this
            },
            makeRotationZ: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            },
            makeRotationAxis: function(t, e) {
                var i = Math.cos(e)
                  , n = Math.sin(e)
                  , r = 1 - i
                  , o = t.x
                  , s = t.y
                  , a = t.z
                  , u = r * o
                  , h = r * s;
                return this.set(u * o + i, u * s - n * a, u * a + n * s, 0, u * s + n * a, h * s + i, h * a - n * o, 0, u * a - n * s, h * a + n * o, r * a * a + i, 0, 0, 0, 0, 1),
                this
            },
            makeScale: function(t, e, i) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
                this
            },
            makeShear: function(t, e, i) {
                return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1),
                this
            },
            compose: function(t, e, i) {
                var n = this.elements
                  , r = e._x
                  , o = e._y
                  , s = e._z
                  , a = e._w
                  , u = r + r
                  , h = o + o
                  , c = s + s
                  , l = r * u
                  , f = r * h
                  , d = r * c
                  , y = o * h
                  , p = o * c
                  , v = s * c
                  , m = a * u
                  , g = a * h
                  , x = a * c
                  , _ = i.x
                  , b = i.y
                  , z = i.z;
                return n[0] = (1 - (y + v)) * _,
                n[1] = (f + x) * _,
                n[2] = (d - g) * _,
                n[3] = 0,
                n[4] = (f - x) * b,
                n[5] = (1 - (l + v)) * b,
                n[6] = (p + m) * b,
                n[7] = 0,
                n[8] = (d + g) * z,
                n[9] = (p - m) * z,
                n[10] = (1 - (l + y)) * z,
                n[11] = 0,
                n[12] = t.x,
                n[13] = t.y,
                n[14] = t.z,
                n[15] = 1,
                this
            },
            decompose: (u = new ee,
            h = new ie,
            function(t, e, i) {
                var n = this.elements
                  , r = u.set(n[0], n[1], n[2]).length()
                  , o = u.set(n[4], n[5], n[6]).length()
                  , s = u.set(n[8], n[9], n[10]).length();
                this.determinant() < 0 && (r = -r),
                t.x = n[12],
                t.y = n[13],
                t.z = n[14],
                h.copy(this);
                var a = 1 / r
                  , c = 1 / o
                  , l = 1 / s;
                return h.elements[0] *= a,
                h.elements[1] *= a,
                h.elements[2] *= a,
                h.elements[4] *= c,
                h.elements[5] *= c,
                h.elements[6] *= c,
                h.elements[8] *= l,
                h.elements[9] *= l,
                h.elements[10] *= l,
                e.setFromRotationMatrix(h),
                i.x = r,
                i.y = o,
                i.z = s,
                this
            }
            ),
            makePerspective: function(t, e, i, n, r, o) {
                void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                var s = this.elements
                  , a = 2 * r / (e - t)
                  , u = 2 * r / (i - n)
                  , h = (e + t) / (e - t)
                  , c = (i + n) / (i - n)
                  , l = -(o + r) / (o - r)
                  , f = -2 * o * r / (o - r);
                return s[0] = a,
                s[4] = 0,
                s[8] = h,
                s[12] = 0,
                s[1] = 0,
                s[5] = u,
                s[9] = c,
                s[13] = 0,
                s[2] = 0,
                s[6] = 0,
                s[10] = l,
                s[14] = f,
                s[3] = 0,
                s[7] = 0,
                s[11] = -1,
                s[15] = 0,
                this
            },
            makeOrthographic: function(t, e, i, n, r, o) {
                var s = this.elements
                  , a = 1 / (e - t)
                  , u = 1 / (i - n)
                  , h = 1 / (o - r)
                  , c = (e + t) * a
                  , l = (i + n) * u
                  , f = (o + r) * h;
                return s[0] = 2 * a,
                s[4] = 0,
                s[8] = 0,
                s[12] = -c,
                s[1] = 0,
                s[5] = 2 * u,
                s[9] = 0,
                s[13] = -l,
                s[2] = 0,
                s[6] = 0,
                s[10] = -2 * h,
                s[14] = -f,
                s[3] = 0,
                s[7] = 0,
                s[11] = 0,
                s[15] = 1,
                this
            },
            equals: function(t) {
                for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                    if (e[n] !== i[n])
                        return !1;
                return !0
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var i = 0; i < 16; i++)
                    this.elements[i] = t[i + e];
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []),
                void 0 === e && (e = 0);
                var i = this.elements;
                return t[e] = i[0],
                t[e + 1] = i[1],
                t[e + 2] = i[2],
                t[e + 3] = i[3],
                t[e + 4] = i[4],
                t[e + 5] = i[5],
                t[e + 6] = i[6],
                t[e + 7] = i[7],
                t[e + 8] = i[8],
                t[e + 9] = i[9],
                t[e + 10] = i[10],
                t[e + 11] = i[11],
                t[e + 12] = i[12],
                t[e + 13] = i[13],
                t[e + 14] = i[14],
                t[e + 15] = i[15],
                t
            }
        }),
        ne.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
        ne.DefaultOrder = "XYZ",
        Object.defineProperties(ne.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t,
                    this._onChangeCallback()
                }
            },
            order: {
                get: function() {
                    return this._order
                },
                set: function(t) {
                    this._order = t,
                    this._onChangeCallback()
                }
            }
        }),
        Object.assign(ne.prototype, {
            isEuler: !0,
            set: function(t, e, i, n) {
                return this._x = t,
                this._y = e,
                this._z = i,
                this._order = n || this._order,
                this._onChangeCallback(),
                this
            },
            clone: function() {
                return new this.constructor(this._x,this._y,this._z,this._order)
            },
            copy: function(t) {
                return this._x = t._x,
                this._y = t._y,
                this._z = t._z,
                this._order = t._order,
                this._onChangeCallback(),
                this
            },
            setFromRotationMatrix: function(t, e, i) {
                var n = $t.clamp
                  , r = t.elements
                  , o = r[0]
                  , s = r[4]
                  , a = r[8]
                  , u = r[1]
                  , h = r[5]
                  , c = r[9]
                  , l = r[2]
                  , f = r[6]
                  , d = r[10];
                return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(a, -1, 1)),
                Math.abs(a) < .99999 ? (this._x = Math.atan2(-c, d),
                this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(f, h),
                this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(c, -1, 1)),
                Math.abs(c) < .99999 ? (this._y = Math.atan2(a, d),
                this._z = Math.atan2(u, h)) : (this._y = Math.atan2(-l, o),
                this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(f, -1, 1)),
                Math.abs(f) < .99999 ? (this._y = Math.atan2(-l, d),
                this._z = Math.atan2(-s, h)) : (this._y = 0,
                this._z = Math.atan2(u, o))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)),
                Math.abs(l) < .99999 ? (this._x = Math.atan2(f, d),
                this._z = Math.atan2(u, o)) : (this._x = 0,
                this._z = Math.atan2(-s, h))) : "YZX" === e ? (this._z = Math.asin(n(u, -1, 1)),
                Math.abs(u) < .99999 ? (this._x = Math.atan2(-c, h),
                this._y = Math.atan2(-l, o)) : (this._x = 0,
                this._y = Math.atan2(a, d))) : "XZY" === e ? (this._z = Math.asin(-n(s, -1, 1)),
                Math.abs(s) < .99999 ? (this._x = Math.atan2(f, h),
                this._y = Math.atan2(a, o)) : (this._x = Math.atan2(-c, d),
                this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
                this._order = e,
                !1 !== i && this._onChangeCallback(),
                this
            },
            setFromQuaternion: function() {
                var t = new ie;
                return function(e, i, n) {
                    return t.makeRotationFromQuaternion(e),
                    this.setFromRotationMatrix(t, i, n)
                }
            }(),
            setFromVector3: function(t, e) {
                return this.set(t.x, t.y, t.z, e || this._order)
            },
            reorder: (p = new te,
            function(t) {
                return p.setFromEuler(this),
                this.setFromQuaternion(p, t)
            }
            ),
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
            },
            fromArray: function(t) {
                return this._x = t[0],
                this._y = t[1],
                this._z = t[2],
                void 0 !== t[3] && (this._order = t[3]),
                this._onChangeCallback(),
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._order,
                t
            },
            toVector3: function(t) {
                return t ? t.set(this._x, this._y, this._z) : new ee(this._x,this._y,this._z)
            },
            _onChange: function(t) {
                return this._onChangeCallback = t,
                this
            },
            _onChangeCallback: function() {}
        });
        var re = {
            toScreenPos: function() {
                var t = new ee;
                return function(e, i, n) {
                    return t.copy(e),
                    t.project(i),
                    t.x = Math.round((t.x + 1) * n.width / 2),
                    t.y = Math.round((1 - t.y) * n.height / 2),
                    t.z = 0,
                    t
                }
            }(),
            toSpacePos: function() {
                var t, e = new ee, i = new ee;
                return function(n, r, o) {
                    return e.set(n.x / o.width * 2 - 1, -n.y / o.height * 2 + 1, .5),
                    e.unproject(r),
                    i.copy(e.sub(r.position).normalize()),
                    t = -r.position.z / i.z,
                    e.copy(r.position),
                    e.add(i.multiplyScalar(t)),
                    e
                }
            }()
        }
          , oe = {
            initValue: function(t, e) {
                return null != t && null != t ? t : e
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            destroyArray: function(t) {
                t.length = 0
            },
            destroyObject: function(t) {
                for (var e in t)
                    delete t[e]
            },
            isUndefined: function() {
                for (var t in arguments) {
                    var e = arguments[t];
                    if (void 0 !== e)
                        return !1
                }
                return !0
            },
            setVectorByObj: function(t, e) {
                void 0 !== e.x && (t.position.x = e.x),
                void 0 !== e.y && (t.position.y = e.y),
                void 0 !== e.z && (t.position.z = e.z),
                void 0 !== e.vx && (t.velocity.x = e.vx),
                void 0 !== e.vy && (t.velocity.y = e.vy),
                void 0 !== e.vz && (t.velocity.z = e.vz),
                void 0 !== e.ax && (t.acceleration.x = e.ax),
                void 0 !== e.ay && (t.acceleration.y = e.ay),
                void 0 !== e.az && (t.acceleration.z = e.az),
                void 0 !== e.p && t.position.copy(e.p),
                void 0 !== e.v && t.velocity.copy(e.v),
                void 0 !== e.a && t.acceleration.copy(e.a),
                void 0 !== e.position && t.position.copy(e.position),
                void 0 !== e.velocity && t.velocity.copy(e.velocity),
                void 0 !== e.accelerate && t.acceleration.copy(e.accelerate)
            },
            setPrototypeByObj: function(t, e, i) {
                for (var n in e)
                    t.hasOwnProperty(n) && (i ? i.indexOf(n) < 0 && (t[n] = this._getValue(e[n])) : t[n] = this._getValue(e[n]));
                return t
            },
            _getValue: function(t) {
                return "Span" === t.constructor.type ? t.getValue() : t
            }
        }
          , se = i(22)
          , ae = i.n(se).a;
        function ue(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        var he = function(t, e) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ue(Object(i), !0).forEach((function(e) {
                        Ht()(t, e, i[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ue(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }
                    ))
                }
                return t
            }({}, t, {}, e)
        }
          , ce = i(3)
          , le = i.n(ce)
          , fe = i(2)
          , de = i.n(fe)
          , ye = i(4)
          , pe = i.n(ye)
          , ve = {
            randomAToB: function(t, e, i) {
                return i ? (Math.random() * (e - t) >> 0) + t : t + Math.random() * (e - t)
            },
            randomFloating: function(t, e, i) {
                return this.randomAToB(t - e, t + e, i)
            },
            randomZone: function(t) {},
            degreeTransform: function(t) {
                return t * rt / 180
            },
            toColor16: function(t) {
                return "#" + t.toString(16)
            },
            randomColor: function() {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
            },
            lerp: function(t, e, i) {
                return e + (t - e) * i
            },
            getNormal: function(t, e) {
                return 0 == t.x && 0 == t.y ? 0 == t.z ? e.set(1, 0, 1) : e.set(1, 1, -t.y / t.z) : 0 == t.x ? e.set(1, 0, 1) : e.set(-t.y / t.x, 1, 1),
                e.normalize()
            },
            axisRotate: function(t, e, i, n) {
                var r = Math.cos(n)
                  , o = Math.sin(n)
                  , s = i.dot(e) * (1 - r);
                t.copy(i),
                t.cross(e).scalar(o),
                t.addValue(e.x * r, e.y * r, e.z * r),
                t.addValue(i.x * s, i.y * s, i.z * s)
            }
        }
          , me = "ArraySpan"
          , ge = "ColorSpan"
          , xe = "Box"
          , _e = "Polar3D"
          , be = "Span"
          , ze = function() {
            function t(e, i, n) {
                m()(this, t),
                this._isArray = !1,
                this.type = be,
                oe.isArray(e) ? (this._isArray = !0,
                this.a = e) : (this.a = oe.initValue(e, 1),
                this.b = oe.initValue(i, this.a),
                this._center = oe.initValue(n, !1))
            }
            return x()(t, [{
                key: "getValue",
                value: function(t) {
                    return this._isArray ? this.a[this.a.length * Math.random() >> 0] : this._center ? ve.randomFloating(this.a, this.b, t) : ve.randomAToB(this.a, this.b, t)
                }
            }]),
            t
        }()
          , we = function(t, e, i) {
            return t instanceof ze ? t : void 0 === e ? new ze(t) : void 0 === i ? new ze(t,e) : new ze(t,e,i)
        }
          , ke = i(10)
          , Me = i.n(ke)
          , Ee = function(t) {
            function e(t) {
                var i;
                return m()(this, e),
                (i = le()(this, de()(e).call(this))).type = me,
                i.items = Array.isArray(t) ? t : [t],
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "getValue",
                value: function() {
                    return Me()(this.items)
                }
            }]),
            e
        }(ze)
          , Oe = function(t) {
            return t ? t instanceof Ee ? t : new Ee(t) : null
        }
          , Pe = function(t) {
            function e(t) {
                var i;
                return m()(this, e),
                (i = le()(this, de()(e).call(this))).type = ge,
                i.shouldRandomize = "random" === t,
                i.colors = Array.isArray(t) ? t : [t],
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "getValue",
                value: function() {
                    return this.shouldRandomize ? ve.randomColor() : Me()(this.colors)
                }
            }]),
            e
        }(ze)
          , Se = function(t) {
            return t ? t instanceof Pe ? t : new Pe(t) : null
        }
          , Te = function() {
            function t(e, i, n, r, o, s) {
                m()(this, t),
                this.type = xe,
                this.x = e,
                this.y = i,
                this.z = n,
                this.width = r,
                this.height = o,
                this.depth = s,
                this.bottom = this.y + this.height,
                this.right = this.x + this.width,
                this.right = this.x + this.width
            }
            return x()(t, [{
                key: "contains",
                value: function(t, e, i) {
                    return t <= this.right && t >= this.x && e <= this.bottom && e >= this.y && i <= this.depth && i >= this.z
                }
            }]),
            t
        }()
          , Ae = "EULER"
          , je = function(t, e, i) {
            t.sleep || (t.old.position.copy(t.position),
            t.old.velocity.copy(t.velocity),
            t.acceleration.scalar(1 / t.mass),
            t.velocity.add(t.acceleration.scalar(e)),
            t.position.add(t.old.velocity.scalar(e)),
            i && t.velocity.scalar(i),
            t.acceleration.clear())
        }
          , Ce = function(t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ae;
            switch (n) {
            case Ae:
                je(t, e, i);
                break;
            default:
                je(t, e, i)
            }
        }
          , Re = function(t) {
            function e() {
                return m()(this, e),
                le()(this, de()(e).apply(this, arguments))
            }
            return pe()(e, t),
            x()(e, [{
                key: "clear",
                value: function() {
                    return this.x = 0,
                    this.y = 0,
                    this.z = 0,
                    this
                }
            }, {
                key: "scalar",
                value: function(t) {
                    return this.x *= t,
                    this.y *= t,
                    this.z *= t,
                    this
                }
            }, {
                key: "addValue",
                value: function(t, e, i) {
                    return this.x += t,
                    this.y += e,
                    this.z += i,
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    return "x:" + this.x + "y:" + this.y + "z:" + this.z
                }
            }, {
                key: "eulerFromDir",
                value: function(t) {
                    return (new ne).setFromVector3(t)
                }
            }]),
            e
        }(ee)
          , Be = function() {
            function t(e, i, n) {
                m()(this, t),
                this.type = _e,
                this.radius = e || 1,
                this.phi = n || 0,
                this.theta = i || 0
            }
            return x()(t, [{
                key: "set",
                value: function(t, e, i) {
                    return this.radius = t || 1,
                    this.phi = i || 0,
                    this.theta = e || 0,
                    this
                }
            }, {
                key: "setRadius",
                value: function(t) {
                    return this.radius = t,
                    this
                }
            }, {
                key: "setPhi",
                value: function(t) {
                    return this.phi = t,
                    this
                }
            }, {
                key: "setTheta",
                value: function(t) {
                    return this.theta = t,
                    this
                }
            }, {
                key: "copy",
                value: function(t) {
                    return this.radius = t.radius,
                    this.phi = t.phi,
                    this.theta = t.theta,
                    this
                }
            }, {
                key: "toVector3D",
                value: function() {
                    return new Re(this.getX(),this.getY(),this.getZ())
                }
            }, {
                key: "getX",
                value: function() {
                    return this.radius * Math.sin(this.theta) * Math.cos(this.phi)
                }
            }, {
                key: "getY",
                value: function() {
                    return -this.radius * Math.sin(this.theta) * Math.sin(this.phi)
                }
            }, {
                key: "getZ",
                value: function() {
                    return this.radius * Math.cos(this.theta)
                }
            }, {
                key: "normalize",
                value: function() {
                    return this.radius = 1,
                    this
                }
            }, {
                key: "equals",
                value: function(t) {
                    return t.radius === this.radius && t.phi === this.phi && t.theta === this.theta
                }
            }, {
                key: "clear",
                value: function() {
                    return this.radius = 0,
                    this.phi = 0,
                    this.theta = 0,
                    this
                }
            }, {
                key: "clone",
                value: function() {
                    return new t(this.radius,this.phi,this.theta)
                }
            }]),
            t
        }()
          , Ie = "Particle"
          , Ve = "Pool"
          , De = "System"
          , Fe = function() {
            function t(e) {
                m()(this, t),
                this.id = "particle-".concat(ae()),
                this.type = Ie,
                this.life = jt,
                this.age = Ct,
                this.energy = Rt,
                this.dead = Bt,
                this.sleep = It,
                this.body = Vt,
                this.parent = Dt,
                this.mass = Ft,
                this.radius = Zt,
                this.alpha = Nt,
                this.scale = Lt,
                this.useColor = Ut,
                this.useAlpha = qt,
                this.easing = Yt,
                this.position = new Re,
                this.velocity = new Re,
                this.acceleration = new Re,
                this.old = {},
                this.old.position = this.position.clone(),
                this.old.velocity = this.velocity.clone(),
                this.old.acceleration = this.acceleration.clone(),
                this.behaviours = [],
                this.transform = {},
                this.color = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                this.rotation = new Re,
                oe.setPrototypeByObj(this, e)
            }
            return x()(t, [{
                key: "getDirection",
                value: function() {
                    return Math.atan2(this.velocity.x, -this.velocity.y) * (180 / rt)
                }
            }, {
                key: "reset",
                value: function() {
                    return this.life = jt,
                    this.age = Ct,
                    this.energy = Rt,
                    this.dead = Bt,
                    this.sleep = It,
                    this.body = Vt,
                    this.parent = Dt,
                    this.mass = Ft,
                    this.radius = Zt,
                    this.alpha = Nt,
                    this.scale = Lt,
                    this.useColor = Ut,
                    this.useAlpha = qt,
                    this.easing = Yt,
                    this.position.set(0, 0, 0),
                    this.velocity.set(0, 0, 0),
                    this.acceleration.set(0, 0, 0),
                    this.old.position.set(0, 0, 0),
                    this.old.velocity.set(0, 0, 0),
                    this.old.acceleration.set(0, 0, 0),
                    this.color.r = 0,
                    this.color.g = 0,
                    this.color.b = 0,
                    this.rotation.clear(),
                    oe.destroyObject(this.transform),
                    this.removeAllBehaviours(),
                    this
                }
            }, {
                key: "update",
                value: function(t, e) {
                    if (!this.sleep) {
                        this.age += t;
                        for (var i = this.behaviours.length; i--; ) {
                            var n = this.behaviours[i];
                            n && n.applyBehaviour(this, t, e)
                        }
                    }
                    if (this.age >= this.life)
                        this.destroy();
                    else {
                        var r = this.easing(this.age / this.life);
                        this.energy = Math.max(1 - r, 0)
                    }
                }
            }, {
                key: "addBehaviour",
                value: function(t) {
                    this.behaviours.push(t),
                    t.initialize(this)
                }
            }, {
                key: "addBehaviours",
                value: function(t) {
                    for (var e = t.length; e--; )
                        this.addBehaviour(t[e])
                }
            }, {
                key: "removeBehaviour",
                value: function(t) {
                    var e = this.behaviours.indexOf(t);
                    e > -1 && this.behaviours.splice(e, 1)
                }
            }, {
                key: "removeAllBehaviours",
                value: function() {
                    oe.destroyArray(this.behaviours)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeAllBehaviours(),
                    this.energy = 0,
                    this.dead = !0,
                    this.parent = null
                }
            }]),
            t
        }()
          , Ze = function() {
            function t() {
                m()(this, t),
                this.type = Ve,
                this.cID = 0,
                this.list = {}
            }
            return x()(t, [{
                key: "create",
                value: function(t) {
                    if (!this.canCreateNewObject(t))
                        throw new Error("The pool is unable to create or clone the object supplied");
                    return this.cID++,
                    this.canInstantiateObject(t) ? new t : this.canCloneObject(t) ? t.clone() : void 0
                }
            }, {
                key: "canInstantiateObject",
                value: function(t) {
                    return "function" == typeof t
                }
            }, {
                key: "canCloneObject",
                value: function(t) {
                    return t.clone && "function" == typeof t.clone
                }
            }, {
                key: "canCreateNewObject",
                value: function(t) {
                    return !(!this.canInstantiateObject(t) && !this.canCloneObject(t))
                }
            }, {
                key: "getCount",
                value: function() {
                    var t = 0;
                    for (var e in this.list)
                        t += this.list[e].length;
                    return t++
                }
            }, {
                key: "get",
                value: function(t) {
                    var e, i = t.__puid || Wt.id(t);
                    return (e = this.list[i] && this.list[i].length > 0 ? this.list[i].pop() : this.create(t)).__puid = t.__puid || i,
                    e
                }
            }, {
                key: "expire",
                value: function(t) {
                    return this._getList(t.__puid).push(t)
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var t in this.list)
                        this.list[t].length = 0,
                        delete this.list[t]
                }
            }, {
                key: "_getList",
                value: function(t) {
                    return t = t || "default",
                    this.list[t] || (this.list[t] = []),
                    this.list[t]
                }
            }]),
            t
        }()
          , Ne = function() {
            function t() {
                m()(this, t),
                this.listeners = null
            }
            return x()(t, [{
                key: "addEventListener",
                value: function(t, e) {
                    return this.listeners ? this.removeEventListener(t, e) : this.listeners = {},
                    this.listeners[t] || (this.listeners[t] = []),
                    this.listeners[t].push(e),
                    e
                }
            }, {
                key: "removeEventListener",
                value: function(t, e) {
                    if (this.listeners && this.listeners[t])
                        for (var i = this.listeners[t], n = 0, r = i.length; n < r; n++)
                            if (i[n] == e) {
                                1 == r ? delete this.listeners[t] : i.splice(n, 1);
                                break
                            }
                }
            }, {
                key: "removeAllEventListeners",
                value: function(t) {
                    t ? this.listeners && delete this.listeners[t] : this.listeners = null
                }
            }, {
                key: "dispatchEvent",
                value: function(t, e) {
                    var i = !1
                      , n = this.listeners;
                    if (t && n) {
                        var r = n[t];
                        if (!r)
                            return i;
                        for (var o, s = (r = r.slice()).length; s--; )
                            o = r[s],
                            i = i || o(e)
                    }
                    return !!i
                }
            }, {
                key: "hasEventListener",
                value: function(t) {
                    var e = this.listeners;
                    return !(!e || !e[t])
                }
            }, {
                key: "listeners",
                set: function(t) {
                    this._listeners = t
                },
                get: function() {
                    return this._listeners
                }
            }]),
            t
        }()
          , Le = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C
                  , i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                m()(this, t),
                this.type = e,
                this.isEnabled = i
            }
            return x()(t, [{
                key: "init",
                value: function(t, e) {
                    this.isEnabled && (e ? (this.initialize(e),
                    e.hasBeenInitialized = !0) : (this.initialize(t),
                    t.hasBeenInitialized = !0))
                }
            }, {
                key: "reset",
                value: function() {}
            }, {
                key: "initialize",
                value: function(t) {}
            }], [{
                key: "requiresWebGlApi",
                value: function() {
                    return !1
                }
            }, {
                key: "fromJSON",
                value: function(t) {}
            }]),
            t
        }()
          , Ue = function(t) {
            function e(t, i, n) {
                var r, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (r = le()(this, de()(e).call(this, R, o))).body = Oe(t),
                r.w = i,
                r.h = n || i,
                r
            }
            return pe()(e, t),
            x()(e, [{
                key: "initialize",
                value: function(t) {
                    var e = this.body.getValue();
                    this.w ? t.body = {
                        width: this.w,
                        height: this.h,
                        body: e
                    } : t.body = e
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.body
                      , n = t.width
                      , r = t.height
                      , o = t.isEnabled;
                    return new e(i,n,r,void 0 === o || o)
                }
            }]),
            e
        }(Le);
        function qe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        var Ye = {
            AdditiveBlending: 2,
            CustomBlending: 5,
            MultiplyBlending: 4,
            NoBlending: 0,
            NormalBlending: 1,
            SubtractiveBlending: 3
        }
          , Xe = {
            color: 16711680,
            blending: 2,
            fog: !0
        }
          , Je = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? qe(Object(i), !0).forEach((function(e) {
                    Ht()(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : qe(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }({}, Xe, {
            blending: "AdditiveBlending"
        })
          , Qe = 1
          , Ge = 1;
        function He(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function Ke(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? He(Object(i), !0).forEach((function(e) {
                    Ht()(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : He(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        var We, $e, ti = function(t) {
            function e(t, i) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xe, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                m()(this, e),
                n = le()(this, de()(e).call(this, B, o));
                var s = t.Sprite
                  , a = t.SpriteMaterial
                  , u = t.TextureLoader;
                return n.materialProperties = he(Xe, r),
                (new u).load(i, (function(t) {
                    n.texture = t,
                    n.material = new a(Ke({}, {
                        map: t
                    }, {}, n.materialProperties)),
                    n.sprite = new s(n.material)
                }
                ), void 0, (function(t) {
                    throw new Error(t)
                }
                )),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "initialize",
                value: function(t) {
                    t.body = this.sprite
                }
            }], [{
                key: "fromJSON",
                value: function(t, i) {
                    var n, r, o = t.texture, s = t.materialProperties, a = void 0 === s ? Je : s, u = t.isEnabled, h = void 0 === u || u;
                    return new e(i,o,he(Je, (r = (n = a).blending,
                    Ke({}, n, {
                        blending: r ? Ye[r] : Ye[Je.blending]
                    }))),h)
                }
            }]),
            e
        }(Le), ei = new ne, ii = {
            particleEuler: null,
            initialize: function(t, e, i) {
                for (var n = i.length; n--; )
                    i[n].init(t, e);
                t.bindEmitter && this.bindEmitter(t, e)
            },
            bindEmitter: function(t, e) {
                var i = t.rotation
                  , n = i.x
                  , r = i.y
                  , o = i.z;
                e.position.add(t.position),
                e.velocity.add(t.velocity),
                e.acceleration.add(t.acceleration),
                e.velocity.applyEuler(ei.set(n, r, o))
            }
        }, ni = function(t) {
            function e(t, i, n) {
                var r, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (r = le()(this, de()(e).call(this, V, o))).lifePan = we(t, i, n),
                r
            }
            return pe()(e, t),
            x()(e, [{
                key: "initialize",
                value: function(t) {
                    this.lifePan.a == 1 / 0 || "infi" == this.lifePan.a ? t.life = 1 / 0 : t.life = this.lifePan.getValue()
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.min
                      , n = t.max
                      , r = t.center
                      , o = void 0 !== r && r
                      , s = t.isEnabled;
                    return new e(i,n,o,void 0 === s || s)
                }
            }]),
            e
        }(Le), ri = function(t) {
            function e(t, i) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (n = le()(this, de()(e).call(this, D, o))).massPan = we(t, i, r),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "initialize",
                value: function(t) {
                    t.mass = this.massPan.getValue()
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.min
                      , n = t.max
                      , r = t.center
                      , o = void 0 !== r && r
                      , s = t.isEnabled;
                    return new e(i,n,o,void 0 === s || s)
                }
            }]),
            e
        }(Le), oi = i(11), si = i.n(oi), ai = i(12), ui = i.n(ai), hi = i(23), ci = i.n(hi), li = i(13), fi = i.n(li), di = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X;
                m()(this, t),
                this.type = e,
                this.vector = new Re(0,0,0),
                this.random = 0,
                this.crossType = "dead",
                this.log = !0,
                this.supportsCrossing = !0
            }
            return x()(t, [{
                key: "getPosition",
                value: function() {
                    return null
                }
            }, {
                key: "crossing",
                value: function(t) {
                    if (!this.supportsCrossing)
                        return console.warn("".concat(this.constructor.name, " does not support the crossing method"));
                    switch (this.crossType) {
                    case "bound":
                        this._bound(t);
                        break;
                    case "cross":
                        this._cross(t);
                        break;
                    case "dead":
                        this._dead(t)
                    }
                }
            }, {
                key: "isBoxZone",
                value: function() {
                    return !1
                }
            }, {
                key: "isLineZone",
                value: function() {
                    return !1
                }
            }, {
                key: "isMeshZone",
                value: function() {
                    return !1
                }
            }, {
                key: "isPointZone",
                value: function() {
                    return !1
                }
            }, {
                key: "isScreenZone",
                value: function() {
                    return !1
                }
            }, {
                key: "isSphereZone",
                value: function() {
                    return !1
                }
            }, {
                key: "_dead",
                value: function(t) {}
            }, {
                key: "_bound",
                value: function(t) {}
            }, {
                key: "_cross",
                value: function(t) {}
            }]),
            t
        }(), yi = function(t) {
            function e(t, i, n, r, o, s) {
                var a, u, h, c, l, f;
                return m()(this, e),
                a = le()(this, de()(e).call(this, J)),
                oe.isUndefined(i, n, r, o, s) ? (u = h = c = 0,
                l = f = r = t || 100) : oe.isUndefined(r, o, s) ? (u = h = c = 0,
                l = t,
                f = i,
                r = n) : (u = t,
                h = i,
                c = n,
                l = r,
                f = o,
                r = s),
                a.x = u,
                a.y = h,
                a.z = c,
                a.width = l,
                a.height = f,
                a.depth = r,
                a.friction = .85,
                a.max = 6,
                a
            }
            return pe()(e, t),
            x()(e, [{
                key: "isBoxZone",
                value: function() {
                    return !0
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this.vector.x = this.x + ve.randomAToB(-.5, .5) * this.width,
                    this.vector.y = this.y + ve.randomAToB(-.5, .5) * this.height,
                    this.vector.z = this.z + ve.randomAToB(-.5, .5) * this.depth,
                    this.vector
                }
            }, {
                key: "_dead",
                value: function(t) {
                    t.position.x + t.radius < this.x - this.width / 2 ? t.dead = !0 : t.position.x - t.radius > this.x + this.width / 2 && (t.dead = !0),
                    t.position.y + t.radius < this.y - this.height / 2 ? t.dead = !0 : t.position.y - t.radius > this.y + this.height / 2 && (t.dead = !0),
                    t.position.z + t.radius < this.z - this.depth / 2 ? t.dead = !0 : t.position.z - t.radius > this.z + this.depth / 2 && (t.dead = !0)
                }
            }, {
                key: "_bound",
                value: function(t) {
                    t.position.x - t.radius < this.x - this.width / 2 ? (t.position.x = this.x - this.width / 2 + t.radius,
                    t.velocity.x *= -this.friction,
                    this._static(t, "x")) : t.position.x + t.radius > this.x + this.width / 2 && (t.position.x = this.x + this.width / 2 - t.radius,
                    t.velocity.x *= -this.friction,
                    this._static(t, "x")),
                    t.position.y - t.radius < this.y - this.height / 2 ? (t.position.y = this.y - this.height / 2 + t.radius,
                    t.velocity.y *= -this.friction,
                    this._static(t, "y")) : t.position.y + t.radius > this.y + this.height / 2 && (t.position.y = this.y + this.height / 2 - t.radius,
                    t.velocity.y *= -this.friction,
                    this._static(t, "y")),
                    t.position.z - t.radius < this.z - this.depth / 2 ? (t.position.z = this.z - this.depth / 2 + t.radius,
                    t.velocity.z *= -this.friction,
                    this._static(t, "z")) : t.position.z + t.radius > this.z + this.depth / 2 && (t.position.z = this.z + this.depth / 2 - t.radius,
                    t.velocity.z *= -this.friction,
                    this._static(t, "z"))
                }
            }, {
                key: "_static",
                value: function(t, e) {
                    t.velocity[e] * t.acceleration[e] > 0 || Math.abs(t.velocity[e]) < .0167 * Math.abs(t.acceleration[e]) * this.max && (t.velocity[e] = 0,
                    t.acceleration[e] = 0)
                }
            }, {
                key: "_cross",
                value: function(t) {
                    t.position.x + t.radius < this.x - this.width / 2 && t.velocity.x <= 0 ? t.position.x = this.x + this.width / 2 + t.radius : t.position.x - t.radius > this.x + this.width / 2 && t.velocity.x >= 0 && (t.position.x = this.x - this.width / 2 - t.radius),
                    t.position.y + t.radius < this.y - this.height / 2 && t.velocity.y <= 0 ? t.position.y = this.y + this.height / 2 + t.radius : t.position.y - t.radius > this.y + this.height / 2 && t.velocity.y >= 0 && (t.position.y = this.y - this.height / 2 - t.radius),
                    t.position.z + t.radius < this.z - this.depth / 2 && t.velocity.z <= 0 ? t.position.z = this.z + this.depth / 2 + t.radius : t.position.z - t.radius > this.z + this.depth / 2 && t.velocity.z >= 0 && (t.position.z = this.z - this.depth / 2 - t.radius)
                }
            }]),
            e
        }(di), pi = function(t) {
            function e(t, i, n, r, o, s) {
                var a;
                return m()(this, e),
                a = le()(this, de()(e).call(this, Q)),
                t instanceof Re ? (a.x1 = t.x,
                a.y1 = t.y,
                a.z1 = t.z,
                a.x2 = r.x,
                a.y2 = r.y,
                a.z2 = r.z) : (a.x1 = t,
                a.y1 = i,
                a.z1 = n,
                a.x2 = r,
                a.y2 = o,
                a.z2 = s),
                a.supportsCrossing = !1,
                a
            }
            return pe()(e, t),
            x()(e, [{
                key: "isLineZone",
                value: function() {
                    return !0
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this.random = Math.random(),
                    this.vector.x = this.x1 + this.random * (this.x2 - this.x1),
                    this.vector.y = this.y1 + this.random * (this.y2 - this.y1),
                    this.vector.z = this.z1 + this.random * (this.z2 - this.z1),
                    this.vector
                }
            }]),
            e
        }(di), vi = function(t) {
            function e(t) {
                var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = arguments.length > 2 ? arguments[2] : void 0;
                if (m()(this, e),
                (i = le()(this, de()(e).call(this, G))).geometry = null,
                i.scale = n,
                i.supportsCrossing = !1,
                t.type && "Geometry" === t.type && (i.geometry = t),
                t.geometry && (i.geometry = t.geometry),
                !i.geometry)
                    throw new Error("MeshZone unable to set geometry from the supplied bounds");
                return i.geometry.isBufferGeometry && (i.geometry = (new r).fromBufferGeometry(i.geometry)),
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "isMeshZone",
                value: function() {
                    return !0
                }
            }, {
                key: "getPosition",
                value: function() {
                    var t = this.geometry.vertices
                      , e = t[t.length * Math.random() >> 0];
                    return this.vector.x = e.x * this.scale,
                    this.vector.y = e.y * this.scale,
                    this.vector.z = e.z * this.scale,
                    this.vector
                }
            }]),
            e
        }(di), mi = function(t) {
            function e(t, i, n) {
                var r, o;
                return m()(this, e),
                r = le()(this, de()(e).call(this, H)),
                oe.isUndefined(t, i, n) ? o = 0 : (o = t,
                i,
                n),
                r.x = o,
                r.y = o,
                r.z = o,
                r.supportsCrossing = !1,
                r
            }
            return pe()(e, t),
            x()(e, [{
                key: "isPointZone",
                value: function() {
                    return !0
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this.vector.x = this.x,
                    this.vector.y = this.y,
                    this.vector.z = this.z,
                    this.vector
                }
            }]),
            e
        }(di), gi = function(t) {
            function e(t, i, n, r) {
                var o;
                m()(this, e),
                (o = le()(this, de()(e).call(this, K))).camera = t,
                o.renderer = i,
                o.dis = n || 20,
                r = r || "1234";
                for (var s = 1; s < 5; s++)
                    o["d" + s] = r.indexOf(s + "") >= 0;
                return o
            }
            return pe()(e, t),
            x()(e, [{
                key: "isScreenZone",
                value: function() {
                    return !0
                }
            }, {
                key: "_dead",
                value: function(t) {
                    var e = re.toScreenPos(t.position, this.camera, this.renderer.domElement)
                      , i = this.renderer.domElement;
                    e.y + t.radius < -this.dis && this.d1 ? t.dead = !0 : e.y - t.radius > i.height + this.dis && this.d3 && (t.dead = !0),
                    e.x + t.radius < -this.dis && this.d4 ? t.dead = !0 : e.x - t.radius > i.width + this.dis && this.d2 && (t.dead = !0)
                }
            }, {
                key: "_bound",
                value: function(t) {
                    var e = re.toScreenPos(t.position, this.camera, this.renderer.domElement)
                      , i = this.renderer.domElement;
                    e.y + t.radius < -this.dis ? t.velocity.y *= -1 : e.y - t.radius > i.height + this.dis && (t.velocity.y *= -1),
                    e.x + t.radius < -this.dis ? t.velocity.y *= -1 : e.x - t.radius > i.width + this.dis && (t.velocity.y *= -1)
                }
            }]),
            e
        }(di);
        gi.prototype.getPosition = ($e = new Re,
        function() {
            return We = this.renderer.domElement,
            $e.x = Math.random() * We.width,
            $e.y = Math.random() * We.height,
            this.vector.copy(re.toSpacePos($e, this.camera, We)),
            this.vector
        }
        ),
        gi.prototype._cross = function() {
            var t = new Re;
            return function(e) {
                var i = re.toScreenPos(e.position, this.camera, this.renderer.domElement)
                  , n = this.renderer.domElement;
                i.y + e.radius < -this.dis ? (t.x = i.x,
                t.y = n.height + this.dis + e.radius,
                e.position.y = re.toSpacePos(t, this.camera, n).y) : i.y - e.radius > n.height + this.dis && (t.x = i.x,
                t.y = -this.dis - e.radius,
                e.position.y = re.toSpacePos(t, this.camera, n).y),
                i.x + e.radius < -this.dis ? (t.y = i.y,
                t.x = n.width + this.dis + e.radius,
                e.position.x = re.toSpacePos(t, this.camera, n).x) : i.x - e.radius > n.width + this.dis && (t.y = i.y,
                t.x = -this.dis - e.radius,
                e.position.x = re.toSpacePos(t, this.camera, n).x)
            }
        }();
        var xi, _i, bi, zi, wi, ki, Mi = function(t) {
            function e(t, i, n, r) {
                var o, s, a;
                return m()(this, e),
                o = le()(this, de()(e).call(this, W)),
                oe.isUndefined(i, n, r) ? (s = 0,
                a = t || 100) : (s = t,
                i,
                n,
                a = r),
                o.x = s,
                o.y = s,
                o.z = s,
                o.radius = a,
                o.the = o.phi = 0,
                o
            }
            return pe()(e, t),
            x()(e, [{
                key: "isSphereZone",
                value: function() {
                    return !0
                }
            }, {
                key: "_dead",
                value: function(t) {
                    t.position.distanceTo(this) - t.radius > this.radius && (t.dead = !0)
                }
            }, {
                key: "_cross",
                value: function() {
                    console.warn("".concat(this.constructor.name, " does not support the _cross method"))
                }
            }]),
            e
        }(di);
        Mi.prototype.getPosition = function() {
            return this.random = Math.random(),
            bi = this.random * this.radius,
            xi = rt * Math.random(),
            _i = 2 * rt * Math.random(),
            this.vector.x = this.x + bi * Math.sin(xi) * Math.cos(_i),
            this.vector.y = this.y + bi * Math.sin(_i) * Math.sin(xi),
            this.vector.z = this.z + bi * Math.cos(xi),
            this.vector
        }
        ,
        Mi.prototype._bound = (wi = new Re,
        ki = new Re,
        function(t) {
            t.position.distanceTo(this) + t.radius >= this.radius && (wi.copy(t.position).sub(this).normalize(),
            ki.copy(t.velocity),
            zi = 2 * ki.dot(wi),
            t.velocity.sub(wi.scalar(zi)))
        }
        );
        var Ei, Oi = function(t) {
            function e() {
                var t;
                return m()(this, e),
                (t = le()(this, de()(e).call(this, F))).reset.apply(fi()(t), arguments),
                t
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function() {
                    this.zones ? this.zones.length = 0 : this.zones = [],
                    this.zones = this.zones.concat(Array.prototype.slice.call(arguments))
                }
            }, {
                key: "addZone",
                value: function() {
                    this.zones = this.zones.concat(Array.prototype.slice.call(arguments))
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.zoneType
                      , r = ci()(t, ["zoneType"]);
                    if (!Qt.includes(i))
                        throw new Error("The zone type ".concat(i, " is invalid or not yet supported"));
                    return new e(si()(n[i], ui()(Object.values(r))))
                }
            }]),
            e
        }(Le);
        Oi.prototype.initialize = function(t) {
            (Ei = this.zones[Math.random() * this.zones.length >> 0]).getPosition(),
            t.position.x = Ei.vector.x,
            t.position.y = Ei.vector.y,
            t.position.z = Ei.vector.z
        }
        ;
        var Pi = function(t) {
            function e(t, i) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (n = le()(this, de()(e).call(this, Z, o))).radius = we(t, i, r),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.radius = we(t, e, i)
                }
            }, {
                key: "initialize",
                value: function(t) {
                    t.radius = this.radius.getValue(),
                    t.transform.oldRadius = t.radius
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.width
                      , n = t.height
                      , r = t.center
                      , o = void 0 !== r && r
                      , s = t.isEnabled;
                    return new e(i,n,o,void 0 === s || s)
                }
            }]),
            e
        }(Le)
          , Si = function(t) {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ge;
                return m()(this, e),
                (t = le()(this, de()(e).call(this, q))).numPan = we(i),
                t.timePan = we(n),
                t.startTime = 0,
                t.nextTime = 0,
                t.init(),
                t
            }
            return pe()(e, t),
            x()(e, [{
                key: "init",
                value: function() {
                    this.startTime = 0,
                    this.nextTime = this.timePan.getValue()
                }
            }, {
                key: "getValue",
                value: function(t) {
                    return this.startTime += t,
                    this.startTime >= this.nextTime ? (this.init(),
                    1 == this.numPan.b ? this.numPan.getValue("Float") > .5 ? 1 : 0 : this.numPan.getValue("Int")) : 0
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.particlesMin
                      , n = t.particlesMax
                      , r = t.perSecondMin
                      , o = t.perSecondMax;
                    return new e(new ze(i,n),new ze(r,o))
                }
            }]),
            e
        }(Le);
        function Ti(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function Ai(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ti(Object(i), !0).forEach((function(e) {
                    Ht()(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ti(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        var ji = function(t) {
            function e(t, i) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xe, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                m()(this, e),
                n = le()(this, de()(e).call(this, I, o));
                var s = t.Sprite
                  , a = t.SpriteMaterial;
                return n.materialProperties = he(Xe, r),
                n.texture = i,
                n.material = new a(Ai({}, {
                    map: i
                }, {}, n.materialProperties)),
                n.sprite = new s(n.material),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "initialize",
                value: function(t) {
                    t.body = this.sprite
                }
            }], [{
                key: "fromJSON",
                value: function(t, i) {
                    var n, r, o = t.loadedTexture, s = t.materialProperties, a = void 0 === s ? Je : s, u = t.isEnabled, h = void 0 === u || u;
                    return new e(i,o,he(Je, (r = (n = a).blending,
                    Ai({}, n, {
                        blending: r ? Ye[r] : Ye[Je.blending]
                    }))),h)
                }
            }]),
            e
        }(Le)
          , Ci = function(t) {
            function e(t) {
                var i, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return m()(this, e),
                (i = le()(this, de()(e).call(this, t, n))).dirVec = new Re(0,0,0),
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "normalize",
                value: function(t) {
                    return 100 * t
                }
            }]),
            e
        }(Le);
        Ci.prototype.initialize = function() {
            var t, e = new Re(0,0,1), i = new Re(0,0,0);
            return function(n) {
                return t = this.tha * Math.random(),
                this._useV && this.dirVec.copy(this.dir).scalar(this.radiusPan.getValue()),
                ve.getNormal(this.dirVec, e),
                i.copy(this.dirVec).applyAxisAngle(e, t),
                i.applyAxisAngle(this.dirVec.normalize(), Math.random() * rt * 2),
                n.velocity.copy(i),
                this
            }
        }();
        var Ri = function(t) {
            function e(t, i) {
                var n, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return m()(this, e),
                (n = le()(this, de()(e).call(this, L, r))).tha = i * st,
                n.dirVec = t.toVector3D(),
                n._useV = !1,
                n
            }
            return pe()(e, t),
            x()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.polarRadius
                      , n = t.polarTheta
                      , r = t.polarPhi
                      , o = t.velocityTheta
                      , s = t.isEnabled
                      , a = void 0 === s || s;
                    return new e(new Be(i,n,r),o,a)
                }
            }]),
            e
        }(Ci)
          , Bi = function(t) {
            function e(t, i, n) {
                var r, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (r = le()(this, de()(e).call(this, U, o))).radiusPan = we(t),
                r.dir = i.clone().normalize(),
                r.tha = n * st,
                r._useV = !0,
                r
            }
            return pe()(e, t),
            x()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.radius
                      , n = t.x
                      , r = t.y
                      , o = t.z
                      , s = t.theta
                      , a = t.isEnabled
                      , u = void 0 === a || a;
                    return new e(i,new Re(n,r,o),s,u)
                }
            }]),
            e
        }(Ci)
          , Ii = function(t) {
            function e(t, i) {
                var n, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return m()(this, e),
                (n = le()(this, de()(e).call(this, N, r))).radiusPan = we(1),
                n.dir = t.clone(),
                n.tha = i * st,
                n._useV = !0,
                n
            }
            return pe()(e, t),
            x()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.theta
                      , s = t.isEnabled
                      , a = void 0 === s || s;
                    return new e(new Re(i,n,r),o,a)
                }
            }]),
            e
        }(Ci)
          , Vi = .006
          , Di = !0
          , Fi = new Si(1,.1)
          , Zi = !1
          , Ni = i(7)
          , Li = i.n(Ni)
          , Ui = "Emitter"
          , qi = "FollowEmitter"
          , Yi = function(t) {
            function e(t) {
                var i;
                return m()(this, e),
                (i = le()(this, de()(e).call(this, t))).type = Ui,
                i.particles = [],
                i.initializers = [],
                i.behaviours = [],
                i.emitterBehaviours = [],
                i.currentEmitTime = 0,
                i.totalEmitTimes = -1,
                i.damping = Vi,
                i.bindEmitter = Di,
                i.bindEmitterEvent = Zi,
                i.rate = Fi,
                i.isEmitting = !1,
                i.id = "emitter-".concat(ae()),
                i.cID = 0,
                i.name = "Emitter",
                i.eventDispatcher = new Ne,
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "dispatch",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                    this.eventDispatcher.dispatchEvent(t, e)
                }
            }, {
                key: "setRate",
                value: function(t) {
                    return this.rate = t,
                    this
                }
            }, {
                key: "setPosition",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = this.position
                      , i = t.x
                      , n = void 0 === i ? e.x : i
                      , r = t.y
                      , o = void 0 === r ? e.y : r
                      , s = t.z
                      , a = void 0 === s ? e.z : s;
                    return this.position.set(n, o, a),
                    this
                }
            }, {
                key: "setRotation",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = this.rotation
                      , i = t.x
                      , n = void 0 === i ? e.x : i
                      , r = t.y
                      , o = void 0 === r ? e.y : r
                      , s = t.z
                      , a = void 0 === s ? e.z : s;
                    return this.rotation.set(n, o, a),
                    this
                }
            }, {
                key: "emit",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
                    return this.currentEmitTime = 0,
                    this.totalEmitTimes = Li()(t) ? t : 1 / 0,
                    this.life = 1 === t ? t : Li()(e) ? e : 1 / 0,
                    this.rate.init(),
                    this.isEmitting = !0,
                    this
                }
            }, {
                key: "experimental_emit",
                value: function() {
                    var t = this.isEmitting
                      , e = this.totalEmitTimes
                      , i = this.life;
                    return t || (this.currentEmitTime = 0,
                    e || this.setTotalEmitTimes(1 / 0),
                    i || this.setLife(1 / 0),
                    this.rate.init(),
                    this.isEmitting = !0),
                    this
                }
            }, {
                key: "setTotalEmitTimes",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                    return this.totalEmitTimes = Li()(t) ? t : 1 / 0,
                    this
                }
            }, {
                key: "setLife",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                    return 1 === this.totalEmitTimes ? this.life = this.totalEmitTimes : this.life = Li()(t) ? t : 1 / 0,
                    this
                }
            }, {
                key: "stopEmit",
                value: function() {
                    this.totalEmitTimes = -1,
                    this.currentEmitTime = 0,
                    this.isEmitting = !1
                }
            }, {
                key: "removeAllParticles",
                value: function() {
                    for (var t = this.particles.length; t--; )
                        this.particles[t].dead = !0
                }
            }, {
                key: "addInitializer",
                value: function(t) {
                    return this.initializers.push(t),
                    this
                }
            }, {
                key: "addInitializers",
                value: function(t) {
                    for (var e = t.length; e--; )
                        this.addInitializer(t[e]);
                    return this
                }
            }, {
                key: "setInitializers",
                value: function(t) {
                    return this.initializers = t,
                    this
                }
            }, {
                key: "removeInitializer",
                value: function(t) {
                    var e = this.initializers.indexOf(t);
                    return e > -1 && this.initializers.splice(e, 1),
                    this
                }
            }, {
                key: "removeAllInitializers",
                value: function() {
                    return oe.destroyArray(this.initializers),
                    this
                }
            }, {
                key: "addBehaviour",
                value: function(t) {
                    return this.behaviours.push(t),
                    this
                }
            }, {
                key: "addBehaviours",
                value: function(t) {
                    for (var e = t.length; e--; )
                        this.addBehaviour(t[e]);
                    return this
                }
            }, {
                key: "setBehaviours",
                value: function(t) {
                    return this.behaviours = t,
                    this
                }
            }, {
                key: "removeBehaviour",
                value: function(t) {
                    var e = this.behaviours.indexOf(t);
                    return e > -1 && this.behaviours.splice(e, 1),
                    this
                }
            }, {
                key: "removeAllBehaviours",
                value: function() {
                    return oe.destroyArray(this.behaviours),
                    this
                }
            }, {
                key: "addEmitterBehaviour",
                value: function(t) {
                    return this.emitterBehaviours.push(t),
                    t.initialize(this),
                    this
                }
            }, {
                key: "addEmitterBehaviours",
                value: function(t) {
                    for (var e = t.length; e--; )
                        this.addEmitterBehaviour(t[e]);
                    return this
                }
            }, {
                key: "setEmitterBehaviours",
                value: function(t) {
                    var e = t.length;
                    this.emitterBehaviours = t;
                    for (var i = 0; i < e; i++)
                        this.emitterBehaviours[i].initialize(this);
                    return this
                }
            }, {
                key: "removeEmitterBehaviour",
                value: function(t) {
                    var e = this.emitterBehaviours.indexOf(t);
                    return e > -1 && this.emitterBehaviours.splice(e, 1),
                    this
                }
            }, {
                key: "removeAllEmitterBehaviours",
                value: function() {
                    return oe.destroyArray(this.emitterBehaviours),
                    this
                }
            }, {
                key: "addOnEmitterDeadEventListener",
                value: function(t) {
                    return this.eventDispatcher.addEventListener("".concat(this.id, "_").concat("EMITTER_DEAD"), (function() {
                        return t()
                    }
                    )),
                    this
                }
            }, {
                key: "createParticle",
                value: function() {
                    var t = this.parent.pool.get(Fe);
                    return this.setupParticle(t),
                    this.parent && this.parent.dispatch("PARTICLE_CREATED", t),
                    this.bindEmitterEvent && this.dispatch("PARTICLE_CREATED", t),
                    t
                }
            }, {
                key: "setupParticle",
                value: function(t) {
                    var e = this.initializers
                      , i = this.behaviours;
                    ii.initialize(this, t, e),
                    t.addBehaviours(i),
                    t.parent = this,
                    this.particles.push(t)
                }
            }, {
                key: "update",
                value: function(t) {
                    if (this.isEmitting) {
                        this.age += t,
                        (this.dead || this.age >= this.life) && this.destroy(),
                        this.generate(t),
                        this.integrate(t);
                        for (var e = this.particles.length; e--; ) {
                            var i = this.particles[e];
                            i.dead && (this.parent && this.parent.dispatch("PARTICLE_DEAD", i),
                            this.bindEmitterEvent && this.dispatch("PARTICLE_DEAD", i),
                            this.parent.pool.expire(i.reset()),
                            this.particles.splice(e, 1))
                        }
                        this.updateEmitterBehaviours(t)
                    }
                }
            }, {
                key: "updateEmitterBehaviours",
                value: function(t) {
                    if (!this.sleep)
                        for (var e = this.emitterBehaviours.length, i = 0; i < e; i++)
                            this.emitterBehaviours[i].applyBehaviour(this, t, i)
                }
            }, {
                key: "integrate",
                value: function(t) {
                    var e = this.parent ? this.parent.integrationType : Ae
                      , i = 1 - this.damping;
                    Ce(this, t, i, e);
                    for (var n = this.particles.length; n--; ) {
                        var r = this.particles[n];
                        r.update(t, n),
                        Ce(r, t, i, e),
                        this.parent && this.parent.dispatch("PARTICLE_UPDATE", r),
                        this.bindEmitterEvent && this.dispatch("PARTICLE_UPDATE", r)
                    }
                }
            }, {
                key: "generate",
                value: function(t) {
                    if (1 !== this.totalEmitTimes) {
                        if (this.currentEmitTime += t,
                        this.currentEmitTime < this.totalEmitTimes) {
                            var e = this.rate.getValue(t);
                            for (e > 0 && (this.cID = e); e--; )
                                this.createParticle()
                        }
                    } else {
                        var i = this.rate.getValue(99999);
                        for (i > 0 && (this.cID = i); i--; )
                            this.createParticle();
                        this.totalEmitTimes = 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.dead = !0,
                    this.energy = 0,
                    this.totalEmitTimes = -1,
                    0 == this.particles.length && (this.isEmitting = !1,
                    this.removeAllInitializers(),
                    this.removeAllBehaviours(),
                    this.dispatch("".concat(this.id, "_").concat("EMITTER_DEAD")),
                    this.parent && this.parent.removeEmitter(this))
                }
            }]),
            e
        }(Fe)
          , Xi = i(5)
          , Ji = i.n(Xi)
          , Qi = 1 / 0
          , Gi = 1e3
          , Hi = 100
          , Ki = ut
          , Wi = .03
          , $i = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ki
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _
                  , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                m()(this, t),
                this.type = n,
                this.isEnabled = r,
                this.id = "behaviour-".concat(ae()),
                this.life = e,
                this.easing = i,
                this.age = 0,
                this.energy = 1,
                this.dead = !1
            }
            return x()(t, [{
                key: "reset",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ki;
                    this.life = t,
                    this.easing = e || Ki
                }
            }, {
                key: "normalizeForce",
                value: function(t) {
                    return t.scalar(100)
                }
            }, {
                key: "normalizeValue",
                value: function(t) {
                    return 100 * t
                }
            }, {
                key: "initialize",
                value: function(t) {}
            }, {
                key: "applyBehaviour",
                value: function(t, e, i) {
                    this.isEnabled && this.mutate(t, e, i)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {}
            }, {
                key: "energize",
                value: function(t, e) {
                    if (!this.dead) {
                        if (this.age += e,
                        this.age >= this.life)
                            return this.energy = 0,
                            void (this.dead = !0);
                        var i = this.easing(t.age / t.life);
                        this.energy = Math.max(1 - i, 0)
                    }
                }
            }, {
                key: "destroy",
                value: function() {}
            }, {
                key: "fromJSON",
                value: function(t) {}
            }, {
                key: "life",
                set: function(t) {
                    this._life = Li()(t) ? t : Qi
                },
                get: function() {
                    return this._life
                }
            }]),
            t
        }()
          , tn = function(t) {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return m()(this, e),
                (t = le()(this, de()(e).call(this, r, o, b, s))).alphaA = i,
                t.alphaB = n,
                t.reset(i, n),
                t
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = arguments.length > 2 ? arguments[2] : void 0
                      , r = arguments.length > 3 ? arguments[3] : void 0;
                    this.same = null == i,
                    this.alphaA = we(t),
                    this.alphaB = we(i),
                    n && Ji()(de()(e.prototype), "reset", this).call(this, n, r)
                }
            }, {
                key: "initialize",
                value: function(t) {
                    t.useAlpha = !0,
                    t.transform.alphaA = this.alphaA.getValue(),
                    t.transform.alphaB = this.same ? t.transform.alphaA : this.alphaB.getValue()
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    t.alpha = ve.lerp(t.transform.alphaA, t.transform.alphaB, this.energy),
                    t.alpha < .002 && (t.alpha = 0)
                }
            }, {
                key: "same",
                get: function() {
                    return this._same
                },
                set: function(t) {
                    this._same = t
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.alphaA
                      , n = t.alphaB
                      , r = t.life
                      , o = t.easing
                      , s = t.isEnabled
                      , a = void 0 === s || s;
                    return new e(i,n,r,At(o),a)
                }
            }]),
            e
        }($i)
          , en = function(t) {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Re, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hi, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gi, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Qi, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ki, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return m()(this, e),
                (t = le()(this, de()(e).call(this, o, s, z, a))).targetPosition = i,
                t.radius = r,
                t.force = t.normalizeValue(n),
                t.radiusSq = t.radius * t.radius,
                t.attractionForce = new Re,
                t.lengthSq = 0,
                t
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Re
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hi
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gi
                      , r = arguments.length > 3 ? arguments[3] : void 0
                      , o = arguments.length > 4 ? arguments[4] : void 0;
                    this.targetPosition = t,
                    this.radius = n,
                    this.force = this.normalizeValue(i),
                    this.radiusSq = this.radius * this.radius,
                    this.attractionForce = new Re,
                    this.lengthSq = 0,
                    r && Ji()(de()(e.prototype), "reset", this).call(this, r, o)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    this.attractionForce.copy(this.targetPosition),
                    this.attractionForce.sub(t.position),
                    this.lengthSq = this.attractionForce.lengthSq(),
                    this.lengthSq > 4e-6 && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(),
                    this.attractionForce.scalar(1 - this.lengthSq / this.radiusSq),
                    this.attractionForce.scalar(this.force),
                    t.acceleration.add(this.attractionForce))
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.force
                      , s = t.radius
                      , a = t.life
                      , u = t.easing
                      , h = t.isEnabled
                      , c = void 0 === h || h;
                    return new e(new Re(i,n,r),o,s,a,At(u),c)
                }
            }]),
            e
        }($i)
          , nn = function(t) {
            function e(t, i, n, r, o) {
                var s, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return m()(this, e),
                (s = le()(this, de()(e).call(this, r, o, w, a))).reset(t, i, n),
                s
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n, r, o) {
                    this.emitter = t,
                    this.useMass = i,
                    this.onCollide = n,
                    this.particles = [],
                    this.delta = new Re,
                    r && Ji()(de()(e.prototype), "reset", this).call(this, r, o)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    for (var n, r, o, s, a, u, h = this.emitter ? this.emitter.particles.slice(i) : this.particles.slice(i), c = h.length; c--; )
                        (n = h[c]) != t && (this.delta.copy(n.position).sub(t.position),
                        (r = this.delta.lengthSq()) <= (s = t.radius + n.radius) * s && (o = s - Math.sqrt(r),
                        o += .5,
                        a = this._getAverageMass(t, n),
                        u = this._getAverageMass(n, t),
                        t.position.add(this.delta.clone().normalize().scalar(o * -a)),
                        n.position.add(this.delta.normalize().scalar(o * u)),
                        this.onCollide && this.onCollide(t, n)))
                }
            }, {
                key: "_getAverageMass",
                value: function(t, e) {
                    return this.useMass ? e.mass / (t.mass + e.mass) : .5
                }
            }, {
                key: "fromJSON",
                value: function(t) {}
            }]),
            e
        }($i)
          , rn = function(t) {
            function e(t, i, n, r) {
                var o, s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return m()(this, e),
                (o = le()(this, de()(e).call(this, n, r, k, s))).reset(t, i),
                o
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n, r) {
                    this.same = null == i,
                    this.colorA = Se(t),
                    this.colorB = Se(i),
                    n && Ji()(de()(e.prototype), "reset", this).call(this, n, r)
                }
            }, {
                key: "initialize",
                value: function(t) {
                    t.transform.colorA = Kt.getRGB(this.colorA.getValue()),
                    t.useColor = !0,
                    t.transform.colorB = this.same ? t.transform.colorA : Kt.getRGB(this.colorB.getValue())
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    this._same ? (t.color.r = t.transform.colorA.r,
                    t.color.g = t.transform.colorA.g,
                    t.color.b = t.transform.colorA.b) : (t.color.r = ve.lerp(t.transform.colorA.r, t.transform.colorB.r, this.energy),
                    t.color.g = ve.lerp(t.transform.colorA.g, t.transform.colorB.g, this.energy),
                    t.color.b = ve.lerp(t.transform.colorA.b, t.transform.colorB.b, this.energy))
                }
            }, {
                key: "same",
                get: function() {
                    return this._same
                },
                set: function(t) {
                    this._same = t
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.colorA
                      , n = t.colorB
                      , r = t.life
                      , o = t.easing
                      , s = t.isEnabled
                      , a = void 0 === s || s;
                    return new e(i,n,r,At(o),a)
                }
            }]),
            e
        }($i)
          , on = function(t) {
            function e(t, i, n, r, o) {
                var s;
                return m()(this, e),
                (s = le()(this, de()(e).call(this, n, r, M, o))).reset(t, i),
                s
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dead"
                      , n = arguments.length > 2 ? arguments[2] : void 0
                      , r = arguments.length > 3 ? arguments[3] : void 0;
                    this.zone = t,
                    this.zone.crossType = i,
                    n && Ji()(de()(e.prototype), "reset", this).call(this, n, r)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    this.zone.crossing.call(this.zone, t)
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.zoneType
                      , r = t.zoneParams
                      , o = t.crossType
                      , s = t.life
                      , a = t.easing
                      , u = t.isEnabled
                      , h = void 0 === u || u;
                    return new e(si()(n[i], ui()(Object.values(r))),o,s,At(a),h)
                }
            }]),
            e
        }($i)
          , sn = function(t) {
            function e(t, i, n, r, o) {
                var s, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return m()(this, e),
                (s = le()(this, de()(e).call(this, r, o, E, a))).reset(t, i, n),
                s
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, e, i) {
                    this.force = this.normalizeForce(new Re(t,e,i)),
                    this.force.id = Math.random()
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    t.acceleration.add(this.force)
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.fx
                      , n = t.fy
                      , r = t.fz
                      , o = t.life
                      , s = t.easing
                      , a = t.isEnabled
                      , u = void 0 === a || a;
                    return new e(i,n,r,o,At(s),u)
                }
            }]),
            e
        }($i)
          , an = function(t) {
            function e(t, i, n) {
                var r, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return m()(this, e),
                (r = le()(this, de()(e).call(this, 0, -t, 0, i, n, o))).type = O,
                r
            }
            return pe()(e, t),
            x()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.gravity
                      , n = t.life
                      , r = t.easing
                      , o = t.isEnabled
                      , s = void 0 === o || o;
                    return new e(i,n,At(r),s)
                }
            }]),
            e
        }(sn)
          , un = function(t) {
            function e(t, i, n) {
                var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wi, s = arguments.length > 4 ? arguments[4] : void 0, a = arguments.length > 5 ? arguments[5] : void 0, u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
                return m()(this, e),
                (r = le()(this, de()(e).call(this, s, a, P, u))).reset(t, i, n, o),
                r.time = 0,
                r
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wi
                      , o = arguments.length > 4 ? arguments[4] : void 0
                      , s = arguments.length > 5 ? arguments[5] : void 0;
                    this.randomForce = this.normalizeForce(new Re(t,i,n)),
                    this.delayPan = we(r),
                    this.time = 0,
                    o && Ji()(de()(e.prototype), "reset", this).call(this, o, s)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    if (this.energize(t, e, i),
                    this.time += e,
                    this.time >= this.delayPan.getValue()) {
                        var n = ve.randomAToB(-this.randomForce.x, this.randomForce.x)
                          , r = ve.randomAToB(-this.randomForce.y, this.randomForce.y)
                          , o = ve.randomAToB(-this.randomForce.z, this.randomForce.z);
                        t.acceleration.addValue(n, r, o),
                        this.time = 0
                    }
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.delay
                      , s = t.life
                      , a = t.easing
                      , u = t.isEnabled
                      , h = void 0 === u || u;
                    return new e(i,n,r,o,s,At(a),h)
                }
            }]),
            e
        }($i)
          , hn = function(t) {
            function e(t, i, n, r, o) {
                var s, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return m()(this, e),
                (s = le()(this, de()(e).call(this, t, i, n, r, o, a))).force *= -1,
                s.type = S,
                s
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n, r, o) {
                    Ji()(de()(e.prototype), "reset", this).call(this, t, i, n, r, o),
                    this.force *= -1
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.force
                      , s = t.radius
                      , a = t.life
                      , u = t.easing
                      , h = t.isEnabled
                      , c = void 0 === h || h;
                    return new e(new Re(i,n,r),o,s,a,At(u),c)
                }
            }]),
            e
        }(en)
          , cn = function(t) {
            function e(t, i, n, r, o) {
                var s, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return m()(this, e),
                (s = le()(this, de()(e).call(this, r, o, T, a))).reset(t, i, n),
                s
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n, r, o) {
                    this.x = t || 0,
                    this.y = i || 0,
                    this.z = n || 0,
                    void 0 === t || "same" == t ? this.rotationType = "same" : null == i ? this.rotationType = "set" : void 0 === n ? this.rotationType = "to" : (this.rotationType = "add",
                    this.x = we(this.x * st),
                    this.y = we(this.y * st),
                    this.z = we(this.z * st)),
                    r && Ji()(de()(e.prototype), "reset", this).call(this, r, o)
                }
            }, {
                key: "initialize",
                value: function(t) {
                    switch (this.rotationType) {
                    case "same":
                        break;
                    case "set":
                        this._setRotation(t.rotation, this.x);
                        break;
                    case "to":
                        t.transform.fR = t.transform.fR || new Re,
                        t.transform.tR = t.transform.tR || new Re,
                        this._setRotation(t.transform.fR, this.x),
                        this._setRotation(t.transform.tR, this.y);
                        break;
                    case "add":
                        t.transform.addR = new Re(this.x.getValue(),this.y.getValue(),this.z.getValue())
                    }
                }
            }, {
                key: "_setRotation",
                value: function(t, e) {
                    if (t = t || new Re,
                    "random" == e) {
                        var i = ve.randomAToB(-rt, rt)
                          , n = ve.randomAToB(-rt, rt)
                          , r = ve.randomAToB(-rt, rt);
                        t.set(i, n, r)
                    } else
                        e instanceof Re && t.copy(e)
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    switch (this.energize(t, e, i),
                    this.rotationType) {
                    case "same":
                        t.rotation || (t.rotation = new Re),
                        t.rotation.eulerFromDir(t.velocity);
                        break;
                    case "set":
                        break;
                    case "to":
                        t.rotation.x = ve.lerp(t.transform.fR.x, t.transform.tR.x, this.energy),
                        t.rotation.y = ve.lerp(t.transform.fR.y, t.transform.tR.y, this.energy),
                        t.rotation.z = ve.lerp(t.transform.fR.z, t.transform.tR.z, this.energy);
                        break;
                    case "add":
                        t.rotation.add(t.transform.addR)
                    }
                }
            }, {
                key: "rotationType",
                get: function() {
                    return this._rotationType
                },
                set: function(t) {
                    this._rotationType = t
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.life
                      , s = t.easing
                      , a = t.isEnabled
                      , u = void 0 === a || a;
                    return new e(i,n,r,o,At(s),u)
                }
            }]),
            e
        }($i)
          , ln = function(t) {
            function e(t, i, n, r) {
                var o, s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return m()(this, e),
                (o = le()(this, de()(e).call(this, n, r, A, s))).reset(t, i),
                o
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, i, n, r) {
                    this.same = null == i,
                    this.scaleA = we(t || 1),
                    this.scaleB = we(i),
                    n && Ji()(de()(e.prototype), "reset", this).call(this, n, r)
                }
            }, {
                key: "initialize",
                value: function(t) {
                    t.transform.scaleA = this.scaleA.getValue(),
                    t.transform.oldRadius = t.radius,
                    t.transform.scaleB = this.same ? t.transform.scaleA : this.scaleB.getValue()
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    t.scale = ve.lerp(t.transform.scaleA, t.transform.scaleB, this.energy),
                    t.scale < 5e-4 && (t.scale = 0),
                    t.radius = t.transform.oldRadius * t.scale
                }
            }, {
                key: "same",
                get: function() {
                    return this._same
                },
                set: function(t) {
                    this._same = t
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.scaleA
                      , n = t.scaleB
                      , r = t.life
                      , o = t.easing
                      , s = t.isEnabled
                      , a = void 0 === s || s;
                    return new e(i,n,r,At(o),a)
                }
            }]),
            e
        }($i)
          , fn = function(t) {
            function e(t, i, n, r, o, s, a) {
                var u, h = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
                return m()(this, e),
                (u = le()(this, de()(e).call(this, s, a, j, h))).reset(t, i, n, r, o),
                u
            }
            return pe()(e, t),
            x()(e, [{
                key: "reset",
                value: function(t, e, i, n, r) {
                    this.pos ? this.pos.set(t, e, i) : this.pos = new Re(t,e,i),
                    this.spring = n || .1,
                    this.friction = r || .98
                }
            }, {
                key: "mutate",
                value: function(t, e, i) {
                    this.energize(t, e, i),
                    t.velocity.x += (this.pos.x - t.position.x) * this.spring,
                    t.velocity.y += (this.pos.y - t.position.y) * this.spring,
                    t.velocity.z += (this.pos.z - t.position.z) * this.spring
                }
            }], [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x
                      , n = t.y
                      , r = t.z
                      , o = t.spring
                      , s = t.friction
                      , a = t.life
                      , u = t.easing
                      , h = t.isEnabled
                      , c = void 0 === h || h;
                    return new e(i,n,r,o,s,a,At(u),c)
                }
            }]),
            e
        }($i)
          , dn = function(t) {
            var e = [];
            return t.forEach((function(t) {
                var i = t.type
                  , n = t.properties;
                if (!Jt.includes(i))
                    throw new Error("The behaviour type ".concat(i, " is invalid or not yet supported"));
                e.push(new o[i].fromJSON(n))
            }
            )),
            e
        }
          , yn = function(t, e, i, n) {
            var o = t.preParticles
              , s = void 0 === o ? ot : o
              , a = t.integrationType
              , u = void 0 === a ? "euler" : a
              , h = t.emitters
              , c = void 0 === h ? [] : h
              , l = new i(e,s,u);
            return c.forEach((function(t) {
                var i = new n
                  , o = t.rate
                  , s = t.rotation
                  , a = t.initializers
                  , u = t.behaviours
                  , h = t.emitterBehaviours
                  , c = void 0 === h ? [] : h
                  , f = t.position
                  , d = t.totalEmitTimes
                  , y = void 0 === d ? 1 / 0 : d
                  , p = t.life
                  , v = void 0 === p ? 1 / 0 : p;
                i.setRate(function(t) {
                    return new Si.fromJSON(t)
                }(o)).setRotation(s).setInitializers(function(t, e) {
                    var i = [];
                    return t.forEach((function(t) {
                        var n = t.type
                          , o = t.properties;
                        if (!Xt.includes(n))
                            throw new Error("The initializer type ".concat(n, " is invalid or not yet supported"));
                        Y.includes(n) ? i.push(new r[n].fromJSON(o,e)) : i.push(new r[n].fromJSON(o))
                    }
                    )),
                    i
                }(a, e)).setBehaviours(dn(u)).setEmitterBehaviours(dn(c)).setPosition(f).emit(y, v),
                l.addEmitter(i)
            }
            )),
            l
        };
        function pn(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        var vn = function(t, e) {
            return new Promise((function(i, n) {
                if (!t.length)
                    return i([]);
                var o = t.length
                  , s = []
                  , a = t.filter((function(t) {
                    return !t.properties.texture
                }
                ))
                  , u = t.filter((function(t) {
                    return t.properties.texture
                }
                ));
                a.forEach((function(t) {
                    var a = t.type
                      , u = t.properties;
                    return Xt.includes(a) ? (Y.includes(a) ? s.push(new r[a].fromJSON(u,e)) : s.push(new r[a].fromJSON(u)),
                    s.length === o ? i(s) : void 0) : n("The initializer type ".concat(a, " is invalid or not yet supported"))
                }
                )),
                u.forEach((function(t) {
                    var r = t.type
                      , a = t.properties
                      , u = t.properties.texture
                      , h = new e.TextureLoader;
                    if (!Xt.includes(r))
                        return n("The initializer type ".concat(r, " is invalid or not yet supported"));
                    h.load(u, (function(t) {
                        if (s.push(new ji.fromJSON(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? pn(Object(i), !0).forEach((function(e) {
                                    Ht()(t, e, i[e])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : pn(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }
                                ))
                            }
                            return t
                        }({}, a, {
                            loadedTexture: t
                        }),e)),
                        s.length === o)
                            return i(s)
                    }
                    ), void 0, n)
                }
                ))
            }
            ))
        }
          , mn = function(t) {
            return new Promise((function(e, i) {
                if (!t.length)
                    return e([]);
                var n = t.length
                  , r = [];
                t.forEach((function(t) {
                    var s = t.type
                      , a = t.properties;
                    return Jt.includes(s) ? (r.push(new o[s].fromJSON(a)),
                    r.length === n ? e(r) : void 0) : i("The behaviour type ".concat(s, " is invalid or not yet supported"))
                }
                ))
            }
            ))
        }
          , gn = function(t, e, i, n) {
            return new Promise((function(r, o) {
                if (!t.length)
                    return r([]);
                var s = []
                  , a = t.length;
                if (!a)
                    return r(s);
                t.forEach((function(t) {
                    var u, h = new e, c = t.rate, l = t.rotation, f = t.initializers, d = t.behaviours, y = t.emitterBehaviours, p = void 0 === y ? [] : y, v = t.position, m = t.totalEmitTimes, g = void 0 === m ? 1 / 0 : m, x = t.life, _ = void 0 === x ? 1 / 0 : x;
                    h.setRate((u = c,
                    new Si.fromJSON(u))).setRotation(l).setPosition(v),
                    vn(f, i).then((function(t) {
                        return h.setInitializers(t),
                        mn(d)
                    }
                    )).then((function(t) {
                        return h.setBehaviours(t),
                        mn(p)
                    }
                    )).then((function(t) {
                        return h.setEmitterBehaviours(t),
                        Promise.resolve(h)
                    }
                    )).then((function(t) {
                        if (s.push(n ? t.emit(g, _) : t.setTotalEmitTimes(g).setLife(_)),
                        s.length === a)
                            return r(s)
                    }
                    )).catch(o)
                }
                ))
            }
            ))
        }
          , xn = function(t, e, i, n) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
              , o = r.shouldAutoEmit
              , s = void 0 === o || o;
            return new Promise((function(r, o) {
                var a = t.preParticles
                  , u = void 0 === a ? ot : a
                  , h = t.integrationType
                  , c = void 0 === h ? "euler" : h
                  , l = t.emitters
                  , f = void 0 === l ? [] : l
                  , d = new i(u,c);
                gn(f, n, e, s).then((function(t) {
                    var e = t.length;
                    if (!e)
                        return r(d);
                    t.forEach((function(t) {
                        d.addEmitter(t),
                        d.emitters.length === e && r(d)
                    }
                    ))
                }
                )).catch(o)
            }
            ))
        }
          , _n = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ae;
                m()(this, t),
                this.type = De,
                this.canUpdate = !0,
                this.preParticles = e,
                this.integrationType = i,
                this.emitters = [],
                this.renderers = [],
                this.pool = new Ze,
                this.eventDispatcher = new Ne
            }
            return x()(t, [{
                key: "dispatch",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                    this.eventDispatcher.dispatchEvent(t, e)
                }
            }, {
                key: "addRenderer",
                value: function(t) {
                    return this.renderers.push(t),
                    t.init(this),
                    this
                }
            }, {
                key: "removeRenderer",
                value: function(t) {
                    return this.renderers.splice(this.renderers.indexOf(t), 1),
                    t.remove(this),
                    this
                }
            }, {
                key: "addEmitter",
                value: function(t) {
                    return t.parent = this,
                    this.emitters.push(t),
                    this.dispatch("EMITTER_ADDED", t),
                    this
                }
            }, {
                key: "removeEmitter",
                value: function(t) {
                    return t.parent !== this ? this : (t.parent = null,
                    this.emitters.splice(this.emitters.indexOf(t), 1),
                    this.dispatch("EMITTER_REMOVED", t),
                    this)
                }
            }, {
                key: "emit",
                value: function(t) {
                    var e = t.onStart
                      , i = t.onUpdate
                      , n = t.onEnd;
                    e && e(),
                    i && this.eventDispatcher.addEventListener("SYSTEM_UPDATE", i);
                    var r = this.emitters.map((function(t) {
                        return t.life === 1 / 0 ? (n && n(),
                        t.experimental_emit(),
                        Promise.resolve()) : new Promise((function(e) {
                            t.addOnEmitterDeadEventListener((function() {
                                n && n(),
                                e()
                            }
                            )),
                            t.experimental_emit()
                        }
                        ))
                    }
                    ));
                    try {
                        return Promise.all(r)
                    } catch (t) {
                        console.warn(t)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .0167
                      , e = t || .0167;
                    if (this.canUpdate) {
                        if (e > 0)
                            for (var i = this.emitters.length; i--; ) {
                                var n = this.emitters[i];
                                n.update(e),
                                n.isEmitting && this.dispatch("SYSTEM_UPDATE")
                            }
                        this.dispatch("SYSTEM_UPDATE_AFTER")
                    }
                    return Promise.resolve()
                }
            }, {
                key: "getCount",
                value: function() {
                    var t, e = this.emitters.length, i = 0;
                    for (t = 0; t < e; t++)
                        i += this.emitters[t].particles.length;
                    return i
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this.emitters.length;
                    this.canUpdate = !1;
                    for (var e = 0; e < t; e++)
                        this.emitters[e] && this.emitters[e].destroy(),
                        delete this.emitters[e];
                    this.emitters.length = 0,
                    this.pool.destroy(),
                    this.canUpdate = !0
                }
            }], [{
                key: "fromJSON",
                value: function(e, i) {
                    return yn(e, i, t, Yi)
                }
            }, {
                key: "fromJSONAsync",
                value: function(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = n.shouldAutoEmit
                      , o = void 0 !== r && r;
                    return xn(e, i, t, Yi, {
                        shouldAutoEmit: o
                    })
                }
            }]),
            t
        }()
          , bn = {
            addEventListener: function(t, e) {
                return t.eventDispatcher.addEventListener("SYSTEM_UPDATE", e),
                this
            },
            drawZone: function(t, e, i) {
                var n, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = "#2194ce", s = !0, a = r.width, u = void 0 === a ? 15 : a, h = r.height, c = void 0 === h ? 15 : h, l = r.depth, f = void 0 === l ? 15 : l, d = r.radius, y = void 0 === d ? 15 : d, p = r.x, v = void 0 === p ? 0 : p, m = r.y, g = void 0 === m ? 0 : m, x = r.z, _ = void 0 === x ? 0 : x;
                r.isPointZone() && (n = new t.SphereGeometry(15)),
                r.isLineZone(),
                r.isBoxZone() && (n = new t.BoxGeometry(u,c,f)),
                r.isSphereZone() && (n = new t.SphereGeometry(y,15,15)),
                r.isMeshZone() && (n = r.geometry.geometry ? r.geometry.geometry.clone() : r.geometry.clone()),
                n || (n = new t.BoxGeometry(u,c,f));
                var b = new t.MeshBasicMaterial({
                    color: o,
                    wireframe: s
                })
                  , z = new t.Mesh(n.clone(),b);
                i.add(z),
                this.addEventListener(e, (function() {
                    z.position.set(v, g, _)
                }
                ))
            },
            drawEmitter: function(t, e, i, n, r) {
                var o = new t.OctahedronGeometry(15)
                  , s = new t.MeshBasicMaterial({
                    color: r || "#aaa",
                    wireframe: !0
                })
                  , a = new t.Mesh(o.clone(),s);
                i.add(a),
                this.addEventListener(e, (function() {
                    a.position.copy(n.position),
                    a.rotation.set(n.rotation.x, n.rotation.y, n.rotation.z)
                }
                ))
            },
            renderInfo: function() {
                function t(t, e) {
                    var i = "material" == t ? "_materialPool" : "_targetPool";
                    return e.renderers[0][i].cID
                }
                return function(e, i) {
                    this.addInfo(i);
                    var n = "";
                    switch (this._infoType) {
                    case 2:
                        n += "emitter:" + e.emitters.length + "<br>",
                        n += "em speed:" + e.emitters[0].cID + "<br>",
                        n += "pos:" + function(t) {
                            var e = t.emitters[0];
                            return Math.round(e.p.x) + "," + Math.round(e.p.y) + "," + Math.round(e.p.z)
                        }(e);
                        break;
                    case 3:
                        n += e.renderers[0].name + "<br>",
                        n += "target:" + t("target") + "<br>",
                        n += "material:" + t("material");
                        break;
                    default:
                        n += "particles:" + e.getCount() + "<br>",
                        n += "pool:" + e.pool.getCount() + "<br>",
                        n += "total:" + (e.getCount() + e.pool.getCount())
                    }
                    this._infoCon.innerHTML = n
                }
            }(),
            addInfo: function(t) {
                var e = this;
                if (!this._infoCon) {
                    var i, n;
                    switch (this._infoCon = document.createElement("div"),
                    this._infoCon.style.cssText = ["position:fixed;bottom:0px;left:0;cursor:pointer;", "opacity:0.9;z-index:10000;padding:10px;font-size:12px;", "width:120px;height:50px;background-color:#002;color:#0ff;"].join(""),
                    this._infoType = 1,
                    this._infoCon.addEventListener("click", (function() {
                        e._infoType++,
                        e._infoType > 3 && (e._infoType = 1)
                    }
                    ), !1),
                    t) {
                    case 2:
                        i = "#201",
                        n = "#f08";
                        break;
                    case 3:
                        i = "#020",
                        n = "#0f0";
                        break;
                    default:
                        i = "#002",
                        n = "#0ff"
                    }
                    this._infoCon.style["background-color"] = i,
                    this._infoCon.style.color = n
                }
                this._infoCon.parentNode || document.body.appendChild(this._infoCon)
            }
        }
          , zn = function() {
            var t = 0;
            if (window.console && window.console.trace) {
                var e = Array.prototype.slice.call(arguments)
                  , i = arguments[0] + "";
                if (0 == i.indexOf("+")) {
                    var n = parseInt(arguments[0]);
                    t < n && (e.shift(),
                    console.trace.apply(console, e),
                    t++)
                } else
                    e.unshift("+15"),
                    this.apply(console, e)
            }
        }
          , wn = function(t) {
            function e(t, i, n) {
                var r;
                return m()(this, e),
                (r = le()(this, de()(e).call(this, n))).type = qi,
                r.mouseTarget = oe.initValue(t, window),
                r.ease = oe.initValue(i, .7),
                r._allowEmitting = !1,
                r.initEventHandler(),
                r
            }
            return pe()(e, t),
            x()(e, [{
                key: "initEventHandler",
                value: function() {
                    var t = this;
                    this.mousemoveHandler = function(e) {
                        t.mousemove.call(t, e)
                    }
                    ,
                    this.mousedownHandler = function(e) {
                        t.mousedown.call(t, e)
                    }
                    ,
                    this.mouseupHandler = function(e) {
                        t.mouseup.call(t, e)
                    }
                    ,
                    this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, !1)
                }
            }, {
                key: "emit",
                value: function() {
                    this._allowEmitting = !0
                }
            }, {
                key: "stopEmit",
                value: function() {
                    this._allowEmitting = !1
                }
            }, {
                key: "setCameraAndCanvas",
                value: function(t, e) {
                    this.camera = t,
                    this.canvas = e
                }
            }, {
                key: "mousemove",
                value: function(t) {
                    t.layerX || 0 == t.layerX ? (this.position.x += (t.layerX - this.position.x) * this.ease,
                    this.position.y += (t.layerY - this.position.y) * this.ease) : (t.offsetX || 0 == t.offsetX) && (this.position.x += (t.offsetX - this.position.x) * this.ease,
                    this.position.y += (t.offsetY - this.position.y) * this.ease),
                    this.position.copy(re.toSpacePos(this.position, this.camera, this.canvas)),
                    this._allowEmitting && Ji()(de()(e.prototype), "emit", this).call(this, "once")
                }
            }, {
                key: "destroy",
                value: function() {
                    Ji()(de()(e.prototype), "destroy", this).call(this),
                    this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, !1)
                }
            }]),
            e
        }(Yi)
          , kn = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $;
                m()(this, t),
                this.type = e
            }
            return x()(t, [{
                key: "init",
                value: function(t) {
                    var e = this;
                    this.system = t,
                    this.system.eventDispatcher.addEventListener("SYSTEM_UPDATE", (function(t) {
                        e.onSystemUpdate.call(e, t)
                    }
                    )),
                    this.system.eventDispatcher.addEventListener("PARTICLE_CREATED", (function(t) {
                        e.onParticleCreated.call(e, t)
                    }
                    )),
                    this.system.eventDispatcher.addEventListener("PARTICLE_UPDATE", (function(t) {
                        e.onParticleUpdate.call(e, t)
                    }
                    )),
                    this.system.eventDispatcher.addEventListener("PARTICLE_DEAD", (function(t) {
                        e.onParticleDead.call(e, t)
                    }
                    ))
                }
            }, {
                key: "remove",
                value: function() {
                    this.system = null
                }
            }, {
                key: "onParticleCreated",
                value: function(t) {}
            }, {
                key: "onParticleUpdate",
                value: function(t) {}
            }, {
                key: "onParticleDead",
                value: function(t) {}
            }, {
                key: "onSystemUpdate",
                value: function(t) {}
            }]),
            t
        }()
          , Mn = function(t) {
            function e() {
                var t;
                return m()(this, e),
                (t = le()(this, de()(e).call(this, tt))).targetPool = new Ze,
                t.materialPool = new Ze,
                t
            }
            return pe()(e, t),
            x()(e, [{
                key: "onSystemUpdate",
                value: function() {}
            }, {
                key: "onParticleCreated",
                value: function(t) {}
            }, {
                key: "onParticleUpdate",
                value: function(t) {}
            }, {
                key: "onParticleDead",
                value: function(t) {}
            }]),
            e
        }(kn)
          , En = function(t) {
            function e(t, i) {
                var n;
                return m()(this, e),
                (n = le()(this, de()(e).call(this, it))).container = t,
                n._targetPool = new Ze,
                n._materialPool = new Ze,
                n._body = new i.Mesh(new i.BoxGeometry(50,50,50),new i.MeshLambertMaterial({
                    color: "#ff0000"
                })),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "onSystemUpdate",
                value: function() {}
            }, {
                key: "onParticleCreated",
                value: function(t) {
                    t.target || (t.body || (t.body = this._body),
                    t.target = this._targetPool.get(t.body),
                    (t.useAlpha || t.useColor) && (t.target.material.__puid = Wt.id(t.body.material),
                    t.target.material = this._materialPool.get(t.target.material))),
                    t.target && (t.target.position.copy(t.position),
                    this.container.add(t.target))
                }
            }, {
                key: "onParticleUpdate",
                value: function(t) {
                    t.target && (t.target.position.copy(t.position),
                    t.target.rotation.set(t.rotation.x, t.rotation.y, t.rotation.z),
                    this.scale(t),
                    t.useAlpha && (t.target.material.opacity = t.alpha,
                    t.target.material.transparent = !0),
                    t.useColor && t.target.material.color.copy(t.color))
                }
            }, {
                key: "scale",
                value: function(t) {
                    t.target.scale.set(t.scale, t.scale, t.scale)
                }
            }, {
                key: "onParticleDead",
                value: function(t) {
                    t.target && ((t.useAlpha || t.useColor) && this._materialPool.expire(t.target.material),
                    this._targetPool.expire(t.target),
                    this.container.remove(t.target),
                    t.target = null)
                }
            }]),
            e
        }(kn)
          , On = function(t) {
            function e(t) {
                var i;
                return m()(this, e),
                (i = le()(this, de()(e).call(this, nt))).points = t,
                i
            }
            return pe()(e, t),
            x()(e, [{
                key: "onSystemUpdate",
                value: function() {}
            }, {
                key: "onParticleCreated",
                value: function(t) {
                    t.target || (t.target = new ee),
                    t.target.copy(t.position),
                    this.points.geometry.vertices.push(t.target)
                }
            }, {
                key: "onParticleUpdate",
                value: function(t) {
                    t.target && t.target.copy(t.position)
                }
            }, {
                key: "onParticleDead",
                value: function(t) {
                    if (t.target) {
                        var e = this.points.geometry.vertices.indexOf(t.target);
                        e > -1 && this.points.geometry.vertices.splice(e, 1),
                        t.target = null
                    }
                }
            }]),
            e
        }(kn)
          , Pn = function(t) {
            function e(t, i) {
                var n;
                return m()(this, e),
                (n = le()(this, de()(e).call(this, t, i))).type = et,
                n._body = new i.Sprite(new i.SpriteMaterial({
                    color: 16777215
                })),
                n
            }
            return pe()(e, t),
            x()(e, [{
                key: "scale",
                value: function(t) {
                    t.target.scale.set(t.scale * t.radius, t.scale * t.radius, 1)
                }
            }]),
            e
        }(En);
        i.d(e, "Alpha", (function() {
            return tn
        }
        )),
        i.d(e, "Attraction", (function() {
            return en
        }
        )),
        i.d(e, "Collision", (function() {
            return nn
        }
        )),
        i.d(e, "Color", (function() {
            return rn
        }
        )),
        i.d(e, "CrossZone", (function() {
            return on
        }
        )),
        i.d(e, "Force", (function() {
            return sn
        }
        )),
        i.d(e, "Gravity", (function() {
            return an
        }
        )),
        i.d(e, "RandomDrift", (function() {
            return un
        }
        )),
        i.d(e, "Repulsion", (function() {
            return hn
        }
        )),
        i.d(e, "Rotate", (function() {
            return cn
        }
        )),
        i.d(e, "Scale", (function() {
            return ln
        }
        )),
        i.d(e, "Spring", (function() {
            return fn
        }
        )),
        i.d(e, "Debug", (function() {
            return bn
        }
        )),
        i.d(e, "log", (function() {
            return zn
        }
        )),
        i.d(e, "ease", (function() {
            return at
        }
        )),
        i.d(e, "easeLinear", (function() {
            return ut
        }
        )),
        i.d(e, "easeInQuad", (function() {
            return ht
        }
        )),
        i.d(e, "easeOutQuad", (function() {
            return ct
        }
        )),
        i.d(e, "easeInOutQuad", (function() {
            return lt
        }
        )),
        i.d(e, "easeInCubic", (function() {
            return ft
        }
        )),
        i.d(e, "easeOutCubic", (function() {
            return dt
        }
        )),
        i.d(e, "easeInOutCubic", (function() {
            return yt
        }
        )),
        i.d(e, "easeInQuart", (function() {
            return pt
        }
        )),
        i.d(e, "easeOutQuart", (function() {
            return vt
        }
        )),
        i.d(e, "easeInOutQuart", (function() {
            return mt
        }
        )),
        i.d(e, "easeInSine", (function() {
            return gt
        }
        )),
        i.d(e, "easeOutSine", (function() {
            return xt
        }
        )),
        i.d(e, "easeInOutSine", (function() {
            return _t
        }
        )),
        i.d(e, "easeInExpo", (function() {
            return bt
        }
        )),
        i.d(e, "easeOutExpo", (function() {
            return zt
        }
        )),
        i.d(e, "easeInOutExpo", (function() {
            return wt
        }
        )),
        i.d(e, "easeInCirc", (function() {
            return kt
        }
        )),
        i.d(e, "easeOutCirc", (function() {
            return Mt
        }
        )),
        i.d(e, "easeInOutCirc", (function() {
            return Et
        }
        )),
        i.d(e, "easeInBack", (function() {
            return Ot
        }
        )),
        i.d(e, "easeOutBack", (function() {
            return Pt
        }
        )),
        i.d(e, "easeInOutBack", (function() {
            return St
        }
        )),
        i.d(e, "setEasingByName", (function() {
            return Tt
        }
        )),
        i.d(e, "getEasingByName", (function() {
            return At
        }
        )),
        i.d(e, "FollowEmitter", (function() {
            return wn
        }
        )),
        i.d(e, "Emitter", (function() {
            return Yi
        }
        )),
        i.d(e, "Body", (function() {
            return Ue
        }
        )),
        i.d(e, "BodySprite", (function() {
            return ti
        }
        )),
        i.d(e, "InitializerUtil", (function() {
            return ii
        }
        )),
        i.d(e, "Life", (function() {
            return ni
        }
        )),
        i.d(e, "Mass", (function() {
            return ri
        }
        )),
        i.d(e, "Position", (function() {
            return Oi
        }
        )),
        i.d(e, "Radius", (function() {
            return Pi
        }
        )),
        i.d(e, "Rate", (function() {
            return Si
        }
        )),
        i.d(e, "Texture", (function() {
            return ji
        }
        )),
        i.d(e, "VectorVelocity", (function() {
            return Ii
        }
        )),
        i.d(e, "PolarVelocity", (function() {
            return Ri
        }
        )),
        i.d(e, "RadialVelocity", (function() {
            return Bi
        }
        )),
        i.d(e, "ArraySpan", (function() {
            return Ee
        }
        )),
        i.d(e, "createArraySpan", (function() {
            return Oe
        }
        )),
        i.d(e, "ColorSpan", (function() {
            return Pe
        }
        )),
        i.d(e, "createColorSpan", (function() {
            return Se
        }
        )),
        i.d(e, "Box", (function() {
            return Te
        }
        )),
        i.d(e, "integrate", (function() {
            return Ce
        }
        )),
        i.d(e, "MathUtils", (function() {
            return ve
        }
        )),
        i.d(e, "Polar3D", (function() {
            return Be
        }
        )),
        i.d(e, "Span", (function() {
            return ze
        }
        )),
        i.d(e, "createSpan", (function() {
            return we
        }
        )),
        i.d(e, "Vector3D", (function() {
            return Re
        }
        )),
        i.d(e, "INTEGRATION_TYPE_EULER", (function() {
            return Ae
        }
        )),
        i.d(e, "INTEGRATION_TYPE_RK2", (function() {
            return "RUNGE_KUTTA_2"
        }
        )),
        i.d(e, "INTEGRATION_TYPE_RK4", (function() {
            return "RUNGE_KUTTA_4"
        }
        )),
        i.d(e, "INTEGRATION_TYPE_VERLET", (function() {
            return "VERLET"
        }
        )),
        i.d(e, "CustomRenderer", (function() {
            return Mn
        }
        )),
        i.d(e, "MeshRenderer", (function() {
            return En
        }
        )),
        i.d(e, "PointsRenderer", (function() {
            return On
        }
        )),
        i.d(e, "SpriteRenderer", (function() {
            return Pn
        }
        )),
        i.d(e, "ColorUtil", (function() {
            return Kt
        }
        )),
        i.d(e, "PUID", (function() {
            return Wt
        }
        )),
        i.d(e, "THREEUtil", (function() {
            return re
        }
        )),
        i.d(e, "Util", (function() {
            return oe
        }
        )),
        i.d(e, "uid", (function() {
            return ae
        }
        )),
        i.d(e, "withDefaults", (function() {
            return he
        }
        )),
        i.d(e, "BoxZone", (function() {
            return yi
        }
        )),
        i.d(e, "LineZone", (function() {
            return pi
        }
        )),
        i.d(e, "MeshZone", (function() {
            return vi
        }
        )),
        i.d(e, "PointZone", (function() {
            return mi
        }
        )),
        i.d(e, "ScreenZone", (function() {
            return gi
        }
        )),
        i.d(e, "SphereZone", (function() {
            return Mi
        }
        )),
        i.d(e, "System", (function() {
            return _n
        }
        )),
        i.d(e, "Particle", (function() {
            return Fe
        }
        )),
        i.d(e, "Pool", (function() {
            return Ze
        }
        ));
        e.default = _n
    }
    ])
}
));
//# sourceMappingURL=three-nebula.js.map
