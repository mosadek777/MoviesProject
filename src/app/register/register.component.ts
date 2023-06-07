import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
constructor(private _AuthService:AuthService,private _Router:Router , private toastr: ToastrService){

}
registerForm:FormGroup= new FormGroup({
  "first_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  "last_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
"age":new FormControl(null,[Validators.required,Validators.pattern(/^([2-7][0-9]|80)$/)])
})

submitRegisterForm(){
if (this.registerForm.invalid) {
  return
}

  this._AuthService.signUp(this.registerForm.value).subscribe((response)=>{
if (response.message == 'success') {
  this.toastr.warning("success login")
this._Router.navigateByUrl("/login")
} else {
  alert(response.message)
}
  })
}
  ngOnInit(): void {
    
  }
}
