"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BreadcrumbsComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router) {
        var _this = this;
        this.router = router;
        this.titulo = '';
        this.tituloSubs$ = this.getPageRuta().subscribe(function (_a) {
            var titulo = _a.titulo;
            _this.titulo = titulo;
            document.title = "AdminTest - $( titulo )";
        });
    }
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.tituloSubs$.unsubscribe();
    };
    BreadcrumbsComponent.prototype.getPageRuta = function () {
        return this.router.events.pipe(rxjs_1.filter(function (event) { return event instanceof router_1.ActivationEnd; }), rxjs_1.filter(function (event) { return event.snapshot.firstChild === null; }), rxjs_1.map(function (event) { return event.snapshot.data; }));
    };
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styles: []
        })
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
