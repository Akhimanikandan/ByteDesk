import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { Ticketinfo } from '../models/ticketinfo';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userticketlist',
  templateUrl: './userticketlist.component.html',
  styleUrls: ['./userticketlist.component.css']
})
export class UserticketlistComponent implements OnInit {

userId:string | null=sessionStorage.getItem("userName")
status:string | null="processing";
ticketlist:Ticketinfo[]=[];
ticketId!: string;
  department!: string;

  currentPage!: number;
  totalItem: any;
  totalPage: any;
  list!: Ticketinfo[];
  count!: number;
  ticketinfo: any;
  


constructor(private ticketservice:TicketService, private router:Router){}
back(){
  this.router.navigate(['home'])
}
private getList(pageNumber: number){
  this.ticketservice.getTicketList(pageNumber,this.userId, this.status).subscribe({
    next: ticket => {
      this.ticketinfo=ticket;
      console.log(ticket)
      
 this.list = this.ticketinfo.list;
 this.count= this.ticketinfo.totalItem;
  
    }
  })
}
onTableDataChange(event: number) {
  this.getList(event - 1);
  this.currentPage = event;
}
cancel(id:string, dept:string){
this.status="cancelled"
this.ticketId=id  
this.ticketservice.updateStatus(this.status, this.ticketId).subscribe({
  next:cancel =>{
    console.log(cancel);
    
  }
})
this.department=dept
this.router.navigate(['cancel',this.ticketId,this.department])

  
}
  ngOnInit(): void {

  this.getList(0);
    
  }

 

}
