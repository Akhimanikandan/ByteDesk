import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2'


import { Ticketinfo } from '../models/ticketinfo';
import { TicketService } from '../service/ticket.service';


@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent {

  constructor(private form: FormBuilder, private ticketservice: TicketService, private router: Router) { }
  ticketobj: Ticketinfo = new Ticketinfo();

  back() {
    this.router.navigate(['home'])
  }


  submit() {
  Swal.fire("Submitted",'You successfully submitted','success')
    this.ticketobj.department
    this.ticketobj.ticketSummary
    this.ticketobj.description
    this.ticketobj.userName = sessionStorage.getItem("userName")
    this.ticketobj.ticketId = "TID" + new Date().getTime()
    this.ticketservice.RaiseTicket(this.ticketobj).subscribe(() => {
    })
console.log(this.ticketobj);

  }
  ticketform: FormGroup = this.form.group(
    {


      department: ['', [Validators.required]],
      ticketsummary: ['', [Validators.required],Validators.maxLength(2)],
      ticketdescription: ['', [Validators.required],Validators.maxLength(250)],

    }
  )

  get ticketsummary() { return this.ticketform.get('ticketsummary') }
  get ticketdescription() { return this.ticketform.get('ticketdescription') }


}


