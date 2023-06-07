"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_assign_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      caregiverId: "",
      clientIds: [],
      clients: [],
      caregivers: [],
      searchTerm: "",
      successMessage: ""
    };
  },
  created: function created() {
    var _this = this;
    // Load the clients data when the component is created
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("kitchenGet").then(function (response) {
      _this.clients = response.data.data;
    })["catch"](function (error) {
      console.log(error);
    });

    // Load the caregivers data when the component is created
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("riderGet").then(function (response) {
      _this.caregivers = response.data.data;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    assignCaregiver: function assignCaregiver() {
      var _this2 = this;
      // Make a POST request to the Laravel API to assign the caregiver to the clients
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("RiderAssign", {
        rider_id: this.caregiverId,
        kitchen_id: this.clientIds
      }).then(function (response) {
        console.log(response.data);
        _this2.successMessage = "Assignments made successfully!";
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    filteredClients: function filteredClients() {
      if (!this.searchTerm) {
        return this.clients;
      }
      var searchTermLower = this.searchTerm.toLowerCase();
      return this.clients.filter(function (client) {
        return client.first_name.toLowerCase().includes(searchTermLower);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.successMessage ? _c("div", {
    staticClass: "alert alert-success"
  }, [_vm._v("\n        " + _vm._s(_vm.successMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("h1", [_vm._v("Assign Rider to Kitchen")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.assignCaregiver.apply(null, arguments);
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
      "for": "caregiver_id"
    }
  }, [_vm._v("Rider:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.caregiverId,
      expression: "caregiverId"
    }],
    staticClass: "form-control",
    attrs: {
      id: "caregiver_id",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.caregiverId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.caregivers, function (caregiver) {
    return _c("option", {
      key: caregiver.id,
      domProps: {
        value: caregiver.id
      }
    }, [_vm._v("\n                            " + _vm._s(caregiver.first_name) + "\n                        ")]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm",
    staticStyle: {
      height: "204px",
      "overflow-x": "scroll"
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "searchTerm"
    }
  }, [_vm._v("Search:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchTerm,
      expression: "searchTerm"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.searchTerm
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchTerm = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._l(_vm.filteredClients, function (client) {
    return _c("div", {
      key: client.id
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.clientIds,
        expression: "clientIds"
      }],
      attrs: {
        type: "checkbox",
        id: "client_" + client.id
      },
      domProps: {
        value: client.id,
        checked: Array.isArray(_vm.clientIds) ? _vm._i(_vm.clientIds, client.id) > -1 : _vm.clientIds
      },
      on: {
        change: function change($event) {
          var $$a = _vm.clientIds,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = client.id,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.clientIds = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.clientIds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.clientIds = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": "client_" + client.id
      }
    }, [_vm._v(_vm._s(client.first_name))])]);
  })], 2)])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n            Assign Rider\n        ")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/admin/assign.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/assign.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign.vue?vue&type=template&id=9f69e6a4& */ "./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4&");
/* harmony import */ var _assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/assign.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/assign.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/assign.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/assign.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_9f69e6a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assign.vue?vue&type=template&id=9f69e6a4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assign.vue?vue&type=template&id=9f69e6a4&");


/***/ })

}]);