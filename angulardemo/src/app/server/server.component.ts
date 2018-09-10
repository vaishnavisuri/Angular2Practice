import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion= "pet";
  answer = "";
  genders =["Male","Female"];
  user={
    username:'',
    mail:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted= false;


  server = "Servers Names";
  names = ['Mr. IQ', '   ', '  John Henry ', ' Tom & Jerry '];
  constructor() { }

  ngOnInit() {
  }
  suggestUserName(){
    const suggestedName = 'SuperUser';
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.mail = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

}
