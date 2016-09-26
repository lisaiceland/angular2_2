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
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h1>Angular 2 First App: Dependencies Injection</h1>\n          <user-list></user-list>\n        </div>\n      </div>\n    </div>",
            directives: [userList_component_1.UserList]
        }),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [core_1.provide(users_service_1.Users, { useClass: users_service_1.UsersHttp }), http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUU5RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxtQ0FBeUIsc0JBQXNCLENBQUMsQ0FBQTtBQUNoRCw4QkFJTyxpQkFBaUIsQ0FBQyxDQUFBO0FBZXpCO0lBQUE7SUFDQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsb05BUUQ7WUFDVCxVQUFVLEVBQUUsQ0FBRSw2QkFBUSxDQUFFO1NBQ3pCLENBQUM7O29CQUFBO0lBRUYsbUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG9CQUFZLGVBQ3hCLENBQUE7QUFFRCxvQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFFLGNBQU8sQ0FBQyxxQkFBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLHlCQUFTLEVBQUUsQ0FBQyxFQUFFLHFCQUFjLENBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vYXBwIn0=
