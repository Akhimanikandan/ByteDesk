import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router:Router) { }
 
  raise(){
    this.router.navigate(['raiseticket'])
    
  }

  MyTicket(){
    this.router.navigate(['userticketlist'])
    
  }
  resolvedTicket(){
  this.router.navigate(['resolvedticketlist'])
  }
  reassign(){
    this.router.navigate(['reassignlist'])
  }
  
  
}
