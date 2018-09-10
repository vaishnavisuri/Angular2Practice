import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user=[{
    id:1,
    name:'Max'
  },{
    id:2,
    name:'Chriss'
  },{
    id:3,
    name:'Anna'
  }];
  birthday = new Date(1993,10,13);
  id: number;

  signupForm: FormGroup;
  genders=["Male","Female"];

  constructor(private route: ActivatedRoute) { }

 
  ngOnInit() {
      this.route.params.subscribe((params: Params)=>{
        this.id=+params['id'];
      });
      // forms
      this.signupForm =new FormGroup({
        // nested form group
        'userData':new FormGroup({
          'username':new FormControl(null,Validators.required),
          'email':new FormControl(null,[Validators.required,Validators.email])
        }),
        'gender':new FormControl('Male'),
        'hobbies':new FormArray([])
      });
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobbies(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

}
