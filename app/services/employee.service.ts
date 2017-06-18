import {Injectable} from '@angular/core'
import {Restangular} from "ng2-restangular";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RestService {
    constructor(private restangular: Restangular) {}
    //methods
    getTodoList() {
        let list = this.restangular.all("employees").getList();
        return list;
    }
}