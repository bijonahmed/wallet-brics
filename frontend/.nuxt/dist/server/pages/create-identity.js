exports.ids = [2];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/create-identity.vue?vue&type=template&id=7adb0f70&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/privacy-alert",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-circle-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"></div> <div class=\"link_home\"><a href=\"#\"><i class=\"fa-solid fa-circle-info\"></i></a></div>")], 2)])], 2)])]), _vm._ssrNode(" <section class=\"main_part sm_height\"><div class=\"st_part\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"create_step\"><div class=\"step_box active\"><h1>1</h1> <p>Create identity</p></div> <div class=\"step_box\"><h1>2</h1> <p>Secure wallet</p> <span></span></div> <div class=\"step_box\"><h1>3</h1> <p>Confirm secret recovery phrase</p> <span></span></div></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"title_iden\"><h6>Create identity</h6> <p>Give your identity a name and password</p></div> <div class=\"form_part\"><form action><div class=\"in_group\"><label> Name Your identity</label> <input type=\"text\" placeholder=\"Enter 5-12 characters\"></div> <div class=\"in_group pb-0\"><label> Set Passwrod</label> <input type=\"password\" placeholder=\"Enter Password\"></div> <div class=\"in_group pt-0\"><input type=\"password\" id=\"pass\" placeholder=\"Confirm Password\"> <i toggle=\"#pass\" class=\"fa-regular fa-eye toggle-password\"></i></div> <h6 class=\"mt-2\" style=\"font-size: 12px;\">Password hint </h6> <div class=\"in_group pt-1\"><input type=\"text\" id=\"hint\" placeholder=\"Password hint\"></div> <div class=\"in_group\"><label>Invite Id (optional)</label> <input type=\"text\" placeholder> <p>If you have invite please put the id here for get the reward of 10 BRICS.</p></div></form></div></div></div></div></div></section> "), _vm._ssrNode("<section class=\"footer\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"f_buttons\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center my-2\"><input type=\"checkbox\" name id=\"check\"><label for=\"check\" class=\"ms-2 mb-0\" style=\"font-size: 12px; margin-bottom: 5px;\">I have agreed to the terms of service</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/phrase"
    }
  }, [_c('button', {
    staticClass: "btn_backup add_c_pa",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Confirm")])])], 2)])])])]), _vm._ssrNode(" <div id=\"networkOffcanvas\" tabindex=\"-1\" class=\"offcanvas offcanvas-bottom hide\" style=\"border-top-right-radius: 10px; border-top-left-radius: 10px; min-height: 50vh;\"><div class=\"offcanvas-body py-4\"><div class=\"war_status\"><h6 class=\"mb-3\">What's identity?</h6> <p>An identity enables you to create new multichain wallets like ETH, BTC, ATOM and more.</p> <p>Wallets created with the same identity can all be recovered with the mnemonic(a set of 12 English\r\n                    words)\r\n                    linked to the identity.</p></div> <section class=\"footer -3\" style=\"width: 90%;\"><div class=\"f_buttons\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-clse btn_backup\">Ok</button></div></section></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/create-identity.vue?vue&type=template&id=7adb0f70&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/create-identity.vue?vue&type=script&lang=js&

/* harmony default export */ var create_identityvue_type_script_lang_js_ = ({
  head: {
    title: 'Create Identity'
  },
  components: {
    Loader: Loader["a" /* default */]
  },
  methods: {
    close() {
      console.log("close.....");
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('networkOffcanvas'));
      offcanvas.hide();
      //const offcanvas = new bootstrap.Offcanvas(this.$refs.networkOffcanvas);
      //offcanvas.hide();
    }
  },

  beforeDestroy() {
    // Ensure the offcanvas is hidden before the component is destroyed
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('networkOffcanvas'));
    offcanvas.hide();
  }
});
// CONCATENATED MODULE: ./pages/create-identity.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_create_identityvue_type_script_lang_js_ = (create_identityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/create-identity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_create_identityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "865bfef6"
  
)

/* harmony default export */ var create_identity = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create-identity.js.map