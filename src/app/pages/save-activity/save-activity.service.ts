import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SaveActivityService {

  ApiUrl:string = "http://localhost:3001/api/";
  
  constructor(private http:HttpClient) { 
      
  }

  CreateActivity(formData: any[]): Observable<any>{
    
      const token = localStorage.getItem('token');
      console.log("token aut: " + token);
      const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.ApiUrl}activity/create`, formData,{headers});
  }

}
