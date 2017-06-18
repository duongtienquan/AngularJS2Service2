"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee.component");
var ng2_restangular_1 = require("ng2-restangular");
var employee_service_1 = require("./services/employee.service");
function restangular(RestangularProvider) {
    //RestangularProvider.setBaseUrl('http://id.vtvcab.vn/vod/api/ott');
    RestangularProvider.setBaseUrl('http://rrhd.ihtkk.com.vn:3000/api/user/');
    //RestangularProvider.setBaseUrl('https://5944f686cf46400011a81285.mockapi.io/vtvcab/');
    RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // RestangularProvider.setDefaultRequestParams({
    //     apikey: '586680ad69ce295b1738efe5'
    // });
    // RestangularProvider.setRestangularFields({
    //     id: "_id"
    // });
}
exports.restangular = restangular;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng2_restangular_1.RestangularModule.forRoot(restangular),],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeListComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.RestService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map