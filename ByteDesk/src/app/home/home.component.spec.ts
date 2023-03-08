import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('raise', () => {
    it('should navigate to raiseticket', () => {
      component.raise();
      expect(router.navigate).toHaveBeenCalledWith(['raiseticket']);
    });
  });

  describe('MyTicket', () => {
    it('should navigate to userticketlist', () => {
      component.MyTicket();
      expect(router.navigate).toHaveBeenCalledWith(['userticketlist']);
    });
  });

  describe('resolvedTicket', () => {
    it('should navigate to resolvedticketlist', () => {
      component.resolvedTicket();
      expect(router.navigate).toHaveBeenCalledWith(['resolvedticketlist']);
    });
  });

  describe('reassign', () => {
    it('should navigate to reassignlist', () => {
      component.reassign();
      expect(router.navigate).toHaveBeenCalledWith(['reassignlist']);
    });
  });
});