import { Component, OnInit,Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { interval } from 'rxjs';
import 'rxjs/Rx';
// import { Promise } from 'protractor';
import { reject } from 'q';
// import { ShortenPipe } from './shorten.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('server') serverName: string;
  private _name='';
  @Input('name') name:any;
  master = "Master";

  appStatus = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('stable');
    },2000);
  });
  servers = [{
    instanceType: 'medium',
    name: 'Production server',
    status: 'stable',
    started: new Date(15,1,2017)
  },{
    instanceType: 'larger',
    name: 'User database',
    status: 'stable',
    started: new Date(15,1,2017)
  },{
    instanceType: 'small',
    name: 'Development server',
    status: 'offline',
    started: new Date(15,1,2017)
  },{
    instanceType: 'small',
    name: 'Testing Environment server',
    status: 'stable',
    started: new Date(15,1,2017)
  }];
  filteredStatus = '';
  getStatusClass(server:{instanceType: string,name: string,status: string, started: Date}){
    return{
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-denger': server.status === 'critical'
    }
  }
  constructor() { }

  ngOnInit() {
    // const myNumber = Observable.interval(1000);
  }
  onAddServer(){
    this.servers.push({
      instanceType: 'small',
      name: 'New server',
      status: 'stable',
      started: new Date(15,1,2017)
    });
  }

}
