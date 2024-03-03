import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError,catchError} from 'rxjs'
import { Obras } from '../Interfaces/obras';
import { Framentos } from '../Interfaces/framentso';
import { Authors } from '../Interfaces/autore';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http:HttpClient) { }


  private handleError(error:HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error:',error.error.message)


    }else {

      console.error(`El backend devolvió el código ${error.status}` +
      
      ` body era: ${error.error}`);

          }
          return throwError ('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.'

          );
    
  }
private url ='https://poetrydb.org/'
  getListarAutores():Observable<Authors>{

    return this.http.get<Authors>(this.url+'author').pipe(
    catchError(this.handleError)
    );
  }
getlistarAutorporObras(autor:string):Observable<Obras[]>{

  return this.http.get<Obras[]> (  `${this.url}/author/${autor}/title` ).pipe(
    catchError(this.handleError)
    );
    
  
}

getobra(Obra:string):Observable<Framentos[]>
{
return this.http.get<Framentos[]>(this.url + '/title/'+Obra).pipe(
  catchError(this.handleError)
  );
}

}

