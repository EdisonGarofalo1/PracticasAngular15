import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  listafavorito:string[]=[];
  listaObrasFavorito:string[]=[];
  total:number=0;
  token:boolean=false;
  ngOnInit(): void {

  
    this.cargarfavorito();
 

  }
  cargarfavorito(){

     this.listafavorito = JSON.parse( localStorage.getItem('listaFaboritos')! );
     this.total = this.listafavorito.length;
     this.listaObrasFavorito = JSON.parse( localStorage.getItem('listaFaboritosObras')! );
     this.total= this.total+this.listaObrasFavorito.length
  }
  Eliminar(i:number){
    this.listafavorito.splice(i, 1);
    // this.total = this.listafavorito.length;
    this.total =  this.total -1
    localStorage.setItem("listaFaboritos", JSON.stringify(this.listafavorito));

  }

  EliminaroBras(i:number){
    this.listaObrasFavorito.splice(i, 1);
     
    this.total =  this.total -1
    localStorage.setItem("listaFaboritosObras", JSON.stringify(this.listaObrasFavorito));

  }
}
