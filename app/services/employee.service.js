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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_restangular_1 = require("ng2-restangular");
var RestService = (function () {
    function RestService(restangular) {
        this.restangular = restangular;
    }
    //methods
    RestService.prototype.getTodoList = function () {
        var list = this.restangular.all("employees").getList();
        return list;
    };
    RestService.prototype.doLogin = function () {
        var newAccount = { ma_so_thue: "0201597153", serial_number: "710000000728665830D963E107000000000007" };
        var login = this.restangular.one("login").post(newAccount);
        return login;
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_restangular_1.Restangular])
], RestService);
exports.RestService = RestService;
//# sourceMappingURL=employee.service.js.map