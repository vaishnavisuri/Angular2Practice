import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUser : FormGroup;
  private formSubmitAttempt: boolean;
  passwordPattern: '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$';

  constructor(private fb:FormBuilder, public router:Router,private user: UserService) {}

  ngOnInit() {
    console.log("Hit");
    this.loginUser = this.fb.group({
      'userEmail': ['',Validators.required],
      'userPassword': ['',Validators.pattern(this.passwordPattern)]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.loginUser.get(field).valid && this.loginUser.get(field).touched) ||
      (this.loginUser.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmitLogin(value: any){
    if (this.loginUser.valid && (this.loginUser.value.userEmail == 'a@gmail.com' && this.loginUser.value.userPassword == '123')) {
      console.log(this.loginUser.value);
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    } else {
      // validate all form fields
      console.log("not in form");
    }
  }
}
