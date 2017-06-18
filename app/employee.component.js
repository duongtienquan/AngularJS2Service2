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
var EmployeeListComponent = (function () {
    // constructor(private restService: RestService) {
    // }
    // ngOnInit() {
    //     this.restService.doLogin().subscribe(
    //         (res) => {
    //             this.todoList = res;
    //             console.log(this.todoList);
    //         },
    //         (err) => {
    //             console.log(err);
    //         });
    // }
    function EmployeeListComponent(restangular) {
        this.restangular = restangular;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var baseAccounts = this.restangular.one('login');
        var newAccount = { ma_so_thue: "0201597153", serial_number: "710000000728665830D963E107000000000007" };
        //let baseAccounts = this.restangular.one('getAccountDetail');
        //let newAccount = {accountNumber: "5963549",key:"vtvcab01",token:"",tokenAPI:""};
        // let headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
        // let options ={method: "POST", headers: headers };
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('application/x-www-form-urlencoded; charset=UTF-8', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'POST');
        // headers.append('Access-Control-Allow-Origin', '*');
        // let options = new RequestOptions({ headers: headers });
        baseAccounts.customPOST(undefined, undefined, newAccount, undefined).subscribe(function (res) {
            //this.todoList = res;
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: './app/employee.component.html'
    }),
    __metadata("design:paramtypes", [ng2_restangular_1.Restangular])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee.component.js.map