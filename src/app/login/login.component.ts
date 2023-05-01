import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router, private toastr: ToastrService){

  }
 
 loginForm:FormGroup= new FormGroup({
 
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
  })
  submitLoginForm(){
    if (this.loginForm.invalid) {
      return
  }
  
  
    this._AuthService.signIn(this.loginForm.value).subscribe((response)=>{
      if (response.message == 'success') {
        this.toastr.success("success", "You have logged in successfully")
        localStorage.setItem("loginUser",response.token)
        this._AuthService.saveUser()
       this._Router.navigateByUrl("/home")
        } else {
          this.toastr.error("email or pass not found")
          // this._Router.navigateByUrl("/register")

        }

    })
  }
}
