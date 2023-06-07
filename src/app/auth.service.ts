import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private _httpClient:HttpClient, private _router:Router) { 
    if (localStorage.getItem("loginUser")) {
      this.saveUser()
    }
  }


saveUser(){
  let userToken =JSON.stringify(localStorage.getItem("loginUser"))
  let data= jwt_decode(userToken)
  console.log(data);
this.userData.next(data)
}

  signUp(registerData:any): Observable<any> {
return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,registerData)
  }

  signIn(loginData:any): Observable<any> {
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,loginData)
      }
    

      logOut()
      {
        localStorage.removeItem("loginUser")
        this.userData.next(null)
        this._router.navigateByUrl("/login")
      }
}
