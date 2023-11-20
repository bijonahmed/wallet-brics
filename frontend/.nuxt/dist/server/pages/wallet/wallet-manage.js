exports.ids = [49];
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/wallet-manage.vue?vue&type=template&id=3399c1d6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-dashboard",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"><h6>Manage</h6></div> <div class=\"link_home\"></div>")], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_part\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"layer settings_\">", "</div>", [_vm._ssrNode("<ul style=\"background-color: #fff;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<div class=\"_layer profile_\">", "</div>", [_c('nuxt-link', {
    staticClass: "_net_btn active",
    attrs: {
      "to": "/wallet/identity-information",
      "type": "button"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    staticClass: "img-fluid",
    staticStyle: {
      "height": "35px",
      "width": "35px"
    },
    attrs: {
      "src": "/images/logo_loader.png",
      "loading": "lazy",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', [_c('p', [_vm._v("Pronay")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("Manage your ientity wallet")])])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('span', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("Please backup")]), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])])], 1)])]), _vm._ssrNode(" <ul style=\"background-color: #fff;\"><li><div class=\"_layer profile_\"><a type=\"button\" class=\"_net_btn active\"><div class=\"d-flex align-items-center\"><div><p>Wallet Address </p> <p style=\"font-size: 12px;\">hask4roq34h...........78asdfh</p></div></div></a></div></li> <li><div class=\"_layer\"><a type=\"button\" class=\"_net_btn active w_modal\"><div class=\"d-flex align-items-center\"><p>Wallet Name </p></div> <div class=\"d-flex align-items-center\"><span style=\"font-size: 12px;\">BRICS</span> <i class=\"fa-solid fa-chevron-right\"></i></div></a></div></li></ul> "), _vm._ssrNode("<ul style=\"background-color: #fff;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<div class=\"_layer\">", "</div>", [_c('nuxt-link', {
    staticClass: "_net_btn active",
    attrs: {
      "to": "/wallet/biometric",
      "type": "button"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('p', [_vm._v("Biometric Verification")])]), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1)]), _vm._ssrNode(" <li><div class=\"_layer\"><a type=\"button\" class=\"_net_btn active pass_h\"><div class=\"d-flex align-items-center\"><p>Export Keystore </p></div> <i class=\"fa-solid fa-chevron-right\"></i></a></div></li> <li><div class=\"_layer\"><a type=\"button\" class=\"_net_btn active pass_h\"><div class=\"d-flex align-items-center\"><p>Export Private key </p></div> <i class=\"fa-solid fa-chevron-right\"></i></a></div></li>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<div class=\"_layer justify-content-center\">", "</div>", [_c('nuxt-link', {
    staticClass: "_net_btn active",
    attrs: {
      "to": "/wallet/layer",
      "type": "button"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('p', [_vm._v("Ethereum consensus layer BLS key ")])]), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1)])])], 2)])])]), _vm._ssrNode(" <div class=\"pass_modal w_name\"><div class=\"p_modal\"><form action><h6>Wallet Name </h6> <div class=\"in_group\"><input type=\"text\" placeholder=\"BRICS\" name=\"password\" id=\"password-field\" class=\"img-fluid\"></div> <div class=\"d-flex align-items-center justify-content-center my_modal_footer\"><button type=\"button\" class=\"btn_cancle\">Cancel</button> <button type=\"button\" class=\"btn_cancle\">Confirm</button></div></form></div></div> <div class=\"pass_modal pass_hint\"><div class=\"p_modal\"><form action><h6>Enter password</h6> <div class=\"in_group\"><input type=\"password\" placeholder=\"Password\" name=\"password\" id=\"password-field\" class=\"img-fluid\"> <i toggle=\"#password-field\" class=\"fa-regular fa-eye toggle-password\"></i></div> <div class=\"d-flex align-items-center justify-content-center my_modal_footer\"><button type=\"button\" class=\"btn_cancle\">Cancel</button> <button type=\"button\" class=\"btn_cancle\">Confirm</button></div></form></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wallet/wallet-manage.vue?vue&type=template&id=3399c1d6&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/wallet-manage.vue?vue&type=script&lang=js&

/* harmony default export */ var wallet_managevue_type_script_lang_js_ = ({
  head: {
    title: 'Wallet Manage'
  },
  components: {
    Loader: Loader["a" /* default */]
  },
  mounted() {},
  methods: {
    showpassword() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    },
    w_modal() {
      $(".w_name").fadeIn();
    },
    cancel() {
      $(".pass_modal").fadeOut();
    },
    exportkeystore() {
      $(".pass_hint").fadeIn();
    },
    pass_hint_close() {
      $(".pass_hint").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./pages/wallet/wallet-manage.vue?vue&type=script&lang=js&
 /* harmony default export */ var wallet_wallet_managevue_type_script_lang_js_ = (wallet_managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/wallet/wallet-manage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wallet_wallet_managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "29545270"
  
)

/* harmony default export */ var wallet_manage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wallet-manage.js.map