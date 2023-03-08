import { Component, OnInit } from '@angular/core';
import { Ticketinfo } from '../models/ticketinfo';
import { TicketService } from '../service/ticket.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reassignedlist',
  templateUrl: './reassignedlist.component.html',
  styleUrls: ['./reassignedlist.component.css']
})
export class ReassignedlistComponent implements OnInit {
  userId: string | null=sessionStorage.getItem("userName");
  status:string | null="reassign";
  ticketlist:Ticketinfo[]=[];
  department!: string;
  resolution!: string;
  reassignList:any;
  list!:Ticketinfo[];
  currentPage!: number;
  totalItem: any;
  totalPage: any;
  count!: number;
  content!:Ticketinfo[]
  private getReassignList(pageNumber:number){
    this.ticketservice.getTicketList(pageNumber,this.userId, this.status).subscribe({
      next:resolved =>{
        this.reassignList=resolved;
        this.content=this.reassignList.list;
        this.count=this.reassignList.totalItem
        
      }
    })
  }
  onTableDataChange(event: number) {
    this.getReassignList(event - 1);
    this.currentPage = event;
  }

constructor(private ticketservice:TicketService, private router:Router){}
id!:string;
update(ticketId:string,dept:string,resolution:string){
  this.id=ticketId 
  this.department=dept
 this. resolution=resolution
 this.router.navigate(['update',ticketId,this.department,resolution])
  console.log(ticketId);
  

}
back(){
  this.router.navigate(['home'])
}
  ngOnInit(): void {
    this.getReassignList(0)
  }

  
}
