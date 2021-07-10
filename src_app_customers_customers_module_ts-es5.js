(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["src_app_customers_customers_module_ts"], {
    /***/
    6719:
    /*!*******************************************************!*\
      !*** ./src/app/customers/customers-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomersRoutingModule": function CustomersRoutingModule() {
          return (
            /* binding */
            _CustomersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customers.component */
      4643);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _customers_component__WEBPACK_IMPORTED_MODULE_0__.CustomersComponent
      }];

      var _CustomersRoutingModule = function _CustomersRoutingModule() {
        _classCallCheck(this, _CustomersRoutingModule);
      };

      _CustomersRoutingModule.ɵfac = function CustomersRoutingModule_Factory(t) {
        return new (t || _CustomersRoutingModule)();
      };

      _CustomersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CustomersRoutingModule
      });
      _CustomersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CustomersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    4643:
    /*!**************************************************!*\
      !*** ./src/app/customers/customers.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomersComponent": function CustomersComponent() {
          return (
            /* binding */
            _CustomersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CustomersComponent = /*#__PURE__*/function () {
        function _CustomersComponent() {
          _classCallCheck(this, _CustomersComponent);
        }

        _createClass(_CustomersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CustomersComponent;
      }();

      _CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
        return new (t || _CustomersComponent)();
      };

      _CustomersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CustomersComponent,
        selectors: [["app-customers"]],
        decls: 2,
        vars: 0,
        template: function CustomersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " customers works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    7258:
    /*!***********************************************!*\
      !*** ./src/app/customers/customers.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomersModule": function CustomersModule() {
          return (
            /* binding */
            _CustomersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customers-routing.module */
      6719);
      /* harmony import */


      var _customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./customers.component */
      4643);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CustomersModule = function _CustomersModule() {
        _classCallCheck(this, _CustomersModule);
      };

      _CustomersModule.ɵfac = function CustomersModule_Factory(t) {
        return new (t || _CustomersModule)();
      };

      _CustomersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CustomersModule
      });
      _CustomersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CustomersModule, {
          declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_1__.CustomersComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_customers_customers_module_ts-es5.js.map