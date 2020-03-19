(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"],{

/***/ "./src/app/pages/packages/packages-resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/packages/packages-resolver.ts ***!
  \*****************************************************/
/*! exports provided: PackagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesResolver", function() { return PackagesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_packages_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/packages.state */ "./src/app/pages/packages/state/packages.state.ts");



let PackagesResolver = /*@__PURE__*/ (() => {
    class PackagesResolver {
        constructor(packageState) {
            this.packageState = packageState;
        }
        resolve(route) {
            const pkgId = Number(route.paramMap.get('id'));
            return this.packageState.getPackage(pkgId);
        }
    }
    PackagesResolver.ɵfac = function PackagesResolver_Factory(t) { return new (t || PackagesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_packages_state__WEBPACK_IMPORTED_MODULE_1__["PackageState"])); };
    PackagesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PackagesResolver, factory: PackagesResolver.ɵfac });
    return PackagesResolver;
})();



/***/ }),

/***/ "./src/app/pages/packages/packages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/packages/packages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PackagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function() { return PackagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packages.component */ "./src/app/pages/packages/packages.component.ts");
/* harmony import */ var _packages_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages-resolver */ "./src/app/pages/packages/packages-resolver.ts");






const routes = [
    {
        path: ':id',
        component: _packages_component__WEBPACK_IMPORTED_MODULE_2__["PackagesComponent"],
        resolve: {
            packages: _packages_resolver__WEBPACK_IMPORTED_MODULE_3__["PackagesResolver"]
        }
    }
];
let PackagesRoutingModule = /*@__PURE__*/ (() => {
    class PackagesRoutingModule {
    }
    PackagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PackagesRoutingModule });
    PackagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PackagesRoutingModule_Factory(t) { return new (t || PackagesRoutingModule)(); }, providers: [_packages_resolver__WEBPACK_IMPORTED_MODULE_3__["PackagesResolver"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PackagesRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PackagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/pages/packages/packages-service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/packages/packages-service.ts ***!
  \****************************************************/
/*! exports provided: PackagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesService", function() { return PackagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-lab/http/url */ "../../libs/http/url/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let PackagesService = /*@__PURE__*/ (() => {
    class PackagesService {
        constructor(urlService, httpService) {
            this.urlService = urlService;
            this.httpService = httpService;
        }
        fetchAll() {
            const urlPackages = this.urlService.get('PACKAGES.FETCH');
            return this.httpService.get(urlPackages).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response.data));
        }
    }
    PackagesService.ɵfac = function PackagesService_Factory(t) { return new (t || PackagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_lab_http_url__WEBPACK_IMPORTED_MODULE_2__["HttpUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    PackagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PackagesService, factory: PackagesService.ɵfac });
    return PackagesService;
})();



/***/ }),

/***/ "./src/app/pages/packages/packages.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/packages/packages.component.ts ***!
  \******************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_code_code_snipet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/code/code-snipet */ "./src/app/components/code/code-snipet.ts");
/* harmony import */ var _state_packages_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/packages.state */ "./src/app/pages/packages/state/packages.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/layout/src/lib/layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");







function PackagesComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ui-layout-area", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ui-layout-area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "markdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const pkg_r5 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 0)("flexShrink", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", pkg_r5.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pkg_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pkg_r5.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", pkg_r5.badge, "?style=flat", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("npm install ", pkg_r5.namespace, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pkg_r5.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pkg_r5.md);
    }
}
let PackagesComponent = /*@__PURE__*/ (() => {
    class PackagesComponent {
        constructor(pkgState) {
            this.pkgState = pkgState;
            this.configExample = Object(_components_code_code_snipet__WEBPACK_IMPORTED_MODULE_1__["Snippet"])({
                lang: 'typescript',
                code: `
    import { ConfiguratorModule } from '@ng-lab/configurator';

    const CONFIG = {
      ENV: environment,
      PRODUCTION: environment.production,
      DOMAINS_API: [
        { HOST: '', KEY: '@local' },
        { HOST: '', KEY: '@origin', ORIGIN: true },
        { HOST: environment.api, KEY: '@api' }
      ],
      ENDPOINTS: {}
    };

    @NgModule({
      imports: [
        ConfiguratorModule.forRoot(CONFIG),
      ],
      exports: [
        ConfiguratorModule
      ]
    })
    export class ApplicationProvisionModule {}

    const configuratorService: ConfiguratorService = new ConfiguratorService();

    const settings = {
      one: 1,
      setting: 2,
      with: {
        deep: {
          notation: 3
        }
      }
    };

    configuratorService.setOption('settings', settings);
    configuratorService.hasOption('settings.with.deep.notation');
    `
            });
        }
        ngOnInit() {
            this.package$ = this.pkgState.packages$;
        }
    }
    PackagesComponent.ɵfac = function PackagesComponent_Factory(t) { return new (t || PackagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_packages_state__WEBPACK_IMPORTED_MODULE_2__["PackageState"])); };
    PackagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackagesComponent, selectors: [["ng-lab-packages"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "ui-banner"], ["margin", "0 2% 0 0", 3, "flexGrow", "flexShrink"], [1, "ui-banner__logo", 3, "src", "alt"], [3, "flexGrow"], ["alt", "", 3, "src"], [2, "margin-bottom", "2px"], [2, "margin-top", "0"], [1, "md-card"], [3, "src"]], template: function PackagesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PackagesComponent_ng_container_0_Template, 14, 10, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.package$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_4__["LayoutAreaComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%]  {\n  background-color: #fff;\n}\n[_nghost-%COMP%]  .ui-banner {\n  display: flex;\n  align-items: center;\n  background-color: #45b04a;\n  color: white;\n  padding: 2%;\n}\n[_nghost-%COMP%]  .ui-banner__logo {\n  width: 100%;\n  max-width: 180px;\n  height: auto;\n}\n[_nghost-%COMP%]  .md-card {\n  padding: 2%;\n}\n[_nghost-%COMP%]  .md-card__table table {\n  width: 100%;\n}\n[_nghost-%COMP%]  .md-card__table table tr:nth-child(even) {\n  background: #ededed;\n}\n[_nghost-%COMP%]  .md-card__table table tr:nth-child(odd) {\n  background: #f8f6f7;\n}\n[_nghost-%COMP%]  .md-card__table table td, [_nghost-%COMP%]  .md-card__table table th {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9taWd1ZWxyYW1vcy9uZy1sYWIvYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ047QURHRTtFQUNFLFdBQUE7QUNESjtBRElNO0VBQ0UsV0FBQTtBQ0ZSO0FESVE7RUFDRSxtQkFBQTtBQ0ZWO0FES1E7RUFDRSxtQkFBQTtBQ0hWO0FETVE7RUFDRSxZQUFBO0FDSlYiLCJmaWxlIjoiYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIC51aS1iYW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViMDRhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyJTtcblxuICAgICZfX2xvZ28ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5tZC1jYXJkIHtcbiAgICBwYWRkaW5nOiAyJTtcblxuICAgICZfX3RhYmxlIHtcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY2Zjc7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Q6Om5nLWRlZXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuOmhvc3Q6Om5nLWRlZXAgLnVpLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWIwNGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG59XG46aG9zdDo6bmctZGVlcCAudWktYmFubmVyX19sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0OjpuZy1kZWVwIC5tZC1jYXJkIHtcbiAgcGFkZGluZzogMiU7XG59XG46aG9zdDo6bmctZGVlcCAubWQtY2FyZF9fdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIC5tZC1jYXJkX190YWJsZSB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuOmhvc3Q6Om5nLWRlZXAgLm1kLWNhcmRfX3RhYmxlIHRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjZmNztcbn1cbjpob3N0OjpuZy1kZWVwIC5tZC1jYXJkX190YWJsZSB0YWJsZSB0ZCwgOmhvc3Q6Om5nLWRlZXAgLm1kLWNhcmRfX3RhYmxlIHRhYmxlIHRoIHtcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */"] });
    return PackagesComponent;
})();



/***/ }),

/***/ "./src/app/pages/packages/packages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.module.ts ***!
  \***************************************************/
/*! exports provided: PackagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesModule", function() { return PackagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _packages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packages-routing.module */ "./src/app/pages/packages/packages-routing.module.ts");
/* harmony import */ var _packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages.component */ "./src/app/pages/packages/packages.component.ts");
/* harmony import */ var _state_packages_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/packages.state */ "./src/app/pages/packages/state/packages.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _packages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages-service */ "./src/app/pages/packages/packages-service.ts");
/* harmony import */ var _ng_lab_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-lab/layout */ "../../libs/layout/src/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");












let PackagesModule = /*@__PURE__*/ (() => {
    class PackagesModule {
    }
    PackagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PackagesModule });
    PackagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PackagesModule_Factory(t) { return new (t || PackagesModule)(); }, providers: [_packages_service__WEBPACK_IMPORTED_MODULE_6__["PackagesService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_lab_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _packages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PackagesRoutingModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_state_packages_state__WEBPACK_IMPORTED_MODULE_4__["PackageState"]]),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forChild()
            ]] });
    return PackagesModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PackagesModule, { declarations: [_packages_component__WEBPACK_IMPORTED_MODULE_3__["PackagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_lab_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _packages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PackagesRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ɵbb"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/packages/state/packages.state.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/packages/state/packages.state.ts ***!
  \********************************************************/
/*! exports provided: PackageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageState", function() { return PackageState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/data */ "../../node_modules/@ngxs-labs/data/__ivy_ngcc__/fesm2015/ngxs-labs-data.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _packages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../packages-service */ "./src/app/pages/packages/packages-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");









let PackageState = /*@__PURE__*/ (() => {
    let PackageState = class PackageState extends _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["NgxsDataRepository"] {
        constructor(packageService) {
            super();
            this.packageService = packageService;
        }
        getPackage(id) {
            return this.packageService.fetchAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(packages => packages.filter(pkg => pkg.id === id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(packages => {
                const [pkg] = packages;
                this.setState((state) => (Object.assign(Object.assign({}, state), pkg)));
            }));
        }
    };
    PackageState.ɵfac = function PackageState_Factory(t) { return new (t || PackageState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_packages_service__WEBPACK_IMPORTED_MODULE_4__["PackagesService"])); };
    PackageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PackageState, factory: PackageState.ɵfac });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(state => state.packages),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], PackageState.prototype, "packages$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["action"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], PackageState.prototype, "getPackage", null);
    PackageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["StateRepository"])(),
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
            name: 'packages',
            defaults: {
                id: null,
                title: null,
                slug: null,
                logo: null,
                description: null,
                namespace: null,
                badge: null,
                href: null,
                md: null
            }
        })
    ], PackageState);
    return PackageState;
})();




/***/ })

}]);
//# sourceMappingURL=pages-packages-packages-module-es2015.js.map