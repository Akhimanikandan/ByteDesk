import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignedlistComponent } from './reassignedlist.component';

describe('ReassignedlistComponent', () => {
  let component: ReassignedlistComponent;
  let fixture: ComponentFixture<ReassignedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReassignedlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReassignedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
