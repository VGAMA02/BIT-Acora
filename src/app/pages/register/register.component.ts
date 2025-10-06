import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formData!: any[];
  constructor(private service:RegisterService){
        
  }




}
