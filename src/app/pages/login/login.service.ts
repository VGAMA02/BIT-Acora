import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiUrl:string = "http://localhost:3001/api/";
  
  constructor(private http:HttpClient) { 
      
  }

  LogUser(formData: any[]){
    return this.http.get<any[]>(this.ApiUrl + "users");
  }
}
