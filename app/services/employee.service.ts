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

    doLogin(){
        let newAccount = {ma_so_thue: "0201597153",serial_number:"710000000728665830D963E107000000000007"};
        let login = this.restangular.one("login").post(newAccount);
        return login;
    }
}