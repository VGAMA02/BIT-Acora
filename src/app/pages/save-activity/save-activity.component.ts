import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-save-activity',
  standalone: true,
  imports:[CommonModule,RouterLink],
  templateUrl: './save-activity.component.html',
  styleUrls: ['./save-activity.component.scss']
})
export class SaveActivityComponent {
  fechaInicio!: string;
  constructor(private route: ActivatedRoute,private router: Router) {}
  ngOnInit() {
    this.fechaInicio = this.route.snapshot.paramMap.get('date')!; // obtiene el param de la URL
  }

  regresar() {
    this.router.navigate(['/calendar']);
  }
}