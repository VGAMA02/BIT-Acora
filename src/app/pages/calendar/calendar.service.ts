import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  ApiUrl:string = "http://localhost:3001/api/";

  constructor(private http:HttpClient) { 
      
  }
  getActivitiesFromUser(Id:number,limiter?:number) : Observable<any>{
    const token = localStorage.getItem('token');
      console.log("token aut: " + token);
      const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
     const params: any = { id: Id };
     if (limiter) params.limiter = limiter;
     return this.http.get<any[]>(`${this.ApiUrl}activityByUId?id=${Id}&limiter=${limiter}`, { headers });
  }


}
