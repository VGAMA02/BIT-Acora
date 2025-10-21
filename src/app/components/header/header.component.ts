import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 constructor(private router: Router) {}


  onLogOut(){
     localStorage.setItem('id',"");
     localStorage.setItem('token',"");
     this.router.navigate(['/login']); 
  }
}
