"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
// ReactiveFormsModule
//AppModule, будет входной точкой в приложение
// NgModule представляет функцию-декоратора, которая принимает объект,
// свойства которого описывают метаданные модуля. Наиболее важные свойства:
//
//  declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
//
// exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
//
// imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
//
// providers: классы, создающие сервисы, используемые модулем
//
// bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения 
//# sourceMappingURL=app.module.js.map