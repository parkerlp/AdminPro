"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromesasComponent = void 0;
var core_1 = require("@angular/core");
var PromesasComponent = /** @class */ (function () {
    function PromesasComponent() {
    }
    PromesasComponent.prototype.ngOnInit = function () {
        this.getUsuarios().then(function (usuarios) { console.log(usuarios); });
        //  const promesa = new Promise ( (resolve, reject) => {
        //    if (false) { 
        //      resolve('Resuelta');      
        //    } else {
        //      reject('Error');
        //    }
        //  })
        //  promesa.then( (mensaje) => {
        //    console.log(mensaje);
        //  })
        //  .catch (error => console.log('Error en mi promesa', error));
    };
    PromesasComponent.prototype.getUsuarios = function () {
        var promesa = new Promise(function (resolve) {
            fetch('https://reqres.in/api/users')
                .then(function (resp) { return resp.json(); })
                .then(function (body) { return console.log(body.data); });
        });
        return promesa;
    };
    PromesasComponent = __decorate([
        core_1.Component({
            selector: 'app-promesas',
            templateUrl: './promesas.component.html',
            styles: []
        })
    ], PromesasComponent);
    return PromesasComponent;
}());
exports.PromesasComponent = PromesasComponent;
