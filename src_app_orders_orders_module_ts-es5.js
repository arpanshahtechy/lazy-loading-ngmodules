(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["src_app_orders_orders_module_ts"], {
    /***/
    5674:
    /*!*************************************************!*\
      !*** ./src/app/orders/orders-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersRoutingModule": function OrdersRoutingModule() {
          return (
            /* binding */
            _OrdersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orders.component */
      8686);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent
      }];

      var _OrdersRoutingModule = function _OrdersRoutingModule() {
        _classCallCheck(this, _OrdersRoutingModule);
      };

      _OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) {
        return new (t || _OrdersRoutingModule)();
      };

      _OrdersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OrdersRoutingModule
      });
      _OrdersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OrdersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8686:
    /*!********************************************!*\
      !*** ./src/app/orders/orders.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersComponent": function OrdersComponent() {
          return (
            /* binding */
            _OrdersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _OrdersComponent = /*#__PURE__*/function () {
        function _OrdersComponent() {
          _classCallCheck(this, _OrdersComponent);
        }

        _createClass(_OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _OrdersComponent;
      }();

      _OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
        return new (t || _OrdersComponent)();
      };

      _OrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _OrdersComponent,
        selectors: [["app-orders"]],
        decls: 2,
        vars: 0,
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " orders works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    4819:
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersModule": function OrdersModule() {
          return (
            /* binding */
            _OrdersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orders-routing.module */
      5674);
      /* harmony import */


      var _orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./orders.component */
      8686);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _OrdersModule = function _OrdersModule() {
        _classCallCheck(this, _OrdersModule);
      };

      _OrdersModule.ɵfac = function OrdersModule_Factory(t) {
        return new (t || _OrdersModule)();
      };

      _OrdersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _OrdersModule
      });
      _OrdersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_OrdersModule, {
          declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_1__.OrdersComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_orders_orders_module_ts-es5.js.map