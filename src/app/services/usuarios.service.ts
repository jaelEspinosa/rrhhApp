import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, Usuario } from '../interfaces/interfaces';




const url = 'https://app.formacionon.com/acceso';
const loginUrl = 'https://app.formacionon.com/login';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) { }



 getToken():Observable<Token>{
  return this.http.get<Token>(url)
 }  

 login(formData:Usuario ):Observable<any>{
  console.log(formData)
  return this.http.post<any>(loginUrl,formData )
 } 
}
