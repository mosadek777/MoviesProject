import { Component} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
constructor(private _authService:AuthService,private _Router:Router , private toastr: ToastrService){

}
registerForm:FormGroup= new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
})


handleRegisterForm(registerForm:FormGroup){
if (registerForm.valid) {
  this._authService.signUp(registerForm.value).subscribe({
    next:(res)=>{
      this.toastr.success('successful login',res.message)
this._Router.navigate(['/login'])
    },
    error:(err)=>{
      this.toastr.error(`Error`,err.error.message)
    }
  })
} 
}

}
 

    // if (response.message == 'success') {
    //   this.toastr.warning("success login")
    // this._Router.navigateByUrl("/login")
    // } else {
    //   alert(response.message)
    // }
    //   })

//     next:(response)=>{

//     }
// }

// }}
// 
// if (registerForm.valid) {
//   this.isLoading = true
//   this._authService.register(registerForm.value).subscribe({
//     next:(res)=>{
// console.log(res);
//   this.isLoading = false
//   this._toaster.success('successful login',res.message)
// this._router.navigate(['/login'])
//     },
//     error:(err)=>{
//       console.log(err.error.message);
//       this.ApiError =err.error.message
//       this._toaster.error(`Error`,err.error.message)
//       this.isLoading = false 
//     }
//   })
 
// }
// else
// {
//   this.isInvalidForm = true
// }


// }







