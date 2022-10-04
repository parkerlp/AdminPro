"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountSettingsComponent = void 0;
var core_1 = require("@angular/core");
var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(settingsService) {
        this.settingsService = settingsService;
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        this.settingsService.checkCurrentTheme();
    };
    AccountSettingsComponent.prototype.changeTheme = function (theme) {
        this.settingsService.changeTheme(theme);
    };
    AccountSettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-account-settings',
            templateUrl: './account-settings.component.html',
            styles: []
        })
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());
exports.AccountSettingsComponent = AccountSettingsComponent;
