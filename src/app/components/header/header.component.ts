import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nameUser: string | null = null;
 constructor(private router: Router,private storage: StorageService) {
        this.nameUser = this.storage.getItem("name") || 'Usuario';
 }


  onLogOut(){
     localStorage.setItem('id',"");
     localStorage.setItem('token',"");
     this.router.navigate(['/login']); 
  }
}
