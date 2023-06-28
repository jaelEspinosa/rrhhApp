import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/interfaces';

import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})


export class LoginComponent implements OnInit{

  public isSubmitedForm: boolean = false;
  public token!:Token;

  constructor(private router: Router, 
              private fb:FormBuilder,
              private usuariosService: UsuariosService            
    ){}
  ngOnInit(): void {
    this.usuariosService.getToken()
     .subscribe(data => {
       this.token = data    
       console.log(this.token);
          
     })
     
  }
    
  public loginForm: FormGroup = this.fb.group({
      username:[localStorage.getItem('user') || ''],
      password:['', Validators.required],
      remember:[true]
    })


  campoNoValido( campo: string) {
      return this.loginForm.get(campo)?.invalid && this.isSubmitedForm ? true : false
    
    }  

  login(){
      this.isSubmitedForm = true
   if(this.loginForm.valid){
     
     if(this.loginForm.get('remember')!.value){
       localStorage.setItem('user', this.loginForm.get('username')!.value)
     }else{
       localStorage.removeItem('user')
     }

    const{username, password} = this.loginForm.value;  

    this.usuariosService.login({username, password, token:this.token.token})
     .subscribe(data =>{
      console.log(data);
      
     },
     (error: HttpErrorResponse) =>{
        // Se produjo un error en la petición HTTP
        console.error('Error en la petición:', error.message);
        console.error('Código de estado:', error.status);
     }
     )
           
   }
  }

}
