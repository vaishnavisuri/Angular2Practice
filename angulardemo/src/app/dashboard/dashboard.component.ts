import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { CardsInfo } from '../cardsinfo';
import { CARDSINFO } from '../mocks-cardsinfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards= CARDSINFO;

  constructor(private http: HttpClient) { }
  cardsInfo: string[];
  
  ngOnInit() {
    // get json data of cards info
    // this.http.get('http://www.json-generator.com/api/json/get/bOXQqgyxSG?indent=2').subscribe(
    //   data => {
    //     this.cardsInfo = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     // console.log(Object.keys(this.cardsInfo));
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
  }

}
