import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AutoresService } from '../../services/autores.service';
import { Framentos } from '../../Interfaces/framentso';

@Component({
  selector: 'app-framento',
  templateUrl: './framento.component.html',
  styleUrls: ['./framento.component.css']
})
export class FramentoComponent {

  listfragmentos:Framentos[]=[]

  constructor( private AutoresService:AutoresService,private _ActivatedRoute:ActivatedRoute){


  }

  ngOnInit(): void {
   
    
    this._ActivatedRoute.params
     .pipe(
      switchMap(({obra}) => this.AutoresService.getobra(obra))
     ).subscribe(data=>{ 
      
      // this.producto=producto
    console.log("obra:",data)

    this.listfragmentos=data
    }
      );
    
  
   }
}
