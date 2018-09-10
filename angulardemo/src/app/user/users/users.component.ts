import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // user: {id: number, name: string};

  // constructor() { }

  // ngOnInit() {
  // }

  users:{id:number,name:string};
  constructor(private route:ActivatedRoute) { }


  ngOnInit() {
    this.users = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe((params:Params)=>{
        this.users.id =  params['id'];
        this.users.name = params['name'];
      }
      );
  }

}
