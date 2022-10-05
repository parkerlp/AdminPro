"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesRoutingModule = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var pages_component_1 = require("./pages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var progress_component_1 = require("./progress/progress.component");
var grafica1_component_1 = require("./grafica1/grafica1.component");
var account_settings_component_1 = require("./account-settings/account-settings.component");
var promesas_component_1 = require("./promesas/promesas.component");
var rxjs_component_1 = require("./rxjs/rxjs.component");
var routes = [
    {
        path: 'dashboard',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: progress_component_1.ProgressComponent, data: { titulo: 'Progress Bar' } },
            { path: 'grafica1', component: grafica1_component_1.Grafica1Component, data: { titulo: 'Gráfica Nro 1' } },
            { path: 'account-settings', component: account_settings_component_1.AccountSettingsComponent, data: { titulo: 'Ajustes de tema' } },
            { path: 'promesas', component: promesas_component_1.PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: rxjs_component_1.RxjsComponent, data: { titulo: 'RxJs' } },
        ]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
