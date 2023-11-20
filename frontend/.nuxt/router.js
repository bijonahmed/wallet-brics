import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _030cbbe9 = () => interopDefault(import('..\\pages\\confirm-phrase.vue' /* webpackChunkName: "pages/confirm-phrase" */))
const _cdb7a608 = () => interopDefault(import('..\\pages\\create-identity.vue' /* webpackChunkName: "pages/create-identity" */))
const _ef578194 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _206409bc = () => interopDefault(import('..\\pages\\phrase.vue' /* webpackChunkName: "pages/phrase" */))
const _575342b8 = () => interopDefault(import('..\\pages\\privacy-alert.vue' /* webpackChunkName: "pages/privacy-alert" */))
const _11937d6c = () => interopDefault(import('..\\pages\\recover-identity.vue' /* webpackChunkName: "pages/recover-identity" */))
const _5e507dac = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _7735d44e = () => interopDefault(import('..\\pages\\wallet\\add-coin-start.vue' /* webpackChunkName: "pages/wallet/add-coin-start" */))
const _8af78ebe = () => interopDefault(import('..\\pages\\wallet\\add-wallet.vue' /* webpackChunkName: "pages/wallet/add-wallet" */))
const _1c27f57b = () => interopDefault(import('..\\pages\\wallet\\all-news.vue' /* webpackChunkName: "pages/wallet/all-news" */))
const _4b591628 = () => interopDefault(import('..\\pages\\wallet\\biometric.vue' /* webpackChunkName: "pages/wallet/biometric" */))
const _130fbb99 = () => interopDefault(import('..\\pages\\wallet\\identity-information.vue' /* webpackChunkName: "pages/wallet/identity-information" */))
const _7594f705 = () => interopDefault(import('..\\pages\\wallet\\layer.vue' /* webpackChunkName: "pages/wallet/layer" */))
const _f5c98690 = () => interopDefault(import('..\\pages\\wallet\\market.vue' /* webpackChunkName: "pages/wallet/market" */))
const _018a8e62 = () => interopDefault(import('..\\pages\\wallet\\news.vue' /* webpackChunkName: "pages/wallet/news" */))
const _daedf6d2 = () => interopDefault(import('..\\pages\\wallet\\receive.vue' /* webpackChunkName: "pages/wallet/receive" */))
const _77030f79 = () => interopDefault(import('..\\pages\\wallet\\scan.vue' /* webpackChunkName: "pages/wallet/scan" */))
const _05aad198 = () => interopDefault(import('..\\pages\\wallet\\trade.vue' /* webpackChunkName: "pages/wallet/trade" */))
const _e27562ba = () => interopDefault(import('..\\pages\\wallet\\trade-allowance.vue' /* webpackChunkName: "pages/wallet/trade-allowance" */))
const _47834112 = () => interopDefault(import('..\\pages\\wallet\\transaction.vue' /* webpackChunkName: "pages/wallet/transaction" */))
const _6f7287e7 = () => interopDefault(import('..\\pages\\wallet\\transfer.vue' /* webpackChunkName: "pages/wallet/transfer" */))
const _40c5f73c = () => interopDefault(import('..\\pages\\wallet\\wallet-dashboard.vue' /* webpackChunkName: "pages/wallet/wallet-dashboard" */))
const _ca096926 = () => interopDefault(import('..\\pages\\wallet\\wallet-manage.vue' /* webpackChunkName: "pages/wallet/wallet-manage" */))
const _0ad061fc = () => interopDefault(import('..\\pages\\wallet\\asset\\asset.vue' /* webpackChunkName: "pages/wallet/asset/asset" */))
const _3e93c29e = () => interopDefault(import('..\\pages\\wallet\\asset\\display-asset.vue' /* webpackChunkName: "pages/wallet/asset/display-asset" */))
const _2d6e249a = () => interopDefault(import('..\\pages\\wallet\\asset\\my-asset.vue' /* webpackChunkName: "pages/wallet/asset/my-asset" */))
const _f8934944 = () => interopDefault(import('..\\pages\\wallet\\manage\\add-coin.vue' /* webpackChunkName: "pages/wallet/manage/add-coin" */))
const _ff53361e = () => interopDefault(import('..\\pages\\wallet\\manage\\cold-wallet.vue' /* webpackChunkName: "pages/wallet/manage/cold-wallet" */))
const _599dfa19 = () => interopDefault(import('..\\pages\\wallet\\manage\\create-wallet.vue' /* webpackChunkName: "pages/wallet/manage/create-wallet" */))
const _ec9fc784 = () => interopDefault(import('..\\pages\\wallet\\manage\\identity-information.vue' /* webpackChunkName: "pages/wallet/manage/identity-information" */))
const _ba9dd860 = () => interopDefault(import('..\\pages\\wallet\\manage\\import-wallet.vue' /* webpackChunkName: "pages/wallet/manage/import-wallet" */))
const _15738f22 = () => interopDefault(import('..\\pages\\wallet\\manage\\key-store.vue' /* webpackChunkName: "pages/wallet/manage/key-store" */))
const _6701edd6 = () => interopDefault(import('..\\pages\\wallet\\manage\\personal-details.vue' /* webpackChunkName: "pages/wallet/manage/personal-details" */))
const _62a89b84 = () => interopDefault(import('..\\pages\\wallet\\manage\\private-key.vue' /* webpackChunkName: "pages/wallet/manage/private-key" */))
const _07acde16 = () => interopDefault(import('..\\pages\\wallet\\user\\about.vue' /* webpackChunkName: "pages/wallet/user/about" */))
const _7695d9de = () => interopDefault(import('..\\pages\\wallet\\user\\add-address.vue' /* webpackChunkName: "pages/wallet/user/add-address" */))
const _3e71e329 = () => interopDefault(import('..\\pages\\wallet\\user\\address-book.vue' /* webpackChunkName: "pages/wallet/user/address-book" */))
const _c2b4b20c = () => interopDefault(import('..\\pages\\wallet\\user\\address-type.vue' /* webpackChunkName: "pages/wallet/user/address-type" */))
const _79a4e9dc = () => interopDefault(import('..\\pages\\wallet\\user\\explore.vue' /* webpackChunkName: "pages/wallet/user/explore" */))
const _1cc5e4ea = () => interopDefault(import('..\\pages\\wallet\\user\\manage-wallet.vue' /* webpackChunkName: "pages/wallet/user/manage-wallet" */))
const _6b354672 = () => interopDefault(import('..\\pages\\wallet\\user\\notification.vue' /* webpackChunkName: "pages/wallet/user/notification" */))
const _4adc041c = () => interopDefault(import('..\\pages\\wallet\\user\\profile.vue' /* webpackChunkName: "pages/wallet/user/profile" */))
const _9eff2c8a = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\currency.vue' /* webpackChunkName: "pages/wallet/user/settings/currency" */))
const _7099e872 = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\dap-settings.vue' /* webpackChunkName: "pages/wallet/user/settings/dap-settings" */))
const _1033dcfc = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\language.vue' /* webpackChunkName: "pages/wallet/user/settings/language" */))
const _9de25818 = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\network.vue' /* webpackChunkName: "pages/wallet/user/settings/network" */))
const _778b41ec = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\network-detection.vue' /* webpackChunkName: "pages/wallet/user/settings/network-detection" */))
const _d7224666 = () => interopDefault(import('..\\pages\\wallet\\user\\settings\\settings.vue' /* webpackChunkName: "pages/wallet/user/settings/settings" */))
const _82a6c7c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/confirm-phrase",
    component: _030cbbe9,
    name: "confirm-phrase"
  }, {
    path: "/create-identity",
    component: _cdb7a608,
    name: "create-identity"
  }, {
    path: "/login",
    component: _ef578194,
    name: "login"
  }, {
    path: "/phrase",
    component: _206409bc,
    name: "phrase"
  }, {
    path: "/privacy-alert",
    component: _575342b8,
    name: "privacy-alert"
  }, {
    path: "/recover-identity",
    component: _11937d6c,
    name: "recover-identity"
  }, {
    path: "/update-password",
    component: _5e507dac,
    name: "update-password"
  }, {
    path: "/wallet/add-coin-start",
    component: _7735d44e,
    name: "wallet-add-coin-start"
  }, {
    path: "/wallet/add-wallet",
    component: _8af78ebe,
    name: "wallet-add-wallet"
  }, {
    path: "/wallet/all-news",
    component: _1c27f57b,
    name: "wallet-all-news"
  }, {
    path: "/wallet/biometric",
    component: _4b591628,
    name: "wallet-biometric"
  }, {
    path: "/wallet/identity-information",
    component: _130fbb99,
    name: "wallet-identity-information"
  }, {
    path: "/wallet/layer",
    component: _7594f705,
    name: "wallet-layer"
  }, {
    path: "/wallet/market",
    component: _f5c98690,
    name: "wallet-market"
  }, {
    path: "/wallet/news",
    component: _018a8e62,
    name: "wallet-news"
  }, {
    path: "/wallet/receive",
    component: _daedf6d2,
    name: "wallet-receive"
  }, {
    path: "/wallet/scan",
    component: _77030f79,
    name: "wallet-scan"
  }, {
    path: "/wallet/trade",
    component: _05aad198,
    name: "wallet-trade"
  }, {
    path: "/wallet/trade-allowance",
    component: _e27562ba,
    name: "wallet-trade-allowance"
  }, {
    path: "/wallet/transaction",
    component: _47834112,
    name: "wallet-transaction"
  }, {
    path: "/wallet/transfer",
    component: _6f7287e7,
    name: "wallet-transfer"
  }, {
    path: "/wallet/wallet-dashboard",
    component: _40c5f73c,
    name: "wallet-wallet-dashboard"
  }, {
    path: "/wallet/wallet-manage",
    component: _ca096926,
    name: "wallet-wallet-manage"
  }, {
    path: "/wallet/asset/asset",
    component: _0ad061fc,
    name: "wallet-asset-asset"
  }, {
    path: "/wallet/asset/display-asset",
    component: _3e93c29e,
    name: "wallet-asset-display-asset"
  }, {
    path: "/wallet/asset/my-asset",
    component: _2d6e249a,
    name: "wallet-asset-my-asset"
  }, {
    path: "/wallet/manage/add-coin",
    component: _f8934944,
    name: "wallet-manage-add-coin"
  }, {
    path: "/wallet/manage/cold-wallet",
    component: _ff53361e,
    name: "wallet-manage-cold-wallet"
  }, {
    path: "/wallet/manage/create-wallet",
    component: _599dfa19,
    name: "wallet-manage-create-wallet"
  }, {
    path: "/wallet/manage/identity-information",
    component: _ec9fc784,
    name: "wallet-manage-identity-information"
  }, {
    path: "/wallet/manage/import-wallet",
    component: _ba9dd860,
    name: "wallet-manage-import-wallet"
  }, {
    path: "/wallet/manage/key-store",
    component: _15738f22,
    name: "wallet-manage-key-store"
  }, {
    path: "/wallet/manage/personal-details",
    component: _6701edd6,
    name: "wallet-manage-personal-details"
  }, {
    path: "/wallet/manage/private-key",
    component: _62a89b84,
    name: "wallet-manage-private-key"
  }, {
    path: "/wallet/user/about",
    component: _07acde16,
    name: "wallet-user-about"
  }, {
    path: "/wallet/user/add-address",
    component: _7695d9de,
    name: "wallet-user-add-address"
  }, {
    path: "/wallet/user/address-book",
    component: _3e71e329,
    name: "wallet-user-address-book"
  }, {
    path: "/wallet/user/address-type",
    component: _c2b4b20c,
    name: "wallet-user-address-type"
  }, {
    path: "/wallet/user/explore",
    component: _79a4e9dc,
    name: "wallet-user-explore"
  }, {
    path: "/wallet/user/manage-wallet",
    component: _1cc5e4ea,
    name: "wallet-user-manage-wallet"
  }, {
    path: "/wallet/user/notification",
    component: _6b354672,
    name: "wallet-user-notification"
  }, {
    path: "/wallet/user/profile",
    component: _4adc041c,
    name: "wallet-user-profile"
  }, {
    path: "/wallet/user/settings/currency",
    component: _9eff2c8a,
    name: "wallet-user-settings-currency"
  }, {
    path: "/wallet/user/settings/dap-settings",
    component: _7099e872,
    name: "wallet-user-settings-dap-settings"
  }, {
    path: "/wallet/user/settings/language",
    component: _1033dcfc,
    name: "wallet-user-settings-language"
  }, {
    path: "/wallet/user/settings/network",
    component: _9de25818,
    name: "wallet-user-settings-network"
  }, {
    path: "/wallet/user/settings/network-detection",
    component: _778b41ec,
    name: "wallet-user-settings-network-detection"
  }, {
    path: "/wallet/user/settings/settings",
    component: _d7224666,
    name: "wallet-user-settings-settings"
  }, {
    path: "/",
    component: _82a6c7c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
