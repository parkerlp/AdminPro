"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DonaComponent = void 0;
var core_1 = require("@angular/core");
var DonaComponent = /** @class */ (function () {
    function DonaComponent() {
        this.title = '';
        this.doughnutChartLabels = ['Label1', 'Label2', 'Label3'];
        this.doughnutData = [350, 450, 100];
        this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets: [
                { data: this.doughnutData,
                    backgroundColor: ['#79aef4', '#9a88ef', '#89eca3'],
                    hoverBackgroundColor: ['#398bf7', '#745af2', '#45ec71'],
                    hoverBorderColor: ['#eee', '#eee', '#eee'] },
            ]
        };
        this.doughnutChartType = 'doughnut';
    }
    __decorate([
        core_1.Input('title')
    ], DonaComponent.prototype, "title");
    __decorate([
        core_1.Input('label')
    ], DonaComponent.prototype, "doughnutChartLabels");
    __decorate([
        core_1.Input('ddata')
    ], DonaComponent.prototype, "doughnutData");
    __decorate([
        core_1.ViewChild('doughnutChartLabels')
    ], DonaComponent.prototype, "doughnutChartData");
    DonaComponent = __decorate([
        core_1.Component({
            selector: 'app-dona',
            templateUrl: './dona.component.html',
            styles: []
        })
    ], DonaComponent);
    return DonaComponent;
}());
exports.DonaComponent = DonaComponent;
