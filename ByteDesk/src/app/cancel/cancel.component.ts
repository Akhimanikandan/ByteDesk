import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ticketinfo } from '../models/ticketinfo';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit  {
  ticketId!: string | null;
  department!: string | null;
  
 
constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.ticketId=this.route.snapshot.paramMap.get("ticketId")
     this.department=this.route.snapshot.paramMap.get("department")
  }
  ok(){

Swal.fire("Cancelled",'Request has been deleted','error')
this.router.navigate(['userticketlist'])
  }
back(){
  this.router.navigate(['home'])
}
}
