import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    console.log('');    
  }

  /**
   * Construye el Formulario de Registro con los campos 
   * email y password
   */
   private buildForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Registra al Usuario en Google Firebase 
   * * Consume el API de Firebase
   * @param event Evento del formulario
   */
  login(event: Event){
    event.preventDefault();
    if(this.loginForm.valid){
      const value = this.loginForm.value;
      this.authService.login(value.email, value.password)
      .then( () =>{          
          this.router.navigate(['/admin']);
        }
      ).catch( () => {
        alert('No es valido');
      });
    }    
  }

}
