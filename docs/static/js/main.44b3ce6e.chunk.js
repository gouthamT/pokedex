;(window.webpackJsonppokedex = window.webpackJsonppokedex || []).push([
  [0],
  {
    21: function(e, t, n) {
      e.exports = n(34)
    },
    33: function(e, t, n) {},
    34: function(e, t, n) {
      'use strict'
      n.r(t)
      var r = n(0),
        a = n.n(r),
        o = n(18),
        c = n(9),
        s = n(4),
        i = n(5),
        l = n(6),
        u = n(7),
        p = n(10),
        m = n(8),
        d = n(11),
        h = n(15),
        O = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.pokemon
                  return a.a.createElement(
                    'div',
                    { className: 'pokemon' },
                    a.a.createElement('button', {
                      type: 'button',
                      className: 'pokemon__sprite',
                      style: {
                        backgroundImage: 'url('.concat(
                          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'.concat(
                            e.id,
                            '.png'
                          ),
                          ')'
                        )
                      }
                    }),
                    a.a.createElement(
                      'p',
                      { className: 'pokemon__name' },
                      e.name
                    )
                  )
                }
              }
            ]),
            t
          )
        })(r.PureComponent),
        b = function(e) {
          var t = e.onChange,
            n = e.value
          return a.a.createElement('input', {
            type: 'text',
            onChange: t,
            value: n,
            placeholder: 'Enter pokemon name...',
            autoFocus: !0
          })
        },
        v = (function(e) {
          function t() {
            var e, n
            Object(l.a)(this, t)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o]
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(a))
              )).state = { searchString: '', pokemonsIds: [], error: null }),
              (n.handleSearch = function(e) {
                var t = e.currentTarget.value.toLowerCase().trim(),
                  r = n.props.collection
                if (
                  (h.a.set('searchString', t, { maxAge: '31536000' }), '' === t)
                )
                  return n.setState({
                    pokemonsIds: Object.keys(r),
                    searchString: t
                  })
                var a = Object.keys(r).filter(function(e) {
                  return r[e].name.includes(t)
                })
                n.setState({ pokemonsIds: a, searchString: t })
              }),
              n
            )
          }
          return (
            Object(d.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  this.props.getPokemons().then(function(t) {
                    if (t.error) return e.setState({ error: t.payload.message })
                    var n = h.a.get('searchString'),
                      r = e.props.collection
                    if (!n) return e.setState({ pokemonsIds: Object.keys(r) })
                    var a = Object.keys(r).filter(function(e) {
                      return r[e].name.includes(n)
                    })
                    e.setState({ pokemonsIds: a, searchString: n })
                  })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.searchString,
                    n = e.pokemonsIds,
                    r = e.error,
                    o = this.props,
                    c = o.collection,
                    s = o.isFetched,
                    i = n.map(function(e) {
                      var t = c[e]
                      return a.a.createElement(
                        'li',
                        { className: 'pokemons__item', key: t.id },
                        a.a.createElement(O, { pokemon: t })
                      )
                    })
                  return a.a.createElement(
                    'div',
                    { className: 'page' },
                    r &&
                      a.a.createElement('div', { className: 'page__error' }, r),
                    a.a.createElement(
                      'div',
                      { className: 'page__search' },
                      a.a.createElement(b, {
                        onChange: this.handleSearch,
                        value: t
                      })
                    ),
                    s
                      ? a.a.createElement('p', null, 'Loading...')
                      : a.a.createElement('ul', { className: 'pokemons' }, i)
                  )
                }
              }
            ]),
            t
          )
        })(r.Component)
      var f = {
          getPokemons: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            return function(t) {
              var n = e.limit,
                r = void 0 === n ? 784 : n
              return t(
                Object(s.a)({}, i.RSAA, {
                  endpoint: 'https://pokeapi.co/api/v2/pokemon/?limit='.concat(
                    r
                  ),
                  method: 'GET',
                  types: [
                    'GET_POKEMONS_REQUEST',
                    'GET_POKEMONS_SUCCESS',
                    'GET_POKEMONS_FAILURE'
                  ]
                })
              )
            }
          }
        },
        g = Object(c.b)(function(e) {
          return { collection: e.pokemons.collection }
        }, f)(v),
        E = n(1),
        k = n(20)
      n(32)
      function y(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(n, !0).forEach(function(t) {
                Object(s.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var j = { collection: {}, isFetched: !1 },
        _ = Object(E.c)({
          pokemons: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : j,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'GET_POKEMONS_REQUEST':
                return S({}, e, { isFetched: !0 })
              case 'GET_POKEMONS_SUCCESS':
                return S({}, e, {
                  collection: S(
                    {},
                    e.collection,
                    {},
                    t.payload.results.reduce(function(e, t) {
                      var n = t.url,
                        r = n.substring(34, n.length - 1)
                      return S({}, e, Object(s.a)({}, r, S({ id: r }, t)))
                    }, {})
                  ),
                  isFetched: !1
                })
              case 'GET_POKEMONS_FAILURE':
                return S({}, e, { isFetched: !1 })
              default:
                return e
            }
          }
        })
      n(33)
      n.e(3).then(n.t.bind(null, 47, 7))
      var P = (function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = [k.a, i.apiMiddleware],
          n = E.d
        return Object(E.e)(_, e, n(E.a.apply(void 0, t)))
      })()
      Object(o.render)(
        a.a.createElement(c.a, { store: P }, a.a.createElement(g, null)),
        document.getElementById('root')
      )
    }
  },
  [[21, 1, 2]]
])
//# sourceMappingURL=main.44b3ce6e.chunk.js.map
