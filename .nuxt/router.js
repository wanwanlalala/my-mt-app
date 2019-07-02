import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4d370550 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _92c4882a = () => interopDefault(import('..\\pages\\changeCity.vue' /* webpackChunkName: "pages_changeCity" */))
const _67931c01 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _6365d764 = () => interopDefault(import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */))
const _2dc55e2e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _38406e4e = () => interopDefault(import('..\\pages\\order.vue' /* webpackChunkName: "pages_order" */))
const _2c2a0d94 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _ee48995a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _0878c5c2 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _1f75add2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cart",
      component: _4d370550,
      name: "cart"
    }, {
      path: "/changeCity",
      component: _92c4882a,
      name: "changeCity"
    }, {
      path: "/detail",
      component: _67931c01,
      name: "detail"
    }, {
      path: "/exit",
      component: _6365d764,
      name: "exit"
    }, {
      path: "/login",
      component: _2dc55e2e,
      name: "login"
    }, {
      path: "/order",
      component: _38406e4e,
      name: "order"
    }, {
      path: "/products",
      component: _2c2a0d94,
      name: "products"
    }, {
      path: "/register",
      component: _ee48995a,
      name: "register"
    }, {
      path: "/test",
      component: _0878c5c2,
      name: "test"
    }, {
      path: "/",
      component: _1f75add2,
      name: "index"
    }],

    fallback: false
  })
}
