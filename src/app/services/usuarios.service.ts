import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

 login(formData:any ){
  console.log('vamos a logear....', formData)
 } 
}
