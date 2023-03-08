import { ComponentFixture, TestBed } from '@angular/core/testing';

import{ResolvedticketlistComponent } from './resolevdticketlist.component';

describe('CancelledticketlistComponent', () => {
  let component: ResolvedticketlistComponent;
  let fixture: ComponentFixture<ResolvedticketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedticketlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvedticketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
