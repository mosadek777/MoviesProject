
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
isLoginUser:boolean=false;

constructor(private _authService:AuthService){
  _authService.userData.subscribe(res=>{
    if (res!=null) {
      this.isLoginUser = true
    } else {
      this.isLoginUser = false
    }
  })
}
logOUT(){
  this._authService.logOut()
}

}
