import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario:string, email:string):Observable<boolean>{

    let token='sjhsjdjdsfhdsjdshjsdhsdfvdshfvhdsfdsf'
      if(usuario==='Edison' && email=='1234'){

        localStorage.setItem('token', token! );
        return of(true)
  }else{

    return of(false)
  }

}
  validarToken(): Observable<boolean> {

    if ( localStorage.getItem('token') ) {
      console.log("lo que sale")
      return of(true);
      
    } else{

      return of(false)

    }

  }
  


}
