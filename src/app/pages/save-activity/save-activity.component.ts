import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { StorageService } from '../../core/services/storage.service';
import { SaveActivityService } from './save-activity.service';


@Component({
  selector: 'app-save-activity',
  standalone: true,
  imports:[CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './save-activity.component.html',
  styleUrls: ['./save-activity.component.scss']
})
export class SaveActivityComponent {
  fechaInicio!: string;
  activityForm: FormGroup;
  constructor(private fb: FormBuilder, private service: SaveActivityService ,  private route: ActivatedRoute,private router: Router,private storeService:StorageService) {
      //crear data
      this.activityForm = this.fb.group({
      fkUserId: [storeService.getItem("id")],
      description: [null],
      startDate: ["2025-10-20 15:28:18"],
      endDate: [null],
      progress: [0],
      name: ['', Validators.required]   

      
    });
  }
  ngOnInit() {
    this.fechaInicio = this.route.snapshot.paramMap.get('date')!; // obtiene el param de la URL
  }

  regresar() {
    this.router.navigate(['/calendar']);
  }

  onSubmit(){
    if (this.activityForm.valid) {
      const formData = this.activityForm.value;
      console.log('Datos del formulario:', formData);

      this.service.CreateActivity(formData).subscribe({
        next: (res) => {
          console.log("res: " + res)
        },
        error: (err) => {console.error('Error al registrar:', err)}
      });
    } else {
      console.warn('Formulario inválido');
      const formData = this.activityForm.value;
      console.log('Datos del formulario:', formData);
      alert("Error en registro verifique que los datos esten completos");
      
    }
  }
}