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
  
  isValid: boolean = false;
  loginUser : FormGroup;
  private formSubmitAttempt: boolean;
  passwordPattern: '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$';

  constructor(private fb:FormBuilder, public router:Router,private user: UserService) {
 
  }

  ngOnInit() {
  
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
     // this.isUserLoggedIn = true;
      console.log(this.isValid);
      debugger;
      this.user.setUserLoggedIn(true);
      this.router.navigate(['dashboard']);
      
    } else {
      console.log("not in form");
    }
  }

  
}
