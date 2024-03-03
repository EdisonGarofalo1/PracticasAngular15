import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2'
import { AutoresService } from '../../services/autores.service';
import { Obras } from '../../Interfaces/obras';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent {

  listaObras:Obras[]=[];

  constructor( private AutoresService:AutoresService,private _ActivatedRoute:ActivatedRoute){


  }
  ngOnInit():void{

    this.listarObras();
  
   }

   listarObras(){
  
    this._ActivatedRoute.params
    .pipe(
     switchMap(({autor}) => this.AutoresService.getlistarAutorporObras(autor))
    ).subscribe((resp)=> {
      console.log("lista",resp)
      this.listaObras=resp
    
    
    });


   }

   Guardar(item:any){

  
    if(localStorage.getItem('listaFaboritosObras') === null){

      const fab:Obras[]=[];
      fab.push(item);
       localStorage.setItem('listaFaboritosObras', JSON.stringify(fab));
      
   }else {

    const faboritotorage = localStorage.getItem('listaFaboritosObras') as string;
    console.log("listaFaboritosObras:",faboritotorage);
    const faboritoStorageJson=JSON.parse(faboritotorage)
     console.log("listaFaboritosObras",faboritoStorageJson);
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
   localStorage.setItem('listaFaboritosObras', JSON.stringify(faboritoStorageJson));
}

   }

   }
}
