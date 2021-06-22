import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Registra al Usuario en Google Firebase 
   * * Consume el API de Firebase
   * @param event Evento del formulario
   */
  register(event: Event){
    event.preventDefault();
    if(this.registerForm.valid){
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password)
      .then( () =>{          
          this.router.navigate(['/auth/login']);
        }
      );
    }    
  }

}
