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
      this.experiencias = data;
      
      if (this.experiencias){

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          $(function () {
            $("#example1").DataTable({
              "responsive": true, "lengthChange": false, "autoWidth": false,
              "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
            $('#example2').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": false,
              "ordering": true,
              "info": true,
              "autoWidth": false,
              "responsive": true,
            });
          });
        `;
        document.body.appendChild(script);
      }
    },
    (error: HttpErrorResponse) => {
      // Se produjo un error en la petición HTTP
      console.error('Error en la petición:', error.message);
      console.error('Código de estado:', error.status);
    }
  );


  }
  





}
