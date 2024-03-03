import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  listafavorito:string[]=[]
  total:number=0;
  token:boolean=false;
  ngOnInit(): void {

    if (localStorage.getItem('token') === 'sjhsjdjdsfhdsjdshjsdhsdfvdshfvhdsfdsf') {
      this.token = true;
      
    }
    this.cargarfavorito();
 

  }
  cargarfavorito(){

     this.listafavorito = JSON.parse( localStorage.getItem('listaFaboritos')! );
  }
  Eliminar(i:number){
    this.listafavorito.splice(i, 1);
    this.total = this.listafavorito.length;
    localStorage.setItem("listaFaboritos", JSON.stringify(this.listafavorito));

  }
}
