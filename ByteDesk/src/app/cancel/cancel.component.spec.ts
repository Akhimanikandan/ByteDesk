import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelComponent } from './cancel.component';

describe('CancelComponent', () => {
  let cancelcomponent: CancelComponent;
  let fixture: ComponentFixture<CancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelComponent);
    cancelcomponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cancelcomponent).toBeTruthy();
  });
});
