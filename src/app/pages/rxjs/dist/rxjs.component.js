"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RxjsComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var RxjsComponent = /** @class */ (function () {
    function RxjsComponent() {
        //this.retornaObservable().pipe(retry(2) 
        //  ).subscribe(
        //  numero =>console.log('Subs', numero),
        //  error => console.log('Error en el Obs', error),
        //  ()=> console.log('El observador termino.')
        //  )
        this.intervalSubs = this.retornaIntervalo().subscribe(function (valor) { return console.log('Subs', valor); });
    }
    RxjsComponent.prototype.ngOnDestroy = function () {
        this.intervalSubs.unsubscribe();
    };
    RxjsComponent.prototype.retornaIntervalo = function () {
        var intervalo$ = rxjs_1.interval(500).pipe(rxjs_1.map(function (valor) { return valor + 1; }), rxjs_1.filter(function (valor) { return (valor % 2 === 0) ? true : false; }), rxjs_1.take(10));
        return intervalo$;
    };
    RxjsComponent.prototype.retornaObservable = function () {
        var obs$ = new rxjs_1.Observable(function (observer) {
            var i = -1;
            var intervalo = setInterval(function () {
                i++;
                observer.next(i);
                if (i === 4) {
                    clearInterval(intervalo);
                    observer.complete();
                }
                if (i === 2) {
                    observer.error;
                }
            }, 1000);
        });
        return obs$;
    };
    RxjsComponent = __decorate([
        core_1.Component({
            selector: 'app-rxjs',
            templateUrl: './rxjs.component.html',
            styles: []
        })
    ], RxjsComponent);
    return RxjsComponent;
}());
exports.RxjsComponent = RxjsComponent;
