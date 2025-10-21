import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,  private service:RegisterService, private router: Router){
      //crear data
      this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      available: [true],
    });
  }

  ///Llamar al service
  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Datos del formulario:', formData);

      this.service.registerUser(formData).subscribe({
        next: (res) => {
          //console.log("res: " + res)
          //console.log('Usuario registrado:', res.newUser) 
          //console.log('Token JWT:', res.token);
          localStorage.setItem('id',res.newUser.id);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        
        },
        error: (err) => {console.error('Error al registrar:', err)}
      });
    } else {
      console.warn('Formulario inválido');
      const formData = this.registerForm.value;
      console.log('Datos del formulario:', formData);
      alert("Error en registro: " + this.registerForm);
      
    }
  }
  


}
