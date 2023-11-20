exports.ids = [48];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=e61b5fa8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"footer\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<footer>", "</footer>", [_vm._ssrNode("<div class=\"footer_list\">", "</div>", [_vm._ssrNode("<div class=\"text-center\">", "</div>", [_c('nuxt-link', {
    staticClass: "active",
    attrs: {
      "to": "/wallet/wallet-dashboard",
      "type": "button"
    }
  }, [_c('svg', {
    staticStyle: {
      "enable-background": "new 0 0 90 90"
    },
    attrs: {
      "version": "1.1",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 90 112.5",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M 90 56.621 C 90 56.621 90 56.498 90 56.374 C 90 56.25 90 56.25 90 56.126 C 90 56.002 90 55.879 89.878 55.755 C 89.878 55.755 89.878 55.755 89.878 55.755 C 89.878 55.755 89.878 55.63 89.757 55.506 C 82.795 46.711 78.521 36.18 77.3 24.906 C 77.3 24.783 77.3 24.783 77.178 24.659 C 77.056 24.04 76.689 23.668 76.079 23.544 C 65.088 22.305 54.586 17.969 45.916 10.908 C 45.916 10.908 45.794 10.784 45.672 10.784 C 45.672 10.784 45.672 10.784 45.672 10.784 C 45.55 10.784 45.427 10.66 45.305 10.66 C 45.305 10.66 45.183 10.66 45.061 10.66 C 44.939 10.66 44.939 10.66 44.817 10.66 C 44.695 10.66 44.573 10.66 44.45 10.784 C 44.45 10.784 44.45 10.784 44.45 10.784 C 44.45 10.784 44.328 10.784 44.206 10.908 C 35.536 17.969 25.156 22.305 14.044 23.544 C 13.677 23.544 13.433 23.792 13.189 24.04 C 12.944 24.288 12.679 25.106 12.557 25.477 C 11.336 36.751 7.205 46.711 0.244 55.506 C 0.244 55.506 0.122 55.63 0.122 55.755 C 0.122 55.755 0.122 55.755 0.122 55.755 C 0.122 55.879 0 56.002 0 56.126 C 0 56.25 0 56.25 0 56.374 C 0 56.498 0 56.498 0 56.621 C 0 56.745 0 56.87 0.122 56.994 C 0.122 56.994 0.122 56.994 0.122 56.994 C 0.122 56.994 0.122 57.117 0.244 57.241 C 7.205 66.037 11.479 76.567 12.7 87.841 C 12.7 88.46 13.189 88.832 13.799 88.956 C 13.799 88.956 13.921 88.956 13.921 88.956 C 25.034 90.195 35.414 94.531 44.084 101.592 C 44.328 101.84 44.573 101.84 44.817 101.84 C 44.817 101.84 44.817 101.84 44.817 101.84 C 44.817 101.84 44.817 101.84 44.817 101.84 C 45.061 101.84 45.305 101.716 45.55 101.592 C 54.22 94.531 64.6 90.195 75.712 88.956 C 75.958 88.956 76.201 88.832 76.323 88.708 C 76.934 88.584 76.934 88.584 76.934 88.584 C 76.934 88.584 77.056 88.46 77.056 88.46 C 77.178 88.336 77.3 88.089 77.3 87.841 C 78.521 76.691 82.795 66.037 89.757 57.241 C 89.757 57.241 89.878 57.117 89.878 56.994 C 89.878 56.994 89.878 56.994 89.878 56.994 C 90 56.87 90 56.745 90 56.621 Z M 86.825 55.755 L 46.894 55.755 L 75.102 27.013 C 76.567 37.543 80.597 47.454 86.825 55.755 Z M 74.125 26.022 L 45.916 54.764 L 45.916 14.129 C 54.098 20.447 63.867 24.535 74.125 26.022 Z M 44.45 54.764 L 16.119 26.022 C 26.377 24.659 36.147 20.571 44.45 14.252 L 44.45 54.764 Z M 44.45 98.495 C 36.147 92.177 26.499 88.089 16.242 86.726 L 44.45 58.232 L 44.45 98.495 Z M 45.916 98.619 L 45.916 58.232 L 74.003 86.726 C 63.745 88.212 54.098 92.301 45.916 98.619 Z M 15.265 27.013 L 43.474 55.755 L 3.541 55.755 C 9.769 47.454 13.799 37.543 15.265 27.013 Z M 3.664 57.241 L 43.474 57.241 L 15.265 85.859 C 13.921 75.452 9.891 65.665 3.664 57.241 Z M 75.102 85.859 L 46.894 57.241 L 86.703 57.241 C 80.475 65.665 76.567 75.452 75.102 85.859 Z"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Wallet")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-center\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/market",
      "type": "button"
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "512",
      "height": "512",
      "viewBox": "0 0 512 512"
    }
  }, [_c('line', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "x1": "344",
      "y1": "280",
      "x2": "432",
      "y2": "192"
    }
  }), _vm._v(" "), _c('line', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "x1": "232",
      "y1": "216",
      "x2": "296",
      "y2": "280"
    }
  }), _vm._v(" "), _c('line', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "x1": "80",
      "y1": "320",
      "x2": "184",
      "y2": "216"
    }
  }), _vm._v(" "), _c('circle', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "cx": "456",
      "cy": "168",
      "r": "24"
    }
  }), _vm._v(" "), _c('circle', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "cx": "320",
      "cy": "304",
      "r": "24"
    }
  }), _vm._v(" "), _c('circle', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "cx": "208",
      "cy": "192",
      "r": "24"
    }
  }), _vm._v(" "), _c('circle', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "cx": "56",
      "cy": "344",
      "r": "24"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Maket")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-center\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/news",
      "type": "button"
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "512",
      "height": "512",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M86.76,255a9.89,9.89,0,0,0,4.87-1.29,9.82,9.82,0,0,0,3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70,14.26-24.57,53.61-33.65,105.27-24.29a9.86,9.86,0,0,0,11.45-7.9,9.84,9.84,0,0,0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3,5.71-39,17.28-48.45,33.48-14,24.19-12.7,54.73,7.42,89.62A9.85,9.85,0,0,0,86.76,255Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M361.61,143.73c32.24.42,52.61,9.31,62.79,26.86,14.21,24.48,2.52,62.81-31.27,102.52a9.82,9.82,0,0,0,7.51,16.18,9.88,9.88,0,0,0,7.52-3.46c19.12-22.47,32.35-45.54,38.25-66.71,6.14-22,4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83,9.83,0,0,0-.12,19.66Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M326.47,414.89a9.88,9.88,0,0,0-13.5,3.35c-16.41,27.15-36.57,42.1-56.77,42.1-28.49,0-56-29.31-73.73-78.42A9.87,9.87,0,0,0,169.88,376a9.83,9.83,0,0,0-6,12.58c10,27.77,23.47,50.75,39,66.46,16.11,16.34,34.55,25,53.32,25,27.38,0,53.54-18.33,73.65-51.61a9.81,9.81,0,0,0-3.38-13.5Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M431.7,338.54a32.14,32.14,0,0,0-29.9,44.33C360,402.37,282,387.66,209.93,346.25c-32.91-18.9-62.16-41.86-84.6-66.39a9.9,9.9,0,0,0-13.91-.65,9.8,9.8,0,0,0-.65,13.9c23.79,26,54.68,50.28,89.33,70.18,40.28,23.13,82.27,38.63,121.43,44.81a225.54,225.54,0,0,0,35,2.91c23.12,0,43-4.3,58.51-12.79a32.2,32.2,0,1,0,16.7-59.68Zm0,44.66a12.6,12.6,0,0,1-7.82-2.72,10,10,0,0,0-2.2-2.21,12.61,12.61,0,1,1,10,4.93Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M82.09,338.59c.57-21.26,12.41-47,33.68-73.16,23.19-28.45,56.69-56,94.34-77.65,33.25-19.1,65.2-31.9,98.07-38.91a9.83,9.83,0,1,0-4.12-19.22c-34.85,7.43-68.78,21-103.79,41.09C116.09,219.09,59.9,289.88,62.46,343.9a32.32,32.32,0,1,0,19.63-5.31ZM80.3,383.2a12.5,12.5,0,1,1,12.59-12.5A12.56,12.56,0,0,1,80.3,383.2Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M256.2,96.32a32.23,32.23,0,0,0,26.53-13.81c17.89,11.69,34,35,45.81,66.12,13,34.39,19.84,75.38,19.84,118.54,0,37.18-5.19,72.35-15,103.6a9.72,9.72,0,0,0,.66,7.49,9.82,9.82,0,0,0,5.8,4.84,9.89,9.89,0,0,0,12.34-6.44c10.42-33.14,15.93-70.34,15.93-109.49,0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16A32.3,32.3,0,1,0,256.2,96.32Zm0-44.66a12.5,12.5,0,1,1-12.59,12.5A12.56,12.56,0,0,1,256.2,51.66Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M251,243.36h0a24.35,24.35,0,0,0,5.16,48.16,24.68,24.68,0,0,0,5.16-.55A24.36,24.36,0,1,0,251,243.36Z"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Browser")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-center\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/user/profile",
      "type": "button"
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "512",
      "height": "512",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32px"
    },
    attrs: {
      "d": "M344,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S348,90,344,144Z"
    }
  }), _vm._v(" "), _c('path', {
    staticStyle: {
      "fill": "none",
      "stroke": "#000",
      "stroke-miterlimit": "10",
      "stroke-width": "32px"
    },
    attrs: {
      "d": "M256,304c-87,0-175.3,48-191.64,138.6C62.39,453.52,68.57,464,80,464H432c11.44,0,17.62-10.48,15.65-21.4C431.3,352,343,304,256,304Z"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("My Profile")])])], 1)], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=e61b5fa8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da9ded22"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/wallet-dashboard.vue?vue&type=template&id=33677f51&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home d-flex\">", "</div>", [_vm._ssrNode("<div class=\"menu_option\"><button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#choose_wallet\" aria-controls=\"choose_wallet\" class=\"btn_menu\"><i class=\"fa-solid fa-bars-staggered\"></i></button></div> <div><button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#network_button\" aria-controls=\"choose_wallet\" class=\"btn_menu ms-2 btn_main\">Usdt <i class=\"fa-solid fa-caret-down\"></i></button></div> "), _vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/scan",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-qrcode"
  })])], 1)], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"wallet_select main_part\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"showed_wallet\">", "</div>", [_vm._ssrNode("<div class=\"owl-carousel\">", "</div>", [_vm._ssrNode("<div class=\"_coin_div intro_open\">", "</div>", [_vm._ssrNode("<h5>BRICS</h5> <p><input id=\"c_text\" type=\"text\" value=\"098sdfs0890asdf\" style=\"border: none !important; outline: 0 !important;background: transparent !important; color: #fff;\"> <button type=\"button\" class=\"btn_copy\"><i class=\"fa-regular fa-copy\"></i></button></p> "), _c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-manage"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ellipsis"
  })]), _vm._ssrNode(" <h6><span>$</span>0</h6>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"_coin_div intro_open\">", "</div>", [_vm._ssrNode("<h5>BRICS</h5> <p><input id=\"c_text\" type=\"text\" value=\"098sdfs0890asdf\" style=\"border: none !important; outline: 0 !important;background: transparent !important; color: #fff;\"> <button type=\"button\" class=\"btn_copy\"><i class=\"fa-regular fa-copy\"></i></button></p> "), _c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-manage"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ellipsis"
  })]), _vm._ssrNode(" <h6><span>$</span>0</h6>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"_coin_div intro_open\">", "</div>", [_vm._ssrNode("<h5>BRICS</h5> <p><input id=\"c_text\" type=\"text\" value=\"098sdfs0890asdf\" style=\"border: none !important; outline: 0 !important;background: transparent !important; color: #fff;\"> <button type=\"button\" onclick=\"copyfunctin()\" class=\"btn_copy\"><i class=\"fa-regular fa-copy\"></i></button></p> "), _c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-manage"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ellipsis"
  })]), _vm._ssrNode(" <h6><span>$</span>0</h6>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wallet_options\">", "</div>", [_vm._ssrNode("<a type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#asset_modal\" aria-controls=\"choose_wallet\"><i class=\"fa-solid fa-arrow-right-arrow-left\"></i> <p>Transfer</p></a> "), _c('nuxt-link', {
    attrs: {
      "to": "/wallet/receive"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-download"
  }), _vm._v(" "), _c('p', [_vm._v("Receive")])]), _vm._ssrNode(" <a data-bs-toggle=\"offcanvas\" data-bs-target=\"#buy\" aria-controls=\"choose_wallet\"><i class=\"fa-solid fa-bag-shopping\"></i> <p>Buy</p></a>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"get_token\">", "</section>", [_vm._ssrNode("<div class=\"buttons_nft\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center\"><button type=\"button\" class=\"btn_htoken active\">Tokens</button> <button type=\"button\" class=\"btn_htoken\">NFT</button> <button type=\"button\" class=\"btn_htoken\">DeFi</button></div> "), _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/asset/asset"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-plus"
  })])], 1)], 2), _vm._ssrNode(" <div class=\"token_content mt-3\"><a data-bs-toggle=\"offcanvas\" data-bs-target=\"#setings_option\" aria-controls=\"offcanvasBottom\" class=\"text-center btn_security\"><h6>Get started with tokens</h6> <p>want to make the most of your wallet? <br> <span class=\"btn_get_token\" style=\" text-align: center;\">Get token</span></p></a></div>")], 2), _vm._ssrNode(" <div class=\"asset_part\"><h5>Assets</h5> <ul><li><div class=\"asset_content\"><div style=\"width: 15%;\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div style=\"width: 85%;\"><div class=\"ac_top\"><div><h4>USDT </h4> <h6>USDT</h6></div> <div><p>0</p> <h6>$0</h6></div></div> <span class=\"m_loss\">-1.17%</span> <span>$0.08</span></div></div></li> <li><div class=\"asset_content\"><div style=\"width: 15%;\"><img src=\"/images/currency_icon/litecoin.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div style=\"width: 85%;\"><div class=\"ac_top\"><div><h4>LTC </h4> <h6>Lite coin</h6></div> <div><p>0</p> <h6>$0</h6></div></div> <span class=\"m_loss\">-1.17%</span> <span>$0.08</span></div></div></li> <li><div class=\"_coin_buy bg-transparent\" style=\"box-shadow: none;\"><a href=\"#\" class=\"text-center btn_security\"><p>want to make the most of your wallet? <br> <span style=\"color: #1f9ed1; text-align: center;\">Get token</span></p></a></div></li></ul></div>")], 2)])])])]), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" <div tabindex=\"-1\" id=\"buy\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\"><div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close close__\"></button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">Selec On Ranp method </h5> <a href=\"#\" style=\"opacity: 0;\"><i class=\"fa-solid fa-gear\"></i></a></div> <div class=\"offcanvas-body small pt-0\"><div class=\"layer settings_\"><ul style=\"background-color: #fff;\"><li><div class=\"_layer\"><a type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#from_wallet\" aria-controls=\"offcanvasBottom\" class=\"_net_btn active\"><div class=\"d-flex align-items-center\"><i class=\"fa-regular fa-moon\"></i> <p>MoonPay</p></div> <i class=\"fa-solid fa-chevron-right\"></i></a></div></li></ul></div></div></div> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"asset_modal\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">Select asset </h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body small pt-0\">", "</div>", [_vm._ssrNode("<div class=\"layer transfer_\">", "</div>", [_vm._ssrNode("<div class=\"in_group\"><input type=\"text\" placeholder=\"Input token name\"> <i class=\"fa-solid fa-magnifying-glass ico_search\"></i></div> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/transfer"
    }
  }, [_c('div', {
    staticClass: "asset_content m-0 align-items-center"
  }, [_c('div', {
    staticStyle: {
      "width": "15%"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/currency_icon/usdt.png",
      "loading": "lazy",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "85%"
    }
  }, [_c('div', {
    staticClass: "ac_top align-items-center",
    staticStyle: {
      "border": "none"
    }
  }, [_c('div', [_c('h4', {
    staticClass: "mt-2"
  }, [_vm._v("USDT ")])]), _vm._v(" "), _c('div', [_c('p', [_vm._v("0")]), _vm._v(" "), _c('h6', [_vm._v("$0")])])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/transfer"
    }
  }, [_c('div', {
    staticClass: "asset_content m-0 align-items-center"
  }, [_c('div', {
    staticStyle: {
      "width": "15%"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/currency_icon/eth.png",
      "loading": "lazy",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "85%"
    }
  }, [_c('div', {
    staticClass: "ac_top align-items-center",
    staticStyle: {
      "border": "none"
    }
  }, [_c('div', [_c('h4', {
    staticClass: "mt-2"
  }, [_vm._v("ETH ")])]), _vm._v(" "), _c('div', [_c('p', [_vm._v("0")]), _vm._v(" "), _c('h6', [_vm._v("$0")])])])])])])], 1)], 2)], 2)])], 2), _vm._ssrNode(" <div class=\"guide_one\"><div class=\"guid_text\"><span></span> <p>Create and manage and switch between multichain wallets.</p> <button class=\"btn_ok m-0 ms-auto mt-2\">Next</button></div></div> <div class=\"guide_two\"><div class=\"guid_text\"><span></span> <p>Switch between networks -ETH mainnet, layer 2 and EVM are supported.</p> <button class=\"btn_ok m-0 ms-auto mt-2\">Next</button></div></div> <div class=\"guide_three\"><div class=\"guid_text\"><span></span> <p>Shortcuts to key wallet features make receive and transfer easy.</p> <button class=\"btn_ok m-0 ms-auto mt-2\">Next</button></div></div> <div tabindex=\"-1\" id=\"network_button\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\"><div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\" style=\"opacity: 0;\"></button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">Network Swich</h5> <a href=\"#\"><i class=\"fa-solid fa-gear\"></i></a></div> <div class=\"offcanvas-body small pt-0\"><div class=\"_tab_button\"><button type=\"button\" class=\"_tab active\">Mainnet</button> <button type=\"button\" class=\"_tab\">Testnet</button></div> <div class=\"layer\"><h6>USDT layer1</h6> <ul><li><div class=\"_layer\"><button type=\"button\" class=\"_net_btn active\"><div class=\"d-flex align-items-center\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"> <p>USDT</p></div> <i class=\"fa-solid fa-check\"></i></button></div></li></ul> <h6>USDT layer2</h6> <ul><li><div class=\"_layer\"><button type=\"button\" class=\"_net_btn\"><div class=\"d-flex align-items-center\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"> <p>USDT</p></div> <i class=\"fa-solid fa-check\"></i></button></div></li> <li><div class=\"_layer\"><button type=\"button\" class=\"_net_btn\"><div class=\"d-flex align-items-center\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"> <p>USDT</p></div> <i class=\"fa-solid fa-check\"></i></button></div></li> <li><div class=\"_layer\"><button type=\"button\" class=\"_net_btn\"><div class=\"d-flex align-items-center\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"> <p>USDT</p></div> <i class=\"fa-solid fa-check active\"></i></button></div></li></ul></div></div></div> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"choose_wallet\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas coin_select offcanvas-bottom\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <h5 id=\"offcanvasBottomLabel\" class=\"offcanvas-title\">Select Wallet</h5> "), _c('nuxt-link', {
    attrs: {
      "to": "/wallet/wallet-manage"
    }
  }, [_vm._v("Manage")])], 2), _vm._ssrNode(" <div class=\"offcanvas-body small\"><div class=\"wallet_list\"><div class=\"coin_list_st\"><ul><li><button type=\"button\" class=\"w_list_btn active\"><i class=\"fa-solid fa-bars-staggered\"></i></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/brics_umbrala_round.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/btc.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/eth.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/usdt.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/litecoin.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/cardano.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li> <li><button type=\"button\" class=\"w_list_btn\"><img src=\"/images/currency_icon/react.png\" loading=\"lazy\" alt class=\"img-fluid\"></button></li></ul></div> <div class=\"coin_list_name\"><h6>Wallet under identity</h6> <ul><li><a href=\"#\"><div class=\"_coin_div\"><h5>BRICS</h5> <p>098sdfs0890asdf</p></div></a></li> <li><a href=\"#\"><div class=\"_coin_div\"><h5>BTC</h5> <p>098sdfs0890asdf</p></div></a></li> <li><a href=\"#\"><div class=\"_coin_div\"><h5>ETH</h5> <p>098sdfs0890asdf</p></div></a></li> <li><h6 class=\"ms-1\">Hardware wallet</h6> <div class=\"_coin_buy\"><a href=\"#\"><img src=\"/images/currency_icon/brics_umbrala_round.png\" loading=\"lazy\" alt class=\"img-fluid\"> <p>Don't have one? Discover or buy </p> <i class=\"fa-solid fa-angle-right\"></i></a></div></li></ul></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"popup_security\">", "</div>", [_vm._ssrNode("<div class=\"main_modal\">", "</div>", [_vm._ssrNode("<div class=\"d-flex\"></div> <h2>Sequrity reminder</h2> <p>Backup the Mnemonic pharse to access the wallet address.</p> <p>The Mnemonic Phrase of your identity has not been backed up, please make sure to back it up now.</p> <p>The mnemonic Phrase can restore the digital assets under your digital identity,</p> "), _c('nuxt-link', {
    staticClass: "btn_backup bacK_up",
    attrs: {
      "to": "/wallet/manage/personal-details"
    }
  }, [_vm._v("Backup now")]), _vm._ssrNode(" <button class=\"btn_cancle btn_close\">Cancel</button>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div tabindex=\"-1\" id=\"setings_option\" aria-labelledby=\"offcanvasBottomLabel\" class=\"offcanvas offcanvas-bottom\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <p id=\"offcanvasBottomLabel\" class=\"offcanvas-title\" style=\"font-size: 12px;\">Settings</p> <p style=\"opacity: 0;\">.</p></div> "), _vm._ssrNode("<div class=\"offcanvas-body small\">", "</div>", [_vm._ssrNode("<div class=\"minor_fee\" style=\"border: none;\"></div> "), _vm._ssrNode("<div class=\"minor_fee\" style=\"border: none;\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/receive"
    }
  }, [_c('div', [_c('i', {
    staticClass: "fa-solid fa-arrow-right-arrow-left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "me-auto"
  }, [_c('h6', [_vm._v("Receive tokens from any exchange")])]), _vm._v(" "), _c('div', {
    staticClass: "angel_"
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"minor_fee\" style=\"border: none;\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/wallet/receive"
    }
  }, [_c('div', [_c('i', {
    staticClass: "fa-solid fa-arrow-right-arrow-left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "me-auto"
  }, [_c('h6', [_vm._v("Receive from another wallet ")])]), _vm._v(" "), _c('div', {
    staticClass: "angel_"
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])])], 1)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wallet/wallet-dashboard.vue?vue&type=template&id=33677f51&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wallet/wallet-dashboard.vue?vue&type=script&lang=js&


/* harmony default export */ var wallet_dashboardvue_type_script_lang_js_ = ({
  head: {
    title: 'Wallet Dashboard'
  },
  components: {
    Loader: Loader["a" /* default */],
    Footer: Footer["a" /* default */]
  },
  mounted() {
    this.guide();
    this.sliderloader();
  },
  methods: {
    sliderloader() {
      $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 5
      });
    },
    copyfunctin() {
      var copyText = document.getElementById("c_text");
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
    },
    guide() {
      $(".guide_one").fadeIn();
      $(".guide_one button").click(function () {
        $(".guide_one").fadeOut();
        $(".guide_two").fadeIn();
      });
      $(".guide_two button").click(function () {
        $(".guide_two").fadeOut();
        $(".guide_three").fadeIn();
      });
      $(".guide_three button").click(function () {
        $(".guide_three").fadeOut();
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/wallet/wallet-dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var wallet_wallet_dashboardvue_type_script_lang_js_ = (wallet_dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/wallet/wallet-dashboard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wallet_wallet_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6afced59"
  
)

/* harmony default export */ var wallet_dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wallet-dashboard.js.map