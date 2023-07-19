"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_addVehicle_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Buttons",
  data: function data() {
    return {
      first_name: "",
      kitchen_name: "",
      email: "",
      password: "",
      contact_number: "",
      country: "",
      city: "",
      province: "",
      postalCode: "",
      pic_lat: "",
      ratting: "",
      pic_long: "",
      age: "",
      type: "",
      gender: "",
      errors: {},
      successMessage: "",
      isLoading: false
    };
  },
  methods: {
    addUser: function addUser() {
      var _this = this;
      this.isLoading = true;
      axios.post("addRiderSignup", {
        first_name: this.first_name,
        email: this.email,
        password: this.password,
        contact_number: this.contact_number,
        country: this.country,
        city: this.city,
        province: this.province,
        postalCode: this.postalCode,
        age: this.age,
        gender: this.gender,
        pic_long: this.pic_long,
        pic_lat: this.pic_lat,
        type: this.type = "rider",
        kitchen_name: this.kitchen_name,
        ratting: this.ratting
      }).then(function (response) {
        console.log(response.data);
        _this.successMessage = "Rider added successfully!";
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        console.log(error.response.data);
      })["finally"](function () {
        _this.isLoading = false; // Set isLoading to false after the API call completes
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a& ***!
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
  }, [_vm._v("\n        " + _vm._s(_vm.successMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.addUser.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "first_name"
    }
  }, [_vm._v("Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "name"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.name ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Capacity:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.capacity,
      expression: "capacity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "capacity"
    },
    domProps: {
      value: _vm.capacity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.capacity = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.capacity ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.capacity[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "icon_type"
    }
  }, [_vm._v("Icon Types:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.icon_type,
      expression: "icon_type"
    }],
    staticClass: "form-control",
    attrs: {
      id: "icon_type"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.icon_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "taxi"
    }
  }, [_vm._v("Taxi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "moter_bike"
    }
  }, [_vm._v("Moter Bike")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "supported_vehicle"
    }
  }, [_vm._v("Supported Vehicles:")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.supported_vehicle,
      expression: "supported_vehicle"
    }],
    staticClass: "form-control",
    attrs: {
      id: "supported_vehicle",
      placeholder: "Example: Toyato,Audi,Acura",
      spellcheck: "false"
    },
    domProps: {
      value: _vm.supported_vehicle
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.supported_vehicle = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Description:")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "form-control",
    attrs: {
      id: "description",
      placeholder: "Enter Description",
      spellcheck: "false"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      disabled: _vm.isLoading
    }
  }, [_vm.isLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _c("span", [_vm._v("Add Vehicle")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "Icon"
    }
  }, [_vm._v("Icon:")]), _vm._v(" "), _c("input", {
    attrs: {
      type: "file",
      id: "Icon"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/admin/addVehicle.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/addVehicle.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addVehicle.vue?vue&type=template&id=5dc6398a& */ "./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a&");
/* harmony import */ var _addVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addVehicle.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__.render,
  _addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/addVehicle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addVehicle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addVehicle_vue_vue_type_template_id_5dc6398a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addVehicle.vue?vue&type=template&id=5dc6398a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addVehicle.vue?vue&type=template&id=5dc6398a&");


/***/ })

}]);