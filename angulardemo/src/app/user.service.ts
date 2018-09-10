import { Injectable } from '@angular/core';
//import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private isUserLoggedIn;
private useremail;
//private saveData = new Subject();
//saveData$ = this.saveData.asObservable();
  constructor() { 
    
    // this.isUserLoggedIn = false;

  }
  setUserLoggedIn(data:any){
    this.isUserLoggedIn = data;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
