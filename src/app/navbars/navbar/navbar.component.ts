import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _router:Router){

  }
  Salir(){

    localStorage.removeItem('token');
    // this.router.navigate(['/Login']);
    this._router.navigate(['/auth/login']);
  }
}
