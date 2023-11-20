exports.ids = [28];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("569b8f14", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=template&id=317bba16&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showLoader,
      expression: "showLoader"
    }],
    staticClass: "loader"
  }, [_vm._ssrNode("<div class=\"load_box\" data-v-317bba16><img src=\"/images/logo_loader.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-317bba16> <h6 data-v-317bba16>BRICS</h6> <h6 style=\"font-weight: 300;\" data-v-317bba16>Loading...</h6></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Loader.vue?vue&type=template&id=317bba16&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=script&lang=js&
/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  data() {
    return {
      showLoader: true
    };
  },
  mounted() {
    // Hide the loader after 2 seconds
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./components/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Loader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "317bba16",
  "4fb587e7"
  
)

/* harmony default export */ var Loader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/receive.vue?vue&type=template&id=bf605b18&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home d-flex\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-dashboard",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"link_home\"><h6>Receive </h6></div> <div class=\"link_home\"></div>")], 2)])], 2)])]), _vm._ssrNode(" <section class=\"wallet_select\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><div id=\"inviteCode\" class=\"qr_code invite-page\"><p>Only supports Ethereum assets(ERC20)</p> <img src=\"/images/qr.png\" loading=\"lazy\" alt class=\"img-fluid\"> <div class=\"text-center\"><h6>Wallet Address</h6> <p><input type=\"text\" id=\"c_text\" value=\"oiyqw3786shdas876qhgq87dsfy8qyefd8yfq\" readonly=\"readonly\" style=\"outline:0 !important; border: none;\"></p></div> <div class=\"d-flex justify-content-between align-items-center\"><button type=\"button\" class=\"btn_cancle\" style=\"color: #000;\"><i class=\"fa-regular fa-share-from-square\"></i>Share\r\n                            </button> <button type=\"button\" id=\"copied\" class=\"btn_cancle copy\" style=\"color: #000;\"><i class=\"fa-regular fa-copy\"></i>Copy\r\n                            </button> <button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#asset_modal\" aria-controls=\"offcanvasBottom\" class=\"btn_cancle\" style=\"color: #000;\"><i class=\"fa-solid fa-ellipsis\"></i></button></div></div> <div class=\"layer settings_\"><ul style=\"background-color: #fff;\"><li><div class=\"_layer\"><a type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#from_wallet\" aria-controls=\"offcanvasBottom\" class=\"_net_btn active\"><div class=\"d-flex align-items-center\"><i class=\"fa-regular fa-clipboard\"></i> <p>How to receive from another wallet?</p></div> <i class=\"fa-chevron-right fa-solid\"></i></a></div></li> <li><div class=\"_layer\"><a type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#exchanged\" aria-controls=\"offcanvasBottom\" class=\"_net_btn active\"><div class=\"d-flex align-items-center\"><i class=\"fa-regular fa-clipboard\"></i> <p>How to receive from from exchanges?</p></div> <i class=\"fa-solid fa-chevron-right\"></i></a></div></li></ul></div></div></div></div></section> <div tabindex=\"-1\" id=\"from_wallet\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\"><div class=\"offcanvas-header\"><button style=\"opacity: 0;\">..</button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">How to receive from other wallets?</h5> <button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button></div> <div class=\"offcanvas-body small\"><div class=\"steps_\"><h6>Steps (in another wallets app)</h6> <ul><li>\r\n                        Select send (or Transfer in some wallets).\r\n                    </li> <li>\r\n                        Select The Token and want to send.\r\n                    </li> <li>\r\n                        Enter your token wallet address as the recipient or scan the wallet QR code that appears in the\r\n                        token app.\r\n                    </li> <li>\r\n                        select the network that matches your Token wallet address.\r\n                    </li> <li>\r\n                        Enter anount, confirm send and find the token in your Toen wallet.\r\n                    </li></ul></div></div></div> <div tabindex=\"-1\" id=\"exchanged\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\"><div class=\"offcanvas-header\"><button style=\"opacity: 0;\">..</button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">How to receive from from exchanges?</h5> <button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button></div> <div class=\"offcanvas-body small\"><div class=\"steps_\"><h6>Steps (in another exchange app)</h6> <ul><li>\r\n                        Select the token you want to withdraw.\r\n                    </li> <li>\r\n                        Enter your Token wallet address as the recipient or scan the wallet QR code that appears in the\r\n                        Token app..\r\n                    </li> <li>\r\n                        select the network that matches your Token wallet address.\r\n                    </li> <li>\r\n                        Enter anount, confirm send and find the token in your Toen wallet.\r\n                    </li></ul></div></div></div> <div tabindex=\"-1\" id=\"asset_modal\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\"><div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close close__\"></button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">Select Token </h5> <a href=\"#\" style=\"opacity: 0;\"><i class=\"fa-solid fa-gear\"></i></a></div> <div class=\"offcanvas-body small pt-0\"><div class=\"layer transfer_\"><div class=\"in_group\"><input type=\"text\" placeholder=\"Input token name\"> <i class=\"fa-solid fa-magnifying-glass ico_search\"></i></div> <ul><li><a class=\"pass_h\"><div class=\"asset_content m-0 align-items-center\"><div style=\"width: 15%;\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div style=\"width: 85%;\"><div class=\"ac_top align-items-center\" style=\"border: none;\"><div><h4 class=\"mt-2\">USDT </h4></div> <div><p>0</p> <h6>$0</h6></div></div></div></div></a></li> <li><a class=\"pass_h\"><div class=\"asset_content m-0 align-items-center\"><div style=\"width: 15%;\"><img src=\"images/currency_icon/eth.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div style=\"width: 85%;\"><div class=\"ac_top align-items-center\" style=\"border: none;\"><div><h4 class=\"mt-2\">ETH </h4></div> <div><p>0</p> <h6>$0</h6></div></div></div></div></a></li></ul></div></div></div> <div class=\"pass_modal pass_hint\"><div class=\"p_modal\"><form action><h6>Enter Amount</h6> <div class=\"in_group\"><input type=\"text\" placeholder=\"Enter Amount\" name=\"hint\" id=\"password-hint\" class=\"img-fluid\"></div> <div class=\"d-flex align-items-center justify-content-center my_modal_footer\"><button type=\"button\" class=\"btn_cancle\">Cancel</button> <button type=\"button\" class=\"btn_cancle\">Confirm</button></div></form></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wallet/receive.vue?vue&type=template&id=bf605b18&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/receive.vue?vue&type=script&lang=js&

/* harmony default export */ var receivevue_type_script_lang_js_ = ({
  head: {
    title: 'Receive'
  },
  components: {
    Loader: Loader["a" /* default */]
  },
  methods: {
    copyfunctin() {
      var copyText = document.getElementById("c_text");
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
    }
  }
});
// CONCATENATED MODULE: ./pages/wallet/receive.vue?vue&type=script&lang=js&
 /* harmony default export */ var wallet_receivevue_type_script_lang_js_ = (receivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/wallet/receive.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wallet_receivevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7de849da"
  
)

/* harmony default export */ var receive = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=receive.js.map