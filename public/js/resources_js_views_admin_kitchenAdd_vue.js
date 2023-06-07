"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_kitchenAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Buttons',
  data: function data() {
    return {
      locationData: [],
      // Array to store the location data from the API response
      errors: {},
      successMessage: ''
    };
  },
  mounted: function mounted() {
    this.fetchLocationData(); // Fetch the location data from the API when the component is mounted
  },

  methods: {
    fetchLocationData: function fetchLocationData() {
      var _this = this;
      axios.get("location").then(function (response) {
        _this.locationData = response.data.date;
        _this.locationData.forEach(function (location) {
          location.box = 1;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    decrementBox: function decrementBox(location) {
      if (location.box > 1) {
        location.box--;
        this.updateBox(location);
      }
    },
    // Increase the box value
    incrementBox: function incrementBox(location) {
      if (location.box < 20) {
        location.box++;
        this.updateBox(location);
      }
    },
    updateBox: function updateBox(location) {
      axios.put("updateLocation/".concat(location.id), {
        box: location.box
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteLocation: function deleteLocation(locationId) {
      this.locationData = this.locationData.filter(function (location) {
        return location.id !== locationId;
      });
    },
    addUser: function addUser() {
      // Logic to add the selected locations as an order
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-sub"
  }, [_vm.successMessage ? _c("div", {
    staticClass: "alert alert-success"
  }, [_vm._v(_vm._s(_vm.successMessage))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.locationData, function (location) {
    return _c("tr", {
      key: location.id
    }, [_c("td", [_vm._v(_vm._s(location.latitude))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(location.longitude))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(location.note))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "number-input"
    }, [_c("button", {
      staticClass: "number-input__btn",
      on: {
        click: function click($event) {
          return _vm.decrementBox(location);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-minus"
    })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(location.box))]), _vm._v(" "), _c("button", {
      staticClass: "number-input__btn",
      on: {
        click: function click($event) {
          return _vm.incrementBox(location);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-plus"
    })])])]), _vm._v(" "), _c("td")]);
  }), 0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Latitude")]), _vm._v(" "), _c("th", [_vm._v("Longitude")]), _vm._v(" "), _c("th", [_vm._v("Note")]), _vm._v(" "), _c("th", [_vm._v("Box")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/admin/kitchenAdd.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/kitchenAdd.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchenAdd.vue?vue&type=template&id=123a60c8& */ "./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8&");
/* harmony import */ var _kitchenAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kitchenAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _kitchenAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/kitchenAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kitchenAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./kitchenAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kitchenAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kitchenAdd_vue_vue_type_template_id_123a60c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./kitchenAdd.vue?vue&type=template&id=123a60c8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/kitchenAdd.vue?vue&type=template&id=123a60c8&");


/***/ })

}]);