import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  ApiUrl:string = "http://localhost:3001/api/";
  
  constructor(private http:HttpClient) { 
      
  }

  registerUser(formData: any[]): Observable<any>{
     console.log("Data: " + formData);
     return this.http.post(`${this.ApiUrl}users/create`, formData);
     
  }




}
