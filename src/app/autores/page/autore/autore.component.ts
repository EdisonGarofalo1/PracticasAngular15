import { Component } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { faborito } from '../../Interfaces/favorito';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent {
  constructor(private AutoresService:AutoresService){

  }
  lista:[]=[];
  token:boolean=false;
  ngOnInit():void{
   
 
  
      if (localStorage.getItem('token') === 'sjhsjdjdsfhdsjdshjsdhsdfvdshfvhdsfdsf') {
        this.token = true;
        
      }


    this.AutoresService.getListarAutores().subscribe(
    (  resp:any)=>{
console.log("lista:",resp.authors)
        this.lista=resp.authors
      }
    )


  }


  Guardar( item: faborito){
  
  

    if(localStorage.getItem('listaFaboritos') === null){

      const fab:faborito[]=[];
      fab.push(item);
       localStorage.setItem('listaFaboritos', JSON.stringify(fab));
      
   }else{

    const faboritotorage = localStorage.getItem('listaFaboritos') as string;
    console.log("faboritotorage:",faboritotorage);
    const faboritoStorageJson=JSON.parse(faboritotorage)
     console.log("faboritotorage",faboritoStorageJson);
     console.log("lenght:",faboritoStorageJson.length);
       let index = -1;
     for (let i= 0; i < faboritoStorageJson.length; i++){
       let itemc= faboritoStorageJson[i];
       if(item === itemc){
             index = i;
             console.log("si encontro",);
          
             Swal.fire("Error",'Ya se encuentra Agregado')
      
             console.log("Ya se encuetra Agregado!")
           
             break;
       }
     }
     if(index === -1){

      faboritoStorageJson.push(item)
   localStorage.setItem('listaFaboritos', JSON.stringify(faboritoStorageJson));
}
   }



  }

}
