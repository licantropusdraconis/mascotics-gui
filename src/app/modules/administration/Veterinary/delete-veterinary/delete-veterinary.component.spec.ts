import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVeterinaryComponent } from './delete-veterinary.component';

describe('DeleteVeterinaryComponent', () => {
  let component: DeleteVeterinaryComponent;
  let fixture: ComponentFixture<DeleteVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVeterinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
