import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
}
