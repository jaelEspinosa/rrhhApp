import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './../../services/api.service';
import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [
  ]
})
export class ExperienciaComponent {
  public experiencias!: any[]


  constructor(public apiService:ApiService){
   this.apiService.getExperiencia()

     .subscribe(
    (data: any) => {
      // La petición se completó correctamente, procesa los datos recibidos
      this.experiencias = data
    },
    (error: HttpErrorResponse) => {
      // Se produjo un error en la petición HTTP
      console.error('Error en la petición:', error.message);
      console.error('Código de estado:', error.status);
    }
  );


  }





}
