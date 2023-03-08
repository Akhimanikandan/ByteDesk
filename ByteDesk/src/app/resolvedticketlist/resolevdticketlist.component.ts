import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Ticketinfo } from '../models/ticketinfo';
import { TicketService } from '../service/ticket.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-resolvedticketlist',
  templateUrl: './resolvedticketlist.component.html',
  styleUrls: ['./resolvedticketlist.component.css']
})
export class ResolvedticketlistComponent implements OnInit{
  userId:string | null =sessionStorage.getItem("userName")
status:string | null="resolved"
ticketlist:Ticketinfo[]=[];
  ticketId!: string;
  department!: string;
  resolvedList: any;
  list!:Ticketinfo[];
  currentPage!: number;
  totalItem: any;
  totalPage: any;
  resolvedRequests!: Ticketinfo[];
  count!: number;
  onTableDataChange(event: number) {
    this.getResolvedList(event - 1);
    this.currentPage = event;
  }
  private getResolvedList(pageNumber:number){
    this.ticketservice.getTicketList(pageNumber,this.userId, this.status).subscribe({
      next:ticket =>{
        this.resolvedList=ticket
this.resolvedRequests=this.resolvedList.list;
this.count=this.resolvedList.totalItem

      }
     })
   
  }
  constructor(private ticketservice:TicketService, private router:Router){
  }
  close(tId:string,dept:string){
    this.status="closed"
    this. ticketId=tId
  this.ticketservice.updateStatus(this.status,this.ticketId).subscribe({
    next:closed =>{
      console.log(closed);
      this.department=dept;
  this.router.navigate(['close',this.ticketId,this.department])
      
      
    }
  })
  
  }
  back(){
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
   
  this. getResolvedList(0);
  }
  

}
