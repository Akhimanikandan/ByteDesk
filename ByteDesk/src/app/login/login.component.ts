import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../service/user.service';

import { HttpsInterceptor } from '../https.interceptor.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error!: any;
  response: any;
  errorMessage: any;
  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router, private http: HttpsInterceptor,private ngxService:NgxUiLoaderService) { }
  visible:boolean=true;
  changetype:boolean=true;
  view() {
  this.visible=!this.visible
  this.changetype=!this.changetype
    }
   
  ngOnInit(): void {
    

  }
  user: User = new User()
  form: FormGroup = this.fb.group(
    {
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.pattern('[0-9]*'),Validators.maxLength(10)]]
    }
  )
  get password() { return this.form.get('password') }
  get userName() { return this.form.get('userName') }
  login() {

    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop();
    }, 3000);
    if (this.form.valid) {
      this.userservice.UserLogin(this.user).subscribe({
        next: data => {
          this.response = data;
          console.log(this.response);
          sessionStorage.setItem("authenticated", "true")
          sessionStorage.setItem("userName", this.response.userName)
          sessionStorage.setItem("token", this.response.token)
          sessionStorage.setItem("password", this.response.password)
          sessionStorage.setItem("lastName", this.response.lastName)
          sessionStorage.setItem("firstName", this.response.firstName)
          this.router.navigate(['home'])
        },
        error:err=>this.errorMessage=err
        

      }
      
      )
      
    }
  
    
  }

}
