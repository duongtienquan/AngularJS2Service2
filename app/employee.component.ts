import {Component,OnInit} from '@angular/core';
import {RestService} from "./services/employee.service";
import {Restangular} from "ng2-restangular";
import {Headers,RequestOptions} from '@angular/http';

@Component({
    selector:'employee-list',
    templateUrl:'./app/employee.component.html'
})
export class EmployeeListComponent implements OnInit{

    public todoList:any[]

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

    constructor(private restangular:Restangular){

    }
    ngOnInit(){
         let baseAccounts = this.restangular.one('login');
         let newAccount = {ma_so_thue: "0201597153",serial_number:"710000000728665830D963E107000000000007"};
        //let baseAccounts = this.restangular.one('getAccountDetail');
        //let newAccount = {accountNumber: "5963549",key:"vtvcab01",token:"",tokenAPI:""};
        // let headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
        // let options ={method: "POST", headers: headers };
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('application/x-www-form-urlencoded; charset=UTF-8', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'POST');
        // headers.append('Access-Control-Allow-Origin', '*');

        // let options = new RequestOptions({ headers: headers });

        baseAccounts.customPOST(undefined, undefined, newAccount, undefined).subscribe(
            (res) => {
                //this.todoList = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            });
      
    }
}