import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [
  ]
})
export class ExperienciaComponent {
  public experiencia!: any[]

  constructor(private apiService:ApiService){
   this.apiService.getExperiencia()
      .subscribe((data: any[]) => {
        this.experiencia = data
        console.log(this.experiencia)
      })

  }



}
