(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var _c0 = ["*"];
var LayoutAreaComponent = /** @class */ /*@__PURE__*/ (function () {
    function LayoutAreaComponent(render, elRef, cdr) {
        this.render = render;
        this.elRef = elRef;
        this.cdr = cdr;
        this.display = 'flex';
        this.flexDirection = 'column';
        this.element = this.elRef.nativeElement;
    }
    LayoutAreaComponent.prototype.ngOnChanges = function (_changes) {
        this.cdr.markForCheck();
    };
    LayoutAreaComponent.prototype.ngAfterViewInit = function () {
        this.setupElementStyle();
        this.cdr.markForCheck();
    };
    LayoutAreaComponent.prototype.setupElementStyle = function () {
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
        if (this.flexGrow) {
            this.render.setStyle(this.element, 'flex-grow', this.flexGrow);
        }
        if (this.flexShrink) {
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
    };
    LayoutAreaComponent.ngFactoryDef = function LayoutAreaComponent_Factory(t) { return new (t || LayoutAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    LayoutAreaComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutAreaComponent, selectors: [["ui-layout-area"]], hostBindings: function LayoutAreaComponent_HostBindings(rf, ctx, elIndex) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](14);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.flexDirection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("justify-content", ctx.justifyContent);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-wrap", ctx.flexWrap);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-items", ctx.alignItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-content", ctx.alignContent);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.padding);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", ctx.margin);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-basis", ctx.flexBasis);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-grow", ctx.flexGrow);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-shrink", ctx.flexShrink);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("order", ctx.order);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-self", ctx.alignSelf);
            }
        }, inputs: { display: "display", flexDirection: "flexDirection", justifyContent: "justifyContent", flexWrap: "flexWrap", alignItems: "alignItems", alignContent: "alignContent", width: "width", height: "height", padding: "padding", margin: "margin", flexBasis: "flexBasis", flexGrow: "flexGrow", flexShrink: "flexShrink", order: "order", alignSelf: "alignSelf" }, exportAs: ["labLayoutArea"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, consts: 1, vars: 0, template: function LayoutAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    return LayoutAreaComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                exportAs: 'labLayoutArea',
                selector: 'ui-layout-area',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.flex-direction']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], justifyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.justify-content']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.flex-wrap']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.align-items']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.align-content']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], margin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.margin']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexBasis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.flex-basis']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.flex-grow']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexShrink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.flex-shrink']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignSelf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.align-self']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typings */ "../../libs/layout/src/lib/typings.ts");




var LayoutResizerDirective = /** @class */ /*@__PURE__*/ (function () {
    function LayoutResizerDirective(render, elRef, zone, doc) {
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
    LayoutResizerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.render.setStyle(this.element, 'position', 'relative');
        this.zone.runOutsideAngular(function () {
            _this.createEdges();
            var repaint = false;
            var mouseMoveEvent;
            var mouseDownEvent = null;
            var elementHeight;
            var elementWidth;
            var docMoveListener = _this.render.listen(_this.document, 'mousemove', function (ev) {
                _this.calculate(ev);
                repaint = true;
                mouseMoveEvent = ev;
            });
            var docUpListener = _this.render.listen(_this.document, 'mouseup', function (ev) {
                _this.calculate(ev);
                mouseDownEvent = null;
            });
            var elDownListener = _this.render.listen(_this.edgeElement, 'mousedown', function (ev) {
                _this.calculate(ev);
                mouseDownEvent = ev;
                elementHeight = _this.rectList ? _this.rectList.height : 0;
                elementWidth = _this.rectList ? _this.rectList.width : 0;
                ev.preventDefault();
            });
            _this.domListeners.push(docMoveListener, elDownListener, docUpListener);
            var framer = function () {
                requestAnimationFrame(framer);
                if (!repaint) {
                    return;
                }
                repaint = false;
                if (mouseDownEvent) {
                    if (_this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].RIGHT) {
                        _this.render.setStyle(_this.element, 'width', Math.max(_this.positionX, _this.resizeMinimalWidth) + "px");
                    }
                    if (_this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM) {
                        _this.render.setStyle(_this.element, 'height', Math.max(_this.positionY, _this.resizeMinimalHeight) + "px");
                    }
                    if (_this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].TOP && _this.rectList) {
                        var currentHeight = Math.max(mouseDownEvent.clientY - mouseMoveEvent.clientY + elementHeight, _this.resizeMinimalHeight);
                        if (currentHeight > _this.resizeMinimalHeight) {
                            _this.render.setStyle(_this.element, 'height', currentHeight + "px");
                            /*this.render.setStyle(
                              this.element,
                              'top',
                              `${mouseMoveEvent.clientY}px`
                            );*/
                        }
                    }
                    if (_this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].LEFT && _this.rectList) {
                        var currentWidth = Math.max(mouseDownEvent.clientX - mouseMoveEvent.clientX + elementWidth, _this.resizeMinimalWidth);
                        if (currentWidth > _this.resizeMinimalWidth) {
                            _this.render.setStyle(_this.element, 'width', currentWidth + "px");
                            /*this.render.setStyle(
                              this.element,
                              'left',
                              `${mouseMoveEvent.clientX}px`
                            );*/
                        }
                    }
                }
                _this.setCursorStyle();
            };
            framer();
        });
    };
    LayoutResizerDirective.prototype.ngAfterViewInit = function () {
        this.setAreasMeasures();
    };
    LayoutResizerDirective.prototype.ngOnDestroy = function () {
        this.domListeners.forEach(function (fn) { return fn(); });
    };
    LayoutResizerDirective.prototype.createEdges = function () {
        var el = this.document.createElement('div');
        el.style.position = 'absolute';
        el.style.background = this.uiLayoutResizer.color;
        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].BOTTOM) {
            el.style.left = '0';
            el.style.right = '0';
            el.style.bottom = '0';
            el.style.height = this.uiLayoutResizer.gutter + "px";
            el.style.width = '100%';
        }
        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].TOP) {
            el.style.left = '0';
            el.style.right = '0';
            el.style.top = '0';
            el.style.height = this.uiLayoutResizer.gutter + "px";
            el.style.width = '100%';
        }
        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].LEFT) {
            el.style.left = '0';
            el.style.bottom = '0';
            el.style.top = '0';
            el.style.width = this.uiLayoutResizer.gutter + "px";
            el.style.height = '100%';
        }
        if (this.uiLayoutResizer.edge === _typings__WEBPACK_IMPORTED_MODULE_2__["EDGES"].RIGHT) {
            el.style.right = '0';
            el.style.bottom = '0';
            el.style.top = '0';
            el.style.width = this.uiLayoutResizer.gutter + "px";
            el.style.height = '100%';
        }
        this.edgeElement = el;
        this.element.appendChild(el);
    };
    LayoutResizerDirective.prototype.setAreasMeasures = function () {
        this.rectList = this.element.getBoundingClientRect();
    };
    LayoutResizerDirective.prototype.calculate = function (ev) {
        this.setAreasMeasures();
        if (this.rectList) {
            this.positionX = ev.clientX - this.rectList.left;
            this.positionY = ev.clientY - this.rectList.top;
        }
    };
    LayoutResizerDirective.prototype.setCursorStyle = function () {
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
    };
    LayoutResizerDirective.ngFactoryDef = function LayoutResizerDirective_Factory(t) { return new (t || LayoutResizerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    LayoutResizerDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutResizerDirective, selectors: [["uiLayoutResizer"], ["", "uiLayoutResizer", ""]], inputs: { uiLayoutResizer: "uiLayoutResizer", resizeMinimalWidth: "resizeMinimalWidth", resizeMinimalHeight: "resizeMinimalHeight" } });
    return LayoutResizerDirective;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutResizerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'uiLayoutResizer, [uiLayoutResizer]'
            }]
    }], function () {
    return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                    args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
                }] }];
}, { uiLayoutResizer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], resizeMinimalWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], resizeMinimalHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] });



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _layout_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony import */ var _layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-resize.directive */ "../../libs/layout/src/lib/layout-resize.directive.ts");





var LayoutModule = /** @class */ /*@__PURE__*/ (function () {
    function LayoutModule() {
    }
    LayoutModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
    LayoutModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return LayoutModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"], _layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"], _layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"], _layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"]],
                exports: [_layout_resize_directive__WEBPACK_IMPORTED_MODULE_3__["LayoutResizerDirective"], _layout_area_component__WEBPACK_IMPORTED_MODULE_2__["LayoutAreaComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_lab_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-lab/layout */ "../../libs/layout/src/index.ts");
/* harmony import */ var _components_code_code_snipet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/code/code-snipet */ "./src/app/components/code/code-snipet.ts");
/* harmony import */ var _libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/layout/src/lib/layout-area.component */ "../../libs/layout/src/lib/layout-area.component.ts");
/* harmony import */ var _libs_layout_src_lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/layout/src/lib/layout-resize.directive */ "../../libs/layout/src/lib/layout-resize.directive.ts");
/* harmony import */ var _components_code_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/code/code.component */ "./src/app/components/code/code.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var _c0 = [1, "ui-sidebar", 3, "flexGrow", "width", "uiLayoutResizer"];
var _c1 = [1, "ui-sidebar__header"];
var _c2 = ["src", "./assets/lab-logo.svg", "alt", "@ng-lab", 1, "logo"];
var _c3 = [1, "ui-sidebar__nav"];
var _c4 = [1, "ui-sidebar__title"];
var _c5 = [3, "flexGrow"];
var _c6 = [1, "code-card"];
var _c7 = ["lang", "typescript", 3, "snippet"];
var AppComponent = /** @class */ /*@__PURE__*/ (function () {
    function AppComponent() {
        this.title = 'ng-lab-demo';
        this.edgeSettings = {
            gutter: 4,
            edge: _ng_lab_layout__WEBPACK_IMPORTED_MODULE_1__["EDGES"].RIGHT,
            color: '#ececec'
        };
        this.configExample = Object(_components_code_code_snipet__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
            lang: 'typescript',
            code: "\n    const configuratorService: ConfiguratorService = new ConfiguratorService();\n\n    const settings = {\n      one: 1,\n      setting: 2,\n      with: {\n        deep: {\n          notation: 3\n        }\n      }\n    };\n\n    configuratorService.setOption('settings', settings);\n    configuratorService.hasOption('settings.with.deep.notation');\n    "
        });
    }
    AppComponent.ngFactoryDef = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ng-lab-root"]], consts: 35, vars: 5, template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ui-layout-area", _c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", _c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", _c2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", _c3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", _c4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Packages");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Configurator");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Http Script");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Http Url");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hub");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "JWT");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Responsive");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Support");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ui-layout-area", _c5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", _c6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ng-lab-code", _c7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 0)("width", "300px")("uiLayoutResizer", ctx.edgeSettings);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("snippet", ctx.configExample);
            }
        }, directives: [_libs_layout_src_lib_layout_area_component__WEBPACK_IMPORTED_MODULE_3__["LayoutAreaComponent"], _libs_layout_src_lib_layout_resize_directive__WEBPACK_IMPORTED_MODULE_4__["LayoutResizerDirective"], _components_code_code_component__WEBPACK_IMPORTED_MODULE_5__["CodeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n[_nghost-%COMP%]   .ui-sidebar[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n}\n[_nghost-%COMP%]   .ui-sidebar__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #ececec;\n}\n[_nghost-%COMP%]   .ui-sidebar__header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 32px;\n  margin: 24px 12px;\n}\n[_nghost-%COMP%]   .ui-sidebar__title[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}\n[_nghost-%COMP%]   .code-card[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9taWd1ZWxyYW1vcy9uZy1sYWIvYXBwcy9uZy1sYWItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcHMvbmctbGFiLWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNDTjtBRENNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURHSTtFQUNFLGVBQUE7QUNETjtBREtFO0VBQ0UsWUFBQTtBQ0hKIiwiZmlsZSI6ImFwcHMvbmctbGFiLWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAudWktc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcblxuICAgICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIG1hcmdpbjogMjRweCAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICB9XG4gIH1cblxuICAuY29kZS1jYXJkIHtcbiAgICBtYXJnaW46IDI1cHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgLnVpLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuOmhvc3QgLnVpLXNpZGViYXJfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbn1cbjpob3N0IC51aS1zaWRlYmFyX19oZWFkZXIgLmxvZ28ge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjRweCAxMnB4O1xufVxuOmhvc3QgLnVpLXNpZGViYXJfX3RpdGxlIHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuOmhvc3QgLmNvZGUtY2FyZCB7XG4gIG1hcmdpbjogMjVweDtcbn0iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-lab-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _ng_lab_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-lab/layout */ "../../libs/layout/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_code_code_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/code/code.module */ "./src/app/components/code/code.module.ts");









var AppModule = /** @class */ /*@__PURE__*/ (function () {
    function AppModule() {
    }
    AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([], { initialNavigation: 'enabled' }),
                _ng_lab_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _components_code_code_module__WEBPACK_IMPORTED_MODULE_6__["CodeModule"]
            ]] });
    return AppModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_lab_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _components_code_code_module__WEBPACK_IMPORTED_MODULE_6__["CodeModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([], { initialNavigation: 'enabled' }),
                    _ng_lab_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _components_code_code_module__WEBPACK_IMPORTED_MODULE_6__["CodeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-bash */ "../../node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__);





// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
prismjs__WEBPACK_IMPORTED_MODULE_1__["hooks"].add('before-highlightall', function (env) {
    env['elements'] = [];
});
var CodeHighlightService = /** @class */ /*@__PURE__*/ (function () {
    function CodeHighlightService() {
    }
    CodeHighlightService.prototype.highlight = function (code, lang) {
        return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code.trim(), prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"][lang], lang);
    };
    CodeHighlightService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CodeHighlightService, factory: function CodeHighlightService_Factory(t) { return new (t || CodeHighlightService)(); }, providedIn: null });
    return CodeHighlightService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeHighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null);



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
    return Math.min.apply(Math, lines
        .map(function (line) {
        var result = /( *)[^ ]+/g.exec(line);
        return result == null ? null : result[1].length;
    })
        .filter(function (value) { return value != null; }));
}
function fixIndent(lines) {
    removeEmptyLineAtIndex(lines, 0);
    removeEmptyLineAtIndex(lines, lines.length - 1);
    var indentLevel = findIndentLevel(lines);
    return lines.map(function (line) { return line.substring(indentLevel); });
}
function Snippet(_a) {
    var lang = _a.lang, code = _a.code;
    return {
        lang: lang,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-highlight.service */ "./src/app/components/code/code-highlight.service.ts");



var _c0 = ["code"];
var _c1 = ["code", ""];
var CodeComponent = /** @class */ /*@__PURE__*/ (function () {
    function CodeComponent(_service) {
        this._service = _service;
    }
    CodeComponent.prototype.ngAfterViewInit = function () {
        this.codeEl.nativeElement.innerHTML = this._service.highlight(this.snippet.code, this.snippet.lang);
    };
    CodeComponent.ngFactoryDef = function CodeComponent_Factory(t) { return new (t || CodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"])); };
    CodeComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["ng-lab-code"]], viewQuery: function CodeComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())) && (ctx.codeEl = _t.first);
            }
        }, inputs: { snippet: "snippet" }, consts: 3, vars: 4, template: function CodeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", null, _c1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.snippet.lang, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.snippet.lang, "");
            }
        }, encapsulation: 2, changeDetection: 0 });
    return CodeComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-lab-code',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <pre\n      class=\"language-{{ snippet.lang }}\"\n    ><code #code class=\"language-{{ snippet.lang }}\"></code></pre>\n  "
            }]
    }], function () { return [{ type: _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"] }]; }, { codeEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['code', { static: true }]
        }], snippet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-highlight.service */ "./src/app/components/code/code-highlight.service.ts");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.component */ "./src/app/components/code/code.component.ts");




var CodeModule = /** @class */ /*@__PURE__*/ (function () {
    function CodeModule() {
    }
    CodeModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodeModule });
    CodeModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodeModule_Factory(t) { return new (t || CodeModule)(); }, providers: [_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"]] });
    return CodeModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeModule, { declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]], exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
                exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
                providers: [_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"]]
            }]
    }], null, null);



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });



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
//# sourceMappingURL=main-es5.js.map