"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "    <div>\n                    <p *ngFor=\"let item of items; let i = index\">{{i+1}}.{{item}}</p>\n                    <p *ngFor=\"let item of items\">{{item}}</p>\n                   </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
// <p *ngFor="let item of items">{{item}}</p>
// или так
// <ul>
//     <template ngFor let-item [ngForOf]="items">
//     <li>{{item}}</li>
// </template>
// </ul> 
//# sourceMappingURL=app.component.js.map