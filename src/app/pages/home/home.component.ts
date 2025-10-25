import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeService } from './home.service';
//import { resolve } from 'path';
//import { rejects } from 'assert';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,CommonModule],
  providers:[HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  users!: any[];

  activities!: any[];
  constructor(private service:HomeService, private router:Router,private storage: StorageService){

  }
  async ngOnInit(): Promise<void> {
      //await this.getAllUser();
      //console.log(this.users);  
      console.log();
      this.getActivitiesFromUser();

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

  getActivitiesFromUser() : Promise<void>{
      return new Promise((resolve,reject) => {
          let id = Number(this.storage.getItem("id"));
          console.log(id);
          this.service.getActivitiesFromUser(id,5).subscribe({
          next:(value) => {
            this.activities = value.activities;
            
            console.log(this.activities);
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
  
  CheckActivity(id:number){
    console.log("id actividad: " + id);
  }

}
