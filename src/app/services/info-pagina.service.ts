import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info :any[] =[];
  cargar = false;

  constructor( private http:HttpClient) { 
    this.http.get('assets/data/data-informacion.json').subscribe((resp:any)=>{
      this.cargar= true;
      this.info = resp;
      console.log(resp);
    });
  }
}
