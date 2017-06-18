import {Component,OnInit} from '@angular/core';
import {RestService} from "./services/employee.service";


@Component({
    selector:'employee-list',
    templateUrl:'./app/employee.component.html'
})
export class EmployeeListComponent implements OnInit{

    public todoList:any[]

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.restService.getTodoList().subscribe(
            (res) => {
                this.todoList = res;
                console.log(this.todoList);
            },
            (err) => {
                console.log(err);
            });
      
    }
}