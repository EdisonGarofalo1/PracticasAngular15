import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre:string='Edison';
  contrasena:string='1234';
  rerur:boolean=false;
  constructor( private router:Router , private AuthService:AuthService){

  }

  login(){
  console.log("estou bis",this.nombre,this.contrasena)
    this.AuthService.login(this.nombre,this.contrasena).subscribe(resp=> {
      console.log("resp:",resp)
      if(resp==true){
        console.log("resp:",resp)
        this.router.navigateByUrl('/navab/navbar')
      }
    })

    
  }

      // tap( valid => {
      //   console.log("lo que trae CanActivate:", valid)
      //   if ( !valid ) {
      //     this.router.navigateByUrl('/auth/login');
      //   }
      // })
      


  

  sin_login(){
    this.router.navigateByUrl('/navab/navbar')
  }
}
