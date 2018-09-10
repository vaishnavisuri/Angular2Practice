import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ServeService } from '../serve.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-serverinteraction',
  templateUrl: './serverinteraction.component.html',
  styleUrls: ['./serverinteraction.component.css']
})
export class ServerinteractionComponent implements OnInit {

  constructor( private serveService: ServeService ) { }
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  private generateId(){
    return Math.round(Math.random() * 10000)
  }
  
  addOnServer(name:string){
    this.servers.push({
      name:name,
      capacity:50,
      id: this.generateId()
    })
  }
  onSave(){
    this.serveService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  onGet(){
    this.serveService.getServers()
    .subscribe(
      (servers: any[]) => this.servers = servers
      // {
      //   const data = response.json();
      //   console.log(data);
      // },
      ,
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }

}
