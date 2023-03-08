import { Component, OnInit } from '@angular/core';
import { Ticketinfo } from '../models/ticketinfo';

import { Router } from '@angular/router';
import { Info } from '../models/info';
import { InfoService } from '../service/info.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updatelist: Ticketinfo[] = [];
  userId: string | null = sessionStorage.getItem("userName");
  status: string | null = "reassign";
  value!: string
  tId!: string;
  info: Info = new Info();
  ticketInfo: Ticketinfo = new Ticketinfo();
  infoList: Info[] = [];

  idList!: string
  department!: string | null;
  resolution!: string | null;


  displayChat() {
    this.infoservice.getUserInfo(this.idList).subscribe({
      next: infolist => {
        this.infoList = infolist
        console.log(this.infoList);



      }
    })

  }


  constructor(private router: ActivatedRoute, private infoservice: InfoService, private route: Router) { }
  submit(tId: string) {
    this.info.ticketId = tId
    this.info.userInfo = this.value
    this.infoservice.getInfo(this.info).subscribe({
      next: postinfo => {


      }

    })
 
    setTimeout(() => {
      this.displayChat()
      this.value=''},300);
  }
  back() {
    this.route.navigate(['reassignlist'])
  }

  ngOnInit(): void {
    this.resolution = this.router.snapshot.paramMap.get("resolution")
    this.department = this.router.snapshot.paramMap.get("department")
    this.idList = this.router.snapshot.paramMap.get("ticketId") || ''
    console.log(this.idList);
    this.displayChat()


  }



}
