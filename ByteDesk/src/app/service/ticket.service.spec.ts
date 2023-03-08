
import { TestBed , inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { TicketService } from './ticket.service';


describe('TicketService',()=>{
let service:TicketService
let userName="EMP001"
let status:"processing"
let pageNumber=0;
let httpMock:HttpTestingController

  beforeEach(() =>{
    TestBed.configureTestingModule({ // creating a new module with testbed
      imports:[HttpClientTestingModule],
      providers:[TicketService] 
  
    })
    service=TestBed.inject(TicketService)
    httpMock=TestBed.inject(HttpTestingController)
    
  })
  afterEach(() =>{
    httpMock.verify();
  })
  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('Should get the list of tickets via GET',() =>{
    const ticket={
    ticketId:"TID1674554669237",
    department:"Learning",
    status:"processing",
    ticketSummary:"hardware issues",
    description:"please provide proper waste management  facilty",
    userName:"EMP001"  ,
    resolution:"pending"

    }

service.getTicketList(pageNumber,userName,status).subscribe(ticketlist =>{
 
  expect(ticketlist).toEqual(ticket)
})
const request =httpMock.expectOne(`${service.ticketUrl}/ticketlist/${pageNumber}/5/${userName}/${status}`)
expect(request.request.method).toBe('GET')
request.flush(ticket)
  })

 })

 describe('TicketService', () => {
  let service: TicketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketService],
    });

    service = TestBed.inject(TicketService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('updateStatus', () => {
    it('should make a PUT request with the correct status and ticketId', () => {
      const ticketId = '12345';
      const status = 'in progress';

      service.updateStatus(status, ticketId).subscribe();

      const req = httpMock.expectOne(`${service.ticketUrl}/update/?status=${status}&ticketId=${ticketId}`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBeNull();
    });
  });
});