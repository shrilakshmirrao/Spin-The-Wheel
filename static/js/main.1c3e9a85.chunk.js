(this["webpackJsonpspin-the-wheel"] =
  this["webpackJsonpspin-the-wheel"] || []).push([
  [0],
  {
    59: function (n, e, t) {},
    60: function (n, e, t) {},
    69: function (n, e, t) {
      "use strict";
      t.r(e), (e.default = t.p + "static/media/spinWheel.e5bae901.mp3");
    },
    71: function (n, e, t) {
      "use strict";
      t.r(e);
      var a,
        o,
        r,
        i,
        c,
        s,
        l,
        d,
        u,
        b,
        h,
        p,
        g,
        f,
        m,
        v,
        j = t(0),
        x = t.n(j),
        O = t(41),
        w = t.n(O),
        k = (t(59), t(9)),
        y = t(6),
        S = t(37),
        z = t(7),
        C = (t(60), t(10)),
        M = t(2),
        L = function (n) {
          var e = n.val,
            t = n.index,
            a = n.color;
          return Object(M.jsx)(I, {
            index: t,
            color: a,
            val: e,
            children: Object(M.jsx)(N, { children: e }),
          });
        },
        I = C.a.div(
          a ||
            (a = Object(k.a)([
              "\n    position: absolute;\n    top: 43.8%;\n    left: 0.2%;\n    /* width: 30vh;\n    height: 5vh; */\n    transform-origin: center right;\n    border-left: 30vh solid ",
              ";\n    border-top: 4vh solid transparent;\n    border-bottom: 4vh solid transparent;\n    border-right: none;\n    box-sizing: border-box;\n    transform: rotate(",
              "deg);\n    padding-left: 3%;\n    font-size: 2vh;\n    line-height: 0;\n",
            ])),
          function (n) {
            return n.color;
          },
          function (n) {
            return 15 * n.index;
          }
        ),
        N = C.a.div(
          o ||
            (o = Object(k.a)([
              "\n    position: absolute;\n    right: 10vh;\n    text-align: left;\n    width: 20vh;\n    user-select: none;\n    font-weight: 700;\n",
            ]))
        ),
        T = t(92),
        A = t(90),
        J = t(44),
        V = t.n(J),
        F = t(47),
        B = t.n(F),
        D = function (n) {
          var e = n.volume,
            t = n.setVolume,
            a = n.spin,
            o = n.openMenu;
          return Object(M.jsxs)(E, {
            openMenu: o,
            children: [
              Object(M.jsx)(P, { children: "Volume" }),
              Object(M.jsxs)(T.a, {
                spacing: 2,
                direction: "row",
                sx: { mb: 1 },
                alignItems: "center",
                children: [
                  Object(M.jsx)(V.a, {}),
                  Object(M.jsx)(A.a, {
                    "aria-label": "Volume",
                    value: e,
                    onChange: function (n, a) {
                      t(a), localStorage.setItem("volume", JSON.stringify(e));
                    },
                    disabled: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    getAriaValueText: function (n) {
                      return "".concat(n);
                    },
                  }),
                  Object(M.jsx)(B.a, {}),
                ],
              }),
            ],
          });
        },
        E = C.a.div(
          r ||
            (r = Object(k.a)([
              "\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-color: #ffffffc8;\n    width: 200px;\n    max-width: 50vw;\n    padding: 0.3rem 1rem;\n    z-index: 3;\n    transition: transform .2s linear;\n    transform: translateX(",
              "px);\n",
            ])),
          function (n) {
            return n.openMenu ? 0 : 200;
          }
        ),
        P = C.a.span(
          i ||
            (i = Object(k.a)([
              "\n    font-size: 0.8rem;\n    margin-left: 1rem;\n",
            ]))
        ),
        R = [
          [
            [7.5, 22.5],
            [37.5, 52.5],
            [67.5, 82.5],
            [97.5, 112.5],
            [127.5, 142.5],
            [157.5, 172.5],
            [187.5, 202.5],
            [217.5, 232.5],
            [247.5, 262.5],
            [277.5, 292.5],
            [307.5, 322.5],
            [337.5, 352.5],
          ],
          [
            [0, 7.5],
            [52.5, 67.5],
            [112.5, 127.5],
            [172.5, 187.5],
            [232.5, 247.5],
            [292.5, 307.5],
            [352.5, 360],
          ],
          [
            [22.5, 37.5],
            [142.5, 157.5],
            [262.5, 277.5],
          ],
          [
            [202.5, 217.5],
            [322.5, 337.5],
          ],
          [[82.5, 97.5]],
        ],
        U = t(48),
        Y = t.n(U),
        q = t(49),
        G = t.n(q),
        W = function () {
          var n = Object(j.useState)(0),
            e = Object(z.a)(n, 2),
            a = e[0],
            o = e[1],
            r = Object(j.useState)(0),
            i = Object(z.a)(r, 2),
            c = i[0],
            s = i[1],
            l = Object(j.useState)(!1),
            d = Object(z.a)(l, 2),
            u = d[0],
            b = d[1],
            h = Object(j.useState)(!1),
            p = Object(z.a)(h, 2),
            g = p[0],
            f = p[1],
            m = Object(j.useState)(!1),
            v = Object(z.a)(m, 2),
            x = v[0],
            O = v[1],
            w = Object(j.useState)(""),
            k = Object(z.a)(w, 2),
            C = k[0],
            I = k[1],
            N = new Audio(t(69).default),
            T = localStorage.getItem("volume"),
            A = Object(j.useState)(Number(T) || 0.5),
            J = Object(z.a)(A, 2),
            V = J[0],
            F = J[1],
            B = JSON.parse(localStorage.getItem("options") || "{}"),
            E = Object(j.useState)({
              val1: B.val1 || "Pop it",
              val2: B.val2 || "Sccop it up",
              val3: B.val3 || "Biscuit Dash",
              val4: B.val4 || "Bubble Hop",
              val5: B.val5 || "Blown Away",
            }),
            P = Object(z.a)(E, 2),
            U = P[0],
            q = P[1],
            W = new Array(24).fill(""),
            rn = function (n) {
              q(
                Object(S.a)(
                  Object(S.a)({}, U),
                  {},
                  Object(y.a)({}, n.target.name, n.target.value)
                )
              ),
                localStorage.setItem("options", JSON.stringify(U));
            },
            cn = function () {
              var n, e;
              o(
                ((n = 2160),
                (e = 2520),
                Math.floor(Math.random() * (e - n) + n))
              );
            };
          return Object(M.jsxs)(X, {
            children: [
              Object(M.jsxs)(_, {
                children: [
                  Object(M.jsx)(H, {}),
                  Object(M.jsx)(K, {
                    degrees: c,
                    random: a,
                    className: u ? "spin" : "",
                    children: W.map(function (n, e) {
                      return Object(M.jsx)(
                        L,
                        {
                          index: e,
                          val:
                            e % 2
                              ? U.val1
                              : e % 4
                              ? U.val2
                              : e % 4 === 0 && e % 8 !== 0
                              ? U.val3
                              : e % 8 === 0 && 0 !== e && e % 24 !== 0
                              ? U.val4
                              : 0 === e
                              ? U.val5
                              : "",
                          color:
                            e % 2
                              ? "khaki"
                              : e % 4
                              ? "mediumseagreen"
                              : e % 4 === 0 && e % 8 !== 0
                              ? "cornflowerblue"
                              : e % 8 === 0 && 0 !== e && e % 24 !== 0
                              ? "mediumorchid"
                              : 0 === e
                              ? "coral"
                              : "",
                        },
                        e
                      );
                    }),
                  }),
                  Object(M.jsx)(Q, {
                    spin: u,
                    onMouseDown: function () {
                      f(!0), cn();
                    },
                    onMouseUp: function () {
                      b(!0),
                        f(!1),
                        N.play(),
                        (N.volume = V),
                        setTimeout(function () {
                          b(!1),
                            s(c + a),
                            I(
                              (function (n) {
                                for (var e = 0; e < R.length; e++)
                                  for (var t = 0; t < R[e].length; t++)
                                    if (n > R[e][t][0] && n < R[e][t][1])
                                      return 0 === e
                                        ? U.val1
                                        : 1 === e
                                        ? U.val2
                                        : 2 === e
                                        ? U.val3
                                        : 3 === e
                                        ? U.val4
                                        : U.val5;
                              })((c + a) % 360)
                            ),
                            o(0);
                        }, 16e3);
                    },
                    children: Object(M.jsxs)(Z, {
                      active: g,
                      children: [
                        Object(M.jsx)($, { spin: u }),
                        Object(M.jsx)(nn, { spin: u }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(M.jsxs)(en, {
                openMenu: x,
                children: [
                  Object(M.jsx)("span", { children: "Common" }),
                  Object(M.jsx)(tn, {
                    type: "text",
                    disabled: u,
                    maxLength: 13,
                    value: U.val1,
                    spellCheck: !1,
                    onChange: rn,
                    name: "val1",
                  }),
                  Object(M.jsx)("span", { children: "Uncommon" }),
                  Object(M.jsx)(tn, {
                    type: "text",
                    disabled: u,
                    maxLength: 13,
                    value: U.val2,
                    spellCheck: !1,
                    onChange: rn,
                    name: "val2",
                  }),
                  Object(M.jsx)("span", { children: "Rare" }),
                  Object(M.jsx)(tn, {
                    type: "text",
                    disabled: u,
                    maxLength: 13,
                    value: U.val3,
                    spellCheck: !1,
                    onChange: rn,
                    name: "val3",
                  }),
                  Object(M.jsx)("span", { children: "Epic" }),
                  Object(M.jsx)(tn, {
                    type: "text",
                    disabled: u,
                    maxLength: 13,
                    value: U.val4,
                    spellCheck: !1,
                    onChange: rn,
                    name: "val4",
                  }),
                  Object(M.jsx)("span", { children: "Legendary" }),
                  Object(M.jsx)(tn, {
                    type: "text",
                    disabled: u,
                    maxLength: 13,
                    value: U.val5,
                    spellCheck: !1,
                    onChange: rn,
                    name: "val5",
                  }),
                  Object(M.jsx)(Y.a, {
                    onClick: function () {
                      return O(!x);
                    },
                  }),
                ],
              }),
              Object(M.jsx)(D, {
                volume: V,
                setVolume: F,
                spin: u,
                openMenu: x,
              }),
              Object(M.jsx)(an, {
                children: Object(M.jsx)("p", {
                  className: u ? "" : "textAnim",
                  children: C,
                }),
              }),
              Object(M.jsxs)(on, {
                href: "https://twitter.com/codmitu",
                target: "_blank",
                children: [Object(M.jsx)(G.a, {}), " @codmitu"],
              }),
            ],
          });
        },
        X = C.a.div(
          c ||
            (c = Object(k.a)([
              "\n  display: grid;\n  place-content: center;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n",
            ]))
        ),
        _ = C.a.div(
          s ||
            (s = Object(k.a)([
              "\n  position: relative;\n  z-index: 1;\n  width: 66vh;\n  height: 66vh;\n  @media screen and (max-width: 800px) {\n    transform: scale(0.8);\n  }\n  @media screen and (max-width: 617px) {\n    transform: scale(0.6);\n  }\n",
            ]))
        ),
        H = C.a.div(
          l ||
            (l = Object(k.a)([
              "\n  position: absolute;\n  z-index: 12;\n  width: 7%;\n  height: 7%;\n  top: -1vh;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 50%, 50% 100%, 0 50%);\n  background-image: linear-gradient(to bottom,  cyan, blue);\n",
            ]))
        ),
        K = C.a.div(
          d ||
            (d = Object(k.a)([
              "\n  transform:  rotate(",
              "deg);\n  background-image: radial-gradient(darkgray 0.5vh, cyan 1vh, green 2vh, darkgray 2vh);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 1vh solid darkgray;\n  outline-offset: -1vh;\n  outline: 1.2vh dotted red;\n  &.spin {\n    animation: spinning 15.5s forwards ease;\n    @keyframes spinning {\n      7% {\n        transform: rotate(",
              "deg);\n      }\n      100% {\n        transform: rotate(",
              "deg);\n      }\n    }\n  }\n  @keyframes bording {\n    0% {\n      outline: 1.2vh dotted red;\n    }\n    20% {\n      outline: 1.2vh dotted blue;\n    }\n    40% {\n      outline: 1.2vh dotted green;\n    }\n    60% {\n      outline: 1.2vh dotted purple;\n    }\n    80% {\n      outline: 1.2vh dotted orange;\n    }\n    100% {\n      outline: 1.2vh dotted yellow;\n    }\n  }\n",
            ])),
          function (n) {
            return n.degrees;
          },
          function (n) {
            return n.degrees - 15;
          },
          function (n) {
            return n.degrees + n.random;
          }
        ),
        Q = C.a.div(
          u ||
            (u = Object(k.a)([
              "\n  position: absolute;\n  width: 10vh;\n  height: 10vh;\n  z-index: -1;\n  top: 50%;\n  right: -20%;\n  transform: translate(-50%, -50%);\n  pointer-events: ",
              ";\n",
            ])),
          function (n) {
            return n.spin ? "none" : "all";
          }
        ),
        Z = C.a.div(
          b ||
            (b = Object(k.a)([
              "\n  width: 100%;\n  height: 100%;\n  transition: all ",
              "s linear;\n  transform: rotate(",
              "deg) translateY(",
              "vh);\n",
            ])),
          function (n) {
            return n.active ? 0.2 : 0.5;
          },
          function (n) {
            return n.active ? 20 : 0;
          },
          function (n) {
            return n.active ? 7 : 0;
          }
        ),
        $ = C.a.div(
          h ||
            (h = Object(k.a)([
              "\n  width: 30%;\n  height: 30%;\n  cursor: ",
              ";\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-image: ",
              ";\n  ",
            ])),
          function (n) {
            return n.spin ? "not-allowed" : "pointer";
          },
          function (n) {
            return n.spin
              ? "radial-gradient(farthest-corner at 10px 10px, white, black)"
              : "radial-gradient(farthest-corner at 10px 10px, #01da01, black)";
          }
        ),
        nn = C.a.div(
          p ||
            (p = Object(k.a)([
              "\n  cursor: ",
              ";\n  width: 5%;\n  transform: rotate(45deg);\n  transform-origin: bottom center;\n  height: 110%;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  background-image: linear-gradient(to right, white, #310000);\n",
            ])),
          function (n) {
            return n.spin ? "not-allowed" : "pointer";
          }
        ),
        en = C.a.div(
          g ||
            (g = Object(k.a)([
              "\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  max-width: 50vw;\n  position: absolute;\n  background-color: #ffffffc8;\n  padding: 20px 0;\n  z-index: 2;\n  transition: transform .2s linear;\n  transform: translateY(",
              "%);\n  >span {\n    font-weight: bold;\n    margin-left: 10px;\n  }\n  >svg {\n    margin: 0 auto -20px;\n    cursor: pointer;\n    font-size: 2rem;\n    transform: rotate(",
              "deg);\n    &:hover {\n      color: #3b3b3b;\n    }\n  }\n",
            ])),
          function (n) {
            return n.openMenu ? 0 : -93;
          },
          function (n) {
            return n.openMenu ? 180 : 0;
          }
        ),
        tn = C.a.input(
          f ||
            (f = Object(k.a)([
              "\n  margin: 10px 20px;\n  padding: 5px 10px;\n  font-size: 1.2rem;\n  color: white;\n  &:nth-child(2) {\n    background-color: #d3c96bc7;\n    outline: none;\n    border: 3px solid khaki;\n    border-radius: 10px;\n  }\n  &:nth-child(4) {\n    background-color: #3cb372b9;\n    outline: none;\n    border: 3px solid mediumseagreen;\n    border-radius: 10px;\n  }\n  &:nth-child(6) {\n    background-color: #6494edba;\n    outline: none;\n    border: 3px solid cornflowerblue;\n    border-radius: 10px;\n  }\n  &:nth-child(8) {\n    background-color: #ba55d3cf;\n    outline: none;\n    border: 3px solid mediumorchid;\n    border-radius: 10px;\n  }\n  &:nth-child(10) {\n    background-color: #ff7f50be;\n    outline: none;\n    border: 3px solid coral;\n    border-radius: 10px;\n  }\n",
            ]))
        ),
        an = C.a.div(
          m ||
            (m = Object(k.a)([
              "\n  height: 10vh;\n  width: 30vh;\n  position: absolute;\n  background-color: #ffffff;\n  border-radius: 0% 20px;\n  bottom: 0;\n  margin: 0 auto;\n  display: grid;\n  place-content: center;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 3vh;\n  box-shadow: inset 0 0 10px 0px black;\n  border: 5px solid #303030;\n  >p {\n    &.textAnim {\n      animation: texting 0.5s ease-in;\n      @keyframes texting {\n        50% {\n          font-size: 5vh;\n          color: cyan;\n        }\n        100% {\n          font-size: 3vh;\n          color: black;\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        on = C.a.a(
          v ||
            (v = Object(k.a)([
              "\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  /* color: lightgray; */\n  text-decoration: none;\n  color: #1d9bf0;\n  font-size: 0.7rem;\n  margin: 5px;\n  >svg {\n    font-size: 0.9rem;\n    margin-bottom: -3px;\n  }\n",
            ]))
        ),
        rn = function (n) {
          n &&
            n instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 93))
              .then(function (e) {
                var t = e.getCLS,
                  a = e.getFID,
                  o = e.getFCP,
                  r = e.getLCP,
                  i = e.getTTFB;
                t(n), a(n), o(n), r(n), i(n);
              });
        };
      w.a.render(
        Object(M.jsx)(x.a.StrictMode, { children: Object(M.jsx)(W, {}) }),
        document.getElementById("root")
      ),
        rn();
    },
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.1c3e9a85.chunk.js.map
