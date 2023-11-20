exports.ids = [16];
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/identity-information.vue?vue&type=template&id=4104f2d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-manage",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"><h6>Identity Wallet </h6></div> <div class=\"link_home\"></div>")], 2)])], 2)])]), _vm._ssrNode(" <section class=\"main_part\"><div class=\"container-fluid\"><div class=\"col-md-12\"><div class=\"layer settings_\"><ul style=\"background-color: #fff;\"><li><div class=\"_layer profile_\"><div><div class=\"d-flex align-items-center\"><p style=\"color: #000;\">Identification</p><i class=\"fa-solid fa-circle-question\"></i></div> <p style=\"font-size: 12px;\">ohsa43hdfays98er98saeransdf9werwhdnas</p></div></div></li></ul> <ul style=\"background-color: #fff;\"><li><div class=\"_layer profile_\"><p>Profile picture</p> <div class=\"d-flex align-items-center\"><img src=\"/images/logo_loader.png\" loading=\"lazy\" alt class=\"img-fluid\"></div></div></li> <li><div class=\"_layer\"><a type=\"button\" class=\"_net_btn active btn_id\"><div class=\"d-flex align-items-center\"><p>Name Your Identity </p></div> <div class=\"d-flex align-items-center\"><span style=\"font-size: 12px;\">Pronay</span> <i class=\"fa-solid fa-chevron-right\"></i></div></a></div></li></ul> <ul style=\"background-color: #fff;\"><li><div class=\"_layer\"><a type=\"button\" class=\"_net_btn active btn_sub\"><div class=\"d-flex align-items-center\"><p>Newsletter </p></div> <i class=\"fa-solid fa-chevron-right\"></i></a></div></li></ul> <p style=\"font-size: 12px;\">Subscribe Brics Token News</p></div></div></div></section> <div class=\"pass_modal sub_modal\"><div class=\"p_modal\"><form action><h6> Subscribe to Newsletters</h6> <div class=\"in_group\"><input type=\"text\" placeholder=\"Email \" name id class=\"img-fluid\"></div> <p>BY agreeing to the subscription, the user agrees that BRICS policy and related parties may send\r\n                    security recommendations, product guid, promotional information and more.</p> <div class=\"d-flex align-items-center justify-content-center my_modal_footer\"><button type=\"button\" class=\"btn_cancle\">Cancel</button> <button type=\"button\" class=\"btn_cancle\">Confirm</button></div></form></div></div> <div class=\"pass_modal name_id\"><div class=\"p_modal\"><form action><h6>Change your Identity name</h6> <div class=\"in_group\"><input type=\"text\" placeholder=\"FullName \" name id class=\"img-fluid\"></div> <div class=\"d-flex align-items-center justify-content-center my_modal_footer\"><button type=\"button\" class=\"btn_cancle\">Cancel</button> <button type=\"button\" class=\"btn_cancle\">Confirm</button></div></form></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wallet/identity-information.vue?vue&type=template&id=4104f2d2&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/identity-information.vue?vue&type=script&lang=js&

/* harmony default export */ var identity_informationvue_type_script_lang_js_ = ({
  head: {
    title: 'Identity Information'
  },
  components: {
    Loader: Loader["a" /* default */]
  },
  mounted() {},
  methods: {
    nameIdentify() {
      $(".name_id").fadeIn();
    },
    forNameCancel() {
      $(".name_id").fadeOut();
    },
    forSubsCribe() {
      $(".sub_modal").fadeIn();
    },
    forSubCancel() {
      $(".sub_modal").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./pages/wallet/identity-information.vue?vue&type=script&lang=js&
 /* harmony default export */ var wallet_identity_informationvue_type_script_lang_js_ = (identity_informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/wallet/identity-information.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wallet_identity_informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "83174994"
  
)

/* harmony default export */ var identity_information = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=identity-information.js.map