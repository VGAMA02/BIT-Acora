import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';



@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,  private service:LoginService,private router: Router,private storage: StorageService){
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
      this.storage.setItem('id', res.user.id);
      this.storage.setItem('name', res.user.name);
      this.storage.setItem('token', res.token);
      this.router.navigate(['/home']);
      //alert('Inicio de sesión exitoso');
    },
    error: (err) => {
      console.error('Error:', err);
      alert('Credenciales incorrectas');
    },
  });
  }

}
