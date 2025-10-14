import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,  private service:LoginService){
      //crear data
      this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ///Llamar al service
  onSubmit() {
const formData = this.loginForm.value;

  this.service.loginUser(formData).subscribe({
    next: (res) => {
      console.log('Respuesta del backend:', res);

      // Guardar token en localStorage
      localStorage.setItem('token', res.token);
      alert('Inicio de sesión exitoso');
    },
    error: (err) => {
      console.error('Error:', err);
      alert('Credenciales incorrectas');
    },
  });
  }

}
