import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
constructor(private http:HttpClient){}
 infoUrl="http://localhost:8081/user/info"

getInfo(info:Info):Observable<object>{
return this.http.post(`${this.infoUrl}/getinfo`,info)
}

getUserInfo(ticketId:string):Observable<Info[]>{
  return this.http.get<Info[]>(`${this.infoUrl}/userInfo/${ticketId}`)
}
}
