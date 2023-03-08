import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {
  tid!: string|null;
 dept!: string | null;
  constructor(private route:ActivatedRoute, private router:Router) { }
ok(){
  this.router.navigate(['resolvedticketlist'])
}
  ngOnInit(): void {
    this.tid= this.route.snapshot.paramMap.get("ticketId") 
    this.dept=this.route.snapshot.paramMap.get("department") 

  }

}
