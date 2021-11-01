import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams (){
    return new HttpParams().set('fields', 'name,cca2,cca3,cioc,translations,population,flags');
  }

  // INYECTAR EL SERVICIO
  constructor( private http: HttpClient ) { }


  // Métodos
  buscarPais( termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
    /* .pipe(
      catchError(err => of(['Hola mundo']))
    ); */
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  
  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  
  buscarRegion(region:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}?fields=name,cca2,cca3,cioc,translations,population,flags`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams})
        .pipe(
          tap(console.log
          )
        )
  }

  
}
