import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule ,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { Info } from '../models/info';
import { InfoService } from './info.service';

describe('InfoService', () => {
  let service: InfoService;

let httpMock:HttpTestingController;

 let httpClientSpy:jasmine.SpyObj<HttpClient>
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[InfoService]
    });
   service=TestBed.inject(InfoService)
   httpClientSpy =jasmine.createSpyObj('HttpClient',['post'])

  
   const expectedData ={
    ticketId: "TID1674554669237",
      adminInfo: "admin information",
      userInfo: "user Information",
      id: 1
   }
  
   httpClientSpy.post.and.returnValue(of(expectedData));
   service=new InfoService(httpClientSpy)
  });

  it('should post the info',()=>{
     const info={
      id: 1,
    adminInfo:"admin information",
    ticketId:"TID1674554669237",
    userInfo:"user Information"
     }
     const expectedData ={
      ticketId: "TID1674554669237",
        adminInfo: "admin information",
        userInfo: "user Information",
        id: 1
     }
     
     service.getInfo(info).subscribe(data =>{
      expect(data).toEqual(expectedData)
     
     })
     expect(httpClientSpy.post.calls.count()).toBe(1);
  })
  
  
});
describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InfoService],
    });

    service = TestBed.inject(InfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getUserInfo', () => {
    it('should return an Observable of Info[]', () => {
      const ticketId = '12345';
      const mockResponse: Info[] = [
        {
          ticketId: "TID1674554669237",
            adminInfo: "admin information",
            userInfo: "user Information",
            id: 1
         }
      ];

      service.getUserInfo(ticketId).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.infoUrl}/userInfo/${ticketId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });
});