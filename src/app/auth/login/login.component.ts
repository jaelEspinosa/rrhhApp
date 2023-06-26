import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  public isSubmitedForm: boolean = false

  constructor(private router: Router, 
              private fb:FormBuilder,
              private usuariosService: UsuariosService            
    ){}
    
  public loginForm: FormGroup = this.fb.group({
      email:[localStorage.getItem('userEmail') || '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:['', Validators.required],
      remember:[true]
    })


  campoNoValido( campo: string) {
      return this.loginForm.get(campo)?.invalid && this.isSubmitedForm ? true : false
    
    }  

  login(){
      this.isSubmitedForm = true
   if(this.loginForm.valid){
      this.usuariosService.login(this.loginForm.value)
      if(this.loginForm.get('remember')!.value){
        localStorage.setItem('userEmail', this.loginForm.get('email')!.value)
      }else{
        localStorage.removeItem('userEmail')
      }

      this.router.navigate(['main'])
   }
  }

}
