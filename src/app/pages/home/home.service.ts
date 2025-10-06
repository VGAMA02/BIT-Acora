import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  ApiUrl:string = "http://localhost:3001/api/";

  constructor(private http:HttpClient) { 
      
  }

  
  getAllUser(): Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + "users");
  }

  getUserById(Id:number): Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + "users");
  }

  getActivitiesFromUser(Id:number) : Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + "users");
  }

  getChats(){
    
  }

}
