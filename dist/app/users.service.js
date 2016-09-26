"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var Users = (function () {
    function Users() {
        this.pageList = [];
        this.users = null;
    }
    Users.prototype.page = function (pageNumber) {
    };
    Users.prototype.data = function () {
        return this.users.data;
    };
    Users.prototype.pages = function () {
        return this.pageList;
    };
    return Users;
}());
exports.Users = Users;
var UsersMock = (function (_super) {
    __extends(UsersMock, _super);
    function UsersMock() {
        _super.call(this);
        this.page(1);
        this.pageList = [1, 2];
    }
    UsersMock.prototype.page = function (pageNumber) {
        switch (pageNumber) {
            case 1:
                this.users = {
                    "page": "1",
                    "per_page": 3,
                    "total": 6,
                    "total_pages": 2,
                    "data": [
                        {
                            "id": 1,
                            "first_name": "lucy",
                            "last_name": "van pelt",
                            "avatar": "http://placehold.it/64x64"
                        }, {
                            "id": 2,
                            "first_name": "linus",
                            "last_name": "van pelt",
                            "avatar": "http://placehold.it/64x64"
                        }, {
                            "id": 3,
                            "first_name": "charlie",
                            "last_name": "brown",
                            "avatar": "http://placehold.it/64x64"
                        },
                    ]
                };
                break;
            case 2:
                this.users = {
                    "page": "2",
                    "per_page": 3,
                    "total": 6,
                    "total_pages": 2,
                    "data": [
                        {
                            "id": 4,
                            "first_name": "snoopy",
                            "last_name": "",
                            "avatar": "http://placehold.it/64x64"
                        }, {
                            "id": 5,
                            "first_name": "pigpen",
                            "last_name": "",
                            "avatar": "http://placehold.it/64x64"
                        }, {
                            "id": 6,
                            "first_name": "schroeder",
                            "last_name": "",
                            "avatar": "http://placehold.it/64x64"
                        },
                    ]
                };
                break;
            default:
                break;
        }
    };
    return UsersMock;
}(Users));
exports.UsersMock = UsersMock;
// This needs to be marked @Injectable so the dependency injector will inject Http.
var UsersHttp = (function (_super) {
    __extends(UsersHttp, _super);
    function UsersHttp(http) {
        _super.call(this);
        this.http = null;
        this.http = http;
        // This avoids us getting an error in the console when we access a member
        // variable of the people object in the ng-for before the service has
        // returned.
        this.users = {
            data: [],
            total_pages: 1
        };
        this.pageList = [1];
        this.page(1);
    }
    UsersHttp.prototype.page = function (pageNumber) {
        var _this = this;
        // Call map on the response observable to get the parsed people object
        var observable = this.http.get("http://reqres.in/api/users?page=" + pageNumber).map(function (res) { return res.json(); });
        // Subscribe to the observable to get the parsed people object and
        // attach it to the component.
        observable.subscribe(function (people) {
            _this.users = people;
            _this.pageList = [];
            for (var i = 1; i <= people.total_pages; i++) {
                _this.pageList.push(i);
            }
        });
    };
    UsersHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsersHttp);
    return UsersHttp;
}(Users));
exports.UsersHttp = UsersHttp;

//# sourceMappingURL=data:application/json;base64,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
