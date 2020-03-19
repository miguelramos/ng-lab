(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/configurator/src/index.ts":
/*!****************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/configurator/src/index.ts ***!
  \****************************************************************************/
/*! exports provided: ConfiguratorService, ConfiguratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_configurator_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configurator.module */ "../../libs/configurator/src/lib/configurator.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfiguratorModule", function() { return _lib_configurator_module__WEBPACK_IMPORTED_MODULE_0__["ConfiguratorModule"]; });

/* harmony import */ var _lib_configurator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configurator.service */ "../../libs/configurator/src/lib/configurator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfiguratorService", function() { return _lib_configurator_service__WEBPACK_IMPORTED_MODULE_1__["ConfiguratorService"]; });






/***/ }),

/***/ "../../libs/configurator/src/lib/configurator.module.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/configurator/src/lib/configurator.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConfiguratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguratorModule", function() { return ConfiguratorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configurator_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurator.token */ "../../libs/configurator/src/lib/configurator.token.ts");
/* harmony import */ var _configurator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurator.service */ "../../libs/configurator/src/lib/configurator.service.ts");





let ConfiguratorModule = /*@__PURE__*/ (() => {
    class ConfiguratorModule {
        static forRoot(config) {
            return {
                ngModule: ConfiguratorModule,
                providers: [
                    {
                        provide: _configurator_token__WEBPACK_IMPORTED_MODULE_2__["OPTIONS_TOKEN"],
                        useValue: config
                    },
                    {
                        provide: _configurator_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorService"],
                        useClass: _configurator_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorService"],
                        deps: [_configurator_token__WEBPACK_IMPORTED_MODULE_2__["OPTIONS_TOKEN"]]
                    }
                ]
            };
        }
    }
    ConfiguratorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfiguratorModule });
    ConfiguratorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ConfiguratorModule_Factory(t) { return new (t || ConfiguratorModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
    return ConfiguratorModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfiguratorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();



/***/ }),

/***/ "../../libs/configurator/src/lib/configurator.service.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/configurator/src/lib/configurator.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfiguratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguratorService", function() { return ConfiguratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configurator_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurator.token */ "../../libs/configurator/src/lib/configurator.token.ts");
/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */





/**
 * @description
 * Service to manage options/configs for services and apps.
 *
 * @ngModule ConfiguratorModule
 * @publicApi
 */
let ConfiguratorService = /*@__PURE__*/ (() => {
    class ConfiguratorService {
        constructor(options) {
            /**
             * @description
             * Property for listen subject dispatches
             *
             * @memberof ConfiguratorService
             */
            this.listener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            /**
             * @description
             * Property to register options as a collection
             *
             * @memberof ConfiguratorService
             */
            this.repository = {};
            this.options = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])(_configurator_token__WEBPACK_IMPORTED_MODULE_3__["CONFIG_DEFAULT_OPTIONS"], options);
        }
        /**
         * @description
         * Sets a new option/value in collection
         *
         * @param name Option key
         * @param value Option value
         * @memberof ConfiguratorService
         */
        setOption(name, value) {
            this.repository[name] = value;
            this.listener.next({ options: this.repository });
        }
        /**
         * @description
         * Get a configuration value from the collection.
         *
         * @param name Option key
         * @param defaults Default value if missing
         */
        getOption(name, defaults = null) {
            return this.hasOption(name) ? this.repository[name] : defaults;
        }
        /**
         * @description
         * Gets a tree object of options
         *
         * @param rootKey Includ root key
         * @param fromRoot From top object
         * @memberof ConfiguratorService
         */
        getOptionTree(rootKey, fromRoot = true) {
            const tree = {};
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapKeys"])(this.options, (value, key) => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"])(key, rootKey)) {
                    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(tree, key, value);
                }
                return key;
            });
            return fromRoot ? tree : Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(tree, rootKey);
        }
        /**
         * @description
         * Getter Options collection
         *
         * @memberof ConfiguratorService
         */
        get options() {
            return this.repository;
        }
        /**
         * @description
         * Setter Options collection
         *
         * @memberof ConfiguratorService
         */
        set options(opt) {
            this.flat(opt);
        }
        /**
         * @description
         * Resets options
         */
        reset() {
            this.options = {};
            this.repository = {};
        }
        /**
         * @description
         * Verify if option name exists on the collection.
         *
         * @param name Option key
         */
        hasOption(name) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["has"])(this.repository, name);
        }
        /**
         * @description
         * Converts a tree object keys in flat
         * key string in one level.
         *
         * @usageNotes
         * ```javascript
         * {
         *  name: '',
         *  profile: {
         *    email: ''
         *  }
         * }
         * ```
         * to:
         * ```javascript
         * {'name': '', 'profile.email': ''}
         * ```
         * @param config
         * @param key Key to append
         */
        flat(config, key = '') {
            const path = +(key === '') ? key : key + '.';
            Object.keys(config).forEach((keyId) => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isObject"])(config[keyId])) {
                    this.flat(config[keyId], path + keyId);
                }
                else {
                    this.setOption(`${path + keyId}`, config[keyId]);
                }
            });
        }
    }
    ConfiguratorService.ɵfac = function ConfiguratorService_Factory(t) { return new (t || ConfiguratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configurator_token__WEBPACK_IMPORTED_MODULE_3__["OPTIONS_TOKEN"], 12)); };
    ConfiguratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfiguratorService, factory: ConfiguratorService.ɵfac, providedIn: 'root' });
    return ConfiguratorService;
})();



/***/ }),

/***/ "../../libs/configurator/src/lib/configurator.token.ts":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/configurator/src/lib/configurator.token.ts ***!
  \*********************************************************************************************/
/*! exports provided: OPTIONS_TOKEN, CONFIG_DEFAULT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_TOKEN", function() { return OPTIONS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_DEFAULT_OPTIONS", function() { return CONFIG_DEFAULT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const OPTIONS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[CONFIG] Json config');
const CONFIG_DEFAULT_OPTIONS = {
    DEFAULT_LANG: 'pt',
    ENDPOINTS: {
        LOCAL: ''
    }
};



/***/ }),

/***/ "../../libs/http/url/src/index.ts":
/*!************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/http/url/src/index.ts ***!
  \************************************************************************/
/*! exports provided: HttpUrlService, HttpUrlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_http_url_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/http-url.module */ "../../libs/http/url/src/lib/http-url.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpUrlModule", function() { return _lib_http_url_module__WEBPACK_IMPORTED_MODULE_0__["HttpUrlModule"]; });

/* harmony import */ var _lib_http_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/http-url.service */ "../../libs/http/url/src/lib/http-url.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpUrlService", function() { return _lib_http_url_service__WEBPACK_IMPORTED_MODULE_1__["HttpUrlService"]; });






/***/ }),

/***/ "../../libs/http/url/src/lib/http-url.errors.ts":
/*!**************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/http/url/src/lib/http-url.errors.ts ***!
  \**************************************************************************************/
/*! exports provided: HttpUrlResolverValidationError, HttpUrlResolverTestError, HttpUrlEmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlResolverValidationError", function() { return HttpUrlResolverValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlResolverTestError", function() { return HttpUrlResolverTestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEmptyError", function() { return HttpUrlEmptyError; });
class HttpUrlResolverValidationError extends Error {
    /**
     * @description
     * Construct a property validation error.
     *
     * @param type The validation error type.
     * @param message The error message.
     */
    constructor(type, message, details) {
        super(message);
        this.name = 'HttpUrlResolverValidationError';
        this.stack = new Error().stack;
        this.type = type;
        this.details = details;
        // Required in order for error instances to be able to use instanceof.
        // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
        this.__proto__ = HttpUrlResolverValidationError.prototype;
    }
}
class HttpUrlResolverTestError extends Error {
    /**
     * @description
     * Construct a property validation error.
     *
     * @param type The validation error type.
     * @param message The error message.
     */
    constructor(type, message, details) {
        super(message);
        this.name = 'HttpUrlResolverTestError';
        this.stack = new Error().stack;
        this.type = type;
        this.details = details;
        // Required in order for error instances to be able to use instanceof.
        // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
        this.__proto__ = HttpUrlResolverTestError.prototype;
    }
}
class HttpUrlEmptyError extends Error {
    /**
     * @description
     * Construct a property validation error.
     *
     * @param type The validation error type.
     * @param message The error message.
     */
    constructor(type, message, details) {
        super(message);
        this.name = 'HttpUrlEmptyError';
        this.stack = new Error().stack;
        this.type = type;
        this.details = details;
        // Required in order for error instances to be able to use instanceof.
        // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
        this.__proto__ = HttpUrlEmptyError.prototype;
    }
}



/***/ }),

/***/ "../../libs/http/url/src/lib/http-url.module.ts":
/*!**************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/http/url/src/lib/http-url.module.ts ***!
  \**************************************************************************************/
/*! exports provided: HttpUrlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlModule", function() { return HttpUrlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _http_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-url.service */ "../../libs/http/url/src/lib/http-url.service.ts");
/* harmony import */ var _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-lab/configurator */ "../../libs/configurator/src/index.ts");





let HttpUrlModule = /*@__PURE__*/ (() => {
    class HttpUrlModule {
    }
    HttpUrlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpUrlModule });
    HttpUrlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpUrlModule_Factory(t) { return new (t || HttpUrlModule)(); }, providers: [
            {
                provide: _http_url_service__WEBPACK_IMPORTED_MODULE_2__["HttpUrlService"],
                useClass: _http_url_service__WEBPACK_IMPORTED_MODULE_2__["HttpUrlService"],
                deps: [_ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorService"]]
            }
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorModule"]]] });
    return HttpUrlModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpUrlModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorModule"]] }); })();



/***/ }),

/***/ "../../libs/http/url/src/lib/http-url.service.ts":
/*!***************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/http/url/src/lib/http-url.service.ts ***!
  \***************************************************************************************/
/*! exports provided: HttpUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlService", function() { return HttpUrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_lab_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-lab/support */ "../../libs/support/src/index.ts");
/* harmony import */ var _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-lab/configurator */ "../../libs/configurator/src/index.ts");
/* harmony import */ var _http_url_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-url.errors */ "../../libs/http/url/src/lib/http-url.errors.ts");
/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */







/**
 * @description
 * Service to register urls simple and with parameters
 *
 * @ngModule HttpUrlModule
 * @publicApi
 */
let HttpUrlService = /*@__PURE__*/ (() => {
    class HttpUrlService {
        /**
         * @description
         * Creates an instance of HttpUrlService.
         *
         * @param configurator ConfiguratorService instance
         * @memberof HttpUrlService
         */
        constructor(configurator) {
            this.configurator = configurator;
            /**
             * @description
             * Collection of domains to prefix urls
             *
             * @memberof HttpUrlService
             */
            this.prefixes = [];
            /**
             * @description
             * Collection of routes registered
             *
             * @memberof HttpUrlService
             */
            this.routes = new Map();
            this.init();
        }
        /**
         * @description
         * Init setup for resolving routes collection.
         */
        init() {
            const { keys } = Object;
            const endpoints = this.configurator.getOptionTree(HttpUrlService.OPTION_ENDPOINT_NAME, false);
            this.prefixes = this.configurator.getOptionTree(HttpUrlService.OPTIONS_DOMAIN_NAME, false);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(endpoints)) {
                throw new _http_url_errors__WEBPACK_IMPORTED_MODULE_4__["HttpUrlEmptyError"]('Empty Config', 'ConfiguratorService has no ENDPOINTS and DOMAINS_API entries');
            }
            const flatEndpoints = Object(_ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["flatten"])(endpoints);
            keys(flatEndpoints).forEach(key => this.setupRoute(key, flatEndpoints[key]));
        }
        /**
         * @description
         * Setup regex routing and add it to Map.
         *
         * @param name Route name
         * @para uri Url path
         */
        setupRoute(name, uri) {
            const verbal = new RegExp(/^@\w+\:/);
            const search = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["head"])(verbal.exec(uri)) || '';
            const urlDescriptor = {
                name: name,
                prefix: search,
                uri: uri,
                endpoint: uri.replace(search, '')
            };
            this.addRoute(name, urlDescriptor);
        }
        /**
         * @description
         * Add route to Map.
         *
         * @param name Route name/key
         * @param descriptor Route object properties
         */
        addRoute(name, descriptor) {
            this.routes.set(name, descriptor);
        }
        /**
         * @description
         * Get the route from Map and resolve domain host. Pass parameters
         * to complete dynamic arguments on route, even overriding domain host is possible.
         *
         * @param name Route name/key
         * @param params Route parameters
         * @param domain Route mai domain
         */
        get(name, params = null, domain = null) {
            /*if (name.includes('.')) {
              name = name.substr(name.indexOf('.') + 1);
            }*/
            const routeDescriptor = this.routes.get(name);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(routeDescriptor)) {
                throw new _http_url_errors__WEBPACK_IMPORTED_MODULE_4__["HttpUrlResolverValidationError"](name, 'Uri is not setup on mappings.');
            }
            else {
                const resolved = this.resolve(routeDescriptor, params, domain);
                return resolved.url;
            }
        }
        /**
         * @description
         * Check if route exist in the collection
         *
         * @param name Route name/key
         * @memberof HttpUrlService
         */
        hasRoute(name) {
            return this.routes.has(name);
        }
        /**
         * @description
         * Resolve host domain and route.
         *
         * @param descriptor Route object properties
         * @param args Route arguments
         * @param host Route host domain
         */
        resolve(descriptor, args, host = '') {
            const regex = this.expression(descriptor.endpoint);
            const test = regex.test(descriptor.endpoint);
            const prefix = descriptor.prefix.substring(0, descriptor.prefix.length - 1);
            if (test) {
                let url = null;
                const parameters = [];
                regex
                    .exec(descriptor.endpoint)
                    .slice(1)
                    .forEach(arg => {
                    if (arg) {
                        parameters.push(decodeURIComponent(arg));
                    }
                    if (args && arg) {
                        url = url
                            ? url.replace(arg, args[arg.substring(1, arg.length)])
                            : descriptor.endpoint.replace(arg, args[arg.substring(1, arg.length)]);
                    }
                });
                const domain = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.prefixes, ['KEY', prefix]);
                const domainHost = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(host) ? domain.HOST || '' : host;
                const domainOrigin = domain.ORIGIN ? window.location.origin : '';
                return {
                    name: descriptor.name,
                    host: domainHost,
                    url: url
                        ? `${domainOrigin}${domainHost}${url}`
                        : `${domainOrigin}${domainHost}${descriptor.endpoint}`,
                    params: args,
                    regex: regex.source
                };
            }
            else {
                throw new _http_url_errors__WEBPACK_IMPORTED_MODULE_4__["HttpUrlResolverTestError"](descriptor.name, 'UrlResolver test didn\'t match any url.');
            }
        }
        /**
         * @description
         * Macth route arguments.
         *
         * @param route Route path
         */
        expression(route) {
            const splatParam = /\*\w+/g;
            const namedParam = /(\(\?)?:\w+/g;
            const optionalParam = /\((.*?)\)/g;
            const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            route = route
                .replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, (match, optional) => {
                return optional ? match : '([^/?]+)';
            })
                .replace(splatParam, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
        }
    }
    /**
     * @description
     * Property key to find routes in `ConfiguratorService`
     *
     * @memberof HttpUrlService
     */
    HttpUrlService.OPTION_ENDPOINT_NAME = 'ENDPOINTS';
    /**
     * @description
     * Property key to find domains in `ConfiguratorService`
     *
     * @memberof HttpUrlService
     */
    HttpUrlService.OPTIONS_DOMAIN_NAME = 'DOMAINS_API';
    HttpUrlService.ɵfac = function HttpUrlService_Factory(t) { return new (t || HttpUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_lab_configurator__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorService"])); };
    HttpUrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpUrlService, factory: HttpUrlService.ɵfac });
    return HttpUrlService;
})();



/***/ }),

/***/ "../../libs/layout/src/index.ts":
/*!**********************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/layout/src/index.ts ***!
  \**********************************************************************/
/*! exports provided: LayoutAreaComponent, LayoutResizerDirective, EDGES, LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/layout.module */ "../../libs/layout/src/lib/layout.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return _lib_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"]; });

/* harmony import */ var _lib_layout_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAreaComponent", function() { return _lib_layout_area_component__WEBPACK_IMPORTED_MODULE_1__["LayoutAreaComponent"]; });

/* harmony import */ var _lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/layout-resize.directive */ "../../libs/layout/src/lib/layout-resize.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutResizerDirective", function() { return _lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_2__["LayoutResizerDirective"]; });

/* harmony import */ var _lib_typings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/typings */ "../../libs/layout/src/lib/typings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDGES", function() { return _lib_typings__WEBPACK_IMPORTED_MODULE_3__["EDGES"]; });








/***/ }),

/***/ "../../libs/layout/src/lib/layout-area.component.ts":
/*!******************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/layout/src/lib/layout-area.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LayoutAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAreaComponent", function() { return LayoutAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
let LayoutAreaComponent = /*@__PURE__*/ (() => {
    class LayoutAreaComponent {
        constructor(render, elRef, cdr) {
            this.render = render;
            this.elRef = elRef;
            this.cdr = cdr;
            this.display = 'flex';
            this.flexDirection = 'column';
            this.element = this.elRef.nativeElement;
        }
        ngOnChanges(_changes) {
            this.cdr.markForCheck();
        }
        ngAfterViewInit() {
            this.setupElementStyle();
            this.cdr.markForCheck();
        }
        setupElementStyle() {
            if (this.display) {
                this.render.setStyle(this.element, 'display', this.display);
            }
            if (this.alignContent) {
                this.render.setStyle(this.element, 'align-content', this.alignContent);
            }
            if (this.alignItems) {
                this.render.setStyle(this.element, 'align-items', this.alignItems);
            }
            if (this.alignSelf) {
                this.render.setStyle(this.element, 'align-self', this.alignSelf);
            }
            if (this.flexBasis) {
                this.render.setStyle(this.element, 'flex-basis', this.flexBasis);
            }
            if (this.flexDirection) {
                this.render.setStyle(this.element, 'flex-direction', this.flexDirection);
            }
            if (this.flexGrow || this.flexGrow === 0) {
                this.render.setStyle(this.element, 'flex-grow', this.flexGrow);
            }
            if (this.flexShrink || this.flexShrink === 0) {
                this.render.setStyle(this.element, 'flex-shrink', this.flexShrink);
            }
            if (this.flexWrap) {
                this.render.setStyle(this.element, 'flex-wrap', this.flexWrap);
            }
            if (this.height) {
                this.render.setStyle(this.element, 'height', this.height);
            }
            if (this.justifyContent) {
                this.render.setStyle(this.element, 'justify-content', this.justifyContent);
            }
            if (this.margin) {
                this.render.setStyle(this.element, 'margin', this.margin);
            }
            if (this.order) {
                this.render.setStyle(this.element, 'order', this.order);
            }
            if (this.padding) {
                this.render.setStyle(this.element, 'padding', this.padding);
            }
            if (this.width) {
                this.render.setStyle(this.element, 'width', this.width);
            }
        }
    }
    LayoutAreaComponent.ɵfac = function LayoutAreaComponent_Factory(t) { return new (t || LayoutAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    LayoutAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutAreaComponent, selectors: [["ui-layout-area"]], hostVars: 28, hostBindings: function LayoutAreaComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.flexDirection)("justify-content", ctx.justifyContent)("flex-wrap", ctx.flexWrap)("align-items", ctx.alignItems)("align-content", ctx.alignContent)("width", ctx.width)("height", ctx.height)("padding", ctx.padding)("margin", ctx.margin)("flex-basis", ctx.flexBasis)("flex-grow", ctx.flexGrow)("flex-shrink", ctx.flexShrink)("order", ctx.order)("align-self", ctx.alignSelf);
            }
        }, inputs: { display: "display", flexDirection: "flexDirection", justifyContent: "justifyContent", flexWrap: "flexWrap", alignItems: "alignItems", alignContent: "alignContent", width: "width", height: "height", padding: "padding", margin: "margin", flexBasis: "flexBasis", flexGrow: "flexGrow", flexShrink: "flexShrink", order: "order", alignSelf: "alignSelf" }, exportAs: ["labLayoutArea"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayoutAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return LayoutAreaComponent;
})();



/***/ }),

/***/ "../../libs/layout/src/lib/layout-resize.directive.ts":
/*!********************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/layout/src/lib/layout-resize.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: LayoutResizerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutResizerDirective", function() { return LayoutResizerDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typings */ "../../libs/layout/src/lib/typings.ts");




let LayoutResizerDirective = /*@__PURE__*/ (() => {
    class LayoutResizerDirective {
        constructor(render, elRef, zone, doc) {
            this.render = render;
            this.elRef = elRef;
            this.zone = zone;
            this.uiLayoutResizer = {
                gutter: 4,
                edge: _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM,
                color: '#ccc'
            };
            this.resizeMinimalWidth = 0;
            this.resizeMinimalHeight = 0;
            this.domListeners = [];
            this.element = this.elRef.nativeElement;
            this.document = doc;
        }
        ngOnInit() {
            this.render.setStyle(this.element, 'position', 'relative');
            this.zone.runOutsideAngular(() => {
                this.createEdges();
                let repaint = false;
                let mouseMoveEvent;
                let mouseDownEvent = null;
                let elementHeight;
                let elementWidth;
                const docMoveListener = this.render.listen(this.document, 'mousemove', (ev) => {
                    this.calculate(ev);
                    repaint = true;
                    mouseMoveEvent = ev;
                });
                const docUpListener = this.render.listen(this.document, 'mouseup', (ev) => {
                    this.calculate(ev);
                    mouseDownEvent = null;
                });
                const elDownListener = this.render.listen(this.edgeElement, 'mousedown', (ev) => {
                    this.calculate(ev);
                    mouseDownEvent = ev;
                    elementHeight = this.rectList ? this.rectList.height : 0;
                    elementWidth = this.rectList ? this.rectList.width : 0;
                    ev.preventDefault();
                });
                this.domListeners.push(docMoveListener, elDownListener, docUpListener);
                const framer = () => {
                    requestAnimationFrame(framer);
                    if (!repaint) {
                        return;
                    }
                    repaint = false;
                    if (mouseDownEvent) {
                        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].RIGHT) {
                            this.render.setStyle(this.element, 'width', `${Math.max(this.positionX, this.resizeMinimalWidth)}px`);
                        }
                        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM) {
                            this.render.setStyle(this.element, 'height', `${Math.max(this.positionY, this.resizeMinimalHeight)}px`);
                        }
                        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].TOP && this.rectList) {
                            const currentHeight = Math.max(mouseDownEvent.clientY - mouseMoveEvent.clientY + elementHeight, this.resizeMinimalHeight);
                            if (currentHeight > this.resizeMinimalHeight) {
                                this.render.setStyle(this.element, 'height', `${currentHeight}px`);
                                /*this.render.setStyle(
                                  this.element,
                                  'top',
                                  `${mouseMoveEvent.clientY}px`
                                );*/
                            }
                        }
                        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].LEFT && this.rectList) {
                            const currentWidth = Math.max(mouseDownEvent.clientX - mouseMoveEvent.clientX + elementWidth, this.resizeMinimalWidth);
                            if (currentWidth > this.resizeMinimalWidth) {
                                this.render.setStyle(this.element, 'width', `${currentWidth}px`);
                                /*this.render.setStyle(
                                  this.element,
                                  'left',
                                  `${mouseMoveEvent.clientX}px`
                                );*/
                            }
                        }
                    }
                    this.setCursorStyle();
                };
                framer();
            });
        }
        ngAfterViewInit() {
            this.setAreasMeasures();
        }
        ngOnDestroy() {
            this.domListeners.forEach(fn => fn());
        }
        createEdges() {
            const el = this.document.createElement('div');
            el.style.position = 'absolute';
            el.style.background = this.uiLayoutResizer.color;
            if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM) {
                el.style.left = '0';
                el.style.right = '0';
                el.style.bottom = '0';
                el.style.height = `${this.uiLayoutResizer.gutter}px`;
                el.style.width = '100%';
            }
            if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].TOP) {
                el.style.left = '0';
                el.style.right = '0';
                el.style.top = '0';
                el.style.height = `${this.uiLayoutResizer.gutter}px`;
                el.style.width = '100%';
            }
            if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].LEFT) {
                el.style.left = '0';
                el.style.bottom = '0';
                el.style.top = '0';
                el.style.width = `${this.uiLayoutResizer.gutter}px`;
                el.style.height = '100%';
            }
            if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].RIGHT) {
                el.style.right = '0';
                el.style.bottom = '0';
                el.style.top = '0';
                el.style.width = `${this.uiLayoutResizer.gutter}px`;
                el.style.height = '100%';
            }
            this.edgeElement = el;
            this.element.appendChild(el);
        }
        setAreasMeasures() {
            this.rectList = this.element.getBoundingClientRect();
        }
        calculate(ev) {
            this.setAreasMeasures();
            if (this.rectList) {
                this.positionX = ev.clientX - this.rectList.left;
                this.positionY = ev.clientY - this.rectList.top;
            }
        }
        setCursorStyle() {
            if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].LEFT ||
                this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].RIGHT) {
                this.render.setStyle(this.edgeElement, 'cursor', 'ew-resize');
            }
            else if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM ||
                this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].TOP) {
                this.render.setStyle(this.edgeElement, 'cursor', 'ns-resize');
            }
            else {
                this.render.setStyle(this.edgeElement, 'cursor', 'default');
            }
        }
    }
    LayoutResizerDirective.ɵfac = function LayoutResizerDirective_Factory(t) { return new (t || LayoutResizerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    LayoutResizerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutResizerDirective, selectors: [["uiLayoutResizer"], ["", "uiLayoutResizer", ""]], inputs: { uiLayoutResizer: "uiLayoutResizer", resizeMinimalWidth: "resizeMinimalWidth", resizeMinimalHeight: "resizeMinimalHeight" } });
    return LayoutResizerDirective;
})();



/***/ }),

/***/ "../../libs/layout/src/lib/layout.module.ts":
/*!**********************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/layout/src/lib/layout.module.ts ***!
  \**********************************************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony import */ var _layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-resize.directive */ "../../libs/layout/src/lib/layout-resize.directive.ts");





let LayoutModule = /*@__PURE__*/ (() => {
    class LayoutModule {
    }
    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return LayoutModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"], _layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"], _layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"]] }); })();



/***/ }),

/***/ "../../libs/layout/src/lib/typings.ts":
/*!****************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/layout/src/lib/typings.ts ***!
  \****************************************************************************/
/*! exports provided: EDGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDGES", function() { return EDGES; });
var EDGES = /*@__PURE__*/ (function (EDGES) {
    EDGES["TOP"] = "TOP";
    EDGES["BOTTOM"] = "BOTTOM";
    EDGES["LEFT"] = "LEFT";
    EDGES["RIGHT"] = "RIGHT";
    EDGES["ALL"] = "ALL";
    return EDGES;
})({});



/***/ }),

/***/ "../../libs/responsive/src/index.ts":
/*!**************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/responsive/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: RESPONSIVE_BREAKPOINTS_TOKEN, ResponsiveBreakpointDirective, ResponsiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_responsive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/responsive.module */ "../../libs/responsive/src/lib/responsive.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveModule", function() { return _lib_responsive_module__WEBPACK_IMPORTED_MODULE_0__["ResponsiveModule"]; });

/* harmony import */ var _lib_responsive_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/responsive.token */ "../../libs/responsive/src/lib/responsive.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_BREAKPOINTS_TOKEN", function() { return _lib_responsive_token__WEBPACK_IMPORTED_MODULE_1__["RESPONSIVE_BREAKPOINTS_TOKEN"]; });

/* harmony import */ var _lib_responsive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/responsive.directive */ "../../libs/responsive/src/lib/responsive.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveBreakpointDirective", function() { return _lib_responsive_directive__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBreakpointDirective"]; });







/***/ }),

/***/ "../../libs/responsive/src/lib/responsive.directive.ts":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/responsive/src/lib/responsive.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResponsiveBreakpointDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveBreakpointDirective", function() { return ResponsiveBreakpointDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_lab_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-lab/support */ "../../libs/support/src/index.ts");
/* harmony import */ var _responsive_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsive.token */ "../../libs/responsive/src/lib/responsive.token.ts");
/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */





/**
 * @description
 * Directive to declare once on top root to listen for changes on window resize.
 *
 * @usageNotes
 *
 * To use just declare the directive on html tag.
 *
 * ```html
 * <p ngResponsive>A responsive directive</p>
 * ```
 *
 * @ngModule ResponsiveModule
 * @publicApi
 */
let ResponsiveBreakpointDirective = /*@__PURE__*/ (() => {
    class ResponsiveBreakpointDirective {
        /**
         * @description
         * Creates an instance of ResponsiveBreakpointDirective.
         *
         * @memberof ResponsiveBreakpointDirective
         */
        constructor(breakpoints, cd) {
            this.breakpoints = breakpoints;
            this.cd = cd;
            /**
             * Property to subscribe for changes. It triggers
             * every time browser window is resized.
             *
             * @memberof ResponsiveBreakpointDirective
             */
            this.responsiveChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        /**
         * @description
         * Property that listen window resize event.
         *
         * @param width Width window size
         * @memberof ResponsiveBreakpointDirective
         */
        onResize(width) {
            this.gridReference(width);
            this.responsiveChange.next({ width: width, key: this.breakpoint });
            this.cd.detectChanges();
        }
        /**
         * @description
         * Register the resize event listener.
         *
         * @memberof ResponsiveBreakpointDirective
         */
        ngOnInit() {
            this.onResize(window.innerWidth);
        }
        /**
         * @description
         * Check window breakpoint measures and define
         * breakpoint property reference.
         *
         * @memberof ResponsiveBreakpointDirective
         */
        gridReference(width) {
            if (Object(_ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["between"])(width, 0, this.breakpoints.XS)) {
                this.breakpoint = 'XS';
            }
            if (Object(_ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["between"])(width, this.breakpoints.XS + 1, this.breakpoints.SM)) {
                this.breakpoint = 'SM';
            }
            if (Object(_ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["between"])(width, this.breakpoints.SM + 1, this.breakpoints.MD)) {
                this.breakpoint = 'MD';
            }
            if (Object(_ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["between"])(width, this.breakpoints.MD + 1, this.breakpoints.LG)) {
                this.breakpoint = 'LG';
            }
            if (width >= this.breakpoints.XL) {
                this.breakpoint = 'XL';
            }
        }
    }
    ResponsiveBreakpointDirective.ɵfac = function ResponsiveBreakpointDirective_Factory(t) { return new (t || ResponsiveBreakpointDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_responsive_token__WEBPACK_IMPORTED_MODULE_3__["RESPONSIVE_BREAKPOINTS_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    ResponsiveBreakpointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResponsiveBreakpointDirective, selectors: [["ngResponsive"], ["", "ngResponsive", ""]], hostBindings: function ResponsiveBreakpointDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ResponsiveBreakpointDirective_resize_HostBindingHandler($event) { return ctx.onResize($event.target.innerWidth); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            }
        }, outputs: { responsiveChange: "responsiveChange" }, exportAs: ["ngResponsive"] });
    return ResponsiveBreakpointDirective;
})();



/***/ }),

/***/ "../../libs/responsive/src/lib/responsive.module.ts":
/*!******************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/responsive/src/lib/responsive.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ResponsiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveModule", function() { return ResponsiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_lab_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-lab/support */ "../../libs/support/src/index.ts");
/* harmony import */ var _responsive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsive.directive */ "../../libs/responsive/src/lib/responsive.directive.ts");
/* harmony import */ var _responsive_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive.token */ "../../libs/responsive/src/lib/responsive.token.ts");






let ResponsiveModule = /*@__PURE__*/ (() => {
    class ResponsiveModule {
    }
    ResponsiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResponsiveModule });
    ResponsiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResponsiveModule_Factory(t) { return new (t || ResponsiveModule)(); }, providers: [
            {
                provide: _responsive_token__WEBPACK_IMPORTED_MODULE_4__["RESPONSIVE_BREAKPOINTS_TOKEN"],
                useValue: _responsive_token__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN"]
            }
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["SupportModule"]]] });
    return ResponsiveModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResponsiveModule, { declarations: [_responsive_directive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveBreakpointDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_lab_support__WEBPACK_IMPORTED_MODULE_2__["SupportModule"]], exports: [_responsive_directive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveBreakpointDirective"]] }); })();



/***/ }),

/***/ "../../libs/responsive/src/lib/responsive.token.ts":
/*!*****************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/responsive/src/lib/responsive.token.ts ***!
  \*****************************************************************************************/
/*! exports provided: DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN, RESPONSIVE_BREAKPOINTS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN", function() { return DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_BREAKPOINTS_TOKEN", function() { return RESPONSIVE_BREAKPOINTS_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN = {
    XS: 575,
    SM: 767,
    MD: 991,
    LG: 1199,
    XL: 1200
};
const RESPONSIVE_BREAKPOINTS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[RESPONSIVE] Breakpoints definitions.');



/***/ }),

/***/ "../../libs/support/src/index.ts":
/*!***********************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/support/src/index.ts ***!
  \***********************************************************************/
/*! exports provided: uniqueID, between, getUrlHostname, isValidNumber, flatten, chunk, SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/support */ "../../libs/support/src/lib/support.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["uniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlHostname", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["getUrlHostname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["isValidNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _lib_support__WEBPACK_IMPORTED_MODULE_0__["chunk"]; });

/* harmony import */ var _lib_support_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/support.module */ "../../libs/support/src/lib/support.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return _lib_support_module__WEBPACK_IMPORTED_MODULE_1__["SupportModule"]; });






/***/ }),

/***/ "../../libs/support/src/lib/support.module.ts":
/*!************************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/support/src/lib/support.module.ts ***!
  \************************************************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let SupportModule = /*@__PURE__*/ (() => {
    class SupportModule {
    }
    SupportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupportModule });
    SupportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupportModule_Factory(t) { return new (t || SupportModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return SupportModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupportModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();



/***/ }),

/***/ "../../libs/support/src/lib/support.ts":
/*!*****************************************************************************!*\
  !*** /home/travis/build/miguelramos/ng-lab/libs/support/src/lib/support.ts ***!
  \*****************************************************************************/
/*! exports provided: uniqueID, between, getUrlHostname, isValidNumber, flatten, chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return uniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlHostname", function() { return getUrlHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return isValidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
/**
 * Create unique UUID
 */
function uniqueID() {
    const chars = '0123456789abcdef'.split('');
    const uuid = [], rnd = Math.random;
    let r = null;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4'; // version 4
    for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
            r = 0 | (rnd() * 16);
            uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r & 0xf];
        }
    }
    return uuid.join('');
}
/**
 * Function to check if a number is between interval
 */
function between(num, min, max, inclusive = true) {
    const minValue = Math.min.apply(Math, [min, max]);
    const maxValue = Math.max.apply(Math, [min, max]);
    return inclusive
        ? num >= minValue && num <= maxValue
        : num > minValue && num < maxValue;
}
/**
 * Get the hostname/domain from a url.
 */
function getUrlHostname(url) {
    let hostname = '';
    if (url.indexOf('://') > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    return hostname;
}
/**
 * Function to check if parameter is a valid number
 */
function isValidNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
}
/**
 * Flatten a deep object into a one level object with it’s path as key
 */
function flatten(object, prefix = '', separator = '.') {
    return Object.keys(object).reduce((prev, element) => {
        return object[element] &&
            typeof object[element] === 'object' &&
            !Array.isArray(element)
            ? Object.assign(Object.assign({}, prev), flatten(object[element], `${prefix}${element}${separator}`)) : Object.assign(Object.assign({}, prev), { [`${prefix}${element}`]: object[element] });
    }, {});
}
/**
 * Split an array in x size chunks.
 */
function chunk(collection, size) {
    if (!collection.length) {
        return [];
    }
    const head = collection.slice(0, size);
    const tail = collection.slice(size);
    return [head, ...chunk(tail, size)];
}
;



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_lab_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-lab/layout */ "../../libs/layout/src/index.ts");
/* harmony import */ var _components_code_code_snipet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/code/code-snipet */ "./src/app/components/code/code-snipet.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/layout/src/lib/layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony import */ var _libs_layout_src_lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../libs/layout/src/lib/layout-resize.directive */ "../../libs/layout/src/lib/layout-resize.directive.ts");
/* harmony import */ var _libs_responsive_src_lib_responsive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/responsive/src/lib/responsive.directive */ "../../libs/responsive/src/lib/responsive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AppComponent_span_37_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const responsive_r1 = ctx.ngIf;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Responsive Breakpoint: ", responsive_r1 == null ? null : responsive_r1.key, " with size - ", responsive_r1 == null ? null : responsive_r1.width, " ");
    }
}
let AppComponent = /*@__PURE__*/ (() => {
    class AppComponent {
        constructor() {
            this.title = 'ng-lab-demo';
            this.edgeSettings = {
                gutter: 4,
                edge: _ng_lab_layout__WEBPACK_IMPORTED_MODULE_1__["EDGES"].RIGHT,
                color: 'transparent'
            };
            this.configExample = Object(_components_code_code_snipet__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
                lang: 'typescript',
                code: `
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
        handlerResponsiveChange(change) {
            this.responsive$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(change);
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ng-lab-root"]], decls: 42, vars: 10, consts: [[1, "ui-bar", 3, "flexGrow", "width"], ["width", "356", "height", "94", "viewBox", "0 0 356 94", "xmlns", "http://www.w3.org/2000/svg", 1, "logo"], ["d", "M77.9844 46.875C77.6406 54.875 75.6562 61.2344 72.0312 65.9531C68.4375 70.6406 63.5938 72.9844 57.5 72.9844C54.8125 72.9844 52.4844 72.4062 50.5156 71.25C48.5781 70.0938 47.1094 68.4375 46.1094 66.2812C42.9844 70.6562 38.9062 72.8438 33.875 72.8438C29.3125 72.8438 25.7812 70.9219 23.2812 67.0781C20.7812 63.2344 19.8438 58.1562 20.4688 51.8438C21.0312 46.6875 22.3281 42.1094 24.3594 38.1094C26.4219 34.0781 29.0156 30.9844 32.1406 28.8281C35.2656 26.6719 38.6406 25.5938 42.2656 25.5938C46.7344 25.5938 50.5469 26.625 53.7031 28.6875L56.6562 30.7031L54.2656 57.7969C53.9531 60.2656 54.2188 62.1562 55.0625 63.4688C55.9375 64.7812 57.3125 65.4375 59.1875 65.4375C62.0625 65.4375 64.4688 63.7656 66.4062 60.4219C68.3438 57.0469 69.4062 52.6406 69.5938 47.2031C70.125 36.2969 67.9219 27.9219 62.9844 22.0781C58.0781 16.2031 50.7969 13.2656 41.1406 13.2656C35.1094 13.2656 29.7344 14.7969 25.0156 17.8594C20.2969 20.9219 16.5781 25.2812 13.8594 30.9375C11.1406 36.5625 9.60938 43.0156 9.26562 50.2969C8.76562 61.3594 10.9844 69.9062 15.9219 75.9375C20.8594 82 28.25 85.0312 38.0938 85.0312C40.6875 85.0312 43.4062 84.7344 46.25 84.1406C49.0938 83.5781 51.5469 82.8125 53.6094 81.8438L55.3906 89.0625C53.4844 90.3125 50.9062 91.3125 47.6562 92.0625C44.4375 92.8438 41.1875 93.2344 37.9062 93.2344C29.6562 93.2344 22.625 91.5625 16.8125 88.2188C11 84.9062 6.65625 80 3.78125 73.5C0.9375 67.0312 -0.296875 59.2969 0.078125 50.2969C0.453125 41.6719 2.42188 33.9375 5.98438 27.0938C9.54688 20.25 14.3906 14.9687 20.5156 11.25C26.6719 7.5 33.6094 5.625 41.3281 5.625C49.1719 5.625 55.9219 7.3125 61.5781 10.6875C67.2344 14.0312 71.4688 18.8281 74.2812 25.0781C77.0938 31.3281 78.3281 38.5938 77.9844 46.875ZM30.875 51.8438C30.5312 55.9688 30.8906 59.1094 31.9531 61.2656C33.0156 63.3906 34.7344 64.4531 37.1094 64.4531C38.6406 64.4531 40.0938 63.7812 41.4688 62.4375C42.8438 61.0938 43.9844 59.1562 44.8906 56.625L46.8594 34.4531C45.6406 34.0469 44.3906 33.8438 43.1094 33.8438C39.5156 33.8438 36.7188 35.375 34.7188 38.4375C32.75 41.5 31.4688 45.9688 30.875 51.8438ZM99.6406 21.2812L100.062 27.1406C103.688 22.6094 108.547 20.3438 114.641 20.3438C120.016 20.3438 124.016 21.9219 126.641 25.0781C129.266 28.2344 130.609 32.9531 130.672 39.2344V72H117.125V39.5625C117.125 36.6875 116.5 34.6094 115.25 33.3281C114 32.0156 111.922 31.3594 109.016 31.3594C105.203 31.3594 102.344 32.9844 100.438 36.2344V72H86.8906V21.2812H99.6406ZM139.016 46.2656C139.016 38.4844 140.859 32.2188 144.547 27.4688C148.266 22.7188 153.266 20.3438 159.547 20.3438C165.109 20.3438 169.438 22.25 172.531 26.0625L173.094 21.2812H185.375V70.3125C185.375 74.75 184.359 78.6094 182.328 81.8906C180.328 85.1719 177.5 87.6719 173.844 89.3906C170.188 91.1094 165.906 91.9688 161 91.9688C157.281 91.9688 153.656 91.2188 150.125 89.7188C146.594 88.25 143.922 86.3438 142.109 84L148.109 75.75C151.484 79.5312 155.578 81.4219 160.391 81.4219C163.984 81.4219 166.781 80.4531 168.781 78.5156C170.781 76.6094 171.781 73.8906 171.781 70.3594V67.6406C168.656 71.1719 164.547 72.9375 159.453 72.9375C153.359 72.9375 148.422 70.5625 144.641 65.8125C140.891 61.0312 139.016 54.7031 139.016 46.8281V46.2656ZM152.562 47.25C152.562 51.8438 153.484 55.4531 155.328 58.0781C157.172 60.6719 159.703 61.9688 162.922 61.9688C167.047 61.9688 170 60.4219 171.781 57.3281V36C169.969 32.9062 167.047 31.3594 163.016 31.3594C159.766 31.3594 157.203 32.6875 155.328 35.3438C153.484 38 152.562 41.9688 152.562 47.25ZM222.172 48.2344H195.781V37.3125H222.172V48.2344ZM247.344 72H233.75V0H247.344V72ZM287.938 72C287.312 70.7812 286.859 69.2656 286.578 67.4531C283.297 71.1094 279.031 72.9375 273.781 72.9375C268.812 72.9375 264.688 71.5 261.406 68.625C258.156 65.75 256.531 62.125 256.531 57.75C256.531 52.375 258.516 48.25 262.484 45.375C266.484 42.5 272.25 41.0469 279.781 41.0156H286.016V38.1094C286.016 35.7656 285.406 33.8906 284.188 32.4844C283 31.0781 281.109 30.375 278.516 30.375C276.234 30.375 274.438 30.9219 273.125 32.0156C271.844 33.1094 271.203 34.6094 271.203 36.5156H257.656C257.656 33.5781 258.562 30.8594 260.375 28.3594C262.188 25.8594 264.75 23.9062 268.062 22.5C271.375 21.0625 275.094 20.3438 279.219 20.3438C285.469 20.3438 290.422 21.9219 294.078 25.0781C297.766 28.2031 299.609 32.6094 299.609 38.2969V60.2812C299.641 65.0938 300.312 68.7344 301.625 71.2031V72H287.938ZM276.734 62.5781C278.734 62.5781 280.578 62.1406 282.266 61.2656C283.953 60.3594 285.203 59.1562 286.016 57.6562V48.9375H280.953C274.172 48.9375 270.562 51.2812 270.125 55.9688L270.078 56.7656C270.078 58.4531 270.672 59.8438 271.859 60.9375C273.047 62.0312 274.672 62.5781 276.734 62.5781ZM355.719 47.1094C355.719 55.2344 353.984 61.5781 350.516 66.1406C347.047 70.6719 342.203 72.9375 335.984 72.9375C330.484 72.9375 326.094 70.8281 322.812 66.6094L322.203 72H310.016V0H323.562V25.8281C326.688 22.1719 330.797 20.3438 335.891 20.3438C342.078 20.3438 346.922 22.625 350.422 27.1875C353.953 31.7188 355.719 38.1094 355.719 46.3594V47.1094ZM342.172 46.125C342.172 41 341.359 37.2656 339.734 34.9219C338.109 32.5469 335.688 31.3594 332.469 31.3594C328.156 31.3594 325.188 33.125 323.562 36.6562V56.6719C325.219 60.2344 328.219 62.0156 332.562 62.0156C336.938 62.0156 339.812 59.8594 341.188 55.5469C341.844 53.4844 342.172 50.3438 342.172 46.125Z", "fill", "white"], [1, "ui-sidebar", 3, "flexGrow", "flexShrink", "width", "uiLayoutResizer"], [1, "ui-sidebar__header"], [1, "ui-sidebar__title"], [1, "ui-sidebar__nav"], ["ngResponsive", "", 1, "ui-content", 3, "flexGrow", "responsiveChange"], [1, "ui-card", "ui-alert"], [1, "ui-card__description"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ui-layout-area", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ui-layout-area", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Packages");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Configurator");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Http Script");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Http Url");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Hub");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JWT");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Responsive");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Support");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ui-layout-area", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("responsiveChange", function AppComponent_Template_ui_layout_area_responsiveChange_33_listener($event) { return ctx.handlerResponsiveChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_span_37_Template, 2, 2, "span", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Resize your window to see breakpoints");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 0)("width", "40px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 0)("flexShrink", 0)("width", "300px")("uiLayoutResizer", ctx.edgeSettings);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 8, ctx.responsive$));
            }
        }, directives: [_libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_4__["LayoutAreaComponent"], _libs_layout_src_lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutResizerDirective"], _libs_responsive_src_lib_responsive_directive__WEBPACK_IMPORTED_MODULE_6__["ResponsiveBreakpointDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n[_nghost-%COMP%]   .ui-sidebar[_ngcontent-%COMP%] {\n  background: #fefefe;\n  color: #90969f;\n  box-shadow: inset -10px 0 10px -5px #eff1ef;\n}\n[_nghost-%COMP%]   .ui-sidebar__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .ui-sidebar__title[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  color: #7b818a;\n}\n[_nghost-%COMP%]   .code-card[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n[_nghost-%COMP%]   .ui-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  min-height: 100%;\n}\n[_nghost-%COMP%]   .ui-bar[_ngcontent-%COMP%] {\n  background-color: #46b04a;\n}\n[_nghost-%COMP%]   .ui-bar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  transform: rotateZ(90deg) translate(35px, 39px);\n  z-index: 1;\n  width: 116px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9taWd1ZWxyYW1vcy9uZy1sYWIvYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcHMvbmctbGFiLWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQU47QURJRTtFQUNFLFlBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNRTtFQUNFLHlCQUFBO0FDSko7QURNSTtFQUNFLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNKTiIsImZpbGUiOiJhcHBzL25nLWxhYi1kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLnVpLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XG4gICAgY29sb3I6ICM5MDk2OWY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggMCAxMHB4IC01cHggI2VmZjFlZjtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgY29sb3I6ICM3YjgxOGE7XG4gICAgfVxuICB9XG5cbiAgLmNvZGUtY2FyZCB7XG4gICAgbWFyZ2luOiAyNXB4O1xuICB9XG5cbiAgLnVpLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC51aS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmIwNGE7XG5cbiAgICAubG9nbyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZSgzNXB4LCAzOXB4KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMTE2cHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbjpob3N0IC51aS1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgY29sb3I6ICM5MDk2OWY7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IDAgMTBweCAtNXB4ICNlZmYxZWY7XG59XG46aG9zdCAudWktc2lkZWJhcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAudWktc2lkZWJhcl9fdGl0bGUge1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGNvbG9yOiAjN2I4MThhO1xufVxuOmhvc3QgLmNvZGUtY2FyZCB7XG4gIG1hcmdpbjogMjVweDtcbn1cbjpob3N0IC51aS1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAudWktYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2YjA0YTtcbn1cbjpob3N0IC51aS1iYXIgLmxvZ28ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZSgzNXB4LCAzOXB4KTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDExNnB4O1xufSJdfQ== */"] });
    return AppComponent;
})();



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

const CONFIG = {
    ENV: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"],
    PRODUCTION: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production,
    DOMAINS_API: [
        { HOST: '', KEY: '@local' },
        { HOST: '', KEY: '@origin', ORIGIN: true },
        { HOST: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api, KEY: '@api' }
    ],
    ENDPOINTS: {
        LOGOS: {
            CONFIGURATOR: '@local:/assets/configurator-logo.svg',
            SUPPORT: '@local:/assets/support-logo.svg',
            JWT: '@local:/assets/jwt-logo.svg',
            RESPONSIVE: '@local:/assets/responsive-logo.svg',
            HUB: '@local:/assets/hub-logo.svg',
            HS: '@local:/assets/hs-logo.svg',
            HU: '@local:/assets/hu-logo.svg'
        },
        POSTS: {
            LIST: '@api:/posts',
            SINGLE: '@api:/posts/:id'
        },
        HOME: {
            FETCH: '@local:/assets/data/home.json'
        },
        PACKAGES: {
            FETCH: '@local:/assets/data/packages.json'
        }
    }
};



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs-labs/data */ "../../node_modules/@ngxs-labs/data/__ivy_ngcc__/fesm2015/ngxs-labs-data.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "../../node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_provision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.provision */ "./src/app/app.provision.ts");
/* harmony import */ var _ng_lab_app_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-lab/app/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-lab/configurator */ "../../libs/configurator/src/index.ts");















let AppModule = /*@__PURE__*/ (() => {
    class AppModule {
        constructor(appRef, config) {
            this.appRef = appRef;
            this.config = config;
            if (config.getOption('PRODUCTION') === false) {
                console.group('APPLICATION REFERENCE');
                console.dir(appRef);
                console.groupEnd();
                console.group('APPLICATION CONFIG');
                console.dir(config);
                console.groupEnd();
            }
        }
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_lab_configurator__WEBPACK_IMPORTED_MODULE_10__["ConfiguratorService"])); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["ApplicationRoutingModule"],
                _app_provision__WEBPACK_IMPORTED_MODULE_8__["ApplicationProvisionModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([], { developmentMode: !_ng_lab_app_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_5__["NgxsDataPluginModule"].forRoot(),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot({
                    disabled: _ng_lab_app_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
                })
            ],
            _app_provision__WEBPACK_IMPORTED_MODULE_8__["ApplicationProvisionModule"]] });
    return AppModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["ApplicationRoutingModule"],
            _app_provision__WEBPACK_IMPORTED_MODULE_8__["ApplicationProvisionModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵj"], _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_5__["NgxsDataPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"]], exports: [_app_provision__WEBPACK_IMPORTED_MODULE_8__["ApplicationProvisionModule"]] });
})();



/***/ }),

/***/ "./src/app/app.provision.ts":
/*!**********************************!*\
  !*** ./src/app/app.provision.ts ***!
  \**********************************/
/*! exports provided: ApplicationProvisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationProvisionModule", function() { return ApplicationProvisionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-lab/http/url */ "../../libs/http/url/src/index.ts");
/* harmony import */ var _ng_lab_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-lab/responsive */ "../../libs/responsive/src/index.ts");
/* harmony import */ var _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-lab/configurator */ "../../libs/configurator/src/index.ts");
/* harmony import */ var _ng_lab_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-lab/layout */ "../../libs/layout/src/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _components_code_code_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/code/code.module */ "./src/app/components/code/code.module.ts");
/* harmony import */ var _libs_configurator_src_lib_configurator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/configurator/src/lib/configurator.module */ "../../libs/configurator/src/lib/configurator.module.ts");













let ApplicationProvisionModule = /*@__PURE__*/ (() => {
    class ApplicationProvisionModule {
    }
    ApplicationProvisionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApplicationProvisionModule });
    ApplicationProvisionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApplicationProvisionModule_Factory(t) { return new (t || ApplicationProvisionModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_5__["ConfiguratorModule"].forRoot(_app_config__WEBPACK_IMPORTED_MODULE_8__["CONFIG"]),
                _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_3__["HttpUrlModule"],
                _ng_lab_responsive__WEBPACK_IMPORTED_MODULE_4__["ResponsiveModule"],
                _components_code_code_module__WEBPACK_IMPORTED_MODULE_9__["CodeModule"],
                _ng_lab_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] })
            ],
            _ng_lab_configurator__WEBPACK_IMPORTED_MODULE_5__["ConfiguratorModule"],
            _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_3__["HttpUrlModule"],
            _ng_lab_responsive__WEBPACK_IMPORTED_MODULE_4__["ResponsiveModule"],
            _components_code_code_module__WEBPACK_IMPORTED_MODULE_9__["CodeModule"],
            _ng_lab_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]] });
    return ApplicationProvisionModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApplicationProvisionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _libs_configurator_src_lib_configurator_module__WEBPACK_IMPORTED_MODULE_10__["ConfiguratorModule"], _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_3__["HttpUrlModule"],
            _ng_lab_responsive__WEBPACK_IMPORTED_MODULE_4__["ResponsiveModule"],
            _components_code_code_module__WEBPACK_IMPORTED_MODULE_9__["CodeModule"],
            _ng_lab_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"]], exports: [_ng_lab_configurator__WEBPACK_IMPORTED_MODULE_5__["ConfiguratorModule"],
            _ng_lab_http_url__WEBPACK_IMPORTED_MODULE_3__["HttpUrlModule"],
            _ng_lab_responsive__WEBPACK_IMPORTED_MODULE_4__["ResponsiveModule"],
            _components_code_code_module__WEBPACK_IMPORTED_MODULE_9__["CodeModule"],
            _ng_lab_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]] });
})();



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRoutingModule", function() { return ApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule)
            },
            {
                path: 'packages',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-packages-packages-module */ "pages-packages-packages-module").then(__webpack_require__.bind(null, /*! ./pages/packages/packages.module */ "./src/app/pages/packages/packages.module.ts")).then(m => m.PackagesModule)
            }
        ]
    }
];
let ApplicationRoutingModule = /*@__PURE__*/ (() => {
    class ApplicationRoutingModule {
    }
    ApplicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApplicationRoutingModule });
    ApplicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApplicationRoutingModule_Factory(t) { return new (t || ApplicationRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES, {
                    enableTracing: false,
                    initialNavigation: 'enabled',
                    useHash: false
                })
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ApplicationRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApplicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/components/code/code-highlight.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/code/code-highlight.service.ts ***!
  \***********************************************************/
/*! exports provided: CodeHighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlightService", function() { return CodeHighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-bash */ "../../node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__);





// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
prismjs__WEBPACK_IMPORTED_MODULE_1__["hooks"].add('before-highlightall', env => {
    env['elements'] = [];
});
let CodeHighlightService = /*@__PURE__*/ (() => {
    class CodeHighlightService {
        highlight(code, lang) {
            return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code.trim(), prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"][lang], lang);
        }
    }
    CodeHighlightService.ɵfac = function CodeHighlightService_Factory(t) { return new (t || CodeHighlightService)(); };
    CodeHighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CodeHighlightService, factory: CodeHighlightService.ɵfac });
    return CodeHighlightService;
})();



/***/ }),

/***/ "./src/app/components/code/code-snipet.ts":
/*!************************************************!*\
  !*** ./src/app/components/code/code-snipet.ts ***!
  \************************************************/
/*! exports provided: Snippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snippet", function() { return Snippet; });
function removeEmptyLineAtIndex(lines, index) {
    if (lines[index].trim().length === 0) {
        lines.splice(index, 1);
    }
}
function findIndentLevel(lines) {
    return Math.min(...lines
        .map(line => {
        const result = /( *)[^ ]+/g.exec(line);
        return result == null ? null : result[1].length;
    })
        .filter(value => value != null));
}
function fixIndent(lines) {
    removeEmptyLineAtIndex(lines, 0);
    removeEmptyLineAtIndex(lines, lines.length - 1);
    const indentLevel = findIndentLevel(lines);
    return lines.map(line => line.substring(indentLevel));
}
function Snippet({ lang, code }) {
    return {
        lang,
        code: fixIndent(code.split(/(?:\r\n)|\n|\r/gi)).join('\n')
    };
}



/***/ }),

/***/ "./src/app/components/code/code.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/code/code.component.ts ***!
  \***************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-highlight.service */ "./src/app/components/code/code-highlight.service.ts");



const _c0 = ["code"];
let CodeComponent = /*@__PURE__*/ (() => {
    class CodeComponent {
        constructor(_service) {
            this._service = _service;
        }
        ngAfterViewInit() {
            this.codeEl.nativeElement.innerHTML = this._service.highlight(this.snippet.code, this.snippet.lang);
        }
    }
    CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"])); };
    CodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["ng-lab-code"]], viewQuery: function CodeComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeEl = _t.first);
            }
        }, inputs: { snippet: "snippet" }, decls: 3, vars: 6, consts: [["code", ""]], template: function CodeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", null, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.snippet.lang, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.snippet.lang, "");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return CodeComponent;
})();



/***/ }),

/***/ "./src/app/components/code/code.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/code/code.module.ts ***!
  \************************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-highlight.service */ "./src/app/components/code/code-highlight.service.ts");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.component */ "./src/app/components/code/code.component.ts");




let CodeModule = /*@__PURE__*/ (() => {
    class CodeModule {
    }
    CodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodeModule });
    CodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodeModule_Factory(t) { return new (t || CodeModule)(); }, providers: [_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"]] });
    return CodeModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeModule, { declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]], exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]] }); })();



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'https://jsonplaceholder.typicode.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/miguelramos/ng-lab/apps/ng-lab-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map