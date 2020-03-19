(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/home/home-resolver.ts ***!
  \*********************************************/
/*! exports provided: HomeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolver", function() { return HomeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_home_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/home.state */ "./src/app/pages/home/state/home.state.ts");



let HomeResolver = /*@__PURE__*/ (() => {
    class HomeResolver {
        constructor(homeState) {
            this.homeState = homeState;
        }
        resolve() {
            return this.homeState.getContent();
        }
    }
    HomeResolver.ɵfac = function HomeResolver_Factory(t) { return new (t || HomeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_home_state__WEBPACK_IMPORTED_MODULE_1__["HomeState"])); };
    HomeResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeResolver, factory: HomeResolver.ɵfac });
    return HomeResolver;
})();



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _home_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-resolver */ "./src/app/pages/home/home-resolver.ts");






const routes = [
    {
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        path: '',
        resolve: {
            content: _home_resolver__WEBPACK_IMPORTED_MODULE_3__["HomeResolver"]
        }
    }
];
let HomeRoutingModule = /*@__PURE__*/ (() => {
    class HomeRoutingModule {
    }
    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, providers: [_home_resolver__WEBPACK_IMPORTED_MODULE_3__["HomeResolver"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return HomeRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/pages/home/home-service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/home/home-service.ts ***!
  \********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-lab/http/url */ "../../libs/http/url/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let HomeService = /*@__PURE__*/ (() => {
    class HomeService {
        constructor(urlService, httpService) {
            this.urlService = urlService;
            this.httpService = httpService;
        }
        fetchAll() {
            const urlHome = this.urlService.get('HOME.FETCH');
            const urlPackages = this.urlService.get('PACKAGES.FETCH');
            return this.httpService.get(urlHome).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(homeModel => this.httpService.get(urlPackages).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => (Object.assign({ packages: response.data }, homeModel))))));
        }
    }
    HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_lab_http_url__WEBPACK_IMPORTED_MODULE_2__["HttpUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
    return HomeService;
})();



/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _state_home_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/home.state */ "./src/app/pages/home/state/home.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a1) { return ["/packages", a1]; };
function HomeComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const package_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r3.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", package_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", package_r3.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r3.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, package_r3.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", package_r3.namespace)("src", package_r3.badge + "?color=green&style=flat", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
}
let HomeComponent = /*@__PURE__*/ (() => {
    class HomeComponent {
        constructor(homeState) {
            this.homeState = homeState;
            this.home$ = this.homeState.home$;
        }
        ngOnInit() {
            this.title$ = this.home$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('title'));
            this.description$ = this.home$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('description'));
            this.packages$ = this.home$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('packages'));
        }
    }
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_home_state__WEBPACK_IMPORTED_MODULE_2__["HomeState"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-lab-home"]], decls: 10, vars: 9, consts: [[1, "ui-hero"], [1, "ui-hero__title"], [1, "ui-hero__info"], [1, "ui-section"], ["class", "ui-card", 4, "ngFor", "ngForOf"], [1, "ui-card"], [1, "ui-card__header"], [1, "ui-card__media"], [3, "src", "alt"], [1, "ui-card__description"], [1, "ui-card__footer"], [1, "btn", "btn-sm", "btn-link", 2, "flex", "1", 3, "routerLink"], [3, "alt", "src"]], template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 11, 9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.title$));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.description$));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.packages$));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9taWd1ZWxyYW1vcy9uZy1sYWIvYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsImFwcHMvbmctbGFiLWRlbW8vc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvbmctbGFiLWRlbW8vc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59Il19 */"] });
    return HomeComponent;
})();



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-service */ "./src/app/pages/home/home-service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_home_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/home.state */ "./src/app/pages/home/state/home.state.ts");









let HomeModule = /*@__PURE__*/ (() => {
    class HomeModule {
    }
    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_state_home_state__WEBPACK_IMPORTED_MODULE_6__["HomeState"]])
            ]] });
    return HomeModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ɵbb"]] });
})();



/***/ }),

/***/ "./src/app/pages/home/state/home.state.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/state/home.state.ts ***!
  \************************************************/
/*! exports provided: HomeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeState", function() { return HomeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/data */ "../../node_modules/@ngxs-labs/data/__ivy_ngcc__/fesm2015/ngxs-labs-data.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-service */ "./src/app/pages/home/home-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");









let HomeState = /*@__PURE__*/ (() => {
    let HomeState = class HomeState extends _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["NgxsDataRepository"] {
        constructor(homeService) {
            super();
            this.homeService = homeService;
        }
        getContent() {
            return this.homeService.fetchAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(content => this.setState((state) => {
                return Object.assign(Object.assign({}, state), { title: content.title, description: content.description, packages: content.packages });
            })));
        }
    };
    HomeState.ɵfac = function HomeState_Factory(t) { return new (t || HomeState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
    HomeState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HomeState, factory: HomeState.ɵfac });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(state => state.home),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], HomeState.prototype, "home$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["action"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], HomeState.prototype, "getContent", null);
    HomeState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["StateRepository"])(),
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
            name: 'home',
            defaults: {
                title: null,
                description: null,
                packages: null
            }
        })
    ], HomeState);
    return HomeState;
})();




/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map