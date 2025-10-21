import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeService } from './home.service';
//import { resolve } from 'path';
//import { rejects } from 'assert';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  providers:[HomeService,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  users!: any[];

  constructor(private service:HomeService, private router:Router,private storage: StorageService){
      
  }
  async ngOnInit(): Promise<void> {
      //await this.getAllUser();
      //console.log(this.users);  
      console.log();
  }

  getAllUser() : Promise<void>{
      return new Promise((resolve,reject) => {
          this.service.getAllUser().subscribe({
          next:(value) => {
            this.users = value;
            
            resolve();
          },
          error: (err) => {
            console.error("Data no encontrada");
            reject();
          },complete: () => {
            
          },
        })
      })
  }

  getActivitiesFromUser(){
      
  }
  


}
