import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSessionComponent } from './finish-session.component';

describe('FinishSessionComponent', () => {
  let component: FinishSessionComponent;
  let fixture: ComponentFixture<FinishSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
