import { Injectable } from "@angular/core";
import { Http,Headers,Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ServeService{
    constructor(private http:Http){}
    
    storeServers(servers:any[]):Observable<any>{
        const headers = new Headers({'Content-Type':'application/json'});
    //     return this.http.post('https://ng-angular-http-9b0f2.firebaseio.com/data.json',servers,
    // {headers: headers});
    return this.http.put('https://ng-angular-http-9b0f2.firebaseio.com/data.json',servers,
    {headers: headers});
    }
    getServers(){
        return this.http.get('https://ng-angular-http-9b0f2.firebaseio.com/data.json')
        .map(
            (response: Response)=> {
                const data = response.json();
                for(const server of data){
                    server.name='FETCHED_'+server.name;
                }
                return data;
            }
        );
    }
}