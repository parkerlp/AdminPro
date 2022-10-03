"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IncrementadorComponent = void 0;
var core_1 = require("@angular/core");
var IncrementadorComponent = /** @class */ (function () {
    function IncrementadorComponent() {
        this.progreso = 40;
        this.btnClass = 'btn-primary';
        this.valorSalida = new core_1.EventEmitter;
    }
    IncrementadorComponent.prototype.ngOnInit = function () {
        this.btnClass = "btn " + this.btnClass;
    };
    IncrementadorComponent.prototype.cambiarValor = function (valor) {
        if (this.progreso >= 100 && valor >= 0) {
            this.valorSalida.emit(100);
            this.progreso = 100;
            return;
        }
        if (this.progreso < 0 && valor < 0) {
            this.valorSalida.emit(0);
            this.progreso = 0;
            return;
        }
        this.progreso = this.progreso + valor;
        this.valorSalida.emit(this.progreso);
    };
    IncrementadorComponent.prototype.onChange = function (nuevoValor) {
        if (nuevoValor >= 100) {
            this.progreso = 100;
        }
        else if (nuevoValor <= 0) {
            this.progreso = 0;
        }
        else {
            this.progreso = nuevoValor;
        }
        this.valorSalida.emit(this.progreso);
    };
    __decorate([
        core_1.Input('valor')
    ], IncrementadorComponent.prototype, "progreso");
    __decorate([
        core_1.Input()
    ], IncrementadorComponent.prototype, "btnClass");
    __decorate([
        core_1.Output('valor')
    ], IncrementadorComponent.prototype, "valorSalida");
    IncrementadorComponent = __decorate([
        core_1.Component({
            selector: 'app-incrementador',
            templateUrl: './incrementador.component.html',
            styles: []
        })
    ], IncrementadorComponent);
    return IncrementadorComponent;
}());
exports.IncrementadorComponent = IncrementadorComponent;
