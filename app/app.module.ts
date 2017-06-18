import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {EmployeeListComponent} from './employee.component';
import {HttpModule} from '@angular/http';



import {RestangularModule} from 'ng2-restangular';
import {RestService} from "./services/employee.service";

export function restangular (RestangularProvider) {
    //RestangularProvider.setBaseUrl('http://id.vtvcab.vn/vod/api/ott');
    
    RestangularProvider.setBaseUrl('http://rrhd.ihtkk.com.vn:3000/api/user/');
    //RestangularProvider.setBaseUrl('https://5944f686cf46400011a81285.mockapi.io/vtvcab/');
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    // RestangularProvider.setDefaultRequestParams({
    //     apikey: '586680ad69ce295b1738efe5'
    // });
    // RestangularProvider.setRestangularFields({
    //     id: "_id"
    // });
}

@NgModule({
    imports:      [ BrowserModule,RestangularModule.forRoot( restangular
        ), ],
    declarations: [ AppComponent,EmployeeListComponent],
    bootstrap:    [ AppComponent ],
    providers:      [RestService]
})


export class AppModule { }