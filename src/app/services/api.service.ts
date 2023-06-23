import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


const url = 'https://app.formacionon.com/rrhhexperiencia'

/* const url = 'https://jsonplaceholder.typicode.com/users' */

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(private http: HttpClient) { }

  getExperiencia():any {
       return this.http.get(url)
  }

}
