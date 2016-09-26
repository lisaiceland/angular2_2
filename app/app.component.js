"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
require('rxjs/Rx');
var http_1 = require('@angular/http');
var userList_component_1 = require('./userList.component');
var users_service_1 = require('./users.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h1>Angular 2 First App: Depedencies Injection</h1>\n          <user-list></user-list>\n        </div>\n      </div>\n    </div>",
            directives: [userList_component_1.UserList]
        }),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [core_1.provide(users_service_1.Users, { useClass: users_service_1.UsersHttp }), http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.component.js.map
