"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_addUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Buttons',
  data: function data() {
    return {
      first_name: '',
      email: '',
      password: '',
      contact_number: '',
      country: '',
      city: '',
      province: '',
      postalCode: '',
      age: '',
      gender: '',
      errors: {},
      successMessage: '',
      inputs: [{
        magnitude: '',
        note: '',
        longitude: ''
      }]
    };
  },
  methods: {
    addUser: function addUser() {
      var _this = this;
      var inputData = this.inputs.reduce(function (acc, curr) {
        acc.magnitude.push(curr.magnitude);
        acc.note.push(curr.note);
        acc.longitude.push(curr.longitude);
        return acc;
      }, {
        magnitude: [],
        note: [],
        longitude: []
      });
      axios.post("addVender", {
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
        magnitude: inputData.magnitude,
        note: inputData.note,
        longitude: inputData.longitude
      }).then(function (response) {
        console.log(response.data);
        _this.successMessage = "User added successfully!";
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        console.log(error.response.data);
      });
    },
    add: function add(index) {
      this.inputs.splice(index + 1, 0, {
        magnitude: "",
        note: "",
        longitude: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
      value: _vm.first_name,
      expression: "first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "first_name"
    },
    domProps: {
      value: _vm.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.first_name = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.first_name ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first_name[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "email"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.email ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      id: "password"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.password ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "contact_number"
    }
  }, [_vm._v("Number:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contact_number,
      expression: "contact_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "contact_number"
    },
    domProps: {
      value: _vm.contact_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.contact_number = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "country"
    }
  }, [_vm._v("Country:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.country,
      expression: "country"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "country"
    },
    domProps: {
      value: _vm.country
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.country = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "city"
    }
  }, [_vm._v("City:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.city,
      expression: "city"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "city"
    },
    domProps: {
      value: _vm.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.city = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "province"
    }
  }, [_vm._v("Province:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.province,
      expression: "province"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "province"
    },
    domProps: {
      value: _vm.province
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.province = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "postalCode"
    }
  }, [_vm._v("Postal Code:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.postalCode,
      expression: "postalCode"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "postalCode"
    },
    domProps: {
      value: _vm.postalCode
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.postalCode = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "age"
    }
  }, [_vm._v("Age:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.age,
      expression: "age"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "age"
    },
    domProps: {
      value: _vm.age
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.age = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "gender"
    }
  }, [_vm._v("Gender:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.gender,
      expression: "gender"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "gender"
    },
    domProps: {
      value: _vm.gender
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.gender = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  }, [_c("div", {
    attrs: {
      id: "app"
    }
  }, _vm._l(_vm.inputs, function (_input, k) {
    return _c("div", {
      key: k,
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("Note:")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.note,
        expression: "input.note"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: _input.note
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "note", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("latitude:")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.magnitude,
        expression: "input.magnitude"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: _input.magnitude
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "magnitude", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("longitude:")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.longitude,
        expression: "input.longitude"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: _input.longitude
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "longitude", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: k || !k && _vm.inputs.length > 1,
        expression: "k || (!k && inputs.length > 1)"
      }],
      staticClass: "fas fa-minus-circle",
      on: {
        click: function click($event) {
          return _vm.remove(k);
        }
      }
    }, [_vm._v("Remove")]), _vm._v(" "), _c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: k == _vm.inputs.length - 1,
        expression: "k == inputs.length - 1"
      }],
      staticClass: "fas fa-plus-circle",
      on: {
        click: function click($event) {
          return _vm.add(k);
        }
      }
    }, [_vm._v("Add Location")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Add User")])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/admin/addUser.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/addUser.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addUser.vue?vue&type=template&id=ab88ce46& */ "./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46&");
/* harmony import */ var _addUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addUser.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/addUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__.render,
  _addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/addUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/addUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/addUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addUser_vue_vue_type_template_id_ab88ce46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addUser.vue?vue&type=template&id=ab88ce46& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/addUser.vue?vue&type=template&id=ab88ce46&");


/***/ })

}]);