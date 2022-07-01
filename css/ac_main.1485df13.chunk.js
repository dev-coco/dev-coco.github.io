(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([
  [0], {
    103: function(e, t, r) {},
    104: function(e, t, r) {},
    111: function(e, t, r) {},
    116: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r.n(n),
        o = r(31),
        c = r.n(o),
        i = (r(103), r(104), r(141)),
        s = r(90),
        l = r(153),
        d = r(1);

      function u(e) {
        var t = e.children,
          r = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light",
          a = Object(n.useMemo)((function() {
            return Object(s.a)({
              palette: {
                mode: r
              }
            })
          }), [r]);
        return Object(d.jsx)(l.a, {
          theme: a,
          children: t
        })
      }
      var j = r(154),
        b = r(89),
        h = r(13),
        m = r(157),
        g = r(155),
        p = r(156),
        f = r(148),
        x = r(82),
        O = r.n(x),
        v = Object(f.a)((function(e) {
          return {
            root: {
              margin: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }
          }
        }));

      function w() {
        var e = v();
        return Object(d.jsxs)(g.a, {
          align: "center",
          className: e.root,
          color: "textSecondary",
          children: [Object(d.jsx)(O.a, {}), "Tip: 为你的夏日带去清凉！"]
        })
      }
      var y = r(30),
        k = r(158),
        C = r(87),
        S = r.n(C),
        N = r(88),
        I = r.n(N),
        T = r(85),
        B = r.n(T),
        L = r(84),
        E = r.n(L),
        R = r(86),
        W = r.n(R),
        A = r(58),
        M = r(51),
        D = function() {
          return Object(M.b)()
        },
        F = M.c,
        P = r(41),
        J = Object(P.b)({
          name: "toast",
          initialState: {
            open: !1,
            message: ""
          },
          reducers: {
            setMessage: function(e, t) {
              e.message = t.payload
            },
            setOpen: function(e, t) {
              e.open = t.payload
            }
          }
        }),
        U = J.actions,
        V = U.setMessage,
        _ = U.setOpen,
        q = J.reducer,
        Y = {
          status: "ac-status",
          mode: "ac-mode",
          temperature: "ac-temperature"
        },
        z = {
          status: !1,
          mode: localStorage.getItem(Y.mode) || "cold",
          temperature: parseInt(localStorage.getItem(Y.temperature) || "") || 26
        },
        G = Object(P.b)({
          name: "ac",
          initialState: z,
          reducers: {
            setStatus: function(e, t) {
              e.status = t.payload
            },
            setTemperature: function(e, t) {
              e.temperature = t.payload
            },
            increment: function(e) {
              e.temperature += 1, localStorage.setItem(Y.temperature, e.temperature.toString())
            },
            decrement: function(e) {
              e.temperature -= 1, localStorage.setItem(Y.temperature, e.temperature.toString())
            },
            setMode: function(e, t) {
              e.mode = t.payload, localStorage.setItem(Y.mode, e.mode)
            },
            toggleStatus: function(e) {
              e.status = !e.status, localStorage.setItem(Y.status, e.status.toString())
            }
          }
        }),
        H = function(e) {
          return e.ac.temperature
        },
        $ = G.actions,
        K = $.setTemperature,
        Q = $.increment,
        X = $.decrement,
        Z = $.setMode,
        ee = $.toggleStatus,
        te = $.setStatus,
        re = function(e) {
          return function(t, r) {
            t(Z(e));
            var n = H(r()),
              a = function(e, t) {
                return "建议将空调的制".concat("cold" === e ? "冷" : "热", "温度调至 ").concat(t, " 度以").concat("cold" === e ? "上" : "下", "，为节能减排贡献一份力量！")
              };
            "cold" === e && n < 26 ? (t(V(a("cold", 26))), t(_(!0))) : "hot" === e && n > 20 && (t(V(a("hot", 20))), t(_(!0)))
          }
        },
        ne = G.reducer;

      function ae(e) {
        return "https://dev-coco.github.io/" + e
      }
      var oe, ce, ie, se = Object(f.a)((function(e) {
        return {
          margin: {
            margin: 8
          }
        }
      }));

      function le(e) {
        return Object(d.jsx)(k.a, Object(y.a)(Object(y.a)({}, e), {}, {
          onClick: function() {
            ! function() {
              var e = document.getElementById("di");
              e && e.play()
            }(), e.onClick()
          }
        }))
      }

      function de() {
        var e = document.getElementById("ac-work");
        e.load(), e.play(), oe = setTimeout((function() {
          ! function() {
            var e = document.getElementById("air-extractor-fan");
            e.load(), e.play(), ce = setTimeout((function() {
              ie = setInterval((function() {
                e.currentTime = 2
              }), 56e3)
            }), 2e3)
          }()
        }), 8e3)
      }
      var ue = Object(s.a)({
          palette: {
            primary: A.a
          }
        }),
        je = ae("other/di.m4a"),
        be = ae("other/ac-work.m4a"),
        he = ae("other/air-extractor-fan.m4a");

      function me() {
        var e = se(),
          t = F((function(e) {
            return e.ac
          })),
          r = D();
        return Object(d.jsxs)(p.a, {
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          children: [Object(d.jsx)("audio", {
            id: "di",
            src: je,
            preload: "auto"
          }), Object(d.jsx)("audio", {
            id: "ac-work",
            src: be,
            preload: "auto"
          }), Object(d.jsx)("audio", {
            id: "air-extractor-fan",
            src: he,
            preload: "auto"
          }), Object(d.jsxs)("div", {
            children: [" ", Object(d.jsx)(le, {
              color: "primary",
              "aria-label": "cold",
              className: e.margin,
              onClick: function() {
                r(re("cold"))
              },
              children: Object(d.jsx)(E.a, {})
            }), Object(d.jsx)(l.a, {
              theme: ue,
              children: Object(d.jsx)(le, {
                color: t.status ? "secondary" : "primary",
                "aria-label": "add",
                className: e.margin,
                onClick: function() {
                  ! function(e, t) {
                    if (e) {
                      document.getElementById("ac-work").load();
                      var r = document.getElementById("air-extractor-fan");
                      oe && clearTimeout(oe), ce && clearTimeout(ce), ie && clearInterval(ie), r.currentTime = 58
                    } else de();
                    t(ee())
                  }(t.status, r)
                },
                style: {
                  color: "white"
                },
                children: Object(d.jsx)(B.a, {})
              })
            }), Object(d.jsx)(le, {
              "aria-label": "hot",
              className: e.margin,
              style: {
                backgroundColor: "orange",
                color: "white"
              },
              onClick: function() {
                r(re("hot"))
              },
              children: Object(d.jsx)(W.a, {})
            })]
          }), Object(d.jsx)(le, {
            "aria-label": "add",
            className: e.margin,
            onClick: function() {
              r((function(e, t) {
                H(t()) < 31 ? e(Q()) : (e(V("已经是最大温度啦！")), e(_(!0)))
              }))
            },
            children: Object(d.jsx)(S.a, {})
          }), Object(d.jsx)(le, {
            "aria-label": "reduce",
            className: e.margin,
            onClick: function() {
              r((function(e, t) {
                H(t()) > 16 ? e(X()) : (e(V("已经是最小温度啦！")), e(_(!0)))
              }))
            },
            children: Object(d.jsx)(I.a, {})
          })]
        })
      }
      var ge = r(14),
        pe = r(152),
        fe = r(147),
        xe = "https://dev-coco.github.io/images/ac_logo.svg",
       //  Oe = r(34),
        ve = (r(111), "#e0e0e0"),
        we = "#cccccc",
        ye = "#bbbbbb",
        ke = Object(f.a)((function(e) {
          return {
            acBorder: {
              borderRadius: 10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20
            },
            acDisplay: {
              textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)"
            },
            acLogo: {
              width: 12
            },
            acStatus: {
              backgroundColor: function(e) {
                return e.backgroundColor || "transparent"
              }
            },
            energyLabel: {
              backgroundColor: "#4ea5f5"
            }
          }
        }));

      function Ce(e) {
        return Object(d.jsx)(p.a, Object(y.a)({
          bgcolor: "background.paper",
          height: 150,
          border: 1,
          borderColor: ve,
          borderRadius: 10,
          boxShadow: 3,
          position: "relative"
        }, e))
      }

      function Se() {
        var e = F(H);
        return Object(d.jsxs)(g.a, {
          variant: "h4",
          align: "center",
          children: [Object(d.jsx)("span", {
            className: "font-digit ac-temperature",
            children: e
          }), Object(d.jsx)("small", {
            className: "font-digit",
            children: "°C"
          })]
        })
      }
      var Ne = a.a.forwardRef((function(e, t) {
        return Object(d.jsxs)(p.a, Object(y.a)(Object(y.a)({}, e), {}, {
          ref: t,
          position: "absolute",
          top: 25,
          right: 30,
          color: we,
          children: [Object(d.jsxs)(g.a, {
            align: "left",
            variant: "subtitle2",
            children: [Object(d.jsx)("span", {
              children: "cold" === e.mode ? "❄" : "☀️"
            }), "\ufe0f\ufe0f"]
          }), Object(d.jsx)(Se, {})]
        }))
      }));

      function Ie(e) {
        return Object(d.jsx)(p.a, {
          textAlign: "center",
          mt: 12,
          children: Object(d.jsx)("a", {
            href: '',// Oe.repository.url,
            title: '',//Oe.description,
            target: "_blank",
            rel: "noreferrer noopener",
            children: Object(d.jsx)("img", {
              className: e.className,
              src: xe,
              alt: "logo"
            })
          })
        })
      }

      function Te() {
        return Object(d.jsx)(p.a, {
          mt: 1,
          border: 1,
          borderColor: ve
        })
      }

      function Be(e) {
        var t = {
            backgroundColor: e.status ? "#38F709" : ve
          },
          r = ke(t);
        return Object(d.jsx)(p.a, {
          className: r.acStatus,
          position: "absolute",
          height: 4,
          width: 4,
          borderRadius: "50%",
          top: 130,
          right: 10
        })
      }

      function Le(e, t, r, n) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          o = Object(ge.a)(new Array(e).keys()),
          c = o.map((function(e) {
            return Object(d.jsx)(p.a, {
              mx: n,
              my: a,
              width: r,
              height: r,
              borderRadius: "50%",
              bgcolor: t
            }, e)
          }));
        return Object(d.jsx)(p.a, {
          display: "flex",
          justifyContent: "center",
          children: c
        })
      }

      function Ee(e) {
        return Object(d.jsxs)(p.a, {
          className: e.className,
          position: "absolute",
          top: 10,
          left: 10,
          height: 70,
          width: 50,
          borderRadius: 1,
          p: .5,
          children: [Le(6, "white", 4, .25), Object(d.jsxs)(p.a, {
            my: .5,
            px: 1,
            py: .25,
            height: 28,
            width: "100%",
            bgcolor: "background.paper",
            children: [Object(d.jsxs)(pe.a, {
              container: !0,
              children: [Object(d.jsx)(p.a, {
                bgcolor: "green",
                height: 3,
                width: "40%"
              }), Object(d.jsx)(p.a, {
                height: 3,
                marginLeft: "40%",
                style: {
                  borderTop: 1.5,
                  borderRight: 2,
                  borderBottom: 1.5,
                  borderLeft: 0,
                  borderTopColor: "transparent",
                  borderRightColor: "green",
                  borderBottomColor: "transparent",
                  borderLeftColor: "transparent",
                  borderStyle: "solid"
                }
              }), Object(d.jsx)(p.a, {
                bgcolor: "green",
                height: 3,
                width: "10%"
              })]
            }), Object(d.jsx)(p.a, {
              mt: .25,
              bgcolor: "lightGreen",
              height: 3,
              width: "50%"
            }), Object(d.jsx)(p.a, {
              mt: .25,
              bgcolor: "#ffc107",
              height: 3,
              width: "60%"
            }), Object(d.jsx)(p.a, {
              mt: .25,
              bgcolor: "orange",
              height: 3,
              width: "70%"
            }), Object(d.jsx)(p.a, {
              mt: .25,
              bgcolor: "red",
              height: 3,
              width: "80%"
            })]
          }), Object(d.jsxs)(p.a, {
            mb: .25,
            pt: .1,
            height: 20,
            width: "100%",
            bgcolor: "background.paper",
            children: [Le(11, "black", 2, .1, .25), Object(d.jsx)(p.a, {
              my: .1,
              borderTop: 1,
              height: 0,
              width: "100%"
            }), Le(9, "black", 1.5, .1, .25), Le(10, "black", 1.2, .1, 0)]
          }), Le(8, "white", 2, .1)]
        })
      }
      var Re = a.a.forwardRef((function(e, t) {
        return Object(d.jsxs)(p.a, Object(y.a)(Object(y.a)({}, e), {}, {
          ref: t,
          mt: 3,
          display: "flex",
          justifyContent: "center",
          children: [Object(d.jsx)(p.a, {
            style: {
              transform: "rotate(10deg)"
            },
            bgcolor: ye,
            width: 5,
            height: 40
          }), Object(d.jsx)(p.a, {
            mx: 10,
            bgcolor: ye,
            width: 5,
            height: 40
          }), Object(d.jsx)(p.a, {
            style: {
              transform: "rotate(-10deg)"
            },
            bgcolor: ye,
            width: 5,
            height: 40
          })]
        }))
      }));

      function We(e) {
        var t = ke(e);
        return Object(d.jsxs)(p.a, {
          children: [Object(d.jsxs)(Ce, {
            className: t.acBorder,
            children: [Object(d.jsx)(fe.a, {
              in: e.status,
              children: Object(d.jsx)(Ne, {
                mode: e.mode
              })
            }), Object(d.jsx)(Ie, {
              className: t.acLogo
            }), Object(d.jsx)(Te, {}), Object(d.jsx)(Be, {
              status: e.status
            }), Object(d.jsx)(Ee, {
              className: t.energyLabel,
              titleLength: 6
            })]
          }), Object(d.jsx)(fe.a, {
            in: e.status,
            timeout: {
              enter: 2500,
              exit: 1500
            },
            children: Object(d.jsx)(Re, {})
          })]
        })
      }
      var Ae = r(151),
        Me = r(149);

      function De() {
        var e = F((function(e) {
            return e.toast
          })),
          t = D(),
          r = function(e, r) {
            t(_(!1))
          };
        return Object(d.jsx)(Ae.a, {
          open: e.open,
          autoHideDuration: 5e3,
          onClose: r,
          children: Object(d.jsx)(Me.a, {
            onClose: r,
            severity: "error",
            style: {
              width: "100%"
            },
            children: e.message
          })
        })
      }

      function Fe() {
        var e = D();
        Object(n.useEffect)((function() {
          function t(t) {
            switch (t.key) {
              case Y.status:
                e(te("true" === t.newValue));
                break;
              case Y.temperature:
                e(K(parseInt(t.newValue || "20")));
                break;
              case Y.mode:
                e(Z(t.newValue || "cold"))
            }
          }
          return window.addEventListener("storage", t),
            function() {
              window.removeEventListener("storage", t)
            }
        }), [e])
      }
      var Pe = function() {
        var e = F((function(e) {
          return e.ac
        }));
        return Fe(), Object(d.jsx)(u, {
          children: Object(d.jsxs)(j.a, {
            maxWidth: "sm",
            className: e.status ? "hot" === e.mode ? "hot-color" : "cold-color" : "",
            children: [Object(d.jsxs)(p.a, {
              sx: {
                pt: 4
              },
              bgcolor: "transparent",
              children: [Object(d.jsx)(g.a, {
                color: "textPrimary",
                align: "center",
                variant: "h4",
                component: "h1",
                gutterBottom: !0,
                children: "便携小空调"
              }), Object(d.jsx)(w, {}), Object(d.jsx)(We, {
                status: e.status,
                temperature: e.temperature,
                mode: e.mode
              }), Object(d.jsx)(me, {})]
            }), Object(d.jsx)(De, {})]
          })
        })
      };

      function Je() {
        return Fe(), Object(d.jsx)("div", {
          children: Object(d.jsx)(me, {})
        })
      }

      function Ue(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#0078E7",
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "☁️";
        console.log("%c ".concat(n, " ").concat(e, " %c ").concat(t), "color: white; background: ".concat(r, "; padding:5px 0;"), "padding:4px;border:1px solid ".concat(r, ";"))
      }
      var Ve = function() {
          return Object(n.useEffect)((function() {
         //   Ue(Oe.name, Oe.repository.url), Ue("@" + Oe.author.name, Oe.author.url)
          }), []), Object(d.jsx)(u, {
            children: Object(d.jsx)(j.a, {
              maxWidth: "sm",
              children: Object(d.jsx)(b.a, {
                children: Object(d.jsxs)(h.c, {
                  children: [Object(d.jsx)(h.a, {
                    path: "/rc",
                    children: Object(d.jsx)(Je, {})
                  }), Object(d.jsx)(h.a, {
                    path: "/",
                    children: Object(d.jsx)(Pe, {})
                  })]
                })
              })
            })
          })
        },
        _e = Object(P.a)({
          reducer: {
            ac: ne,
            toast: q
          }
        }),
        qe = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

      function Ye(e, t) {
        /*
        navigator.serviceWorker.register(e).then((function(e) {
          e.onupdatefound = function() {
            var r = e.installing;
            null != r && (r.onstatechange = function() {
              "installed" === r.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
            })
          }
        })).catch((function(e) {
          console.error("Error during service worker registration:", e)
        }))
        */
      }
      var ze = function(e) {
          e && e instanceof Function && r.e(3).then(r.bind(null, 160)).then((function(t) {
            var r = t.getCLS,
              n = t.getFID,
              a = t.getFCP,
              o = t.getLCP,
              c = t.getTTFB;
            r(e), n(e), a(e), o(e), c(e)
          }))
        },
        Ge = r(72);
      Ge.a.pageview(window.location.pathname + window.location.search), c.a.render(Object(d.jsx)(a.a.StrictMode, {
          children: Object(d.jsx)(M.a, {
            store: _e,
            children: Object(d.jsx)(Ve, {})
          })
        }), document.getElementById("root")),
        function(e) {
          if ("serviceWorker" in navigator) {
            if (new URL(".", window.location.href).origin !== window.location.origin) return;
            window.addEventListener("load", (function() {
              var t = "".concat(".", "/service-worker.js");
              qe ? (! function(e, t) {
                fetch(e, {
                  headers: {
                    "Service-Worker": "script"
                  }
                }).then((function(r) {
                  var n = r.headers.get("content-type");
                  404 === r.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                    e.unregister().then((function() {
                      window.location.reload()
                    }))
                  })) : ''// Ye(e, t)
                })).catch((function() {
                  console.log("No internet connection found. App is running in offline mode.")
                }))
              }(t, e), navigator.serviceWorker.ready.then((function() {
                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
              }))) : ''// Ye(t, e)
            }))
          }
        }(), ze()
    }
  },
  [
    [116, 1, 2]
  ]
]);
