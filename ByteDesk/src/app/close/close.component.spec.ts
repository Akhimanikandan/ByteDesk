import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseComponent } from './close.component';

describe('CloseComponent', () => {
  let component: CloseComponent;
  let fixture: ComponentFixture<CloseComponent>;
  let mockActivatedRoute, mockRouter: { navigate: any; };

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValues('123', 'IT')
        }
      }
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      declarations: [ CloseComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set tid and dept properties from snapshot', () => {
    expect(component.tid).toBe('123');
    expect(component.dept).toBe('IT');
  });

  it('should navigate to resolvedticketlist on ok()', () => {
    component.ok();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['resolvedticketlist']);
  });
});