(self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["src_app_customers_customers_module_ts"],{

/***/ 6719:
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersRoutingModule": function() { return /* binding */ CustomersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.component */ 4643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _customers_component__WEBPACK_IMPORTED_MODULE_0__.CustomersComponent
    }
];
class CustomersRoutingModule {
}
CustomersRoutingModule.ɵfac = function CustomersRoutingModule_Factory(t) { return new (t || CustomersRoutingModule)(); };
CustomersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomersRoutingModule });
CustomersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4643:
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersComponent": function() { return /* binding */ CustomersComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CustomersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(); };
CustomersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 2, vars: 0, template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " customers works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7258:
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersModule": function() { return /* binding */ CustomersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-routing.module */ 6719);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.component */ 4643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class CustomersModule {
}
CustomersModule.ɵfac = function CustomersModule_Factory(t) { return new (t || CustomersModule)(); };
CustomersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_1__.CustomersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_customers_customers_module_ts-es2015.js.map