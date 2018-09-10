import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isValid:boolean=false;
constructor(private user:UserService){
    // alert( this.user.getUserLoggedIn());
  }

  
  ngDoCheck(){
    this.isValid= this.user.getUserLoggedIn();
  }
}
  
