import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticketinfo } from '../models/ticketinfo';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
constructor(private httpClient:HttpClient){ }
 ticketUrl="http://localhost:8081/user/tickets"

 getTicketList(pageNumber:number,userName:string|null,status:string|null):Observable<Ticketinfo>{ 
 
  console.log(userName);
  console.log(status);
  
  
 return this.httpClient.get<Ticketinfo>(`${this.ticketUrl}/ticketlist/${pageNumber}/5/${userName}/${status}`)
 
 }

 RaiseTicket(ticketobj:Ticketinfo):Observable<object>{
  
  return this.httpClient.post(`${ this.ticketUrl}/raise`,ticketobj)
   }

updateStatus(status:string,ticketId:string):Observable<any>{
  return this.httpClient.put(`${this.ticketUrl}/update/?status=${status}&ticketId=${ticketId}`,null)

}
}