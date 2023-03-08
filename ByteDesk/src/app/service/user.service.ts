import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:8081/user/login"
getToken:string=sessionStorage.getItem("token")||''
constructor(private httpClient:HttpClient){}

IsAuthenticate(){
  return !!sessionStorage.getItem("authenticated")
}


UserLogin(user:User):Observable<object>{
  return this.httpClient.post(`${this.baseUrl}`,user)
}
 
}
