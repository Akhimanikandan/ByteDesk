import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';


@Injectable({  providedIn: 'root',})
export class HttpsInterceptor implements HttpInterceptor {
  url!:string;
  constructor(private userService:UserService) {}
  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url=="http://localhost:8081/user/login"){
    return next.handle(request);
    }
    const jwt=this.userService.getToken
    const newRequest = request.clone({
      headers: request.headers.append('Authentication',"Bearer "+jwt)
    })
    
    return next.handle(newRequest);
  }
 

}
