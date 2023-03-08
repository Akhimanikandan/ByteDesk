import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient,HttpHandler } from '@angular/common/http'
import { UserticketlistComponent } from './userticketlist.component';

describe('UserticketlistComponent', () => {
  let component: UserticketlistComponent;
  let fixture: ComponentFixture<UserticketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserticketlistComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserticketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
