exports.ids = [1];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirm-phrase.vue?vue&type=template&id=6c29f842&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/phrase",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-circle-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"></div> <div class=\"link_home\"></div>")], 2)])], 2)])]), _vm._ssrNode(" <section class=\"main_part sm_height\"><div class=\"st_part\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"create_step\"><div class=\"step_box active\"><h1>1</h1> <p>Create identity</p></div> <div class=\"step_box active\"><h1>2</h1> <p>Secure wallet</p> <span></span></div> <div class=\"step_box active\"><h1>3</h1> <p>Confirm secret recovery phrase</p> <span></span></div></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"backUup_phrase\"><h1>Confirm Secret Recovery Phrase </h1> <form action><div class=\"phrase_box confirn_box\"><div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>1</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>2</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>3</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>4</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>5</p></div> <div class=\"code_box\"><input type=\"text\" value style=\"outline: none; border: 1px solid #5b99fe;\"> <p>6</p></div> <div class=\"code_box\"><input type=\"text\" value style=\"outline: none; border: 1px solid #5b99fe;\"> <p>7</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>8</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>9</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>10</p></div> <div class=\"code_box\"><input type=\"text\" value style=\"outline: none; border: 1px solid #5b99fe;\"> <p>11</p></div> <div class=\"code_box\"><input type=\"text\" value=\"pharse\" disabled=\"disabled\" readonly=\"readonly\"> <p>12</p></div></div> <button type=\"button\" class=\"btn_ok push_backup\"> Next </button></form></div></div></div></div></div></section> <div class=\"success_modal pass_id\"><div style=\"position: relative;\"><div class=\"modal__icon\"><span class=\"fa-solid fa-check\"></span></div> <h3 class=\"modal__title\">\r\n                Congratulations\r\n            </h3> <p class=\"modal__text\">\r\n                Your settings have been successfully applied.\r\n            </p> <button class=\"button btn_nxt\"><span class=\"button__label\">Done</span></button></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/confirm-phrase.vue?vue&type=template&id=6c29f842&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirm-phrase.vue?vue&type=script&lang=js&

/* harmony default export */ var confirm_phrasevue_type_script_lang_js_ = ({
  head: {
    title: 'Confirm Phrase'
  },
  components: {
    Loader: Loader["a" /* default */]
  },
  mounted() {},
  methods: {
    successmessage() {
      $(".pass_id").fadeIn();
    },
    wlletDashboard() {
      if (false) {}
    }
  }
});
// CONCATENATED MODULE: ./pages/confirm-phrase.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_confirm_phrasevue_type_script_lang_js_ = (confirm_phrasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/confirm-phrase.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_confirm_phrasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e01d340"
  
)

/* harmony default export */ var confirm_phrase = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=confirm-phrase.js.map