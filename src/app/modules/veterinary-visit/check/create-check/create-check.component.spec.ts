import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCheckComponent } from './create-check.component';

describe('CreateCheckComponent', () => {
  let component: CreateCheckComponent;
  let fixture: ComponentFixture<CreateCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
