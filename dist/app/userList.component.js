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
var users_service_1 = require('./users.service');
var UserList = (function () {
    function UserList(users) {
        this.users = null;
        this.users = users;
    }
    UserList.prototype.page = function (pageNumber) {
        this.users.page(pageNumber);
    };
    UserList.prototype.data = function () {
        return this.users.data();
    };
    UserList.prototype.pages = function () {
        return this.users.pages();
    };
    UserList = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/userList.template.html'
        }), 
        __metadata('design:paramtypes', [users_service_1.Users])
    ], UserList);
    return UserList;
}());
exports.UserList = UserList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLDhCQUFzQixpQkFBaUIsQ0FBQyxDQUFBO0FBTXhDO0lBR0Usa0JBQVksS0FBWTtRQUZ4QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR1gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxVQUFVO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFyQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQyxDQUFDOztnQkFBQTtJQW1CRixlQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxnQkFBUSxXQWtCcEIsQ0FBQSIsImZpbGUiOiJ1c2VyTGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vYXBwIn0=
