import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user';


describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('UserLogin', () => {
    it('should make a POST request to the API and return an Observable', () => {
      const user: User = {
        userName: 'test', 
        password: 'password',
        token: '',
        firstName: '',
        lastName: ''
      };
      const dummyResponse = { token: 'xyz123' };

      service.UserLogin(user).subscribe((response: any) => {
        expect(response).toEqual(dummyResponse);
      });

      const req = httpMock.expectOne('http://localhost:8081/user/login');
      expect(req.request.method).toBe('POST');
      req.flush(dummyResponse);
    });
  });

  describe('IsAuthenticate', () => {
    it('should return true if the user is authenticated', () => {
      sessionStorage.setItem('authenticated', 'true');
      expect(service.IsAuthenticate()).toBeTrue();
    });

    it('should return false if the user is not authenticated', () => {
      sessionStorage.removeItem('authenticated');
      expect(service.IsAuthenticate()).toBeFalse();
    });
  });
});