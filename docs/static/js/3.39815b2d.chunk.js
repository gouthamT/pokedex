;(window.webpackJsonppokedex = window.webpackJsonppokedex || []).push([
  [3],
  {
    35: function(n, t) {
      function e(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r)
        }
      }
      n.exports = function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n
      }
    },
    36: function(n, t, e) {
      var r = e(37),
        o = e(38)
      n.exports = function(n, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(n) : t
      }
    },
    37: function(n, t) {
      function e(n) {
        return (e =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(n) {
                return typeof n
              }
            : function(n) {
                return n &&
                  'function' === typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? 'symbol'
                  : typeof n
              })(n)
      }
      function r(t) {
        return (
          'function' === typeof Symbol && 'symbol' === e(Symbol.iterator)
            ? (n.exports = r = function(n) {
                return e(n)
              })
            : (n.exports = r = function(n) {
                return n &&
                  'function' === typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? 'symbol'
                  : e(n)
              }),
          r(t)
        )
      }
      n.exports = r
    },
    38: function(n, t) {
      n.exports = function(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return n
      }
    },
    39: function(n, t) {
      function e(t) {
        return (
          (n.exports = e = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
              }),
          e(t)
        )
      }
      n.exports = e
    },
    40: function(n, t, e) {
      var r = e(41)
      n.exports = function(n, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 }
        })),
          t && r(n, t)
      }
    },
    41: function(n, t) {
      function e(t, r) {
        return (
          (n.exports = e =
            Object.setPrototypeOf ||
            function(n, t) {
              return (n.__proto__ = t), n
            }),
          e(t, r)
        )
      }
      n.exports = e
    },
    42: function(n, t, e) {
      var r = e(43),
        o = e(44),
        i = e(45)
      n.exports = function(n) {
        return r(n) || o(n) || i()
      }
    },
    43: function(n, t) {
      n.exports = function(n) {
        if (Array.isArray(n)) {
          for (var t = 0, e = new Array(n.length); t < n.length; t++)
            e[t] = n[t]
          return e
        }
      }
    },
    44: function(n, t) {
      n.exports = function(n) {
        if (
          Symbol.iterator in Object(n) ||
          '[object Arguments]' === Object.prototype.toString.call(n)
        )
          return Array.from(n)
      }
    },
    45: function(n, t) {
      n.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      }
    },
    46: function(n, t) {
      n.exports = function(n, t) {
        if (!(n instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
    },
    47: function(n, t, e) {
      var r = e(35),
        o = e(36),
        i = e(39),
        a = e(40),
        l = e(42),
        s = e(46)
      !(function(n) {
        var t = window.webpackHotUpdate
        window.webpackHotUpdate = function(n, e) {
          !(function(n, t) {
            if (w[n] && y[n]) {
              for (var e in ((y[n] = !1), t))
                Object.prototype.hasOwnProperty.call(t, e) && (h[e] = t[e])
              0 == --b && 0 === v && _()
            }
          })(n, e),
            t && t(n, e)
        }
        var e,
          r = !0,
          o = '2cfd4e69aab50de3fca5',
          i = 1e4,
          a = {},
          l = [],
          s = []
        function c(n) {
          var t = T[n]
          if (!t) return N
          var r = function(r) {
              return (
                t.hot.active
                  ? (T[r]
                      ? -1 === T[r].parents.indexOf(n) && T[r].parents.push(n)
                      : ((l = [n]), (e = r)),
                    -1 === t.children.indexOf(r) && t.children.push(r))
                  : (console.warn(
                      '[HMR] unexpected require(' +
                        r +
                        ') from disposed module ' +
                        n
                    ),
                    (l = [])),
                N(r)
              )
            },
            o = function(n) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  return N[n]
                },
                set: function(t) {
                  N[n] = t
                }
              }
            }
          for (var i in N)
            Object.prototype.hasOwnProperty.call(N, i) &&
              'e' !== i &&
              't' !== i &&
              Object.defineProperty(r, i, o(i))
          return (
            (r.e = function(n) {
              return (
                'ready' === f && p('prepare'),
                v++,
                N.e(n).then(t, function(n) {
                  throw (t(), n)
                })
              )
              function t() {
                v--,
                  'prepare' === f && (x[n] || E(n), 0 === v && 0 === b && _())
              }
            }),
            (r.t = function(n, t) {
              return 1 & t && (n = r(n)), N.t(n, -2 & t)
            }),
            r
          )
        }
        function u(n) {
          var t = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: e !== n,
            active: !0,
            accept: function(n, e) {
              if (void 0 === n) t._selfAccepted = !0
              else if ('function' == typeof n) t._selfAccepted = n
              else if ('object' == typeof n)
                for (var r = 0; r < n.length; r++)
                  t._acceptedDependencies[n[r]] = e || function() {}
              else t._acceptedDependencies[n] = e || function() {}
            },
            decline: function(n) {
              if (void 0 === n) t._selfDeclined = !0
              else if ('object' == typeof n)
                for (var e = 0; e < n.length; e++)
                  t._declinedDependencies[n[e]] = !0
              else t._declinedDependencies[n] = !0
            },
            dispose: function(n) {
              t._disposeHandlers.push(n)
            },
            addDisposeHandler: function(n) {
              t._disposeHandlers.push(n)
            },
            removeDisposeHandler: function(n) {
              var e = t._disposeHandlers.indexOf(n)
              e >= 0 && t._disposeHandlers.splice(e, 1)
            },
            check: M,
            apply: S,
            status: function(n) {
              if (!n) return f
              d.push(n)
            },
            addStatusHandler: function(n) {
              d.push(n)
            },
            removeStatusHandler: function(n) {
              var t = d.indexOf(n)
              t >= 0 && d.splice(t, 1)
            },
            data: a[n]
          }
          return (e = void 0), t
        }
        var d = [],
          f = 'idle'
        function p(n) {
          f = n
          for (var t = 0; t < d.length; t++) d[t].call(null, n)
        }
        var m,
          h,
          g,
          b = 0,
          v = 0,
          x = {},
          y = {},
          w = {}
        function k(n) {
          return +n + '' === n ? +n : n
        }
        function M(n) {
          if ('idle' !== f)
            throw new Error('check() is only allowed in idle status')
          return (
            (r = n),
            p('check'),
            ((t = i),
            (t = t || 1e4),
            new Promise(function(n, e) {
              if ('undefined' == typeof XMLHttpRequest)
                return e(new Error('No browser support'))
              try {
                var r = new XMLHttpRequest(),
                  i = N.p + '' + o + '.hot-update.json'
                r.open('GET', i, !0), (r.timeout = t), r.send(null)
              } catch (n) {
                return e(n)
              }
              r.onreadystatechange = function() {
                if (4 === r.readyState)
                  if (0 === r.status)
                    e(new Error('Manifest request to ' + i + ' timed out.'))
                  else if (404 === r.status) n()
                  else if (200 !== r.status && 304 !== r.status)
                    e(new Error('Manifest request to ' + i + ' failed.'))
                  else {
                    try {
                      var t = JSON.parse(r.responseText)
                    } catch (n) {
                      return void e(n)
                    }
                    n(t)
                  }
              }
            })).then(function(n) {
              if (!n) return p('idle'), null
              ;(y = {}), (x = {}), (w = n.c), (g = n.h), p('prepare')
              var t = new Promise(function(n, t) {
                m = { resolve: n, reject: t }
              })
              return (
                (h = {}), E(1), 'prepare' === f && 0 === v && 0 === b && _(), t
              )
            })
          )
          var t
        }
        function E(n) {
          w[n]
            ? ((y[n] = !0),
              b++,
              (function(n) {
                var t = document.createElement('script')
                ;(t.charset = 'utf-8'),
                  (t.src = N.p + '' + n + '.' + o + '.hot-update.js'),
                  document.head.appendChild(t)
              })(n))
            : (x[n] = !0)
        }
        function _() {
          p('ready')
          var n = m
          if (((m = null), n))
            if (r)
              Promise.resolve()
                .then(function() {
                  return S(r)
                })
                .then(
                  function(t) {
                    n.resolve(t)
                  },
                  function(t) {
                    n.reject(t)
                  }
                )
            else {
              var t = []
              for (var e in h)
                Object.prototype.hasOwnProperty.call(h, e) && t.push(k(e))
              n.resolve(t)
            }
        }
        function S(t) {
          if ('ready' !== f)
            throw new Error('apply() is only allowed in ready status')
          var e, r, i, s, c
          function u(n) {
            for (
              var t = [n],
                e = {},
                r = t.map(function(n) {
                  return { chain: [n], id: n }
                });
              r.length > 0;

            ) {
              var o = r.pop(),
                i = o.id,
                a = o.chain
              if ((s = T[i]) && !s.hot._selfAccepted) {
                if (s.hot._selfDeclined)
                  return { type: 'self-declined', chain: a, moduleId: i }
                if (s.hot._main)
                  return { type: 'unaccepted', chain: a, moduleId: i }
                for (var l = 0; l < s.parents.length; l++) {
                  var c = s.parents[l],
                    u = T[c]
                  if (u) {
                    if (u.hot._declinedDependencies[i])
                      return {
                        type: 'declined',
                        chain: a.concat([c]),
                        moduleId: i,
                        parentId: c
                      }
                    ;-1 === t.indexOf(c) &&
                      (u.hot._acceptedDependencies[i]
                        ? (e[c] || (e[c] = []), d(e[c], [i]))
                        : (delete e[c],
                          t.push(c),
                          r.push({ chain: a.concat([c]), id: c })))
                  }
                }
              }
            }
            return {
              type: 'accepted',
              moduleId: n,
              outdatedModules: t,
              outdatedDependencies: e
            }
          }
          function d(n, t) {
            for (var e = 0; e < t.length; e++) {
              var r = t[e]
              ;-1 === n.indexOf(r) && n.push(r)
            }
          }
          t = t || {}
          var m = {},
            b = [],
            v = {},
            x = function() {
              console.warn(
                '[HMR] unexpected require(' +
                  M.moduleId +
                  ') to disposed module'
              )
            }
          for (var y in h)
            if (Object.prototype.hasOwnProperty.call(h, y)) {
              var M
              c = k(y)
              var E = !1,
                _ = !1,
                S = !1,
                C = ''
              switch (
                ((M = h[y] ? u(c) : { type: 'disposed', moduleId: y }).chain &&
                  (C = '\nUpdate propagation: ' + M.chain.join(' -> ')),
                M.type)
              ) {
                case 'self-declined':
                  t.onDeclined && t.onDeclined(M),
                    t.ignoreDeclined ||
                      (E = new Error(
                        'Aborted because of self decline: ' + M.moduleId + C
                      ))
                  break
                case 'declined':
                  t.onDeclined && t.onDeclined(M),
                    t.ignoreDeclined ||
                      (E = new Error(
                        'Aborted because of declined dependency: ' +
                          M.moduleId +
                          ' in ' +
                          M.parentId +
                          C
                      ))
                  break
                case 'unaccepted':
                  t.onUnaccepted && t.onUnaccepted(M),
                    t.ignoreUnaccepted ||
                      (E = new Error(
                        'Aborted because ' + c + ' is not accepted' + C
                      ))
                  break
                case 'accepted':
                  t.onAccepted && t.onAccepted(M), (_ = !0)
                  break
                case 'disposed':
                  t.onDisposed && t.onDisposed(M), (S = !0)
                  break
                default:
                  throw new Error('Unexception type ' + M.type)
              }
              if (E) return p('abort'), Promise.reject(E)
              if (_)
                for (c in ((v[c] = h[c]),
                d(b, M.outdatedModules),
                M.outdatedDependencies))
                  Object.prototype.hasOwnProperty.call(
                    M.outdatedDependencies,
                    c
                  ) && (m[c] || (m[c] = []), d(m[c], M.outdatedDependencies[c]))
              S && (d(b, [M.moduleId]), (v[c] = x))
            }
          var j,
            A = []
          for (r = 0; r < b.length; r++)
            (c = b[r]),
              T[c] &&
                T[c].hot._selfAccepted &&
                v[c] !== x &&
                A.push({ module: c, errorHandler: T[c].hot._selfAccepted })
          p('dispose'),
            Object.keys(w).forEach(function(n) {
              !1 === w[n] &&
                (function(n) {
                  delete installedChunks[n]
                })(n)
            })
          for (var O, z, D = b.slice(); D.length > 0; )
            if (((c = D.pop()), (s = T[c]))) {
              var L = {},
                q = s.hot._disposeHandlers
              for (i = 0; i < q.length; i++) (e = q[i])(L)
              for (
                a[c] = L, s.hot.active = !1, delete T[c], delete m[c], i = 0;
                i < s.children.length;
                i++
              ) {
                var H = T[s.children[i]]
                H && (j = H.parents.indexOf(c)) >= 0 && H.parents.splice(j, 1)
              }
            }
          for (c in m)
            if (Object.prototype.hasOwnProperty.call(m, c) && (s = T[c]))
              for (z = m[c], i = 0; i < z.length; i++)
                (O = z[i]),
                  (j = s.children.indexOf(O)) >= 0 && s.children.splice(j, 1)
          for (c in (p('apply'), (o = g), v))
            Object.prototype.hasOwnProperty.call(v, c) && (n[c] = v[c])
          var P = null
          for (c in m)
            if (Object.prototype.hasOwnProperty.call(m, c) && (s = T[c])) {
              z = m[c]
              var I = []
              for (r = 0; r < z.length; r++)
                if (((O = z[r]), (e = s.hot._acceptedDependencies[O]))) {
                  if (-1 !== I.indexOf(e)) continue
                  I.push(e)
                }
              for (r = 0; r < I.length; r++) {
                e = I[r]
                try {
                  e(z)
                } catch (n) {
                  t.onErrored &&
                    t.onErrored({
                      type: 'accept-errored',
                      moduleId: c,
                      dependencyId: z[r],
                      error: n
                    }),
                    t.ignoreErrored || P || (P = n)
                }
              }
            }
          for (r = 0; r < A.length; r++) {
            var R = A[r]
            ;(c = R.module), (l = [c])
            try {
              N(c)
            } catch (n) {
              if ('function' == typeof R.errorHandler)
                try {
                  R.errorHandler(n)
                } catch (e) {
                  t.onErrored &&
                    t.onErrored({
                      type: 'self-accept-error-handler-errored',
                      moduleId: c,
                      error: e,
                      originalError: n
                    }),
                    t.ignoreErrored || P || (P = e),
                    P || (P = n)
                }
              else
                t.onErrored &&
                  t.onErrored({
                    type: 'self-accept-errored',
                    moduleId: c,
                    error: n
                  }),
                  t.ignoreErrored || P || (P = n)
            }
          }
          return P
            ? (p('fail'), Promise.reject(P))
            : (p('idle'),
              new Promise(function(n) {
                n(b)
              }))
        }
        var T = {}
        function N(t) {
          if (T[t]) return T[t].exports
          var e = (T[t] = {
            i: t,
            l: !1,
            exports: {},
            hot: u(t),
            parents: ((s = l), (l = []), s),
            children: []
          })
          return n[t].call(e.exports, e, e.exports, c(t)), (e.l = !0), e.exports
        }
        ;(N.m = n),
          (N.c = T),
          (N.d = function(n, t, e) {
            N.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e })
          }),
          (N.r = function(n) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(n, '__esModule', { value: !0 })
          }),
          (N.t = function(n, t) {
            if ((1 & t && (n = N(n)), 8 & t)) return n
            if (4 & t && 'object' == typeof n && n && n.__esModule) return n
            var e = Object.create(null)
            if (
              (N.r(e),
              Object.defineProperty(e, 'default', { enumerable: !0, value: n }),
              2 & t && 'string' != typeof n)
            )
              for (var r in n)
                N.d(
                  e,
                  r,
                  function(t) {
                    return n[t]
                  }.bind(null, r)
                )
            return e
          }),
          (N.n = function(n) {
            var t =
              n && n.__esModule
                ? function() {
                    return n.default
                  }
                : function() {
                    return n
                  }
            return N.d(t, 'a', t), t
          }),
          (N.o = function(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
          }),
          (N.p = '/'),
          (N.h = function() {
            return o
          }),
          c(12)((N.s = 12))
      })([
        function(n, t, e) {
          'use strict'
          e.d(t, 'c', function() {
            return d
          }),
            e.d(t, 'a', function() {
              return f
            }),
            e.d(t, 'j', function() {
              return p
            }),
            e.d(t, 'l', function() {
              return m
            }),
            e.d(t, 'k', function() {
              return h
            }),
            e.d(t, 'b', function() {
              return g
            }),
            e.d(t, 'd', function() {
              return b
            }),
            e.d(t, 'h', function() {
              return v
            }),
            e.d(t, 'f', function() {
              return x
            }),
            e.d(t, 'i', function() {
              return y
            }),
            e.d(t, 'o', function() {
              return w
            }),
            e.d(t, 'm', function() {
              return k
            }),
            e.d(t, 'n', function() {
              return M
            }),
            e.d(t, 'e', function() {
              return E
            }),
            e.d(t, 'g', function() {
              return _
            })
          var r = e(3),
            o = e(4),
            i = 0,
            a = function(n, t) {
              return '<div class="card">\n<div class="card-header" id="headingOne">\n  <h2 class="mb-0">\n    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#scenario-'
                .concat(
                  n,
                  '"\n      aria-expanded="true" aria-controls="scenario-'
                )
                .concat(n, '">\n      ')
                .concat(
                  t || n,
                  '\n    </button >\n  </h2 >\n</div >\n\n  <div id="scenario-'
                )
                .concat(
                  n,
                  '" class="collapse show" aria-labelledby="headingOne" data-parent="#toppings">\n    <div class="card-body">\n      <ul id="list-group-'
                )
                .concat(
                  n,
                  '" class="list-group">\n      </ul>\n    </div>\n  </div>\n</div > '
                )
            },
            l = function(n, t) {
              return '\n<div class="modal-backdrop fade show"></div>\n<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" style="display: block;">\n<div class="modal-dialog modal-dialog-centered" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLongTitle">'
                .concat(
                  n,
                  '</h5>\n    </div>\n    <div class="modal-body">\n      '
                )
                .concat(t, '\n    </div>\n  </div>\n</div>\n</div>')
            },
            s = function(n, t) {
              return '\n<div class="modal-backdrop fade show"></div>\n<div class="modal topping-modal fade" tabindex="-1" role="dialog" aria-hidden="true" style="display: block;">\n<div class="modal-dialog modal-dialog-centered" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLongTitle">'
                .concat(
                  n,
                  '</h5>\n    </div>\n    <div class="modal-body">\n      <div id="topping-tree-container"></div>\n      '
                )
                .concat(t, '\n    </div>\n  </div>\n</div>\n</div>')
            },
            c = function(n) {
              return '<li class="list-group-item">'.concat(n, '</li>')
            },
            u = function(n) {
              return '#list-group-'.concat(n)
            }
          function d(n, t) {
            n && (n.innerHTML += a(++i, t))
          }
          function f(n, t) {
            if (n && i) {
              var e = n.querySelector(u(i))
              e.insertAdjacentHTML('beforeend', c(t)), w(e)
            }
          }
          function p(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            return document.getElementsByClassName(n)[t]
          }
          function m(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            return document.getElementsByTagName(n)[t]
          }
          function h(n) {
            return document.getElementById(n)
          }
          function g(n, t, e) {
            n.classList.remove('d-none'),
              (n.innerHTML = l(t, e)),
              setTimeout(function() {
                n.querySelector('div.modal').classList.add('show')
              }, 200)
          }
          function b(n, t, e, o) {
            n.classList.remove('d-none'),
              (n.innerHTML = s(t, e)),
              Object(r.a)(o, n.querySelector('#topping-tree-container')),
              setTimeout(function() {
                n.querySelector('div.modal').classList.add('show')
              }, 1)
          }
          function v(n) {
            var t = n.querySelector('div.modal')
            t && t.classList.remove('show'),
              setTimeout(function() {
                n.classList.add('d-none')
              })
          }
          function x(n) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'top'
            if (n) {
              var r = document.createElement('div')
              return (
                (r.innerHTML = '\n  <div style="color: #fff!important;padding: 1rem!important;margin-bottom: .5rem!important;border-color: #17a2b8!important;background-color: #343a40!important;max-width: 200px;text-align: center;border-radius: .25rem;">\n    '.concat(
                  t,
                  '\n  </div>\n  '
                )),
                (r.className = 'topping-tool-tip'),
                (r.style.zIndex = 1e5),
                document.body.append(r),
                new o.a(n, r, {
                  removeOnDestroy: !0,
                  placement: e,
                  modifiers: {
                    flip: { behavior: ['left', 'right', 'top', 'bottom'] },
                    offset: { enabled: !0, offset: '0, 1' }
                  }
                })
              )
            }
          }
          function y(n) {
            n && n.focus && 'function' == typeof n.focus && n.focus()
          }
          function w(n) {
            n &&
              n.scrollIntoView &&
              n.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
              })
          }
          function k(n, t) {
            n && (n.selectedIndex = t)
          }
          function M(n, t) {
            n && (n.value = t)
          }
          function E(n) {
            n && n.click && 'function' == typeof n.click && n.click()
          }
          function _(n, t) {
            if (n) {
              var e = n.value || ''
              e += t || ''
              var r = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  'value'
                ).set,
                o = new Event('input', { bubbles: !0 })
              r.call(n, e), n.dispatchEvent(o)
            }
          }
        },
        function(n, t, e) {
          var r, o
          !(function() {
            var i = { version: '3.5.17' },
              a = [].slice,
              l = function(n) {
                return a.call(n)
              },
              s = this.document
            function c(n) {
              return n && (n.ownerDocument || n.document || n).documentElement
            }
            function u(n) {
              return (
                n &&
                ((n.ownerDocument && n.ownerDocument.defaultView) ||
                  (n.document && n) ||
                  n.defaultView)
              )
            }
            if (s)
              try {
                l(s.documentElement.childNodes)[0].nodeType
              } catch (n) {
                l = function(n) {
                  for (var t = n.length, e = new Array(t); t--; ) e[t] = n[t]
                  return e
                }
              }
            if (
              (Date.now ||
                (Date.now = function() {
                  return +new Date()
                }),
              s)
            )
              try {
                s.createElement('DIV').style.setProperty('opacity', 0, '')
              } catch (n) {
                var d = this.Element.prototype,
                  f = d.setAttribute,
                  p = d.setAttributeNS,
                  m = this.CSSStyleDeclaration.prototype,
                  h = m.setProperty
                ;(d.setAttribute = function(n, t) {
                  f.call(this, n, t + '')
                }),
                  (d.setAttributeNS = function(n, t, e) {
                    p.call(this, n, t, e + '')
                  }),
                  (m.setProperty = function(n, t, e) {
                    h.call(this, n, t + '', e)
                  })
              }
            function g(n, t) {
              return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }
            function b(n) {
              return null === n ? NaN : +n
            }
            function v(n) {
              return !isNaN(n)
            }
            function x(n) {
              return {
                left: function(t, e, r, o) {
                  for (
                    arguments.length < 3 && (r = 0),
                      arguments.length < 4 && (o = t.length);
                    r < o;

                  ) {
                    var i = (r + o) >>> 1
                    n(t[i], e) < 0 ? (r = i + 1) : (o = i)
                  }
                  return r
                },
                right: function(t, e, r, o) {
                  for (
                    arguments.length < 3 && (r = 0),
                      arguments.length < 4 && (o = t.length);
                    r < o;

                  ) {
                    var i = (r + o) >>> 1
                    n(t[i], e) > 0 ? (o = i) : (r = i + 1)
                  }
                  return r
                }
              }
            }
            ;(i.ascending = g),
              (i.descending = function(n, t) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
              }),
              (i.min = function(n, t) {
                var e,
                  r,
                  o = -1,
                  i = n.length
                if (1 === arguments.length) {
                  for (; ++o < i; )
                    if (null != (r = n[o]) && r >= r) {
                      e = r
                      break
                    }
                  for (; ++o < i; ) null != (r = n[o]) && e > r && (e = r)
                } else {
                  for (; ++o < i; )
                    if (null != (r = t.call(n, n[o], o)) && r >= r) {
                      e = r
                      break
                    }
                  for (; ++o < i; )
                    null != (r = t.call(n, n[o], o)) && e > r && (e = r)
                }
                return e
              }),
              (i.max = function(n, t) {
                var e,
                  r,
                  o = -1,
                  i = n.length
                if (1 === arguments.length) {
                  for (; ++o < i; )
                    if (null != (r = n[o]) && r >= r) {
                      e = r
                      break
                    }
                  for (; ++o < i; ) null != (r = n[o]) && r > e && (e = r)
                } else {
                  for (; ++o < i; )
                    if (null != (r = t.call(n, n[o], o)) && r >= r) {
                      e = r
                      break
                    }
                  for (; ++o < i; )
                    null != (r = t.call(n, n[o], o)) && r > e && (e = r)
                }
                return e
              }),
              (i.extent = function(n, t) {
                var e,
                  r,
                  o,
                  i = -1,
                  a = n.length
                if (1 === arguments.length) {
                  for (; ++i < a; )
                    if (null != (r = n[i]) && r >= r) {
                      e = o = r
                      break
                    }
                  for (; ++i < a; )
                    null != (r = n[i]) && (e > r && (e = r), o < r && (o = r))
                } else {
                  for (; ++i < a; )
                    if (null != (r = t.call(n, n[i], i)) && r >= r) {
                      e = o = r
                      break
                    }
                  for (; ++i < a; )
                    null != (r = t.call(n, n[i], i)) &&
                      (e > r && (e = r), o < r && (o = r))
                }
                return [e, o]
              }),
              (i.sum = function(n, t) {
                var e,
                  r = 0,
                  o = n.length,
                  i = -1
                if (1 === arguments.length)
                  for (; ++i < o; ) v((e = +n[i])) && (r += e)
                else for (; ++i < o; ) v((e = +t.call(n, n[i], i))) && (r += e)
                return r
              }),
              (i.mean = function(n, t) {
                var e,
                  r = 0,
                  o = n.length,
                  i = -1,
                  a = o
                if (1 === arguments.length)
                  for (; ++i < o; ) v((e = b(n[i]))) ? (r += e) : --a
                else
                  for (; ++i < o; )
                    v((e = b(t.call(n, n[i], i)))) ? (r += e) : --a
                if (a) return r / a
              }),
              (i.quantile = function(n, t) {
                var e = (n.length - 1) * t + 1,
                  r = Math.floor(e),
                  o = +n[r - 1],
                  i = e - r
                return i ? o + i * (n[r] - o) : o
              }),
              (i.median = function(n, t) {
                var e,
                  r = [],
                  o = n.length,
                  a = -1
                if (1 === arguments.length)
                  for (; ++a < o; ) v((e = b(n[a]))) && r.push(e)
                else
                  for (; ++a < o; ) v((e = b(t.call(n, n[a], a)))) && r.push(e)
                if (r.length) return i.quantile(r.sort(g), 0.5)
              }),
              (i.variance = function(n, t) {
                var e,
                  r,
                  o = n.length,
                  i = 0,
                  a = 0,
                  l = -1,
                  s = 0
                if (1 === arguments.length)
                  for (; ++l < o; )
                    v((e = b(n[l]))) &&
                      (a += (r = e - i) * (e - (i += r / ++s)))
                else
                  for (; ++l < o; )
                    v((e = b(t.call(n, n[l], l)))) &&
                      (a += (r = e - i) * (e - (i += r / ++s)))
                if (s > 1) return a / (s - 1)
              }),
              (i.deviation = function() {
                var n = i.variance.apply(this, arguments)
                return n ? Math.sqrt(n) : n
              })
            var y = x(g)
            function w(n) {
              return n.length
            }
            ;(i.bisectLeft = y.left),
              (i.bisect = i.bisectRight = y.right),
              (i.bisector = function(n) {
                return x(
                  1 === n.length
                    ? function(t, e) {
                        return g(n(t), e)
                      }
                    : n
                )
              }),
              (i.shuffle = function(n, t, e) {
                ;(i = arguments.length) < 3 &&
                  ((e = n.length), i < 2 && (t = 0))
                for (var r, o, i = e - t; i; )
                  (o = (Math.random() * i--) | 0),
                    (r = n[i + t]),
                    (n[i + t] = n[o + t]),
                    (n[o + t] = r)
                return n
              }),
              (i.permute = function(n, t) {
                for (var e = t.length, r = new Array(e); e--; ) r[e] = n[t[e]]
                return r
              }),
              (i.pairs = function(n) {
                for (
                  var t = 0,
                    e = n.length - 1,
                    r = n[0],
                    o = new Array(e < 0 ? 0 : e);
                  t < e;

                )
                  o[t] = [r, (r = n[++t])]
                return o
              }),
              (i.transpose = function(n) {
                if (!(o = n.length)) return []
                for (var t = -1, e = i.min(n, w), r = new Array(e); ++t < e; )
                  for (var o, a = -1, l = (r[t] = new Array(o)); ++a < o; )
                    l[a] = n[a][t]
                return r
              }),
              (i.zip = function() {
                return i.transpose(arguments)
              }),
              (i.keys = function(n) {
                var t = []
                for (var e in n) t.push(e)
                return t
              }),
              (i.values = function(n) {
                var t = []
                for (var e in n) t.push(n[e])
                return t
              }),
              (i.entries = function(n) {
                var t = []
                for (var e in n) t.push({ key: e, value: n[e] })
                return t
              }),
              (i.merge = function(n) {
                for (var t, e, r, o = n.length, i = -1, a = 0; ++i < o; )
                  a += n[i].length
                for (e = new Array(a); --o >= 0; )
                  for (t = (r = n[o]).length; --t >= 0; ) e[--a] = r[t]
                return e
              })
            var k = Math.abs
            function M(n) {
              for (var t = 1; (n * t) % 1; ) t *= 10
              return t
            }
            function E(n, t) {
              for (var e in t)
                Object.defineProperty(n.prototype, e, {
                  value: t[e],
                  enumerable: !1
                })
            }
            function _() {
              this._ = Object.create(null)
            }
            ;(i.range = function(n, t, e) {
              if (
                (arguments.length < 3 &&
                  ((e = 1), arguments.length < 2 && ((t = n), (n = 0))),
                (t - n) / e == 1 / 0)
              )
                throw new Error('infinite range')
              var r,
                o = [],
                i = M(k(e)),
                a = -1
              if (((n *= i), (t *= i), (e *= i) < 0))
                for (; (r = n + e * ++a) > t; ) o.push(r / i)
              else for (; (r = n + e * ++a) < t; ) o.push(r / i)
              return o
            }),
              (i.map = function(n, t) {
                var e = new _()
                if (n instanceof _)
                  n.forEach(function(n, t) {
                    e.set(n, t)
                  })
                else if (Array.isArray(n)) {
                  var r,
                    o = -1,
                    i = n.length
                  if (1 === arguments.length) for (; ++o < i; ) e.set(o, n[o])
                  else for (; ++o < i; ) e.set(t.call(n, (r = n[o]), o), r)
                } else for (var a in n) e.set(a, n[a])
                return e
              })
            var S = '__proto__',
              T = '\0'
            function N(n) {
              return (n += '') === S || n[0] === T ? T + n : n
            }
            function C(n) {
              return (n += '')[0] === T ? n.slice(1) : n
            }
            function j(n) {
              return N(n) in this._
            }
            function A(n) {
              return (n = N(n)) in this._ && delete this._[n]
            }
            function O() {
              var n = []
              for (var t in this._) n.push(C(t))
              return n
            }
            function z() {
              var n = 0
              for (var t in this._) ++n
              return n
            }
            function D() {
              for (var n in this._) return !1
              return !0
            }
            function L() {
              this._ = Object.create(null)
            }
            function q(n) {
              return n
            }
            function H(n, t, e) {
              return function() {
                var r = e.apply(t, arguments)
                return r === t ? n : r
              }
            }
            function P(n, t) {
              if (t in n) return t
              t = t.charAt(0).toUpperCase() + t.slice(1)
              for (var e = 0, r = I.length; e < r; ++e) {
                var o = I[e] + t
                if (o in n) return o
              }
            }
            E(_, {
              has: j,
              get: function(n) {
                return this._[N(n)]
              },
              set: function(n, t) {
                return (this._[N(n)] = t)
              },
              remove: A,
              keys: O,
              values: function() {
                var n = []
                for (var t in this._) n.push(this._[t])
                return n
              },
              entries: function() {
                var n = []
                for (var t in this._) n.push({ key: C(t), value: this._[t] })
                return n
              },
              size: z,
              empty: D,
              forEach: function(n) {
                for (var t in this._) n.call(this, C(t), this._[t])
              }
            }),
              (i.nest = function() {
                var n,
                  t,
                  e = {},
                  r = [],
                  o = []
                function a(o, i, l) {
                  if (l >= r.length) return t ? t.call(e, i) : n ? i.sort(n) : i
                  for (
                    var s,
                      c,
                      u,
                      d,
                      f = -1,
                      p = i.length,
                      m = r[l++],
                      h = new _();
                    ++f < p;

                  )
                    (d = h.get((s = m((c = i[f]))))) ? d.push(c) : h.set(s, [c])
                  return (
                    o
                      ? ((c = o()),
                        (u = function(n, t) {
                          c.set(n, a(o, t, l))
                        }))
                      : ((c = {}),
                        (u = function(n, t) {
                          c[n] = a(o, t, l)
                        })),
                    h.forEach(u),
                    c
                  )
                }
                return (
                  (e.map = function(n, t) {
                    return a(t, n, 0)
                  }),
                  (e.entries = function(n) {
                    return (function n(t, e) {
                      if (e >= r.length) return t
                      var i = [],
                        a = o[e++]
                      return (
                        t.forEach(function(t, r) {
                          i.push({ key: t, values: n(r, e) })
                        }),
                        a
                          ? i.sort(function(n, t) {
                              return a(n.key, t.key)
                            })
                          : i
                      )
                    })(a(i.map, n, 0), 0)
                  }),
                  (e.key = function(n) {
                    return r.push(n), e
                  }),
                  (e.sortKeys = function(n) {
                    return (o[r.length - 1] = n), e
                  }),
                  (e.sortValues = function(t) {
                    return (n = t), e
                  }),
                  (e.rollup = function(n) {
                    return (t = n), e
                  }),
                  e
                )
              }),
              (i.set = function(n) {
                var t = new L()
                if (n) for (var e = 0, r = n.length; e < r; ++e) t.add(n[e])
                return t
              }),
              E(L, {
                has: j,
                add: function(n) {
                  return (this._[N((n += ''))] = !0), n
                },
                remove: A,
                values: O,
                size: z,
                empty: D,
                forEach: function(n) {
                  for (var t in this._) n.call(this, C(t))
                }
              }),
              (i.behavior = {}),
              (i.rebind = function(n, t) {
                for (var e, r = 1, o = arguments.length; ++r < o; )
                  n[(e = arguments[r])] = H(n, t, t[e])
                return n
              })
            var I = ['webkit', 'ms', 'moz', 'Moz', 'o', 'O']
            function R() {}
            function F() {}
            function B(n) {
              var t = [],
                e = new _()
              function r() {
                for (var e, r = t, o = -1, i = r.length; ++o < i; )
                  (e = r[o].on) && e.apply(this, arguments)
                return n
              }
              return (
                (r.on = function(r, o) {
                  var i,
                    a = e.get(r)
                  return arguments.length < 2
                    ? a && a.on
                    : (a &&
                        ((a.on = null),
                        (t = t
                          .slice(0, (i = t.indexOf(a)))
                          .concat(t.slice(i + 1))),
                        e.remove(r)),
                      o && t.push(e.set(r, { on: o })),
                      n)
                }),
                r
              )
            }
            function U() {
              i.event.preventDefault()
            }
            function $() {
              for (var n, t = i.event; (n = t.sourceEvent); ) t = n
              return t
            }
            function W(n) {
              for (var t = new F(), e = 0, r = arguments.length; ++e < r; )
                t[arguments[e]] = B(t)
              return (
                (t.of = function(e, r) {
                  return function(o) {
                    try {
                      var a = (o.sourceEvent = i.event)
                      ;(o.target = n), (i.event = o), t[o.type].apply(e, r)
                    } finally {
                      i.event = a
                    }
                  }
                }),
                t
              )
            }
            ;(i.dispatch = function() {
              for (var n = new F(), t = -1, e = arguments.length; ++t < e; )
                n[arguments[t]] = B(n)
              return n
            }),
              (F.prototype.on = function(n, t) {
                var e = n.indexOf('.'),
                  r = ''
                if ((e >= 0 && ((r = n.slice(e + 1)), (n = n.slice(0, e))), n))
                  return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t)
                if (2 === arguments.length) {
                  if (null == t)
                    for (n in this)
                      this.hasOwnProperty(n) && this[n].on(r, null)
                  return this
                }
              }),
              (i.event = null),
              (i.requote = function(n) {
                return n.replace(Y, '\\$&')
              })
            var Y = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
              V = {}.__proto__
                ? function(n, t) {
                    n.__proto__ = t
                  }
                : function(n, t) {
                    for (var e in t) n[e] = t[e]
                  }
            function X(n) {
              return V(n, Q), n
            }
            var Z = function(n, t) {
                return t.querySelector(n)
              },
              G = function(n, t) {
                return t.querySelectorAll(n)
              },
              J = function(n, t) {
                var e = n.matches || n[P(n, 'matchesSelector')]
                return (J = function(n, t) {
                  return e.call(n, t)
                })(n, t)
              }
            'function' == typeof Sizzle &&
              ((Z = function(n, t) {
                return Sizzle(n, t)[0] || null
              }),
              (G = Sizzle),
              (J = Sizzle.matchesSelector)),
              (i.selection = function() {
                return i.select(s.documentElement)
              })
            var Q = (i.selection.prototype = [])
            function K(n) {
              return 'function' == typeof n
                ? n
                : function() {
                    return Z(n, this)
                  }
            }
            function nn(n) {
              return 'function' == typeof n
                ? n
                : function() {
                    return G(n, this)
                  }
            }
            ;(Q.select = function(n) {
              var t,
                e,
                r,
                o,
                i = []
              n = K(n)
              for (var a = -1, l = this.length; ++a < l; ) {
                i.push((t = [])), (t.parentNode = (r = this[a]).parentNode)
                for (var s = -1, c = r.length; ++s < c; )
                  (o = r[s])
                    ? (t.push((e = n.call(o, o.__data__, s, a))),
                      e && '__data__' in o && (e.__data__ = o.__data__))
                    : t.push(null)
              }
              return X(i)
            }),
              (Q.selectAll = function(n) {
                var t,
                  e,
                  r = []
                n = nn(n)
                for (var o = -1, i = this.length; ++o < i; )
                  for (var a = this[o], s = -1, c = a.length; ++s < c; )
                    (e = a[s]) &&
                      (r.push((t = l(n.call(e, e.__data__, s, o)))),
                      (t.parentNode = e))
                return X(r)
              })
            var tn = 'http://www.w3.org/1999/xhtml',
              en = {
                svg: 'http://www.w3.org/2000/svg',
                xhtml: tn,
                xlink: 'http://www.w3.org/1999/xlink',
                xml: 'http://www.w3.org/XML/1998/namespace',
                xmlns: 'http://www.w3.org/2000/xmlns/'
              }
            function rn(n, t) {
              return (
                (n = i.ns.qualify(n)),
                null == t
                  ? n.local
                    ? function() {
                        this.removeAttributeNS(n.space, n.local)
                      }
                    : function() {
                        this.removeAttribute(n)
                      }
                  : 'function' == typeof t
                  ? n.local
                    ? function() {
                        var e = t.apply(this, arguments)
                        null == e
                          ? this.removeAttributeNS(n.space, n.local)
                          : this.setAttributeNS(n.space, n.local, e)
                      }
                    : function() {
                        var e = t.apply(this, arguments)
                        null == e
                          ? this.removeAttribute(n)
                          : this.setAttribute(n, e)
                      }
                  : n.local
                  ? function() {
                      this.setAttributeNS(n.space, n.local, t)
                    }
                  : function() {
                      this.setAttribute(n, t)
                    }
              )
            }
            function on(n) {
              return n.trim().replace(/\s+/g, ' ')
            }
            function an(n) {
              return new RegExp('(?:^|\\s+)' + i.requote(n) + '(?:\\s+|$)', 'g')
            }
            function ln(n) {
              return (n + '').trim().split(/^|\s+/)
            }
            function sn(n, t) {
              var e = (n = ln(n).map(cn)).length
              return 'function' == typeof t
                ? function() {
                    for (var r = -1, o = t.apply(this, arguments); ++r < e; )
                      n[r](this, o)
                  }
                : function() {
                    for (var r = -1; ++r < e; ) n[r](this, t)
                  }
            }
            function cn(n) {
              var t = an(n)
              return function(e, r) {
                if ((o = e.classList)) return r ? o.add(n) : o.remove(n)
                var o = e.getAttribute('class') || ''
                r
                  ? ((t.lastIndex = 0),
                    t.test(o) || e.setAttribute('class', on(o + ' ' + n)))
                  : e.setAttribute('class', on(o.replace(t, ' ')))
              }
            }
            function un(n, t, e) {
              return null == t
                ? function() {
                    this.style.removeProperty(n)
                  }
                : 'function' == typeof t
                ? function() {
                    var r = t.apply(this, arguments)
                    null == r
                      ? this.style.removeProperty(n)
                      : this.style.setProperty(n, r, e)
                  }
                : function() {
                    this.style.setProperty(n, t, e)
                  }
            }
            function dn(n, t) {
              return null == t
                ? function() {
                    delete this[n]
                  }
                : 'function' == typeof t
                ? function() {
                    var e = t.apply(this, arguments)
                    null == e ? delete this[n] : (this[n] = e)
                  }
                : function() {
                    this[n] = t
                  }
            }
            function fn(n) {
              return 'function' == typeof n
                ? n
                : (n = i.ns.qualify(n)).local
                ? function() {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                  }
                : function() {
                    var t = this.ownerDocument,
                      e = this.namespaceURI
                    return e === tn && t.documentElement.namespaceURI === tn
                      ? t.createElement(n)
                      : t.createElementNS(e, n)
                  }
            }
            function pn() {
              var n = this.parentNode
              n && n.removeChild(this)
            }
            function mn(n) {
              return { __data__: n }
            }
            function hn(n) {
              return function() {
                return J(this, n)
              }
            }
            function gn(n) {
              return (
                arguments.length || (n = g),
                function(t, e) {
                  return t && e ? n(t.__data__, e.__data__) : !t - !e
                }
              )
            }
            function bn(n, t) {
              for (var e = 0, r = n.length; e < r; e++)
                for (var o, i = n[e], a = 0, l = i.length; a < l; a++)
                  (o = i[a]) && t(o, a, e)
              return n
            }
            function vn(n) {
              return V(n, xn), n
            }
            ;(i.ns = {
              prefix: en,
              qualify: function(n) {
                var t = n.indexOf(':'),
                  e = n
                return (
                  t >= 0 &&
                    'xmlns' !== (e = n.slice(0, t)) &&
                    (n = n.slice(t + 1)),
                  en.hasOwnProperty(e) ? { space: en[e], local: n } : n
                )
              }
            }),
              (Q.attr = function(n, t) {
                if (arguments.length < 2) {
                  if ('string' == typeof n) {
                    var e = this.node()
                    return (n = i.ns.qualify(n)).local
                      ? e.getAttributeNS(n.space, n.local)
                      : e.getAttribute(n)
                  }
                  for (t in n) this.each(rn(t, n[t]))
                  return this
                }
                return this.each(rn(n, t))
              }),
              (Q.classed = function(n, t) {
                if (arguments.length < 2) {
                  if ('string' == typeof n) {
                    var e = this.node(),
                      r = (n = ln(n)).length,
                      o = -1
                    if ((t = e.classList)) {
                      for (; ++o < r; ) if (!t.contains(n[o])) return !1
                    } else
                      for (t = e.getAttribute('class'); ++o < r; )
                        if (!an(n[o]).test(t)) return !1
                    return !0
                  }
                  for (t in n) this.each(sn(t, n[t]))
                  return this
                }
                return this.each(sn(n, t))
              }),
              (Q.style = function(n, t, e) {
                var r = arguments.length
                if (r < 3) {
                  if ('string' != typeof n) {
                    for (e in (r < 2 && (t = ''), n)) this.each(un(e, n[e], t))
                    return this
                  }
                  if (r < 2) {
                    var o = this.node()
                    return u(o)
                      .getComputedStyle(o, null)
                      .getPropertyValue(n)
                  }
                  e = ''
                }
                return this.each(un(n, t, e))
              }),
              (Q.property = function(n, t) {
                if (arguments.length < 2) {
                  if ('string' == typeof n) return this.node()[n]
                  for (t in n) this.each(dn(t, n[t]))
                  return this
                }
                return this.each(dn(n, t))
              }),
              (Q.text = function(n) {
                return arguments.length
                  ? this.each(
                      'function' == typeof n
                        ? function() {
                            var t = n.apply(this, arguments)
                            this.textContent = null == t ? '' : t
                          }
                        : null == n
                        ? function() {
                            this.textContent = ''
                          }
                        : function() {
                            this.textContent = n
                          }
                    )
                  : this.node().textContent
              }),
              (Q.html = function(n) {
                return arguments.length
                  ? this.each(
                      'function' == typeof n
                        ? function() {
                            var t = n.apply(this, arguments)
                            this.innerHTML = null == t ? '' : t
                          }
                        : null == n
                        ? function() {
                            this.innerHTML = ''
                          }
                        : function() {
                            this.innerHTML = n
                          }
                    )
                  : this.node().innerHTML
              }),
              (Q.append = function(n) {
                return (
                  (n = fn(n)),
                  this.select(function() {
                    return this.appendChild(n.apply(this, arguments))
                  })
                )
              }),
              (Q.insert = function(n, t) {
                return (
                  (n = fn(n)),
                  (t = K(t)),
                  this.select(function() {
                    return this.insertBefore(
                      n.apply(this, arguments),
                      t.apply(this, arguments) || null
                    )
                  })
                )
              }),
              (Q.remove = function() {
                return this.each(pn)
              }),
              (Q.data = function(n, t) {
                var e,
                  r,
                  o = -1,
                  i = this.length
                if (!arguments.length) {
                  for (n = new Array((i = (e = this[0]).length)); ++o < i; )
                    (r = e[o]) && (n[o] = r.__data__)
                  return n
                }
                function a(n, e) {
                  var r,
                    o,
                    i,
                    a = n.length,
                    u = e.length,
                    d = Math.min(a, u),
                    f = new Array(u),
                    p = new Array(u),
                    m = new Array(a)
                  if (t) {
                    var h,
                      g = new _(),
                      b = new Array(a)
                    for (r = -1; ++r < a; )
                      (o = n[r]) &&
                        (g.has((h = t.call(o, o.__data__, r)))
                          ? (m[r] = o)
                          : g.set(h, o),
                        (b[r] = h))
                    for (r = -1; ++r < u; )
                      (o = g.get((h = t.call(e, (i = e[r]), r))))
                        ? !0 !== o && ((f[r] = o), (o.__data__ = i))
                        : (p[r] = mn(i)),
                        g.set(h, !0)
                    for (r = -1; ++r < a; )
                      r in b && !0 !== g.get(b[r]) && (m[r] = n[r])
                  } else {
                    for (r = -1; ++r < d; )
                      (o = n[r]),
                        (i = e[r]),
                        o ? ((o.__data__ = i), (f[r] = o)) : (p[r] = mn(i))
                    for (; r < u; ++r) p[r] = mn(e[r])
                    for (; r < a; ++r) m[r] = n[r]
                  }
                  ;(p.update = f),
                    (p.parentNode = f.parentNode = m.parentNode = n.parentNode),
                    l.push(p),
                    s.push(f),
                    c.push(m)
                }
                var l = vn([]),
                  s = X([]),
                  c = X([])
                if ('function' == typeof n)
                  for (; ++o < i; )
                    a((e = this[o]), n.call(e, e.parentNode.__data__, o))
                else for (; ++o < i; ) a((e = this[o]), n)
                return (
                  (s.enter = function() {
                    return l
                  }),
                  (s.exit = function() {
                    return c
                  }),
                  s
                )
              }),
              (Q.datum = function(n) {
                return arguments.length
                  ? this.property('__data__', n)
                  : this.property('__data__')
              }),
              (Q.filter = function(n) {
                var t,
                  e,
                  r,
                  o = []
                'function' != typeof n && (n = hn(n))
                for (var i = 0, a = this.length; i < a; i++) {
                  o.push((t = [])), (t.parentNode = (e = this[i]).parentNode)
                  for (var l = 0, s = e.length; l < s; l++)
                    (r = e[l]) && n.call(r, r.__data__, l, i) && t.push(r)
                }
                return X(o)
              }),
              (Q.order = function() {
                for (var n = -1, t = this.length; ++n < t; )
                  for (
                    var e, r = this[n], o = r.length - 1, i = r[o];
                    --o >= 0;

                  )
                    (e = r[o]) &&
                      (i &&
                        i !== e.nextSibling &&
                        i.parentNode.insertBefore(e, i),
                      (i = e))
                return this
              }),
              (Q.sort = function(n) {
                n = gn.apply(this, arguments)
                for (var t = -1, e = this.length; ++t < e; ) this[t].sort(n)
                return this.order()
              }),
              (Q.each = function(n) {
                return bn(this, function(t, e, r) {
                  n.call(t, t.__data__, e, r)
                })
              }),
              (Q.call = function(n) {
                var t = l(arguments)
                return n.apply((t[0] = this), t), this
              }),
              (Q.empty = function() {
                return !this.node()
              }),
              (Q.node = function() {
                for (var n = 0, t = this.length; n < t; n++)
                  for (var e = this[n], r = 0, o = e.length; r < o; r++) {
                    var i = e[r]
                    if (i) return i
                  }
                return null
              }),
              (Q.size = function() {
                var n = 0
                return (
                  bn(this, function() {
                    ++n
                  }),
                  n
                )
              })
            var xn = []
            function yn(n) {
              var t, e
              return function(r, o, i) {
                var a,
                  l = n[i].update,
                  s = l.length
                for (
                  i != e && ((e = i), (t = 0)), o >= t && (t = o + 1);
                  !(a = l[t]) && ++t < s;

                );
                return a
              }
            }
            function wn(n, t, e) {
              var r = '__on' + n,
                o = n.indexOf('.'),
                a = Mn
              o > 0 && (n = n.slice(0, o))
              var s = kn.get(n)
              function c() {
                var t = this[r]
                t && (this.removeEventListener(n, t, t.$), delete this[r])
              }
              return (
                s && ((n = s), (a = En)),
                o
                  ? t
                    ? function() {
                        var o = a(t, l(arguments))
                        c.call(this),
                          this.addEventListener(n, (this[r] = o), (o.$ = e)),
                          (o._ = t)
                      }
                    : c
                  : t
                  ? R
                  : function() {
                      var t,
                        e = new RegExp('^__on([^.]+)' + i.requote(n) + '$')
                      for (var r in this)
                        if ((t = r.match(e))) {
                          var o = this[r]
                          this.removeEventListener(t[1], o, o.$), delete this[r]
                        }
                    }
              )
            }
            ;(i.selection.enter = vn),
              (i.selection.enter.prototype = xn),
              (xn.append = Q.append),
              (xn.empty = Q.empty),
              (xn.node = Q.node),
              (xn.call = Q.call),
              (xn.size = Q.size),
              (xn.select = function(n) {
                for (
                  var t, e, r, o, i, a = [], l = -1, s = this.length;
                  ++l < s;

                ) {
                  ;(r = (o = this[l]).update),
                    a.push((t = [])),
                    (t.parentNode = o.parentNode)
                  for (var c = -1, u = o.length; ++c < u; )
                    (i = o[c])
                      ? (t.push(
                          (r[c] = e = n.call(o.parentNode, i.__data__, c, l))
                        ),
                        (e.__data__ = i.__data__))
                      : t.push(null)
                }
                return X(a)
              }),
              (xn.insert = function(n, t) {
                return (
                  arguments.length < 2 && (t = yn(this)),
                  Q.insert.call(this, n, t)
                )
              }),
              (i.select = function(n) {
                var t
                return (
                  'string' == typeof n
                    ? ((t = [Z(n, s)]).parentNode = s.documentElement)
                    : ((t = [n]).parentNode = c(n)),
                  X([t])
                )
              }),
              (i.selectAll = function(n) {
                var t
                return (
                  'string' == typeof n
                    ? ((t = l(G(n, s))).parentNode = s.documentElement)
                    : ((t = l(n)).parentNode = null),
                  X([t])
                )
              }),
              (Q.on = function(n, t, e) {
                var r = arguments.length
                if (r < 3) {
                  if ('string' != typeof n) {
                    for (e in (r < 2 && (t = !1), n)) this.each(wn(e, n[e], t))
                    return this
                  }
                  if (r < 2) return (r = this.node()['__on' + n]) && r._
                  e = !1
                }
                return this.each(wn(n, t, e))
              })
            var kn = i.map({ mouseenter: 'mouseover', mouseleave: 'mouseout' })
            function Mn(n, t) {
              return function(e) {
                var r = i.event
                ;(i.event = e), (t[0] = this.__data__)
                try {
                  n.apply(this, t)
                } finally {
                  i.event = r
                }
              }
            }
            function En(n, t) {
              var e = Mn(n, t)
              return function(n) {
                var t = n.relatedTarget
                ;(t && (t === this || 8 & t.compareDocumentPosition(this))) ||
                  e.call(this, n)
              }
            }
            s &&
              kn.forEach(function(n) {
                'on' + n in s && kn.remove(n)
              })
            var _n,
              Sn = 0
            function Tn(n) {
              var t = '.dragsuppress-' + ++Sn,
                e = 'click' + t,
                r = i
                  .select(u(n))
                  .on('touchmove' + t, U)
                  .on('dragstart' + t, U)
                  .on('selectstart' + t, U)
              if (
                (null == _n &&
                  (_n = !('onselectstart' in n) && P(n.style, 'userSelect')),
                _n)
              ) {
                var o = c(n).style,
                  a = o[_n]
                o[_n] = 'none'
              }
              return function(n) {
                if ((r.on(t, null), _n && (o[_n] = a), n)) {
                  var i = function() {
                    r.on(e, null)
                  }
                  r.on(
                    e,
                    function() {
                      U(), i()
                    },
                    !0
                  ),
                    setTimeout(i, 0)
                }
              }
            }
            i.mouse = function(n) {
              return Cn(n, $())
            }
            var Nn =
              this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0
            function Cn(n, t) {
              t.changedTouches && (t = t.changedTouches[0])
              var e = n.ownerSVGElement || n
              if (e.createSVGPoint) {
                var r = e.createSVGPoint()
                if (Nn < 0) {
                  var o = u(n)
                  if (o.scrollX || o.scrollY) {
                    var a = (e = i
                      .select('body')
                      .append('svg')
                      .style(
                        {
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          margin: 0,
                          padding: 0,
                          border: 'none'
                        },
                        'important'
                      ))[0][0].getScreenCTM()
                    ;(Nn = !(a.f || a.e)), e.remove()
                  }
                }
                return (
                  Nn
                    ? ((r.x = t.pageX), (r.y = t.pageY))
                    : ((r.x = t.clientX), (r.y = t.clientY)),
                  [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
                )
              }
              var l = n.getBoundingClientRect()
              return [
                t.clientX - l.left - n.clientLeft,
                t.clientY - l.top - n.clientTop
              ]
            }
            function jn() {
              return i.event.changedTouches[0].identifier
            }
            ;(i.touch = function(n, t, e) {
              if (
                (arguments.length < 3 && ((e = t), (t = $().changedTouches)), t)
              )
                for (var r, o = 0, i = t.length; o < i; ++o)
                  if ((r = t[o]).identifier === e) return Cn(n, r)
            }),
              (i.behavior.drag = function() {
                var n = W(o, 'drag', 'dragstart', 'dragend'),
                  t = null,
                  e = a(R, i.mouse, u, 'mousemove', 'mouseup'),
                  r = a(jn, i.touch, q, 'touchmove', 'touchend')
                function o() {
                  this.on('mousedown.drag', e).on('touchstart.drag', r)
                }
                function a(e, r, o, a, l) {
                  return function() {
                    var s,
                      c = this,
                      u = i.event.target.correspondingElement || i.event.target,
                      d = c.parentNode,
                      f = n.of(c, arguments),
                      p = 0,
                      m = e(),
                      h = '.drag' + (null == m ? '' : '-' + m),
                      g = i
                        .select(o(u))
                        .on(a + h, x)
                        .on(l + h, y),
                      b = Tn(u),
                      v = r(d, m)
                    function x() {
                      var n,
                        t,
                        e = r(d, m)
                      e &&
                        ((n = e[0] - v[0]),
                        (t = e[1] - v[1]),
                        (p |= n | t),
                        (v = e),
                        f({
                          type: 'drag',
                          x: e[0] + s[0],
                          y: e[1] + s[1],
                          dx: n,
                          dy: t
                        }))
                    }
                    function y() {
                      r(d, m) &&
                        (g.on(a + h, null).on(l + h, null),
                        b(p),
                        f({ type: 'dragend' }))
                    }
                    ;(s = t
                      ? [(s = t.apply(c, arguments)).x - v[0], s.y - v[1]]
                      : [0, 0]),
                      f({ type: 'dragstart' })
                  }
                }
                return (
                  (o.origin = function(n) {
                    return arguments.length ? ((t = n), o) : t
                  }),
                  i.rebind(o, n, 'on')
                )
              }),
              (i.touches = function(n, t) {
                return (
                  arguments.length < 2 && (t = $().touches),
                  t
                    ? l(t).map(function(t) {
                        var e = Cn(n, t)
                        return (e.identifier = t.identifier), e
                      })
                    : []
                )
              })
            var An = 1e-6,
              On = An * An,
              zn = Math.PI,
              Dn = 2 * zn,
              Ln = Dn - An,
              qn = zn / 2,
              Hn = zn / 180,
              Pn = 180 / zn
            function In(n) {
              return n > 0 ? 1 : n < 0 ? -1 : 0
            }
            function Rn(n, t, e) {
              return (
                (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
              )
            }
            function Fn(n) {
              return n > 1 ? 0 : n < -1 ? zn : Math.acos(n)
            }
            function Bn(n) {
              return n > 1 ? qn : n < -1 ? -qn : Math.asin(n)
            }
            function Un(n) {
              return ((n = Math.exp(n)) + 1 / n) / 2
            }
            function $n(n) {
              return (n = Math.sin(n / 2)) * n
            }
            var Wn = Math.SQRT2
            ;(i.interpolateZoom = function(n, t) {
              var e,
                r,
                o = n[0],
                i = n[1],
                a = n[2],
                l = t[0],
                s = t[1],
                c = t[2],
                u = l - o,
                d = s - i,
                f = u * u + d * d
              if (f < On)
                (r = Math.log(c / a) / Wn),
                  (e = function(n) {
                    return [o + n * u, i + n * d, a * Math.exp(Wn * n * r)]
                  })
              else {
                var p = Math.sqrt(f),
                  m = (c * c - a * a + 4 * f) / (2 * a * 2 * p),
                  h = (c * c - a * a - 4 * f) / (2 * c * 2 * p),
                  g = Math.log(Math.sqrt(m * m + 1) - m),
                  b = Math.log(Math.sqrt(h * h + 1) - h)
                ;(r = (b - g) / Wn),
                  (e = function(n) {
                    var t,
                      e = n * r,
                      l = Un(g),
                      s =
                        (a / (2 * p)) *
                        (l *
                          ((t = Wn * e + g),
                          ((t = Math.exp(2 * t)) - 1) / (t + 1)) -
                          (function(n) {
                            return ((n = Math.exp(n)) - 1 / n) / 2
                          })(g))
                    return [o + s * u, i + s * d, (a * l) / Un(Wn * e + g)]
                  })
              }
              return (e.duration = 1e3 * r), e
            }),
              (i.behavior.zoom = function() {
                var n,
                  t,
                  e,
                  r,
                  o,
                  a,
                  l,
                  c,
                  d,
                  f = { x: 0, y: 0, k: 1 },
                  p = [960, 500],
                  m = Xn,
                  h = 250,
                  g = 0,
                  b = 'mousedown.zoom',
                  v = 'mousemove.zoom',
                  x = 'mouseup.zoom',
                  y = 'touchstart.zoom',
                  w = W(k, 'zoomstart', 'zoom', 'zoomend')
                function k(n) {
                  n.on(b, A)
                    .on(Vn + '.zoom', z)
                    .on('dblclick.zoom', D)
                    .on(y, O)
                }
                function M(n) {
                  return [(n[0] - f.x) / f.k, (n[1] - f.y) / f.k]
                }
                function E(n) {
                  f.k = Math.max(m[0], Math.min(m[1], n))
                }
                function _(n, t) {
                  ;(t = (function(n) {
                    return [n[0] * f.k + f.x, n[1] * f.k + f.y]
                  })(t)),
                    (f.x += n[0] - t[0]),
                    (f.y += n[1] - t[1])
                }
                function S(n, e, r, o) {
                  ;(n.__chart__ = { x: f.x, y: f.y, k: f.k }),
                    E(Math.pow(2, o)),
                    _((t = e), r),
                    (n = i.select(n)),
                    h > 0 && (n = n.transition().duration(h)),
                    n.call(k.event)
                }
                function T() {
                  l &&
                    l.domain(
                      a
                        .range()
                        .map(function(n) {
                          return (n - f.x) / f.k
                        })
                        .map(a.invert)
                    ),
                    d &&
                      d.domain(
                        c
                          .range()
                          .map(function(n) {
                            return (n - f.y) / f.k
                          })
                          .map(c.invert)
                      )
                }
                function N(n) {
                  g++ || n({ type: 'zoomstart' })
                }
                function C(n) {
                  T(), n({ type: 'zoom', scale: f.k, translate: [f.x, f.y] })
                }
                function j(n) {
                  --g || (n({ type: 'zoomend' }), (t = null))
                }
                function A() {
                  var n = this,
                    t = w.of(n, arguments),
                    e = 0,
                    r = i
                      .select(u(n))
                      .on(v, function() {
                        ;(e = 1), _(i.mouse(n), o), C(t)
                      })
                      .on(x, function() {
                        r.on(v, null).on(x, null), a(e), j(t)
                      }),
                    o = M(i.mouse(n)),
                    a = Tn(n)
                  Sl.call(n), N(t)
                }
                function O() {
                  var n,
                    t = this,
                    e = w.of(t, arguments),
                    r = {},
                    a = 0,
                    l = '.zoom-' + i.event.changedTouches[0].identifier,
                    s = 'touchmove' + l,
                    c = 'touchend' + l,
                    u = [],
                    d = i.select(t),
                    p = Tn(t)
                  function m() {
                    var e = i.touches(t)
                    return (
                      (n = f.k),
                      e.forEach(function(n) {
                        n.identifier in r && (r[n.identifier] = M(n))
                      }),
                      e
                    )
                  }
                  function h() {
                    var n = i.event.target
                    i
                      .select(n)
                      .on(s, g)
                      .on(c, v),
                      u.push(n)
                    for (
                      var e = i.event.changedTouches, l = 0, d = e.length;
                      l < d;
                      ++l
                    )
                      r[e[l].identifier] = null
                    var p = m(),
                      h = Date.now()
                    if (1 === p.length) {
                      if (h - o < 500) {
                        var b = p[0]
                        S(
                          t,
                          b,
                          r[b.identifier],
                          Math.floor(Math.log(f.k) / Math.LN2) + 1
                        ),
                          U()
                      }
                      o = h
                    } else if (p.length > 1) {
                      b = p[0]
                      var x = p[1],
                        y = b[0] - x[0],
                        w = b[1] - x[1]
                      a = y * y + w * w
                    }
                  }
                  function g() {
                    var l,
                      s,
                      c,
                      u,
                      d = i.touches(t)
                    Sl.call(t)
                    for (var f = 0, p = d.length; f < p; ++f, u = null)
                      if (((c = d[f]), (u = r[c.identifier]))) {
                        if (s) break
                        ;(l = c), (s = u)
                      }
                    if (u) {
                      var m = (m = c[0] - l[0]) * m + (m = c[1] - l[1]) * m,
                        h = a && Math.sqrt(m / a)
                      ;(l = [(l[0] + c[0]) / 2, (l[1] + c[1]) / 2]),
                        (s = [(s[0] + u[0]) / 2, (s[1] + u[1]) / 2]),
                        E(h * n)
                    }
                    ;(o = null), _(l, s), C(e)
                  }
                  function v() {
                    if (i.event.touches.length) {
                      for (
                        var n = i.event.changedTouches, t = 0, o = n.length;
                        t < o;
                        ++t
                      )
                        delete r[n[t].identifier]
                      for (var a in r) return void m()
                    }
                    i.selectAll(u).on(l, null), d.on(b, A).on(y, O), p(), j(e)
                  }
                  h(), N(e), d.on(b, null).on(y, h)
                }
                function z() {
                  var o = w.of(this, arguments)
                  r
                    ? clearTimeout(r)
                    : (Sl.call(this), (n = M((t = e || i.mouse(this)))), N(o)),
                    (r = setTimeout(function() {
                      ;(r = null), j(o)
                    }, 50)),
                    U(),
                    E(Math.pow(2, 0.002 * Yn()) * f.k),
                    _(t, n),
                    C(o)
                }
                function D() {
                  var n = i.mouse(this),
                    t = Math.log(f.k) / Math.LN2
                  S(
                    this,
                    n,
                    M(n),
                    i.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1
                  )
                }
                return (
                  Vn ||
                    (Vn =
                      'onwheel' in s
                        ? ((Yn = function() {
                            return (
                              -i.event.deltaY * (i.event.deltaMode ? 120 : 1)
                            )
                          }),
                          'wheel')
                        : 'onmousewheel' in s
                        ? ((Yn = function() {
                            return i.event.wheelDelta
                          }),
                          'mousewheel')
                        : ((Yn = function() {
                            return -i.event.detail
                          }),
                          'MozMousePixelScroll')),
                  (k.event = function(n) {
                    n.each(function() {
                      var n = w.of(this, arguments),
                        e = f
                      Cl
                        ? i
                            .select(this)
                            .transition()
                            .each('start.zoom', function() {
                              ;(f = this.__chart__ || { x: 0, y: 0, k: 1 }),
                                N(n)
                            })
                            .tween('zoom:zoom', function() {
                              var r = p[0],
                                o = p[1],
                                a = t ? t[0] : r / 2,
                                l = t ? t[1] : o / 2,
                                s = i.interpolateZoom(
                                  [(a - f.x) / f.k, (l - f.y) / f.k, r / f.k],
                                  [(a - e.x) / e.k, (l - e.y) / e.k, r / e.k]
                                )
                              return function(t) {
                                var e = s(t),
                                  o = r / e[2]
                                ;(this.__chart__ = f = {
                                  x: a - e[0] * o,
                                  y: l - e[1] * o,
                                  k: o
                                }),
                                  C(n)
                              }
                            })
                            .each('interrupt.zoom', function() {
                              j(n)
                            })
                            .each('end.zoom', function() {
                              j(n)
                            })
                        : ((this.__chart__ = f), N(n), C(n), j(n))
                    })
                  }),
                  (k.translate = function(n) {
                    return arguments.length
                      ? ((f = { x: +n[0], y: +n[1], k: f.k }), T(), k)
                      : [f.x, f.y]
                  }),
                  (k.scale = function(n) {
                    return arguments.length
                      ? ((f = { x: f.x, y: f.y, k: null }), E(+n), T(), k)
                      : f.k
                  }),
                  (k.scaleExtent = function(n) {
                    return arguments.length
                      ? ((m = null == n ? Xn : [+n[0], +n[1]]), k)
                      : m
                  }),
                  (k.center = function(n) {
                    return arguments.length ? ((e = n && [+n[0], +n[1]]), k) : e
                  }),
                  (k.size = function(n) {
                    return arguments.length ? ((p = n && [+n[0], +n[1]]), k) : p
                  }),
                  (k.duration = function(n) {
                    return arguments.length ? ((h = +n), k) : h
                  }),
                  (k.x = function(n) {
                    return arguments.length
                      ? ((l = n), (a = n.copy()), (f = { x: 0, y: 0, k: 1 }), k)
                      : l
                  }),
                  (k.y = function(n) {
                    return arguments.length
                      ? ((d = n), (c = n.copy()), (f = { x: 0, y: 0, k: 1 }), k)
                      : d
                  }),
                  i.rebind(k, w, 'on')
                )
              })
            var Yn,
              Vn,
              Xn = [0, 1 / 0]
            function Zn() {}
            function Gn(n, t, e) {
              return this instanceof Gn
                ? ((this.h = +n), (this.s = +t), void (this.l = +e))
                : arguments.length < 2
                ? n instanceof Gn
                  ? new Gn(n.h, n.s, n.l)
                  : bt('' + n, vt, Gn)
                : new Gn(n, t, e)
            }
            ;(i.color = Zn),
              (Zn.prototype.toString = function() {
                return this.rgb() + ''
              }),
              (i.hsl = Gn)
            var Jn = (Gn.prototype = new Zn())
            function Qn(n, t, e) {
              var r, o
              function i(n) {
                return Math.round(
                  255 *
                    (function(n) {
                      return (
                        n > 360 ? (n -= 360) : n < 0 && (n += 360),
                        n < 60
                          ? r + ((o - r) * n) / 60
                          : n < 180
                          ? o
                          : n < 240
                          ? r + ((o - r) * (240 - n)) / 60
                          : r
                      )
                    })(n)
                )
              }
              return (
                (n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n),
                (t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t),
                (r =
                  2 * (e = e < 0 ? 0 : e > 1 ? 1 : e) -
                  (o = e <= 0.5 ? e * (1 + t) : e + t - e * t)),
                new ft(i(n + 120), i(n), i(n - 120))
              )
            }
            function Kn(n, t, e) {
              return this instanceof Kn
                ? ((this.h = +n), (this.c = +t), void (this.l = +e))
                : arguments.length < 2
                ? n instanceof Kn
                  ? new Kn(n.h, n.c, n.l)
                  : (function(n, t, e) {
                      return n > 0
                        ? new Kn(
                            Math.atan2(e, t) * Pn,
                            Math.sqrt(t * t + e * e),
                            n
                          )
                        : new Kn(NaN, NaN, n)
                    })(
                      n instanceof et
                        ? n.l
                        : (n = xt((n = i.rgb(n)).r, n.g, n.b)).l,
                      n.a,
                      n.b
                    )
                : new Kn(n, t, e)
            }
            ;(Jn.brighter = function(n) {
              return (
                (n = Math.pow(0.7, arguments.length ? n : 1)),
                new Gn(this.h, this.s, this.l / n)
              )
            }),
              (Jn.darker = function(n) {
                return (
                  (n = Math.pow(0.7, arguments.length ? n : 1)),
                  new Gn(this.h, this.s, n * this.l)
                )
              }),
              (Jn.rgb = function() {
                return Qn(this.h, this.s, this.l)
              }),
              (i.hcl = Kn)
            var nt = (Kn.prototype = new Zn())
            function tt(n, t, e) {
              return (
                isNaN(n) && (n = 0),
                isNaN(t) && (t = 0),
                new et(e, Math.cos((n *= Hn)) * t, Math.sin(n) * t)
              )
            }
            function et(n, t, e) {
              return this instanceof et
                ? ((this.l = +n), (this.a = +t), void (this.b = +e))
                : arguments.length < 2
                ? n instanceof et
                  ? new et(n.l, n.a, n.b)
                  : n instanceof Kn
                  ? tt(n.h, n.c, n.l)
                  : xt((n = ft(n)).r, n.g, n.b)
                : new et(n, t, e)
            }
            ;(nt.brighter = function(n) {
              return new Kn(
                this.h,
                this.c,
                Math.min(100, this.l + rt * (arguments.length ? n : 1))
              )
            }),
              (nt.darker = function(n) {
                return new Kn(
                  this.h,
                  this.c,
                  Math.max(0, this.l - rt * (arguments.length ? n : 1))
                )
              }),
              (nt.rgb = function() {
                return tt(this.h, this.c, this.l).rgb()
              }),
              (i.lab = et)
            var rt = 18,
              ot = 0.95047,
              it = 1,
              at = 1.08883,
              lt = (et.prototype = new Zn())
            function st(n, t, e) {
              var r = (n + 16) / 116,
                o = r + t / 500,
                i = r - e / 200
              return new ft(
                dt(
                  3.2404542 * (o = ct(o) * ot) -
                    1.5371385 * (r = ct(r) * it) -
                    0.4985314 * (i = ct(i) * at)
                ),
                dt(-0.969266 * o + 1.8760108 * r + 0.041556 * i),
                dt(0.0556434 * o - 0.2040259 * r + 1.0572252 * i)
              )
            }
            function ct(n) {
              return n > 0.206893034 ? n * n * n : (n - 4 / 29) / 7.787037
            }
            function ut(n) {
              return n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
            }
            function dt(n) {
              return Math.round(
                255 *
                  (n <= 0.00304
                    ? 12.92 * n
                    : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
              )
            }
            function ft(n, t, e) {
              return this instanceof ft
                ? ((this.r = ~~n), (this.g = ~~t), void (this.b = ~~e))
                : arguments.length < 2
                ? n instanceof ft
                  ? new ft(n.r, n.g, n.b)
                  : bt('' + n, ft, Qn)
                : new ft(n, t, e)
            }
            function pt(n) {
              return new ft(n >> 16, (n >> 8) & 255, 255 & n)
            }
            function mt(n) {
              return pt(n) + ''
            }
            ;(lt.brighter = function(n) {
              return new et(
                Math.min(100, this.l + rt * (arguments.length ? n : 1)),
                this.a,
                this.b
              )
            }),
              (lt.darker = function(n) {
                return new et(
                  Math.max(0, this.l - rt * (arguments.length ? n : 1)),
                  this.a,
                  this.b
                )
              }),
              (lt.rgb = function() {
                return st(this.l, this.a, this.b)
              }),
              (i.rgb = ft)
            var ht = (ft.prototype = new Zn())
            function gt(n) {
              return n < 16
                ? '0' + Math.max(0, n).toString(16)
                : Math.min(255, n).toString(16)
            }
            function bt(n, t, e) {
              var r,
                o,
                i,
                a = 0,
                l = 0,
                s = 0
              if ((r = /([a-z]+)\((.*)\)/.exec((n = n.toLowerCase()))))
                switch (((o = r[2].split(',')), r[1])) {
                  case 'hsl':
                    return e(
                      parseFloat(o[0]),
                      parseFloat(o[1]) / 100,
                      parseFloat(o[2]) / 100
                    )
                  case 'rgb':
                    return t(wt(o[0]), wt(o[1]), wt(o[2]))
                }
              return (i = kt.get(n))
                ? t(i.r, i.g, i.b)
                : (null == n ||
                    '#' !== n.charAt(0) ||
                    isNaN((i = parseInt(n.slice(1), 16))) ||
                    (4 === n.length
                      ? ((a = (3840 & i) >> 4),
                        (a |= a >> 4),
                        (l = 240 & i),
                        (l |= l >> 4),
                        (s = 15 & i),
                        (s |= s << 4))
                      : 7 === n.length &&
                        ((a = (16711680 & i) >> 16),
                        (l = (65280 & i) >> 8),
                        (s = 255 & i))),
                  t(a, l, s))
            }
            function vt(n, t, e) {
              var r,
                o,
                i = Math.min((n /= 255), (t /= 255), (e /= 255)),
                a = Math.max(n, t, e),
                l = a - i,
                s = (a + i) / 2
              return (
                l
                  ? ((o = s < 0.5 ? l / (a + i) : l / (2 - a - i)),
                    (r =
                      n == a
                        ? (t - e) / l + (t < e ? 6 : 0)
                        : t == a
                        ? (e - n) / l + 2
                        : (n - t) / l + 4),
                    (r *= 60))
                  : ((r = NaN), (o = s > 0 && s < 1 ? 0 : r)),
                new Gn(r, o, s)
              )
            }
            function xt(n, t, e) {
              var r = ut(
                  (0.4124564 * (n = yt(n)) +
                    0.3575761 * (t = yt(t)) +
                    0.1804375 * (e = yt(e))) /
                    ot
                ),
                o = ut((0.2126729 * n + 0.7151522 * t + 0.072175 * e) / it)
              return et(
                116 * o - 16,
                500 * (r - o),
                200 *
                  (o - ut((0.0193339 * n + 0.119192 * t + 0.9503041 * e) / at))
              )
            }
            function yt(n) {
              return (n /= 255) <= 0.04045
                ? n / 12.92
                : Math.pow((n + 0.055) / 1.055, 2.4)
            }
            function wt(n) {
              var t = parseFloat(n)
              return '%' === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
            }
            ;(ht.brighter = function(n) {
              n = Math.pow(0.7, arguments.length ? n : 1)
              var t = this.r,
                e = this.g,
                r = this.b,
                o = 30
              return t || e || r
                ? (t && t < o && (t = o),
                  e && e < o && (e = o),
                  r && r < o && (r = o),
                  new ft(
                    Math.min(255, t / n),
                    Math.min(255, e / n),
                    Math.min(255, r / n)
                  ))
                : new ft(o, o, o)
            }),
              (ht.darker = function(n) {
                return new ft(
                  (n = Math.pow(0.7, arguments.length ? n : 1)) * this.r,
                  n * this.g,
                  n * this.b
                )
              }),
              (ht.hsl = function() {
                return vt(this.r, this.g, this.b)
              }),
              (ht.toString = function() {
                return '#' + gt(this.r) + gt(this.g) + gt(this.b)
              })
            var kt = i.map({
              aliceblue: 15792383,
              antiquewhite: 16444375,
              aqua: 65535,
              aquamarine: 8388564,
              azure: 15794175,
              beige: 16119260,
              bisque: 16770244,
              black: 0,
              blanchedalmond: 16772045,
              blue: 255,
              blueviolet: 9055202,
              brown: 10824234,
              burlywood: 14596231,
              cadetblue: 6266528,
              chartreuse: 8388352,
              chocolate: 13789470,
              coral: 16744272,
              cornflowerblue: 6591981,
              cornsilk: 16775388,
              crimson: 14423100,
              cyan: 65535,
              darkblue: 139,
              darkcyan: 35723,
              darkgoldenrod: 12092939,
              darkgray: 11119017,
              darkgreen: 25600,
              darkgrey: 11119017,
              darkkhaki: 12433259,
              darkmagenta: 9109643,
              darkolivegreen: 5597999,
              darkorange: 16747520,
              darkorchid: 10040012,
              darkred: 9109504,
              darksalmon: 15308410,
              darkseagreen: 9419919,
              darkslateblue: 4734347,
              darkslategray: 3100495,
              darkslategrey: 3100495,
              darkturquoise: 52945,
              darkviolet: 9699539,
              deeppink: 16716947,
              deepskyblue: 49151,
              dimgray: 6908265,
              dimgrey: 6908265,
              dodgerblue: 2003199,
              firebrick: 11674146,
              floralwhite: 16775920,
              forestgreen: 2263842,
              fuchsia: 16711935,
              gainsboro: 14474460,
              ghostwhite: 16316671,
              gold: 16766720,
              goldenrod: 14329120,
              gray: 8421504,
              green: 32768,
              greenyellow: 11403055,
              grey: 8421504,
              honeydew: 15794160,
              hotpink: 16738740,
              indianred: 13458524,
              indigo: 4915330,
              ivory: 16777200,
              khaki: 15787660,
              lavender: 15132410,
              lavenderblush: 16773365,
              lawngreen: 8190976,
              lemonchiffon: 16775885,
              lightblue: 11393254,
              lightcoral: 15761536,
              lightcyan: 14745599,
              lightgoldenrodyellow: 16448210,
              lightgray: 13882323,
              lightgreen: 9498256,
              lightgrey: 13882323,
              lightpink: 16758465,
              lightsalmon: 16752762,
              lightseagreen: 2142890,
              lightskyblue: 8900346,
              lightslategray: 7833753,
              lightslategrey: 7833753,
              lightsteelblue: 11584734,
              lightyellow: 16777184,
              lime: 65280,
              limegreen: 3329330,
              linen: 16445670,
              magenta: 16711935,
              maroon: 8388608,
              mediumaquamarine: 6737322,
              mediumblue: 205,
              mediumorchid: 12211667,
              mediumpurple: 9662683,
              mediumseagreen: 3978097,
              mediumslateblue: 8087790,
              mediumspringgreen: 64154,
              mediumturquoise: 4772300,
              mediumvioletred: 13047173,
              midnightblue: 1644912,
              mintcream: 16121850,
              mistyrose: 16770273,
              moccasin: 16770229,
              navajowhite: 16768685,
              navy: 128,
              oldlace: 16643558,
              olive: 8421376,
              olivedrab: 7048739,
              orange: 16753920,
              orangered: 16729344,
              orchid: 14315734,
              palegoldenrod: 15657130,
              palegreen: 10025880,
              paleturquoise: 11529966,
              palevioletred: 14381203,
              papayawhip: 16773077,
              peachpuff: 16767673,
              peru: 13468991,
              pink: 16761035,
              plum: 14524637,
              powderblue: 11591910,
              purple: 8388736,
              rebeccapurple: 6697881,
              red: 16711680,
              rosybrown: 12357519,
              royalblue: 4286945,
              saddlebrown: 9127187,
              salmon: 16416882,
              sandybrown: 16032864,
              seagreen: 3050327,
              seashell: 16774638,
              sienna: 10506797,
              silver: 12632256,
              skyblue: 8900331,
              slateblue: 6970061,
              slategray: 7372944,
              slategrey: 7372944,
              snow: 16775930,
              springgreen: 65407,
              steelblue: 4620980,
              tan: 13808780,
              teal: 32896,
              thistle: 14204888,
              tomato: 16737095,
              turquoise: 4251856,
              violet: 15631086,
              wheat: 16113331,
              white: 16777215,
              whitesmoke: 16119285,
              yellow: 16776960,
              yellowgreen: 10145074
            })
            function Mt(n) {
              return 'function' == typeof n
                ? n
                : function() {
                    return n
                  }
            }
            function Et(n) {
              return function(t, e, r) {
                return (
                  2 === arguments.length &&
                    'function' == typeof e &&
                    ((r = e), (e = null)),
                  _t(t, e, n, r)
                )
              }
            }
            function _t(n, t, e, r) {
              var o = {},
                a = i.dispatch('beforesend', 'progress', 'load', 'error'),
                s = {},
                c = new XMLHttpRequest(),
                u = null
              function d() {
                var n,
                  t = c.status
                if (
                  (!t &&
                    (function(n) {
                      var t = n.responseType
                      return t && 'text' !== t ? n.response : n.responseText
                    })(c)) ||
                  (t >= 200 && t < 300) ||
                  304 === t
                ) {
                  try {
                    n = e.call(o, c)
                  } catch (n) {
                    return void a.error.call(o, n)
                  }
                  a.load.call(o, n)
                } else a.error.call(o, c)
              }
              return (
                !this.XDomainRequest ||
                  'withCredentials' in c ||
                  !/^(http(s)?:)?\/\//.test(n) ||
                  (c = new XDomainRequest()),
                'onload' in c
                  ? (c.onload = c.onerror = d)
                  : (c.onreadystatechange = function() {
                      c.readyState > 3 && d()
                    }),
                (c.onprogress = function(n) {
                  var t = i.event
                  i.event = n
                  try {
                    a.progress.call(o, c)
                  } finally {
                    i.event = t
                  }
                }),
                (o.header = function(n, t) {
                  return (
                    (n = (n + '').toLowerCase()),
                    arguments.length < 2
                      ? s[n]
                      : (null == t ? delete s[n] : (s[n] = t + ''), o)
                  )
                }),
                (o.mimeType = function(n) {
                  return arguments.length
                    ? ((t = null == n ? null : n + ''), o)
                    : t
                }),
                (o.responseType = function(n) {
                  return arguments.length ? ((u = n), o) : u
                }),
                (o.response = function(n) {
                  return (e = n), o
                }),
                ['get', 'post'].forEach(function(n) {
                  o[n] = function() {
                    return o.send.apply(o, [n].concat(l(arguments)))
                  }
                }),
                (o.send = function(e, r, i) {
                  if (
                    (2 === arguments.length &&
                      'function' == typeof r &&
                      ((i = r), (r = null)),
                    c.open(e, n, !0),
                    null == t || 'accept' in s || (s.accept = t + ',*/*'),
                    c.setRequestHeader)
                  )
                    for (var l in s) c.setRequestHeader(l, s[l])
                  return (
                    null != t && c.overrideMimeType && c.overrideMimeType(t),
                    null != u && (c.responseType = u),
                    null != i &&
                      o.on('error', i).on('load', function(n) {
                        i(null, n)
                      }),
                    a.beforesend.call(o, c),
                    c.send(null == r ? null : r),
                    o
                  )
                }),
                (o.abort = function() {
                  return c.abort(), o
                }),
                i.rebind(o, a, 'on'),
                null == r
                  ? o
                  : o.get(
                      (function(n) {
                        return 1 === n.length
                          ? function(t, e) {
                              n(null == t ? e : null)
                            }
                          : n
                      })(r)
                    )
              )
            }
            kt.forEach(function(n, t) {
              kt.set(n, pt(t))
            }),
              (i.functor = Mt),
              (i.xhr = Et(q)),
              (i.dsv = function(n, t) {
                var e = new RegExp('["' + n + '\n]'),
                  r = n.charCodeAt(0)
                function o(n, e, r) {
                  arguments.length < 3 && ((r = e), (e = null))
                  var o = _t(n, t, null == e ? i : a(e), r)
                  return (
                    (o.row = function(n) {
                      return arguments.length
                        ? o.response(null == (e = n) ? i : a(n))
                        : e
                    }),
                    o
                  )
                }
                function i(n) {
                  return o.parse(n.responseText)
                }
                function a(n) {
                  return function(t) {
                    return o.parse(t.responseText, n)
                  }
                }
                function l(t) {
                  return t.map(s).join(n)
                }
                function s(n) {
                  return e.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
                }
                return (
                  (o.parse = function(n, t) {
                    var e
                    return o.parseRows(n, function(n, r) {
                      if (e) return e(n, r - 1)
                      var o = new Function(
                        'd',
                        'return {' +
                          n
                            .map(function(n, t) {
                              return JSON.stringify(n) + ': d[' + t + ']'
                            })
                            .join(',') +
                          '}'
                      )
                      e = t
                        ? function(n, e) {
                            return t(o(n), e)
                          }
                        : o
                    })
                  }),
                  (o.parseRows = function(n, t) {
                    var e,
                      o,
                      i = {},
                      a = {},
                      l = [],
                      s = n.length,
                      c = 0,
                      u = 0
                    function d() {
                      if (c >= s) return a
                      if (o) return (o = !1), i
                      var t = c
                      if (34 === n.charCodeAt(t)) {
                        for (var e = t; e++ < s; )
                          if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1)) break
                            ++e
                          }
                        return (
                          (c = e + 2),
                          13 === (l = n.charCodeAt(e + 1))
                            ? ((o = !0), 10 === n.charCodeAt(e + 2) && ++c)
                            : 10 === l && (o = !0),
                          n.slice(t + 1, e).replace(/""/g, '"')
                        )
                      }
                      for (; c < s; ) {
                        var l,
                          u = 1
                        if (10 === (l = n.charCodeAt(c++))) o = !0
                        else if (13 === l)
                          (o = !0), 10 === n.charCodeAt(c) && (++c, ++u)
                        else if (l !== r) continue
                        return n.slice(t, c - u)
                      }
                      return n.slice(t)
                    }
                    for (; (e = d()) !== a; ) {
                      for (var f = []; e !== i && e !== a; )
                        f.push(e), (e = d())
                      ;(t && null == (f = t(f, u++))) || l.push(f)
                    }
                    return l
                  }),
                  (o.format = function(t) {
                    if (Array.isArray(t[0])) return o.formatRows(t)
                    var e = new L(),
                      r = []
                    return (
                      t.forEach(function(n) {
                        for (var t in n) e.has(t) || r.push(e.add(t))
                      }),
                      [r.map(s).join(n)]
                        .concat(
                          t.map(function(t) {
                            return r
                              .map(function(n) {
                                return s(t[n])
                              })
                              .join(n)
                          })
                        )
                        .join('\n')
                    )
                  }),
                  (o.formatRows = function(n) {
                    return n.map(l).join('\n')
                  }),
                  o
                )
              }),
              (i.csv = i.dsv(',', 'text/csv')),
              (i.tsv = i.dsv('\t', 'text/tab-separated-values'))
            var St,
              Tt,
              Nt,
              Ct,
              jt =
                this[P(this, 'requestAnimationFrame')] ||
                function(n) {
                  setTimeout(n, 17)
                }
            function At(n, t, e) {
              var r = arguments.length
              r < 2 && (t = 0), r < 3 && (e = Date.now())
              var o = { c: n, t: e + t, n: null }
              return (
                Tt ? (Tt.n = o) : (St = o),
                (Tt = o),
                Nt || ((Ct = clearTimeout(Ct)), (Nt = 1), jt(Ot)),
                o
              )
            }
            function Ot() {
              var n = zt(),
                t = Dt() - n
              t > 24
                ? (isFinite(t) && (clearTimeout(Ct), (Ct = setTimeout(Ot, t))),
                  (Nt = 0))
                : ((Nt = 1), jt(Ot))
            }
            function zt() {
              for (var n = Date.now(), t = St; t; )
                n >= t.t && t.c(n - t.t) && (t.c = null), (t = t.n)
              return n
            }
            function Dt() {
              for (var n, t = St, e = 1 / 0; t; )
                t.c
                  ? (t.t < e && (e = t.t), (t = (n = t).n))
                  : (t = n ? (n.n = t.n) : (St = t.n))
              return (Tt = n), e
            }
            function Lt(n, t) {
              return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
            }
            ;(i.timer = function() {
              At.apply(this, arguments)
            }),
              (i.timer.flush = function() {
                zt(), Dt()
              }),
              (i.round = function(n, t) {
                return t
                  ? Math.round(n * (t = Math.pow(10, t))) / t
                  : Math.round(n)
              })
            var qt = [
              'y',
              'z',
              'a',
              'f',
              'p',
              'n',
              '\xb5',
              'm',
              '',
              'k',
              'M',
              'G',
              'T',
              'P',
              'E',
              'Z',
              'Y'
            ].map(function(n, t) {
              var e = Math.pow(10, 3 * k(8 - t))
              return {
                scale:
                  t > 8
                    ? function(n) {
                        return n / e
                      }
                    : function(n) {
                        return n * e
                      },
                symbol: n
              }
            })
            function Ht(n) {
              var t = n.decimal,
                e = n.thousands,
                r = n.grouping,
                o = n.currency,
                a =
                  r && e
                    ? function(n, t) {
                        for (
                          var o = n.length, i = [], a = 0, l = r[0], s = 0;
                          o > 0 &&
                          l > 0 &&
                          (s + l + 1 > t && (l = Math.max(1, t - s)),
                          i.push(n.substring((o -= l), o + l)),
                          !((s += l + 1) > t));

                        )
                          l = r[(a = (a + 1) % r.length)]
                        return i.reverse().join(e)
                      }
                    : q
              return function(n) {
                var e = Pt.exec(n),
                  r = e[1] || ' ',
                  l = e[2] || '>',
                  s = e[3] || '-',
                  c = e[4] || '',
                  u = e[5],
                  d = +e[6],
                  f = e[7],
                  p = e[8],
                  m = e[9],
                  h = 1,
                  g = '',
                  b = '',
                  v = !1,
                  x = !0
                switch (
                  (p && (p = +p.substring(1)),
                  (u || ('0' === r && '=' === l)) && ((u = r = '0'), (l = '=')),
                  m)
                ) {
                  case 'n':
                    ;(f = !0), (m = 'g')
                    break
                  case '%':
                    ;(h = 100), (b = '%'), (m = 'f')
                    break
                  case 'p':
                    ;(h = 100), (b = '%'), (m = 'r')
                    break
                  case 'b':
                  case 'o':
                  case 'x':
                  case 'X':
                    '#' === c && (g = '0' + m.toLowerCase())
                  case 'c':
                    x = !1
                  case 'd':
                    ;(v = !0), (p = 0)
                    break
                  case 's':
                    ;(h = -1), (m = 'r')
                }
                '$' === c && ((g = o[0]), (b = o[1])),
                  'r' != m || p || (m = 'g'),
                  null != p &&
                    ('g' == m
                      ? (p = Math.max(1, Math.min(21, p)))
                      : ('e' != m && 'f' != m) ||
                        (p = Math.max(0, Math.min(20, p)))),
                  (m = It.get(m) || Rt)
                var y = u && f
                return function(n) {
                  var e = b
                  if (v && n % 1) return ''
                  var o =
                    n < 0 || (0 === n && 1 / n < 0)
                      ? ((n = -n), '-')
                      : '-' === s
                      ? ''
                      : s
                  if (h < 0) {
                    var c = i.formatPrefix(n, p)
                    ;(n = c.scale(n)), (e = c.symbol + b)
                  } else n *= h
                  var w,
                    k,
                    M = (n = m(n, p)).lastIndexOf('.')
                  if (M < 0) {
                    var E = x ? n.lastIndexOf('e') : -1
                    E < 0
                      ? ((w = n), (k = ''))
                      : ((w = n.substring(0, E)), (k = n.substring(E)))
                  } else (w = n.substring(0, M)), (k = t + n.substring(M + 1))
                  !u && f && (w = a(w, 1 / 0))
                  var _ = g.length + w.length + k.length + (y ? 0 : o.length),
                    S = _ < d ? new Array((_ = d - _ + 1)).join(r) : ''
                  return (
                    y && (w = a(S + w, S.length ? d - k.length : 1 / 0)),
                    (o += g),
                    (n = w + k),
                    ('<' === l
                      ? o + n + S
                      : '>' === l
                      ? S + o + n
                      : '^' === l
                      ? S.substring(0, (_ >>= 1)) + o + n + S.substring(_)
                      : o + (y ? n : S + n)) + e
                  )
                }
              }
            }
            i.formatPrefix = function(n, t) {
              var e = 0
              return (
                (n = +n) &&
                  (n < 0 && (n *= -1),
                  t && (n = i.round(n, Lt(n, t))),
                  (e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10)),
                  (e = Math.max(
                    -24,
                    Math.min(24, 3 * Math.floor((e - 1) / 3))
                  ))),
                qt[8 + e / 3]
              )
            }
            var Pt = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
              It = i.map({
                b: function(n) {
                  return n.toString(2)
                },
                c: function(n) {
                  return String.fromCharCode(n)
                },
                o: function(n) {
                  return n.toString(8)
                },
                x: function(n) {
                  return n.toString(16)
                },
                X: function(n) {
                  return n.toString(16).toUpperCase()
                },
                g: function(n, t) {
                  return n.toPrecision(t)
                },
                e: function(n, t) {
                  return n.toExponential(t)
                },
                f: function(n, t) {
                  return n.toFixed(t)
                },
                r: function(n, t) {
                  return (n = i.round(n, Lt(n, t))).toFixed(
                    Math.max(0, Math.min(20, Lt(n * (1 + 1e-15), t)))
                  )
                }
              })
            function Rt(n) {
              return n + ''
            }
            var Ft = (i.time = {}),
              Bt = Date
            function Ut() {
              this._ = new Date(
                arguments.length > 1
                  ? Date.UTC.apply(this, arguments)
                  : arguments[0]
              )
            }
            Ut.prototype = {
              getDate: function() {
                return this._.getUTCDate()
              },
              getDay: function() {
                return this._.getUTCDay()
              },
              getFullYear: function() {
                return this._.getUTCFullYear()
              },
              getHours: function() {
                return this._.getUTCHours()
              },
              getMilliseconds: function() {
                return this._.getUTCMilliseconds()
              },
              getMinutes: function() {
                return this._.getUTCMinutes()
              },
              getMonth: function() {
                return this._.getUTCMonth()
              },
              getSeconds: function() {
                return this._.getUTCSeconds()
              },
              getTime: function() {
                return this._.getTime()
              },
              getTimezoneOffset: function() {
                return 0
              },
              valueOf: function() {
                return this._.valueOf()
              },
              setDate: function() {
                $t.setUTCDate.apply(this._, arguments)
              },
              setDay: function() {
                $t.setUTCDay.apply(this._, arguments)
              },
              setFullYear: function() {
                $t.setUTCFullYear.apply(this._, arguments)
              },
              setHours: function() {
                $t.setUTCHours.apply(this._, arguments)
              },
              setMilliseconds: function() {
                $t.setUTCMilliseconds.apply(this._, arguments)
              },
              setMinutes: function() {
                $t.setUTCMinutes.apply(this._, arguments)
              },
              setMonth: function() {
                $t.setUTCMonth.apply(this._, arguments)
              },
              setSeconds: function() {
                $t.setUTCSeconds.apply(this._, arguments)
              },
              setTime: function() {
                $t.setTime.apply(this._, arguments)
              }
            }
            var $t = Date.prototype
            function Wt(n, t, e) {
              function r(t) {
                var e = n(t),
                  r = i(e, 1)
                return t - e < r - t ? e : r
              }
              function o(e) {
                return t((e = n(new Bt(e - 1))), 1), e
              }
              function i(n, e) {
                return t((n = new Bt(+n)), e), n
              }
              function a(n, r, i) {
                var a = o(n),
                  l = []
                if (i > 1)
                  for (; a < r; ) e(a) % i || l.push(new Date(+a)), t(a, 1)
                else for (; a < r; ) l.push(new Date(+a)), t(a, 1)
                return l
              }
              ;(n.floor = n),
                (n.round = r),
                (n.ceil = o),
                (n.offset = i),
                (n.range = a)
              var l = (n.utc = Yt(n))
              return (
                (l.floor = l),
                (l.round = Yt(r)),
                (l.ceil = Yt(o)),
                (l.offset = Yt(i)),
                (l.range = function(n, t, e) {
                  try {
                    Bt = Ut
                    var r = new Ut()
                    return (r._ = n), a(r, t, e)
                  } finally {
                    Bt = Date
                  }
                }),
                n
              )
            }
            function Yt(n) {
              return function(t, e) {
                try {
                  Bt = Ut
                  var r = new Ut()
                  return (r._ = t), n(r, e)._
                } finally {
                  Bt = Date
                }
              }
            }
            function Vt(n) {
              var t = n.dateTime,
                e = n.date,
                r = n.time,
                o = n.periods,
                a = n.days,
                l = n.shortDays,
                s = n.months,
                c = n.shortMonths
              function u(n) {
                var t = n.length
                function e(e) {
                  for (var r, o, i, a = [], l = -1, s = 0; ++l < t; )
                    37 === n.charCodeAt(l) &&
                      (a.push(n.slice(s, l)),
                      null != (o = Xt[(r = n.charAt(++l))]) &&
                        (r = n.charAt(++l)),
                      (i = w[r]) &&
                        (r = i(e, null == o ? ('e' === r ? ' ' : '0') : o)),
                      a.push(r),
                      (s = l + 1))
                  return a.push(n.slice(s, l)), a.join('')
                }
                return (
                  (e.parse = function(t) {
                    var e = {
                      y: 1900,
                      m: 0,
                      d: 1,
                      H: 0,
                      M: 0,
                      S: 0,
                      L: 0,
                      Z: null
                    }
                    if (d(e, n, t, 0) != t.length) return null
                    'p' in e && (e.H = (e.H % 12) + 12 * e.p)
                    var r = null != e.Z && Bt !== Ut,
                      o = new (r ? Ut : Bt)()
                    return (
                      'j' in e
                        ? o.setFullYear(e.y, 0, e.j)
                        : 'W' in e || 'U' in e
                        ? ('w' in e || (e.w = 'W' in e ? 1 : 0),
                          o.setFullYear(e.y, 0, 1),
                          o.setFullYear(
                            e.y,
                            0,
                            'W' in e
                              ? ((e.w + 6) % 7) +
                                  7 * e.W -
                                  ((o.getDay() + 5) % 7)
                              : e.w + 7 * e.U - ((o.getDay() + 6) % 7)
                          ))
                        : o.setFullYear(e.y, e.m, e.d),
                      o.setHours(
                        e.H + ((e.Z / 100) | 0),
                        e.M + (e.Z % 100),
                        e.S,
                        e.L
                      ),
                      r ? o._ : o
                    )
                  }),
                  (e.toString = function() {
                    return n
                  }),
                  e
                )
              }
              function d(n, t, e, r) {
                for (var o, i, a, l = 0, s = t.length, c = e.length; l < s; ) {
                  if (r >= c) return -1
                  if (37 === (o = t.charCodeAt(l++))) {
                    if (
                      ((a = t.charAt(l++)),
                      !(i = k[a in Xt ? t.charAt(l++) : a]) ||
                        (r = i(n, e, r)) < 0)
                    )
                      return -1
                  } else if (o != e.charCodeAt(r++)) return -1
                }
                return r
              }
              ;(u.utc = function(n) {
                var t = u(n)
                function e(n) {
                  try {
                    var e = new (Bt = Ut)()
                    return (e._ = n), t(e)
                  } finally {
                    Bt = Date
                  }
                }
                return (
                  (e.parse = function(n) {
                    try {
                      Bt = Ut
                      var e = t.parse(n)
                      return e && e._
                    } finally {
                      Bt = Date
                    }
                  }),
                  (e.toString = t.toString),
                  e
                )
              }),
                (u.multi = u.utc.multi = he)
              var f = i.map(),
                p = Qt(a),
                m = Kt(a),
                h = Qt(l),
                g = Kt(l),
                b = Qt(s),
                v = Kt(s),
                x = Qt(c),
                y = Kt(c)
              o.forEach(function(n, t) {
                f.set(n.toLowerCase(), t)
              })
              var w = {
                  a: function(n) {
                    return l[n.getDay()]
                  },
                  A: function(n) {
                    return a[n.getDay()]
                  },
                  b: function(n) {
                    return c[n.getMonth()]
                  },
                  B: function(n) {
                    return s[n.getMonth()]
                  },
                  c: u(t),
                  d: function(n, t) {
                    return Jt(n.getDate(), t, 2)
                  },
                  e: function(n, t) {
                    return Jt(n.getDate(), t, 2)
                  },
                  H: function(n, t) {
                    return Jt(n.getHours(), t, 2)
                  },
                  I: function(n, t) {
                    return Jt(n.getHours() % 12 || 12, t, 2)
                  },
                  j: function(n, t) {
                    return Jt(1 + Ft.dayOfYear(n), t, 3)
                  },
                  L: function(n, t) {
                    return Jt(n.getMilliseconds(), t, 3)
                  },
                  m: function(n, t) {
                    return Jt(n.getMonth() + 1, t, 2)
                  },
                  M: function(n, t) {
                    return Jt(n.getMinutes(), t, 2)
                  },
                  p: function(n) {
                    return o[+(n.getHours() >= 12)]
                  },
                  S: function(n, t) {
                    return Jt(n.getSeconds(), t, 2)
                  },
                  U: function(n, t) {
                    return Jt(Ft.sundayOfYear(n), t, 2)
                  },
                  w: function(n) {
                    return n.getDay()
                  },
                  W: function(n, t) {
                    return Jt(Ft.mondayOfYear(n), t, 2)
                  },
                  x: u(e),
                  X: u(r),
                  y: function(n, t) {
                    return Jt(n.getFullYear() % 100, t, 2)
                  },
                  Y: function(n, t) {
                    return Jt(n.getFullYear() % 1e4, t, 4)
                  },
                  Z: pe,
                  '%': function() {
                    return '%'
                  }
                },
                k = {
                  a: function(n, t, e) {
                    h.lastIndex = 0
                    var r = h.exec(t.slice(e))
                    return r
                      ? ((n.w = g.get(r[0].toLowerCase())), e + r[0].length)
                      : -1
                  },
                  A: function(n, t, e) {
                    p.lastIndex = 0
                    var r = p.exec(t.slice(e))
                    return r
                      ? ((n.w = m.get(r[0].toLowerCase())), e + r[0].length)
                      : -1
                  },
                  b: function(n, t, e) {
                    x.lastIndex = 0
                    var r = x.exec(t.slice(e))
                    return r
                      ? ((n.m = y.get(r[0].toLowerCase())), e + r[0].length)
                      : -1
                  },
                  B: function(n, t, e) {
                    b.lastIndex = 0
                    var r = b.exec(t.slice(e))
                    return r
                      ? ((n.m = v.get(r[0].toLowerCase())), e + r[0].length)
                      : -1
                  },
                  c: function(n, t, e) {
                    return d(n, w.c.toString(), t, e)
                  },
                  d: le,
                  e: le,
                  H: ce,
                  I: ce,
                  j: se,
                  L: fe,
                  m: ae,
                  M: ue,
                  p: function(n, t, e) {
                    var r = f.get(t.slice(e, (e += 2)).toLowerCase())
                    return null == r ? -1 : ((n.p = r), e)
                  },
                  S: de,
                  U: te,
                  w: ne,
                  W: ee,
                  x: function(n, t, e) {
                    return d(n, w.x.toString(), t, e)
                  },
                  X: function(n, t, e) {
                    return d(n, w.X.toString(), t, e)
                  },
                  y: oe,
                  Y: re,
                  Z: ie,
                  '%': me
                }
              return u
            }
            ;(Ft.year = Wt(
              function(n) {
                return (n = Ft.day(n)).setMonth(0, 1), n
              },
              function(n, t) {
                n.setFullYear(n.getFullYear() + t)
              },
              function(n) {
                return n.getFullYear()
              }
            )),
              (Ft.years = Ft.year.range),
              (Ft.years.utc = Ft.year.utc.range),
              (Ft.day = Wt(
                function(n) {
                  var t = new Bt(2e3, 0)
                  return (
                    t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
                  )
                },
                function(n, t) {
                  n.setDate(n.getDate() + t)
                },
                function(n) {
                  return n.getDate() - 1
                }
              )),
              (Ft.days = Ft.day.range),
              (Ft.days.utc = Ft.day.utc.range),
              (Ft.dayOfYear = function(n) {
                var t = Ft.year(n)
                return Math.floor(
                  (n -
                    t -
                    6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) /
                    864e5
                )
              }),
              [
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday'
              ].forEach(function(n, t) {
                t = 7 - t
                var e = (Ft[n] = Wt(
                  function(n) {
                    return (
                      (n = Ft.day(n)).setDate(
                        n.getDate() - ((n.getDay() + t) % 7)
                      ),
                      n
                    )
                  },
                  function(n, t) {
                    n.setDate(n.getDate() + 7 * Math.floor(t))
                  },
                  function(n) {
                    var e = Ft.year(n).getDay()
                    return (
                      Math.floor((Ft.dayOfYear(n) + ((e + t) % 7)) / 7) -
                      (e !== t)
                    )
                  }
                ))
                ;(Ft[n + 's'] = e.range),
                  (Ft[n + 's'].utc = e.utc.range),
                  (Ft[n + 'OfYear'] = function(n) {
                    var e = Ft.year(n).getDay()
                    return Math.floor((Ft.dayOfYear(n) + ((e + t) % 7)) / 7)
                  })
              }),
              (Ft.week = Ft.sunday),
              (Ft.weeks = Ft.sunday.range),
              (Ft.weeks.utc = Ft.sunday.utc.range),
              (Ft.weekOfYear = Ft.sundayOfYear)
            var Xt = { '-': '', _: ' ', 0: '0' },
              Zt = /^\s*\d+/,
              Gt = /^%/
            function Jt(n, t, e) {
              var r = n < 0 ? '-' : '',
                o = (r ? -n : n) + '',
                i = o.length
              return r + (i < e ? new Array(e - i + 1).join(t) + o : o)
            }
            function Qt(n) {
              return new RegExp('^(?:' + n.map(i.requote).join('|') + ')', 'i')
            }
            function Kt(n) {
              for (var t = new _(), e = -1, r = n.length; ++e < r; )
                t.set(n[e].toLowerCase(), e)
              return t
            }
            function ne(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 1))
              return r ? ((n.w = +r[0]), e + r[0].length) : -1
            }
            function te(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e))
              return r ? ((n.U = +r[0]), e + r[0].length) : -1
            }
            function ee(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e))
              return r ? ((n.W = +r[0]), e + r[0].length) : -1
            }
            function re(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 4))
              return r ? ((n.y = +r[0]), e + r[0].length) : -1
            }
            function oe(n, t, e) {
              Zt.lastIndex = 0
              var r,
                o = Zt.exec(t.slice(e, e + 2))
              return o
                ? ((n.y = (r = +o[0]) + (r > 68 ? 1900 : 2e3)), e + o[0].length)
                : -1
            }
            function ie(n, t, e) {
              return /^[+-]\d{4}$/.test((t = t.slice(e, e + 5)))
                ? ((n.Z = -t), e + 5)
                : -1
            }
            function ae(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 2))
              return r ? ((n.m = r[0] - 1), e + r[0].length) : -1
            }
            function le(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 2))
              return r ? ((n.d = +r[0]), e + r[0].length) : -1
            }
            function se(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 3))
              return r ? ((n.j = +r[0]), e + r[0].length) : -1
            }
            function ce(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 2))
              return r ? ((n.H = +r[0]), e + r[0].length) : -1
            }
            function ue(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 2))
              return r ? ((n.M = +r[0]), e + r[0].length) : -1
            }
            function de(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 2))
              return r ? ((n.S = +r[0]), e + r[0].length) : -1
            }
            function fe(n, t, e) {
              Zt.lastIndex = 0
              var r = Zt.exec(t.slice(e, e + 3))
              return r ? ((n.L = +r[0]), e + r[0].length) : -1
            }
            function pe(n) {
              var t = n.getTimezoneOffset(),
                e = t > 0 ? '-' : '+',
                r = (k(t) / 60) | 0,
                o = k(t) % 60
              return e + Jt(r, '0', 2) + Jt(o, '0', 2)
            }
            function me(n, t, e) {
              Gt.lastIndex = 0
              var r = Gt.exec(t.slice(e, e + 1))
              return r ? e + r[0].length : -1
            }
            function he(n) {
              for (var t = n.length, e = -1; ++e < t; ) n[e][0] = this(n[e][0])
              return function(t) {
                for (var e = 0, r = n[e]; !r[1](t); ) r = n[++e]
                return r[0](t)
              }
            }
            i.locale = function(n) {
              return { numberFormat: Ht(n), timeFormat: Vt(n) }
            }
            var ge = i.locale({
              decimal: '.',
              thousands: ',',
              grouping: [3],
              currency: ['$', ''],
              dateTime: '%a %b %e %X %Y',
              date: '%m/%d/%Y',
              time: '%H:%M:%S',
              periods: ['AM', 'PM'],
              days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ],
              shortMonths: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ]
            })
            function be() {}
            ;(i.format = ge.numberFormat),
              (i.geo = {}),
              (be.prototype = {
                s: 0,
                t: 0,
                add: function(n) {
                  xe(n, this.t, ve),
                    xe(ve.s, this.s, this),
                    this.s ? (this.t += ve.t) : (this.s = ve.t)
                },
                reset: function() {
                  this.s = this.t = 0
                },
                valueOf: function() {
                  return this.s
                }
              })
            var ve = new be()
            function xe(n, t, e) {
              var r = (e.s = n + t),
                o = r - n,
                i = r - o
              e.t = n - i + (t - o)
            }
            function ye(n, t) {
              n && ke.hasOwnProperty(n.type) && ke[n.type](n, t)
            }
            i.geo.stream = function(n, t) {
              n && we.hasOwnProperty(n.type) ? we[n.type](n, t) : ye(n, t)
            }
            var we = {
                Feature: function(n, t) {
                  ye(n.geometry, t)
                },
                FeatureCollection: function(n, t) {
                  for (var e = n.features, r = -1, o = e.length; ++r < o; )
                    ye(e[r].geometry, t)
                }
              },
              ke = {
                Sphere: function(n, t) {
                  t.sphere()
                },
                Point: function(n, t) {
                  ;(n = n.coordinates), t.point(n[0], n[1], n[2])
                },
                MultiPoint: function(n, t) {
                  for (var e = n.coordinates, r = -1, o = e.length; ++r < o; )
                    (n = e[r]), t.point(n[0], n[1], n[2])
                },
                LineString: function(n, t) {
                  Me(n.coordinates, t, 0)
                },
                MultiLineString: function(n, t) {
                  for (var e = n.coordinates, r = -1, o = e.length; ++r < o; )
                    Me(e[r], t, 0)
                },
                Polygon: function(n, t) {
                  Ee(n.coordinates, t)
                },
                MultiPolygon: function(n, t) {
                  for (var e = n.coordinates, r = -1, o = e.length; ++r < o; )
                    Ee(e[r], t)
                },
                GeometryCollection: function(n, t) {
                  for (var e = n.geometries, r = -1, o = e.length; ++r < o; )
                    ye(e[r], t)
                }
              }
            function Me(n, t, e) {
              var r,
                o = -1,
                i = n.length - e
              for (t.lineStart(); ++o < i; )
                (r = n[o]), t.point(r[0], r[1], r[2])
              t.lineEnd()
            }
            function Ee(n, t) {
              var e = -1,
                r = n.length
              for (t.polygonStart(); ++e < r; ) Me(n[e], t, 1)
              t.polygonEnd()
            }
            i.geo.area = function(n) {
              return (_e = 0), i.geo.stream(n, Pe), _e
            }
            var _e,
              Se,
              Te,
              Ne,
              Ce,
              je,
              Ae,
              Oe,
              ze,
              De,
              Le,
              qe,
              He = new be(),
              Pe = {
                sphere: function() {
                  _e += 4 * zn
                },
                point: R,
                lineStart: R,
                lineEnd: R,
                polygonStart: function() {
                  He.reset(), (Pe.lineStart = Ie)
                },
                polygonEnd: function() {
                  var n = 2 * He
                  ;(_e += n < 0 ? 4 * zn + n : n),
                    (Pe.lineStart = Pe.lineEnd = Pe.point = R)
                }
              }
            function Ie() {
              var n, t, e, r, o
              function i(n, t) {
                t = (t * Hn) / 2 + zn / 4
                var i = (n *= Hn) - e,
                  a = i >= 0 ? 1 : -1,
                  l = a * i,
                  s = Math.cos(t),
                  c = Math.sin(t),
                  u = o * c,
                  d = r * s + u * Math.cos(l),
                  f = u * a * Math.sin(l)
                He.add(Math.atan2(f, d)), (e = n), (r = s), (o = c)
              }
              ;(Pe.point = function(a, l) {
                ;(Pe.point = i),
                  (e = (n = a) * Hn),
                  (r = Math.cos((l = ((t = l) * Hn) / 2 + zn / 4))),
                  (o = Math.sin(l))
              }),
                (Pe.lineEnd = function() {
                  i(n, t)
                })
            }
            function Re(n) {
              var t = n[0],
                e = n[1],
                r = Math.cos(e)
              return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
            }
            function Fe(n, t) {
              return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
            }
            function Be(n, t) {
              return [
                n[1] * t[2] - n[2] * t[1],
                n[2] * t[0] - n[0] * t[2],
                n[0] * t[1] - n[1] * t[0]
              ]
            }
            function Ue(n, t) {
              ;(n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2])
            }
            function $e(n, t) {
              return [n[0] * t, n[1] * t, n[2] * t]
            }
            function We(n) {
              var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])
              ;(n[0] /= t), (n[1] /= t), (n[2] /= t)
            }
            function Ye(n) {
              return [Math.atan2(n[1], n[0]), Bn(n[2])]
            }
            function Ve(n, t) {
              return k(n[0] - t[0]) < An && k(n[1] - t[1]) < An
            }
            ;(i.geo.bounds = (function() {
              var n,
                t,
                e,
                r,
                o,
                a,
                l,
                s,
                c,
                u,
                d,
                f = {
                  point: p,
                  lineStart: h,
                  lineEnd: g,
                  polygonStart: function() {
                    ;(f.point = b),
                      (f.lineStart = v),
                      (f.lineEnd = x),
                      (c = 0),
                      Pe.polygonStart()
                  },
                  polygonEnd: function() {
                    Pe.polygonEnd(),
                      (f.point = p),
                      (f.lineStart = h),
                      (f.lineEnd = g),
                      He < 0
                        ? ((n = -(e = 180)), (t = -(r = 90)))
                        : c > An
                        ? (r = 90)
                        : c < -An && (t = -90),
                      (d[0] = n),
                      (d[1] = e)
                  }
                }
              function p(o, i) {
                u.push((d = [(n = o), (e = o)])),
                  i < t && (t = i),
                  i > r && (r = i)
              }
              function m(i, a) {
                var l = Re([i * Hn, a * Hn])
                if (s) {
                  var c = Be(s, l),
                    u = Be([c[1], -c[0], 0], c)
                  We(u), (u = Ye(u))
                  var d = i - o,
                    f = d > 0 ? 1 : -1,
                    m = u[0] * Pn * f,
                    h = k(d) > 180
                  if (h ^ (f * o < m && m < f * i))
                    (g = u[1] * Pn) > r && (r = g)
                  else if (
                    h ^ (f * o < (m = ((m + 360) % 360) - 180) && m < f * i)
                  ) {
                    var g
                    ;(g = -u[1] * Pn) < t && (t = g)
                  } else a < t && (t = a), a > r && (r = a)
                  h
                    ? i < o
                      ? y(n, i) > y(n, e) && (e = i)
                      : y(i, e) > y(n, e) && (n = i)
                    : e >= n
                    ? (i < n && (n = i), i > e && (e = i))
                    : i > o
                    ? y(n, i) > y(n, e) && (e = i)
                    : y(i, e) > y(n, e) && (n = i)
                } else p(i, a)
                ;(s = l), (o = i)
              }
              function h() {
                f.point = m
              }
              function g() {
                ;(d[0] = n), (d[1] = e), (f.point = p), (s = null)
              }
              function b(n, t) {
                if (s) {
                  var e = n - o
                  c += k(e) > 180 ? e + (e > 0 ? 360 : -360) : e
                } else (a = n), (l = t)
                Pe.point(n, t), m(n, t)
              }
              function v() {
                Pe.lineStart()
              }
              function x() {
                b(a, l),
                  Pe.lineEnd(),
                  k(c) > An && (n = -(e = 180)),
                  (d[0] = n),
                  (d[1] = e),
                  (s = null)
              }
              function y(n, t) {
                return (t -= n) < 0 ? t + 360 : t
              }
              function w(n, t) {
                return n[0] - t[0]
              }
              function M(n, t) {
                return t[0] <= t[1]
                  ? t[0] <= n && n <= t[1]
                  : n < t[0] || t[1] < n
              }
              return function(o) {
                if (
                  ((r = e = -(n = t = 1 / 0)),
                  (u = []),
                  i.geo.stream(o, f),
                  (c = u.length))
                ) {
                  u.sort(w)
                  for (var a = 1, l = [(h = u[0])]; a < c; ++a)
                    M((p = u[a])[0], h) || M(p[1], h)
                      ? (y(h[0], p[1]) > y(h[0], h[1]) && (h[1] = p[1]),
                        y(p[0], h[1]) > y(h[0], h[1]) && (h[0] = p[0]))
                      : l.push((h = p))
                  for (
                    var s,
                      c,
                      p,
                      m = -1 / 0,
                      h = ((a = 0), l[(c = l.length - 1)]);
                    a <= c;
                    h = p, ++a
                  )
                    (p = l[a]),
                      (s = y(h[1], p[0])) > m &&
                        ((m = s), (n = p[0]), (e = h[1]))
                }
                return (
                  (u = d = null),
                  n === 1 / 0 || t === 1 / 0
                    ? [[NaN, NaN], [NaN, NaN]]
                    : [[n, t], [e, r]]
                )
              }
            })()),
              (i.geo.centroid = function(n) {
                ;(Se = Te = Ne = Ce = je = Ae = Oe = ze = De = Le = qe = 0),
                  i.geo.stream(n, Xe)
                var t = De,
                  e = Le,
                  r = qe,
                  o = t * t + e * e + r * r
                return o < On &&
                  ((t = Ae),
                  (e = Oe),
                  (r = ze),
                  Te < An && ((t = Ne), (e = Ce), (r = je)),
                  (o = t * t + e * e + r * r) < On)
                  ? [NaN, NaN]
                  : [Math.atan2(e, t) * Pn, Bn(r / Math.sqrt(o)) * Pn]
              })
            var Xe = {
              sphere: R,
              point: Ze,
              lineStart: Je,
              lineEnd: Qe,
              polygonStart: function() {
                Xe.lineStart = Ke
              },
              polygonEnd: function() {
                Xe.lineStart = Je
              }
            }
            function Ze(n, t) {
              n *= Hn
              var e = Math.cos((t *= Hn))
              Ge(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
            }
            function Ge(n, t, e) {
              ;(Ne += (n - Ne) / ++Se),
                (Ce += (t - Ce) / Se),
                (je += (e - je) / Se)
            }
            function Je() {
              var n, t, e
              function r(r, o) {
                r *= Hn
                var i = Math.cos((o *= Hn)),
                  a = i * Math.cos(r),
                  l = i * Math.sin(r),
                  s = Math.sin(o),
                  c = Math.atan2(
                    Math.sqrt(
                      (c = t * s - e * l) * c +
                        (c = e * a - n * s) * c +
                        (c = n * l - t * a) * c
                    ),
                    n * a + t * l + e * s
                  )
                ;(Te += c),
                  (Ae += c * (n + (n = a))),
                  (Oe += c * (t + (t = l))),
                  (ze += c * (e + (e = s))),
                  Ge(n, t, e)
              }
              Xe.point = function(o, i) {
                o *= Hn
                var a = Math.cos((i *= Hn))
                ;(n = a * Math.cos(o)),
                  (t = a * Math.sin(o)),
                  (e = Math.sin(i)),
                  (Xe.point = r),
                  Ge(n, t, e)
              }
            }
            function Qe() {
              Xe.point = Ze
            }
            function Ke() {
              var n, t, e, r, o
              function i(n, t) {
                n *= Hn
                var i = Math.cos((t *= Hn)),
                  a = i * Math.cos(n),
                  l = i * Math.sin(n),
                  s = Math.sin(t),
                  c = r * s - o * l,
                  u = o * a - e * s,
                  d = e * l - r * a,
                  f = Math.sqrt(c * c + u * u + d * d),
                  p = e * a + r * l + o * s,
                  m = f && -Fn(p) / f,
                  h = Math.atan2(f, p)
                ;(De += m * c),
                  (Le += m * u),
                  (qe += m * d),
                  (Te += h),
                  (Ae += h * (e + (e = a))),
                  (Oe += h * (r + (r = l))),
                  (ze += h * (o + (o = s))),
                  Ge(e, r, o)
              }
              ;(Xe.point = function(a, l) {
                ;(n = a), (t = l), (Xe.point = i), (a *= Hn)
                var s = Math.cos((l *= Hn))
                ;(e = s * Math.cos(a)),
                  (r = s * Math.sin(a)),
                  (o = Math.sin(l)),
                  Ge(e, r, o)
              }),
                (Xe.lineEnd = function() {
                  i(n, t), (Xe.lineEnd = Qe), (Xe.point = Ze)
                })
            }
            function nr(n, t) {
              function e(e, r) {
                return (e = n(e, r)), t(e[0], e[1])
              }
              return (
                n.invert &&
                  t.invert &&
                  (e.invert = function(e, r) {
                    return (e = t.invert(e, r)) && n.invert(e[0], e[1])
                  }),
                e
              )
            }
            function tr() {
              return !0
            }
            function er(n, t, e, r, o) {
              var i = [],
                a = []
              if (
                (n.forEach(function(n) {
                  if (!((t = n.length - 1) <= 0)) {
                    var t,
                      e = n[0],
                      r = n[t]
                    if (Ve(e, r)) {
                      o.lineStart()
                      for (var l = 0; l < t; ++l) o.point((e = n[l])[0], e[1])
                      o.lineEnd()
                    } else {
                      var s = new or(e, n, null, !0),
                        c = new or(e, null, s, !1)
                      ;(s.o = c),
                        i.push(s),
                        a.push(c),
                        (s = new or(r, n, null, !1)),
                        (c = new or(r, null, s, !0)),
                        (s.o = c),
                        i.push(s),
                        a.push(c)
                    }
                  }
                }),
                a.sort(t),
                rr(i),
                rr(a),
                i.length)
              ) {
                for (var l = 0, s = e, c = a.length; l < c; ++l) a[l].e = s = !s
                for (var u, d, f = i[0]; ; ) {
                  for (var p = f, m = !0; p.v; ) if ((p = p.n) === f) return
                  ;(u = p.z), o.lineStart()
                  do {
                    if (((p.v = p.o.v = !0), p.e)) {
                      if (m)
                        for (l = 0, c = u.length; l < c; ++l)
                          o.point((d = u[l])[0], d[1])
                      else r(p.x, p.n.x, 1, o)
                      p = p.n
                    } else {
                      if (m)
                        for (l = (u = p.p.z).length - 1; l >= 0; --l)
                          o.point((d = u[l])[0], d[1])
                      else r(p.x, p.p.x, -1, o)
                      p = p.p
                    }
                    ;(u = (p = p.o).z), (m = !m)
                  } while (!p.v)
                  o.lineEnd()
                }
              }
            }
            function rr(n) {
              if ((t = n.length)) {
                for (var t, e, r = 0, o = n[0]; ++r < t; )
                  (o.n = e = n[r]), (e.p = o), (o = e)
                ;(o.n = e = n[0]), (e.p = o)
              }
            }
            function or(n, t, e, r) {
              ;(this.x = n),
                (this.z = t),
                (this.o = e),
                (this.e = r),
                (this.v = !1),
                (this.n = this.p = null)
            }
            function ir(n, t, e, r) {
              return function(o, a) {
                var l,
                  s = t(a),
                  c = o.invert(r[0], r[1]),
                  u = {
                    point: d,
                    lineStart: p,
                    lineEnd: m,
                    polygonStart: function() {
                      ;(u.point = y),
                        (u.lineStart = w),
                        (u.lineEnd = k),
                        (l = []),
                        (h = [])
                    },
                    polygonEnd: function() {
                      ;(u.point = d),
                        (u.lineStart = p),
                        (u.lineEnd = m),
                        (l = i.merge(l))
                      var n = (function(n, t) {
                        var e = n[0],
                          r = n[1],
                          o = [Math.sin(e), -Math.cos(e), 0],
                          i = 0,
                          a = 0
                        He.reset()
                        for (var l = 0, s = t.length; l < s; ++l) {
                          var c = t[l],
                            u = c.length
                          if (u)
                            for (
                              var d = c[0],
                                f = d[0],
                                p = d[1] / 2 + zn / 4,
                                m = Math.sin(p),
                                h = Math.cos(p),
                                g = 1;
                              ;

                            ) {
                              g === u && (g = 0)
                              var b = (n = c[g])[0],
                                v = n[1] / 2 + zn / 4,
                                x = Math.sin(v),
                                y = Math.cos(v),
                                w = b - f,
                                k = w >= 0 ? 1 : -1,
                                M = k * w,
                                E = M > zn,
                                _ = m * x
                              if (
                                (He.add(
                                  Math.atan2(
                                    _ * k * Math.sin(M),
                                    h * y + _ * Math.cos(M)
                                  )
                                ),
                                (i += E ? w + k * Dn : w),
                                E ^ (f >= e) ^ (b >= e))
                              ) {
                                var S = Be(Re(d), Re(n))
                                We(S)
                                var T = Be(o, S)
                                We(T)
                                var N = (E ^ (w >= 0) ? -1 : 1) * Bn(T[2])
                                ;(r > N || (r === N && (S[0] || S[1]))) &&
                                  (a += E ^ (w >= 0) ? 1 : -1)
                              }
                              if (!g++) break
                              ;(f = b), (m = x), (h = y), (d = n)
                            }
                        }
                        return (i < -An || (i < An && He < -An)) ^ (1 & a)
                      })(c, h)
                      l.length
                        ? (x || (a.polygonStart(), (x = !0)),
                          er(l, sr, n, e, a))
                        : n &&
                          (x || (a.polygonStart(), (x = !0)),
                          a.lineStart(),
                          e(null, null, 1, a),
                          a.lineEnd()),
                        x && (a.polygonEnd(), (x = !1)),
                        (l = h = null)
                    },
                    sphere: function() {
                      a.polygonStart(),
                        a.lineStart(),
                        e(null, null, 1, a),
                        a.lineEnd(),
                        a.polygonEnd()
                    }
                  }
                function d(t, e) {
                  var r = o(t, e)
                  n((t = r[0]), (e = r[1])) && a.point(t, e)
                }
                function f(n, t) {
                  var e = o(n, t)
                  s.point(e[0], e[1])
                }
                function p() {
                  ;(u.point = f), s.lineStart()
                }
                function m() {
                  ;(u.point = d), s.lineEnd()
                }
                var h,
                  g,
                  b = lr(),
                  v = t(b),
                  x = !1
                function y(n, t) {
                  g.push([n, t])
                  var e = o(n, t)
                  v.point(e[0], e[1])
                }
                function w() {
                  v.lineStart(), (g = [])
                }
                function k() {
                  y(g[0][0], g[0][1]), v.lineEnd()
                  var n,
                    t = v.clean(),
                    e = b.buffer(),
                    r = e.length
                  if ((g.pop(), h.push(g), (g = null), r))
                    if (1 & t) {
                      var o,
                        i = -1
                      if ((r = (n = e[0]).length - 1) > 0) {
                        for (
                          x || (a.polygonStart(), (x = !0)), a.lineStart();
                          ++i < r;

                        )
                          a.point((o = n[i])[0], o[1])
                        a.lineEnd()
                      }
                    } else
                      r > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
                        l.push(e.filter(ar))
                }
                return u
              }
            }
            function ar(n) {
              return n.length > 1
            }
            function lr() {
              var n,
                t = []
              return {
                lineStart: function() {
                  t.push((n = []))
                },
                point: function(t, e) {
                  n.push([t, e])
                },
                lineEnd: R,
                buffer: function() {
                  var e = t
                  return (t = []), (n = null), e
                },
                rejoin: function() {
                  t.length > 1 && t.push(t.pop().concat(t.shift()))
                }
              }
            }
            function sr(n, t) {
              return (
                ((n = n.x)[0] < 0 ? n[1] - qn - An : qn - n[1]) -
                ((t = t.x)[0] < 0 ? t[1] - qn - An : qn - t[1])
              )
            }
            var cr = ir(
              tr,
              function(n) {
                var t,
                  e = NaN,
                  r = NaN,
                  o = NaN
                return {
                  lineStart: function() {
                    n.lineStart(), (t = 1)
                  },
                  point: function(i, a) {
                    var l = i > 0 ? zn : -zn,
                      s = k(i - e)
                    k(s - zn) < An
                      ? (n.point(e, (r = (r + a) / 2 > 0 ? qn : -qn)),
                        n.point(o, r),
                        n.lineEnd(),
                        n.lineStart(),
                        n.point(l, r),
                        n.point(i, r),
                        (t = 0))
                      : o !== l &&
                        s >= zn &&
                        (k(e - o) < An && (e -= o * An),
                        k(i - l) < An && (i -= l * An),
                        (r = (function(n, t, e, r) {
                          var o,
                            i,
                            a = Math.sin(n - e)
                          return k(a) > An
                            ? Math.atan(
                                (Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) -
                                  Math.sin(r) *
                                    (o = Math.cos(t)) *
                                    Math.sin(n)) /
                                  (o * i * a)
                              )
                            : (t + r) / 2
                        })(e, r, i, a)),
                        n.point(o, r),
                        n.lineEnd(),
                        n.lineStart(),
                        n.point(l, r),
                        (t = 0)),
                      n.point((e = i), (r = a)),
                      (o = l)
                  },
                  lineEnd: function() {
                    n.lineEnd(), (e = r = NaN)
                  },
                  clean: function() {
                    return 2 - t
                  }
                }
              },
              function(n, t, e, r) {
                var o
                if (null == n)
                  (o = e * qn),
                    r.point(-zn, o),
                    r.point(0, o),
                    r.point(zn, o),
                    r.point(zn, 0),
                    r.point(zn, -o),
                    r.point(0, -o),
                    r.point(-zn, -o),
                    r.point(-zn, 0),
                    r.point(-zn, o)
                else if (k(n[0] - t[0]) > An) {
                  var i = n[0] < t[0] ? zn : -zn
                  ;(o = (e * i) / 2),
                    r.point(-i, o),
                    r.point(0, o),
                    r.point(i, o)
                } else r.point(t[0], t[1])
              },
              [-zn, -zn / 2]
            )
            function ur(n) {
              var t = Math.cos(n),
                e = t > 0,
                r = k(t) > An
              return ir(
                o,
                function(n) {
                  var t, l, s, c, u
                  return {
                    lineStart: function() {
                      ;(c = s = !1), (u = 1)
                    },
                    point: function(d, f) {
                      var p,
                        m = [d, f],
                        h = o(d, f),
                        g = e
                          ? h
                            ? 0
                            : a(d, f)
                          : h
                          ? a(d + (d < 0 ? zn : -zn), f)
                          : 0
                      if (
                        (!t && (c = s = h) && n.lineStart(),
                        h !== s &&
                          ((p = i(t, m)),
                          (Ve(t, p) || Ve(m, p)) &&
                            ((m[0] += An), (m[1] += An), (h = o(m[0], m[1])))),
                        h !== s)
                      )
                        (u = 0),
                          h
                            ? (n.lineStart(),
                              (p = i(m, t)),
                              n.point(p[0], p[1]))
                            : ((p = i(t, m)), n.point(p[0], p[1]), n.lineEnd()),
                          (t = p)
                      else if (r && t && e ^ h) {
                        var b
                        g & l ||
                          !(b = i(m, t, !0)) ||
                          ((u = 0),
                          e
                            ? (n.lineStart(),
                              n.point(b[0][0], b[0][1]),
                              n.point(b[1][0], b[1][1]),
                              n.lineEnd())
                            : (n.point(b[1][0], b[1][1]),
                              n.lineEnd(),
                              n.lineStart(),
                              n.point(b[0][0], b[0][1])))
                      }
                      !h || (t && Ve(t, m)) || n.point(m[0], m[1]),
                        (t = m),
                        (s = h),
                        (l = g)
                    },
                    lineEnd: function() {
                      s && n.lineEnd(), (t = null)
                    },
                    clean: function() {
                      return u | ((c && s) << 1)
                    }
                  }
                },
                Vr(n, 6 * Hn),
                e ? [0, -n] : [-zn, n - zn]
              )
              function o(n, e) {
                return Math.cos(n) * Math.cos(e) > t
              }
              function i(n, e, r) {
                var o = [1, 0, 0],
                  i = Be(Re(n), Re(e)),
                  a = Fe(i, i),
                  l = i[0],
                  s = a - l * l
                if (!s) return !r && n
                var c = (t * a) / s,
                  u = (-t * l) / s,
                  d = Be(o, i),
                  f = $e(o, c)
                Ue(f, $e(i, u))
                var p = d,
                  m = Fe(f, p),
                  h = Fe(p, p),
                  g = m * m - h * (Fe(f, f) - 1)
                if (!(g < 0)) {
                  var b = Math.sqrt(g),
                    v = $e(p, (-m - b) / h)
                  if ((Ue(v, f), (v = Ye(v)), !r)) return v
                  var x,
                    y = n[0],
                    w = e[0],
                    M = n[1],
                    E = e[1]
                  w < y && ((x = y), (y = w), (w = x))
                  var _ = w - y,
                    S = k(_ - zn) < An
                  if (
                    (!S && E < M && ((x = M), (M = E), (E = x)),
                    S || _ < An
                      ? S
                        ? (M + E > 0) ^ (v[1] < (k(v[0] - y) < An ? M : E))
                        : M <= v[1] && v[1] <= E
                      : (_ > zn) ^ (y <= v[0] && v[0] <= w))
                  ) {
                    var T = $e(p, (-m + b) / h)
                    return Ue(T, f), [v, Ye(T)]
                  }
                }
              }
              function a(t, r) {
                var o = e ? n : zn - n,
                  i = 0
                return (
                  t < -o ? (i |= 1) : t > o && (i |= 2),
                  r < -o ? (i |= 4) : r > o && (i |= 8),
                  i
                )
              }
            }
            function dr(n, t, e, r) {
              return function(o) {
                var i,
                  a = o.a,
                  l = o.b,
                  s = a.x,
                  c = a.y,
                  u = 0,
                  d = 1,
                  f = l.x - s,
                  p = l.y - c
                if (((i = n - s), f || !(i > 0))) {
                  if (((i /= f), f < 0)) {
                    if (i < u) return
                    i < d && (d = i)
                  } else if (f > 0) {
                    if (i > d) return
                    i > u && (u = i)
                  }
                  if (((i = e - s), f || !(i < 0))) {
                    if (((i /= f), f < 0)) {
                      if (i > d) return
                      i > u && (u = i)
                    } else if (f > 0) {
                      if (i < u) return
                      i < d && (d = i)
                    }
                    if (((i = t - c), p || !(i > 0))) {
                      if (((i /= p), p < 0)) {
                        if (i < u) return
                        i < d && (d = i)
                      } else if (p > 0) {
                        if (i > d) return
                        i > u && (u = i)
                      }
                      if (((i = r - c), p || !(i < 0))) {
                        if (((i /= p), p < 0)) {
                          if (i > d) return
                          i > u && (u = i)
                        } else if (p > 0) {
                          if (i < u) return
                          i < d && (d = i)
                        }
                        return (
                          u > 0 && (o.a = { x: s + u * f, y: c + u * p }),
                          d < 1 && (o.b = { x: s + d * f, y: c + d * p }),
                          o
                        )
                      }
                    }
                  }
                }
              }
            }
            var fr = 1e9
            function pr(n, t, e, r) {
              return function(s) {
                var c,
                  u,
                  d,
                  f,
                  p,
                  m,
                  h,
                  g,
                  b,
                  v,
                  x,
                  y = s,
                  w = lr(),
                  k = dr(n, t, e, r),
                  M = {
                    point: S,
                    lineStart: function() {
                      ;(M.point = T),
                        u && u.push((d = [])),
                        (v = !0),
                        (b = !1),
                        (h = g = NaN)
                    },
                    lineEnd: function() {
                      c && (T(f, p), m && b && w.rejoin(), c.push(w.buffer())),
                        (M.point = S),
                        b && s.lineEnd()
                    },
                    polygonStart: function() {
                      ;(s = w), (c = []), (u = []), (x = !0)
                    },
                    polygonEnd: function() {
                      ;(s = y), (c = i.merge(c))
                      var t = (function(n) {
                          for (
                            var t = 0, e = u.length, r = n[1], o = 0;
                            o < e;
                            ++o
                          )
                            for (
                              var i, a = 1, l = u[o], s = l.length, c = l[0];
                              a < s;
                              ++a
                            )
                              (i = l[a]),
                                c[1] <= r
                                  ? i[1] > r && Rn(c, i, n) > 0 && ++t
                                  : i[1] <= r && Rn(c, i, n) < 0 && --t,
                                (c = i)
                          return 0 !== t
                        })([n, r]),
                        e = x && t,
                        o = c.length
                      ;(e || o) &&
                        (s.polygonStart(),
                        e && (s.lineStart(), E(null, null, 1, s), s.lineEnd()),
                        o && er(c, a, t, E, s),
                        s.polygonEnd()),
                        (c = u = d = null)
                    }
                  }
                function E(i, a, s, c) {
                  var u = 0,
                    d = 0
                  if (
                    null == i ||
                    (u = o(i, s)) !== (d = o(a, s)) ||
                    (l(i, a) < 0) ^ (s > 0)
                  )
                    do {
                      c.point(0 === u || 3 === u ? n : e, u > 1 ? r : t)
                    } while ((u = (u + s + 4) % 4) !== d)
                  else c.point(a[0], a[1])
                }
                function _(o, i) {
                  return n <= o && o <= e && t <= i && i <= r
                }
                function S(n, t) {
                  _(n, t) && s.point(n, t)
                }
                function T(n, t) {
                  var e = _(
                    (n = Math.max(-fr, Math.min(fr, n))),
                    (t = Math.max(-fr, Math.min(fr, t)))
                  )
                  if ((u && d.push([n, t]), v))
                    (f = n),
                      (p = t),
                      (m = e),
                      (v = !1),
                      e && (s.lineStart(), s.point(n, t))
                  else if (e && b) s.point(n, t)
                  else {
                    var r = { a: { x: h, y: g }, b: { x: n, y: t } }
                    k(r)
                      ? (b || (s.lineStart(), s.point(r.a.x, r.a.y)),
                        s.point(r.b.x, r.b.y),
                        e || s.lineEnd(),
                        (x = !1))
                      : e && (s.lineStart(), s.point(n, t), (x = !1))
                  }
                  ;(h = n), (g = t), (b = e)
                }
                return M
              }
              function o(r, o) {
                return k(r[0] - n) < An
                  ? o > 0
                    ? 0
                    : 3
                  : k(r[0] - e) < An
                  ? o > 0
                    ? 2
                    : 1
                  : k(r[1] - t) < An
                  ? o > 0
                    ? 1
                    : 0
                  : o > 0
                  ? 3
                  : 2
              }
              function a(n, t) {
                return l(n.x, t.x)
              }
              function l(n, t) {
                var e = o(n, 1),
                  r = o(t, 1)
                return e !== r
                  ? e - r
                  : 0 === e
                  ? t[1] - n[1]
                  : 1 === e
                  ? n[0] - t[0]
                  : 2 === e
                  ? n[1] - t[1]
                  : t[0] - n[0]
              }
            }
            function mr(n) {
              var t = 0,
                e = zn / 3,
                r = Ir(n),
                o = r(t, e)
              return (
                (o.parallels = function(n) {
                  return arguments.length
                    ? r((t = (n[0] * zn) / 180), (e = (n[1] * zn) / 180))
                    : [(t / zn) * 180, (e / zn) * 180]
                }),
                o
              )
            }
            function hr(n, t) {
              var e = Math.sin(n),
                r = (e + Math.sin(t)) / 2,
                o = 1 + e * (2 * r - e),
                i = Math.sqrt(o) / r
              function a(n, t) {
                var e = Math.sqrt(o - 2 * r * Math.sin(t)) / r
                return [e * Math.sin((n *= r)), i - e * Math.cos(n)]
              }
              return (
                (a.invert = function(n, t) {
                  var e = i - t
                  return [
                    Math.atan2(n, e) / r,
                    Bn((o - (n * n + e * e) * r * r) / (2 * r))
                  ]
                }),
                a
              )
            }
            ;(i.geo.clipExtent = function() {
              var n,
                t,
                e,
                r,
                o,
                i,
                a = {
                  stream: function(n) {
                    return o && (o.valid = !1), ((o = i(n)).valid = !0), o
                  },
                  extent: function(l) {
                    return arguments.length
                      ? ((i = pr(
                          (n = +l[0][0]),
                          (t = +l[0][1]),
                          (e = +l[1][0]),
                          (r = +l[1][1])
                        )),
                        o && ((o.valid = !1), (o = null)),
                        a)
                      : [[n, t], [e, r]]
                  }
                }
              return a.extent([[0, 0], [960, 500]])
            }),
              ((i.geo.conicEqualArea = function() {
                return mr(hr)
              }).raw = hr),
              (i.geo.albers = function() {
                return i.geo
                  .conicEqualArea()
                  .rotate([96, 0])
                  .center([-0.6, 38.7])
                  .parallels([29.5, 45.5])
                  .scale(1070)
              }),
              (i.geo.albersUsa = function() {
                var n,
                  t,
                  e,
                  r,
                  o = i.geo.albers(),
                  a = i.geo
                    .conicEqualArea()
                    .rotate([154, 0])
                    .center([-2, 58.5])
                    .parallels([55, 65]),
                  l = i.geo
                    .conicEqualArea()
                    .rotate([157, 0])
                    .center([-3, 19.9])
                    .parallels([8, 18]),
                  s = {
                    point: function(t, e) {
                      n = [t, e]
                    }
                  }
                function c(o) {
                  var i = o[0],
                    a = o[1]
                  return (n = null), t(i, a), n || (e(i, a), n) || r(i, a), n
                }
                return (
                  (c.invert = function(n) {
                    var t = o.scale(),
                      e = o.translate(),
                      r = (n[0] - e[0]) / t,
                      i = (n[1] - e[1]) / t
                    return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
                      ? a
                      : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                      ? l
                      : o
                    ).invert(n)
                  }),
                  (c.stream = function(n) {
                    var t = o.stream(n),
                      e = a.stream(n),
                      r = l.stream(n)
                    return {
                      point: function(n, o) {
                        t.point(n, o), e.point(n, o), r.point(n, o)
                      },
                      sphere: function() {
                        t.sphere(), e.sphere(), r.sphere()
                      },
                      lineStart: function() {
                        t.lineStart(), e.lineStart(), r.lineStart()
                      },
                      lineEnd: function() {
                        t.lineEnd(), e.lineEnd(), r.lineEnd()
                      },
                      polygonStart: function() {
                        t.polygonStart(), e.polygonStart(), r.polygonStart()
                      },
                      polygonEnd: function() {
                        t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                      }
                    }
                  }),
                  (c.precision = function(n) {
                    return arguments.length
                      ? (o.precision(n), a.precision(n), l.precision(n), c)
                      : o.precision()
                  }),
                  (c.scale = function(n) {
                    return arguments.length
                      ? (o.scale(n),
                        a.scale(0.35 * n),
                        l.scale(n),
                        c.translate(o.translate()))
                      : o.scale()
                  }),
                  (c.translate = function(n) {
                    if (!arguments.length) return o.translate()
                    var i = o.scale(),
                      u = +n[0],
                      d = +n[1]
                    return (
                      (t = o
                        .translate(n)
                        .clipExtent([
                          [u - 0.455 * i, d - 0.238 * i],
                          [u + 0.455 * i, d + 0.238 * i]
                        ])
                        .stream(s).point),
                      (e = a
                        .translate([u - 0.307 * i, d + 0.201 * i])
                        .clipExtent([
                          [u - 0.425 * i + An, d + 0.12 * i + An],
                          [u - 0.214 * i - An, d + 0.234 * i - An]
                        ])
                        .stream(s).point),
                      (r = l
                        .translate([u - 0.205 * i, d + 0.212 * i])
                        .clipExtent([
                          [u - 0.214 * i + An, d + 0.166 * i + An],
                          [u - 0.115 * i - An, d + 0.234 * i - An]
                        ])
                        .stream(s).point),
                      c
                    )
                  }),
                  c.scale(1070)
                )
              })
            var gr,
              br,
              vr,
              xr,
              yr,
              wr,
              kr = {
                point: R,
                lineStart: R,
                lineEnd: R,
                polygonStart: function() {
                  ;(br = 0), (kr.lineStart = Mr)
                },
                polygonEnd: function() {
                  ;(kr.lineStart = kr.lineEnd = kr.point = R), (gr += k(br / 2))
                }
              }
            function Mr() {
              var n, t, e, r
              function o(n, t) {
                ;(br += r * n - e * t), (e = n), (r = t)
              }
              ;(kr.point = function(i, a) {
                ;(kr.point = o), (n = e = i), (t = r = a)
              }),
                (kr.lineEnd = function() {
                  o(n, t)
                })
            }
            var Er = {
              point: function(n, t) {
                n < vr && (vr = n),
                  n > yr && (yr = n),
                  t < xr && (xr = t),
                  t > wr && (wr = t)
              },
              lineStart: R,
              lineEnd: R,
              polygonStart: R,
              polygonEnd: R
            }
            function _r() {
              var n = Sr(4.5),
                t = [],
                e = {
                  point: r,
                  lineStart: function() {
                    e.point = o
                  },
                  lineEnd: a,
                  polygonStart: function() {
                    e.lineEnd = l
                  },
                  polygonEnd: function() {
                    ;(e.lineEnd = a), (e.point = r)
                  },
                  pointRadius: function(t) {
                    return (n = Sr(t)), e
                  },
                  result: function() {
                    if (t.length) {
                      var n = t.join('')
                      return (t = []), n
                    }
                  }
                }
              function r(e, r) {
                t.push('M', e, ',', r, n)
              }
              function o(n, r) {
                t.push('M', n, ',', r), (e.point = i)
              }
              function i(n, e) {
                t.push('L', n, ',', e)
              }
              function a() {
                e.point = r
              }
              function l() {
                t.push('Z')
              }
              return e
            }
            function Sr(n) {
              return (
                'm0,' +
                n +
                'a' +
                n +
                ',' +
                n +
                ' 0 1,1 0,' +
                -2 * n +
                'a' +
                n +
                ',' +
                n +
                ' 0 1,1 0,' +
                2 * n +
                'z'
              )
            }
            var Tr,
              Nr = {
                point: Cr,
                lineStart: jr,
                lineEnd: Ar,
                polygonStart: function() {
                  Nr.lineStart = Or
                },
                polygonEnd: function() {
                  ;(Nr.point = Cr), (Nr.lineStart = jr), (Nr.lineEnd = Ar)
                }
              }
            function Cr(n, t) {
              ;(Ne += n), (Ce += t), ++je
            }
            function jr() {
              var n, t
              function e(e, r) {
                var o = e - n,
                  i = r - t,
                  a = Math.sqrt(o * o + i * i)
                ;(Ae += (a * (n + e)) / 2),
                  (Oe += (a * (t + r)) / 2),
                  (ze += a),
                  Cr((n = e), (t = r))
              }
              Nr.point = function(r, o) {
                ;(Nr.point = e), Cr((n = r), (t = o))
              }
            }
            function Ar() {
              Nr.point = Cr
            }
            function Or() {
              var n, t, e, r
              function o(n, t) {
                var o = n - e,
                  i = t - r,
                  a = Math.sqrt(o * o + i * i)
                ;(Ae += (a * (e + n)) / 2),
                  (Oe += (a * (r + t)) / 2),
                  (ze += a),
                  (De += (a = r * n - e * t) * (e + n)),
                  (Le += a * (r + t)),
                  (qe += 3 * a),
                  Cr((e = n), (r = t))
              }
              ;(Nr.point = function(i, a) {
                ;(Nr.point = o), Cr((n = e = i), (t = r = a))
              }),
                (Nr.lineEnd = function() {
                  o(n, t)
                })
            }
            function zr(n) {
              var t = 4.5,
                e = {
                  point: r,
                  lineStart: function() {
                    e.point = o
                  },
                  lineEnd: a,
                  polygonStart: function() {
                    e.lineEnd = l
                  },
                  polygonEnd: function() {
                    ;(e.lineEnd = a), (e.point = r)
                  },
                  pointRadius: function(n) {
                    return (t = n), e
                  },
                  result: R
                }
              function r(e, r) {
                n.moveTo(e + t, r), n.arc(e, r, t, 0, Dn)
              }
              function o(t, r) {
                n.moveTo(t, r), (e.point = i)
              }
              function i(t, e) {
                n.lineTo(t, e)
              }
              function a() {
                e.point = r
              }
              function l() {
                n.closePath()
              }
              return e
            }
            function Dr(n) {
              var t = 0.5,
                e = Math.cos(30 * Hn),
                r = 16
              function o(n) {
                return (r ? a : i)(n)
              }
              function i(t) {
                return Hr(t, function(e, r) {
                  ;(e = n(e, r)), t.point(e[0], e[1])
                })
              }
              function a(t) {
                var e,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p,
                  m,
                  h,
                  g = {
                    point: b,
                    lineStart: v,
                    lineEnd: y,
                    polygonStart: function() {
                      t.polygonStart(), (g.lineStart = w)
                    },
                    polygonEnd: function() {
                      t.polygonEnd(), (g.lineStart = v)
                    }
                  }
                function b(e, r) {
                  ;(e = n(e, r)), t.point(e[0], e[1])
                }
                function v() {
                  ;(d = NaN), (g.point = x), t.lineStart()
                }
                function x(e, o) {
                  var i = Re([e, o]),
                    a = n(e, o)
                  l(
                    d,
                    f,
                    u,
                    p,
                    m,
                    h,
                    (d = a[0]),
                    (f = a[1]),
                    (u = e),
                    (p = i[0]),
                    (m = i[1]),
                    (h = i[2]),
                    r,
                    t
                  ),
                    t.point(d, f)
                }
                function y() {
                  ;(g.point = b), t.lineEnd()
                }
                function w() {
                  v(), (g.point = k), (g.lineEnd = M)
                }
                function k(n, t) {
                  x((e = n), t),
                    (o = d),
                    (i = f),
                    (a = p),
                    (s = m),
                    (c = h),
                    (g.point = x)
                }
                function M() {
                  l(d, f, u, p, m, h, o, i, e, a, s, c, r, t),
                    (g.lineEnd = y),
                    y()
                }
                return g
              }
              function l(r, o, i, a, s, c, u, d, f, p, m, h, g, b) {
                var v = u - r,
                  x = d - o,
                  y = v * v + x * x
                if (y > 4 * t && g--) {
                  var w = a + p,
                    M = s + m,
                    E = c + h,
                    _ = Math.sqrt(w * w + M * M + E * E),
                    S = Math.asin((E /= _)),
                    T =
                      k(k(E) - 1) < An || k(i - f) < An
                        ? (i + f) / 2
                        : Math.atan2(M, w),
                    N = n(T, S),
                    C = N[0],
                    j = N[1],
                    A = C - r,
                    O = j - o,
                    z = x * A - v * O
                  ;((z * z) / y > t ||
                    k((v * A + x * O) / y - 0.5) > 0.3 ||
                    a * p + s * m + c * h < e) &&
                    (l(r, o, i, a, s, c, C, j, T, (w /= _), (M /= _), E, g, b),
                    b.point(C, j),
                    l(C, j, T, w, M, E, u, d, f, p, m, h, g, b))
                }
              }
              return (
                (o.precision = function(n) {
                  return arguments.length
                    ? ((r = (t = n * n) > 0 && 16), o)
                    : Math.sqrt(t)
                }),
                o
              )
            }
            function Lr(n) {
              var t = Dr(function(t, e) {
                return n([t * Pn, e * Pn])
              })
              return function(n) {
                return Rr(t(n))
              }
            }
            function qr(n) {
              this.stream = n
            }
            function Hr(n, t) {
              return {
                point: t,
                sphere: function() {
                  n.sphere()
                },
                lineStart: function() {
                  n.lineStart()
                },
                lineEnd: function() {
                  n.lineEnd()
                },
                polygonStart: function() {
                  n.polygonStart()
                },
                polygonEnd: function() {
                  n.polygonEnd()
                }
              }
            }
            function Pr(n) {
              return Ir(function() {
                return n
              })()
            }
            function Ir(n) {
              var t,
                e,
                r,
                o,
                a,
                l,
                s = Dr(function(n, e) {
                  return [(n = t(n, e))[0] * c + o, a - n[1] * c]
                }),
                c = 150,
                u = 480,
                d = 250,
                f = 0,
                p = 0,
                m = 0,
                h = 0,
                g = 0,
                b = cr,
                v = q,
                x = null,
                y = null
              function w(n) {
                return [(n = r(n[0] * Hn, n[1] * Hn))[0] * c + o, a - n[1] * c]
              }
              function k(n) {
                return (
                  (n = r.invert((n[0] - o) / c, (a - n[1]) / c)) && [
                    n[0] * Pn,
                    n[1] * Pn
                  ]
                )
              }
              function M() {
                r = nr((e = Ur(m, h, g)), t)
                var n = t(f, p)
                return (o = u - n[0] * c), (a = d + n[1] * c), E()
              }
              function E() {
                return l && ((l.valid = !1), (l = null)), w
              }
              return (
                (w.stream = function(n) {
                  return (
                    l && (l.valid = !1), ((l = Rr(b(e, s(v(n))))).valid = !0), l
                  )
                }),
                (w.clipAngle = function(n) {
                  return arguments.length
                    ? ((b = null == n ? ((x = n), cr) : ur((x = +n) * Hn)), E())
                    : x
                }),
                (w.clipExtent = function(n) {
                  return arguments.length
                    ? ((y = n),
                      (v = n ? pr(n[0][0], n[0][1], n[1][0], n[1][1]) : q),
                      E())
                    : y
                }),
                (w.scale = function(n) {
                  return arguments.length ? ((c = +n), M()) : c
                }),
                (w.translate = function(n) {
                  return arguments.length
                    ? ((u = +n[0]), (d = +n[1]), M())
                    : [u, d]
                }),
                (w.center = function(n) {
                  return arguments.length
                    ? ((f = (n[0] % 360) * Hn), (p = (n[1] % 360) * Hn), M())
                    : [f * Pn, p * Pn]
                }),
                (w.rotate = function(n) {
                  return arguments.length
                    ? ((m = (n[0] % 360) * Hn),
                      (h = (n[1] % 360) * Hn),
                      (g = n.length > 2 ? (n[2] % 360) * Hn : 0),
                      M())
                    : [m * Pn, h * Pn, g * Pn]
                }),
                i.rebind(w, s, 'precision'),
                function() {
                  return (
                    (t = n.apply(this, arguments)),
                    (w.invert = t.invert && k),
                    M()
                  )
                }
              )
            }
            function Rr(n) {
              return Hr(n, function(t, e) {
                n.point(t * Hn, e * Hn)
              })
            }
            function Fr(n, t) {
              return [n, t]
            }
            function Br(n, t) {
              return [n > zn ? n - Dn : n < -zn ? n + Dn : n, t]
            }
            function Ur(n, t, e) {
              return n
                ? t || e
                  ? nr(Wr(n), Yr(t, e))
                  : Wr(n)
                : t || e
                ? Yr(t, e)
                : Br
            }
            function $r(n) {
              return function(t, e) {
                return [(t += n) > zn ? t - Dn : t < -zn ? t + Dn : t, e]
              }
            }
            function Wr(n) {
              var t = $r(n)
              return (t.invert = $r(-n)), t
            }
            function Yr(n, t) {
              var e = Math.cos(n),
                r = Math.sin(n),
                o = Math.cos(t),
                i = Math.sin(t)
              function a(n, t) {
                var a = Math.cos(t),
                  l = Math.cos(n) * a,
                  s = Math.sin(n) * a,
                  c = Math.sin(t),
                  u = c * e + l * r
                return [
                  Math.atan2(s * o - u * i, l * e - c * r),
                  Bn(u * o + s * i)
                ]
              }
              return (
                (a.invert = function(n, t) {
                  var a = Math.cos(t),
                    l = Math.cos(n) * a,
                    s = Math.sin(n) * a,
                    c = Math.sin(t),
                    u = c * o - s * i
                  return [
                    Math.atan2(s * o + c * i, l * e + u * r),
                    Bn(u * e - l * r)
                  ]
                }),
                a
              )
            }
            function Vr(n, t) {
              var e = Math.cos(n),
                r = Math.sin(n)
              return function(o, i, a, l) {
                var s = a * t
                null != o
                  ? ((o = Xr(e, o)),
                    (i = Xr(e, i)),
                    (a > 0 ? o < i : o > i) && (o += a * Dn))
                  : ((o = n + a * Dn), (i = n - 0.5 * s))
                for (var c, u = o; a > 0 ? u > i : u < i; u -= s)
                  l.point(
                    (c = Ye([e, -r * Math.cos(u), -r * Math.sin(u)]))[0],
                    c[1]
                  )
              }
            }
            function Xr(n, t) {
              var e = Re(t)
              ;(e[0] -= n), We(e)
              var r = Fn(-e[1])
              return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - An) % (2 * Math.PI)
            }
            function Zr(n, t, e) {
              var r = i.range(n, t - An, e).concat(t)
              return function(n) {
                return r.map(function(t) {
                  return [n, t]
                })
              }
            }
            function Gr(n, t, e) {
              var r = i.range(n, t - An, e).concat(t)
              return function(n) {
                return r.map(function(t) {
                  return [t, n]
                })
              }
            }
            function Jr(n) {
              return n.source
            }
            function Qr(n) {
              return n.target
            }
            ;(i.geo.path = function() {
              var n,
                t,
                e,
                r,
                o,
                a = 4.5
              function l(n) {
                return (
                  n &&
                    ('function' == typeof a &&
                      r.pointRadius(+a.apply(this, arguments)),
                    (o && o.valid) || (o = e(r)),
                    i.geo.stream(n, o)),
                  r.result()
                )
              }
              function s() {
                return (o = null), l
              }
              return (
                (l.area = function(n) {
                  return (gr = 0), i.geo.stream(n, e(kr)), gr
                }),
                (l.centroid = function(n) {
                  return (
                    (Ne = Ce = je = Ae = Oe = ze = De = Le = qe = 0),
                    i.geo.stream(n, e(Nr)),
                    qe
                      ? [De / qe, Le / qe]
                      : ze
                      ? [Ae / ze, Oe / ze]
                      : je
                      ? [Ne / je, Ce / je]
                      : [NaN, NaN]
                  )
                }),
                (l.bounds = function(n) {
                  return (
                    (yr = wr = -(vr = xr = 1 / 0)),
                    i.geo.stream(n, e(Er)),
                    [[vr, xr], [yr, wr]]
                  )
                }),
                (l.projection = function(t) {
                  return arguments.length
                    ? ((e = (n = t) ? t.stream || Lr(t) : q), s())
                    : n
                }),
                (l.context = function(n) {
                  return arguments.length
                    ? ((r = null == (t = n) ? new _r() : new zr(n)),
                      'function' != typeof a && r.pointRadius(a),
                      s())
                    : t
                }),
                (l.pointRadius = function(n) {
                  return arguments.length
                    ? ((a =
                        'function' == typeof n ? n : (r.pointRadius(+n), +n)),
                      l)
                    : a
                }),
                l.projection(i.geo.albersUsa()).context(null)
              )
            }),
              (i.geo.transform = function(n) {
                return {
                  stream: function(t) {
                    var e = new qr(t)
                    for (var r in n) e[r] = n[r]
                    return e
                  }
                }
              }),
              (qr.prototype = {
                point: function(n, t) {
                  this.stream.point(n, t)
                },
                sphere: function() {
                  this.stream.sphere()
                },
                lineStart: function() {
                  this.stream.lineStart()
                },
                lineEnd: function() {
                  this.stream.lineEnd()
                },
                polygonStart: function() {
                  this.stream.polygonStart()
                },
                polygonEnd: function() {
                  this.stream.polygonEnd()
                }
              }),
              (i.geo.projection = Pr),
              (i.geo.projectionMutator = Ir),
              ((i.geo.equirectangular = function() {
                return Pr(Fr)
              }).raw = Fr.invert = Fr),
              (i.geo.rotation = function(n) {
                function t(t) {
                  return (
                    ((t = n(t[0] * Hn, t[1] * Hn))[0] *= Pn), (t[1] *= Pn), t
                  )
                }
                return (
                  (n = Ur(
                    (n[0] % 360) * Hn,
                    n[1] * Hn,
                    n.length > 2 ? n[2] * Hn : 0
                  )),
                  (t.invert = function(t) {
                    return (
                      ((t = n.invert(t[0] * Hn, t[1] * Hn))[0] *= Pn),
                      (t[1] *= Pn),
                      t
                    )
                  }),
                  t
                )
              }),
              (Br.invert = Fr),
              (i.geo.circle = function() {
                var n,
                  t,
                  e = [0, 0],
                  r = 6
                function o() {
                  var n = 'function' == typeof e ? e.apply(this, arguments) : e,
                    r = Ur(-n[0] * Hn, -n[1] * Hn, 0).invert,
                    o = []
                  return (
                    t(null, null, 1, {
                      point: function(n, t) {
                        o.push((n = r(n, t))), (n[0] *= Pn), (n[1] *= Pn)
                      }
                    }),
                    { type: 'Polygon', coordinates: [o] }
                  )
                }
                return (
                  (o.origin = function(n) {
                    return arguments.length ? ((e = n), o) : e
                  }),
                  (o.angle = function(e) {
                    return arguments.length
                      ? ((t = Vr((n = +e) * Hn, r * Hn)), o)
                      : n
                  }),
                  (o.precision = function(e) {
                    return arguments.length
                      ? ((t = Vr(n * Hn, (r = +e) * Hn)), o)
                      : r
                  }),
                  o.angle(90)
                )
              }),
              (i.geo.distance = function(n, t) {
                var e,
                  r = (t[0] - n[0]) * Hn,
                  o = n[1] * Hn,
                  i = t[1] * Hn,
                  a = Math.sin(r),
                  l = Math.cos(r),
                  s = Math.sin(o),
                  c = Math.cos(o),
                  u = Math.sin(i),
                  d = Math.cos(i)
                return Math.atan2(
                  Math.sqrt((e = d * a) * e + (e = c * u - s * d * l) * e),
                  s * u + c * d * l
                )
              }),
              (i.geo.graticule = function() {
                var n,
                  t,
                  e,
                  r,
                  o,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p = 10,
                  m = p,
                  h = 90,
                  g = 360,
                  b = 2.5
                function v() {
                  return { type: 'MultiLineString', coordinates: x() }
                }
                function x() {
                  return i
                    .range(Math.ceil(r / h) * h, e, h)
                    .map(d)
                    .concat(i.range(Math.ceil(s / g) * g, l, g).map(f))
                    .concat(
                      i
                        .range(Math.ceil(t / p) * p, n, p)
                        .filter(function(n) {
                          return k(n % h) > An
                        })
                        .map(c)
                    )
                    .concat(
                      i
                        .range(Math.ceil(a / m) * m, o, m)
                        .filter(function(n) {
                          return k(n % g) > An
                        })
                        .map(u)
                    )
                }
                return (
                  (v.lines = function() {
                    return x().map(function(n) {
                      return { type: 'LineString', coordinates: n }
                    })
                  }),
                  (v.outline = function() {
                    return {
                      type: 'Polygon',
                      coordinates: [
                        d(r).concat(
                          f(l).slice(1),
                          d(e)
                            .reverse()
                            .slice(1),
                          f(s)
                            .reverse()
                            .slice(1)
                        )
                      ]
                    }
                  }),
                  (v.extent = function(n) {
                    return arguments.length
                      ? v.majorExtent(n).minorExtent(n)
                      : v.minorExtent()
                  }),
                  (v.majorExtent = function(n) {
                    return arguments.length
                      ? ((r = +n[0][0]),
                        (e = +n[1][0]),
                        (s = +n[0][1]),
                        (l = +n[1][1]),
                        r > e && ((n = r), (r = e), (e = n)),
                        s > l && ((n = s), (s = l), (l = n)),
                        v.precision(b))
                      : [[r, s], [e, l]]
                  }),
                  (v.minorExtent = function(e) {
                    return arguments.length
                      ? ((t = +e[0][0]),
                        (n = +e[1][0]),
                        (a = +e[0][1]),
                        (o = +e[1][1]),
                        t > n && ((e = t), (t = n), (n = e)),
                        a > o && ((e = a), (a = o), (o = e)),
                        v.precision(b))
                      : [[t, a], [n, o]]
                  }),
                  (v.step = function(n) {
                    return arguments.length
                      ? v.majorStep(n).minorStep(n)
                      : v.minorStep()
                  }),
                  (v.majorStep = function(n) {
                    return arguments.length
                      ? ((h = +n[0]), (g = +n[1]), v)
                      : [h, g]
                  }),
                  (v.minorStep = function(n) {
                    return arguments.length
                      ? ((p = +n[0]), (m = +n[1]), v)
                      : [p, m]
                  }),
                  (v.precision = function(i) {
                    return arguments.length
                      ? ((b = +i),
                        (c = Zr(a, o, 90)),
                        (u = Gr(t, n, b)),
                        (d = Zr(s, l, 90)),
                        (f = Gr(r, e, b)),
                        v)
                      : b
                  }),
                  v
                    .majorExtent([[-180, -90 + An], [180, 90 - An]])
                    .minorExtent([[-180, -80 - An], [180, 80 + An]])
                )
              }),
              (i.geo.greatArc = function() {
                var n,
                  t,
                  e = Jr,
                  r = Qr
                function o() {
                  return {
                    type: 'LineString',
                    coordinates: [
                      n || e.apply(this, arguments),
                      t || r.apply(this, arguments)
                    ]
                  }
                }
                return (
                  (o.distance = function() {
                    return i.geo.distance(
                      n || e.apply(this, arguments),
                      t || r.apply(this, arguments)
                    )
                  }),
                  (o.source = function(t) {
                    return arguments.length
                      ? ((e = t), (n = 'function' == typeof t ? null : t), o)
                      : e
                  }),
                  (o.target = function(n) {
                    return arguments.length
                      ? ((r = n), (t = 'function' == typeof n ? null : n), o)
                      : r
                  }),
                  (o.precision = function() {
                    return arguments.length ? o : 0
                  }),
                  o
                )
              }),
              (i.geo.interpolate = function(n, t) {
                return (
                  (e = n[0] * Hn),
                  (r = n[1] * Hn),
                  (o = t[0] * Hn),
                  (i = t[1] * Hn),
                  (a = Math.cos(r)),
                  (l = Math.sin(r)),
                  (s = Math.cos(i)),
                  (c = Math.sin(i)),
                  (u = a * Math.cos(e)),
                  (d = a * Math.sin(e)),
                  (f = s * Math.cos(o)),
                  (p = s * Math.sin(o)),
                  (m = 2 * Math.asin(Math.sqrt($n(i - r) + a * s * $n(o - e)))),
                  (h = 1 / Math.sin(m)),
                  ((g = m
                    ? function(n) {
                        var t = Math.sin((n *= m)) * h,
                          e = Math.sin(m - n) * h,
                          r = e * u + t * f,
                          o = e * d + t * p,
                          i = e * l + t * c
                        return [
                          Math.atan2(o, r) * Pn,
                          Math.atan2(i, Math.sqrt(r * r + o * o)) * Pn
                        ]
                      }
                    : function() {
                        return [e * Pn, r * Pn]
                      }).distance = m),
                  g
                )
                var e, r, o, i, a, l, s, c, u, d, f, p, m, h, g
              }),
              (i.geo.length = function(n) {
                return (Tr = 0), i.geo.stream(n, Kr), Tr
              })
            var Kr = {
              sphere: R,
              point: R,
              lineStart: function() {
                var n, t, e
                function r(r, o) {
                  var i = Math.sin((o *= Hn)),
                    a = Math.cos(o),
                    l = k((r *= Hn) - n),
                    s = Math.cos(l)
                  ;(Tr += Math.atan2(
                    Math.sqrt(
                      (l = a * Math.sin(l)) * l + (l = e * i - t * a * s) * l
                    ),
                    t * i + e * a * s
                  )),
                    (n = r),
                    (t = i),
                    (e = a)
                }
                ;(Kr.point = function(o, i) {
                  ;(n = o * Hn),
                    (t = Math.sin((i *= Hn))),
                    (e = Math.cos(i)),
                    (Kr.point = r)
                }),
                  (Kr.lineEnd = function() {
                    Kr.point = Kr.lineEnd = R
                  })
              },
              lineEnd: R,
              polygonStart: R,
              polygonEnd: R
            }
            function no(n, t) {
              function e(t, e) {
                var r = Math.cos(t),
                  o = Math.cos(e),
                  i = n(r * o)
                return [i * o * Math.sin(t), i * Math.sin(e)]
              }
              return (
                (e.invert = function(n, e) {
                  var r = Math.sqrt(n * n + e * e),
                    o = t(r),
                    i = Math.sin(o),
                    a = Math.cos(o)
                  return [Math.atan2(n * i, r * a), Math.asin(r && (e * i) / r)]
                }),
                e
              )
            }
            var to = no(
              function(n) {
                return Math.sqrt(2 / (1 + n))
              },
              function(n) {
                return 2 * Math.asin(n / 2)
              }
            )
            ;(i.geo.azimuthalEqualArea = function() {
              return Pr(to)
            }).raw = to
            var eo = no(function(n) {
              var t = Math.acos(n)
              return t && t / Math.sin(t)
            }, q)
            function ro(n, t) {
              var e = Math.cos(n),
                r = function(n) {
                  return Math.tan(zn / 4 + n / 2)
                },
                o =
                  n === t
                    ? Math.sin(n)
                    : Math.log(e / Math.cos(t)) / Math.log(r(t) / r(n)),
                i = (e * Math.pow(r(n), o)) / o
              if (!o) return ao
              function a(n, t) {
                i > 0
                  ? t < -qn + An && (t = -qn + An)
                  : t > qn - An && (t = qn - An)
                var e = i / Math.pow(r(t), o)
                return [e * Math.sin(o * n), i - e * Math.cos(o * n)]
              }
              return (
                (a.invert = function(n, t) {
                  var e = i - t,
                    r = In(o) * Math.sqrt(n * n + e * e)
                  return [
                    Math.atan2(n, e) / o,
                    2 * Math.atan(Math.pow(i / r, 1 / o)) - qn
                  ]
                }),
                a
              )
            }
            function oo(n, t) {
              var e = Math.cos(n),
                r = n === t ? Math.sin(n) : (e - Math.cos(t)) / (t - n),
                o = e / r + n
              if (k(r) < An) return Fr
              function i(n, t) {
                var e = o - t
                return [e * Math.sin(r * n), o - e * Math.cos(r * n)]
              }
              return (
                (i.invert = function(n, t) {
                  var e = o - t
                  return [
                    Math.atan2(n, e) / r,
                    o - In(r) * Math.sqrt(n * n + e * e)
                  ]
                }),
                i
              )
            }
            ;((i.geo.azimuthalEquidistant = function() {
              return Pr(eo)
            }).raw = eo),
              ((i.geo.conicConformal = function() {
                return mr(ro)
              }).raw = ro),
              ((i.geo.conicEquidistant = function() {
                return mr(oo)
              }).raw = oo)
            var io = no(function(n) {
              return 1 / n
            }, Math.atan)
            function ao(n, t) {
              return [n, Math.log(Math.tan(zn / 4 + t / 2))]
            }
            function lo(n) {
              var t,
                e = Pr(n),
                r = e.scale,
                o = e.translate,
                i = e.clipExtent
              return (
                (e.scale = function() {
                  var n = r.apply(e, arguments)
                  return n === e ? (t ? e.clipExtent(null) : e) : n
                }),
                (e.translate = function() {
                  var n = o.apply(e, arguments)
                  return n === e ? (t ? e.clipExtent(null) : e) : n
                }),
                (e.clipExtent = function(n) {
                  var a = i.apply(e, arguments)
                  if (a === e) {
                    if ((t = null == n)) {
                      var l = zn * r(),
                        s = o()
                      i([[s[0] - l, s[1] - l], [s[0] + l, s[1] + l]])
                    }
                  } else t && (a = null)
                  return a
                }),
                e.clipExtent(null)
              )
            }
            ;((i.geo.gnomonic = function() {
              return Pr(io)
            }).raw = io),
              (ao.invert = function(n, t) {
                return [n, 2 * Math.atan(Math.exp(t)) - qn]
              }),
              ((i.geo.mercator = function() {
                return lo(ao)
              }).raw = ao)
            var so = no(function() {
              return 1
            }, Math.asin)
            ;(i.geo.orthographic = function() {
              return Pr(so)
            }).raw = so
            var co = no(
              function(n) {
                return 1 / (1 + n)
              },
              function(n) {
                return 2 * Math.atan(n)
              }
            )
            function uo(n, t) {
              return [Math.log(Math.tan(zn / 4 + t / 2)), -n]
            }
            function fo(n) {
              return n[0]
            }
            function po(n) {
              return n[1]
            }
            function mo(n) {
              for (var t = n.length, e = [0, 1], r = 2, o = 2; o < t; o++) {
                for (; r > 1 && Rn(n[e[r - 2]], n[e[r - 1]], n[o]) <= 0; ) --r
                e[r++] = o
              }
              return e.slice(0, r)
            }
            function ho(n, t) {
              return n[0] - t[0] || n[1] - t[1]
            }
            ;((i.geo.stereographic = function() {
              return Pr(co)
            }).raw = co),
              (uo.invert = function(n, t) {
                return [-t, 2 * Math.atan(Math.exp(n)) - qn]
              }),
              ((i.geo.transverseMercator = function() {
                var n = lo(uo),
                  t = n.center,
                  e = n.rotate
                return (
                  (n.center = function(n) {
                    return n ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]
                  }),
                  (n.rotate = function(n) {
                    return n
                      ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
                      : [(n = e())[0], n[1], n[2] - 90]
                  }),
                  e([0, 0, 90])
                )
              }).raw = uo),
              (i.geom = {}),
              (i.geom.hull = function(n) {
                var t = fo,
                  e = po
                if (arguments.length) return r(n)
                function r(n) {
                  if (n.length < 3) return []
                  var r,
                    o = Mt(t),
                    i = Mt(e),
                    a = n.length,
                    l = [],
                    s = []
                  for (r = 0; r < a; r++)
                    l.push([+o.call(this, n[r], r), +i.call(this, n[r], r), r])
                  for (l.sort(ho), r = 0; r < a; r++)
                    s.push([l[r][0], -l[r][1]])
                  var c = mo(l),
                    u = mo(s),
                    d = u[0] === c[0],
                    f = u[u.length - 1] === c[c.length - 1],
                    p = []
                  for (r = c.length - 1; r >= 0; --r) p.push(n[l[c[r]][2]])
                  for (r = +d; r < u.length - f; ++r) p.push(n[l[u[r]][2]])
                  return p
                }
                return (
                  (r.x = function(n) {
                    return arguments.length ? ((t = n), r) : t
                  }),
                  (r.y = function(n) {
                    return arguments.length ? ((e = n), r) : e
                  }),
                  r
                )
              }),
              (i.geom.polygon = function(n) {
                return V(n, go), n
              })
            var go = (i.geom.polygon.prototype = [])
            function bo(n, t, e) {
              return (
                (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
              )
            }
            function vo(n, t, e, r) {
              var o = n[0],
                i = e[0],
                a = t[0] - o,
                l = r[0] - i,
                s = n[1],
                c = e[1],
                u = t[1] - s,
                d = r[1] - c,
                f = (l * (s - c) - d * (o - i)) / (d * a - l * u)
              return [o + f * a, s + f * u]
            }
            function xo(n) {
              var t = n[0],
                e = n[n.length - 1]
              return !(t[0] - e[0] || t[1] - e[1])
            }
            ;(go.area = function() {
              for (
                var n, t = -1, e = this.length, r = this[e - 1], o = 0;
                ++t < e;

              )
                (n = r), (r = this[t]), (o += n[1] * r[0] - n[0] * r[1])
              return 0.5 * o
            }),
              (go.centroid = function(n) {
                var t,
                  e,
                  r = -1,
                  o = this.length,
                  i = 0,
                  a = 0,
                  l = this[o - 1]
                for (
                  arguments.length || (n = -1 / (6 * this.area()));
                  ++r < o;

                )
                  (t = l),
                    (l = this[r]),
                    (e = t[0] * l[1] - l[0] * t[1]),
                    (i += (t[0] + l[0]) * e),
                    (a += (t[1] + l[1]) * e)
                return [i * n, a * n]
              }),
              (go.clip = function(n) {
                for (
                  var t,
                    e,
                    r,
                    o,
                    i,
                    a,
                    l = xo(n),
                    s = -1,
                    c = this.length - xo(this),
                    u = this[c - 1];
                  ++s < c;

                ) {
                  for (
                    t = n.slice(),
                      n.length = 0,
                      o = this[s],
                      i = t[(r = t.length - l) - 1],
                      e = -1;
                    ++e < r;

                  )
                    bo((a = t[e]), u, o)
                      ? (bo(i, u, o) || n.push(vo(i, a, u, o)), n.push(a))
                      : bo(i, u, o) && n.push(vo(i, a, u, o)),
                      (i = a)
                  l && n.push(n[0]), (u = o)
                }
                return n
              })
            var yo,
              wo,
              ko,
              Mo,
              Eo,
              _o = [],
              So = []
            function To() {
              Yo(this), (this.edge = this.site = this.circle = null)
            }
            function No(n) {
              var t = _o.pop() || new To()
              return (t.site = n), t
            }
            function Co(n) {
              Po(n), ko.remove(n), _o.push(n), Yo(n)
            }
            function jo(n) {
              var t = n.circle,
                e = t.x,
                r = t.cy,
                o = { x: e, y: r },
                i = n.P,
                a = n.N,
                l = [n]
              Co(n)
              for (
                var s = i;
                s.circle && k(e - s.circle.x) < An && k(r - s.circle.cy) < An;

              )
                (i = s.P), l.unshift(s), Co(s), (s = i)
              l.unshift(s), Po(s)
              for (
                var c = a;
                c.circle && k(e - c.circle.x) < An && k(r - c.circle.cy) < An;

              )
                (a = c.N), l.push(c), Co(c), (c = a)
              l.push(c), Po(c)
              var u,
                d = l.length
              for (u = 1; u < d; ++u)
                (c = l[u]), (s = l[u - 1]), Uo(c.edge, s.site, c.site, o)
              ;(s = l[0]),
                ((c = l[d - 1]).edge = Fo(s.site, c.site, null, o)),
                Ho(s),
                Ho(c)
            }
            function Ao(n) {
              for (var t, e, r, o, i = n.x, a = n.y, l = ko._; l; )
                if ((r = Oo(l, a) - i) > An) l = l.L
                else {
                  if (!((o = i - zo(l, a)) > An)) {
                    r > -An
                      ? ((t = l.P), (e = l))
                      : o > -An
                      ? ((t = l), (e = l.N))
                      : (t = e = l)
                    break
                  }
                  if (!l.R) {
                    t = l
                    break
                  }
                  l = l.R
                }
              var s = No(n)
              if ((ko.insert(t, s), t || e)) {
                if (t === e)
                  return (
                    Po(t),
                    (e = No(t.site)),
                    ko.insert(s, e),
                    (s.edge = e.edge = Fo(t.site, s.site)),
                    Ho(t),
                    void Ho(e)
                  )
                if (e) {
                  Po(t), Po(e)
                  var c = t.site,
                    u = c.x,
                    d = c.y,
                    f = n.x - u,
                    p = n.y - d,
                    m = e.site,
                    h = m.x - u,
                    g = m.y - d,
                    b = 2 * (f * g - p * h),
                    v = f * f + p * p,
                    x = h * h + g * g,
                    y = {
                      x: (g * v - p * x) / b + u,
                      y: (f * x - h * v) / b + d
                    }
                  Uo(e.edge, c, m, y),
                    (s.edge = Fo(c, n, null, y)),
                    (e.edge = Fo(n, m, null, y)),
                    Ho(t),
                    Ho(e)
                } else s.edge = Fo(t.site, s.site)
              }
            }
            function Oo(n, t) {
              var e = n.site,
                r = e.x,
                o = e.y,
                i = o - t
              if (!i) return r
              var a = n.P
              if (!a) return -1 / 0
              var l = (e = a.site).x,
                s = e.y,
                c = s - t
              if (!c) return l
              var u = l - r,
                d = 1 / i - 1 / c,
                f = u / c
              return d
                ? (-f +
                    Math.sqrt(
                      f * f -
                        2 * d * ((u * u) / (-2 * c) - s + c / 2 + o - i / 2)
                    )) /
                    d +
                    r
                : (r + l) / 2
            }
            function zo(n, t) {
              var e = n.N
              if (e) return Oo(e, t)
              var r = n.site
              return r.y === t ? r.x : 1 / 0
            }
            function Do(n) {
              ;(this.site = n), (this.edges = [])
            }
            function Lo(n, t) {
              return t.angle - n.angle
            }
            function qo() {
              Yo(this),
                (this.x = this.y = this.arc = this.site = this.cy = null)
            }
            function Ho(n) {
              var t = n.P,
                e = n.N
              if (t && e) {
                var r = t.site,
                  o = n.site,
                  i = e.site
                if (r !== i) {
                  var a = o.x,
                    l = o.y,
                    s = r.x - a,
                    c = r.y - l,
                    u = i.x - a,
                    d = 2 * (s * (g = i.y - l) - c * u)
                  if (!(d >= -On)) {
                    var f = s * s + c * c,
                      p = u * u + g * g,
                      m = (g * f - c * p) / d,
                      h = (s * p - u * f) / d,
                      g = h + l,
                      b = So.pop() || new qo()
                    ;(b.arc = n),
                      (b.site = o),
                      (b.x = m + a),
                      (b.y = g + Math.sqrt(m * m + h * h)),
                      (b.cy = g),
                      (n.circle = b)
                    for (var v = null, x = Eo._; x; )
                      if (b.y < x.y || (b.y === x.y && b.x <= x.x)) {
                        if (!x.L) {
                          v = x.P
                          break
                        }
                        x = x.L
                      } else {
                        if (!x.R) {
                          v = x
                          break
                        }
                        x = x.R
                      }
                    Eo.insert(v, b), v || (Mo = b)
                  }
                }
              }
            }
            function Po(n) {
              var t = n.circle
              t &&
                (t.P || (Mo = t.N),
                Eo.remove(t),
                So.push(t),
                Yo(t),
                (n.circle = null))
            }
            function Io(n, t) {
              var e = n.b
              if (e) return !0
              var r,
                o,
                i = n.a,
                a = t[0][0],
                l = t[1][0],
                s = t[0][1],
                c = t[1][1],
                u = n.l,
                d = n.r,
                f = u.x,
                p = u.y,
                m = d.x,
                h = d.y,
                g = (f + m) / 2,
                b = (p + h) / 2
              if (h === p) {
                if (g < a || g >= l) return
                if (f > m) {
                  if (i) {
                    if (i.y >= c) return
                  } else i = { x: g, y: s }
                  e = { x: g, y: c }
                } else {
                  if (i) {
                    if (i.y < s) return
                  } else i = { x: g, y: c }
                  e = { x: g, y: s }
                }
              } else if (
                ((o = b - (r = (f - m) / (h - p)) * g), r < -1 || r > 1)
              )
                if (f > m) {
                  if (i) {
                    if (i.y >= c) return
                  } else i = { x: (s - o) / r, y: s }
                  e = { x: (c - o) / r, y: c }
                } else {
                  if (i) {
                    if (i.y < s) return
                  } else i = { x: (c - o) / r, y: c }
                  e = { x: (s - o) / r, y: s }
                }
              else if (p < h) {
                if (i) {
                  if (i.x >= l) return
                } else i = { x: a, y: r * a + o }
                e = { x: l, y: r * l + o }
              } else {
                if (i) {
                  if (i.x < a) return
                } else i = { x: l, y: r * l + o }
                e = { x: a, y: r * a + o }
              }
              return (n.a = i), (n.b = e), !0
            }
            function Ro(n, t) {
              ;(this.l = n), (this.r = t), (this.a = this.b = null)
            }
            function Fo(n, t, e, r) {
              var o = new Ro(n, t)
              return (
                yo.push(o),
                e && Uo(o, n, t, e),
                r && Uo(o, t, n, r),
                wo[n.i].edges.push(new $o(o, n, t)),
                wo[t.i].edges.push(new $o(o, t, n)),
                o
              )
            }
            function Bo(n, t, e) {
              var r = new Ro(n, null)
              return (r.a = t), (r.b = e), yo.push(r), r
            }
            function Uo(n, t, e, r) {
              n.a || n.b
                ? n.l === e
                  ? (n.b = r)
                  : (n.a = r)
                : ((n.a = r), (n.l = t), (n.r = e))
            }
            function $o(n, t, e) {
              var r = n.a,
                o = n.b
              ;(this.edge = n),
                (this.site = t),
                (this.angle = e
                  ? Math.atan2(e.y - t.y, e.x - t.x)
                  : n.l === t
                  ? Math.atan2(o.x - r.x, r.y - o.y)
                  : Math.atan2(r.x - o.x, o.y - r.y))
            }
            function Wo() {
              this._ = null
            }
            function Yo(n) {
              n.U = n.C = n.L = n.R = n.P = n.N = null
            }
            function Vo(n, t) {
              var e = t,
                r = t.R,
                o = e.U
              o ? (o.L === e ? (o.L = r) : (o.R = r)) : (n._ = r),
                (r.U = o),
                (e.U = r),
                (e.R = r.L),
                e.R && (e.R.U = e),
                (r.L = e)
            }
            function Xo(n, t) {
              var e = t,
                r = t.L,
                o = e.U
              o ? (o.L === e ? (o.L = r) : (o.R = r)) : (n._ = r),
                (r.U = o),
                (e.U = r),
                (e.L = r.R),
                e.L && (e.L.U = e),
                (r.R = e)
            }
            function Zo(n) {
              for (; n.L; ) n = n.L
              return n
            }
            function Go(n, t) {
              var e,
                r,
                o,
                i = n.sort(Jo).pop()
              for (
                yo = [], wo = new Array(n.length), ko = new Wo(), Eo = new Wo();
                ;

              )
                if (
                  ((o = Mo),
                  i && (!o || i.y < o.y || (i.y === o.y && i.x < o.x)))
                )
                  (i.x === e && i.y === r) ||
                    ((wo[i.i] = new Do(i)), Ao(i), (e = i.x), (r = i.y)),
                    (i = n.pop())
                else {
                  if (!o) break
                  jo(o.arc)
                }
              t &&
                ((function(n) {
                  for (
                    var t,
                      e = yo,
                      r = dr(n[0][0], n[0][1], n[1][0], n[1][1]),
                      o = e.length;
                    o--;

                  )
                    (!Io((t = e[o]), n) ||
                      !r(t) ||
                      (k(t.a.x - t.b.x) < An && k(t.a.y - t.b.y) < An)) &&
                      ((t.a = t.b = null), e.splice(o, 1))
                })(t),
                (function(n) {
                  for (
                    var t,
                      e,
                      r,
                      o,
                      i,
                      a,
                      l,
                      s,
                      c,
                      u,
                      d = n[0][0],
                      f = n[1][0],
                      p = n[0][1],
                      m = n[1][1],
                      h = wo,
                      g = h.length;
                    g--;

                  )
                    if ((i = h[g]) && i.prepare())
                      for (s = (l = i.edges).length, a = 0; a < s; )
                        (r = (u = l[a].end()).x),
                          (o = u.y),
                          (t = (c = l[++a % s].start()).x),
                          (e = c.y),
                          (k(r - t) > An || k(o - e) > An) &&
                            (l.splice(
                              a,
                              0,
                              new $o(
                                Bo(
                                  i.site,
                                  u,
                                  k(r - d) < An && m - o > An
                                    ? { x: d, y: k(t - d) < An ? e : m }
                                    : k(o - m) < An && f - r > An
                                    ? { x: k(e - m) < An ? t : f, y: m }
                                    : k(r - f) < An && o - p > An
                                    ? { x: f, y: k(t - f) < An ? e : p }
                                    : k(o - p) < An && r - d > An
                                    ? { x: k(e - p) < An ? t : d, y: p }
                                    : null
                                ),
                                i.site,
                                null
                              )
                            ),
                            ++s)
                })(t))
              var a = { cells: wo, edges: yo }
              return (ko = Eo = yo = wo = null), a
            }
            function Jo(n, t) {
              return t.y - n.y || t.x - n.x
            }
            ;(Do.prototype.prepare = function() {
              for (var n, t = this.edges, e = t.length; e--; )
                ((n = t[e].edge).b && n.a) || t.splice(e, 1)
              return t.sort(Lo), t.length
            }),
              ($o.prototype = {
                start: function() {
                  return this.edge.l === this.site ? this.edge.a : this.edge.b
                },
                end: function() {
                  return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
              }),
              (Wo.prototype = {
                insert: function(n, t) {
                  var e, r, o
                  if (n) {
                    if (
                      ((t.P = n),
                      (t.N = n.N),
                      n.N && (n.N.P = t),
                      (n.N = t),
                      n.R)
                    ) {
                      for (n = n.R; n.L; ) n = n.L
                      n.L = t
                    } else n.R = t
                    e = n
                  } else
                    this._
                      ? ((n = Zo(this._)),
                        (t.P = null),
                        (t.N = n),
                        (n.P = n.L = t),
                        (e = n))
                      : ((t.P = t.N = null), (this._ = t), (e = null))
                  for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; )
                    e === (r = e.U).L
                      ? (o = r.R) && o.C
                        ? ((e.C = o.C = !1), (r.C = !0), (n = r))
                        : (n === e.R && (Vo(this, e), (e = (n = e).U)),
                          (e.C = !1),
                          (r.C = !0),
                          Xo(this, r))
                      : (o = r.L) && o.C
                      ? ((e.C = o.C = !1), (r.C = !0), (n = r))
                      : (n === e.L && (Xo(this, e), (e = (n = e).U)),
                        (e.C = !1),
                        (r.C = !0),
                        Vo(this, r)),
                      (e = n.U)
                  this._.C = !1
                },
                remove: function(n) {
                  n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), (n.N = n.P = null)
                  var t,
                    e,
                    r,
                    o = n.U,
                    i = n.L,
                    a = n.R
                  if (
                    ((e = i ? (a ? Zo(a) : i) : a),
                    o ? (o.L === n ? (o.L = e) : (o.R = e)) : (this._ = e),
                    i && a
                      ? ((r = e.C),
                        (e.C = n.C),
                        (e.L = i),
                        (i.U = e),
                        e !== a
                          ? ((o = e.U),
                            (e.U = n.U),
                            (n = e.R),
                            (o.L = n),
                            (e.R = a),
                            (a.U = e))
                          : ((e.U = o), (o = e), (n = e.R)))
                      : ((r = n.C), (n = e)),
                    n && (n.U = o),
                    !r)
                  )
                    if (n && n.C) n.C = !1
                    else {
                      do {
                        if (n === this._) break
                        if (n === o.L) {
                          if (
                            ((t = o.R).C &&
                              ((t.C = !1), (o.C = !0), Vo(this, o), (t = o.R)),
                            (t.L && t.L.C) || (t.R && t.R.C))
                          ) {
                            ;(t.R && t.R.C) ||
                              ((t.L.C = !1),
                              (t.C = !0),
                              Xo(this, t),
                              (t = o.R)),
                              (t.C = o.C),
                              (o.C = t.R.C = !1),
                              Vo(this, o),
                              (n = this._)
                            break
                          }
                        } else if (
                          ((t = o.L).C &&
                            ((t.C = !1), (o.C = !0), Xo(this, o), (t = o.L)),
                          (t.L && t.L.C) || (t.R && t.R.C))
                        ) {
                          ;(t.L && t.L.C) ||
                            ((t.R.C = !1), (t.C = !0), Vo(this, t), (t = o.L)),
                            (t.C = o.C),
                            (o.C = t.L.C = !1),
                            Xo(this, o),
                            (n = this._)
                          break
                        }
                        ;(t.C = !0), (n = o), (o = o.U)
                      } while (!n.C)
                      n && (n.C = !1)
                    }
                }
              }),
              (i.geom.voronoi = function(n) {
                var t = fo,
                  e = po,
                  r = t,
                  o = e,
                  i = Qo
                if (n) return a(n)
                function a(n) {
                  var t = new Array(n.length),
                    e = i[0][0],
                    r = i[0][1],
                    o = i[1][0],
                    a = i[1][1]
                  return (
                    Go(l(n), i).cells.forEach(function(i, l) {
                      var s = i.edges,
                        c = i.site
                      ;(t[l] = s.length
                        ? s.map(function(n) {
                            var t = n.start()
                            return [t.x, t.y]
                          })
                        : c.x >= e && c.x <= o && c.y >= r && c.y <= a
                        ? [[e, a], [o, a], [o, r], [e, r]]
                        : []).point = n[l]
                    }),
                    t
                  )
                }
                function l(n) {
                  return n.map(function(n, t) {
                    return {
                      x: Math.round(r(n, t) / An) * An,
                      y: Math.round(o(n, t) / An) * An,
                      i: t
                    }
                  })
                }
                return (
                  (a.links = function(n) {
                    return Go(l(n))
                      .edges.filter(function(n) {
                        return n.l && n.r
                      })
                      .map(function(t) {
                        return { source: n[t.l.i], target: n[t.r.i] }
                      })
                  }),
                  (a.triangles = function(n) {
                    var t = []
                    return (
                      Go(l(n)).cells.forEach(function(e, r) {
                        for (
                          var o,
                            i,
                            a,
                            l,
                            s = e.site,
                            c = e.edges.sort(Lo),
                            u = -1,
                            d = c.length,
                            f = c[d - 1].edge,
                            p = f.l === s ? f.r : f.l;
                          ++u < d;

                        )
                          (o = p),
                            (p = (f = c[u].edge).l === s ? f.r : f.l),
                            r < o.i &&
                              r < p.i &&
                              ((a = o),
                              (l = p),
                              ((i = s).x - l.x) * (a.y - i.y) -
                                (i.x - a.x) * (l.y - i.y) <
                                0) &&
                              t.push([n[r], n[o.i], n[p.i]])
                      }),
                      t
                    )
                  }),
                  (a.x = function(n) {
                    return arguments.length ? ((r = Mt((t = n))), a) : t
                  }),
                  (a.y = function(n) {
                    return arguments.length ? ((o = Mt((e = n))), a) : e
                  }),
                  (a.clipExtent = function(n) {
                    return arguments.length
                      ? ((i = null == n ? Qo : n), a)
                      : i === Qo
                      ? null
                      : i
                  }),
                  (a.size = function(n) {
                    return arguments.length
                      ? a.clipExtent(n && [[0, 0], n])
                      : i === Qo
                      ? null
                      : i && i[1]
                  }),
                  a
                )
              })
            var Qo = [[-1e6, -1e6], [1e6, 1e6]]
            function Ko(n) {
              return n.x
            }
            function ni(n) {
              return n.y
            }
            function ti(n, t, e, r, o, i) {
              if (!n(t, e, r, o, i)) {
                var a = 0.5 * (e + o),
                  l = 0.5 * (r + i),
                  s = t.nodes
                s[0] && ti(n, s[0], e, r, a, l),
                  s[1] && ti(n, s[1], a, r, o, l),
                  s[2] && ti(n, s[2], e, l, a, i),
                  s[3] && ti(n, s[3], a, l, o, i)
              }
            }
            function ei(n, t, e, r, o, i, a) {
              var l,
                s = 1 / 0
              return (
                (function n(c, u, d, f, p) {
                  if (!(u > i || d > a || f < r || p < o)) {
                    if ((m = c.point)) {
                      var m,
                        h = t - c.x,
                        g = e - c.y,
                        b = h * h + g * g
                      if (b < s) {
                        var v = Math.sqrt((s = b))
                        ;(r = t - v),
                          (o = e - v),
                          (i = t + v),
                          (a = e + v),
                          (l = m)
                      }
                    }
                    for (
                      var x = c.nodes,
                        y = 0.5 * (u + f),
                        w = 0.5 * (d + p),
                        k = ((e >= w) << 1) | (t >= y),
                        M = k + 4;
                      k < M;
                      ++k
                    )
                      if ((c = x[3 & k]))
                        switch (3 & k) {
                          case 0:
                            n(c, u, d, y, w)
                            break
                          case 1:
                            n(c, y, d, f, w)
                            break
                          case 2:
                            n(c, u, w, y, p)
                            break
                          case 3:
                            n(c, y, w, f, p)
                        }
                  }
                })(n, r, o, i, a),
                l
              )
            }
            function ri(n, t) {
              ;(n = i.rgb(n)), (t = i.rgb(t))
              var e = n.r,
                r = n.g,
                o = n.b,
                a = t.r - e,
                l = t.g - r,
                s = t.b - o
              return function(n) {
                return (
                  '#' +
                  gt(Math.round(e + a * n)) +
                  gt(Math.round(r + l * n)) +
                  gt(Math.round(o + s * n))
                )
              }
            }
            function oi(n, t) {
              var e,
                r = {},
                o = {}
              for (e in n) e in t ? (r[e] = ci(n[e], t[e])) : (o[e] = n[e])
              for (e in t) e in n || (o[e] = t[e])
              return function(n) {
                for (e in r) o[e] = r[e](n)
                return o
              }
            }
            function ii(n, t) {
              return (
                (n = +n),
                (t = +t),
                function(e) {
                  return n * (1 - e) + t * e
                }
              )
            }
            function ai(n, t) {
              var e,
                r,
                o,
                i = (li.lastIndex = si.lastIndex = 0),
                a = -1,
                l = [],
                s = []
              for (n += '', t += ''; (e = li.exec(n)) && (r = si.exec(t)); )
                (o = r.index) > i &&
                  ((o = t.slice(i, o)), l[a] ? (l[a] += o) : (l[++a] = o)),
                  (e = e[0]) === (r = r[0])
                    ? l[a]
                      ? (l[a] += r)
                      : (l[++a] = r)
                    : ((l[++a] = null), s.push({ i: a, x: ii(e, r) })),
                  (i = si.lastIndex)
              return (
                i < t.length &&
                  ((o = t.slice(i)), l[a] ? (l[a] += o) : (l[++a] = o)),
                l.length < 2
                  ? s[0]
                    ? ((t = s[0].x),
                      function(n) {
                        return t(n) + ''
                      })
                    : function() {
                        return t
                      }
                  : ((t = s.length),
                    function(n) {
                      for (var e, r = 0; r < t; ++r) l[(e = s[r]).i] = e.x(n)
                      return l.join('')
                    })
              )
            }
            ;(i.geom.delaunay = function(n) {
              return i.geom.voronoi().triangles(n)
            }),
              (i.geom.quadtree = function(n, t, e, r, o) {
                var i,
                  a = fo,
                  l = po
                if ((i = arguments.length))
                  return (
                    (a = Ko),
                    (l = ni),
                    3 === i && ((o = e), (r = t), (e = t = 0)),
                    s(n)
                  )
                function s(n) {
                  var s,
                    c,
                    u,
                    d,
                    f,
                    p,
                    m,
                    h,
                    g,
                    b = Mt(a),
                    v = Mt(l)
                  if (null != t) (p = t), (m = e), (h = r), (g = o)
                  else if (
                    ((h = g = -(p = m = 1 / 0)),
                    (c = []),
                    (u = []),
                    (f = n.length),
                    i)
                  )
                    for (d = 0; d < f; ++d)
                      (s = n[d]).x < p && (p = s.x),
                        s.y < m && (m = s.y),
                        s.x > h && (h = s.x),
                        s.y > g && (g = s.y),
                        c.push(s.x),
                        u.push(s.y)
                  else
                    for (d = 0; d < f; ++d) {
                      var x = +b((s = n[d]), d),
                        y = +v(s, d)
                      x < p && (p = x),
                        y < m && (m = y),
                        x > h && (h = x),
                        y > g && (g = y),
                        c.push(x),
                        u.push(y)
                    }
                  var w = h - p,
                    M = g - m
                  function E(n, t, e, r, o, i, a, l) {
                    if (!isNaN(e) && !isNaN(r))
                      if (n.leaf) {
                        var s = n.x,
                          c = n.y
                        if (null != s)
                          if (k(s - e) + k(c - r) < 0.01)
                            _(n, t, e, r, o, i, a, l)
                          else {
                            var u = n.point
                            ;(n.x = n.y = n.point = null),
                              _(n, u, s, c, o, i, a, l),
                              _(n, t, e, r, o, i, a, l)
                          }
                        else (n.x = e), (n.y = r), (n.point = t)
                      } else _(n, t, e, r, o, i, a, l)
                  }
                  function _(n, t, e, r, o, i, a, l) {
                    var s = 0.5 * (o + a),
                      c = 0.5 * (i + l),
                      u = e >= s,
                      d = r >= c,
                      f = (d << 1) | u
                    ;(n.leaf = !1),
                      u ? (o = s) : (a = s),
                      d ? (i = c) : (l = c),
                      E(
                        (n =
                          n.nodes[f] ||
                          (n.nodes[f] = {
                            leaf: !0,
                            nodes: [],
                            point: null,
                            x: null,
                            y: null
                          })),
                        t,
                        e,
                        r,
                        o,
                        i,
                        a,
                        l
                      )
                  }
                  w > M ? (g = m + w) : (h = p + M)
                  var S = {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null,
                    add: function(n) {
                      E(S, n, +b(n, ++d), +v(n, d), p, m, h, g)
                    },
                    visit: function(n) {
                      ti(n, S, p, m, h, g)
                    },
                    find: function(n) {
                      return ei(S, n[0], n[1], p, m, h, g)
                    }
                  }
                  if (((d = -1), null == t)) {
                    for (; ++d < f; ) E(S, n[d], c[d], u[d], p, m, h, g)
                    --d
                  } else n.forEach(S.add)
                  return (c = u = n = s = null), S
                }
                return (
                  (s.x = function(n) {
                    return arguments.length ? ((a = n), s) : a
                  }),
                  (s.y = function(n) {
                    return arguments.length ? ((l = n), s) : l
                  }),
                  (s.extent = function(n) {
                    return arguments.length
                      ? (null == n
                          ? (t = e = r = o = null)
                          : ((t = +n[0][0]),
                            (e = +n[0][1]),
                            (r = +n[1][0]),
                            (o = +n[1][1])),
                        s)
                      : null == t
                      ? null
                      : [[t, e], [r, o]]
                  }),
                  (s.size = function(n) {
                    return arguments.length
                      ? (null == n
                          ? (t = e = r = o = null)
                          : ((t = e = 0), (r = +n[0]), (o = +n[1])),
                        s)
                      : null == t
                      ? null
                      : [r - t, o - e]
                  }),
                  s
                )
              }),
              (i.interpolateRgb = ri),
              (i.interpolateObject = oi),
              (i.interpolateNumber = ii),
              (i.interpolateString = ai)
            var li = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
              si = new RegExp(li.source, 'g')
            function ci(n, t) {
              for (
                var e, r = i.interpolators.length;
                --r >= 0 && !(e = i.interpolators[r](n, t));

              );
              return e
            }
            function ui(n, t) {
              var e,
                r = [],
                o = [],
                i = n.length,
                a = t.length,
                l = Math.min(n.length, t.length)
              for (e = 0; e < l; ++e) r.push(ci(n[e], t[e]))
              for (; e < i; ++e) o[e] = n[e]
              for (; e < a; ++e) o[e] = t[e]
              return function(n) {
                for (e = 0; e < l; ++e) o[e] = r[e](n)
                return o
              }
            }
            ;(i.interpolate = ci),
              (i.interpolators = [
                function(n, t) {
                  var e = typeof t
                  return ('string' === e
                    ? kt.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t)
                      ? ri
                      : ai
                    : t instanceof Zn
                    ? ri
                    : Array.isArray(t)
                    ? ui
                    : 'object' === e && isNaN(t)
                    ? oi
                    : ii)(n, t)
                }
              ]),
              (i.interpolateArray = ui)
            var di = function() {
                return q
              },
              fi = i.map({
                linear: di,
                poly: function(n) {
                  return function(t) {
                    return Math.pow(t, n)
                  }
                },
                quad: function() {
                  return bi
                },
                cubic: function() {
                  return vi
                },
                sin: function() {
                  return yi
                },
                exp: function() {
                  return wi
                },
                circle: function() {
                  return ki
                },
                elastic: function(n, t) {
                  var e
                  return (
                    arguments.length < 2 && (t = 0.45),
                    arguments.length
                      ? (e = (t / Dn) * Math.asin(1 / n))
                      : ((n = 1), (e = t / 4)),
                    function(r) {
                      return (
                        1 +
                        n * Math.pow(2, -10 * r) * Math.sin(((r - e) * Dn) / t)
                      )
                    }
                  )
                },
                back: function(n) {
                  return (
                    n || (n = 1.70158),
                    function(t) {
                      return t * t * ((n + 1) * t - n)
                    }
                  )
                },
                bounce: function() {
                  return Mi
                }
              }),
              pi = i.map({
                in: q,
                out: hi,
                'in-out': gi,
                'out-in': function(n) {
                  return gi(hi(n))
                }
              })
            function mi(n) {
              return function(t) {
                return t <= 0 ? 0 : t >= 1 ? 1 : n(t)
              }
            }
            function hi(n) {
              return function(t) {
                return 1 - n(1 - t)
              }
            }
            function gi(n) {
              return function(t) {
                return 0.5 * (t < 0.5 ? n(2 * t) : 2 - n(2 - 2 * t))
              }
            }
            function bi(n) {
              return n * n
            }
            function vi(n) {
              return n * n * n
            }
            function xi(n) {
              if (n <= 0) return 0
              if (n >= 1) return 1
              var t = n * n,
                e = t * n
              return 4 * (n < 0.5 ? e : 3 * (n - t) + e - 0.75)
            }
            function yi(n) {
              return 1 - Math.cos(n * qn)
            }
            function wi(n) {
              return Math.pow(2, 10 * (n - 1))
            }
            function ki(n) {
              return 1 - Math.sqrt(1 - n * n)
            }
            function Mi(n) {
              return n < 1 / 2.75
                ? 7.5625 * n * n
                : n < 2 / 2.75
                ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
                : n < 2.5 / 2.75
                ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
                : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375
            }
            function Ei(n, t) {
              return (
                (t -= n),
                function(e) {
                  return Math.round(n + t * e)
                }
              )
            }
            function _i(n) {
              var t,
                e,
                r,
                o = [n.a, n.b],
                i = [n.c, n.d],
                a = Ti(o),
                l = Si(o, i),
                s =
                  Ti(
                    (((t = i)[0] += (r = -l) * (e = o)[0]),
                    (t[1] += r * e[1]),
                    t)
                  ) || 0
              o[0] * i[1] < i[0] * o[1] &&
                ((o[0] *= -1), (o[1] *= -1), (a *= -1), (l *= -1)),
                (this.rotate =
                  (a ? Math.atan2(o[1], o[0]) : Math.atan2(-i[0], i[1])) * Pn),
                (this.translate = [n.e, n.f]),
                (this.scale = [a, s]),
                (this.skew = s ? Math.atan2(l, s) * Pn : 0)
            }
            function Si(n, t) {
              return n[0] * t[0] + n[1] * t[1]
            }
            function Ti(n) {
              var t = Math.sqrt(Si(n, n))
              return t && ((n[0] /= t), (n[1] /= t)), t
            }
            ;(i.ease = function(n) {
              var t = n.indexOf('-'),
                e = t >= 0 ? n.slice(0, t) : n,
                r = t >= 0 ? n.slice(t + 1) : 'in'
              return (
                (e = fi.get(e) || di),
                mi((r = pi.get(r) || q)(e.apply(null, a.call(arguments, 1))))
              )
            }),
              (i.interpolateHcl = function(n, t) {
                ;(n = i.hcl(n)), (t = i.hcl(t))
                var e = n.h,
                  r = n.c,
                  o = n.l,
                  a = t.h - e,
                  l = t.c - r,
                  s = t.l - o
                return (
                  isNaN(l) && ((l = 0), (r = isNaN(r) ? t.c : r)),
                  isNaN(a)
                    ? ((a = 0), (e = isNaN(e) ? t.h : e))
                    : a > 180
                    ? (a -= 360)
                    : a < -180 && (a += 360),
                  function(n) {
                    return tt(e + a * n, r + l * n, o + s * n) + ''
                  }
                )
              }),
              (i.interpolateHsl = function(n, t) {
                ;(n = i.hsl(n)), (t = i.hsl(t))
                var e = n.h,
                  r = n.s,
                  o = n.l,
                  a = t.h - e,
                  l = t.s - r,
                  s = t.l - o
                return (
                  isNaN(l) && ((l = 0), (r = isNaN(r) ? t.s : r)),
                  isNaN(a)
                    ? ((a = 0), (e = isNaN(e) ? t.h : e))
                    : a > 180
                    ? (a -= 360)
                    : a < -180 && (a += 360),
                  function(n) {
                    return Qn(e + a * n, r + l * n, o + s * n) + ''
                  }
                )
              }),
              (i.interpolateLab = function(n, t) {
                ;(n = i.lab(n)), (t = i.lab(t))
                var e = n.l,
                  r = n.a,
                  o = n.b,
                  a = t.l - e,
                  l = t.a - r,
                  s = t.b - o
                return function(n) {
                  return st(e + a * n, r + l * n, o + s * n) + ''
                }
              }),
              (i.interpolateRound = Ei),
              (i.transform = function(n) {
                var t = s.createElementNS(i.ns.prefix.svg, 'g')
                return (i.transform = function(n) {
                  if (null != n) {
                    t.setAttribute('transform', n)
                    var e = t.transform.baseVal.consolidate()
                  }
                  return new _i(e ? e.matrix : Ni)
                })(n)
              }),
              (_i.prototype.toString = function() {
                return (
                  'translate(' +
                  this.translate +
                  ')rotate(' +
                  this.rotate +
                  ')skewX(' +
                  this.skew +
                  ')scale(' +
                  this.scale +
                  ')'
                )
              })
            var Ni = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }
            function Ci(n) {
              return n.length ? n.pop() + ',' : ''
            }
            function ji(n, t) {
              var e = [],
                r = []
              return (
                (n = i.transform(n)),
                (t = i.transform(t)),
                (function(n, t, e, r) {
                  if (n[0] !== t[0] || n[1] !== t[1]) {
                    var o = e.push('translate(', null, ',', null, ')')
                    r.push(
                      { i: o - 4, x: ii(n[0], t[0]) },
                      { i: o - 2, x: ii(n[1], t[1]) }
                    )
                  } else (t[0] || t[1]) && e.push('translate(' + t + ')')
                })(n.translate, t.translate, e, r),
                (function(n, t, e, r) {
                  n !== t
                    ? (n - t > 180 ? (t += 360) : t - n > 180 && (n += 360),
                      r.push({
                        i: e.push(Ci(e) + 'rotate(', null, ')') - 2,
                        x: ii(n, t)
                      }))
                    : t && e.push(Ci(e) + 'rotate(' + t + ')')
                })(n.rotate, t.rotate, e, r),
                (function(n, t, e, r) {
                  n !== t
                    ? r.push({
                        i: e.push(Ci(e) + 'skewX(', null, ')') - 2,
                        x: ii(n, t)
                      })
                    : t && e.push(Ci(e) + 'skewX(' + t + ')')
                })(n.skew, t.skew, e, r),
                (function(n, t, e, r) {
                  if (n[0] !== t[0] || n[1] !== t[1]) {
                    var o = e.push(Ci(e) + 'scale(', null, ',', null, ')')
                    r.push(
                      { i: o - 4, x: ii(n[0], t[0]) },
                      { i: o - 2, x: ii(n[1], t[1]) }
                    )
                  } else
                    (1 === t[0] && 1 === t[1]) ||
                      e.push(Ci(e) + 'scale(' + t + ')')
                })(n.scale, t.scale, e, r),
                (n = t = null),
                function(n) {
                  for (var t, o = -1, i = r.length; ++o < i; )
                    e[(t = r[o]).i] = t.x(n)
                  return e.join('')
                }
              )
            }
            function Ai(n, t) {
              return (
                (t = (t -= n = +n) || 1 / t),
                function(e) {
                  return (e - n) / t
                }
              )
            }
            function Oi(n, t) {
              return (
                (t = (t -= n = +n) || 1 / t),
                function(e) {
                  return Math.max(0, Math.min(1, (e - n) / t))
                }
              )
            }
            function zi(n) {
              for (
                var t = n.source,
                  e = n.target,
                  r = (function(n, t) {
                    if (n === t) return n
                    for (
                      var e = Di(n),
                        r = Di(t),
                        o = e.pop(),
                        i = r.pop(),
                        a = null;
                      o === i;

                    )
                      (a = o), (o = e.pop()), (i = r.pop())
                    return a
                  })(t, e),
                  o = [t];
                t !== r;

              )
                (t = t.parent), o.push(t)
              for (var i = o.length; e !== r; )
                o.splice(i, 0, e), (e = e.parent)
              return o
            }
            function Di(n) {
              for (var t = [], e = n.parent; null != e; )
                t.push(n), (n = e), (e = e.parent)
              return t.push(n), t
            }
            function Li(n) {
              n.fixed |= 2
            }
            function qi(n) {
              n.fixed &= -7
            }
            function Hi(n) {
              ;(n.fixed |= 4), (n.px = n.x), (n.py = n.y)
            }
            function Pi(n) {
              n.fixed &= -5
            }
            ;(i.interpolateTransform = ji),
              (i.layout = {}),
              (i.layout.bundle = function() {
                return function(n) {
                  for (var t = [], e = -1, r = n.length; ++e < r; )
                    t.push(zi(n[e]))
                  return t
                }
              }),
              (i.layout.chord = function() {
                var n,
                  t,
                  e,
                  r,
                  o,
                  a,
                  l,
                  s = {},
                  c = 0
                function u() {
                  var s,
                    u,
                    f,
                    p,
                    m,
                    h = {},
                    g = [],
                    b = i.range(r),
                    v = []
                  for (n = [], t = [], s = 0, p = -1; ++p < r; ) {
                    for (u = 0, m = -1; ++m < r; ) u += e[p][m]
                    g.push(u), v.push(i.range(r)), (s += u)
                  }
                  for (
                    o &&
                      b.sort(function(n, t) {
                        return o(g[n], g[t])
                      }),
                      a &&
                        v.forEach(function(n, t) {
                          n.sort(function(n, r) {
                            return a(e[t][n], e[t][r])
                          })
                        }),
                      s = (Dn - c * r) / s,
                      u = 0,
                      p = -1;
                    ++p < r;

                  ) {
                    for (f = u, m = -1; ++m < r; ) {
                      var x = b[p],
                        y = v[x][m],
                        w = e[x][y],
                        k = u,
                        M = (u += w * s)
                      h[x + '-' + y] = {
                        index: x,
                        subindex: y,
                        startAngle: k,
                        endAngle: M,
                        value: w
                      }
                    }
                    ;(t[x] = {
                      index: x,
                      startAngle: f,
                      endAngle: u,
                      value: g[x]
                    }),
                      (u += c)
                  }
                  for (p = -1; ++p < r; )
                    for (m = p - 1; ++m < r; ) {
                      var E = h[p + '-' + m],
                        _ = h[m + '-' + p]
                      ;(E.value || _.value) &&
                        n.push(
                          E.value < _.value
                            ? { source: _, target: E }
                            : { source: E, target: _ }
                        )
                    }
                  l && d()
                }
                function d() {
                  n.sort(function(n, t) {
                    return l(
                      (n.source.value + n.target.value) / 2,
                      (t.source.value + t.target.value) / 2
                    )
                  })
                }
                return (
                  (s.matrix = function(o) {
                    return arguments.length
                      ? ((r = (e = o) && e.length), (n = t = null), s)
                      : e
                  }),
                  (s.padding = function(e) {
                    return arguments.length ? ((c = e), (n = t = null), s) : c
                  }),
                  (s.sortGroups = function(e) {
                    return arguments.length ? ((o = e), (n = t = null), s) : o
                  }),
                  (s.sortSubgroups = function(t) {
                    return arguments.length ? ((a = t), (n = null), s) : a
                  }),
                  (s.sortChords = function(t) {
                    return arguments.length ? ((l = t), n && d(), s) : l
                  }),
                  (s.chords = function() {
                    return n || u(), n
                  }),
                  (s.groups = function() {
                    return t || u(), t
                  }),
                  s
                )
              }),
              (i.layout.force = function() {
                var n,
                  t,
                  e,
                  r,
                  o,
                  a,
                  l = {},
                  s = i.dispatch('start', 'tick', 'end'),
                  c = [1, 1],
                  u = 0.9,
                  d = Ii,
                  f = Ri,
                  p = -30,
                  m = Fi,
                  h = 0.1,
                  g = 0.64,
                  b = [],
                  v = []
                function x(n) {
                  return function(t, e, r, o) {
                    if (t.point !== n) {
                      var i = t.cx - n.x,
                        a = t.cy - n.y,
                        l = o - e,
                        s = i * i + a * a
                      if ((l * l) / g < s) {
                        if (s < m) {
                          var c = t.charge / s
                          ;(n.px -= i * c), (n.py -= a * c)
                        }
                        return !0
                      }
                      t.point &&
                        s &&
                        s < m &&
                        ((c = t.pointCharge / s),
                        (n.px -= i * c),
                        (n.py -= a * c))
                    }
                    return !t.charge
                  }
                }
                function y(n) {
                  ;(n.px = i.event.x), (n.py = i.event.y), l.resume()
                }
                return (
                  (l.tick = function() {
                    if ((e *= 0.99) < 0.005)
                      return (
                        (n = null), s.end({ type: 'end', alpha: (e = 0) }), !0
                      )
                    var t,
                      l,
                      d,
                      f,
                      m,
                      g,
                      y,
                      w,
                      k,
                      M = b.length,
                      E = v.length
                    for (l = 0; l < E; ++l)
                      (f = (d = v[l]).source),
                        (g =
                          (w = (m = d.target).x - f.x) * w +
                          (k = m.y - f.y) * k) &&
                          ((w *= g =
                            (e * o[l] * ((g = Math.sqrt(g)) - r[l])) / g),
                          (k *= g),
                          (m.x -=
                            w *
                            (y =
                              f.weight + m.weight
                                ? f.weight / (f.weight + m.weight)
                                : 0.5)),
                          (m.y -= k * y),
                          (f.x += w * (y = 1 - y)),
                          (f.y += k * y))
                    if (
                      (y = e * h) &&
                      ((w = c[0] / 2), (k = c[1] / 2), (l = -1), y)
                    )
                      for (; ++l < M; )
                        ((d = b[l]).x += (w - d.x) * y), (d.y += (k - d.y) * y)
                    if (p)
                      for (
                        (function n(t, e, r) {
                          var o = 0,
                            i = 0
                          if (((t.charge = 0), !t.leaf))
                            for (
                              var a, l = t.nodes, s = l.length, c = -1;
                              ++c < s;

                            )
                              null != (a = l[c]) &&
                                (n(a, e, r),
                                (t.charge += a.charge),
                                (o += a.charge * a.cx),
                                (i += a.charge * a.cy))
                          if (t.point) {
                            t.leaf ||
                              ((t.point.x += Math.random() - 0.5),
                              (t.point.y += Math.random() - 0.5))
                            var u = e * r[t.point.index]
                            ;(t.charge += t.pointCharge = u),
                              (o += u * t.point.x),
                              (i += u * t.point.y)
                          }
                          ;(t.cx = o / t.charge), (t.cy = i / t.charge)
                        })((t = i.geom.quadtree(b)), e, a),
                          l = -1;
                        ++l < M;

                      )
                        (d = b[l]).fixed || t.visit(x(d))
                    for (l = -1; ++l < M; )
                      (d = b[l]).fixed
                        ? ((d.x = d.px), (d.y = d.py))
                        : ((d.x -= (d.px - (d.px = d.x)) * u),
                          (d.y -= (d.py - (d.py = d.y)) * u))
                    s.tick({ type: 'tick', alpha: e })
                  }),
                  (l.nodes = function(n) {
                    return arguments.length ? ((b = n), l) : b
                  }),
                  (l.links = function(n) {
                    return arguments.length ? ((v = n), l) : v
                  }),
                  (l.size = function(n) {
                    return arguments.length ? ((c = n), l) : c
                  }),
                  (l.linkDistance = function(n) {
                    return arguments.length
                      ? ((d = 'function' == typeof n ? n : +n), l)
                      : d
                  }),
                  (l.distance = l.linkDistance),
                  (l.linkStrength = function(n) {
                    return arguments.length
                      ? ((f = 'function' == typeof n ? n : +n), l)
                      : f
                  }),
                  (l.friction = function(n) {
                    return arguments.length ? ((u = +n), l) : u
                  }),
                  (l.charge = function(n) {
                    return arguments.length
                      ? ((p = 'function' == typeof n ? n : +n), l)
                      : p
                  }),
                  (l.chargeDistance = function(n) {
                    return arguments.length ? ((m = n * n), l) : Math.sqrt(m)
                  }),
                  (l.gravity = function(n) {
                    return arguments.length ? ((h = +n), l) : h
                  }),
                  (l.theta = function(n) {
                    return arguments.length ? ((g = n * n), l) : Math.sqrt(g)
                  }),
                  (l.alpha = function(t) {
                    return arguments.length
                      ? ((t = +t),
                        e
                          ? t > 0
                            ? (e = t)
                            : ((n.c = null),
                              (n.t = NaN),
                              (n = null),
                              s.end({ type: 'end', alpha: (e = 0) }))
                          : t > 0 &&
                            (s.start({ type: 'start', alpha: (e = t) }),
                            (n = At(l.tick))),
                        l)
                      : e
                  }),
                  (l.start = function() {
                    var n,
                      t,
                      e,
                      i = b.length,
                      s = v.length,
                      u = c[0],
                      m = c[1]
                    for (n = 0; n < i; ++n)
                      ((e = b[n]).index = n), (e.weight = 0)
                    for (n = 0; n < s; ++n)
                      'number' == typeof (e = v[n]).source &&
                        (e.source = b[e.source]),
                        'number' == typeof e.target && (e.target = b[e.target]),
                        ++e.source.weight,
                        ++e.target.weight
                    for (n = 0; n < i; ++n)
                      (e = b[n]),
                        isNaN(e.x) && (e.x = h('x', u)),
                        isNaN(e.y) && (e.y = h('y', m)),
                        isNaN(e.px) && (e.px = e.x),
                        isNaN(e.py) && (e.py = e.y)
                    if (((r = []), 'function' == typeof d))
                      for (n = 0; n < s; ++n) r[n] = +d.call(this, v[n], n)
                    else for (n = 0; n < s; ++n) r[n] = d
                    if (((o = []), 'function' == typeof f))
                      for (n = 0; n < s; ++n) o[n] = +f.call(this, v[n], n)
                    else for (n = 0; n < s; ++n) o[n] = f
                    if (((a = []), 'function' == typeof p))
                      for (n = 0; n < i; ++n) a[n] = +p.call(this, b[n], n)
                    else for (n = 0; n < i; ++n) a[n] = p
                    function h(e, r) {
                      if (!t) {
                        for (t = new Array(i), c = 0; c < i; ++c) t[c] = []
                        for (c = 0; c < s; ++c) {
                          var o = v[c]
                          t[o.source.index].push(o.target),
                            t[o.target.index].push(o.source)
                        }
                      }
                      for (var a, l = t[n], c = -1, u = l.length; ++c < u; )
                        if (!isNaN((a = l[c][e]))) return a
                      return Math.random() * r
                    }
                    return l.resume()
                  }),
                  (l.resume = function() {
                    return l.alpha(0.1)
                  }),
                  (l.stop = function() {
                    return l.alpha(0)
                  }),
                  (l.drag = function() {
                    if (
                      (t ||
                        (t = i.behavior
                          .drag()
                          .origin(q)
                          .on('dragstart.force', Li)
                          .on('drag.force', y)
                          .on('dragend.force', qi)),
                      !arguments.length)
                    )
                      return t
                    this.on('mouseover.force', Hi)
                      .on('mouseout.force', Pi)
                      .call(t)
                  }),
                  i.rebind(l, s, 'on')
                )
              })
            var Ii = 20,
              Ri = 1,
              Fi = 1 / 0
            function Bi(n, t) {
              return (
                i.rebind(n, t, 'sort', 'children', 'value'),
                (n.nodes = n),
                (n.links = Xi),
                n
              )
            }
            function Ui(n, t) {
              for (var e = [n]; null != (n = e.pop()); )
                if ((t(n), (o = n.children) && (r = o.length)))
                  for (var r, o; --r >= 0; ) e.push(o[r])
            }
            function $i(n, t) {
              for (var e = [n], r = []; null != (n = e.pop()); )
                if ((r.push(n), (i = n.children) && (o = i.length)))
                  for (var o, i, a = -1; ++a < o; ) e.push(i[a])
              for (; null != (n = r.pop()); ) t(n)
            }
            function Wi(n) {
              return n.children
            }
            function Yi(n) {
              return n.value
            }
            function Vi(n, t) {
              return t.value - n.value
            }
            function Xi(n) {
              return i.merge(
                n.map(function(n) {
                  return (n.children || []).map(function(t) {
                    return { source: n, target: t }
                  })
                })
              )
            }
            ;(i.layout.hierarchy = function() {
              var n = Vi,
                t = Wi,
                e = Yi
              function r(o) {
                var i,
                  a = [o],
                  l = []
                for (o.depth = 0; null != (i = a.pop()); )
                  if (
                    (l.push(i), (c = t.call(r, i, i.depth)) && (s = c.length))
                  ) {
                    for (var s, c, u; --s >= 0; )
                      a.push((u = c[s])),
                        (u.parent = i),
                        (u.depth = i.depth + 1)
                    e && (i.value = 0), (i.children = c)
                  } else
                    e && (i.value = +e.call(r, i, i.depth) || 0),
                      delete i.children
                return (
                  $i(o, function(t) {
                    var r, o
                    n && (r = t.children) && r.sort(n),
                      e && (o = t.parent) && (o.value += t.value)
                  }),
                  l
                )
              }
              return (
                (r.sort = function(t) {
                  return arguments.length ? ((n = t), r) : n
                }),
                (r.children = function(n) {
                  return arguments.length ? ((t = n), r) : t
                }),
                (r.value = function(n) {
                  return arguments.length ? ((e = n), r) : e
                }),
                (r.revalue = function(n) {
                  return (
                    e &&
                      (Ui(n, function(n) {
                        n.children && (n.value = 0)
                      }),
                      $i(n, function(n) {
                        var t
                        n.children || (n.value = +e.call(r, n, n.depth) || 0),
                          (t = n.parent) && (t.value += n.value)
                      })),
                    n
                  )
                }),
                r
              )
            }),
              (i.layout.partition = function() {
                var n = i.layout.hierarchy(),
                  t = [1, 1]
                function e(e, r) {
                  var o = n.call(this, e, r)
                  return (
                    (function n(t, e, r, o) {
                      var i = t.children
                      if (
                        ((t.x = e),
                        (t.y = t.depth * o),
                        (t.dx = r),
                        (t.dy = o),
                        i && (a = i.length))
                      ) {
                        var a,
                          l,
                          s,
                          c = -1
                        for (r = t.value ? r / t.value : 0; ++c < a; )
                          n((l = i[c]), e, (s = l.value * r), o), (e += s)
                      }
                    })(
                      o[0],
                      0,
                      t[0],
                      t[1] /
                        (function n(t) {
                          var e = t.children,
                            r = 0
                          if (e && (o = e.length))
                            for (var o, i = -1; ++i < o; )
                              r = Math.max(r, n(e[i]))
                          return 1 + r
                        })(o[0])
                    ),
                    o
                  )
                }
                return (
                  (e.size = function(n) {
                    return arguments.length ? ((t = n), e) : t
                  }),
                  Bi(e, n)
                )
              }),
              (i.layout.pie = function() {
                var n = Number,
                  t = Zi,
                  e = 0,
                  r = Dn,
                  o = 0
                function a(l) {
                  var s,
                    c = l.length,
                    u = l.map(function(t, e) {
                      return +n.call(a, t, e)
                    }),
                    d = +('function' == typeof e
                      ? e.apply(this, arguments)
                      : e),
                    f =
                      ('function' == typeof r ? r.apply(this, arguments) : r) -
                      d,
                    p = Math.min(
                      Math.abs(f) / c,
                      +('function' == typeof o ? o.apply(this, arguments) : o)
                    ),
                    m = p * (f < 0 ? -1 : 1),
                    h = i.sum(u),
                    g = h ? (f - c * m) / h : 0,
                    b = i.range(c),
                    v = []
                  return (
                    null != t &&
                      b.sort(
                        t === Zi
                          ? function(n, t) {
                              return u[t] - u[n]
                            }
                          : function(n, e) {
                              return t(l[n], l[e])
                            }
                      ),
                    b.forEach(function(n) {
                      v[n] = {
                        data: l[n],
                        value: (s = u[n]),
                        startAngle: d,
                        endAngle: (d += s * g + m),
                        padAngle: p
                      }
                    }),
                    v
                  )
                }
                return (
                  (a.value = function(t) {
                    return arguments.length ? ((n = t), a) : n
                  }),
                  (a.sort = function(n) {
                    return arguments.length ? ((t = n), a) : t
                  }),
                  (a.startAngle = function(n) {
                    return arguments.length ? ((e = n), a) : e
                  }),
                  (a.endAngle = function(n) {
                    return arguments.length ? ((r = n), a) : r
                  }),
                  (a.padAngle = function(n) {
                    return arguments.length ? ((o = n), a) : o
                  }),
                  a
                )
              })
            var Zi = {}
            function Gi(n) {
              return n.x
            }
            function Ji(n) {
              return n.y
            }
            function Qi(n, t, e) {
              ;(n.y0 = t), (n.y = e)
            }
            i.layout.stack = function() {
              var n = q,
                t = ta,
                e = ea,
                r = Qi,
                o = Gi,
                a = Ji
              function l(s, c) {
                if (!(p = s.length)) return s
                var u = s.map(function(t, e) {
                    return n.call(l, t, e)
                  }),
                  d = u.map(function(n) {
                    return n.map(function(n, t) {
                      return [o.call(l, n, t), a.call(l, n, t)]
                    })
                  }),
                  f = t.call(l, d, c)
                ;(u = i.permute(u, f)), (d = i.permute(d, f))
                var p,
                  m,
                  h,
                  g,
                  b = e.call(l, d, c),
                  v = u[0].length
                for (h = 0; h < v; ++h)
                  for (
                    r.call(l, u[0][h], (g = b[h]), d[0][h][1]), m = 1;
                    m < p;
                    ++m
                  )
                    r.call(l, u[m][h], (g += d[m - 1][h][1]), d[m][h][1])
                return s
              }
              return (
                (l.values = function(t) {
                  return arguments.length ? ((n = t), l) : n
                }),
                (l.order = function(n) {
                  return arguments.length
                    ? ((t = 'function' == typeof n ? n : Ki.get(n) || ta), l)
                    : t
                }),
                (l.offset = function(n) {
                  return arguments.length
                    ? ((e = 'function' == typeof n ? n : na.get(n) || ea), l)
                    : e
                }),
                (l.x = function(n) {
                  return arguments.length ? ((o = n), l) : o
                }),
                (l.y = function(n) {
                  return arguments.length ? ((a = n), l) : a
                }),
                (l.out = function(n) {
                  return arguments.length ? ((r = n), l) : r
                }),
                l
              )
            }
            var Ki = i.map({
                'inside-out': function(n) {
                  var t,
                    e,
                    r = n.length,
                    o = n.map(ra),
                    a = n.map(oa),
                    l = i.range(r).sort(function(n, t) {
                      return o[n] - o[t]
                    }),
                    s = 0,
                    c = 0,
                    u = [],
                    d = []
                  for (t = 0; t < r; ++t)
                    (e = l[t]),
                      s < c
                        ? ((s += a[e]), u.push(e))
                        : ((c += a[e]), d.push(e))
                  return d.reverse().concat(u)
                },
                reverse: function(n) {
                  return i.range(n.length).reverse()
                },
                default: ta
              }),
              na = i.map({
                silhouette: function(n) {
                  var t,
                    e,
                    r,
                    o = n.length,
                    i = n[0].length,
                    a = [],
                    l = 0,
                    s = []
                  for (e = 0; e < i; ++e) {
                    for (t = 0, r = 0; t < o; t++) r += n[t][e][1]
                    r > l && (l = r), a.push(r)
                  }
                  for (e = 0; e < i; ++e) s[e] = (l - a[e]) / 2
                  return s
                },
                wiggle: function(n) {
                  var t,
                    e,
                    r,
                    o,
                    i,
                    a,
                    l,
                    s,
                    c,
                    u = n.length,
                    d = n[0],
                    f = d.length,
                    p = []
                  for (p[0] = s = c = 0, e = 1; e < f; ++e) {
                    for (t = 0, o = 0; t < u; ++t) o += n[t][e][1]
                    for (t = 0, i = 0, l = d[e][0] - d[e - 1][0]; t < u; ++t) {
                      for (
                        r = 0, a = (n[t][e][1] - n[t][e - 1][1]) / (2 * l);
                        r < t;
                        ++r
                      )
                        a += (n[r][e][1] - n[r][e - 1][1]) / l
                      i += a * n[t][e][1]
                    }
                    ;(p[e] = s -= o ? (i / o) * l : 0), s < c && (c = s)
                  }
                  for (e = 0; e < f; ++e) p[e] -= c
                  return p
                },
                expand: function(n) {
                  var t,
                    e,
                    r,
                    o = n.length,
                    i = n[0].length,
                    a = 1 / o,
                    l = []
                  for (e = 0; e < i; ++e) {
                    for (t = 0, r = 0; t < o; t++) r += n[t][e][1]
                    if (r) for (t = 0; t < o; t++) n[t][e][1] /= r
                    else for (t = 0; t < o; t++) n[t][e][1] = a
                  }
                  for (e = 0; e < i; ++e) l[e] = 0
                  return l
                },
                zero: ea
              })
            function ta(n) {
              return i.range(n.length)
            }
            function ea(n) {
              for (var t = -1, e = n[0].length, r = []; ++t < e; ) r[t] = 0
              return r
            }
            function ra(n) {
              for (var t, e = 1, r = 0, o = n[0][1], i = n.length; e < i; ++e)
                (t = n[e][1]) > o && ((r = e), (o = t))
              return r
            }
            function oa(n) {
              return n.reduce(ia, 0)
            }
            function ia(n, t) {
              return n + t[1]
            }
            function aa(n, t) {
              return la(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
            }
            function la(n, t) {
              for (
                var e = -1, r = +n[0], o = (n[1] - r) / t, i = [];
                ++e <= t;

              )
                i[e] = o * e + r
              return i
            }
            function sa(n) {
              return [i.min(n), i.max(n)]
            }
            function ca(n, t) {
              return n.value - t.value
            }
            function ua(n, t) {
              var e = n._pack_next
              ;(n._pack_next = t),
                (t._pack_prev = n),
                (t._pack_next = e),
                (e._pack_prev = t)
            }
            function da(n, t) {
              ;(n._pack_next = t), (t._pack_prev = n)
            }
            function fa(n, t) {
              var e = t.x - n.x,
                r = t.y - n.y,
                o = n.r + t.r
              return 0.999 * o * o > e * e + r * r
            }
            function pa(n) {
              if ((t = n.children) && (s = t.length)) {
                var t,
                  e,
                  r,
                  o,
                  i,
                  a,
                  l,
                  s,
                  c = 1 / 0,
                  u = -1 / 0,
                  d = 1 / 0,
                  f = -1 / 0
                if (
                  (t.forEach(ma),
                  ((e = t[0]).x = -e.r),
                  (e.y = 0),
                  x(e),
                  s > 1 && (((r = t[1]).x = r.r), (r.y = 0), x(r), s > 2))
                )
                  for (
                    ga(e, r, (o = t[2])),
                      x(o),
                      ua(e, o),
                      e._pack_prev = o,
                      ua(o, r),
                      r = e._pack_next,
                      i = 3;
                    i < s;
                    i++
                  ) {
                    ga(e, r, (o = t[i]))
                    var p = 0,
                      m = 1,
                      h = 1
                    for (a = r._pack_next; a !== r; a = a._pack_next, m++)
                      if (fa(a, o)) {
                        p = 1
                        break
                      }
                    if (1 == p)
                      for (
                        l = e._pack_prev;
                        l !== a._pack_prev && !fa(l, o);
                        l = l._pack_prev, h++
                      );
                    p
                      ? (m < h || (m == h && r.r < e.r)
                          ? da(e, (r = a))
                          : da((e = l), r),
                        i--)
                      : (ua(e, o), (r = o), x(o))
                  }
                var g = (c + u) / 2,
                  b = (d + f) / 2,
                  v = 0
                for (i = 0; i < s; i++)
                  ((o = t[i]).x -= g),
                    (o.y -= b),
                    (v = Math.max(v, o.r + Math.sqrt(o.x * o.x + o.y * o.y)))
                ;(n.r = v), t.forEach(ha)
              }
              function x(n) {
                ;(c = Math.min(n.x - n.r, c)),
                  (u = Math.max(n.x + n.r, u)),
                  (d = Math.min(n.y - n.r, d)),
                  (f = Math.max(n.y + n.r, f))
              }
            }
            function ma(n) {
              n._pack_next = n._pack_prev = n
            }
            function ha(n) {
              delete n._pack_next, delete n._pack_prev
            }
            function ga(n, t, e) {
              var r = n.r + e.r,
                o = t.x - n.x,
                i = t.y - n.y
              if (r && (o || i)) {
                var a = t.r + e.r,
                  l = o * o + i * i,
                  s = 0.5 + ((r *= r) - (a *= a)) / (2 * l),
                  c =
                    Math.sqrt(
                      Math.max(0, 2 * a * (r + l) - (r -= l) * r - a * a)
                    ) /
                    (2 * l)
                ;(e.x = n.x + s * o + c * i), (e.y = n.y + s * i - c * o)
              } else (e.x = n.x + r), (e.y = n.y)
            }
            function ba(n, t) {
              return n.parent == t.parent ? 1 : 2
            }
            function va(n) {
              var t = n.children
              return t.length ? t[0] : n.t
            }
            function xa(n) {
              var t,
                e = n.children
              return (t = e.length) ? e[t - 1] : n.t
            }
            function ya(n, t, e) {
              var r = e / (t.i - n.i)
              ;(t.c -= r), (t.s += e), (n.c += r), (t.z += e), (t.m += e)
            }
            function wa(n, t, e) {
              return n.a.parent === t.parent ? n.a : e
            }
            function ka(n) {
              return { x: n.x, y: n.y, dx: n.dx, dy: n.dy }
            }
            function Ma(n, t) {
              var e = n.x + t[3],
                r = n.y + t[0],
                o = n.dx - t[1] - t[3],
                i = n.dy - t[0] - t[2]
              return (
                o < 0 && ((e += o / 2), (o = 0)),
                i < 0 && ((r += i / 2), (i = 0)),
                { x: e, y: r, dx: o, dy: i }
              )
            }
            function Ea(n) {
              var t = n[0],
                e = n[n.length - 1]
              return t < e ? [t, e] : [e, t]
            }
            function _a(n) {
              return n.rangeExtent ? n.rangeExtent() : Ea(n.range())
            }
            function Sa(n, t, e, r) {
              var o = e(n[0], n[1]),
                i = r(t[0], t[1])
              return function(n) {
                return i(o(n))
              }
            }
            function Ta(n, t) {
              var e,
                r = 0,
                o = n.length - 1,
                i = n[r],
                a = n[o]
              return (
                a < i && ((e = r), (r = o), (o = e), (e = i), (i = a), (a = e)),
                (n[r] = t.floor(i)),
                (n[o] = t.ceil(a)),
                n
              )
            }
            function Na(n) {
              return n
                ? {
                    floor: function(t) {
                      return Math.floor(t / n) * n
                    },
                    ceil: function(t) {
                      return Math.ceil(t / n) * n
                    }
                  }
                : Ca
            }
            ;(i.layout.histogram = function() {
              var n = !0,
                t = Number,
                e = sa,
                r = aa
              function o(o, a) {
                for (
                  var l,
                    s,
                    c = [],
                    u = o.map(t, this),
                    d = e.call(this, u, a),
                    f = r.call(this, d, u, a),
                    p = ((a = -1), u.length),
                    m = f.length - 1,
                    h = n ? 1 : 1 / p;
                  ++a < m;

                )
                  ((l = c[a] = []).dx = f[a + 1] - (l.x = f[a])), (l.y = 0)
                if (m > 0)
                  for (a = -1; ++a < p; )
                    (s = u[a]) >= d[0] &&
                      s <= d[1] &&
                      (((l = c[i.bisect(f, s, 1, m) - 1]).y += h), l.push(o[a]))
                return c
              }
              return (
                (o.value = function(n) {
                  return arguments.length ? ((t = n), o) : t
                }),
                (o.range = function(n) {
                  return arguments.length ? ((e = Mt(n)), o) : e
                }),
                (o.bins = function(n) {
                  return arguments.length
                    ? ((r =
                        'number' == typeof n
                          ? function(t) {
                              return la(t, n)
                            }
                          : Mt(n)),
                      o)
                    : r
                }),
                (o.frequency = function(t) {
                  return arguments.length ? ((n = !!t), o) : n
                }),
                o
              )
            }),
              (i.layout.pack = function() {
                var n,
                  t = i.layout.hierarchy().sort(ca),
                  e = 0,
                  r = [1, 1]
                function o(o, i) {
                  var a = t.call(this, o, i),
                    l = a[0],
                    s = r[0],
                    c = r[1],
                    u =
                      null == n
                        ? Math.sqrt
                        : 'function' == typeof n
                        ? n
                        : function() {
                            return n
                          }
                  if (
                    ((l.x = l.y = 0),
                    $i(l, function(n) {
                      n.r = +u(n.value)
                    }),
                    $i(l, pa),
                    e)
                  ) {
                    var d =
                      (e * (n ? 1 : Math.max((2 * l.r) / s, (2 * l.r) / c))) / 2
                    $i(l, function(n) {
                      n.r += d
                    }),
                      $i(l, pa),
                      $i(l, function(n) {
                        n.r -= d
                      })
                  }
                  return (
                    (function n(t, e, r, o) {
                      var i = t.children
                      if (
                        ((t.x = e += o * t.x),
                        (t.y = r += o * t.y),
                        (t.r *= o),
                        i)
                      )
                        for (var a = -1, l = i.length; ++a < l; )
                          n(i[a], e, r, o)
                    })(
                      l,
                      s / 2,
                      c / 2,
                      n ? 1 : 1 / Math.max((2 * l.r) / s, (2 * l.r) / c)
                    ),
                    a
                  )
                }
                return (
                  (o.size = function(n) {
                    return arguments.length ? ((r = n), o) : r
                  }),
                  (o.radius = function(t) {
                    return arguments.length
                      ? ((n = null == t || 'function' == typeof t ? t : +t), o)
                      : n
                  }),
                  (o.padding = function(n) {
                    return arguments.length ? ((e = +n), o) : e
                  }),
                  Bi(o, t)
                )
              }),
              (i.layout.tree = function() {
                var n = i.layout
                    .hierarchy()
                    .sort(null)
                    .value(null),
                  t = ba,
                  e = [1, 1],
                  r = null
                function o(o, i) {
                  var c = n.call(this, o, i),
                    u = c[0],
                    d = (function(n) {
                      for (
                        var t, e = { A: null, children: [n] }, r = [e];
                        null != (t = r.pop());

                      )
                        for (
                          var o, i = t.children, a = 0, l = i.length;
                          a < l;
                          ++a
                        )
                          r.push(
                            ((i[a] = o = {
                              _: i[a],
                              parent: t,
                              children:
                                ((o = i[a].children) && o.slice()) || [],
                              A: null,
                              a: null,
                              z: 0,
                              m: 0,
                              c: 0,
                              s: 0,
                              t: null,
                              i: a
                            }).a = o)
                          )
                      return e.children[0]
                    })(u)
                  if (($i(d, a), (d.parent.m = -d.z), Ui(d, l), r)) Ui(u, s)
                  else {
                    var f = u,
                      p = u,
                      m = u
                    Ui(u, function(n) {
                      n.x < f.x && (f = n),
                        n.x > p.x && (p = n),
                        n.depth > m.depth && (m = n)
                    })
                    var h = t(f, p) / 2 - f.x,
                      g = e[0] / (p.x + t(p, f) / 2 + h),
                      b = e[1] / (m.depth || 1)
                    Ui(u, function(n) {
                      ;(n.x = (n.x + h) * g), (n.y = n.depth * b)
                    })
                  }
                  return c
                }
                function a(n) {
                  var e = n.children,
                    r = n.parent.children,
                    o = n.i ? r[n.i - 1] : null
                  if (e.length) {
                    !(function(n) {
                      for (
                        var t, e = 0, r = 0, o = n.children, i = o.length;
                        --i >= 0;

                      )
                        ((t = o[i]).z += e), (t.m += e), (e += t.s + (r += t.c))
                    })(n)
                    var i = (e[0].z + e[e.length - 1].z) / 2
                    o ? ((n.z = o.z + t(n._, o._)), (n.m = n.z - i)) : (n.z = i)
                  } else o && (n.z = o.z + t(n._, o._))
                  n.parent.A = (function(n, e, r) {
                    if (e) {
                      for (
                        var o,
                          i = n,
                          a = n,
                          l = e,
                          s = i.parent.children[0],
                          c = i.m,
                          u = a.m,
                          d = l.m,
                          f = s.m;
                        (l = xa(l)), (i = va(i)), l && i;

                      )
                        (s = va(s)),
                          ((a = xa(a)).a = n),
                          (o = l.z + d - i.z - c + t(l._, i._)) > 0 &&
                            (ya(wa(l, n, r), n, o), (c += o), (u += o)),
                          (d += l.m),
                          (c += i.m),
                          (f += s.m),
                          (u += a.m)
                      l && !xa(a) && ((a.t = l), (a.m += d - u)),
                        i && !va(s) && ((s.t = i), (s.m += c - f), (r = n))
                    }
                    return r
                  })(n, o, n.parent.A || r[0])
                }
                function l(n) {
                  ;(n._.x = n.z + n.parent.m), (n.m += n.parent.m)
                }
                function s(n) {
                  ;(n.x *= e[0]), (n.y = n.depth * e[1])
                }
                return (
                  (o.separation = function(n) {
                    return arguments.length ? ((t = n), o) : t
                  }),
                  (o.size = function(n) {
                    return arguments.length
                      ? ((r = null == (e = n) ? s : null), o)
                      : r
                      ? null
                      : e
                  }),
                  (o.nodeSize = function(n) {
                    return arguments.length
                      ? ((r = null == (e = n) ? null : s), o)
                      : r
                      ? e
                      : null
                  }),
                  Bi(o, n)
                )
              }),
              (i.layout.cluster = function() {
                var n = i.layout
                    .hierarchy()
                    .sort(null)
                    .value(null),
                  t = ba,
                  e = [1, 1],
                  r = !1
                function o(o, a) {
                  var l,
                    s = n.call(this, o, a),
                    c = s[0],
                    u = 0
                  $i(c, function(n) {
                    var e = n.children
                    e && e.length
                      ? ((n.x = (function(n) {
                          return (
                            n.reduce(function(n, t) {
                              return n + t.x
                            }, 0) / n.length
                          )
                        })(e)),
                        (n.y = (function(n) {
                          return (
                            1 +
                            i.max(n, function(n) {
                              return n.y
                            })
                          )
                        })(e)))
                      : ((n.x = l ? (u += t(n, l)) : 0), (n.y = 0), (l = n))
                  })
                  var d = (function n(t) {
                      var e = t.children
                      return e && e.length ? n(e[0]) : t
                    })(c),
                    f = (function n(t) {
                      var e,
                        r = t.children
                      return r && (e = r.length) ? n(r[e - 1]) : t
                    })(c),
                    p = d.x - t(d, f) / 2,
                    m = f.x + t(f, d) / 2
                  return (
                    $i(
                      c,
                      r
                        ? function(n) {
                            ;(n.x = (n.x - c.x) * e[0]),
                              (n.y = (c.y - n.y) * e[1])
                          }
                        : function(n) {
                            ;(n.x = ((n.x - p) / (m - p)) * e[0]),
                              (n.y = (1 - (c.y ? n.y / c.y : 1)) * e[1])
                          }
                    ),
                    s
                  )
                }
                return (
                  (o.separation = function(n) {
                    return arguments.length ? ((t = n), o) : t
                  }),
                  (o.size = function(n) {
                    return arguments.length
                      ? ((r = null == (e = n)), o)
                      : r
                      ? null
                      : e
                  }),
                  (o.nodeSize = function(n) {
                    return arguments.length
                      ? ((r = null != (e = n)), o)
                      : r
                      ? e
                      : null
                  }),
                  Bi(o, n)
                )
              }),
              (i.layout.treemap = function() {
                var n,
                  t = i.layout.hierarchy(),
                  e = Math.round,
                  r = [1, 1],
                  o = null,
                  a = ka,
                  l = !1,
                  s = 'squarify',
                  c = 0.5 * (1 + Math.sqrt(5))
                function u(n, t) {
                  for (var e, r, o = -1, i = n.length; ++o < i; )
                    (r = (e = n[o]).value * (t < 0 ? 0 : t)),
                      (e.area = isNaN(r) || r <= 0 ? 0 : r)
                }
                function d(n) {
                  var t = n.children
                  if (t && t.length) {
                    var e,
                      r,
                      o,
                      i = a(n),
                      l = [],
                      c = t.slice(),
                      f = 1 / 0,
                      h =
                        'slice' === s
                          ? i.dx
                          : 'dice' === s
                          ? i.dy
                          : 'slice-dice' === s
                          ? 1 & n.depth
                            ? i.dy
                            : i.dx
                          : Math.min(i.dx, i.dy)
                    for (
                      u(c, (i.dx * i.dy) / n.value), l.area = 0;
                      (o = c.length) > 0;

                    )
                      l.push((e = c[o - 1])),
                        (l.area += e.area),
                        'squarify' !== s || (r = p(l, h)) <= f
                          ? (c.pop(), (f = r))
                          : ((l.area -= l.pop().area),
                            m(l, h, i, !1),
                            (h = Math.min(i.dx, i.dy)),
                            (l.length = l.area = 0),
                            (f = 1 / 0))
                    l.length && (m(l, h, i, !0), (l.length = l.area = 0)),
                      t.forEach(d)
                  }
                }
                function f(n) {
                  var t = n.children
                  if (t && t.length) {
                    var e,
                      r = a(n),
                      o = t.slice(),
                      i = []
                    for (
                      u(o, (r.dx * r.dy) / n.value), i.area = 0;
                      (e = o.pop());

                    )
                      i.push(e),
                        (i.area += e.area),
                        null != e.z &&
                          (m(i, e.z ? r.dx : r.dy, r, !o.length),
                          (i.length = i.area = 0))
                    t.forEach(f)
                  }
                }
                function p(n, t) {
                  for (
                    var e, r = n.area, o = 0, i = 1 / 0, a = -1, l = n.length;
                    ++a < l;

                  )
                    (e = n[a].area) && (e < i && (i = e), e > o && (o = e))
                  return (
                    (t *= t),
                    (r *= r)
                      ? Math.max((t * o * c) / r, r / (t * i * c))
                      : 1 / 0
                  )
                }
                function m(n, t, r, o) {
                  var i,
                    a = -1,
                    l = n.length,
                    s = r.x,
                    c = r.y,
                    u = t ? e(n.area / t) : 0
                  if (t == r.dx) {
                    for ((o || u > r.dy) && (u = r.dy); ++a < l; )
                      ((i = n[a]).x = s),
                        (i.y = c),
                        (i.dy = u),
                        (s += i.dx = Math.min(
                          r.x + r.dx - s,
                          u ? e(i.area / u) : 0
                        ))
                    ;(i.z = !0),
                      (i.dx += r.x + r.dx - s),
                      (r.y += u),
                      (r.dy -= u)
                  } else {
                    for ((o || u > r.dx) && (u = r.dx); ++a < l; )
                      ((i = n[a]).x = s),
                        (i.y = c),
                        (i.dx = u),
                        (c += i.dy = Math.min(
                          r.y + r.dy - c,
                          u ? e(i.area / u) : 0
                        ))
                    ;(i.z = !1),
                      (i.dy += r.y + r.dy - c),
                      (r.x += u),
                      (r.dx -= u)
                  }
                }
                function h(e) {
                  var o = n || t(e),
                    i = o[0]
                  return (
                    (i.x = i.y = 0),
                    i.value
                      ? ((i.dx = r[0]), (i.dy = r[1]))
                      : (i.dx = i.dy = 0),
                    n && t.revalue(i),
                    u([i], (i.dx * i.dy) / i.value),
                    (n ? f : d)(i),
                    l && (n = o),
                    o
                  )
                }
                return (
                  (h.size = function(n) {
                    return arguments.length ? ((r = n), h) : r
                  }),
                  (h.padding = function(n) {
                    if (!arguments.length) return o
                    function t(t) {
                      var e = n.call(h, t, t.depth)
                      return null == e
                        ? ka(t)
                        : Ma(t, 'number' == typeof e ? [e, e, e, e] : e)
                    }
                    function e(t) {
                      return Ma(t, n)
                    }
                    var r
                    return (
                      (a =
                        null == (o = n)
                          ? ka
                          : 'function' == (r = typeof n)
                          ? t
                          : 'number' === r
                          ? ((n = [n, n, n, n]), e)
                          : e),
                      h
                    )
                  }),
                  (h.round = function(n) {
                    return arguments.length
                      ? ((e = n ? Math.round : Number), h)
                      : e != Number
                  }),
                  (h.sticky = function(t) {
                    return arguments.length ? ((l = t), (n = null), h) : l
                  }),
                  (h.ratio = function(n) {
                    return arguments.length ? ((c = n), h) : c
                  }),
                  (h.mode = function(n) {
                    return arguments.length ? ((s = n + ''), h) : s
                  }),
                  Bi(h, t)
                )
              }),
              (i.random = {
                normal: function(n, t) {
                  var e = arguments.length
                  return (
                    e < 2 && (t = 1),
                    e < 1 && (n = 0),
                    function() {
                      var e, r, o
                      do {
                        o =
                          (e = 2 * Math.random() - 1) * e +
                          (r = 2 * Math.random() - 1) * r
                      } while (!o || o > 1)
                      return n + t * e * Math.sqrt((-2 * Math.log(o)) / o)
                    }
                  )
                },
                logNormal: function() {
                  var n = i.random.normal.apply(i, arguments)
                  return function() {
                    return Math.exp(n())
                  }
                },
                bates: function(n) {
                  var t = i.random.irwinHall(n)
                  return function() {
                    return t() / n
                  }
                },
                irwinHall: function(n) {
                  return function() {
                    for (var t = 0, e = 0; e < n; e++) t += Math.random()
                    return t
                  }
                }
              }),
              (i.scale = {})
            var Ca = { floor: q, ceil: q }
            function ja(n, t, e, r) {
              var o = [],
                a = [],
                l = 0,
                s = Math.min(n.length, t.length) - 1
              for (
                n[s] < n[0] &&
                ((n = n.slice().reverse()), (t = t.slice().reverse()));
                ++l <= s;

              )
                o.push(e(n[l - 1], n[l])), a.push(r(t[l - 1], t[l]))
              return function(t) {
                var e = i.bisect(n, t, 1, s) - 1
                return a[e](o[e](t))
              }
            }
            function Aa(n, t) {
              return i.rebind(
                n,
                t,
                'range',
                'rangeRound',
                'interpolate',
                'clamp'
              )
            }
            function Oa(n, t) {
              return Ta(n, Na(za(n, t)[2])), Ta(n, Na(za(n, t)[2])), n
            }
            function za(n, t) {
              null == t && (t = 10)
              var e = Ea(n),
                r = e[1] - e[0],
                o = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
                i = (t / r) * o
              return (
                i <= 0.15
                  ? (o *= 10)
                  : i <= 0.35
                  ? (o *= 5)
                  : i <= 0.75 && (o *= 2),
                (e[0] = Math.ceil(e[0] / o) * o),
                (e[1] = Math.floor(e[1] / o) * o + 0.5 * o),
                (e[2] = o),
                e
              )
            }
            function Da(n, t) {
              return i.range.apply(i, za(n, t))
            }
            function La(n, t, e) {
              var r = za(n, t)
              if (e) {
                var o = Pt.exec(e)
                if ((o.shift(), 's' === o[8])) {
                  var a = i.formatPrefix(Math.max(k(r[0]), k(r[1])))
                  return (
                    o[7] || (o[7] = '.' + Ha(a.scale(r[2]))),
                    (o[8] = 'f'),
                    (e = i.format(o.join(''))),
                    function(n) {
                      return e(a.scale(n)) + a.symbol
                    }
                  )
                }
                o[7] ||
                  (o[7] =
                    '.' +
                    (function(n, t) {
                      var e = Ha(t[2])
                      return n in qa
                        ? Math.abs(e - Ha(Math.max(k(t[0]), k(t[1])))) +
                            +('e' !== n)
                        : e - 2 * ('%' === n)
                    })(o[8], r)),
                  (e = o.join(''))
              } else e = ',.' + Ha(r[2]) + 'f'
              return i.format(e)
            }
            i.scale.linear = function() {
              return (function n(t, e, r, o) {
                var i, a
                function l() {
                  var n = Math.min(t.length, e.length) > 2 ? ja : Sa,
                    l = o ? Oi : Ai
                  return (i = n(t, e, l, r)), (a = n(e, t, l, ci)), s
                }
                function s(n) {
                  return i(n)
                }
                return (
                  (s.invert = function(n) {
                    return a(n)
                  }),
                  (s.domain = function(n) {
                    return arguments.length ? ((t = n.map(Number)), l()) : t
                  }),
                  (s.range = function(n) {
                    return arguments.length ? ((e = n), l()) : e
                  }),
                  (s.rangeRound = function(n) {
                    return s.range(n).interpolate(Ei)
                  }),
                  (s.clamp = function(n) {
                    return arguments.length ? ((o = n), l()) : o
                  }),
                  (s.interpolate = function(n) {
                    return arguments.length ? ((r = n), l()) : r
                  }),
                  (s.ticks = function(n) {
                    return Da(t, n)
                  }),
                  (s.tickFormat = function(n, e) {
                    return La(t, n, e)
                  }),
                  (s.nice = function(n) {
                    return Oa(t, n), l()
                  }),
                  (s.copy = function() {
                    return n(t, e, r, o)
                  }),
                  l()
                )
              })([0, 1], [0, 1], ci, !1)
            }
            var qa = { s: 1, g: 1, p: 1, r: 1, e: 1 }
            function Ha(n) {
              return -Math.floor(Math.log(n) / Math.LN10 + 0.01)
            }
            i.scale.log = function() {
              return (function n(t, e, r, o) {
                function a(n) {
                  return (
                    (r ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) /
                    Math.log(e)
                  )
                }
                function l(n) {
                  return r ? Math.pow(e, n) : -Math.pow(e, -n)
                }
                function s(n) {
                  return t(a(n))
                }
                return (
                  (s.invert = function(n) {
                    return l(t.invert(n))
                  }),
                  (s.domain = function(n) {
                    return arguments.length
                      ? ((r = n[0] >= 0),
                        t.domain((o = n.map(Number)).map(a)),
                        s)
                      : o
                  }),
                  (s.base = function(n) {
                    return arguments.length
                      ? ((e = +n), t.domain(o.map(a)), s)
                      : e
                  }),
                  (s.nice = function() {
                    var n = Ta(o.map(a), r ? Math : Ia)
                    return t.domain(n), (o = n.map(l)), s
                  }),
                  (s.ticks = function() {
                    var n = Ea(o),
                      t = [],
                      i = n[0],
                      s = n[1],
                      c = Math.floor(a(i)),
                      u = Math.ceil(a(s)),
                      d = e % 1 ? 2 : e
                    if (isFinite(u - c)) {
                      if (r) {
                        for (; c < u; c++)
                          for (var f = 1; f < d; f++) t.push(l(c) * f)
                        t.push(l(c))
                      } else
                        for (t.push(l(c)); c++ < u; )
                          for (f = d - 1; f > 0; f--) t.push(l(c) * f)
                      for (c = 0; t[c] < i; c++);
                      for (u = t.length; t[u - 1] > s; u--);
                      t = t.slice(c, u)
                    }
                    return t
                  }),
                  (s.tickFormat = function(n, t) {
                    if (!arguments.length) return Pa
                    arguments.length < 2
                      ? (t = Pa)
                      : 'function' != typeof t && (t = i.format(t))
                    var r = Math.max(1, (e * n) / s.ticks().length)
                    return function(n) {
                      var o = n / l(Math.round(a(n)))
                      return o * e < e - 0.5 && (o *= e), o <= r ? t(n) : ''
                    }
                  }),
                  (s.copy = function() {
                    return n(t.copy(), e, r, o)
                  }),
                  Aa(s, t)
                )
              })(i.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            }
            var Pa = i.format('.0e'),
              Ia = {
                floor: function(n) {
                  return -Math.ceil(-n)
                },
                ceil: function(n) {
                  return -Math.floor(-n)
                }
              }
            function Ra(n) {
              return function(t) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
              }
            }
            ;(i.scale.pow = function() {
              return (function n(t, e, r) {
                var o = Ra(e),
                  i = Ra(1 / e)
                function a(n) {
                  return t(o(n))
                }
                return (
                  (a.invert = function(n) {
                    return i(t.invert(n))
                  }),
                  (a.domain = function(n) {
                    return arguments.length
                      ? (t.domain((r = n.map(Number)).map(o)), a)
                      : r
                  }),
                  (a.ticks = function(n) {
                    return Da(r, n)
                  }),
                  (a.tickFormat = function(n, t) {
                    return La(r, n, t)
                  }),
                  (a.nice = function(n) {
                    return a.domain(Oa(r, n))
                  }),
                  (a.exponent = function(n) {
                    return arguments.length
                      ? ((o = Ra((e = n))),
                        (i = Ra(1 / e)),
                        t.domain(r.map(o)),
                        a)
                      : e
                  }),
                  (a.copy = function() {
                    return n(t.copy(), e, r)
                  }),
                  Aa(a, t)
                )
              })(i.scale.linear(), 1, [0, 1])
            }),
              (i.scale.sqrt = function() {
                return i.scale.pow().exponent(0.5)
              }),
              (i.scale.ordinal = function() {
                return (function n(t, e) {
                  var r, o, a
                  function l(n) {
                    return o[
                      ((r.get(n) ||
                        ('range' === e.t ? r.set(n, t.push(n)) : NaN)) -
                        1) %
                        o.length
                    ]
                  }
                  function s(n, e) {
                    return i.range(t.length).map(function(t) {
                      return n + e * t
                    })
                  }
                  return (
                    (l.domain = function(n) {
                      if (!arguments.length) return t
                      ;(t = []), (r = new _())
                      for (var o, i = -1, a = n.length; ++i < a; )
                        r.has((o = n[i])) || r.set(o, t.push(o))
                      return l[e.t].apply(l, e.a)
                    }),
                    (l.range = function(n) {
                      return arguments.length
                        ? ((o = n),
                          (a = 0),
                          (e = { t: 'range', a: arguments }),
                          l)
                        : o
                    }),
                    (l.rangePoints = function(n, r) {
                      arguments.length < 2 && (r = 0)
                      var i = n[0],
                        c = n[1],
                        u =
                          t.length < 2
                            ? ((i = (i + c) / 2), 0)
                            : (c - i) / (t.length - 1 + r)
                      return (
                        (o = s(i + (u * r) / 2, u)),
                        (a = 0),
                        (e = { t: 'rangePoints', a: arguments }),
                        l
                      )
                    }),
                    (l.rangeRoundPoints = function(n, r) {
                      arguments.length < 2 && (r = 0)
                      var i = n[0],
                        c = n[1],
                        u =
                          t.length < 2
                            ? ((i = c = Math.round((i + c) / 2)), 0)
                            : ((c - i) / (t.length - 1 + r)) | 0
                      return (
                        (o = s(
                          i +
                            Math.round(
                              (u * r) / 2 + (c - i - (t.length - 1 + r) * u) / 2
                            ),
                          u
                        )),
                        (a = 0),
                        (e = { t: 'rangeRoundPoints', a: arguments }),
                        l
                      )
                    }),
                    (l.rangeBands = function(n, r, i) {
                      arguments.length < 2 && (r = 0),
                        arguments.length < 3 && (i = r)
                      var c = n[1] < n[0],
                        u = n[c - 0],
                        d = n[1 - c],
                        f = (d - u) / (t.length - r + 2 * i)
                      return (
                        (o = s(u + f * i, f)),
                        c && o.reverse(),
                        (a = f * (1 - r)),
                        (e = { t: 'rangeBands', a: arguments }),
                        l
                      )
                    }),
                    (l.rangeRoundBands = function(n, r, i) {
                      arguments.length < 2 && (r = 0),
                        arguments.length < 3 && (i = r)
                      var c = n[1] < n[0],
                        u = n[c - 0],
                        d = n[1 - c],
                        f = Math.floor((d - u) / (t.length - r + 2 * i))
                      return (
                        (o = s(
                          u + Math.round((d - u - (t.length - r) * f) / 2),
                          f
                        )),
                        c && o.reverse(),
                        (a = Math.round(f * (1 - r))),
                        (e = { t: 'rangeRoundBands', a: arguments }),
                        l
                      )
                    }),
                    (l.rangeBand = function() {
                      return a
                    }),
                    (l.rangeExtent = function() {
                      return Ea(e.a[0])
                    }),
                    (l.copy = function() {
                      return n(t, e)
                    }),
                    l.domain(t)
                  )
                })([], { t: 'range', a: [[]] })
              }),
              (i.scale.category10 = function() {
                return i.scale.ordinal().range(Fa)
              }),
              (i.scale.category20 = function() {
                return i.scale.ordinal().range(Ba)
              }),
              (i.scale.category20b = function() {
                return i.scale.ordinal().range(Ua)
              }),
              (i.scale.category20c = function() {
                return i.scale.ordinal().range($a)
              })
            var Fa = [
                2062260,
                16744206,
                2924588,
                14034728,
                9725885,
                9197131,
                14907330,
                8355711,
                12369186,
                1556175
              ].map(mt),
              Ba = [
                2062260,
                11454440,
                16744206,
                16759672,
                2924588,
                10018698,
                14034728,
                16750742,
                9725885,
                12955861,
                9197131,
                12885140,
                14907330,
                16234194,
                8355711,
                13092807,
                12369186,
                14408589,
                1556175,
                10410725
              ].map(mt),
              Ua = [
                3750777,
                5395619,
                7040719,
                10264286,
                6519097,
                9216594,
                11915115,
                13556636,
                9202993,
                12426809,
                15186514,
                15190932,
                8666169,
                11356490,
                14049643,
                15177372,
                8077683,
                10834324,
                13528509,
                14589654
              ].map(mt),
              $a = [
                3244733,
                7057110,
                10406625,
                13032431,
                15095053,
                16616764,
                16625259,
                16634018,
                3253076,
                7652470,
                10607003,
                13101504,
                7695281,
                10394312,
                12369372,
                14342891,
                6513507,
                9868950,
                12434877,
                14277081
              ].map(mt)
            function Wa() {
              return 0
            }
            ;(i.scale.quantile = function() {
              return (function n(t, e) {
                var r
                function o() {
                  var n = 0,
                    o = e.length
                  for (r = []; ++n < o; ) r[n - 1] = i.quantile(t, n / o)
                  return a
                }
                function a(n) {
                  if (!isNaN((n = +n))) return e[i.bisect(r, n)]
                }
                return (
                  (a.domain = function(n) {
                    return arguments.length
                      ? ((t = n
                          .map(b)
                          .filter(v)
                          .sort(g)),
                        o())
                      : t
                  }),
                  (a.range = function(n) {
                    return arguments.length ? ((e = n), o()) : e
                  }),
                  (a.quantiles = function() {
                    return r
                  }),
                  (a.invertExtent = function(n) {
                    return (n = e.indexOf(n)) < 0
                      ? [NaN, NaN]
                      : [
                          n > 0 ? r[n - 1] : t[0],
                          n < r.length ? r[n] : t[t.length - 1]
                        ]
                  }),
                  (a.copy = function() {
                    return n(t, e)
                  }),
                  o()
                )
              })([], [])
            }),
              (i.scale.quantize = function() {
                return (function n(t, e, r) {
                  var o, i
                  function a(n) {
                    return r[Math.max(0, Math.min(i, Math.floor(o * (n - t))))]
                  }
                  function l() {
                    return (o = r.length / (e - t)), (i = r.length - 1), a
                  }
                  return (
                    (a.domain = function(n) {
                      return arguments.length
                        ? ((t = +n[0]), (e = +n[n.length - 1]), l())
                        : [t, e]
                    }),
                    (a.range = function(n) {
                      return arguments.length ? ((r = n), l()) : r
                    }),
                    (a.invertExtent = function(n) {
                      return [
                        (n = (n = r.indexOf(n)) < 0 ? NaN : n / o + t),
                        n + 1 / o
                      ]
                    }),
                    (a.copy = function() {
                      return n(t, e, r)
                    }),
                    l()
                  )
                })(0, 1, [0, 1])
              }),
              (i.scale.threshold = function() {
                return (function n(t, e) {
                  function r(n) {
                    if (n <= n) return e[i.bisect(t, n)]
                  }
                  return (
                    (r.domain = function(n) {
                      return arguments.length ? ((t = n), r) : t
                    }),
                    (r.range = function(n) {
                      return arguments.length ? ((e = n), r) : e
                    }),
                    (r.invertExtent = function(n) {
                      return (n = e.indexOf(n)), [t[n - 1], t[n]]
                    }),
                    (r.copy = function() {
                      return n(t, e)
                    }),
                    r
                  )
                })([0.5], [0, 1])
              }),
              (i.scale.identity = function() {
                return (function n(t) {
                  function e(n) {
                    return +n
                  }
                  return (
                    (e.invert = e),
                    (e.domain = e.range = function(n) {
                      return arguments.length ? ((t = n.map(e)), e) : t
                    }),
                    (e.ticks = function(n) {
                      return Da(t, n)
                    }),
                    (e.tickFormat = function(n, e) {
                      return La(t, n, e)
                    }),
                    (e.copy = function() {
                      return n(t)
                    }),
                    e
                  )
                })([0, 1])
              }),
              (i.svg = {}),
              (i.svg.arc = function() {
                var n = Va,
                  t = Xa,
                  e = Wa,
                  r = Ya,
                  o = Za,
                  i = Ga,
                  a = Ja
                function l() {
                  var l = Math.max(0, +n.apply(this, arguments)),
                    c = Math.max(0, +t.apply(this, arguments)),
                    u = o.apply(this, arguments) - qn,
                    d = i.apply(this, arguments) - qn,
                    f = Math.abs(d - u),
                    p = u > d ? 0 : 1
                  if ((c < l && ((m = c), (c = l), (l = m)), f >= Ln))
                    return s(c, p) + (l ? s(l, 1 - p) : '') + 'Z'
                  var m,
                    h,
                    g,
                    b,
                    v,
                    x,
                    y,
                    w,
                    k,
                    M,
                    E,
                    _,
                    S = 0,
                    T = 0,
                    N = []
                  if (
                    ((b = (+a.apply(this, arguments) || 0) / 2) &&
                      ((g =
                        r === Ya
                          ? Math.sqrt(l * l + c * c)
                          : +r.apply(this, arguments)),
                      p || (T *= -1),
                      c && (T = Bn((g / c) * Math.sin(b))),
                      l && (S = Bn((g / l) * Math.sin(b)))),
                    c)
                  ) {
                    ;(v = c * Math.cos(u + T)),
                      (x = c * Math.sin(u + T)),
                      (y = c * Math.cos(d - T)),
                      (w = c * Math.sin(d - T))
                    var C = Math.abs(d - u - 2 * T) <= zn ? 0 : 1
                    if (T && (Qa(v, x, y, w) === p) ^ C) {
                      var j = (u + d) / 2
                      ;(v = c * Math.cos(j)),
                        (x = c * Math.sin(j)),
                        (y = w = null)
                    }
                  } else v = x = 0
                  if (l) {
                    ;(k = l * Math.cos(d - S)),
                      (M = l * Math.sin(d - S)),
                      (E = l * Math.cos(u + S)),
                      (_ = l * Math.sin(u + S))
                    var A = Math.abs(u - d + 2 * S) <= zn ? 0 : 1
                    if (S && (Qa(k, M, E, _) === 1 - p) ^ A) {
                      var O = (u + d) / 2
                      ;(k = l * Math.cos(O)),
                        (M = l * Math.sin(O)),
                        (E = _ = null)
                    }
                  } else k = M = 0
                  if (
                    f > An &&
                    (m = Math.min(
                      Math.abs(c - l) / 2,
                      +e.apply(this, arguments)
                    )) > 0.001
                  ) {
                    h = (l < c) ^ p ? 0 : 1
                    var z = m,
                      D = m
                    if (f < zn) {
                      var L =
                          null == E
                            ? [k, M]
                            : null == y
                            ? [v, x]
                            : vo([v, x], [E, _], [y, w], [k, M]),
                        q = v - L[0],
                        H = x - L[1],
                        P = y - L[0],
                        I = w - L[1],
                        R =
                          1 /
                          Math.sin(
                            Math.acos(
                              (q * P + H * I) /
                                (Math.sqrt(q * q + H * H) *
                                  Math.sqrt(P * P + I * I))
                            ) / 2
                          ),
                        F = Math.sqrt(L[0] * L[0] + L[1] * L[1])
                      ;(D = Math.min(m, (l - F) / (R - 1))),
                        (z = Math.min(m, (c - F) / (R + 1)))
                    }
                    if (null != y) {
                      var B = Ka(null == E ? [k, M] : [E, _], [v, x], c, z, p),
                        U = Ka([y, w], [k, M], c, z, p)
                      m === z
                        ? N.push(
                            'M',
                            B[0],
                            'A',
                            z,
                            ',',
                            z,
                            ' 0 0,',
                            h,
                            ' ',
                            B[1],
                            'A',
                            c,
                            ',',
                            c,
                            ' 0 ',
                            (1 - p) ^ Qa(B[1][0], B[1][1], U[1][0], U[1][1]),
                            ',',
                            p,
                            ' ',
                            U[1],
                            'A',
                            z,
                            ',',
                            z,
                            ' 0 0,',
                            h,
                            ' ',
                            U[0]
                          )
                        : N.push(
                            'M',
                            B[0],
                            'A',
                            z,
                            ',',
                            z,
                            ' 0 1,',
                            h,
                            ' ',
                            U[0]
                          )
                    } else N.push('M', v, ',', x)
                    if (null != E) {
                      var $ = Ka([v, x], [E, _], l, -D, p),
                        W = Ka([k, M], null == y ? [v, x] : [y, w], l, -D, p)
                      m === D
                        ? N.push(
                            'L',
                            W[0],
                            'A',
                            D,
                            ',',
                            D,
                            ' 0 0,',
                            h,
                            ' ',
                            W[1],
                            'A',
                            l,
                            ',',
                            l,
                            ' 0 ',
                            p ^ Qa(W[1][0], W[1][1], $[1][0], $[1][1]),
                            ',',
                            1 - p,
                            ' ',
                            $[1],
                            'A',
                            D,
                            ',',
                            D,
                            ' 0 0,',
                            h,
                            ' ',
                            $[0]
                          )
                        : N.push(
                            'L',
                            W[0],
                            'A',
                            D,
                            ',',
                            D,
                            ' 0 0,',
                            h,
                            ' ',
                            $[0]
                          )
                    } else N.push('L', k, ',', M)
                  } else
                    N.push('M', v, ',', x),
                      null != y &&
                        N.push(
                          'A',
                          c,
                          ',',
                          c,
                          ' 0 ',
                          C,
                          ',',
                          p,
                          ' ',
                          y,
                          ',',
                          w
                        ),
                      N.push('L', k, ',', M),
                      null != E &&
                        N.push(
                          'A',
                          l,
                          ',',
                          l,
                          ' 0 ',
                          A,
                          ',',
                          1 - p,
                          ' ',
                          E,
                          ',',
                          _
                        )
                  return N.push('Z'), N.join('')
                }
                function s(n, t) {
                  return (
                    'M0,' +
                    n +
                    'A' +
                    n +
                    ',' +
                    n +
                    ' 0 1,' +
                    t +
                    ' 0,' +
                    -n +
                    'A' +
                    n +
                    ',' +
                    n +
                    ' 0 1,' +
                    t +
                    ' 0,' +
                    n
                  )
                }
                return (
                  (l.innerRadius = function(t) {
                    return arguments.length ? ((n = Mt(t)), l) : n
                  }),
                  (l.outerRadius = function(n) {
                    return arguments.length ? ((t = Mt(n)), l) : t
                  }),
                  (l.cornerRadius = function(n) {
                    return arguments.length ? ((e = Mt(n)), l) : e
                  }),
                  (l.padRadius = function(n) {
                    return arguments.length
                      ? ((r = n == Ya ? Ya : Mt(n)), l)
                      : r
                  }),
                  (l.startAngle = function(n) {
                    return arguments.length ? ((o = Mt(n)), l) : o
                  }),
                  (l.endAngle = function(n) {
                    return arguments.length ? ((i = Mt(n)), l) : i
                  }),
                  (l.padAngle = function(n) {
                    return arguments.length ? ((a = Mt(n)), l) : a
                  }),
                  (l.centroid = function() {
                    var e =
                        (+n.apply(this, arguments) +
                          +t.apply(this, arguments)) /
                        2,
                      r =
                        (+o.apply(this, arguments) +
                          +i.apply(this, arguments)) /
                          2 -
                        qn
                    return [Math.cos(r) * e, Math.sin(r) * e]
                  }),
                  l
                )
              })
            var Ya = 'auto'
            function Va(n) {
              return n.innerRadius
            }
            function Xa(n) {
              return n.outerRadius
            }
            function Za(n) {
              return n.startAngle
            }
            function Ga(n) {
              return n.endAngle
            }
            function Ja(n) {
              return n && n.padAngle
            }
            function Qa(n, t, e, r) {
              return (n - e) * t - (t - r) * n > 0 ? 0 : 1
            }
            function Ka(n, t, e, r, o) {
              var i = n[0] - t[0],
                a = n[1] - t[1],
                l = (o ? r : -r) / Math.sqrt(i * i + a * a),
                s = l * a,
                c = -l * i,
                u = n[0] + s,
                d = n[1] + c,
                f = t[0] + s,
                p = t[1] + c,
                m = (u + f) / 2,
                h = (d + p) / 2,
                g = f - u,
                b = p - d,
                v = g * g + b * b,
                x = e - r,
                y = u * p - f * d,
                w =
                  (b < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * v - y * y)),
                k = (y * b - g * w) / v,
                M = (-y * g - b * w) / v,
                E = (y * b + g * w) / v,
                _ = (-y * g + b * w) / v,
                S = k - m,
                T = M - h,
                N = E - m,
                C = _ - h
              return (
                S * S + T * T > N * N + C * C && ((k = E), (M = _)),
                [[k - s, M - c], [(k * e) / x, (M * e) / x]]
              )
            }
            function nl(n) {
              var t = fo,
                e = po,
                r = tr,
                o = el,
                i = o.key,
                a = 0.7
              function l(i) {
                var l,
                  s = [],
                  c = [],
                  u = -1,
                  d = i.length,
                  f = Mt(t),
                  p = Mt(e)
                function m() {
                  s.push('M', o(n(c), a))
                }
                for (; ++u < d; )
                  r.call(this, (l = i[u]), u)
                    ? c.push([+f.call(this, l, u), +p.call(this, l, u)])
                    : c.length && (m(), (c = []))
                return c.length && m(), s.length ? s.join('') : null
              }
              return (
                (l.x = function(n) {
                  return arguments.length ? ((t = n), l) : t
                }),
                (l.y = function(n) {
                  return arguments.length ? ((e = n), l) : e
                }),
                (l.defined = function(n) {
                  return arguments.length ? ((r = n), l) : r
                }),
                (l.interpolate = function(n) {
                  return arguments.length
                    ? ((i =
                        'function' == typeof n
                          ? (o = n)
                          : (o = tl.get(n) || el).key),
                      l)
                    : i
                }),
                (l.tension = function(n) {
                  return arguments.length ? ((a = n), l) : a
                }),
                l
              )
            }
            i.svg.line = function() {
              return nl(q)
            }
            var tl = i.map({
              linear: el,
              'linear-closed': rl,
              step: function(n) {
                for (
                  var t = 0, e = n.length, r = n[0], o = [r[0], ',', r[1]];
                  ++t < e;

                )
                  o.push('H', (r[0] + (r = n[t])[0]) / 2, 'V', r[1])
                return e > 1 && o.push('H', r[0]), o.join('')
              },
              'step-before': ol,
              'step-after': il,
              basis: sl,
              'basis-open': function(n) {
                if (n.length < 4) return el(n)
                for (
                  var t, e = [], r = -1, o = n.length, i = [0], a = [0];
                  ++r < 3;

                )
                  (t = n[r]), i.push(t[0]), a.push(t[1])
                for (e.push(cl(fl, i) + ',' + cl(fl, a)), --r; ++r < o; )
                  (t = n[r]),
                    i.shift(),
                    i.push(t[0]),
                    a.shift(),
                    a.push(t[1]),
                    pl(e, i, a)
                return e.join('')
              },
              'basis-closed': function(n) {
                for (
                  var t, e, r = -1, o = n.length, i = o + 4, a = [], l = [];
                  ++r < 4;

                )
                  (e = n[r % o]), a.push(e[0]), l.push(e[1])
                for (t = [cl(fl, a), ',', cl(fl, l)], --r; ++r < i; )
                  (e = n[r % o]),
                    a.shift(),
                    a.push(e[0]),
                    l.shift(),
                    l.push(e[1]),
                    pl(t, a, l)
                return t.join('')
              },
              bundle: function(n, t) {
                var e = n.length - 1
                if (e)
                  for (
                    var r,
                      o,
                      i = n[0][0],
                      a = n[0][1],
                      l = n[e][0] - i,
                      s = n[e][1] - a,
                      c = -1;
                    ++c <= e;

                  )
                    (o = c / e),
                      ((r = n[c])[0] = t * r[0] + (1 - t) * (i + o * l)),
                      (r[1] = t * r[1] + (1 - t) * (a + o * s))
                return sl(n)
              },
              cardinal: function(n, t) {
                return n.length < 3 ? el(n) : n[0] + al(n, ll(n, t))
              },
              'cardinal-open': function(n, t) {
                return n.length < 4
                  ? el(n)
                  : n[1] + al(n.slice(1, -1), ll(n, t))
              },
              'cardinal-closed': function(n, t) {
                return n.length < 3
                  ? rl(n)
                  : n[0] +
                      al(
                        (n.push(n[0]), n),
                        ll([n[n.length - 2]].concat(n, [n[1]]), t)
                      )
              },
              monotone: function(n) {
                return n.length < 3
                  ? el(n)
                  : n[0] +
                      al(
                        n,
                        (function(n) {
                          for (
                            var t,
                              e,
                              r,
                              o,
                              i = [],
                              a = (function(n) {
                                for (
                                  var t = 0,
                                    e = n.length - 1,
                                    r = [],
                                    o = n[0],
                                    i = n[1],
                                    a = (r[0] = ml(o, i));
                                  ++t < e;

                                )
                                  r[t] =
                                    (a + (a = ml((o = i), (i = n[t + 1])))) / 2
                                return (r[t] = a), r
                              })(n),
                              l = -1,
                              s = n.length - 1;
                            ++l < s;

                          )
                            (t = ml(n[l], n[l + 1])),
                              k(t) < An
                                ? (a[l] = a[l + 1] = 0)
                                : (o =
                                    (e = a[l] / t) * e +
                                    (r = a[l + 1] / t) * r) > 9 &&
                                  ((o = (3 * t) / Math.sqrt(o)),
                                  (a[l] = o * e),
                                  (a[l + 1] = o * r))
                          for (l = -1; ++l <= s; )
                            (o =
                              (n[Math.min(s, l + 1)][0] -
                                n[Math.max(0, l - 1)][0]) /
                              (6 * (1 + a[l] * a[l]))),
                              i.push([o || 0, a[l] * o || 0])
                          return i
                        })(n)
                      )
              }
            })
            function el(n) {
              return n.length > 1 ? n.join('L') : n + 'Z'
            }
            function rl(n) {
              return n.join('L') + 'Z'
            }
            function ol(n) {
              for (
                var t = 0, e = n.length, r = n[0], o = [r[0], ',', r[1]];
                ++t < e;

              )
                o.push('V', (r = n[t])[1], 'H', r[0])
              return o.join('')
            }
            function il(n) {
              for (
                var t = 0, e = n.length, r = n[0], o = [r[0], ',', r[1]];
                ++t < e;

              )
                o.push('H', (r = n[t])[0], 'V', r[1])
              return o.join('')
            }
            function al(n, t) {
              if (
                t.length < 1 ||
                (n.length != t.length && n.length != t.length + 2)
              )
                return el(n)
              var e = n.length != t.length,
                r = '',
                o = n[0],
                i = n[1],
                a = t[0],
                l = a,
                s = 1
              if (
                (e &&
                  ((r +=
                    'Q' +
                    (i[0] - (2 * a[0]) / 3) +
                    ',' +
                    (i[1] - (2 * a[1]) / 3) +
                    ',' +
                    i[0] +
                    ',' +
                    i[1]),
                  (o = n[1]),
                  (s = 2)),
                t.length > 1)
              ) {
                ;(l = t[1]),
                  (i = n[s]),
                  s++,
                  (r +=
                    'C' +
                    (o[0] + a[0]) +
                    ',' +
                    (o[1] + a[1]) +
                    ',' +
                    (i[0] - l[0]) +
                    ',' +
                    (i[1] - l[1]) +
                    ',' +
                    i[0] +
                    ',' +
                    i[1])
                for (var c = 2; c < t.length; c++, s++)
                  (i = n[s]),
                    (l = t[c]),
                    (r +=
                      'S' +
                      (i[0] - l[0]) +
                      ',' +
                      (i[1] - l[1]) +
                      ',' +
                      i[0] +
                      ',' +
                      i[1])
              }
              if (e) {
                var u = n[s]
                r +=
                  'Q' +
                  (i[0] + (2 * l[0]) / 3) +
                  ',' +
                  (i[1] + (2 * l[1]) / 3) +
                  ',' +
                  u[0] +
                  ',' +
                  u[1]
              }
              return r
            }
            function ll(n, t) {
              for (
                var e,
                  r = [],
                  o = (1 - t) / 2,
                  i = n[0],
                  a = n[1],
                  l = 1,
                  s = n.length;
                ++l < s;

              )
                (e = i),
                  (i = a),
                  (a = n[l]),
                  r.push([o * (a[0] - e[0]), o * (a[1] - e[1])])
              return r
            }
            function sl(n) {
              if (n.length < 3) return el(n)
              var t = 1,
                e = n.length,
                r = n[0],
                o = r[0],
                i = r[1],
                a = [o, o, o, (r = n[1])[0]],
                l = [i, i, i, r[1]],
                s = [o, ',', i, 'L', cl(fl, a), ',', cl(fl, l)]
              for (n.push(n[e - 1]); ++t <= e; )
                (r = n[t]),
                  a.shift(),
                  a.push(r[0]),
                  l.shift(),
                  l.push(r[1]),
                  pl(s, a, l)
              return n.pop(), s.push('L', r), s.join('')
            }
            function cl(n, t) {
              return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
            }
            tl.forEach(function(n, t) {
              ;(t.key = n), (t.closed = /-closed$/.test(n))
            })
            var ul = [0, 2 / 3, 1 / 3, 0],
              dl = [0, 1 / 3, 2 / 3, 0],
              fl = [0, 1 / 6, 2 / 3, 1 / 6]
            function pl(n, t, e) {
              n.push(
                'C',
                cl(ul, t),
                ',',
                cl(ul, e),
                ',',
                cl(dl, t),
                ',',
                cl(dl, e),
                ',',
                cl(fl, t),
                ',',
                cl(fl, e)
              )
            }
            function ml(n, t) {
              return (t[1] - n[1]) / (t[0] - n[0])
            }
            function hl(n) {
              for (var t, e, r, o = -1, i = n.length; ++o < i; )
                (e = (t = n[o])[0]),
                  (r = t[1] - qn),
                  (t[0] = e * Math.cos(r)),
                  (t[1] = e * Math.sin(r))
              return n
            }
            function gl(n) {
              var t = fo,
                e = fo,
                r = 0,
                o = po,
                i = tr,
                a = el,
                l = a.key,
                s = a,
                c = 'L',
                u = 0.7
              function d(l) {
                var d,
                  f,
                  p,
                  m = [],
                  h = [],
                  g = [],
                  b = -1,
                  v = l.length,
                  x = Mt(t),
                  y = Mt(r),
                  w =
                    t === e
                      ? function() {
                          return f
                        }
                      : Mt(e),
                  k =
                    r === o
                      ? function() {
                          return p
                        }
                      : Mt(o)
                function M() {
                  m.push('M', a(n(g), u), c, s(n(h.reverse()), u), 'Z')
                }
                for (; ++b < v; )
                  i.call(this, (d = l[b]), b)
                    ? (h.push([
                        (f = +x.call(this, d, b)),
                        (p = +y.call(this, d, b))
                      ]),
                      g.push([+w.call(this, d, b), +k.call(this, d, b)]))
                    : h.length && (M(), (h = []), (g = []))
                return h.length && M(), m.length ? m.join('') : null
              }
              return (
                (d.x = function(n) {
                  return arguments.length ? ((t = e = n), d) : e
                }),
                (d.x0 = function(n) {
                  return arguments.length ? ((t = n), d) : t
                }),
                (d.x1 = function(n) {
                  return arguments.length ? ((e = n), d) : e
                }),
                (d.y = function(n) {
                  return arguments.length ? ((r = o = n), d) : o
                }),
                (d.y0 = function(n) {
                  return arguments.length ? ((r = n), d) : r
                }),
                (d.y1 = function(n) {
                  return arguments.length ? ((o = n), d) : o
                }),
                (d.defined = function(n) {
                  return arguments.length ? ((i = n), d) : i
                }),
                (d.interpolate = function(n) {
                  return arguments.length
                    ? ((l =
                        'function' == typeof n
                          ? (a = n)
                          : (a = tl.get(n) || el).key),
                      (s = a.reverse || a),
                      (c = a.closed ? 'M' : 'L'),
                      d)
                    : l
                }),
                (d.tension = function(n) {
                  return arguments.length ? ((u = n), d) : u
                }),
                d
              )
            }
            function bl(n) {
              return n.radius
            }
            function vl(n) {
              return [n.x, n.y]
            }
            function xl(n) {
              return function() {
                var t = n.apply(this, arguments),
                  e = t[0],
                  r = t[1] - qn
                return [e * Math.cos(r), e * Math.sin(r)]
              }
            }
            function yl() {
              return 64
            }
            function wl() {
              return 'circle'
            }
            function kl(n) {
              var t = Math.sqrt(n / zn)
              return (
                'M0,' +
                t +
                'A' +
                t +
                ',' +
                t +
                ' 0 1,1 0,' +
                -t +
                'A' +
                t +
                ',' +
                t +
                ' 0 1,1 0,' +
                t +
                'Z'
              )
            }
            ;(i.svg.line.radial = function() {
              var n = nl(hl)
              return (
                (n.radius = n.x), delete n.x, (n.angle = n.y), delete n.y, n
              )
            }),
              (ol.reverse = il),
              (il.reverse = ol),
              (i.svg.area = function() {
                return gl(q)
              }),
              (i.svg.area.radial = function() {
                var n = gl(hl)
                return (
                  (n.radius = n.x),
                  delete n.x,
                  (n.innerRadius = n.x0),
                  delete n.x0,
                  (n.outerRadius = n.x1),
                  delete n.x1,
                  (n.angle = n.y),
                  delete n.y,
                  (n.startAngle = n.y0),
                  delete n.y0,
                  (n.endAngle = n.y1),
                  delete n.y1,
                  n
                )
              }),
              (i.svg.chord = function() {
                var n = Jr,
                  t = Qr,
                  e = bl,
                  r = Za,
                  o = Ga
                function i(e, r) {
                  var o,
                    i,
                    c = a(this, n, e, r),
                    u = a(this, t, e, r)
                  return (
                    'M' +
                    c.p0 +
                    l(c.r, c.p1, c.a1 - c.a0) +
                    ((i = u),
                    (o = c).a0 == i.a0 && o.a1 == i.a1
                      ? s(c.r, c.p1, c.r, c.p0)
                      : s(c.r, c.p1, u.r, u.p0) +
                        l(u.r, u.p1, u.a1 - u.a0) +
                        s(u.r, u.p1, c.r, c.p0)) +
                    'Z'
                  )
                }
                function a(n, t, i, a) {
                  var l = t.call(n, i, a),
                    s = e.call(n, l, a),
                    c = r.call(n, l, a) - qn,
                    u = o.call(n, l, a) - qn
                  return {
                    r: s,
                    a0: c,
                    a1: u,
                    p0: [s * Math.cos(c), s * Math.sin(c)],
                    p1: [s * Math.cos(u), s * Math.sin(u)]
                  }
                }
                function l(n, t, e) {
                  return 'A' + n + ',' + n + ' 0 ' + +(e > zn) + ',1 ' + t
                }
                function s(n, t, e, r) {
                  return 'Q 0,0 ' + r
                }
                return (
                  (i.radius = function(n) {
                    return arguments.length ? ((e = Mt(n)), i) : e
                  }),
                  (i.source = function(t) {
                    return arguments.length ? ((n = Mt(t)), i) : n
                  }),
                  (i.target = function(n) {
                    return arguments.length ? ((t = Mt(n)), i) : t
                  }),
                  (i.startAngle = function(n) {
                    return arguments.length ? ((r = Mt(n)), i) : r
                  }),
                  (i.endAngle = function(n) {
                    return arguments.length ? ((o = Mt(n)), i) : o
                  }),
                  i
                )
              }),
              (i.svg.diagonal = function() {
                var n = Jr,
                  t = Qr,
                  e = vl
                function r(r, o) {
                  var i = n.call(this, r, o),
                    a = t.call(this, r, o),
                    l = (i.y + a.y) / 2,
                    s = [i, { x: i.x, y: l }, { x: a.x, y: l }, a]
                  return (
                    'M' +
                    (s = s.map(e))[0] +
                    'C' +
                    s[1] +
                    ' ' +
                    s[2] +
                    ' ' +
                    s[3]
                  )
                }
                return (
                  (r.source = function(t) {
                    return arguments.length ? ((n = Mt(t)), r) : n
                  }),
                  (r.target = function(n) {
                    return arguments.length ? ((t = Mt(n)), r) : t
                  }),
                  (r.projection = function(n) {
                    return arguments.length ? ((e = n), r) : e
                  }),
                  r
                )
              }),
              (i.svg.diagonal.radial = function() {
                var n = i.svg.diagonal(),
                  t = vl,
                  e = n.projection
                return (
                  (n.projection = function(n) {
                    return arguments.length ? e(xl((t = n))) : t
                  }),
                  n
                )
              }),
              (i.svg.symbol = function() {
                var n = wl,
                  t = yl
                function e(e, r) {
                  return (Ml.get(n.call(this, e, r)) || kl)(t.call(this, e, r))
                }
                return (
                  (e.type = function(t) {
                    return arguments.length ? ((n = Mt(t)), e) : n
                  }),
                  (e.size = function(n) {
                    return arguments.length ? ((t = Mt(n)), e) : t
                  }),
                  e
                )
              })
            var Ml = i.map({
              circle: kl,
              cross: function(n) {
                var t = Math.sqrt(n / 5) / 2
                return (
                  'M' +
                  -3 * t +
                  ',' +
                  -t +
                  'H' +
                  -t +
                  'V' +
                  -3 * t +
                  'H' +
                  t +
                  'V' +
                  -t +
                  'H' +
                  3 * t +
                  'V' +
                  t +
                  'H' +
                  t +
                  'V' +
                  3 * t +
                  'H' +
                  -t +
                  'V' +
                  t +
                  'H' +
                  -3 * t +
                  'Z'
                )
              },
              diamond: function(n) {
                var t = Math.sqrt(n / (2 * _l)),
                  e = t * _l
                return 'M0,' + -t + 'L' + e + ',0 0,' + t + ' ' + -e + ',0Z'
              },
              square: function(n) {
                var t = Math.sqrt(n) / 2
                return (
                  'M' +
                  -t +
                  ',' +
                  -t +
                  'L' +
                  t +
                  ',' +
                  -t +
                  ' ' +
                  t +
                  ',' +
                  t +
                  ' ' +
                  -t +
                  ',' +
                  t +
                  'Z'
                )
              },
              'triangle-down': function(n) {
                var t = Math.sqrt(n / El),
                  e = (t * El) / 2
                return (
                  'M0,' + e + 'L' + t + ',' + -e + ' ' + -t + ',' + -e + 'Z'
                )
              },
              'triangle-up': function(n) {
                var t = Math.sqrt(n / El),
                  e = (t * El) / 2
                return 'M0,' + -e + 'L' + t + ',' + e + ' ' + -t + ',' + e + 'Z'
              }
            })
            i.svg.symbolTypes = Ml.keys()
            var El = Math.sqrt(3),
              _l = Math.tan(30 * Hn)
            ;(Q.transition = function(n) {
              for (
                var t,
                  e,
                  r = Cl || ++Ol,
                  o = Ll(n),
                  i = [],
                  a = jl || {
                    time: Date.now(),
                    ease: xi,
                    delay: 0,
                    duration: 250
                  },
                  l = -1,
                  s = this.length;
                ++l < s;

              ) {
                i.push((t = []))
                for (var c = this[l], u = -1, d = c.length; ++u < d; )
                  (e = c[u]) && ql(e, u, o, r, a), t.push(e)
              }
              return Nl(i, o, r)
            }),
              (Q.interrupt = function(n) {
                return this.each(null == n ? Sl : Tl(Ll(n)))
              })
            var Sl = Tl(Ll())
            function Tl(n) {
              return function() {
                var t, e, r
                ;(t = this[n]) &&
                  (r = t[(e = t.active)]) &&
                  ((r.timer.c = null),
                  (r.timer.t = NaN),
                  --t.count ? delete t[e] : delete this[n],
                  (t.active += 0.5),
                  r.event &&
                    r.event.interrupt.call(this, this.__data__, r.index))
              }
            }
            function Nl(n, t, e) {
              return V(n, Al), (n.namespace = t), (n.id = e), n
            }
            var Cl,
              jl,
              Al = [],
              Ol = 0
            function zl(n, t, e, r) {
              var o = n.id,
                i = n.namespace
              return bn(
                n,
                'function' == typeof e
                  ? function(n, a, l) {
                      n[i][o].tween.set(t, r(e.call(n, n.__data__, a, l)))
                    }
                  : ((e = r(e)),
                    function(n) {
                      n[i][o].tween.set(t, e)
                    })
              )
            }
            function Dl(n) {
              return (
                null == n && (n = ''),
                function() {
                  this.textContent = n
                }
              )
            }
            function Ll(n) {
              return null == n ? '__transition__' : '__transition_' + n + '__'
            }
            function ql(n, t, e, r, o) {
              var i,
                a,
                l,
                s,
                c,
                u = n[e] || (n[e] = { active: 0, count: 0 }),
                d = u[r]
              function f(e) {
                var o = u.active,
                  f = u[o]
                for (var m in (f &&
                  ((f.timer.c = null),
                  (f.timer.t = NaN),
                  --u.count,
                  delete u[o],
                  f.event && f.event.interrupt.call(n, n.__data__, f.index)),
                u))
                  if (+m < r) {
                    var h = u[m]
                    ;(h.timer.c = null),
                      (h.timer.t = NaN),
                      --u.count,
                      delete u[m]
                  }
                ;(a.c = p),
                  At(
                    function() {
                      return a.c && p(e || 1) && ((a.c = null), (a.t = NaN)), 1
                    },
                    0,
                    i
                  ),
                  (u.active = r),
                  d.event && d.event.start.call(n, n.__data__, t),
                  (c = []),
                  d.tween.forEach(function(e, r) {
                    ;(r = r.call(n, n.__data__, t)) && c.push(r)
                  }),
                  (s = d.ease),
                  (l = d.duration)
              }
              function p(o) {
                for (var i = o / l, a = s(i), f = c.length; f > 0; )
                  c[--f].call(n, a)
                if (i >= 1)
                  return (
                    d.event && d.event.end.call(n, n.__data__, t),
                    --u.count ? delete u[r] : delete n[e],
                    1
                  )
              }
              d ||
                ((i = o.time),
                (a = At(
                  function(n) {
                    var t = d.delay
                    if (((a.t = t + i), t <= n)) return f(n - t)
                    a.c = f
                  },
                  0,
                  i
                )),
                (d = u[r] = {
                  tween: new _(),
                  time: i,
                  timer: a,
                  delay: o.delay,
                  duration: o.duration,
                  ease: o.ease,
                  index: t
                }),
                (o = null),
                ++u.count)
            }
            ;(Al.call = Q.call),
              (Al.empty = Q.empty),
              (Al.node = Q.node),
              (Al.size = Q.size),
              (i.transition = function(n, t) {
                return n && n.transition
                  ? Cl
                    ? n.transition(t)
                    : n
                  : i.selection().transition(n)
              }),
              (i.transition.prototype = Al),
              (Al.select = function(n) {
                var t,
                  e,
                  r,
                  o = this.id,
                  i = this.namespace,
                  a = []
                n = K(n)
                for (var l = -1, s = this.length; ++l < s; ) {
                  a.push((t = []))
                  for (var c = this[l], u = -1, d = c.length; ++u < d; )
                    (r = c[u]) && (e = n.call(r, r.__data__, u, l))
                      ? ('__data__' in r && (e.__data__ = r.__data__),
                        ql(e, u, i, o, r[i][o]),
                        t.push(e))
                      : t.push(null)
                }
                return Nl(a, i, o)
              }),
              (Al.selectAll = function(n) {
                var t,
                  e,
                  r,
                  o,
                  i,
                  a = this.id,
                  l = this.namespace,
                  s = []
                n = nn(n)
                for (var c = -1, u = this.length; ++c < u; )
                  for (var d = this[c], f = -1, p = d.length; ++f < p; )
                    if ((r = d[f])) {
                      ;(i = r[l][a]),
                        (e = n.call(r, r.__data__, f, c)),
                        s.push((t = []))
                      for (var m = -1, h = e.length; ++m < h; )
                        (o = e[m]) && ql(o, m, l, a, i), t.push(o)
                    }
                return Nl(s, l, a)
              }),
              (Al.filter = function(n) {
                var t,
                  e,
                  r = []
                'function' != typeof n && (n = hn(n))
                for (var o = 0, i = this.length; o < i; o++) {
                  r.push((t = []))
                  for (var a, l = 0, s = (a = this[o]).length; l < s; l++)
                    (e = a[l]) && n.call(e, e.__data__, l, o) && t.push(e)
                }
                return Nl(r, this.namespace, this.id)
              }),
              (Al.tween = function(n, t) {
                var e = this.id,
                  r = this.namespace
                return arguments.length < 2
                  ? this.node()[r][e].tween.get(n)
                  : bn(
                      this,
                      null == t
                        ? function(t) {
                            t[r][e].tween.remove(n)
                          }
                        : function(o) {
                            o[r][e].tween.set(n, t)
                          }
                    )
              }),
              (Al.attr = function(n, t) {
                if (arguments.length < 2) {
                  for (t in n) this.attr(t, n[t])
                  return this
                }
                var e = 'transform' == n ? ji : ci,
                  r = i.ns.qualify(n)
                function o() {
                  this.removeAttribute(r)
                }
                function a() {
                  this.removeAttributeNS(r.space, r.local)
                }
                function l(n) {
                  return null == n
                    ? o
                    : ((n += ''),
                      function() {
                        var t,
                          o = this.getAttribute(r)
                        return (
                          o !== n &&
                          ((t = e(o, n)),
                          function(n) {
                            this.setAttribute(r, t(n))
                          })
                        )
                      })
                }
                function s(n) {
                  return null == n
                    ? a
                    : ((n += ''),
                      function() {
                        var t,
                          o = this.getAttributeNS(r.space, r.local)
                        return (
                          o !== n &&
                          ((t = e(o, n)),
                          function(n) {
                            this.setAttributeNS(r.space, r.local, t(n))
                          })
                        )
                      })
                }
                return zl(this, 'attr.' + n, t, r.local ? s : l)
              }),
              (Al.attrTween = function(n, t) {
                var e = i.ns.qualify(n)
                return this.tween(
                  'attr.' + n,
                  e.local
                    ? function(n, r) {
                        var o = t.call(
                          this,
                          n,
                          r,
                          this.getAttributeNS(e.space, e.local)
                        )
                        return (
                          o &&
                          function(n) {
                            this.setAttributeNS(e.space, e.local, o(n))
                          }
                        )
                      }
                    : function(n, r) {
                        var o = t.call(this, n, r, this.getAttribute(e))
                        return (
                          o &&
                          function(n) {
                            this.setAttribute(e, o(n))
                          }
                        )
                      }
                )
              }),
              (Al.style = function(n, t, e) {
                var r = arguments.length
                if (r < 3) {
                  if ('string' != typeof n) {
                    for (e in (r < 2 && (t = ''), n)) this.style(e, n[e], t)
                    return this
                  }
                  e = ''
                }
                function o() {
                  this.style.removeProperty(n)
                }
                function i(t) {
                  return null == t
                    ? o
                    : ((t += ''),
                      function() {
                        var r,
                          o = u(this)
                            .getComputedStyle(this, null)
                            .getPropertyValue(n)
                        return (
                          o !== t &&
                          ((r = ci(o, t)),
                          function(t) {
                            this.style.setProperty(n, r(t), e)
                          })
                        )
                      })
                }
                return zl(this, 'style.' + n, t, i)
              }),
              (Al.styleTween = function(n, t, e) {
                function r(r, o) {
                  var i = t.call(
                    this,
                    r,
                    o,
                    u(this)
                      .getComputedStyle(this, null)
                      .getPropertyValue(n)
                  )
                  return (
                    i &&
                    function(t) {
                      this.style.setProperty(n, i(t), e)
                    }
                  )
                }
                return (
                  arguments.length < 3 && (e = ''), this.tween('style.' + n, r)
                )
              }),
              (Al.text = function(n) {
                return zl(this, 'text', n, Dl)
              }),
              (Al.remove = function() {
                var n = this.namespace
                return this.each('end.transition', function() {
                  var t
                  this[n].count < 2 &&
                    (t = this.parentNode) &&
                    t.removeChild(this)
                })
              }),
              (Al.ease = function(n) {
                var t = this.id,
                  e = this.namespace
                return arguments.length < 1
                  ? this.node()[e][t].ease
                  : ('function' != typeof n && (n = i.ease.apply(i, arguments)),
                    bn(this, function(r) {
                      r[e][t].ease = n
                    }))
              }),
              (Al.delay = function(n) {
                var t = this.id,
                  e = this.namespace
                return arguments.length < 1
                  ? this.node()[e][t].delay
                  : bn(
                      this,
                      'function' == typeof n
                        ? function(r, o, i) {
                            r[e][t].delay = +n.call(r, r.__data__, o, i)
                          }
                        : ((n = +n),
                          function(r) {
                            r[e][t].delay = n
                          })
                    )
              }),
              (Al.duration = function(n) {
                var t = this.id,
                  e = this.namespace
                return arguments.length < 1
                  ? this.node()[e][t].duration
                  : bn(
                      this,
                      'function' == typeof n
                        ? function(r, o, i) {
                            r[e][t].duration = Math.max(
                              1,
                              n.call(r, r.__data__, o, i)
                            )
                          }
                        : ((n = Math.max(1, n)),
                          function(r) {
                            r[e][t].duration = n
                          })
                    )
              }),
              (Al.each = function(n, t) {
                var e = this.id,
                  r = this.namespace
                if (arguments.length < 2) {
                  var o = jl,
                    a = Cl
                  try {
                    ;(Cl = e),
                      bn(this, function(t, o, i) {
                        ;(jl = t[r][e]), n.call(t, t.__data__, o, i)
                      })
                  } finally {
                    ;(jl = o), (Cl = a)
                  }
                } else
                  bn(this, function(o) {
                    var a = o[r][e]
                    ;(
                      a.event ||
                      (a.event = i.dispatch('start', 'end', 'interrupt'))
                    ).on(n, t)
                  })
                return this
              }),
              (Al.transition = function() {
                for (
                  var n,
                    t,
                    e,
                    r = this.id,
                    o = ++Ol,
                    i = this.namespace,
                    a = [],
                    l = 0,
                    s = this.length;
                  l < s;
                  l++
                ) {
                  a.push((n = []))
                  for (var c, u = 0, d = (c = this[l]).length; u < d; u++)
                    (t = c[u]) &&
                      ql(t, u, i, o, {
                        time: (e = t[i][r]).time,
                        ease: e.ease,
                        delay: e.delay + e.duration,
                        duration: e.duration
                      }),
                      n.push(t)
                }
                return Nl(a, i, o)
              }),
              (i.svg.axis = function() {
                var n,
                  t = i.scale.linear(),
                  e = Hl,
                  r = 6,
                  o = 6,
                  a = 3,
                  s = [10],
                  c = null
                function u(l) {
                  l.each(function() {
                    var l,
                      u = i.select(this),
                      d = this.__chart__ || t,
                      f = (this.__chart__ = t.copy()),
                      p =
                        null == c
                          ? f.ticks
                            ? f.ticks.apply(f, s)
                            : f.domain()
                          : c,
                      m =
                        null == n
                          ? f.tickFormat
                            ? f.tickFormat.apply(f, s)
                            : q
                          : n,
                      h = u.selectAll('.tick').data(p, f),
                      g = h
                        .enter()
                        .insert('g', '.domain')
                        .attr('class', 'tick')
                        .style('opacity', An),
                      b = i
                        .transition(h.exit())
                        .style('opacity', An)
                        .remove(),
                      v = i.transition(h.order()).style('opacity', 1),
                      x = Math.max(r, 0) + a,
                      y = _a(f),
                      w = u.selectAll('.domain').data([0]),
                      k = (w
                        .enter()
                        .append('path')
                        .attr('class', 'domain'),
                      i.transition(w))
                    g.append('line'), g.append('text')
                    var M,
                      E,
                      _,
                      S,
                      T = g.select('line'),
                      N = v.select('line'),
                      C = h.select('text').text(m),
                      j = g.select('text'),
                      A = v.select('text'),
                      O = 'top' === e || 'left' === e ? -1 : 1
                    if (
                      ('bottom' === e || 'top' === e
                        ? ((l = Il),
                          (M = 'x'),
                          (_ = 'y'),
                          (E = 'x2'),
                          (S = 'y2'),
                          C.attr('dy', O < 0 ? '0em' : '.71em').style(
                            'text-anchor',
                            'middle'
                          ),
                          k.attr(
                            'd',
                            'M' +
                              y[0] +
                              ',' +
                              O * o +
                              'V0H' +
                              y[1] +
                              'V' +
                              O * o
                          ))
                        : ((l = Rl),
                          (M = 'y'),
                          (_ = 'x'),
                          (E = 'y2'),
                          (S = 'x2'),
                          C.attr('dy', '.32em').style(
                            'text-anchor',
                            O < 0 ? 'end' : 'start'
                          ),
                          k.attr(
                            'd',
                            'M' +
                              O * o +
                              ',' +
                              y[0] +
                              'H0V' +
                              y[1] +
                              'H' +
                              O * o
                          )),
                      T.attr(S, O * r),
                      j.attr(_, O * x),
                      N.attr(E, 0).attr(S, O * r),
                      A.attr(M, 0).attr(_, O * x),
                      f.rangeBand)
                    ) {
                      var z = f,
                        D = z.rangeBand() / 2
                      d = f = function(n) {
                        return z(n) + D
                      }
                    } else d.rangeBand ? (d = f) : b.call(l, f, d)
                    g.call(l, d, f), v.call(l, f, f)
                  })
                }
                return (
                  (u.scale = function(n) {
                    return arguments.length ? ((t = n), u) : t
                  }),
                  (u.orient = function(n) {
                    return arguments.length
                      ? ((e = n in Pl ? n + '' : Hl), u)
                      : e
                  }),
                  (u.ticks = function() {
                    return arguments.length ? ((s = l(arguments)), u) : s
                  }),
                  (u.tickValues = function(n) {
                    return arguments.length ? ((c = n), u) : c
                  }),
                  (u.tickFormat = function(t) {
                    return arguments.length ? ((n = t), u) : n
                  }),
                  (u.tickSize = function(n) {
                    var t = arguments.length
                    return t ? ((r = +n), (o = +arguments[t - 1]), u) : r
                  }),
                  (u.innerTickSize = function(n) {
                    return arguments.length ? ((r = +n), u) : r
                  }),
                  (u.outerTickSize = function(n) {
                    return arguments.length ? ((o = +n), u) : o
                  }),
                  (u.tickPadding = function(n) {
                    return arguments.length ? ((a = +n), u) : a
                  }),
                  (u.tickSubdivide = function() {
                    return arguments.length && u
                  }),
                  u
                )
              })
            var Hl = 'bottom',
              Pl = { top: 1, right: 1, bottom: 1, left: 1 }
            function Il(n, t, e) {
              n.attr('transform', function(n) {
                var r = t(n)
                return 'translate(' + (isFinite(r) ? r : e(n)) + ',0)'
              })
            }
            function Rl(n, t, e) {
              n.attr('transform', function(n) {
                var r = t(n)
                return 'translate(0,' + (isFinite(r) ? r : e(n)) + ')'
              })
            }
            i.svg.brush = function() {
              var n,
                t,
                e = W(f, 'brushstart', 'brush', 'brushend'),
                r = null,
                o = null,
                a = [0, 0],
                l = [0, 0],
                s = !0,
                c = !0,
                d = Bl[0]
              function f(n) {
                n.each(function() {
                  var n = i
                      .select(this)
                      .style('pointer-events', 'all')
                      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                      .on('mousedown.brush', g)
                      .on('touchstart.brush', g),
                    t = n.selectAll('.background').data([0])
                  t
                    .enter()
                    .append('rect')
                    .attr('class', 'background')
                    .style('visibility', 'hidden')
                    .style('cursor', 'crosshair'),
                    n
                      .selectAll('.extent')
                      .data([0])
                      .enter()
                      .append('rect')
                      .attr('class', 'extent')
                      .style('cursor', 'move')
                  var e = n.selectAll('.resize').data(d, q)
                  e.exit().remove(),
                    e
                      .enter()
                      .append('g')
                      .attr('class', function(n) {
                        return 'resize ' + n
                      })
                      .style('cursor', function(n) {
                        return Fl[n]
                      })
                      .append('rect')
                      .attr('x', function(n) {
                        return /[ew]$/.test(n) ? -3 : null
                      })
                      .attr('y', function(n) {
                        return /^[ns]/.test(n) ? -3 : null
                      })
                      .attr('width', 6)
                      .attr('height', 6)
                      .style('visibility', 'hidden'),
                    e.style('display', f.empty() ? 'none' : null)
                  var a,
                    l = i.transition(n),
                    s = i.transition(t)
                  r &&
                    ((a = _a(r)),
                    s.attr('x', a[0]).attr('width', a[1] - a[0]),
                    m(l)),
                    o &&
                      ((a = _a(o)),
                      s.attr('y', a[0]).attr('height', a[1] - a[0]),
                      h(l)),
                    p(l)
                })
              }
              function p(n) {
                n.selectAll('.resize').attr('transform', function(n) {
                  return (
                    'translate(' +
                    a[+/e$/.test(n)] +
                    ',' +
                    l[+/^s/.test(n)] +
                    ')'
                  )
                })
              }
              function m(n) {
                n.select('.extent').attr('x', a[0]),
                  n
                    .selectAll('.extent,.n>rect,.s>rect')
                    .attr('width', a[1] - a[0])
              }
              function h(n) {
                n.select('.extent').attr('y', l[0]),
                  n
                    .selectAll('.extent,.e>rect,.w>rect')
                    .attr('height', l[1] - l[0])
              }
              function g() {
                var d,
                  g,
                  b = this,
                  v = i.select(i.event.target),
                  x = e.of(b, arguments),
                  y = i.select(b),
                  w = v.datum(),
                  k = !/^(n|s)$/.test(w) && r,
                  M = !/^(e|w)$/.test(w) && o,
                  E = v.classed('extent'),
                  _ = Tn(b),
                  S = i.mouse(b),
                  T = i
                    .select(u(b))
                    .on('keydown.brush', function() {
                      32 == i.event.keyCode &&
                        (E ||
                          ((d = null), (S[0] -= a[1]), (S[1] -= l[1]), (E = 2)),
                        U())
                    })
                    .on('keyup.brush', function() {
                      32 == i.event.keyCode &&
                        2 == E &&
                        ((S[0] += a[1]), (S[1] += l[1]), (E = 0), U())
                    })
                if (
                  (i.event.changedTouches
                    ? T.on('touchmove.brush', j).on('touchend.brush', O)
                    : T.on('mousemove.brush', j).on('mouseup.brush', O),
                  y
                    .interrupt()
                    .selectAll('*')
                    .interrupt(),
                  E)
                )
                  (S[0] = a[0] - S[0]), (S[1] = l[0] - S[1])
                else if (w) {
                  var N = +/w$/.test(w),
                    C = +/^n/.test(w)
                  ;(g = [a[1 - N] - S[0], l[1 - C] - S[1]]),
                    (S[0] = a[N]),
                    (S[1] = l[C])
                } else i.event.altKey && (d = S.slice())
                function j() {
                  var n = i.mouse(b),
                    t = !1
                  g && ((n[0] += g[0]), (n[1] += g[1])),
                    E ||
                      (i.event.altKey
                        ? (d || (d = [(a[0] + a[1]) / 2, (l[0] + l[1]) / 2]),
                          (S[0] = a[+(n[0] < d[0])]),
                          (S[1] = l[+(n[1] < d[1])]))
                        : (d = null)),
                    k && A(n, r, 0) && (m(y), (t = !0)),
                    M && A(n, o, 1) && (h(y), (t = !0)),
                    t &&
                      (p(y), x({ type: 'brush', mode: E ? 'move' : 'resize' }))
                }
                function A(e, r, o) {
                  var i,
                    u,
                    f = _a(r),
                    p = f[0],
                    m = f[1],
                    h = S[o],
                    g = o ? l : a,
                    b = g[1] - g[0]
                  if (
                    (E && ((p -= h), (m -= b + h)),
                    (i = (o ? c : s) ? Math.max(p, Math.min(m, e[o])) : e[o]),
                    E
                      ? (u = (i += h) + b)
                      : (d && (h = Math.max(p, Math.min(m, 2 * d[o] - i))),
                        h < i ? ((u = i), (i = h)) : (u = h)),
                    g[0] != i || g[1] != u)
                  )
                    return (
                      o ? (t = null) : (n = null), (g[0] = i), (g[1] = u), !0
                    )
                }
                function O() {
                  j(),
                    y
                      .style('pointer-events', 'all')
                      .selectAll('.resize')
                      .style('display', f.empty() ? 'none' : null),
                    i.select('body').style('cursor', null),
                    T.on('mousemove.brush', null)
                      .on('mouseup.brush', null)
                      .on('touchmove.brush', null)
                      .on('touchend.brush', null)
                      .on('keydown.brush', null)
                      .on('keyup.brush', null),
                    _(),
                    x({ type: 'brushend' })
                }
                y
                  .style('pointer-events', 'none')
                  .selectAll('.resize')
                  .style('display', null),
                  i.select('body').style('cursor', v.style('cursor')),
                  x({ type: 'brushstart' }),
                  j()
              }
              return (
                (f.event = function(r) {
                  r.each(function() {
                    var r = e.of(this, arguments),
                      o = { x: a, y: l, i: n, j: t },
                      s = this.__chart__ || o
                    ;(this.__chart__ = o),
                      Cl
                        ? i
                            .select(this)
                            .transition()
                            .each('start.brush', function() {
                              ;(n = s.i),
                                (t = s.j),
                                (a = s.x),
                                (l = s.y),
                                r({ type: 'brushstart' })
                            })
                            .tween('brush:brush', function() {
                              var e = ui(a, o.x),
                                i = ui(l, o.y)
                              return (
                                (n = t = null),
                                function(n) {
                                  ;(a = o.x = e(n)),
                                    (l = o.y = i(n)),
                                    r({ type: 'brush', mode: 'resize' })
                                }
                              )
                            })
                            .each('end.brush', function() {
                              ;(n = o.i),
                                (t = o.j),
                                r({ type: 'brush', mode: 'resize' }),
                                r({ type: 'brushend' })
                            })
                        : (r({ type: 'brushstart' }),
                          r({ type: 'brush', mode: 'resize' }),
                          r({ type: 'brushend' }))
                  })
                }),
                (f.x = function(n) {
                  return arguments.length
                    ? ((d = Bl[(!(r = n) << 1) | !o]), f)
                    : r
                }),
                (f.y = function(n) {
                  return arguments.length
                    ? ((d = Bl[(!r << 1) | !(o = n)]), f)
                    : o
                }),
                (f.clamp = function(n) {
                  return arguments.length
                    ? (r && o
                        ? ((s = !!n[0]), (c = !!n[1]))
                        : r
                        ? (s = !!n)
                        : o && (c = !!n),
                      f)
                    : r && o
                    ? [s, c]
                    : r
                    ? s
                    : o
                    ? c
                    : null
                }),
                (f.extent = function(e) {
                  var i, s, c, u, d
                  return arguments.length
                    ? (r &&
                        ((i = e[0]),
                        (s = e[1]),
                        o && ((i = i[0]), (s = s[0])),
                        (n = [i, s]),
                        r.invert && ((i = r(i)), (s = r(s))),
                        s < i && ((d = i), (i = s), (s = d)),
                        (i == a[0] && s == a[1]) || (a = [i, s])),
                      o &&
                        ((c = e[0]),
                        (u = e[1]),
                        r && ((c = c[1]), (u = u[1])),
                        (t = [c, u]),
                        o.invert && ((c = o(c)), (u = o(u))),
                        u < c && ((d = c), (c = u), (u = d)),
                        (c == l[0] && u == l[1]) || (l = [c, u])),
                      f)
                    : (r &&
                        (n
                          ? ((i = n[0]), (s = n[1]))
                          : ((i = a[0]),
                            (s = a[1]),
                            r.invert && ((i = r.invert(i)), (s = r.invert(s))),
                            s < i && ((d = i), (i = s), (s = d)))),
                      o &&
                        (t
                          ? ((c = t[0]), (u = t[1]))
                          : ((c = l[0]),
                            (u = l[1]),
                            o.invert && ((c = o.invert(c)), (u = o.invert(u))),
                            u < c && ((d = c), (c = u), (u = d)))),
                      r && o ? [[i, c], [s, u]] : r ? [i, s] : o && [c, u])
                }),
                (f.clear = function() {
                  return (
                    f.empty() || ((a = [0, 0]), (l = [0, 0]), (n = t = null)), f
                  )
                }),
                (f.empty = function() {
                  return (!!r && a[0] == a[1]) || (!!o && l[0] == l[1])
                }),
                i.rebind(f, e, 'on')
              )
            }
            var Fl = {
                n: 'ns-resize',
                e: 'ew-resize',
                s: 'ns-resize',
                w: 'ew-resize',
                nw: 'nwse-resize',
                ne: 'nesw-resize',
                se: 'nwse-resize',
                sw: 'nesw-resize'
              },
              Bl = [
                ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'],
                ['e', 'w'],
                ['n', 's'],
                []
              ],
              Ul = (Ft.format = ge.timeFormat),
              $l = Ul.utc,
              Wl = $l('%Y-%m-%dT%H:%M:%S.%LZ')
            function Yl(n) {
              return n.toISOString()
            }
            function Vl(n, t, e) {
              function r(t) {
                return n(t)
              }
              function o(n, e) {
                var r = (n[1] - n[0]) / e,
                  o = i.bisect(Zl, r)
                return o == Zl.length
                  ? [
                      t.year,
                      za(
                        n.map(function(n) {
                          return n / 31536e6
                        }),
                        e
                      )[2]
                    ]
                  : o
                  ? t[r / Zl[o - 1] < Zl[o] / r ? o - 1 : o]
                  : [Ql, za(n, e)[2]]
              }
              return (
                (r.invert = function(t) {
                  return Xl(n.invert(t))
                }),
                (r.domain = function(t) {
                  return arguments.length
                    ? (n.domain(t), r)
                    : n.domain().map(Xl)
                }),
                (r.nice = function(n, t) {
                  var e = r.domain(),
                    i = Ea(e),
                    a = null == n ? o(i, 10) : 'number' == typeof n && o(i, n)
                  function l(e) {
                    return !isNaN(e) && !n.range(e, Xl(+e + 1), t).length
                  }
                  return (
                    a && ((n = a[0]), (t = a[1])),
                    r.domain(
                      Ta(
                        e,
                        t > 1
                          ? {
                              floor: function(t) {
                                for (; l((t = n.floor(t))); ) t = Xl(t - 1)
                                return t
                              },
                              ceil: function(t) {
                                for (; l((t = n.ceil(t))); ) t = Xl(+t + 1)
                                return t
                              }
                            }
                          : n
                      )
                    )
                  )
                }),
                (r.ticks = function(n, t) {
                  var e = Ea(r.domain()),
                    i =
                      null == n
                        ? o(e, 10)
                        : 'number' == typeof n
                        ? o(e, n)
                        : !n.range && [{ range: n }, t]
                  return (
                    i && ((n = i[0]), (t = i[1])),
                    n.range(e[0], Xl(+e[1] + 1), t < 1 ? 1 : t)
                  )
                }),
                (r.tickFormat = function() {
                  return e
                }),
                (r.copy = function() {
                  return Vl(n.copy(), t, e)
                }),
                Aa(r, n)
              )
            }
            function Xl(n) {
              return new Date(n)
            }
            ;(Ul.iso =
              Date.prototype.toISOString &&
              +new Date('2000-01-01T00:00:00.000Z')
                ? Yl
                : Wl),
              (Yl.parse = function(n) {
                var t = new Date(n)
                return isNaN(t) ? null : t
              }),
              (Yl.toString = Wl.toString),
              (Ft.second = Wt(
                function(n) {
                  return new Bt(1e3 * Math.floor(n / 1e3))
                },
                function(n, t) {
                  n.setTime(n.getTime() + 1e3 * Math.floor(t))
                },
                function(n) {
                  return n.getSeconds()
                }
              )),
              (Ft.seconds = Ft.second.range),
              (Ft.seconds.utc = Ft.second.utc.range),
              (Ft.minute = Wt(
                function(n) {
                  return new Bt(6e4 * Math.floor(n / 6e4))
                },
                function(n, t) {
                  n.setTime(n.getTime() + 6e4 * Math.floor(t))
                },
                function(n) {
                  return n.getMinutes()
                }
              )),
              (Ft.minutes = Ft.minute.range),
              (Ft.minutes.utc = Ft.minute.utc.range),
              (Ft.hour = Wt(
                function(n) {
                  var t = n.getTimezoneOffset() / 60
                  return new Bt(36e5 * (Math.floor(n / 36e5 - t) + t))
                },
                function(n, t) {
                  n.setTime(n.getTime() + 36e5 * Math.floor(t))
                },
                function(n) {
                  return n.getHours()
                }
              )),
              (Ft.hours = Ft.hour.range),
              (Ft.hours.utc = Ft.hour.utc.range),
              (Ft.month = Wt(
                function(n) {
                  return (n = Ft.day(n)).setDate(1), n
                },
                function(n, t) {
                  n.setMonth(n.getMonth() + t)
                },
                function(n) {
                  return n.getMonth()
                }
              )),
              (Ft.months = Ft.month.range),
              (Ft.months.utc = Ft.month.utc.range)
            var Zl = [
                1e3,
                5e3,
                15e3,
                3e4,
                6e4,
                3e5,
                9e5,
                18e5,
                36e5,
                108e5,
                216e5,
                432e5,
                864e5,
                1728e5,
                6048e5,
                2592e6,
                7776e6,
                31536e6
              ],
              Gl = [
                [Ft.second, 1],
                [Ft.second, 5],
                [Ft.second, 15],
                [Ft.second, 30],
                [Ft.minute, 1],
                [Ft.minute, 5],
                [Ft.minute, 15],
                [Ft.minute, 30],
                [Ft.hour, 1],
                [Ft.hour, 3],
                [Ft.hour, 6],
                [Ft.hour, 12],
                [Ft.day, 1],
                [Ft.day, 2],
                [Ft.week, 1],
                [Ft.month, 1],
                [Ft.month, 3],
                [Ft.year, 1]
              ],
              Jl = Ul.multi([
                [
                  '.%L',
                  function(n) {
                    return n.getMilliseconds()
                  }
                ],
                [
                  ':%S',
                  function(n) {
                    return n.getSeconds()
                  }
                ],
                [
                  '%I:%M',
                  function(n) {
                    return n.getMinutes()
                  }
                ],
                [
                  '%I %p',
                  function(n) {
                    return n.getHours()
                  }
                ],
                [
                  '%a %d',
                  function(n) {
                    return n.getDay() && 1 != n.getDate()
                  }
                ],
                [
                  '%b %d',
                  function(n) {
                    return 1 != n.getDate()
                  }
                ],
                [
                  '%B',
                  function(n) {
                    return n.getMonth()
                  }
                ],
                ['%Y', tr]
              ]),
              Ql = {
                range: function(n, t, e) {
                  return i.range(Math.ceil(n / e) * e, +t, e).map(Xl)
                },
                floor: q,
                ceil: q
              }
            ;(Gl.year = Ft.year),
              (Ft.scale = function() {
                return Vl(i.scale.linear(), Gl, Jl)
              })
            var Kl = Gl.map(function(n) {
                return [n[0].utc, n[1]]
              }),
              ns = $l.multi([
                [
                  '.%L',
                  function(n) {
                    return n.getUTCMilliseconds()
                  }
                ],
                [
                  ':%S',
                  function(n) {
                    return n.getUTCSeconds()
                  }
                ],
                [
                  '%I:%M',
                  function(n) {
                    return n.getUTCMinutes()
                  }
                ],
                [
                  '%I %p',
                  function(n) {
                    return n.getUTCHours()
                  }
                ],
                [
                  '%a %d',
                  function(n) {
                    return n.getUTCDay() && 1 != n.getUTCDate()
                  }
                ],
                [
                  '%b %d',
                  function(n) {
                    return 1 != n.getUTCDate()
                  }
                ],
                [
                  '%B',
                  function(n) {
                    return n.getUTCMonth()
                  }
                ],
                ['%Y', tr]
              ])
            function ts(n) {
              return JSON.parse(n.responseText)
            }
            function es(n) {
              var t = s.createRange()
              return (
                t.selectNode(s.body), t.createContextualFragment(n.responseText)
              )
            }
            ;(Kl.year = Ft.year.utc),
              (Ft.scale.utc = function() {
                return Vl(i.scale.linear(), Kl, ns)
              }),
              (i.text = Et(function(n) {
                return n.responseText
              })),
              (i.json = function(n, t) {
                return _t(n, 'application/json', ts, t)
              }),
              (i.html = function(n, t) {
                return _t(n, 'text/html', es, t)
              }),
              (i.xml = Et(function(n) {
                return n.responseXML
              })),
              (this.d3 = i),
              void 0 ===
                (o = 'function' == typeof (r = i) ? r.call(t, e, t, n) : r) ||
                (n.exports = o)
          })()
        },
        function(n, t, e) {
          var r
          !(function(t, e) {
            'use strict'
            'object' == typeof n.exports
              ? (n.exports = t.document
                  ? e(t, !0)
                  : function(n) {
                      if (!n.document)
                        throw new Error(
                          'jQuery requires a window with a document'
                        )
                      return e(n)
                    })
              : e(t)
          })('undefined' != typeof window ? window : this, function(e, o) {
            'use strict'
            var i = [],
              a = e.document,
              l = Object.getPrototypeOf,
              s = i.slice,
              c = i.concat,
              u = i.push,
              d = i.indexOf,
              f = {},
              p = f.toString,
              m = f.hasOwnProperty,
              h = m.toString,
              g = h.call(Object),
              b = {},
              v = function(n) {
                return 'function' == typeof n && 'number' != typeof n.nodeType
              },
              x = function(n) {
                return null != n && n === n.window
              },
              y = { type: !0, src: !0, nonce: !0, noModule: !0 }
            function w(n, t, e) {
              var r,
                o,
                i = (e = e || a).createElement('script')
              if (((i.text = n), t))
                for (r in y)
                  (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    i.setAttribute(r, o)
              e.head.appendChild(i).parentNode.removeChild(i)
            }
            function k(n) {
              return null == n
                ? n + ''
                : 'object' == typeof n || 'function' == typeof n
                ? f[p.call(n)] || 'object'
                : typeof n
            }
            var M = function n(t, e) {
                return new n.fn.init(t, e)
              },
              E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
            function _(n) {
              var t = !!n && 'length' in n && n.length,
                e = k(n)
              return (
                !v(n) &&
                !x(n) &&
                ('array' === e ||
                  0 === t ||
                  ('number' == typeof t && t > 0 && t - 1 in n))
              )
            }
            ;(M.fn = M.prototype = {
              jquery: '3.4.1',
              constructor: M,
              length: 0,
              toArray: function() {
                return s.call(this)
              },
              get: function(n) {
                return null == n
                  ? s.call(this)
                  : n < 0
                  ? this[n + this.length]
                  : this[n]
              },
              pushStack: function(n) {
                var t = M.merge(this.constructor(), n)
                return (t.prevObject = this), t
              },
              each: function(n) {
                return M.each(this, n)
              },
              map: function(n) {
                return this.pushStack(
                  M.map(this, function(t, e) {
                    return n.call(t, e, t)
                  })
                )
              },
              slice: function() {
                return this.pushStack(s.apply(this, arguments))
              },
              first: function() {
                return this.eq(0)
              },
              last: function() {
                return this.eq(-1)
              },
              eq: function(n) {
                var t = this.length,
                  e = +n + (n < 0 ? t : 0)
                return this.pushStack(e >= 0 && e < t ? [this[e]] : [])
              },
              end: function() {
                return this.prevObject || this.constructor()
              },
              push: u,
              sort: i.sort,
              splice: i.splice
            }),
              (M.extend = M.fn.extend = function() {
                var n,
                  t,
                  e,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  l = 1,
                  s = arguments.length,
                  c = !1
                for (
                  'boolean' == typeof a &&
                    ((c = a), (a = arguments[l] || {}), l++),
                    'object' == typeof a || v(a) || (a = {}),
                    l === s && ((a = this), l--);
                  l < s;
                  l++
                )
                  if (null != (n = arguments[l]))
                    for (t in n)
                      (r = n[t]),
                        '__proto__' !== t &&
                          a !== r &&
                          (c &&
                          r &&
                          (M.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((e = a[t]),
                              (i =
                                o && !Array.isArray(e)
                                  ? []
                                  : o || M.isPlainObject(e)
                                  ? e
                                  : {}),
                              (o = !1),
                              (a[t] = M.extend(c, i, r)))
                            : void 0 !== r && (a[t] = r))
                return a
              }),
              M.extend({
                expando:
                  'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g, ''),
                isReady: !0,
                error: function(n) {
                  throw new Error(n)
                },
                noop: function() {},
                isPlainObject: function(n) {
                  var t, e
                  return (
                    !(!n || '[object Object]' !== p.call(n)) &&
                    (!(t = l(n)) ||
                      ('function' ==
                        typeof (e =
                          m.call(t, 'constructor') && t.constructor) &&
                        h.call(e) === g))
                  )
                },
                isEmptyObject: function(n) {
                  var t
                  for (t in n) return !1
                  return !0
                },
                globalEval: function(n, t) {
                  w(n, { nonce: t && t.nonce })
                },
                each: function(n, t) {
                  var e,
                    r = 0
                  if (_(n))
                    for (
                      e = n.length;
                      r < e && !1 !== t.call(n[r], r, n[r]);
                      r++
                    );
                  else for (r in n) if (!1 === t.call(n[r], r, n[r])) break
                  return n
                },
                trim: function(n) {
                  return null == n ? '' : (n + '').replace(E, '')
                },
                makeArray: function(n, t) {
                  var e = t || []
                  return (
                    null != n &&
                      (_(Object(n))
                        ? M.merge(e, 'string' == typeof n ? [n] : n)
                        : u.call(e, n)),
                    e
                  )
                },
                inArray: function(n, t, e) {
                  return null == t ? -1 : d.call(t, n, e)
                },
                merge: function(n, t) {
                  for (var e = +t.length, r = 0, o = n.length; r < e; r++)
                    n[o++] = t[r]
                  return (n.length = o), n
                },
                grep: function(n, t, e) {
                  for (var r = [], o = 0, i = n.length, a = !e; o < i; o++)
                    !t(n[o], o) !== a && r.push(n[o])
                  return r
                },
                map: function(n, t, e) {
                  var r,
                    o,
                    i = 0,
                    a = []
                  if (_(n))
                    for (r = n.length; i < r; i++)
                      null != (o = t(n[i], i, e)) && a.push(o)
                  else for (i in n) null != (o = t(n[i], i, e)) && a.push(o)
                  return c.apply([], a)
                },
                guid: 1,
                support: b
              }),
              'function' == typeof Symbol &&
                (M.fn[Symbol.iterator] = i[Symbol.iterator]),
              M.each(
                'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                  ' '
                ),
                function(n, t) {
                  f['[object ' + t + ']'] = t.toLowerCase()
                }
              )
            var S = (function(n) {
              var t,
                e,
                r,
                o,
                i,
                a,
                l,
                s,
                c,
                u,
                d,
                f,
                p,
                m,
                h,
                g,
                b,
                v,
                x,
                y = 'sizzle' + 1 * new Date(),
                w = n.document,
                k = 0,
                M = 0,
                E = cn(),
                _ = cn(),
                S = cn(),
                T = cn(),
                N = function(n, t) {
                  return n === t && (d = !0), 0
                },
                C = {}.hasOwnProperty,
                j = [],
                A = j.pop,
                O = j.push,
                z = j.push,
                D = j.slice,
                L = function(n, t) {
                  for (var e = 0, r = n.length; e < r; e++)
                    if (n[e] === t) return e
                  return -1
                },
                q =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                H = '[\\x20\\t\\r\\n\\f]',
                P = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
                I =
                  '\\[' +
                  H +
                  '*(' +
                  P +
                  ')(?:' +
                  H +
                  '*([*^$|!~]?=)' +
                  H +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  P +
                  '))|)' +
                  H +
                  '*\\]',
                R =
                  ':(' +
                  P +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  I +
                  ')*)|.*)\\)|)',
                F = new RegExp(H + '+', 'g'),
                B = new RegExp(
                  '^' + H + '+|((?:^|[^\\\\])(?:\\\\.)*)' + H + '+$',
                  'g'
                ),
                U = new RegExp('^' + H + '*,' + H + '*'),
                $ = new RegExp('^' + H + '*([>+~]|' + H + ')' + H + '*'),
                W = new RegExp(H + '|>'),
                Y = new RegExp(R),
                V = new RegExp('^' + P + '$'),
                X = {
                  ID: new RegExp('^#(' + P + ')'),
                  CLASS: new RegExp('^\\.(' + P + ')'),
                  TAG: new RegExp('^(' + P + '|[*])'),
                  ATTR: new RegExp('^' + I),
                  PSEUDO: new RegExp('^' + R),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      H +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      H +
                      '*(?:([+-]|)' +
                      H +
                      '*(\\d+)|))' +
                      H +
                      '*\\)|)',
                    'i'
                  ),
                  bool: new RegExp('^(?:' + q + ')$', 'i'),
                  needsContext: new RegExp(
                    '^' +
                      H +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      H +
                      '*((?:-\\d)?\\d*)' +
                      H +
                      '*\\)|)(?=[^-]|$)',
                    'i'
                  )
                },
                Z = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                nn = /[+~]/,
                tn = new RegExp(
                  '\\\\([\\da-f]{1,6}' + H + '?|(' + H + ')|.)',
                  'ig'
                ),
                en = function(n, t, e) {
                  var r = '0x' + t - 65536
                  return r != r || e
                    ? t
                    : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
                },
                rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                on = function(n, t) {
                  return t
                    ? '\0' === n
                      ? '\ufffd'
                      : n.slice(0, -1) +
                        '\\' +
                        n.charCodeAt(n.length - 1).toString(16) +
                        ' '
                    : '\\' + n
                },
                an = function() {
                  f()
                },
                ln = wn(
                  function(n) {
                    return (
                      !0 === n.disabled &&
                      'fieldset' === n.nodeName.toLowerCase()
                    )
                  },
                  { dir: 'parentNode', next: 'legend' }
                )
              try {
                z.apply((j = D.call(w.childNodes)), w.childNodes),
                  j[w.childNodes.length].nodeType
              } catch (n) {
                z = {
                  apply: j.length
                    ? function(n, t) {
                        O.apply(n, D.call(t))
                      }
                    : function(n, t) {
                        for (var e = n.length, r = 0; (n[e++] = t[r++]); );
                        n.length = e - 1
                      }
                }
              }
              function sn(n, t, r, o) {
                var i,
                  l,
                  c,
                  u,
                  d,
                  m,
                  b,
                  v = t && t.ownerDocument,
                  k = t ? t.nodeType : 9
                if (
                  ((r = r || []),
                  'string' != typeof n ||
                    !n ||
                    (1 !== k && 9 !== k && 11 !== k))
                )
                  return r
                if (
                  !o &&
                  ((t ? t.ownerDocument || t : w) !== p && f(t),
                  (t = t || p),
                  h)
                ) {
                  if (11 !== k && (d = K.exec(n)))
                    if ((i = d[1])) {
                      if (9 === k) {
                        if (!(c = t.getElementById(i))) return r
                        if (c.id === i) return r.push(c), r
                      } else if (
                        v &&
                        (c = v.getElementById(i)) &&
                        x(t, c) &&
                        c.id === i
                      )
                        return r.push(c), r
                    } else {
                      if (d[2]) return z.apply(r, t.getElementsByTagName(n)), r
                      if (
                        (i = d[3]) &&
                        e.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return z.apply(r, t.getElementsByClassName(i)), r
                    }
                  if (
                    e.qsa &&
                    !T[n + ' '] &&
                    (!g || !g.test(n)) &&
                    (1 !== k || 'object' !== t.nodeName.toLowerCase())
                  ) {
                    if (((b = n), (v = t), 1 === k && W.test(n))) {
                      for (
                        (u = t.getAttribute('id'))
                          ? (u = u.replace(rn, on))
                          : t.setAttribute('id', (u = y)),
                          l = (m = a(n)).length;
                        l--;

                      )
                        m[l] = '#' + u + ' ' + yn(m[l])
                      ;(b = m.join(',')),
                        (v = (nn.test(n) && vn(t.parentNode)) || t)
                    }
                    try {
                      return z.apply(r, v.querySelectorAll(b)), r
                    } catch (t) {
                      T(n, !0)
                    } finally {
                      u === y && t.removeAttribute('id')
                    }
                  }
                }
                return s(n.replace(B, '$1'), t, r, o)
              }
              function cn() {
                var n = []
                return function t(e, o) {
                  return (
                    n.push(e + ' ') > r.cacheLength && delete t[n.shift()],
                    (t[e + ' '] = o)
                  )
                }
              }
              function un(n) {
                return (n[y] = !0), n
              }
              function dn(n) {
                var t = p.createElement('fieldset')
                try {
                  return !!n(t)
                } catch (n) {
                  return !1
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null)
                }
              }
              function fn(n, t) {
                for (var e = n.split('|'), o = e.length; o--; )
                  r.attrHandle[e[o]] = t
              }
              function pn(n, t) {
                var e = t && n,
                  r =
                    e &&
                    1 === n.nodeType &&
                    1 === t.nodeType &&
                    n.sourceIndex - t.sourceIndex
                if (r) return r
                if (e) for (; (e = e.nextSibling); ) if (e === t) return -1
                return n ? 1 : -1
              }
              function mn(n) {
                return function(t) {
                  return 'input' === t.nodeName.toLowerCase() && t.type === n
                }
              }
              function hn(n) {
                return function(t) {
                  var e = t.nodeName.toLowerCase()
                  return ('input' === e || 'button' === e) && t.type === n
                }
              }
              function gn(n) {
                return function(t) {
                  return 'form' in t
                    ? t.parentNode && !1 === t.disabled
                      ? 'label' in t
                        ? 'label' in t.parentNode
                          ? t.parentNode.disabled === n
                          : t.disabled === n
                        : t.isDisabled === n ||
                          (t.isDisabled !== !n && ln(t) === n)
                      : t.disabled === n
                    : 'label' in t && t.disabled === n
                }
              }
              function bn(n) {
                return un(function(t) {
                  return (
                    (t = +t),
                    un(function(e, r) {
                      for (var o, i = n([], e.length, t), a = i.length; a--; )
                        e[(o = i[a])] && (e[o] = !(r[o] = e[o]))
                    })
                  )
                })
              }
              function vn(n) {
                return n && void 0 !== n.getElementsByTagName && n
              }
              for (t in ((e = sn.support = {}),
              (i = sn.isXML = function(n) {
                var t = n.namespaceURI,
                  e = (n.ownerDocument || n).documentElement
                return !Z.test(t || (e && e.nodeName) || 'HTML')
              }),
              (f = sn.setDocument = function(n) {
                var t,
                  o,
                  a = n ? n.ownerDocument || n : w
                return a !== p && 9 === a.nodeType && a.documentElement
                  ? ((m = (p = a).documentElement),
                    (h = !i(p)),
                    w !== p &&
                      (o = p.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener('unload', an, !1)
                        : o.attachEvent && o.attachEvent('onunload', an)),
                    (e.attributes = dn(function(n) {
                      return (n.className = 'i'), !n.getAttribute('className')
                    })),
                    (e.getElementsByTagName = dn(function(n) {
                      return (
                        n.appendChild(p.createComment('')),
                        !n.getElementsByTagName('*').length
                      )
                    })),
                    (e.getElementsByClassName = Q.test(
                      p.getElementsByClassName
                    )),
                    (e.getById = dn(function(n) {
                      return (
                        (m.appendChild(n).id = y),
                        !p.getElementsByName || !p.getElementsByName(y).length
                      )
                    })),
                    e.getById
                      ? ((r.filter.ID = function(n) {
                          var t = n.replace(tn, en)
                          return function(n) {
                            return n.getAttribute('id') === t
                          }
                        }),
                        (r.find.ID = function(n, t) {
                          if (void 0 !== t.getElementById && h) {
                            var e = t.getElementById(n)
                            return e ? [e] : []
                          }
                        }))
                      : ((r.filter.ID = function(n) {
                          var t = n.replace(tn, en)
                          return function(n) {
                            var e =
                              void 0 !== n.getAttributeNode &&
                              n.getAttributeNode('id')
                            return e && e.value === t
                          }
                        }),
                        (r.find.ID = function(n, t) {
                          if (void 0 !== t.getElementById && h) {
                            var e,
                              r,
                              o,
                              i = t.getElementById(n)
                            if (i) {
                              if (
                                (e = i.getAttributeNode('id')) &&
                                e.value === n
                              )
                                return [i]
                              for (
                                o = t.getElementsByName(n), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (e = i.getAttributeNode('id')) &&
                                  e.value === n
                                )
                                  return [i]
                            }
                            return []
                          }
                        })),
                    (r.find.TAG = e.getElementsByTagName
                      ? function(n, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(n)
                            : e.qsa
                            ? t.querySelectorAll(n)
                            : void 0
                        }
                      : function(n, t) {
                          var e,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(n)
                          if ('*' === n) {
                            for (; (e = i[o++]); ) 1 === e.nodeType && r.push(e)
                            return r
                          }
                          return i
                        }),
                    (r.find.CLASS =
                      e.getElementsByClassName &&
                      function(n, t) {
                        if (void 0 !== t.getElementsByClassName && h)
                          return t.getElementsByClassName(n)
                      }),
                    (b = []),
                    (g = []),
                    (e.qsa = Q.test(p.querySelectorAll)) &&
                      (dn(function(n) {
                        ;(m.appendChild(n).innerHTML =
                          "<a id='" +
                          y +
                          "'></a><select id='" +
                          y +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          n.querySelectorAll("[msallowcapture^='']").length &&
                            g.push('[*^$]=' + H + '*(?:\'\'|"")'),
                          n.querySelectorAll('[selected]').length ||
                            g.push('\\[' + H + '*(?:value|' + q + ')'),
                          n.querySelectorAll('[id~=' + y + '-]').length ||
                            g.push('~='),
                          n.querySelectorAll(':checked').length ||
                            g.push(':checked'),
                          n.querySelectorAll('a#' + y + '+*').length ||
                            g.push('.#.+[+~]')
                      }),
                      dn(function(n) {
                        n.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                        var t = p.createElement('input')
                        t.setAttribute('type', 'hidden'),
                          n.appendChild(t).setAttribute('name', 'D'),
                          n.querySelectorAll('[name=d]').length &&
                            g.push('name' + H + '*[*^$|!~]?='),
                          2 !== n.querySelectorAll(':enabled').length &&
                            g.push(':enabled', ':disabled'),
                          (m.appendChild(n).disabled = !0),
                          2 !== n.querySelectorAll(':disabled').length &&
                            g.push(':enabled', ':disabled'),
                          n.querySelectorAll('*,:x'),
                          g.push(',.*:')
                      })),
                    (e.matchesSelector = Q.test(
                      (v =
                        m.matches ||
                        m.webkitMatchesSelector ||
                        m.mozMatchesSelector ||
                        m.oMatchesSelector ||
                        m.msMatchesSelector)
                    )) &&
                      dn(function(n) {
                        ;(e.disconnectedMatch = v.call(n, '*')),
                          v.call(n, "[s!='']:x"),
                          b.push('!=', R)
                      }),
                    (g = g.length && new RegExp(g.join('|'))),
                    (b = b.length && new RegExp(b.join('|'))),
                    (t = Q.test(m.compareDocumentPosition)),
                    (x =
                      t || Q.test(m.contains)
                        ? function(n, t) {
                            var e = 9 === n.nodeType ? n.documentElement : n,
                              r = t && t.parentNode
                            return (
                              n === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(e.contains
                                  ? e.contains(r)
                                  : n.compareDocumentPosition &&
                                    16 & n.compareDocumentPosition(r))
                              )
                            )
                          }
                        : function(n, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === n) return !0
                            return !1
                          }),
                    (N = t
                      ? function(n, t) {
                          if (n === t) return (d = !0), 0
                          var r =
                            !n.compareDocumentPosition -
                            !t.compareDocumentPosition
                          return (
                            r ||
                            (1 &
                              (r =
                                (n.ownerDocument || n) ===
                                (t.ownerDocument || t)
                                  ? n.compareDocumentPosition(t)
                                  : 1) ||
                            (!e.sortDetached &&
                              t.compareDocumentPosition(n) === r)
                              ? n === p || (n.ownerDocument === w && x(w, n))
                                ? -1
                                : t === p || (t.ownerDocument === w && x(w, t))
                                ? 1
                                : u
                                ? L(u, n) - L(u, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          )
                        }
                      : function(n, t) {
                          if (n === t) return (d = !0), 0
                          var e,
                            r = 0,
                            o = n.parentNode,
                            i = t.parentNode,
                            a = [n],
                            l = [t]
                          if (!o || !i)
                            return n === p
                              ? -1
                              : t === p
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : u
                              ? L(u, n) - L(u, t)
                              : 0
                          if (o === i) return pn(n, t)
                          for (e = n; (e = e.parentNode); ) a.unshift(e)
                          for (e = t; (e = e.parentNode); ) l.unshift(e)
                          for (; a[r] === l[r]; ) r++
                          return r
                            ? pn(a[r], l[r])
                            : a[r] === w
                            ? -1
                            : l[r] === w
                            ? 1
                            : 0
                        }),
                    p)
                  : p
              }),
              (sn.matches = function(n, t) {
                return sn(n, null, null, t)
              }),
              (sn.matchesSelector = function(n, t) {
                if (
                  ((n.ownerDocument || n) !== p && f(n),
                  e.matchesSelector &&
                    h &&
                    !T[t + ' '] &&
                    (!b || !b.test(t)) &&
                    (!g || !g.test(t)))
                )
                  try {
                    var r = v.call(n, t)
                    if (
                      r ||
                      e.disconnectedMatch ||
                      (n.document && 11 !== n.document.nodeType)
                    )
                      return r
                  } catch (n) {
                    T(t, !0)
                  }
                return sn(t, p, null, [n]).length > 0
              }),
              (sn.contains = function(n, t) {
                return (n.ownerDocument || n) !== p && f(n), x(n, t)
              }),
              (sn.attr = function(n, t) {
                ;(n.ownerDocument || n) !== p && f(n)
                var o = r.attrHandle[t.toLowerCase()],
                  i =
                    o && C.call(r.attrHandle, t.toLowerCase())
                      ? o(n, t, !h)
                      : void 0
                return void 0 !== i
                  ? i
                  : e.attributes || !h
                  ? n.getAttribute(t)
                  : (i = n.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null
              }),
              (sn.escape = function(n) {
                return (n + '').replace(rn, on)
              }),
              (sn.error = function(n) {
                throw new Error('Syntax error, unrecognized expression: ' + n)
              }),
              (sn.uniqueSort = function(n) {
                var t,
                  r = [],
                  o = 0,
                  i = 0
                if (
                  ((d = !e.detectDuplicates),
                  (u = !e.sortStable && n.slice(0)),
                  n.sort(N),
                  d)
                ) {
                  for (; (t = n[i++]); ) t === n[i] && (o = r.push(i))
                  for (; o--; ) n.splice(r[o], 1)
                }
                return (u = null), n
              }),
              (o = sn.getText = function(n) {
                var t,
                  e = '',
                  r = 0,
                  i = n.nodeType
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ('string' == typeof n.textContent) return n.textContent
                    for (n = n.firstChild; n; n = n.nextSibling) e += o(n)
                  } else if (3 === i || 4 === i) return n.nodeValue
                } else for (; (t = n[r++]); ) e += o(t)
                return e
              }),
              ((r = sn.selectors = {
                cacheLength: 50,
                createPseudo: un,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                  '>': { dir: 'parentNode', first: !0 },
                  ' ': { dir: 'parentNode' },
                  '+': { dir: 'previousSibling', first: !0 },
                  '~': { dir: 'previousSibling' }
                },
                preFilter: {
                  ATTR: function(n) {
                    return (
                      (n[1] = n[1].replace(tn, en)),
                      (n[3] = (n[3] || n[4] || n[5] || '').replace(tn, en)),
                      '~=' === n[2] && (n[3] = ' ' + n[3] + ' '),
                      n.slice(0, 4)
                    )
                  },
                  CHILD: function(n) {
                    return (
                      (n[1] = n[1].toLowerCase()),
                      'nth' === n[1].slice(0, 3)
                        ? (n[3] || sn.error(n[0]),
                          (n[4] = +(n[4]
                            ? n[5] + (n[6] || 1)
                            : 2 * ('even' === n[3] || 'odd' === n[3]))),
                          (n[5] = +(n[7] + n[8] || 'odd' === n[3])))
                        : n[3] && sn.error(n[0]),
                      n
                    )
                  },
                  PSEUDO: function(n) {
                    var t,
                      e = !n[6] && n[2]
                    return X.CHILD.test(n[0])
                      ? null
                      : (n[3]
                          ? (n[2] = n[4] || n[5] || '')
                          : e &&
                            Y.test(e) &&
                            (t = a(e, !0)) &&
                            (t = e.indexOf(')', e.length - t) - e.length) &&
                            ((n[0] = n[0].slice(0, t)), (n[2] = e.slice(0, t))),
                        n.slice(0, 3))
                  }
                },
                filter: {
                  TAG: function(n) {
                    var t = n.replace(tn, en).toLowerCase()
                    return '*' === n
                      ? function() {
                          return !0
                        }
                      : function(n) {
                          return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                  },
                  CLASS: function(n) {
                    var t = E[n + ' ']
                    return (
                      t ||
                      ((t = new RegExp(
                        '(^|' + H + ')' + n + '(' + H + '|$)'
                      )) &&
                        E(n, function(n) {
                          return t.test(
                            ('string' == typeof n.className && n.className) ||
                              (void 0 !== n.getAttribute &&
                                n.getAttribute('class')) ||
                              ''
                          )
                        }))
                    )
                  },
                  ATTR: function(n, t, e) {
                    return function(r) {
                      var o = sn.attr(r, n)
                      return null == o
                        ? '!=' === t
                        : !t ||
                            ((o += ''),
                            '=' === t
                              ? o === e
                              : '!=' === t
                              ? o !== e
                              : '^=' === t
                              ? e && 0 === o.indexOf(e)
                              : '*=' === t
                              ? e && o.indexOf(e) > -1
                              : '$=' === t
                              ? e && o.slice(-e.length) === e
                              : '~=' === t
                              ? (' ' + o.replace(F, ' ') + ' ').indexOf(e) > -1
                              : '|=' === t &&
                                (o === e ||
                                  o.slice(0, e.length + 1) === e + '-'))
                    }
                  },
                  CHILD: function(n, t, e, r, o) {
                    var i = 'nth' !== n.slice(0, 3),
                      a = 'last' !== n.slice(-4),
                      l = 'of-type' === t
                    return 1 === r && 0 === o
                      ? function(n) {
                          return !!n.parentNode
                        }
                      : function(t, e, s) {
                          var c,
                            u,
                            d,
                            f,
                            p,
                            m,
                            h = i !== a ? 'nextSibling' : 'previousSibling',
                            g = t.parentNode,
                            b = l && t.nodeName.toLowerCase(),
                            v = !s && !l,
                            x = !1
                          if (g) {
                            if (i) {
                              for (; h; ) {
                                for (f = t; (f = f[h]); )
                                  if (
                                    l
                                      ? f.nodeName.toLowerCase() === b
                                      : 1 === f.nodeType
                                  )
                                    return !1
                                m = h = 'only' === n && !m && 'nextSibling'
                              }
                              return !0
                            }
                            if (
                              ((m = [a ? g.firstChild : g.lastChild]), a && v)
                            ) {
                              for (
                                x =
                                  (p =
                                    (c =
                                      (u =
                                        (d = (f = g)[y] || (f[y] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[n] ||
                                      [])[0] === k && c[1]) && c[2],
                                  f = p && g.childNodes[p];
                                (f =
                                  (++p && f && f[h]) || (x = p = 0) || m.pop());

                              )
                                if (1 === f.nodeType && ++x && f === t) {
                                  u[n] = [k, p, x]
                                  break
                                }
                            } else if (
                              (v &&
                                (x = p =
                                  (c =
                                    (u =
                                      (d = (f = t)[y] || (f[y] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[n] ||
                                    [])[0] === k && c[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[h]) ||
                                  (x = p = 0) ||
                                  m.pop()) &&
                                ((l
                                  ? f.nodeName.toLowerCase() !== b
                                  : 1 !== f.nodeType) ||
                                  !++x ||
                                  (v &&
                                    ((u =
                                      (d = f[y] || (f[y] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[n] = [k, x]),
                                  f !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0)
                          }
                        }
                  },
                  PSEUDO: function(n, t) {
                    var e,
                      o =
                        r.pseudos[n] ||
                        r.setFilters[n.toLowerCase()] ||
                        sn.error('unsupported pseudo: ' + n)
                    return o[y]
                      ? o(t)
                      : o.length > 1
                      ? ((e = [n, n, '', t]),
                        r.setFilters.hasOwnProperty(n.toLowerCase())
                          ? un(function(n, e) {
                              for (var r, i = o(n, t), a = i.length; a--; )
                                n[(r = L(n, i[a]))] = !(e[r] = i[a])
                            })
                          : function(n) {
                              return o(n, 0, e)
                            })
                      : o
                  }
                },
                pseudos: {
                  not: un(function(n) {
                    var t = [],
                      e = [],
                      r = l(n.replace(B, '$1'))
                    return r[y]
                      ? un(function(n, t, e, o) {
                          for (
                            var i, a = r(n, null, o, []), l = n.length;
                            l--;

                          )
                            (i = a[l]) && (n[l] = !(t[l] = i))
                        })
                      : function(n, o, i) {
                          return (
                            (t[0] = n),
                            r(t, null, i, e),
                            (t[0] = null),
                            !e.pop()
                          )
                        }
                  }),
                  has: un(function(n) {
                    return function(t) {
                      return sn(n, t).length > 0
                    }
                  }),
                  contains: un(function(n) {
                    return (
                      (n = n.replace(tn, en)),
                      function(t) {
                        return (t.textContent || o(t)).indexOf(n) > -1
                      }
                    )
                  }),
                  lang: un(function(n) {
                    return (
                      V.test(n || '') || sn.error('unsupported lang: ' + n),
                      (n = n.replace(tn, en).toLowerCase()),
                      function(t) {
                        var e
                        do {
                          if (
                            (e = h
                              ? t.lang
                              : t.getAttribute('xml:lang') ||
                                t.getAttribute('lang'))
                          )
                            return (
                              (e = e.toLowerCase()) === n ||
                              0 === e.indexOf(n + '-')
                            )
                        } while ((t = t.parentNode) && 1 === t.nodeType)
                        return !1
                      }
                    )
                  }),
                  target: function(t) {
                    var e = n.location && n.location.hash
                    return e && e.slice(1) === t.id
                  },
                  root: function(n) {
                    return n === m
                  },
                  focus: function(n) {
                    return (
                      n === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(n.type || n.href || ~n.tabIndex)
                    )
                  },
                  enabled: gn(!1),
                  disabled: gn(!0),
                  checked: function(n) {
                    var t = n.nodeName.toLowerCase()
                    return (
                      ('input' === t && !!n.checked) ||
                      ('option' === t && !!n.selected)
                    )
                  },
                  selected: function(n) {
                    return (
                      n.parentNode && n.parentNode.selectedIndex,
                      !0 === n.selected
                    )
                  },
                  empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                      if (n.nodeType < 6) return !1
                    return !0
                  },
                  parent: function(n) {
                    return !r.pseudos.empty(n)
                  },
                  header: function(n) {
                    return J.test(n.nodeName)
                  },
                  input: function(n) {
                    return G.test(n.nodeName)
                  },
                  button: function(n) {
                    var t = n.nodeName.toLowerCase()
                    return (
                      ('input' === t && 'button' === n.type) || 'button' === t
                    )
                  },
                  text: function(n) {
                    var t
                    return (
                      'input' === n.nodeName.toLowerCase() &&
                      'text' === n.type &&
                      (null == (t = n.getAttribute('type')) ||
                        'text' === t.toLowerCase())
                    )
                  },
                  first: bn(function() {
                    return [0]
                  }),
                  last: bn(function(n, t) {
                    return [t - 1]
                  }),
                  eq: bn(function(n, t, e) {
                    return [e < 0 ? e + t : e]
                  }),
                  even: bn(function(n, t) {
                    for (var e = 0; e < t; e += 2) n.push(e)
                    return n
                  }),
                  odd: bn(function(n, t) {
                    for (var e = 1; e < t; e += 2) n.push(e)
                    return n
                  }),
                  lt: bn(function(n, t, e) {
                    for (var r = e < 0 ? e + t : e > t ? t : e; --r >= 0; )
                      n.push(r)
                    return n
                  }),
                  gt: bn(function(n, t, e) {
                    for (var r = e < 0 ? e + t : e; ++r < t; ) n.push(r)
                    return n
                  })
                }
              }).pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = mn(t)
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = hn(t)
              function xn() {}
              function yn(n) {
                for (var t = 0, e = n.length, r = ''; t < e; t++)
                  r += n[t].value
                return r
              }
              function wn(n, t, e) {
                var r = t.dir,
                  o = t.next,
                  i = o || r,
                  a = e && 'parentNode' === i,
                  l = M++
                return t.first
                  ? function(t, e, o) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a) return n(t, e, o)
                      return !1
                    }
                  : function(t, e, s) {
                      var c,
                        u,
                        d,
                        f = [k, l]
                      if (s) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || a) && n(t, e, s)) return !0
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || a)
                            if (
                              ((u =
                                (d = t[y] || (t[y] = {}))[t.uniqueID] ||
                                (d[t.uniqueID] = {})),
                              o && o === t.nodeName.toLowerCase())
                            )
                              t = t[r] || t
                            else {
                              if ((c = u[i]) && c[0] === k && c[1] === l)
                                return (f[2] = c[2])
                              if (((u[i] = f), (f[2] = n(t, e, s)))) return !0
                            }
                      return !1
                    }
              }
              function kn(n) {
                return n.length > 1
                  ? function(t, e, r) {
                      for (var o = n.length; o--; )
                        if (!n[o](t, e, r)) return !1
                      return !0
                    }
                  : n[0]
              }
              function Mn(n, t, e, r, o) {
                for (
                  var i, a = [], l = 0, s = n.length, c = null != t;
                  l < s;
                  l++
                )
                  (i = n[l]) &&
                    ((e && !e(i, r, o)) || (a.push(i), c && t.push(l)))
                return a
              }
              function En(n, t, e, r, o, i) {
                return (
                  r && !r[y] && (r = En(r)),
                  o && !o[y] && (o = En(o, i)),
                  un(function(i, a, l, s) {
                    var c,
                      u,
                      d,
                      f = [],
                      p = [],
                      m = a.length,
                      h =
                        i ||
                        (function(n, t, e) {
                          for (var r = 0, o = t.length; r < o; r++)
                            sn(n, t[r], e)
                          return e
                        })(t || '*', l.nodeType ? [l] : l, []),
                      g = !n || (!i && t) ? h : Mn(h, f, n, l, s),
                      b = e ? (o || (i ? n : m || r) ? [] : a) : g
                    if ((e && e(g, b, l, s), r))
                      for (c = Mn(b, p), r(c, [], l, s), u = c.length; u--; )
                        (d = c[u]) && (b[p[u]] = !(g[p[u]] = d))
                    if (i) {
                      if (o || n) {
                        if (o) {
                          for (c = [], u = b.length; u--; )
                            (d = b[u]) && c.push((g[u] = d))
                          o(null, (b = []), c, s)
                        }
                        for (u = b.length; u--; )
                          (d = b[u]) &&
                            (c = o ? L(i, d) : f[u]) > -1 &&
                            (i[c] = !(a[c] = d))
                      }
                    } else (b = Mn(b === a ? b.splice(m, b.length) : b)), o ? o(null, a, b, s) : z.apply(a, b)
                  })
                )
              }
              function _n(n) {
                for (
                  var t,
                    e,
                    o,
                    i = n.length,
                    a = r.relative[n[0].type],
                    l = a || r.relative[' '],
                    s = a ? 1 : 0,
                    u = wn(
                      function(n) {
                        return n === t
                      },
                      l,
                      !0
                    ),
                    d = wn(
                      function(n) {
                        return L(t, n) > -1
                      },
                      l,
                      !0
                    ),
                    f = [
                      function(n, e, r) {
                        var o =
                          (!a && (r || e !== c)) ||
                          ((t = e).nodeType ? u(n, e, r) : d(n, e, r))
                        return (t = null), o
                      }
                    ];
                  s < i;
                  s++
                )
                  if ((e = r.relative[n[s].type])) f = [wn(kn(f), e)]
                  else {
                    if (
                      (e = r.filter[n[s].type].apply(null, n[s].matches))[y]
                    ) {
                      for (o = ++s; o < i && !r.relative[n[o].type]; o++);
                      return En(
                        s > 1 && kn(f),
                        s > 1 &&
                          yn(
                            n
                              .slice(0, s - 1)
                              .concat({
                                value: ' ' === n[s - 2].type ? '*' : ''
                              })
                          ).replace(B, '$1'),
                        e,
                        s < o && _n(n.slice(s, o)),
                        o < i && _n((n = n.slice(o))),
                        o < i && yn(n)
                      )
                    }
                    f.push(e)
                  }
                return kn(f)
              }
              return (
                (xn.prototype = r.filters = r.pseudos),
                (r.setFilters = new xn()),
                (a = sn.tokenize = function(n, t) {
                  var e,
                    o,
                    i,
                    a,
                    l,
                    s,
                    c,
                    u = _[n + ' ']
                  if (u) return t ? 0 : u.slice(0)
                  for (l = n, s = [], c = r.preFilter; l; ) {
                    for (a in ((e && !(o = U.exec(l))) ||
                      (o && (l = l.slice(o[0].length) || l), s.push((i = []))),
                    (e = !1),
                    (o = $.exec(l)) &&
                      ((e = o.shift()),
                      i.push({ value: e, type: o[0].replace(B, ' ') }),
                      (l = l.slice(e.length))),
                    r.filter))
                      !(o = X[a].exec(l)) ||
                        (c[a] && !(o = c[a](o))) ||
                        ((e = o.shift()),
                        i.push({ value: e, type: a, matches: o }),
                        (l = l.slice(e.length)))
                    if (!e) break
                  }
                  return t ? l.length : l ? sn.error(n) : _(n, s).slice(0)
                }),
                (l = sn.compile = function(n, t) {
                  var e,
                    o = [],
                    i = [],
                    l = S[n + ' ']
                  if (!l) {
                    for (t || (t = a(n)), e = t.length; e--; )
                      (l = _n(t[e]))[y] ? o.push(l) : i.push(l)
                    ;(l = S(
                      n,
                      (function(n, t) {
                        var e = t.length > 0,
                          o = n.length > 0,
                          i = function(i, a, l, s, u) {
                            var d,
                              m,
                              g,
                              b = 0,
                              v = '0',
                              x = i && [],
                              y = [],
                              w = c,
                              M = i || (o && r.find.TAG('*', u)),
                              E = (k += null == w ? 1 : Math.random() || 0.1),
                              _ = M.length
                            for (
                              u && (c = a === p || a || u);
                              v !== _ && null != (d = M[v]);
                              v++
                            ) {
                              if (o && d) {
                                for (
                                  m = 0,
                                    a ||
                                      d.ownerDocument === p ||
                                      (f(d), (l = !h));
                                  (g = n[m++]);

                                )
                                  if (g(d, a || p, l)) {
                                    s.push(d)
                                    break
                                  }
                                u && (k = E)
                              }
                              e && ((d = !g && d) && b--, i && x.push(d))
                            }
                            if (((b += v), e && v !== b)) {
                              for (m = 0; (g = t[m++]); ) g(x, y, a, l)
                              if (i) {
                                if (b > 0)
                                  for (; v--; )
                                    x[v] || y[v] || (y[v] = A.call(s))
                                y = Mn(y)
                              }
                              z.apply(s, y),
                                u &&
                                  !i &&
                                  y.length > 0 &&
                                  b + t.length > 1 &&
                                  sn.uniqueSort(s)
                            }
                            return u && ((k = E), (c = w)), x
                          }
                        return e ? un(i) : i
                      })(i, o)
                    )).selector = n
                  }
                  return l
                }),
                (s = sn.select = function(n, t, e, o) {
                  var i,
                    s,
                    c,
                    u,
                    d,
                    f = 'function' == typeof n && n,
                    p = !o && a((n = f.selector || n))
                  if (((e = e || []), 1 === p.length)) {
                    if (
                      (s = p[0] = p[0].slice(0)).length > 2 &&
                      'ID' === (c = s[0]).type &&
                      9 === t.nodeType &&
                      h &&
                      r.relative[s[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(c.matches[0].replace(tn, en), t) ||
                          [])[0])
                      )
                        return e
                      f && (t = t.parentNode),
                        (n = n.slice(s.shift().value.length))
                    }
                    for (
                      i = X.needsContext.test(n) ? 0 : s.length;
                      i-- && ((c = s[i]), !r.relative[(u = c.type)]);

                    )
                      if (
                        (d = r.find[u]) &&
                        (o = d(
                          c.matches[0].replace(tn, en),
                          (nn.test(s[0].type) && vn(t.parentNode)) || t
                        ))
                      ) {
                        if ((s.splice(i, 1), !(n = o.length && yn(s))))
                          return z.apply(e, o), e
                        break
                      }
                  }
                  return (
                    (f || l(n, p))(
                      o,
                      t,
                      !h,
                      e,
                      !t || (nn.test(n) && vn(t.parentNode)) || t
                    ),
                    e
                  )
                }),
                (e.sortStable =
                  y
                    .split('')
                    .sort(N)
                    .join('') === y),
                (e.detectDuplicates = !!d),
                f(),
                (e.sortDetached = dn(function(n) {
                  return (
                    1 & n.compareDocumentPosition(p.createElement('fieldset'))
                  )
                })),
                dn(function(n) {
                  return (
                    (n.innerHTML = "<a href='#'></a>"),
                    '#' === n.firstChild.getAttribute('href')
                  )
                }) ||
                  fn('type|href|height|width', function(n, t, e) {
                    if (!e)
                      return n.getAttribute(
                        t,
                        'type' === t.toLowerCase() ? 1 : 2
                      )
                  }),
                (e.attributes &&
                  dn(function(n) {
                    return (
                      (n.innerHTML = '<input/>'),
                      n.firstChild.setAttribute('value', ''),
                      '' === n.firstChild.getAttribute('value')
                    )
                  })) ||
                  fn('value', function(n, t, e) {
                    if (!e && 'input' === n.nodeName.toLowerCase())
                      return n.defaultValue
                  }),
                dn(function(n) {
                  return null == n.getAttribute('disabled')
                }) ||
                  fn(q, function(n, t, e) {
                    var r
                    if (!e)
                      return !0 === n[t]
                        ? t.toLowerCase()
                        : (r = n.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null
                  }),
                sn
              )
            })(e)
            ;(M.find = S),
              (M.expr = S.selectors),
              (M.expr[':'] = M.expr.pseudos),
              (M.uniqueSort = M.unique = S.uniqueSort),
              (M.text = S.getText),
              (M.isXMLDoc = S.isXML),
              (M.contains = S.contains),
              (M.escapeSelector = S.escape)
            var T = function(n, t, e) {
                for (
                  var r = [], o = void 0 !== e;
                  (n = n[t]) && 9 !== n.nodeType;

                )
                  if (1 === n.nodeType) {
                    if (o && M(n).is(e)) break
                    r.push(n)
                  }
                return r
              },
              N = function(n, t) {
                for (var e = []; n; n = n.nextSibling)
                  1 === n.nodeType && n !== t && e.push(n)
                return e
              },
              C = M.expr.match.needsContext
            function j(n, t) {
              return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
            function O(n, t, e) {
              return v(t)
                ? M.grep(n, function(n, r) {
                    return !!t.call(n, r, n) !== e
                  })
                : t.nodeType
                ? M.grep(n, function(n) {
                    return (n === t) !== e
                  })
                : 'string' != typeof t
                ? M.grep(n, function(n) {
                    return d.call(t, n) > -1 !== e
                  })
                : M.filter(t, n, e)
            }
            ;(M.filter = function(n, t, e) {
              var r = t[0]
              return (
                e && (n = ':not(' + n + ')'),
                1 === t.length && 1 === r.nodeType
                  ? M.find.matchesSelector(r, n)
                    ? [r]
                    : []
                  : M.find.matches(
                      n,
                      M.grep(t, function(n) {
                        return 1 === n.nodeType
                      })
                    )
              )
            }),
              M.fn.extend({
                find: function(n) {
                  var t,
                    e,
                    r = this.length,
                    o = this
                  if ('string' != typeof n)
                    return this.pushStack(
                      M(n).filter(function() {
                        for (t = 0; t < r; t++)
                          if (M.contains(o[t], this)) return !0
                      })
                    )
                  for (e = this.pushStack([]), t = 0; t < r; t++)
                    M.find(n, o[t], e)
                  return r > 1 ? M.uniqueSort(e) : e
                },
                filter: function(n) {
                  return this.pushStack(O(this, n || [], !1))
                },
                not: function(n) {
                  return this.pushStack(O(this, n || [], !0))
                },
                is: function(n) {
                  return !!O(
                    this,
                    'string' == typeof n && C.test(n) ? M(n) : n || [],
                    !1
                  ).length
                }
              })
            var z,
              D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
            ;((M.fn.init = function(n, t, e) {
              var r, o
              if (!n) return this
              if (((e = e || z), 'string' == typeof n)) {
                if (
                  !(r =
                    '<' === n[0] && '>' === n[n.length - 1] && n.length >= 3
                      ? [null, n, null]
                      : D.exec(n)) ||
                  (!r[1] && t)
                )
                  return !t || t.jquery
                    ? (t || e).find(n)
                    : this.constructor(t).find(n)
                if (r[1]) {
                  if (
                    ((t = t instanceof M ? t[0] : t),
                    M.merge(
                      this,
                      M.parseHTML(
                        r[1],
                        t && t.nodeType ? t.ownerDocument || t : a,
                        !0
                      )
                    ),
                    A.test(r[1]) && M.isPlainObject(t))
                  )
                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
                  return this
                }
                return (
                  (o = a.getElementById(r[2])) &&
                    ((this[0] = o), (this.length = 1)),
                  this
                )
              }
              return n.nodeType
                ? ((this[0] = n), (this.length = 1), this)
                : v(n)
                ? void 0 !== e.ready
                  ? e.ready(n)
                  : n(M)
                : M.makeArray(n, this)
            }).prototype = M.fn),
              (z = M(a))
            var L = /^(?:parents|prev(?:Until|All))/,
              q = { children: !0, contents: !0, next: !0, prev: !0 }
            function H(n, t) {
              for (; (n = n[t]) && 1 !== n.nodeType; );
              return n
            }
            M.fn.extend({
              has: function(n) {
                var t = M(n, this),
                  e = t.length
                return this.filter(function() {
                  for (var n = 0; n < e; n++)
                    if (M.contains(this, t[n])) return !0
                })
              },
              closest: function(n, t) {
                var e,
                  r = 0,
                  o = this.length,
                  i = [],
                  a = 'string' != typeof n && M(n)
                if (!C.test(n))
                  for (; r < o; r++)
                    for (e = this[r]; e && e !== t; e = e.parentNode)
                      if (
                        e.nodeType < 11 &&
                        (a
                          ? a.index(e) > -1
                          : 1 === e.nodeType && M.find.matchesSelector(e, n))
                      ) {
                        i.push(e)
                        break
                      }
                return this.pushStack(i.length > 1 ? M.uniqueSort(i) : i)
              },
              index: function(n) {
                return n
                  ? 'string' == typeof n
                    ? d.call(M(n), this[0])
                    : d.call(this, n.jquery ? n[0] : n)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1
              },
              add: function(n, t) {
                return this.pushStack(
                  M.uniqueSort(M.merge(this.get(), M(n, t)))
                )
              },
              addBack: function(n) {
                return this.add(
                  null == n ? this.prevObject : this.prevObject.filter(n)
                )
              }
            }),
              M.each(
                {
                  parent: function(n) {
                    var t = n.parentNode
                    return t && 11 !== t.nodeType ? t : null
                  },
                  parents: function(n) {
                    return T(n, 'parentNode')
                  },
                  parentsUntil: function(n, t, e) {
                    return T(n, 'parentNode', e)
                  },
                  next: function(n) {
                    return H(n, 'nextSibling')
                  },
                  prev: function(n) {
                    return H(n, 'previousSibling')
                  },
                  nextAll: function(n) {
                    return T(n, 'nextSibling')
                  },
                  prevAll: function(n) {
                    return T(n, 'previousSibling')
                  },
                  nextUntil: function(n, t, e) {
                    return T(n, 'nextSibling', e)
                  },
                  prevUntil: function(n, t, e) {
                    return T(n, 'previousSibling', e)
                  },
                  siblings: function(n) {
                    return N((n.parentNode || {}).firstChild, n)
                  },
                  children: function(n) {
                    return N(n.firstChild)
                  },
                  contents: function(n) {
                    return void 0 !== n.contentDocument
                      ? n.contentDocument
                      : (j(n, 'template') && (n = n.content || n),
                        M.merge([], n.childNodes))
                  }
                },
                function(n, t) {
                  M.fn[n] = function(e, r) {
                    var o = M.map(this, t, e)
                    return (
                      'Until' !== n.slice(-5) && (r = e),
                      r && 'string' == typeof r && (o = M.filter(r, o)),
                      this.length > 1 &&
                        (q[n] || M.uniqueSort(o), L.test(n) && o.reverse()),
                      this.pushStack(o)
                    )
                  }
                }
              )
            var P = /[^\x20\t\r\n\f]+/g
            function I(n) {
              return n
            }
            function R(n) {
              throw n
            }
            function F(n, t, e, r) {
              var o
              try {
                n && v((o = n.promise))
                  ? o
                      .call(n)
                      .done(t)
                      .fail(e)
                  : n && v((o = n.then))
                  ? o.call(n, t, e)
                  : t.apply(void 0, [n].slice(r))
              } catch (n) {
                e.apply(void 0, [n])
              }
            }
            ;(M.Callbacks = function(n) {
              n =
                'string' == typeof n
                  ? (function(n) {
                      var t = {}
                      return (
                        M.each(n.match(P) || [], function(n, e) {
                          t[e] = !0
                        }),
                        t
                      )
                    })(n)
                  : M.extend({}, n)
              var t,
                e,
                r,
                o,
                i = [],
                a = [],
                l = -1,
                s = function() {
                  for (o = o || n.once, r = t = !0; a.length; l = -1)
                    for (e = a.shift(); ++l < i.length; )
                      !1 === i[l].apply(e[0], e[1]) &&
                        n.stopOnFalse &&
                        ((l = i.length), (e = !1))
                  n.memory || (e = !1), (t = !1), o && (i = e ? [] : '')
                },
                c = {
                  add: function() {
                    return (
                      i &&
                        (e && !t && ((l = i.length - 1), a.push(e)),
                        (function t(e) {
                          M.each(e, function(e, r) {
                            v(r)
                              ? (n.unique && c.has(r)) || i.push(r)
                              : r && r.length && 'string' !== k(r) && t(r)
                          })
                        })(arguments),
                        e && !t && s()),
                      this
                    )
                  },
                  remove: function() {
                    return (
                      M.each(arguments, function(n, t) {
                        for (var e; (e = M.inArray(t, i, e)) > -1; )
                          i.splice(e, 1), e <= l && l--
                      }),
                      this
                    )
                  },
                  has: function(n) {
                    return n ? M.inArray(n, i) > -1 : i.length > 0
                  },
                  empty: function() {
                    return i && (i = []), this
                  },
                  disable: function() {
                    return (o = a = []), (i = e = ''), this
                  },
                  disabled: function() {
                    return !i
                  },
                  lock: function() {
                    return (o = a = []), e || t || (i = e = ''), this
                  },
                  locked: function() {
                    return !!o
                  },
                  fireWith: function(n, e) {
                    return (
                      o ||
                        ((e = [n, (e = e || []).slice ? e.slice() : e]),
                        a.push(e),
                        t || s()),
                      this
                    )
                  },
                  fire: function() {
                    return c.fireWith(this, arguments), this
                  },
                  fired: function() {
                    return !!r
                  }
                }
              return c
            }),
              M.extend({
                Deferred: function(n) {
                  var t = [
                      [
                        'notify',
                        'progress',
                        M.Callbacks('memory'),
                        M.Callbacks('memory'),
                        2
                      ],
                      [
                        'resolve',
                        'done',
                        M.Callbacks('once memory'),
                        M.Callbacks('once memory'),
                        0,
                        'resolved'
                      ],
                      [
                        'reject',
                        'fail',
                        M.Callbacks('once memory'),
                        M.Callbacks('once memory'),
                        1,
                        'rejected'
                      ]
                    ],
                    r = 'pending',
                    o = {
                      state: function() {
                        return r
                      },
                      always: function() {
                        return i.done(arguments).fail(arguments), this
                      },
                      catch: function(n) {
                        return o.then(null, n)
                      },
                      pipe: function() {
                        var n = arguments
                        return M.Deferred(function(e) {
                          M.each(t, function(t, r) {
                            var o = v(n[r[4]]) && n[r[4]]
                            i[r[1]](function() {
                              var n = o && o.apply(this, arguments)
                              n && v(n.promise)
                                ? n
                                    .promise()
                                    .progress(e.notify)
                                    .done(e.resolve)
                                    .fail(e.reject)
                                : e[r[0] + 'With'](this, o ? [n] : arguments)
                            })
                          }),
                            (n = null)
                        }).promise()
                      },
                      then: function(n, r, o) {
                        var i = 0
                        function a(n, t, r, o) {
                          return function() {
                            var l = this,
                              s = arguments,
                              c = function() {
                                var e, c
                                if (!(n < i)) {
                                  if ((e = r.apply(l, s)) === t.promise())
                                    throw new TypeError(
                                      'Thenable self-resolution'
                                    )
                                  ;(c =
                                    e &&
                                    ('object' == typeof e ||
                                      'function' == typeof e) &&
                                    e.then),
                                    v(c)
                                      ? o
                                        ? c.call(
                                            e,
                                            a(i, t, I, o),
                                            a(i, t, R, o)
                                          )
                                        : (i++,
                                          c.call(
                                            e,
                                            a(i, t, I, o),
                                            a(i, t, R, o),
                                            a(i, t, I, t.notifyWith)
                                          ))
                                      : (r !== I && ((l = void 0), (s = [e])),
                                        (o || t.resolveWith)(l, s))
                                }
                              },
                              u = o
                                ? c
                                : function() {
                                    try {
                                      c()
                                    } catch (e) {
                                      M.Deferred.exceptionHook &&
                                        M.Deferred.exceptionHook(
                                          e,
                                          u.stackTrace
                                        ),
                                        n + 1 >= i &&
                                          (r !== R && ((l = void 0), (s = [e])),
                                          t.rejectWith(l, s))
                                    }
                                  }
                            n
                              ? u()
                              : (M.Deferred.getStackHook &&
                                  (u.stackTrace = M.Deferred.getStackHook()),
                                e.setTimeout(u))
                          }
                        }
                        return M.Deferred(function(e) {
                          t[0][3].add(a(0, e, v(o) ? o : I, e.notifyWith)),
                            t[1][3].add(a(0, e, v(n) ? n : I)),
                            t[2][3].add(a(0, e, v(r) ? r : R))
                        }).promise()
                      },
                      promise: function(n) {
                        return null != n ? M.extend(n, o) : o
                      }
                    },
                    i = {}
                  return (
                    M.each(t, function(n, e) {
                      var a = e[2],
                        l = e[5]
                      ;(o[e[1]] = a.add),
                        l &&
                          a.add(
                            function() {
                              r = l
                            },
                            t[3 - n][2].disable,
                            t[3 - n][3].disable,
                            t[0][2].lock,
                            t[0][3].lock
                          ),
                        a.add(e[3].fire),
                        (i[e[0]] = function() {
                          return (
                            i[e[0] + 'With'](
                              this === i ? void 0 : this,
                              arguments
                            ),
                            this
                          )
                        }),
                        (i[e[0] + 'With'] = a.fireWith)
                    }),
                    o.promise(i),
                    n && n.call(i, i),
                    i
                  )
                },
                when: function(n) {
                  var t = arguments.length,
                    e = t,
                    r = Array(e),
                    o = s.call(arguments),
                    i = M.Deferred(),
                    a = function(n) {
                      return function(e) {
                        ;(r[n] = this),
                          (o[n] = arguments.length > 1 ? s.call(arguments) : e),
                          --t || i.resolveWith(r, o)
                      }
                    }
                  if (
                    t <= 1 &&
                    (F(n, i.done(a(e)).resolve, i.reject, !t),
                    'pending' === i.state() || v(o[e] && o[e].then))
                  )
                    return i.then()
                  for (; e--; ) F(o[e], a(e), i.reject)
                  return i.promise()
                }
              })
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
            ;(M.Deferred.exceptionHook = function(n, t) {
              e.console &&
                e.console.warn &&
                n &&
                B.test(n.name) &&
                e.console.warn(
                  'jQuery.Deferred exception: ' + n.message,
                  n.stack,
                  t
                )
            }),
              (M.readyException = function(n) {
                e.setTimeout(function() {
                  throw n
                })
              })
            var U = M.Deferred()
            function $() {
              a.removeEventListener('DOMContentLoaded', $),
                e.removeEventListener('load', $),
                M.ready()
            }
            ;(M.fn.ready = function(n) {
              return (
                U.then(n).catch(function(n) {
                  M.readyException(n)
                }),
                this
              )
            }),
              M.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(n) {
                  ;(!0 === n ? --M.readyWait : M.isReady) ||
                    ((M.isReady = !0),
                    (!0 !== n && --M.readyWait > 0) || U.resolveWith(a, [M]))
                }
              }),
              (M.ready.then = U.then),
              'complete' === a.readyState ||
              ('loading' !== a.readyState && !a.documentElement.doScroll)
                ? e.setTimeout(M.ready)
                : (a.addEventListener('DOMContentLoaded', $),
                  e.addEventListener('load', $))
            var W = function n(t, e, r, o, i, a, l) {
                var s = 0,
                  c = t.length,
                  u = null == r
                if ('object' === k(r))
                  for (s in ((i = !0), r)) n(t, e, s, r[s], !0, a, l)
                else if (
                  void 0 !== o &&
                  ((i = !0),
                  v(o) || (l = !0),
                  u &&
                    (l
                      ? (e.call(t, o), (e = null))
                      : ((u = e),
                        (e = function(n, t, e) {
                          return u.call(M(n), e)
                        }))),
                  e)
                )
                  for (; s < c; s++)
                    e(t[s], r, l ? o : o.call(t[s], s, e(t[s], r)))
                return i ? t : u ? e.call(t) : c ? e(t[0], r) : a
              },
              Y = /^-ms-/,
              V = /-([a-z])/g
            function X(n, t) {
              return t.toUpperCase()
            }
            function Z(n) {
              return n.replace(Y, 'ms-').replace(V, X)
            }
            var G = function(n) {
              return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
            }
            function J() {
              this.expando = M.expando + J.uid++
            }
            ;(J.uid = 1),
              (J.prototype = {
                cache: function(n) {
                  var t = n[this.expando]
                  return (
                    t ||
                      ((t = {}),
                      G(n) &&
                        (n.nodeType
                          ? (n[this.expando] = t)
                          : Object.defineProperty(n, this.expando, {
                              value: t,
                              configurable: !0
                            }))),
                    t
                  )
                },
                set: function(n, t, e) {
                  var r,
                    o = this.cache(n)
                  if ('string' == typeof t) o[Z(t)] = e
                  else for (r in t) o[Z(r)] = t[r]
                  return o
                },
                get: function(n, t) {
                  return void 0 === t
                    ? this.cache(n)
                    : n[this.expando] && n[this.expando][Z(t)]
                },
                access: function(n, t, e) {
                  return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === e)
                    ? this.get(n, t)
                    : (this.set(n, t, e), void 0 !== e ? e : t)
                },
                remove: function(n, t) {
                  var e,
                    r = n[this.expando]
                  if (void 0 !== r) {
                    if (void 0 !== t) {
                      e = (t = Array.isArray(t)
                        ? t.map(Z)
                        : (t = Z(t)) in r
                        ? [t]
                        : t.match(P) || []).length
                      for (; e--; ) delete r[t[e]]
                    }
                    ;(void 0 === t || M.isEmptyObject(r)) &&
                      (n.nodeType
                        ? (n[this.expando] = void 0)
                        : delete n[this.expando])
                  }
                },
                hasData: function(n) {
                  var t = n[this.expando]
                  return void 0 !== t && !M.isEmptyObject(t)
                }
              })
            var Q = new J(),
              K = new J(),
              nn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              tn = /[A-Z]/g
            function en(n, t, e) {
              var r
              if (void 0 === e && 1 === n.nodeType)
                if (
                  ((r = 'data-' + t.replace(tn, '-$&').toLowerCase()),
                  'string' == typeof (e = n.getAttribute(r)))
                ) {
                  try {
                    e = (function(n) {
                      return (
                        'true' === n ||
                        ('false' !== n &&
                          ('null' === n
                            ? null
                            : n === +n + ''
                            ? +n
                            : nn.test(n)
                            ? JSON.parse(n)
                            : n))
                      )
                    })(e)
                  } catch (n) {}
                  K.set(n, t, e)
                } else e = void 0
              return e
            }
            M.extend({
              hasData: function(n) {
                return K.hasData(n) || Q.hasData(n)
              },
              data: function(n, t, e) {
                return K.access(n, t, e)
              },
              removeData: function(n, t) {
                K.remove(n, t)
              },
              _data: function(n, t, e) {
                return Q.access(n, t, e)
              },
              _removeData: function(n, t) {
                Q.remove(n, t)
              }
            }),
              M.fn.extend({
                data: function(n, t) {
                  var e,
                    r,
                    o,
                    i = this[0],
                    a = i && i.attributes
                  if (void 0 === n) {
                    if (
                      this.length &&
                      ((o = K.get(i)),
                      1 === i.nodeType && !Q.get(i, 'hasDataAttrs'))
                    ) {
                      for (e = a.length; e--; )
                        a[e] &&
                          0 === (r = a[e].name).indexOf('data-') &&
                          ((r = Z(r.slice(5))), en(i, r, o[r]))
                      Q.set(i, 'hasDataAttrs', !0)
                    }
                    return o
                  }
                  return 'object' == typeof n
                    ? this.each(function() {
                        K.set(this, n)
                      })
                    : W(
                        this,
                        function(t) {
                          var e
                          if (i && void 0 === t)
                            return void 0 !== (e = K.get(i, n))
                              ? e
                              : void 0 !== (e = en(i, n))
                              ? e
                              : void 0
                          this.each(function() {
                            K.set(this, n, t)
                          })
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                      )
                },
                removeData: function(n) {
                  return this.each(function() {
                    K.remove(this, n)
                  })
                }
              }),
              M.extend({
                queue: function(n, t, e) {
                  var r
                  if (n)
                    return (
                      (t = (t || 'fx') + 'queue'),
                      (r = Q.get(n, t)),
                      e &&
                        (!r || Array.isArray(e)
                          ? (r = Q.access(n, t, M.makeArray(e)))
                          : r.push(e)),
                      r || []
                    )
                },
                dequeue: function(n, t) {
                  t = t || 'fx'
                  var e = M.queue(n, t),
                    r = e.length,
                    o = e.shift(),
                    i = M._queueHooks(n, t)
                  'inprogress' === o && ((o = e.shift()), r--),
                    o &&
                      ('fx' === t && e.unshift('inprogress'),
                      delete i.stop,
                      o.call(
                        n,
                        function() {
                          M.dequeue(n, t)
                        },
                        i
                      )),
                    !r && i && i.empty.fire()
                },
                _queueHooks: function(n, t) {
                  var e = t + 'queueHooks'
                  return (
                    Q.get(n, e) ||
                    Q.access(n, e, {
                      empty: M.Callbacks('once memory').add(function() {
                        Q.remove(n, [t + 'queue', e])
                      })
                    })
                  )
                }
              }),
              M.fn.extend({
                queue: function(n, t) {
                  var e = 2
                  return (
                    'string' != typeof n && ((t = n), (n = 'fx'), e--),
                    arguments.length < e
                      ? M.queue(this[0], n)
                      : void 0 === t
                      ? this
                      : this.each(function() {
                          var e = M.queue(this, n, t)
                          M._queueHooks(this, n),
                            'fx' === n &&
                              'inprogress' !== e[0] &&
                              M.dequeue(this, n)
                        })
                  )
                },
                dequeue: function(n) {
                  return this.each(function() {
                    M.dequeue(this, n)
                  })
                },
                clearQueue: function(n) {
                  return this.queue(n || 'fx', [])
                },
                promise: function(n, t) {
                  var e,
                    r = 1,
                    o = M.Deferred(),
                    i = this,
                    a = this.length,
                    l = function() {
                      --r || o.resolveWith(i, [i])
                    }
                  for (
                    'string' != typeof n && ((t = n), (n = void 0)),
                      n = n || 'fx';
                    a--;

                  )
                    (e = Q.get(i[a], n + 'queueHooks')) &&
                      e.empty &&
                      (r++, e.empty.add(l))
                  return l(), o.promise(t)
                }
              })
            var rn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              on = new RegExp('^(?:([+-])=|)(' + rn + ')([a-z%]*)$', 'i'),
              an = ['Top', 'Right', 'Bottom', 'Left'],
              ln = a.documentElement,
              sn = function(n) {
                return M.contains(n.ownerDocument, n)
              },
              cn = { composed: !0 }
            ln.getRootNode &&
              (sn = function(n) {
                return (
                  M.contains(n.ownerDocument, n) ||
                  n.getRootNode(cn) === n.ownerDocument
                )
              })
            var un = function(n, t) {
                return (
                  'none' === (n = t || n).style.display ||
                  ('' === n.style.display &&
                    sn(n) &&
                    'none' === M.css(n, 'display'))
                )
              },
              dn = function(n, t, e, r) {
                var o,
                  i,
                  a = {}
                for (i in t) (a[i] = n.style[i]), (n.style[i] = t[i])
                for (i in ((o = e.apply(n, r || [])), t)) n.style[i] = a[i]
                return o
              }
            function fn(n, t, e, r) {
              var o,
                i,
                a = 20,
                l = r
                  ? function() {
                      return r.cur()
                    }
                  : function() {
                      return M.css(n, t, '')
                    },
                s = l(),
                c = (e && e[3]) || (M.cssNumber[t] ? '' : 'px'),
                u =
                  n.nodeType &&
                  (M.cssNumber[t] || ('px' !== c && +s)) &&
                  on.exec(M.css(n, t))
              if (u && u[3] !== c) {
                for (s /= 2, c = c || u[3], u = +s || 1; a--; )
                  M.style(n, t, u + c),
                    (1 - i) * (1 - (i = l() / s || 0.5)) <= 0 && (a = 0),
                    (u /= i)
                ;(u *= 2), M.style(n, t, u + c), (e = e || [])
              }
              return (
                e &&
                  ((u = +u || +s || 0),
                  (o = e[1] ? u + (e[1] + 1) * e[2] : +e[2]),
                  r && ((r.unit = c), (r.start = u), (r.end = o))),
                o
              )
            }
            var pn = {}
            function mn(n) {
              var t,
                e = n.ownerDocument,
                r = n.nodeName,
                o = pn[r]
              return (
                o ||
                ((t = e.body.appendChild(e.createElement(r))),
                (o = M.css(t, 'display')),
                t.parentNode.removeChild(t),
                'none' === o && (o = 'block'),
                (pn[r] = o),
                o)
              )
            }
            function hn(n, t) {
              for (var e, r, o = [], i = 0, a = n.length; i < a; i++)
                (r = n[i]).style &&
                  ((e = r.style.display),
                  t
                    ? ('none' === e &&
                        ((o[i] = Q.get(r, 'display') || null),
                        o[i] || (r.style.display = '')),
                      '' === r.style.display && un(r) && (o[i] = mn(r)))
                    : 'none' !== e && ((o[i] = 'none'), Q.set(r, 'display', e)))
              for (i = 0; i < a; i++)
                null != o[i] && (n[i].style.display = o[i])
              return n
            }
            M.fn.extend({
              show: function() {
                return hn(this, !0)
              },
              hide: function() {
                return hn(this)
              },
              toggle: function(n) {
                return 'boolean' == typeof n
                  ? n
                    ? this.show()
                    : this.hide()
                  : this.each(function() {
                      un(this) ? M(this).show() : M(this).hide()
                    })
              }
            })
            var gn = /^(?:checkbox|radio)$/i,
              bn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              vn = /^$|^module$|\/(?:java|ecma)script/i,
              xn = {
                option: [1, "<select multiple='multiple'>", '</select>'],
                thead: [1, '<table>', '</table>'],
                col: [2, '<table><colgroup>', '</colgroup></table>'],
                tr: [2, '<table><tbody>', '</tbody></table>'],
                td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                _default: [0, '', '']
              }
            function yn(n, t) {
              var e
              return (
                (e =
                  void 0 !== n.getElementsByTagName
                    ? n.getElementsByTagName(t || '*')
                    : void 0 !== n.querySelectorAll
                    ? n.querySelectorAll(t || '*')
                    : []),
                void 0 === t || (t && j(n, t)) ? M.merge([n], e) : e
              )
            }
            function wn(n, t) {
              for (var e = 0, r = n.length; e < r; e++)
                Q.set(n[e], 'globalEval', !t || Q.get(t[e], 'globalEval'))
            }
            ;(xn.optgroup = xn.option),
              (xn.tbody = xn.tfoot = xn.colgroup = xn.caption = xn.thead),
              (xn.th = xn.td)
            var kn,
              Mn,
              En = /<|&#?\w+;/
            function _n(n, t, e, r, o) {
              for (
                var i,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d = t.createDocumentFragment(),
                  f = [],
                  p = 0,
                  m = n.length;
                p < m;
                p++
              )
                if ((i = n[p]) || 0 === i)
                  if ('object' === k(i)) M.merge(f, i.nodeType ? [i] : i)
                  else if (En.test(i)) {
                    for (
                      a = a || d.appendChild(t.createElement('div')),
                        l = (bn.exec(i) || ['', ''])[1].toLowerCase(),
                        s = xn[l] || xn._default,
                        a.innerHTML = s[1] + M.htmlPrefilter(i) + s[2],
                        u = s[0];
                      u--;

                    )
                      a = a.lastChild
                    M.merge(f, a.childNodes),
                      ((a = d.firstChild).textContent = '')
                  } else f.push(t.createTextNode(i))
              for (d.textContent = '', p = 0; (i = f[p++]); )
                if (r && M.inArray(i, r) > -1) o && o.push(i)
                else if (
                  ((c = sn(i)),
                  (a = yn(d.appendChild(i), 'script')),
                  c && wn(a),
                  e)
                )
                  for (u = 0; (i = a[u++]); ) vn.test(i.type || '') && e.push(i)
              return d
            }
            ;(kn = a
              .createDocumentFragment()
              .appendChild(a.createElement('div'))),
              (Mn = a.createElement('input')).setAttribute('type', 'radio'),
              Mn.setAttribute('checked', 'checked'),
              Mn.setAttribute('name', 't'),
              kn.appendChild(Mn),
              (b.checkClone = kn.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (kn.innerHTML = '<textarea>x</textarea>'),
              (b.noCloneChecked = !!kn.cloneNode(!0).lastChild.defaultValue)
            var Sn = /^key/,
              Tn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
              Nn = /^([^.]*)(?:\.(.+)|)/
            function Cn() {
              return !0
            }
            function jn() {
              return !1
            }
            function An(n, t) {
              return (
                (n ===
                  (function() {
                    try {
                      return a.activeElement
                    } catch (n) {}
                  })()) ==
                ('focus' === t)
              )
            }
            function On(n, t, e, r, o, i) {
              var a, l
              if ('object' == typeof t) {
                for (l in ('string' != typeof e && ((r = r || e), (e = void 0)),
                t))
                  On(n, l, e, r, t[l], i)
                return n
              }
              if (
                (null == r && null == o
                  ? ((o = e), (r = e = void 0))
                  : null == o &&
                    ('string' == typeof e
                      ? ((o = r), (r = void 0))
                      : ((o = r), (r = e), (e = void 0))),
                !1 === o)
              )
                o = jn
              else if (!o) return n
              return (
                1 === i &&
                  ((a = o),
                  ((o = function(n) {
                    return M().off(n), a.apply(this, arguments)
                  }).guid = a.guid || (a.guid = M.guid++))),
                n.each(function() {
                  M.event.add(this, t, o, r, e)
                })
              )
            }
            function zn(n, t, e) {
              e
                ? (Q.set(n, t, !1),
                  M.event.add(n, t, {
                    namespace: !1,
                    handler: function(n) {
                      var r,
                        o,
                        i = Q.get(this, t)
                      if (1 & n.isTrigger && this[t]) {
                        if (i.length)
                          (M.event.special[t] || {}).delegateType &&
                            n.stopPropagation()
                        else if (
                          ((i = s.call(arguments)),
                          Q.set(this, t, i),
                          (r = e(this, t)),
                          this[t](),
                          i !== (o = Q.get(this, t)) || r
                            ? Q.set(this, t, !1)
                            : (o = {}),
                          i !== o)
                        )
                          return (
                            n.stopImmediatePropagation(),
                            n.preventDefault(),
                            o.value
                          )
                      } else
                        i.length &&
                          (Q.set(this, t, {
                            value: M.event.trigger(
                              M.extend(i[0], M.Event.prototype),
                              i.slice(1),
                              this
                            )
                          }),
                          n.stopImmediatePropagation())
                    }
                  }))
                : void 0 === Q.get(n, t) && M.event.add(n, t, Cn)
            }
            ;(M.event = {
              global: {},
              add: function(n, t, e, r, o) {
                var i,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p,
                  m,
                  h,
                  g = Q.get(n)
                if (g)
                  for (
                    e.handler && ((e = (i = e).handler), (o = i.selector)),
                      o && M.find.matchesSelector(ln, o),
                      e.guid || (e.guid = M.guid++),
                      (s = g.events) || (s = g.events = {}),
                      (a = g.handle) ||
                        (a = g.handle = function(t) {
                          return void 0 !== M && M.event.triggered !== t.type
                            ? M.event.dispatch.apply(n, arguments)
                            : void 0
                        }),
                      c = (t = (t || '').match(P) || ['']).length;
                    c--;

                  )
                    (p = h = (l = Nn.exec(t[c]) || [])[1]),
                      (m = (l[2] || '').split('.').sort()),
                      p &&
                        ((d = M.event.special[p] || {}),
                        (p = (o ? d.delegateType : d.bindType) || p),
                        (d = M.event.special[p] || {}),
                        (u = M.extend(
                          {
                            type: p,
                            origType: h,
                            data: r,
                            handler: e,
                            guid: e.guid,
                            selector: o,
                            needsContext:
                              o && M.expr.match.needsContext.test(o),
                            namespace: m.join('.')
                          },
                          i
                        )),
                        (f = s[p]) ||
                          (((f = s[p] = []).delegateCount = 0),
                          (d.setup && !1 !== d.setup.call(n, r, m, a)) ||
                            (n.addEventListener && n.addEventListener(p, a))),
                        d.add &&
                          (d.add.call(n, u),
                          u.handler.guid || (u.handler.guid = e.guid)),
                        o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        (M.event.global[p] = !0))
              },
              remove: function(n, t, e, r, o) {
                var i,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p,
                  m,
                  h,
                  g = Q.hasData(n) && Q.get(n)
                if (g && (s = g.events)) {
                  for (c = (t = (t || '').match(P) || ['']).length; c--; )
                    if (
                      ((p = h = (l = Nn.exec(t[c]) || [])[1]),
                      (m = (l[2] || '').split('.').sort()),
                      p)
                    ) {
                      for (
                        d = M.event.special[p] || {},
                          f =
                            s[(p = (r ? d.delegateType : d.bindType) || p)] ||
                            [],
                          l =
                            l[2] &&
                            new RegExp(
                              '(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)'
                            ),
                          a = i = f.length;
                        i--;

                      )
                        (u = f[i]),
                          (!o && h !== u.origType) ||
                            (e && e.guid !== u.guid) ||
                            (l && !l.test(u.namespace)) ||
                            (r &&
                              r !== u.selector &&
                              ('**' !== r || !u.selector)) ||
                            (f.splice(i, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(n, u))
                      a &&
                        !f.length &&
                        ((d.teardown &&
                          !1 !== d.teardown.call(n, m, g.handle)) ||
                          M.removeEvent(n, p, g.handle),
                        delete s[p])
                    } else for (p in s) M.event.remove(n, p + t[c], e, r, !0)
                  M.isEmptyObject(s) && Q.remove(n, 'handle events')
                }
              },
              dispatch: function(n) {
                var t,
                  e,
                  r,
                  o,
                  i,
                  a,
                  l = M.event.fix(n),
                  s = new Array(arguments.length),
                  c = (Q.get(this, 'events') || {})[l.type] || [],
                  u = M.event.special[l.type] || {}
                for (s[0] = l, t = 1; t < arguments.length; t++)
                  s[t] = arguments[t]
                if (
                  ((l.delegateTarget = this),
                  !u.preDispatch || !1 !== u.preDispatch.call(this, l))
                ) {
                  for (
                    a = M.event.handlers.call(this, l, c), t = 0;
                    (o = a[t++]) && !l.isPropagationStopped();

                  )
                    for (
                      l.currentTarget = o.elem, e = 0;
                      (i = o.handlers[e++]) &&
                      !l.isImmediatePropagationStopped();

                    )
                      (l.rnamespace &&
                        !1 !== i.namespace &&
                        !l.rnamespace.test(i.namespace)) ||
                        ((l.handleObj = i),
                        (l.data = i.data),
                        void 0 !==
                          (r = (
                            (M.event.special[i.origType] || {}).handle ||
                            i.handler
                          ).apply(o.elem, s)) &&
                          !1 === (l.result = r) &&
                          (l.preventDefault(), l.stopPropagation()))
                  return (
                    u.postDispatch && u.postDispatch.call(this, l), l.result
                  )
                }
              },
              handlers: function(n, t) {
                var e,
                  r,
                  o,
                  i,
                  a,
                  l = [],
                  s = t.delegateCount,
                  c = n.target
                if (s && c.nodeType && !('click' === n.type && n.button >= 1))
                  for (; c !== this; c = c.parentNode || this)
                    if (
                      1 === c.nodeType &&
                      ('click' !== n.type || !0 !== c.disabled)
                    ) {
                      for (i = [], a = {}, e = 0; e < s; e++)
                        void 0 === a[(o = (r = t[e]).selector + ' ')] &&
                          (a[o] = r.needsContext
                            ? M(o, this).index(c) > -1
                            : M.find(o, this, null, [c]).length),
                          a[o] && i.push(r)
                      i.length && l.push({ elem: c, handlers: i })
                    }
                return (
                  (c = this),
                  s < t.length && l.push({ elem: c, handlers: t.slice(s) }),
                  l
                )
              },
              addProp: function(n, t) {
                Object.defineProperty(M.Event.prototype, n, {
                  enumerable: !0,
                  configurable: !0,
                  get: v(t)
                    ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                      }
                    : function() {
                        if (this.originalEvent) return this.originalEvent[n]
                      },
                  set: function(t) {
                    Object.defineProperty(this, n, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                    })
                  }
                })
              },
              fix: function(n) {
                return n[M.expando] ? n : new M.Event(n)
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function(n) {
                    var t = this || n
                    return (
                      gn.test(t.type) &&
                        t.click &&
                        j(t, 'input') &&
                        zn(t, 'click', Cn),
                      !1
                    )
                  },
                  trigger: function(n) {
                    var t = this || n
                    return (
                      gn.test(t.type) &&
                        t.click &&
                        j(t, 'input') &&
                        zn(t, 'click'),
                      !0
                    )
                  },
                  _default: function(n) {
                    var t = n.target
                    return (
                      (gn.test(t.type) &&
                        t.click &&
                        j(t, 'input') &&
                        Q.get(t, 'click')) ||
                      j(t, 'a')
                    )
                  }
                },
                beforeunload: {
                  postDispatch: function(n) {
                    void 0 !== n.result &&
                      n.originalEvent &&
                      (n.originalEvent.returnValue = n.result)
                  }
                }
              }
            }),
              (M.removeEvent = function(n, t, e) {
                n.removeEventListener && n.removeEventListener(t, e)
              }),
              (M.Event = function(n, t) {
                if (!(this instanceof M.Event)) return new M.Event(n, t)
                n && n.type
                  ? ((this.originalEvent = n),
                    (this.type = n.type),
                    (this.isDefaultPrevented =
                      n.defaultPrevented ||
                      (void 0 === n.defaultPrevented && !1 === n.returnValue)
                        ? Cn
                        : jn),
                    (this.target =
                      n.target && 3 === n.target.nodeType
                        ? n.target.parentNode
                        : n.target),
                    (this.currentTarget = n.currentTarget),
                    (this.relatedTarget = n.relatedTarget))
                  : (this.type = n),
                  t && M.extend(this, t),
                  (this.timeStamp = (n && n.timeStamp) || Date.now()),
                  (this[M.expando] = !0)
              }),
              (M.Event.prototype = {
                constructor: M.Event,
                isDefaultPrevented: jn,
                isPropagationStopped: jn,
                isImmediatePropagationStopped: jn,
                isSimulated: !1,
                preventDefault: function() {
                  var n = this.originalEvent
                  ;(this.isDefaultPrevented = Cn),
                    n && !this.isSimulated && n.preventDefault()
                },
                stopPropagation: function() {
                  var n = this.originalEvent
                  ;(this.isPropagationStopped = Cn),
                    n && !this.isSimulated && n.stopPropagation()
                },
                stopImmediatePropagation: function() {
                  var n = this.originalEvent
                  ;(this.isImmediatePropagationStopped = Cn),
                    n && !this.isSimulated && n.stopImmediatePropagation(),
                    this.stopPropagation()
                }
              }),
              M.each(
                {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: function(n) {
                    var t = n.button
                    return null == n.which && Sn.test(n.type)
                      ? null != n.charCode
                        ? n.charCode
                        : n.keyCode
                      : !n.which && void 0 !== t && Tn.test(n.type)
                      ? 1 & t
                        ? 1
                        : 2 & t
                        ? 3
                        : 4 & t
                        ? 2
                        : 0
                      : n.which
                  }
                },
                M.event.addProp
              ),
              M.each({ focus: 'focusin', blur: 'focusout' }, function(n, t) {
                M.event.special[n] = {
                  setup: function() {
                    return zn(this, n, An), !1
                  },
                  trigger: function() {
                    return zn(this, n), !0
                  },
                  delegateType: t
                }
              }),
              M.each(
                {
                  mouseenter: 'mouseover',
                  mouseleave: 'mouseout',
                  pointerenter: 'pointerover',
                  pointerleave: 'pointerout'
                },
                function(n, t) {
                  M.event.special[n] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(n) {
                      var e,
                        r = this,
                        o = n.relatedTarget,
                        i = n.handleObj
                      return (
                        (o && (o === r || M.contains(r, o))) ||
                          ((n.type = i.origType),
                          (e = i.handler.apply(this, arguments)),
                          (n.type = t)),
                        e
                      )
                    }
                  }
                }
              ),
              M.fn.extend({
                on: function(n, t, e, r) {
                  return On(this, n, t, e, r)
                },
                one: function(n, t, e, r) {
                  return On(this, n, t, e, r, 1)
                },
                off: function(n, t, e) {
                  var r, o
                  if (n && n.preventDefault && n.handleObj)
                    return (
                      (r = n.handleObj),
                      M(n.delegateTarget).off(
                        r.namespace
                          ? r.origType + '.' + r.namespace
                          : r.origType,
                        r.selector,
                        r.handler
                      ),
                      this
                    )
                  if ('object' == typeof n) {
                    for (o in n) this.off(o, t, n[o])
                    return this
                  }
                  return (
                    (!1 !== t && 'function' != typeof t) ||
                      ((e = t), (t = void 0)),
                    !1 === e && (e = jn),
                    this.each(function() {
                      M.event.remove(this, n, e, t)
                    })
                  )
                }
              })
            var Dn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
              Ln = /<script|<style|<link/i,
              qn = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Hn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            function Pn(n, t) {
              return (
                (j(n, 'table') &&
                  j(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                  M(n).children('tbody')[0]) ||
                n
              )
            }
            function In(n) {
              return (
                (n.type = (null !== n.getAttribute('type')) + '/' + n.type), n
              )
            }
            function Rn(n) {
              return (
                'true/' === (n.type || '').slice(0, 5)
                  ? (n.type = n.type.slice(5))
                  : n.removeAttribute('type'),
                n
              )
            }
            function Fn(n, t) {
              var e, r, o, i, a, l, s, c
              if (1 === t.nodeType) {
                if (
                  Q.hasData(n) &&
                  ((i = Q.access(n)), (a = Q.set(t, i)), (c = i.events))
                )
                  for (o in (delete a.handle, (a.events = {}), c))
                    for (e = 0, r = c[o].length; e < r; e++)
                      M.event.add(t, o, c[o][e])
                K.hasData(n) &&
                  ((l = K.access(n)), (s = M.extend({}, l)), K.set(t, s))
              }
            }
            function Bn(n, t) {
              var e = t.nodeName.toLowerCase()
              'input' === e && gn.test(n.type)
                ? (t.checked = n.checked)
                : ('input' !== e && 'textarea' !== e) ||
                  (t.defaultValue = n.defaultValue)
            }
            function Un(n, t, e, r) {
              t = c.apply([], t)
              var o,
                i,
                a,
                l,
                s,
                u,
                d = 0,
                f = n.length,
                p = f - 1,
                m = t[0],
                h = v(m)
              if (
                h ||
                (f > 1 && 'string' == typeof m && !b.checkClone && qn.test(m))
              )
                return n.each(function(o) {
                  var i = n.eq(o)
                  h && (t[0] = m.call(this, o, i.html())), Un(i, t, e, r)
                })
              if (
                f &&
                ((i = (o = _n(t, n[0].ownerDocument, !1, n, r)).firstChild),
                1 === o.childNodes.length && (o = i),
                i || r)
              ) {
                for (l = (a = M.map(yn(o, 'script'), In)).length; d < f; d++)
                  (s = o),
                    d !== p &&
                      ((s = M.clone(s, !0, !0)),
                      l && M.merge(a, yn(s, 'script'))),
                    e.call(n[d], s, d)
                if (l)
                  for (
                    u = a[a.length - 1].ownerDocument, M.map(a, Rn), d = 0;
                    d < l;
                    d++
                  )
                    (s = a[d]),
                      vn.test(s.type || '') &&
                        !Q.access(s, 'globalEval') &&
                        M.contains(u, s) &&
                        (s.src && 'module' !== (s.type || '').toLowerCase()
                          ? M._evalUrl &&
                            !s.noModule &&
                            M._evalUrl(s.src, {
                              nonce: s.nonce || s.getAttribute('nonce')
                            })
                          : w(s.textContent.replace(Hn, ''), s, u))
              }
              return n
            }
            function $n(n, t, e) {
              for (
                var r, o = t ? M.filter(t, n) : n, i = 0;
                null != (r = o[i]);
                i++
              )
                e || 1 !== r.nodeType || M.cleanData(yn(r)),
                  r.parentNode &&
                    (e && sn(r) && wn(yn(r, 'script')),
                    r.parentNode.removeChild(r))
              return n
            }
            M.extend({
              htmlPrefilter: function(n) {
                return n.replace(Dn, '<$1></$2>')
              },
              clone: function(n, t, e) {
                var r,
                  o,
                  i,
                  a,
                  l = n.cloneNode(!0),
                  s = sn(n)
                if (
                  !(
                    b.noCloneChecked ||
                    (1 !== n.nodeType && 11 !== n.nodeType) ||
                    M.isXMLDoc(n)
                  )
                )
                  for (a = yn(l), r = 0, o = (i = yn(n)).length; r < o; r++)
                    Bn(i[r], a[r])
                if (t)
                  if (e)
                    for (
                      i = i || yn(n), a = a || yn(l), r = 0, o = i.length;
                      r < o;
                      r++
                    )
                      Fn(i[r], a[r])
                  else Fn(n, l)
                return (
                  (a = yn(l, 'script')).length > 0 &&
                    wn(a, !s && yn(n, 'script')),
                  l
                )
              },
              cleanData: function(n) {
                for (
                  var t, e, r, o = M.event.special, i = 0;
                  void 0 !== (e = n[i]);
                  i++
                )
                  if (G(e)) {
                    if ((t = e[Q.expando])) {
                      if (t.events)
                        for (r in t.events)
                          o[r]
                            ? M.event.remove(e, r)
                            : M.removeEvent(e, r, t.handle)
                      e[Q.expando] = void 0
                    }
                    e[K.expando] && (e[K.expando] = void 0)
                  }
              }
            }),
              M.fn.extend({
                detach: function(n) {
                  return $n(this, n, !0)
                },
                remove: function(n) {
                  return $n(this, n)
                },
                text: function(n) {
                  return W(
                    this,
                    function(n) {
                      return void 0 === n
                        ? M.text(this)
                        : this.empty().each(function() {
                            ;(1 !== this.nodeType &&
                              11 !== this.nodeType &&
                              9 !== this.nodeType) ||
                              (this.textContent = n)
                          })
                    },
                    null,
                    n,
                    arguments.length
                  )
                },
                append: function() {
                  return Un(this, arguments, function(n) {
                    ;(1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      Pn(this, n).appendChild(n)
                  })
                },
                prepend: function() {
                  return Un(this, arguments, function(n) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = Pn(this, n)
                      t.insertBefore(n, t.firstChild)
                    }
                  })
                },
                before: function() {
                  return Un(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                  })
                },
                after: function() {
                  return Un(this, arguments, function(n) {
                    this.parentNode &&
                      this.parentNode.insertBefore(n, this.nextSibling)
                  })
                },
                empty: function() {
                  for (var n, t = 0; null != (n = this[t]); t++)
                    1 === n.nodeType &&
                      (M.cleanData(yn(n, !1)), (n.textContent = ''))
                  return this
                },
                clone: function(n, t) {
                  return (
                    (n = null != n && n),
                    (t = null == t ? n : t),
                    this.map(function() {
                      return M.clone(this, n, t)
                    })
                  )
                },
                html: function(n) {
                  return W(
                    this,
                    function(n) {
                      var t = this[0] || {},
                        e = 0,
                        r = this.length
                      if (void 0 === n && 1 === t.nodeType) return t.innerHTML
                      if (
                        'string' == typeof n &&
                        !Ln.test(n) &&
                        !xn[(bn.exec(n) || ['', ''])[1].toLowerCase()]
                      ) {
                        n = M.htmlPrefilter(n)
                        try {
                          for (; e < r; e++)
                            1 === (t = this[e] || {}).nodeType &&
                              (M.cleanData(yn(t, !1)), (t.innerHTML = n))
                          t = 0
                        } catch (n) {}
                      }
                      t && this.empty().append(n)
                    },
                    null,
                    n,
                    arguments.length
                  )
                },
                replaceWith: function() {
                  var n = []
                  return Un(
                    this,
                    arguments,
                    function(t) {
                      var e = this.parentNode
                      M.inArray(this, n) < 0 &&
                        (M.cleanData(yn(this)), e && e.replaceChild(t, this))
                    },
                    n
                  )
                }
              }),
              M.each(
                {
                  appendTo: 'append',
                  prependTo: 'prepend',
                  insertBefore: 'before',
                  insertAfter: 'after',
                  replaceAll: 'replaceWith'
                },
                function(n, t) {
                  M.fn[n] = function(n) {
                    for (
                      var e, r = [], o = M(n), i = o.length - 1, a = 0;
                      a <= i;
                      a++
                    )
                      (e = a === i ? this : this.clone(!0)),
                        M(o[a])[t](e),
                        u.apply(r, e.get())
                    return this.pushStack(r)
                  }
                }
              )
            var Wn = new RegExp('^(' + rn + ')(?!px)[a-z%]+$', 'i'),
              Yn = function(n) {
                var t = n.ownerDocument.defaultView
                return (t && t.opener) || (t = e), t.getComputedStyle(n)
              },
              Vn = new RegExp(an.join('|'), 'i')
            function Xn(n, t, e) {
              var r,
                o,
                i,
                a,
                l = n.style
              return (
                (e = e || Yn(n)) &&
                  ('' !== (a = e.getPropertyValue(t) || e[t]) ||
                    sn(n) ||
                    (a = M.style(n, t)),
                  !b.pixelBoxStyles() &&
                    Wn.test(a) &&
                    Vn.test(t) &&
                    ((r = l.width),
                    (o = l.minWidth),
                    (i = l.maxWidth),
                    (l.minWidth = l.maxWidth = l.width = a),
                    (a = e.width),
                    (l.width = r),
                    (l.minWidth = o),
                    (l.maxWidth = i))),
                void 0 !== a ? a + '' : a
              )
            }
            function Zn(n, t) {
              return {
                get: function() {
                  if (!n()) return (this.get = t).apply(this, arguments)
                  delete this.get
                }
              }
            }
            !(function() {
              function n() {
                if (u) {
                  ;(c.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (u.style.cssText =
                      'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    ln.appendChild(c).appendChild(u)
                  var n = e.getComputedStyle(u)
                  ;(r = '1%' !== n.top),
                    (s = 12 === t(n.marginLeft)),
                    (u.style.right = '60%'),
                    (l = 36 === t(n.right)),
                    (o = 36 === t(n.width)),
                    (u.style.position = 'absolute'),
                    (i = 12 === t(u.offsetWidth / 3)),
                    ln.removeChild(c),
                    (u = null)
                }
              }
              function t(n) {
                return Math.round(parseFloat(n))
              }
              var r,
                o,
                i,
                l,
                s,
                c = a.createElement('div'),
                u = a.createElement('div')
              u.style &&
                ((u.style.backgroundClip = 'content-box'),
                (u.cloneNode(!0).style.backgroundClip = ''),
                (b.clearCloneStyle = 'content-box' === u.style.backgroundClip),
                M.extend(b, {
                  boxSizingReliable: function() {
                    return n(), o
                  },
                  pixelBoxStyles: function() {
                    return n(), l
                  },
                  pixelPosition: function() {
                    return n(), r
                  },
                  reliableMarginLeft: function() {
                    return n(), s
                  },
                  scrollboxSize: function() {
                    return n(), i
                  }
                }))
            })()
            var Gn = ['Webkit', 'Moz', 'ms'],
              Jn = a.createElement('div').style,
              Qn = {}
            function Kn(n) {
              return (
                M.cssProps[n] ||
                Qn[n] ||
                (n in Jn
                  ? n
                  : (Qn[n] =
                      (function(n) {
                        for (
                          var t = n[0].toUpperCase() + n.slice(1),
                            e = Gn.length;
                          e--;

                        )
                          if ((n = Gn[e] + t) in Jn) return n
                      })(n) || n))
              )
            }
            var nt = /^(none|table(?!-c[ea]).+)/,
              tt = /^--/,
              et = {
                position: 'absolute',
                visibility: 'hidden',
                display: 'block'
              },
              rt = { letterSpacing: '0', fontWeight: '400' }
            function ot(n, t, e) {
              var r = on.exec(t)
              return r ? Math.max(0, r[2] - (e || 0)) + (r[3] || 'px') : t
            }
            function it(n, t, e, r, o, i) {
              var a = 'width' === t ? 1 : 0,
                l = 0,
                s = 0
              if (e === (r ? 'border' : 'content')) return 0
              for (; a < 4; a += 2)
                'margin' === e && (s += M.css(n, e + an[a], !0, o)),
                  r
                    ? ('content' === e &&
                        (s -= M.css(n, 'padding' + an[a], !0, o)),
                      'margin' !== e &&
                        (s -= M.css(n, 'border' + an[a] + 'Width', !0, o)))
                    : ((s += M.css(n, 'padding' + an[a], !0, o)),
                      'padding' !== e
                        ? (s += M.css(n, 'border' + an[a] + 'Width', !0, o))
                        : (l += M.css(n, 'border' + an[a] + 'Width', !0, o)))
              return (
                !r &&
                  i >= 0 &&
                  (s +=
                    Math.max(
                      0,
                      Math.ceil(
                        n['offset' + t[0].toUpperCase() + t.slice(1)] -
                          i -
                          s -
                          l -
                          0.5
                      )
                    ) || 0),
                s
              )
            }
            function at(n, t, e) {
              var r = Yn(n),
                o =
                  (!b.boxSizingReliable() || e) &&
                  'border-box' === M.css(n, 'boxSizing', !1, r),
                i = o,
                a = Xn(n, t, r),
                l = 'offset' + t[0].toUpperCase() + t.slice(1)
              if (Wn.test(a)) {
                if (!e) return a
                a = 'auto'
              }
              return (
                ((!b.boxSizingReliable() && o) ||
                  'auto' === a ||
                  (!parseFloat(a) &&
                    'inline' === M.css(n, 'display', !1, r))) &&
                  n.getClientRects().length &&
                  ((o = 'border-box' === M.css(n, 'boxSizing', !1, r)),
                  (i = l in n) && (a = n[l])),
                (a = parseFloat(a) || 0) +
                  it(n, t, e || (o ? 'border' : 'content'), i, r, a) +
                  'px'
              )
            }
            function lt(n, t, e, r, o) {
              return new lt.prototype.init(n, t, e, r, o)
            }
            M.extend({
              cssHooks: {
                opacity: {
                  get: function(n, t) {
                    if (t) {
                      var e = Xn(n, 'opacity')
                      return '' === e ? '1' : e
                    }
                  }
                }
              },
              cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
              },
              cssProps: {},
              style: function(n, t, e, r) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                  var o,
                    i,
                    a,
                    l = Z(t),
                    s = tt.test(t),
                    c = n.style
                  if (
                    (s || (t = Kn(l)),
                    (a = M.cssHooks[t] || M.cssHooks[l]),
                    void 0 === e)
                  )
                    return a && 'get' in a && void 0 !== (o = a.get(n, !1, r))
                      ? o
                      : c[t]
                  'string' === (i = typeof e) &&
                    (o = on.exec(e)) &&
                    o[1] &&
                    ((e = fn(n, t, o)), (i = 'number')),
                    null != e &&
                      e == e &&
                      ('number' !== i ||
                        s ||
                        (e += (o && o[3]) || (M.cssNumber[l] ? '' : 'px')),
                      b.clearCloneStyle ||
                        '' !== e ||
                        0 !== t.indexOf('background') ||
                        (c[t] = 'inherit'),
                      (a && 'set' in a && void 0 === (e = a.set(n, e, r))) ||
                        (s ? c.setProperty(t, e) : (c[t] = e)))
                }
              },
              css: function(n, t, e, r) {
                var o,
                  i,
                  a,
                  l = Z(t)
                return (
                  tt.test(t) || (t = Kn(l)),
                  (a = M.cssHooks[t] || M.cssHooks[l]) &&
                    'get' in a &&
                    (o = a.get(n, !0, e)),
                  void 0 === o && (o = Xn(n, t, r)),
                  'normal' === o && t in rt && (o = rt[t]),
                  '' === e || e
                    ? ((i = parseFloat(o)),
                      !0 === e || isFinite(i) ? i || 0 : o)
                    : o
                )
              }
            }),
              M.each(['height', 'width'], function(n, t) {
                M.cssHooks[t] = {
                  get: function(n, e, r) {
                    if (e)
                      return !nt.test(M.css(n, 'display')) ||
                        (n.getClientRects().length &&
                          n.getBoundingClientRect().width)
                        ? at(n, t, r)
                        : dn(n, et, function() {
                            return at(n, t, r)
                          })
                  },
                  set: function(n, e, r) {
                    var o,
                      i = Yn(n),
                      a = !b.scrollboxSize() && 'absolute' === i.position,
                      l =
                        (a || r) &&
                        'border-box' === M.css(n, 'boxSizing', !1, i),
                      s = r ? it(n, t, r, l, i) : 0
                    return (
                      l &&
                        a &&
                        (s -= Math.ceil(
                          n['offset' + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(i[t]) -
                            it(n, t, 'border', !1, i) -
                            0.5
                        )),
                      s &&
                        (o = on.exec(e)) &&
                        'px' !== (o[3] || 'px') &&
                        ((n.style[t] = e), (e = M.css(n, t))),
                      ot(0, e, s)
                    )
                  }
                }
              }),
              (M.cssHooks.marginLeft = Zn(b.reliableMarginLeft, function(n, t) {
                if (t)
                  return (
                    (parseFloat(Xn(n, 'marginLeft')) ||
                      n.getBoundingClientRect().left -
                        dn(n, { marginLeft: 0 }, function() {
                          return n.getBoundingClientRect().left
                        })) + 'px'
                  )
              })),
              M.each({ margin: '', padding: '', border: 'Width' }, function(
                n,
                t
              ) {
                ;(M.cssHooks[n + t] = {
                  expand: function(e) {
                    for (
                      var r = 0,
                        o = {},
                        i = 'string' == typeof e ? e.split(' ') : [e];
                      r < 4;
                      r++
                    )
                      o[n + an[r] + t] = i[r] || i[r - 2] || i[0]
                    return o
                  }
                }),
                  'margin' !== n && (M.cssHooks[n + t].set = ot)
              }),
              M.fn.extend({
                css: function(n, t) {
                  return W(
                    this,
                    function(n, t, e) {
                      var r,
                        o,
                        i = {},
                        a = 0
                      if (Array.isArray(t)) {
                        for (r = Yn(n), o = t.length; a < o; a++)
                          i[t[a]] = M.css(n, t[a], !1, r)
                        return i
                      }
                      return void 0 !== e ? M.style(n, t, e) : M.css(n, t)
                    },
                    n,
                    t,
                    arguments.length > 1
                  )
                }
              }),
              (M.Tween = lt),
              (lt.prototype = {
                constructor: lt,
                init: function(n, t, e, r, o, i) {
                  ;(this.elem = n),
                    (this.prop = e),
                    (this.easing = o || M.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = i || (M.cssNumber[e] ? '' : 'px'))
                },
                cur: function() {
                  var n = lt.propHooks[this.prop]
                  return n && n.get
                    ? n.get(this)
                    : lt.propHooks._default.get(this)
                },
                run: function(n) {
                  var t,
                    e = lt.propHooks[this.prop]
                  return (
                    this.options.duration
                      ? (this.pos = t = M.easing[this.easing](
                          n,
                          this.options.duration * n,
                          0,
                          1,
                          this.options.duration
                        ))
                      : (this.pos = t = n),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    e && e.set ? e.set(this) : lt.propHooks._default.set(this),
                    this
                  )
                }
              }),
              (lt.prototype.init.prototype = lt.prototype),
              (lt.propHooks = {
                _default: {
                  get: function(n) {
                    var t
                    return 1 !== n.elem.nodeType ||
                      (null != n.elem[n.prop] && null == n.elem.style[n.prop])
                      ? n.elem[n.prop]
                      : (t = M.css(n.elem, n.prop, '')) && 'auto' !== t
                      ? t
                      : 0
                  },
                  set: function(n) {
                    M.fx.step[n.prop]
                      ? M.fx.step[n.prop](n)
                      : 1 !== n.elem.nodeType ||
                        (!M.cssHooks[n.prop] &&
                          null == n.elem.style[Kn(n.prop)])
                      ? (n.elem[n.prop] = n.now)
                      : M.style(n.elem, n.prop, n.now + n.unit)
                  }
                }
              }),
              (lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
                set: function(n) {
                  n.elem.nodeType &&
                    n.elem.parentNode &&
                    (n.elem[n.prop] = n.now)
                }
              }),
              (M.easing = {
                linear: function(n) {
                  return n
                },
                swing: function(n) {
                  return 0.5 - Math.cos(n * Math.PI) / 2
                },
                _default: 'swing'
              }),
              (M.fx = lt.prototype.init),
              (M.fx.step = {})
            var st,
              ct,
              ut = /^(?:toggle|show|hide)$/,
              dt = /queueHooks$/
            function ft() {
              ct &&
                (!1 === a.hidden && e.requestAnimationFrame
                  ? e.requestAnimationFrame(ft)
                  : e.setTimeout(ft, M.fx.interval),
                M.fx.tick())
            }
            function pt() {
              return (
                e.setTimeout(function() {
                  st = void 0
                }),
                (st = Date.now())
              )
            }
            function mt(n, t) {
              var e,
                r = 0,
                o = { height: n }
              for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o['margin' + (e = an[r])] = o['padding' + e] = n
              return t && (o.opacity = o.width = n), o
            }
            function ht(n, t, e) {
              for (
                var r,
                  o = (gt.tweeners[t] || []).concat(gt.tweeners['*']),
                  i = 0,
                  a = o.length;
                i < a;
                i++
              )
                if ((r = o[i].call(e, t, n))) return r
            }
            function gt(n, t, e) {
              var r,
                o,
                i = 0,
                a = gt.prefilters.length,
                l = M.Deferred().always(function() {
                  delete s.elem
                }),
                s = function() {
                  if (o) return !1
                  for (
                    var t = st || pt(),
                      e = Math.max(0, c.startTime + c.duration - t),
                      r = 1 - (e / c.duration || 0),
                      i = 0,
                      a = c.tweens.length;
                    i < a;
                    i++
                  )
                    c.tweens[i].run(r)
                  return (
                    l.notifyWith(n, [c, r, e]),
                    r < 1 && a
                      ? e
                      : (a || l.notifyWith(n, [c, 1, 0]),
                        l.resolveWith(n, [c]),
                        !1)
                  )
                },
                c = l.promise({
                  elem: n,
                  props: M.extend({}, t),
                  opts: M.extend(
                    !0,
                    { specialEasing: {}, easing: M.easing._default },
                    e
                  ),
                  originalProperties: t,
                  originalOptions: e,
                  startTime: st || pt(),
                  duration: e.duration,
                  tweens: [],
                  createTween: function(t, e) {
                    var r = M.Tween(
                      n,
                      c.opts,
                      t,
                      e,
                      c.opts.specialEasing[t] || c.opts.easing
                    )
                    return c.tweens.push(r), r
                  },
                  stop: function(t) {
                    var e = 0,
                      r = t ? c.tweens.length : 0
                    if (o) return this
                    for (o = !0; e < r; e++) c.tweens[e].run(1)
                    return (
                      t
                        ? (l.notifyWith(n, [c, 1, 0]), l.resolveWith(n, [c, t]))
                        : l.rejectWith(n, [c, t]),
                      this
                    )
                  }
                }),
                u = c.props
              for (
                (function(n, t) {
                  var e, r, o, i, a
                  for (e in n)
                    if (
                      ((o = t[(r = Z(e))]),
                      (i = n[e]),
                      Array.isArray(i) && ((o = i[1]), (i = n[e] = i[0])),
                      e !== r && ((n[r] = i), delete n[e]),
                      (a = M.cssHooks[r]) && ('expand' in a))
                    )
                      for (e in ((i = a.expand(i)), delete n[r], i))
                        (e in n) || ((n[e] = i[e]), (t[e] = o))
                    else t[r] = o
                })(u, c.opts.specialEasing);
                i < a;
                i++
              )
                if ((r = gt.prefilters[i].call(c, n, u, c.opts)))
                  return (
                    v(r.stop) &&
                      (M._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(
                        r
                      )),
                    r
                  )
              return (
                M.map(u, ht, c),
                v(c.opts.start) && c.opts.start.call(n, c),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always),
                M.fx.timer(
                  M.extend(s, { elem: n, anim: c, queue: c.opts.queue })
                ),
                c
              )
            }
            ;(M.Animation = M.extend(gt, {
              tweeners: {
                '*': [
                  function(n, t) {
                    var e = this.createTween(n, t)
                    return fn(e.elem, n, on.exec(t), e), e
                  }
                ]
              },
              tweener: function(n, t) {
                v(n) ? ((t = n), (n = ['*'])) : (n = n.match(P))
                for (var e, r = 0, o = n.length; r < o; r++)
                  (e = n[r]),
                    (gt.tweeners[e] = gt.tweeners[e] || []),
                    gt.tweeners[e].unshift(t)
              },
              prefilters: [
                function(n, t, e) {
                  var r,
                    o,
                    i,
                    a,
                    l,
                    s,
                    c,
                    u,
                    d = 'width' in t || 'height' in t,
                    f = this,
                    p = {},
                    m = n.style,
                    h = n.nodeType && un(n),
                    g = Q.get(n, 'fxshow')
                  for (r in (e.queue ||
                    (null == (a = M._queueHooks(n, 'fx')).unqueued &&
                      ((a.unqueued = 0),
                      (l = a.empty.fire),
                      (a.empty.fire = function() {
                        a.unqueued || l()
                      })),
                    a.unqueued++,
                    f.always(function() {
                      f.always(function() {
                        a.unqueued--, M.queue(n, 'fx').length || a.empty.fire()
                      })
                    })),
                  t))
                    if (((o = t[r]), ut.test(o))) {
                      if (
                        (delete t[r],
                        (i = i || 'toggle' === o),
                        o === (h ? 'hide' : 'show'))
                      ) {
                        if ('show' !== o || !g || void 0 === g[r]) continue
                        h = !0
                      }
                      p[r] = (g && g[r]) || M.style(n, r)
                    }
                  if ((s = !M.isEmptyObject(t)) || !M.isEmptyObject(p))
                    for (r in (d &&
                      1 === n.nodeType &&
                      ((e.overflow = [m.overflow, m.overflowX, m.overflowY]),
                      null == (c = g && g.display) && (c = Q.get(n, 'display')),
                      'none' === (u = M.css(n, 'display')) &&
                        (c
                          ? (u = c)
                          : (hn([n], !0),
                            (c = n.style.display || c),
                            (u = M.css(n, 'display')),
                            hn([n]))),
                      ('inline' === u || ('inline-block' === u && null != c)) &&
                        'none' === M.css(n, 'float') &&
                        (s ||
                          (f.done(function() {
                            m.display = c
                          }),
                          null == c &&
                            ((u = m.display), (c = 'none' === u ? '' : u))),
                        (m.display = 'inline-block'))),
                    e.overflow &&
                      ((m.overflow = 'hidden'),
                      f.always(function() {
                        ;(m.overflow = e.overflow[0]),
                          (m.overflowX = e.overflow[1]),
                          (m.overflowY = e.overflow[2])
                      })),
                    (s = !1),
                    p))
                      s ||
                        (g
                          ? 'hidden' in g && (h = g.hidden)
                          : (g = Q.access(n, 'fxshow', { display: c })),
                        i && (g.hidden = !h),
                        h && hn([n], !0),
                        f.done(function() {
                          for (r in (h || hn([n]), Q.remove(n, 'fxshow'), p))
                            M.style(n, r, p[r])
                        })),
                        (s = ht(h ? g[r] : 0, r, f)),
                        r in g ||
                          ((g[r] = s.start),
                          h && ((s.end = s.start), (s.start = 0)))
                }
              ],
              prefilter: function(n, t) {
                t ? gt.prefilters.unshift(n) : gt.prefilters.push(n)
              }
            })),
              (M.speed = function(n, t, e) {
                var r =
                  n && 'object' == typeof n
                    ? M.extend({}, n)
                    : {
                        complete: e || (!e && t) || (v(n) && n),
                        duration: n,
                        easing: (e && t) || (t && !v(t) && t)
                      }
                return (
                  M.fx.off
                    ? (r.duration = 0)
                    : 'number' != typeof r.duration &&
                      (r.duration in M.fx.speeds
                        ? (r.duration = M.fx.speeds[r.duration])
                        : (r.duration = M.fx.speeds._default)),
                  (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                  (r.old = r.complete),
                  (r.complete = function() {
                    v(r.old) && r.old.call(this),
                      r.queue && M.dequeue(this, r.queue)
                  }),
                  r
                )
              }),
              M.fn.extend({
                fadeTo: function(n, t, e, r) {
                  return this.filter(un)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, n, e, r)
                },
                animate: function(n, t, e, r) {
                  var o = M.isEmptyObject(n),
                    i = M.speed(t, e, r),
                    a = function() {
                      var t = gt(this, M.extend({}, n), i)
                      ;(o || Q.get(this, 'finish')) && t.stop(!0)
                    }
                  return (
                    (a.finish = a),
                    o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                  )
                },
                stop: function(n, t, e) {
                  var r = function(n) {
                    var t = n.stop
                    delete n.stop, t(e)
                  }
                  return (
                    'string' != typeof n && ((e = t), (t = n), (n = void 0)),
                    t && !1 !== n && this.queue(n || 'fx', []),
                    this.each(function() {
                      var t = !0,
                        o = null != n && n + 'queueHooks',
                        i = M.timers,
                        a = Q.get(this)
                      if (o) a[o] && a[o].stop && r(a[o])
                      else
                        for (o in a) a[o] && a[o].stop && dt.test(o) && r(a[o])
                      for (o = i.length; o--; )
                        i[o].elem !== this ||
                          (null != n && i[o].queue !== n) ||
                          (i[o].anim.stop(e), (t = !1), i.splice(o, 1))
                      ;(!t && e) || M.dequeue(this, n)
                    })
                  )
                },
                finish: function(n) {
                  return (
                    !1 !== n && (n = n || 'fx'),
                    this.each(function() {
                      var t,
                        e = Q.get(this),
                        r = e[n + 'queue'],
                        o = e[n + 'queueHooks'],
                        i = M.timers,
                        a = r ? r.length : 0
                      for (
                        e.finish = !0,
                          M.queue(this, n, []),
                          o && o.stop && o.stop.call(this, !0),
                          t = i.length;
                        t--;

                      )
                        i[t].elem === this &&
                          i[t].queue === n &&
                          (i[t].anim.stop(!0), i.splice(t, 1))
                      for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this)
                      delete e.finish
                    })
                  )
                }
              }),
              M.each(['toggle', 'show', 'hide'], function(n, t) {
                var e = M.fn[t]
                M.fn[t] = function(n, r, o) {
                  return null == n || 'boolean' == typeof n
                    ? e.apply(this, arguments)
                    : this.animate(mt(t, !0), n, r, o)
                }
              }),
              M.each(
                {
                  slideDown: mt('show'),
                  slideUp: mt('hide'),
                  slideToggle: mt('toggle'),
                  fadeIn: { opacity: 'show' },
                  fadeOut: { opacity: 'hide' },
                  fadeToggle: { opacity: 'toggle' }
                },
                function(n, t) {
                  M.fn[n] = function(n, e, r) {
                    return this.animate(t, n, e, r)
                  }
                }
              ),
              (M.timers = []),
              (M.fx.tick = function() {
                var n,
                  t = 0,
                  e = M.timers
                for (st = Date.now(); t < e.length; t++)
                  (n = e[t])() || e[t] !== n || e.splice(t--, 1)
                e.length || M.fx.stop(), (st = void 0)
              }),
              (M.fx.timer = function(n) {
                M.timers.push(n), M.fx.start()
              }),
              (M.fx.interval = 13),
              (M.fx.start = function() {
                ct || ((ct = !0), ft())
              }),
              (M.fx.stop = function() {
                ct = null
              }),
              (M.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (M.fn.delay = function(n, t) {
                return (
                  (n = (M.fx && M.fx.speeds[n]) || n),
                  (t = t || 'fx'),
                  this.queue(t, function(t, r) {
                    var o = e.setTimeout(t, n)
                    r.stop = function() {
                      e.clearTimeout(o)
                    }
                  })
                )
              }),
              (function() {
                var n = a.createElement('input'),
                  t = a
                    .createElement('select')
                    .appendChild(a.createElement('option'))
                ;(n.type = 'checkbox'),
                  (b.checkOn = '' !== n.value),
                  (b.optSelected = t.selected),
                  ((n = a.createElement('input')).value = 't'),
                  (n.type = 'radio'),
                  (b.radioValue = 't' === n.value)
              })()
            var bt,
              vt = M.expr.attrHandle
            M.fn.extend({
              attr: function(n, t) {
                return W(this, M.attr, n, t, arguments.length > 1)
              },
              removeAttr: function(n) {
                return this.each(function() {
                  M.removeAttr(this, n)
                })
              }
            }),
              M.extend({
                attr: function(n, t, e) {
                  var r,
                    o,
                    i = n.nodeType
                  if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === n.getAttribute
                      ? M.prop(n, t, e)
                      : ((1 === i && M.isXMLDoc(n)) ||
                          (o =
                            M.attrHooks[t.toLowerCase()] ||
                            (M.expr.match.bool.test(t) ? bt : void 0)),
                        void 0 !== e
                          ? null === e
                            ? void M.removeAttr(n, t)
                            : o && 'set' in o && void 0 !== (r = o.set(n, e, t))
                            ? r
                            : (n.setAttribute(t, e + ''), e)
                          : o && 'get' in o && null !== (r = o.get(n, t))
                          ? r
                          : null == (r = M.find.attr(n, t))
                          ? void 0
                          : r)
                },
                attrHooks: {
                  type: {
                    set: function(n, t) {
                      if (!b.radioValue && 'radio' === t && j(n, 'input')) {
                        var e = n.value
                        return n.setAttribute('type', t), e && (n.value = e), t
                      }
                    }
                  }
                },
                removeAttr: function(n, t) {
                  var e,
                    r = 0,
                    o = t && t.match(P)
                  if (o && 1 === n.nodeType)
                    for (; (e = o[r++]); ) n.removeAttribute(e)
                }
              }),
              (bt = {
                set: function(n, t, e) {
                  return !1 === t ? M.removeAttr(n, e) : n.setAttribute(e, e), e
                }
              }),
              M.each(M.expr.match.bool.source.match(/\w+/g), function(n, t) {
                var e = vt[t] || M.find.attr
                vt[t] = function(n, t, r) {
                  var o,
                    i,
                    a = t.toLowerCase()
                  return (
                    r ||
                      ((i = vt[a]),
                      (vt[a] = o),
                      (o = null != e(n, t, r) ? a : null),
                      (vt[a] = i)),
                    o
                  )
                }
              })
            var xt = /^(?:input|select|textarea|button)$/i,
              yt = /^(?:a|area)$/i
            function wt(n) {
              return (n.match(P) || []).join(' ')
            }
            function kt(n) {
              return (n.getAttribute && n.getAttribute('class')) || ''
            }
            function Mt(n) {
              return Array.isArray(n)
                ? n
                : ('string' == typeof n && n.match(P)) || []
            }
            M.fn.extend({
              prop: function(n, t) {
                return W(this, M.prop, n, t, arguments.length > 1)
              },
              removeProp: function(n) {
                return this.each(function() {
                  delete this[M.propFix[n] || n]
                })
              }
            }),
              M.extend({
                prop: function(n, t, e) {
                  var r,
                    o,
                    i = n.nodeType
                  if (3 !== i && 8 !== i && 2 !== i)
                    return (
                      (1 === i && M.isXMLDoc(n)) ||
                        ((t = M.propFix[t] || t), (o = M.propHooks[t])),
                      void 0 !== e
                        ? o && 'set' in o && void 0 !== (r = o.set(n, e, t))
                          ? r
                          : (n[t] = e)
                        : o && 'get' in o && null !== (r = o.get(n, t))
                        ? r
                        : n[t]
                    )
                },
                propHooks: {
                  tabIndex: {
                    get: function(n) {
                      var t = M.find.attr(n, 'tabindex')
                      return t
                        ? parseInt(t, 10)
                        : xt.test(n.nodeName) || (yt.test(n.nodeName) && n.href)
                        ? 0
                        : -1
                    }
                  }
                },
                propFix: { for: 'htmlFor', class: 'className' }
              }),
              b.optSelected ||
                (M.propHooks.selected = {
                  get: function(n) {
                    var t = n.parentNode
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                  },
                  set: function(n) {
                    var t = n.parentNode
                    t &&
                      (t.selectedIndex,
                      t.parentNode && t.parentNode.selectedIndex)
                  }
                }),
              M.each(
                [
                  'tabIndex',
                  'readOnly',
                  'maxLength',
                  'cellSpacing',
                  'cellPadding',
                  'rowSpan',
                  'colSpan',
                  'useMap',
                  'frameBorder',
                  'contentEditable'
                ],
                function() {
                  M.propFix[this.toLowerCase()] = this
                }
              ),
              M.fn.extend({
                addClass: function(n) {
                  var t,
                    e,
                    r,
                    o,
                    i,
                    a,
                    l,
                    s = 0
                  if (v(n))
                    return this.each(function(t) {
                      M(this).addClass(n.call(this, t, kt(this)))
                    })
                  if ((t = Mt(n)).length)
                    for (; (e = this[s++]); )
                      if (
                        ((o = kt(e)),
                        (r = 1 === e.nodeType && ' ' + wt(o) + ' '))
                      ) {
                        for (a = 0; (i = t[a++]); )
                          r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
                        o !== (l = wt(r)) && e.setAttribute('class', l)
                      }
                  return this
                },
                removeClass: function(n) {
                  var t,
                    e,
                    r,
                    o,
                    i,
                    a,
                    l,
                    s = 0
                  if (v(n))
                    return this.each(function(t) {
                      M(this).removeClass(n.call(this, t, kt(this)))
                    })
                  if (!arguments.length) return this.attr('class', '')
                  if ((t = Mt(n)).length)
                    for (; (e = this[s++]); )
                      if (
                        ((o = kt(e)),
                        (r = 1 === e.nodeType && ' ' + wt(o) + ' '))
                      ) {
                        for (a = 0; (i = t[a++]); )
                          for (; r.indexOf(' ' + i + ' ') > -1; )
                            r = r.replace(' ' + i + ' ', ' ')
                        o !== (l = wt(r)) && e.setAttribute('class', l)
                      }
                  return this
                },
                toggleClass: function(n, t) {
                  var e = typeof n,
                    r = 'string' === e || Array.isArray(n)
                  return 'boolean' == typeof t && r
                    ? t
                      ? this.addClass(n)
                      : this.removeClass(n)
                    : v(n)
                    ? this.each(function(e) {
                        M(this).toggleClass(n.call(this, e, kt(this), t), t)
                      })
                    : this.each(function() {
                        var t, o, i, a
                        if (r)
                          for (o = 0, i = M(this), a = Mt(n); (t = a[o++]); )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                        else
                          (void 0 !== n && 'boolean' !== e) ||
                            ((t = kt(this)) && Q.set(this, '__className__', t),
                            this.setAttribute &&
                              this.setAttribute(
                                'class',
                                t || !1 === n
                                  ? ''
                                  : Q.get(this, '__className__') || ''
                              ))
                      })
                },
                hasClass: function(n) {
                  var t,
                    e,
                    r = 0
                  for (t = ' ' + n + ' '; (e = this[r++]); )
                    if (
                      1 === e.nodeType &&
                      (' ' + wt(kt(e)) + ' ').indexOf(t) > -1
                    )
                      return !0
                  return !1
                }
              })
            var Et = /\r/g
            M.fn.extend({
              val: function(n) {
                var t,
                  e,
                  r,
                  o = this[0]
                return arguments.length
                  ? ((r = v(n)),
                    this.each(function(e) {
                      var o
                      1 === this.nodeType &&
                        (null == (o = r ? n.call(this, e, M(this).val()) : n)
                          ? (o = '')
                          : 'number' == typeof o
                          ? (o += '')
                          : Array.isArray(o) &&
                            (o = M.map(o, function(n) {
                              return null == n ? '' : n + ''
                            })),
                        ((t =
                          M.valHooks[this.type] ||
                          M.valHooks[this.nodeName.toLowerCase()]) &&
                          'set' in t &&
                          void 0 !== t.set(this, o, 'value')) ||
                          (this.value = o))
                    }))
                  : o
                  ? (t =
                      M.valHooks[o.type] ||
                      M.valHooks[o.nodeName.toLowerCase()]) &&
                    'get' in t &&
                    void 0 !== (e = t.get(o, 'value'))
                    ? e
                    : 'string' == typeof (e = o.value)
                    ? e.replace(Et, '')
                    : null == e
                    ? ''
                    : e
                  : void 0
              }
            }),
              M.extend({
                valHooks: {
                  option: {
                    get: function(n) {
                      var t = M.find.attr(n, 'value')
                      return null != t ? t : wt(M.text(n))
                    }
                  },
                  select: {
                    get: function(n) {
                      var t,
                        e,
                        r,
                        o = n.options,
                        i = n.selectedIndex,
                        a = 'select-one' === n.type,
                        l = a ? null : [],
                        s = a ? i + 1 : o.length
                      for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                        if (
                          ((e = o[r]).selected || r === i) &&
                          !e.disabled &&
                          (!e.parentNode.disabled ||
                            !j(e.parentNode, 'optgroup'))
                        ) {
                          if (((t = M(e).val()), a)) return t
                          l.push(t)
                        }
                      return l
                    },
                    set: function(n, t) {
                      for (
                        var e,
                          r,
                          o = n.options,
                          i = M.makeArray(t),
                          a = o.length;
                        a--;

                      )
                        ((r = o[a]).selected =
                          M.inArray(M.valHooks.option.get(r), i) > -1) &&
                          (e = !0)
                      return e || (n.selectedIndex = -1), i
                    }
                  }
                }
              }),
              M.each(['radio', 'checkbox'], function() {
                ;(M.valHooks[this] = {
                  set: function(n, t) {
                    if (Array.isArray(t))
                      return (n.checked = M.inArray(M(n).val(), t) > -1)
                  }
                }),
                  b.checkOn ||
                    (M.valHooks[this].get = function(n) {
                      return null === n.getAttribute('value') ? 'on' : n.value
                    })
              }),
              (b.focusin = 'onfocusin' in e)
            var _t = /^(?:focusinfocus|focusoutblur)$/,
              St = function(n) {
                n.stopPropagation()
              }
            M.extend(M.event, {
              trigger: function(n, t, r, o) {
                var i,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p,
                  h = [r || a],
                  g = m.call(n, 'type') ? n.type : n,
                  b = m.call(n, 'namespace') ? n.namespace.split('.') : []
                if (
                  ((l = p = s = r = r || a),
                  3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !_t.test(g + M.event.triggered) &&
                    (g.indexOf('.') > -1 &&
                      ((b = g.split('.')), (g = b.shift()), b.sort()),
                    (u = g.indexOf(':') < 0 && 'on' + g),
                    ((n = n[M.expando]
                      ? n
                      : new M.Event(g, 'object' == typeof n && n)).isTrigger = o
                      ? 2
                      : 3),
                    (n.namespace = b.join('.')),
                    (n.rnamespace = n.namespace
                      ? new RegExp(
                          '(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)'
                        )
                      : null),
                    (n.result = void 0),
                    n.target || (n.target = r),
                    (t = null == t ? [n] : M.makeArray(t, [n])),
                    (f = M.event.special[g] || {}),
                    o || !f.trigger || !1 !== f.trigger.apply(r, t)))
                ) {
                  if (!o && !f.noBubble && !x(r)) {
                    for (
                      c = f.delegateType || g,
                        _t.test(c + g) || (l = l.parentNode);
                      l;
                      l = l.parentNode
                    )
                      h.push(l), (s = l)
                    s === (r.ownerDocument || a) &&
                      h.push(s.defaultView || s.parentWindow || e)
                  }
                  for (i = 0; (l = h[i++]) && !n.isPropagationStopped(); )
                    (p = l),
                      (n.type = i > 1 ? c : f.bindType || g),
                      (d =
                        (Q.get(l, 'events') || {})[n.type] &&
                        Q.get(l, 'handle')) && d.apply(l, t),
                      (d = u && l[u]) &&
                        d.apply &&
                        G(l) &&
                        ((n.result = d.apply(l, t)),
                        !1 === n.result && n.preventDefault())
                  return (
                    (n.type = g),
                    o ||
                      n.isDefaultPrevented() ||
                      (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                      !G(r) ||
                      (u &&
                        v(r[g]) &&
                        !x(r) &&
                        ((s = r[u]) && (r[u] = null),
                        (M.event.triggered = g),
                        n.isPropagationStopped() && p.addEventListener(g, St),
                        r[g](),
                        n.isPropagationStopped() &&
                          p.removeEventListener(g, St),
                        (M.event.triggered = void 0),
                        s && (r[u] = s))),
                    n.result
                  )
                }
              },
              simulate: function(n, t, e) {
                var r = M.extend(new M.Event(), e, { type: n, isSimulated: !0 })
                M.event.trigger(r, null, t)
              }
            }),
              M.fn.extend({
                trigger: function(n, t) {
                  return this.each(function() {
                    M.event.trigger(n, t, this)
                  })
                },
                triggerHandler: function(n, t) {
                  var e = this[0]
                  if (e) return M.event.trigger(n, t, e, !0)
                }
              }),
              b.focusin ||
                M.each({ focus: 'focusin', blur: 'focusout' }, function(n, t) {
                  var e = function(n) {
                    M.event.simulate(t, n.target, M.event.fix(n))
                  }
                  M.event.special[t] = {
                    setup: function() {
                      var r = this.ownerDocument || this,
                        o = Q.access(r, t)
                      o || r.addEventListener(n, e, !0),
                        Q.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                      var r = this.ownerDocument || this,
                        o = Q.access(r, t) - 1
                      o
                        ? Q.access(r, t, o)
                        : (r.removeEventListener(n, e, !0), Q.remove(r, t))
                    }
                  }
                })
            var Tt = e.location,
              Nt = Date.now(),
              Ct = /\?/
            M.parseXML = function(n) {
              var t
              if (!n || 'string' != typeof n) return null
              try {
                t = new e.DOMParser().parseFromString(n, 'text/xml')
              } catch (n) {
                t = void 0
              }
              return (
                (t && !t.getElementsByTagName('parsererror').length) ||
                  M.error('Invalid XML: ' + n),
                t
              )
            }
            var jt = /\[\]$/,
              At = /\r?\n/g,
              Ot = /^(?:submit|button|image|reset|file)$/i,
              zt = /^(?:input|select|textarea|keygen)/i
            function Dt(n, t, e, r) {
              var o
              if (Array.isArray(t))
                M.each(t, function(t, o) {
                  e || jt.test(n)
                    ? r(n, o)
                    : Dt(
                        n +
                          '[' +
                          ('object' == typeof o && null != o ? t : '') +
                          ']',
                        o,
                        e,
                        r
                      )
                })
              else if (e || 'object' !== k(t)) r(n, t)
              else for (o in t) Dt(n + '[' + o + ']', t[o], e, r)
            }
            ;(M.param = function(n, t) {
              var e,
                r = [],
                o = function(n, t) {
                  var e = v(t) ? t() : t
                  r[r.length] =
                    encodeURIComponent(n) +
                    '=' +
                    encodeURIComponent(null == e ? '' : e)
                }
              if (null == n) return ''
              if (Array.isArray(n) || (n.jquery && !M.isPlainObject(n)))
                M.each(n, function() {
                  o(this.name, this.value)
                })
              else for (e in n) Dt(e, n[e], t, o)
              return r.join('&')
            }),
              M.fn.extend({
                serialize: function() {
                  return M.param(this.serializeArray())
                },
                serializeArray: function() {
                  return this.map(function() {
                    var n = M.prop(this, 'elements')
                    return n ? M.makeArray(n) : this
                  })
                    .filter(function() {
                      var n = this.type
                      return (
                        this.name &&
                        !M(this).is(':disabled') &&
                        zt.test(this.nodeName) &&
                        !Ot.test(n) &&
                        (this.checked || !gn.test(n))
                      )
                    })
                    .map(function(n, t) {
                      var e = M(this).val()
                      return null == e
                        ? null
                        : Array.isArray(e)
                        ? M.map(e, function(n) {
                            return {
                              name: t.name,
                              value: n.replace(At, '\r\n')
                            }
                          })
                        : { name: t.name, value: e.replace(At, '\r\n') }
                    })
                    .get()
                }
              })
            var Lt = /%20/g,
              qt = /#.*$/,
              Ht = /([?&])_=[^&]*/,
              Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              It = /^(?:GET|HEAD)$/,
              Rt = /^\/\//,
              Ft = {},
              Bt = {},
              Ut = '*/'.concat('*'),
              $t = a.createElement('a')
            function Wt(n) {
              return function(t, e) {
                'string' != typeof t && ((e = t), (t = '*'))
                var r,
                  o = 0,
                  i = t.toLowerCase().match(P) || []
                if (v(e))
                  for (; (r = i[o++]); )
                    '+' === r[0]
                      ? ((r = r.slice(1) || '*'),
                        (n[r] = n[r] || []).unshift(e))
                      : (n[r] = n[r] || []).push(e)
              }
            }
            function Yt(n, t, e, r) {
              var o = {},
                i = n === Bt
              function a(l) {
                var s
                return (
                  (o[l] = !0),
                  M.each(n[l] || [], function(n, l) {
                    var c = l(t, e, r)
                    return 'string' != typeof c || i || o[c]
                      ? i
                        ? !(s = c)
                        : void 0
                      : (t.dataTypes.unshift(c), a(c), !1)
                  }),
                  s
                )
              }
              return a(t.dataTypes[0]) || (!o['*'] && a('*'))
            }
            function Vt(n, t) {
              var e,
                r,
                o = M.ajaxSettings.flatOptions || {}
              for (e in t)
                void 0 !== t[e] && ((o[e] ? n : r || (r = {}))[e] = t[e])
              return r && M.extend(!0, n, r), n
            }
            ;($t.href = Tt.href),
              M.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: Tt.href,
                  type: 'GET',
                  isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Tt.protocol
                  ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType:
                    'application/x-www-form-urlencoded; charset=UTF-8',
                  accepts: {
                    '*': Ut,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript'
                  },
                  contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                  },
                  responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON'
                  },
                  converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': M.parseXML
                  },
                  flatOptions: { url: !0, context: !0 }
                },
                ajaxSetup: function(n, t) {
                  return t
                    ? Vt(Vt(n, M.ajaxSettings), t)
                    : Vt(M.ajaxSettings, n)
                },
                ajaxPrefilter: Wt(Ft),
                ajaxTransport: Wt(Bt),
                ajax: function(n, t) {
                  'object' == typeof n && ((t = n), (n = void 0)), (t = t || {})
                  var r,
                    o,
                    i,
                    l,
                    s,
                    c,
                    u,
                    d,
                    f,
                    p,
                    m = M.ajaxSetup({}, t),
                    h = m.context || m,
                    g = m.context && (h.nodeType || h.jquery) ? M(h) : M.event,
                    b = M.Deferred(),
                    v = M.Callbacks('once memory'),
                    x = m.statusCode || {},
                    y = {},
                    w = {},
                    k = 'canceled',
                    E = {
                      readyState: 0,
                      getResponseHeader: function(n) {
                        var t
                        if (u) {
                          if (!l)
                            for (l = {}; (t = Pt.exec(i)); )
                              l[t[1].toLowerCase() + ' '] = (
                                l[t[1].toLowerCase() + ' '] || []
                              ).concat(t[2])
                          t = l[n.toLowerCase() + ' ']
                        }
                        return null == t ? null : t.join(', ')
                      },
                      getAllResponseHeaders: function() {
                        return u ? i : null
                      },
                      setRequestHeader: function(n, t) {
                        return (
                          null == u &&
                            ((n = w[n.toLowerCase()] = w[n.toLowerCase()] || n),
                            (y[n] = t)),
                          this
                        )
                      },
                      overrideMimeType: function(n) {
                        return null == u && (m.mimeType = n), this
                      },
                      statusCode: function(n) {
                        var t
                        if (n)
                          if (u) E.always(n[E.status])
                          else for (t in n) x[t] = [x[t], n[t]]
                        return this
                      },
                      abort: function(n) {
                        var t = n || k
                        return r && r.abort(t), _(0, t), this
                      }
                    }
                  if (
                    (b.promise(E),
                    (m.url = ((n || m.url || Tt.href) + '').replace(
                      Rt,
                      Tt.protocol + '//'
                    )),
                    (m.type = t.method || t.type || m.method || m.type),
                    (m.dataTypes = (m.dataType || '*')
                      .toLowerCase()
                      .match(P) || ['']),
                    null == m.crossDomain)
                  ) {
                    c = a.createElement('a')
                    try {
                      ;(c.href = m.url),
                        (c.href = c.href),
                        (m.crossDomain =
                          $t.protocol + '//' + $t.host !=
                          c.protocol + '//' + c.host)
                    } catch (n) {
                      m.crossDomain = !0
                    }
                  }
                  if (
                    (m.data &&
                      m.processData &&
                      'string' != typeof m.data &&
                      (m.data = M.param(m.data, m.traditional)),
                    Yt(Ft, m, t, E),
                    u)
                  )
                    return E
                  for (f in ((d = M.event && m.global) &&
                    0 == M.active++ &&
                    M.event.trigger('ajaxStart'),
                  (m.type = m.type.toUpperCase()),
                  (m.hasContent = !It.test(m.type)),
                  (o = m.url.replace(qt, '')),
                  m.hasContent
                    ? m.data &&
                      m.processData &&
                      0 ===
                        (m.contentType || '').indexOf(
                          'application/x-www-form-urlencoded'
                        ) &&
                      (m.data = m.data.replace(Lt, '+'))
                    : ((p = m.url.slice(o.length)),
                      m.data &&
                        (m.processData || 'string' == typeof m.data) &&
                        ((o += (Ct.test(o) ? '&' : '?') + m.data),
                        delete m.data),
                      !1 === m.cache &&
                        ((o = o.replace(Ht, '$1')),
                        (p = (Ct.test(o) ? '&' : '?') + '_=' + Nt++ + p)),
                      (m.url = o + p)),
                  m.ifModified &&
                    (M.lastModified[o] &&
                      E.setRequestHeader(
                        'If-Modified-Since',
                        M.lastModified[o]
                      ),
                    M.etag[o] &&
                      E.setRequestHeader('If-None-Match', M.etag[o])),
                  ((m.data && m.hasContent && !1 !== m.contentType) ||
                    t.contentType) &&
                    E.setRequestHeader('Content-Type', m.contentType),
                  E.setRequestHeader(
                    'Accept',
                    m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                      ? m.accepts[m.dataTypes[0]] +
                          ('*' !== m.dataTypes[0] ? ', ' + Ut + '; q=0.01' : '')
                      : m.accepts['*']
                  ),
                  m.headers))
                    E.setRequestHeader(f, m.headers[f])
                  if (m.beforeSend && (!1 === m.beforeSend.call(h, E, m) || u))
                    return E.abort()
                  if (
                    ((k = 'abort'),
                    v.add(m.complete),
                    E.done(m.success),
                    E.fail(m.error),
                    (r = Yt(Bt, m, t, E)))
                  ) {
                    if (
                      ((E.readyState = 1),
                      d && g.trigger('ajaxSend', [E, m]),
                      u)
                    )
                      return E
                    m.async &&
                      m.timeout > 0 &&
                      (s = e.setTimeout(function() {
                        E.abort('timeout')
                      }, m.timeout))
                    try {
                      ;(u = !1), r.send(y, _)
                    } catch (n) {
                      if (u) throw n
                      _(-1, n)
                    }
                  } else _(-1, 'No Transport')
                  function _(n, t, a, l) {
                    var c,
                      f,
                      p,
                      y,
                      w,
                      k = t
                    u ||
                      ((u = !0),
                      s && e.clearTimeout(s),
                      (r = void 0),
                      (i = l || ''),
                      (E.readyState = n > 0 ? 4 : 0),
                      (c = (n >= 200 && n < 300) || 304 === n),
                      a &&
                        (y = (function(n, t, e) {
                          for (
                            var r, o, i, a, l = n.contents, s = n.dataTypes;
                            '*' === s[0];

                          )
                            s.shift(),
                              void 0 === r &&
                                (r =
                                  n.mimeType ||
                                  t.getResponseHeader('Content-Type'))
                          if (r)
                            for (o in l)
                              if (l[o] && l[o].test(r)) {
                                s.unshift(o)
                                break
                              }
                          if (s[0] in e) i = s[0]
                          else {
                            for (o in e) {
                              if (!s[0] || n.converters[o + ' ' + s[0]]) {
                                i = o
                                break
                              }
                              a || (a = o)
                            }
                            i = i || a
                          }
                          if (i) return i !== s[0] && s.unshift(i), e[i]
                        })(m, E, a)),
                      (y = (function(n, t, e, r) {
                        var o,
                          i,
                          a,
                          l,
                          s,
                          c = {},
                          u = n.dataTypes.slice()
                        if (u[1])
                          for (a in n.converters)
                            c[a.toLowerCase()] = n.converters[a]
                        for (i = u.shift(); i; )
                          if (
                            (n.responseFields[i] &&
                              (e[n.responseFields[i]] = t),
                            !s &&
                              r &&
                              n.dataFilter &&
                              (t = n.dataFilter(t, n.dataType)),
                            (s = i),
                            (i = u.shift()))
                          )
                            if ('*' === i) i = s
                            else if ('*' !== s && s !== i) {
                              if (!(a = c[s + ' ' + i] || c['* ' + i]))
                                for (o in c)
                                  if (
                                    (l = o.split(' '))[1] === i &&
                                    (a = c[s + ' ' + l[0]] || c['* ' + l[0]])
                                  ) {
                                    !0 === a
                                      ? (a = c[o])
                                      : !0 !== c[o] &&
                                        ((i = l[0]), u.unshift(l[1]))
                                    break
                                  }
                              if (!0 !== a)
                                if (a && n.throws) t = a(t)
                                else
                                  try {
                                    t = a(t)
                                  } catch (n) {
                                    return {
                                      state: 'parsererror',
                                      error: a
                                        ? n
                                        : 'No conversion from ' + s + ' to ' + i
                                    }
                                  }
                            }
                        return { state: 'success', data: t }
                      })(m, y, E, c)),
                      c
                        ? (m.ifModified &&
                            ((w = E.getResponseHeader('Last-Modified')) &&
                              (M.lastModified[o] = w),
                            (w = E.getResponseHeader('etag')) &&
                              (M.etag[o] = w)),
                          204 === n || 'HEAD' === m.type
                            ? (k = 'nocontent')
                            : 304 === n
                            ? (k = 'notmodified')
                            : ((k = y.state),
                              (f = y.data),
                              (c = !(p = y.error))))
                        : ((p = k),
                          (!n && k) || ((k = 'error'), n < 0 && (n = 0))),
                      (E.status = n),
                      (E.statusText = (t || k) + ''),
                      c
                        ? b.resolveWith(h, [f, k, E])
                        : b.rejectWith(h, [E, k, p]),
                      E.statusCode(x),
                      (x = void 0),
                      d &&
                        g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
                          E,
                          m,
                          c ? f : p
                        ]),
                      v.fireWith(h, [E, k]),
                      d &&
                        (g.trigger('ajaxComplete', [E, m]),
                        --M.active || M.event.trigger('ajaxStop')))
                  }
                  return E
                },
                getJSON: function(n, t, e) {
                  return M.get(n, t, e, 'json')
                },
                getScript: function(n, t) {
                  return M.get(n, void 0, t, 'script')
                }
              }),
              M.each(['get', 'post'], function(n, t) {
                M[t] = function(n, e, r, o) {
                  return (
                    v(e) && ((o = o || r), (r = e), (e = void 0)),
                    M.ajax(
                      M.extend(
                        { url: n, type: t, dataType: o, data: e, success: r },
                        M.isPlainObject(n) && n
                      )
                    )
                  )
                }
              }),
              (M._evalUrl = function(n, t) {
                return M.ajax({
                  url: n,
                  type: 'GET',
                  dataType: 'script',
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { 'text script': function() {} },
                  dataFilter: function(n) {
                    M.globalEval(n, t)
                  }
                })
              }),
              M.fn.extend({
                wrapAll: function(n) {
                  var t
                  return (
                    this[0] &&
                      (v(n) && (n = n.call(this[0])),
                      (t = M(n, this[0].ownerDocument)
                        .eq(0)
                        .clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function() {
                          for (var n = this; n.firstElementChild; )
                            n = n.firstElementChild
                          return n
                        })
                        .append(this)),
                    this
                  )
                },
                wrapInner: function(n) {
                  return v(n)
                    ? this.each(function(t) {
                        M(this).wrapInner(n.call(this, t))
                      })
                    : this.each(function() {
                        var t = M(this),
                          e = t.contents()
                        e.length ? e.wrapAll(n) : t.append(n)
                      })
                },
                wrap: function(n) {
                  var t = v(n)
                  return this.each(function(e) {
                    M(this).wrapAll(t ? n.call(this, e) : n)
                  })
                },
                unwrap: function(n) {
                  return (
                    this.parent(n)
                      .not('body')
                      .each(function() {
                        M(this).replaceWith(this.childNodes)
                      }),
                    this
                  )
                }
              }),
              (M.expr.pseudos.hidden = function(n) {
                return !M.expr.pseudos.visible(n)
              }),
              (M.expr.pseudos.visible = function(n) {
                return !!(
                  n.offsetWidth ||
                  n.offsetHeight ||
                  n.getClientRects().length
                )
              }),
              (M.ajaxSettings.xhr = function() {
                try {
                  return new e.XMLHttpRequest()
                } catch (n) {}
              })
            var Xt = { 0: 200, 1223: 204 },
              Zt = M.ajaxSettings.xhr()
            ;(b.cors = !!Zt && 'withCredentials' in Zt),
              (b.ajax = Zt = !!Zt),
              M.ajaxTransport(function(n) {
                var t, r
                if (b.cors || (Zt && !n.crossDomain))
                  return {
                    send: function(o, i) {
                      var a,
                        l = n.xhr()
                      if (
                        (l.open(n.type, n.url, n.async, n.username, n.password),
                        n.xhrFields)
                      )
                        for (a in n.xhrFields) l[a] = n.xhrFields[a]
                      for (a in (n.mimeType &&
                        l.overrideMimeType &&
                        l.overrideMimeType(n.mimeType),
                      n.crossDomain ||
                        o['X-Requested-With'] ||
                        (o['X-Requested-With'] = 'XMLHttpRequest'),
                      o))
                        l.setRequestHeader(a, o[a])
                      ;(t = function(n) {
                        return function() {
                          t &&
                            ((t = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                            'abort' === n
                              ? l.abort()
                              : 'error' === n
                              ? 'number' != typeof l.status
                                ? i(0, 'error')
                                : i(l.status, l.statusText)
                              : i(
                                  Xt[l.status] || l.status,
                                  l.statusText,
                                  'text' !== (l.responseType || 'text') ||
                                    'string' != typeof l.responseText
                                    ? { binary: l.response }
                                    : { text: l.responseText },
                                  l.getAllResponseHeaders()
                                ))
                        }
                      }),
                        (l.onload = t()),
                        (r = l.onerror = l.ontimeout = t('error')),
                        void 0 !== l.onabort
                          ? (l.onabort = r)
                          : (l.onreadystatechange = function() {
                              4 === l.readyState &&
                                e.setTimeout(function() {
                                  t && r()
                                })
                            }),
                        (t = t('abort'))
                      try {
                        l.send((n.hasContent && n.data) || null)
                      } catch (n) {
                        if (t) throw n
                      }
                    },
                    abort: function() {
                      t && t()
                    }
                  }
              }),
              M.ajaxPrefilter(function(n) {
                n.crossDomain && (n.contents.script = !1)
              }),
              M.ajaxSetup({
                accepts: {
                  script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  'text script': function(n) {
                    return M.globalEval(n), n
                  }
                }
              }),
              M.ajaxPrefilter('script', function(n) {
                void 0 === n.cache && (n.cache = !1),
                  n.crossDomain && (n.type = 'GET')
              }),
              M.ajaxTransport('script', function(n) {
                var t, e
                if (n.crossDomain || n.scriptAttrs)
                  return {
                    send: function(r, o) {
                      ;(t = M('<script>')
                        .attr(n.scriptAttrs || {})
                        .prop({ charset: n.scriptCharset, src: n.url })
                        .on(
                          'load error',
                          (e = function(n) {
                            t.remove(),
                              (e = null),
                              n && o('error' === n.type ? 404 : 200, n.type)
                          })
                        )),
                        a.head.appendChild(t[0])
                    },
                    abort: function() {
                      e && e()
                    }
                  }
              })
            var Gt,
              Jt = [],
              Qt = /(=)\?(?=&|$)|\?\?/
            M.ajaxSetup({
              jsonp: 'callback',
              jsonpCallback: function() {
                var n = Jt.pop() || M.expando + '_' + Nt++
                return (this[n] = !0), n
              }
            }),
              M.ajaxPrefilter('json jsonp', function(n, t, r) {
                var o,
                  i,
                  a,
                  l =
                    !1 !== n.jsonp &&
                    (Qt.test(n.url)
                      ? 'url'
                      : 'string' == typeof n.data &&
                        0 ===
                          (n.contentType || '').indexOf(
                            'application/x-www-form-urlencoded'
                          ) &&
                        Qt.test(n.data) &&
                        'data')
                if (l || 'jsonp' === n.dataTypes[0])
                  return (
                    (o = n.jsonpCallback = v(n.jsonpCallback)
                      ? n.jsonpCallback()
                      : n.jsonpCallback),
                    l
                      ? (n[l] = n[l].replace(Qt, '$1' + o))
                      : !1 !== n.jsonp &&
                        (n.url +=
                          (Ct.test(n.url) ? '&' : '?') + n.jsonp + '=' + o),
                    (n.converters['script json'] = function() {
                      return a || M.error(o + ' was not called'), a[0]
                    }),
                    (n.dataTypes[0] = 'json'),
                    (i = e[o]),
                    (e[o] = function() {
                      a = arguments
                    }),
                    r.always(function() {
                      void 0 === i ? M(e).removeProp(o) : (e[o] = i),
                        n[o] &&
                          ((n.jsonpCallback = t.jsonpCallback), Jt.push(o)),
                        a && v(i) && i(a[0]),
                        (a = i = void 0)
                    }),
                    'script'
                  )
              }),
              (b.createHTMLDocument = (((Gt = a.implementation.createHTMLDocument(
                ''
              ).body).innerHTML = '<form></form><form></form>'),
              2 === Gt.childNodes.length)),
              (M.parseHTML = function(n, t, e) {
                return 'string' != typeof n
                  ? []
                  : ('boolean' == typeof t && ((e = t), (t = !1)),
                    t ||
                      (b.createHTMLDocument
                        ? (((r = (t = a.implementation.createHTMLDocument(
                            ''
                          )).createElement('base')).href = a.location.href),
                          t.head.appendChild(r))
                        : (t = a)),
                    (i = !e && []),
                    (o = A.exec(n))
                      ? [t.createElement(o[1])]
                      : ((o = _n([n], t, i)),
                        i && i.length && M(i).remove(),
                        M.merge([], o.childNodes)))
                var r, o, i
              }),
              (M.fn.load = function(n, t, e) {
                var r,
                  o,
                  i,
                  a = this,
                  l = n.indexOf(' ')
                return (
                  l > -1 && ((r = wt(n.slice(l))), (n = n.slice(0, l))),
                  v(t)
                    ? ((e = t), (t = void 0))
                    : t && 'object' == typeof t && (o = 'POST'),
                  a.length > 0 &&
                    M.ajax({
                      url: n,
                      type: o || 'GET',
                      dataType: 'html',
                      data: t
                    })
                      .done(function(n) {
                        ;(i = arguments),
                          a.html(
                            r
                              ? M('<div>')
                                  .append(M.parseHTML(n))
                                  .find(r)
                              : n
                          )
                      })
                      .always(
                        e &&
                          function(n, t) {
                            a.each(function() {
                              e.apply(this, i || [n.responseText, t, n])
                            })
                          }
                      ),
                  this
                )
              }),
              M.each(
                [
                  'ajaxStart',
                  'ajaxStop',
                  'ajaxComplete',
                  'ajaxError',
                  'ajaxSuccess',
                  'ajaxSend'
                ],
                function(n, t) {
                  M.fn[t] = function(n) {
                    return this.on(t, n)
                  }
                }
              ),
              (M.expr.pseudos.animated = function(n) {
                return M.grep(M.timers, function(t) {
                  return n === t.elem
                }).length
              }),
              (M.offset = {
                setOffset: function(n, t, e) {
                  var r,
                    o,
                    i,
                    a,
                    l,
                    s,
                    c = M.css(n, 'position'),
                    u = M(n),
                    d = {}
                  'static' === c && (n.style.position = 'relative'),
                    (l = u.offset()),
                    (i = M.css(n, 'top')),
                    (s = M.css(n, 'left')),
                    ('absolute' === c || 'fixed' === c) &&
                    (i + s).indexOf('auto') > -1
                      ? ((a = (r = u.position()).top), (o = r.left))
                      : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
                    v(t) && (t = t.call(n, e, M.extend({}, l))),
                    null != t.top && (d.top = t.top - l.top + a),
                    null != t.left && (d.left = t.left - l.left + o),
                    'using' in t ? t.using.call(n, d) : u.css(d)
                }
              }),
              M.fn.extend({
                offset: function(n) {
                  if (arguments.length)
                    return void 0 === n
                      ? this
                      : this.each(function(t) {
                          M.offset.setOffset(this, n, t)
                        })
                  var t,
                    e,
                    r = this[0]
                  return r
                    ? r.getClientRects().length
                      ? ((t = r.getBoundingClientRect()),
                        (e = r.ownerDocument.defaultView),
                        {
                          top: t.top + e.pageYOffset,
                          left: t.left + e.pageXOffset
                        })
                      : { top: 0, left: 0 }
                    : void 0
                },
                position: function() {
                  if (this[0]) {
                    var n,
                      t,
                      e,
                      r = this[0],
                      o = { top: 0, left: 0 }
                    if ('fixed' === M.css(r, 'position'))
                      t = r.getBoundingClientRect()
                    else {
                      for (
                        t = this.offset(),
                          e = r.ownerDocument,
                          n = r.offsetParent || e.documentElement;
                        n &&
                        (n === e.body || n === e.documentElement) &&
                        'static' === M.css(n, 'position');

                      )
                        n = n.parentNode
                      n &&
                        n !== r &&
                        1 === n.nodeType &&
                        (((o = M(n).offset()).top += M.css(
                          n,
                          'borderTopWidth',
                          !0
                        )),
                        (o.left += M.css(n, 'borderLeftWidth', !0)))
                    }
                    return {
                      top: t.top - o.top - M.css(r, 'marginTop', !0),
                      left: t.left - o.left - M.css(r, 'marginLeft', !0)
                    }
                  }
                },
                offsetParent: function() {
                  return this.map(function() {
                    for (
                      var n = this.offsetParent;
                      n && 'static' === M.css(n, 'position');

                    )
                      n = n.offsetParent
                    return n || ln
                  })
                }
              }),
              M.each(
                { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                function(n, t) {
                  var e = 'pageYOffset' === t
                  M.fn[n] = function(r) {
                    return W(
                      this,
                      function(n, r, o) {
                        var i
                        if (
                          (x(n)
                            ? (i = n)
                            : 9 === n.nodeType && (i = n.defaultView),
                          void 0 === o)
                        )
                          return i ? i[t] : n[r]
                        i
                          ? i.scrollTo(
                              e ? i.pageXOffset : o,
                              e ? o : i.pageYOffset
                            )
                          : (n[r] = o)
                      },
                      n,
                      r,
                      arguments.length
                    )
                  }
                }
              ),
              M.each(['top', 'left'], function(n, t) {
                M.cssHooks[t] = Zn(b.pixelPosition, function(n, e) {
                  if (e)
                    return (
                      (e = Xn(n, t)), Wn.test(e) ? M(n).position()[t] + 'px' : e
                    )
                })
              }),
              M.each({ Height: 'height', Width: 'width' }, function(n, t) {
                M.each(
                  { padding: 'inner' + n, content: t, '': 'outer' + n },
                  function(e, r) {
                    M.fn[r] = function(o, i) {
                      var a = arguments.length && (e || 'boolean' != typeof o),
                        l = e || (!0 === o || !0 === i ? 'margin' : 'border')
                      return W(
                        this,
                        function(t, e, o) {
                          var i
                          return x(t)
                            ? 0 === r.indexOf('outer')
                              ? t['inner' + n]
                              : t.document.documentElement['client' + n]
                            : 9 === t.nodeType
                            ? ((i = t.documentElement),
                              Math.max(
                                t.body['scroll' + n],
                                i['scroll' + n],
                                t.body['offset' + n],
                                i['offset' + n],
                                i['client' + n]
                              ))
                            : void 0 === o
                            ? M.css(t, e, l)
                            : M.style(t, e, o, l)
                        },
                        t,
                        a ? o : void 0,
                        a
                      )
                    }
                  }
                )
              }),
              M.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                  ' '
                ),
                function(n, t) {
                  M.fn[t] = function(n, e) {
                    return arguments.length > 0
                      ? this.on(t, null, n, e)
                      : this.trigger(t)
                  }
                }
              ),
              M.fn.extend({
                hover: function(n, t) {
                  return this.mouseenter(n).mouseleave(t || n)
                }
              }),
              M.fn.extend({
                bind: function(n, t, e) {
                  return this.on(n, null, t, e)
                },
                unbind: function(n, t) {
                  return this.off(n, null, t)
                },
                delegate: function(n, t, e, r) {
                  return this.on(t, n, e, r)
                },
                undelegate: function(n, t, e) {
                  return 1 === arguments.length
                    ? this.off(n, '**')
                    : this.off(t, n || '**', e)
                }
              }),
              (M.proxy = function(n, t) {
                var e, r, o
                if (
                  ('string' == typeof t && ((e = n[t]), (t = n), (n = e)), v(n))
                )
                  return (
                    (r = s.call(arguments, 2)),
                    ((o = function() {
                      return n.apply(t || this, r.concat(s.call(arguments)))
                    }).guid = n.guid = n.guid || M.guid++),
                    o
                  )
              }),
              (M.holdReady = function(n) {
                n ? M.readyWait++ : M.ready(!0)
              }),
              (M.isArray = Array.isArray),
              (M.parseJSON = JSON.parse),
              (M.nodeName = j),
              (M.isFunction = v),
              (M.isWindow = x),
              (M.camelCase = Z),
              (M.type = k),
              (M.now = Date.now),
              (M.isNumeric = function(n) {
                var t = M.type(n)
                return (
                  ('number' === t || 'string' === t) &&
                  !isNaN(n - parseFloat(n))
                )
              }),
              void 0 ===
                (r = function() {
                  return M
                }.apply(t, [])) || (n.exports = r)
            var Kt = e.jQuery,
              ne = e.$
            return (
              (M.noConflict = function(n) {
                return (
                  e.$ === M && (e.$ = ne),
                  n && e.jQuery === M && (e.jQuery = Kt),
                  M
                )
              }),
              o || (e.jQuery = e.$ = M),
              M
            )
          })
        },
        function(n, t, e) {
          'use strict'
          var r = e(1),
            o = e(2),
            i = e.n(o)
          t.a = function(n, t) {
            n &&
              t &&
              (function(n, t) {
                var e,
                  o,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p = 0,
                  m = null,
                  h = null,
                  g = 200,
                  b = 0,
                  v = 750,
                  x = (window.innerWidth / 100) * 25,
                  y = (window.innerHeight / 100) * 60,
                  w = r.layout.tree().size([y, x]),
                  k = r.svg.diagonal().projection(function(n) {
                    return [n.y, n.x]
                  })
                function M() {
                  w.sort(function(n, t) {
                    return t.name.toLowerCase() < n.name.toLowerCase() ? 1 : -1
                  })
                }
                function E(n, t) {
                  var e = g
                  panTimer &&
                    (clearTimeout(panTimer),
                    (translateCoords = r.transform(L.attr('transform'))),
                    'left' == t || 'right' == t
                      ? ((translateX =
                          'left' == t
                            ? translateCoords.translate[0] + e
                            : translateCoords.translate[0] - e),
                        (translateY = translateCoords.translate[1]))
                      : ('up' != t && 'down' != t) ||
                        ((translateX = translateCoords.translate[0]),
                        (translateY =
                          'up' == t
                            ? translateCoords.translate[1] + e
                            : translateCoords.translate[1] - e)),
                    (scaleX = translateCoords.scale[0]),
                    (scaleY = translateCoords.scale[1]),
                    (d = _.scale()),
                    L.transition().attr(
                      'transform',
                      'translate(' +
                        translateX +
                        ',' +
                        translateY +
                        ')scale(' +
                        d +
                        ')'
                    ),
                    r
                      .select(n)
                      .select('g.node')
                      .attr(
                        'transform',
                        'translate(' + translateX + ',' + translateY + ')'
                      ),
                    _.scale(_.scale()),
                    _.translate([translateX, translateY]),
                    (panTimer = setTimeout(function() {
                      E(n, e)
                    }, 50)))
                }
                !(function n(t, e, r) {
                  if (t) {
                    e(t)
                    var o = r(t)
                    if (o)
                      for (var i = o.length, a = 0; a < i; a++) n(o[a], e, r)
                  }
                })(
                  n,
                  function(n) {
                    p = Math.max(n.name.length, p)
                  },
                  function(n) {
                    return n.children && n.children.length > 0
                      ? n.children
                      : null
                  }
                ),
                  M()
                var _ = r.behavior
                    .zoom()
                    .scaleExtent([0.1, 3])
                    .on('zoom', function() {
                      L.attr(
                        'transform',
                        'translate(' +
                          r.event.translate +
                          ')scale(' +
                          r.event.scale +
                          ')'
                      )
                    }),
                  S = r
                    .select(t)
                    .append('svg')
                    .attr('width', x)
                    .attr('height', y)
                    .attr('class', 'overlay')
                    .call(_)
                function T() {
                  ;(m = null),
                    r.selectAll('.ghostCircle').attr('class', 'ghostCircle'),
                    r.select(s).attr('class', 'node'),
                    r
                      .select(s)
                      .select('.ghostCircle')
                      .attr('pointer-events', ''),
                    A(),
                    null !== h && (D(e), O(h), (h = null))
                }
                function N(n) {
                  n._children &&
                    ((n.children = n._children),
                    n.children.forEach(N),
                    (n._children = null))
                }
                o = r.behavior
                  .drag()
                  .on('dragstart', function(n) {
                    n != e &&
                      ((f = !0),
                      (a = w.nodes(n)),
                      r.event.sourceEvent.stopPropagation())
                  })
                  .on('drag', function(n) {
                    if (n != e) {
                      f &&
                        (function(n, t) {
                          ;(h = n),
                            r
                              .select(t)
                              .select('.ghostCircle')
                              .attr('pointer-events', 'none'),
                            r
                              .selectAll('.ghostCircle')
                              .attr('class', 'ghostCircle show'),
                            r.select(t).attr('class', 'node activeDrag'),
                            L.selectAll('g.node').sort(function(n, t) {
                              return n.id != h.id ? 1 : -1
                            }),
                            a.length > 1 &&
                              (w.links(a),
                              L.selectAll('path.link')
                                .data(links, function(n) {
                                  return n.target.id
                                })
                                .remove(),
                              L.selectAll('g.node')
                                .data(a, function(n) {
                                  return n.id
                                })
                                .filter(function(n, t) {
                                  return n.id != h.id
                                })
                                .remove()),
                            w.links(w.nodes(h.parent)),
                            L.selectAll('path.link')
                              .filter(function(n, t) {
                                return n.target.id == h.id
                              })
                              .remove(),
                            (f = null)
                        })(n, (s = this))
                      var t = r.mouse(i()('svg').get(0))
                      if (t[0] < 20) (panTimer = !0), E(this, 'left')
                      else if (t[0] > i()('svg').width() - 20)
                        (panTimer = !0), E(this, 'right')
                      else if (t[1] < 20) (panTimer = !0), E(this, 'up')
                      else if (t[1] > i()('svg').height() - 20)
                        (panTimer = !0), E(this, 'down')
                      else
                        try {
                          clearTimeout(panTimer)
                        } catch (n) {}
                      ;(n.x0 += r.event.dy),
                        (n.y0 += r.event.dx),
                        r
                          .select(this)
                          .attr(
                            'transform',
                            'translate(' + n.y0 + ',' + n.x0 + ')'
                          ),
                        A()
                    }
                  })
                  .on('dragend', function(n) {
                    if (n != e)
                      if (((s = this), m)) {
                        var t = h.parent.children.indexOf(h)
                        t > -1 && h.parent.children.splice(t, 1),
                          void 0 !== m.children || void 0 !== m._children
                            ? void 0 !== m.children
                              ? m.children.push(h)
                              : m._children.push(h)
                            : ((m.children = []), m.children.push(h)),
                          N(m),
                          M(),
                          T()
                      } else T()
                  })
                var C = function(n) {
                    ;(m = n), A()
                  },
                  j = function(n) {
                    ;(m = null), A()
                  },
                  A = function() {
                    var n = []
                    null !== h &&
                      null !== m &&
                      (n = [
                        {
                          source: { x: m.y0, y: m.x0 },
                          target: { x: h.y0, y: h.x0 }
                        }
                      ])
                    var t = L.selectAll('.templink').data(n)
                    t
                      .enter()
                      .append('path')
                      .attr('class', 'templink')
                      .attr('d', r.svg.diagonal())
                      .attr('pointer-events', 'none'),
                      t.attr('d', r.svg.diagonal()),
                      t.exit().remove()
                  }
                function O(n) {
                  ;(d = _.scale()),
                    (c = -n.y0),
                    (u = -n.x0),
                    (c = c * d + x / 2),
                    (u = u * d + y / 2),
                    r
                      .select('g')
                      .transition()
                      .duration(v)
                      .attr(
                        'transform',
                        'translate(' + c + ',' + u + ')scale(' + d + ')'
                      ),
                    _.scale(d),
                    _.translate([c, u])
                }
                function z(n) {
                  r.event.defaultPrevented ||
                    (D(
                      (n = (function(n) {
                        return (
                          n.children
                            ? ((n._children = n.children), (n.children = null))
                            : n._children &&
                              ((n.children = n._children),
                              (n._children = null)),
                          n
                        )
                      })(n))
                    ),
                    O(n))
                }
                function D(n) {
                  var t = [1]
                  !(function n(e, r) {
                    r.children &&
                      r.children.length > 0 &&
                      (t.length <= e + 1 && t.push(0),
                      (t[e + 1] += r.children.length),
                      r.children.forEach(function(t) {
                        n(e + 1, t)
                      }))
                  })(0, e)
                  var i = 25 * r.max(t),
                    a = (w = w.size([i, x])).nodes(e).reverse(),
                    s = w.links(a)
                  a.forEach(function(n) {
                    n.y = n.depth * (10 * p)
                  })
                  var c = (l = L.selectAll('g.node').data(a, function(n) {
                    return n.id || (n.id = ++b)
                  }))
                    .enter()
                    .append('g')
                    .call(o)
                    .attr('class', 'node')
                    .attr('transform', function(t) {
                      return 'translate(' + n.y0 + ',' + n.x0 + ')'
                    })
                    .on('click', z)
                  c
                    .append('circle')
                    .attr('class', 'nodeCircle')
                    .attr('r', 0)
                    .style('fill', function(n) {
                      return n._children ? 'lightsteelblue' : '#fff'
                    }),
                    c
                      .append('text')
                      .attr('x', function(n) {
                        return n.children || n._children ? -10 : 10
                      })
                      .attr('dy', '.35em')
                      .attr('class', 'nodeText')
                      .attr('text-anchor', function(n) {
                        return n.children || n._children ? 'end' : 'start'
                      })
                      .text(function(n) {
                        return n.name
                      })
                      .style('fill-opacity', 0),
                    c
                      .append('circle')
                      .attr('class', 'ghostCircle')
                      .attr('r', 30)
                      .attr('opacity', 0.2)
                      .style('fill', 'red')
                      .attr('pointer-events', 'mouseover')
                      .on('mouseover', function(n) {
                        C(n)
                      })
                      .on('mouseout', function(n) {
                        j(n)
                      }),
                    l
                      .select('text')
                      .attr('x', function(n) {
                        return n.children || n._children ? -10 : 10
                      })
                      .attr('text-anchor', function(n) {
                        return n.children || n._children ? 'end' : 'start'
                      })
                      .text(function(n) {
                        return n.name
                      }),
                    l
                      .select('circle.nodeCircle')
                      .attr('r', 4.5)
                      .style('fill', function(n) {
                        return n._children ? 'lightsteelblue' : '#fff'
                      }),
                    l
                      .transition()
                      .duration(v)
                      .attr('transform', function(n) {
                        return 'translate(' + n.y + ',' + n.x + ')'
                      })
                      .select('text')
                      .style('fill-opacity', 1)
                  var u = l
                    .exit()
                    .transition()
                    .duration(v)
                    .attr('transform', function(t) {
                      return 'translate(' + n.y + ',' + n.x + ')'
                    })
                    .remove()
                  u.select('circle').attr('r', 0),
                    u.select('text').style('fill-opacity', 0)
                  var d = L.selectAll('path.link').data(s, function(n) {
                    return n.target.id
                  })
                  d
                    .enter()
                    .insert('path', 'g')
                    .attr('class', 'link')
                    .attr('d', function(t) {
                      var e = { x: n.x0, y: n.y0 }
                      return k({ source: e, target: e })
                    }),
                    d
                      .transition()
                      .duration(v)
                      .attr('d', k),
                    d
                      .exit()
                      .transition()
                      .duration(v)
                      .attr('d', function(t) {
                        var e = { x: n.x, y: n.y }
                        return k({ source: e, target: e })
                      })
                      .remove(),
                    a.forEach(function(n) {
                      ;(n.x0 = n.x), (n.y0 = n.y)
                    })
                }
                var L = S.append('g')
                ;((e = n).x0 = y / 2),
                  (e.y0 = 0),
                  D(e),
                  O(e),
                  L.transition().attr('transform', 'translate(150,150)scale(1)')
              })(n, t)
          }
        },
        function(n, t, e) {
          'use strict'
          ;(function(n) {
            for (
              var e =
                  'undefined' != typeof window &&
                  'undefined' != typeof document,
                r = ['Edge', 'Trident', 'Firefox'],
                o = 0,
                i = 0;
              i < r.length;
              i += 1
            )
              if (e && navigator.userAgent.indexOf(r[i]) >= 0) {
                o = 1
                break
              }
            var a =
              e && window.Promise
                ? function(n) {
                    var t = !1
                    return function() {
                      t ||
                        ((t = !0),
                        window.Promise.resolve().then(function() {
                          ;(t = !1), n()
                        }))
                    }
                  }
                : function(n) {
                    var t = !1
                    return function() {
                      t ||
                        ((t = !0),
                        setTimeout(function() {
                          ;(t = !1), n()
                        }, o))
                    }
                  }
            function l(n) {
              return n && '[object Function]' === {}.toString.call(n)
            }
            function s(n, t) {
              if (1 !== n.nodeType) return []
              var e = n.ownerDocument.defaultView.getComputedStyle(n, null)
              return t ? e[t] : e
            }
            function c(n) {
              return 'HTML' === n.nodeName ? n : n.parentNode || n.host
            }
            function u(n) {
              if (!n) return document.body
              switch (n.nodeName) {
                case 'HTML':
                case 'BODY':
                  return n.ownerDocument.body
                case '#document':
                  return n.body
              }
              var t = s(n),
                e = t.overflow,
                r = t.overflowX,
                o = t.overflowY
              return /(auto|scroll|overlay)/.test(e + o + r) ? n : u(c(n))
            }
            var d =
                e && !(!window.MSInputMethodContext || !document.documentMode),
              f = e && /MSIE 10/.test(navigator.userAgent)
            function p(n) {
              return 11 === n ? d : 10 === n ? f : d || f
            }
            function m(n) {
              if (!n) return document.documentElement
              for (
                var t = p(10) ? document.body : null,
                  e = n.offsetParent || null;
                e === t && n.nextElementSibling;

              )
                e = (n = n.nextElementSibling).offsetParent
              var r = e && e.nodeName
              return r && 'BODY' !== r && 'HTML' !== r
                ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(e.nodeName) &&
                  'static' === s(e, 'position')
                  ? m(e)
                  : e
                : n
                ? n.ownerDocument.documentElement
                : document.documentElement
            }
            function h(n) {
              return null !== n.parentNode ? h(n.parentNode) : n
            }
            function g(n, t) {
              if (!(n && n.nodeType && t && t.nodeType))
                return document.documentElement
              var e =
                  n.compareDocumentPosition(t) &
                  Node.DOCUMENT_POSITION_FOLLOWING,
                r = e ? n : t,
                o = e ? t : n,
                i = document.createRange()
              i.setStart(r, 0), i.setEnd(o, 0)
              var a,
                l,
                s = i.commonAncestorContainer
              if ((n !== s && t !== s) || r.contains(o))
                return 'BODY' === (l = (a = s).nodeName) ||
                  ('HTML' !== l && m(a.firstElementChild) !== a)
                  ? m(s)
                  : s
              var c = h(n)
              return c.host ? g(c.host, t) : g(n, h(t).host)
            }
            function b(n) {
              var t =
                  'top' ===
                  (arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'top')
                    ? 'scrollTop'
                    : 'scrollLeft',
                e = n.nodeName
              if ('BODY' === e || 'HTML' === e) {
                var r = n.ownerDocument.documentElement
                return (n.ownerDocument.scrollingElement || r)[t]
              }
              return n[t]
            }
            function v(n, t) {
              var e = 'x' === t ? 'Left' : 'Top',
                r = 'Left' === e ? 'Right' : 'Bottom'
              return (
                parseFloat(n['border' + e + 'Width'], 10) +
                parseFloat(n['border' + r + 'Width'], 10)
              )
            }
            function x(n, t, e, r) {
              return Math.max(
                t['offset' + n],
                t['scroll' + n],
                e['client' + n],
                e['offset' + n],
                e['scroll' + n],
                p(10)
                  ? parseInt(e['offset' + n]) +
                      parseInt(
                        r['margin' + ('Height' === n ? 'Top' : 'Left')]
                      ) +
                      parseInt(
                        r['margin' + ('Height' === n ? 'Bottom' : 'Right')]
                      )
                  : 0
              )
            }
            function y(n) {
              var t = n.body,
                e = n.documentElement,
                r = p(10) && getComputedStyle(e)
              return {
                height: x('Height', t, e, r),
                width: x('Width', t, e, r)
              }
            }
            var w = function(n, t) {
                if (!(n instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              },
              k = (function() {
                function n(n, t) {
                  for (var e = 0; e < t.length; e++) {
                    var r = t[e]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r)
                  }
                }
                return function(t, e, r) {
                  return e && n(t.prototype, e), r && n(t, r), t
                }
              })(),
              M = function(n, t, e) {
                return (
                  t in n
                    ? Object.defineProperty(n, t, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (n[t] = e),
                  n
                )
              },
              E =
                Object.assign ||
                function(n) {
                  for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t]
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (n[r] = e[r])
                  }
                  return n
                }
            function _(n) {
              return E({}, n, {
                right: n.left + n.width,
                bottom: n.top + n.height
              })
            }
            function S(n) {
              var t = {}
              try {
                if (p(10)) {
                  t = n.getBoundingClientRect()
                  var e = b(n, 'top'),
                    r = b(n, 'left')
                  ;(t.top += e), (t.left += r), (t.bottom += e), (t.right += r)
                } else t = n.getBoundingClientRect()
              } catch (n) {}
              var o = {
                  left: t.left,
                  top: t.top,
                  width: t.right - t.left,
                  height: t.bottom - t.top
                },
                i = 'HTML' === n.nodeName ? y(n.ownerDocument) : {},
                a = i.width || n.clientWidth || o.right - o.left,
                l = i.height || n.clientHeight || o.bottom - o.top,
                c = n.offsetWidth - a,
                u = n.offsetHeight - l
              if (c || u) {
                var d = s(n)
                ;(c -= v(d, 'x')),
                  (u -= v(d, 'y')),
                  (o.width -= c),
                  (o.height -= u)
              }
              return _(o)
            }
            function T(n, t) {
              var e =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = p(10),
                o = 'HTML' === t.nodeName,
                i = S(n),
                a = S(t),
                l = u(n),
                c = s(t),
                d = parseFloat(c.borderTopWidth, 10),
                f = parseFloat(c.borderLeftWidth, 10)
              e &&
                o &&
                ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)))
              var m = _({
                top: i.top - a.top - d,
                left: i.left - a.left - f,
                width: i.width,
                height: i.height
              })
              if (((m.marginTop = 0), (m.marginLeft = 0), !r && o)) {
                var h = parseFloat(c.marginTop, 10),
                  g = parseFloat(c.marginLeft, 10)
                ;(m.top -= d - h),
                  (m.bottom -= d - h),
                  (m.left -= f - g),
                  (m.right -= f - g),
                  (m.marginTop = h),
                  (m.marginLeft = g)
              }
              return (
                (r && !e ? t.contains(l) : t === l && 'BODY' !== l.nodeName) &&
                  (m = (function(n, t) {
                    var e =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      r = b(t, 'top'),
                      o = b(t, 'left'),
                      i = e ? -1 : 1
                    return (
                      (n.top += r * i),
                      (n.bottom += r * i),
                      (n.left += o * i),
                      (n.right += o * i),
                      n
                    )
                  })(m, t)),
                m
              )
            }
            function N(n) {
              if (!n || !n.parentElement || p()) return document.documentElement
              for (var t = n.parentElement; t && 'none' === s(t, 'transform'); )
                t = t.parentElement
              return t || document.documentElement
            }
            function C(n, t, e, r) {
              var o =
                  arguments.length > 4 &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                i = { top: 0, left: 0 },
                a = o ? N(n) : g(n, t)
              if ('viewport' === r)
                i = (function(n) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    e = n.ownerDocument.documentElement,
                    r = T(n, e),
                    o = Math.max(e.clientWidth, window.innerWidth || 0),
                    i = Math.max(e.clientHeight, window.innerHeight || 0),
                    a = t ? 0 : b(e),
                    l = t ? 0 : b(e, 'left')
                  return _({
                    top: a - r.top + r.marginTop,
                    left: l - r.left + r.marginLeft,
                    width: o,
                    height: i
                  })
                })(a, o)
              else {
                var l = void 0
                'scrollParent' === r
                  ? 'BODY' === (l = u(c(t))).nodeName &&
                    (l = n.ownerDocument.documentElement)
                  : (l = 'window' === r ? n.ownerDocument.documentElement : r)
                var d = T(l, a, o)
                if (
                  'HTML' !== l.nodeName ||
                  (function n(t) {
                    var e = t.nodeName
                    if ('BODY' === e || 'HTML' === e) return !1
                    if ('fixed' === s(t, 'position')) return !0
                    var r = c(t)
                    return !!r && n(r)
                  })(a)
                )
                  i = d
                else {
                  var f = y(n.ownerDocument),
                    p = f.height,
                    m = f.width
                  ;(i.top += d.top - d.marginTop),
                    (i.bottom = p + d.top),
                    (i.left += d.left - d.marginLeft),
                    (i.right = m + d.left)
                }
              }
              var h = 'number' == typeof (e = e || 0)
              return (
                (i.left += h ? e : e.left || 0),
                (i.top += h ? e : e.top || 0),
                (i.right -= h ? e : e.right || 0),
                (i.bottom -= h ? e : e.bottom || 0),
                i
              )
            }
            function j(n, t, e, r, o) {
              var i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0
              if (-1 === n.indexOf('auto')) return n
              var a = C(e, r, i, o),
                l = {
                  top: { width: a.width, height: t.top - a.top },
                  right: { width: a.right - t.right, height: a.height },
                  bottom: { width: a.width, height: a.bottom - t.bottom },
                  left: { width: t.left - a.left, height: a.height }
                },
                s = Object.keys(l)
                  .map(function(n) {
                    return E({ key: n }, l[n], {
                      area: ((t = l[n]), t.width * t.height)
                    })
                    var t
                  })
                  .sort(function(n, t) {
                    return t.area - n.area
                  }),
                c = s.filter(function(n) {
                  var t = n.width,
                    r = n.height
                  return t >= e.clientWidth && r >= e.clientHeight
                }),
                u = c.length > 0 ? c[0].key : s[0].key,
                d = n.split('-')[1]
              return u + (d ? '-' + d : '')
            }
            function A(n, t, e) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return T(e, r ? N(t) : g(t, e), r)
            }
            function O(n) {
              var t = n.ownerDocument.defaultView.getComputedStyle(n),
                e =
                  parseFloat(t.marginTop || 0) +
                  parseFloat(t.marginBottom || 0),
                r =
                  parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0)
              return { width: n.offsetWidth + r, height: n.offsetHeight + e }
            }
            function z(n) {
              var t = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom'
              }
              return n.replace(/left|right|bottom|top/g, function(n) {
                return t[n]
              })
            }
            function D(n, t, e) {
              e = e.split('-')[0]
              var r = O(n),
                o = { width: r.width, height: r.height },
                i = -1 !== ['right', 'left'].indexOf(e),
                a = i ? 'top' : 'left',
                l = i ? 'left' : 'top',
                s = i ? 'height' : 'width',
                c = i ? 'width' : 'height'
              return (
                (o[a] = t[a] + t[s] / 2 - r[s] / 2),
                (o[l] = e === l ? t[l] - r[c] : t[z(l)]),
                o
              )
            }
            function L(n, t) {
              return Array.prototype.find ? n.find(t) : n.filter(t)[0]
            }
            function q(n, t, e) {
              return (
                (void 0 === e
                  ? n
                  : n.slice(
                      0,
                      (function(n, t, e) {
                        if (Array.prototype.findIndex)
                          return n.findIndex(function(n) {
                            return n[t] === e
                          })
                        var r = L(n, function(n) {
                          return n[t] === e
                        })
                        return n.indexOf(r)
                      })(n, 'name', e)
                    )
                ).forEach(function(n) {
                  n.function &&
                    console.warn(
                      '`modifier.function` is deprecated, use `modifier.fn`!'
                    )
                  var e = n.function || n.fn
                  n.enabled &&
                    l(e) &&
                    ((t.offsets.popper = _(t.offsets.popper)),
                    (t.offsets.reference = _(t.offsets.reference)),
                    (t = e(t, n)))
                }),
                t
              )
            }
            function H() {
              if (!this.state.isDestroyed) {
                var n = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
                }
                ;(n.offsets.reference = A(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                  (n.placement = j(
                    this.options.placement,
                    n.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (n.originalPlacement = n.placement),
                  (n.positionFixed = this.options.positionFixed),
                  (n.offsets.popper = D(
                    this.popper,
                    n.offsets.reference,
                    n.placement
                  )),
                  (n.offsets.popper.position = this.options.positionFixed
                    ? 'fixed'
                    : 'absolute'),
                  (n = q(this.modifiers, n)),
                  this.state.isCreated
                    ? this.options.onUpdate(n)
                    : ((this.state.isCreated = !0), this.options.onCreate(n))
              }
            }
            function P(n, t) {
              return n.some(function(n) {
                var e = n.name
                return n.enabled && e === t
              })
            }
            function I(n) {
              for (
                var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
                  e = n.charAt(0).toUpperCase() + n.slice(1),
                  r = 0;
                r < t.length;
                r++
              ) {
                var o = t[r],
                  i = o ? '' + o + e : n
                if (void 0 !== document.body.style[i]) return i
              }
              return null
            }
            function R() {
              return (
                (this.state.isDestroyed = !0),
                P(this.modifiers, 'applyStyle') &&
                  (this.popper.removeAttribute('x-placement'),
                  (this.popper.style.position = ''),
                  (this.popper.style.top = ''),
                  (this.popper.style.left = ''),
                  (this.popper.style.right = ''),
                  (this.popper.style.bottom = ''),
                  (this.popper.style.willChange = ''),
                  (this.popper.style[I('transform')] = '')),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              )
            }
            function F(n) {
              var t = n.ownerDocument
              return t ? t.defaultView : window
            }
            function B() {
              this.state.eventsEnabled ||
                (this.state = (function(n, t, e, r) {
                  ;(e.updateBound = r),
                    F(n).addEventListener('resize', e.updateBound, {
                      passive: !0
                    })
                  var o = u(n)
                  return (
                    (function n(t, e, r, o) {
                      var i = 'BODY' === t.nodeName,
                        a = i ? t.ownerDocument.defaultView : t
                      a.addEventListener(e, r, { passive: !0 }),
                        i || n(u(a.parentNode), e, r, o),
                        o.push(a)
                    })(o, 'scroll', e.updateBound, e.scrollParents),
                    (e.scrollElement = o),
                    (e.eventsEnabled = !0),
                    e
                  )
                })(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ))
            }
            function U() {
              var n, t
              this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = ((n = this.reference),
                (t = this.state),
                F(n).removeEventListener('resize', t.updateBound),
                t.scrollParents.forEach(function(n) {
                  n.removeEventListener('scroll', t.updateBound)
                }),
                (t.updateBound = null),
                (t.scrollParents = []),
                (t.scrollElement = null),
                (t.eventsEnabled = !1),
                t)))
            }
            function $(n) {
              return '' !== n && !isNaN(parseFloat(n)) && isFinite(n)
            }
            function W(n, t) {
              Object.keys(t).forEach(function(e) {
                var r = ''
                ;-1 !==
                  ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                    e
                  ) &&
                  $(t[e]) &&
                  (r = 'px'),
                  (n.style[e] = t[e] + r)
              })
            }
            var Y = e && /Firefox/i.test(navigator.userAgent)
            function V(n, t, e) {
              var r = L(n, function(n) {
                  return n.name === t
                }),
                o =
                  !!r &&
                  n.some(function(n) {
                    return n.name === e && n.enabled && n.order < r.order
                  })
              if (!o) {
                var i = '`' + t + '`',
                  a = '`' + e + '`'
                console.warn(
                  a +
                    ' modifier is required by ' +
                    i +
                    ' modifier in order to work, be sure to include it before ' +
                    i +
                    '!'
                )
              }
              return o
            }
            var X = [
                'auto-start',
                'auto',
                'auto-end',
                'top-start',
                'top',
                'top-end',
                'right-start',
                'right',
                'right-end',
                'bottom-end',
                'bottom',
                'bottom-start',
                'left-end',
                'left',
                'left-start'
              ],
              Z = X.slice(3)
            function G(n) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                e = Z.indexOf(n),
                r = Z.slice(e + 1).concat(Z.slice(0, e))
              return t ? r.reverse() : r
            }
            var J = 'flip',
              Q = 'clockwise',
              K = 'counterclockwise'
            var nn = {
                placement: 'bottom',
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                  shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(n) {
                      var t = n.placement,
                        e = t.split('-')[0],
                        r = t.split('-')[1]
                      if (r) {
                        var o = n.offsets,
                          i = o.reference,
                          a = o.popper,
                          l = -1 !== ['bottom', 'top'].indexOf(e),
                          s = l ? 'left' : 'top',
                          c = l ? 'width' : 'height',
                          u = {
                            start: M({}, s, i[s]),
                            end: M({}, s, i[s] + i[c] - a[c])
                          }
                        n.offsets.popper = E({}, a, u[r])
                      }
                      return n
                    }
                  },
                  offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(n, t) {
                      var e,
                        r = t.offset,
                        o = n.placement,
                        i = n.offsets,
                        a = i.popper,
                        l = i.reference,
                        s = o.split('-')[0]
                      return (
                        (e = $(+r)
                          ? [+r, 0]
                          : (function(n, t, e, r) {
                              var o = [0, 0],
                                i = -1 !== ['right', 'left'].indexOf(r),
                                a = n.split(/(\+|\-)/).map(function(n) {
                                  return n.trim()
                                }),
                                l = a.indexOf(
                                  L(a, function(n) {
                                    return -1 !== n.search(/,|\s/)
                                  })
                                )
                              a[l] &&
                                -1 === a[l].indexOf(',') &&
                                console.warn(
                                  'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                                )
                              var s = /\s*,\s*|\s+/,
                                c =
                                  -1 !== l
                                    ? [
                                        a
                                          .slice(0, l)
                                          .concat([a[l].split(s)[0]]),
                                        [a[l].split(s)[1]].concat(
                                          a.slice(l + 1)
                                        )
                                      ]
                                    : [a]
                              return (
                                (c = c.map(function(n, r) {
                                  var o = (1 === r
                                    ? !i
                                    : i)
                                      ? 'height'
                                      : 'width',
                                    a = !1
                                  return n
                                    .reduce(function(n, t) {
                                      return '' === n[n.length - 1] &&
                                        -1 !== ['+', '-'].indexOf(t)
                                        ? ((n[n.length - 1] = t), (a = !0), n)
                                        : a
                                        ? ((n[n.length - 1] += t), (a = !1), n)
                                        : n.concat(t)
                                    }, [])
                                    .map(function(n) {
                                      return (function(n, t, e, r) {
                                        var o = n.match(
                                            /((?:\-|\+)?\d*\.?\d*)(.*)/
                                          ),
                                          i = +o[1],
                                          a = o[2]
                                        if (!i) return n
                                        if (0 === a.indexOf('%')) {
                                          var l = void 0
                                          switch (a) {
                                            case '%p':
                                              l = e
                                              break
                                            case '%':
                                            case '%r':
                                            default:
                                              l = r
                                          }
                                          return (_(l)[t] / 100) * i
                                        }
                                        return 'vh' === a || 'vw' === a
                                          ? (('vh' === a
                                              ? Math.max(
                                                  document.documentElement
                                                    .clientHeight,
                                                  window.innerHeight || 0
                                                )
                                              : Math.max(
                                                  document.documentElement
                                                    .clientWidth,
                                                  window.innerWidth || 0
                                                )) /
                                              100) *
                                              i
                                          : i
                                      })(n, o, t, e)
                                    })
                                })).forEach(function(n, t) {
                                  n.forEach(function(e, r) {
                                    $(e) &&
                                      (o[t] += e * ('-' === n[r - 1] ? -1 : 1))
                                  })
                                }),
                                o
                              )
                            })(r, a, l, s)),
                        'left' === s
                          ? ((a.top += e[0]), (a.left -= e[1]))
                          : 'right' === s
                          ? ((a.top += e[0]), (a.left += e[1]))
                          : 'top' === s
                          ? ((a.left += e[0]), (a.top -= e[1]))
                          : 'bottom' === s &&
                            ((a.left += e[0]), (a.top += e[1])),
                        (n.popper = a),
                        n
                      )
                    },
                    offset: 0
                  },
                  preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(n, t) {
                      var e = t.boundariesElement || m(n.instance.popper)
                      n.instance.reference === e && (e = m(e))
                      var r = I('transform'),
                        o = n.instance.popper.style,
                        i = o.top,
                        a = o.left,
                        l = o[r]
                      ;(o.top = ''), (o.left = ''), (o[r] = '')
                      var s = C(
                        n.instance.popper,
                        n.instance.reference,
                        t.padding,
                        e,
                        n.positionFixed
                      )
                      ;(o.top = i), (o.left = a), (o[r] = l), (t.boundaries = s)
                      var c = t.priority,
                        u = n.offsets.popper,
                        d = {
                          primary: function(n) {
                            var e = u[n]
                            return (
                              u[n] < s[n] &&
                                !t.escapeWithReference &&
                                (e = Math.max(u[n], s[n])),
                              M({}, n, e)
                            )
                          },
                          secondary: function(n) {
                            var e = 'right' === n ? 'left' : 'top',
                              r = u[e]
                            return (
                              u[n] > s[n] &&
                                !t.escapeWithReference &&
                                (r = Math.min(
                                  u[e],
                                  s[n] - ('right' === n ? u.width : u.height)
                                )),
                              M({}, e, r)
                            )
                          }
                        }
                      return (
                        c.forEach(function(n) {
                          var t =
                            -1 !== ['left', 'top'].indexOf(n)
                              ? 'primary'
                              : 'secondary'
                          u = E({}, u, d[t](n))
                        }),
                        (n.offsets.popper = u),
                        n
                      )
                    },
                    priority: ['left', 'right', 'top', 'bottom'],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                  },
                  keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(n) {
                      var t = n.offsets,
                        e = t.popper,
                        r = t.reference,
                        o = n.placement.split('-')[0],
                        i = Math.floor,
                        a = -1 !== ['top', 'bottom'].indexOf(o),
                        l = a ? 'right' : 'bottom',
                        s = a ? 'left' : 'top',
                        c = a ? 'width' : 'height'
                      return (
                        e[l] < i(r[s]) &&
                          (n.offsets.popper[s] = i(r[s]) - e[c]),
                        e[s] > i(r[l]) && (n.offsets.popper[s] = i(r[l])),
                        n
                      )
                    }
                  },
                  arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(n, t) {
                      var e
                      if (!V(n.instance.modifiers, 'arrow', 'keepTogether'))
                        return n
                      var r = t.element
                      if ('string' == typeof r) {
                        if (!(r = n.instance.popper.querySelector(r))) return n
                      } else if (!n.instance.popper.contains(r))
                        return (
                          console.warn(
                            'WARNING: `arrow.element` must be child of its popper element!'
                          ),
                          n
                        )
                      var o = n.placement.split('-')[0],
                        i = n.offsets,
                        a = i.popper,
                        l = i.reference,
                        c = -1 !== ['left', 'right'].indexOf(o),
                        u = c ? 'height' : 'width',
                        d = c ? 'Top' : 'Left',
                        f = d.toLowerCase(),
                        p = c ? 'left' : 'top',
                        m = c ? 'bottom' : 'right',
                        h = O(r)[u]
                      l[m] - h < a[f] &&
                        (n.offsets.popper[f] -= a[f] - (l[m] - h)),
                        l[f] + h > a[m] &&
                          (n.offsets.popper[f] += l[f] + h - a[m]),
                        (n.offsets.popper = _(n.offsets.popper))
                      var g = l[f] + l[u] / 2 - h / 2,
                        b = s(n.instance.popper),
                        v = parseFloat(b['margin' + d], 10),
                        x = parseFloat(b['border' + d + 'Width'], 10),
                        y = g - n.offsets.popper[f] - v - x
                      return (
                        (y = Math.max(Math.min(a[u] - h, y), 0)),
                        (n.arrowElement = r),
                        (n.offsets.arrow = (M((e = {}), f, Math.round(y)),
                        M(e, p, ''),
                        e)),
                        n
                      )
                    },
                    element: '[x-arrow]'
                  },
                  flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(n, t) {
                      if (P(n.instance.modifiers, 'inner')) return n
                      if (n.flipped && n.placement === n.originalPlacement)
                        return n
                      var e = C(
                          n.instance.popper,
                          n.instance.reference,
                          t.padding,
                          t.boundariesElement,
                          n.positionFixed
                        ),
                        r = n.placement.split('-')[0],
                        o = z(r),
                        i = n.placement.split('-')[1] || '',
                        a = []
                      switch (t.behavior) {
                        case J:
                          a = [r, o]
                          break
                        case Q:
                          a = G(r)
                          break
                        case K:
                          a = G(r, !0)
                          break
                        default:
                          a = t.behavior
                      }
                      return (
                        a.forEach(function(l, s) {
                          if (r !== l || a.length === s + 1) return n
                          ;(r = n.placement.split('-')[0]), (o = z(r))
                          var c = n.offsets.popper,
                            u = n.offsets.reference,
                            d = Math.floor,
                            f =
                              ('left' === r && d(c.right) > d(u.left)) ||
                              ('right' === r && d(c.left) < d(u.right)) ||
                              ('top' === r && d(c.bottom) > d(u.top)) ||
                              ('bottom' === r && d(c.top) < d(u.bottom)),
                            p = d(c.left) < d(e.left),
                            m = d(c.right) > d(e.right),
                            h = d(c.top) < d(e.top),
                            g = d(c.bottom) > d(e.bottom),
                            b =
                              ('left' === r && p) ||
                              ('right' === r && m) ||
                              ('top' === r && h) ||
                              ('bottom' === r && g),
                            v = -1 !== ['top', 'bottom'].indexOf(r),
                            x =
                              !!t.flipVariations &&
                              ((v && 'start' === i && p) ||
                                (v && 'end' === i && m) ||
                                (!v && 'start' === i && h) ||
                                (!v && 'end' === i && g)),
                            y =
                              !!t.flipVariationsByContent &&
                              ((v && 'start' === i && m) ||
                                (v && 'end' === i && p) ||
                                (!v && 'start' === i && g) ||
                                (!v && 'end' === i && h)),
                            w = x || y
                          ;(f || b || w) &&
                            ((n.flipped = !0),
                            (f || b) && (r = a[s + 1]),
                            w &&
                              (i = (function(n) {
                                return 'end' === n
                                  ? 'start'
                                  : 'start' === n
                                  ? 'end'
                                  : n
                              })(i)),
                            (n.placement = r + (i ? '-' + i : '')),
                            (n.offsets.popper = E(
                              {},
                              n.offsets.popper,
                              D(
                                n.instance.popper,
                                n.offsets.reference,
                                n.placement
                              )
                            )),
                            (n = q(n.instance.modifiers, n, 'flip')))
                        }),
                        n
                      )
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport',
                    flipVariations: !1,
                    flipVariationsByContent: !1
                  },
                  inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(n) {
                      var t = n.placement,
                        e = t.split('-')[0],
                        r = n.offsets,
                        o = r.popper,
                        i = r.reference,
                        a = -1 !== ['left', 'right'].indexOf(e),
                        l = -1 === ['top', 'left'].indexOf(e)
                      return (
                        (o[a ? 'left' : 'top'] =
                          i[e] - (l ? o[a ? 'width' : 'height'] : 0)),
                        (n.placement = z(t)),
                        (n.offsets.popper = _(o)),
                        n
                      )
                    }
                  },
                  hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(n) {
                      if (!V(n.instance.modifiers, 'hide', 'preventOverflow'))
                        return n
                      var t = n.offsets.reference,
                        e = L(n.instance.modifiers, function(n) {
                          return 'preventOverflow' === n.name
                        }).boundaries
                      if (
                        t.bottom < e.top ||
                        t.left > e.right ||
                        t.top > e.bottom ||
                        t.right < e.left
                      ) {
                        if (!0 === n.hide) return n
                        ;(n.hide = !0),
                          (n.attributes['x-out-of-boundaries'] = '')
                      } else {
                        if (!1 === n.hide) return n
                        ;(n.hide = !1),
                          (n.attributes['x-out-of-boundaries'] = !1)
                      }
                      return n
                    }
                  },
                  computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(n, t) {
                      var e = t.x,
                        r = t.y,
                        o = n.offsets.popper,
                        i = L(n.instance.modifiers, function(n) {
                          return 'applyStyle' === n.name
                        }).gpuAcceleration
                      void 0 !== i &&
                        console.warn(
                          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                        )
                      var a,
                        l,
                        s = void 0 !== i ? i : t.gpuAcceleration,
                        c = m(n.instance.popper),
                        u = S(c),
                        d = { position: o.position },
                        f = (function(n, t) {
                          var e = n.offsets,
                            r = e.popper,
                            o = e.reference,
                            i = Math.round,
                            a = Math.floor,
                            l = function(n) {
                              return n
                            },
                            s = i(o.width),
                            c = i(r.width),
                            u = -1 !== ['left', 'right'].indexOf(n.placement),
                            d = -1 !== n.placement.indexOf('-'),
                            f = t ? (u || d || s % 2 == c % 2 ? i : a) : l,
                            p = t ? i : l
                          return {
                            left: f(
                              s % 2 == 1 && c % 2 == 1 && !d && t
                                ? r.left - 1
                                : r.left
                            ),
                            top: p(r.top),
                            bottom: p(r.bottom),
                            right: f(r.right)
                          }
                        })(n, window.devicePixelRatio < 2 || !Y),
                        p = 'bottom' === e ? 'top' : 'bottom',
                        h = 'right' === r ? 'left' : 'right',
                        g = I('transform')
                      if (
                        ((l =
                          'bottom' === p
                            ? 'HTML' === c.nodeName
                              ? -c.clientHeight + f.bottom
                              : -u.height + f.bottom
                            : f.top),
                        (a =
                          'right' === h
                            ? 'HTML' === c.nodeName
                              ? -c.clientWidth + f.right
                              : -u.width + f.right
                            : f.left),
                        s && g)
                      )
                        (d[g] = 'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                          (d[p] = 0),
                          (d[h] = 0),
                          (d.willChange = 'transform')
                      else {
                        var b = 'bottom' === p ? -1 : 1,
                          v = 'right' === h ? -1 : 1
                        ;(d[p] = l * b),
                          (d[h] = a * v),
                          (d.willChange = p + ', ' + h)
                      }
                      var x = { 'x-placement': n.placement }
                      return (
                        (n.attributes = E({}, x, n.attributes)),
                        (n.styles = E({}, d, n.styles)),
                        (n.arrowStyles = E({}, n.offsets.arrow, n.arrowStyles)),
                        n
                      )
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                  },
                  applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(n) {
                      var t, e
                      return (
                        W(n.instance.popper, n.styles),
                        (t = n.instance.popper),
                        (e = n.attributes),
                        Object.keys(e).forEach(function(n) {
                          !1 !== e[n]
                            ? t.setAttribute(n, e[n])
                            : t.removeAttribute(n)
                        }),
                        n.arrowElement &&
                          Object.keys(n.arrowStyles).length &&
                          W(n.arrowElement, n.arrowStyles),
                        n
                      )
                    },
                    onLoad: function(n, t, e, r, o) {
                      var i = A(o, t, n, e.positionFixed),
                        a = j(
                          e.placement,
                          i,
                          t,
                          n,
                          e.modifiers.flip.boundariesElement,
                          e.modifiers.flip.padding
                        )
                      return (
                        t.setAttribute('x-placement', a),
                        W(t, {
                          position: e.positionFixed ? 'fixed' : 'absolute'
                        }),
                        e
                      )
                    },
                    gpuAcceleration: void 0
                  }
                }
              },
              tn = (function() {
                function n(t, e) {
                  var r = this,
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                  w(this, n),
                    (this.scheduleUpdate = function() {
                      return requestAnimationFrame(r.update)
                    }),
                    (this.update = a(this.update.bind(this))),
                    (this.options = E({}, n.Defaults, o)),
                    (this.state = {
                      isDestroyed: !1,
                      isCreated: !1,
                      scrollParents: []
                    }),
                    (this.reference = t && t.jquery ? t[0] : t),
                    (this.popper = e && e.jquery ? e[0] : e),
                    (this.options.modifiers = {}),
                    Object.keys(
                      E({}, n.Defaults.modifiers, o.modifiers)
                    ).forEach(function(t) {
                      r.options.modifiers[t] = E(
                        {},
                        n.Defaults.modifiers[t] || {},
                        o.modifiers ? o.modifiers[t] : {}
                      )
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                      .map(function(n) {
                        return E({ name: n }, r.options.modifiers[n])
                      })
                      .sort(function(n, t) {
                        return n.order - t.order
                      })),
                    this.modifiers.forEach(function(n) {
                      n.enabled &&
                        l(n.onLoad) &&
                        n.onLoad(r.reference, r.popper, r.options, n, r.state)
                    }),
                    this.update()
                  var i = this.options.eventsEnabled
                  i && this.enableEventListeners(),
                    (this.state.eventsEnabled = i)
                }
                return (
                  k(n, [
                    {
                      key: 'update',
                      value: function() {
                        return H.call(this)
                      }
                    },
                    {
                      key: 'destroy',
                      value: function() {
                        return R.call(this)
                      }
                    },
                    {
                      key: 'enableEventListeners',
                      value: function() {
                        return B.call(this)
                      }
                    },
                    {
                      key: 'disableEventListeners',
                      value: function() {
                        return U.call(this)
                      }
                    }
                  ]),
                  n
                )
              })()
            ;(tn.Utils = ('undefined' != typeof window
              ? window
              : n
            ).PopperUtils),
              (tn.placements = X),
              (tn.Defaults = nn),
              (t.a = tn)
          }.call(this, e(5)))
        },
        function(n, t) {
          var e
          e = (function() {
            return this
          })()
          try {
            e = e || new Function('return this')()
          } catch (n) {
            'object' == typeof window && (e = window)
          }
          n.exports = e
        },
        ,
        ,
        ,
        function(n, t, e) {},
        function(n, t, e) {},
        function(n, t, e) {
          n.exports = e.p + 'favicon.ico'
        },
        function(n, t, e) {
          'use strict'
          e.r(t)
          var c = function(n, t) {
            return (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(n, t) {
                  n.__proto__ = t
                }) ||
              function(n, t) {
                for (var e in t) t.hasOwnProperty(e) && (n[e] = t[e])
              })(n, t)
          }
          function u(n, t) {
            function e() {
              this.constructor = n
            }
            c(n, t),
              (n.prototype =
                null === t
                  ? Object.create(t)
                  : ((e.prototype = t.prototype), new e()))
          }
          function d(n) {
            return 'function' == typeof n
          }
          var f = !1,
            p = {
              Promise: void 0,
              set useDeprecatedSynchronousErrorHandling(n) {
                n && new Error().stack, (f = n)
              },
              get useDeprecatedSynchronousErrorHandling() {
                return f
              }
            }
          function m(n) {
            setTimeout(function() {
              throw n
            }, 0)
          }
          var h = {
              closed: !0,
              next: function(n) {},
              error: function(n) {
                if (p.useDeprecatedSynchronousErrorHandling) throw n
                m(n)
              },
              complete: function() {}
            },
            g =
              Array.isArray ||
              function(n) {
                return n && 'number' == typeof n.length
              }
          function b(n) {
            return null !== n && 'object' == typeof n
          }
          function v(n) {
            return (
              Error.call(this),
              (this.message = n
                ? n.length +
                  ' errors occurred during unsubscription:\n' +
                  n
                    .map(function(n, t) {
                      return t + 1 + ') ' + n.toString()
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = n),
              this
            )
          }
          v.prototype = Object.create(Error.prototype)
          var x = v,
            y = (function() {
              function n(n) {
                ;(this.closed = !1),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n && (this._unsubscribe = n)
              }
              return (
                (n.prototype.unsubscribe = function() {
                  var t
                  if (!this.closed) {
                    var e = this._parentOrParents,
                      r = this._unsubscribe,
                      o = this._subscriptions
                    if (
                      ((this.closed = !0),
                      (this._parentOrParents = null),
                      (this._subscriptions = null),
                      e instanceof n)
                    )
                      e.remove(this)
                    else if (null !== e)
                      for (var i = 0; i < e.length; ++i) e[i].remove(this)
                    if (d(r))
                      try {
                        r.call(this)
                      } catch (n) {
                        t = n instanceof x ? w(n.errors) : [n]
                      }
                    if (g(o)) {
                      i = -1
                      for (var a = o.length; ++i < a; ) {
                        var l = o[i]
                        if (b(l))
                          try {
                            l.unsubscribe()
                          } catch (n) {
                            ;(t = t || []),
                              n instanceof x
                                ? (t = t.concat(w(n.errors)))
                                : t.push(n)
                          }
                      }
                    }
                    if (t) throw new x(t)
                  }
                }),
                (n.prototype.add = function(t) {
                  var e = t
                  if (!t) return n.EMPTY
                  switch (typeof t) {
                    case 'function':
                      e = new n(t)
                    case 'object':
                      if (
                        e === this ||
                        e.closed ||
                        'function' != typeof e.unsubscribe
                      )
                        return e
                      if (this.closed) return e.unsubscribe(), e
                      if (!(e instanceof n)) {
                        var r = e
                        ;(e = new n())._subscriptions = [r]
                      }
                      break
                    default:
                      throw new Error(
                        'unrecognized teardown ' + t + ' added to Subscription.'
                      )
                  }
                  var o = e._parentOrParents
                  if (null === o) e._parentOrParents = this
                  else if (o instanceof n) {
                    if (o === this) return e
                    e._parentOrParents = [o, this]
                  } else {
                    if (-1 !== o.indexOf(this)) return e
                    o.push(this)
                  }
                  var i = this._subscriptions
                  return null === i ? (this._subscriptions = [e]) : i.push(e), e
                }),
                (n.prototype.remove = function(n) {
                  var t = this._subscriptions
                  if (t) {
                    var e = t.indexOf(n)
                    ;-1 !== e && t.splice(e, 1)
                  }
                }),
                (n.EMPTY = (function(n) {
                  return (n.closed = !0), n
                })(new n())),
                n
              )
            })()
          function w(n) {
            return n.reduce(function(n, t) {
              return n.concat(t instanceof x ? t.errors : t)
            }, [])
          }
          var k =
              'function' == typeof Symbol
                ? Symbol('rxSubscriber')
                : '@@rxSubscriber_' + Math.random(),
            M = (function(n) {
              function t(e, r, o) {
                var i = n.call(this) || this
                switch (
                  ((i.syncErrorValue = null),
                  (i.syncErrorThrown = !1),
                  (i.syncErrorThrowable = !1),
                  (i.isStopped = !1),
                  arguments.length)
                ) {
                  case 0:
                    i.destination = h
                    break
                  case 1:
                    if (!e) {
                      i.destination = h
                      break
                    }
                    if ('object' == typeof e) {
                      e instanceof t
                        ? ((i.syncErrorThrowable = e.syncErrorThrowable),
                          (i.destination = e),
                          e.add(i))
                        : ((i.syncErrorThrowable = !0),
                          (i.destination = new E(i, e)))
                      break
                    }
                  default:
                    ;(i.syncErrorThrowable = !0),
                      (i.destination = new E(i, e, r, o))
                }
                return i
              }
              return (
                u(t, n),
                (t.prototype[k] = function() {
                  return this
                }),
                (t.create = function(n, e, r) {
                  var o = new t(n, e, r)
                  return (o.syncErrorThrowable = !1), o
                }),
                (t.prototype.next = function(n) {
                  this.isStopped || this._next(n)
                }),
                (t.prototype.error = function(n) {
                  this.isStopped || ((this.isStopped = !0), this._error(n))
                }),
                (t.prototype.complete = function() {
                  this.isStopped || ((this.isStopped = !0), this._complete())
                }),
                (t.prototype.unsubscribe = function() {
                  this.closed ||
                    ((this.isStopped = !0), n.prototype.unsubscribe.call(this))
                }),
                (t.prototype._next = function(n) {
                  this.destination.next(n)
                }),
                (t.prototype._error = function(n) {
                  this.destination.error(n), this.unsubscribe()
                }),
                (t.prototype._complete = function() {
                  this.destination.complete(), this.unsubscribe()
                }),
                (t.prototype._unsubscribeAndRecycle = function() {
                  var n = this._parentOrParents
                  return (
                    (this._parentOrParents = null),
                    this.unsubscribe(),
                    (this.closed = !1),
                    (this.isStopped = !1),
                    (this._parentOrParents = n),
                    this
                  )
                }),
                t
              )
            })(y),
            E = (function(n) {
              function t(t, e, r, o) {
                var i,
                  a = n.call(this) || this
                a._parentSubscriber = t
                var l = a
                return (
                  d(e)
                    ? (i = e)
                    : e &&
                      ((i = e.next),
                      (r = e.error),
                      (o = e.complete),
                      e !== h &&
                        (d((l = Object.create(e)).unsubscribe) &&
                          a.add(l.unsubscribe.bind(l)),
                        (l.unsubscribe = a.unsubscribe.bind(a)))),
                  (a._context = l),
                  (a._next = i),
                  (a._error = r),
                  (a._complete = o),
                  a
                )
              }
              return (
                u(t, n),
                (t.prototype.next = function(n) {
                  if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber
                    p.useDeprecatedSynchronousErrorHandling &&
                    t.syncErrorThrowable
                      ? this.__tryOrSetError(t, this._next, n) &&
                        this.unsubscribe()
                      : this.__tryOrUnsub(this._next, n)
                  }
                }),
                (t.prototype.error = function(n) {
                  if (!this.isStopped) {
                    var t = this._parentSubscriber,
                      e = p.useDeprecatedSynchronousErrorHandling
                    if (this._error)
                      e && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, this._error, n),
                          this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, n),
                          this.unsubscribe())
                    else if (t.syncErrorThrowable)
                      e
                        ? ((t.syncErrorValue = n), (t.syncErrorThrown = !0))
                        : m(n),
                        this.unsubscribe()
                    else {
                      if ((this.unsubscribe(), e)) throw n
                      m(n)
                    }
                  }
                }),
                (t.prototype.complete = function() {
                  var n = this
                  if (!this.isStopped) {
                    var t = this._parentSubscriber
                    if (this._complete) {
                      var e = function() {
                        return n._complete.call(n._context)
                      }
                      p.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, e), this.unsubscribe())
                        : (this.__tryOrUnsub(e), this.unsubscribe())
                    } else this.unsubscribe()
                  }
                }),
                (t.prototype.__tryOrUnsub = function(n, t) {
                  try {
                    n.call(this._context, t)
                  } catch (n) {
                    if (
                      (this.unsubscribe(),
                      p.useDeprecatedSynchronousErrorHandling)
                    )
                      throw n
                    m(n)
                  }
                }),
                (t.prototype.__tryOrSetError = function(n, t, e) {
                  if (!p.useDeprecatedSynchronousErrorHandling)
                    throw new Error('bad call')
                  try {
                    t.call(this._context, e)
                  } catch (t) {
                    return p.useDeprecatedSynchronousErrorHandling
                      ? ((n.syncErrorValue = t), (n.syncErrorThrown = !0), !0)
                      : (m(t), !0)
                  }
                  return !1
                }),
                (t.prototype._unsubscribe = function() {
                  var n = this._parentSubscriber
                  ;(this._context = null),
                    (this._parentSubscriber = null),
                    n.unsubscribe()
                }),
                t
              )
            })(M),
            _ =
              ('function' == typeof Symbol && Symbol.observable) ||
              '@@observable'
          function S() {}
          function T(n) {
            return n
              ? 1 === n.length
                ? n[0]
                : function(t) {
                    return n.reduce(function(n, t) {
                      return t(n)
                    }, t)
                  }
              : S
          }
          var N = (function() {
            function n(n) {
              ;(this._isScalar = !1), n && (this._subscribe = n)
            }
            return (
              (n.prototype.lift = function(t) {
                var e = new n()
                return (e.source = this), (e.operator = t), e
              }),
              (n.prototype.subscribe = function(n, t, e) {
                var r = this.operator,
                  o = (function(n, t, e) {
                    if (n) {
                      if (n instanceof M) return n
                      if (n[k]) return n[k]()
                    }
                    return n || t || e ? new M(n, t, e) : new M(h)
                  })(n, t, e)
                if (
                  (r
                    ? o.add(r.call(o, this.source))
                    : o.add(
                        this.source ||
                          (p.useDeprecatedSynchronousErrorHandling &&
                            !o.syncErrorThrowable)
                          ? this._subscribe(o)
                          : this._trySubscribe(o)
                      ),
                  p.useDeprecatedSynchronousErrorHandling &&
                    o.syncErrorThrowable &&
                    ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                )
                  throw o.syncErrorValue
                return o
              }),
              (n.prototype._trySubscribe = function(n) {
                try {
                  return this._subscribe(n)
                } catch (t) {
                  p.useDeprecatedSynchronousErrorHandling &&
                    ((n.syncErrorThrown = !0), (n.syncErrorValue = t)),
                    (function(n) {
                      for (; n; ) {
                        var t = n,
                          e = t.closed,
                          r = t.destination,
                          o = t.isStopped
                        if (e || o) return !1
                        n = r && r instanceof M ? r : null
                      }
                      return !0
                    })(n)
                      ? n.error(t)
                      : console.warn(t)
                }
              }),
              (n.prototype.forEach = function(n, t) {
                var e = this
                return new (t = C(t))(function(t, r) {
                  var o
                  o = e.subscribe(
                    function(t) {
                      try {
                        n(t)
                      } catch (n) {
                        r(n), o && o.unsubscribe()
                      }
                    },
                    r,
                    t
                  )
                })
              }),
              (n.prototype._subscribe = function(n) {
                var t = this.source
                return t && t.subscribe(n)
              }),
              (n.prototype[_] = function() {
                return this
              }),
              (n.prototype.pipe = function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                  n[t] = arguments[t]
                return 0 === n.length ? this : T(n)(this)
              }),
              (n.prototype.toPromise = function(n) {
                var t = this
                return new (n = C(n))(function(n, e) {
                  var r
                  t.subscribe(
                    function(n) {
                      return (r = n)
                    },
                    function(n) {
                      return e(n)
                    },
                    function() {
                      return n(r)
                    }
                  )
                })
              }),
              (n.create = function(t) {
                return new n(t)
              }),
              n
            )
          })()
          function C(n) {
            if ((n || (n = p.Promise || Promise), !n))
              throw new Error('no Promise impl found')
            return n
          }
          var j = function(n) {
            return function(t) {
              for (var e = 0, r = n.length; e < r && !t.closed; e++)
                t.next(n[e])
              t.complete()
            }
          }
          var A =
              'function' == typeof Symbol && Symbol.iterator
                ? Symbol.iterator
                : '@@iterator',
            O = function(n) {
              return n && 'number' == typeof n.length && 'function' != typeof n
            }
          function z(n) {
            return (
              !!n &&
              'function' != typeof n.subscribe &&
              'function' == typeof n.then
            )
          }
          var D = function(n) {
            if (n && 'function' == typeof n[_])
              return (
                (r = n),
                function(n) {
                  var t = r[_]()
                  if ('function' != typeof t.subscribe)
                    throw new TypeError(
                      'Provided object does not correctly implement Symbol.observable'
                    )
                  return t.subscribe(n)
                }
              )
            if (O(n)) return j(n)
            if (z(n))
              return (
                (e = n),
                function(n) {
                  return (
                    e
                      .then(
                        function(t) {
                          n.closed || (n.next(t), n.complete())
                        },
                        function(t) {
                          return n.error(t)
                        }
                      )
                      .then(null, m),
                    n
                  )
                }
              )
            if (n && 'function' == typeof n[A])
              return (
                (t = n),
                function(n) {
                  for (var e = t[A](); ; ) {
                    var r = e.next()
                    if (r.done) {
                      n.complete()
                      break
                    }
                    if ((n.next(r.value), n.closed)) break
                  }
                  return (
                    'function' == typeof e.return &&
                      n.add(function() {
                        e.return && e.return()
                      }),
                    n
                  )
                }
              )
            var t,
              e,
              r,
              o = b(n) ? 'an invalid object' : "'" + n + "'"
            throw new TypeError(
              'You provided ' +
                o +
                ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
            )
          }
          function L(n, t) {
            return new N(function(e) {
              var r = new y(),
                o = 0
              return (
                r.add(
                  t.schedule(function() {
                    o !== n.length
                      ? (e.next(n[o++]), e.closed || r.add(this.schedule()))
                      : e.complete()
                  })
                ),
                r
              )
            })
          }
          function q(n, t) {
            return t
              ? (function(n, t) {
                  if (null != n) {
                    if (
                      (function(n) {
                        return n && 'function' == typeof n[_]
                      })(n)
                    )
                      return (function(n, t) {
                        return new N(function(e) {
                          var r = new y()
                          return (
                            r.add(
                              t.schedule(function() {
                                var o = n[_]()
                                r.add(
                                  o.subscribe({
                                    next: function(n) {
                                      r.add(
                                        t.schedule(function() {
                                          return e.next(n)
                                        })
                                      )
                                    },
                                    error: function(n) {
                                      r.add(
                                        t.schedule(function() {
                                          return e.error(n)
                                        })
                                      )
                                    },
                                    complete: function() {
                                      r.add(
                                        t.schedule(function() {
                                          return e.complete()
                                        })
                                      )
                                    }
                                  })
                                )
                              })
                            ),
                            r
                          )
                        })
                      })(n, t)
                    if (z(n))
                      return (function(n, t) {
                        return new N(function(e) {
                          var r = new y()
                          return (
                            r.add(
                              t.schedule(function() {
                                return n.then(
                                  function(n) {
                                    r.add(
                                      t.schedule(function() {
                                        e.next(n),
                                          r.add(
                                            t.schedule(function() {
                                              return e.complete()
                                            })
                                          )
                                      })
                                    )
                                  },
                                  function(n) {
                                    r.add(
                                      t.schedule(function() {
                                        return e.error(n)
                                      })
                                    )
                                  }
                                )
                              })
                            ),
                            r
                          )
                        })
                      })(n, t)
                    if (O(n)) return L(n, t)
                    if (
                      (function(n) {
                        return n && 'function' == typeof n[A]
                      })(n) ||
                      'string' == typeof n
                    )
                      return (function(n, t) {
                        if (!n) throw new Error('Iterable cannot be null')
                        return new N(function(e) {
                          var r,
                            o = new y()
                          return (
                            o.add(function() {
                              r && 'function' == typeof r.return && r.return()
                            }),
                            o.add(
                              t.schedule(function() {
                                ;(r = n[A]()),
                                  o.add(
                                    t.schedule(function() {
                                      if (!e.closed) {
                                        var n, t
                                        try {
                                          var o = r.next()
                                          ;(n = o.value), (t = o.done)
                                        } catch (n) {
                                          return void e.error(n)
                                        }
                                        t
                                          ? e.complete()
                                          : (e.next(n), this.schedule())
                                      }
                                    })
                                  )
                              })
                            ),
                            o
                          )
                        })
                      })(n, t)
                  }
                  throw new TypeError(
                    ((null !== n && typeof n) || n) + ' is not observable'
                  )
                })(n, t)
              : n instanceof N
              ? n
              : new N(D(n))
          }
          function H() {
            for (var n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t]
            var e,
              r = n[n.length - 1]
            return (e = r) && 'function' == typeof e.schedule
              ? (n.pop(), L(n, r))
              : (function(n, t) {
                  return new N(j(n))
                })(n)
          }
          var P = new N(function(n) {
            return n.complete()
          })
          function I(n) {
            return n
              ? (function(n) {
                  return new N(function(t) {
                    return n.schedule(function() {
                      return t.complete()
                    })
                  })
                })(n)
              : P
          }
          var R = (function(n) {
            function t(t, e, r) {
              var o = n.call(this) || this
              return (
                (o.parent = t),
                (o.outerValue = e),
                (o.outerIndex = r),
                (o.index = 0),
                o
              )
            }
            return (
              u(t, n),
              (t.prototype._next = function(n) {
                this.parent.notifyNext(
                  this.outerValue,
                  n,
                  this.outerIndex,
                  this.index++,
                  this
                )
              }),
              (t.prototype._error = function(n) {
                this.parent.notifyError(n, this), this.unsubscribe()
              }),
              (t.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
              }),
              t
            )
          })(M)
          function F(n, t, e, r, o) {
            if ((void 0 === o && (o = new R(n, e, r)), !o.closed))
              return t instanceof N ? t.subscribe(o) : D(t)(o)
          }
          var B = (function(n) {
            function t() {
              return (null !== n && n.apply(this, arguments)) || this
            }
            return (
              u(t, n),
              (t.prototype.notifyNext = function(n, t, e, r, o) {
                this.destination.next(t)
              }),
              (t.prototype.notifyError = function(n, t) {
                this.destination.error(n)
              }),
              (t.prototype.notifyComplete = function(n) {
                this.destination.complete()
              }),
              t
            )
          })(M)
          function U(n, t) {
            return function(e) {
              if ('function' != typeof n)
                throw new TypeError(
                  'argument is not a function. Are you looking for `mapTo()`?'
                )
              return e.lift(new $(n, t))
            }
          }
          var $ = (function() {
              function n(n, t) {
                ;(this.project = n), (this.thisArg = t)
              }
              return (
                (n.prototype.call = function(n, t) {
                  return t.subscribe(new W(n, this.project, this.thisArg))
                }),
                n
              )
            })(),
            W = (function(n) {
              function t(t, e, r) {
                var o = n.call(this, t) || this
                return (o.project = e), (o.count = 0), (o.thisArg = r || o), o
              }
              return (
                u(t, n),
                (t.prototype._next = function(n) {
                  var t
                  try {
                    t = this.project.call(this.thisArg, n, this.count++)
                  } catch (n) {
                    return void this.destination.error(n)
                  }
                  this.destination.next(t)
                }),
                t
              )
            })(M)
          function Y(n, t, e) {
            return (
              void 0 === e && (e = Number.POSITIVE_INFINITY),
              'function' == typeof t
                ? function(r) {
                    return r.pipe(
                      Y(function(e, r) {
                        return q(n(e, r)).pipe(
                          U(function(n, o) {
                            return t(e, n, r, o)
                          })
                        )
                      }, e)
                    )
                  }
                : ('number' == typeof t && (e = t),
                  function(t) {
                    return t.lift(new V(n, e))
                  })
            )
          }
          var V = (function() {
              function n(n, t) {
                void 0 === t && (t = Number.POSITIVE_INFINITY),
                  (this.project = n),
                  (this.concurrent = t)
              }
              return (
                (n.prototype.call = function(n, t) {
                  return t.subscribe(new X(n, this.project, this.concurrent))
                }),
                n
              )
            })(),
            X = (function(n) {
              function t(t, e, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY)
                var o = n.call(this, t) || this
                return (
                  (o.project = e),
                  (o.concurrent = r),
                  (o.hasCompleted = !1),
                  (o.buffer = []),
                  (o.active = 0),
                  (o.index = 0),
                  o
                )
              }
              return (
                u(t, n),
                (t.prototype._next = function(n) {
                  this.active < this.concurrent
                    ? this._tryNext(n)
                    : this.buffer.push(n)
                }),
                (t.prototype._tryNext = function(n) {
                  var t,
                    e = this.index++
                  try {
                    t = this.project(n, e)
                  } catch (n) {
                    return void this.destination.error(n)
                  }
                  this.active++, this._innerSub(t, n, e)
                }),
                (t.prototype._innerSub = function(n, t, e) {
                  var r = new R(this, void 0, void 0)
                  this.destination.add(r), F(this, n, t, e, r)
                }),
                (t.prototype._complete = function() {
                  ;(this.hasCompleted = !0),
                    0 === this.active &&
                      0 === this.buffer.length &&
                      this.destination.complete(),
                    this.unsubscribe()
                }),
                (t.prototype.notifyNext = function(n, t, e, r, o) {
                  this.destination.next(t)
                }),
                (t.prototype.notifyComplete = function(n) {
                  var t = this.buffer
                  this.remove(n),
                    this.active--,
                    t.length > 0
                      ? this._next(t.shift())
                      : 0 === this.active &&
                        this.hasCompleted &&
                        this.destination.complete()
                }),
                t
              )
            })(B)
          function Z(n, t) {
            return Y(n, t, 1)
          }
          var G,
            J = (function(n) {
              function t(t, e) {
                var r = n.call(this, t, e) || this
                return (r.scheduler = t), (r.work = e), (r.pending = !1), r
              }
              return (
                u(t, n),
                (t.prototype.schedule = function(n, t) {
                  if ((void 0 === t && (t = 0), this.closed)) return this
                  this.state = n
                  var e = this.id,
                    r = this.scheduler
                  return (
                    null != e && (this.id = this.recycleAsyncId(r, e, t)),
                    (this.pending = !0),
                    (this.delay = t),
                    (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                    this
                  )
                }),
                (t.prototype.requestAsyncId = function(n, t, e) {
                  return (
                    void 0 === e && (e = 0),
                    setInterval(n.flush.bind(n, this), e)
                  )
                }),
                (t.prototype.recycleAsyncId = function(n, t, e) {
                  if (
                    (void 0 === e && (e = 0),
                    null !== e && this.delay === e && !1 === this.pending)
                  )
                    return t
                  clearInterval(t)
                }),
                (t.prototype.execute = function(n, t) {
                  if (this.closed)
                    return new Error('executing a cancelled action')
                  this.pending = !1
                  var e = this._execute(n, t)
                  if (e) return e
                  !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(
                      this.scheduler,
                      this.id,
                      null
                    ))
                }),
                (t.prototype._execute = function(n, t) {
                  var e = !1,
                    r = void 0
                  try {
                    this.work(n)
                  } catch (n) {
                    ;(e = !0), (r = (!!n && n) || new Error(n))
                  }
                  if (e) return this.unsubscribe(), r
                }),
                (t.prototype._unsubscribe = function() {
                  var n = this.id,
                    t = this.scheduler,
                    e = t.actions,
                    r = e.indexOf(this)
                  ;(this.work = null),
                    (this.state = null),
                    (this.pending = !1),
                    (this.scheduler = null),
                    -1 !== r && e.splice(r, 1),
                    null != n && (this.id = this.recycleAsyncId(t, n, null)),
                    (this.delay = null)
                }),
                t
              )
            })(
              (function(n) {
                function t(t, e) {
                  return n.call(this) || this
                }
                return (
                  u(t, n),
                  (t.prototype.schedule = function(n, t) {
                    return void 0 === t && (t = 0), this
                  }),
                  t
                )
              })(y)
            ),
            Q = (function() {
              function n(t, e) {
                void 0 === e && (e = n.now),
                  (this.SchedulerAction = t),
                  (this.now = e)
              }
              return (
                (n.prototype.schedule = function(n, t, e) {
                  return (
                    void 0 === t && (t = 0),
                    new this.SchedulerAction(this, n).schedule(e, t)
                  )
                }),
                (n.now = function() {
                  return Date.now()
                }),
                n
              )
            })(),
            K = new ((function(n) {
              function t(e, r) {
                void 0 === r && (r = Q.now)
                var o =
                  n.call(this, e, function() {
                    return t.delegate && t.delegate !== o
                      ? t.delegate.now()
                      : r()
                  }) || this
                return (
                  (o.actions = []), (o.active = !1), (o.scheduled = void 0), o
                )
              }
              return (
                u(t, n),
                (t.prototype.schedule = function(e, r, o) {
                  return (
                    void 0 === r && (r = 0),
                    t.delegate && t.delegate !== this
                      ? t.delegate.schedule(e, r, o)
                      : n.prototype.schedule.call(this, e, r, o)
                  )
                }),
                (t.prototype.flush = function(n) {
                  var t = this.actions
                  if (this.active) t.push(n)
                  else {
                    var e
                    this.active = !0
                    do {
                      if ((e = n.execute(n.state, n.delay))) break
                    } while ((n = t.shift()))
                    if (((this.active = !1), e)) {
                      for (; (n = t.shift()); ) n.unsubscribe()
                      throw e
                    }
                  }
                }),
                t
              )
            })(Q))(J)
          G || (G = {})
          var nn = (function() {
            function n(n, t, e) {
              ;(this.kind = n),
                (this.value = t),
                (this.error = e),
                (this.hasValue = 'N' === n)
            }
            return (
              (n.prototype.observe = function(n) {
                switch (this.kind) {
                  case 'N':
                    return n.next && n.next(this.value)
                  case 'E':
                    return n.error && n.error(this.error)
                  case 'C':
                    return n.complete && n.complete()
                }
              }),
              (n.prototype.do = function(n, t, e) {
                switch (this.kind) {
                  case 'N':
                    return n && n(this.value)
                  case 'E':
                    return t && t(this.error)
                  case 'C':
                    return e && e()
                }
              }),
              (n.prototype.accept = function(n, t, e) {
                return n && 'function' == typeof n.next
                  ? this.observe(n)
                  : this.do(n, t, e)
              }),
              (n.prototype.toObservable = function() {
                var n
                switch (this.kind) {
                  case 'N':
                    return H(this.value)
                  case 'E':
                    return (
                      (n = this.error),
                      new N(function(t) {
                        return t.error(n)
                      })
                    )
                  case 'C':
                    return I()
                }
                throw new Error('unexpected notification kind value')
              }),
              (n.createNext = function(t) {
                return void 0 !== t
                  ? new n('N', t)
                  : n.undefinedValueNotification
              }),
              (n.createError = function(t) {
                return new n('E', void 0, t)
              }),
              (n.createComplete = function() {
                return n.completeNotification
              }),
              (n.completeNotification = new n('C')),
              (n.undefinedValueNotification = new n('N', void 0)),
              n
            )
          })()
          function tn(n, t) {
            void 0 === t && (t = K)
            var e,
              r =
                (e = n) instanceof Date && !isNaN(+e)
                  ? +n - t.now()
                  : Math.abs(n)
            return function(n) {
              return n.lift(new en(r, t))
            }
          }
          var en = (function() {
              function n(n, t) {
                ;(this.delay = n), (this.scheduler = t)
              }
              return (
                (n.prototype.call = function(n, t) {
                  return t.subscribe(new rn(n, this.delay, this.scheduler))
                }),
                n
              )
            })(),
            rn = (function(n) {
              function t(t, e, r) {
                var o = n.call(this, t) || this
                return (
                  (o.delay = e),
                  (o.scheduler = r),
                  (o.queue = []),
                  (o.active = !1),
                  (o.errored = !1),
                  o
                )
              }
              return (
                u(t, n),
                (t.dispatch = function(n) {
                  for (
                    var t = n.source,
                      e = t.queue,
                      r = n.scheduler,
                      o = n.destination;
                    e.length > 0 && e[0].time - r.now() <= 0;

                  )
                    e.shift().notification.observe(o)
                  if (e.length > 0) {
                    var i = Math.max(0, e[0].time - r.now())
                    this.schedule(n, i)
                  } else this.unsubscribe(), (t.active = !1)
                }),
                (t.prototype._schedule = function(n) {
                  ;(this.active = !0),
                    this.destination.add(
                      n.schedule(t.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: n
                      })
                    )
                }),
                (t.prototype.scheduleNotification = function(n) {
                  if (!0 !== this.errored) {
                    var t = this.scheduler,
                      e = new on(t.now() + this.delay, n)
                    this.queue.push(e), !1 === this.active && this._schedule(t)
                  }
                }),
                (t.prototype._next = function(n) {
                  this.scheduleNotification(nn.createNext(n))
                }),
                (t.prototype._error = function(n) {
                  ;(this.errored = !0),
                    (this.queue = []),
                    this.destination.error(n),
                    this.unsubscribe()
                }),
                (t.prototype._complete = function() {
                  this.scheduleNotification(nn.createComplete()),
                    this.unsubscribe()
                }),
                t
              )
            })(M),
            on = function(n, t) {
              ;(this.time = n), (this.notification = t)
            }
          function an(n, t, e) {
            return function(r) {
              return r.lift(new ln(n, t, e))
            }
          }
          var ln = (function() {
              function n(n, t, e) {
                ;(this.nextOrObserver = n),
                  (this.error = t),
                  (this.complete = e)
              }
              return (
                (n.prototype.call = function(n, t) {
                  return t.subscribe(
                    new sn(n, this.nextOrObserver, this.error, this.complete)
                  )
                }),
                n
              )
            })(),
            sn = (function(n) {
              function t(t, e, r, o) {
                var i = n.call(this, t) || this
                return (
                  (i._tapNext = S),
                  (i._tapError = S),
                  (i._tapComplete = S),
                  (i._tapError = r || S),
                  (i._tapComplete = o || S),
                  d(e)
                    ? ((i._context = i), (i._tapNext = e))
                    : e &&
                      ((i._context = e),
                      (i._tapNext = e.next || S),
                      (i._tapError = e.error || S),
                      (i._tapComplete = e.complete || S)),
                  i
                )
              }
              return (
                u(t, n),
                (t.prototype._next = function(n) {
                  try {
                    this._tapNext.call(this._context, n)
                  } catch (n) {
                    return void this.destination.error(n)
                  }
                  this.destination.next(n)
                }),
                (t.prototype._error = function(n) {
                  try {
                    this._tapError.call(this._context, n)
                  } catch (n) {
                    return void this.destination.error(n)
                  }
                  this.destination.error(n)
                }),
                (t.prototype._complete = function() {
                  try {
                    this._tapComplete.call(this._context)
                  } catch (n) {
                    return void this.destination.error(n)
                  }
                  return this.destination.complete()
                }),
                t
              )
            })(M)
          function cn() {
            return (
              Error.call(this),
              (this.message = 'object unsubscribed'),
              (this.name = 'ObjectUnsubscribedError'),
              this
            )
          }
          cn.prototype = Object.create(Error.prototype)
          var un = cn,
            dn = (function(n) {
              function t(t, e) {
                var r = n.call(this) || this
                return (r.subject = t), (r.subscriber = e), (r.closed = !1), r
              }
              return (
                u(t, n),
                (t.prototype.unsubscribe = function() {
                  if (!this.closed) {
                    this.closed = !0
                    var n = this.subject,
                      t = n.observers
                    if (
                      ((this.subject = null),
                      t && 0 !== t.length && !n.isStopped && !n.closed)
                    ) {
                      var e = t.indexOf(this.subscriber)
                      ;-1 !== e && t.splice(e, 1)
                    }
                  }
                }),
                t
              )
            })(y),
            fn = (function(n) {
              function t(t) {
                var e = n.call(this, t) || this
                return (e.destination = t), e
              }
              return u(t, n), t
            })(M),
            pn = (function(n) {
              function t() {
                var t = n.call(this) || this
                return (
                  (t.observers = []),
                  (t.closed = !1),
                  (t.isStopped = !1),
                  (t.hasError = !1),
                  (t.thrownError = null),
                  t
                )
              }
              return (
                u(t, n),
                (t.prototype[k] = function() {
                  return new fn(this)
                }),
                (t.prototype.lift = function(n) {
                  var t = new mn(this, this)
                  return (t.operator = n), t
                }),
                (t.prototype.next = function(n) {
                  if (this.closed) throw new un()
                  if (!this.isStopped)
                    for (
                      var t = this.observers,
                        e = t.length,
                        r = t.slice(),
                        o = 0;
                      o < e;
                      o++
                    )
                      r[o].next(n)
                }),
                (t.prototype.error = function(n) {
                  if (this.closed) throw new un()
                  ;(this.hasError = !0),
                    (this.thrownError = n),
                    (this.isStopped = !0)
                  for (
                    var t = this.observers, e = t.length, r = t.slice(), o = 0;
                    o < e;
                    o++
                  )
                    r[o].error(n)
                  this.observers.length = 0
                }),
                (t.prototype.complete = function() {
                  if (this.closed) throw new un()
                  this.isStopped = !0
                  for (
                    var n = this.observers, t = n.length, e = n.slice(), r = 0;
                    r < t;
                    r++
                  )
                    e[r].complete()
                  this.observers.length = 0
                }),
                (t.prototype.unsubscribe = function() {
                  ;(this.isStopped = !0),
                    (this.closed = !0),
                    (this.observers = null)
                }),
                (t.prototype._trySubscribe = function(t) {
                  if (this.closed) throw new un()
                  return n.prototype._trySubscribe.call(this, t)
                }),
                (t.prototype._subscribe = function(n) {
                  if (this.closed) throw new un()
                  return this.hasError
                    ? (n.error(this.thrownError), y.EMPTY)
                    : this.isStopped
                    ? (n.complete(), y.EMPTY)
                    : (this.observers.push(n), new dn(this, n))
                }),
                (t.prototype.asObservable = function() {
                  var n = new N()
                  return (n.source = this), n
                }),
                (t.create = function(n, t) {
                  return new mn(n, t)
                }),
                t
              )
            })(N),
            mn = (function(n) {
              function t(t, e) {
                var r = n.call(this) || this
                return (r.destination = t), (r.source = e), r
              }
              return (
                u(t, n),
                (t.prototype.next = function(n) {
                  var t = this.destination
                  t && t.next && t.next(n)
                }),
                (t.prototype.error = function(n) {
                  var t = this.destination
                  t && t.error && this.destination.error(n)
                }),
                (t.prototype.complete = function() {
                  var n = this.destination
                  n && n.complete && this.destination.complete()
                }),
                (t.prototype._subscribe = function(n) {
                  return this.source ? this.source.subscribe(n) : y.EMPTY
                }),
                t
              )
            })(pn)
          Object.prototype.toString
          var hn = (function() {
              function n(n) {
                this.notifier = n
              }
              return (
                (n.prototype.call = function(n, t) {
                  var e = new gn(n),
                    r = F(e, this.notifier)
                  return r && !e.seenValue ? (e.add(r), t.subscribe(e)) : e
                }),
                n
              )
            })(),
            gn = (function(n) {
              function t(t) {
                var e = n.call(this, t) || this
                return (e.seenValue = !1), e
              }
              return (
                u(t, n),
                (t.prototype.notifyNext = function(n, t, e, r, o) {
                  ;(this.seenValue = !0), this.complete()
                }),
                (t.prototype.notifyComplete = function() {}),
                t
              )
            })(B),
            bn = 'OBSERVABLE',
            vn = 'function',
            xn = e(2),
            yn = e.n(xn)
          e(3)
          var wn = function n() {
              s(this, n)
              var t,
                e = this
              ;(this.sub$ = new pn()),
                (this.end$ = new pn()),
                (this.shadowHost = document.createElement('section')),
                (this.shadowHost.id = 'shadow-hosted-topping-app'),
                (this.modalHolder = document.createElement('div')),
                yn()(document).ready(function() {
                  var n = e.shadowHost.attachShadow({ mode: 'open' }),
                    t = document.createElement('style')
                  t.appendChild(
                    document.createTextNode(
                      '\n\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex="-1"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent; }\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):focus {\n  outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nselect {\n  word-wrap: normal; }\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n\nbutton:not(:disabled),\n[type="button"]:not(:disabled),\n[type="reset"]:not(:disabled),\n[type="submit"]:not(:disabled) {\n  cursor: pointer; }\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\n\na > code {\n  color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px; }\n    .topping-modal .modal-content { transform: translateX(1vw); } }\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px; } \n    .topping-modal .modal-content { transform: translateX(-10vw); }}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n\n.no-gutters > .col,\n.no-gutters > [class*="col-"] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%; }\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%; }\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%; }\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 13; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.333333%; }\n\n.offset-2 {\n  margin-left: 16.666667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.333333%; }\n\n.offset-5 {\n  margin-left: 41.666667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.333333%; }\n\n.offset-8 {\n  margin-left: 66.666667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.333333%; }\n\n.offset-11 {\n  margin-left: 91.666667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.333333%; }\n  .offset-sm-2 {\n    margin-left: 16.666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.333333%; }\n  .offset-sm-5 {\n    margin-left: 41.666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.333333%; }\n  .offset-sm-8 {\n    margin-left: 66.666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.333333%; }\n  .offset-sm-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.333333%; }\n  .offset-md-2 {\n    margin-left: 16.666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.333333%; }\n  .offset-md-5 {\n    margin-left: 41.666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.333333%; }\n  .offset-md-8 {\n    margin-left: 66.666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.333333%; }\n  .offset-md-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.333333%; }\n  .offset-lg-2 {\n    margin-left: 16.666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.333333%; }\n  .offset-lg-5 {\n    margin-left: 41.666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.333333%; }\n  .offset-lg-8 {\n    margin-left: 66.666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.333333%; }\n  .offset-lg-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-xl-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-xl-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-xl-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-xl-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.333333%; }\n  .offset-xl-2 {\n    margin-left: 16.666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.333333%; }\n  .offset-xl-5 {\n    margin-left: 41.666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.333333%; }\n  .offset-xl-8 {\n    margin-left: 66.666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.333333%; }\n  .offset-xl-11 {\n    margin-left: 91.666667%; } }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529; }\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6; }\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6; }\n\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #dee2e6; }\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6; }\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb; }\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40; }\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55; }\n\n.table-dark.table-bordered {\n  border: 0; }\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05); }\n\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .table-responsive-sm > .table-bordered {\n    border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .table-responsive-md > .table-bordered {\n    border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .table-responsive-lg > .table-bordered {\n    border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .table-responsive-xl > .table-bordered {\n    border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.table-responsive > .table-bordered {\n  border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none; } }\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0; }\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1; }\n\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1; }\n\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1; }\n\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1; }\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1; }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0; }\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n\n.form-row > .col,\n.form-row > [class*="col-"] {\n  padding-right: 5px;\n  padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n\n.form-check-input:disabled ~ .form-check-label {\n  color: #6c757d; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-select:valid ~ .valid-feedback,\n.was-validated .custom-select:valid ~ .valid-tooltip, .custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-control-file:valid ~ .valid-feedback,\n.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,\n.form-control-file.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23dc3545\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23dc3545\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-select:invalid ~ .invalid-feedback,\n.was-validated .custom-select:invalid ~ .invalid-tooltip, .custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-control-file:invalid ~ .invalid-feedback,\n.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,\n.form-control-file.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n\n.form-inline .form-check {\n  width: 100%; }\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0; }\n  .form-inline .form-group {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-plaintext {\n    display: inline-block; }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto; }\n  .form-inline .form-check {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0; }\n  .form-inline .form-check-input {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0; }\n  .form-inline .custom-control {\n    align-items: center;\n    justify-content: center; }\n  .form-inline .custom-control-label {\n    margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none; } }\n\n.btn:hover {\n  color: #212529;\n  text-decoration: none; }\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc; }\n\n.btn-primary:focus, .btn-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf; }\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62; }\n\n.btn-secondary:focus, .btn-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b; }\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34; }\n\n.btn-success:focus, .btn-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430; }\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b; }\n\n.btn-info:focus, .btn-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f; }\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00; }\n\n.btn-warning:focus, .btn-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500; }\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130; }\n\n.btn-danger:focus, .btn-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d; }\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5; }\n\n.btn-light:focus, .btn-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df; }\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124; }\n\n.btn-dark:focus, .btn-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d; }\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff; }\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent; }\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent; }\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745; }\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent; }\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent; }\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent; }\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent; }\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40; }\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent; }\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none; }\n\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline; }\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  box-shadow: none; }\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem; }\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none; } }\n\n.fade:not(.show) {\n  opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle {\n  white-space: nowrap; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto; } }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: ""; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa; }\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff; }\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1; }\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n.btn-toolbar .input-group {\n  width: auto; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%; }\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px; }\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n\n.btn-group-toggle > .btn input[type="radio"],\n.btn-group-toggle > .btn input[type="checkbox"],\n.btn-group-toggle > .btn-group > .btn input[type="radio"],\n.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0; }\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px; }\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3; }\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4; }\n\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input-group > .custom-file {\n  display: flex;\n  align-items: center; }\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input-group-prepend,\n.input-group-append {\n  display: flex; }\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2; }\n\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3; }\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n\n.input-group-text input[type="radio"],\n.input-group-text input[type="checkbox"] {\n  margin-top: 0; }\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px); }\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px); }\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem; }\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff; }\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #80bdff; }\n\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n  border-color: #b3d7ff; }\n\n.custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d; }\n\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top; }\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: "";\n  background-color: #fff;\n  border: #adb5bd solid 1px; }\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: "";\n  background: no-repeat 50% / 50% 50%; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3e%3cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3e%3c/svg%3e"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-switch {\n  padding-left: 2.25rem; }\n\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem; }\n\n.custom-switch .custom-control-label::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none; } }\n\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  transform: translateX(0.75rem); }\n\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.custom-select[multiple], .custom-select[size]:not([size="1"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none; }\n\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef; }\n\n.custom-select::-ms-expand {\n  display: none; }\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0; }\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef; }\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: "Browse"; }\n\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse); }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: "Browse";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range {\n  width: 100%;\n  height: calc(1rem + 0.4rem);\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.custom-range:focus {\n  outline: none; }\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-range::-moz-focus-outer {\n  border: 0; }\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none; }\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    transition: none; } }\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #b3d7ff; }\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem; }\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none; }\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    transition: none; } }\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #b3d7ff; }\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem; }\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none; }\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    transition: none; } }\n\n.custom-range::-ms-thumb:active {\n  background-color: #b3d7ff; }\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem; }\n\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem; }\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem; }\n\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd; }\n\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default; }\n\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd; }\n\n.custom-range:disabled::-moz-range-track {\n  cursor: default; }\n\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none; } }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none; }\n\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px; }\n\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6; }\n\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent; }\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n\n.navbar > .container,\n.navbar > .container-fluid {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0; }\n\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: "";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row; }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand-sm .navbar-toggler {\n    display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row; }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand-md .navbar-toggler {\n    display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row; }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand-lg .navbar-toggler {\n    display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row; }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand-xl .navbar-toggler {\n    display: none; } }\n\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  padding-right: 0;\n  padding-left: 0; }\n\n.navbar-expand .navbar-nav {\n  flex-direction: row; }\n\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute; }\n\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem; }\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  flex-wrap: nowrap; }\n\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto; }\n\n.navbar-expand .navbar-toggler {\n  display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-text a {\n  color: #fff; }\n\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck {\n  display: flex;\n  flex-direction: column; }\n\n.card-deck .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-deck {\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n  .card-deck .card {\n    display: flex;\n    flex: 1 0 0%;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px; } }\n\n.card-group {\n  display: flex;\n  flex-direction: column; }\n\n.card-group > .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-group {\n    flex-flow: row wrap; }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0; }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0; }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0; }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0; }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0; }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n    grid-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%; } }\n\n.accordion > .card {\n  overflow: hidden; }\n\n.accordion > .card:not(:first-of-type) .card-header:first-child {\n  border-radius: 0; }\n\n.accordion > .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0; }\n\n.accordion > .card:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.accordion > .card:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.accordion > .card .card-header {\n  margin-bottom: -1px; }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: "/"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #6c757d; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n\n.page-link:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none; } }\n\na.badge:hover, a.badge:focus {\n  text-decoration: none; }\n\n.badge:empty {\n  display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: #0062cc; }\n\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #545b62; }\n\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #1e7e34; }\n\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b; }\n\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n\na.badge-warning:hover, a.badge-warning:focus {\n  color: #212529;\n  background-color: #d39e00; }\n\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #bd2130; }\n\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5; }\n\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124; }\n\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit; }\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n\n.alert-primary hr {\n  border-top-color: #9fcdff; }\n\n.alert-primary .alert-link {\n  color: #002752; }\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n\n.alert-secondary hr {\n  border-top-color: #c8cbcf; }\n\n.alert-secondary .alert-link {\n  color: #202326; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n\n.alert-success hr {\n  border-top-color: #b1dfbb; }\n\n.alert-success .alert-link {\n  color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n\n.alert-info hr {\n  border-top-color: #abdde5; }\n\n.alert-info .alert-link {\n  color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n\n.alert-warning hr {\n  border-top-color: #ffe8a1; }\n\n.alert-warning .alert-link {\n  color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n\n.alert-danger hr {\n  border-top-color: #f1b0b7; }\n\n.alert-danger .alert-link {\n  color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n\n.alert-light hr {\n  border-top-color: #ececf6; }\n\n.alert-light .alert-link {\n  color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n\n.alert-dark hr {\n  border-top-color: #b9bbbe; }\n\n.alert-dark .alert-link {\n  color: #040505; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease; }\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite; }\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n    animation: none; } }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa; }\n\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff; }\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.list-group-horizontal {\n  flex-direction: row; }\n\n.list-group-horizontal .list-group-item {\n  margin-right: -1px;\n  margin-bottom: 0; }\n\n.list-group-horizontal .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0; }\n\n.list-group-horizontal .list-group-item:last-child {\n  margin-right: 0;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0; }\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n  .list-group-horizontal-sm .list-group-item {\n    margin-right: -1px;\n    margin-bottom: 0; }\n  .list-group-horizontal-sm .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal-sm .list-group-item:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; } }\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n  .list-group-horizontal-md .list-group-item {\n    margin-right: -1px;\n    margin-bottom: 0; }\n  .list-group-horizontal-md .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal-md .list-group-item:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; } }\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n  .list-group-horizontal-lg .list-group-item {\n    margin-right: -1px;\n    margin-bottom: 0; }\n  .list-group-horizontal-lg .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal-lg .list-group-item:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; } }\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n  .list-group-horizontal-xl .list-group-item {\n    margin-right: -1px;\n    margin-bottom: 0; }\n  .list-group-horizontal-xl .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal-xl .list-group-item:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; } }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush .list-group-item:last-child {\n  margin-bottom: -1px; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #004085;\n  background-color: #9fcdff; }\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085; }\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf; }\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb; }\n\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5; }\n\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1; }\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7; }\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6; }\n\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe; }\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n\n.close:hover {\n  color: #000;\n  text-decoration: none; }\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\na.close.disabled {\n  pointer-events: none; }\n\n.toast {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  border-radius: 0.25rem; }\n\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.toast.showing {\n  opacity: 1; }\n\n.toast.show {\n  display: block;\n  opacity: 1; }\n\n.toast.hide {\n  display: none; }\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n\n.toast-body {\n  padding: 0.75rem; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px); }\n\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none; } }\n\n.modal.show .modal-dialog {\n  transform: none; }\n\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem); }\n\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden; }\n\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  flex-shrink: 0; }\n\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto; }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  content: ""; }\n\n.modal-dialog-centered.modal-dialog-scrollable {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%; }\n\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none; }\n\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  z-index: 100000;\n  background-color: #000; }\n\n.modal-backdrop.fade {\n  opacity: 0; }\n\n.modal-backdrop.show {\n  opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.modal-footer > :not(:first-child) {\n  margin-left: .25rem; }\n\n.modal-footer > :not(:last-child) {\n  margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem); }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem); }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n\n[dir="ltr"] .tooltip {\n  text-align: left; }\n\n[dir="rtl"] .tooltip {\n  text-align: right; }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n\n.tooltip.show {\n  opacity: 0.9; }\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem; }\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: "";\n  border-color: transparent;\n  border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {\n  padding: 0.4rem 0; }\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {\n  bottom: 0; }\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {\n  padding: 0 0.4rem; }\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem; }\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {\n  padding: 0.4rem 0; }\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {\n  top: 0; }\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {\n  padding: 0 0.4rem; }\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem; }\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n[dir="ltr"] .popover {\n  text-align: left; }\n\n[dir="rtl"] .popover {\n  text-align: right; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem; }\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: "";\n  border-color: transparent;\n  border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^="top"] {\n  margin-bottom: 0.5rem; }\n\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow {\n  bottom: calc((0.5rem + 1px) * -1); }\n\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^="right"] {\n  margin-left: 0.5rem; }\n\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow {\n  left: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0; }\n\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {\n  margin-top: 0.5rem; }\n\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow {\n  top: calc((0.5rem + 1px) * -1); }\n\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff; }\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: "";\n  border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^="left"] {\n  margin-right: 0.5rem; }\n\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow {\n  right: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0; }\n\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n\n.popover-header:empty {\n  display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel.pointer-event {\n  touch-action: pan-y; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: ""; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none; } }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%); }\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: 0s 0.6s opacity; }\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none; } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none; } }\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50% / 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3e%3c/svg%3e"); }\n\n.carousel-control-next-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3e%3c/svg%3e"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease; }\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none; } }\n\n.carousel-indicators .active {\n  opacity: 1; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n  animation: spinner-border .75s linear infinite; }\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1; } }\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1; } }\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow .75s linear infinite;\n  animation: spinner-grow .75s linear infinite; }\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #007bff !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n\n.bg-secondary {\n  background-color: #6c757d !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #dee2e6 !important; }\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #007bff !important; }\n\n.border-secondary {\n  border-color: #6c757d !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded-sm {\n  border-radius: 0.2rem !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-lg {\n  border-radius: 0.3rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-pill {\n  border-radius: 50rem !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: ""; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n\n.embed-responsive::before {\n  display: block;\n  content: ""; }\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.overflow-auto {\n  overflow: auto !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.min-vw-100 {\n  min-width: 100vw !important; }\n\n.min-vh-100 {\n  min-height: 100vh !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: "";\n  background-color: rgba(0, 0, 0, 0); }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-n1 {\n  margin: -0.25rem !important; }\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important; }\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important; }\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important; }\n\n.m-n2 {\n  margin: -0.5rem !important; }\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important; }\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important; }\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important; }\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important; }\n\n.m-n3 {\n  margin: -1rem !important; }\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important; }\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important; }\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important; }\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important; }\n\n.m-n4 {\n  margin: -1.5rem !important; }\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important; }\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important; }\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important; }\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important; }\n\n.m-n5 {\n  margin: -3rem !important; }\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important; }\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important; }\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important; }\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-n1 {\n    margin: -0.25rem !important; }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n2 {\n    margin: -0.5rem !important; }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important; }\n  .m-sm-n3 {\n    margin: -1rem !important; }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important; }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important; }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important; }\n  .m-sm-n4 {\n    margin: -1.5rem !important; }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important; }\n  .m-sm-n5 {\n    margin: -3rem !important; }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important; }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important; }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-n1 {\n    margin: -0.25rem !important; }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important; }\n  .m-md-n2 {\n    margin: -0.5rem !important; }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important; }\n  .m-md-n3 {\n    margin: -1rem !important; }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important; }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important; }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important; }\n  .m-md-n4 {\n    margin: -1.5rem !important; }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important; }\n  .m-md-n5 {\n    margin: -3rem !important; }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important; }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important; }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-n1 {\n    margin: -0.25rem !important; }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n2 {\n    margin: -0.5rem !important; }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important; }\n  .m-lg-n3 {\n    margin: -1rem !important; }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important; }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important; }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important; }\n  .m-lg-n4 {\n    margin: -1.5rem !important; }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important; }\n  .m-lg-n5 {\n    margin: -3rem !important; }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important; }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important; }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-n1 {\n    margin: -0.25rem !important; }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n2 {\n    margin: -0.5rem !important; }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important; }\n  .m-xl-n3 {\n    margin: -1rem !important; }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important; }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important; }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important; }\n  .m-xl-n4 {\n    margin: -1.5rem !important; }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important; }\n  .m-xl-n5 {\n    margin: -3rem !important; }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important; }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important; }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-wrap {\n  white-space: normal !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-lighter {\n  font-weight: lighter !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-weight-bolder {\n  font-weight: bolder !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #007bff !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important; }\n\n.text-secondary {\n  color: #6c757d !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-decoration-none {\n  text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important; }\n\n.text-reset {\n  color: inherit !important; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: " (" attr(title) ")"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n  .table td,\n  .table th {\n    background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #dee2e6; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6; } }\n\n#topping-body {\n  overflow: hidden; }\n\nmain .container.main-container {\n  margin: 0 !important;\n  padding: 0 !important; }\n  main .container.main-container > .row {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 !important; }\n\nmain .container .topping-list {\n  height: 100vh;\n  overflow: auto; }\n\nmain .container .target-app {\n  height: inherit;\n  overflow: auto; }\n\nmain .container .fixed-footer {\n  position: absolute !important; }\n\nmain iframe {\n  position: fixed;\n  width: 73.5%;\n  height: 100%;\n  border: none;\n  overflow: auto; }\n\n.topping-modal .modal-content {\n  width: 75vw !important;\n  height: 65vw !important; }\n\n.topping-modal #topping-tree-container svg {\n  width: 65vw !important;\n  height: 60vh !important; }\n\n/*d3*/\n.node {\n  cursor: pointer; }\n\n.overlay {\n  background-color: #eee; }\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 0.4rem; }\n\n.node text {\n  font-size: 1rem;\n  font-family: sans-serif; }\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 1.5px; }\n\n.templink {\n  fill: none;\n  stroke: red;\n  stroke-width: 3px; }\n\n.ghostCircle.show {\n  display: block; }\n\n.ghostCircle,\n.activeDrag .ghostCircle {\n  display: none; }\n\n'
                    )
                  ),
                    n.appendChild(t),
                    n.appendChild(e.modalHolder),
                    document.body.appendChild(e.shadowHost)
                }),
                this.sub$
                  .pipe(
                    ((t = this.end$),
                    function(n) {
                      return n.lift(new hn(t))
                    }),
                    Z(function(n) {
                      if (n)
                        switch (n.type) {
                          case bn:
                            return n.delegate()
                          case vn:
                            return H(n.delegate).pipe(
                              tn(n.delay || 0),
                              an(function() {
                                return n.delegate()
                              })
                            )
                        }
                    })
                  )
                  .subscribe(),
                (function n(t, e, r, o) {
                  return (
                    d(r) && ((o = r), (r = void 0)),
                    o
                      ? n(t, e, r).pipe(
                          U(function(n) {
                            return g(n) ? o.apply(void 0, n) : o(n)
                          })
                        )
                      : new N(function(n) {
                          !(function n(t, e, r, o, i) {
                            var a
                            if (
                              (function(n) {
                                return (
                                  n &&
                                  'function' == typeof n.addEventListener &&
                                  'function' == typeof n.removeEventListener
                                )
                              })(t)
                            ) {
                              var l = t
                              t.addEventListener(e, r, i),
                                (a = function() {
                                  return l.removeEventListener(e, r, i)
                                })
                            } else if (
                              (function(n) {
                                return (
                                  n &&
                                  'function' == typeof n.on &&
                                  'function' == typeof n.off
                                )
                              })(t)
                            ) {
                              var s = t
                              t.on(e, r),
                                (a = function() {
                                  return s.off(e, r)
                                })
                            } else if (
                              (function(n) {
                                return (
                                  n &&
                                  'function' == typeof n.addListener &&
                                  'function' == typeof n.removeListener
                                )
                              })(t)
                            ) {
                              var c = t
                              t.addListener(e, r),
                                (a = function() {
                                  return c.removeListener(e, r)
                                })
                            } else {
                              if (!t || !t.length)
                                throw new TypeError('Invalid event target')
                              for (var u = 0, d = t.length; u < d; u++)
                                n(t[u], e, r, o, i)
                            }
                            o.add(a)
                          })(
                            t,
                            e,
                            function(t) {
                              arguments.length > 1
                                ? n.next(Array.prototype.slice.call(arguments))
                                : n.next(t)
                            },
                            n,
                            r
                          )
                        })
                  )
                })(window, 'message')
                  .pipe(
                    U(function(n) {
                      if (n && n.data && n.data.values) return n.data
                    }),
                    an(function(n) {
                      if (n) {
                        var t,
                          r = !0,
                          o = !1,
                          i = void 0
                        try {
                          for (
                            var a, s = n.values()[Symbol.iterator]();
                            !(r = (a = s.next()).done);
                            r = !0
                          ) {
                            ;(t = a.value[1]) &&
                              t.target &&
                              e[t.target] &&
                              e[t.target].apply(e, l(t.arguments))
                          }
                        } catch (c) {
                          ;(o = !0), (i = c)
                        } finally {
                          try {
                            r || null == s.return || s.return()
                          } finally {
                            if (o) throw i
                          }
                        }
                      }
                    })
                  )
                  .subscribe()
            },
            kn = e(0)
          e(9), e(10), e(11)
          var Mn = new ((function(n) {
            function t() {
              var n
              return (
                s(this, t), ((n = o(this, i(t).call(this))).toolTips = []), n
              )
            }
            return (
              a(t, n),
              r(t, [
                {
                  key: 'addScenario',
                  value: function(n) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          window.top.postMessage(
                            { target: 'echo-addScenario', value: n },
                            '*'
                          )
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'addStep',
                  value: function(n) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          window.top.postMessage(
                            { target: 'echo-addStep', value: n },
                            '*'
                          )
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'fillInputById',
                  value: function(n, t, e) {
                    var r = function(n, t) {
                        return Object(kn.g)(n, t)
                      },
                      o = function(n) {
                        n && (n.value = '')
                      }
                    return (
                      e && t
                        ? this.sub$.next({
                            type: bn,
                            delegate: function() {
                              var i = Object(kn.k)(n)
                              return (
                                o(i),
                                q(t.split('')).pipe(
                                  Y(function(n) {
                                    return q(n)
                                  }),
                                  Z(function(n) {
                                    return H(n).pipe(
                                      tn(e),
                                      an(function(n) {
                                        return r(i, n)
                                      })
                                    )
                                  })
                                )
                              )
                            }
                          })
                        : this.sub$.next({
                            type: vn,
                            delegate: function() {
                              var e = Object(kn.k)(n)
                              return o(e), r(e, t)
                            }
                          }),
                      this
                    )
                  }
                },
                {
                  key: 'fillInputByClassName',
                  value: function(n) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e = arguments.length > 2 ? arguments[2] : void 0,
                      r = arguments.length > 3 ? arguments[3] : void 0,
                      o = function(n, t) {
                        return Object(kn.g)(n, t)
                      },
                      i = function(n) {
                        n && (n.value = '')
                      }
                    return (
                      r && e
                        ? this.sub$.next({
                            type: bn,
                            delegate: function() {
                              var a = Object(kn.j)(n, t)
                              return (
                                i(a),
                                q(e.split('')).pipe(
                                  Y(function(n) {
                                    return q(n)
                                  }),
                                  Z(function(n) {
                                    return H(n).pipe(
                                      tn(r),
                                      an(function(n) {
                                        return o(a, n)
                                      })
                                    )
                                  })
                                )
                              )
                            }
                          })
                        : this.sub$.next({
                            type: vn,
                            delegate: function() {
                              var r = Object(kn.j)(n, t)
                              return i(r), o(r, e)
                            }
                          }),
                      this
                    )
                  }
                },
                {
                  key: 'fillInputByTagName',
                  value: function(n) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e = arguments.length > 2 ? arguments[2] : void 0,
                      r = arguments.length > 3 ? arguments[3] : void 0,
                      o = function(n, t) {
                        return Object(kn.g)(n, t)
                      },
                      i = function(n) {
                        n && (n.value = '')
                      }
                    return (
                      r && e
                        ? this.sub$.next({
                            type: bn,
                            delegate: function() {
                              var a = Object(kn.l)(n, t)
                              return (
                                i(a),
                                q(e.split('')).pipe(
                                  Y(function(n) {
                                    return q(n)
                                  }),
                                  Z(function(n) {
                                    return H(n).pipe(
                                      tn(r),
                                      an(function(n) {
                                        return o(a, n)
                                      })
                                    )
                                  })
                                )
                              )
                            }
                          })
                        : this.sub$.next({
                            type: vn,
                            delegate: function() {
                              var r = Object(kn.l)(n, t)
                              return i(r), o(r, e)
                            }
                          }),
                      this
                    )
                  }
                },
                {
                  key: 'clickById',
                  value: function() {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.e)(Object(kn.k)(n))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'clickByClassName',
                  value: function(n) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.e)(Object(kn.j)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'clickByTagName',
                  value: function(n) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.e)(Object(kn.l)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setValueById',
                  value: function() {
                    var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : ''
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.n)(Object(kn.k)(n), t)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setValueByClassName',
                  value: function(n, t) {
                    var e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : ''
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.n)(Object(kn.j)(n, t), e)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setValueByTagName',
                  value: function(n, t) {
                    var e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : ''
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.n)(Object(kn.l)(n, t), e)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setSelectedIndexById',
                  value: function() {
                    var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.m)(Object(kn.k)(n), t)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setSelectedIndexByClassName',
                  value: function(n, t) {
                    var e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.m)(Object(kn.j)(n, t), e)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'setSelectedIndexByTagName',
                  value: function(n, t) {
                    var e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.m)(Object(kn.l)(className, t), e)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'focusElementById',
                  value: function() {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.i)(Object(kn.k)(n))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'focusElementByClassName',
                  value: function(n, t) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.i)(Object(kn.j)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'focusElementByTagName',
                  value: function(n, t) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.i)(Object(kn.l)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'scrollElementToViewById',
                  value: function() {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.o)(Object(kn.k)(n))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'scrollElementToViewByClassName',
                  value: function(n, t) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.o)(Object(kn.j)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'scrollElementToViewByTagName',
                  value: function(n, t) {
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          Object(kn.o)(Object(kn.l)(n, t))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'wait',
                  value: function() {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
                    return (
                      this.sub$.next({
                        type: bn,
                        delegate: function() {
                          return I().pipe(tn(1e3 * n))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'popUpModal',
                  value: function(n, t) {
                    var e = this
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          return Object(kn.b)(e.modalHolder, n, t)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'popUpTreeModal',
                  value: function(n, t, e) {
                    var r = this
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          return Object(kn.d)(r.modalHolder, n, t, e)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'flushModal',
                  value: function() {
                    var n = this
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          return Object(kn.h)(n.modalHolder)
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'createToolTipById',
                  value: function() {
                    var n = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : '',
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 'top'
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          n.toolTips.push(Object(kn.f)(Object(kn.k)(t), e, r))
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'createToolTipByClassName',
                  value: function(n) {
                    var t = this,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : '',
                      o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 'top'
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          t.toolTips.push(
                            Object(kn.f)(Object(kn.j)(n, e), r, o)
                          )
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'createToolTipByTagName',
                  value: function(n) {
                    var t = this,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : '',
                      o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 'top'
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          t.toolTips.push(
                            Object(kn.f)(Object(kn.l)(n, e), r, o)
                          )
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'clearToolTips',
                  value: function() {
                    var n = this
                    return (
                      this.sub$.next({
                        type: vn,
                        delegate: function() {
                          n.toolTips.forEach(function(n) {
                            return n && n.destroy && n.destroy()
                          }),
                            (n.toolTips = [])
                        }
                      }),
                      this
                    )
                  }
                },
                {
                  key: 'finish',
                  value: function() {
                    return (
                      this.popUpModal('ciao', 'Finished \ud83d\ude42'),
                      this.end$.next('Finished'),
                      this
                    )
                  }
                }
              ]),
              t
            )
          })(wn))()
          t.default = Mn
        }
      ])
    }
  }
])
//# sourceMappingURL=3.39815b2d.chunk.js.map
